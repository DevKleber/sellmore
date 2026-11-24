import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConviteDeIndicacao, Indicado, IndicarService } from './indicar.service';
import { LoaderService } from '../shared/loader/loader.service';
import { lerContatosDoVCard } from './leitor-de-vcard';

const LINHAS_INICIAIS = 3;
const DIGITOS_MINIMOS_DO_TELEFONE = 10;
const TAMANHO_MINIMO_DO_NOME = 2;

type Etapa = 'carregando' | 'formulario' | 'enviado' | 'indisponivel';

/**
 * Página pública: o cliente de um vendedor informa, sem login, as pessoas que indica.
 */
@Component({
	selector: 'app-indicar',
	templateUrl: './indicar.component.html',
	changeDetection: ChangeDetectionStrategy.Eager,
	standalone: false,
})
export class IndicarComponent implements OnInit {
	etapa: Etapa = 'carregando';
	convite: ConviteDeIndicacao | null = null;
	indicados: Indicado[] = [];
	erro = '';
	avisoDaImportacao = '';
	enviando = false;

	private codigo = '';

	constructor(
		private rota: ActivatedRoute,
		private indicarService: IndicarService,
		private loaderService: LoaderService
	) {}

	ngOnInit() {
		this.codigo = this.rota.snapshot.paramMap.get('codigo');
		this.indicarService.convite(this.codigo).subscribe({
			next: (convite) => this.mostrarFormulario(convite),
			error: () => this.encerrar('indisponivel'),
		});
	}

	private mostrarFormulario(convite: ConviteDeIndicacao) {
		this.convite = convite;
		this.indicados = Array.from({ length: LINHAS_INICIAIS }, () => this.linhaVazia());
		this.encerrar('formulario');
	}

	private encerrar(etapa: Etapa) {
		this.etapa = etapa;
		this.enviando = false;
		this.loaderService.isLoad(false);
	}

	private linhaVazia(): Indicado {
		return { nome: '', telefone: '' };
	}

	get podeAdicionar(): boolean {
		return this.indicados.length < (this.convite?.maximoPorEnvio ?? 0);
	}

	adicionarLinha() {
		this.indicados.push(this.linhaVazia());
	}

	removerLinha(posicao: number) {
		this.indicados.splice(posicao, 1);
	}

	/** Preenche a lista com os contatos do arquivo escolhido; nada é enviado antes de a pessoa conferir. */
	importarArquivo(evento: Event) {
		const campo = evento.target as HTMLInputElement;
		const arquivo = campo.files?.[0];
		if (!arquivo) {
			return;
		}

		arquivo.text().then((conteudo) => this.receberContatosDoArquivo(lerContatosDoVCard(conteudo)));
		campo.value = '';
	}

	private receberContatosDoArquivo(contatos: Indicado[]) {
		this.erro = '';
		this.avisoDaImportacao = '';
		if (!contatos.length) {
			this.erro = 'Não encontramos contatos nesse arquivo. Confira se é o arquivo de contatos (.vcf) baixado do WhatsApp.';
			return;
		}

		const limite = this.convite?.maximoPorEnvio ?? contatos.length;
		this.indicados = [...this.preenchidos, ...contatos].slice(0, limite);
		this.avisoDaImportacao = this.textoDoAviso(contatos.length, limite);
	}

	private textoDoAviso(encontrados: number, limite: number): string {
		if (encontrados > limite) {
			return `O arquivo tem ${encontrados} contatos; trouxemos os primeiros ${limite}. Envie estes e depois importe de novo para mandar os demais.`;
		}

		return `${encontrados} contatos encontrados. Confira a lista, tire quem não quiser indicar e envie.`;
	}

	get preenchidos(): Indicado[] {
		return this.indicados.filter((indicado) => this.estaPreenchido(indicado));
	}

	private estaPreenchido(indicado: Indicado): boolean {
		const digitos = indicado.telefone.replace(/\D/g, '');

		return indicado.nome.trim().length >= TAMANHO_MINIMO_DO_NOME && digitos.length >= DIGITOS_MINIMOS_DO_TELEFONE;
	}

	enviar() {
		this.erro = '';
		this.enviando = true;
		this.indicarService.enviar(this.codigo, this.preenchidos).subscribe({
			next: () => this.encerrar('enviado'),
			error: (falha) => this.mostrarErro(falha),
		});
	}

	private mostrarErro(falha: any) {
		this.erro = falha?.error?.response ?? 'Não foi possível enviar agora. Tente de novo em instantes.';
		this.encerrar('formulario');
	}

	indicarMais() {
		this.avisoDaImportacao = '';
		this.mostrarFormulario(this.convite);
	}
}
