(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"0pct":function(t,n,e){"use strict";e.d(n,"b",(function(){return r})),e.d(n,"a",(function(){return o}));var i=e("mrSG");function r(t,n){return Object(i.b)(this,void 0,void 0,(function(){var e;return Object(i.e)(this,(function(i){return e=new Promise((function(n,e){setTimeout((function(){e("Timed out in "+t+" ms.")}),t)})),[2,Promise.race([n,e])]}))}))}function o(t,n){return void 0===n&&(n={maxRetries:3,interval:500}),Object(i.b)(this,void 0,void 0,(function(){var e,r=this;return Object(i.e)(this,(function(o){return[2,(e=function(o){return Object(i.b)(r,void 0,void 0,(function(){return Object(i.e)(this,(function(r){return o<=0?[2,t]:[2,t.catch((function(){return console.log("promiseRetry: caught error, "+o+" retries left, retrying..."),function(t,n){return Object(i.b)(this,void 0,void 0,(function(){return Object(i.e)(this,(function(e){return[2,new Promise((function(e,i){setTimeout((function(){n.then(e).catch(i)}),t)}))]}))}))}(n.interval,e(o-1))}))]}))}))})(n.maxRetries)]}))}))}},"2c9M":function(t,n,e){"use strict";e.d(n,"a",(function(){return o})),e.d(n,"b",(function(){return c})),e.d(n,"c",(function(){return r})),e.d(n,"d",(function(){return a})),e.d(n,"e",(function(){return s}));var i={getEngine:function(){var t=window;return t.TapticEngine||t.Capacitor&&t.Capacitor.isPluginAvailable("Haptics")&&t.Capacitor.Plugins.Haptics},available:function(){return!!this.getEngine()},isCordova:function(){return!!window.TapticEngine},isCapacitor:function(){return!!window.Capacitor},impact:function(t){var n=this.getEngine();if(n){var e=this.isCapacitor()?t.style.toUpperCase():t.style;n.impact({style:e})}},notification:function(t){var n=this.getEngine();if(n){var e=this.isCapacitor()?t.style.toUpperCase():t.style;n.notification({style:e})}},selection:function(){this.impact({style:"light"})},selectionStart:function(){var t=this.getEngine();t&&(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged:function(){var t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd:function(){var t=this.getEngine();t&&(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},r=function(){i.selection()},o=function(){i.selectionStart()},c=function(){i.selectionChanged()},s=function(){i.selectionEnd()},a=function(t){i.impact(t)}},"6i10":function(t,n,e){"use strict";e.d(n,"a",(function(){return i}));var i={bubbles:{dur:1e3,circles:9,fn:function(t,n,e){var i="".concat(t*n/e-t,"ms"),r=2*Math.PI*n/e;return{r:5,style:{top:"".concat(9*Math.sin(r),"px"),left:"".concat(9*Math.cos(r),"px"),"animation-delay":i}}}},circles:{dur:1e3,circles:8,fn:function(t,n,e){var i=n/e,r="".concat(t*i-t,"ms"),o=2*Math.PI*i;return{r:5,style:{top:"".concat(9*Math.sin(o),"px"),left:"".concat(9*Math.cos(o),"px"),"animation-delay":r}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:function(){return{r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}}}},crescent:{dur:750,circles:1,fn:function(){return{r:26,style:{}}}},dots:{dur:750,circles:3,fn:function(t,n){var e=-110*n+"ms";return{r:6,style:{left:"".concat(9-9*n,"px"),"animation-delay":e}}}},lines:{dur:1e3,lines:12,fn:function(t,n,e){return{y1:17,y2:29,style:{transform:"rotate(".concat(30*n+(n<6?180:-180),"deg)"),"animation-delay":"".concat(t*n/e-t,"ms")}}}},"lines-small":{dur:1e3,lines:12,fn:function(t,n,e){return{y1:12,y2:20,style:{transform:"rotate(".concat(30*n+(n<6?180:-180),"deg)"),"animation-delay":"".concat(t*n/e-t,"ms")}}}}}},AffV:function(t,n,e){"use strict";e.d(n,"a",(function(){return o}));var i=e("mrSG"),r=e("138U"),o=function(){function t(t,n,e){this.platform=t,this.scanner=n,this.permissionsProvider=e,this.selectedDevice=null,this.hasCameras=!1,this.hasCameraPermission=!1,this.isMobile=this.platform.is("hybrid"),this.isElectron=this.platform.is("electron"),this.isBrowser=!(this.isMobile||this.isElectron)}return t.prototype.ionViewWillEnter=function(){return Object(i.b)(this,void 0,void 0,(function(){return Object(i.e)(this,(function(t){switch(t.label){case 0:return this.isMobile||this.isElectron?[4,this.platform.ready()]:[3,3];case 1:return t.sent(),[4,this.checkCameraPermissionsAndActivate()];case 2:t.sent(),t.label=3;case 3:return[2]}}))}))},t.prototype.requestPermission=function(){return Object(i.b)(this,void 0,void 0,(function(){return Object(i.e)(this,(function(t){switch(t.label){case 0:return this.isMobile?[4,this.permissionsProvider.userRequestsPermissions([r.w.CAMERA])]:[3,3];case 1:return t.sent(),[4,this.checkCameraPermissionsAndActivate()];case 2:return t.sent(),[3,4];case 3:this.isElectron&&this.startScanBrowser(),t.label=4;case 4:return[2]}}))}))},t.prototype.checkCameraPermissionsAndActivate=function(){return Object(i.b)(this,void 0,void 0,(function(){return Object(i.e)(this,(function(t){switch(t.label){case 0:return[4,this.permissionsProvider.hasCameraPermission()];case 1:return t.sent()===r.v.GRANTED&&(this.hasCameraPermission=!0,this.startScan()),[2]}}))}))},t.prototype.ionViewDidEnter=function(){this.isBrowser&&(this.hasCameraPermission=!0,this.startScanBrowser())},t.prototype.ionViewWillLeave=function(){this.isMobile?this.scanner.destroy():this.zxingScanner&&(this.zxingScanner.enable=!1,this.zxingScanner.codeReader.reset())},t.prototype.startScan=function(){this.isMobile?this.startScanMobile():this.startScanBrowser()},t.prototype.checkScan=function(t){console.error("The checkScan method needs to be overwritten. Ignoring text "+t)},t.prototype.startScanMobile=function(){var t=this;this.scanner.scan((function(n){t.checkScan(n)}),(function(n){console.warn(n),t.startScan()}))},t.prototype.startScanBrowser=function(){var t=this;this.zxingScanner&&(this.hasCameraPermission=!0,this.zxingScanner.enable=!0,this.zxingScanner.camerasNotFound.subscribe((function(t){console.error("An error has occurred when trying to enumerate your video-stream-enabled devices.")})),this.selectedDevice&&(this.zxingScanner.device=this.selectedDevice),this.zxingScanner.camerasFound.subscribe((function(n){t.hasCameras=!0,t.availableDevices=n,t.selectedDevice=n[0]})))},t}()},Kj3r:function(t,n,e){"use strict";e.d(n,"a",(function(){return u}));var i=e("mvVQ"),r=e("/E8u"),o=e("MGFw"),c=e("WtWf"),s=e("7o/Q"),a=e("D0XW");function u(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a.a;return function(e){return e.lift(new l(t,n))}}var l=function(){function t(n,e){Object(o.a)(this,t),this.dueTime=n,this.scheduler=e}return Object(c.a)(t,[{key:"call",value:function(t,n){return n.subscribe(new f(t,this.dueTime,this.scheduler))}}]),t}(),f=function(t){Object(i.a)(e,t);var n=Object(r.a)(e);function e(t,i,r){var c;return Object(o.a)(this,e),(c=n.call(this,t)).dueTime=i,c.scheduler=r,c.debouncedSubscription=null,c.lastValue=null,c.hasValue=!1,c}return Object(c.a)(e,[{key:"_next",value:function(t){this.clearDebounce(),this.lastValue=t,this.hasValue=!0,this.add(this.debouncedSubscription=this.scheduler.schedule(b,this.dueTime,this))}},{key:"_complete",value:function(){this.debouncedNext(),this.destination.complete()}},{key:"debouncedNext",value:function(){if(this.clearDebounce(),this.hasValue){var t=this.lastValue;this.lastValue=null,this.hasValue=!1,this.destination.next(t)}}},{key:"clearDebounce",value:function(){var t=this.debouncedSubscription;null!==t&&(this.remove(t),t.unsubscribe(),this.debouncedSubscription=null)}}]),e}(s.a);function b(t){t.debouncedNext()}},NqGI:function(t,n,e){"use strict";e.d(n,"a",(function(){return c})),e.d(n,"b",(function(){return s}));var i=e("RQB8"),r=e.n(i),o=e("20ZU"),c=function(){var t=Object(o.a)(r.a.mark((function t(n,e,i,o,c){var s;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n){t.next=2;break}return t.abrupt("return",n.attachViewToDom(e,i,c,o));case 2:if("string"==typeof i||i instanceof HTMLElement){t.next=4;break}throw new Error("framework delegate is missing");case 4:if(s="string"==typeof i?e.ownerDocument&&e.ownerDocument.createElement(i):i,o&&o.forEach((function(t){return s.classList.add(t)})),c&&Object.assign(s,c),e.appendChild(s),!s.componentOnReady){t.next=11;break}return t.next=11,s.componentOnReady();case 11:return t.abrupt("return",s);case 12:case"end":return t.stop()}}),t)})));return function(n,e,i,r,o){return t.apply(this,arguments)}}(),s=function(t,n){if(n){if(t)return t.removeViewFromDom(n.parentElement,n);n.remove()}return Promise.resolve()}},PYW1:function(t,n,e){"use strict";e.d(n,"a",(function(){return c}));var i=e("ePDZ"),r=e("ItpF"),o=e("2c9M"),c=function(t,n){var e,c,s=function(t,i,r){if("undefined"!=typeof document){var o=document.elementFromPoint(t,i);o&&n(o)?o!==e&&(u(),a(o,r)):u()}},a=function(t,n){e=t,c||(c=e);var r=e;Object(i.g)((function(){return r.classList.add("ion-activated")})),n()},u=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e){var n=e;Object(i.g)((function(){return n.classList.remove("ion-activated")})),t&&c!==e&&e.click(),e=void 0}};return Object(r.createGesture)({el:t,gestureName:"buttonActiveDrag",threshold:0,onStart:function(t){return s(t.currentX,t.currentY,o.a)},onMove:function(t){return s(t.currentX,t.currentY,o.b)},onEnd:function(){u(!0),Object(o.e)(),c=void 0}})}},"X9E/":function(t,n,e){"use strict";e.d(n,"a",(function(){return s})),e.d(n,"b",(function(){return a}));var i=e("fXoL"),r=e("tyNb"),o=e("TEn/"),c=e("sYmb"),s=function(t){return t[t.VAULT=0]="VAULT",t[t.LEDGER=1]="LEDGER",t}({}),a=function(){function t(t){this.route=t,this.route.snapshot.data.special&&(this.callback=this.route.snapshot.data.special.callback)}return t.prototype.selectVault=function(){this.select(s.VAULT)},t.prototype.selectLedger=function(){this.select(s.LEDGER)},t.prototype.select=function(t){this.callback(t)},t.\u0275fac=function(n){return new(n||t)(i.Ib(r.a))},t.\u0275cmp=i.Cb({type:t,selectors:[["page-account-import-interaction-selection"]],decls:33,vars:15,consts:[[1,"ion-no-border"],["fixed","true",1,"ion-no-padding"],["slot","start"],["defaultHref","/"],[1,"ion-padding"],["innerHTML","TODO",1,"ion-padding-bottom","ion-no-margin"],[1,"ion-no-padding"],["size","12","size-md","6"],[1,"ion-justify-content-center"],["src","./assets/img/account-import-vault-desktop-wallet.svg"],["size","12"],["id","offline","expand","block","size","default","color","primary","shape","round",3,"click"],[1,"ion-justify-content-center","ion-padding-top"],["src","./assets/img/signer-ledger.svg"],["id","online","expand","block","color","primary","shape","round",3,"click"]],template:function(t,n){1&t&&(i.Nb(0,"ion-header",0),i.Nb(1,"ion-grid",1),i.Nb(2,"ion-toolbar"),i.Nb(3,"ion-buttons",2),i.Jb(4,"ion-back-button",3),i.Mb(),i.Nb(5,"ion-title"),i.uc(6),i.Yb(7,"translate"),i.Mb(),i.Mb(),i.Mb(),i.Mb(),i.Nb(8,"ion-content",4),i.Nb(9,"ion-grid",1),i.Jb(10,"h3",5),i.Nb(11,"ion-row",6),i.Nb(12,"ion-col",7),i.Nb(13,"ion-row",8),i.Jb(14,"img",9),i.Mb(),i.Nb(15,"ion-row"),i.Nb(16,"ion-col",10),i.Nb(17,"ion-button",11),i.Vb("click",(function(){return n.selectVault()})),i.uc(18),i.Yb(19,"translate"),i.Mb(),i.Nb(20,"p"),i.uc(21),i.Yb(22,"translate"),i.Mb(),i.Mb(),i.Mb(),i.Nb(23,"ion-row",12),i.Jb(24,"img",13),i.Mb(),i.Nb(25,"ion-row"),i.Nb(26,"ion-col",10),i.Nb(27,"ion-button",14),i.Vb("click",(function(){return n.selectLedger()})),i.uc(28),i.Yb(29,"translate"),i.Mb(),i.Nb(30,"p"),i.uc(31),i.Yb(32,"translate"),i.Mb(),i.Mb(),i.Mb(),i.Mb(),i.Mb(),i.Mb(),i.Mb()),2&t&&(i.yb(6),i.wc(" ",i.Zb(7,5,"account-import-interaction-selection.title")," "),i.yb(12),i.wc(" ",i.Zb(19,7,"account-import-interaction-selection.airgap-vault.label")," "),i.yb(3),i.vc(i.Zb(22,9,"account-import-interaction-selection.airgap-vault.text")),i.yb(7),i.wc(" ",i.Zb(29,11,"account-import-interaction-selection.ledger.label")," "),i.yb(3),i.vc(i.Zb(32,13,"account-import-interaction-selection.ledger.text")))},directives:[o.A,o.z,o.yb,o.k,o.f,o.g,o.wb,o.t,o.fb,o.s,o.j],pipes:[c.d],styles:["ion-row[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:20vh}"]}),t}()},hcCc:function(t,n,e){"use strict";e.d(n,"a",(function(){return a})),e.d(n,"b",(function(){return u})),e.d(n,"c",(function(){return s})),e.d(n,"d",(function(){return f}));var i=e("RQB8"),r=e.n(i),o=e("20ZU"),c=e("TR1e"),s=function(t,n){return null!==n.closest(t)},a=function(t){return"string"==typeof t&&t.length>0?Object(c.a)({"ion-color":!0},"ion-color-".concat(t),!0):void 0},u=function(t){var n={};return function(t){return void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter((function(t){return null!=t})).map((function(t){return t.trim()})).filter((function(t){return""!==t})):[]}(t).forEach((function(t){return n[t]=!0})),n},l=/^[a-z][a-z0-9+\-.]*:/,f=function(){var t=Object(o.a)(r.a.mark((function t(n,e,i,o){var c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null==n||"#"===n[0]||l.test(n)){t.next=5;break}if(!(c=document.querySelector("ion-router"))){t.next=5;break}return null!=e&&e.preventDefault(),t.abrupt("return",c.push(n,i,o));case 5:return t.abrupt("return",!1);case 6:case"end":return t.stop()}}),t)})));return function(n,e,i,r){return t.apply(this,arguments)}}()}}]);