import {
	Component,
	OnInit,
	isDevMode,
	ElementRef,
	ViewChild,
} from '@angular/core';
import { isSameDay, isSameMonth } from 'date-fns';
import {
	CalendarEvent,
	CalendarEventAction,
	CalendarEventTimesChangedEvent,
	CalendarView,
} from 'angular-calendar';
import { SellMoreService } from './sell-more.service';
import { LoginService } from '../security/login/login.service';
import { NotificationService } from '../shared/messages/notification.service';
import { Helper } from '../helper';
import { API_SITE_PATH_IMG } from '../app.api';
import Swal from 'sweetalert2';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

import {
	FormBuilder,
	FormControl,
	FormGroup,
	Validators,
	FormArray,
} from '@angular/forms';
import { LoaderService } from '../shared/loader/loader.service';

@Component({
	selector: '[app-sell-more]',
	templateUrl: './sell-more.component.html',
	styleUrls: ['./sell-more.component.css'],
})
export class SellMoreComponent implements OnInit {
	countryCodes: any[] = [];
	customers: any[] = [];
	customersFilter: any[] = [];

	maskToInsert: string = '(00) 00000-0000';
	countryCodeSelected: string = '55';
	phone: string = '';
	bo_whatsapp: boolean = true;

	status: any[] = [
		{ id: 'pc', status: 'Problemas com cartão' },
		{ id: 'ld', status: 'Ligar depois' },
		{ id: 'n', status: 'Não tem interesse' },
		{ id: 'c', status: 'Comprou' },
	];
	customersLd: any[] = [];
	customersImported: any[] = [];
	person: any = {};
	parent: any = {};
	parents: any[] = [];
	strategy: any = {};
	statistics: any = {};

	isSearch: boolean = true;
	showCongrats: boolean = false;

	path: string = API_SITE_PATH_IMG;
	isDevMode: boolean = isDevMode();

	searchForm: FormGroup;
	searchControl: FormControl;

	form: FormGroup;
	formScript: FormGroup;
	formBug: FormGroup;
	formCategory: FormGroup;
	formCalendar: FormGroup;
	img: any = 'assets/img/file/search.svg';
	selectedFile: File;
	user: any = {};

	view: CalendarView = CalendarView.Month;

	CalendarView = CalendarView;

	viewDate: Date = new Date();
	events: CalendarEvent[] = [];

	@ViewChild('openCalendar', { static: true }) openCalendar: ElementRef;
	@ViewChild('closeModalPhone', { static: true }) closeModalPhone: ElementRef;

	options: AnimationOptions = {
		path: '/assets/animations/json/results.json',
	};

	optionsSold: AnimationOptions = {
		path: '/assets/animations/json/congrats.json',
		autoplay: true,
		loop: false,
	};
	congrats() {
		this.showCongrats = true;
		setTimeout(
			function () {
				this.showCongrats = false;
			}.bind(this),
			3000
		);
	}
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
		this.user = this.loginService.getUser();
		this.find();
		this.countryCodes = this.helper.getAllCountryCode();
	}
	maskPhoneToInsert(event) {
		this.maskToInsert = event['mask'];
	}
	find() {
		this.searchControl.valueChanges
			.pipe(
				debounceTime(400), //espera 400ms entre dois eventos para fazer a busca novamente
				distinctUntilChanged(), // só vai fazer a busca se o valor for diferente do valor anterior
				switchMap((searchTerm) =>
					this.sellMoreService.customersFind(searchTerm)
				)
			)
			.subscribe((res) => {
				this.customersFilter = res;
				this.loaderService.isLoad(false);
				this.isSearch = false;
			});
	}

	initialForms() {
		this.form = this.formBuilder.group({
			id: this.formBuilder.control(null),
			name: this.formBuilder.control('', [Validators.required]),
			address: this.formBuilder.control(''),
			status: this.formBuilder.control(''),
			observation: this.formBuilder.control(''),
			id_parent: this.formBuilder.control(null),
			telefones: this.formBuilder.array([]),
		});
		this.formScript = this.formBuilder.group({
			strategy: this.formBuilder.control('', [Validators.required]),
			url_sale: this.formBuilder.control(''),
		});
		this.formBug = this.formBuilder.group({
			name: this.formBuilder.control('', [Validators.required]),
			desc: this.formBuilder.control('', [Validators.required]),
		});
		this.formCalendar = this.formBuilder.group({
			date: this.formBuilder.control('', [Validators.required]),
			hour: this.formBuilder.control('', [Validators.required]),
			id_customers: this.formBuilder.control('', [Validators.required]),
			title: this.formBuilder.control(''),
		});

		this.searchControl = this.formBuilder.control('');
		this.searchForm = this.formBuilder.group({
			searchControl: this.searchControl,
		});
	}
	addFKPhone(
		phone = this.phone,
		bo_whatsapp = this.bo_whatsapp,
		countryCode = this.countryCodeSelected
	) {
		let items = this.form.get('telefones') as FormArray;
		items.push(this.telefoneItem(phone, bo_whatsapp, countryCode));
		this.closeModalPhone.nativeElement.click();
		this.phone = '';
		this.bo_whatsapp = false;
	}
	deleteTelefone(i: number) {
		const control = <FormArray>this.form.controls['telefones'];
		control.removeAt(i);
	}
	telefoneItem(phone = '', bo_whatsapp = false, countryCode = ''): FormGroup {
		if (phone != '') {
			return this.formBuilder.group({
				phone: this.formBuilder.control(phone),
				bo_whatsapp: this.formBuilder.control(bo_whatsapp),
				country_code: this.formBuilder.control(countryCode),
			});
		}
	}

	getCustomers() {
		this.loaderService.isLoad(true);
		this.sellMoreService.getCustomers().subscribe((res) => {
			this.loaderService.isLoad(false);
			this.customers = res['arCustomers'];
			this.statistics = res['statistics'];
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
			this.formScript.controls['url_sale'].setValue(
				this.strategy.url_sale
			);
		});
	}

	updateOpenForm(person) {
		this.form.controls['id'].setValue(person.id);
		this.form.controls['name'].setValue(person.name);
		// this.form.controls['phone'].setValue(person.phone);
		this.form.controls['address'].setValue(person.address);
		this.form.controls['status'].setValue(person.status);
		this.form.controls['observation'].setValue(person.observation);
		this.form.controls['id_parent'].setValue(person.id_parent);

		let items = this.form.get('telefones') as FormArray;
		if (items.length) {
			items.clear();
		}

		person['phones'].forEach((element) => {
			this.addFKPhone(element.phone, element.bo_whatsapp);
		});
	}

	update(form, feedback = true, updateList = true) {
		if (!form.id) {
			this.notificationService.notifySweet(
				'Erro: não encontramos o referido!'
			);
		}
		this.loaderService.isLoad(true);
		this.sellMoreService.update(form, form.id).subscribe((data) => {
			if (feedback) {
				this.notificationService.notifySweet('Alterado com sucesso!');
				this.clearForm();
			}
			if (updateList) {
				this.getCustomers();
			}
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
			let value = this.statistics[status];
			this.statistics[status] = value + 1;
			this.loaderService.isLoad(false);
			lead.status = status;

			if (status == 'c') {
				this.congrats();
			} else if (status == 'ld') {
				this.notificationService.notifySweet(
					'Status atualizado para ligar depois. Agora agende um horario para entrar em contato!'
				);
				this.openCalendar.nativeElement.click();
				this.formCalendar.controls['id_customers'].setValue(lead.id);
				this.formCalendar.controls['title'].setValue(lead.name);
			} else {
				this.notificationService.notifySweet('Status salvo!');
			}
		});
	}
	preference(customer) {
		customer.bo_preference = customer.bo_preference ? false : true;
		this.sellMoreService.preference(customer).subscribe((res) => {
			// this.notificationService.notifySweet('Status salvo!');
			this.loaderService.isLoad(false);
		});
	}
	callTo(person) {
		this.loaderService.isLoad(true);
		this.updateOpenForm(person);
		this.person = person;
		if (!person.id_parent) {
			this.loaderService.isLoad(false);
			return;
		}
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
		this.clearForm();
		this.form.controls['id_parent'].setValue(parent.id);
	}
	newLead() {
		this.clearForm();
		this.form.controls['id_parent'].setValue(null);
		this.parent = {};
	}
	clearForm() {
		this.form.controls['id'].setValue('');
		this.form.controls['name'].setValue('');
		// this.form.controls['phone'].setValue('');
		this.form.controls['address'].setValue('');
		this.form.controls['status'].setValue('');
		this.form.controls['observation'].setValue('');
		let items = this.form.get('telefones') as FormArray;
		if (items.length) {
			items.clear();
		}
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
	bug(form) {
		this.loaderService.isLoad(true);
		this.sellMoreService.bug(form).subscribe((res) => {
			this.loaderService.isLoad(false);
			this.formBug.controls['name'].setValue('');
			this.formBug.controls['desc'].setValue('');
			Swal.fire({
				title: 'Obrigado por nos reportar!',
				text:
					'Deseja ver a lista de problemas e as novidades que vem por aí?',
				icon: 'success',
				showCancelButton: true,
				confirmButtonColor: '#3085d6',
				cancelButtonColor: '#d33',
				confirmButtonText: 'Sim, ver a lista!',
			}).then((result) => {
				if (result.isConfirmed) {
					var win = window.open(
						'https://trello.com/b/GQpoOLdf/sell-more',
						'_blank'
					);
					win.focus();
				}
			});
		});
	}
	logout() {
		this.loginService.logout();
	}

	// calendar
	actions: CalendarEventAction[] = [
		{
			label: '<i class="fas fa-fw fa-pencil-alt"></i>',
			a11yLabel: 'Edit',
			onClick: ({ event }: { event: CalendarEvent }): void => {
				this.handleEvent('Edited', event);
			},
		},
		{
			label: '<i class="fas fa-fw fa-trash-alt"></i>',
			a11yLabel: 'Delete',
			onClick: ({ event }: { event: CalendarEvent }): void => {
				this.events = this.events.filter((iEvent) => iEvent !== event);
				this.handleEvent('Deleted', event);
			},
		},
	];

	refresh: Subject<any> = new Subject();

	setEvents() {
		this.events = [];
		this.sellMoreService.getCustomersLd().subscribe((res) => {
			this.customersLd = res;
		});
		this.sellMoreService.getCalenda().subscribe((res: CalendarEvent[]) => {
			res['dados'].forEach((element) => {
				this.events = [
					...this.events,
					{
						start: new Date(element.start),
						end: new Date(element.end),
						title: element.title,
						color: element.color,
						allDay: false,
						draggable: true,
						resizable: {
							beforeStart: true,
							afterEnd: true,
						},
					},
				];
			});
			console.log(this.events);
			// this.events = res['dados'];
			this.loaderService.isLoad(false);
		});
	}

	activeDayIsOpen: boolean = true;

	dayClicked({
		date,
		events,
	}: {
		date: Date;
		events: CalendarEvent[];
	}): void {
		let day = ('0' + date.getDate()).slice(-2);
		let month = ('0' + (date.getMonth() + 1)).slice(-2);
		let year = date.getFullYear();

		let dia = `${day}/${month}/${year}`;

		this.formCalendar.controls['date'].setValue(dia);
		if (isSameMonth(date, this.viewDate)) {
			if (
				(isSameDay(this.viewDate, date) &&
					this.activeDayIsOpen === true) ||
				events.length === 0
			) {
				this.activeDayIsOpen = false;
			} else {
				this.activeDayIsOpen = true;
			}
			this.viewDate = date;
		}
	}

	eventTimesChanged({
		event,
		newStart,
		newEnd,
	}: CalendarEventTimesChangedEvent): void {
		this.events = this.events.map((iEvent) => {
			if (iEvent === event) {
				return {
					...event,
					start: newStart,
					end: newEnd,
				};
			}
			return iEvent;
		});
		this.handleEvent('Dropped or resized', event);
	}

	handleEvent(action: string, event: CalendarEvent): void {
		// this.modalData = { event, action };
		// this.modal.open(this.modalContent, { size: 'lg' });
	}

	addEvent(): void {
		this.sellMoreService
			.saveCalendar(this.formCalendar.value)
			.subscribe((res) => {
				this.events = [
					...this.events,
					{
						start: new Date(res['dados'].start),
						end: new Date(res['dados'].end),
						title: res['dados'].title,
						color: res['dados'].color,
						allDay: false,
						draggable: true,
						resizable: {
							beforeStart: true,
							afterEnd: true,
						},
					},
				];
				this.loaderService.isLoad(false);
				this.notificationService.notifySweet('Agendado com sucesso!');
			});
	}

	deleteEvent(eventToDelete: CalendarEvent) {
		this.events = this.events.filter((event) => event !== eventToDelete);
	}

	setView(view: CalendarView) {
		this.view = view;
	}

	closeOpenMonthViewDay() {
		this.activeDayIsOpen = false;
	}
}
