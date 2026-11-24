import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { ContaService } from '../conta.service';
import { LoginService } from '../../security/login/login.service';
import { NotificationService } from '../../shared/messages/notification.service';

const NOME_DO_ARQUIVO = 'clientes-wiseller.csv';
const TAMANHO_MINIMO_DA_SENHA = 6;

@Component({
	selector: 'app-minha-conta',
	templateUrl: './minha-conta.component.html',
	changeDetection: ChangeDetectionStrategy.Eager,
	standalone: false,
})
export class MinhaContaComponent {
	conta: any = {};
	receberLembrete = true;
	formSenha: UntypedFormGroup;
	senhaParaExcluir = '';

	constructor(
		private contaService: ContaService,
		private loginService: LoginService,
		private notificationService: NotificationService,
		formBuilder: UntypedFormBuilder
	) {
		this.formSenha = formBuilder.group({
			currentPassword: ['', Validators.required],
			newPassword: ['', [Validators.required, Validators.minLength(TAMANHO_MINIMO_DA_SENHA)]],
			confirmPassword: ['', Validators.required],
		});
	}

	abrir() {
		this.senhaParaExcluir = '';
		this.formSenha.reset();
		this.contaService.minhaConta().subscribe((conta) => {
			this.conta = conta;
			this.receberLembrete = conta.bo_lembrete_email !== false;
		});
	}

	alterarLembrete() {
		this.contaService.alterarLembrete(this.receberLembrete).subscribe();
	}

	exportar() {
		this.contaService.exportarClientes().subscribe((arquivo) => {
			this.baixar(arquivo);
		});
	}

	private baixar(arquivo: Blob) {
		const endereco = URL.createObjectURL(arquivo);
		const link = document.createElement('a');
		link.href = endereco;
		link.download = NOME_DO_ARQUIVO;
		link.click();
		URL.revokeObjectURL(endereco);
	}

	trocarSenha() {
		this.contaService.trocarSenha(this.formSenha.value).subscribe((resposta) => {
			localStorage.setItem('dG9rZW5fbWVtb3JpemU=', resposta.access_token);
			this.formSenha.reset();
			this.notificationService.notifySweet('Senha alterada');
		});
	}

	confirmarExclusao() {
		Swal.fire({
			title: 'Excluir a conta?',
			text: 'Todos os seus leads, referidos, agenda e roteiro serão apagados. Não é possível desfazer.',
			icon: 'warning',
			showCancelButton: true,
			confirmButtonText: 'Excluir tudo',
			cancelButtonText: 'Cancelar',
		}).then((resultado) => {
			if (resultado.isConfirmed) {
				this.excluir();
			}
		});
	}

	private excluir() {
		this.contaService.excluirConta(this.senhaParaExcluir).subscribe(() => {
			this.loginService.logoutForce();
			window.location.reload();
		});
	}
}
