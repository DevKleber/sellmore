(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{zULH:function(t,n,e){"use strict";e.r(n),e.d(n,"SellMoreModule",(function(){return nt}));var i=e("PCNd"),o=e("tyNb"),c=e("fXoL"),r=e("nWBu"),a=e("PSD3"),s=e.n(a),l=e("3Pt+"),b=e("tk/3");let d=(()=>{class t{constructor(t,n){this.http=t,this.router=n,this.mostrarMenu=new c.n}getCustomers(t){return this.http.get(r.a+"/customers")}getStrategy(){return this.http.get(r.a+"/strategy")}getAllParents(t){return this.http.get(`${r.a}/parents/customers/${t}`)}insertUpdateStrategy(t){return this.http.put(r.a+"/strategy",t)}changeStatus(t,n){return this.http.put(`${r.a}/status/customers/${n}`,t)}save(t){return this.http.post(r.a+"/customers",t)}inativar(t){return this.http.delete(`${r.a}/customers/${t}`)}file(t,n){return this.http.post(`${r.a}/import-contact/customers/${n}`,t)}}return t.\u0275fac=function(n){return new(n||t)(c.Ub(b.b),c.Ub(o.c))},t.\u0275prov=c.Gb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var u=e("e43+"),f=e("/D8a"),p=e("OaAl"),g=e("Cdxl"),m=e("STbY"),h=e("ofXK"),P=e("tmjD"),v=e("Kdsb"),y=e("Qu3c"),C=e("jhN1");let M=(()=>{class t{constructor(t){this._sanitizer=t}transform(t,n){switch(n){case"html":return this._sanitizer.bypassSecurityTrustHtml(t);case"style":return this._sanitizer.bypassSecurityTrustStyle(t);case"script":return this._sanitizer.bypassSecurityTrustScript(t);case"url":return this._sanitizer.bypassSecurityTrustUrl(t);case"resourceUrl":return this._sanitizer.bypassSecurityTrustResourceUrl(t);default:throw new Error("Unable to bypass security for invalid type: ")}}}return t.\u0275fac=function(n){return new(n||t)(c.Kb(C.b))},t.\u0275pipe=c.Jb({name:"safeHtml",type:t,pure:!0}),t})();function Q(t,n){1&t&&c.Lb(0,"i",90)}function O(t,n){1&t&&c.Lb(0,"i",91)}function w(t,n){1&t&&c.Lb(0,"i",92)}function _(t,n){1&t&&c.Lb(0,"i",93)}function x(t,n){if(1&t){const t=c.Rb();c.Ob(0),c.Qb(1,"div",78),c.wc(2,Q,1,0,"i",79),c.wc(3,O,1,0,"i",80),c.wc(4,w,1,0,"i",81),c.wc(5,_,1,0,"i",82),c.Lb(6,"i",83),c.Qb(7,"mat-menu",null,84),c.Qb(9,"button",85),c.Xb("click",(function(){c.pc(t);const n=c.Zb().$implicit;return c.Zb().newChildren(null==n?null:n.value)})),c.Lb(10,"i",86),c.yc(11," Importar contatos "),c.Pb(),c.Qb(12,"button",12),c.Qb(13,"a",87),c.Lb(14,"i",86),c.yc(15," Abrir no Whatsapp "),c.Pb(),c.Pb(),c.Qb(16,"button",12),c.Lb(17,"i",88),c.yc(18," Alterar "),c.Pb(),c.Qb(19,"button",14),c.Xb("click",(function(){c.pc(t);const n=c.Zb().$implicit;return c.Zb().inativar(n.value)})),c.Lb(20,"i",89),c.yc(21," Arquivar "),c.Pb(),c.Pb(),c.Pb(),c.Nb()}if(2&t){const t=c.nc(8),n=c.Zb().$implicit;c.zb(2),c.fc("ngIf","pc"==n.value.status),c.zb(1),c.fc("ngIf","ld"==n.value.status),c.zb(1),c.fc("ngIf","n"==n.value.status),c.zb(1),c.fc("ngIf","c"==n.value.status),c.zb(1),c.fc("matMenuTriggerFor",t),c.zb(7),c.hc("href","https://wa.me/55",null==n?null:n.value.phone,"",c.rc)}}function S(t,n){if(1&t){const t=c.Rb();c.Qb(0,"div",94),c.Qb(1,"i",95),c.Xb("click",(function(){c.pc(t);const n=c.Zb().$implicit;return c.Zb().changeStatus(n.value,"pc")})),c.Pb(),c.Qb(2,"i",96),c.Xb("click",(function(){c.pc(t);const n=c.Zb().$implicit;return c.Zb().changeStatus(n.value,"ld")})),c.Pb(),c.Qb(3,"i",97),c.Xb("click",(function(){c.pc(t);const n=c.Zb().$implicit;return c.Zb().changeStatus(n.value,"n")})),c.Pb(),c.Qb(4,"i",98),c.Xb("click",(function(){c.pc(t);const n=c.Zb().$implicit;return c.Zb().changeStatus(n.value,"c")})),c.Pb(),c.Lb(5,"i",99),c.Qb(6,"mat-menu",null,84),c.Qb(8,"button",85),c.Xb("click",(function(){c.pc(t);const n=c.Zb().$implicit;return c.Zb().newChildren(n.value)})),c.Lb(9,"i",86),c.yc(10," Importar contatos "),c.Pb(),c.Qb(11,"button",12),c.Qb(12,"a",87),c.Lb(13,"i",86),c.yc(14," Abrir no Whatsapp "),c.Pb(),c.Pb(),c.Qb(15,"button",12),c.Lb(16,"i",88),c.yc(17," Alterar "),c.Pb(),c.Qb(18,"button",14),c.Xb("click",(function(){c.pc(t);const n=c.Zb().$implicit;return c.Zb().inativar(n.value)})),c.Lb(19,"i",89),c.yc(20," Arquivar "),c.Pb(),c.Pb(),c.Pb()}if(2&t){const t=c.nc(7),n=c.Zb().$implicit;c.zb(5),c.fc("matMenuTriggerFor",t),c.zb(7),c.hc("href","https://wa.me/55",null==n?null:n.value.phone,"",c.rc)}}function z(t,n){1&t&&c.Lb(0,"i",90)}function L(t,n){1&t&&c.Lb(0,"i",109)}function k(t,n){1&t&&c.Lb(0,"i",92)}function I(t,n){1&t&&c.Lb(0,"i",93)}function A(t,n){if(1&t){const t=c.Rb();c.Ob(0),c.Qb(1,"div",78),c.wc(2,z,1,0,"i",79),c.wc(3,L,1,0,"i",105),c.wc(4,k,1,0,"i",81),c.wc(5,I,1,0,"i",82),c.Lb(6,"i",106),c.Qb(7,"mat-menu",null,84),c.Qb(9,"button",85),c.Xb("click",(function(){c.pc(t);const n=c.Zb().$implicit;return c.Zb(2).newChildren(null==n?null:n.value)})),c.Lb(10,"i",86),c.yc(11," Importar contatos "),c.Pb(),c.Qb(12,"button",12),c.Qb(13,"a",87),c.Lb(14,"i",86),c.yc(15," Abrir no Whatsapp "),c.Pb(),c.Pb(),c.Qb(16,"button",12),c.Lb(17,"i",88),c.yc(18," Alterar "),c.Pb(),c.Qb(19,"button",14),c.Xb("click",(function(){c.pc(t);const n=c.Zb().$implicit;return c.Zb(2).inativar(n.value)})),c.Lb(20,"i",89),c.yc(21," Arquivar "),c.Pb(),c.Qb(22,"button",107),c.Xb("click",(function(){c.pc(t);const n=c.Zb().$implicit;return c.Zb(2).newChildren(n.value)})),c.Lb(23,"i",108),c.yc(24," Tornar Lead "),c.Pb(),c.Pb(),c.Pb(),c.Nb()}if(2&t){const t=c.nc(8),n=c.Zb().$implicit;c.zb(2),c.fc("ngIf","pc"==n.value.status),c.zb(1),c.fc("ngIf","ld"==n.value.status),c.zb(1),c.fc("ngIf","n"==n.value.status),c.zb(1),c.fc("ngIf","c"==n.value.status),c.zb(1),c.fc("matMenuTriggerFor",t),c.zb(7),c.hc("href","https://wa.me/55",null==n?null:n.value.phone,"",c.rc)}}function Z(t,n){if(1&t){const t=c.Rb();c.Qb(0,"div",94),c.Qb(1,"i",95),c.Xb("click",(function(){c.pc(t);const n=c.Zb().$implicit;return c.Zb(2).changeStatus(n.value,"pc")})),c.Pb(),c.Qb(2,"i",96),c.Xb("click",(function(){c.pc(t);const n=c.Zb().$implicit;return c.Zb(2).changeStatus(n.value,"ld")})),c.Pb(),c.Qb(3,"i",97),c.Xb("click",(function(){c.pc(t);const n=c.Zb().$implicit;return c.Zb(2).changeStatus(n.value,"n")})),c.Pb(),c.Qb(4,"i",98),c.Xb("click",(function(){c.pc(t);const n=c.Zb().$implicit;return c.Zb(2).changeStatus(n.value,"c")})),c.Pb(),c.Lb(5,"i",110),c.Qb(6,"mat-menu",null,84),c.Qb(8,"button",85),c.Xb("click",(function(){c.pc(t);const n=c.Zb().$implicit;return c.Zb(2).newChildren(null==n?null:n.value)})),c.Lb(9,"i",86),c.yc(10," Importar contatos "),c.Pb(),c.Qb(11,"button",12),c.Qb(12,"a",87),c.Lb(13,"i",86),c.yc(14," Abrir no Whatsapp "),c.Pb(),c.Pb(),c.Qb(15,"button",12),c.Lb(16,"i",88),c.yc(17," Alterar "),c.Pb(),c.Qb(18,"button",14),c.Xb("click",(function(){c.pc(t);const n=c.Zb().$implicit;return c.Zb(2).inativar(n.value)})),c.Lb(19,"i",89),c.yc(20," Arquivar "),c.Pb(),c.Qb(21,"button",107),c.Xb("click",(function(){c.pc(t);const n=c.Zb().$implicit;return c.Zb(2).newChildren(n.value)})),c.Lb(22,"i",108),c.yc(23," Tornar Lead "),c.Pb(),c.Pb(),c.Pb()}if(2&t){const t=c.nc(7),n=c.Zb().$implicit;c.zb(5),c.fc("matMenuTriggerFor",t),c.zb(7),c.hc("href","https://wa.me/55",null==n?null:n.value.phone,"",c.rc)}}function F(t,n){if(1&t){const t=c.Rb();c.Qb(0,"div",100),c.Qb(1,"div",101),c.Xb("click",(function(){c.pc(t);const e=n.$implicit;return c.Zb(2).callTo(e.value)})),c.Qb(2,"span"),c.Qb(3,"div",102),c.yc(4),c.Pb(),c.Qb(5,"div",103),c.yc(6),c.ac(7,"mask"),c.Pb(),c.Pb(),c.Pb(),c.wc(8,A,25,6,"ng-container",31),c.wc(9,Z,24,2,"ng-template",null,104,c.xc),c.Pb()}if(2&t){const t=n.$implicit,e=c.nc(10);c.zb(4),c.Ac(" ",t.value.name," "),c.zb(2),c.Ac(" ",c.cc(7,4,t.value.phone,"(00)00000-0000")," "),c.zb(2),c.fc("ngIf","a"!=t.value.status)("ngIfElse",e)}}function $(t,n){if(1&t){const t=c.Rb();c.Ob(0),c.Qb(1,"div",111),c.Xb("click",(function(){c.pc(t);const n=c.Zb().$implicit;return c.Zb().newChildren(n.value)})),c.Lb(2,"i",25),c.Pb(),c.Nb()}}function T(t,n){if(1&t){const t=c.Rb();c.Qb(0,"div",111),c.Xb("click",(function(){c.pc(t);const n=c.Zb().$implicit;return c.Zb().update(n.value)})),c.Lb(1,"i",25),c.Pb()}}function X(t,n){if(1&t&&(c.Qb(0,"div",66),c.Qb(1,"div",67),c.Qb(2,"div",68),c.Qb(3,"div",69),c.yc(4),c.Pb(),c.Qb(5,"div",70),c.yc(6),c.ac(7,"mask"),c.Pb(),c.Pb(),c.Qb(8,"div",71),c.wc(9,x,22,6,"ng-container",31),c.wc(10,S,21,2,"ng-template",null,72,c.xc),c.Pb(),c.Pb(),c.Qb(12,"perfect-scrollbar"),c.Qb(13,"div",73),c.wc(14,F,11,7,"div",74),c.ac(15,"keyvalue"),c.Pb(),c.Pb(),c.Qb(16,"div",75),c.Qb(17,"div",76),c.yc(18),c.ac(19,"json"),c.Lb(20,"br"),c.yc(21," 3 \xe0 contactar "),c.Pb(),c.Qb(22,"div",71),c.wc(23,$,3,0,"ng-container",31),c.wc(24,T,2,0,"ng-template",null,77,c.xc),c.Pb(),c.Pb(),c.Pb()),2&t){const t=n.$implicit,e=c.nc(11),i=c.nc(25);c.zb(4),c.zc(null==t?null:t.value.name),c.zb(2),c.Ac(" ",c.cc(7,8,null==t?null:t.value.phone,"(00)00000-0000")," "),c.zb(3),c.fc("ngIf","a"!=(null==t?null:t.value.status))("ngIfElse",e),c.zb(5),c.fc("ngForOf",c.bc(15,11,t.value.referidos)),c.zb(4),c.Ac(" ",c.bc(19,13,t.value.referidos.length)," referidos "),c.zb(5),c.fc("ngIf",!0)("ngIfElse",i)}}function N(t,n){if(1&t&&(c.Ob(0),c.Qb(1,"p"),c.yc(2),c.Pb(),c.Nb()),2&t){const t=c.Zb();c.zb(2),c.Ac(" Cadastre abaixo os indicados do(a) ",t.parent.name," ")}}function B(t,n){1&t&&c.yc(0," Novo referido ")}function q(t,n){if(1&t&&(c.Qb(0,"option",112),c.yc(1),c.Pb()),2&t){const t=n.$implicit;c.fc("value",t.id),c.zb(1),c.Ac(" ",null==t?null:t.status," ")}}function j(t,n){if(1&t){const t=c.Rb();c.Qb(0,"span"),c.Qb(1,"h2"),c.yc(2),c.Pb(),c.Qb(3,"div",113),c.Qb(4,"input",114,115),c.Xb("change",(function(n){return c.pc(t),c.Zb().onFileChanged(n)})),c.Pb(),c.Qb(6,"div",116),c.ac(7,"safeHtml"),c.Pb(),c.Qb(8,"button",117),c.Xb("click",(function(){return c.pc(t),c.nc(5).click()})),c.yc(9," Anexar arquivo "),c.Pb(),c.Pb(),c.Pb()}if(2&t){const t=c.Zb();c.zb(2),c.Ac("Anexe o arquivo baixado na conversa com o(a) ",t.parent.name," "),c.zb(4),c.vc("background-image",c.cc(7,3,"url("+t.img+" )","style"))}}function V(t,n){if(1&t&&(c.Qb(0,"div",121),c.yc(1),c.Lb(2,"br"),c.yc(3),c.Pb()),2&t){const t=n.$implicit;c.zb(1),c.Ac(" ",null==t?null:t.name," "),c.zb(2),c.Ac(" ",null==t?null:t.phone," ")}}function E(t,n){if(1&t&&(c.Qb(0,"p"),c.yc(1),c.Pb()),2&t){const t=n.$implicit;c.zb(1),c.Ac(" ",t," ")}}function R(t,n){if(1&t&&(c.Ob(0),c.Qb(1,"div",118),c.Qb(2,"h3"),c.yc(3),c.Pb(),c.wc(4,V,4,2,"div",119),c.Pb(),c.Qb(5,"div",120),c.Qb(6,"h3"),c.yc(7),c.Pb(),c.wc(8,E,2,1,"p",65),c.Pb(),c.Nb()),2&t){const t=c.Zb();c.zb(3),c.Ac("Importado ",null==t.customersImported?null:t.customersImported.res.length,""),c.zb(1),c.fc("ngForOf",null==t.customersImported?null:t.customersImported.res),c.zb(3),c.Ac("Indicado por outro lead ",null==t.customersImported?null:t.customersImported.repetidos.length,""),c.zb(1),c.fc("ngForOf",null==t.customersImported?null:t.customersImported.repetidos)}}function K(t,n){if(1&t){const t=c.Rb();c.Qb(0,"div",46),c.Qb(1,"button",122),c.Xb("click",(function(){c.pc(t);const n=c.Zb();return n.importContact(n.formScript.value)})),c.yc(2," Importar "),c.Pb(),c.Pb()}}function U(t,n){1&t&&c.Lb(0,"i",90)}function D(t,n){1&t&&c.Lb(0,"i",91)}function H(t,n){1&t&&c.Lb(0,"i",92)}function W(t,n){1&t&&c.Lb(0,"i",93)}function G(t,n){if(1&t&&(c.Qb(0,"span"),c.wc(1,U,1,0,"i",79),c.wc(2,D,1,0,"i",80),c.wc(3,H,1,0,"i",81),c.wc(4,W,1,0,"i",82),c.Pb()),2&t){const t=c.Zb().$implicit;c.zb(1),c.fc("ngIf","pc"==t.status),c.zb(1),c.fc("ngIf","ld"==t.status),c.zb(1),c.fc("ngIf","n"==t.status),c.zb(1),c.fc("ngIf","c"==t.status)}}function J(t,n){if(1&t&&(c.Qb(0,"div",123),c.Qb(1,"div"),c.Qb(2,"div",124),c.Lb(3,"i",125),c.yc(4),c.wc(5,G,5,4,"span",57),c.Pb(),c.Qb(6,"div",126),c.yc(7),c.ac(8,"mask"),c.Pb(),c.Qb(9,"div",127),c.yc(10),c.Pb(),c.Pb(),c.Pb()),2&t){const t=n.$implicit,e=n.index;c.zb(1),c.vc("margin-left",20*e,"px"),c.zb(3),c.Ac(" ",t.name," "),c.zb(1),c.fc("ngIf","a"!=t.status),c.zb(2),c.Ac(" ",c.cc(8,6,t.phone,"(00)00000-0000")," "),c.zb(3),c.Ac(" ",t.observation," ")}}function Y(t,n){if(1&t&&(c.Qb(0,"span"),c.yc(1),c.Lb(2,"br"),c.Pb()),2&t){const t=n.$implicit;c.zb(1),c.Ac(" ",t," ")}}const tt=[{path:"",component:(()=>{class t{constructor(t,n,e,i,o,a){this.sellMoreService=t,this.loginService=n,this.formBuilder=e,this.helper=i,this.notificationService=o,this.loaderService=a,this.customers=[],this.status=[{id:"pc",status:"Problemas com cart\xe3o"},{id:"ld",status:"Ligar depois"},{id:"n",status:"N\xe3o tem interesse"},{id:"c",status:"Comprou"}],this.customersImported=[],this.person={},this.parent={},this.parents=[],this.strategy={},this.path=r.b,this.isDevMode=Object(c.V)(),this.img="assets/img/file/search.svg"}ngOnInit(){this.getCustomers(),this.getStrategy(),this.initialForms()}initialForms(){this.form=this.formBuilder.group({id:this.formBuilder.control(null),name:this.formBuilder.control("",[l.o.required]),phone:this.formBuilder.control("",[l.o.required]),address:this.formBuilder.control(""),status:this.formBuilder.control(""),observation:this.formBuilder.control(""),id_parent:this.formBuilder.control(null)}),this.formScript=this.formBuilder.group({strategy:this.formBuilder.control("",[l.o.required])})}getCustomers(){this.loaderService.isLoad(!0),this.sellMoreService.getCustomers().subscribe(t=>{this.loaderService.isLoad(!1),this.customers=t.dados})}getStrategy(){this.loaderService.isLoad(!0),this.sellMoreService.getStrategy().subscribe(t=>{this.loaderService.isLoad(!1),this.strategy=t.dados,this.strategy.staps=t.nl2br,this.formScript.controls.strategy.setValue(this.strategy.strategy)})}updateOpenForm(t){this.form.controls.id.setValue(t.id),this.form.controls.name.setValue(t.name),this.form.controls.phone.setValue(t.phone),this.form.controls.address.setValue(t.address),this.form.controls.status.setValue(t.status),this.form.controls.observation.setValue(t.observation),this.form.controls.id_parent.setValue(t.id_parent)}update(t){this.loaderService.isLoad(!0),this.sellMoreService.save(t).subscribe(t=>{this.notificationService.notifySweet("Salvo com sucesso!"),this.clearForm(),this.getCustomers(),this.loaderService.isLoad(!1)})}save(t){this.loaderService.isLoad(!0),this.sellMoreService.save(t).subscribe(t=>{this.notificationService.notifySweet("Salvo com sucesso!"),this.clearForm(),this.getCustomers(),this.loaderService.isLoad(!1)})}saveStrategy(t){this.loaderService.isLoad(!0),this.sellMoreService.insertUpdateStrategy(t).subscribe(t=>{this.notificationService.notifySweet("Salvo com sucesso!"),this.loaderService.isLoad(!1)})}changeStatus(t,n){this.loaderService.isLoad(!0),this.sellMoreService.changeStatus({status:n},t.id).subscribe(e=>{this.loaderService.isLoad(!1),t.status=n,this.notificationService.notifySweet("Atualizado!")})}callTo(t){this.loaderService.isLoad(!0),this.person=t,this.sellMoreService.getAllParents(t.id_parent).subscribe(t=>{this.loaderService.isLoad(!1),this.parents=t})}newChildren(t){this.parent=t,this.customersImported=[],this.form.controls.id_parent.setValue(t.id),console.log(t)}newLead(){this.form.controls.id_parent.setValue(null),this.parent={}}clearForm(){this.form.controls.name.setValue(""),this.form.controls.phone.setValue(""),this.form.controls.address.setValue(""),this.form.controls.status.setValue(""),this.form.controls.observation.setValue("")}onFileChanged(t){const n=this.helper.onFileChanged(t);n?(this.img=n.img,this.selectedFile=n.selectedFile):this.notificationService.notifySweet("Arquivo n\xe3o permitido!")}importContact(){this.loaderService.isLoad(!0);const t=new FormData;this.selectedFile||(this.notificationService.notifyError("Anexe um arquivo!"),this.loaderService.isLoad(!1)),this.selectedFile&&(t.append("imagem",this.selectedFile,this.selectedFile.name),this.sellMoreService.file(t,this.parent.id).subscribe(t=>{console.log(t),this.customersImported=t,this.getCustomers(),this.loaderService.isLoad(!1)}))}inativar(t){let n=!1;Object.entries(this.customers).forEach(e=>{if(e[1].id===t.id)return n=!0,!0}),console.log(n),s.a.fire({title:`Arquivar ${t.name} ?`,text:n?`Aten\xe7\xe3o, a pessoa escolhida \xe9, tamb\xe9m, um lead e possui referidos em sua cadeia de conex\xf5es (card). Se prosseguir com o arquivamento do(a) ${t.name}, o seu card ser\xe1 ocultado por completo. Esta a\xe7\xe3o n\xe3o altera os referidos que se tornaram lead. Deseja prosseguir?`:"",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Sim, arquivar!"}).then(n=>{n.isConfirmed&&(this.loaderService.isLoad(!0),this.sellMoreService.inativar(t.id).subscribe(t=>{this.loaderService.isLoad(!1),this.notificationService.notifySweet(t.response)}))})}logout(){this.loginService.logout()}}return t.\u0275fac=function(n){return new(n||t)(c.Kb(d),c.Kb(u.a),c.Kb(l.c),c.Kb(f.a),c.Kb(p.a),c.Kb(g.a))},t.\u0275cmp=c.Eb({type:t,selectors:[["app-sell-more"]],decls:124,vars:19,consts:[[1,"sellMore"],[1,"logo"],["src","/assets/img/system/sellmore.webp","width","55px"],[1,"search"],[1,"input",2,"width","490px !important"],[1,"inputIcon"],[1,"fa","fa-search"],[1,"inputText"],["type","text","placeholder","Buscar",1,"w-100"],[1,"profile"],["src","/assets/img/user/user.png","alt","","width","55px",1,"cursor-pointer",3,"matMenuTriggerFor"],["profile","matMenu"],["mat-menu-item",""],[1,"fas","fa-id-card-alt"],["mat-menu-item","",3,"click"],[1,"fas","fa-sign-out-alt"],[1,"content","pad40"],[1,"row","flex-direction-column"],[1,"totalLead"],[1,"totalOthers"],[1,"row","flex-wrap"],["class","customers",4,"ngFor","ngForOf"],["data-toggle","modal","data-target","#modalScriptAdd",1,"footerItens",3,"click"],[1,"fa","fa-receipt"],["data-toggle","modal","data-target","#modalStickyAdd",1,"footerItens",3,"click"],[1,"fa","fa-plus"],["id","modalStickyAdd","tabindex","-1","aria-labelledby","modalNewSticky","aria-hidden","true",1,"modal","fade"],[1,"modal-dialog"],[1,"modal-content"],[1,"modal-header"],["id","modalNewSticky",1,"modal-title"],[4,"ngIf","ngIfElse"],["indicatedBy",""],[1,"modal-body"],[1,"content"],["novalidate","",3,"formGroup"],[1,"input"],[1,"fa","fa-user"],["type","text","formControlName","name","placeholder","Nome",1,"w-100"],[1,"fa","fa-mobile-alt"],["type","text","formControlName","phone","placeholder","Telefone","mask","(00)00000-0000",1,"w-100"],["placeholder","Observa\xe7\xe3o","formControlName","observation",1,"textarea"],[1,"fa","fa-info"],["formControlName","status",1,"w-100"],["value","","selected",""],[3,"value",4,"ngFor","ngForOf"],[1,"modal-footer"],["type","button","data-dismiss","modal",1,"btn","btn-secondary"],["closemodalStickyAdd",""],["type","button",1,"btn","btn-primary",3,"disabled","click"],["id","modalScriptAdd","tabindex","-1","aria-labelledby","modalNewScript","aria-hidden","true",1,"modal","fade"],[1,"modal-dialog","modal-exlg"],["id","modalNewScript",1,"modal-title"],["placeholder","Estrat\xe9gia","formControlName","strategy",1,"textarea"],["closemodalScriptAdd",""],["id","modalImportContact","tabindex","-1","aria-labelledby","modalNewImportContact","aria-hidden","true",1,"modal","fade"],["id","modalNewImportContact",1,"modal-title"],[4,"ngIf"],["class","modal-footer",4,"ngIf"],["id","modalCall","tabindex","-1","aria-labelledby","modalStapcall","aria-hidden","true",1,"modal","fade"],["id","modalStapcall",1,"modal-title"],[1,"content","rowCall"],[1,"person"],["class","tree margint-25",4,"ngFor","ngForOf"],[1,"strategy"],[4,"ngFor","ngForOf"],[1,"customers"],[1,"parent","center-center"],[1,"contact"],[1,"name"],[1,"phone"],[1,"action"],["waiting",""],[1,"children"],["class","item",4,"ngFor","ngForOf"],[1,"info","center-center"],[1,"quantitative"],["elseTemplateUpdate",""],[1,"finished"],["class","fa fa-credit-card icon-finished icon-finished-no",4,"ngIf"],["class","fa fa-headset icon-finished",4,"ngIf"],["class","fa fa-thumbs-down icon-finished icon-finished-no",4,"ngIf"],["class","fa fa-thumbs-up icon-finished icon-finished-yes",4,"ngIf"],["matTooltip","Menu",1,"fa","fa-bars","icon-finished","cursor-pointer",3,"matMenuTriggerFor"],["menu","matMenu"],["mat-menu-item","","data-toggle","modal","data-target","#modalImportContact",3,"click"],[1,"fab","fa-whatsapp"],["target","_BLANK",3,"href"],[1,"fas","fa-edit"],[1,"fas","fa-eye-slash"],[1,"fa","fa-credit-card","icon-finished","icon-finished-no"],[1,"fa","fa-headset","icon-finished"],[1,"fa","fa-thumbs-down","icon-finished","icon-finished-no"],[1,"fa","fa-thumbs-up","icon-finished","icon-finished-yes"],[1,"waiting"],["matTooltip","Problemas com cart\xe3o de cr\xe9dito",1,"fa","fa-credit-card","icon-waiting",3,"click"],["matTooltip","Ligar depois",1,"fa","fa-headset","icon-waiting",3,"click"],["matTooltip","N\xe3o deu neg\xf3cio \ud83d\ude2d",1,"fa","fa-thumbs-down","icon-waiting",3,"click"],["matTooltip","Vendido \ud83d\ude03",1,"fa","fa-thumbs-up","icon-waiting",3,"click"],["matTooltip","Menu",1,"fa","fa-bars","icon-waiting","cursor-pointer",3,"matMenuTriggerFor"],[1,"item"],["data-toggle","modal","data-target","#modalCall",1,"contacto","cursor-pointer",3,"click"],[1,"contacto-name"],[1,"contacto-phone"],["waitingChildren",""],["class","fa fa-headset icon-finished icon-finished-no",4,"ngIf"],["matTooltip","Menu",1,"fa","fa-bars","icon-finished",2,"margin-left","15px",3,"matMenuTriggerFor"],["mat-menu-item","","data-toggle","modal","data-target","#modalStickyAdd",3,"click"],[1,"fa","fa-chalkboard-teacher"],[1,"fa","fa-headset","icon-finished","icon-finished-no"],["matTooltip","Menu",1,"fa","fa-bars","icon-waiting",3,"matMenuTriggerFor"],["data-toggle","modal","data-target","#modalStickyAdd",1,"actionButton",3,"click"],[3,"value"],[1,"form-group","margint-25"],["type","file",2,"display","none",3,"change"],["fileInput",""],[1,"uploadArquivo"],[1,"btn","btn-upload","btn-secondary",3,"click"],[1,"card",2,"background","transparent","color","var(--backgroundColor)","margin-bottom","15px"],["style","margin-top: 15px;",4,"ngFor","ngForOf"],[1,"card",2,"background","transparent","color","var(--backgroundColor)"],[2,"margin-top","15px"],["type","button",1,"btn","btn-primary",3,"click"],[1,"tree","margint-25"],[1,"parentName"],[1,"fa","fa-folder-open"],[1,"parentPhone"],[1,"parentDesc"]],template:function(t,n){if(1&t&&(c.Qb(0,"div",0),c.Qb(1,"header"),c.Qb(2,"div",1),c.Lb(3,"img",2),c.Pb(),c.Qb(4,"div",3),c.Qb(5,"div",4),c.Qb(6,"div",5),c.Lb(7,"i",6),c.Pb(),c.Qb(8,"div",7),c.Lb(9,"input",8),c.Pb(),c.Pb(),c.Pb(),c.Qb(10,"div",9),c.Lb(11,"img",10),c.Pb(),c.Qb(12,"mat-menu",null,11),c.Qb(14,"button",12),c.Lb(15,"i",13),c.yc(16," Perfil "),c.Pb(),c.Qb(17,"button",14),c.Xb("click",(function(){return n.logout()})),c.Lb(18,"i",15),c.yc(19," Sair "),c.Pb(),c.Pb(),c.Pb(),c.Qb(20,"div",16),c.Qb(21,"div",17),c.Qb(22,"div",18),c.yc(23,"78 referidos \xe0 contactar"),c.Pb(),c.Qb(24,"div",19),c.yc(25,"3 vendas"),c.Pb(),c.Qb(26,"div",19),c.yc(27,"7 problemas com cart\xe3o"),c.Pb(),c.Pb(),c.Qb(28,"div",20),c.wc(29,X,26,15,"div",21),c.ac(30,"keyvalue"),c.Pb(),c.Pb(),c.Qb(31,"footer"),c.Qb(32,"div",22),c.Xb("click",(function(){return n.newLead()})),c.Lb(33,"i",23),c.Pb(),c.Qb(34,"div",24),c.Xb("click",(function(){return n.newLead()})),c.Lb(35,"i",25),c.Pb(),c.Pb(),c.Pb(),c.Qb(36,"div",26),c.Qb(37,"div",27),c.Qb(38,"div",28),c.Qb(39,"div",29),c.Qb(40,"h3",30),c.wc(41,N,3,1,"ng-container",31),c.wc(42,B,1,0,"ng-template",null,32,c.xc),c.Pb(),c.Pb(),c.Qb(44,"div",33),c.Qb(45,"div",34),c.Qb(46,"form",35),c.Qb(47,"div",36),c.Qb(48,"div",5),c.Lb(49,"i",37),c.Pb(),c.Qb(50,"div",7),c.Lb(51,"input",38),c.Pb(),c.Pb(),c.Qb(52,"div",36),c.Qb(53,"div",5),c.Lb(54,"i",39),c.Pb(),c.Qb(55,"div",7),c.Lb(56,"input",40),c.Pb(),c.Pb(),c.Qb(57,"textarea",41),c.yc(58,"\t\t\t\t\t\t"),c.Pb(),c.Qb(59,"div",36),c.Qb(60,"div",5),c.Lb(61,"i",42),c.Pb(),c.Qb(62,"div",7),c.Qb(63,"select",43),c.Qb(64,"option",44),c.yc(65," Selecione uma op\xe7\xe3o caso tenha entrado em contato com o referente "),c.Pb(),c.wc(66,q,2,2,"option",45),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Qb(67,"div",46),c.Qb(68,"button",47,48),c.yc(70," Fechar "),c.Pb(),c.Qb(71,"button",49),c.Xb("click",(function(){return n.save(n.form.value)})),c.yc(72," Salvar "),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Qb(73,"div",50),c.Qb(74,"div",51),c.Qb(75,"div",28),c.Qb(76,"div",29),c.Qb(77,"h3",52),c.Qb(78,"p"),c.yc(79,"Roteiro"),c.Pb(),c.Pb(),c.Pb(),c.Qb(80,"div",33),c.Qb(81,"div",34),c.Qb(82,"form",35),c.Qb(83,"textarea",53),c.yc(84,"\t\t\t\t\t\t"),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Qb(85,"div",46),c.Qb(86,"button",47,54),c.yc(88," Fechar "),c.Pb(),c.Qb(89,"button",49),c.Xb("click",(function(){return n.saveStrategy(n.formScript.value)})),c.yc(90," Salvar "),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Qb(91,"div",55),c.Qb(92,"div",27),c.Qb(93,"div",28),c.Qb(94,"div",29),c.Qb(95,"h3",56),c.Qb(96,"p"),c.yc(97),c.Pb(),c.Pb(),c.Pb(),c.Qb(98,"div",33),c.Qb(99,"div",34),c.wc(100,j,10,6,"span",57),c.wc(101,R,9,4,"ng-container",57),c.Pb(),c.Pb(),c.wc(102,K,3,0,"div",58),c.Pb(),c.Pb(),c.Pb(),c.Qb(103,"div",59),c.Qb(104,"div",51),c.Qb(105,"div",28),c.Qb(106,"div",29),c.Qb(107,"h2",60),c.Qb(108,"p"),c.yc(109),c.Pb(),c.Pb(),c.Pb(),c.Qb(110,"div",33),c.Qb(111,"p"),c.yc(112),c.Pb(),c.Lb(113,"br"),c.Qb(114,"b"),c.yc(115,"\xc1rvores de indica\xe7\xf5es"),c.Pb(),c.Qb(116,"div",61),c.Qb(117,"div",62),c.wc(118,J,11,9,"div",63),c.Pb(),c.Qb(119,"div",64),c.Qb(120,"perfect-scrollbar"),c.Qb(121,"h1"),c.yc(122,"Strategy"),c.Pb(),c.wc(123,Y,3,1,"span",65),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Pb()),2&t){const t=c.nc(13),e=c.nc(43);c.zb(11),c.fc("matMenuTriggerFor",t),c.zb(18),c.fc("ngForOf",c.bc(30,17,n.customers)),c.zb(12),c.fc("ngIf",n.parent.id)("ngIfElse",e),c.zb(5),c.fc("formGroup",n.form),c.zb(20),c.fc("ngForOf",n.status),c.zb(5),c.fc("disabled",!n.form.valid),c.zb(11),c.fc("formGroup",n.formScript),c.zb(7),c.fc("disabled",!n.formScript.valid),c.zb(8),c.Ac("Importanto contatos indicados do(a) ",n.parent.name," "),c.zb(3),c.fc("ngIf",0==n.customersImported.length),c.zb(1),c.fc("ngIf",0!=n.customersImported.length),c.zb(1),c.fc("ngIf",0==n.customersImported.length),c.zb(7),c.Ac("Ligando para ",n.person.name,""),c.zb(3),c.Ac("Observa\xe7\xe3o: ",n.person.observation,""),c.zb(6),c.fc("ngForOf",n.parents),c.zb(5),c.fc("ngForOf",null==n.strategy?null:n.strategy.staps)}},directives:[m.c,m.d,m.a,h.l,h.m,l.q,l.j,l.e,l.a,l.i,l.d,P.a,l.n,l.l,l.p,v.b,y.a],pipes:[h.g,P.b,h.f,M],styles:[".sellMore[_ngcontent-%COMP%]{min-height:100vh;width:100%;display:flex;flex-direction:column}.sellMore[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]{padding:15px;height:95px;width:100%}.sellMore[_ngcontent-%COMP%]   header[_ngcontent-%COMP%], .sellMore[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.sellMore[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{width:120px;height:100%}.sellMore[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]{flex:1}.sellMore[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%], .sellMore[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]{height:100%;display:flex;align-items:center;justify-content:center}.sellMore[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]{width:120px}.sellMore[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:56px;height:56px;border-radius:28px}.sellMore[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{padding:15px;flex:1;width:100%}.sellMore[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%]{position:fixed;padding:15px;height:95px;width:100%;justify-content:flex-end;bottom:0}.footerItens[_ngcontent-%COMP%], .sellMore[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%]{display:flex;align-items:center}.footerItens[_ngcontent-%COMP%]{width:80px;height:80px;border-radius:40px;background-color:var(--backgroundSecondary);color:var(--backgroundSecondaryColor);margin-left:10px;font-size:3em;justify-content:center;cursor:pointer;transition:.3s;z-index:998}.footerItens[_ngcontent-%COMP%]:hover{background-color:var(--backgroundSecondaryHover);font-size:3.1em}.totalLead[_ngcontent-%COMP%]{font-weight:700;font-size:28px}.totalOthers[_ngcontent-%COMP%]{font-weight:700;font-size:17px}.customers[_ngcontent-%COMP%]{width:422px;height:510px;background-color:var(--backgroundComponents);margin:15px;border-radius:10px;color:#efefed;display:flex;flex-direction:column}.parent[_ngcontent-%COMP%]{height:60px;width:100%;display:flex;flex-direction:row}.children[_ngcontent-%COMP%]{flex:1;padding:15px;overflow:auto}.info[_ngcontent-%COMP%]{height:70px;width:100%;display:flex}.parent[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]{display:flex;flex:1;justify-content:center;align-items:center;flex-direction:column}.parent[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{font-size:16px;font-weight:700}.parent[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   .finished[_ngcontent-%COMP%]{width:90px}.parent[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   .finished[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-right:10px}.parent[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   .waiting[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-left:10px}.waiting[_ngcontent-%COMP%]{width:160px}.children[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;margin-bottom:15px}.children[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .contacto[_ngcontent-%COMP%]{display:flex;flex:1;flex-direction:column}.children[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .contacto[_ngcontent-%COMP%]   .contacto-name[_ngcontent-%COMP%]{font-size:20px;font-weight:700}.children[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .contacto[_ngcontent-%COMP%]   .contacto-name[_ngcontent-%COMP%], .children[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .contacto[_ngcontent-%COMP%]   .contacto-phone[_ngcontent-%COMP%]{color:var(--backgroundSecondary)!important}.children[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .finished[_ngcontent-%COMP%]{width:50px}.children[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .finished[_ngcontent-%COMP%], .children[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .waiting[_ngcontent-%COMP%]{display:flex;align-items:flex-end;justify-content:flex-end}.children[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .waiting[_ngcontent-%COMP%]{width:145px}.children[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .waiting[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-left:10px}.info[_ngcontent-%COMP%]   .quantitative[_ngcontent-%COMP%]{margin-left:15px;flex:1;font-size:16px}.info[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]{width:70px;height:100%}.actionButton[_ngcontent-%COMP%], .info[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.actionButton[_ngcontent-%COMP%]{width:40px;height:40px;border-radius:20px;background-color:var(--backgroundSecondary);color:var(--backgroundSecondaryColor);font-size:20px;font-weight:700;cursor:pointer;transition:.3s;z-index:999}.actionButton[_ngcontent-%COMP%]:hover{background-color:var(--backgroundSecondaryHover)}.icon-finished[_ngcontent-%COMP%]{font-size:33px}.icon-finished-yes[_ngcontent-%COMP%]{color:var(--backgroundSecondary)}.icon-finished-no[_ngcontent-%COMP%]{color:#f88}.icon-waiting[_ngcontent-%COMP%]{font-size:20px;cursor:pointer}.icon-waiting-yes[_ngcontent-%COMP%]{color:var(--backgroundSecondary)}.icon-waiting-no[_ngcontent-%COMP%]{color:#f88}.fa-slash[_ngcontent-%COMP%]{margin-left:-150px}.textarea[_ngcontent-%COMP%]{width:100%;height:500px;border-radius:10px}.input[_ngcontent-%COMP%]{width:100%;height:62px;background:var(--backgroundInput)!important;color:var(--backgroundInputColor)!important;border-radius:10px;margin-bottom:15px}.input[_ngcontent-%COMP%], .inputIcon[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.inputIcon[_ngcontent-%COMP%]{width:35px}.inputText[_ngcontent-%COMP%]{flex:1}div.status[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-right:10px}.rowCall[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.person[_ngcontent-%COMP%]{flex:1;flex-direction:column}.strategy[_ngcontent-%COMP%]{flex:1;height:80vh;overflow:auto}.parentName[_ngcontent-%COMP%]{font-size:2em;font-weight:700}.parentPhone[_ngcontent-%COMP%]{font-size:1.2em}.parentDesc[_ngcontent-%COMP%]{font-size:1em}"]}),t})()}];let nt=(()=>{class t{}return t.\u0275mod=c.Ib({type:t}),t.\u0275inj=c.Hb({factory:function(n){return new(n||t)},imports:[[i.a,o.d.forChild(tt)]]}),t})()}}]);