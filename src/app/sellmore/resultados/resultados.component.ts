import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ContaService, ResultadoDoMes, ResultadoDoPeriodo, Resultados } from '../conta.service';

const NOMES_DOS_MESES = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];
const ALTURA_TOTAL_DA_BARRA = 100;

interface Periodo {
	chave: 'semana' | 'mes' | 'total';
	rotulo: string;
}

@Component({
	selector: 'app-resultados',
	templateUrl: './resultados.component.html',
	changeDetection: ChangeDetectionStrategy.Eager,
	standalone: false,
})
export class ResultadosComponent {
	readonly periodos: Periodo[] = [
		{ chave: 'semana', rotulo: 'Esta semana' },
		{ chave: 'mes', rotulo: 'Este mês' },
		{ chave: 'total', rotulo: 'Desde o início' },
	];

	periodoAtivo: Periodo['chave'] = 'mes';
	resultados: Resultados | null = null;

	constructor(private contaService: ContaService) {}

	abrir() {
		this.contaService.resultados().subscribe((resultados) => (this.resultados = resultados));
	}

	get doPeriodo(): ResultadoDoPeriodo | null {
		return this.resultados ? this.resultados[this.periodoAtivo] : null;
	}

	nomeDoMes(mes: ResultadoDoMes): string {
		const numeroDoMes = Number(mes.mes.split('-')[1]);

		return NOMES_DOS_MESES[numeroDoMes - 1];
	}

	/** Altura da barra em relação ao maior valor do histórico. */
	altura(valor: number): number {
		const maior = Math.max(...this.resultados.historico.map((mes) => Math.max(mes.indicacoes, mes.vendas)));
		if (maior === 0) {
			return 0;
		}

		return Math.round((valor * ALTURA_TOTAL_DA_BARRA) / maior);
	}
}
