(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{cq7r:function(t,e,o){"use strict";o.r(e),o.d(e,"SubAccountAddPageModule",(function(){return X}));var n=o("138U"),i=o("ofXK"),c=o("3Pt+"),s=o("tyNb"),a=o("TEn/"),r=o("sYmb"),l=o("j1ZV"),b=o("mrSG"),u=o("IVSH"),d=o("Jrcw"),h=o("MWx/"),p=o("QMTT"),f=o("57MG"),y=o("kB5k"),g=o.n(y),m=o("fXoL"),v=function(t){return{typeLabel:t}};function w(t,e){if(1&t&&(m.Jb(0,"empty-state",13),m.Yb(1,"translate"),m.Yb(2,"translate")),2&t){var o=m.Xb();m.dc("text",m.ac(1,3,"add-sub-account.no-imports_text",m.hc(8,v,m.Zb(2,6,o.typeLabel))))("imageName",o.wallet.protocol.identifier===o.mainProtocolSymbols.XTZ?"no-imports.svg":"currencies-empty.svg")("fullHeight",o.wallet.protocol.identifier!==o.mainProtocolSymbols.XTZ)}}function P(t,e){if(1&t){var o=m.Ob();m.Nb(0,"ion-row",14),m.Nb(1,"ion-col",15),m.Nb(2,"portfolio-item",16),m.Vb("click",(function(){m.lc(o);var t=e.$implicit;return m.Xb().toggleAccount(t)})),m.Mb(),m.Mb(),m.Nb(3,"ion-col",17),m.Nb(4,"ion-checkbox",18),m.Vb("ngModelChange",(function(t){return m.lc(o),e.$implicit.selected=t})),m.Mb(),m.Mb(),m.Mb()}if(2&t){var n=e.$implicit,i=m.Xb();m.yb(2),m.dc("isToken",i.subProtocolType===i.subProtocolTypes.TOKEN)("wallet",n.wallet),m.yb(2),m.dc("ngModel",n.selected)}}var M=function(){function t(t,e,o,n,i){if(this.navController=t,this.route=e,this.accountProvider=o,this.priceService=n,this.protocolService=i,this.mainProtocolSymbols=u.MainProtocolSymbols,this.subAccounts=[],this.filteredSubAccounts=[],this.displayedSubAccounts=[],this.subProtocolTypes=d.SubProtocolType,this.typeLabel="",this.searchTerm="",this.infiniteEnabled=!1,this.limit=10,this.loaded=0,this.publicKey=this.route.snapshot.params.publicKey,this.protocolID=this.route.snapshot.params.protocolID,this.addressIndex=this.route.snapshot.params.addressIndex,this.subProtocolType=this.route.snapshot.params.subProtocolType,"undefined"===this.addressIndex&&(this.addressIndex=void 0),this.wallet=this.accountProvider.walletByPublicKeyAndProtocolAndAddressIndex(this.publicKey,this.protocolID,this.addressIndex),this.route.snapshot.data.special){var c=this.route.snapshot.data.special;this.actionCallback=c.actionCallback,this.subProtocolType=c.subProtocolType,this.wallet=c.wallet}this.subProtocolType===d.SubProtocolType.ACCOUNT?this.initWithAccountSubProtocol():this.subProtocolType===d.SubProtocolType.TOKEN?this.initWithTokenSubProtocol():Object(h.assertNever)(this.subProtocolType)}return t.prototype.toggleAccount=function(t){t.selected=!t.selected},t.prototype.addSubAccounts=function(){this.actionCallback({subAccounts:this.subAccounts,accountProvider:this.accountProvider,location:this.navController})},t.prototype.initWithAccountSubProtocol=function(){this.typeLabel="add-sub-account.accounts_label"},t.prototype.initWithTokenSubProtocol=function(){return Object(b.b)(this,void 0,void 0,(function(){var t,e;return Object(b.e)(this,(function(o){switch(o.label){case 0:return this.typeLabel="add-sub-account.tokens_label",[4,this.protocolService.getSubProtocols(this.wallet.protocol.identifier)];case 1:return t=o.sent().filter((function(t){return t.subProtocolType===d.SubProtocolType.TOKEN})),this.infiniteEnabled=!0,e=this,[4,this.loadSubAccounts(t)];case 2:return e.subAccounts=o.sent(),[4,this.loadDisplayedAccounts()];case 3:return o.sent(),[2]}}))}))},t.prototype.loadSubAccounts=function(t){return Object(b.b)(this,void 0,void 0,(function(){var e=this;return Object(b.e)(this,(function(o){switch(o.label){case 0:return[4,this.wallet.protocol.getBalanceOfPublicKeyForSubProtocols(this.wallet.publicKey,t)];case 1:return[2,o.sent().map((function(o,n){var i=new u.AirGapMarketWallet(t[n],e.wallet.publicKey,e.wallet.isExtendedPublicKey,e.wallet.derivationPath,e.priceService);if(!e.accountProvider.walletExists(i))return i.addresses=e.wallet.addresses,i.currentBalance=new g.a(o),{wallet:i,selected:!1}})).filter((function(t){return void 0!==t})).sort((function(t,e){return-1*t.wallet.currentBalance.minus(e.wallet.currentBalance).toNumber()}))]}}))}))},t.prototype.setFilteredItems=function(t){if(this.displayedSubAccounts=[],this.loaded=0,0===t.length)this.infiniteEnabled=!0,this.loadDisplayedAccounts();else{var e=t.toLowerCase();this.filteredSubAccounts=this.subAccounts.filter((function(t){var o=t.wallet.protocol.name.toLowerCase().includes(e),n=t.wallet.protocol.symbol.toLowerCase().includes(e);return o||n})),this.infiniteEnabled=!1,this.loadDisplayedAccounts(!0)}},t.prototype.loadDisplayedAccounts=function(t){return void 0===t&&(t=!1),Object(b.b)(this,void 0,void 0,(function(){var e,o=this;return Object(b.e)(this,(function(n){return(e=(t?this.filteredSubAccounts:this.subAccounts).slice(this.loaded,this.loaded+this.limit)).length<this.limit&&(this.infiniteEnabled=!1),e.forEach((function(t){void 0===t.wallet.currentMarketPrice&&t.wallet.fetchCurrentMarketPrice(),o.displayedSubAccounts.push(t)})),this.loaded+=e.length,[2]}))}))},t.prototype.doInfinite=function(t){return Object(b.b)(this,void 0,void 0,(function(){return Object(b.e)(this,(function(e){switch(e.label){case 0:return this.infiniteEnabled?[4,this.loadDisplayedAccounts()]:[2,t.target.complete()];case 1:return e.sent(),t.target.complete(),[2]}}))}))},t.\u0275fac=function(e){return new(e||t)(m.Ib(a.Eb),m.Ib(s.a),m.Ib(f.a),m.Ib(p.a),m.Ib(n.y))},t.\u0275cmp=m.Cb({type:t,selectors:[["page-sub-account-add"]],decls:28,vars:23,consts:[[1,"ion-no-border"],["fixed","true",1,"ion-no-padding"],["slot","start"],["defaultHref","/"],[3,"ngModel","ngModelChange","ionChange"],[1,"ion-padding"],["color","primary",1,"font--weight__bold"],[3,"text","imageName","fullHeight",4,"ngIf"],["class","ion-no-padding",4,"ngFor","ngForOf"],[3,"ionInfinite"],["vertical","bottom","horizontal","end","slot","fixed"],["shape","round","color","secondary",3,"disabled","click"],["slot","start","name","add"],[3,"text","imageName","fullHeight"],[1,"ion-no-padding"],["size","10",1,"ion-no-padding"],["tappable","",3,"isToken","wallet","click"],["size","2",1,"content--align__center-center","ion-no-padding"],["color","primary",3,"ngModel","ngModelChange"]],template:function(t,e){1&t&&(m.Nb(0,"ion-header",0),m.Nb(1,"ion-grid",1),m.Nb(2,"ion-toolbar"),m.Nb(3,"ion-buttons",2),m.Jb(4,"ion-back-button",3),m.Mb(),m.Nb(5,"ion-title"),m.uc(6),m.Yb(7,"translate"),m.Yb(8,"translate"),m.Mb(),m.Mb(),m.Nb(9,"ion-toolbar"),m.Nb(10,"ion-searchbar",4),m.Vb("ngModelChange",(function(t){return e.searchTerm=t}))("ionChange",(function(){return e.setFilteredItems(e.searchTerm)})),m.Mb(),m.Mb(),m.Mb(),m.Mb(),m.Nb(11,"ion-content"),m.Nb(12,"ion-grid",1),m.Nb(13,"ion-row",5),m.Nb(14,"ion-text",6),m.Nb(15,"span"),m.uc(16),m.Yb(17,"translate"),m.Mb(),m.Mb(),m.Mb(),m.sc(18,w,3,10,"empty-state",7),m.sc(19,P,5,3,"ion-row",8),m.Mb(),m.Nb(20,"ion-infinite-scroll",9),m.Vb("ionInfinite",(function(t){return e.doInfinite(t)})),m.Jb(21,"ion-infinite-scroll-content"),m.Mb(),m.Nb(22,"ion-fab",10),m.Nb(23,"ion-button",11),m.Vb("click",(function(){return e.addSubAccounts()})),m.Jb(24,"ion-icon",12),m.uc(25),m.Yb(26,"translate"),m.Yb(27,"translate"),m.Mb(),m.Mb(),m.Mb()),2&t&&(m.yb(6),m.vc(m.ac(7,7,"add-sub-account.title",m.hc(19,v,m.Zb(8,10,e.typeLabel)))),m.yb(4),m.dc("ngModel",e.searchTerm),m.yb(6),m.vc(m.Zb(17,12,e.typeLabel)),m.yb(2),m.dc("ngIf",!e.subAccounts.length),m.yb(1),m.dc("ngForOf",e.displayedSubAccounts),m.yb(4),m.dc("disabled",!e.subAccounts.length),m.yb(2),m.wc(" ",m.ac(26,14,"add-sub-account.add-accounts_label",m.hc(21,v,m.Zb(27,17,e.typeLabel)))," "))},styles:[".empty-list[_ngcontent-%COMP%]{height:50%}span[_ngcontent-%COMP%]{font-size:14px}"]}),t}(),A=o("F07p"),T=o("0HKr"),N=o("vAld"),S=o("vs69"),k=o("Pb0q"),C=o("5n3a"),I=o("1Mpf"),x=o("l5qu"),O=o("Q6rr"),E=o("Bx04"),j=o("lqTi"),K=o("ZATT"),L=o("o7/J"),F=o("pNtj"),q=o("cwVp"),Y=o("0CrI"),_=o("2Eq5"),z=o("vMYo"),B=o("vqqn"),D=o("sXsg"),J=o("ECOn"),V=o("wcx9"),X=function(){function t(){}return t.\u0275mod=m.Gb({type:t}),t.\u0275inj=m.Fb({factory:function(e){return new(e||t)},imports:[[a.Ab,i.c,c.h,l.a,r.c,s.k.forChild([{path:"",component:M}]),n.d]]}),t}();m.oc(M,[a.d,a.e,a.f,a.h,a.i,a.j,a.k,a.l,a.m,a.n,a.o,a.p,a.q,a.r,a.s,a.t,a.u,a.v,a.w,a.x,a.y,a.z,a.A,a.B,a.C,a.D,a.E,a.F,a.G,a.H,a.I,a.J,a.K,a.L,a.M,a.N,a.O,a.P,a.Q,a.R,a.S,a.T,a.U,a.V,a.W,a.X,a.Y,a.Z,a.ab,a.bb,a.cb,a.db,a.fb,a.gb,a.hb,a.ib,a.jb,a.kb,a.lb,a.mb,a.nb,a.ob,a.pb,a.qb,a.rb,a.tb,a.ub,a.vb,a.xb,a.yb,a.wb,a.sb,a.b,a.Hb,a.Kb,a.Mb,a.Nb,a.eb,a.g,a.Fb,a.Lb,a.Pb,a.Qb,a.Rb,a.zb,i.q,i.r,i.s,i.t,i.A,i.w,i.x,i.y,i.z,i.u,i.v,c.C,c.r,c.B,c.c,c.s,c.v,c.a,c.y,c.z,c.u,c.m,c.n,c.x,c.j,c.i,c.t,c.b,c.d,c.p,c.q,c.o,A.a,T.a,N.a,S.a,k.a,C.a,I.a,x.a,O.a,E.a,j.a,K.a,L.a,F.a,q.a,Y.a,_.a,z.a,B.a,D.a,J.a,V.a,r.a,s.l,s.h,s.j,s.i,s.n,n.n,n.r,n.F,n.E,n.k,n.t,n.z,M],[i.b,i.G,i.p,i.k,i.E,i.g,i.C,i.F,i.d,i.f,i.i,i.j,i.l,r.d,n.f,n.m])}}]);