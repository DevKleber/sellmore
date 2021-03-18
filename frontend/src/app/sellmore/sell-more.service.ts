import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { API } from '../app.api';

@Injectable({
	providedIn: 'root',
})
export class SellMoreService {
	lastUrl: string;
	mostrarMenu = new EventEmitter<boolean>();

	constructor(private http: HttpClient, private router: Router) {}

	getCalenda(search?: string): Observable<any[]> {
		return this.http.get<any[]>(`${API}/calendar`);
	}
	saveCalendar(form) {
		return this.http.post<any>(`${API}/calendar`, form);
	}

	customersFind(search?: string): Observable<any[]> {
		let params: HttpParams = undefined;
		if (search) {
			params = new HttpParams().set('q', search);
		}
		return this.http.get<any[]>(`${API}/search`, { params: params });
	}
	getCustomersLd(search?: string): Observable<any[]> {
		return this.http.get<any[]>(`${API}/getCustomersLd`);
	}
	getCustomers(showNaotemInteresse: string = 'true'): Observable<any[]> {
		let params: HttpParams = undefined;
		if (showNaotemInteresse) {
			params = new HttpParams().set(
				'showNaotemInteresse',
				showNaotemInteresse
			);
		}

		return this.http.get<any[]>(`${API}/customers`, { params: params });
	}
	getStrategy(): Observable<any[]> {
		return this.http.get<any[]>(`${API}/strategy`);
	}
	getAllParents(id): Observable<any[]> {
		return this.http.get<any[]>(`${API}/parents/customers/${id}`);
	}
	insertUpdateStrategy(form): Observable<any[]> {
		return this.http.put<any[]>(`${API}/strategy`, form);
	}
	changeStatus(form, id) {
		return this.http.put(`${API}/status/customers/${id}`, form);
	}
	preference(form) {
		return this.http.post(`${API}/preference`, form);
	}

	bug(form) {
		return this.http.post<any>(`${API}/issue`, form);
	}
	save(form) {
		return this.http.post<any>(`${API}/customers`, form);
	}
	update(form, id) {
		return this.http.put<any>(`${API}/customers/${id}`, form);
	}

	inativar(id: string) {
		return this.http.delete(`${API}/customers/${id}`);
	}
	ativar(id) {
		return this.http.put(`${API}/customersActivate/${id}`, []);
	}

	file(form, id) {
		return this.http.post<any>(
			`${API}/import-contact/customers/${id}`,
			form
		);
	}
}
