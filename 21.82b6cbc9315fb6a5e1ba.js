(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"1ZIO":function(t,n,e){"use strict";e.r(n),e.d(n,"TransactionConfirmPageModule",(function(){return O}));var o=e("ofXK"),r=e("3Pt+"),i=e("tyNb"),a=e("TEn/"),c=e("sYmb"),s=e("j1ZV"),b=e("mrSG"),l=e("1T0C"),u=e("57MG"),h=e("jysE"),d=e("q3zY"),f=e("GsAe"),p=e("hPkG"),g=e("AFs5"),T=e("fXoL"),v=e("138U"),I=e("l5qu"),m=function(){function t(t,n,e,o,r,i,a,c,s,b,l,u){this.loadingCtrl=t,this.toastCtrl=n,this.router=e,this.route=o,this.alertCtrl=r,this.platform=i,this.storageProvider=a,this.beaconService=c,this.pushBackendProvider=s,this.browserService=b,this.accountService=l,this.protocolService=u,this.txInfos=[],this.protocols=[]}return t.prototype.dismiss=function(){this.router.navigateByUrl("/tabs/portfolio").catch(Object(p.b)(p.a.NAVIGATION))},t.prototype.ionViewWillEnter=function(){return Object(b.b)(this,void 0,void 0,(function(){var t=this;return Object(b.e)(this,(function(n){switch(n.label){case 0:return[4,this.platform.ready()];case 1:return n.sent(),this.route.snapshot.data.special&&(this.signedTransactionsSync=this.route.snapshot.data.special.signedTransactionsSync),this.signedTransactionsSync.forEach((function(n){return Object(b.b)(t,void 0,void 0,(function(){var t,e,o,r,i,a;return Object(b.e)(this,(function(c){switch(c.label){case 0:return[4,this.protocolService.getProtocol(n.protocol)];case 1:return t=c.sent(),e=this.accountService.walletBySerializerAccountIdentifier(n.payload.accountIdentifier,n.protocol),[4,this.beaconService.getVaultRequest(n.payload.transaction)];case 2:return o=b.f.apply(void 0,[c.sent(),2]),i=o[1],this.txInfos.push([n.payload.transaction,a=(r=o[0])&&i&&i.identifier===t.identifier?i:e&&e.protocol?e.protocol:t,r]),this.protocols.push(a),[2]}}))}))})),[2]}}))}))},t.prototype.broadcastTransaction=function(){return Object(b.b)(this,void 0,void 0,(function(){var t,n,e=this;return Object(b.e)(this,(function(o){switch(o.label){case 0:return[4,this.loadingCtrl.create({message:"Broadcasting..."})];case 1:return(t=o.sent()).present().catch(Object(p.b)(p.a.NAVIGATION)),n=setTimeout((function(){return Object(b.b)(e,void 0,void 0,(function(){return Object(b.e)(this,(function(n){switch(n.label){case 0:return t.dismiss().catch(Object(p.b)(p.a.NAVIGATION)),[4,this.toastCtrl.create({duration:3e3,message:"Transaction queued. It might take some time until your TX shows up!",buttons:[{text:"Ok",role:"cancel"}],position:"bottom"})];case 1:return n.sent().present().catch(Object(p.b)(p.a.IONIC_TOAST)),this.router.navigateByUrl("/tabs/portfolio").catch(Object(p.b)(p.a.NAVIGATION)),[2]}}))}))}),2e4),this.txInfos.forEach((function(o,r){var i=Object(b.f)(o,3),a=i[0],c=i[1],s=i[2];return Object(b.b)(e,void 0,void 0,(function(){var e=this;return Object(b.e)(this,(function(o){return c.broadcastTransaction(a).then((function(o){return Object(b.b)(e,void 0,void 0,(function(){var e,i,u;return Object(b.e)(this,(function(b){switch(b.label){case 0:return console.log("transaction hash",o),s&&(e=s(o),this.beaconService.respond(e).catch(Object(p.b)(p.a.BEACON))),n&&clearInterval(n),i={protocol:this.signedTransactionsSync[r].protocol,accountIdentifier:this.signedTransactionsSync[r].payload.accountIdentifier,date:(new Date).getTime()},this.storageProvider.set(g.a.LAST_TX_BROADCAST,i).catch(Object(p.b)(p.a.STORAGE)),t.dismiss().catch(Object(p.b)(p.a.NAVIGATION)),this.showTransactionSuccessfulAlert(c,o),c.options.network.type!==l.NetworkType.MAINNET?[3,2]:[4,c.getTransactionDetailsFromSigned(this.signedTransactionsSync[r].payload)];case 1:(u=b.sent()[0]).amount=u.amount.toString(),u.fee=u.fee.toString(),u.signedTx=a,u.hash=o,console.log("SIGNED TX",u),this.pushBackendProvider.postPendingTx(u),b.label=2;case 2:return[2]}}))}))})).catch((function(o){n&&clearInterval(n),Object(p.b)(p.a.COINLIB)(o),t.dismiss().catch(Object(p.b)(p.a.NAVIGATION)),o&&o.message&&o.message.startsWith("Failed to check for transaction receipt")?c.getTransactionDetailsFromSigned(e.signedTransactionsSync[r].payload).then((function(t){t.hash?(e.showTransactionSuccessfulAlert(c,t.hash),t.amount=t.amount.toString(),t.fee=t.fee.toString(),t.signedTx=a,e.pushBackendProvider.postPendingTx(t)):Object(p.b)(p.a.COINLIB)("No transaction hash present in signed ETH transaction")})):e.toastCtrl.create({duration:5e3,message:"Transaction broadcasting failed: "+o,buttons:[{text:"Ok",role:"cancel"}],position:"bottom"}).then((function(t){t.present().catch(Object(p.b)(p.a.NAVIGATION))})).catch(Object(p.b)(p.a.IONIC_TOAST)),e.router.navigateByUrl("/tabs/portfolio").catch(Object(p.b)(p.a.NAVIGATION))})),[2]}))}))})),[2]}}))}))},t.prototype.showTransactionSuccessfulAlert=function(t,n){return Object(b.b)(this,void 0,void 0,(function(){var e,o=this;return Object(b.e)(this,(function(r){switch(r.label){case 0:return[4,t.getBlockExplorerLinkForTxId(n)];case 1:return e=r.sent(),this.alertCtrl.create({header:"Transaction broadcasted!",message:"Your transaction has been successfully broadcasted",buttons:[{text:"Open Blockexplorer",handler:function(){o.browserService.openUrl(e),o.router.navigateByUrl("/tabs/portfolio").catch(Object(p.b)(p.a.NAVIGATION))}},{text:"Ok",handler:function(){o.router.navigateByUrl("/tabs/portfolio").catch(Object(p.b)(p.a.NAVIGATION))}}]}).then((function(t){t.present().catch(Object(p.b)(p.a.NAVIGATION))})).catch(Object(p.b)(p.a.IONIC_ALERT)),[2]}}))}))},t.\u0275fac=function(n){return new(n||t)(T.Ib(a.Cb),T.Ib(a.Ob),T.Ib(i.g),T.Ib(i.a),T.Ib(a.a),T.Ib(a.Ib),T.Ib(g.b),T.Ib(d.a),T.Ib(f.a),T.Ib(h.a),T.Ib(u.a),T.Ib(v.y))},t.\u0275cmp=T.Cb({type:t,selectors:[["page-transaction-confirm"]],decls:23,vars:11,consts:[[1,"ion-no-border"],["fixed","true",1,"ion-no-padding"],["slot","start"],["defaultHref","/"],[1,"ion-padding"],[3,"signedTxs","protocols"],["vertical","bottom","slot","fixed"],["size","default","expand","full","color","secondary","shape","round",3,"click"],["slot","start","name","close"],["size","default","expand","full","color","primary","shape","round",3,"click"],["slot","start","name","checkmark"]],template:function(t,n){1&t&&(T.Nb(0,"ion-header",0),T.Nb(1,"ion-grid",1),T.Nb(2,"ion-toolbar"),T.Nb(3,"ion-buttons",2),T.Jb(4,"ion-back-button",3),T.Mb(),T.Nb(5,"ion-title"),T.uc(6),T.Yb(7,"translate"),T.Mb(),T.Mb(),T.Mb(),T.Mb(),T.Nb(8,"ion-content",4),T.Nb(9,"ion-grid",1),T.Jb(10,"signed-transaction",5),T.Mb(),T.Nb(11,"ion-fab",6),T.Nb(12,"ion-row"),T.Nb(13,"ion-col"),T.Nb(14,"ion-button",7),T.Vb("click",(function(){return n.dismiss()})),T.Jb(15,"ion-icon",8),T.uc(16),T.Yb(17,"translate"),T.Mb(),T.Mb(),T.Nb(18,"ion-col"),T.Nb(19,"ion-button",9),T.Vb("click",(function(){return n.broadcastTransaction()})),T.Jb(20,"ion-icon",10),T.uc(21),T.Yb(22,"translate"),T.Mb(),T.Mb(),T.Mb(),T.Mb(),T.Mb()),2&t&&(T.yb(6),T.vc(T.Zb(7,5,"transaction-confirm.title")),T.yb(4),T.dc("signedTxs",n.signedTransactionsSync)("protocols",n.protocols),T.yb(6),T.wc(" ",T.Zb(17,7,"transaction-confirm.decline_label")," "),T.yb(5),T.wc(" ",T.Zb(22,9,"transaction-confirm.confirm_label")," "))},directives:[a.A,a.z,a.yb,a.k,a.f,a.g,a.wb,a.t,I.a,a.v,a.fb,a.s,a.j,a.B],pipes:[c.d],styles:["ion-fab[_ngcontent-%COMP%]{width:100%}"]}),t}(),O=function(){function t(){}return t.\u0275mod=T.Gb({type:t}),t.\u0275inj=T.Fb({factory:function(n){return new(n||t)},imports:[[a.Ab,o.c,r.h,c.c,s.a,i.k.forChild([{path:"",component:m}])]]}),t}()},jysE:function(t,n,e){"use strict";e.d(n,"a",(function(){return s}));var o=e("mrSG"),r=e("138U"),i=e("Bpmc"),a=e("fXoL"),c=e("TEn/"),s=function(){function t(t,n,e){this.platform=t,this.app=n,this.browser=e}return t.prototype.openUrl=function(t){return Object(o.b)(this,void 0,void 0,(function(){return Object(o.e)(this,(function(n){switch(n.label){case 0:return this.platform.is("ios")||this.platform.is("android")||this.platform.is("electron")?[4,this.app.openUrl({url:t})]:[3,2];case 1:return n.sent(),[3,4];case 2:return[4,this.browser.open({url:t})];case 3:n.sent(),n.label=4;case 4:return[2]}}))}))},t.\u0275fac=function(n){return new(n||t)(a.Rb(c.Ib),a.Rb(r.c),a.Rb(i.a))},t.\u0275prov=a.Eb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()},l5qu:function(t,n,e){"use strict";e.d(n,"a",(function(){return v}));var o=e("mrSG"),r=e("kB5k"),i=e.n(r),a=e("hPkG"),c=e("fXoL"),s=e("138U"),b=e("ofXK"),l=e("TEn/"),u=e("sYmb"),h=function(t){return{protocol:t,maxDigits:void 0}},d=function(t){return{protocol:t}};function f(t,n){if(1&t&&(c.Lb(0),c.Nb(1,"ion-row",1),c.Nb(2,"ion-col",2),c.Nb(3,"h5"),c.uc(4),c.Yb(5,"async"),c.Yb(6,"amountConverter"),c.Mb(),c.Mb(),c.Nb(7,"ion-col",2),c.Nb(8,"h5"),c.uc(9),c.Mb(),c.Mb(),c.Nb(10,"ion-col",2),c.Nb(11,"h5"),c.uc(12),c.Yb(13,"async"),c.Yb(14,"feeConverter"),c.Mb(),c.Mb(),c.Nb(15,"ion-col",3),c.Nb(16,"small"),c.uc(17,"Amount"),c.Mb(),c.Mb(),c.Nb(18,"ion-col",3),c.Nb(19,"small"),c.uc(20,"Operations"),c.Mb(),c.Mb(),c.Nb(21,"ion-col",3),c.Nb(22,"small"),c.uc(23,"Fee"),c.Mb(),c.Mb(),c.Mb(),c.Kb()),2&t){var e=c.Xb();c.yb(4),c.wc(" ",c.Zb(5,3,c.ac(6,5,e.aggregatedInfo.totalAmount.toFixed(),c.hc(13,h,e.airGapTxs[0].protocolIdentifier)))," "),c.yb(5),c.vc(e.aggregatedInfo.numberOfTxs),c.yb(3),c.vc(c.Zb(13,8,c.ac(14,10,e.aggregatedInfo.totalFees.toFixed(),c.hc(15,d,e.airGapTxs[0].protocolIdentifier))))}}function p(t,n){1&t&&c.Jb(0,"airgap-from-to",5),2&t&&c.dc("transaction",n.$implicit)}function g(t,n){if(1&t&&(c.Lb(0),c.sc(1,p,1,1,"airgap-from-to",4),c.Kb()),2&t){var e=c.Xb();c.yb(1),c.dc("ngForOf",e.airGapTxs)}}function T(t,n){if(1&t&&(c.Nb(0,"span"),c.Nb(1,"ion-row"),c.Nb(2,"ion-col",6),c.Jb(3,"ion-icon",7),c.Mb(),c.Nb(4,"ion-col"),c.uc(5),c.Yb(6,"translate"),c.Mb(),c.Mb(),c.Nb(7,"p",8),c.uc(8),c.Mb(),c.Mb()),2&t){var e=c.Xb();c.yb(5),c.wc(" ",c.Zb(6,2,"signed-transaction.transaction-unreadable")," "),c.yb(3),c.wc(" ",e.rawTxData.transaction," ")}}var v=function(){function t(t,n){this.serializerService=t,this.protocolService=n,this.fallbackActivated=!1}return t.prototype.ngOnChanges=function(){return Object(o.b)(this,void 0,void 0,(function(){var t,n,e,r,c,s,b=this;return Object(o.e)(this,(function(o){switch(o.label){case 0:if(!this.syncProtocolString)return[3,4];o.label=1;case 1:return o.trys.push([1,3,,4]),t=this,[4,this.serializerService.deserialize(this.syncProtocolString)[0]];case 2:return t.signedTxs=o.sent(),[3,4];case 3:return n=o.sent(),this.fallbackActivated=!0,Object(a.b)(a.a.COINLIB)(n),[3,4];case 4:return this.signedTxs?this.protocols&&this.protocols[0]?(r=this.protocols[0],[3,7]):[3,5]:[3,11];case 5:return[4,this.protocolService.getProtocol(this.signedTxs[0].protocol)];case 6:r=o.sent(),o.label=7;case 7:e=r,o.label=8;case 8:return o.trys.push([8,10,,11]),c=this,[4,Promise.all(this.signedTxs.map((function(t){return e.getTransactionDetailsFromSigned(t.payload)})))];case 9:return c.airGapTxs=o.sent().reduce((function(t,n){return t.concat(n)}),[]),this.airGapTxs.length>1&&this.airGapTxs.every((function(t){return t.protocolIdentifier===b.airGapTxs[0].protocolIdentifier}))&&(this.aggregatedInfo={numberOfTxs:this.airGapTxs.length,totalAmount:this.airGapTxs.map((function(t){return new i.a(t.amount)})).filter((function(t){return!t.isNaN()})).reduce((function(t,n){return t.plus(n)}),new i.a(0)),totalFees:this.airGapTxs.reduce((function(t,n){return t.plus(n.fee)}),new i.a(0))}),this.fallbackActivated=!1,[3,11];case 10:return s=o.sent(),console.error(s),this.fallbackActivated=!0,this.rawTxData=this.signedTxs[0].payload,Object(a.b)(a.a.COINLIB)(s),[3,11];case 11:return[2]}}))}))},t.\u0275fac=function(n){return new(n||t)(c.Ib(s.D),c.Ib(s.y))},t.\u0275cmp=c.Cb({type:t,selectors:[["signed-transaction"]],inputs:{signedTxs:"signedTxs",protocols:"protocols",syncProtocolString:"syncProtocolString"},features:[c.wb],decls:4,vars:3,consts:[[4,"ngIf"],[1,"ion-padding-bottom","ion-text-center"],["size","4",1,"content--align__center-center"],["size","4"],[3,"transaction",4,"ngFor","ngForOf"],[3,"transaction"],["size","2",1,"ion-margin-top"],["color","dark","name","warning",1,"warning-icon"],["ion-text","","color","blackLight",1,"text--selectable","typography--mono"]],template:function(t,n){1&t&&(c.Nb(0,"span"),c.sc(1,f,24,17,"ng-container",0),c.sc(2,g,2,1,"ng-container",0),c.sc(3,T,9,4,"span",0),c.Mb()),2&t&&(c.yb(1),c.dc("ngIf",n.airGapTxs&&n.airGapTxs.length>1),c.yb(1),c.dc("ngIf",n.airGapTxs),c.yb(1),c.dc("ngIf",n.fallbackActivated))},directives:[b.t,l.fb,l.s,b.s,s.n,l.B],pipes:[b.b,s.f,s.m,u.d],styles:[".warning-icon[_ngcontent-%COMP%]{font-size:4rem}"]}),t}()}}]);