(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{zULH:function(t,n,e){"use strict";e.r(n),e.d(n,"SellMoreModule",(function(){return K}));var i=e("PCNd"),o=e("tyNb"),c=e("fXoL"),a=e("nWBu"),r=e("3Pt+"),s=e("tk/3");let l=(()=>{class t{constructor(t,n){this.http=t,this.router=n,this.mostrarMenu=new c.n}getCustomers(t){return this.http.get(a.a+"/customers")}getStrategy(){return this.http.get(a.a+"/strategy")}getAllParents(t){return this.http.get(`${a.a}/parents/customers/${t}`)}insertUpdateStrategy(t){return this.http.put(a.a+"/strategy",t)}changeStatus(t,n){return this.http.put(`${a.a}/status/customers/${n}`,t)}save(t){return this.http.post(a.a+"/customers",t)}inativar(t){return this.http.delete(`${a.a}/premio/${t}`)}}return t.\u0275fac=function(n){return new(n||t)(c.Ub(s.b),c.Ub(o.c))},t.\u0275prov=c.Gb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var b=e("/D8a"),d=e("OaAl"),f=e("Cdxl"),g=e("ofXK"),u=e("tmjD"),p=e("Kdsb"),h=e("Qu3c"),m=e("STbY");function P(t,n){1&t&&c.Lb(0,"i",74)}function v(t,n){1&t&&c.Lb(0,"i",75)}function M(t,n){1&t&&c.Lb(0,"i",76)}function C(t,n){1&t&&c.Lb(0,"i",77)}function O(t,n){if(1&t&&(c.Ob(0),c.Qb(1,"div",69),c.wc(2,P,1,0,"i",70),c.wc(3,v,1,0,"i",71),c.wc(4,M,1,0,"i",72),c.wc(5,C,1,0,"i",73),c.Pb(),c.Nb()),2&t){const t=c.Zb().$implicit;c.zb(2),c.fc("ngIf","pc"==t.value.status),c.zb(1),c.fc("ngIf","ld"==t.value.status),c.zb(1),c.fc("ngIf","n"==t.value.status),c.zb(1),c.fc("ngIf","c"==t.value.status)}}function _(t,n){if(1&t){const t=c.Rb();c.Qb(0,"div",78),c.Qb(1,"i",79),c.Xb("click",(function(){c.pc(t);const n=c.Zb().$implicit;return c.Zb().changeStatus(n.value,"pc")})),c.Pb(),c.Qb(2,"i",80),c.Xb("click",(function(){c.pc(t);const n=c.Zb().$implicit;return c.Zb().changeStatus(n.value,"ld")})),c.Pb(),c.Qb(3,"i",81),c.Xb("click",(function(){c.pc(t);const n=c.Zb().$implicit;return c.Zb().changeStatus(n.value,"n")})),c.Pb(),c.Qb(4,"i",82),c.Xb("click",(function(){c.pc(t);const n=c.Zb().$implicit;return c.Zb().changeStatus(n.value,"c")})),c.Pb(),c.Pb()}}function y(t,n){1&t&&c.Lb(0,"i",74)}function Q(t,n){1&t&&c.Lb(0,"i",97)}function w(t,n){1&t&&c.Lb(0,"i",76)}function x(t,n){1&t&&c.Lb(0,"i",77)}function S(t,n){if(1&t){const t=c.Rb();c.Ob(0),c.Qb(1,"div",69),c.wc(2,y,1,0,"i",70),c.wc(3,Q,1,0,"i",88),c.wc(4,w,1,0,"i",72),c.wc(5,x,1,0,"i",73),c.Lb(6,"i",89),c.Qb(7,"mat-menu",null,90),c.Qb(9,"button",91),c.Qb(10,"a",92),c.Lb(11,"i",93),c.yc(12," Abrir no Whatsapp "),c.Pb(),c.Pb(),c.Qb(13,"button",91),c.Lb(14,"i",94),c.yc(15," Alterar "),c.Pb(),c.Qb(16,"button",95),c.Xb("click",(function(){c.pc(t);const n=c.Zb().$implicit;return c.Zb(2).newChildren(n.value)})),c.Lb(17,"i",96),c.yc(18," Tornar Lead "),c.Pb(),c.Pb(),c.Pb(),c.Nb()}if(2&t){const t=c.nc(8),n=c.Zb().$implicit;c.zb(2),c.fc("ngIf","pc"==n.value.status),c.zb(1),c.fc("ngIf","ld"==n.value.status),c.zb(1),c.fc("ngIf","n"==n.value.status),c.zb(1),c.fc("ngIf","c"==n.value.status),c.zb(1),c.fc("matMenuTriggerFor",t)}}function k(t,n){if(1&t){const t=c.Rb();c.Qb(0,"div",78),c.Qb(1,"i",79),c.Xb("click",(function(){c.pc(t);const n=c.Zb().$implicit;return c.Zb(2).changeStatus(n.value,"pc")})),c.Pb(),c.Qb(2,"i",80),c.Xb("click",(function(){c.pc(t);const n=c.Zb().$implicit;return c.Zb(2).changeStatus(n.value,"ld")})),c.Pb(),c.Qb(3,"i",81),c.Xb("click",(function(){c.pc(t);const n=c.Zb().$implicit;return c.Zb(2).changeStatus(n.value,"n")})),c.Pb(),c.Qb(4,"i",82),c.Xb("click",(function(){c.pc(t);const n=c.Zb().$implicit;return c.Zb(2).changeStatus(n.value,"c")})),c.Pb(),c.Lb(5,"i",98),c.Qb(6,"mat-menu",null,90),c.Qb(8,"button",91),c.Qb(9,"a",92),c.Lb(10,"i",93),c.yc(11," Abrir no Whatsapp "),c.Pb(),c.Pb(),c.Qb(12,"button",91),c.Lb(13,"i",94),c.yc(14," Alterar "),c.Pb(),c.Qb(15,"button",95),c.Xb("click",(function(){c.pc(t);const n=c.Zb().$implicit;return c.Zb(2).newChildren(n.value)})),c.Lb(16,"i",96),c.yc(17," Tornar Lead "),c.Pb(),c.Pb(),c.Pb()}if(2&t){const t=c.nc(7);c.zb(5),c.fc("matMenuTriggerFor",t)}}function L(t,n){if(1&t){const t=c.Rb();c.Qb(0,"div",83),c.Qb(1,"div",84),c.Xb("click",(function(){c.pc(t);const e=n.$implicit;return c.Zb(2).callTo(e.value)})),c.Qb(2,"span"),c.Qb(3,"div",85),c.yc(4),c.Pb(),c.Qb(5,"div",86),c.yc(6),c.ac(7,"mask"),c.Pb(),c.Pb(),c.Pb(),c.wc(8,S,19,5,"ng-container",26),c.wc(9,k,18,1,"ng-template",null,87,c.xc),c.Pb()}if(2&t){const t=n.$implicit,e=c.nc(10);c.zb(4),c.Ac(" ",t.value.name," "),c.zb(2),c.Ac(" ",c.cc(7,4,t.value.phone,"(00)00000-0000")," "),c.zb(2),c.fc("ngIf","a"!=t.value.status)("ngIfElse",e)}}function z(t,n){if(1&t){const t=c.Rb();c.Qb(0,"div",57),c.Qb(1,"div",58),c.Qb(2,"div",59),c.Qb(3,"div",60),c.yc(4),c.Pb(),c.Qb(5,"div",61),c.yc(6),c.ac(7,"mask"),c.Pb(),c.Pb(),c.Qb(8,"div",62),c.wc(9,O,6,4,"ng-container",26),c.wc(10,_,5,0,"ng-template",null,63,c.xc),c.Pb(),c.Pb(),c.Qb(12,"perfect-scrollbar"),c.Qb(13,"div",64),c.wc(14,L,11,7,"div",65),c.ac(15,"keyvalue"),c.Pb(),c.Pb(),c.Qb(16,"div",66),c.Qb(17,"div",67),c.yc(18),c.ac(19,"json"),c.Lb(20,"br"),c.yc(21," 3 \xe0 contactar "),c.Pb(),c.Qb(22,"div",62),c.Qb(23,"div",68),c.Xb("click",(function(){c.pc(t);const e=n.$implicit;return c.Zb().newChildren(e.value)})),c.Lb(24,"i",20),c.Pb(),c.Pb(),c.Pb(),c.Pb()}if(2&t){const t=n.$implicit,e=c.nc(11);c.zb(4),c.zc(null==t?null:t.value.name),c.zb(2),c.Ac(" ",c.cc(7,6,null==t?null:t.value.phone,"(00)00000-0000")," "),c.zb(3),c.fc("ngIf","a"!=(null==t?null:t.value.status))("ngIfElse",e),c.zb(5),c.fc("ngForOf",c.bc(15,9,t.value.referidos)),c.zb(4),c.Ac(" ",c.bc(19,11,t.value.referidos.length)," referidos ")}}function I(t,n){if(1&t&&(c.Ob(0),c.Qb(1,"p"),c.yc(2),c.Pb(),c.Nb()),2&t){const t=c.Zb();c.zb(2),c.Ac(" Cadastre abaixo os indicados do(a) ",t.parent.name," ")}}function A(t,n){1&t&&c.yc(0," Novo referido ")}function Z(t,n){if(1&t&&(c.Qb(0,"option",99),c.yc(1),c.Pb()),2&t){const t=n.$implicit;c.fc("value",t.id),c.zb(1),c.Ac(" ",null==t?null:t.status," ")}}function F(t,n){1&t&&c.Lb(0,"i",74)}function $(t,n){1&t&&c.Lb(0,"i",75)}function N(t,n){1&t&&c.Lb(0,"i",76)}function X(t,n){1&t&&c.Lb(0,"i",77)}function B(t,n){if(1&t&&(c.Qb(0,"span"),c.wc(1,F,1,0,"i",70),c.wc(2,$,1,0,"i",71),c.wc(3,N,1,0,"i",72),c.wc(4,X,1,0,"i",73),c.Pb()),2&t){const t=c.Zb().$implicit;c.zb(1),c.fc("ngIf","pc"==t.status),c.zb(1),c.fc("ngIf","ld"==t.status),c.zb(1),c.fc("ngIf","n"==t.status),c.zb(1),c.fc("ngIf","c"==t.status)}}function T(t,n){if(1&t&&(c.Qb(0,"div",100),c.Qb(1,"div"),c.Qb(2,"div",101),c.Lb(3,"i",102),c.yc(4),c.wc(5,B,5,4,"span",103),c.Pb(),c.Qb(6,"div",104),c.yc(7),c.ac(8,"mask"),c.Pb(),c.Qb(9,"div",105),c.yc(10),c.Pb(),c.Pb(),c.Pb()),2&t){const t=n.$implicit,e=n.index;c.zb(1),c.vc("margin-left",20*e,"px"),c.zb(3),c.Ac(" ",t.name," "),c.zb(1),c.fc("ngIf","a"!=t.status),c.zb(2),c.Ac(" ",c.cc(8,6,t.phone,"(00)00000-0000")," "),c.zb(3),c.Ac(" ",t.observation," ")}}function j(t,n){if(1&t&&(c.Qb(0,"span"),c.yc(1),c.Lb(2,"br"),c.Pb()),2&t){const t=n.$implicit;c.zb(1),c.Ac(" ",t," ")}}const V=[{path:"",component:(()=>{class t{constructor(t,n,e,i,o){this.sellMoreService=t,this.formBuilder=n,this.helper=e,this.notificationService=i,this.loaderService=o,this.customers=[],this.status=[{id:"pc",status:"Problemas com cart\xe3o"},{id:"ld",status:"Ligar depois"},{id:"n",status:"N\xe3o tem interesse"},{id:"c",status:"Comprou"}],this.person={},this.parent={},this.parents=[],this.strategy={},this.path=a.b,this.isDevMode=Object(c.V)(),this.img="assets/img/user/padrao.svg"}ngOnInit(){this.getCustomers(),this.getStrategy(),this.initialForms()}initialForms(){this.form=this.formBuilder.group({name:this.formBuilder.control("",[r.o.required]),phone:this.formBuilder.control("",[r.o.required]),address:this.formBuilder.control(""),status:this.formBuilder.control(""),observation:this.formBuilder.control(""),id_parent:this.formBuilder.control(null)}),this.formScript=this.formBuilder.group({strategy:this.formBuilder.control("",[r.o.required])})}getCustomers(){this.loaderService.isLoad(!0),this.sellMoreService.getCustomers().subscribe(t=>{this.loaderService.isLoad(!1),this.customers=t.dados})}getStrategy(){this.loaderService.isLoad(!0),this.sellMoreService.getStrategy().subscribe(t=>{this.loaderService.isLoad(!1),this.strategy=t.dados,this.strategy.staps=t.nl2br,this.formScript.controls.strategy.setValue(this.strategy.strategy)})}save(t){this.loaderService.isLoad(!0),this.sellMoreService.save(t).subscribe(t=>{this.notificationService.notifySweet("Salvo com sucesso!"),this.clearForm(),this.getCustomers(),this.loaderService.isLoad(!1)})}saveStrategy(t){this.loaderService.isLoad(!0),this.sellMoreService.insertUpdateStrategy(t).subscribe(t=>{this.notificationService.notifySweet("Salvo com sucesso!"),this.loaderService.isLoad(!1)})}changeStatus(t,n){this.loaderService.isLoad(!0),this.sellMoreService.changeStatus({status:n},t.id).subscribe(e=>{this.loaderService.isLoad(!1),t.status=n,this.notificationService.notifySweet("Atualizado!")})}callTo(t){this.loaderService.isLoad(!0),this.person=t,this.sellMoreService.getAllParents(t.id_parent).subscribe(t=>{this.loaderService.isLoad(!1),this.parents=t})}newChildren(t){this.parent=t,this.form.controls.id_parent.setValue(t.id),console.log(t)}newLead(){this.form.controls.id_parent.setValue(null),this.parent={}}clearForm(){this.form.controls.name.setValue(""),this.form.controls.phone.setValue(""),this.form.controls.address.setValue(""),this.form.controls.status.setValue(""),this.form.controls.observation.setValue("")}}return t.\u0275fac=function(n){return new(n||t)(c.Kb(l),c.Kb(r.c),c.Kb(b.a),c.Kb(d.a),c.Kb(f.a))},t.\u0275cmp=c.Eb({type:t,selectors:[["app-sell-more"]],decls:104,vars:14,consts:[[1,"sellMore"],[1,"logo"],["src","/assets/img/system/logo_wiseup.svg","alt","","srcset",""],[1,"search"],[1,"input",2,"width","490px !important"],[1,"inputIcon"],[1,"fa","fa-search"],[1,"inputText"],["type","text","placeholder","Buscar",1,"w-100"],[1,"profile"],["src","https://instagram.fgyn16-1.fna.fbcdn.net/v/t51.2885-19/s150x150/118200339_130598715410057_5144472412328920923_n.jpg?_nc_ht=instagram.fgyn16-1.fna.fbcdn.net&_nc_ohc=se62JSn1DcoAX_h_-Zw&oh=cd243c550309755172938ffb1086e91e&oe=5FC6E74D","alt",""],[1,"content","pad40"],[1,"row","flex-direction-column"],[1,"totalLead"],[1,"totalOthers"],[1,"row","flex-wrap"],["class","customers",4,"ngFor","ngForOf"],["data-toggle","modal","data-target","#modalScriptAdd",1,"footerItens",3,"click"],[1,"fa","fa-receipt"],["data-toggle","modal","data-target","#modalStickyAdd",1,"footerItens",3,"click"],[1,"fa","fa-plus"],["id","modalStickyAdd","tabindex","-1","aria-labelledby","modalNewSticky","aria-hidden","true",1,"modal","fade"],[1,"modal-dialog"],[1,"modal-content"],[1,"modal-header"],["id","modalNewSticky",1,"modal-title"],[4,"ngIf","ngIfElse"],["indicatedBy",""],[1,"modal-body"],[1,"content"],["novalidate","",3,"formGroup"],[1,"input"],[1,"fa","fa-user"],["type","text","formControlName","name","placeholder","Nome",1,"w-100"],[1,"fa","fa-mobile-alt"],["type","text","formControlName","phone","placeholder","Telefone","mask","(00)00000-0000",1,"w-100"],["placeholder","Observa\xe7\xe3o","formControlName","observation",1,"textarea"],[1,"fa","fa-info"],["formControlName","status",1,"w-100"],["value","","selected",""],[3,"value",4,"ngFor","ngForOf"],[1,"modal-footer"],["type","button","data-dismiss","modal",1,"btn","btn-secondary"],["closemodalStickyAdd",""],["type","button",1,"btn","btn-primary",3,"disabled","click"],["id","modalScriptAdd","tabindex","-1","aria-labelledby","modalNewScript","aria-hidden","true",1,"modal","fade"],[1,"modal-dialog","modal-exlg"],["id","modalNewScript",1,"modal-title"],["placeholder","Estrat\xe9gia","formControlName","strategy",1,"textarea"],["closemodalScriptAdd",""],["id","modalCall","tabindex","-1","aria-labelledby","modalStapcall","aria-hidden","true",1,"modal","fade"],["id","modalStapcall",1,"modal-title"],[1,"content","rowCall"],[1,"person"],["class","tree margint-25",4,"ngFor","ngForOf"],[1,"strategy"],[4,"ngFor","ngForOf"],[1,"customers"],[1,"parent","center-center"],[1,"contact"],[1,"name"],[1,"phone"],[1,"action"],["waiting",""],[1,"children"],["class","item",4,"ngFor","ngForOf"],[1,"info","center-center"],[1,"quantitative"],["data-toggle","modal","data-target","#modalStickyAdd",1,"actionButton",3,"click"],[1,"finished"],["class","fa fa-credit-card icon-finished icon-finished-no",4,"ngIf"],["class","fa fa-headset icon-finished",4,"ngIf"],["class","fa fa-thumbs-down icon-finished icon-finished-no",4,"ngIf"],["class","fa fa-thumbs-up icon-finished icon-finished-yes",4,"ngIf"],[1,"fa","fa-credit-card","icon-finished","icon-finished-no"],[1,"fa","fa-headset","icon-finished"],[1,"fa","fa-thumbs-down","icon-finished","icon-finished-no"],[1,"fa","fa-thumbs-up","icon-finished","icon-finished-yes"],[1,"waiting"],["matTooltip","Problemas com cart\xe3o de cr\xe9dito",1,"fa","fa-credit-card","icon-waiting",3,"click"],["matTooltip","Ligar depois",1,"fa","fa-headset","icon-waiting",3,"click"],["matTooltip","N\xe3o deu neg\xf3cio \ud83d\ude2d",1,"fa","fa-thumbs-down","icon-waiting",3,"click"],["matTooltip","Vendido \ud83d\ude03",1,"fa","fa-thumbs-up","icon-waiting",3,"click"],[1,"item"],["data-toggle","modal","data-target","#modalCall",1,"contacto","cursor-pointer",3,"click"],[1,"contacto-name"],[1,"contacto-phone"],["waitingChildren",""],["class","fa fa-headset icon-finished icon-finished-no",4,"ngIf"],["matTooltip","Menu",1,"fa","fa-bars","icon-finished",2,"margin-left","15px",3,"matMenuTriggerFor"],["menu","matMenu"],["mat-menu-item",""],["target","_BLANK","href","https://wa.me/5562981993875"],[1,"fab","fa-whatsapp"],[1,"fas","fa-edit"],["mat-menu-item","","data-toggle","modal","data-target","#modalStickyAdd",3,"click"],[1,"fa","fa-chalkboard-teacher"],[1,"fa","fa-headset","icon-finished","icon-finished-no"],["matTooltip","Menu",1,"fa","fa-bars","icon-waiting",3,"matMenuTriggerFor"],[3,"value"],[1,"tree","margint-25"],[1,"parentName"],[1,"fa","fa-folder-open"],[4,"ngIf"],[1,"parentPhone"],[1,"parentDesc"]],template:function(t,n){if(1&t&&(c.Qb(0,"div",0),c.Qb(1,"header"),c.Qb(2,"div",1),c.Lb(3,"img",2),c.Pb(),c.Qb(4,"div",3),c.Qb(5,"div",4),c.Qb(6,"div",5),c.Lb(7,"i",6),c.Pb(),c.Qb(8,"div",7),c.Lb(9,"input",8),c.Pb(),c.Pb(),c.Pb(),c.Qb(10,"div",9),c.Lb(11,"img",10),c.Pb(),c.Pb(),c.Qb(12,"div",11),c.Qb(13,"div",12),c.Qb(14,"div",13),c.yc(15,"78 referidos \xe0 contactar"),c.Pb(),c.Qb(16,"div",14),c.yc(17,"3 vendas"),c.Pb(),c.Qb(18,"div",14),c.yc(19,"7 problemas com cart\xe3o"),c.Pb(),c.Pb(),c.Qb(20,"div",15),c.wc(21,z,25,13,"div",16),c.ac(22,"keyvalue"),c.Pb(),c.Pb(),c.Qb(23,"footer"),c.Qb(24,"div",17),c.Xb("click",(function(){return n.newLead()})),c.Lb(25,"i",18),c.Pb(),c.Qb(26,"div",19),c.Xb("click",(function(){return n.newLead()})),c.Lb(27,"i",20),c.Pb(),c.Pb(),c.Pb(),c.Qb(28,"div",21),c.Qb(29,"div",22),c.Qb(30,"div",23),c.Qb(31,"div",24),c.Qb(32,"h3",25),c.wc(33,I,3,1,"ng-container",26),c.wc(34,A,1,0,"ng-template",null,27,c.xc),c.Pb(),c.Pb(),c.Qb(36,"div",28),c.Qb(37,"div",29),c.Qb(38,"form",30),c.Qb(39,"div",31),c.Qb(40,"div",5),c.Lb(41,"i",32),c.Pb(),c.Qb(42,"div",7),c.Lb(43,"input",33),c.Pb(),c.Pb(),c.Qb(44,"div",31),c.Qb(45,"div",5),c.Lb(46,"i",34),c.Pb(),c.Qb(47,"div",7),c.Lb(48,"input",35),c.Pb(),c.Pb(),c.Qb(49,"textarea",36),c.yc(50,"\t\t\t\t\t\t"),c.Pb(),c.Qb(51,"div",31),c.Qb(52,"div",5),c.Lb(53,"i",37),c.Pb(),c.Qb(54,"div",7),c.Qb(55,"select",38),c.Qb(56,"option",39),c.yc(57," Selecione uma op\xe7\xe3o caso tenha entrado em contato com o referente "),c.Pb(),c.wc(58,Z,2,2,"option",40),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Qb(59,"div",41),c.Qb(60,"button",42,43),c.yc(62," Fechar "),c.Pb(),c.Qb(63,"button",44),c.Xb("click",(function(){return n.save(n.form.value)})),c.yc(64," Salvar "),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Qb(65,"div",45),c.Qb(66,"div",46),c.Qb(67,"div",23),c.Qb(68,"div",24),c.Qb(69,"h3",47),c.Qb(70,"p"),c.yc(71,"Roteiro"),c.Pb(),c.Pb(),c.Pb(),c.Qb(72,"div",28),c.Qb(73,"div",29),c.Qb(74,"form",30),c.Qb(75,"textarea",48),c.yc(76,"\t\t\t\t\t\t"),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Qb(77,"div",41),c.Qb(78,"button",42,49),c.yc(80," Fechar "),c.Pb(),c.Qb(81,"button",44),c.Xb("click",(function(){return n.saveStrategy(n.formScript.value)})),c.yc(82," Salvar "),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Qb(83,"div",50),c.Qb(84,"div",46),c.Qb(85,"div",23),c.Qb(86,"div",24),c.Qb(87,"h2",51),c.Qb(88,"p"),c.yc(89),c.Pb(),c.Pb(),c.Pb(),c.Qb(90,"div",28),c.Qb(91,"p"),c.yc(92),c.Pb(),c.Lb(93,"br"),c.Qb(94,"b"),c.yc(95,"\xc1rvores de indica\xe7\xf5es"),c.Pb(),c.Qb(96,"div",52),c.Qb(97,"div",53),c.wc(98,T,11,9,"div",54),c.Pb(),c.Qb(99,"div",55),c.Qb(100,"perfect-scrollbar"),c.Qb(101,"h1"),c.yc(102,"Strategy"),c.Pb(),c.wc(103,j,3,1,"span",56),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Pb()),2&t){const t=c.nc(35);c.zb(21),c.fc("ngForOf",c.bc(22,12,n.customers)),c.zb(12),c.fc("ngIf",n.parent.id)("ngIfElse",t),c.zb(5),c.fc("formGroup",n.form),c.zb(20),c.fc("ngForOf",n.status),c.zb(5),c.fc("disabled",!n.form.valid),c.zb(11),c.fc("formGroup",n.formScript),c.zb(7),c.fc("disabled",!n.formScript.valid),c.zb(8),c.Ac("Ligando para ",n.person.name,""),c.zb(3),c.Ac("Observa\xe7\xe3o: ",n.person.observation,""),c.zb(6),c.fc("ngForOf",n.parents),c.zb(5),c.fc("ngForOf",null==n.strategy?null:n.strategy.staps)}},directives:[g.l,g.m,r.q,r.j,r.e,r.a,r.i,r.d,u.a,r.n,r.l,r.p,p.b,h.a,m.c,m.d,m.a],pipes:[g.g,u.b,g.f],styles:[".sellMore[_ngcontent-%COMP%]{min-height:100vh;width:100%;display:flex;flex-direction:column}.sellMore[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]{padding:15px;height:95px;width:100%}.sellMore[_ngcontent-%COMP%]   header[_ngcontent-%COMP%], .sellMore[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.sellMore[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{width:120px;height:100%}.sellMore[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]{flex:1}.sellMore[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%], .sellMore[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]{height:100%;display:flex;align-items:center;justify-content:center}.sellMore[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]{width:120px}.sellMore[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:56px;height:56px;border-radius:28px}.sellMore[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{padding:15px;flex:1;width:100%}.sellMore[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%]{position:fixed;padding:15px;height:95px;width:100%;justify-content:flex-end;bottom:0}.footerItens[_ngcontent-%COMP%], .sellMore[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%]{display:flex;align-items:center}.footerItens[_ngcontent-%COMP%]{width:80px;height:80px;border-radius:40px;background-color:var(--backgroundSecondary);color:var(--backgroundSecondaryColor);margin-left:10px;font-size:3em;justify-content:center;cursor:pointer;transition:.3s;z-index:998}.footerItens[_ngcontent-%COMP%]:hover{background-color:var(--backgroundSecondaryHover);font-size:3.1em}.totalLead[_ngcontent-%COMP%]{font-weight:700;font-size:28px}.totalOthers[_ngcontent-%COMP%]{font-weight:700;font-size:17px}.customers[_ngcontent-%COMP%]{width:422px;height:510px;background-color:var(--backgroundComponents);margin:15px;border-radius:10px;color:#efefed;display:flex;flex-direction:column}.parent[_ngcontent-%COMP%]{height:60px;width:100%;display:flex;flex-direction:row}.children[_ngcontent-%COMP%]{flex:1;padding:15px;overflow:auto}.info[_ngcontent-%COMP%]{height:70px;width:100%;display:flex}.parent[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]{display:flex;flex:1;justify-content:center;align-items:center;flex-direction:column}.parent[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{font-size:16px;font-weight:700}.parent[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   .finished[_ngcontent-%COMP%]{width:50px}.parent[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   .waiting[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-left:10px}.waiting[_ngcontent-%COMP%]{width:150px}.children[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;margin-bottom:15px}.children[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .contacto[_ngcontent-%COMP%]{display:flex;flex:1;flex-direction:column}.children[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .contacto[_ngcontent-%COMP%]   .contacto-name[_ngcontent-%COMP%]{font-size:20px;font-weight:700}.children[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .contacto[_ngcontent-%COMP%]   .contacto-name[_ngcontent-%COMP%], .children[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .contacto[_ngcontent-%COMP%]   .contacto-phone[_ngcontent-%COMP%]{color:var(--backgroundSecondary)!important}.children[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .finished[_ngcontent-%COMP%]{width:50px}.children[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .finished[_ngcontent-%COMP%], .children[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .waiting[_ngcontent-%COMP%]{display:flex;align-items:flex-end;justify-content:flex-end}.children[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .waiting[_ngcontent-%COMP%]{width:145px}.children[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .waiting[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-left:10px}.info[_ngcontent-%COMP%]   .quantitative[_ngcontent-%COMP%]{margin-left:15px;flex:1;font-size:16px}.info[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]{width:70px;height:100%}.actionButton[_ngcontent-%COMP%], .info[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.actionButton[_ngcontent-%COMP%]{width:40px;height:40px;border-radius:20px;background-color:var(--backgroundSecondary);color:var(--backgroundSecondaryColor);font-size:20px;font-weight:700;cursor:pointer;transition:.3s;z-index:999}.actionButton[_ngcontent-%COMP%]:hover{background-color:var(--backgroundSecondaryHover)}.icon-finished[_ngcontent-%COMP%]{font-size:33px}.icon-finished-yes[_ngcontent-%COMP%]{color:var(--backgroundSecondary)}.icon-finished-no[_ngcontent-%COMP%]{color:#f88}.icon-waiting[_ngcontent-%COMP%]{font-size:20px;cursor:pointer}.icon-waiting-yes[_ngcontent-%COMP%]{color:var(--backgroundSecondary)}.icon-waiting-no[_ngcontent-%COMP%]{color:#f88}.fa-slash[_ngcontent-%COMP%]{margin-left:-150px}.textarea[_ngcontent-%COMP%]{width:100%;height:500px;border-radius:10px}.input[_ngcontent-%COMP%]{width:100%;height:62px;background:var(--backgroundInput)!important;color:var(--backgroundInputColor)!important;border-radius:10px;margin-bottom:15px}.input[_ngcontent-%COMP%], .inputIcon[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.inputIcon[_ngcontent-%COMP%]{width:35px}.inputText[_ngcontent-%COMP%]{flex:1}div.status[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-right:10px}.rowCall[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.person[_ngcontent-%COMP%]{flex:1;flex-direction:column}.strategy[_ngcontent-%COMP%]{flex:1;height:80vh;overflow:auto}.parentName[_ngcontent-%COMP%]{font-size:2em;font-weight:700}.parentPhone[_ngcontent-%COMP%]{font-size:1.2em}.parentDesc[_ngcontent-%COMP%]{font-size:1em}"]}),t})()}];let K=(()=>{class t{}return t.\u0275mod=c.Ib({type:t}),t.\u0275inj=c.Hb({factory:function(n){return new(n||t)},imports:[[i.a,o.d.forChild(V)]]}),t})()}}]);