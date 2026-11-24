import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { ContaService, Resultados } from '../conta.service';

const CHAVE_DE_CONCLUSAO = 'wiseller_primeiros_passos_concluidos';

interface Passo {
	titulo: string;
	descricao: string;
	feito: boolean;
}

/**
 * Guia de quem acabou de criar a conta. Some sozinho quando os três passos são concluídos.
 */
@Component({
	selector: 'app-primeiros-passos',
	templateUrl: './primeiros-passos.component.html',
	changeDetection: ChangeDetectionStrategy.Eager,
	standalone: false,
})
export class PrimeirosPassosComponent implements OnChanges {
	/** Muda a cada recarga da listagem, para o progresso acompanhar o que o vendedor faz. */
	@Input() versaoDaLista = 0;
	@Output() novoLead = new EventEmitter<void>();

	passos: Passo[] = [];
	visivel = false;

	constructor(private contaService: ContaService) {}

	ngOnChanges() {
		const listaAindaNaoCarregou = this.versaoDaLista === 0;
		if (listaAindaNaoCarregou || this.jaConcluiu()) {
			return;
		}

		this.contaService.resultados().subscribe((resultados) => this.atualizar(resultados));
	}

	private jaConcluiu(): boolean {
		return localStorage.getItem(CHAVE_DE_CONCLUSAO) !== null;
	}

	private atualizar(resultados: Resultados) {
		this.passos = [
			{
				titulo: 'Cadastre seu primeiro lead',
				descricao: 'O lead é o cliente que você já atende e que pode indicar outras pessoas.',
				feito: resultados.clientes > 0,
			},
			{
				titulo: 'Adicione quem ele indicou',
				descricao:
					'No card do lead, use "Adicionar referido", importe os contatos do WhatsApp ou envie o link de indicação para ele mesmo preencher.',
				feito: resultados.total.indicacoes > 0,
			},
			{
				titulo: 'Registre o resultado da primeira ligação',
				descricao: 'Marque se comprou, se é para ligar depois ou se não tem interesse. Assim nenhum contato fica esquecido.',
				feito: resultados.total.atendidos > 0,
			},
		];

		this.visivel = this.passos.some((passo) => !passo.feito);
		if (!this.visivel) {
			localStorage.setItem(CHAVE_DE_CONCLUSAO, '1');
		}
	}

	get semNenhumPasso(): boolean {
		return this.passos.every((passo) => !passo.feito);
	}

	dispensar() {
		localStorage.setItem(CHAVE_DE_CONCLUSAO, '1');
		this.visivel = false;
	}
}
