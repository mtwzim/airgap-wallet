(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{M7UE:function(t,e,n){"use strict";n.r(e),n.d(e,"ExchangeCustomPageModule",(function(){return N}));var o=n("ofXK"),c=n("3Pt+"),r=n("TEn/"),i=n("jysE"),b=n("fXoL"),a=n("sYmb"),s=function(){return{Gatekeeper:"Bitcoin Suisse"}},u=function(){return{Gatekeeper:"Bity"}},g=function(){return{Gatekeeper:"Sygnum"}},l=function(){return{Gatekeeper:"Taurus"}},p=function(){return{Gatekeeper:"Woorton"}},d=function(){function t(t){this.browserService=t}return t.prototype.getTZBTC=function(t){switch(t){case"bitcoin-suisse":this.browserService.openUrl("https://login.bitcoinsuisse.com/Account/Register");break;case"bity":this.browserService.openUrl("mailto:tzBTC@bity.com");break;case"sygnum":this.browserService.openUrl("mailto:info@sygnum.com");break;case"taurus":this.browserService.openUrl("mailto:tradingdesk@taurusgroup.ch");break;case"woorton":this.browserService.openUrl("https://www.woorton.com/tzBTC.php")}},t.\u0275fac=function(e){return new(e||t)(b.Ib(i.a))},t.\u0275cmp=b.Cb({type:t,selectors:[["page-exchange-custom"]],decls:68,vars:49,consts:[[1,"ion-no-border"],["fixed","true",1,"ion-no-padding"],["slot","start"],["defaultHref","/"],[1,"ion-padding-vertical"],[1,"ion-padding-horizontal"],[1,"ion-no-margin",3,"innerHTML"],[1,"ion-no-margin","ion-padding-vertical"],["size","12","size-md","4"],["src","./assets/img/bitcoin-suisse_left.svg",1,"gatekeeper--logo"],["shape","round","size","small","color","primary",1,"ion-margin-top",3,"innerHTML","click"],["src","./assets/img/bity_left.svg",1,"gatekeeper--logo"],["src","./assets/img/sygnum_left.svg",1,"gatekeeper--logo"],["src","./assets/img/taurus_left.svg",1,"gatekeeper--logo"],["src","./assets/img/woorton-left.png",1,"gatekeeper--logo"]],template:function(t,e){1&t&&(b.Nb(0,"ion-header",0),b.Nb(1,"ion-grid",1),b.Nb(2,"ion-toolbar"),b.Nb(3,"ion-buttons",2),b.Jb(4,"ion-back-button",3),b.Mb(),b.Nb(5,"ion-title"),b.uc(6),b.Yb(7,"translate"),b.Mb(),b.Mb(),b.Mb(),b.Mb(),b.Nb(8,"ion-content",4),b.Nb(9,"ion-grid",1),b.Nb(10,"ion-row",5),b.Jb(11,"h3",6),b.Yb(12,"translate"),b.Mb(),b.Nb(13,"ion-row",5),b.Nb(14,"p",7),b.uc(15),b.Yb(16,"translate"),b.Mb(),b.Mb(),b.Nb(17,"ion-row"),b.Nb(18,"ion-col",8),b.Nb(19,"ion-card"),b.Nb(20,"ion-card-header"),b.Jb(21,"img",9),b.Mb(),b.Nb(22,"ion-card-content"),b.Nb(23,"p"),b.uc(24),b.Yb(25,"translate"),b.Mb(),b.Nb(26,"ion-button",10),b.Vb("click",(function(){return e.getTZBTC("bitcoin-suisse")})),b.Yb(27,"translate"),b.Mb(),b.Mb(),b.Mb(),b.Mb(),b.Nb(28,"ion-col",8),b.Nb(29,"ion-card"),b.Nb(30,"ion-card-header"),b.Jb(31,"img",11),b.Mb(),b.Nb(32,"ion-card-content"),b.Nb(33,"p"),b.uc(34),b.Yb(35,"translate"),b.Mb(),b.Nb(36,"ion-button",10),b.Vb("click",(function(){return e.getTZBTC("bity")})),b.Yb(37,"translate"),b.Mb(),b.Mb(),b.Mb(),b.Mb(),b.Nb(38,"ion-col",8),b.Nb(39,"ion-card"),b.Nb(40,"ion-card-header"),b.Jb(41,"img",12),b.Mb(),b.Nb(42,"ion-card-content"),b.Nb(43,"p"),b.uc(44),b.Yb(45,"translate"),b.Mb(),b.Nb(46,"ion-button",10),b.Vb("click",(function(){return e.getTZBTC("sygnum")})),b.Yb(47,"translate"),b.Mb(),b.Mb(),b.Mb(),b.Mb(),b.Nb(48,"ion-col",8),b.Nb(49,"ion-card"),b.Nb(50,"ion-card-header"),b.Jb(51,"img",13),b.Mb(),b.Nb(52,"ion-card-content"),b.Nb(53,"p"),b.uc(54),b.Yb(55,"translate"),b.Mb(),b.Nb(56,"ion-button",10),b.Vb("click",(function(){return e.getTZBTC("taurus")})),b.Yb(57,"translate"),b.Mb(),b.Mb(),b.Mb(),b.Mb(),b.Nb(58,"ion-col",8),b.Nb(59,"ion-card"),b.Nb(60,"ion-card-header"),b.Jb(61,"img",14),b.Mb(),b.Nb(62,"ion-card-content"),b.Nb(63,"p"),b.uc(64),b.Yb(65,"translate"),b.Mb(),b.Nb(66,"ion-button",10),b.Vb("click",(function(){return e.getTZBTC("woorton")})),b.Yb(67,"translate"),b.Mb(),b.Mb(),b.Mb(),b.Mb(),b.Mb(),b.Mb(),b.Mb()),2&t&&(b.yb(6),b.vc(b.Zb(7,13,"exchange-custom.title")),b.yb(5),b.dc("innerHTML",b.Zb(12,15,"exchange-custom.heading"),b.mc),b.yb(4),b.wc(" ",b.Zb(16,17,"exchange-custom.text")," "),b.yb(9),b.vc(b.Zb(25,19,"exchange-custom.bitcoin-suisse.text")),b.yb(2),b.dc("innerHTML",b.ac(27,21,"exchange-custom.get-tzbtc",b.gc(44,s)),b.mc),b.yb(8),b.vc(b.Zb(35,24,"exchange-custom.bity.text")),b.yb(2),b.dc("innerHTML",b.ac(37,26,"exchange-custom.get-tzbtc",b.gc(45,u)),b.mc),b.yb(8),b.vc(b.Zb(45,29,"exchange-custom.sygnum.text")),b.yb(2),b.dc("innerHTML",b.ac(47,31,"exchange-custom.get-tzbtc",b.gc(46,g)),b.mc),b.yb(8),b.vc(b.Zb(55,34,"exchange-custom.taurus.text")),b.yb(2),b.dc("innerHTML",b.ac(57,36,"exchange-custom.get-tzbtc",b.gc(47,l)),b.mc),b.yb(8),b.vc(b.Zb(65,39,"exchange-custom.woorton.text")),b.yb(2),b.dc("innerHTML",b.ac(67,41,"exchange-custom.get-tzbtc",b.gc(48,p)),b.mc))},directives:[r.A,r.z,r.yb,r.k,r.f,r.g,r.wb,r.t,r.fb,r.s,r.l,r.n,r.m,r.j],pipes:[a.d],styles:[".gatekeeper--logo[_ngcontent-%COMP%]{width:40vw}ion-card[_ngcontent-%COMP%]{height:calc(100% - 20px)}ion-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:128px;height:auto}"]}),t}(),m=n("j1ZV"),h=n("iTUp"),M=n("QUrN"),f=n("tyNb"),N=function(){function t(){}return t.\u0275mod=b.Gb({type:t}),t.\u0275inj=b.Fb({factory:function(e){return new(e||t)},imports:[[r.Ab,o.c,c.h,m.a,a.c,h.a,M.l,f.k.forChild([{path:"",component:d}])]]}),t}()},jysE:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var o=n("mrSG"),c=n("138U"),r=n("Bpmc"),i=n("fXoL"),b=n("TEn/"),a=function(){function t(t,e,n){this.platform=t,this.app=e,this.browser=n}return t.prototype.openUrl=function(t){return Object(o.b)(this,void 0,void 0,(function(){return Object(o.e)(this,(function(e){switch(e.label){case 0:return this.platform.is("ios")||this.platform.is("android")||this.platform.is("electron")?[4,this.app.openUrl({url:t})]:[3,2];case 1:return e.sent(),[3,4];case 2:return[4,this.browser.open({url:t})];case 3:e.sent(),e.label=4;case 4:return[2]}}))}))},t.\u0275fac=function(e){return new(e||t)(i.Rb(b.Ib),i.Rb(c.c),i.Rb(r.a))},t.\u0275prov=i.Eb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()}}]);