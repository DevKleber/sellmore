(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{zULH:function(t,e,n){"use strict";n.r(e),n.d(e,"SellMoreModule",(function(){return it}));var i=n("PCNd"),o=n("tyNb"),a=n("fXoL"),r=n("nWBu"),c=n("PSD3"),s=n.n(c),l=n("3Pt+"),b=n("tk/3");let d=(()=>{class t{constructor(t,e){this.http=t,this.router=e,this.mostrarMenu=new a.n}getCustomers(t){return this.http.get(r.a+"/customers")}getStrategy(){return this.http.get(r.a+"/strategy")}getAllParents(t){return this.http.get(`${r.a}/parents/customers/${t}`)}insertUpdateStrategy(t){return this.http.put(r.a+"/strategy",t)}changeStatus(t,e){return this.http.put(`${r.a}/status/customers/${e}`,t)}bug(t){return this.http.post(r.a+"/issue",t)}save(t){return this.http.post(r.a+"/customers",t)}update(t,e){return this.http.put(`${r.a}/customers/${e}`,t)}inativar(t){return this.http.delete(`${r.a}/customers/${t}`)}file(t,e){return this.http.post(`${r.a}/import-contact/customers/${e}`,t)}}return t.\u0275fac=function(e){return new(e||t)(a.Ub(b.b),a.Ub(o.c))},t.\u0275prov=a.Gb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var u=n("e43+"),f=n("/D8a"),m=n("OaAl"),p=n("Cdxl"),g=n("STbY"),h=n("ofXK"),P=n("Qu3c"),v=n("tmjD"),Q=n("Kdsb"),C=n("jhN1");let z=(()=>{class t{constructor(t){this._sanitizer=t}transform(t,e){switch(e){case"html":return this._sanitizer.bypassSecurityTrustHtml(t);case"style":return this._sanitizer.bypassSecurityTrustStyle(t);case"script":return this._sanitizer.bypassSecurityTrustScript(t);case"url":return this._sanitizer.bypassSecurityTrustUrl(t);case"resourceUrl":return this._sanitizer.bypassSecurityTrustResourceUrl(t);default:throw new Error("Unable to bypass security for invalid type: ")}}}return t.\u0275fac=function(e){return new(e||t)(a.Kb(C.b))},t.\u0275pipe=a.Jb({name:"safeHtml",type:t,pure:!0}),t})();function x(t,e){1&t&&a.Lb(0,"i",118)}function M(t,e){1&t&&a.Lb(0,"i",119)}function O(t,e){1&t&&a.Lb(0,"i",120)}function _(t,e){1&t&&a.Lb(0,"i",121)}function y(t,e){if(1&t){const t=a.Rb();a.Ob(0),a.Qb(1,"div",106),a.xc(2,x,1,0,"i",107),a.xc(3,M,1,0,"i",108),a.xc(4,O,1,0,"i",109),a.xc(5,_,1,0,"i",110),a.Lb(6,"i",111),a.Qb(7,"mat-menu",null,112),a.Qb(9,"button",113),a.Xb("click",(function(){a.qc(t);const e=a.Zb().$implicit;return a.Zb().newChildren(null==e?null:e.value)})),a.Lb(10,"i",71),a.zc(11," Importar contatos "),a.Pb(),a.Qb(12,"button",14),a.Qb(13,"a",114),a.Lb(14,"i",71),a.zc(15," Abrir no Whatsapp "),a.Pb(),a.Pb(),a.Qb(16,"button",115),a.Xb("click",(function(){a.qc(t);const e=a.Zb().$implicit;return a.Zb().updateOpenForm(e.value)})),a.Lb(17,"i",116),a.zc(18," Alterar "),a.Pb(),a.Qb(19,"button",16),a.Xb("click",(function(){a.qc(t);const e=a.Zb().$implicit;return a.Zb().inativar(e.value)})),a.Lb(20,"i",117),a.zc(21," Arquivar "),a.Pb(),a.Pb(),a.Pb(),a.Nb()}if(2&t){const t=a.oc(8),e=a.Zb().$implicit;a.zb(2),a.fc("ngIf","pc"==e.value.status),a.zb(1),a.fc("ngIf","ld"==e.value.status),a.zb(1),a.fc("ngIf","n"==e.value.status),a.zb(1),a.fc("ngIf","c"==e.value.status),a.zb(1),a.fc("matMenuTriggerFor",t),a.zb(7),a.hc("href","https://wa.me/55",null==e?null:e.value.phone,"",a.sc)}}function w(t,e){if(1&t){const t=a.Rb();a.Qb(0,"div",122),a.Qb(1,"i",123),a.Xb("click",(function(){a.qc(t);const e=a.Zb().$implicit;return a.Zb().changeStatus(e.value,"pc")})),a.Pb(),a.Qb(2,"i",124),a.Xb("click",(function(){a.qc(t);const e=a.Zb().$implicit;return a.Zb().changeStatus(e.value,"ld")})),a.Pb(),a.Qb(3,"i",125),a.Xb("click",(function(){a.qc(t);const e=a.Zb().$implicit;return a.Zb().changeStatus(e.value,"n")})),a.Pb(),a.Qb(4,"i",126),a.Xb("click",(function(){a.qc(t);const e=a.Zb().$implicit;return a.Zb().changeStatus(e.value,"c")})),a.Pb(),a.Lb(5,"i",127),a.Qb(6,"mat-menu",null,112),a.Qb(8,"button",113),a.Xb("click",(function(){a.qc(t);const e=a.Zb().$implicit;return a.Zb().newChildren(e.value)})),a.Lb(9,"i",71),a.zc(10," Importar contatos "),a.Pb(),a.Qb(11,"button",14),a.Qb(12,"a",114),a.Lb(13,"i",71),a.zc(14," Abrir no Whatsapp "),a.Pb(),a.Pb(),a.Qb(15,"button",115),a.Xb("click",(function(){a.qc(t);const e=a.Zb().$implicit;return a.Zb().updateOpenForm(e.value)})),a.Lb(16,"i",116),a.zc(17," Alterar "),a.Pb(),a.Qb(18,"button",16),a.Xb("click",(function(){a.qc(t);const e=a.Zb().$implicit;return a.Zb().inativar(e.value)})),a.Lb(19,"i",117),a.zc(20," Arquivar "),a.Pb(),a.Pb(),a.Pb()}if(2&t){const t=a.oc(7),e=a.Zb().$implicit;a.zb(5),a.fc("matMenuTriggerFor",t),a.zb(7),a.hc("href","https://wa.me/55",null==e?null:e.value.phone,"",a.sc)}}function S(t,e){1&t&&a.Lb(0,"i",118)}function L(t,e){1&t&&a.Lb(0,"i",136)}function k(t,e){1&t&&a.Lb(0,"i",120)}function I(t,e){1&t&&a.Lb(0,"i",121)}function B(t,e){if(1&t){const t=a.Rb();a.Ob(0),a.Qb(1,"div",106),a.xc(2,S,1,0,"i",107),a.xc(3,L,1,0,"i",133),a.xc(4,k,1,0,"i",109),a.xc(5,I,1,0,"i",110),a.Lb(6,"i",134),a.Qb(7,"mat-menu",null,112),a.Qb(9,"button",113),a.Xb("click",(function(){a.qc(t);const e=a.Zb().$implicit;return a.Zb(2).newChildren(null==e?null:e.value)})),a.Lb(10,"i",71),a.zc(11," Importar contatos "),a.Pb(),a.Qb(12,"button",14),a.Qb(13,"a",114),a.Lb(14,"i",71),a.zc(15," Abrir no Whatsapp "),a.Pb(),a.Pb(),a.Qb(16,"button",115),a.Xb("click",(function(){a.qc(t);const e=a.Zb().$implicit;return a.Zb(2).updateOpenForm(e.value)})),a.Lb(17,"i",116),a.zc(18," Alterar "),a.Pb(),a.Qb(19,"button",16),a.Xb("click",(function(){a.qc(t);const e=a.Zb().$implicit;return a.Zb(2).inativar(e.value)})),a.Lb(20,"i",117),a.zc(21," Arquivar "),a.Pb(),a.Qb(22,"button",115),a.Xb("click",(function(){a.qc(t);const e=a.Zb().$implicit;return a.Zb(2).newChildren(e.value)})),a.Lb(23,"i",135),a.zc(24," Tornar Lead "),a.Pb(),a.Pb(),a.Pb(),a.Nb()}if(2&t){const t=a.oc(8),e=a.Zb().$implicit;a.zb(2),a.fc("ngIf","pc"==e.value.status),a.zb(1),a.fc("ngIf","ld"==e.value.status),a.zb(1),a.fc("ngIf","n"==e.value.status),a.zb(1),a.fc("ngIf","c"==e.value.status),a.zb(1),a.fc("matMenuTriggerFor",t),a.zb(7),a.hc("href","https://wa.me/55",null==e?null:e.value.phone,"",a.sc)}}function F(t,e){if(1&t){const t=a.Rb();a.Qb(0,"div",122),a.Qb(1,"i",123),a.Xb("click",(function(){a.qc(t);const e=a.Zb().$implicit;return a.Zb(2).changeStatus(e.value,"pc")})),a.Pb(),a.Qb(2,"i",124),a.Xb("click",(function(){a.qc(t);const e=a.Zb().$implicit;return a.Zb(2).changeStatus(e.value,"ld")})),a.Pb(),a.Qb(3,"i",125),a.Xb("click",(function(){a.qc(t);const e=a.Zb().$implicit;return a.Zb(2).changeStatus(e.value,"n")})),a.Pb(),a.Qb(4,"i",126),a.Xb("click",(function(){a.qc(t);const e=a.Zb().$implicit;return a.Zb(2).changeStatus(e.value,"c")})),a.Pb(),a.Lb(5,"i",137),a.Qb(6,"mat-menu",null,112),a.Qb(8,"button",113),a.Xb("click",(function(){a.qc(t);const e=a.Zb().$implicit;return a.Zb(2).newChildren(null==e?null:e.value)})),a.Lb(9,"i",71),a.zc(10," Importar contatos "),a.Pb(),a.Qb(11,"button",14),a.Qb(12,"a",114),a.Lb(13,"i",71),a.zc(14," Abrir no Whatsapp "),a.Pb(),a.Pb(),a.Qb(15,"button",115),a.Xb("click",(function(){a.qc(t);const e=a.Zb().$implicit;return a.Zb(2).updateOpenForm(e.value)})),a.Lb(16,"i",116),a.zc(17," Alterar "),a.Pb(),a.Qb(18,"button",16),a.Xb("click",(function(){a.qc(t);const e=a.Zb().$implicit;return a.Zb(2).inativar(e.value)})),a.Lb(19,"i",117),a.zc(20," Arquivar "),a.Pb(),a.Qb(21,"button",115),a.Xb("click",(function(){a.qc(t);const e=a.Zb().$implicit;return a.Zb(2).newChildren(e.value)})),a.Lb(22,"i",135),a.zc(23," Tornar Lead "),a.Pb(),a.Pb(),a.Pb()}if(2&t){const t=a.oc(7),e=a.Zb().$implicit;a.zb(5),a.fc("matMenuTriggerFor",t),a.zb(7),a.hc("href","https://wa.me/55",null==e?null:e.value.phone,"",a.sc)}}function Z(t,e){if(1&t){const t=a.Rb();a.Qb(0,"div",128),a.Qb(1,"div",129),a.Xb("click",(function(){a.qc(t);const n=e.$implicit;return a.Zb(2).callTo(n.value)})),a.Qb(2,"span"),a.Qb(3,"div",130),a.zc(4),a.Pb(),a.Qb(5,"div",131),a.zc(6),a.ac(7,"mask"),a.Pb(),a.Pb(),a.Pb(),a.xc(8,B,25,6,"ng-container",35),a.xc(9,F,24,2,"ng-template",null,132,a.yc),a.Pb()}if(2&t){const t=e.$implicit,n=a.oc(10);a.zb(4),a.Bc(" ",t.value.name," "),a.zb(2),a.Bc(" ",a.cc(7,4,t.value.phone,"(00)00000-0000")," "),a.zb(2),a.fc("ngIf","a"!=t.value.status)("ngIfElse",n)}}function q(t,e){if(1&t){const t=a.Rb();a.Qb(0,"div",94),a.Qb(1,"div",95),a.Qb(2,"div",96),a.Qb(3,"div",97),a.zc(4),a.Pb(),a.Qb(5,"div",98),a.zc(6),a.ac(7,"mask"),a.Pb(),a.Pb(),a.Qb(8,"div",99),a.xc(9,y,22,6,"ng-container",35),a.xc(10,w,21,2,"ng-template",null,100,a.yc),a.Pb(),a.Pb(),a.Qb(12,"perfect-scrollbar"),a.Qb(13,"div",101),a.xc(14,Z,11,7,"div",102),a.ac(15,"keyvalue"),a.Pb(),a.Pb(),a.Qb(16,"div",103),a.Qb(17,"div",104),a.zc(18),a.ac(19,"json"),a.Lb(20,"br"),a.zc(21," N \xe0 contactar "),a.Pb(),a.Qb(22,"div",99),a.Qb(23,"div",105),a.Xb("click",(function(){a.qc(t);const n=e.$implicit;return a.Zb().newChildren(n.value)})),a.Lb(24,"i",29),a.Pb(),a.Pb(),a.Pb(),a.Pb()}if(2&t){const t=e.$implicit,n=a.oc(11);a.zb(4),a.Ac(null==t?null:t.value.name),a.zb(2),a.Bc(" ",a.cc(7,6,null==t?null:t.value.phone,"(00)00000-0000")," "),a.zb(3),a.fc("ngIf","a"!=(null==t?null:t.value.status))("ngIfElse",n),a.zb(5),a.fc("ngForOf",a.bc(15,9,t.value.referidos)),a.zb(4),a.Bc(" ",a.bc(19,11,t.value.referidos.length)," referidos ")}}function $(t,e){if(1&t&&(a.Ob(0),a.Qb(1,"p"),a.zc(2),a.Pb(),a.Nb()),2&t){const t=a.Zb();a.zb(2),a.Bc(" Cadastre abaixo os indicados do(a) ",t.parent.name," ")}}function A(t,e){1&t&&(a.Qb(0,"span"),a.zc(1,"Novo referido "),a.Pb())}function T(t,e){1&t&&(a.Qb(0,"span"),a.zc(1,"Alterando referido "),a.Pb())}function X(t,e){if(1&t&&(a.xc(0,A,2,0,"span",64),a.xc(1,T,2,0,"span",64)),2&t){const t=a.Zb();a.fc("ngIf",!t.form.value.id),a.zb(1),a.fc("ngIf",t.form.value.id)}}function N(t,e){if(1&t&&(a.Qb(0,"option",138),a.zc(1),a.Pb()),2&t){const t=e.$implicit;a.fc("value",t.id),a.zb(1),a.Bc(" ",null==t?null:t.status," ")}}function V(t,e){if(1&t){const t=a.Rb();a.Ob(0),a.Qb(1,"button",61),a.Xb("click",(function(){a.qc(t);const e=a.Zb();return e.save(e.form.value)})),a.zc(2," Salvar "),a.Pb(),a.Nb()}if(2&t){const t=a.Zb();a.zb(1),a.fc("disabled",!t.form.valid)}}function j(t,e){if(1&t){const t=a.Rb();a.Qb(0,"button",61),a.Xb("click",(function(){a.qc(t);const e=a.Zb();return e.update(e.form.value)})),a.zc(1," Alterar "),a.Pb()}if(2&t){const t=a.Zb();a.fc("disabled",!t.form.valid)}}function E(t,e){if(1&t){const t=a.Rb();a.Qb(0,"span"),a.Qb(1,"h2"),a.zc(2),a.Pb(),a.Qb(3,"div",139),a.Qb(4,"input",140,141),a.Xb("change",(function(e){return a.qc(t),a.Zb().onFileChanged(e)})),a.Pb(),a.Qb(6,"div",142),a.ac(7,"safeHtml"),a.Pb(),a.Qb(8,"button",143),a.Xb("click",(function(){return a.qc(t),a.oc(5).click()})),a.zc(9," Anexar arquivo "),a.Pb(),a.Pb(),a.Pb()}if(2&t){const t=a.Zb();a.zb(2),a.Bc("Anexe o arquivo baixado na conversa com o(a) ",t.parent.name," "),a.zb(4),a.wc("background-image",a.cc(7,3,"url("+t.img+" )","style"))}}function D(t,e){if(1&t&&(a.Qb(0,"div",147),a.zc(1),a.Lb(2,"br"),a.zc(3),a.Pb()),2&t){const t=e.$implicit;a.zb(1),a.Bc(" ",null==t?null:t.name," "),a.zb(2),a.Bc(" ",null==t?null:t.phone," ")}}function K(t,e){if(1&t&&(a.Qb(0,"p"),a.zc(1),a.Pb()),2&t){const t=e.$implicit;a.zb(1),a.Bc(" ",t," ")}}function R(t,e){if(1&t&&(a.Ob(0),a.Qb(1,"div",144),a.Qb(2,"h3"),a.zc(3),a.Pb(),a.xc(4,D,4,2,"div",145),a.Pb(),a.Qb(5,"div",146),a.Qb(6,"h3"),a.zc(7),a.Pb(),a.xc(8,K,2,1,"p",80),a.Pb(),a.Nb()),2&t){const t=a.Zb();a.zb(3),a.Bc("Importado ",null==t.customersImported?null:t.customersImported.res.length,""),a.zb(1),a.fc("ngForOf",null==t.customersImported?null:t.customersImported.res),a.zb(3),a.Bc("Indicado por outro lead ",null==t.customersImported?null:t.customersImported.repetidos.length,""),a.zb(1),a.fc("ngForOf",null==t.customersImported?null:t.customersImported.repetidos)}}function U(t,e){if(1&t){const t=a.Rb();a.Qb(0,"div",50),a.Qb(1,"button",148),a.Xb("click",(function(){a.qc(t);const e=a.Zb();return e.importContact(e.formScript.value)})),a.zc(2," Importar "),a.Pb(),a.Pb()}}function H(t,e){1&t&&a.Lb(0,"i",118)}function G(t,e){1&t&&a.Lb(0,"i",119)}function W(t,e){1&t&&a.Lb(0,"i",120)}function J(t,e){1&t&&a.Lb(0,"i",121)}function Y(t,e){if(1&t&&(a.Qb(0,"span"),a.xc(1,H,1,0,"i",107),a.xc(2,G,1,0,"i",108),a.xc(3,W,1,0,"i",109),a.xc(4,J,1,0,"i",110),a.Pb()),2&t){const t=a.Zb().$implicit;a.zb(1),a.fc("ngIf","pc"==t.status),a.zb(1),a.fc("ngIf","ld"==t.status),a.zb(1),a.fc("ngIf","n"==t.status),a.zb(1),a.fc("ngIf","c"==t.status)}}function tt(t,e){if(1&t&&(a.Qb(0,"div",149),a.Qb(1,"div"),a.Qb(2,"div",150),a.Lb(3,"i",151),a.zc(4),a.xc(5,Y,5,4,"span",64),a.Pb(),a.Qb(6,"div",152),a.zc(7),a.ac(8,"mask"),a.Pb(),a.Qb(9,"div",153),a.zc(10),a.Pb(),a.Pb(),a.Pb()),2&t){const t=e.$implicit,n=e.index;a.zb(1),a.wc("margin-left",20*n,"px"),a.zb(3),a.Bc(" ",t.name," "),a.zb(1),a.fc("ngIf","a"!=t.status),a.zb(2),a.Bc(" ",a.cc(8,6,t.phone,"(00)00000-0000")," "),a.zb(3),a.Bc(" ",t.observation," ")}}function et(t,e){if(1&t&&(a.Qb(0,"span"),a.zc(1),a.Lb(2,"br"),a.Pb()),2&t){const t=e.$implicit;a.zb(1),a.Bc(" ",t," ")}}const nt=[{path:"",component:(()=>{class t{constructor(t,e,n,i,o,c){this.sellMoreService=t,this.loginService=e,this.formBuilder=n,this.helper=i,this.notificationService=o,this.loaderService=c,this.customers=[],this.status=[{id:"pc",status:"Problemas com cart\xe3o"},{id:"ld",status:"Ligar depois"},{id:"n",status:"N\xe3o tem interesse"},{id:"c",status:"Comprou"}],this.customersImported=[],this.person={},this.parent={},this.parents=[],this.strategy={},this.statistics={},this.path=r.b,this.isDevMode=Object(a.V)(),this.img="assets/img/file/search.svg",this.user={}}ngOnInit(){this.getCustomers(),this.getStrategy(),this.initialForms(),this.user=this.loginService.getUser()}initialForms(){this.form=this.formBuilder.group({id:this.formBuilder.control(null),name:this.formBuilder.control("",[l.o.required]),phone:this.formBuilder.control("",[l.o.required]),address:this.formBuilder.control(""),status:this.formBuilder.control(""),observation:this.formBuilder.control(""),id_parent:this.formBuilder.control(null)}),this.formScript=this.formBuilder.group({strategy:this.formBuilder.control("",[l.o.required]),url_sale:this.formBuilder.control("")}),this.formBug=this.formBuilder.group({name:this.formBuilder.control("",[l.o.required]),desc:this.formBuilder.control("",[l.o.required])})}getCustomers(){this.loaderService.isLoad(!0),this.sellMoreService.getCustomers().subscribe(t=>{this.loaderService.isLoad(!1),this.customers=t.arCustomers,this.statistics=t.statistics})}getStrategy(){this.loaderService.isLoad(!0),this.sellMoreService.getStrategy().subscribe(t=>{this.loaderService.isLoad(!1),this.strategy=t.dados,this.strategy.staps=t.nl2br,this.formScript.controls.strategy.setValue(this.strategy.strategy),this.formScript.controls.url_sale.setValue(this.strategy.url_sale)})}updateOpenForm(t){this.form.controls.id.setValue(t.id),this.form.controls.name.setValue(t.name),this.form.controls.phone.setValue(t.phone),this.form.controls.address.setValue(t.address),this.form.controls.status.setValue(t.status),this.form.controls.observation.setValue(t.observation),this.form.controls.id_parent.setValue(t.id_parent)}update(t,e=!0,n=!0){t.id||this.notificationService.notifySweet("Erro: n\xe3o encontramos o referido!"),this.loaderService.isLoad(!0),this.sellMoreService.update(t,t.id).subscribe(t=>{e&&(this.notificationService.notifySweet("Alterado com sucesso!"),this.clearForm()),n&&this.getCustomers(),this.loaderService.isLoad(!1)})}save(t){this.loaderService.isLoad(!0),this.sellMoreService.save(t).subscribe(t=>{this.notificationService.notifySweet("Salvo com sucesso!"),this.clearForm(),this.getCustomers(),this.loaderService.isLoad(!1)})}saveStrategy(t){this.loaderService.isLoad(!0),this.sellMoreService.insertUpdateStrategy(t).subscribe(t=>{this.notificationService.notifySweet("Salvo com sucesso!"),this.loaderService.isLoad(!1)})}changeStatus(t,e){this.loaderService.isLoad(!0),this.sellMoreService.changeStatus({status:e},t.id).subscribe(n=>{this.statistics[e]=this.statistics[e]+1,this.loaderService.isLoad(!1),t.status=e,this.notificationService.notifySweet("Atualizado!")})}callTo(t){this.loaderService.isLoad(!0),this.updateOpenForm(t),this.person=t,this.sellMoreService.getAllParents(t.id_parent).subscribe(t=>{this.loaderService.isLoad(!1),this.parents=t})}newChildren(t){this.parent=t,this.customersImported=[],this.clearForm(),this.form.controls.id_parent.setValue(t.id),console.log(t)}newLead(){this.clearForm(),this.form.controls.id_parent.setValue(null),this.parent={}}clearForm(){this.form.controls.id.setValue(""),this.form.controls.name.setValue(""),this.form.controls.phone.setValue(""),this.form.controls.address.setValue(""),this.form.controls.status.setValue(""),this.form.controls.observation.setValue("")}onFileChanged(t){const e=this.helper.onFileChanged(t);e?(this.img=e.img,this.selectedFile=e.selectedFile):this.notificationService.notifySweet("Arquivo n\xe3o permitido!")}importContact(){this.loaderService.isLoad(!0);const t=new FormData;this.selectedFile||(this.notificationService.notifyError("Anexe um arquivo!"),this.loaderService.isLoad(!1)),this.selectedFile&&(t.append("imagem",this.selectedFile,this.selectedFile.name),this.sellMoreService.file(t,this.parent.id).subscribe(t=>{console.log(t),this.customersImported=t,this.getCustomers(),this.loaderService.isLoad(!1)}))}inativar(t){let e=!1;Object.entries(this.customers).forEach(n=>{if(n[1].id===t.id)return e=!0,!0}),console.log(e),s.a.fire({title:`Arquivar ${t.name} ?`,text:e?`Aten\xe7\xe3o, a pessoa escolhida \xe9, tamb\xe9m, um lead e possui referidos em sua cadeia de conex\xf5es (card). Se prosseguir com o arquivamento do(a) ${t.name}, o seu card ser\xe1 ocultado por completo. Esta a\xe7\xe3o n\xe3o altera os referidos que se tornaram lead. Deseja prosseguir?`:"",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Sim, arquivar!"}).then(e=>{e.isConfirmed&&(this.loaderService.isLoad(!0),this.sellMoreService.inativar(t.id).subscribe(t=>{this.loaderService.isLoad(!1),this.notificationService.notifySweet(t.response)}))})}bug(t){this.loaderService.isLoad(!0),this.sellMoreService.bug(t).subscribe(t=>{this.loaderService.isLoad(!1),this.formBug.controls.name.setValue(""),this.formBug.controls.desc.setValue(""),s.a.fire({title:"Obrigado por nos reportar!",text:"Deseja ver a lista de problemas e as novidades que vem por a\xed?",icon:"success",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Sim, ver a lista!"}).then(t=>{t.isConfirmed&&window.open("https://trello.com/b/GQpoOLdf/sell-more","_blank").focus()})})}logout(){this.loginService.logout()}}return t.\u0275fac=function(e){return new(e||t)(a.Kb(d),a.Kb(u.a),a.Kb(l.c),a.Kb(f.a),a.Kb(m.a),a.Kb(p.a))},t.\u0275cmp=a.Eb({type:t,selectors:[["app-sell-more"]],decls:233,vars:36,consts:[[1,"sellMore"],[1,"logo"],["src","/assets/img/system/sellmore.webp","width","55px"],[1,"search"],[1,"input",2,"width","490px !important"],[1,"inputIcon"],[1,"fa","fa-search"],[1,"inputText"],["type","text","placeholder","Buscar",1,"w-100"],["data-toggle","modal","data-target","#modalBug",1,"btn-secondary",2,"margin-top","0!important","padding","10px 32px!important","margin-right","5px"],["data-toggle","modal","data-target","#modalDonate",1,"btn-secondary",2,"margin-top","0!important","padding","10px 32px!important"],[1,"profile"],["src","/assets/img/user/user.png","alt","","width","55px",1,"cursor-pointer",3,"matMenuTriggerFor"],["profile","matMenu"],["mat-menu-item",""],[1,"fas","fa-id-card-alt"],["mat-menu-item","",3,"click"],[1,"fas","fa-sign-out-alt"],[1,"content","pad40"],[1,"row","flex-direction-column"],[1,"totalLead"],[1,"totalOthers"],[1,"row","flex-wrap"],["class","customers",4,"ngFor","ngForOf"],["data-toggle","modal","data-target","#modalCalendar","matTooltip","Agenda",1,"footerItens",3,"click"],[1,"far","fa-calendar-alt"],["data-toggle","modal","data-target","#modalScriptAdd","matTooltip","Estrat\xe9gia",1,"footerItens",3,"click"],[1,"fa","fa-receipt"],["data-toggle","modal","data-target","#modalStickyAdd","matTooltip","Novo lead",1,"footerItens",3,"click"],[1,"fa","fa-plus"],["id","modalStickyAdd","tabindex","-1","aria-labelledby","modalNewSticky","aria-hidden","true",1,"modal","fade"],[1,"modal-dialog"],[1,"modal-content"],[1,"modal-header"],["id","modalNewSticky",1,"modal-title"],[4,"ngIf","ngIfElse"],["indicatedBy",""],[1,"modal-body"],[1,"content"],["novalidate","",3,"formGroup"],[1,"input"],[1,"fa","fa-user"],["type","text","formControlName","name","placeholder","Nome",1,"w-100"],[1,"fa","fa-mobile-alt"],["type","text","formControlName","phone","placeholder","Telefone","mask","(00)00000-0000",1,"w-100"],["placeholder","Observa\xe7\xe3o","formControlName","observation",1,"textarea"],[1,"fa","fa-info"],["formControlName","status",1,"w-100"],["value","","selected",""],[3,"value",4,"ngFor","ngForOf"],[1,"modal-footer"],["type","button","data-dismiss","modal",1,"btn","btn-secondary"],["closemodalStickyAdd",""],["elseTemplateUpdate",""],["id","modalScriptAdd","tabindex","-1","aria-labelledby","modalNewScript","aria-hidden","true",1,"modal","fade"],[1,"modal-dialog","modal-exlg"],["id","modalNewScript",1,"modal-title"],["placeholder","Estrat\xe9gia","formControlName","strategy",1,"textarea"],[1,"fa","fa-link"],["type","text","formControlName","url_sale","placeholder","Seu link para venda",1,"w-100"],["closemodalScriptAdd",""],["type","button",1,"btn","btn-primary",3,"disabled","click"],["id","modalImportContact","tabindex","-1","aria-labelledby","modalNewImportContact","aria-hidden","true",1,"modal","fade"],["id","modalNewImportContact",1,"modal-title"],[4,"ngIf"],["class","modal-footer",4,"ngIf"],["id","modalCall","tabindex","-1","aria-labelledby","modalStapcall","aria-hidden","true",1,"modal","fade"],["id","modalStapcall",1,"modal-title"],[1,"row"],["target","_BLANK","title","Enviar link",3,"href"],[1,"card","mr-5"],[1,"fab","fa-whatsapp"],["target","_BLANK","title","Fazer a venda.",3,"href"],[1,"card"],[1,"fab","fa-wpforms"],[1,"content","rowCall"],[1,"person"],["placeholder","Observa\xe7\xe3o","formControlName","observation",1,"textarea",2,"width","95%","height","300px",3,"change"],["class","tree margint-25",4,"ngFor","ngForOf"],[1,"strategy"],[4,"ngFor","ngForOf"],["id","modalDonate","tabindex","-1","aria-labelledby","modalNewDonate","aria-hidden","true",1,"modal","fade"],[1,"mb-15"],[1,"row","center-center"],["src","/assets/img/system/donate.png","alt","",2,"text-align","center"],[1,"w-100"],["href","https://www.paypal.com/donate?hosted_button_id=JPB4P9HQXT3KS","target","_BLANK",2,"color","#fff !important"],[1,"card","light",2,"margin-left","10px"],["id","modalBug","tabindex","-1","aria-labelledby","modalNewBug","aria-hidden","true",1,"modal","fade"],[1,"fa","fa-bug"],["type","text","formControlName","name","placeholder","T\xedtulo",1,"w-100"],["placeholder","Descreva seu problema em detalhes","formControlName","desc",1,"textarea"],["id","modalCalendar","tabindex","-1","aria-labelledby","modalCalendar","aria-hidden","true",1,"modal","fade"],[1,"modal-title"],[1,"customers"],[1,"parent","center-center"],[1,"contact"],[1,"name"],[1,"phone"],[1,"action"],["waiting",""],[1,"children"],["class","item",4,"ngFor","ngForOf"],[1,"info","center-center"],[1,"quantitative"],["data-toggle","modal","data-target","#modalStickyAdd",1,"actionButton",3,"click"],[1,"finished"],["class","fa fa-credit-card icon-finished icon-finished-no",4,"ngIf"],["class","fa fa-headset icon-finished",4,"ngIf"],["class","fa fa-thumbs-down icon-finished icon-finished-no",4,"ngIf"],["class","fa fa-thumbs-up icon-finished icon-finished-yes",4,"ngIf"],["matTooltip","Menu",1,"fa","fa-bars","icon-finished","cursor-pointer",3,"matMenuTriggerFor"],["menu","matMenu"],["mat-menu-item","","data-toggle","modal","data-target","#modalImportContact",3,"click"],["target","_BLANK",3,"href"],["mat-menu-item","","data-toggle","modal","data-target","#modalStickyAdd",3,"click"],[1,"fas","fa-edit"],[1,"fas","fa-eye-slash"],[1,"fa","fa-credit-card","icon-finished","icon-finished-no"],[1,"fa","fa-headset","icon-finished"],[1,"fa","fa-thumbs-down","icon-finished","icon-finished-no"],[1,"fa","fa-thumbs-up","icon-finished","icon-finished-yes"],[1,"waiting"],["matTooltip","Problemas com cart\xe3o de cr\xe9dito",1,"fa","fa-credit-card","icon-waiting",3,"click"],["matTooltip","Ligar depois",1,"fa","fa-headset","icon-waiting",3,"click"],["matTooltip","N\xe3o deu neg\xf3cio \ud83d\ude2d",1,"fa","fa-thumbs-down","icon-waiting",3,"click"],["matTooltip","Vendido \ud83d\ude03",1,"fa","fa-thumbs-up","icon-waiting",3,"click"],["matTooltip","Menu",1,"fa","fa-bars","icon-waiting","cursor-pointer",3,"matMenuTriggerFor"],[1,"item"],["data-toggle","modal","data-target","#modalCall",1,"contacto","cursor-pointer",3,"click"],[1,"contacto-name"],[1,"contacto-phone"],["waitingChildren",""],["class","fa fa-headset icon-finished icon-finished-no",4,"ngIf"],["matTooltip","Menu",1,"fa","fa-bars","icon-finished",2,"margin-left","15px",3,"matMenuTriggerFor"],[1,"fa","fa-chalkboard-teacher"],[1,"fa","fa-headset","icon-finished","icon-finished-no"],["matTooltip","Menu",1,"fa","fa-bars","icon-waiting",3,"matMenuTriggerFor"],[3,"value"],[1,"form-group","margint-25"],["type","file",2,"display","none",3,"change"],["fileInput",""],[1,"uploadArquivo"],[1,"btn","btn-upload","btn-secondary",3,"click"],[1,"card",2,"background","transparent","color","var(--backgroundColor)","margin-bottom","15px"],["style","margin-top: 15px;",4,"ngFor","ngForOf"],[1,"card",2,"background","transparent","color","var(--backgroundColor)"],[2,"margin-top","15px"],["type","button",1,"btn","btn-primary",3,"click"],[1,"tree","margint-25"],[1,"parentName"],[1,"fa","fa-folder-open"],[1,"parentPhone"],[1,"parentDesc"]],template:function(t,e){if(1&t&&(a.Qb(0,"div",0),a.Qb(1,"header"),a.Qb(2,"div",1),a.Lb(3,"img",2),a.Pb(),a.Qb(4,"div",3),a.Qb(5,"div",4),a.Qb(6,"div",5),a.Lb(7,"i",6),a.Pb(),a.Qb(8,"div",7),a.Lb(9,"input",8),a.Pb(),a.Pb(),a.Pb(),a.Qb(10,"button",9),a.zc(11," Reportar bug "),a.Pb(),a.Qb(12,"button",10),a.zc(13," Doar "),a.Pb(),a.Qb(14,"div",11),a.Lb(15,"img",12),a.Pb(),a.Qb(16,"mat-menu",null,13),a.Qb(18,"button",14),a.Lb(19,"i",15),a.zc(20),a.Pb(),a.Qb(21,"button",16),a.Xb("click",(function(){return e.logout()})),a.Lb(22,"i",17),a.zc(23," Sair "),a.Pb(),a.Pb(),a.Pb(),a.Qb(24,"div",18),a.Qb(25,"div",19),a.Qb(26,"div",20),a.zc(27),a.Pb(),a.Qb(28,"div",21),a.zc(29),a.Pb(),a.Qb(30,"div",21),a.zc(31),a.Pb(),a.Qb(32,"div",21),a.zc(33),a.Pb(),a.Pb(),a.Qb(34,"div",22),a.xc(35,q,25,13,"div",23),a.ac(36,"keyvalue"),a.Pb(),a.Pb(),a.Qb(37,"footer"),a.Qb(38,"div",24),a.Xb("click",(function(){return e.newLead()})),a.Lb(39,"i",25),a.Pb(),a.Qb(40,"div",26),a.Xb("click",(function(){return e.newLead()})),a.Lb(41,"i",27),a.Pb(),a.Qb(42,"div",28),a.Xb("click",(function(){return e.newLead()})),a.Lb(43,"i",29),a.Pb(),a.Pb(),a.Pb(),a.Qb(44,"div",30),a.Qb(45,"div",31),a.Qb(46,"div",32),a.Qb(47,"div",33),a.Qb(48,"h3",34),a.xc(49,$,3,1,"ng-container",35),a.xc(50,X,2,2,"ng-template",null,36,a.yc),a.Pb(),a.Pb(),a.Qb(52,"div",37),a.Qb(53,"div",38),a.Qb(54,"form",39),a.Qb(55,"div",40),a.Qb(56,"div",5),a.Lb(57,"i",41),a.Pb(),a.Qb(58,"div",7),a.Lb(59,"input",42),a.Pb(),a.Pb(),a.Qb(60,"div",40),a.Qb(61,"div",5),a.Lb(62,"i",43),a.Pb(),a.Qb(63,"div",7),a.Lb(64,"input",44),a.Pb(),a.Pb(),a.Qb(65,"textarea",45),a.zc(66,"\t\t\t\t\t\t"),a.Pb(),a.Qb(67,"div",40),a.Qb(68,"div",5),a.Lb(69,"i",46),a.Pb(),a.Qb(70,"div",7),a.Qb(71,"select",47),a.Qb(72,"option",48),a.zc(73," Selecione uma op\xe7\xe3o caso tenha entrado em contato com o referente "),a.Pb(),a.xc(74,N,2,2,"option",49),a.Pb(),a.Pb(),a.Pb(),a.Pb(),a.Pb(),a.Pb(),a.Qb(75,"div",50),a.Qb(76,"button",51,52),a.zc(78," Fechar "),a.Pb(),a.xc(79,V,3,1,"ng-container",35),a.xc(80,j,2,1,"ng-template",null,53,a.yc),a.Pb(),a.Pb(),a.Pb(),a.Pb(),a.Qb(82,"div",54),a.Qb(83,"div",55),a.Qb(84,"div",32),a.Qb(85,"div",33),a.Qb(86,"h3",56),a.Qb(87,"p"),a.zc(88,"Roteiro"),a.Pb(),a.Pb(),a.Pb(),a.Qb(89,"div",37),a.Qb(90,"div",38),a.Qb(91,"form",39),a.Qb(92,"textarea",57),a.zc(93,"\t\t\t\t\t\t"),a.Pb(),a.Qb(94,"div",40),a.Qb(95,"div",5),a.Lb(96,"i",58),a.Pb(),a.Qb(97,"div",7),a.Lb(98,"input",59),a.Pb(),a.Pb(),a.Pb(),a.Pb(),a.Pb(),a.Qb(99,"div",50),a.Qb(100,"button",51,60),a.zc(102," Fechar "),a.Pb(),a.Qb(103,"button",61),a.Xb("click",(function(){return e.saveStrategy(e.formScript.value)})),a.zc(104," Salvar "),a.Pb(),a.Pb(),a.Pb(),a.Pb(),a.Pb(),a.Qb(105,"div",62),a.Qb(106,"div",31),a.Qb(107,"div",32),a.Qb(108,"div",33),a.Qb(109,"h3",63),a.Qb(110,"p"),a.zc(111),a.Pb(),a.Pb(),a.Pb(),a.Qb(112,"div",37),a.Qb(113,"div",38),a.xc(114,E,10,6,"span",64),a.xc(115,R,9,4,"ng-container",64),a.Pb(),a.Pb(),a.xc(116,U,3,0,"div",65),a.Pb(),a.Pb(),a.Pb(),a.Qb(117,"div",66),a.Qb(118,"div",55),a.Qb(119,"div",32),a.Qb(120,"div",33),a.Qb(121,"h2",67),a.Qb(122,"p"),a.zc(123),a.ac(124,"mask"),a.Pb(),a.Qb(125,"div",68),a.Qb(126,"a",69),a.Qb(127,"div",70),a.Lb(128,"i",71),a.Pb(),a.Pb(),a.Qb(129,"a",72),a.Qb(130,"div",73),a.Lb(131,"i",74),a.Pb(),a.Pb(),a.Pb(),a.Pb(),a.Pb(),a.Qb(132,"div",37),a.Qb(133,"div",75),a.Qb(134,"div",76),a.Qb(135,"form",39),a.Qb(136,"textarea",77),a.Xb("change",(function(){return e.update(e.form.value,!1,!0)})),a.zc(137,"\t\t\t\t\t\t\t"),a.Pb(),a.Pb(),a.Qb(138,"b"),a.zc(139,"\xc1rvores de indica\xe7\xf5es"),a.Pb(),a.xc(140,tt,11,9,"div",78),a.Pb(),a.Qb(141,"div",79),a.Qb(142,"perfect-scrollbar"),a.Qb(143,"h1"),a.zc(144,"Strategy"),a.Pb(),a.xc(145,et,3,1,"span",80),a.Pb(),a.Pb(),a.Pb(),a.Pb(),a.Pb(),a.Pb(),a.Pb(),a.Qb(146,"div",81),a.Qb(147,"div",31),a.Qb(148,"div",32),a.Qb(149,"div",37),a.Qb(150,"div",38),a.Qb(151,"p",82),a.zc(152," O Sellmore \xe9 uma ferramenta sem fins lucrativos. Contudo, temos um grande gasto com servidores, pois n\xe3o \xe9 nada f\xe1cil manter um programa com o porte do Sellmore no ar. "),a.Lb(153,"br"),a.Pb(),a.Qb(154,"p",82),a.zc(155," Colaborando conosco, voc\xea vai garantir nossa perman\xeancia no ar. "),a.Lb(156,"br"),a.Pb(),a.Qb(157,"p",82),a.zc(158," Fa\xe7a sua parte. Ajude-nos a manter o servidor sempre on-line. "),a.Pb(),a.Qb(159,"div",83),a.Lb(160,"img",84),a.Pb(),a.Qb(161,"button",85),a.Qb(162,"a",86),a.zc(163," Fa\xe7a uma doa\xe7\xe3o de qualquer valor com o Paypal "),a.Pb(),a.Pb(),a.Qb(164,"div",83),a.Qb(165,"h2"),a.zc(166,"Ou"),a.Pb(),a.Pb(),a.Qb(167,"div",83),a.Lb(168,"br"),a.Qb(169,"div",87),a.Qb(170,"h3"),a.zc(171,"Itau"),a.Pb(),a.Lb(172,"br"),a.Lb(173,"br"),a.zc(174," Ag\xeancia: 0322"),a.Lb(175,"br"),a.zc(176," Conta: 58119-0 "),a.Lb(177,"br"),a.zc(178," CPF: 040.712.881-67 "),a.Pb(),a.Qb(179,"div",87),a.Qb(180,"h3"),a.zc(181,"Banco inter"),a.Pb(),a.Lb(182,"br"),a.Lb(183,"br"),a.zc(184," Ag\xeancia: 0001"),a.Lb(185,"br"),a.zc(186," Conta: 1961169-2 "),a.Lb(187,"br"),a.zc(188," CPF: 040.712.881-67 "),a.Pb(),a.Qb(189,"div",87),a.Qb(190,"h3"),a.zc(191,"NuBank"),a.Pb(),a.Lb(192,"br"),a.Lb(193,"br"),a.zc(194," Ag\xeancia: 0001"),a.Lb(195,"br"),a.zc(196," Conta: 9506125-2 "),a.Lb(197,"br"),a.zc(198," CPF: 040.712.881-67 "),a.Pb(),a.Pb(),a.Pb(),a.Pb(),a.Pb(),a.Pb(),a.Pb(),a.Qb(199,"div",88),a.Qb(200,"div",31),a.Qb(201,"div",33),a.Qb(202,"h3",34),a.Qb(203,"p"),a.Lb(204,"i",89),a.zc(205," Enviar um relat\xf3rio de erro (Bug) "),a.Pb(),a.Pb(),a.Pb(),a.Qb(206,"div",37),a.Qb(207,"div",38),a.Qb(208,"p"),a.zc(209," Reporte aqui um erro que tenha encontrado, assim que poss\xedvel ele ser\xe1 corrigido. "),a.Lb(210,"br"),a.zc(211," Para que possamos identificar o erro, digite em detalhes tudo que aconteceu"),a.Lb(212,"br"),a.Lb(213,"br"),a.Pb(),a.Qb(214,"form",39),a.Qb(215,"div",7),a.Lb(216,"input",90),a.Pb(),a.Qb(217,"textarea",91),a.zc(218,"\t\t\t\t\t"),a.Pb(),a.Pb(),a.Pb(),a.Pb(),a.Qb(219,"div",50),a.Qb(220,"button",51),a.zc(221," Fechar "),a.Pb(),a.Qb(222,"button",61),a.Xb("click",(function(){return e.bug(e.formBug.value)})),a.zc(223," Salvar "),a.Pb(),a.Pb(),a.Pb(),a.Pb(),a.Qb(224,"div",92),a.Qb(225,"div",55),a.Qb(226,"div",33),a.Qb(227,"h3",93),a.Qb(228,"p"),a.Lb(229,"i",25),a.zc(230," Calendario "),a.Pb(),a.Pb(),a.Pb(),a.Qb(231,"div",37),a.Lb(232,"div",38),a.Pb(),a.Pb(),a.Pb()),2&t){const t=a.oc(17),n=a.oc(51),i=a.oc(81);a.zb(15),a.fc("matMenuTriggerFor",t),a.zb(5),a.Bc(" ",null==e.user?null:e.user.nome," "),a.zb(7),a.Bc("",null==e.statistics?null:e.statistics.a," referidos \xe0 contactar"),a.zb(2),a.Cc("",null==e.statistics?null:e.statistics.c," ",(null==e.statistics?null:e.statistics.c)<=1?"venda":"vendas",""),a.zb(2),a.Bc("",null==e.statistics?null:e.statistics.ld," ligar depois"),a.zb(2),a.Cc(" ",null==e.statistics?null:e.statistics.pc," ",(null==e.statistics?null:e.statistics.pc)<=1?"problema com cart\xe3o":"problemas com cart\xe3o"," "),a.zb(2),a.fc("ngForOf",a.bc(36,31,e.customers)),a.zb(14),a.fc("ngIf",e.parent.id)("ngIfElse",n),a.zb(5),a.fc("formGroup",e.form),a.zb(20),a.fc("ngForOf",e.status),a.zb(5),a.fc("ngIf",!e.form.value.id)("ngIfElse",i),a.zb(12),a.fc("formGroup",e.formScript),a.zb(12),a.fc("disabled",!e.formScript.valid),a.zb(8),a.Bc("Importanto contatos indicados do(a) ",e.parent.name," "),a.zb(3),a.fc("ngIf",0==e.customersImported.length),a.zb(1),a.fc("ngIf",0!=e.customersImported.length),a.zb(1),a.fc("ngIf",0==e.customersImported.length),a.zb(7),a.Cc("Ligando para ",e.person.name," - ",a.cc(124,33,e.person.phone,"(00)00000-0000"),""),a.zb(3),a.ic("href","https://api.whatsapp.com/send/?phone=55",e.person.phone,"&text=",null==e.strategy?null:e.strategy.url_sale,"",a.sc),a.zb(3),a.gc("href",null==e.strategy?null:e.strategy.url_sale,a.sc),a.zb(6),a.fc("formGroup",e.form),a.zb(5),a.fc("ngForOf",e.parents),a.zb(5),a.fc("ngForOf",null==e.strategy?null:e.strategy.staps),a.zb(69),a.fc("formGroup",e.formBug),a.zb(8),a.fc("disabled",!e.formBug.valid)}},directives:[g.c,g.d,g.a,h.l,P.a,h.m,l.q,l.j,l.e,l.a,l.i,l.d,v.a,l.n,l.l,l.p,Q.b],pipes:[h.g,v.b,h.f,z],styles:[".sellMore[_ngcontent-%COMP%]{min-height:100vh;width:100%;display:flex;flex-direction:column}.sellMore[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]{padding:15px;height:95px;width:100%}.sellMore[_ngcontent-%COMP%]   header[_ngcontent-%COMP%], .sellMore[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.sellMore[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{width:120px;height:100%}.sellMore[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]{flex:1}.sellMore[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%], .sellMore[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]{height:100%;display:flex;align-items:center;justify-content:center}.sellMore[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]{width:120px}.sellMore[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:56px;height:56px;border-radius:28px}.sellMore[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{padding:15px;flex:1;width:100%}.sellMore[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%]{position:fixed;padding:15px;height:95px;width:100%;justify-content:flex-end;bottom:0}.footerItens[_ngcontent-%COMP%], .sellMore[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%]{display:flex;align-items:center}.footerItens[_ngcontent-%COMP%]{width:80px;height:80px;border-radius:40px;background-color:var(--backgroundSecondary);color:var(--backgroundSecondaryColor);margin-left:10px;font-size:3em;justify-content:center;cursor:pointer;transition:.3s;z-index:998}.footerItens[_ngcontent-%COMP%]:hover{background-color:var(--backgroundSecondaryHover);font-size:3.1em}.totalLead[_ngcontent-%COMP%]{font-weight:700;font-size:28px}.totalOthers[_ngcontent-%COMP%]{font-weight:700;font-size:17px}.customers[_ngcontent-%COMP%]{width:422px;height:510px;background-color:var(--backgroundComponents);margin:15px;border-radius:10px;color:#efefed;display:flex;flex-direction:column}.parent[_ngcontent-%COMP%]{height:60px;width:100%;display:flex;flex-direction:row}.children[_ngcontent-%COMP%]{flex:1;padding:15px;overflow:auto}.info[_ngcontent-%COMP%]{height:70px;width:100%;display:flex}.parent[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]{display:flex;flex:1;justify-content:center;align-items:center;flex-direction:column}.parent[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{font-size:16px;font-weight:700}.parent[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   .finished[_ngcontent-%COMP%]{width:90px}.parent[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   .finished[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-right:10px}.parent[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   .waiting[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-left:10px}.waiting[_ngcontent-%COMP%]{width:160px}.children[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;margin-bottom:15px}.children[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .contacto[_ngcontent-%COMP%]{display:flex;flex:1;flex-direction:column}.children[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .contacto[_ngcontent-%COMP%]   .contacto-name[_ngcontent-%COMP%]{font-size:20px;font-weight:700}.children[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .contacto[_ngcontent-%COMP%]   .contacto-name[_ngcontent-%COMP%], .children[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .contacto[_ngcontent-%COMP%]   .contacto-phone[_ngcontent-%COMP%]{color:var(--backgroundSecondary)!important}.children[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .finished[_ngcontent-%COMP%]{width:50px}.children[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .finished[_ngcontent-%COMP%], .children[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .waiting[_ngcontent-%COMP%]{display:flex;align-items:flex-end;justify-content:flex-end}.children[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .waiting[_ngcontent-%COMP%]{width:145px}.children[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .waiting[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-left:10px}.info[_ngcontent-%COMP%]   .quantitative[_ngcontent-%COMP%]{margin-left:15px;flex:1;font-size:16px}.info[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]{width:70px;height:100%}.actionButton[_ngcontent-%COMP%], .info[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.actionButton[_ngcontent-%COMP%]{width:40px;height:40px;border-radius:20px;background-color:var(--backgroundSecondary);color:var(--backgroundSecondaryColor);font-size:20px;font-weight:700;cursor:pointer;transition:.3s;z-index:999}.actionButton[_ngcontent-%COMP%]:hover{background-color:var(--backgroundSecondaryHover)}.icon-finished[_ngcontent-%COMP%]{font-size:33px}.icon-finished-yes[_ngcontent-%COMP%]{color:var(--backgroundSecondary)}.icon-finished-no[_ngcontent-%COMP%]{color:#f88}.icon-waiting[_ngcontent-%COMP%]{font-size:20px;cursor:pointer}.icon-waiting-yes[_ngcontent-%COMP%]{color:var(--backgroundSecondary)}.icon-waiting-no[_ngcontent-%COMP%]{color:#f88}.fa-slash[_ngcontent-%COMP%]{margin-left:-150px}.textarea[_ngcontent-%COMP%]{width:100%;height:500px;border-radius:10px}.input[_ngcontent-%COMP%]{width:100%;height:62px;background:var(--backgroundInput)!important;color:var(--backgroundInputColor)!important;border-radius:10px;margin-bottom:15px}.input[_ngcontent-%COMP%], .inputIcon[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.inputIcon[_ngcontent-%COMP%]{width:35px}.inputText[_ngcontent-%COMP%]{flex:1}div.status[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-right:10px}.rowCall[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.person[_ngcontent-%COMP%]{flex:1;flex-direction:column}.strategy[_ngcontent-%COMP%]{flex:1;height:80vh;overflow:auto}.parentName[_ngcontent-%COMP%]{font-size:2em;font-weight:700}.parentPhone[_ngcontent-%COMP%]{font-size:1.2em}.parentDesc[_ngcontent-%COMP%]{font-size:1em}"]}),t})()}];let it=(()=>{class t{}return t.\u0275mod=a.Ib({type:t}),t.\u0275inj=a.Hb({factory:function(e){return new(e||t)},imports:[[i.a,o.d.forChild(nt)]]}),t})()}}]);