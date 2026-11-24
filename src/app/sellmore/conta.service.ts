import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize, map } from 'rxjs/operators';
import { LoaderService } from '../shared/loader/loader.service';
import { API } from '../app.api';

export interface ResultadoDoPeriodo {
	indicacoes: number;
	atendidos: number;
	vendas: number;
	conversao: number;
}

export interface ResultadoDoMes {
	mes: string;
	indicacoes: number;
	vendas: number;
}

export interface Resultados {
	clientes: number;
	semana: ResultadoDoPeriodo;
	mes: ResultadoDoPeriodo;
	total: ResultadoDoPeriodo;
	historico: ResultadoDoMes[];
}

export interface LinkDeIndicacao {
	codigo: string;
	link: string;
}

@Injectable({
	providedIn: 'root',
})
export class ContaService {
	constructor(private http: HttpClient, private loaderService: LoaderService) {}

	/** O interceptor liga o indicador de carregamento a cada pedido; aqui ele é desligado ao terminar, com ou sem erro. */
	private aoTerminar<T>(pedido: Observable<T>): Observable<T> {
		return pedido.pipe(finalize(() => this.loaderService.isLoad(false)));
	}

	resultados(): Observable<Resultados> {
		return this.aoTerminar(this.http.get<any>(`${API}/resultados`).pipe(map((resposta) => resposta.dados)));
	}

	gerarLinkDeIndicacao(idDoCliente: number): Observable<LinkDeIndicacao> {
		const pedido = this.http.post<any>(`${API}/link-indicacao/customers/${idDoCliente}`, {});

		return this.aoTerminar(pedido.pipe(map((resposta) => resposta.dados)));
	}

	minhaConta(): Observable<any> {
		return this.aoTerminar(this.http.get<any>(`${API}/auth/me`));
	}

	exportarClientes(): Observable<Blob> {
		return this.aoTerminar(this.http.get(`${API}/conta/exportar-clientes`, { responseType: 'blob' }));
	}

	alterarLembrete(receber: boolean): Observable<any> {
		return this.aoTerminar(this.http.put<any>(`${API}/conta/lembrete`, { bo_lembrete_email: receber }));
	}

	trocarSenha(form: { currentPassword: string; newPassword: string; confirmPassword: string }): Observable<any> {
		return this.aoTerminar(this.http.put<any>(`${API}/auth/changePassword`, form));
	}

	excluirConta(password: string): Observable<any> {
		return this.aoTerminar(this.http.delete<any>(`${API}/conta`, { body: { password } }));
	}
}
