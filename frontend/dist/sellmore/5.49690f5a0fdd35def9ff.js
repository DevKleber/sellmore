(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{zULH:function(t,n,e){"use strict";e.r(n),e.d(n,"SellMoreModule",(function(){return it}));var i=e("PCNd"),o=e("tyNb"),c=e("fXoL"),a=e("nWBu"),r=e("PSD3"),s=e.n(r),l=e("3Pt+"),b=e("tk/3");let d=(()=>{class t{constructor(t,n){this.http=t,this.router=n,this.mostrarMenu=new c.n}getCustomers(t){return this.http.get(a.a+"/customers")}getStrategy(){return this.http.get(a.a+"/strategy")}getAllParents(t){return this.http.get(`${a.a}/parents/customers/${t}`)}insertUpdateStrategy(t){return this.http.put(a.a+"/strategy",t)}changeStatus(t,n){return this.http.put(`${a.a}/status/customers/${n}`,t)}save(t){return this.http.post(a.a+"/customers",t)}update(t,n){return this.http.put(`${a.a}/customers/${n}`,t)}inativar(t){return this.http.delete(`${a.a}/customers/${t}`)}file(t,n){return this.http.post(`${a.a}/import-contact/customers/${n}`,t)}}return t.\u0275fac=function(n){return new(n||t)(c.Ub(b.b),c.Ub(o.c))},t.\u0275prov=c.Gb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var u=e("e43+"),f=e("/D8a"),p=e("OaAl"),m=e("Cdxl"),g=e("STbY"),h=e("ofXK"),P=e("tmjD"),v=e("Kdsb"),y=e("Qu3c"),C=e("jhN1");let M=(()=>{class t{constructor(t){this._sanitizer=t}transform(t,n){switch(n){case"html":return this._sanitizer.bypassSecurityTrustHtml(t);case"style":return this._sanitizer.bypassSecurityTrustStyle(t);case"script":return this._sanitizer.bypassSecurityTrustScript(t);case"url":return this._sanitizer.bypassSecurityTrustUrl(t);case"resourceUrl":return this._sanitizer.bypassSecurityTrustResourceUrl(t);default:throw new Error("Unable to bypass security for invalid type: ")}}}return t.\u0275fac=function(n){return new(n||t)(c.Kb(C.b))},t.\u0275pipe=c.Jb({name:"safeHtml",type:t,pure:!0}),t})();function Q(t,n){1&t&&c.Lb(0,"i",97)}function w(t,n){1&t&&c.Lb(0,"i",98)}function O(t,n){1&t&&c.Lb(0,"i",99)}function _(t,n){1&t&&c.Lb(0,"i",100)}function x(t,n){if(1&t){const t=c.Rb();c.Ob(0),c.Qb(1,"div",84),c.wc(2,Q,1,0,"i",85),c.wc(3,w,1,0,"i",86),c.wc(4,O,1,0,"i",87),c.wc(5,_,1,0,"i",88),c.Lb(6,"i",89),c.Qb(7,"mat-menu",null,90),c.Qb(9,"button",91),c.Xb("click",(function(){c.pc(t);const n=c.Zb().$implicit;return c.Zb().newChildren(null==n?null:n.value)})),c.Lb(10,"i",92),c.yc(11," Importar contatos "),c.Pb(),c.Qb(12,"button",16),c.Qb(13,"a",93),c.Lb(14,"i",92),c.yc(15," Abrir no Whatsapp "),c.Pb(),c.Pb(),c.Qb(16,"button",94),c.Xb("click",(function(){c.pc(t);const n=c.Zb().$implicit;return c.Zb().updateOpenForm(n.value)})),c.Lb(17,"i",95),c.yc(18," Alterar "),c.Pb(),c.Qb(19,"button",18),c.Xb("click",(function(){c.pc(t);const n=c.Zb().$implicit;return c.Zb().inativar(n.value)})),c.Lb(20,"i",96),c.yc(21," Arquivar "),c.Pb(),c.Pb(),c.Pb(),c.Nb()}if(2&t){const t=c.nc(8),n=c.Zb().$implicit;c.zb(2),c.fc("ngIf","pc"==n.value.status),c.zb(1),c.fc("ngIf","ld"==n.value.status),c.zb(1),c.fc("ngIf","n"==n.value.status),c.zb(1),c.fc("ngIf","c"==n.value.status),c.zb(1),c.fc("matMenuTriggerFor",t),c.zb(7),c.hc("href","https://wa.me/55",null==n?null:n.value.phone,"",c.rc)}}function S(t,n){if(1&t){const t=c.Rb();c.Qb(0,"div",101),c.Qb(1,"i",102),c.Xb("click",(function(){c.pc(t);const n=c.Zb().$implicit;return c.Zb().changeStatus(n.value,"pc")})),c.Pb(),c.Qb(2,"i",103),c.Xb("click",(function(){c.pc(t);const n=c.Zb().$implicit;return c.Zb().changeStatus(n.value,"ld")})),c.Pb(),c.Qb(3,"i",104),c.Xb("click",(function(){c.pc(t);const n=c.Zb().$implicit;return c.Zb().changeStatus(n.value,"n")})),c.Pb(),c.Qb(4,"i",105),c.Xb("click",(function(){c.pc(t);const n=c.Zb().$implicit;return c.Zb().changeStatus(n.value,"c")})),c.Pb(),c.Lb(5,"i",106),c.Qb(6,"mat-menu",null,90),c.Qb(8,"button",91),c.Xb("click",(function(){c.pc(t);const n=c.Zb().$implicit;return c.Zb().newChildren(n.value)})),c.Lb(9,"i",92),c.yc(10," Importar contatos "),c.Pb(),c.Qb(11,"button",16),c.Qb(12,"a",93),c.Lb(13,"i",92),c.yc(14," Abrir no Whatsapp "),c.Pb(),c.Pb(),c.Qb(15,"button",94),c.Xb("click",(function(){c.pc(t);const n=c.Zb().$implicit;return c.Zb().updateOpenForm(n.value)})),c.Lb(16,"i",95),c.yc(17," Alterar "),c.Pb(),c.Qb(18,"button",18),c.Xb("click",(function(){c.pc(t);const n=c.Zb().$implicit;return c.Zb().inativar(n.value)})),c.Lb(19,"i",96),c.yc(20," Arquivar "),c.Pb(),c.Pb(),c.Pb()}if(2&t){const t=c.nc(7),n=c.Zb().$implicit;c.zb(5),c.fc("matMenuTriggerFor",t),c.zb(7),c.hc("href","https://wa.me/55",null==n?null:n.value.phone,"",c.rc)}}function z(t,n){1&t&&c.Lb(0,"i",97)}function k(t,n){1&t&&c.Lb(0,"i",115)}function L(t,n){1&t&&c.Lb(0,"i",99)}function I(t,n){1&t&&c.Lb(0,"i",100)}function Z(t,n){if(1&t){const t=c.Rb();c.Ob(0),c.Qb(1,"div",84),c.wc(2,z,1,0,"i",85),c.wc(3,k,1,0,"i",112),c.wc(4,L,1,0,"i",87),c.wc(5,I,1,0,"i",88),c.Lb(6,"i",113),c.Qb(7,"mat-menu",null,90),c.Qb(9,"button",91),c.Xb("click",(function(){c.pc(t);const n=c.Zb().$implicit;return c.Zb(2).newChildren(null==n?null:n.value)})),c.Lb(10,"i",92),c.yc(11," Importar contatos "),c.Pb(),c.Qb(12,"button",16),c.Qb(13,"a",93),c.Lb(14,"i",92),c.yc(15," Abrir no Whatsapp "),c.Pb(),c.Pb(),c.Qb(16,"button",94),c.Xb("click",(function(){c.pc(t);const n=c.Zb().$implicit;return c.Zb(2).updateOpenForm(n.value)})),c.Lb(17,"i",95),c.yc(18," Alterar "),c.Pb(),c.Qb(19,"button",18),c.Xb("click",(function(){c.pc(t);const n=c.Zb().$implicit;return c.Zb(2).inativar(n.value)})),c.Lb(20,"i",96),c.yc(21," Arquivar "),c.Pb(),c.Qb(22,"button",94),c.Xb("click",(function(){c.pc(t);const n=c.Zb().$implicit;return c.Zb(2).newChildren(n.value)})),c.Lb(23,"i",114),c.yc(24," Tornar Lead "),c.Pb(),c.Pb(),c.Pb(),c.Nb()}if(2&t){const t=c.nc(8),n=c.Zb().$implicit;c.zb(2),c.fc("ngIf","pc"==n.value.status),c.zb(1),c.fc("ngIf","ld"==n.value.status),c.zb(1),c.fc("ngIf","n"==n.value.status),c.zb(1),c.fc("ngIf","c"==n.value.status),c.zb(1),c.fc("matMenuTriggerFor",t),c.zb(7),c.hc("href","https://wa.me/55",null==n?null:n.value.phone,"",c.rc)}}function A(t,n){if(1&t){const t=c.Rb();c.Qb(0,"div",101),c.Qb(1,"i",102),c.Xb("click",(function(){c.pc(t);const n=c.Zb().$implicit;return c.Zb(2).changeStatus(n.value,"pc")})),c.Pb(),c.Qb(2,"i",103),c.Xb("click",(function(){c.pc(t);const n=c.Zb().$implicit;return c.Zb(2).changeStatus(n.value,"ld")})),c.Pb(),c.Qb(3,"i",104),c.Xb("click",(function(){c.pc(t);const n=c.Zb().$implicit;return c.Zb(2).changeStatus(n.value,"n")})),c.Pb(),c.Qb(4,"i",105),c.Xb("click",(function(){c.pc(t);const n=c.Zb().$implicit;return c.Zb(2).changeStatus(n.value,"c")})),c.Pb(),c.Lb(5,"i",116),c.Qb(6,"mat-menu",null,90),c.Qb(8,"button",91),c.Xb("click",(function(){c.pc(t);const n=c.Zb().$implicit;return c.Zb(2).newChildren(null==n?null:n.value)})),c.Lb(9,"i",92),c.yc(10," Importar contatos "),c.Pb(),c.Qb(11,"button",16),c.Qb(12,"a",93),c.Lb(13,"i",92),c.yc(14," Abrir no Whatsapp "),c.Pb(),c.Pb(),c.Qb(15,"button",94),c.Xb("click",(function(){c.pc(t);const n=c.Zb().$implicit;return c.Zb(2).updateOpenForm(n.value)})),c.Lb(16,"i",95),c.yc(17," Alterar "),c.Pb(),c.Qb(18,"button",18),c.Xb("click",(function(){c.pc(t);const n=c.Zb().$implicit;return c.Zb(2).inativar(n.value)})),c.Lb(19,"i",96),c.yc(20," Arquivar "),c.Pb(),c.Qb(21,"button",94),c.Xb("click",(function(){c.pc(t);const n=c.Zb().$implicit;return c.Zb(2).newChildren(n.value)})),c.Lb(22,"i",114),c.yc(23," Tornar Lead "),c.Pb(),c.Pb(),c.Pb()}if(2&t){const t=c.nc(7),n=c.Zb().$implicit;c.zb(5),c.fc("matMenuTriggerFor",t),c.zb(7),c.hc("href","https://wa.me/55",null==n?null:n.value.phone,"",c.rc)}}function F(t,n){if(1&t){const t=c.Rb();c.Qb(0,"div",107),c.Qb(1,"div",108),c.Xb("click",(function(){c.pc(t);const e=n.$implicit;return c.Zb(2).callTo(e.value)})),c.Qb(2,"span"),c.Qb(3,"div",109),c.yc(4),c.Pb(),c.Qb(5,"div",110),c.yc(6),c.ac(7,"mask"),c.Pb(),c.Pb(),c.Pb(),c.wc(8,Z,25,6,"ng-container",35),c.wc(9,A,24,2,"ng-template",null,111,c.xc),c.Pb()}if(2&t){const t=n.$implicit,e=c.nc(10);c.zb(4),c.Ac(" ",t.value.name," "),c.zb(2),c.Ac(" ",c.cc(7,4,t.value.phone,"(00)00000-0000")," "),c.zb(2),c.fc("ngIf","a"!=t.value.status)("ngIfElse",e)}}function $(t,n){if(1&t){const t=c.Rb();c.Qb(0,"div",72),c.Qb(1,"div",73),c.Qb(2,"div",74),c.Qb(3,"div",75),c.yc(4),c.Pb(),c.Qb(5,"div",76),c.yc(6),c.ac(7,"mask"),c.Pb(),c.Pb(),c.Qb(8,"div",77),c.wc(9,x,22,6,"ng-container",35),c.wc(10,S,21,2,"ng-template",null,78,c.xc),c.Pb(),c.Pb(),c.Qb(12,"perfect-scrollbar"),c.Qb(13,"div",79),c.wc(14,F,11,7,"div",80),c.ac(15,"keyvalue"),c.Pb(),c.Pb(),c.Qb(16,"div",81),c.Qb(17,"div",82),c.yc(18),c.ac(19,"json"),c.Lb(20,"br"),c.yc(21," N \xe0 contactar "),c.Pb(),c.Qb(22,"div",77),c.Qb(23,"div",83),c.Xb("click",(function(){c.pc(t);const e=n.$implicit;return c.Zb().newChildren(e.value)})),c.Lb(24,"i",29),c.Pb(),c.Pb(),c.Pb(),c.Pb()}if(2&t){const t=n.$implicit,e=c.nc(11);c.zb(4),c.zc(null==t?null:t.value.name),c.zb(2),c.Ac(" ",c.cc(7,6,null==t?null:t.value.phone,"(00)00000-0000")," "),c.zb(3),c.fc("ngIf","a"!=(null==t?null:t.value.status))("ngIfElse",e),c.zb(5),c.fc("ngForOf",c.bc(15,9,t.value.referidos)),c.zb(4),c.Ac(" ",c.bc(19,11,t.value.referidos.length)," referidos ")}}function X(t,n){if(1&t&&(c.Ob(0),c.Qb(1,"p"),c.yc(2),c.Pb(),c.Nb()),2&t){const t=c.Zb();c.zb(2),c.Ac(" Cadastre abaixo os indicados do(a) ",t.parent.name," ")}}function T(t,n){1&t&&(c.Qb(0,"span"),c.yc(1,"Novo referido "),c.Pb())}function N(t,n){1&t&&(c.Qb(0,"span"),c.yc(1,"Alterando referido "),c.Pb())}function B(t,n){if(1&t&&(c.wc(0,T,2,0,"span",62),c.wc(1,N,2,0,"span",62)),2&t){const t=c.Zb();c.fc("ngIf",!t.form.value.id),c.zb(1),c.fc("ngIf",t.form.value.id)}}function q(t,n){if(1&t&&(c.Qb(0,"option",117),c.yc(1),c.Pb()),2&t){const t=n.$implicit;c.fc("value",t.id),c.zb(1),c.Ac(" ",null==t?null:t.status," ")}}function j(t,n){if(1&t){const t=c.Rb();c.Ob(0),c.Qb(1,"button",59),c.Xb("click",(function(){c.pc(t);const n=c.Zb();return n.save(n.form.value)})),c.yc(2," Salvar "),c.Pb(),c.Nb()}if(2&t){const t=c.Zb();c.zb(1),c.fc("disabled",!t.form.valid)}}function V(t,n){if(1&t){const t=c.Rb();c.Qb(0,"button",59),c.Xb("click",(function(){c.pc(t);const n=c.Zb();return n.update(n.form.value)})),c.yc(1," Alterar "),c.Pb()}if(2&t){const t=c.Zb();c.fc("disabled",!t.form.valid)}}function R(t,n){if(1&t){const t=c.Rb();c.Qb(0,"span"),c.Qb(1,"h2"),c.yc(2),c.Pb(),c.Qb(3,"div",118),c.Qb(4,"input",119,120),c.Xb("change",(function(n){return c.pc(t),c.Zb().onFileChanged(n)})),c.Pb(),c.Qb(6,"div",121),c.ac(7,"safeHtml"),c.Pb(),c.Qb(8,"button",122),c.Xb("click",(function(){return c.pc(t),c.nc(5).click()})),c.yc(9," Anexar arquivo "),c.Pb(),c.Pb(),c.Pb()}if(2&t){const t=c.Zb();c.zb(2),c.Ac("Anexe o arquivo baixado na conversa com o(a) ",t.parent.name," "),c.zb(4),c.vc("background-image",c.cc(7,3,"url("+t.img+" )","style"))}}function E(t,n){if(1&t&&(c.Qb(0,"div",126),c.yc(1),c.Lb(2,"br"),c.yc(3),c.Pb()),2&t){const t=n.$implicit;c.zb(1),c.Ac(" ",null==t?null:t.name," "),c.zb(2),c.Ac(" ",null==t?null:t.phone," ")}}function U(t,n){if(1&t&&(c.Qb(0,"p"),c.yc(1),c.Pb()),2&t){const t=n.$implicit;c.zb(1),c.Ac(" ",t," ")}}function K(t,n){if(1&t&&(c.Ob(0),c.Qb(1,"div",123),c.Qb(2,"h3"),c.yc(3),c.Pb(),c.wc(4,E,4,2,"div",124),c.Pb(),c.Qb(5,"div",125),c.Qb(6,"h3"),c.yc(7),c.Pb(),c.wc(8,U,2,1,"p",71),c.Pb(),c.Nb()),2&t){const t=c.Zb();c.zb(3),c.Ac("Importado ",null==t.customersImported?null:t.customersImported.res.length,""),c.zb(1),c.fc("ngForOf",null==t.customersImported?null:t.customersImported.res),c.zb(3),c.Ac("Indicado por outro lead ",null==t.customersImported?null:t.customersImported.repetidos.length,""),c.zb(1),c.fc("ngForOf",null==t.customersImported?null:t.customersImported.repetidos)}}function D(t,n){if(1&t){const t=c.Rb();c.Qb(0,"div",50),c.Qb(1,"button",127),c.Xb("click",(function(){c.pc(t);const n=c.Zb();return n.importContact(n.formScript.value)})),c.yc(2," Importar "),c.Pb(),c.Pb()}}function H(t,n){1&t&&c.Lb(0,"i",97)}function G(t,n){1&t&&c.Lb(0,"i",98)}function W(t,n){1&t&&c.Lb(0,"i",99)}function J(t,n){1&t&&c.Lb(0,"i",100)}function Y(t,n){if(1&t&&(c.Qb(0,"span"),c.wc(1,H,1,0,"i",85),c.wc(2,G,1,0,"i",86),c.wc(3,W,1,0,"i",87),c.wc(4,J,1,0,"i",88),c.Pb()),2&t){const t=c.Zb().$implicit;c.zb(1),c.fc("ngIf","pc"==t.status),c.zb(1),c.fc("ngIf","ld"==t.status),c.zb(1),c.fc("ngIf","n"==t.status),c.zb(1),c.fc("ngIf","c"==t.status)}}function tt(t,n){if(1&t&&(c.Qb(0,"div",128),c.Qb(1,"div"),c.Qb(2,"div",129),c.Lb(3,"i",130),c.yc(4),c.wc(5,Y,5,4,"span",62),c.Pb(),c.Qb(6,"div",131),c.yc(7),c.ac(8,"mask"),c.Pb(),c.Qb(9,"div",132),c.yc(10),c.Pb(),c.Pb(),c.Pb()),2&t){const t=n.$implicit,e=n.index;c.zb(1),c.vc("margin-left",20*e,"px"),c.zb(3),c.Ac(" ",t.name," "),c.zb(1),c.fc("ngIf","a"!=t.status),c.zb(2),c.Ac(" ",c.cc(8,6,t.phone,"(00)00000-0000")," "),c.zb(3),c.Ac(" ",t.observation," ")}}function nt(t,n){if(1&t&&(c.Qb(0,"span"),c.yc(1),c.Lb(2,"br"),c.Pb()),2&t){const t=n.$implicit;c.zb(1),c.Ac(" ",t," ")}}const et=[{path:"",component:(()=>{class t{constructor(t,n,e,i,o,r){this.sellMoreService=t,this.loginService=n,this.formBuilder=e,this.helper=i,this.notificationService=o,this.loaderService=r,this.customers=[],this.status=[{id:"pc",status:"Problemas com cart\xe3o"},{id:"ld",status:"Ligar depois"},{id:"n",status:"N\xe3o tem interesse"},{id:"c",status:"Comprou"}],this.customersImported=[],this.person={},this.parent={},this.parents=[],this.strategy={},this.statistics={},this.path=a.b,this.isDevMode=Object(c.V)(),this.img="assets/img/file/search.svg",this.user={}}ngOnInit(){this.getCustomers(),this.getStrategy(),this.initialForms(),this.user=this.loginService.getUser()}initialForms(){this.form=this.formBuilder.group({id:this.formBuilder.control(null),name:this.formBuilder.control("",[l.p.required]),phone:this.formBuilder.control("",[l.p.required]),address:this.formBuilder.control(""),status:this.formBuilder.control(""),observation:this.formBuilder.control(""),id_parent:this.formBuilder.control(null)}),this.formScript=this.formBuilder.group({strategy:this.formBuilder.control("",[l.p.required])})}getCustomers(){this.loaderService.isLoad(!0),this.sellMoreService.getCustomers().subscribe(t=>{this.loaderService.isLoad(!1),this.customers=t.arCustomers,this.statistics=t.statistics})}getStrategy(){this.loaderService.isLoad(!0),this.sellMoreService.getStrategy().subscribe(t=>{this.loaderService.isLoad(!1),this.strategy=t.dados,this.strategy.staps=t.nl2br,this.formScript.controls.strategy.setValue(this.strategy.strategy)})}updateOpenForm(t){this.form.controls.id.setValue(t.id),this.form.controls.name.setValue(t.name),this.form.controls.phone.setValue(t.phone),this.form.controls.address.setValue(t.address),this.form.controls.status.setValue(t.status),this.form.controls.observation.setValue(t.observation),this.form.controls.id_parent.setValue(t.id_parent)}update(t,n=!0,e=!0){t.id||this.notificationService.notifySweet("Erro: n\xe3o encontramos o referido!"),this.loaderService.isLoad(!0),this.sellMoreService.update(t,t.id).subscribe(t=>{n&&(this.notificationService.notifySweet("Alterado com sucesso!"),this.clearForm()),e&&this.getCustomers(),this.loaderService.isLoad(!1)})}save(t){this.loaderService.isLoad(!0),this.sellMoreService.save(t).subscribe(t=>{this.notificationService.notifySweet("Salvo com sucesso!"),this.clearForm(),this.getCustomers(),this.loaderService.isLoad(!1)})}saveStrategy(t){this.loaderService.isLoad(!0),this.sellMoreService.insertUpdateStrategy(t).subscribe(t=>{this.notificationService.notifySweet("Salvo com sucesso!"),this.loaderService.isLoad(!1)})}changeStatus(t,n){this.loaderService.isLoad(!0),this.sellMoreService.changeStatus({status:n},t.id).subscribe(e=>{this.statistics[n]=this.statistics[n]+1,this.loaderService.isLoad(!1),t.status=n,this.notificationService.notifySweet("Atualizado!")})}callTo(t){this.loaderService.isLoad(!0),this.updateOpenForm(t),this.person=t,this.sellMoreService.getAllParents(t.id_parent).subscribe(t=>{this.loaderService.isLoad(!1),this.parents=t})}newChildren(t){this.parent=t,this.customersImported=[],this.clearForm(),this.form.controls.id_parent.setValue(t.id),console.log(t)}newLead(){this.clearForm(),this.form.controls.id_parent.setValue(null),this.parent={}}clearForm(){this.form.controls.name.setValue(""),this.form.controls.phone.setValue(""),this.form.controls.address.setValue(""),this.form.controls.status.setValue(""),this.form.controls.observation.setValue("")}onFileChanged(t){const n=this.helper.onFileChanged(t);n?(this.img=n.img,this.selectedFile=n.selectedFile):this.notificationService.notifySweet("Arquivo n\xe3o permitido!")}importContact(){this.loaderService.isLoad(!0);const t=new FormData;this.selectedFile||(this.notificationService.notifyError("Anexe um arquivo!"),this.loaderService.isLoad(!1)),this.selectedFile&&(t.append("imagem",this.selectedFile,this.selectedFile.name),this.sellMoreService.file(t,this.parent.id).subscribe(t=>{console.log(t),this.customersImported=t,this.getCustomers(),this.loaderService.isLoad(!1)}))}inativar(t){let n=!1;Object.entries(this.customers).forEach(e=>{if(e[1].id===t.id)return n=!0,!0}),console.log(n),s.a.fire({title:`Arquivar ${t.name} ?`,text:n?`Aten\xe7\xe3o, a pessoa escolhida \xe9, tamb\xe9m, um lead e possui referidos em sua cadeia de conex\xf5es (card). Se prosseguir com o arquivamento do(a) ${t.name}, o seu card ser\xe1 ocultado por completo. Esta a\xe7\xe3o n\xe3o altera os referidos que se tornaram lead. Deseja prosseguir?`:"",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Sim, arquivar!"}).then(n=>{n.isConfirmed&&(this.loaderService.isLoad(!0),this.sellMoreService.inativar(t.id).subscribe(t=>{this.loaderService.isLoad(!1),this.notificationService.notifySweet(t.response)}))})}logout(){this.loginService.logout()}}return t.\u0275fac=function(n){return new(n||t)(c.Kb(d),c.Kb(u.a),c.Kb(l.c),c.Kb(f.a),c.Kb(p.a),c.Kb(m.a))},t.\u0275cmp=c.Eb({type:t,selectors:[["app-sell-more"]],decls:131,vars:27,consts:[[1,"sellMore"],[1,"logo"],["src","/assets/img/system/sellmore.webp","width","55px"],[1,"search"],[1,"input",2,"width","490px !important"],[1,"inputIcon"],[1,"fa","fa-search"],[1,"inputText"],["type","text","placeholder","Buscar",1,"w-100"],["action","https://www.paypal.com/donate","method","post","target","_top"],["type","hidden","name","hosted_button_id","value","Z5Z6N2FSLFHRA"],["type","image","src","https://www.paypalobjects.com/pt_BR/BR/i/btn/btn_donateCC_LG.gif","border","0","name","submit","title","PayPal - The safer, easier way to pay online!","alt","Donate with PayPal button",2,"background","transparent!important"],["alt","","border","0","src","https://www.paypal.com/pt_BR/i/scr/pixel.gif","width","1","height","1"],[1,"profile"],["src","/assets/img/user/user.png","alt","","width","55px",1,"cursor-pointer",3,"matMenuTriggerFor"],["profile","matMenu"],["mat-menu-item",""],[1,"fas","fa-id-card-alt"],["mat-menu-item","",3,"click"],[1,"fas","fa-sign-out-alt"],[1,"content","pad40"],[1,"row","flex-direction-column"],[1,"totalLead"],[1,"totalOthers"],[1,"row","flex-wrap"],["class","customers",4,"ngFor","ngForOf"],["data-toggle","modal","data-target","#modalScriptAdd",1,"footerItens",3,"click"],[1,"fa","fa-receipt"],["data-toggle","modal","data-target","#modalStickyAdd",1,"footerItens",3,"click"],[1,"fa","fa-plus"],["id","modalStickyAdd","tabindex","-1","aria-labelledby","modalNewSticky","aria-hidden","true",1,"modal","fade"],[1,"modal-dialog"],[1,"modal-content"],[1,"modal-header"],["id","modalNewSticky",1,"modal-title"],[4,"ngIf","ngIfElse"],["indicatedBy",""],[1,"modal-body"],[1,"content"],["novalidate","",3,"formGroup"],[1,"input"],[1,"fa","fa-user"],["type","text","formControlName","name","placeholder","Nome",1,"w-100"],[1,"fa","fa-mobile-alt"],["type","text","formControlName","phone","placeholder","Telefone","mask","(00)00000-0000",1,"w-100"],["placeholder","Observa\xe7\xe3o","formControlName","observation",1,"textarea"],[1,"fa","fa-info"],["formControlName","status",1,"w-100"],["value","","selected",""],[3,"value",4,"ngFor","ngForOf"],[1,"modal-footer"],["type","button","data-dismiss","modal",1,"btn","btn-secondary"],["closemodalStickyAdd",""],["elseTemplateUpdate",""],["id","modalScriptAdd","tabindex","-1","aria-labelledby","modalNewScript","aria-hidden","true",1,"modal","fade"],[1,"modal-dialog","modal-exlg"],["id","modalNewScript",1,"modal-title"],["placeholder","Estrat\xe9gia","formControlName","strategy",1,"textarea"],["closemodalScriptAdd",""],["type","button",1,"btn","btn-primary",3,"disabled","click"],["id","modalImportContact","tabindex","-1","aria-labelledby","modalNewImportContact","aria-hidden","true",1,"modal","fade"],["id","modalNewImportContact",1,"modal-title"],[4,"ngIf"],["class","modal-footer",4,"ngIf"],["id","modalCall","tabindex","-1","aria-labelledby","modalStapcall","aria-hidden","true",1,"modal","fade"],["id","modalStapcall",1,"modal-title"],[1,"content","rowCall"],[1,"person"],["placeholder","Observa\xe7\xe3o","formControlName","observation",1,"textarea",2,"width","95%","height","300px",3,"change"],["class","tree margint-25",4,"ngFor","ngForOf"],[1,"strategy"],[4,"ngFor","ngForOf"],[1,"customers"],[1,"parent","center-center"],[1,"contact"],[1,"name"],[1,"phone"],[1,"action"],["waiting",""],[1,"children"],["class","item",4,"ngFor","ngForOf"],[1,"info","center-center"],[1,"quantitative"],["data-toggle","modal","data-target","#modalStickyAdd",1,"actionButton",3,"click"],[1,"finished"],["class","fa fa-credit-card icon-finished icon-finished-no",4,"ngIf"],["class","fa fa-headset icon-finished",4,"ngIf"],["class","fa fa-thumbs-down icon-finished icon-finished-no",4,"ngIf"],["class","fa fa-thumbs-up icon-finished icon-finished-yes",4,"ngIf"],["matTooltip","Menu",1,"fa","fa-bars","icon-finished","cursor-pointer",3,"matMenuTriggerFor"],["menu","matMenu"],["mat-menu-item","","data-toggle","modal","data-target","#modalImportContact",3,"click"],[1,"fab","fa-whatsapp"],["target","_BLANK",3,"href"],["mat-menu-item","","data-toggle","modal","data-target","#modalStickyAdd",3,"click"],[1,"fas","fa-edit"],[1,"fas","fa-eye-slash"],[1,"fa","fa-credit-card","icon-finished","icon-finished-no"],[1,"fa","fa-headset","icon-finished"],[1,"fa","fa-thumbs-down","icon-finished","icon-finished-no"],[1,"fa","fa-thumbs-up","icon-finished","icon-finished-yes"],[1,"waiting"],["matTooltip","Problemas com cart\xe3o de cr\xe9dito",1,"fa","fa-credit-card","icon-waiting",3,"click"],["matTooltip","Ligar depois",1,"fa","fa-headset","icon-waiting",3,"click"],["matTooltip","N\xe3o deu neg\xf3cio \ud83d\ude2d",1,"fa","fa-thumbs-down","icon-waiting",3,"click"],["matTooltip","Vendido \ud83d\ude03",1,"fa","fa-thumbs-up","icon-waiting",3,"click"],["matTooltip","Menu",1,"fa","fa-bars","icon-waiting","cursor-pointer",3,"matMenuTriggerFor"],[1,"item"],["data-toggle","modal","data-target","#modalCall",1,"contacto","cursor-pointer",3,"click"],[1,"contacto-name"],[1,"contacto-phone"],["waitingChildren",""],["class","fa fa-headset icon-finished icon-finished-no",4,"ngIf"],["matTooltip","Menu",1,"fa","fa-bars","icon-finished",2,"margin-left","15px",3,"matMenuTriggerFor"],[1,"fa","fa-chalkboard-teacher"],[1,"fa","fa-headset","icon-finished","icon-finished-no"],["matTooltip","Menu",1,"fa","fa-bars","icon-waiting",3,"matMenuTriggerFor"],[3,"value"],[1,"form-group","margint-25"],["type","file",2,"display","none",3,"change"],["fileInput",""],[1,"uploadArquivo"],[1,"btn","btn-upload","btn-secondary",3,"click"],[1,"card",2,"background","transparent","color","var(--backgroundColor)","margin-bottom","15px"],["style","margin-top: 15px;",4,"ngFor","ngForOf"],[1,"card",2,"background","transparent","color","var(--backgroundColor)"],[2,"margin-top","15px"],["type","button",1,"btn","btn-primary",3,"click"],[1,"tree","margint-25"],[1,"parentName"],[1,"fa","fa-folder-open"],[1,"parentPhone"],[1,"parentDesc"]],template:function(t,n){if(1&t&&(c.Qb(0,"div",0),c.Qb(1,"header"),c.Qb(2,"div",1),c.Lb(3,"img",2),c.Pb(),c.Qb(4,"div",3),c.Qb(5,"div",4),c.Qb(6,"div",5),c.Lb(7,"i",6),c.Pb(),c.Qb(8,"div",7),c.Lb(9,"input",8),c.Pb(),c.Pb(),c.Pb(),c.Qb(10,"form",9),c.Lb(11,"input",10),c.Lb(12,"input",11),c.Lb(13,"img",12),c.Pb(),c.Qb(14,"div",13),c.Lb(15,"img",14),c.Pb(),c.Qb(16,"mat-menu",null,15),c.Qb(18,"button",16),c.Lb(19,"i",17),c.yc(20),c.Pb(),c.Qb(21,"button",18),c.Xb("click",(function(){return n.logout()})),c.Lb(22,"i",19),c.yc(23," Sair "),c.Pb(),c.Pb(),c.Pb(),c.Qb(24,"div",20),c.Qb(25,"div",21),c.Qb(26,"div",22),c.yc(27),c.Pb(),c.Qb(28,"div",23),c.yc(29),c.Pb(),c.Qb(30,"div",23),c.yc(31),c.Pb(),c.Qb(32,"div",23),c.yc(33),c.Pb(),c.Pb(),c.Qb(34,"div",24),c.wc(35,$,25,13,"div",25),c.ac(36,"keyvalue"),c.Pb(),c.Pb(),c.Qb(37,"footer"),c.Qb(38,"div",26),c.Xb("click",(function(){return n.newLead()})),c.Lb(39,"i",27),c.Pb(),c.Qb(40,"div",28),c.Xb("click",(function(){return n.newLead()})),c.Lb(41,"i",29),c.Pb(),c.Pb(),c.Pb(),c.Qb(42,"div",30),c.Qb(43,"div",31),c.Qb(44,"div",32),c.Qb(45,"div",33),c.Qb(46,"h3",34),c.wc(47,X,3,1,"ng-container",35),c.wc(48,B,2,2,"ng-template",null,36,c.xc),c.Pb(),c.Pb(),c.Qb(50,"div",37),c.Qb(51,"div",38),c.Qb(52,"form",39),c.Qb(53,"div",40),c.Qb(54,"div",5),c.Lb(55,"i",41),c.Pb(),c.Qb(56,"div",7),c.Lb(57,"input",42),c.Pb(),c.Pb(),c.Qb(58,"div",40),c.Qb(59,"div",5),c.Lb(60,"i",43),c.Pb(),c.Qb(61,"div",7),c.Lb(62,"input",44),c.Pb(),c.Pb(),c.Qb(63,"textarea",45),c.yc(64,"\t\t\t\t\t\t"),c.Pb(),c.Qb(65,"div",40),c.Qb(66,"div",5),c.Lb(67,"i",46),c.Pb(),c.Qb(68,"div",7),c.Qb(69,"select",47),c.Qb(70,"option",48),c.yc(71," Selecione uma op\xe7\xe3o caso tenha entrado em contato com o referente "),c.Pb(),c.wc(72,q,2,2,"option",49),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Qb(73,"div",50),c.Qb(74,"button",51,52),c.yc(76," Fechar "),c.Pb(),c.wc(77,j,3,1,"ng-container",35),c.wc(78,V,2,1,"ng-template",null,53,c.xc),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Qb(80,"div",54),c.Qb(81,"div",55),c.Qb(82,"div",32),c.Qb(83,"div",33),c.Qb(84,"h3",56),c.Qb(85,"p"),c.yc(86,"Roteiro"),c.Pb(),c.Pb(),c.Pb(),c.Qb(87,"div",37),c.Qb(88,"div",38),c.Qb(89,"form",39),c.Qb(90,"textarea",57),c.yc(91,"\t\t\t\t\t\t"),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Qb(92,"div",50),c.Qb(93,"button",51,58),c.yc(95," Fechar "),c.Pb(),c.Qb(96,"button",59),c.Xb("click",(function(){return n.saveStrategy(n.formScript.value)})),c.yc(97," Salvar "),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Qb(98,"div",60),c.Qb(99,"div",31),c.Qb(100,"div",32),c.Qb(101,"div",33),c.Qb(102,"h3",61),c.Qb(103,"p"),c.yc(104),c.Pb(),c.Pb(),c.Pb(),c.Qb(105,"div",37),c.Qb(106,"div",38),c.wc(107,R,10,6,"span",62),c.wc(108,K,9,4,"ng-container",62),c.Pb(),c.Pb(),c.wc(109,D,3,0,"div",63),c.Pb(),c.Pb(),c.Pb(),c.Qb(110,"div",64),c.Qb(111,"div",55),c.Qb(112,"div",32),c.Qb(113,"div",33),c.Qb(114,"h2",65),c.Qb(115,"p"),c.yc(116),c.Pb(),c.Pb(),c.Pb(),c.Qb(117,"div",37),c.Qb(118,"div",66),c.Qb(119,"div",67),c.Qb(120,"form",39),c.Qb(121,"textarea",68),c.Xb("change",(function(){return n.update(n.form.value,!1,!0)})),c.yc(122,"\t\t\t\t\t\t\t"),c.Pb(),c.Pb(),c.Qb(123,"b"),c.yc(124,"\xc1rvores de indica\xe7\xf5es"),c.Pb(),c.wc(125,tt,11,9,"div",69),c.Pb(),c.Qb(126,"div",70),c.Qb(127,"perfect-scrollbar"),c.Qb(128,"h1"),c.yc(129,"Strategy"),c.Pb(),c.wc(130,nt,3,1,"span",71),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Pb()),2&t){const t=c.nc(17),e=c.nc(49),i=c.nc(79);c.zb(15),c.fc("matMenuTriggerFor",t),c.zb(5),c.Ac(" ",null==n.user?null:n.user.nome," "),c.zb(7),c.Ac("",null==n.statistics?null:n.statistics.a," referidos \xe0 contactar"),c.zb(2),c.Bc("",null==n.statistics?null:n.statistics.c," ",(null==n.statistics?null:n.statistics.c)<=1?"venda":"vendas",""),c.zb(2),c.Bc("",null==n.statistics?null:n.statistics.pc," ",(null==n.statistics?null:n.statistics.pc)<=1?"problema com cart\xe3o":"problemas com cart\xe3o"," "),c.zb(2),c.Ac("",null==n.statistics?null:n.statistics.ld," ligar depois"),c.zb(2),c.fc("ngForOf",c.bc(36,25,n.customers)),c.zb(12),c.fc("ngIf",n.parent.id)("ngIfElse",e),c.zb(5),c.fc("formGroup",n.form),c.zb(20),c.fc("ngForOf",n.status),c.zb(5),c.fc("ngIf",!n.form.value.id)("ngIfElse",i),c.zb(12),c.fc("formGroup",n.formScript),c.zb(7),c.fc("disabled",!n.formScript.valid),c.zb(8),c.Ac("Importanto contatos indicados do(a) ",n.parent.name," "),c.zb(3),c.fc("ngIf",0==n.customersImported.length),c.zb(1),c.fc("ngIf",0!=n.customersImported.length),c.zb(1),c.fc("ngIf",0==n.customersImported.length),c.zb(7),c.Ac("Ligando para ",n.person.name,""),c.zb(4),c.fc("formGroup",n.form),c.zb(5),c.fc("ngForOf",n.parents),c.zb(5),c.fc("ngForOf",null==n.strategy?null:n.strategy.staps)}},directives:[l.r,l.j,l.k,g.c,g.d,g.a,h.l,h.m,l.e,l.a,l.i,l.d,P.a,l.o,l.m,l.q,v.b,y.a],pipes:[h.g,P.b,h.f,M],styles:[".sellMore[_ngcontent-%COMP%]{min-height:100vh;width:100%;display:flex;flex-direction:column}.sellMore[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]{padding:15px;height:95px;width:100%}.sellMore[_ngcontent-%COMP%]   header[_ngcontent-%COMP%], .sellMore[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.sellMore[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{width:120px;height:100%}.sellMore[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]{flex:1}.sellMore[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%], .sellMore[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]{height:100%;display:flex;align-items:center;justify-content:center}.sellMore[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]{width:120px}.sellMore[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:56px;height:56px;border-radius:28px}.sellMore[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{padding:15px;flex:1;width:100%}.sellMore[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%]{position:fixed;padding:15px;height:95px;width:100%;justify-content:flex-end;bottom:0}.footerItens[_ngcontent-%COMP%], .sellMore[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%]{display:flex;align-items:center}.footerItens[_ngcontent-%COMP%]{width:80px;height:80px;border-radius:40px;background-color:var(--backgroundSecondary);color:var(--backgroundSecondaryColor);margin-left:10px;font-size:3em;justify-content:center;cursor:pointer;transition:.3s;z-index:998}.footerItens[_ngcontent-%COMP%]:hover{background-color:var(--backgroundSecondaryHover);font-size:3.1em}.totalLead[_ngcontent-%COMP%]{font-weight:700;font-size:28px}.totalOthers[_ngcontent-%COMP%]{font-weight:700;font-size:17px}.customers[_ngcontent-%COMP%]{width:422px;height:510px;background-color:var(--backgroundComponents);margin:15px;border-radius:10px;color:#efefed;display:flex;flex-direction:column}.parent[_ngcontent-%COMP%]{height:60px;width:100%;display:flex;flex-direction:row}.children[_ngcontent-%COMP%]{flex:1;padding:15px;overflow:auto}.info[_ngcontent-%COMP%]{height:70px;width:100%;display:flex}.parent[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]{display:flex;flex:1;justify-content:center;align-items:center;flex-direction:column}.parent[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{font-size:16px;font-weight:700}.parent[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   .finished[_ngcontent-%COMP%]{width:90px}.parent[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   .finished[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-right:10px}.parent[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   .waiting[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-left:10px}.waiting[_ngcontent-%COMP%]{width:160px}.children[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;margin-bottom:15px}.children[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .contacto[_ngcontent-%COMP%]{display:flex;flex:1;flex-direction:column}.children[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .contacto[_ngcontent-%COMP%]   .contacto-name[_ngcontent-%COMP%]{font-size:20px;font-weight:700}.children[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .contacto[_ngcontent-%COMP%]   .contacto-name[_ngcontent-%COMP%], .children[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .contacto[_ngcontent-%COMP%]   .contacto-phone[_ngcontent-%COMP%]{color:var(--backgroundSecondary)!important}.children[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .finished[_ngcontent-%COMP%]{width:50px}.children[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .finished[_ngcontent-%COMP%], .children[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .waiting[_ngcontent-%COMP%]{display:flex;align-items:flex-end;justify-content:flex-end}.children[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .waiting[_ngcontent-%COMP%]{width:145px}.children[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .waiting[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-left:10px}.info[_ngcontent-%COMP%]   .quantitative[_ngcontent-%COMP%]{margin-left:15px;flex:1;font-size:16px}.info[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]{width:70px;height:100%}.actionButton[_ngcontent-%COMP%], .info[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.actionButton[_ngcontent-%COMP%]{width:40px;height:40px;border-radius:20px;background-color:var(--backgroundSecondary);color:var(--backgroundSecondaryColor);font-size:20px;font-weight:700;cursor:pointer;transition:.3s;z-index:999}.actionButton[_ngcontent-%COMP%]:hover{background-color:var(--backgroundSecondaryHover)}.icon-finished[_ngcontent-%COMP%]{font-size:33px}.icon-finished-yes[_ngcontent-%COMP%]{color:var(--backgroundSecondary)}.icon-finished-no[_ngcontent-%COMP%]{color:#f88}.icon-waiting[_ngcontent-%COMP%]{font-size:20px;cursor:pointer}.icon-waiting-yes[_ngcontent-%COMP%]{color:var(--backgroundSecondary)}.icon-waiting-no[_ngcontent-%COMP%]{color:#f88}.fa-slash[_ngcontent-%COMP%]{margin-left:-150px}.textarea[_ngcontent-%COMP%]{width:100%;height:500px;border-radius:10px}.input[_ngcontent-%COMP%]{width:100%;height:62px;background:var(--backgroundInput)!important;color:var(--backgroundInputColor)!important;border-radius:10px;margin-bottom:15px}.input[_ngcontent-%COMP%], .inputIcon[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.inputIcon[_ngcontent-%COMP%]{width:35px}.inputText[_ngcontent-%COMP%]{flex:1}div.status[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-right:10px}.rowCall[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.person[_ngcontent-%COMP%]{flex:1;flex-direction:column}.strategy[_ngcontent-%COMP%]{flex:1;height:80vh;overflow:auto}.parentName[_ngcontent-%COMP%]{font-size:2em;font-weight:700}.parentPhone[_ngcontent-%COMP%]{font-size:1.2em}.parentDesc[_ngcontent-%COMP%]{font-size:1em}"]}),t})()}];let it=(()=>{class t{}return t.\u0275mod=c.Ib({type:t}),t.\u0275inj=c.Hb({factory:function(n){return new(n||t)},imports:[[i.a,o.d.forChild(et)]]}),t})()}}]);