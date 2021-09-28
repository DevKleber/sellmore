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
import { LogService } from '../log/log.service';
import { ThemeService } from '../shared/theme/theme.service';
import { Helper } from '../helper';
import { API_SITE_PATH_IMG } from '../app.api';
import Swal from 'sweetalert2';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { AnimationOptions } from 'ngx-lottie';

import {
	FormBuilder,
	FormControl,
	FormGroup,
	Validators,
	FormArray,
} from '@angular/forms';
import { LoaderService } from '../shared/loader/loader.service';
import { PerfectScrollbarComponent } from 'ngx-perfect-scrollbar';

@Component({
	selector: '[app-sell-more]',
	templateUrl: './sell-more.component.html',
	styleUrls: ['./sell-more.component.css'],
})
export class SellMoreComponent implements OnInit {
	position: number = 0;
	quantidade: number = 2;
	scrollTo: number = 0;

	boShowProblemasCartao: boolean = false;
	boShowLigarDepois: boolean = false;
	boShowNaotemInteresse: boolean = false;
	boShowComprou: boolean = false;
	boShowAberto: boolean = false;
	orderBy = '';

	showNaotemInteresse: string = 'false';
	themeIsDark: boolean;
	countryCodes: any[] = [];
	customersDynamic: any[] = [];
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
	itemToUpdate: any = {};
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

	calendarDetail: any;

	img: any = 'assets/img/file/search.svg';
	selectedFile: File;
	user: any = {};

	view: CalendarView = CalendarView.Month;

	CalendarView = CalendarView;

	viewDate: Date = new Date();
	events: CalendarEvent[] = [];

	@ViewChild('openCalendar', { static: true }) openCalendar: ElementRef;
	@ViewChild('openCalendarDetail', { static: true })
	openCalendarDetail: ElementRef;
	@ViewChild('closeModalPhone', { static: true }) closeModalPhone: ElementRef;
	@ViewChild(PerfectScrollbarComponent)
	componentRef?: PerfectScrollbarComponent;
	@ViewChild('contentScroll') contentScroll: ElementRef;

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
		public themeService: ThemeService,
		public notificationService: NotificationService,
		public loaderService: LoaderService,
		private logService: LogService
	) {}

	ngOnInit() {
		document.addEventListener(
			'touchstart',
			function (e) {
				e.preventDefault(); // does nothing since the listener is passive
			},
			{
				passive: true,
			}
		);
		this.verifyVersion();
		this.getStatusLocalStorage();

		this.getCustomers();
		this.getStrategy();
		// this.getCategories();
		this.initialForms();
		this.user = this.loginService.getUser();
		this.find();
		this.countryCodes = this.helper.getAllCountryCode();
		this.themeIsDark = this.themeService.themeActive();
		// this.setEvents();
		this.saveLogAccess();
	}
	verifyVersion() {
		const pessoa = this.loginService.getUser();
		if (!pessoa) {
			return;
		}

		this.sellMoreService.getVersion().subscribe((res) => {
			if (res.version != this.getVersionLocalStorage()) {
				this.setVersionLocalStorage(res.version);
				this.messageNewVersion(res);
			}
		});
	}

	getVersionLocalStorage() {
		return localStorage.getItem('wiseller_version');
	}
	setVersionLocalStorage(version) {
		return localStorage.setItem('wiseller_version', version);
	}

	messageNewVersion(res) {
		const version = res.version;

		const pessoa = this.loginService.getUser();

		Swal.fire({
			title: `Nova versão ${version}`,
			width: 600,
			showCancelButton: true,

			html: `
			<div style="text-align: left;">
				Olá, ${pessoa?.nome}, temos novidades.<br />
				${res.resume.length > 0 ? '<br />' + res.resume : ''}
			</div>
			`,
			icon: 'info',
			confirmButtonColor: '#3085d6',
			cancelButtonText: 'OK!',
			confirmButtonText: 'Ver as novidades!',
		}).then((result) => {
			if (result.isConfirmed) {
				window.open(
					'https://www.notion.so/Wiseller-Vers-o-1-0-8-e77c48f6ea4047a3938f4030974d4d1d',
					'_blank'
				);
			}
			window.location.reload();
		});
	}

	getCustomers() {
		this.loaderService.isLoad(true);
		this.sellMoreService
			.getCustomers(
				this.boShowProblemasCartao,
				this.boShowLigarDepois,
				this.boShowNaotemInteresse,
				this.boShowComprou,
				this.boShowAberto,
				this.orderBy
			)
			.subscribe((res) => {
				this.loaderService.isLoad(false);
				this.customers = res['arCustomers'];
				this.statistics = res['statistics'];

				// this.addCustomers();
				// setInterval(() => {
				// }, 2000);
			});
	}

	addCustomers() {
		const arCustomers = Object.entries(this.customers);

		let item = arCustomers.slice(
			this.position,
			this.position + this.quantidade
		);

		item.forEach((element) => {
			// console.log(element);
			this.customersDynamic.push(element[1]);
		});

		this.position += this.quantidade;
	}

	saveLogAccess() {
		if (this.user.id === 1) {
			return;
		}
		let form = {
			display_resolution: `${screen.width} x ${screen.height}`,
			os: navigator.platform,
			device: null,
			language: navigator.language,
			browser: null,
			ip: null,
			user_agent: navigator.userAgent,
			id_customers: null,
		};

		this.logService.save(form);
	}
	setDarkMode() {
		this.themeIsDark = this.themeService.setDarkMode();
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

	getStatusLocalStorage() {
		let localStorageWisellerBoShowStatus = localStorage.getItem(
			'wiseller_boShowStatus'
		);

		if (localStorageWisellerBoShowStatus === null) {
			this.setStatusLocalStorage();
			localStorageWisellerBoShowStatus = localStorage.getItem(
				'wiseller_boShowStatus'
			);
		}

		const {
			boShowProblemasCartao,
			boShowLigarDepois,
			boShowNaotemInteresse,
			boShowComprou,
			boShowAberto,
			orderBy,
		} = JSON.parse(localStorageWisellerBoShowStatus);

		this.boShowProblemasCartao = boShowProblemasCartao;
		this.boShowLigarDepois = boShowLigarDepois;
		this.boShowNaotemInteresse = boShowNaotemInteresse;
		this.boShowComprou = boShowComprou;
		this.boShowAberto = boShowAberto;
		this.orderBy = orderBy;
	}
	setStatusLocalStorage(order = null) {
		this.orderBy = order ?? this.orderBy;

		const jsonShowStatus = {
			boShowProblemasCartao: this.boShowProblemasCartao,
			boShowLigarDepois: this.boShowLigarDepois,
			boShowNaotemInteresse: this.boShowNaotemInteresse,
			boShowComprou: this.boShowComprou,
			boShowAberto: this.boShowAberto,
			orderBy: this.orderBy,
		};

		localStorage.setItem(
			'wiseller_boShowStatus',
			JSON.stringify(jsonShowStatus)
		);

		this.getCustomers();
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

	update(form, feedback = true, updateList = true, updateWithJs = false) {
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

			if (updateWithJs) {
				const { itemLead, referido } = this.itemToUpdate;
				if (itemLead === undefined) {
					// this.getCustomers();
				} else {
					const arCustomers = this.customers;

					arCustomers[itemLead.key]['referidos'][referido]['status'] =
						form.status;
					arCustomers[itemLead.key]['referidos'][referido][
						'observation'
					] = form.observation;
				}
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
	callTo(person, itemToUpdate = null) {
		if (itemToUpdate !== null) {
			this.itemToUpdate = itemToUpdate;
		}

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
		// ? `Atenção, a pessoa escolhida é, também, um lead e possui referidos em sua cadeia de conexões (card). Se prosseguir com o arquivamento do(a) ${referido.name}, o seu card será ocultado por completo. Esta ação não altera os referidos que se tornaram lead. Deseja prosseguir?`
		Swal.fire({
			title: `Arquivar ${referido.name} ?`,
			text: `${isLead ? `` : ''}`,
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Sim, arquivar!',
		}).then((result) => {
			if (result.isConfirmed) {
				referido.bo_ativo = false;
				this.loaderService.isLoad(true);
				this.sellMoreService.inativar(referido.id).subscribe((res) => {
					this.removeCustomersLocal(referido);
					this.loaderService.isLoad(false);
					this.notificationService.notifySweet(res['response']);
				});
			}
		});
	}
	ativar(referido) {
		let isLead = false;
		Object.entries(this.customers).forEach((element) => {
			if (element[1].id === referido.id) {
				isLead = true;
				return true;
			}
		});

		Swal.fire({
			title: `Ativar ${referido.name} ?`,
			text: `${
				isLead
					? `Atenção, a pessoa escolhida é, também, um lead e possui referidos em sua cadeia de conexões (card). Se prosseguir com a ativação do(a) ${referido.name}, o seu card será mostrado por completo. Esta ação não altera os referidos que se tornaram lead. Deseja prosseguir?`
					: ''
			}`,
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Sim, ativar!',
		}).then((result) => {
			if (result.isConfirmed) {
				referido.bo_ativo = true;
				this.loaderService.isLoad(true);
				this.sellMoreService.ativar(referido.id).subscribe((res) => {
					this.loaderService.isLoad(false);
					this.getCustomers();
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
				text: 'Deseja ver a lista de problemas e as novidades que vem por aí?',
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
			label: '<button mat-button>Detalhar/Remover</button>',
			a11yLabel: 'Edit',
			onClick: ({ event }: { event: CalendarEvent }): void => {
				this.calendarDetail = event;
				this.openCalendarDetail.nativeElement.click();
				this.handleEvent('Dropped or resized', event);
			},
		},
	];

	refresh: Subject<any> = new Subject();

	setEvents() {
		this.events = [];
		this.sellMoreService.getCustomersLd().subscribe((res) => {
			this.customersLd = res;
		});
		this.sellMoreService.getCalenda().subscribe((res) => {
			res['dados'].forEach((element) => {
				let dateStart = new Date(element.start);
				let dateEnd = new Date(element.end);

				this.events = [
					...this.events,
					{
						id: element.id,
						start: dateStart,
						end: dateEnd,
						title: element.title,
						color: element.color,
						actions: this.actions,
						allDay: false,
						draggable: true,
						resizable: {
							beforeStart: true,
							afterEnd: true,
						},
					},
				];
			});
			// this.notificationService.notifySweet(JSON.stringify(this.events));
			// console.log(this.events);
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
		console.log(event, newStart, newEnd);

		this.sellMoreService
			.alterarHorarioEvento({ event, newStart, newEnd })
			.subscribe((res) => {
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
				this.loaderService.isLoad(false);
			});

		// this.handleEvent('Dropped or resized', event);
	}

	handleEvent(action: string, event: CalendarEvent): void {
		// this.modalData = { event, action };
		// this.modal.open(this.modalContent, { size: 'lg' });

		this.calendarDetail = event;
		this.calendarDetail['referido'] = {};
		const { title } = this.calendarDetail;
		this.calendarDetail['id_usuario'] = title
			.replace(/<[^>]*>?/gm, '')
			.split(':|:;')[0];

		this.calendarDetail['referido'] = this.customersLd.filter((item) => {
			return item.id === Number(this.calendarDetail.id_usuario);
		})[0];
	}

	addEvent(): void {
		this.sellMoreService
			.saveCalendar(this.formCalendar.value)
			.subscribe((res) => {
				this.events = [
					...this.events,
					{
						id: res['dados'].id,
						start: new Date(res['dados'].start),
						end: new Date(res['dados'].end),
						title: res['dados'].title,
						color: res['dados'].color,
						actions: this.actions,
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
	removerAgendamento(filtrarUsuario = false) {
		const { id } = this.calendarDetail;
		this.sellMoreService.deleteCalendar(id).subscribe((res) => {
			this.deleteEvent(this.calendarDetail);
			this.loaderService.isLoad(false);
			this.filtrarUsuarioDepoisDeApagarContato(filtrarUsuario);
		});
	}
	filtrarUsuarioDepoisDeApagarContato(filtrarUsuario) {
		if (filtrarUsuario) {
			const { title, referido } = this.calendarDetail;
			let getNumberFromTitle = title.split('<br')[0];
			getNumberFromTitle = getNumberFromTitle.split('small>')[1];
			getNumberFromTitle = getNumberFromTitle.replace(/\D/g, '');

			let filter = '';
			const phone = referido?.phones[0].phone ?? [];
			if (phone.length > 0) {
				filter = phone;
			} else {
				filter = getNumberFromTitle;
			}

			this.searchForm.controls['searchControl'].setValue(filter);

			return;
		}
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
	removeCustomersLocal(referido) {
		let isFind = false;
		Object.entries(this.customers).forEach((lead, indexLead) => {
			lead[1].referidos.forEach((children, indexReferido) => {
				if (children.id === referido.id) {
					lead[1].referidos.splice(indexReferido, 1);
					isFind = true;
					return true;
				}
			});
			if (isFind) return;
		});
	}
}
