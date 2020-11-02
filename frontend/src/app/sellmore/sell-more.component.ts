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
	parent: any = {};

	path: string = API_SITE_PATH_IMG;
	isDevMode: boolean = isDevMode();
	form: FormGroup;
	formCategory: FormGroup;
	img: any = 'assets/img/user/padrao.svg';

	@ViewChild('closemodalCategoryAdd', { static: true })
	closemodalCategoryAdd: ElementRef;
	@ViewChild('closemodalCategoryPick', { static: true })
	closemodalCategoryPick: ElementRef;
	@ViewChild('closemodalSellMoreAdd', { static: true })
	closemodalSellMoreAdd: ElementRef;

	constructor(
		private sellMoreService: SellMoreService,
		private formBuilder: FormBuilder,
		public helper: Helper,
		public notificationService: NotificationService,
		public loaderService: LoaderService
	) {}

	ngOnInit() {
		this.getCustomers();
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
	}

	getCustomers() {
		this.loaderService.isLoad(true);
		this.sellMoreService.getCustomers().subscribe((res) => {
			this.loaderService.isLoad(false);
			this.customers = res['dados'];
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

	changeStatus(lead, status) {
		this.loaderService.isLoad(true);
		let form = { status: status };
		this.sellMoreService.changeStatus(form, lead.id).subscribe((res) => {
			this.loaderService.isLoad(false);
			lead.status = status;
			this.notificationService.notifySweet('Atualizado!');
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
