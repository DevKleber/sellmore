import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Log } from './log.model';
import { LogService } from './log.service';
import { LoaderService } from '../shared/loader/loader.service';

const PERCENTUAL_TOTAL = 100;

@Component({
	selector: 'app-log',
	templateUrl: './log.component.html',
	styleUrls: ['./log.component.css'],
	changeDetection: ChangeDetectionStrategy.Eager,
	standalone: false
})
export class LogComponent implements OnInit {
	logs: Log[];
	logDay: Log[];
	totalCustomerActive: any[] = [];
	totalCustomerSeller: any[] = [];
	totalAccessByUser: any[] = [];
	totalDisplay: any[] = [];
	totalBrowser: any[] = [];
	totalDevice: any[] = [];
	totalLanguage: any[] = [];
	metricas: any = null;

	constructor(
		private logService: LogService,
		private loaderService: LoaderService
	) {}

	ngOnInit() {
		this.getLogs();
	}

	getLogs() {
		this.logService.getLogs().subscribe((Log) => {
			this.logs = Log['dados'];
			this.logDay = Log['logDay'];
			this.totalCustomerActive = Log['totalCustomerActive'];
			this.totalCustomerSeller = Log['totalCustomerSeller'];
			this.totalAccessByUser = Log['totalAccessByUser'];
			this.totalDisplay = Log['totalDisplay'];
			this.totalBrowser = Log['totalBrowser'];
			this.totalDevice = Log['totalDevice'];
			this.totalLanguage = Log['totalLanguage'];

			this.loaderService.isLoad(false);
			this.carregarMetricas();
		});
	}

	/** So e pedido depois do relatorio de acessos, que ja recusa quem nao e administrador. */
	private carregarMetricas() {
		this.logService.metricasDeUso().subscribe((metricas) => {
			this.metricas = metricas;
			this.loaderService.isLoad(false);
		});
	}

	/** Altura da barra do dia em relacao ao dia com mais acessos. */
	alturaDoDia(contas: number): number {
		const maior = Math.max(...this.metricas.acessosPorDia.map((dia) => dia.contas));

		return this.percentual(contas, maior);
	}

	percentual(parte: number, todo: number): number {
		if (!todo) {
			return 0;
		}

		return Math.round((parte * PERCENTUAL_TOTAL) / todo);
	}
}
