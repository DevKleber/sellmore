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
	customers: any[] = [1, 2, 3, 4, 5];

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
		// this.getCategories();
		this.initialForms();
	}

	initialForms() {
		this.form = this.formBuilder.group({
			frente: this.formBuilder.control('', [Validators.required]),
			verso: this.formBuilder.control('', [Validators.required]),
			id_categoria: this.formBuilder.control(1, [Validators.required]),
			imagem: this.formBuilder.control(''),
		});

		this.formCategory = this.formBuilder.group({
			categoria: this.formBuilder.control('', [Validators.required]),
		});
	}
	getStickers() {
		this.loaderService.isLoad(true);
	}

	save(form) {
		this.loaderService.isLoad(true);
	}

	saveForm(form) {
		this.sellMoreService.save(form).subscribe((data) => {
			this.notificationService.notifySweet('saved successfully!');
			this.clearForm();
			this.form.controls['id_categoria'].setValue(form.id_categoria);
			this.getStickers();
			this.closemodalSellMoreAdd.nativeElement.click();
			this.loaderService.isLoad(false);
		});
	}

	clearForm() {
		this.initialForms();
	}
}
