"use strict";
(self["webpackChunkmemorize"] = self["webpackChunkmemorize"] || []).push([["common"],{

/***/ 4605:
/*!************************************!*\
  !*** ./src/app/log/log.service.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogService": () => (/* binding */ LogService)
/* harmony export */ });
/* harmony import */ var _app_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app.api */ 970);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 3882);



class LogService {
    constructor(http) {
        this.http = http;
    }
    getLogs(search) {
        return this.http.get(`${_app_api__WEBPACK_IMPORTED_MODULE_0__.API}/access_log`);
    }
    getlogById(id) {
        return this.http.get(`${_app_api__WEBPACK_IMPORTED_MODULE_0__.API}/access_log/${id}`);
    }
    save(form) {
        return this.http
            .post(`${_app_api__WEBPACK_IMPORTED_MODULE_0__.API}/access_log`, form)
            .subscribe((data) => { });
    }
    ip() {
        return this.http.get('https://api.ipify.org');
    }
}
LogService.ɵfac = function LogService_Factory(t) { return new (t || LogService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
LogService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: LogService, factory: LogService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=common.js.map