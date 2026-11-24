import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { Log } from './log.model';
import { API } from '../app.api';

@Injectable({
	providedIn: 'root',
})
export class LogService {
	constructor(private http: HttpClient) {}

	getLogs(search?: string): Observable<Log[]> {
		return this.http.get<Log[]>(`${API}/access_log`);
	}

	metricasDeUso(): Observable<any> {
		return this.http.get<any>(`${API}/metricas-de-uso`).pipe(map((resposta) => resposta.dados));
	}

	save(form) {
		return this.http
			.post<any>(`${API}/access_log`, form)
			.subscribe((data) => {});
	}
	ip() {
		return this.http.get<any>('https://api.ipify.org');
	}
}
