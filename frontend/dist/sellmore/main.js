(self["webpackChunkmemorize"] = self["webpackChunkmemorize"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 970:
/*!****************************!*\
  !*** ./src/app/app.api.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "API": () => (/* binding */ API),
/* harmony export */   "APIDominio": () => (/* binding */ APIDominio),
/* harmony export */   "APIWithoutApi": () => (/* binding */ APIWithoutApi),
/* harmony export */   "API_PATH_IMG": () => (/* binding */ API_PATH_IMG),
/* harmony export */   "API_SITE_PATH_IMG": () => (/* binding */ API_SITE_PATH_IMG),
/* harmony export */   "SERVER_ND": () => (/* binding */ SERVER_ND)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../environments/environment */ 2340);

const API = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api;
let WithoutApi = "";
if (_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production) {
    WithoutApi = API.split("br/api")[0] + "br";
}
else {
    WithoutApi = API.split("/api")[0];
}
const APIDominio = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiDominio;
const APIWithoutApi = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiPublic;
const API_PATH_IMG = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiPublic;
const API_SITE_PATH_IMG = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiSite;
const SERVER_ND = "http://localhost:3099";


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _shared_theme_theme_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/theme/theme.service */ 5961);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/loader/loader.component */ 9047);
/* harmony import */ var _shared_commemorations_commemorations_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/commemorations/commemorations.component */ 9597);
/* harmony import */ var _shared_messages_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/messages/snackbar/snackbar.component */ 9147);






class AppComponent {
    constructor(themeService) {
        this.themeService = themeService;
        this.title = 'selelmore';
        this.systemOn = true;
        this.user = {};
    }
    ngOnInit() {
        this.themeService.setTheme();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_theme_theme_service__WEBPACK_IMPORTED_MODULE_0__.ThemeService)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 0, consts: [["id", "", 1, ""]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "app-loader");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "app-commemorations");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "app-snackbar");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet, _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_1__.LoaderComponent, _shared_commemorations_commemorations_component__WEBPACK_IMPORTED_MODULE_2__.CommemorationsComponent, _shared_messages_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_3__.SnackbarComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 4123:
/*!**************************************!*\
  !*** ./src/app/app.error-handler.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApplicationErrorHandler": () => (/* binding */ ApplicationErrorHandler)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var _security_login_login_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./security/login/login.service */ 825);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _shared_messages_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/messages/notification.service */ 4635);
/* harmony import */ var _shared_loader_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/loader/loader.service */ 6845);







class ApplicationErrorHandler extends _angular_core__WEBPACK_IMPORTED_MODULE_3__.ErrorHandler {
    constructor(ns, loaderService, injector, zone) {
        super();
        this.ns = ns;
        this.loaderService = loaderService;
        this.injector = injector;
        this.zone = zone;
    }
    handleError(errorResponse) {
        this.loaderService.isLoad(false);
        if (errorResponse instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpErrorResponse) {
            const error = typeof errorResponse.error !== 'object'
                ? JSON.parse(errorResponse.error)
                : errorResponse.error;
            this.zone.run(() => {
                // console.log('logo error handler', errorResponse.status);
                // console.log('logo error handler', errorResponse.error);
                // console.log('logo error handler', error.error);
                switch (errorResponse.status) {
                    case 0:
                        // this.ns.notifyError("token expirado");
                        const loginService = this.injector.get(_security_login_login_service__WEBPACK_IMPORTED_MODULE_0__.LoginService);
                        loginService.logoutForce();
                        break;
                    case 400:
                        // console.log(error);
                        if (error.error === 'token_expired' ||
                            error.error == 'Token is Expired' ||
                            error.error === 'token_invalid' ||
                            error.error === 'A token is required' ||
                            error.error === 'token_not_provider' ||
                            error.error === 'Authorization Token not found') {
                            if (error.error != 'Authorization Token not found') {
                                this.ns.notifyError(error.error);
                            }
                            this.loaderService.isLoad(false);
                            const loginService = this.injector.get(_security_login_login_service__WEBPACK_IMPORTED_MODULE_0__.LoginService);
                            // loginService.logout();
                            loginService.logoutForce();
                        }
                        else {
                            let erro = error.response != undefined
                                ? error.response
                                : error.error;
                            this.ns.notifyError(erro);
                        }
                        break;
                    case 401:
                        if (error.error === 'token_has_been_blacklisted') {
                            this.ns.notifyError('token na lista negra');
                            const loginService = this.injector.get(_security_login_login_service__WEBPACK_IMPORTED_MODULE_0__.LoginService);
                            loginService.logout();
                            this.goToLogin();
                        }
                        else if (error.error === 'token_invalid') {
                            this.ns.notifyError('Token Inválido');
                            const loginService = this.injector.get(_security_login_login_service__WEBPACK_IMPORTED_MODULE_0__.LoginService);
                            loginService.logout();
                            this.goToLogin('login');
                        }
                        else {
                            this.ns.notifyError(error.response);
                            if (!error.permission) {
                                let router = this.injector.get(_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router);
                                this.goToLogin('');
                                // history.go(-1);
                            }
                        }
                        break;
                    case 403:
                        console.log('error 403');
                        this.ns.notifyError(error || 'Não autorizado.');
                        break;
                    case 404:
                        console.log('error 404');
                        this.ns.notifyError(error ||
                            'Recurso não encontrado. Verifique o console para mais detalhes');
                        break;
                    case 408:
                        this.ns.notifyError('tempo fim');
                        break;
                    case 500:
                        let erro = error.message != undefined
                            ? error.message
                            : error.error;
                        console.log(error.message);
                        this.ns.notifyError(' Erro interno no servidor! \n' + erro);
                        break;
                }
            });
        }
        super.handleError(errorResponse);
    }
    goToLogin(path) {
        const router = this.injector.get(_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router);
        router.navigate([`/${path}`]);
    }
}
ApplicationErrorHandler.ɵfac = function ApplicationErrorHandler_Factory(t) { return new (t || ApplicationErrorHandler)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_shared_messages_notification_service__WEBPACK_IMPORTED_MODULE_1__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_shared_loader_loader_service__WEBPACK_IMPORTED_MODULE_2__.LoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone)); };
ApplicationErrorHandler.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: ApplicationErrorHandler, factory: ApplicationErrorHandler.ɵfac });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout/header/header.component */ 7876);
/* harmony import */ var _layout_menu_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout/menu/menu.component */ 2738);
/* harmony import */ var _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout/footer/footer.component */ 1954);
/* harmony import */ var _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/loader/loader.component */ 9047);
/* harmony import */ var _shared_commemorations_commemorations_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/commemorations/commemorations.component */ 9597);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ 718);
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.routes */ 8693);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/shared.module */ 4466);
/* harmony import */ var _app_error_handler__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.error-handler */ 4123);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _security_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./security/login/login.component */ 3035);


















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ providers: [{ provide: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ErrorHandler, useClass: _app_error_handler__WEBPACK_IMPORTED_MODULE_8__.ApplicationErrorHandler }], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__.BrowserAnimationsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__.SharedModule.forRoot(),
            // RouterModule.forRoot(ROUTES, { preloadingStrategy: PreloadAllModules })
            // RouterModule.forRoot(ROUTES, { preloadingStrategy: PreloadAllModules })
            _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule.forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_6__.ROUTES, { relativeLinkResolution: 'legacy' }),
            // RouterModule.forRoot(ROUTES, { useHash: true }), // .../#/crisis-center/
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent,
        _layout_header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent,
        _layout_menu_menu_component__WEBPACK_IMPORTED_MODULE_2__.MenuComponent,
        _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent,
        _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_4__.LoaderComponent,
        _security_login_login_component__WEBPACK_IMPORTED_MODULE_9__.LoginComponent,
        _shared_commemorations_commemorations_component__WEBPACK_IMPORTED_MODULE_5__.CommemorationsComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__.BrowserAnimationsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule] }); })();


/***/ }),

/***/ 8693:
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ROUTES": () => (/* binding */ ROUTES)
/* harmony export */ });
/* harmony import */ var _security_login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./security/login/login.component */ 3035);

const ROUTES = [
    // { path: '', component: HomeComponent ,canLoad:[LoggedInGuard]},
    { path: 'login/:to', component: _security_login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent },
    { path: 'login', component: _security_login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent },
    {
        path: '',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_sellmore_sell-more_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./sellmore/sell-more.module */ 6665)).then((m) => m.SellMoreModule),
    },
    {
        path: 'not-found',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_not-found_not-found_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./not-found/not-found.module */ 1242)).then((m) => m.NotFoundModule),
    },
    {
        path: 'access_log',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_log_log_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./log/log.module */ 6387)).then((m) => m.LogModule),
    },
    { path: '**', redirectTo: 'not-found', pathMatch: 'full' },
];


/***/ }),

/***/ 7854:
/*!***************************!*\
  !*** ./src/app/helper.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Helper": () => (/* binding */ Helper)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _shared_messages_notification_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/messages/notification.service */ 4635);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 1570);



class Helper {
    constructor(notificationService, sanitizer) {
        this.notificationService = notificationService;
        this.sanitizer = sanitizer;
        this.typeFile = {
            image: ['jpg', 'png', 'jpeg', 'svg'],
            document: [
                'pdf',
                'msword',
                'vnd.oasis.opendocument.text',
                'vnd.openxmlformats-officedocument.wordprocessingml.document',
                'vnd.ms-excel',
            ],
        };
    }
    retira_acentos(string) {
        return string.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    }
    getTime() {
        var date = new Date();
        var seconds = String(date.getSeconds()).padStart(2, '0');
        var minutes = String(date.getMinutes()).padStart(2, '0');
        var hour = String(date.getHours()).padStart(2, '0');
        return `${hour}:${minutes}:${seconds}`;
    }
    getTimestampNow() {
        var date = new Date();
        var dd = String(date.getDate()).padStart(2, '0');
        var mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = date.getFullYear();
        var seconds = String(date.getSeconds()).padStart(2, '0');
        var minutes = String(date.getMinutes()).padStart(2, '0');
        var hour = String(date.getHours()).padStart(2, '0');
        return `${yyyy}-${mm}-${dd} ${hour}:${minutes}:${seconds}`;
    }
    formBuilderValidatorsEmail() {
        return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    }
    validaCPFCNPJ(cpfcnpj) {
        var cpfcnpjJustNumbers = cpfcnpj.replace(/\D/g, '');
        if (cpfcnpjJustNumbers.length == 11) {
            var cpf = cpfcnpjJustNumbers;
            if (!cpf ||
                cpf.length != 11 ||
                cpf == '00000000000' ||
                cpf == '11111111111' ||
                cpf == '22222222222' ||
                cpf == '33333333333' ||
                cpf == '44444444444' ||
                cpf == '55555555555' ||
                cpf == '66666666666' ||
                cpf == '77777777777' ||
                cpf == '88888888888' ||
                cpf == '99999999999')
                return false;
            var soma = 0;
            var resto;
            for (var i = 1; i <= 9; i++)
                soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
            resto = (soma * 10) % 11;
            if (resto == 10 || resto == 11)
                resto = 0;
            if (resto != parseInt(cpf.substring(9, 10)))
                return false;
            soma = 0;
            for (var i = 1; i <= 10; i++)
                soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
            resto = (soma * 10) % 11;
            if (resto == 10 || resto == 11)
                resto = 0;
            if (resto != parseInt(cpf.substring(10, 11)))
                return false;
            return true;
        }
        else if (cpfcnpjJustNumbers.length == 14) {
            var cnpj = cpfcnpjJustNumbers;
            if (!cnpj ||
                cnpj.length != 14 ||
                cnpj == '00000000000000' ||
                cnpj == '11111111111111' ||
                cnpj == '22222222222222' ||
                cnpj == '33333333333333' ||
                cnpj == '44444444444444' ||
                cnpj == '55555555555555' ||
                cnpj == '66666666666666' ||
                cnpj == '77777777777777' ||
                cnpj == '88888888888888' ||
                cnpj == '99999999999999')
                return false;
            var tamanho = cnpj.length - 2;
            var numeros = cnpj.substring(0, tamanho);
            var digitos = cnpj.substring(tamanho);
            var soma = 0;
            var pos = tamanho - 7;
            for (var i = tamanho; i >= 1; i--) {
                soma += numeros.charAt(tamanho - i) * pos--;
                if (pos < 2)
                    pos = 9;
            }
            var resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
            if (resultado != digitos.charAt(0))
                return false;
            tamanho = tamanho + 1;
            numeros = cnpj.substring(0, tamanho);
            soma = 0;
            pos = tamanho - 7;
            for (var i = tamanho; i >= 1; i--) {
                soma += numeros.charAt(tamanho - i) * pos--;
                if (pos < 2)
                    pos = 9;
            }
            resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
            if (resultado != digitos.charAt(1))
                return false;
            return true;
        }
    }
    extensoesProibidas(event) {
        let extensao = this.getExtensionOfFile(event.target.files[0].name);
        var deny = [
            'html',
            'exe',
            'js',
            'py',
            'php',
            'cc',
            'cpp',
            'cxx',
            'c',
            'c++',
            'h',
            'hh',
            'hpp',
            'hxx',
            'h++',
            'c++',
            'jar',
            'java',
            'deb',
            'tar',
            'zip',
        ];
        return deny.indexOf(extensao.toLowerCase()) > -1;
    }
    extensoesValidasAnexos(event) {
        let extensao = this.getExtensionOfFile(event.target.files[0].name);
        var days = [
            'pdf',
            'png',
            'jpg',
            'jpeg',
            ,
            'doc',
            'docs',
            'docx',
            'xlsx',
            'xls',
        ];
        return days.indexOf(extensao.toLowerCase()) > -1;
    }
    getExtensionOfFile(name) {
        return name.split('.').pop();
    }
    onFileChangedAll(event, type = 'image') {
        let findFile = false;
        if (event.target.files[0] == undefined) {
            return false;
        }
        // console.log(event.target.files);
        var selectedFile = [];
        var urlImg = [];
        for (let file of event.target.files) {
            for (let ext of this.typeFile[type]) {
                if (file.type.includes(ext)) {
                    findFile = true;
                    let tmppath = URL.createObjectURL(file);
                    urlImg.push(this.sanitizer.bypassSecurityTrustUrl(tmppath));
                    selectedFile.push(file);
                }
            }
        }
        if (!findFile) {
            return false;
        }
        // console.log(selectedFile);
        if (selectedFile.length == 1) {
            const selectF = selectedFile.shift();
            const urlI = urlImg.shift();
            return { selectedFile: selectF, urlImg: urlI };
        }
        return { selectedFile, urlImg };
    }
    onFileChanged(event) {
        if (this.extensoesProibidas(event)) {
            this.notificationService.notifySweet('Arquivo Proibido');
            return false;
        }
        var tmppath = URL.createObjectURL(event.target.files[0]);
        let extensao = this.getExtensionOfFile(event.target.files[0].name);
        let img;
        switch (extensao) {
            case 'png':
            case 'jpg':
            case 'jpeg':
                img = tmppath;
                break;
            default:
                img = '/assets/img/file/' + extensao + '.svg';
                break;
        }
        let selectedFile = event.target.files[0];
        let dados = { img: img, selectedFile: selectedFile };
        return dados;
    }
    onFileSet(no_documento) {
        let extensao = this.getExtensionOfFile(no_documento);
        let img;
        switch (extensao) {
            case 'png':
            case 'jpg':
            case 'jpeg':
                img = no_documento;
                break;
            default:
                img = '/assets/img/file/' + extensao + '.svg';
                break;
        }
        return img;
    }
    formatarDataParaCompararNoBanco(data) {
        if (data) {
            let dia = data.getDate().toString();
            let diaF = dia.length == 1 ? '0' + dia : dia;
            let mes = (data.getMonth() + 1).toString(); //+1 pois no getMonth Janeiro começa com zero.
            let mesF = mes.length == 1 ? '0' + mes : mes;
            let anoF = data.getFullYear();
            return anoF + '-' + mesF + '-' + diaF;
        }
    }
    encrypt(dados) {
        dados = dados.replace(/A/g, 'গ');
        dados = dados.replace(/B/g, 'খ');
        dados = dados.replace(/C/g, 'ক');
        dados = dados.replace(/D/g, 'ঔ');
        dados = dados.replace(/E/g, 'ও');
        dados = dados.replace(/F/g, 'ঐ');
        dados = dados.replace(/G/g, 'এ');
        dados = dados.replace(/H/g, 'ঌ');
        dados = dados.replace(/I/g, 'ঋ');
        dados = dados.replace(/J/g, 'ঊ');
        dados = dados.replace(/K/g, 'উ');
        dados = dados.replace(/L/g, 'ঈ');
        dados = dados.replace(/M/g, 'ই');
        dados = dados.replace(/N/g, 'আ');
        dados = dados.replace(/O/g, 'অ');
        dados = dados.replace(/P/g, 'ॿ');
        dados = dados.replace(/Q/g, 'ॾ');
        dados = dados.replace(/R/g, 'ॼ');
        dados = dados.replace(/S/g, 'ॻ');
        dados = dados.replace(/T/g, 'ॲ');
        dados = dados.replace(/U/g, '९');
        dados = dados.replace(/V/g, '७');
        dados = dados.replace(/W/g, 'ॠ');
        dados = dados.replace(/X/g, 'ॡ');
        dados = dados.replace(/Y/g, 'फ़');
        dados = dados.replace(/Z/g, 'ॐ');
        dados = dados.replace(/a/g, 'अ');
        dados = dados.replace(/b/g, 'आ');
        dados = dados.replace(/c/g, 'इ');
        dados = dados.replace(/d/g, 'ई');
        dados = dados.replace(/e/g, 'उ');
        dados = dados.replace(/f/g, 'ऊ');
        dados = dados.replace(/g/g, 'ऋ');
        dados = dados.replace(/h/g, 'ऌ');
        dados = dados.replace(/i/g, 'ऍ');
        dados = dados.replace(/j/g, 'ऎ');
        dados = dados.replace(/k/g, 'ए');
        dados = dados.replace(/l/g, 'ऐ');
        dados = dados.replace(/m/g, 'ঙ');
        dados = dados.replace(/n/g, 'ঘ');
        dados = dados.replace(/o/g, 'ओ');
        dados = dados.replace(/p/g, 'औ');
        dados = dados.replace(/q/g, 'क');
        dados = dados.replace(/r/g, 'ख');
        dados = dados.replace(/s/g, 'ग');
        dados = dados.replace(/t/g, 'घ');
        dados = dados.replace(/u/g, 'ङ');
        dados = dados.replace(/v/g, 'च');
        dados = dados.replace(/w/g, 'छ');
        dados = dados.replace(/x/g, 'ज');
        dados = dados.replace(/y/g, 'झ');
        dados = dados.replace(/z/g, 'ञ');
        dados = dados.replace(/á/g, 'ट');
        dados = dados.replace(/é/g, 'य');
        dados = dados.replace(/í/g, 'म');
        dados = dados.replace(/ó/g, 'भ');
        dados = dados.replace(/ú/g, 'ब');
        dados = dados.replace(/à/g, 'फ');
        dados = dados.replace(/è/g, 'प');
        dados = dados.replace(/ì/g, 'ऩ');
        dados = dados.replace(/ò/g, 'न');
        dados = dados.replace(/ù/g, 'ध');
        dados = dados.replace(/ã/g, 'द');
        dados = dados.replace(/õ/g, 'थ');
        dados = dados.replace(/ç/g, 'त');
        dados = dados.replace(/ê/g, 'ण');
        dados = dados.replace(/ /g, '߷');
        dados = dados.replace(/"/g, 'रू');
        dados = dados.replace(/{/g, 'कु');
        dados = dados.replace(/}/g, 'ञ्');
        dados = dados.replace(/:/g, 'बा');
        dados = dados.replace(/,/g, 'र');
        return dados;
    }
    decrypt(dados) {
        if (dados == null)
            return {};
        var result;
        dados = dados.replace(/গ/g, 'A');
        dados = dados.replace(/খ/g, 'B');
        dados = dados.replace(/ক/g, 'C');
        dados = dados.replace(/ঔ/g, 'D');
        dados = dados.replace(/ও/g, 'E');
        dados = dados.replace(/ঐ/g, 'F');
        dados = dados.replace(/এ/g, 'G');
        dados = dados.replace(/ঌ/g, 'H');
        dados = dados.replace(/ঋ/g, 'I');
        dados = dados.replace(/ঊ/g, 'J');
        dados = dados.replace(/উ/g, 'K');
        dados = dados.replace(/ঈ/g, 'L');
        dados = dados.replace(/ই/g, 'M');
        dados = dados.replace(/আ/g, 'N');
        dados = dados.replace(/অ/g, 'O');
        dados = dados.replace(/ॿ/g, 'P');
        dados = dados.replace(/ॾ/g, 'Q');
        dados = dados.replace(/ॼ/g, 'R');
        dados = dados.replace(/ॻ/g, 'S');
        dados = dados.replace(/ॲ/g, 'T');
        dados = dados.replace(/९/g, 'U');
        dados = dados.replace(/७/g, 'V');
        dados = dados.replace(/ॠ/g, 'W');
        dados = dados.replace(/ॡ/g, 'X');
        dados = dados.replace(/फ़/g, 'Y');
        dados = dados.replace(/ॐ/g, 'Z');
        dados = dados.replace(/अ/g, 'a');
        dados = dados.replace(/आ/g, 'b');
        dados = dados.replace(/इ/g, 'c');
        dados = dados.replace(/ई/g, 'd');
        dados = dados.replace(/उ/g, 'e');
        dados = dados.replace(/ऊ/g, 'f');
        dados = dados.replace(/ऋ/g, 'g');
        dados = dados.replace(/ऌ/g, 'h');
        dados = dados.replace(/ऍ/g, 'i');
        dados = dados.replace(/ऎ/g, 'j');
        dados = dados.replace(/ए/g, 'k');
        dados = dados.replace(/ऐ/g, 'l');
        dados = dados.replace(/ঙ/g, 'm');
        dados = dados.replace(/ঘ/g, 'n');
        dados = dados.replace(/ओ/g, 'o');
        dados = dados.replace(/औ/g, 'p');
        dados = dados.replace(/क/g, 'q');
        dados = dados.replace(/ख/g, 'r');
        dados = dados.replace(/ग/g, 's');
        dados = dados.replace(/घ/g, 't');
        dados = dados.replace(/ङ/g, 'u');
        dados = dados.replace(/च/g, 'v');
        dados = dados.replace(/छ/g, 'w');
        dados = dados.replace(/ज/g, 'x');
        dados = dados.replace(/झ/g, 'y');
        dados = dados.replace(/ञ/g, 'z');
        dados = dados.replace(/ट/g, 'á');
        dados = dados.replace(/य/g, 'é');
        dados = dados.replace(/म/g, 'í');
        dados = dados.replace(/भ/g, 'ó');
        dados = dados.replace(/ब/g, 'ú');
        dados = dados.replace(/फ/g, 'à');
        dados = dados.replace(/प/g, 'è');
        dados = dados.replace(/ऩ/g, 'ì');
        dados = dados.replace(/न/g, 'ò');
        dados = dados.replace(/ध/g, 'ù');
        dados = dados.replace(/द/g, 'ã');
        dados = dados.replace(/थ/g, 'õ');
        dados = dados.replace(/त/g, 'ç');
        dados = dados.replace(/ण/g, 'ê');
        dados = dados.replace(/߷/g, ' ');
        dados = dados.replace(/Գ/g, '0');
        dados = dados.replace(/Բ/g, '1');
        dados = dados.replace(/Ա/g, '2');
        dados = dados.replace(/Ѿ/g, '3');
        dados = dados.replace(/Ѽ/g, '4');
        dados = dados.replace(/Ϫ/g, '5');
        dados = dados.replace(/ϟ/g, '6');
        dados = dados.replace(/ƨ/g, '7');
        dados = dados.replace(/Ʀ/g, '8');
        dados = dados.replace(/ƣ/g, '9');
        dados = dados.replace(/रू/g, '"');
        dados = dados.replace(/कु/g, '{');
        dados = dados.replace(/ञ्/g, '}');
        dados = dados.replace(/बा/g, ':');
        dados = dados.replace(/र/g, ',');
        return dados;
    }
    getAllCountryCode() {
        return [
            { mask: '', countryCode: '93', nome: 'Afeganistão' },
            { mask: '', countryCode: '355', nome: 'Albânia' },
            { mask: '', countryCode: '213', nome: 'Algéria' },
            { mask: '', countryCode: '1684', nome: 'Samoa Americana' },
            { mask: '', countryCode: '376', nome: 'Andorra' },
            { mask: '', countryCode: '244', nome: 'Angola' },
            { mask: '', countryCode: '1264', nome: 'Anguilla' },
            { mask: '', countryCode: '672', nome: 'Antártida' },
            { mask: '', countryCode: '1268', nome: 'Antigua e Barbuda' },
            { mask: '000 0000-0000', countryCode: '54', nome: 'Argentina' },
            { mask: '', countryCode: '374', nome: 'Armênia' },
            { mask: '', countryCode: '297', nome: 'Aruba' },
            { mask: '(00) 0000 0000', countryCode: '61', nome: 'Austrália' },
            { mask: '0000 000000', countryCode: '43', nome: 'Áustria' },
            { mask: '', countryCode: '994', nome: 'Azerbaijão' },
            { mask: '', countryCode: '1242', nome: 'Bahamas' },
            { mask: '', countryCode: '973', nome: 'Bahrein' },
            { mask: '', countryCode: '880', nome: 'Bangladesh' },
            { mask: '', countryCode: '246', nome: 'Barbados' },
            { mask: '', countryCode: '375', nome: 'Bielorrússia' },
            { mask: '00 000 00 00', countryCode: '032', nome: 'Bélgica' },
            { mask: '', countryCode: '501', nome: 'Belize' },
            { mask: '', countryCode: '229', nome: 'Benin' },
            { mask: '', countryCode: '1441', nome: 'Bermuda' },
            { mask: '', countryCode: '975', nome: 'Butão' },
            { mask: '', countryCode: '591', nome: 'Bolívia' },
            { mask: '', countryCode: '387', nome: 'Bósnia e Herzegovina' },
            { mask: '', countryCode: '267', nome: 'Botswana' },
            { mask: '', countryCode: '47', nome: 'Ilha Bouvet' },
            { mask: '(00)00000-0000', countryCode: '55', nome: 'Brasil' },
            {
                mask: '',
                countryCode: '246',
                nome: 'Território Britânico do Oceano Índico',
            },
            { mask: '', countryCode: '673', nome: 'Brunei' },
            { mask: '00 000 0000', countryCode: '359', nome: 'Bulgária' },
            { mask: '', countryCode: '226', nome: 'Burkina Faso' },
            { mask: '', countryCode: '257', nome: 'Burundi' },
            { mask: '', countryCode: '855', nome: 'Camboja' },
            { mask: '', countryCode: '237', nome: 'Camarões' },
            { mask: '(000) 000-0000', countryCode: '1', nome: 'Canadá' },
            { mask: '', countryCode: '238', nome: 'Cabo Verde' },
            { mask: '', countryCode: '1345', nome: 'Ilhas Cayman' },
            { mask: '', countryCode: '236', nome: 'República Centro-Africana' },
            { mask: '', countryCode: '235', nome: 'Chade' },
            { mask: '', countryCode: '56', nome: 'Chile' },
            { mask: '', countryCode: '86', nome: 'China' },
            { mask: '', countryCode: '61', nome: 'Ilha Christmas' },
            { mask: '', countryCode: '672', nome: 'Ilhas Cocos (Keeling)' },
            { mask: '(0) 0000000', countryCode: '57', nome: 'Colômbia' },
            { mask: '', countryCode: '269', nome: 'Comores' },
            { mask: '', countryCode: '242', nome: 'Congo' },
            { mask: '', countryCode: '242', nome: 'Congo (DR)' },
            { mask: '', countryCode: '682', nome: 'Ilhas Cook' },
            { mask: '', countryCode: '506', nome: 'Costa Rica' },
            { mask: '', countryCode: '225', nome: 'Costa do Marfim' },
            { mask: '', countryCode: '385', nome: 'Croácia' },
            { mask: '', countryCode: '53', nome: 'Cuba' },
            { mask: '', countryCode: '357', nome: 'Chipre' },
            { mask: '', countryCode: '420', nome: 'República Tcheca' },
            { mask: '', countryCode: '45', nome: 'Dinamarca' },
            { mask: '', countryCode: '253', nome: 'Djibuti' },
            { mask: '', countryCode: '1767', nome: 'Dominica' },
            { mask: '', countryCode: '1809', nome: 'República Dominicana' },
            { mask: '', countryCode: '593', nome: 'Equador' },
            { mask: '', countryCode: '20', nome: 'Egito' },
            { mask: '', countryCode: '503', nome: 'El Salvador' },
            { mask: '', countryCode: '240', nome: 'Guiné Equatorial' },
            { mask: '', countryCode: '291', nome: 'Eritreia' },
            { mask: '', countryCode: '372', nome: 'Estônia' },
            { mask: '', countryCode: '251', nome: 'Etiópia' },
            { mask: '', countryCode: '500', nome: 'Ilhas Malvinas' },
            { mask: '', countryCode: '298', nome: 'Ilhas Faroe' },
            { mask: '', countryCode: '679', nome: 'Fiji' },
            { mask: '', countryCode: '358', nome: 'Finlândia' },
            { mask: '0 00 00 00 00', countryCode: '33', nome: 'França' },
            { mask: '', countryCode: '594', nome: 'Guiana Francesa' },
            { mask: '', countryCode: '689', nome: 'Polinésia Francesa' },
            {
                mask: '',
                countryCode: '33',
                nome: 'Terras Austrais e Antárticas Francesas',
            },
            { mask: '', countryCode: '241', nome: 'Gabão' },
            { mask: '', countryCode: '220', nome: 'Gâmbia' },
            { mask: '', countryCode: '995', nome: 'Geórgia' },
            { mask: '000 00000000', countryCode: '49', nome: 'Alemanha' },
            { mask: '', countryCode: '233', nome: 'Gana' },
            { mask: '', countryCode: '350', nome: 'Gibraltar' },
            { mask: '', countryCode: '30', nome: 'Grécia' },
            { mask: '', countryCode: '299', nome: 'Groelândia' },
            { mask: '', countryCode: '1473', nome: 'Granada' },
            { mask: '', countryCode: '590', nome: 'Guadalupe' },
            { mask: '', countryCode: '1671', nome: 'Guão' },
            { mask: '', countryCode: '502', nome: 'Guatemala' },
            { mask: '', countryCode: '224', nome: 'Guiné' },
            { mask: '', countryCode: '245', nome: 'Guiné-Bissau' },
            { mask: '', countryCode: '592', nome: 'Guiana' },
            { mask: '', countryCode: '509', nome: 'Haiti' },
            { mask: '', countryCode: '672', nome: 'Ilhas Heard e McDonald' },
            { mask: '', countryCode: '39', nome: 'Vaticano' },
            { mask: '', countryCode: '504', nome: 'Honduras' },
            { mask: '', countryCode: '852', nome: 'Hong Kong' },
            { mask: '', countryCode: '36', nome: 'Hungria' },
            { mask: '', countryCode: '354', nome: 'Islândia' },
            { mask: '', countryCode: '91', nome: 'Índia' },
            { mask: '', countryCode: '62', nome: 'Indonésia' },
            { mask: '', countryCode: '98', nome: 'Iran' },
            { mask: '', countryCode: '964', nome: 'Iraque' },
            { mask: '', countryCode: '353', nome: 'Irlanda' },
            { mask: '', countryCode: '972', nome: 'Israel' },
            { mask: '', countryCode: '39', nome: 'Italia' },
            { mask: '', countryCode: '1876', nome: 'Jamaica' },
            { mask: '', countryCode: '81', nome: 'Japão' },
            { mask: '', countryCode: '962', nome: 'Jornânia' },
            { mask: '', countryCode: '7', nome: 'Cazaquistão' },
            { mask: '', countryCode: '254', nome: 'Quênia' },
            { mask: '', countryCode: '686', nome: 'Kiribati' },
            { mask: '', countryCode: '850', nome: 'Coreia do Norte' },
            { mask: '', countryCode: '82', nome: 'Coreia do Sul' },
            { mask: '', countryCode: '965', nome: 'Kuwait' },
            { mask: '', countryCode: '996', nome: 'Quirguistão' },
            { mask: '', countryCode: '856', nome: 'Laos' },
            { mask: '', countryCode: '371', nome: 'Letônia' },
            { mask: '', countryCode: '961', nome: 'Líbano' },
            { mask: '', countryCode: '266', nome: 'Lesoto' },
            { mask: '', countryCode: '231', nome: 'Libéria' },
            { mask: '', countryCode: '218', nome: 'Líbia' },
            { mask: '', countryCode: '423', nome: 'Liechtenstein' },
            { mask: '', countryCode: '370', nome: 'Lituânia' },
            { mask: '', countryCode: '352', nome: 'Luxemburgo' },
            { mask: '', countryCode: '853', nome: 'Macao' },
            { mask: '', countryCode: '389', nome: 'Macedônia' },
            { mask: '', countryCode: '261', nome: 'Madagascar' },
            { mask: '', countryCode: '265', nome: 'Malawi' },
            { mask: '', countryCode: '60', nome: 'Malásia' },
            { mask: '', countryCode: '960', nome: 'Maldivas' },
            { mask: '', countryCode: '223', nome: 'Mali' },
            { mask: '', countryCode: '356', nome: 'Malta' },
            { mask: '', countryCode: '692', nome: 'Ilhas Marshall' },
            { mask: '', countryCode: '596', nome: 'Martinica' },
            { mask: '', countryCode: '222', nome: 'Mauritânia' },
            { mask: '', countryCode: '230', nome: 'Maurício' },
            { mask: '', countryCode: '269', nome: 'Mayotte' },
            { mask: '', countryCode: '52', nome: 'México' },
            { mask: '', countryCode: '691', nome: 'Micronésia' },
            { mask: '', countryCode: '373', nome: 'Moldova' },
            { mask: '', countryCode: '377', nome: 'Mônaco' },
            { mask: '', countryCode: '976', nome: 'Mongólia' },
            { mask: '', countryCode: '1664', nome: 'Montserrat' },
            { mask: '', countryCode: '212', nome: 'Marrocos' },
            { mask: '', countryCode: '258', nome: 'Moçambique' },
            { mask: '', countryCode: '95', nome: 'Birmânia' },
            { mask: '', countryCode: '264', nome: 'Namíbia' },
            { mask: '', countryCode: '674', nome: 'Nauru' },
            { mask: '', countryCode: '977', nome: 'Nepal' },
            { mask: '', countryCode: '31', nome: 'Holanda' },
            { mask: '', countryCode: '599', nome: 'Antilhas Holandesas' },
            { mask: '', countryCode: '687', nome: 'Nova Caledônia' },
            { mask: '', countryCode: '64', nome: 'Nova Zelândia' },
            { mask: '', countryCode: '505', nome: 'Nicarágua' },
            { mask: '', countryCode: '227', nome: 'Niger' },
            { mask: '', countryCode: '234', nome: 'Nigéria' },
            { mask: '', countryCode: '683', nome: 'Niue' },
            { mask: '', countryCode: '672', nome: 'Ilha Norfolk' },
            { mask: '', countryCode: '1670', nome: 'Ilhas Marianas do Norte' },
            { mask: '', countryCode: '47', nome: 'Noruega' },
            { mask: '', countryCode: '968', nome: 'Omã' },
            { mask: '', countryCode: '92', nome: 'Paquistão' },
            { mask: '', countryCode: '680', nome: 'Palau' },
            { mask: '', countryCode: '970', nome: 'Palestina' },
            { mask: '', countryCode: '507', nome: 'Panamá' },
            { mask: '', countryCode: '675', nome: 'Papua-Nova Guiné' },
            { mask: '', countryCode: '595', nome: 'Paraguai' },
            { mask: '', countryCode: '51', nome: 'Peru' },
            { mask: '', countryCode: '63', nome: 'Filipinas' },
            { mask: '', countryCode: '672', nome: 'Ilhas Picárnia' },
            { mask: '', countryCode: '48', nome: 'Polônia' },
            { mask: '000 000 000', countryCode: '351', nome: 'Portugal' },
            { mask: '', countryCode: '1787', nome: 'Porto Rico' },
            { mask: '', countryCode: '974', nome: 'Catar' },
            { mask: '', countryCode: '262', nome: 'Reunião' },
            { mask: '', countryCode: '40', nome: 'Romênia' },
            { mask: '', countryCode: '70', nome: 'Rússia' },
            { mask: '', countryCode: '250', nome: 'Ruanda' },
            { mask: '', countryCode: '290', nome: 'Santa Helena' },
            { mask: '', countryCode: '1869', nome: 'São Cristóvão' },
            { mask: '', countryCode: '1758', nome: 'Santa Lúcia' },
            { mask: '', countryCode: '508', nome: 'São Pedro e Miquelon' },
            { mask: '', countryCode: '1784', nome: 'São Vicente e Granadinas' },
            { mask: '', countryCode: '684', nome: 'Samoa' },
            { mask: '', countryCode: '378', nome: 'São Marino' },
            { mask: '', countryCode: '239', nome: 'Sao Tomé e Príncipe' },
            { mask: '', countryCode: '966', nome: 'Arábia Saudita' },
            { mask: '', countryCode: '221', nome: 'Senegal' },
            { mask: '', countryCode: '381', nome: 'Sérvia e Montenegro' },
            { mask: '', countryCode: '248', nome: 'Seicheles' },
            { mask: '', countryCode: '232', nome: 'República da Serra Leoa' },
            { mask: '', countryCode: '65', nome: 'Singapura' },
            { mask: '', countryCode: '421', nome: 'Eslováquia' },
            { mask: '', countryCode: '386', nome: 'Eslovênia' },
            { mask: '', countryCode: '677', nome: 'Ilhas Salomão' },
            { mask: '', countryCode: '252', nome: 'Somália' },
            { mask: '', countryCode: '27', nome: 'África do Sul' },
            {
                mask: '',
                countryCode: '500',
                nome: 'Ilhas Geórgia do Sul e Sandwich do Sul',
            },
            { mask: '000 00 00 00', countryCode: '34', nome: 'Espanha' },
            { mask: '', countryCode: '94', nome: 'Sri Lanka' },
            { mask: '', countryCode: '249', nome: 'Sudão' },
            { mask: '', countryCode: '597', nome: 'Suriname' },
            { mask: '', countryCode: '47', nome: 'Esvalbarde' },
            { mask: '', countryCode: '268', nome: 'Suazilândia' },
            { mask: '', countryCode: '46', nome: 'Suécia' },
            { mask: '', countryCode: '41', nome: 'Suiça' },
            { mask: '', countryCode: '963', nome: 'Síria' },
            { mask: '', countryCode: '886', nome: 'Taiwan' },
            { mask: '', countryCode: '992', nome: 'Tajiquistão' },
            { mask: '', countryCode: '255', nome: 'Tanzânia' },
            { mask: '', countryCode: '66', nome: 'Tailândia' },
            { mask: '', countryCode: '670', nome: 'Timor-Leste' },
            { mask: '', countryCode: '228', nome: 'Togo' },
            { mask: '', countryCode: '690', nome: 'Toquelau' },
            { mask: '', countryCode: '676', nome: 'Tonga' },
            { mask: '', countryCode: '1868', nome: 'Trinidad e Tobago' },
            { mask: '', countryCode: '216', nome: 'Tunísia' },
            { mask: '', countryCode: '90', nome: 'Turquia' },
            { mask: '', countryCode: '7370', nome: 'Turcomenistão' },
            { mask: '', countryCode: '1649', nome: 'Ilhas Turks e Caicos' },
            { mask: '', countryCode: '688', nome: 'Tuvalu' },
            { mask: '', countryCode: '256', nome: 'Uganda' },
            { mask: '', countryCode: '380', nome: 'Ucrânia' },
            { mask: '', countryCode: '971', nome: 'Emirados Árabes' },
            { mask: '00000 000000', countryCode: '44', nome: 'Reino Unido' },
            {
                mask: '(000) 000-0000',
                countryCode: '1',
                nome: 'Estados Unidos',
            },
            { mask: '', countryCode: '598', nome: 'Uruguai' },
            { mask: '', countryCode: '998', nome: 'Uzbequistão' },
            { mask: '', countryCode: '678', nome: 'Vanuatu' },
            { mask: '', countryCode: '58', nome: 'Venezuela' },
            { mask: '', countryCode: '84', nome: 'Vietnam' },
            { mask: '', countryCode: '1284', nome: 'Ilhas Virgens Inglesas' },
            { mask: '', countryCode: '1340', nome: 'Ilhas Virgens (USA)' },
            { mask: '', countryCode: '681', nome: 'Wallis e Futuna' },
            { mask: '', countryCode: '212', nome: 'Saara Ocidental' },
            { mask: '', countryCode: '967', nome: 'Iêmen' },
            { mask: '', countryCode: '260', nome: 'Zâmbia' },
            { mask: '', countryCode: '263', nome: 'Zimbábue' },
        ];
    }
}
Helper.ɵfac = function Helper_Factory(t) { return new (t || Helper)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_shared_messages_notification_service__WEBPACK_IMPORTED_MODULE_0__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.DomSanitizer)); };
Helper.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: Helper, factory: Helper.ɵfac });


/***/ }),

/***/ 1954:
/*!***************************************************!*\
  !*** ./src/app/layout/footer/footer.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class FooterComponent {
    constructor() {
        this.year = '';
    }
    ngOnInit() {
        let data = new Date();
        this.year = data.getFullYear();
        // console.log(this.year);
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 0, vars: 0, template: function FooterComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 7876:
/*!***************************************************!*\
  !*** ./src/app/layout/header/header.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var src_app_app_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/app.api */ 970);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _security_login_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../security/login/login.service */ 825);



class HeaderComponent {
    constructor(loginService) {
        this.loginService = loginService;
        this.logo = '';
    }
    ngOnInit() {
        this.logo = `${src_app_app_api__WEBPACK_IMPORTED_MODULE_0__.API_PATH_IMG}/sagesc/logo.png`;
    }
    logout() {
        this.loginService.logout();
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_security_login_login_service__WEBPACK_IMPORTED_MODULE_1__.LoginService)); };
HeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 0, vars: 0, template: function HeaderComponent_Template(rf, ctx) { }, styles: [".brand-icon[_ngcontent-%COMP%]{\n    margin-left: 1% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMEJBQTBCO0FBQzlCIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJyYW5kLWljb257XG4gICAgbWFyZ2luLWxlZnQ6IDElICFpbXBvcnRhbnQ7XG59Il19 */"] });


/***/ }),

/***/ 2738:
/*!***********************************************!*\
  !*** ./src/app/layout/menu/menu.component.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuComponent": () => (/* binding */ MenuComponent)
/* harmony export */ });
/* harmony import */ var _app_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../app.api */ 970);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var src_app_security_login_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/security/login/login.service */ 825);
/* harmony import */ var _menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.service */ 9781);
// import { EmpresaService } from './../../empresa/empresa.service';





class MenuComponent {
    constructor(router, loginService, menuService) {
        this.router = router;
        this.loginService = loginService;
        this.menuService = menuService;
        this.mostrarMenu = "";
        this.menus = [];
        this.empresa = [];
        this.img_logo = "assets/img/profile-photos/1.png";
    }
    ngAfterContentInit() { }
    ngAfterViewInit() { }
    ngOnInit() {
        this.userLogado();
        // this.getEmpresa();
        // this.menu();
    }
    menuOpenOrHide() {
        var element = document.getElementById("container");
        element.classList.remove("mainnav-sm");
        element.classList.add("mainnav-lg");
    }
    userLogado() {
        this.pessoa = this.loginService.getUser();
        if (this.pessoa.img) {
            this.img_logo = _app_api__WEBPACK_IMPORTED_MODULE_0__.API_PATH_IMG + "/funcionario/" + this.pessoa.img;
        }
    }
    menu() {
        this.menuService.getMenu().subscribe((menus) => {
            this.menus = menus;
        });
    }
    getEmpresa() {
        // this.empresaService.getEmpresas().subscribe(empresa=>{
        //   this.empresa = empresa['dados'][0]
        //   this.img_logo = `${API_PATH_IMG}/empresa/${empresa['dados'][0].img_logo}`
        //   this.img_capa = `${API_PATH_IMG}/empresa/${empresa['dados'][0].img_capa}`
        // })
    }
}
MenuComponent.ɵfac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_security_login_login_service__WEBPACK_IMPORTED_MODULE_1__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_menu_service__WEBPACK_IMPORTED_MODULE_2__.MenuService)); };
MenuComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: MenuComponent, selectors: [["app-menu"]], decls: 0, vars: 0, template: function MenuComponent_Template(rf, ctx) { }, styles: [".menuApp[_ngcontent-%COMP%] {\n\tposition: fixed;\n\tbottom: 0;\n\twidth: 100%;\n\tbackground-color: #25476a;\n\tcolor: #fff;\n\n\tz-index: 999;\n\talign-items: center;\n\theight: 54px;\n\tdisplay: flex;\n}\n.items[_ngcontent-%COMP%] {\n\talign-content: center;\n\talign-items: center;\n\n\tdisplay: flex;\n\tflex: 1;\n\tflex-direction: row;\n\tflex-wrap: wrap;\n\n\tjustify-content: space-between;\n\tpadding: 0 15px;\n}\n.item[_ngcontent-%COMP%] {\n\tcolor: #fff !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLGVBQWU7Q0FDZixTQUFTO0NBQ1QsV0FBVztDQUNYLHlCQUF5QjtDQUN6QixXQUFXOztDQUVYLFlBQVk7Q0FLWixtQkFBbUI7Q0FDbkIsWUFBWTtDQUNaLGFBQWE7QUFDZDtBQUNBO0NBR0MscUJBQXFCO0NBSXJCLG1CQUFtQjs7Q0FFbkIsYUFBYTtDQUNiLE9BQU87Q0FDUCxtQkFBbUI7Q0FDbkIsZUFBZTs7Q0FFZiw4QkFBOEI7Q0FDOUIsZUFBZTtBQUNoQjtBQUVBO0NBQ0Msc0JBQXNCO0FBQ3ZCIiwiZmlsZSI6Im1lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZW51QXBwIHtcblx0cG9zaXRpb246IGZpeGVkO1xuXHRib3R0b206IDA7XG5cdHdpZHRoOiAxMDAlO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMjU0NzZhO1xuXHRjb2xvcjogI2ZmZjtcblxuXHR6LWluZGV4OiA5OTk7XG5cblx0LXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcblx0LXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xuXHQtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRoZWlnaHQ6IDU0cHg7XG5cdGRpc3BsYXk6IGZsZXg7XG59XG4uaXRlbXMge1xuXHQtd2Via2l0LWFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcblx0LW1zLWZsZXgtbGluZS1wYWNrOiBjZW50ZXI7XG5cdGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcblx0LXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcblx0LXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xuXHQtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXg6IDE7XG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdGZsZXgtd3JhcDogd3JhcDtcblxuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdHBhZGRpbmc6IDAgMTVweDtcbn1cblxuLml0ZW0ge1xuXHRjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufVxuIl19 */"] });


/***/ }),

/***/ 9781:
/*!*********************************************!*\
  !*** ./src/app/layout/menu/menu.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuService": () => (/* binding */ MenuService)
/* harmony export */ });
/* harmony import */ var _app_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../app.api */ 970);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _security_login_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../security/login/login.service */ 825);





class MenuService {
    constructor(http, router, loginService) {
        this.http = http;
        this.router = router;
        this.loginService = loginService;
    }
    getMenu() {
        return this.http.get(`${_app_api__WEBPACK_IMPORTED_MODULE_0__.API}/menu`);
    }
}
MenuService.ɵfac = function MenuService_Factory(t) { return new (t || MenuService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_security_login_login_service__WEBPACK_IMPORTED_MODULE_1__.LoginService)); };
MenuService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: MenuService, factory: MenuService.ɵfac });


/***/ }),

/***/ 7415:
/*!***********************************************!*\
  !*** ./src/app/pipes/boolean-message.pipe.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BooleanMessagePipe": () => (/* binding */ BooleanMessagePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class BooleanMessagePipe {
    transform(value, args, args1) {
        // console.log(args);
        return this.tratarBo(value, args);
    }
    tratarBo(value, args) {
        let texto = '';
        switch (args) {
            case 'simnao': {
                texto = 'SIM';
                if (value == '0') {
                    texto = 'NÃO';
                }
                break;
            }
            case 'bo_ativo': {
                texto = 'ATIVO';
                if (value == '0') {
                    texto = 'INATIVO';
                }
                break;
            }
            case 'bo_pago_withbg': {
                texto =
                    "<div class='label label-table label-danger'>A pagar</div>";
                if (value == '1') {
                    texto =
                        "<div class='label label-table label-success'>Pago</div>";
                }
                break;
            }
            case 'bo_ativo_withbg': {
                texto =
                    "<div class='label label-table label-success'>Ativo</div>";
                if (value == '0') {
                    texto =
                        "<div class='label label-table label-danger'>Inativo</div>";
                }
                break;
            }
            case 'bo_incluso_nota_withbg': {
                texto =
                    "<div class='label label-table label-success'>Incluso</div>";
                if (value == '0') {
                    texto = "<div class='label label-table'>não incluso</div>";
                }
                break;
            }
            case 'tp_pessoa': {
                texto = 'Fisica';
                if (value == 'juridica') {
                    texto = 'Juridica';
                }
                break;
            }
            case 'bo_produto_servico': {
                texto = 'Serviço';
                if (value == '1') {
                    texto = 'Produto';
                }
                break;
            }
            case 'pagamento': {
                texto =
                    "<span class='label label-table label-success'>PAGO</span>";
                if (value == '0') {
                    texto =
                        "<span class='label label-table label-danger'>ABERTO</span>";
                }
                break;
            }
            case 'aguardando': {
                if (value == '0') {
                    texto = 'Aguardando Pagamento';
                }
                break;
            }
            case 'frequencia-cor': {
                texto = '';
                if (value == 'p') {
                    texto = 'green';
                }
                if (value == 'f') {
                    texto = 'red';
                }
                if (value == 'j') {
                    texto = '';
                }
                if (value == '') {
                    texto = '';
                }
                if (value == '+') {
                    texto = 'green';
                }
                if (value == '-') {
                    texto = '#ff0000';
                }
                if (parseInt(value) < 0) {
                    texto = '#ff0000';
                }
                break;
            }
            default: {
                break;
            }
        }
        return texto;
    }
}
BooleanMessagePipe.ɵfac = function BooleanMessagePipe_Factory(t) { return new (t || BooleanMessagePipe)(); };
BooleanMessagePipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "booleanMessage", type: BooleanMessagePipe, pure: true });


/***/ }),

/***/ 7436:
/*!***************************************!*\
  !*** ./src/app/pipes/helpers.pipe.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HelpersPipe": () => (/* binding */ HelpersPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class HelpersPipe {
    transform(value, args, args1) {
        return this.oquefazer(value, args, args1);
    }
    oquefazer(value, args, args1) {
        let texto = '';
        switch (args) {
            case 'isDevMode': {
                return this.isDevMode(value, args1);
                break;
            }
            case 'statusString': {
                return this.statusString(value);
                break;
            }
            case 'phoneByCountry': {
                return this.phoneByCountry(value, args1);
                break;
            }
            default: {
                break;
            }
        }
        return texto;
    }
    statusString(value) {
        if (value == undefined) {
            return;
        }
        const status = [
            { id: 'pc', status: 'Problemas com cartão' },
            { id: 'ld', status: 'Ligar depois' },
            { id: 'n', status: 'Não tem interesse' },
            { id: 'c', status: 'Comprou' },
            { id: 'a', status: 'Aguardando seu telefonema' },
        ];
        var result = status.filter(function (el) {
            return el.id == value;
        });
        if (result) {
            return result[0].status;
        }
    }
    isDevMode(value, isdev) {
        if (isdev) {
            return value.replace(/public\//g, '');
        }
        return value;
    }
    phoneByCountry(value, prefix) {
        var arPrefix = {
            1: { reg: /(\d{3})(\d{3})(\d{4})/, mask: '($1) $2-$3' },
            44: { reg: /(\d{5})(\d{6})/, mask: '$1 $2' },
            351: { reg: /(\d{3})(\d{3})(\d{3})/, mask: '$1 $2-$3' },
            33: {
                reg: /(\d{1})(\d{2})(\d{2})(\d{2})(\d{2})/,
                mask: '$1 $2 $3 $4 $5',
            },
            34: {
                reg: /(\d{3})(\d{2})(\d{2})(\d{2})/,
                mask: '$1 $2 $3 $4',
            },
            55: { reg: /(\d{2})(\d{5})(\d{4})/, mask: '($1) $2-$3' },
        };
        let ex = arPrefix[prefix];
        if (ex == undefined)
            return value;
        return value.replace(ex.reg, ex.mask);
    }
}
HelpersPipe.ɵfac = function HelpersPipe_Factory(t) { return new (t || HelpersPipe)(); };
HelpersPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "helpers", type: HelpersPipe, pure: true });


/***/ }),

/***/ 4885:
/*!*************************************!*\
  !*** ./src/app/pipes/nl2br.pipe.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Nl2BrPipe": () => (/* binding */ Nl2BrPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class Nl2BrPipe {
    transform(value) {
        return value.replace(/\n/g, '<br/>');
    }
}
Nl2BrPipe.ɵfac = function Nl2BrPipe_Factory(t) { return new (t || Nl2BrPipe)(); };
Nl2BrPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "nl2br", type: Nl2BrPipe, pure: true });


/***/ }),

/***/ 1656:
/*!*****************************************!*\
  !*** ./src/app/pipes/safe-html.pipe.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SafeHtml": () => (/* binding */ SafeHtml)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 1570);


class SafeHtml {
    constructor(_sanitizer) {
        this._sanitizer = _sanitizer;
    }
    transform(value, type) {
        switch (type) {
            case 'html':
                return this._sanitizer.bypassSecurityTrustHtml(value);
            case 'style':
                return this._sanitizer.bypassSecurityTrustStyle(value);
            case 'script':
                return this._sanitizer.bypassSecurityTrustScript(value);
            case 'url':
                return this._sanitizer.bypassSecurityTrustUrl(value);
            case 'resourceUrl':
                return this._sanitizer.bypassSecurityTrustResourceUrl(value);
            default:
                throw new Error(`Unable to bypass security for invalid type: `);
        }
    }
}
SafeHtml.ɵfac = function SafeHtml_Factory(t) { return new (t || SafeHtml)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.DomSanitizer, 16)); };
SafeHtml.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "safeHtml", type: SafeHtml, pure: true });


/***/ }),

/***/ 2046:
/*!**********************************************!*\
  !*** ./src/app/security/auth.interceptor.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthInterceptor": () => (/* binding */ AuthInterceptor)
/* harmony export */ });
/* harmony import */ var _security_login_login_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../security/login/login.service */ 825);
/* harmony import */ var _shared_loader_loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/loader/loader.service */ 6845);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);



class AuthInterceptor {
    constructor(injector) {
        this.injector = injector;
    }
    intercept(request, next) {
        const loginService = this.injector.get(_security_login_login_service__WEBPACK_IMPORTED_MODULE_0__.LoginService);
        const loaderService = this.injector.get(_shared_loader_loader_service__WEBPACK_IMPORTED_MODULE_1__.LoaderService);
        loaderService.isLoad(true);
        if (loginService.isLoggedIn()) {
            const authRequest = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${localStorage.getItem('dG9rZW5fbWVtb3JpemU=')}`,
                },
            });
            return next.handle(authRequest);
        }
        else {
            return next.handle(request);
        }
    }
}
AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) { return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injector)); };
AuthInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AuthInterceptor, factory: AuthInterceptor.ɵfac });


/***/ }),

/***/ 3922:
/*!********************************************!*\
  !*** ./src/app/security/loggedin.guard.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoggedInGuard": () => (/* binding */ LoggedInGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _login_login_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login/login.service */ 825);


class LoggedInGuard {
    constructor(loginService) {
        this.loginService = loginService;
        this.hasPermission = true;
    }
    checkAuthentication(path) {
        const loggedIn = this.loginService.isLoggedIn();
        // console.log(loggedIn)
        if (!loggedIn) {
            this.loginService.handleLogin();
        }
        return loggedIn;
    }
    canLoad(route) {
        // return false;
        if (!this.checkAuthentication(route.path)) {
            return false;
        }
    }
    canActivate(activatedRoute, routerState) {
        return this.checkAuthentication(activatedRoute.routeConfig.path);
    }
}
LoggedInGuard.ɵfac = function LoggedInGuard_Factory(t) { return new (t || LoggedInGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_login_login_service__WEBPACK_IMPORTED_MODULE_0__.LoginService)); };
LoggedInGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: LoggedInGuard, factory: LoggedInGuard.ɵfac });


/***/ }),

/***/ 3035:
/*!***************************************************!*\
  !*** ./src/app/security/login/login.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.service */ 825);
/* harmony import */ var _shared_messages_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/messages/notification.service */ 4635);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _shared_loader_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/loader/loader.service */ 6845);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _shared_input_input_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/input/input.component */ 235);









function LoginComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Wi");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "se");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "ller");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} }
function LoginComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "wi");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "se");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "ller");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Create account");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function LoginComponent_form_6_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "form", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "app-input-container");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "app-input-container");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LoginComponent_form_6_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r5.login(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, " Entrar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, " Esqueci a senha ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Novo no Wi");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "se");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "ller?");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LoginComponent_form_6_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r7.changeToNewAccount(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, " Crie sua conta ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx_r3.loginForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r3.loginForm.invalid);
} }
function LoginComponent_form_7_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LoginComponent_form_7_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r9.newAccount(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Crie sua conta ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r8.newAccountForm.invalid);
} }
function LoginComponent_form_7_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "form", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "app-input-container");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "app-input-container");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "app-input-container");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, LoginComponent_form_7_button_7_Template, 2, 1, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "J\u00E1 tem uma conta?");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LoginComponent_form_7_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r11.changeToLogin(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, " Fa\u00E7a login ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx_r4.newAccountForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r4.showButton);
} }
class LoginComponent {
    constructor(fb, loginService, notificationService, activatedRoute, router, loaderService) {
        this.fb = fb;
        this.loginService = loginService;
        this.notificationService = notificationService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.loaderService = loaderService;
        this.isNewAccount = false;
        this.showButton = true;
    }
    ngOnInit() {
        // this.loaderService.isLoad(true);
        this.loginForm = this.fb.group({
            email: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]),
            password: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]),
        });
        this.newAccountForm = this.fb.group({
            nome: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]),
            email: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]),
            password: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]),
        });
        //btoa é para criptografar com javascript puro
        this.navigateTo =
            this.activatedRoute.snapshot.params['to'] || btoa('/');
        // console.log(atob(this.navigateTo));
    }
    changeToNewAccount() {
        // this.notificationService.notifyInfo(
        // 	'No momento, estamos fechados para novos usuários.'
        // );
        // return;
        this.isNewAccount = true;
    }
    changeToLogin() {
        this.isNewAccount = false;
    }
    newAccount() {
        this.showButton = false;
        this.loaderService.isLoad(true);
        this.loginService
            .newAccount(this.newAccountForm.value)
            .subscribe((res) => {
            this.showButton = true;
            this.loginForm.controls['email'].setValue(res['dados'].email);
            this.loginForm.controls['password'].setValue(this.newAccountForm.value.password);
            // this.loaderService.isLoad(false);
            this.login();
        });
    }
    login() {
        this.loaderService.isLoad(true);
        this.loginService
            .login(this.loginForm.value.email, this.loginForm.value.password)
            .subscribe((user) => {
            // console.log(user.me['nome']);
            location.replace('/');
            // this.notificationService.notifySweet( `Bem vindo, ${user.me['nome']}` );
            this.loaderService.isLoad(false);
        }, (response) => {
            this.loaderService.isLoad(false);
            if (response.status === 401) {
                this.notificationService.notifyError('Usuário ou senha inválida');
            }
            if (response.status === 0) {
                this.notificationService.notifyError('SERVIDOR OFFILINE');
            }
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_login_service__WEBPACK_IMPORTED_MODULE_0__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_messages_notification_service__WEBPACK_IMPORTED_MODULE_1__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_loader_loader_service__WEBPACK_IMPORTED_MODULE_2__.LoaderService)); };
LoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 9, vars: 4, consts: [[1, "login-box"], [1, "login"], [4, "ngIf", "ngIfElse"], ["elseTemplateNewAccount", ""], [3, "formGroup", 4, "ngIf"], [1, "bg-img"], [1, "cardTitle"], [1, "title"], [2, "text-decoration", "underline"], [1, "subTitle"], [3, "formGroup"], ["type", "text", "formControlName", "email", "placeholder", "E-mail", "autofocus", "", 1, "form-control"], ["type", "password", "formControlName", "password", "placeholder", "Password", 1, "form-control"], [1, "btn", "btn-primary", "btn-lg", "btn-block", "btnentrar", 3, "disabled", "click"], ["target", "_BLANK", "href", "https://api.whatsapp.com/send/?phone=5564999967567&text=Estou entrando em contato porque esqueci a minha senha e o sistema ainda n\u00E3o tem a op\u00E7\u00E3o de alter\u00E1-la.", "title", "Enviar link"], [1, "btn", "btn-secondary", "btn-block", "btnNewAccount", 3, "click"], ["type", "text", "formControlName", "nome", "placeholder", "Name", "autofocus", "", 1, "form-control"], ["type", "text", "formControlName", "email", "placeholder", "E-mail", "email", "", 1, "form-control"], ["class", "btn btn-primary btn-lg btn-block btnentrar", 3, "disabled", "click", 4, "ngIf"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, LoginComponent_ng_container_2_Template, 9, 0, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, LoginComponent_ng_template_3_Template, 9, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, LoginComponent_form_6_Template, 18, 2, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, LoginComponent_form_7_Template, 13, 2, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "div", 5);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.isNewAccount)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.isNewAccount);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isNewAccount);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _shared_input_input_component__WEBPACK_IMPORTED_MODULE_3__.InputComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.EmailValidator], styles: ["*[_ngcontent-%COMP%] {\n\t\n}\n\n.bg-img[_ngcontent-%COMP%] {\n\tposition: absolute;\n\ttop: 0;\n\tbottom: 0;\n\tleft: 0;\n\tright: 0;\n\t\n\tbackground-image: url(\"/../../../assets/img/bg-img/background.png\");\n\tbackground-repeat: no-repeat;\n\tbackground-attachment: fixed;\n\tbackground-size: cover;\n}\n\n.login-box[_ngcontent-%COMP%] {\n\tposition: absolute;\n\twidth: 100vw;\n\theight: 100vh;\n\tdisplay: flex;\n\tflex: 1;\n\talign-items: center;\n\tjustify-content: center;\n}\n\n.login[_ngcontent-%COMP%] {\n\tposition: relative;\n\tpadding: 25px;\n\twidth: 400px;\n\tmin-width: 270px;\n\tbackground: var(--background);\n\tz-index: 999;\n\tmargin: 0 auto;\n\tborder: 0;\n\tbox-shadow: none;\n\tborder-radius: 8px;\n\t\n}\n\ninput[_ngcontent-%COMP%] {\n\twidth: calc(100%);\n\tmargin: 5px 0;\n\tpadding: 15px 0;\n\tbackground: var(--backgroundInput) !important;\n\tcolor: var(--backgroundInputColor) !important;\n}\n\n.btnentrar[_ngcontent-%COMP%] {\n\twidth: calc(100%);\n\tmargin-top: 15px;\n\tpadding: 10px 0;\n\tborder: transparent;\n\n\tfont-weight: bold;\n\tfont-size: 14px;\n\tline-height: 16px;\n\ttext-transform: uppercase;\n\t-webkit-text-decoration: none;\n\ttext-decoration: none;\n}\n\n.btnNewAccount[_ngcontent-%COMP%] {\n\twidth: calc(100%);\n\tmargin-top: 15px;\n\tpadding: 10px 0;\n\tborder: 1px solid var(--backgroundColor);\n\tcolor: var(--backgroundColor);\n\n\tfont-size: 1.3rem;\n}\n\n.btnNewAccount[_ngcontent-%COMP%]:hover {\n\tcolor: var(--background);\n}\n\n.cardTitle[_ngcontent-%COMP%] {\n\ttext-align: center;\n}\n\n.cardTitle[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n\tfont-size: 2em;\n\tcolor: var(--backgroundColor);\n}\n\n.cardTitle[_ngcontent-%COMP%]   .subTitle[_ngcontent-%COMP%] {\n\tcolor: #bababa;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsTUFBTTtDQUNOLFNBQVM7Q0FDVCxPQUFPO0NBQ1AsUUFBUTtDQUNSLGtCQUFrQjtDQUNsQixtRUFBbUU7Q0FDbkUsNEJBQTRCO0NBQzVCLDRCQUE0QjtDQUM1QixzQkFBc0I7QUFDdkI7O0FBQ0E7Q0FDQyxrQkFBa0I7Q0FDbEIsWUFBWTtDQUNaLGFBQWE7Q0FDYixhQUFhO0NBQ2IsT0FBTztDQUNQLG1CQUFtQjtDQUNuQix1QkFBdUI7QUFDeEI7O0FBQ0E7Q0FDQyxrQkFBa0I7Q0FDbEIsYUFBYTtDQUNiLFlBQVk7Q0FDWixnQkFBZ0I7Q0FDaEIsNkJBQTZCO0NBQzdCLFlBQVk7Q0FDWixjQUFjO0NBQ2QsU0FBUztDQUNULGdCQUFnQjtDQUNoQixrQkFBa0I7Q0FDbEIsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsaUJBQWlCO0NBQ2pCLGFBQWE7Q0FDYixlQUFlO0NBQ2YsNkNBQTZDO0NBQzdDLDZDQUE2QztBQUM5Qzs7QUFDQTtDQUNDLGlCQUFpQjtDQUNqQixnQkFBZ0I7Q0FDaEIsZUFBZTtDQUNmLG1CQUFtQjs7Q0FFbkIsaUJBQWlCO0NBQ2pCLGVBQWU7Q0FDZixpQkFBaUI7Q0FDakIseUJBQXlCO0NBQ3pCLDZCQUE2QjtDQUM3QixxQkFBcUI7QUFDdEI7O0FBQ0E7Q0FDQyxpQkFBaUI7Q0FDakIsZ0JBQWdCO0NBQ2hCLGVBQWU7Q0FDZix3Q0FBd0M7Q0FDeEMsNkJBQTZCOztDQUU3QixpQkFBaUI7QUFDbEI7O0FBQ0E7Q0FDQyx3QkFBd0I7QUFDekI7O0FBQ0E7Q0FDQyxrQkFBa0I7QUFDbkI7O0FBQ0E7Q0FDQyxjQUFjO0NBQ2QsNkJBQTZCO0FBQzlCOztBQUNBO0NBQ0MsY0FBYztBQUNmIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcblx0LyogaGVpZ2h0OiAxMDB2aDsgKi9cbn1cblxuLmJnLWltZyB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0dG9wOiAwO1xuXHRib3R0b206IDA7XG5cdGxlZnQ6IDA7XG5cdHJpZ2h0OiAwO1xuXHQvKiBvcGFjaXR5OiAwLjI7ICovXG5cdGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi8uLi8uLi8uLi9hc3NldHMvaW1nL2JnLWltZy9iYWNrZ3JvdW5kLnBuZ1wiKTtcblx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcblx0YmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcblx0YmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbi5sb2dpbi1ib3gge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHdpZHRoOiAxMDB2dztcblx0aGVpZ2h0OiAxMDB2aDtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleDogMTtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4ubG9naW4ge1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdHBhZGRpbmc6IDI1cHg7XG5cdHdpZHRoOiA0MDBweDtcblx0bWluLXdpZHRoOiAyNzBweDtcblx0YmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZCk7XG5cdHotaW5kZXg6IDk5OTtcblx0bWFyZ2luOiAwIGF1dG87XG5cdGJvcmRlcjogMDtcblx0Ym94LXNoYWRvdzogbm9uZTtcblx0Ym9yZGVyLXJhZGl1czogOHB4O1xuXHQvKiB0b3A6IDIwMHB4OyAqL1xufVxuXG5pbnB1dCB7XG5cdHdpZHRoOiBjYWxjKDEwMCUpO1xuXHRtYXJnaW46IDVweCAwO1xuXHRwYWRkaW5nOiAxNXB4IDA7XG5cdGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmRJbnB1dCkgIWltcG9ydGFudDtcblx0Y29sb3I6IHZhcigtLWJhY2tncm91bmRJbnB1dENvbG9yKSAhaW1wb3J0YW50O1xufVxuLmJ0bmVudHJhciB7XG5cdHdpZHRoOiBjYWxjKDEwMCUpO1xuXHRtYXJnaW4tdG9wOiAxNXB4O1xuXHRwYWRkaW5nOiAxMHB4IDA7XG5cdGJvcmRlcjogdHJhbnNwYXJlbnQ7XG5cblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdGZvbnQtc2l6ZTogMTRweDtcblx0bGluZS1oZWlnaHQ6IDE2cHg7XG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cdC13ZWJraXQtdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uYnRuTmV3QWNjb3VudCB7XG5cdHdpZHRoOiBjYWxjKDEwMCUpO1xuXHRtYXJnaW4tdG9wOiAxNXB4O1xuXHRwYWRkaW5nOiAxMHB4IDA7XG5cdGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJhY2tncm91bmRDb2xvcik7XG5cdGNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kQ29sb3IpO1xuXG5cdGZvbnQtc2l6ZTogMS4zcmVtO1xufVxuLmJ0bk5ld0FjY291bnQ6aG92ZXIge1xuXHRjb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XG59XG4uY2FyZFRpdGxlIHtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNhcmRUaXRsZSAudGl0bGUge1xuXHRmb250LXNpemU6IDJlbTtcblx0Y29sb3I6IHZhcigtLWJhY2tncm91bmRDb2xvcik7XG59XG4uY2FyZFRpdGxlIC5zdWJUaXRsZSB7XG5cdGNvbG9yOiAjYmFiYWJhO1xufVxuIl19 */"] });


/***/ }),

/***/ 825:
/*!*************************************************!*\
  !*** ./src/app/security/login/login.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginService": () => (/* binding */ LoginService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 9170);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 8636);
/* harmony import */ var _app_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../app.api */ 970);
/* harmony import */ var _shared_messages_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/messages/notification.service */ 4635);
/* harmony import */ var _shared_loader_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/loader/loader.service */ 6845);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helper */ 7854);










class LoginService {
    constructor(notificationService, loaderService, http, router, helper) {
        this.notificationService = notificationService;
        this.loaderService = loaderService;
        this.http = http;
        this.router = router;
        this.helper = helper;
        this.mostrarMenu = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        //pegando a rota que o usuario estava antes de clicar para logar.
        this.router.events
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.filter)((e) => e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__.NavigationEnd))
            .subscribe((e) => (this.lastUrl = e.url));
    }
    me() {
        return this.http.get(`${_app_api__WEBPACK_IMPORTED_MODULE_0__.API}/me`);
    }
    userAllowed() {
        let user = localStorage.getItem('user');
        if (user == null) {
            return false;
        }
        // let userDecrip = this.helper.decrypt(user);
        // let client = JSON.parse(atob(userDecrip));
        // if (client.id > 6) {
        // 	return false;
        // }
        return true;
    }
    getUser() {
        let user = localStorage.getItem('user');
        if (user == null) {
            this.logoutForce();
            return false;
        }
        let userDecrip = this.helper.decrypt(user);
        let client = JSON.parse(atob(userDecrip));
        return client;
    }
    isLoggedIn() {
        if (localStorage.getItem('dG9rZW5fbWVtb3JpemU=') !== null) {
            this.mostrarMenu.emit(true);
            return true;
        }
        // this.logout();
        return false;
    }
    logoutForce() {
        localStorage.removeItem('dG9rZW5fbWVtb3JpemU=');
        localStorage.removeItem('user');
        localStorage.removeItem('empresa');
        // this.mostrarMenu.emit(false);
        this.user = undefined;
        this.handleLogin();
    }
    logout() {
        this.http.post(`${_app_api__WEBPACK_IMPORTED_MODULE_0__.API}/auth/logout`, {}).subscribe((resp) => {
            localStorage.removeItem('dG9rZW5fbWVtb3JpemU=');
            localStorage.removeItem('user');
            localStorage.removeItem('empresa');
            // this.mostrarMenu.emit(false);
            this.user = undefined;
            this.loaderService.isLoad(false);
            this.handleLogin();
        });
        // this.mostrarMenu.emit(false);
        // this.handleLogin();
    }
    newAccount(form) {
        return this.http.post(`${_app_api__WEBPACK_IMPORTED_MODULE_0__.API}/user/new`, form);
    }
    login(login, password) {
        return this.http
            .post(`${_app_api__WEBPACK_IMPORTED_MODULE_0__.API}/auth/login`, {
            email: login,
            password: password,
        })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)((user) => {
            localStorage.setItem('dG9rZW5fbWVtb3JpemU=', user.access_token);
            // localStorage.setItem('user', btoa(JSON.stringify(user.empresa)));
            let userString = JSON.stringify(user.me);
            let encrypt = btoa(userString);
            let myencrypt = this.helper.encrypt(encrypt);
            localStorage.setItem('user', myencrypt);
            let empresaString = this.helper.encrypt(btoa(JSON.stringify(user.empresa)));
            localStorage.setItem('empresa', empresaString);
            (this.user = user), this.mostrarMenu.emit(true);
        }));
    }
    bloquearMenu() {
        this.mostrarMenu.emit(false);
        localStorage.removeItem('dG9rZW5fbWVtb3JpemU=');
        this.handleLogin();
    }
    navGoTo(path) {
        this.router.navigate([path]);
    }
    notificationError(msg) {
        this.notificationService.notifyError(msg);
    }
    handleLogin(path = this.lastUrl) {
        // console.log("ultimo "+path);
        // console.log('vai mandar para o login');
        // this.router.navigate(['/login',path]);
        this.router.navigate(['/login']);
        // this.router.navigate(['/login',btoa(path)])
    }
}
LoginService.ɵfac = function LoginService_Factory(t) { return new (t || LoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_shared_messages_notification_service__WEBPACK_IMPORTED_MODULE_1__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_shared_loader_loader_service__WEBPACK_IMPORTED_MODULE_2__.LoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_helper__WEBPACK_IMPORTED_MODULE_3__.Helper)); };
LoginService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: LoginService, factory: LoginService.ɵfac });


/***/ }),

/***/ 9597:
/*!*******************************************************************!*\
  !*** ./src/app/shared/commemorations/commemorations.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommemorationsComponent": () => (/* binding */ CommemorationsComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 2702);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _commemorations_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commemorations.service */ 9901);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4364);




function CommemorationsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "lottie-animation-view", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx_r0.lottieConfig);
} }
class CommemorationsComponent {
    constructor(commemorationsService) {
        this.commemorationsService = commemorationsService;
        this.showCommemorations = false;
        this.lastCommemorations = 'christmas';
        this.dateFrom = "01/12/2019";
        this.dateTo = "30/12/2019";
        this.timeAnimationInDisplay = 6000;
        this.lottieConfig = {
            path: 'assets/animations/json/christmas.json',
            autoplay: true,
            loop: true
        };
    }
    ngOnInit() {
        this.commemorations();
    }
    timeToHidden(time) {
        const numbers = (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.timer)(time);
        numbers.subscribe(x => this.showCommemorations = false);
    }
    inTime() {
        var dateFrom = this.dateFrom;
        var dateTo = this.dateTo;
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        var dateCheck = `${dd}/${mm}/${yyyy}`;
        var d1 = dateFrom.split("/");
        var d2 = dateTo.split("/");
        var c = dateCheck.split("/");
        var from = new Date(parseInt(d1[2]), parseInt(d1[1]) - 1, parseInt(d1[0])); // -1 because months are from 0 to 11
        var to = new Date(parseInt(d2[2]), parseInt(d2[1]) - 1, parseInt(d2[0]));
        var check = new Date(parseInt(c[2]), parseInt(c[1]) - 1, parseInt(c[0]));
        return check > from && check < to;
    }
    commemorations() {
        let commemorations = this.getLocalStorageCommemorations();
        if (this.inTime()) {
            if (commemorations == '' || (commemorations != this.lastCommemorations)) {
                this.showCommemorations = true;
                this.setLocalStorageCommemorations();
                this.timeToHidden(this.timeAnimationInDisplay);
            }
        }
        else {
            this.showCommemorations = false;
            this.setLocalStorageCommemorations();
        }
    }
    getLocalStorageCommemorations() {
        return localStorage.getItem('commemorations') || '';
    }
    setLocalStorageCommemorations() {
        localStorage.setItem('commemorations', this.lastCommemorations);
    }
}
CommemorationsComponent.ɵfac = function CommemorationsComponent_Factory(t) { return new (t || CommemorationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_commemorations_service__WEBPACK_IMPORTED_MODULE_0__.CommemorationsService)); };
CommemorationsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CommemorationsComponent, selectors: [["app-commemorations"]], decls: 1, vars: 1, consts: [["class", "commemorations", 4, "ngIf"], [1, "commemorations"], [3, "options"]], template: function CommemorationsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CommemorationsComponent_div_0_Template, 2, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showCommemorations);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf], styles: [".commemorations[_ngcontent-%COMP%] {\n\tposition: absolute;\n\ttop: 40px;\n\tright: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1lbW9yYXRpb25zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxrQkFBa0I7Q0FDbEIsU0FBUztDQUNULFFBQVE7QUFDVCIsImZpbGUiOiJjb21tZW1vcmF0aW9ucy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbW1lbW9yYXRpb25zIHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR0b3A6IDQwcHg7XG5cdHJpZ2h0OiAwO1xufSJdfQ== */"] });


/***/ }),

/***/ 9901:
/*!*****************************************************************!*\
  !*** ./src/app/shared/commemorations/commemorations.service.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommemorationsService": () => (/* binding */ CommemorationsService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class CommemorationsService {
}
CommemorationsService.ɵfac = function CommemorationsService_Factory(t) { return new (t || CommemorationsService)(); };
CommemorationsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CommemorationsService, factory: CommemorationsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 235:
/*!*************************************************!*\
  !*** ./src/app/shared/input/input.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InputComponent": () => (/* binding */ InputComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4364);



function InputComponent_ng_container_1_label_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "label", 5);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", ctx_r4.getClass(), " control-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("innerHtml", "", ctx_r4.labelInput(), " <i class='fas fa-asterisk obrigatorio' ></i>", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function InputComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, InputComponent_ng_container_1_label_1_Template, 1, 4, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.labelInput().length);
} }
function InputComponent_ng_template_2_label_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "label", 5);
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", ctx_r5.getClass(), " control-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx_r5.labelInput(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function InputComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, InputComponent_ng_template_2_label_0_Template, 1, 4, "label", 4);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.labelInput().length);
} }
function InputComponent_label_5_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r6.errorMessage, "");
} }
function InputComponent_label_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, InputComponent_label_5_span_1_Template, 3, 1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.showTip && ctx_r3.hasError());
} }
const _c0 = ["*"];
class InputComponent {
    constructor() {
        this.showTip = true;
    }
    ngOnInit() { }
    labelInput() {
        return this.label != undefined ? this.label : false;
    }
    getClass() {
        return this.class != undefined ? this.class : false;
    }
    ngAfterContentInit() {
        this.input = this.model || this.control;
        if (this.input === undefined) {
            throw new Error('Esse componente precisa ser usado com uma diretiva ngModel ou FormControlName');
        }
    }
    hasSuccess() {
        return this.input.valid && (this.input.dirty || this.input.touched);
    }
    hasError() {
        return this.input.invalid && (this.input.dirty || this.input.touched);
        // return this.input.invalid
    }
    hasRequired() {
        return this.input.invalid;
    }
}
InputComponent.ɵfac = function InputComponent_Factory(t) { return new (t || InputComponent)(); };
InputComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InputComponent, selectors: [["app-input-container"]], contentQueries: function InputComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.model = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.control = _t.first);
    } }, inputs: { class: "class", label: "label", errorMessage: "errorMessage", showTip: "showTip" }, ngContentSelectors: _c0, decls: 6, vars: 7, consts: [[1, "form-group", "has-feedback"], [4, "ngIf", "ngIfElse"], ["elseTemplate", ""], ["class", "control-label control-error", "for", "inputSuccess", 4, "ngIf"], ["for", "", 3, "class", "innerHtml", 4, "ngIf"], ["for", "", 3, "innerHtml"], ["for", "inputSuccess", 1, "control-label", "control-error"], [4, "ngIf"], [1, "fa", "fa-remove"]], template: function InputComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, InputComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, InputComponent_ng_template_2_Template, 1, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, InputComponent_label_5_Template, 2, 1, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("has-success", ctx.hasSuccess())("has-warning", ctx.hasError());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasRequired())("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasError());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf], styles: [".control-error[_ngcontent-%COMP%]{margin: 1px 0 0 0!important;position: absolute;}\n.has-feedback[_ngcontent-%COMP%]{\n    margin-top: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlucHV0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZUFBZSwyQkFBMkIsQ0FBQyxrQkFBa0IsQ0FBQztBQUM5RDtJQUNJLGVBQWU7QUFDbkIiLCJmaWxlIjoiaW5wdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250cm9sLWVycm9ye21hcmdpbjogMXB4IDAgMCAwIWltcG9ydGFudDtwb3NpdGlvbjogYWJzb2x1dGU7fVxuLmhhcy1mZWVkYmFja3tcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG59Il19 */"] });


/***/ }),

/***/ 9047:
/*!***************************************************!*\
  !*** ./src/app/shared/loader/loader.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoaderComponent": () => (/* binding */ LoaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _loader_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loader.service */ 6845);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4364);



function LoaderComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 1);
} }
class LoaderComponent {
    constructor(loaderService) {
        this.loaderService = loaderService;
        this.loader = false;
    }
    ngOnInit() {
        this.loaderService.loader.subscribe(loader => setTimeout(() => this.loader = loader, 0));
    }
}
LoaderComponent.ɵfac = function LoaderComponent_Factory(t) { return new (t || LoaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_loader_service__WEBPACK_IMPORTED_MODULE_0__.LoaderService)); };
LoaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoaderComponent, selectors: [["app-loader"]], decls: 1, vars: 1, consts: [["class", "loader", 4, "ngIf"], [1, "loader"]], template: function LoaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, LoaderComponent_div_0_Template, 1, 0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loader);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf], styles: [".loader[_ngcontent-%COMP%] {\n\tposition: fixed;\n\tleft: 48%;\n\ttop: 48%;\n\twidth: 100px;\n\theight: 100px;\n\tz-index: 9999 !important;\n\tbackground: url('loader.svg') no-repeat;\n\tbackground-size: 100px 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsZUFBZTtDQUNmLFNBQVM7Q0FDVCxRQUFRO0NBQ1IsWUFBWTtDQUNaLGFBQWE7Q0FDYix3QkFBd0I7Q0FDeEIsdUNBQWtFO0NBQ2xFLDRCQUE0QjtBQUM3QiIsImZpbGUiOiJsb2FkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2FkZXIge1xuXHRwb3NpdGlvbjogZml4ZWQ7XG5cdGxlZnQ6IDQ4JTtcblx0dG9wOiA0OCU7XG5cdHdpZHRoOiAxMDBweDtcblx0aGVpZ2h0OiAxMDBweDtcblx0ei1pbmRleDogOTk5OSAhaW1wb3J0YW50O1xuXHRiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL3N5c3RlbS9sb2FkZXIuc3ZnXCIpIG5vLXJlcGVhdDtcblx0YmFja2dyb3VuZC1zaXplOiAxMDBweCAxMDBweDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 6845:
/*!*************************************************!*\
  !*** ./src/app/shared/loader/loader.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoaderService": () => (/* binding */ LoaderService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);


class LoaderService {
    constructor() {
        this.loader = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    isLoad(loader) {
        this.loader.emit(loader);
    }
}
LoaderService.ɵfac = function LoaderService_Factory(t) { return new (t || LoaderService)(); };
LoaderService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoaderService, factory: LoaderService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 4635:
/*!*********************************************************!*\
  !*** ./src/app/shared/messages/notification.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationService": () => (/* binding */ NotificationService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 8190);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);


class NotificationService {
    constructor() {
        this.notifier = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    }
    notifySweet(message) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire(`${message}`, '', 'success');
    }
    notifyError(message) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
            icon: 'error',
            title: 'Oops...',
            text: `${message}`,
        });
    }
    notifyAlert(message) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire(`${message}`, '', 'success');
    }
    notifyInfo(message) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire(`${message}`, '', 'info');
    }
}


/***/ }),

/***/ 9147:
/*!****************************************************************!*\
  !*** ./src/app/shared/messages/snackbar/snackbar.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SnackbarComponent": () => (/* binding */ SnackbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/animations */ 7175);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 2702);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 8636);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 9902);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _notification_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../notification.service */ 4635);





class SnackbarComponent {
    constructor(notificationService) {
        this.notificationService = notificationService;
        this.message = 'Desculpe aparecer sem ser convidado';
        this.snackVisibility = 'hidden';
    }
    ngOnInit() {
        this.notificationService.notifier
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(message => {
            this.message = message;
            this.snackVisibility = 'visible';
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.switchMap)(message => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.timer)(4000))).subscribe(timer => this.snackVisibility = 'hidden');
    }
}
SnackbarComponent.ɵfac = function SnackbarComponent_Factory(t) { return new (t || SnackbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_notification_service__WEBPACK_IMPORTED_MODULE_0__.NotificationService)); };
SnackbarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: SnackbarComponent, selectors: [["app-snackbar"]], decls: 2, vars: 2, consts: [[1, "snackbar-container", "snackbar-pos", "top-center"]], template: function SnackbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("@snack-visibility", ctx.snackVisibility);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.message, " ");
    } }, styles: ["div.snackbar-container[_ngcontent-%COMP%]{text-align: center!important}\n.snackbar-container[_ngcontent-%COMP%] {\n  \n  \n  font-family: Roboto, sans-serif;\n  font-size: 14px;\n  min-height: 14px;\n  background-color: #070b0e;\n  position: fixed;\n  \n  justify-content: space-between;\n  \n  color: white;\n  line-height: 22px;\n  padding: 18px 24px;\n  \n  \n  z-index: 99999!important;\n  text-align: center!important;\n}\n.snackbar-container[_ngcontent-%COMP%] {\n  \n  text-align: center!important;\n  text-transform: uppercase;\n  cursor: pointer;\n}\n@media (min-width: 640px) {\n  .snackbar-container[_ngcontent-%COMP%] {\n    \n  }\n}\n@media (max-width: 640px) {\n  .snackbar-container[_ngcontent-%COMP%] {\n    \n  }\n}\n.snackbar-pos.bottom-center[_ngcontent-%COMP%] {\n  top: auto !important;\n  bottom: 0;\n  left: 50%;\n  transform: translate( -50%);\n  text-align: center!important;\n}\n.snackbar-pos.bottom-left[_ngcontent-%COMP%] {\n  top: auto !important;\n  bottom: 0;\n  left: 0;\n  text-align: center!important;\n}\n.snackbar-pos.bottom-right[_ngcontent-%COMP%] {\n  top: auto !important;\n  bottom: 0;\n  right: 0;\n  text-align: center!important;\n}\n.snackbar-pos.top-left[_ngcontent-%COMP%] {\n  bottom: auto !important;\n  top: 0;\n  left: 0;\n  text-align: center!important;\n}\n.snackbar-pos.top-center[_ngcontent-%COMP%] {\n  bottom: auto !important;\n  \n  left: 50%;\n  \n  text-align: center!important;\n}\n.snackbar-pos.top-right[_ngcontent-%COMP%] {\n  bottom: auto !important;\n  top: 0;\n  right: 0;\n  text-align: center!important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNuYWNrYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLHVCQUF1Qiw0QkFBNEI7QUFDbkQ7RUFDRSxnQ0FBZ0M7RUFDaEMsNERBQTREO0VBQzVELCtCQUErQjtFQUMvQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5Qix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFlBQVk7RUFDWix3QkFBd0I7RUFDeEIsNEJBQTRCO0FBQzlCO0FBRUE7O0VBRUUsNEJBQTRCO0VBQzVCLHlCQUF5QjtFQUN6QixlQUFlO0FBQ2pCO0FBRUE7RUFDRTtJQUNFOzs7Ozs7bUNBTStCO0VBQ2pDO0FBQ0Y7QUFFQTtFQUNFO0lBQ0U7O21DQUUrQjtFQUNqQztBQUNGO0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsU0FBUztFQUNULFNBQVM7RUFDVCwyQkFBMkI7RUFDM0IsNEJBQTRCO0FBQzlCO0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsU0FBUztFQUNULE9BQU87RUFDUCw0QkFBNEI7QUFDOUI7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixTQUFTO0VBQ1QsUUFBUTtFQUNSLDRCQUE0QjtBQUM5QjtBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLE1BQU07RUFDTixPQUFPO0VBQ1AsNEJBQTRCO0FBQzlCO0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIseUJBQXlCO0VBQ3pCLFNBQVM7RUFDVCxzQ0FBc0M7RUFDdEMsNEJBQTRCO0FBQzlCO0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsTUFBTTtFQUNOLFFBQVE7RUFDUiw0QkFBNEI7QUFDOUIiLCJmaWxlIjoic25hY2tiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuZGl2LnNuYWNrYmFyLWNvbnRhaW5lcnt0ZXh0LWFsaWduOiBjZW50ZXIhaW1wb3J0YW50fVxuLnNuYWNrYmFyLWNvbnRhaW5lciB7XG4gIC8qIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlOyAqL1xuICAvKiB0cmFuc2l0aW9uLXByb3BlcnR5OiB0b3AsIHJpZ2h0LCBib3R0b20sIGxlZnQsIG9wYWNpdHk7ICovXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWluLWhlaWdodDogMTRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA3MGIwZTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICAvKiBkaXNwbGF5OiBmbGV4OyAqL1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXG4gIGNvbG9yOiB3aGl0ZTtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIHBhZGRpbmc6IDE4cHggMjRweDtcbiAgLyogYm90dG9tOiAwOyAqL1xuICAvKiB0b3A6IDA7ICovXG4gIHotaW5kZXg6IDk5OTk5IWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyIWltcG9ydGFudDtcbn1cblxuLnNuYWNrYmFyLWNvbnRhaW5lciB7XG4gIFxuICB0ZXh0LWFsaWduOiBjZW50ZXIhaW1wb3J0YW50O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA2NDBweCkge1xuICAuc25hY2tiYXItY29udGFpbmVyIHtcbiAgICAvKiBtaW4td2lkdGg6IDI4OHB4O1xuICAgIG1heC13aWR0aDogNTY4cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIG1hcmdpbjogMTVweDtcbiAgICBib3R0b206IC0xMDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIhaW1wb3J0YW50OyAqL1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCkge1xuICAuc25hY2tiYXItY29udGFpbmVyIHtcbiAgICAvKiBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlciFpbXBvcnRhbnQ7ICovXG4gIH1cbn1cblxuLnNuYWNrYmFyLXBvcy5ib3R0b20tY2VudGVyIHtcbiAgdG9wOiBhdXRvICFpbXBvcnRhbnQ7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSggLTUwJSk7XG4gIHRleHQtYWxpZ246IGNlbnRlciFpbXBvcnRhbnQ7XG59XG5cbi5zbmFja2Jhci1wb3MuYm90dG9tLWxlZnQge1xuICB0b3A6IGF1dG8gIWltcG9ydGFudDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXIhaW1wb3J0YW50O1xufVxuXG4uc25hY2tiYXItcG9zLmJvdHRvbS1yaWdodCB7XG4gIHRvcDogYXV0byAhaW1wb3J0YW50O1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXIhaW1wb3J0YW50O1xufVxuXG4uc25hY2tiYXItcG9zLnRvcC1sZWZ0IHtcbiAgYm90dG9tOiBhdXRvICFpbXBvcnRhbnQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyIWltcG9ydGFudDtcbn1cblxuLnNuYWNrYmFyLXBvcy50b3AtY2VudGVyIHtcbiAgYm90dG9tOiBhdXRvICFpbXBvcnRhbnQ7XG4gIC8qIHRvcDogMTBweCFpbXBvcnRhbnQ7ICovXG4gIGxlZnQ6IDUwJTtcbiAgLyogdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7ICovXG4gIHRleHQtYWxpZ246IGNlbnRlciFpbXBvcnRhbnQ7XG59XG5cbi5zbmFja2Jhci1wb3MudG9wLXJpZ2h0IHtcbiAgYm90dG9tOiBhdXRvICFpbXBvcnRhbnQ7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlciFpbXBvcnRhbnQ7XG59XG4iXX0= */"], data: { animation: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.trigger)('snack-visibility', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.state)('hidden', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({
                    opacity: 0,
                    top: 0,
                    display: 'none'
                })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.state)('visible', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({
                    opacity: 1,
                    display: 'block',
                    top: '0px'
                })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.transition)('hidden=>visible', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.animate)('500ms 0s ease-in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.keyframes)([
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({ opacity: 0, transform: 'translateY(-20px)', offset: 0 }),
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({ opacity: 8, transform: 'translateY(-5px)', offset: 0.2 }),
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({ opacity: 1, transform: 'translateY(0px)', offset: 0.5 }),
                ]))),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.transition)('visible=>hidden', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.animate)('500ms 0s ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.keyframes)([
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({ opacity: 1, transform: 'translateY(10px)', offset: 0 }),
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({ opacity: 8, transform: 'translateY(5px)', offset: 0.2 }),
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({ opacity: 0, transform: 'translateY(-100px)', offset: 1 }),
                ])))
                // transition('hidden=>visible', animate('500ms 0s ease-in',keyframes([
                //   style({opacity:0,transform:'translateX(130px)',offset:0}),
                //   style({opacity:8,transform:'translateX(10px)',offset:0.8}),
                //   style({opacity:1,transform:'translateX(0px)',offset:1}),
                // ]))),
                // transition('visible=>hidden', animate('500ms 0s ease-out', keyframes([
                //   style({opacity:1,transform:'translateX(0px)',offset:0}),
                //   style({opacity:8,transform:'translateX(10px)',offset:0.2}),
                //   style({opacity:0,transform:'translateX(130px)',offset:1}),
                // ])))
            ])
        ] } });


/***/ }),

/***/ 2210:
/*!*************************************************!*\
  !*** ./src/app/shared/radio/radio.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RadioComponent": () => (/* binding */ RadioComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4364);




function RadioComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RadioComponent_div_0_Template_div_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const option_r1 = restoredCtx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.setValue(option_r1.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ins", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("checked", option_r1.value === ctx_r0.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r1.label, " ");
} }
class RadioComponent {
    constructor() { }
    ngOnInit() {
    }
    setValue(value) {
        this.value = value;
        this.onchange(this.value);
    }
    /**
       * Write a new value to the element.
       */
    writeValue(obj) {
        this.value = obj;
    }
    /**
     * Set the function to be called when the control receives a change event.
     */
    registerOnChange(fn) {
        this.onchange = fn;
    }
    /**
     * Set the function to be called when the control receives a touch event.
     */
    registerOnTouched(fn) { }
    /**
     * This function is called when the control status changes to or from "DISABLED".
     * Depending on the value, it will enable or disable the appropriate DOM element.
     *
     * @param isDisabled
     */
    setDisabledState(isDisabled) { }
}
RadioComponent.ɵfac = function RadioComponent_Factory(t) { return new (t || RadioComponent)(); };
RadioComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RadioComponent, selectors: [["mt-radio"]], inputs: { options: "options" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
                useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => RadioComponent),
                multi: true
            }
        ])], decls: 1, vars: 1, consts: [[4, "ngFor", "ngForOf"], ["aria-checked", "false", "aria-disabled", "false", 1, "iradio_flat-red", 2, "position", "relative", 3, "click"], [1, "iCheck-helper", 2, "position", "absolute", "top", "0%", "left", "0%", "display", "block", "width", "100%", "height", "100%", "margin", "0px", "padding", "0px", "background", "rgb(255, 255, 255)", "border", "0px", "opacity", "0"]], template: function RadioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, RadioComponent_div_0_Template, 5, 3, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.options);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyYWRpby5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 4466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "playerFactory": () => (/* binding */ playerFactory),
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _input_input_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input/input.component */ 235);
/* harmony import */ var _radio_radio_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./radio/radio.component */ 2210);
/* harmony import */ var _messages_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./messages/snackbar/snackbar.component */ 9147);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var _messages_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./messages/notification.service */ 4635);
/* harmony import */ var _security_login_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../security/login/login.service */ 825);
/* harmony import */ var _security_loggedin_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../security/loggedin.guard */ 3922);
/* harmony import */ var _security_auth_interceptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../security/auth.interceptor */ 2046);
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../helper */ 7854);
/* harmony import */ var _pipes_boolean_message_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../pipes/boolean-message.pipe */ 7415);
/* harmony import */ var _pipes_safe_html_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../pipes/safe-html.pipe */ 1656);
/* harmony import */ var _pipes_helpers_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../pipes/helpers.pipe */ 7436);
/* harmony import */ var _pipes_nl2br_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../pipes/nl2br.pipe */ 4885);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ng-select/ng-select */ 6868);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/tooltip */ 298);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/menu */ 221);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/cdk/scrolling */ 2791);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 9150);
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! angular-calendar */ 9480);
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! angular-calendar/date-adapters/date-fns */ 5406);
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ngx-mask */ 247);
/* harmony import */ var ngx_lottie__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-lottie */ 6627);
/* harmony import */ var lottie_web__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lottie-web */ 1993);
/* harmony import */ var lottie_web__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(lottie_web__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/locales/pt */ 4611);
/* harmony import */ var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_14__);











// pipes





















(0,_angular_common__WEBPACK_IMPORTED_MODULE_15__.registerLocaleData)((_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_14___default()));
const DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true,
};
function playerFactory() {
    return (lottie_web__WEBPACK_IMPORTED_MODULE_13___default());
}
class SharedModule {
    static forRoot() {
        return {
            ngModule: SharedModule,
            providers: [
                _messages_notification_service__WEBPACK_IMPORTED_MODULE_3__.NotificationService,
                _security_login_login_service__WEBPACK_IMPORTED_MODULE_4__.LoginService,
                _security_loggedin_guard__WEBPACK_IMPORTED_MODULE_5__.LoggedInGuard,
                _helper__WEBPACK_IMPORTED_MODULE_7__.Helper,
                { provide: _angular_core__WEBPACK_IMPORTED_MODULE_16__.LOCALE_ID, useValue: 'pt-br' },
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HTTP_INTERCEPTORS,
                    useClass: _security_auth_interceptor__WEBPACK_IMPORTED_MODULE_6__.AuthInterceptor,
                    multi: true,
                },
                // {provide:HTTP_INTERCEPTORS, useClass: AuthRefreshtokenInterceptor, multi:true},
                {
                    provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_18__.PERFECT_SCROLLBAR_CONFIG,
                    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
                },
            ],
        };
    }
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_15__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_19__.ReactiveFormsModule,
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_20__.NgSelectModule,
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__.MatTooltipModule,
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_22__.ScrollingModule,
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__.MatMenuModule,
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_18__.PerfectScrollbarModule,
            ngx_mask__WEBPACK_IMPORTED_MODULE_24__.NgxMaskModule.forRoot(),
            angular_calendar__WEBPACK_IMPORTED_MODULE_25__.CalendarModule.forRoot({
                provide: angular_calendar__WEBPACK_IMPORTED_MODULE_25__.DateAdapter,
                useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_26__.adapterFactory,
            }),
            ngx_lottie__WEBPACK_IMPORTED_MODULE_12__.LottieModule.forRoot({ player: playerFactory }),
        ], _angular_common__WEBPACK_IMPORTED_MODULE_15__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_19__.ReactiveFormsModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_20__.NgSelectModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__.MatTooltipModule,
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_22__.ScrollingModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__.MatMenuModule,
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_18__.PerfectScrollbarModule,
        ngx_mask__WEBPACK_IMPORTED_MODULE_24__.NgxMaskModule,
        angular_calendar__WEBPACK_IMPORTED_MODULE_25__.CalendarModule,
        ngx_lottie__WEBPACK_IMPORTED_MODULE_12__.LottieModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_pipes_safe_html_pipe__WEBPACK_IMPORTED_MODULE_9__.SafeHtml,
        _input_input_component__WEBPACK_IMPORTED_MODULE_0__.InputComponent,
        _radio_radio_component__WEBPACK_IMPORTED_MODULE_1__.RadioComponent,
        _messages_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_2__.SnackbarComponent,
        _pipes_helpers_pipe__WEBPACK_IMPORTED_MODULE_10__.HelpersPipe,
        _pipes_boolean_message_pipe__WEBPACK_IMPORTED_MODULE_8__.BooleanMessagePipe,
        _pipes_nl2br_pipe__WEBPACK_IMPORTED_MODULE_11__.Nl2BrPipe], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_19__.ReactiveFormsModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_20__.NgSelectModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__.MatTooltipModule,
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_22__.ScrollingModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__.MatMenuModule,
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_18__.PerfectScrollbarModule, ngx_mask__WEBPACK_IMPORTED_MODULE_24__.NgxMaskModule, angular_calendar__WEBPACK_IMPORTED_MODULE_25__.CalendarModule, ngx_lottie__WEBPACK_IMPORTED_MODULE_12__.LottieModule], exports: [_pipes_safe_html_pipe__WEBPACK_IMPORTED_MODULE_9__.SafeHtml,
        _input_input_component__WEBPACK_IMPORTED_MODULE_0__.InputComponent,
        _radio_radio_component__WEBPACK_IMPORTED_MODULE_1__.RadioComponent,
        _angular_common__WEBPACK_IMPORTED_MODULE_15__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_19__.ReactiveFormsModule,
        _messages_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_2__.SnackbarComponent,
        _pipes_helpers_pipe__WEBPACK_IMPORTED_MODULE_10__.HelpersPipe,
        _pipes_boolean_message_pipe__WEBPACK_IMPORTED_MODULE_8__.BooleanMessagePipe,
        _pipes_nl2br_pipe__WEBPACK_IMPORTED_MODULE_11__.Nl2BrPipe,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_20__.NgSelectModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__.MatTooltipModule,
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_22__.ScrollingModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__.MatMenuModule,
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_18__.PerfectScrollbarModule,
        ngx_mask__WEBPACK_IMPORTED_MODULE_24__.NgxMaskModule,
        angular_calendar__WEBPACK_IMPORTED_MODULE_25__.CalendarModule,
        ngx_lottie__WEBPACK_IMPORTED_MODULE_12__.LottieModule] }); })();


/***/ }),

/***/ 5961:
/*!***********************************************!*\
  !*** ./src/app/shared/theme/theme.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThemeService": () => (/* binding */ ThemeService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class ThemeService {
    constructor() {
        this.title = 'selelmore';
        this.theme = 'theme-whbl';
        this.pathcss = '../assets/css/dark.css';
    }
    setDarkMode() {
        let darkmode = this.themeActive();
        let setDark = darkmode ? false : true;
        localStorage.setItem('darkmodeWiseller', JSON.parse(setDark.toString()));
        this.setTheme();
        return setDark;
    }
    themeActive() {
        return localStorage.getItem('darkmodeWiseller') == 'true'
            ? true
            : false;
    }
    setTheme() {
        this.darkmode = this.themeActive();
        // console.log(this.darkmode);
        this.loadCSS();
    }
    loadCSS() {
        // Get HTML head element
        if (this.darkmode) {
            var head = document.getElementsByTagName('HEAD')[0];
            // Create new link Element
            var link = document.createElement('link');
            // set the attributes for link element
            link.rel = 'stylesheet';
            link.type = 'text/css';
            link.id = 'iddarkmode';
            link.href = this.pathcss;
            // Append link element to HTML head
            head.appendChild(link);
        }
        else {
            var sheet = document.getElementById('iddarkmode');
            if (sheet != null)
                sheet.parentNode.removeChild(sheet);
        }
    }
}
ThemeService.ɵfac = function ThemeService_Factory(t) { return new (t || ThemeService)(); };
ThemeService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ThemeService, factory: ThemeService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    // api: "http://apicampanha.siagesc.com.br/api"
    // api: "https://apiadmin.primepremios.com.br/api",
    api: 'http://127.0.0.1:8000/api',
    apiPublic: 'http://127.0.0.1:8000/public',
    apiDominio: 'http://127.0.0.1:8000',
    apiSite: 'http://127.0.0.1:8000',
    // api: 'https://memorizeapi.arocweb.com.br/api',
    // apiPublic: 'https://memorizeapi.arocweb.com.br/public',
    // apiDominio: 'https://memorizeapi.arocweb.com.br',
    // apiSite: 'https://memorizeapi.arocweb.com.br',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map