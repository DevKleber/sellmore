import {
	Component,
	OnInit,
	isDevMode,
	ElementRef,
	ViewChild,
} from '@angular/core';
import { SellMoreService } from './sell-more.service';
import { NotificationService } from '../shared/messages/notification.service';
import { Helper } from '../helper';
import { API_SITE_PATH_IMG } from '../app.api';

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
	person: any = {};
	parent: any = {};
	parents: any[] = [];
	strategy: any = {};

	path: string = API_SITE_PATH_IMG;
	isDevMode: boolean = isDevMode();
	form: FormGroup;
	formScript: FormGroup;
	formCategory: FormGroup;
	img: any = 'assets/img/user/padrao.svg';

	constructor(
		private sellMoreService: SellMoreService,
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
}
