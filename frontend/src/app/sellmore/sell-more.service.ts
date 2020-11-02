import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

	getCustomers(search?: string): Observable<any[]> {
		return this.http.get<any[]>(`${API}/customers`);
	}
	changeStatus(form, id) {
		return this.http.put(`${API}/status/customers/${id}`, form);
	}

	save(form) {
		return this.http.post<any>(`${API}/customers`, form);
	}

	inativar(id: string) {
		return this.http.delete(`${API}/premio/${id}`);
	}
}
