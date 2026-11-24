import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ContaService } from '../conta.service';

const ENDERECO_DO_WHATSAPP = 'https://api.whatsapp.com/send/';
const TEMPO_DO_AVISO_DE_COPIA = 2500;
/** O endereço usa o domínio em que o vendedor está, para o link valer em qualquer ambiente. */
const ROTA_DA_PAGINA_PUBLICA = '/indicar';

@Component({
	selector: 'app-pedir-indicacao',
	templateUrl: './pedir-indicacao.component.html',
	changeDetection: ChangeDetectionStrategy.Eager,
	standalone: false,
})
export class PedirIndicacaoComponent {
	cliente: any = {};
	link = '';
	mensagem = '';
	copiado = false;

	constructor(private contaService: ContaService) {}

	abrir(cliente: any) {
		this.cliente = cliente;
		this.link = '';
		this.copiado = false;

		this.contaService.gerarLinkDeIndicacao(cliente.id).subscribe((link) => {
			this.link = `${window.location.origin}${ROTA_DA_PAGINA_PUBLICA}/${link.codigo}`;
			this.mensagem = this.mensagemPadrao(cliente.name, this.link);
		});
	}

	private mensagemPadrao(nome: string, link: string): string {
		const primeiroNome = String(nome ?? '').trim().split(' ')[0];

		return `Oi, ${primeiroNome}! Você conhece alguém que também pode gostar? É só colocar o nome e o telefone neste link, leva um minuto: ${link}`;
	}

	get telefonesComWhatsapp(): any[] {
		return (this.cliente?.phones ?? []).filter((telefone) => telefone.bo_whatsapp);
	}

	enderecoDoWhatsapp(telefone: any): string {
		const destino = `${telefone.country_code}${telefone.phone}`;

		return `${ENDERECO_DO_WHATSAPP}?phone=${destino}&text=${encodeURIComponent(this.mensagem)}`;
	}

	copiar(texto: string) {
		navigator.clipboard.writeText(texto).then(() => {
			this.copiado = true;
			setTimeout(() => (this.copiado = false), TEMPO_DO_AVISO_DE_COPIA);
		});
	}
}
