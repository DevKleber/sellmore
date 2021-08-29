"use strict";
(self["webpackChunkmemorize"] = self["webpackChunkmemorize"] || []).push([["src_app_sellmore_sell-more_module_ts"],{

/***/ 2218:
/*!*************************************************!*\
  !*** ./src/app/sellmore/sell-more.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SellMoreComponent": () => (/* binding */ SellMoreComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! date-fns */ 8269);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! date-fns */ 7326);
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! angular-calendar */ 9480);
/* harmony import */ var _app_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app.api */ 970);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ 8190);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 9441);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 639);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ 3720);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs/operators */ 9902);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 9150);
/* harmony import */ var _sell_more_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sell-more.service */ 3130);
/* harmony import */ var _security_login_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../security/login/login.service */ 825);
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helper */ 7854);
/* harmony import */ var _shared_theme_theme_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/theme/theme.service */ 5961);
/* harmony import */ var _shared_messages_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/messages/notification.service */ 4635);
/* harmony import */ var _shared_loader_loader_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/loader/loader.service */ 6845);
/* harmony import */ var _log_log_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../log/log.service */ 4605);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/menu */ 221);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/tooltip */ 298);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @ng-select/ng-select */ 6868);
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ngx-mask */ 247);
/* harmony import */ var _shared_input_input_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/input/input.component */ 235);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var ngx_lottie__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-lottie */ 6627);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/cdk/scrolling */ 2791);
/* harmony import */ var _pipes_boolean_message_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../pipes/boolean-message.pipe */ 7415);
/* harmony import */ var _pipes_helpers_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../pipes/helpers.pipe */ 7436);
/* harmony import */ var _pipes_safe_html_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../pipes/safe-html.pipe */ 1656);
































const _c0 = ["openCalendar"];
const _c1 = ["openCalendarDetail"];
const _c2 = ["closeModalPhone"];
const _c3 = ["contentScroll"];
const _c4 = ["app-sell-more", ""];
const _c5 = function () { return ["/access_log"]; };
function SellMoreComponent_button_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "button", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, " LOG ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](1, _c5));
} }
function SellMoreComponent_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "i", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
} }
function SellMoreComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "i", 149);
} }
function SellMoreComponent_ng_container_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "i", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, " Mostrar referidos que n\u00E3o tem interesse ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
} }
function SellMoreComponent_ng_template_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "i", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, " Ocultar referidos que n\u00E3o tem interesse ");
} }
function SellMoreComponent_div_34_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](2, "ng-lottie", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4, "Nenhum resultado encontrado");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("options", ctx_r42.options);
} }
function SellMoreComponent_div_34_div_7_div_9_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, ",");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function SellMoreComponent_div_34_div_7_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](4, "helpers");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](5, SellMoreComponent_div_34_div_7_div_9_span_5_Template, 2, 0, "span", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const itemPhone_r51 = ctx.$implicit;
    const last_r52 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("+", itemPhone_r51 == null ? null : itemPhone_r51.country_code, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind3"](4, 3, itemPhone_r51.phone, "phoneByCountry", itemPhone_r51.country_code), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !last_r52);
} }
function SellMoreComponent_div_34_div_7_ng_container_20_Template(rf, ctx) { if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function SellMoreComponent_div_34_div_7_ng_container_20_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r56); const item_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit; const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2); return ctx_r54.ativar(item_r44); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](2, "i", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3, " Ativar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
} }
function SellMoreComponent_div_34_div_7_ng_template_21_Template(rf, ctx) { if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function SellMoreComponent_div_34_div_7_ng_template_21_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r59); const item_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit; const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2); return ctx_r57.inativar(item_r44); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "i", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, " Arquivar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function SellMoreComponent_div_34_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "div", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "div", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "small", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](7, "booleanMessage");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](9, SellMoreComponent_div_34_div_7_div_9_Template, 6, 7, "div", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](10, "div", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](11, "i", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](12, "mat-menu", null, 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](14, "button", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function SellMoreComponent_div_34_div_7_Template_button_click_14_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r61); const item_r44 = restoredCtx.$implicit; const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2); return ctx_r60.newChildren(item_r44); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](15, "i", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](16, " Importar contatos ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](17, "button", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function SellMoreComponent_div_34_div_7_Template_button_click_17_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r61); const item_r44 = restoredCtx.$implicit; const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2); return ctx_r62.updateOpenForm(item_r44); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](18, "i", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](19, " Alterar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](20, SellMoreComponent_div_34_div_7_ng_container_20_Template, 4, 0, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](21, SellMoreComponent_div_34_div_7_ng_template_21_Template, 3, 0, "ng-template", null, 172, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](23, "button", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function SellMoreComponent_div_34_div_7_Template_button_click_23_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r61); const item_r44 = restoredCtx.$implicit; const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2); return ctx_r63.newChildren(item_r44); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](24, "i", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](25, " Tornar Lead ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](26, "button", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function SellMoreComponent_div_34_div_7_Template_button_click_26_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r61); const item_r44 = restoredCtx.$implicit; const indexItem_r45 = restoredCtx.index; const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2); return ctx_r64.callTo(item_r44, indexItem_r45); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](27, "i", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](28, " Ligar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](29, "div", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](30, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](31, "Status:");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](33, "helpers");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](34, "div", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](35, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](36, "Criado em:");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](38, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r44 = ctx.$implicit;
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](13);
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", item_r44.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](7, 8, item_r44.bo_ativo, "bo_ativo"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", item_r44.phones);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("matMenuTriggerFor", _r47);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !item_r44.bo_ativo)("ngIfElse", _r49);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](33, 11, item_r44.status, "statusString"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](38, 14, item_r44.created_at, "fullDate"), "");
} }
function SellMoreComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "span", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](5, SellMoreComponent_div_34_div_5_Template, 5, 1, "div", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "div", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](7, SellMoreComponent_div_34_div_7_Template, 39, 17, "div", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("Filtro: ", ctx_r8.searchForm.value.searchControl, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx_r8.customersFilter.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx_r8.customersFilter.length && !ctx_r8.isSearch);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r8.customersFilter);
} }
function SellMoreComponent_div_35_div_42_div_3_div_6_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, ",");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function SellMoreComponent_div_35_div_42_div_3_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](4, "helpers");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](5, SellMoreComponent_div_35_div_42_div_3_div_6_span_5_Template, 2, 0, "span", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const itemPhone_r78 = ctx.$implicit;
    const last_r79 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("+", itemPhone_r78 == null ? null : itemPhone_r78.country_code, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind3"](4, 3, itemPhone_r78.phone, "phoneByCountry", itemPhone_r78.country_code), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !last_r79);
} }
function SellMoreComponent_div_35_div_42_div_3_ng_container_8_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "i", 221);
} }
function SellMoreComponent_div_35_div_42_div_3_ng_container_8_i_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "i", 222);
} }
function SellMoreComponent_div_35_div_42_div_3_ng_container_8_i_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "i", 223);
} }
function SellMoreComponent_div_35_div_42_div_3_ng_container_8_i_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "i", 224);
} }
function SellMoreComponent_div_35_div_42_div_3_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    const _r88 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, SellMoreComponent_div_35_div_42_div_3_ng_container_8_i_2_Template, 1, 0, "i", 216);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](3, SellMoreComponent_div_35_div_42_div_3_ng_container_8_i_3_Template, 1, 0, "i", 217);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](4, SellMoreComponent_div_35_div_42_div_3_ng_container_8_i_4_Template, 1, 0, "i", 218);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](5, SellMoreComponent_div_35_div_42_div_3_ng_container_8_i_5_Template, 1, 0, "i", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](6, "i", 220);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "mat-menu", null, 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](9, "button", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function SellMoreComponent_div_35_div_42_div_3_ng_container_8_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r88); const itemLead_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit; const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3); return ctx_r86.newChildren(itemLead_r71 == null ? null : itemLead_r71.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](10, "i", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](11, " Importar contatos ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](12, "button", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function SellMoreComponent_div_35_div_42_div_3_ng_container_8_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r88); const itemLead_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit; const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3); return ctx_r89.updateOpenForm(itemLead_r71.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](13, "i", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](14, " Alterar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](15, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function SellMoreComponent_div_35_div_42_div_3_ng_container_8_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r88); const itemLead_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit; const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3); return ctx_r91.inativar(itemLead_r71.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](16, "i", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](17, " Arquivar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r85 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](8);
    const itemLead_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", itemLead_r71.value.status == "pc");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", itemLead_r71.value.status == "ld");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", itemLead_r71.value.status == "n");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", itemLead_r71.value.status == "c");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("matMenuTriggerFor", _r85);
} }
function SellMoreComponent_div_35_div_42_div_3_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    const _r97 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "i", 226);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function SellMoreComponent_div_35_div_42_div_3_ng_template_9_Template_i_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r97); const itemLead_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit; const ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3); return ctx_r95.changeStatus(itemLead_r71.value, "pc"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "i", 227);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function SellMoreComponent_div_35_div_42_div_3_ng_template_9_Template_i_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r97); const itemLead_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit; const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3); return ctx_r98.changeStatus(itemLead_r71.value, "ld"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "i", 228);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function SellMoreComponent_div_35_div_42_div_3_ng_template_9_Template_i_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r97); const itemLead_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit; const ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3); return ctx_r100.changeStatus(itemLead_r71.value, "n"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "i", 229);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function SellMoreComponent_div_35_div_42_div_3_ng_template_9_Template_i_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r97); const itemLead_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit; const ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3); return ctx_r102.changeStatus(itemLead_r71.value, "c"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](5, "i", 230);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "mat-menu", null, 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "button", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function SellMoreComponent_div_35_div_42_div_3_ng_template_9_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r97); const itemLead_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit; const ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3); return ctx_r104.newChildren(itemLead_r71.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](9, "i", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](10, " Importar contatos ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](11, "button", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function SellMoreComponent_div_35_div_42_div_3_ng_template_9_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r97); const itemLead_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit; const ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3); return ctx_r106.updateOpenForm(itemLead_r71.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](12, "i", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](13, " Alterar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](14, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function SellMoreComponent_div_35_div_42_div_3_ng_template_9_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r97); const itemLead_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit; const ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3); return ctx_r108.inativar(itemLead_r71.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](15, "i", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](16, " Arquivar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r94 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("matMenuTriggerFor", _r94);
} }
function SellMoreComponent_div_35_div_42_div_3_div_13_i_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "i", 236);
} }
function SellMoreComponent_div_35_div_42_div_3_div_13_div_7_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, ",");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function SellMoreComponent_div_35_div_42_div_3_div_13_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](4, "helpers");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](5, SellMoreComponent_div_35_div_42_div_3_div_13_div_7_span_5_Template, 2, 0, "span", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const itemPhone_r117 = ctx.$implicit;
    const last_r118 = ctx.last;
    const item_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("+", itemPhone_r117 == null ? null : itemPhone_r117.country_code, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind3"](4, 4, itemPhone_r117.phone, "phoneByCountry", itemPhone_r117.country_code), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !last_r118);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](9, 8, item_r110 == null ? null : item_r110.created_at, "dd/MM/yyyy"));
} }
function SellMoreComponent_div_35_div_42_div_3_div_13_ng_container_8_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "i", 221);
} }
function SellMoreComponent_div_35_div_42_div_3_div_13_ng_container_8_i_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "i", 239);
} }
function SellMoreComponent_div_35_div_42_div_3_div_13_ng_container_8_i_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "i", 223);
} }
function SellMoreComponent_div_35_div_42_div_3_div_13_ng_container_8_i_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "i", 224);
} }
function SellMoreComponent_div_35_div_42_div_3_div_13_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    const _r128 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, SellMoreComponent_div_35_div_42_div_3_div_13_ng_container_8_i_2_Template, 1, 0, "i", 216);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](3, SellMoreComponent_div_35_div_42_div_3_div_13_ng_container_8_i_3_Template, 1, 0, "i", 237);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](4, SellMoreComponent_div_35_div_42_div_3_div_13_ng_container_8_i_4_Template, 1, 0, "i", 218);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](5, SellMoreComponent_div_35_div_42_div_3_div_13_ng_container_8_i_5_Template, 1, 0, "i", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](6, "i", 238);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "mat-menu", null, 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](9, "button", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function SellMoreComponent_div_35_div_42_div_3_div_13_ng_container_8_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r128); const item_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit; const ctx_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](4); return ctx_r126.newChildren(item_r110); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](10, "i", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](11, " Importar contatos ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](12, "button", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function SellMoreComponent_div_35_div_42_div_3_div_13_ng_container_8_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r128); const item_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit; const ctx_r129 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](4); return ctx_r129.updateOpenForm(item_r110); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](13, "i", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](14, " Alterar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](15, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function SellMoreComponent_div_35_div_42_div_3_div_13_ng_container_8_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r128); const item_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit; const ctx_r131 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](4); return ctx_r131.inativar(item_r110); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](16, "i", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](17, " Arquivar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](18, "button", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function SellMoreComponent_div_35_div_42_div_3_div_13_ng_container_8_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r128); const item_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit; const ctx_r133 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](4); return ctx_r133.newChildren(item_r110); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](19, "i", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](20, " Tornar Lead ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r125 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](8);
    const item_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", item_r110.status == "pc");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", item_r110.status == "ld");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", item_r110.status == "n");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", item_r110.status == "c");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("matMenuTriggerFor", _r125);
} }
function SellMoreComponent_div_35_div_42_div_3_div_13_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    const _r139 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "i", 240);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function SellMoreComponent_div_35_div_42_div_3_div_13_ng_template_9_Template_i_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r139); const item_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit; const ctx_r137 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](4); return ctx_r137.preference(item_r110); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "i", 226);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function SellMoreComponent_div_35_div_42_div_3_div_13_ng_template_9_Template_i_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r139); const item_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit; const ctx_r140 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](4); return ctx_r140.changeStatus(item_r110, "pc"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "i", 227);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function SellMoreComponent_div_35_div_42_div_3_div_13_ng_template_9_Template_i_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r139); const item_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit; const ctx_r142 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](4); return ctx_r142.changeStatus(item_r110, "ld"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "i", 228);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function SellMoreComponent_div_35_div_42_div_3_div_13_ng_template_9_Template_i_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r139); const item_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit; const ctx_r144 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](4); return ctx_r144.changeStatus(item_r110, "n"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "i", 229);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function SellMoreComponent_div_35_div_42_div_3_div_13_ng_template_9_Template_i_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r139); const item_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit; const ctx_r146 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](4); return ctx_r146.changeStatus(item_r110, "c"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](6, "i", 241);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "mat-menu", null, 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](9, "button", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function SellMoreComponent_div_35_div_42_div_3_div_13_ng_template_9_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r139); const item_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit; const ctx_r148 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](4); return ctx_r148.newChildren(item_r110); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](10, "i", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](11, " Importar contatos ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](12, "button", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function SellMoreComponent_div_35_div_42_div_3_div_13_ng_template_9_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r139); const item_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit; const ctx_r150 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](4); return ctx_r150.updateOpenForm(item_r110); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](13, "i", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](14, " Alterar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](15, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function SellMoreComponent_div_35_div_42_div_3_div_13_ng_template_9_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r139); const item_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit; const ctx_r152 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](4); return ctx_r152.inativar(item_r110); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](16, "i", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](17, " Arquivar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](18, "button", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function SellMoreComponent_div_35_div_42_div_3_div_13_ng_template_9_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r139); const item_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit; const ctx_r154 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](4); return ctx_r154.newChildren(item_r110); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](19, "i", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](20, " Tornar Lead ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r136 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](8);
    const item_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", item_r110.bo_preference ? "fa fa-star" : "far fa-star");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("matMenuTriggerFor", _r136);
} }
function SellMoreComponent_div_35_div_42_div_3_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r158 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 231);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 232);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function SellMoreComponent_div_35_div_42_div_3_div_13_Template_div_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r158); const item_r110 = restoredCtx.$implicit; const indexItem_r111 = restoredCtx.index; const itemLead_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit; const ctx_r157 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3); return ctx_r157.callTo(item_r110, { itemLead: itemLead_r71, referido: indexItem_r111 }); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "div", 233);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](5, SellMoreComponent_div_35_div_42_div_3_div_13_i_5_Template, 1, 0, "i", 234);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](7, SellMoreComponent_div_35_div_42_div_3_div_13_div_7_Template, 11, 11, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](8, SellMoreComponent_div_35_div_42_div_3_div_13_ng_container_8_Template, 21, 5, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](9, SellMoreComponent_div_35_div_42_div_3_div_13_ng_template_9_Template, 21, 2, "ng-template", null, 235, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r110 = ctx.$implicit;
    const _r115 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", item_r110.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", item_r110.status != "a" && item_r110.bo_preference);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", item_r110.phones);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", item_r110.status != "a")("ngIfElse", _r115);
} }
function SellMoreComponent_div_35_div_42_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r161 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "div", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "div", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](6, SellMoreComponent_div_35_div_42_div_3_div_6_Template, 6, 7, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "div", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](8, SellMoreComponent_div_35_div_42_div_3_ng_container_8_Template, 18, 5, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](9, SellMoreComponent_div_35_div_42_div_3_ng_template_9_Template, 17, 1, "ng-template", null, 208, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](11, "perfect-scrollbar");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](12, "div", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](13, SellMoreComponent_div_35_div_42_div_3_div_13_Template, 11, 5, "div", 210);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](14, "div", 211);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](15, "div", 212);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](17, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](18, "div", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](19, "div", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function SellMoreComponent_div_35_div_42_div_3_Template_div_click_19_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r161); const itemLead_r71 = restoredCtx.$implicit; const ctx_r160 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3); return ctx_r160.newChildren(itemLead_r71.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](20, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const itemLead_r71 = ctx.$implicit;
    const _r75 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", itemLead_r71 == null ? null : itemLead_r71.value.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", itemLead_r71.value.phones);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", (itemLead_r71 == null ? null : itemLead_r71.value.status) != "a")("ngIfElse", _r75);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", itemLead_r71.value.referidos);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", itemLead_r71.value.referidos.length, " referidos ");
} }
function SellMoreComponent_div_35_div_42_mwl_calendar_month_view_34_Template(rf, ctx) { if (rf & 1) {
    const _r163 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mwl-calendar-month-view", 242);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("dayClicked", function SellMoreComponent_div_35_div_42_mwl_calendar_month_view_34_Template_mwl_calendar_month_view_dayClicked_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r163); const ctx_r162 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3); return ctx_r162.dayClicked($event.day); })("eventClicked", function SellMoreComponent_div_35_div_42_mwl_calendar_month_view_34_Template_mwl_calendar_month_view_eventClicked_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r163); const ctx_r164 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3); return ctx_r164.handleEvent("Clicked", $event.event); })("eventTimesChanged", function SellMoreComponent_div_35_div_42_mwl_calendar_month_view_34_Template_mwl_calendar_month_view_eventTimesChanged_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r163); const ctx_r165 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3); return ctx_r165.eventTimesChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("viewDate", ctx_r67.viewDate)("events", ctx_r67.events)("refresh", ctx_r67.refresh)("activeDayIsOpen", ctx_r67.activeDayIsOpen);
} }
function SellMoreComponent_div_35_div_42_mwl_calendar_week_view_35_Template(rf, ctx) { if (rf & 1) {
    const _r167 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mwl-calendar-week-view", 243);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("eventClicked", function SellMoreComponent_div_35_div_42_mwl_calendar_week_view_35_Template_mwl_calendar_week_view_eventClicked_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r167); const ctx_r166 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3); return ctx_r166.handleEvent("Clicked", $event.event); })("eventTimesChanged", function SellMoreComponent_div_35_div_42_mwl_calendar_week_view_35_Template_mwl_calendar_week_view_eventTimesChanged_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r167); const ctx_r168 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3); return ctx_r168.eventTimesChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("viewDate", ctx_r68.viewDate)("events", ctx_r68.events)("refresh", ctx_r68.refresh);
} }
function SellMoreComponent_div_35_div_42_mwl_calendar_day_view_36_Template(rf, ctx) { if (rf & 1) {
    const _r170 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mwl-calendar-day-view", 243);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("eventClicked", function SellMoreComponent_div_35_div_42_mwl_calendar_day_view_36_Template_mwl_calendar_day_view_eventClicked_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r170); const ctx_r169 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3); return ctx_r169.handleEvent("Clicked", $event.event); })("eventTimesChanged", function SellMoreComponent_div_35_div_42_mwl_calendar_day_view_36_Template_mwl_calendar_day_view_eventTimesChanged_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r170); const ctx_r171 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3); return ctx_r171.eventTimesChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("viewDate", ctx_r69.viewDate)("events", ctx_r69.events)("refresh", ctx_r69.refresh);
} }
function SellMoreComponent_div_35_div_42_div_37_option_14_div_3_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, ",");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function SellMoreComponent_div_35_div_42_div_37_option_14_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 248);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 249);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](2, "i", 250);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](6, "helpers");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](7, SellMoreComponent_div_35_div_42_div_37_option_14_div_3_span_7_Template, 2, 0, "span", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const itemPhone_r175 = ctx.$implicit;
    const last_r176 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", itemPhone_r175.bo_whatsapp ? "fab fa-whatsapp" : "fa fa-mobile-alt");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("+", itemPhone_r175.country_code, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind3"](6, 4, itemPhone_r175.phone, "phoneByCountry", itemPhone_r175.country_code), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !last_r176);
} }
function SellMoreComponent_div_35_div_42_div_37_option_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "option", 246);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](3, SellMoreComponent_div_35_div_42_div_37_option_14_div_3_Template, 8, 8, "div", 247);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r173 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("value", item_r173.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", item_r173 == null ? null : item_r173.name, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", item_r173.phones);
} }
function SellMoreComponent_div_35_div_42_div_37_Template(rf, ctx) { if (rf & 1) {
    const _r179 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 244);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, " Novo agendamento: clique no dia e informe o hor\u00E1rio ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "div", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "form", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "div", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](9, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](10, "i", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](11, "select", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](12, "option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](13, " Referente ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](14, SellMoreComponent_div_35_div_42_div_37_option_14_Template, 4, 3, "option", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](15, "div", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](16, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](17, "i", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](18, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](19, "input", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](20, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](21, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](22, "i", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](23, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](24, "input", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](25, "div", 245);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](26, "button", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function SellMoreComponent_div_35_div_42_div_37_Template_button_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r179); const ctx_r178 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3); return ctx_r178.addEvent(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](27, " Salvar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", ctx_r70.formCalendar.value.title, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("formGroup", ctx_r70.formCalendar);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r70.customersLd);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("showMaskTyped", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("showMaskTyped", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", !ctx_r70.formCalendar.valid);
} }
function SellMoreComponent_div_35_div_42_Template(rf, ctx) { if (rf & 1) {
    const _r181 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 197);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "cdk-virtual-scroll-viewport", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](3, SellMoreComponent_div_35_div_42_div_3_Template, 21, 6, "div", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](4, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "div", 201);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "h3", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](9, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](10, " Calendario ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](11, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](12, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](13, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](14, "button", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("viewDateChange", function SellMoreComponent_div_35_div_42_Template_button_viewDateChange_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r181); const ctx_r180 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2); return ctx_r180.viewDate = $event; })("viewDateChange", function SellMoreComponent_div_35_div_42_Template_button_viewDateChange_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r181); const ctx_r182 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2); return ctx_r182.closeOpenMonthViewDay(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](15, " Anterior ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](16, "button", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("viewDateChange", function SellMoreComponent_div_35_div_42_Template_button_viewDateChange_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r181); const ctx_r183 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2); return ctx_r183.viewDate = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](17, " Hoje ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](18, "button", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("viewDateChange", function SellMoreComponent_div_35_div_42_Template_button_viewDateChange_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r181); const ctx_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2); return ctx_r184.viewDate = $event; })("viewDateChange", function SellMoreComponent_div_35_div_42_Template_button_viewDateChange_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r181); const ctx_r185 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2); return ctx_r185.closeOpenMonthViewDay(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](19, " Pr\u00F3ximo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](20, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](21, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](23, "calendarDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](24, "div", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](25, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](26, "button", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function SellMoreComponent_div_35_div_42_Template_button_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r181); const ctx_r186 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2); return ctx_r186.setView(ctx_r186.CalendarView.Month); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](27, " M\u00EAs ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](28, "button", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function SellMoreComponent_div_35_div_42_Template_button_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r181); const ctx_r187 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2); return ctx_r187.setView(ctx_r187.CalendarView.Week); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](29, " Semana ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](30, "button", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function SellMoreComponent_div_35_div_42_Template_button_click_30_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r181); const ctx_r188 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2); return ctx_r188.setView(ctx_r188.CalendarView.Day); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](31, " Dia ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](32, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](33, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](34, SellMoreComponent_div_35_div_42_mwl_calendar_month_view_34_Template, 1, 4, "mwl-calendar-month-view", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](35, SellMoreComponent_div_35_div_42_mwl_calendar_week_view_35_Template, 1, 3, "mwl-calendar-week-view", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](36, SellMoreComponent_div_35_div_42_mwl_calendar_day_view_36_Template, 1, 3, "mwl-calendar-day-view", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](37, SellMoreComponent_div_35_div_42_div_37_Template, 28, 6, "div", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("cdkVirtualForOf", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](4, 18, ctx_r65.customers));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("view", ctx_r65.view)("viewDate", ctx_r65.viewDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("viewDate", ctx_r65.viewDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("view", ctx_r65.view)("viewDate", ctx_r65.viewDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind3"](23, 20, ctx_r65.viewDate, ctx_r65.view + "ViewTitle", "pt-br"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵclassProp"]("active", ctx_r65.view === ctx_r65.CalendarView.Month);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵclassProp"]("active", ctx_r65.view === ctx_r65.CalendarView.Week);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵclassProp"]("active", ctx_r65.view === ctx_r65.CalendarView.Day);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngSwitch", ctx_r65.view);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngSwitchCase", ctx_r65.CalendarView.Month);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngSwitchCase", ctx_r65.CalendarView.Week);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngSwitchCase", ctx_r65.CalendarView.Day);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", (ctx_r65.formCalendar == null ? null : ctx_r65.formCalendar.value == null ? null : ctx_r65.formCalendar.value.title) || ctx_r65.formCalendar.value.date);
} }
const _c6 = function () { return { standalone: true }; };
function SellMoreComponent_div_35_Template(rf, ctx) { if (rf & 1) {
    const _r190 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "div", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "div", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "div", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "div", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](9, "div", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](11, "div", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](12, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](13, "label", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](14, "Em aberto");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](15, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](16, "input", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("change", function SellMoreComponent_div_35_Template_input_change_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r190); const ctx_r189 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r189.setStatusLocalStorage(); })("ngModelChange", function SellMoreComponent_div_35_Template_input_ngModelChange_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r190); const ctx_r191 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r191.boShowAberto = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](17, "label", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](18, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](19, "label", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](20, "Problemas com cart\u00E3o");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](21, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](22, "input", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("change", function SellMoreComponent_div_35_Template_input_change_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r190); const ctx_r192 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r192.setStatusLocalStorage(); })("ngModelChange", function SellMoreComponent_div_35_Template_input_ngModelChange_22_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r190); const ctx_r193 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r193.boShowProblemasCartao = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](23, "label", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](24, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](25, "label", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](26, "Ligar depois");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](27, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](28, "input", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("change", function SellMoreComponent_div_35_Template_input_change_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r190); const ctx_r194 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r194.setStatusLocalStorage(); })("ngModelChange", function SellMoreComponent_div_35_Template_input_ngModelChange_28_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r190); const ctx_r195 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r195.boShowLigarDepois = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](29, "label", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](30, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](31, "label", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](32, "N\u00E3o tem interesse");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](33, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](34, "input", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("change", function SellMoreComponent_div_35_Template_input_change_34_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r190); const ctx_r196 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r196.setStatusLocalStorage(); })("ngModelChange", function SellMoreComponent_div_35_Template_input_ngModelChange_34_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r190); const ctx_r197 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r197.boShowNaotemInteresse = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](35, "label", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](36, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](37, "label", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](38, "Comprou");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](39, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](40, "input", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("change", function SellMoreComponent_div_35_Template_input_change_40_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r190); const ctx_r198 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r198.setStatusLocalStorage(); })("ngModelChange", function SellMoreComponent_div_35_Template_input_ngModelChange_40_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r190); const ctx_r199 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r199.boShowComprou = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](41, "label", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](42, SellMoreComponent_div_35_div_42_Template, 38, 24, "div", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", ctx_r9.statistics == null ? null : ctx_r9.statistics.a, " referidos \u00E0 contactar");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate2"]("", ctx_r9.statistics == null ? null : ctx_r9.statistics.c, " ", (ctx_r9.statistics == null ? null : ctx_r9.statistics.c) <= 1 ? "venda" : "vendas", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", ctx_r9.statistics == null ? null : ctx_r9.statistics.ld, " ligar depois");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate2"](" ", ctx_r9.statistics == null ? null : ctx_r9.statistics.pc, " ", (ctx_r9.statistics == null ? null : ctx_r9.statistics.pc) <= 1 ? "problema com cart\u00E3o" : "problemas com cart\u00E3o", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx_r9.boShowAberto)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](17, _c6));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx_r9.boShowProblemasCartao)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](18, _c6));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx_r9.boShowLigarDepois)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](19, _c6));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx_r9.boShowNaotemInteresse)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](20, _c6));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx_r9.boShowComprou)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](21, _c6));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r9.boShowProblemasCartao || ctx_r9.boShowLigarDepois || ctx_r9.boShowNaotemInteresse || ctx_r9.boShowComprou || ctx_r9.boShowAberto);
} }
function SellMoreComponent_ng_container_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" Cadastre abaixo os indicados do(a) ", ctx_r11.parent.name, " ");
} }
function SellMoreComponent_ng_template_50_span_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "Novo referido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function SellMoreComponent_ng_template_50_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "Alterando referido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function SellMoreComponent_ng_template_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](0, SellMoreComponent_ng_template_50_span_0_Template, 2, 0, "span", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, SellMoreComponent_ng_template_50_span_1_Template, 2, 0, "span", 82);
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx_r13.form.value.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r13.form.value.id);
} }
function SellMoreComponent_option_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "option", 246);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r202 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("value", item_r202.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", item_r202 == null ? null : item_r202.status, " ");
} }
function SellMoreComponent_div_73_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "i", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
} }
function SellMoreComponent_div_73_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "i", 258);
} }
function SellMoreComponent_div_73_Template(rf, ctx) { if (rf & 1) {
    const _r209 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 251);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "div", 252);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](3, SellMoreComponent_div_73_ng_container_3_Template, 2, 0, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](4, SellMoreComponent_div_73_ng_template_4_Template, 1, 0, "ng-template", null, 253, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "div", 254);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](10, "helpers");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](11, "div", 255);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](12, "i", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function SellMoreComponent_div_73_Template_i_click_12_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r209); const j_r204 = restoredCtx.index; const ctx_r208 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r208.deleteTelefone(j_r204); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const telefone_r203 = ctx.$implicit;
    const j_r204 = ctx.index;
    const _r206 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵattribute"]("data-index", j_r204);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", (telefone_r203 == null ? null : telefone_r203.bo_whatsapp) == 1)("ngIfElse", _r206);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("+", telefone_r203 == null ? null : telefone_r203.country_code, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind3"](10, 5, telefone_r203 == null ? null : telefone_r203.phone, "phoneByCountry", telefone_r203.country_code), " ");
} }
function SellMoreComponent_ng_container_78_Template(rf, ctx) { if (rf & 1) {
    const _r211 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "button", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function SellMoreComponent_ng_container_78_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r211); const ctx_r210 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r210.save(ctx_r210.form.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, " Salvar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", !ctx_r17.form.valid);
} }
function SellMoreComponent_ng_template_79_Template(rf, ctx) { if (rf & 1) {
    const _r213 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "button", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function SellMoreComponent_ng_template_79_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r213); const ctx_r212 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r212.update(ctx_r212.form.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, " Alterar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", !ctx_r19.form.valid);
} }
function SellMoreComponent_span_144_Template(rf, ctx) { if (rf & 1) {
    const _r216 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "div", 259);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "input", 260, 261);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("change", function SellMoreComponent_span_144_Template_input_change_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r216); const ctx_r215 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r215.onFileChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "div", 262);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](7, "safeHtml");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "button", 263);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function SellMoreComponent_span_144_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r216); const _r214 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](5); return _r214.click(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](9, " Anexar arquivo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("Anexe o arquivo baixado na conversa com o(a) ", ctx_r22.parent.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵstyleProp"]("background-image", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](7, 3, "url(" + ctx_r22.img + " )", "style"));
} }
function SellMoreComponent_ng_container_145_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 267);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r220 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", item_r220 == null ? null : item_r220.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", item_r220 == null ? null : item_r220.phone, " ");
} }
function SellMoreComponent_ng_container_145_p_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r221 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", item_r221, " ");
} }
function SellMoreComponent_ng_container_145_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 264);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](4, SellMoreComponent_ng_container_145_div_4_Template, 4, 2, "div", 265);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "div", 266);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](8, SellMoreComponent_ng_container_145_p_8_Template, 2, 1, "p", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("Importado ", ctx_r23.customersImported == null ? null : ctx_r23.customersImported.res.length, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r23.customersImported == null ? null : ctx_r23.customersImported.res);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("Indicado por outro lead ", ctx_r23.customersImported == null ? null : ctx_r23.customersImported.repetidos.length, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r23.customersImported == null ? null : ctx_r23.customersImported.repetidos);
} }
function SellMoreComponent_div_146_Template(rf, ctx) { if (rf & 1) {
    const _r223 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "button", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function SellMoreComponent_div_146_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r223); const ctx_r222 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r222.importContact(ctx_r222.formScript.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, " Importar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function SellMoreComponent_div_154_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, ",");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function SellMoreComponent_div_154_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 249);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "a", 268);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](3, "i", 250);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](7, "helpers");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](8, SellMoreComponent_div_154_span_8_Template, 2, 0, "span", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const itemPhone_r224 = ctx.$implicit;
    const last_r225 = ctx.last;
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate3"]("href", "https://api.whatsapp.com/send/?phone=", itemPhone_r224.country_code, "", itemPhone_r224.phone, "&text=", ctx_r25.strategy == null ? null : ctx_r25.strategy.url_sale, "", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", itemPhone_r224.bo_whatsapp ? "fab fa-whatsapp" : "fa fa-mobile-alt");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("+", itemPhone_r224 == null ? null : itemPhone_r224.country_code, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind3"](7, 7, itemPhone_r224.phone, "phoneByCountry", itemPhone_r224.country_code), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !last_r225);
} }
function SellMoreComponent_div_155_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3, "Status atual:");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](5, "helpers");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](5, 1, ctx_r26.person.status, "statusString"), " ");
} }
function SellMoreComponent_div_159_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "a", 269);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "div", 270);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](3, "i", 271);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("href", ctx_r27.strategy == null ? null : ctx_r27.strategy.url_sale, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsanitizeUrl"]);
} }
function SellMoreComponent_div_164_Template(rf, ctx) { if (rf & 1) {
    const _r228 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 272);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function SellMoreComponent_div_164_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r228); const ctx_r227 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r227.changeStatus(ctx_r227.person, "pc"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "i", 273);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function SellMoreComponent_div_165_Template(rf, ctx) { if (rf & 1) {
    const _r230 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 274);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function SellMoreComponent_div_165_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r230); const ctx_r229 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r229.changeStatus(ctx_r229.person, "ld"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "i", 275);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function SellMoreComponent_div_166_Template(rf, ctx) { if (rf & 1) {
    const _r232 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 276);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function SellMoreComponent_div_166_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r232); const ctx_r231 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r231.changeStatus(ctx_r231.person, "n"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "i", 277);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function SellMoreComponent_div_167_Template(rf, ctx) { if (rf & 1) {
    const _r234 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 278);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function SellMoreComponent_div_167_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r234); const ctx_r233 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r233.changeStatus(ctx_r233.person, "c"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "i", 279);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function SellMoreComponent_div_182_span_5_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "i", 221);
} }
function SellMoreComponent_div_182_span_5_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "i", 222);
} }
function SellMoreComponent_div_182_span_5_i_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "i", 223);
} }
function SellMoreComponent_div_182_span_5_i_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "i", 224);
} }
function SellMoreComponent_div_182_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, SellMoreComponent_div_182_span_5_i_1_Template, 1, 0, "i", 216);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, SellMoreComponent_div_182_span_5_i_2_Template, 1, 0, "i", 217);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](3, SellMoreComponent_div_182_span_5_i_3_Template, 1, 0, "i", 218);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](4, SellMoreComponent_div_182_span_5_i_4_Template, 1, 0, "i", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const itemParent_r235 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", itemParent_r235.status == "pc");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", itemParent_r235.status == "ld");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", itemParent_r235.status == "n");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", itemParent_r235.status == "c");
} }
function SellMoreComponent_div_182_div_7_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, ",");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function SellMoreComponent_div_182_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 285);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](4, "helpers");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](5, SellMoreComponent_div_182_div_7_span_5_Template, 2, 0, "span", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const itemPhone_r244 = ctx.$implicit;
    const last_r245 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("+", itemPhone_r244 == null ? null : itemPhone_r244.country_code, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind3"](4, 3, itemPhone_r244.phone, "phoneByCountry", itemPhone_r244.country_code), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !last_r245);
} }
function SellMoreComponent_div_182_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 280);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "div", 281);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](3, "i", 282);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](5, SellMoreComponent_div_182_span_5_Template, 5, 4, "span", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](7, SellMoreComponent_div_182_div_7_Template, 6, 7, "div", 283);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "div", 284);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const itemParent_r235 = ctx.$implicit;
    const i_r236 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵstyleProp"]("margin-left", 20 * i_r236, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", itemParent_r235.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", itemParent_r235.status != "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", itemParent_r235.phones);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", itemParent_r235.observation, " ");
} }
function SellMoreComponent_span_187_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r247 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", item_r247, " ");
} }
function SellMoreComponent_mwl_calendar_month_view_301_Template(rf, ctx) { if (rf & 1) {
    const _r249 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mwl-calendar-month-view", 242);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("dayClicked", function SellMoreComponent_mwl_calendar_month_view_301_Template_mwl_calendar_month_view_dayClicked_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r249); const ctx_r248 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r248.dayClicked($event.day); })("eventClicked", function SellMoreComponent_mwl_calendar_month_view_301_Template_mwl_calendar_month_view_eventClicked_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r249); const ctx_r250 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r250.handleEvent("Clicked", $event.event); })("eventTimesChanged", function SellMoreComponent_mwl_calendar_month_view_301_Template_mwl_calendar_month_view_eventTimesChanged_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r249); const ctx_r251 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r251.eventTimesChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("viewDate", ctx_r34.viewDate)("events", ctx_r34.events)("refresh", ctx_r34.refresh)("activeDayIsOpen", ctx_r34.activeDayIsOpen);
} }
function SellMoreComponent_mwl_calendar_week_view_302_Template(rf, ctx) { if (rf & 1) {
    const _r253 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mwl-calendar-week-view", 243);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("eventClicked", function SellMoreComponent_mwl_calendar_week_view_302_Template_mwl_calendar_week_view_eventClicked_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r253); const ctx_r252 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r252.handleEvent("Clicked", $event.event); })("eventTimesChanged", function SellMoreComponent_mwl_calendar_week_view_302_Template_mwl_calendar_week_view_eventTimesChanged_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r253); const ctx_r254 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r254.eventTimesChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("viewDate", ctx_r35.viewDate)("events", ctx_r35.events)("refresh", ctx_r35.refresh);
} }
function SellMoreComponent_mwl_calendar_day_view_303_Template(rf, ctx) { if (rf & 1) {
    const _r256 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mwl-calendar-day-view", 243);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("eventClicked", function SellMoreComponent_mwl_calendar_day_view_303_Template_mwl_calendar_day_view_eventClicked_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r256); const ctx_r255 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r255.handleEvent("Clicked", $event.event); })("eventTimesChanged", function SellMoreComponent_mwl_calendar_day_view_303_Template_mwl_calendar_day_view_eventTimesChanged_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r256); const ctx_r257 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r257.eventTimesChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("viewDate", ctx_r36.viewDate)("events", ctx_r36.events)("refresh", ctx_r36.refresh);
} }
function SellMoreComponent_option_318_div_3_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, ",");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function SellMoreComponent_option_318_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 248);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 249);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](2, "i", 250);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](6, "helpers");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](7, SellMoreComponent_option_318_div_3_span_7_Template, 2, 0, "span", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const itemPhone_r260 = ctx.$implicit;
    const last_r261 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", itemPhone_r260.bo_whatsapp ? "fab fa-whatsapp" : "fa fa-mobile-alt");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("+", itemPhone_r260.country_code, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind3"](6, 4, itemPhone_r260.phone, "phoneByCountry", itemPhone_r260.country_code), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !last_r261);
} }
function SellMoreComponent_option_318_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "option", 246);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](3, SellMoreComponent_option_318_div_3_Template, 8, 8, "div", 247);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r258 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("value", item_r258.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", item_r258 == null ? null : item_r258.name, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", item_r258.phones);
} }
function SellMoreComponent_p_341_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "p", 286);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" Referido adicionado no dia ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](2, 2, ctx_r39.calendarDetail == null ? null : ctx_r39.calendarDetail.referido.created_at, "dd/MM/yyyy H:mm:ss"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" Voc\u00EA alterou esse contato no dia ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](5, 5, ctx_r39.calendarDetail == null ? null : ctx_r39.calendarDetail.referido.updated_at, "dd/MM/yyyy H:mm:ss"), " ");
} }
function SellMoreComponent_button_342_Template(rf, ctx) { if (rf & 1) {
    const _r264 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "button", 287);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function SellMoreComponent_button_342_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r264); const ctx_r263 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r263.callTo(ctx_r263.calendarDetail == null ? null : ctx_r263.calendarDetail.referido); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "i", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, " Ligar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function SellMoreComponent_div_353_Template(rf, ctx) { if (rf & 1) {
    const _r266 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 288);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "ng-lottie", 289);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("complete", function SellMoreComponent_div_353_Template_ng_lottie_complete_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r266); const ctx_r265 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r265.showCongrats = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("options", ctx_r41.optionsSold);
} }
class SellMoreComponent {
    constructor(sellMoreService, loginService, formBuilder, helper, themeService, notificationService, loaderService, logService) {
        this.sellMoreService = sellMoreService;
        this.loginService = loginService;
        this.formBuilder = formBuilder;
        this.helper = helper;
        this.themeService = themeService;
        this.notificationService = notificationService;
        this.loaderService = loaderService;
        this.logService = logService;
        this.position = 0;
        this.quantidade = 2;
        this.scrollTo = 0;
        this.boShowProblemasCartao = false;
        this.boShowLigarDepois = false;
        this.boShowNaotemInteresse = false;
        this.boShowComprou = false;
        this.boShowAberto = false;
        this.showNaotemInteresse = 'false';
        this.countryCodes = [];
        this.customersDynamic = [];
        this.customers = [];
        this.customersFilter = [];
        this.maskToInsert = '(00) 00000-0000';
        this.countryCodeSelected = '55';
        this.phone = '';
        this.bo_whatsapp = true;
        this.status = [
            { id: 'pc', status: 'Problemas com cartão' },
            { id: 'ld', status: 'Ligar depois' },
            { id: 'n', status: 'Não tem interesse' },
            { id: 'c', status: 'Comprou' },
        ];
        this.itemToUpdate = {};
        this.customersLd = [];
        this.customersImported = [];
        this.person = {};
        this.parent = {};
        this.parents = [];
        this.strategy = {};
        this.statistics = {};
        this.isSearch = true;
        this.showCongrats = false;
        this.path = _app_api__WEBPACK_IMPORTED_MODULE_0__.API_SITE_PATH_IMG;
        this.isDevMode = (0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.isDevMode)();
        this.img = 'assets/img/file/search.svg';
        this.user = {};
        this.view = angular_calendar__WEBPACK_IMPORTED_MODULE_15__.CalendarView.Month;
        this.CalendarView = angular_calendar__WEBPACK_IMPORTED_MODULE_15__.CalendarView;
        this.viewDate = new Date();
        this.events = [];
        this.options = {
            path: '/assets/animations/json/results.json',
        };
        this.optionsSold = {
            path: '/assets/animations/json/congrats.json',
            autoplay: true,
            loop: false,
        };
        // calendar
        this.actions = [
            {
                label: '<i class="fa-pencil">Editar</i>',
                a11yLabel: 'Edit',
                onClick: ({ event }) => {
                    this.handleEvent('Edited', event);
                },
            },
            {
                label: '<i class="fa fa-trash">Deletar</i>',
                a11yLabel: 'Delete',
                onClick: ({ event }) => {
                    this.events = this.events.filter((iEvent) => iEvent !== event);
                    this.handleEvent('Deleted', event);
                },
            },
        ];
        this.refresh = new rxjs__WEBPACK_IMPORTED_MODULE_16__.Subject();
        this.activeDayIsOpen = true;
    }
    congrats() {
        this.showCongrats = true;
        setTimeout(function () {
            this.showCongrats = false;
        }.bind(this), 3000);
    }
    ngOnInit() {
        document.addEventListener('touchstart', function (e) {
            e.preventDefault(); // does nothing since the listener is passive
        }, {
            passive: true,
        });
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
        this.setEvents();
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
                this.messageNewVersion(res.version);
            }
        });
    }
    getVersionLocalStorage() {
        return localStorage.getItem('wiseller_version');
    }
    setVersionLocalStorage(version) {
        return localStorage.setItem('wiseller_version', version);
    }
    messageNewVersion(version) {
        const pessoa = this.loginService.getUser();
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
            title: `Nova versão instalada ${version}`,
            width: 600,
            showCancelButton: true,
            html: `
			<div style="text-align: left;">
				Olá, ${pessoa === null || pessoa === void 0 ? void 0 : pessoa.nome}, temos novidades.<br />
			</div>
			`,
            icon: 'info',
            confirmButtonColor: '#3085d6',
            cancelButtonText: 'OK!',
            confirmButtonText: 'Ver as novidades!',
        }).then((result) => {
            if (result.isConfirmed) {
                window.open('https://www.notion.so/Wiseller-Vers-o-1-0-8-e77c48f6ea4047a3938f4030974d4d1d', '_blank');
            }
            window.location.reload();
        });
    }
    getCustomers() {
        this.loaderService.isLoad(true);
        this.sellMoreService
            .getCustomers(this.boShowProblemasCartao, this.boShowLigarDepois, this.boShowNaotemInteresse, this.boShowComprou, this.boShowAberto)
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
        let item = arCustomers.slice(this.position, this.position + this.quantidade);
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
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.debounceTime)(400), //espera 400ms entre dois eventos para fazer a busca novamente
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.distinctUntilChanged)(), // só vai fazer a busca se o valor for diferente do valor anterior
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.switchMap)((searchTerm) => this.sellMoreService.customersFind(searchTerm)))
            .subscribe((res) => {
            this.customersFilter = res;
            this.loaderService.isLoad(false);
            this.isSearch = false;
        });
    }
    initialForms() {
        this.form = this.formBuilder.group({
            id: this.formBuilder.control(null),
            name: this.formBuilder.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.required]),
            address: this.formBuilder.control(''),
            status: this.formBuilder.control(''),
            observation: this.formBuilder.control(''),
            id_parent: this.formBuilder.control(null),
            telefones: this.formBuilder.array([]),
        });
        this.formScript = this.formBuilder.group({
            strategy: this.formBuilder.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.required]),
            url_sale: this.formBuilder.control(''),
        });
        this.formBug = this.formBuilder.group({
            name: this.formBuilder.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.required]),
            desc: this.formBuilder.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.required]),
        });
        this.formCalendar = this.formBuilder.group({
            date: this.formBuilder.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.required]),
            hour: this.formBuilder.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.required]),
            id_customers: this.formBuilder.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.required]),
            title: this.formBuilder.control(''),
        });
        this.searchControl = this.formBuilder.control('');
        this.searchForm = this.formBuilder.group({
            searchControl: this.searchControl,
        });
    }
    addFKPhone(phone = this.phone, bo_whatsapp = this.bo_whatsapp, countryCode = this.countryCodeSelected) {
        let items = this.form.get('telefones');
        items.push(this.telefoneItem(phone, bo_whatsapp, countryCode));
        this.closeModalPhone.nativeElement.click();
        this.phone = '';
        this.bo_whatsapp = false;
    }
    deleteTelefone(i) {
        const control = this.form.controls['telefones'];
        control.removeAt(i);
    }
    telefoneItem(phone = '', bo_whatsapp = false, countryCode = '') {
        if (phone != '') {
            return this.formBuilder.group({
                phone: this.formBuilder.control(phone),
                bo_whatsapp: this.formBuilder.control(bo_whatsapp),
                country_code: this.formBuilder.control(countryCode),
            });
        }
    }
    getStatusLocalStorage() {
        let localStorageWisellerBoShowStatus = localStorage.getItem('wiseller_boShowStatus');
        if (localStorageWisellerBoShowStatus === null) {
            this.setStatusLocalStorage();
            localStorageWisellerBoShowStatus = localStorage.getItem('wiseller_boShowStatus');
        }
        const { boShowProblemasCartao, boShowLigarDepois, boShowNaotemInteresse, boShowComprou, boShowAberto, } = JSON.parse(localStorageWisellerBoShowStatus);
        this.boShowProblemasCartao = boShowProblemasCartao;
        this.boShowLigarDepois = boShowLigarDepois;
        this.boShowNaotemInteresse = boShowNaotemInteresse;
        this.boShowComprou = boShowComprou;
        this.boShowAberto = boShowAberto;
    }
    setStatusLocalStorage() {
        const jsonShowStatus = {
            boShowProblemasCartao: this.boShowProblemasCartao,
            boShowLigarDepois: this.boShowLigarDepois,
            boShowNaotemInteresse: this.boShowNaotemInteresse,
            boShowComprou: this.boShowComprou,
            boShowAberto: this.boShowAberto,
        };
        localStorage.setItem('wiseller_boShowStatus', JSON.stringify(jsonShowStatus));
        this.getCustomers();
    }
    getStrategy() {
        this.loaderService.isLoad(true);
        this.sellMoreService.getStrategy().subscribe((res) => {
            this.loaderService.isLoad(false);
            this.strategy = res['dados'];
            this.strategy.staps = res['nl2br'];
            this.formScript.controls['strategy'].setValue(this.strategy.strategy);
            this.formScript.controls['url_sale'].setValue(this.strategy.url_sale);
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
        let items = this.form.get('telefones');
        if (items.length) {
            items.clear();
        }
        person['phones'].forEach((element) => {
            this.addFKPhone(element.phone, element.bo_whatsapp);
        });
    }
    update(form, feedback = true, updateList = true, updateWithJs = false) {
        if (!form.id) {
            this.notificationService.notifySweet('Erro: não encontramos o referido!');
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
                }
                else {
                    const arCustomers = this.customers;
                    arCustomers[itemLead.key]['referidos'][referido]['status'] =
                        form.status;
                    arCustomers[itemLead.key]['referidos'][referido]['observation'] = form.observation;
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
            }
            else if (status == 'ld') {
                this.notificationService.notifySweet('Status atualizado para ligar depois. Agora agende um horario para entrar em contato!');
                this.openCalendar.nativeElement.click();
                this.formCalendar.controls['id_customers'].setValue(lead.id);
                this.formCalendar.controls['title'].setValue(lead.name);
            }
            else {
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
        let items = this.form.get('telefones');
        if (items.length) {
            items.clear();
        }
    }
    onFileChanged(event) {
        const file = this.helper.onFileChanged(event);
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
            uploadData.append('imagem', this.selectedFile, this.selectedFile.name);
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
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
            title: `Arquivar ${referido.name} ?`,
            text: `${isLead
                ? `Atenção, a pessoa escolhida é, também, um lead e possui referidos em sua cadeia de conexões (card). Se prosseguir com o arquivamento do(a) ${referido.name}, o seu card será ocultado por completo. Esta ação não altera os referidos que se tornaram lead. Deseja prosseguir?`
                : ''}`,
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
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
            title: `Ativar ${referido.name} ?`,
            text: `${isLead
                ? `Atenção, a pessoa escolhida é, também, um lead e possui referidos em sua cadeia de conexões (card). Se prosseguir com a ativação do(a) ${referido.name}, o seu card será mostrado por completo. Esta ação não altera os referidos que se tornaram lead. Deseja prosseguir?`
                : ''}`,
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
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                title: 'Obrigado por nos reportar!',
                text: 'Deseja ver a lista de problemas e as novidades que vem por aí?',
                icon: 'success',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Sim, ver a lista!',
            }).then((result) => {
                if (result.isConfirmed) {
                    var win = window.open('https://trello.com/b/GQpoOLdf/sell-more', '_blank');
                    win.focus();
                }
            });
        });
    }
    logout() {
        this.loginService.logout();
    }
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
    dayClicked({ date, events, }) {
        let day = ('0' + date.getDate()).slice(-2);
        let month = ('0' + (date.getMonth() + 1)).slice(-2);
        let year = date.getFullYear();
        let dia = `${day}/${month}/${year}`;
        this.formCalendar.controls['date'].setValue(dia);
        if ((0,date_fns__WEBPACK_IMPORTED_MODULE_21__.default)(date, this.viewDate)) {
            if (((0,date_fns__WEBPACK_IMPORTED_MODULE_22__.default)(this.viewDate, date) &&
                this.activeDayIsOpen === true) ||
                events.length === 0) {
                this.activeDayIsOpen = false;
            }
            else {
                this.activeDayIsOpen = true;
            }
            this.viewDate = date;
        }
    }
    eventTimesChanged({ event, newStart, newEnd, }) {
        console.log('entrou event times changed');
        this.events = this.events.map((iEvent) => {
            if (iEvent === event) {
                return Object.assign(Object.assign({}, event), { start: newStart, end: newEnd });
            }
            return iEvent;
        });
        this.handleEvent('Dropped or resized', event);
    }
    handleEvent(action, event) {
        // this.modalData = { event, action };
        // this.modal.open(this.modalContent, { size: 'lg' });
        this.openCalendarDetail.nativeElement.click();
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
    addEvent() {
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
        var _a;
        if (filtrarUsuario) {
            const { title, referido } = this.calendarDetail;
            let getNumberFromTitle = title.split('<br')[0];
            getNumberFromTitle = getNumberFromTitle.split('small>')[1];
            getNumberFromTitle = getNumberFromTitle.replace(/\D/g, '');
            let filter = '';
            const phone = (_a = referido === null || referido === void 0 ? void 0 : referido.phones[0].phone) !== null && _a !== void 0 ? _a : [];
            if (phone.length > 0) {
                filter = phone;
            }
            else {
                filter = getNumberFromTitle;
            }
            this.searchForm.controls['searchControl'].setValue(filter);
            return;
        }
    }
    deleteEvent(eventToDelete) {
        this.events = this.events.filter((event) => event !== eventToDelete);
    }
    setView(view) {
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
            if (isFind)
                return;
        });
    }
}
SellMoreComponent.ɵfac = function SellMoreComponent_Factory(t) { return new (t || SellMoreComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_sell_more_service__WEBPACK_IMPORTED_MODULE_2__.SellMoreService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_security_login_login_service__WEBPACK_IMPORTED_MODULE_3__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_helper__WEBPACK_IMPORTED_MODULE_4__.Helper), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_shared_theme_theme_service__WEBPACK_IMPORTED_MODULE_5__.ThemeService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_shared_messages_notification_service__WEBPACK_IMPORTED_MODULE_6__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_shared_loader_loader_service__WEBPACK_IMPORTED_MODULE_7__.LoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_log_log_service__WEBPACK_IMPORTED_MODULE_8__.LogService)); };
SellMoreComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({ type: SellMoreComponent, selectors: [["", "app-sell-more", ""]], viewQuery: function SellMoreComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_c0, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_c1, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_c2, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_23__.PerfectScrollbarComponent, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_c3, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.openCalendar = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.openCalendarDetail = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.closeModalPhone = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.componentRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.contentScroll = _t.first);
    } }, attrs: _c4, decls: 354, vars: 86, consts: [[1, "sellMore"], [1, "logo"], ["src", "/assets/img/system/wiseller.png", "width", "55px"], [1, "search"], [3, "formGroup"], [1, "input", "searchInput"], [1, "inputIcon"], [1, "fa", "fa-search"], [1, "inputText"], ["type", "text", "placeholder", "Buscar", "formControlName", "searchControl", 1, "w-100", 3, "keydown"], ["class", "iconTheme mobileNo", 3, "routerLink", 4, "ngIf"], [1, "iconTheme", "mobileNo", 3, "click"], [4, "ngIf", "ngIfElse"], ["elseTemplateDarkLight", ""], ["data-toggle", "modal", "data-target", "#modalBug", 1, "btn-secondary", "mobileNo", 2, "margin-top", "0!important", "padding", "10px 32px!important", "margin-right", "5px"], ["data-toggle", "modal", "data-target", "#modalDonate", 1, "btn-secondary", "mobileNo", 2, "margin-top", "0!important", "padding", "10px 32px!important"], [1, "profile"], ["src", "/assets/img/user/user.png", "alt", "", "width", "55px", 1, "cursor-pointer", 3, "matMenuTriggerFor"], ["profile", "matMenu"], ["mat-menu-item", ""], [1, "fas", "fa-id-card-alt"], ["mat-menu-item", "", "matTooltip", "Mostrar/Ocultar referidos que n\u00E3o tem interesse"], ["elseTemplateMenuNaoInteresse", ""], ["mat-menu-item", "", 3, "click"], [1, "fas", "fa-sign-out-alt"], ["class", "content pad40", 4, "ngIf"], ["data-toggle", "modal", "data-target", "#modalCalendar", "matTooltip", "Agenda", 1, "footerItens", "desktopNo", 3, "click"], ["openCalendar", ""], [1, "far", "fa-calendar-alt"], ["data-toggle", "modal", "data-target", "#modalScriptAdd", "matTooltip", "Estrat\u00E9gia", 1, "footerItens", 3, "click"], [1, "fa", "fa-receipt"], ["data-toggle", "modal", "data-target", "#modalStickyAdd", "matTooltip", "Novo lead", 1, "footerItens", 3, "click"], [1, "fa", "fa-plus"], ["id", "modalStickyAdd", "tabindex", "-1", "aria-labelledby", "modalNewSticky", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["id", "modalNewSticky", 1, "modal-title"], ["indicatedBy", ""], [1, "modal-body", 2, "overflow", "auto", "max-height", "75vh"], [1, "content"], ["novalidate", "", 3, "formGroup"], [1, "input"], [1, "fa", "fa-user"], ["type", "text", "formControlName", "name", "placeholder", "Nome", 1, "w-100"], ["placeholder", "Observa\u00E7\u00E3o", "formControlName", "observation", 1, "textarea", 2, "height", "265px"], [1, "fa", "fa-info"], ["formControlName", "status", 1, "w-100"], ["value", "", "selected", ""], [3, "value", 4, "ngFor", "ngForOf"], ["data-target", "#modalPhoneNumber", "data-toggle", "modal", 1, "btn-secondary", "mb-15", 2, "border", "none!important"], [1, "fa", "fa-plus", 2, "margin-right", "5px"], ["class", "card-input mb-15", 4, "ngFor", "ngForOf"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary"], ["closemodalStickyAdd", ""], ["elseTemplateUpdate", ""], ["id", "modalPhoneNumber", "tabindex", "-1", "aria-labelledby", "modalNewPhoneNumber", "aria-hidden", "true", 1, "modal", "fade"], ["id", "modalNewPhoneNumber", 1, "modal-title"], [1, "modal-body"], ["novalidate", ""], [1, "form-group", "is-empty", "col-md-12"], [1, "fa", "fa-globe-americas"], ["bindLabel", "nome", "autofocus", "", "bindValue", "countryCode", 3, "items", "ngModel", "ngModelOptions", "change", "ngModelChange"], [1, "fa", "fa-mobile-alt"], [3, "ngModel", "mask", "ngModelOptions", "ngModelChange"], ["errorMessage", "Campo obrigat\u00F3rio", "label", "Whatsapp"], [1, "onoffswitch"], ["type", "checkbox", "id", "myonoffswitch", 1, "onoffswitch-checkbox", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["for", "myonoffswitch", 1, "onoffswitch-label"], ["closeModalPhone", ""], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["id", "modalScriptAdd", "tabindex", "-1", "aria-labelledby", "modalNewScript", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-exlg"], ["id", "modalNewScript", 1, "modal-title"], ["placeholder", "Estrat\u00E9gia", "formControlName", "strategy", 1, "textarea"], [1, "fa", "fa-link"], ["type", "text", "formControlName", "url_sale", "placeholder", "Seu link para venda", 1, "w-100"], ["closemodalScriptAdd", ""], ["type", "button", 1, "btn", "btn-primary", 3, "disabled", "click"], ["id", "modalImportContact", "tabindex", "-1", "aria-labelledby", "modalNewImportContact", "aria-hidden", "true", 1, "modal", "fade"], ["id", "modalNewImportContact", 1, "modal-title"], [4, "ngIf"], ["class", "modal-footer", 4, "ngIf"], ["id", "modalCall", "tabindex", "-1", "aria-labelledby", "modalStapcall", "aria-hidden", "true", 1, "modal", "fade"], ["id", "modalStapcall", 1, "modal-title"], [1, "row", "flex-wrap"], ["class", "contacto-phone", 4, "ngFor", "ngForOf"], ["class", "row", 4, "ngIf"], [1, "row"], [1, "flex-direction-column"], [1, "row", "flex-direction-row"], ["class", "card mr-5 cursor-pointer", "title", "Problemas com cart\u00E3o de cr\u00E9dito", 3, "click", 4, "ngIf"], ["class", "card mr-5 cursor-pointer", "title", "Ligar depois", 3, "click", 4, "ngIf"], ["class", "card mr-5 cursor-pointer", "title", "N\u00E3o deu neg\u00F3cio \uD83D\uDE2D", 3, "click", 4, "ngIf"], ["class", "card mr-5 cursor-pointer", "title", "Vendido \uD83D\uDE03", 3, "click", 4, "ngIf"], [1, "content", "rowCall"], [1, "person"], ["for", ""], ["placeholder", "Observa\u00E7\u00E3o", "formControlName", "observation", 1, "textarea", 2, "width", "95%", "height", "300px", 3, "change"], ["class", "tree margint-25", 4, "ngFor", "ngForOf"], [1, "strategy"], [4, "ngFor", "ngForOf"], ["id", "modalDonate", "tabindex", "-1", "aria-labelledby", "modalNewDonate", "aria-hidden", "true", 1, "modal", "fade"], [1, "mb-15"], [1, "row", "center-center", "mb-25"], [1, "pix", "mr-25"], [1, "row", "center-center"], ["src", "/assets/img/system/pix.png", "width", "128px", "alt", "", 2, "text-align", "center"], [1, "w-100"], [1, "card", "light", 2, "margin-left", "10px"], ["id", "modalBug", "tabindex", "-1", "aria-labelledby", "modalNewBug", "aria-hidden", "true", 1, "modal", "fade"], [1, "fa", "fa-bug"], ["target", "_BLANK", "href", "https://trello.com/b/GQpoOLdf/sell-more"], [1, "fab", "fa-trello"], ["type", "text", "formControlName", "name", "placeholder", "T\u00EDtulo", 1, "w-100"], ["placeholder", "Descreva seu problema em detalhes", "formControlName", "desc", 1, "textarea"], ["id", "modalCalendar", "tabindex", "-1", "aria-labelledby", "modalCalendar", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-title"], [1, "calendarOptions"], [1, "calendarDate"], ["mwlCalendarPreviousView", "", 1, "btn", "btn-secondary", 2, "margin", "5px", "padding", "10px", 3, "view", "viewDate", "viewDateChange"], ["mwlCalendarToday", "", 1, "btn", "btn-secondary", 2, "margin", "5px", "padding", "10px", 3, "viewDate", "viewDateChange"], ["mwlCalendarNextView", "", 1, "btn", "btn-secondary", 2, "margin", "5px", "padding", "10px", 3, "view", "viewDate", "viewDateChange"], [1, "calendarDateChosen"], [1, "calendarDateType"], [1, "btn", "btn-secondary", 2, "margin", "5px", "padding", "10px", 3, "click"], [3, "ngSwitch"], [3, "viewDate", "events", "refresh", "activeDayIsOpen", "dayClicked", "eventClicked", "eventTimesChanged", 4, "ngSwitchCase"], [3, "viewDate", "events", "refresh", "eventClicked", "eventTimesChanged", 4, "ngSwitchCase"], [1, ""], [1, "card-light"], [1, "input", 2, "margin-right", "25px"], [1, "fa", "fa-calendar-alt"], ["formControlName", "id_customers", 1, "w-100"], ["type", "text", "mask", "dX/M0/0000", "formControlName", "date", "placeholder", "Dia", 1, "w-100", 3, "showMaskTyped"], [1, "fa", "fa-hourglass-start"], ["type", "text", "mask", "Hh:m0:s0", "formControlName", "hour", "placeholder", "Hora", 1, "w-100", 3, "showMaskTyped"], ["data-toggle", "modal", "data-target", "#modalDetailCalendar", 2, "display", "none"], ["openCalendarDetail", ""], ["id", "modalDetailCalendar", "tabindex", "-1", "aria-labelledby", "modalDetailCalendar", "aria-hidden", "true", 1, "modal", "fade"], [3, "innerHtml"], ["class", "mt-15", 4, "ngIf"], ["data-dismiss", "modal", "mat-menu-item", "", "data-toggle", "modal", "data-target", "#modalCall", 3, "click", 4, "ngIf"], [1, "buttonsAgendaRemover"], ["data-dismiss", "modal", 3, "click"], ["class", "row", "style", "position: fixed; top: 0;width: 100%; height: 100%;", 4, "ngIf"], [1, "iconTheme", "mobileNo", 3, "routerLink"], [1, "far", "fa-moon"], [1, "fas", "fa-moon"], [1, "fas", "fa-eye"], [1, "fas", "fa-eye-slash"], [1, "content", "pad40"], [1, "totalFilter"], [1, "totalRegisterFilter"], ["class", "", 4, "ngIf"], [1, "display-row"], ["class", "row customersFilter", 4, "ngFor", "ngForOf"], [1, "row", "center-center", 2, "flex-direction", "column"], [1, "lottieSearch", 3, "options"], [1, "row", "customersFilter"], [1, "filterName"], [1, "filterNameRow"], [1, "filtercreated_at"], ["class", "filterPhone", 4, "ngFor", "ngForOf"], [1, "menuFilter"], ["matTooltip", "Menu", 1, "fa", "fa-bars", "icon-finished", "cursor-pointer", 2, "margin-left", "15px", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", "", "data-toggle", "modal", "data-target", "#modalImportContact", 3, "click"], [1, "fab", "fa-whatsapp"], ["mat-menu-item", "", "data-toggle", "modal", "data-target", "#modalStickyAdd", 3, "click"], [1, "fas", "fa-edit"], ["elseTemplateActiveOrInative", ""], [1, "fa", "fa-chalkboard-teacher"], ["mat-menu-item", "", "data-toggle", "modal", "data-target", "#modalCall", 3, "click"], [1, "fa", "fa-phone-volume"], [1, "filterstatus"], [1, "filterbo_ativo"], [1, "filterPhone"], ["class", "mr-10", 4, "ngIf"], [1, "mr-10"], [1, "row", "flex-direction-row", "flex-wrap", 2, "justify-content", "space-between"], [1, "row", "flex-direction-column"], [1, "totalLead"], [1, "totalOthers"], [1, "row", "flex-direction-row", "flex-wrap", "center-center", "showEachStatus"], ["type", "checkbox", "id", "boShowAberto", 1, "onoffswitch-checkbox", 3, "ngModel", "ngModelOptions", "change", "ngModelChange"], ["for", "boShowAberto", 1, "onoffswitch-label"], ["type", "checkbox", "id", "boShowProblemasCartao", 1, "onoffswitch-checkbox", 3, "ngModel", "ngModelOptions", "change", "ngModelChange"], ["for", "boShowProblemasCartao", 1, "onoffswitch-label"], ["type", "checkbox", "id", "boShowLigarDepois", 1, "onoffswitch-checkbox", 3, "ngModel", "ngModelOptions", "change", "ngModelChange"], ["for", "boShowLigarDepois", 1, "onoffswitch-label"], ["type", "checkbox", "id", "idBoShowNaotemInteresse", 1, "onoffswitch-checkbox", 3, "ngModel", "ngModelOptions", "change", "ngModelChange"], ["for", "idBoShowNaotemInteresse", 1, "onoffswitch-label"], ["type", "checkbox", "id", "boShowComprou", 1, "onoffswitch-checkbox", 3, "ngModel", "ngModelOptions", "change", "ngModelChange"], ["for", "boShowComprou", 1, "onoffswitch-label"], ["class", "contentWiseller", "id", "customersBody", 4, "ngIf"], ["id", "customersBody", 1, "contentWiseller"], [1, "contatos"], ["itemSize", "540", 1, "viewport"], ["class", "customers", 4, "cdkVirtualFor", "cdkVirtualForOf"], [1, "card-agenda", "modal-dialog", "mobileNo"], ["class", "", "style", "margin-top: 5px;", 4, "ngIf"], [1, "customers"], [1, "parent", "center-center"], [1, "contact"], [1, "name"], [1, "action"], ["waiting", ""], [1, "children"], ["class", "item", 4, "ngFor", "ngForOf"], [1, "info", "center-center"], [1, "quantitative"], ["data-toggle", "modal", "data-target", "#modalStickyAdd", 1, "actionButton", 3, "click"], [1, "contacto-phone"], [1, "finished"], ["class", "fa fa-credit-card icon-finished icon-finished-no", 4, "ngIf"], ["class", "fa fa-headset icon-finished", 4, "ngIf"], ["class", "fa fa-thumbs-down icon-finished icon-finished-no", 4, "ngIf"], ["class", "fa fa-thumbs-up icon-finished icon-finished-yes", 4, "ngIf"], ["matTooltip", "Menu", 1, "fa", "fa-bars", "icon-finished", "cursor-pointer", 3, "matMenuTriggerFor"], [1, "fa", "fa-credit-card", "icon-finished", "icon-finished-no"], [1, "fa", "fa-headset", "icon-finished"], [1, "fa", "fa-thumbs-down", "icon-finished", "icon-finished-no"], [1, "fa", "fa-thumbs-up", "icon-finished", "icon-finished-yes"], [1, "waiting"], ["matTooltip", "Problemas com cart\u00E3o de cr\u00E9dito", 1, "fa", "fa-credit-card", "icon-waiting", 3, "click"], ["matTooltip", "Ligar depois", 1, "fa", "fa-headset", "icon-waiting", 3, "click"], ["matTooltip", "N\u00E3o deu neg\u00F3cio \uD83D\uDE2D", 1, "fa", "fa-thumbs-down", "icon-waiting", 3, "click"], ["matTooltip", "Vendido \uD83D\uDE03", 1, "fa", "fa-thumbs-up", "icon-waiting", 3, "click"], ["matTooltip", "Menu", 1, "fa", "fa-bars", "icon-waiting", "cursor-pointer", 3, "matMenuTriggerFor"], [1, "item"], ["data-toggle", "modal", "data-target", "#modalCall", 1, "contacto", "cursor-pointer", 3, "click"], [1, "contacto-name"], ["class", "fa fa-star", 4, "ngIf"], ["waitingChildren", ""], [1, "fa", "fa-star"], ["class", "fa fa-headset icon-finished icon-finished-no", 4, "ngIf"], ["matTooltip", "Menu", 1, "fa", "fa-bars", "icon-finished", 2, "margin-left", "15px", 3, "matMenuTriggerFor"], [1, "fa", "fa-headset", "icon-finished", "icon-finished-no"], ["matTooltip", "Dar preferencia", 1, "icon-waiting", 3, "ngClass", "click"], ["matTooltip", "Menu", 1, "fa", "fa-bars", "icon-waiting", 3, "matMenuTriggerFor"], [3, "viewDate", "events", "refresh", "activeDayIsOpen", "dayClicked", "eventClicked", "eventTimesChanged"], [3, "viewDate", "events", "refresh", "eventClicked", "eventTimesChanged"], [1, "", 2, "margin-top", "5px"], [1, "modal-footer", 2, "justify-content", "flex-start"], [3, "value"], ["class", "contacto-phone ml-5", 4, "ngFor", "ngForOf"], [1, "contacto-phone", "ml-5"], [1, "cursor-pointer"], [3, "ngClass"], [1, "card-input", "mb-15"], [1, "phone-icon"], ["IconTelefone", ""], [1, "phone-number"], [1, "phone-remove"], [1, "fa", "fa-trash", "cursor-pointer", 3, "click"], [1, "fab", "fa-whatsapp", 2, "font-size", "2.28em"], [1, "fa", "fa-mobile"], [1, "form-group", "margint-25"], ["type", "file", 2, "display", "none", 3, "change"], ["fileInput", ""], [1, "uploadArquivo"], [1, "btn", "btn-upload", "btn-secondary", 3, "click"], [1, "card", 2, "background", "transparent", "color", "var(--backgroundColor)", "margin-bottom", "15px"], ["style", "margin-top: 15px;", 4, "ngFor", "ngForOf"], [1, "card", 2, "background", "transparent", "color", "var(--backgroundColor)"], [2, "margin-top", "15px"], ["target", "_BLANK", "title", "Enviar link", 3, "href"], ["target", "_BLANK", "title", "Fazer a venda.", 3, "href"], [1, "card", "mr-5", "cursor-pointer"], [1, "fab", "fa-wpforms"], ["title", "Problemas com cart\u00E3o de cr\u00E9dito", 1, "card", "mr-5", "cursor-pointer", 3, "click"], [1, "fa", "fa-credit-card", "icon-waiting"], ["title", "Ligar depois", 1, "card", "mr-5", "cursor-pointer", 3, "click"], [1, "fa", "fa-headset", "icon-waiting"], ["title", "N\u00E3o deu neg\u00F3cio \uD83D\uDE2D", 1, "card", "mr-5", "cursor-pointer", 3, "click"], [1, "fa", "fa-thumbs-down", "icon-waiting"], ["title", "Vendido \uD83D\uDE03", 1, "card", "mr-5", "cursor-pointer", 3, "click"], [1, "fa", "fa-thumbs-up", "icon-waiting"], [1, "tree", "margint-25"], [1, "parentName"], [1, "fa", "fa-folder-open"], ["class", "parentPhone", 4, "ngFor", "ngForOf"], [1, "parentDesc"], [1, "parentPhone"], [1, "mt-15"], ["data-dismiss", "modal", "mat-menu-item", "", "data-toggle", "modal", "data-target", "#modalCall", 3, "click"], [1, "row", 2, "position", "fixed", "top", "0", "width", "100%", "height", "100%"], [1, "center-center", 2, "width", "100%", 3, "options", "complete"]], template: function SellMoreComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](8, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](10, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("keydown", function SellMoreComponent_Template_input_keydown_10_listener() { return ctx.isSearch = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](11, SellMoreComponent_button_11_Template, 2, 2, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](12, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function SellMoreComponent_Template_button_click_12_listener() { return ctx.setDarkMode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](13, SellMoreComponent_ng_container_13_Template, 2, 0, "ng-container", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](14, SellMoreComponent_ng_template_14_Template, 1, 0, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](16, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](17, " Reportar bug ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](18, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](19, " Doar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](20, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](21, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](22, "mat-menu", null, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](24, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](25, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](27, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](28, SellMoreComponent_ng_container_28_Template, 3, 0, "ng-container", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](29, SellMoreComponent_ng_template_29_Template, 2, 0, "ng-template", null, 22, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](31, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function SellMoreComponent_Template_button_click_31_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](32, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](33, " Sair ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](34, SellMoreComponent_div_34_Template, 8, 4, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](35, SellMoreComponent_div_35_Template, 43, 22, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](36, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](37, "div", 26, 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function SellMoreComponent_Template_div_click_37_listener() { return ctx.setEvents(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](39, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](40, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function SellMoreComponent_Template_div_click_40_listener() { return ctx.newLead(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](41, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](42, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function SellMoreComponent_Template_div_click_42_listener() { return ctx.newLead(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](43, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](44, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](45, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](46, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](47, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](48, "h3", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](49, SellMoreComponent_ng_container_49_Template, 3, 1, "ng-container", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](50, SellMoreComponent_ng_template_50_Template, 2, 2, "ng-template", null, 38, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](52, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](53, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](54, "form", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](55, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](56, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](57, "i", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](58, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](59, "input", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](60, "textarea", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](61, "\t\t\t\t\t\t");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](62, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](63, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](64, "i", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](65, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](66, "select", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](67, "option", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](68, " Selecione uma op\u00E7\u00E3o caso tenha entrado em contato com o referente ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](69, SellMoreComponent_option_69_Template, 2, 2, "option", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](70, "button", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](71, "i", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](72, "Adicionar n\u00FAmero de telefone ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](73, SellMoreComponent_div_73_Template, 13, 9, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](74, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](75, "button", 54, 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](77, " Fechar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](78, SellMoreComponent_ng_container_78_Template, 3, 1, "ng-container", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](79, SellMoreComponent_ng_template_79_Template, 2, 1, "ng-template", null, 56, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](81, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](82, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](83, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](84, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](85, "h3", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](86, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](87, "Adicionando telefone");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](88, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](89, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](90, "form", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](91, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](92, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](93, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](94, "i", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](95, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](96, "ng-select", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("change", function SellMoreComponent_Template_ng_select_change_96_listener($event) { return ctx.maskPhoneToInsert($event); })("ngModelChange", function SellMoreComponent_Template_ng_select_ngModelChange_96_listener($event) { return ctx.countryCodeSelected = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](97, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](98, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](99, "i", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](100, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](101, "input", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function SellMoreComponent_Template_input_ngModelChange_101_listener($event) { return ctx.phone = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](102, "app-input-container", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](103, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](104, "input", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function SellMoreComponent_Template_input_ngModelChange_104_listener($event) { return ctx.bo_whatsapp = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](105, "label", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](106, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](107, "button", 54, 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](109, " Fechar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](110, "button", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function SellMoreComponent_Template_button_click_110_listener() { return ctx.addFKPhone(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](111, " Salvar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](112, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](113, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](114, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](115, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](116, "h3", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](117, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](118, "Roteiro");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](119, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](120, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](121, "form", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](122, "textarea", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](123, "\t\t\t\t\t\t");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](124, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](125, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](126, "i", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](127, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](128, "input", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](129, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](130, "button", 54, 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](132, " Fechar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](133, "button", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function SellMoreComponent_Template_button_click_133_listener() { return ctx.saveStrategy(ctx.formScript.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](134, " Salvar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](135, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](136, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](137, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](138, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](139, "h3", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](140, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](141);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](142, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](143, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](144, SellMoreComponent_span_144_Template, 10, 6, "span", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](145, SellMoreComponent_ng_container_145_Template, 9, 4, "ng-container", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](146, SellMoreComponent_div_146_Template, 3, 0, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](147, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](148, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](149, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](150, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](151, "h2", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](152, "div", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](153);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](154, SellMoreComponent_div_154_Template, 9, 11, "div", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](155, SellMoreComponent_div_155_Template, 6, 4, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](156, "div", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](157, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](158, "div", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](159, SellMoreComponent_div_159_Template, 4, 1, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](160, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](161, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](162, "Deseja alterar o status?");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](163, "div", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](164, SellMoreComponent_div_164_Template, 2, 0, "div", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](165, SellMoreComponent_div_165_Template, 2, 0, "div", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](166, SellMoreComponent_div_166_Template, 2, 0, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](167, SellMoreComponent_div_167_Template, 2, 0, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](168, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](169, "div", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](170, "div", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](171, "form", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](172, "label", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](173);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](174, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](175, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](176);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](177, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](178, "textarea", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("change", function SellMoreComponent_Template_textarea_change_178_listener() { return ctx.update(ctx.form.value, false, false, true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](179, "\t\t\t\t\t\t\t");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](180, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](181, "\u00C1rvores de indica\u00E7\u00F5es");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](182, SellMoreComponent_div_182_Template, 10, 6, "div", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](183, "div", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](184, "perfect-scrollbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](185, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](186, "Strategy");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](187, SellMoreComponent_span_187_Template, 3, 1, "span", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](188, "div", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](189, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](190, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](191, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](192, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](193, "p", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](194, " O Wiseller \u00E9 uma ferramenta sem fins lucrativos. Contudo, temos um grande gasto com servidores, pois n\u00E3o \u00E9 nada f\u00E1cil manter um programa com o porte do Wiseller no ar. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](195, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](196, "p", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](197, " Colaborando conosco, voc\u00EA vai garantir nossa perman\u00EAncia no ar. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](198, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](199, "p", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](200, " Fa\u00E7a sua parte. Ajude-nos a manter o servidor sempre on-line. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](201, "div", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](202, "div", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](203, "div", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](204, "img", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](205, "button", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](206, " PIX ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](207, "div", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](208, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](209, "Ou");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](210, "div", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](211, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](212, "div", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](213, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](214, "Itau");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](215, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](216, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](217, " Ag\u00EAncia: 0322");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](218, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](219, " Conta: 58119-0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](220, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](221, " CPF: 040.712.881-67 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](222, "div", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](223, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](224, "Banco inter");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](225, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](226, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](227, " Ag\u00EAncia: 0001");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](228, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](229, " Conta: 1961169-2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](230, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](231, " CPF: 040.712.881-67 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](232, "div", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](233, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](234, "NuBank");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](235, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](236, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](237, " Ag\u00EAncia: 0001");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](238, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](239, " Conta: 9506125-2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](240, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](241, " CPF: 040.712.881-67 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](242, "div", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](243, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](244, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](245, "h3", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](246, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](247, "i", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](248, " Enviar um relat\u00F3rio de erro (Bug) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](249, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](250, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](251, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](252, " Reporte aqui um erro que tenha encontrado, assim que poss\u00EDvel ele ser\u00E1 corrigido. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](253, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](254, " Para que possamos identificar o erro, digite em detalhes tudo que aconteceu");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](255, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](256, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](257, "p", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](258, "a", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](259, "i", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](260, " Veja no que estamos trabalhando");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](261, "form", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](262, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](263, "input", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](264, "textarea", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](265, "\t\t\t\t\t");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](266, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](267, "button", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](268, " Fechar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](269, "button", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function SellMoreComponent_Template_button_click_269_listener() { return ctx.bug(ctx.formBug.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](270, " Salvar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](271, "div", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](272, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](273, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](274, "h3", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](275, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](276, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](277, " Calendario ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](278, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](279, "div", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](280, "div", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](281, "button", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("viewDateChange", function SellMoreComponent_Template_button_viewDateChange_281_listener($event) { return ctx.viewDate = $event; })("viewDateChange", function SellMoreComponent_Template_button_viewDateChange_281_listener() { return ctx.closeOpenMonthViewDay(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](282, " Anterior ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](283, "button", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("viewDateChange", function SellMoreComponent_Template_button_viewDateChange_283_listener($event) { return ctx.viewDate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](284, " Hoje ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](285, "button", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("viewDateChange", function SellMoreComponent_Template_button_viewDateChange_285_listener($event) { return ctx.viewDate = $event; })("viewDateChange", function SellMoreComponent_Template_button_viewDateChange_285_listener() { return ctx.closeOpenMonthViewDay(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](286, " Pr\u00F3ximo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](287, "div", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](288, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](289);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](290, "calendarDate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](291, "div", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](292, "div", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](293, "button", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function SellMoreComponent_Template_button_click_293_listener() { return ctx.setView(ctx.CalendarView.Month); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](294, " M\u00EAs ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](295, "button", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function SellMoreComponent_Template_button_click_295_listener() { return ctx.setView(ctx.CalendarView.Week); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](296, " Semana ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](297, "button", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function SellMoreComponent_Template_button_click_297_listener() { return ctx.setView(ctx.CalendarView.Day); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](298, " Dia ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](299, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](300, "div", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](301, SellMoreComponent_mwl_calendar_month_view_301_Template, 1, 4, "mwl-calendar-month-view", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](302, SellMoreComponent_mwl_calendar_week_view_302_Template, 1, 3, "mwl-calendar-week-view", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](303, SellMoreComponent_mwl_calendar_day_view_303_Template, 1, 3, "mwl-calendar-day-view", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](304, "div", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](305, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](306, " Novo agendamento: clique no dia e informe o hor\u00E1rio ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](307, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](308);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](309, "div", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](310, "form", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](311, "div", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](312, "div", 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](313, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](314, "i", 133);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](315, "select", 134);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](316, "option", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](317, " Referente ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](318, SellMoreComponent_option_318_Template, 4, 3, "option", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](319, "div", 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](320, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](321, "i", 133);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](322, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](323, "input", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](324, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](325, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](326, "i", 136);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](327, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](328, "input", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](329, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](330, "button", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function SellMoreComponent_Template_button_click_330_listener() { return ctx.addEvent(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](331, " Salvar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](332, "button", 138, 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](334, "div", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](335, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](336, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](337, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](338, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](339, "div", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](340, "h3", 141);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](341, SellMoreComponent_p_341_Template, 6, 8, "p", 142);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](342, SellMoreComponent_button_342_Template, 3, 0, "button", 143);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](343, "small", 141);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](344, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](345, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](346, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](347, " A op\u00E7\u00E3o alterar ainda n\u00E3o est\u00E1 dispon\u00EDvel. Caso queira alterar, voc\u00EA ter\u00E1 que remover e inserir novamente ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](348, "div", 144);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](349, "button", 145);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function SellMoreComponent_Template_button_click_349_listener() { return ctx.removerAgendamento(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](350, "Remover agendamento");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](351, "button", 145);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function SellMoreComponent_Template_button_click_351_listener() { return ctx.removerAgendamento(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](352, "Remover agendamento e filtrar referido");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](353, SellMoreComponent_div_353_Template, 2, 1, "div", 146);
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](15);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](23);
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](30);
        const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](51);
        const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](80);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("formGroup", ctx.searchForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", (ctx.user == null ? null : ctx.user.id) === 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.themeIsDark)("ngIfElse", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("matMenuTriggerFor", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", ctx.user == null ? null : ctx.user.nome, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.showNaotemInteresse == "false")("ngIfElse", _r6);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.customersFilter.length || ctx.searchForm.value.searchControl.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx.customersFilter.length && !ctx.searchForm.value.searchControl.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.parent.id)("ngIfElse", _r12);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx.form.value.telefones);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx.form.value.id)("ngIfElse", _r18);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("items", ctx.countryCodes)("ngModel", ctx.countryCodeSelected)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](83, _c6));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("mask", ctx.maskToInsert);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx.phone)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](84, _c6));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx.bo_whatsapp)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](85, _c6));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("formGroup", ctx.formScript);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", !ctx.formScript.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("Importanto contatos indicados do(a) ", ctx.parent.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.customersImported.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.customersImported.length != 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.customersImported.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" Ligando para ", ctx.person.name, " - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx.person.phones);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.person.status != "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.strategy == null ? null : ctx.strategy.url_sale);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.person.status != "pc");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.person.status != "ld");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.person.status != "n");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.person.status != "c");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" Referido criado em: ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](174, 73, ctx.person == null ? null : ctx.person.created_at, "dd/MM/yyyy H:mm:ss"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" Referido alterado em: ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](177, 76, ctx.person == null ? null : ctx.person.updated_at, "dd/MM/yyyy H:mm:ss"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx.parents);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx.strategy == null ? null : ctx.strategy.staps);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](74);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("formGroup", ctx.formBug);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", !ctx.formBug.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("view", ctx.view)("viewDate", ctx.viewDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("viewDate", ctx.viewDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("view", ctx.view)("viewDate", ctx.viewDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind3"](290, 79, ctx.viewDate, ctx.view + "ViewTitle", "pt-br"));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵclassProp"]("active", ctx.view === ctx.CalendarView.Month);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵclassProp"]("active", ctx.view === ctx.CalendarView.Week);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵclassProp"]("active", ctx.view === ctx.CalendarView.Day);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngSwitch", ctx.view);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngSwitchCase", ctx.CalendarView.Month);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngSwitchCase", ctx.CalendarView.Week);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngSwitchCase", ctx.CalendarView.Day);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", ctx.formCalendar.value.title, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("formGroup", ctx.formCalendar);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx.customersLd);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("showMaskTyped", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("showMaskTyped", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", !ctx.formCalendar.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("innerHtml", ctx.calendarDetail == null ? null : ctx.calendarDetail.title, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.calendarDetail == null ? null : ctx.calendarDetail.referido == null ? null : ctx.calendarDetail.referido.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.calendarDetail == null ? null : ctx.calendarDetail.referido == null ? null : ctx.calendarDetail.referido.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("innerHtml", ctx.calendarDetail == null ? null : ctx.calendarDetail.referido == null ? null : ctx.calendarDetail.referido.observation, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.showCongrats);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_20__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_24__.NgIf, _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__.MatMenuTrigger, _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__._MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__.MatMenuItem, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_26__.MatTooltip, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_20__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_24__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NgForm, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_27__.NgSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NgModel, ngx_mask__WEBPACK_IMPORTED_MODULE_28__.MaskDirective, _shared_input_input_component__WEBPACK_IMPORTED_MODULE_9__.InputComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.CheckboxControlValueAccessor, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_23__.PerfectScrollbarComponent, angular_calendar__WEBPACK_IMPORTED_MODULE_15__["ɵf"], angular_calendar__WEBPACK_IMPORTED_MODULE_15__["ɵh"], angular_calendar__WEBPACK_IMPORTED_MODULE_15__["ɵg"], _angular_common__WEBPACK_IMPORTED_MODULE_24__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_24__.NgSwitchCase, _angular_router__WEBPACK_IMPORTED_MODULE_29__.RouterLink, ngx_lottie__WEBPACK_IMPORTED_MODULE_10__.LottieComponent, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_30__.CdkVirtualScrollViewport, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_30__.CdkFixedSizeVirtualScroll, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_30__.CdkVirtualForOf, _angular_common__WEBPACK_IMPORTED_MODULE_24__.NgClass, angular_calendar__WEBPACK_IMPORTED_MODULE_15__.CalendarMonthViewComponent, angular_calendar__WEBPACK_IMPORTED_MODULE_15__.CalendarWeekViewComponent, angular_calendar__WEBPACK_IMPORTED_MODULE_15__.CalendarDayViewComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_24__.DatePipe, angular_calendar__WEBPACK_IMPORTED_MODULE_15__["ɵi"], _pipes_boolean_message_pipe__WEBPACK_IMPORTED_MODULE_11__.BooleanMessagePipe, _pipes_helpers_pipe__WEBPACK_IMPORTED_MODULE_12__.HelpersPipe, _angular_common__WEBPACK_IMPORTED_MODULE_24__.KeyValuePipe, _pipes_safe_html_pipe__WEBPACK_IMPORTED_MODULE_13__.SafeHtml], styles: [".sellMore[_ngcontent-%COMP%] {\n\tmin-height: 100vh;\n\twidth: 100%;\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n.sellMore[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] {\n\tpadding: 15px;\n\theight: 95px;\n\twidth: 100%;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tflex-wrap: wrap;\n\t\n\t\n}\n\n.sellMore[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n\twidth: 120px;\n\theight: 100%;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n}\n\n.sellMore[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%] {\n\tflex: 1;\n\theight: 100%;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n}\n\n.sellMore[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%] {\n\twidth: 120px;\n\theight: 100%;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n}\n\n.sellMore[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n\twidth: 56px;\n\theight: 56px;\n\tborder-radius: 28px;\n}\n\n.sellMore[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n\tpadding: 15px;\n\tflex: 1;\n\twidth: 100%;\n}\n\n.sellMore[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%] {\n\tposition: fixed;\n\tpadding: 15px;\n\theight: 95px;\n\t\n\twidth: 310px;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: flex-end;\n\tbottom: 0;\n\tright: 0;\n}\n\n.footerItens[_ngcontent-%COMP%] {\n\twidth: 80px;\n\theight: 80px;\n\tborder-radius: 40px;\n\tbackground-color: var(--backgroundSecondary);\n\tcolor: var(--backgroundSecondaryColor);\n\tmargin-left: 10px;\n\tfont-size: 3em;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tcursor: pointer;\n\ttransition: 0.3s;\n\tz-index: 998;\n}\n\n.footerItens[_ngcontent-%COMP%]:hover {\n\tbackground-color: var(--backgroundSecondaryHover);\n\tfont-size: 3.1em;\n}\n\n.totalLead[_ngcontent-%COMP%] {\n\tfont-weight: bold;\n\tfont-size: 28px;\n}\n\n.totalOthers[_ngcontent-%COMP%] {\n\tfont-weight: bold;\n\tfont-size: 17px;\n}\n\n.display-row[_ngcontent-%COMP%]{\n\tdisplay: flex;\n\tflex-direction: row;\n\tflex-wrap: wrap;\n\n}\n\n.customersFilter[_ngcontent-%COMP%]{\n\tbackground-color: var(--backgroundComponents);\n\twidth: 422px;\n\tmargin: 15px;\n\tpadding: 25px;\n\tborder-radius: 10px;\n\tcolor: #efefed;\n\tflex-direction: column;\n\t\n}\n\n.menuFilter[_ngcontent-%COMP%]{\n\twidth: 50px;\n}\n\n.filterName[_ngcontent-%COMP%]{\n\tcolor: var(--backgroundSecondary) !important;\n\tfont-size: 25px;\n\tfont-weight: bold;\n\tdisplay: flex;\n\tflex: 1;\n\talign-items: center;\n\tjustify-content: center;\n\tflex-direction: column;\n}\n\n.filterPhone[_ngcontent-%COMP%]{\n\tfont-size: 15px;\n\tcolor: #efefed;\n\tmargin-bottom: 15px;\n\n}\n\n.filtercreated_at[_ngcontent-%COMP%]{\n\tfont-size: 12px;\n\tcolor: #efefed;\n}\n\n.contentWiseller[_ngcontent-%COMP%]{\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tflex-direction: row;\n}\n\n.contatos[_ngcontent-%COMP%] {\n\twidth: 500px;\n}\n\n.card-agenda[_ngcontent-%COMP%] {\n\tdisplay: flex;\n\tflex: 1;\n\tflex-direction: column;\n\tmargin-top: 0;\n}\n\n#customersBody[_ngcontent-%COMP%]    > div.card-agenda.modal-dialog[_ngcontent-%COMP%]    > div.modal-body[_ngcontent-%COMP%] {\n\tpadding-top: 5px;\n}\n\n.buttonsAgendaRemover[_ngcontent-%COMP%]{\n\tdisplay: flex;\n\tflex-direction: row;\n}\n\n#modalDetailCalendar[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n\tmargin: 5px;\n\twidth: 50%;\n\n}\n\n.viewport[_ngcontent-%COMP%] {\n\twidth: 100%;\n\theight: 100vh;\n\tdisplay: flex;\n\tflex-direction: row;\n\tflex-wrap: wrap;\n\toverflow: scroll;\n\toverflow-x: hidden;\n}\n\n.customers[_ngcontent-%COMP%] {\n\twidth: calc(100% - 100px);\n\theight: 510px;\n\tbackground-color: var(--backgroundComponents);\n\tmargin: 15px;\n\tborder-radius: 10px;\n\tcolor: #efefed;\n\tdisplay: flex;\n\tflex-direction: column;\n\ttransition: all 2s;\n}\n\n.parent[_ngcontent-%COMP%] {\n\theight: 60px;\n\twidth: 100%;\n\tdisplay: flex;\n\tflex-direction: row;\n}\n\n.children[_ngcontent-%COMP%] {\n\tflex: 1;\n\tpadding: 15px;\n\toverflow: auto;\n}\n\n.info[_ngcontent-%COMP%] {\n\theight: 70px;\n\twidth: 100%;\n\tdisplay: flex;\n}\n\n.parent[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%] {\n\tdisplay: flex;\n\tflex: 1;\n\tjustify-content: center;\n\talign-items: center;\n\tflex-direction: column;\n}\n\n.parent[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n\tfont-size: 16px;\n\tfont-weight: bold;\n}\n\n.parent[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   .finished[_ngcontent-%COMP%] {\n\twidth: 90px;\n}\n\n.parent[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   .finished[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n\tmargin-right: 10px;\n}\n\n.parent[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   .waiting[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n\tmargin-left: 10px;\n}\n\n.waiting[_ngcontent-%COMP%] {\n\twidth: 160px;\n}\n\n.children[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tmargin-bottom: 15px;\n}\n\n.children[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .contacto[_ngcontent-%COMP%] {\n\tdisplay: flex;\n\tflex: 1;\n\tflex-direction: column;\n}\n\n.children[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .contacto[_ngcontent-%COMP%]   .contacto-name[_ngcontent-%COMP%] {\n\tfont-size: 20px;\n\tfont-weight: bold;\n}\n\n.children[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .contacto[_ngcontent-%COMP%]   .contacto-phone[_ngcontent-%COMP%], .children[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .contacto[_ngcontent-%COMP%]   .contacto-name[_ngcontent-%COMP%] {\n\tcolor: var(--backgroundColorLight) !important;\n}\n\n.children[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .finished[_ngcontent-%COMP%] {\n\tdisplay: flex;\n\talign-items: flex-end;\n\tjustify-content: flex-end;\n\twidth: 50px;\n}\n\n.children[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .waiting[_ngcontent-%COMP%] {\n\tdisplay: flex;\n\talign-items: flex-end;\n\tjustify-content: flex-end;\n\twidth: 153px;\n}\n\n.children[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .waiting[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n\tmargin-left: 6px;\n}\n\n.info[_ngcontent-%COMP%]   .quantitative[_ngcontent-%COMP%] {\n\tmargin-left: 15px;\n\tflex: 1;\n\tfont-size: 16px;\n}\n\n.info[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%] {\n\tdisplay: flex;\n\twidth: 70px;\n\theight: 100%;\n\tjustify-content: center;\n\talign-items: center;\n}\n\n.actionButton[_ngcontent-%COMP%] {\n\twidth: 40px;\n\theight: 40px;\n\tborder-radius: 20px;\n\tbackground-color: var(--backgroundSecondary);\n\tcolor: var(--backgroundSecondaryColor);\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tfont-size: 20px;\n\tfont-weight: bold;\n\tcursor: pointer;\n\ttransition: 0.3s;\n\tz-index: 999;\n}\n\n.actionButton[_ngcontent-%COMP%]:hover {\n\tbackground-color: var(--backgroundSecondaryHover);\n\t\n}\n\n.icon-finished[_ngcontent-%COMP%] {\n\tfont-size: 27px;\n}\n\n.icon-finished-yes[_ngcontent-%COMP%] {\n\tcolor: var(--backgroundSecondary);\n}\n\n.icon-finished-no[_ngcontent-%COMP%] {\n\tcolor: #ff8888;\n}\n\n.icon-waiting[_ngcontent-%COMP%] {\n\tfont-size: 20px;\n\tcursor: pointer;\n}\n\n.icon-waiting-yes[_ngcontent-%COMP%] {\n\tcolor: var(--backgroundSecondary);\n}\n\n.icon-waiting-no[_ngcontent-%COMP%] {\n\tcolor: #ff8888;\n}\n\n.fa-credit-card[_ngcontent-%COMP%] {\n\t\n}\n\n.fa-slash[_ngcontent-%COMP%] {\n\tmargin-left: -150px;\n}\n\n\n\n.textarea[_ngcontent-%COMP%] {\n\twidth: 100%;\n\theight: 500px;\n\tborder-radius: 10px;\n}\n\n.input[_ngcontent-%COMP%] {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\twidth: 100%;\n\theight: 62px;\n\tbackground: var(--backgroundInput) !important;\n\tcolor: var(--backgroundInputColor) !important;\n\tborder-radius: 10px;\n\tmargin-bottom: 15px;\n}\n\n.inputIcon[_ngcontent-%COMP%] {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\twidth: 35px;\n}\n\n.inputText[_ngcontent-%COMP%] {\n\tflex: 1;\n}\n\ndiv.status[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n\tmargin-right: 10px;\n}\n\n\n\n\n\n.rowCall[_ngcontent-%COMP%] {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n}\n\n.person[_ngcontent-%COMP%] {\n\tflex: 1;\n\tflex-direction: column;\n\t\n}\n\n.strategy[_ngcontent-%COMP%] {\n\tflex: 1;\n\theight: 80vh;\n\toverflow: auto;\n}\n\n.parentName[_ngcontent-%COMP%] {\n\tfont-size: 1.7em;\n\tfont-weight: bold;\n}\n\n.parentPhone[_ngcontent-%COMP%] {\n\tfont-size: 1.2em;\n}\n\n.parentDesc[_ngcontent-%COMP%] {\n\tfont-size: 1em;\n}\n\n\n\n.calendarOptions[_ngcontent-%COMP%]{\n\tdisplay: flex;\n\twidth: 100%;\n\t\n\tjustify-content: center;\n\tflex-direction: row;\n\tjustify-content: space-between;\n}\n\n.calendarDate[_ngcontent-%COMP%]{\n\twidth: 300px;\n\tdisplay: flex;\n\tflex-direction: row;\n}\n\n.calendarDateChosen[_ngcontent-%COMP%]{\n\twidth: 300px;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n}\n\n.calendarDateType[_ngcontent-%COMP%]{\n\tdisplay: flex;\n\twidth: 300px;\n\tjustify-content: flex-end;\n}\n\n\n\n\n\n.totalFilter[_ngcontent-%COMP%]{\n\tdisplay: flex;\n\tfont-weight: bold;\n\tfont-size: 28px;\n\talign-items: center;\n}\n\n.totalRegisterFilter[_ngcontent-%COMP%]{\n\tdisplay: flex;\n\twidth: 40px;\n\theight: 40px;\n\tborder-radius: 20px;\n\tbackground-color: var(--backgroundSecondary);\n\tcolor: var(--backgroundSecondaryColor);\n\talign-items: center;\n\tjustify-content: center;\n\tmargin-left: 5px;\n\tfont-size: 20px;\n\tfont-weight: bold;\n}\n\n\n\n\n\n.phone-icon[_ngcontent-%COMP%]{\n\tpadding: 10px;\n\twidth: 65px;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n}\n\n.phone-number[_ngcontent-%COMP%]{\n\tpadding: 15px;\n\tdisplay: flex;\n\tflex: 1;\n\talign-items: center;\n}\n\n.phone-remove[_ngcontent-%COMP%]{\n\tpadding: 10px;\n\twidth: 65px;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n}\n\n\n\n.searchInput[_ngcontent-%COMP%]{\n\twidth: 490px;\n}\n\n.lottieSearch[_ngcontent-%COMP%]{\n\twidth: 800px;\n}\n\n.showEachStatus[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]{\n\tpadding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbGwtbW9yZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsaUJBQWlCO0NBQ2pCLFdBQVc7Q0FDWCxhQUFhO0NBQ2Isc0JBQXNCO0FBQ3ZCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLFlBQVk7Q0FDWixXQUFXO0NBQ1gsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQix1QkFBdUI7Q0FDdkIsZUFBZTtDQUNmLHlCQUF5QjtDQUN6QixvQ0FBb0M7QUFDckM7O0FBQ0E7Q0FDQyxZQUFZO0NBQ1osWUFBWTtDQUNaLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIsdUJBQXVCO0FBQ3hCOztBQUNBO0NBQ0MsT0FBTztDQUNQLFlBQVk7Q0FDWixhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLHVCQUF1QjtBQUN4Qjs7QUFDQTtDQUNDLFlBQVk7Q0FDWixZQUFZO0NBQ1osYUFBYTtDQUNiLG1CQUFtQjtDQUNuQix1QkFBdUI7QUFDeEI7O0FBQ0E7Q0FDQyxXQUFXO0NBQ1gsWUFBWTtDQUNaLG1CQUFtQjtBQUNwQjs7QUFDQTtDQUNDLGFBQWE7Q0FDYixPQUFPO0NBQ1AsV0FBVztBQUNaOztBQUNBO0NBQ0MsZUFBZTtDQUNmLGFBQWE7Q0FDYixZQUFZO0NBQ1osaUJBQWlCO0NBQ2pCLFlBQVk7Q0FDWixhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLHlCQUF5QjtDQUN6QixTQUFTO0NBQ1QsUUFBUTtBQUNUOztBQUNBO0NBQ0MsV0FBVztDQUNYLFlBQVk7Q0FDWixtQkFBbUI7Q0FDbkIsNENBQTRDO0NBQzVDLHNDQUFzQztDQUN0QyxpQkFBaUI7Q0FDakIsY0FBYztDQUNkLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIsdUJBQXVCO0NBQ3ZCLGVBQWU7Q0FDZixnQkFBZ0I7Q0FDaEIsWUFBWTtBQUNiOztBQUNBO0NBQ0MsaURBQWlEO0NBQ2pELGdCQUFnQjtBQUNqQjs7QUFDQTtDQUNDLGlCQUFpQjtDQUNqQixlQUFlO0FBQ2hCOztBQUNBO0NBQ0MsaUJBQWlCO0NBQ2pCLGVBQWU7QUFDaEI7O0FBQ0E7Q0FDQyxhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLGVBQWU7O0FBRWhCOztBQUNBO0NBQ0MsNkNBQTZDO0NBQzdDLFlBQVk7Q0FDWixZQUFZO0NBQ1osYUFBYTtDQUNiLG1CQUFtQjtDQUNuQixjQUFjO0NBQ2Qsc0JBQXNCO0NBQ3RCLGFBQWE7QUFDZDs7QUFDQTtDQUNDLFdBQVc7QUFDWjs7QUFDQTtDQUNDLDRDQUE0QztDQUM1QyxlQUFlO0NBQ2YsaUJBQWlCO0NBQ2pCLGFBQWE7Q0FDYixPQUFPO0NBQ1AsbUJBQW1CO0NBQ25CLHVCQUF1QjtDQUN2QixzQkFBc0I7QUFDdkI7O0FBQ0E7Q0FDQyxlQUFlO0NBQ2YsY0FBYztDQUNkLG1CQUFtQjs7QUFFcEI7O0FBQ0E7Q0FDQyxlQUFlO0NBQ2YsY0FBYztBQUNmOztBQUVBO0NBQ0MsYUFBYTtDQUNiLGVBQWU7Q0FDZixtQkFBbUI7QUFDcEI7O0FBQ0E7Q0FDQyxZQUFZO0FBQ2I7O0FBQ0E7Q0FDQyxhQUFhO0NBQ2IsT0FBTztDQUNQLHNCQUFzQjtDQUN0QixhQUFhO0FBQ2Q7O0FBQ0E7Q0FDQyxnQkFBZ0I7QUFDakI7O0FBQ0E7Q0FDQyxhQUFhO0NBQ2IsbUJBQW1CO0FBQ3BCOztBQUNBO0NBQ0MsV0FBVztDQUNYLFVBQVU7O0FBRVg7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsYUFBYTtDQUNiLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIsZUFBZTtDQUNmLGdCQUFnQjtDQUNoQixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyx5QkFBeUI7Q0FDekIsYUFBYTtDQUNiLDZDQUE2QztDQUM3QyxZQUFZO0NBQ1osbUJBQW1CO0NBQ25CLGNBQWM7Q0FDZCxhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLGtCQUFrQjtBQUNuQjs7QUFDQTtDQUNDLFlBQVk7Q0FDWixXQUFXO0NBQ1gsYUFBYTtDQUNiLG1CQUFtQjtBQUNwQjs7QUFDQTtDQUNDLE9BQU87Q0FDUCxhQUFhO0NBQ2IsY0FBYztBQUNmOztBQUVBO0NBQ0MsWUFBWTtDQUNaLFdBQVc7Q0FDWCxhQUFhO0FBQ2Q7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsT0FBTztDQUNQLHVCQUF1QjtDQUN2QixtQkFBbUI7Q0FDbkIsc0JBQXNCO0FBQ3ZCOztBQUNBO0NBQ0MsZUFBZTtDQUNmLGlCQUFpQjtBQUNsQjs7QUFDQTtDQUNDLFdBQVc7QUFDWjs7QUFDQTtDQUNDLGtCQUFrQjtBQUNuQjs7QUFDQTtDQUNDLGlCQUFpQjtBQUNsQjs7QUFDQTtDQUNDLFlBQVk7QUFDYjs7QUFDQTtDQUNDLGFBQWE7Q0FDYix1QkFBdUI7Q0FDdkIsbUJBQW1CO0NBQ25CLG1CQUFtQjtBQUNwQjs7QUFDQTtDQUNDLGFBQWE7Q0FDYixPQUFPO0NBQ1Asc0JBQXNCO0FBQ3ZCOztBQUNBO0NBQ0MsZUFBZTtDQUNmLGlCQUFpQjtBQUNsQjs7QUFDQTtDQUNDLDZDQUE2QztBQUM5Qzs7QUFFQTtDQUNDLGFBQWE7Q0FDYixxQkFBcUI7Q0FDckIseUJBQXlCO0NBQ3pCLFdBQVc7QUFDWjs7QUFDQTtDQUNDLGFBQWE7Q0FDYixxQkFBcUI7Q0FDckIseUJBQXlCO0NBQ3pCLFlBQVk7QUFDYjs7QUFDQTtDQUNDLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLGlCQUFpQjtDQUNqQixPQUFPO0NBQ1AsZUFBZTtBQUNoQjs7QUFDQTtDQUNDLGFBQWE7Q0FDYixXQUFXO0NBQ1gsWUFBWTtDQUNaLHVCQUF1QjtDQUN2QixtQkFBbUI7QUFDcEI7O0FBQ0E7Q0FDQyxXQUFXO0NBQ1gsWUFBWTtDQUNaLG1CQUFtQjtDQUNuQiw0Q0FBNEM7Q0FDNUMsc0NBQXNDO0NBQ3RDLGFBQWE7Q0FDYix1QkFBdUI7Q0FDdkIsbUJBQW1CO0NBQ25CLGVBQWU7Q0FDZixpQkFBaUI7Q0FDakIsZUFBZTtDQUNmLGdCQUFnQjtDQUNoQixZQUFZO0FBQ2I7O0FBRUE7Q0FDQyxpREFBaUQ7Q0FDakQscUJBQXFCO0FBQ3RCOztBQUVBO0NBQ0MsZUFBZTtBQUNoQjs7QUFDQTtDQUNDLGlDQUFpQztBQUNsQzs7QUFDQTtDQUNDLGNBQWM7QUFDZjs7QUFFQTtDQUNDLGVBQWU7Q0FDZixlQUFlO0FBQ2hCOztBQUNBO0NBQ0MsaUNBQWlDO0FBQ2xDOztBQUNBO0NBQ0MsY0FBYztBQUNmOztBQUVBO0NBQ0Msd0JBQXdCO0FBQ3pCOztBQUNBO0NBQ0MsbUJBQW1CO0FBQ3BCOztBQUVBLFVBQVU7O0FBQ1Y7Q0FDQyxXQUFXO0NBQ1gsYUFBYTtDQUNiLG1CQUFtQjtBQUNwQjs7QUFDQTtDQUNDLGFBQWE7Q0FDYix1QkFBdUI7Q0FDdkIsbUJBQW1CO0NBQ25CLFdBQVc7Q0FDWCxZQUFZO0NBQ1osNkNBQTZDO0NBQzdDLDZDQUE2QztDQUM3QyxtQkFBbUI7Q0FDbkIsbUJBQW1CO0FBQ3BCOztBQUNBO0NBQ0MsYUFBYTtDQUNiLHVCQUF1QjtDQUN2QixtQkFBbUI7Q0FDbkIsV0FBVztBQUNaOztBQUNBO0NBQ0MsT0FBTztBQUNSOztBQUNBO0NBQ0Msa0JBQWtCO0FBQ25COztBQUNBLGNBQWM7O0FBRWQsWUFBWTs7QUFDWjtDQUNDLGFBQWE7Q0FFYixlQUFlO0FBQ2hCOztBQUNBO0NBQ0MsT0FBTztDQUNQLHNCQUFzQjtDQUN0QixrQkFBa0I7QUFDbkI7O0FBQ0E7Q0FDQyxPQUFPO0NBQ1AsWUFBWTtDQUNaLGNBQWM7QUFDZjs7QUFDQTtDQUNDLGdCQUFnQjtDQUNoQixpQkFBaUI7QUFDbEI7O0FBQ0E7Q0FDQyxnQkFBZ0I7QUFDakI7O0FBQ0E7Q0FDQyxjQUFjO0FBQ2Y7O0FBRUEsYUFBYTs7QUFDYjtDQUNDLGFBQWE7Q0FDYixXQUFXO0NBQ1gseUJBQXlCO0NBQ3pCLHVCQUF1QjtDQUN2QixtQkFBbUI7Q0FDbkIsOEJBQThCO0FBQy9COztBQUVBO0NBQ0MsWUFBWTtDQUNaLGFBQWE7Q0FDYixtQkFBbUI7QUFDcEI7O0FBQ0E7Q0FDQyxZQUFZO0NBQ1osYUFBYTtDQUNiLG1CQUFtQjtDQUNuQix1QkFBdUI7QUFDeEI7O0FBQ0E7Q0FDQyxhQUFhO0NBQ2IsWUFBWTtDQUNaLHlCQUF5QjtBQUMxQjs7QUFDQSxpQkFBaUI7O0FBR2pCLFdBQVc7O0FBQ1g7Q0FDQyxhQUFhO0NBQ2IsaUJBQWlCO0NBQ2pCLGVBQWU7Q0FDZixtQkFBbUI7QUFDcEI7O0FBQ0E7Q0FDQyxhQUFhO0NBQ2IsV0FBVztDQUNYLFlBQVk7Q0FDWixtQkFBbUI7Q0FDbkIsNENBQTRDO0NBQzVDLHNDQUFzQztDQUN0QyxtQkFBbUI7Q0FDbkIsdUJBQXVCO0NBQ3ZCLGdCQUFnQjtDQUNoQixlQUFlO0NBQ2YsaUJBQWlCO0FBQ2xCOztBQUNBLGVBQWU7O0FBRWYsaUJBQWlCOztBQUNqQjtDQUNDLGFBQWE7Q0FDYixXQUFXO0NBQ1gsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQix1QkFBdUI7QUFDeEI7O0FBQ0E7Q0FDQyxhQUFhO0NBQ2IsYUFBYTtDQUNiLE9BQU87Q0FDUCxtQkFBbUI7QUFDcEI7O0FBQ0E7Q0FDQyxhQUFhO0NBQ2IsV0FBVztDQUNYLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIsdUJBQXVCO0FBQ3hCOztBQUNBLHFCQUFxQjs7QUFFckI7Q0FDQyxZQUFZO0FBQ2I7O0FBQ0E7Q0FDQyxZQUFZO0FBQ2I7O0FBRUE7Q0FDQyxhQUFhO0FBQ2QiLCJmaWxlIjoic2VsbC1tb3JlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VsbE1vcmUge1xuXHRtaW4taGVpZ2h0OiAxMDB2aDtcblx0d2lkdGg6IDEwMCU7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5zZWxsTW9yZSBoZWFkZXIge1xuXHRwYWRkaW5nOiAxNXB4O1xuXHRoZWlnaHQ6IDk1cHg7XG5cdHdpZHRoOiAxMDAlO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0ZmxleC13cmFwOiB3cmFwO1xuXHQvKiBmbGV4LWRpcmVjdGlvbjogcm93OyAqL1xuXHQvKiBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47ICovXG59XG4uc2VsbE1vcmUgaGVhZGVyIC5sb2dvIHtcblx0d2lkdGg6IDEyMHB4O1xuXHRoZWlnaHQ6IDEwMCU7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLnNlbGxNb3JlIGhlYWRlciAuc2VhcmNoIHtcblx0ZmxleDogMTtcblx0aGVpZ2h0OiAxMDAlO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5zZWxsTW9yZSBoZWFkZXIgLnByb2ZpbGUge1xuXHR3aWR0aDogMTIwcHg7XG5cdGhlaWdodDogMTAwJTtcblx0ZGlzcGxheTogZmxleDtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uc2VsbE1vcmUgaGVhZGVyIC5wcm9maWxlIGltZyB7XG5cdHdpZHRoOiA1NnB4O1xuXHRoZWlnaHQ6IDU2cHg7XG5cdGJvcmRlci1yYWRpdXM6IDI4cHg7XG59XG4uc2VsbE1vcmUgLmNvbnRlbnQge1xuXHRwYWRkaW5nOiAxNXB4O1xuXHRmbGV4OiAxO1xuXHR3aWR0aDogMTAwJTtcbn1cbi5zZWxsTW9yZSBmb290ZXIge1xuXHRwb3NpdGlvbjogZml4ZWQ7XG5cdHBhZGRpbmc6IDE1cHg7XG5cdGhlaWdodDogOTVweDtcblx0Lyogd2lkdGg6IDEwMCU7ICovXG5cdHdpZHRoOiAzMTBweDtcblx0ZGlzcGxheTogZmxleDtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0anVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcblx0Ym90dG9tOiAwO1xuXHRyaWdodDogMDtcbn1cbi5mb290ZXJJdGVucyB7XG5cdHdpZHRoOiA4MHB4O1xuXHRoZWlnaHQ6IDgwcHg7XG5cdGJvcmRlci1yYWRpdXM6IDQwcHg7XG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmRTZWNvbmRhcnkpO1xuXHRjb2xvcjogdmFyKC0tYmFja2dyb3VuZFNlY29uZGFyeUNvbG9yKTtcblx0bWFyZ2luLWxlZnQ6IDEwcHg7XG5cdGZvbnQtc2l6ZTogM2VtO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0Y3Vyc29yOiBwb2ludGVyO1xuXHR0cmFuc2l0aW9uOiAwLjNzO1xuXHR6LWluZGV4OiA5OTg7XG59XG4uZm9vdGVySXRlbnM6aG92ZXIge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kU2Vjb25kYXJ5SG92ZXIpO1xuXHRmb250LXNpemU6IDMuMWVtO1xufVxuLnRvdGFsTGVhZCB7XG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xuXHRmb250LXNpemU6IDI4cHg7XG59XG4udG90YWxPdGhlcnMge1xuXHRmb250LXdlaWdodDogYm9sZDtcblx0Zm9udC1zaXplOiAxN3B4O1xufVxuLmRpc3BsYXktcm93e1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogcm93O1xuXHRmbGV4LXdyYXA6IHdyYXA7XG5cbn1cbi5jdXN0b21lcnNGaWx0ZXJ7XG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmRDb21wb25lbnRzKTtcblx0d2lkdGg6IDQyMnB4O1xuXHRtYXJnaW46IDE1cHg7XG5cdHBhZGRpbmc6IDI1cHg7XG5cdGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cdGNvbG9yOiAjZWZlZmVkO1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHQvKiBmbGV4OiAxOyAqL1xufVxuLm1lbnVGaWx0ZXJ7XG5cdHdpZHRoOiA1MHB4O1xufVxuLmZpbHRlck5hbWV7XG5cdGNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kU2Vjb25kYXJ5KSAhaW1wb3J0YW50O1xuXHRmb250LXNpemU6IDI1cHg7XG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4OiAxO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5maWx0ZXJQaG9uZXtcblx0Zm9udC1zaXplOiAxNXB4O1xuXHRjb2xvcjogI2VmZWZlZDtcblx0bWFyZ2luLWJvdHRvbTogMTVweDtcblxufVxuLmZpbHRlcmNyZWF0ZWRfYXR7XG5cdGZvbnQtc2l6ZTogMTJweDtcblx0Y29sb3I6ICNlZmVmZWQ7XG59XG5cbi5jb250ZW50V2lzZWxsZXJ7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtd3JhcDogd3JhcDtcblx0ZmxleC1kaXJlY3Rpb246IHJvdztcbn1cbi5jb250YXRvcyB7XG5cdHdpZHRoOiA1MDBweDtcbn1cbi5jYXJkLWFnZW5kYSB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXg6IDE7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdG1hcmdpbi10b3A6IDA7XG59XG4jY3VzdG9tZXJzQm9keSA+IGRpdi5jYXJkLWFnZW5kYS5tb2RhbC1kaWFsb2cgPiBkaXYubW9kYWwtYm9keSB7XG5cdHBhZGRpbmctdG9wOiA1cHg7XG59XG4uYnV0dG9uc0FnZW5kYVJlbW92ZXJ7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG4jbW9kYWxEZXRhaWxDYWxlbmRhciA+IGRpdiA+IGRpdiA+IGRpdiA+IGRpdiA+IGRpdiA+IGRpdiA+IGJ1dHRvbiB7XG5cdG1hcmdpbjogNXB4O1xuXHR3aWR0aDogNTAlO1xuXG59XG5cbi52aWV3cG9ydCB7XG5cdHdpZHRoOiAxMDAlO1xuXHRoZWlnaHQ6IDEwMHZoO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogcm93O1xuXHRmbGV4LXdyYXA6IHdyYXA7XG5cdG92ZXJmbG93OiBzY3JvbGw7XG5cdG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cblxuLmN1c3RvbWVycyB7XG5cdHdpZHRoOiBjYWxjKDEwMCUgLSAxMDBweCk7XG5cdGhlaWdodDogNTEwcHg7XG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmRDb21wb25lbnRzKTtcblx0bWFyZ2luOiAxNXB4O1xuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xuXHRjb2xvcjogI2VmZWZlZDtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0dHJhbnNpdGlvbjogYWxsIDJzO1xufVxuLnBhcmVudCB7XG5cdGhlaWdodDogNjBweDtcblx0d2lkdGg6IDEwMCU7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG4uY2hpbGRyZW4ge1xuXHRmbGV4OiAxO1xuXHRwYWRkaW5nOiAxNXB4O1xuXHRvdmVyZmxvdzogYXV0bztcbn1cblxuLmluZm8ge1xuXHRoZWlnaHQ6IDcwcHg7XG5cdHdpZHRoOiAxMDAlO1xuXHRkaXNwbGF5OiBmbGV4O1xufVxuXG4ucGFyZW50IC5jb250YWN0IHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleDogMTtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4ucGFyZW50IC5jb250YWN0IC5uYW1lIHtcblx0Zm9udC1zaXplOiAxNnB4O1xuXHRmb250LXdlaWdodDogYm9sZDtcbn1cbi5wYXJlbnQgLmFjdGlvbiAuZmluaXNoZWQge1xuXHR3aWR0aDogOTBweDtcbn1cbi5wYXJlbnQgLmFjdGlvbiAuZmluaXNoZWQgaSB7XG5cdG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5wYXJlbnQgLmFjdGlvbiAud2FpdGluZyBpIHtcblx0bWFyZ2luLWxlZnQ6IDEwcHg7XG59XG4ud2FpdGluZyB7XG5cdHdpZHRoOiAxNjBweDtcbn1cbi5jaGlsZHJlbiAuaXRlbSB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuLmNoaWxkcmVuIC5pdGVtIC5jb250YWN0byB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXg6IDE7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uY2hpbGRyZW4gLml0ZW0gLmNvbnRhY3RvIC5jb250YWN0by1uYW1lIHtcblx0Zm9udC1zaXplOiAyMHB4O1xuXHRmb250LXdlaWdodDogYm9sZDtcbn1cbi5jaGlsZHJlbiAuaXRlbSAuY29udGFjdG8gLmNvbnRhY3RvLXBob25lLCAuY2hpbGRyZW4gLml0ZW0gLmNvbnRhY3RvIC5jb250YWN0by1uYW1lIHtcblx0Y29sb3I6IHZhcigtLWJhY2tncm91bmRDb2xvckxpZ2h0KSAhaW1wb3J0YW50O1xufVxuXG4uY2hpbGRyZW4gLml0ZW0gLmZpbmlzaGVkIHtcblx0ZGlzcGxheTogZmxleDtcblx0YWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuXHR3aWR0aDogNTBweDtcbn1cbi5jaGlsZHJlbiAuaXRlbSAud2FpdGluZyB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcblx0anVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcblx0d2lkdGg6IDE1M3B4O1xufVxuLmNoaWxkcmVuIC5pdGVtIC53YWl0aW5nIGkge1xuXHRtYXJnaW4tbGVmdDogNnB4O1xufVxuXG4uaW5mbyAucXVhbnRpdGF0aXZlIHtcblx0bWFyZ2luLWxlZnQ6IDE1cHg7XG5cdGZsZXg6IDE7XG5cdGZvbnQtc2l6ZTogMTZweDtcbn1cbi5pbmZvIC5hY3Rpb24ge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHR3aWR0aDogNzBweDtcblx0aGVpZ2h0OiAxMDAlO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5hY3Rpb25CdXR0b24ge1xuXHR3aWR0aDogNDBweDtcblx0aGVpZ2h0OiA0MHB4O1xuXHRib3JkZXItcmFkaXVzOiAyMHB4O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kU2Vjb25kYXJ5KTtcblx0Y29sb3I6IHZhcigtLWJhY2tncm91bmRTZWNvbmRhcnlDb2xvcik7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRmb250LXNpemU6IDIwcHg7XG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xuXHRjdXJzb3I6IHBvaW50ZXI7XG5cdHRyYW5zaXRpb246IDAuM3M7XG5cdHotaW5kZXg6IDk5OTtcbn1cblxuLmFjdGlvbkJ1dHRvbjpob3ZlciB7XG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmRTZWNvbmRhcnlIb3Zlcik7XG5cdC8qIGZvbnQtc2l6ZTogMjJweDsgKi9cbn1cblxuLmljb24tZmluaXNoZWQge1xuXHRmb250LXNpemU6IDI3cHg7XG59XG4uaWNvbi1maW5pc2hlZC15ZXMge1xuXHRjb2xvcjogdmFyKC0tYmFja2dyb3VuZFNlY29uZGFyeSk7XG59XG4uaWNvbi1maW5pc2hlZC1ubyB7XG5cdGNvbG9yOiAjZmY4ODg4O1xufVxuXG4uaWNvbi13YWl0aW5nIHtcblx0Zm9udC1zaXplOiAyMHB4O1xuXHRjdXJzb3I6IHBvaW50ZXI7XG59XG4uaWNvbi13YWl0aW5nLXllcyB7XG5cdGNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kU2Vjb25kYXJ5KTtcbn1cbi5pY29uLXdhaXRpbmctbm8ge1xuXHRjb2xvcjogI2ZmODg4ODtcbn1cblxuLmZhLWNyZWRpdC1jYXJkIHtcblx0LyogcG9zaXRpb246IGFic29sdXRlOyAqL1xufVxuLmZhLXNsYXNoIHtcblx0bWFyZ2luLWxlZnQ6IC0xNTBweDtcbn1cblxuLyogaW5wdXQgKi9cbi50ZXh0YXJlYSB7XG5cdHdpZHRoOiAxMDAlO1xuXHRoZWlnaHQ6IDUwMHB4O1xuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLmlucHV0IHtcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdHdpZHRoOiAxMDAlO1xuXHRoZWlnaHQ6IDYycHg7XG5cdGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmRJbnB1dCkgIWltcG9ydGFudDtcblx0Y29sb3I6IHZhcigtLWJhY2tncm91bmRJbnB1dENvbG9yKSAhaW1wb3J0YW50O1xuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xuXHRtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuLmlucHV0SWNvbiB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHR3aWR0aDogMzVweDtcbn1cbi5pbnB1dFRleHQge1xuXHRmbGV4OiAxO1xufVxuZGl2LnN0YXR1cyBpIHtcblx0bWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLyogZmltIGlucHV0ICovXG5cbi8qIGNhbGxpbmcgKi9cbi5yb3dDYWxsIHtcblx0ZGlzcGxheTogZmxleDtcblx0LXdlYmtpdC1mbGV4LXdyYXA6IHdyYXA7XG5cdGZsZXgtd3JhcDogd3JhcDtcbn1cbi5wZXJzb24ge1xuXHRmbGV4OiAxO1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHQvKiB3aWR0aDogNTAwcHg7ICovXG59XG4uc3RyYXRlZ3kge1xuXHRmbGV4OiAxO1xuXHRoZWlnaHQ6IDgwdmg7XG5cdG92ZXJmbG93OiBhdXRvO1xufVxuLnBhcmVudE5hbWUge1xuXHRmb250LXNpemU6IDEuN2VtO1xuXHRmb250LXdlaWdodDogYm9sZDtcbn1cbi5wYXJlbnRQaG9uZSB7XG5cdGZvbnQtc2l6ZTogMS4yZW07XG59XG4ucGFyZW50RGVzYyB7XG5cdGZvbnQtc2l6ZTogMWVtO1xufVxuXG4vKiBDYWxlbmRhciAqL1xuLmNhbGVuZGFyT3B0aW9uc3tcblx0ZGlzcGxheTogZmxleDtcblx0d2lkdGg6IDEwMCU7XG5cdC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRmbGV4LWRpcmVjdGlvbjogcm93O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5jYWxlbmRhckRhdGV7XG5cdHdpZHRoOiAzMDBweDtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IHJvdztcbn1cbi5jYWxlbmRhckRhdGVDaG9zZW57XG5cdHdpZHRoOiAzMDBweDtcblx0ZGlzcGxheTogZmxleDtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uY2FsZW5kYXJEYXRlVHlwZXtcblx0ZGlzcGxheTogZmxleDtcblx0d2lkdGg6IDMwMHB4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuLyogRW5kIENhbGVuZGFyICovXG5cblxuLyogZmlsdGVyICovXG4udG90YWxGaWx0ZXJ7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xuXHRmb250LXNpemU6IDI4cHg7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4udG90YWxSZWdpc3RlckZpbHRlcntcblx0ZGlzcGxheTogZmxleDtcblx0d2lkdGg6IDQwcHg7XG5cdGhlaWdodDogNDBweDtcblx0Ym9yZGVyLXJhZGl1czogMjBweDtcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZFNlY29uZGFyeSk7XG5cdGNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kU2Vjb25kYXJ5Q29sb3IpO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0bWFyZ2luLWxlZnQ6IDVweDtcblx0Zm9udC1zaXplOiAyMHB4O1xuXHRmb250LXdlaWdodDogYm9sZDtcbn1cbi8qIGVuZCBmaWx0ZXIgKi9cblxuLyogZmsgYWRkIHBob25lICovXG4ucGhvbmUtaWNvbntcblx0cGFkZGluZzogMTBweDtcblx0d2lkdGg6IDY1cHg7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLnBob25lLW51bWJlcntcblx0cGFkZGluZzogMTVweDtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleDogMTtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5waG9uZS1yZW1vdmV7XG5cdHBhZGRpbmc6IDEwcHg7XG5cdHdpZHRoOiA2NXB4O1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi8qIGVuZCBmayBhZGQgcGhvbmUgKi9cblxuLnNlYXJjaElucHV0e1xuXHR3aWR0aDogNDkwcHg7XG59XG4ubG90dGllU2VhcmNoe1xuXHR3aWR0aDogODAwcHg7XG59XG5cbi5zaG93RWFjaFN0YXR1cyA+IGRpdntcblx0cGFkZGluZzogMTBweDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 6665:
/*!**********************************************!*\
  !*** ./src/app/sellmore/sell-more.module.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SellMoreModule": () => (/* binding */ SellMoreModule)
/* harmony export */ });
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/shared.module */ 4466);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _sell_more_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sell-more.component */ 2218);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);





const ROUTES = [{ path: '', component: _sell_more_component__WEBPACK_IMPORTED_MODULE_1__.SellMoreComponent }];
class SellMoreModule {
}
SellMoreModule.ɵfac = function SellMoreModule_Factory(t) { return new (t || SellMoreModule)(); };
SellMoreModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: SellMoreModule });
SellMoreModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(ROUTES)]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SellMoreModule, { declarations: [_sell_more_component__WEBPACK_IMPORTED_MODULE_1__.SellMoreComponent], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 3130:
/*!***********************************************!*\
  !*** ./src/app/sellmore/sell-more.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SellMoreService": () => (/* binding */ SellMoreService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var _app_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app.api */ 970);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 1258);






class SellMoreService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.mostrarMenu = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    }
    getVersion() {
        return this.http.get(`${_app_api__WEBPACK_IMPORTED_MODULE_0__.API}/currentVersion`);
    }
    getCalenda(search) {
        return this.http.get(`${_app_api__WEBPACK_IMPORTED_MODULE_0__.API}/calendar`);
    }
    saveCalendar(form) {
        return this.http.post(`${_app_api__WEBPACK_IMPORTED_MODULE_0__.API}/calendar`, form);
    }
    deleteCalendar(id) {
        return this.http.delete(`${_app_api__WEBPACK_IMPORTED_MODULE_0__.API}/calendar/${id}`);
    }
    customersFind(search) {
        let params = undefined;
        if (search) {
            params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams().set('q', search);
        }
        return this.http.get(`${_app_api__WEBPACK_IMPORTED_MODULE_0__.API}/search`, { params: params });
    }
    getCustomersLd(search) {
        return this.http.get(`${_app_api__WEBPACK_IMPORTED_MODULE_0__.API}/getCustomersLd`);
    }
    getCustomers(boShowProblemasCartao, boShowLigarDepois, boShowNaotemInteresse, boShowComprou, boShowAberto) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams();
        params = params.append('boShowProblemasCartao', String(boShowProblemasCartao));
        params = params.append('boShowLigarDepois', String(boShowLigarDepois));
        params = params.append('boShowNaotemInteresse', String(boShowNaotemInteresse));
        params = params.append('boShowComprou', String(boShowComprou));
        params = params.append('boShowAberto', String(boShowAberto));
        return this.http.get(`${_app_api__WEBPACK_IMPORTED_MODULE_0__.API}/customers`, { params: params });
    }
    getStrategy() {
        return this.http.get(`${_app_api__WEBPACK_IMPORTED_MODULE_0__.API}/strategy`);
    }
    getAllParents(id) {
        return this.http.get(`${_app_api__WEBPACK_IMPORTED_MODULE_0__.API}/parents/customers/${id}`);
    }
    insertUpdateStrategy(form) {
        return this.http.put(`${_app_api__WEBPACK_IMPORTED_MODULE_0__.API}/strategy`, form);
    }
    changeStatus(form, id) {
        return this.http.put(`${_app_api__WEBPACK_IMPORTED_MODULE_0__.API}/status/customers/${id}`, form);
    }
    preference(form) {
        return this.http.post(`${_app_api__WEBPACK_IMPORTED_MODULE_0__.API}/preference`, form);
    }
    bug(form) {
        return this.http.post(`${_app_api__WEBPACK_IMPORTED_MODULE_0__.API}/issue`, form);
    }
    save(form) {
        return this.http.post(`${_app_api__WEBPACK_IMPORTED_MODULE_0__.API}/customers`, form);
    }
    update(form, id) {
        return this.http.put(`${_app_api__WEBPACK_IMPORTED_MODULE_0__.API}/customers/${id}`, form);
    }
    inativar(id) {
        return this.http.delete(`${_app_api__WEBPACK_IMPORTED_MODULE_0__.API}/customers/${id}`);
    }
    ativar(id) {
        return this.http.put(`${_app_api__WEBPACK_IMPORTED_MODULE_0__.API}/customersActivate/${id}`, []);
    }
    file(form, id) {
        return this.http.post(`${_app_api__WEBPACK_IMPORTED_MODULE_0__.API}/import-contact/customers/${id}`, form);
    }
}
SellMoreService.ɵfac = function SellMoreService_Factory(t) { return new (t || SellMoreService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
SellMoreService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SellMoreService, factory: SellMoreService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=src_app_sellmore_sell-more_module_ts.js.map