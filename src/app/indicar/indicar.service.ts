import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { API } from '../app.api';

export interface ConviteDeIndicacao {
	vendedor: string;
	cliente: string;
	maximoPorEnvio: number;
}

export interface Indicado {
	nome: string;
	telefone: string;
}

@Injectable({
	providedIn: 'root',
})
export class IndicarService {
	constructor(private http: HttpClient) {}

	convite(codigo: string): Observable<ConviteDeIndicacao> {
		return this.http.get<any>(`${API}/indicacao/${codigo}`).pipe(map((resposta) => resposta.dados));
	}

	enviar(codigo: string, indicados: Indicado[]): Observable<any> {
		return this.http.post<any>(`${API}/indicacao/${codigo}`, { indicados });
	}
}
