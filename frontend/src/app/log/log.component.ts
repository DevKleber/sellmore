import { Component, OnInit } from '@angular/core';
import { Log } from './log.model';
import { LogService } from './log.service';
import { LoaderService } from '../shared/loader/loader.service';

@Component({
	selector: 'app-log',
	templateUrl: './log.component.html',
	styleUrls: ['./log.component.css'],
})
export class LogComponent implements OnInit {
	logs: Log[];

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
			this.loaderService.isLoad(false);
		});
	}
}
