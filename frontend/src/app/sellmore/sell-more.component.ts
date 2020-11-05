import {
	Component,
	OnInit,
	isDevMode,
	ElementRef,
	ViewChild,
} from '@angular/core';
import { SellMoreService } from './sell-more.service';
import { LoginService } from '../security/login/login.service';
import { NotificationService } from '../shared/messages/notification.service';
import { Helper } from '../helper';
import { API_SITE_PATH_IMG } from '../app.api';
import Swal from 'sweetalert2';

import {
	FormBuilder,
	FormControl,
	FormGroup,
	Validators,
} from '@angular/forms';
import { LoaderService } from '../shared/loader/loader.service';

@Component({
	selector: 'app-sell-more',
	templateUrl: './sell-more.component.html',
	styleUrls: ['./sell-more.component.css'],
})
export class SellMoreComponent implements OnInit {
	customers: any[] = [];

	status: any[] = [
		{ id: 'pc', status: 'Problemas com cartão' },
		{ id: 'ld', status: 'Ligar depois' },
		{ id: 'n', status: 'Não tem interesse' },
		{ id: 'c', status: 'Comprou' },
	];
	customersImported: any[] = [];
	person: any = {};
	parent: any = {};
	parents: any[] = [];
	strategy: any = {};

	path: string = API_SITE_PATH_IMG;
	isDevMode: boolean = isDevMode();
	form: FormGroup;
	formScript: FormGroup;
	formCategory: FormGroup;
	img: any = 'assets/img/file/search.svg';
	selectedFile: File;

	constructor(
		private sellMoreService: SellMoreService,
		private loginService: LoginService,
		private formBuilder: FormBuilder,
		public helper: Helper,
		public notificationService: NotificationService,
		public loaderService: LoaderService
	) {}

	ngOnInit() {
		this.getCustomers();
		this.getStrategy();
		// this.getCategories();
		this.initialForms();
	}

	initialForms() {
		this.form = this.formBuilder.group({
			id: this.formBuilder.control(null),
			name: this.formBuilder.control('', [Validators.required]),
			phone: this.formBuilder.control('', [Validators.required]),
			address: this.formBuilder.control(''),
			status: this.formBuilder.control(''),
			observation: this.formBuilder.control(''),
			id_parent: this.formBuilder.control(null),
		});
		this.formScript = this.formBuilder.group({
			strategy: this.formBuilder.control('', [Validators.required]),
		});
	}

	getCustomers() {
		this.loaderService.isLoad(true);
		this.sellMoreService.getCustomers().subscribe((res) => {
			this.loaderService.isLoad(false);
			this.customers = res['dados'];
		});
	}
	getStrategy() {
		this.loaderService.isLoad(true);
		this.sellMoreService.getStrategy().subscribe((res) => {
			this.loaderService.isLoad(false);
			this.strategy = res['dados'];
			this.strategy.staps = res['nl2br'];
			this.formScript.controls['strategy'].setValue(
				this.strategy.strategy
			);
		});
	}
	updateOpenForm(person) {
		this.form.controls['id'].setValue(person.id);
		this.form.controls['name'].setValue(person.name);
		this.form.controls['phone'].setValue(person.phone);
		this.form.controls['address'].setValue(person.address);
		this.form.controls['status'].setValue(person.status);
		this.form.controls['observation'].setValue(person.observation);
		this.form.controls['id_parent'].setValue(person.id_parent);
	}

	update(form) {
		this.loaderService.isLoad(true);
		this.sellMoreService.save(form).subscribe((data) => {
			this.notificationService.notifySweet('Salvo com sucesso!');
			this.clearForm();
			this.getCustomers();
			this.loaderService.isLoad(false);
			// this.closemodalSellMoreAdd.nativeElement.click();
		});
	}
	save(form) {
		this.loaderService.isLoad(true);
		this.sellMoreService.save(form).subscribe((data) => {
			this.notificationService.notifySweet('Salvo com sucesso!');
			this.clearForm();
			this.getCustomers();
			this.loaderService.isLoad(false);
			// this.closemodalSellMoreAdd.nativeElement.click();
		});
	}
	saveStrategy(form) {
		this.loaderService.isLoad(true);
		this.sellMoreService.insertUpdateStrategy(form).subscribe((data) => {
			this.notificationService.notifySweet('Salvo com sucesso!');
			this.loaderService.isLoad(false);
		});
	}

	changeStatus(lead, status) {
		this.loaderService.isLoad(true);
		let form = { status: status };
		this.sellMoreService.changeStatus(form, lead.id).subscribe((res) => {
			this.loaderService.isLoad(false);
			lead.status = status;
			this.notificationService.notifySweet('Atualizado!');
		});
	}
	callTo(person) {
		this.loaderService.isLoad(true);
		this.person = person;
		this.sellMoreService
			.getAllParents(person.id_parent)
			.subscribe((res) => {
				this.loaderService.isLoad(false);
				this.parents = res;
			});
	}
	newChildren(parent) {
		this.parent = parent;
		this.customersImported = [];
		this.form.controls['id_parent'].setValue(parent.id);
		console.log(parent);
	}
	newLead() {
		this.form.controls['id_parent'].setValue(null);
		this.parent = {};
	}
	clearForm() {
		this.form.controls['name'].setValue('');
		this.form.controls['phone'].setValue('');
		this.form.controls['address'].setValue('');
		this.form.controls['status'].setValue('');
		this.form.controls['observation'].setValue('');
	}

	onFileChanged(event) {
		const file: any = this.helper.onFileChanged(event);
		if (!file) {
			this.notificationService.notifySweet('Arquivo não permitido!');
			return;
		}
		this.img = file.img;
		this.selectedFile = file.selectedFile;
	}
	importContact() {
		this.loaderService.isLoad(true);
		const uploadData = new FormData();
		if (!this.selectedFile) {
			this.notificationService.notifyError('Anexe um arquivo!');
			this.loaderService.isLoad(false);
		}
		if (this.selectedFile) {
			uploadData.append(
				'imagem',
				this.selectedFile,
				this.selectedFile.name
			);

			this.sellMoreService
				.file(uploadData, this.parent.id)
				.subscribe((data) => {
					console.log(data);
					this.customersImported = data;
					this.getCustomers();
					this.loaderService.isLoad(false);
				});
		}
	}
	inativar(referido) {
		let isLead = false;
		Object.entries(this.customers).forEach((element) => {
			if (element[1].id === referido.id) {
				isLead = true;
				return true;
			}
		});
		console.log(isLead);

		Swal.fire({
			title: `Arquivar ${referido.name} ?`,
			text: `${
				isLead
					? `Atenção, a pessoa escolhida é, também, um lead e possui referidos em sua cadeia de conexões (card). Se prosseguir com o arquivamento do(a) ${referido.name}, o seu card será ocultado por completo. Esta ação não altera os referidos que se tornaram lead. Deseja prosseguir?`
					: ''
			}`,
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Sim, arquivar!',
		}).then((result) => {
			if (result.isConfirmed) {
				this.loaderService.isLoad(true);
				this.sellMoreService.inativar(referido.id).subscribe((res) => {
					this.loaderService.isLoad(false);
					this.notificationService.notifySweet(res['response']);
				});
			}
		});
	}
	logout() {
		this.loginService.logout();
	}
}
