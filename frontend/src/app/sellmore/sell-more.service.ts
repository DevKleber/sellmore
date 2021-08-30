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

	getVersion(): Observable<any> {
		return this.http.get<any>(`${API}/currentVersion`);
	}
	getCalenda(search?: string): Observable<any[]> {
		return this.http.get<any[]>(`${API}/calendar`);
	}
	saveCalendar(form) {
		return this.http.post<any>(`${API}/calendar`, form);
	}
	deleteCalendar(id) {
		return this.http.delete<any>(`${API}/calendar/${id}`);
	}
	alterarHorarioEvento(event) {
		return this.http.put<any>(`${API}/calendar/${event.event.id}`, event);
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
	getCustomers(
		boShowProblemasCartao: boolean,
		boShowLigarDepois: boolean,
		boShowNaotemInteresse: boolean,
		boShowComprou: boolean,
		boShowAberto: boolean
	): Observable<any[]> {
		let params = new HttpParams();
		params = params.append(
			'boShowProblemasCartao',
			String(boShowProblemasCartao)
		);
		params = params.append('boShowLigarDepois', String(boShowLigarDepois));
		params = params.append(
			'boShowNaotemInteresse',
			String(boShowNaotemInteresse)
		);
		params = params.append('boShowComprou', String(boShowComprou));
		params = params.append('boShowAberto', String(boShowAberto));

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
