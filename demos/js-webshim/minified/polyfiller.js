(function(e){window.jQuery&&(e(jQuery),e=jQuery.noop),"function"==typeof define&&define.amd&&define.amd.jQuery&&define("polyfiller",["jquery"],e)})(function(e){"use strict";var t="dom-support",n=e(document.scripts||"script"),o=e.event.special,a=e([]),r=window.Modernizr,i=window.asyncWebshims,s=r.addTest,c=window.Object,l=window.html5||{};r.advancedObjectProperties=r.objectAccessor=r.ES5=!!("create"in c&&"seal"in c),!r.ES5||"toJSON"in Date.prototype||(r.ES5=!1),e.event.customEvent||(e.event.customEvent={});var u={version:"1.10.6beta1",cfg:{useImportantStyles:!0,waitReady:!0,extendNative:!0,loadStyles:!0,disableShivMethods:!0,wspopover:{appendTo:"body",hideOnBlur:!0},basePath:function(){var t,o=n.filter('[src*="polyfiller.js"]');return o=o[0]||o.end()[o.end().length-1],t=(e.support.hrefNormalized?o.src:o.getAttribute("src",4)).split("?")[0],t=t.slice(0,t.lastIndexOf("/")+1)+"shims/"}()},bugs:{},modules:{},features:{},featureList:[],setOptions:function(t,n){"string"==typeof t&&void 0!==n?d[t]=e.isPlainObject(n)?e.extend(!0,d[t]||{},n):n:"object"==typeof t&&e.extend(!0,d,t)},addPolyfill:function(t,n){n=n||{};var o=n.f||t;f[o]||(f[o]=[],u.featureList.push(o),d[o]={}),!f[o].failedM&&n.nM&&e.each(n.nM.split(" "),function(e,t){return t in r?void 0:(f[o].failedM=t,!1)}),f[o].failedM&&(n.test=function(){return u.error("webshims needs Modernizr."+f[o].failedM+" to implement feature: "+o),!0}),f[o].push(t),n.options=e.extend(d[o],n.options),w(t,n),n.methodNames&&e.each(n.methodNames,function(e,t){u.addMethodName(t)})},polyfill:function(){var e={};return function(t){t||(t=u.featureList,u.info("loading all features without specifing might be bad for performance")),"string"==typeof t&&(t=t.split(" "));for(var n=0;t.length>n;n++)e[t[n]]&&u.error(t[n]+" already loaded, you might want to use updatePolyfill instead? see: bit.ly/12BtXX3"),e[t[n]]=!0;return u._polyfill(t)}}(),_polyfill:function(){var t,n=function(t){var o,a=[];d.disableShivMethods&&(l.shivMethods=!1);var r=function(){e("html").removeClass("loading-polyfills long-loading-polyfills"),e(window).unbind(".lP"),clearTimeout(o)};a.push("loading-polyfills"),o=setTimeout(function(){e("html").addClass("long-loading-polyfills"),o=setTimeout(r,300)},300),e(window).on("load.lP error.lP",r),d.waitReady&&e.isReady&&u.warn("Call webshims.polyfill before DOM-Ready or set waitReady to false."),m(t,r),d.useImportantStyles&&a.push("polyfill-important"),a[0]&&e("html").addClass(a.join(" ")),d.loadStyles&&y.loadCSS("styles/shim.css"),n=e.noop};return function(o){var a=[];t||(t=-1!==e.inArray("forms",o),t||-1===e.inArray("forms-ext",o)||(o.push("forms"),t=!0)),d.waitReady&&(e.readyWait++,m(o,function(){e.ready(!0)})),e.each(o,function(e,t){return f[t]?(t!==f[t][0]&&m(f[t],function(){p(t,!0)}),a=a.concat(f[t]),void 0):(u.error("could not find webshims-feature (aborted): "+t),p(t,!0),void 0)}),n(o),g(a)}}(),reTest:function(){var t,n=function(n,a){var r,i=v[a],s=a+"Ready";!i||i.loaded||(i.test&&e.isFunction(i.test)?i.test([]):i.test)||(o[s]&&delete o[s],r=f[i.f],t.push(a))};return function(o){"string"==typeof o&&(o=o.split(" ")),t=[],e.each(o,n),g(t)}}(),isReady:function(t,n){if(t+="Ready",n){if(o[t]&&o[t].add)return!0;o[t]=e.extend(o[t]||{},{add:function(e){e.handler.call(this,t)}}),e(document).triggerHandler(t)}return!(!o[t]||!o[t].add)||!1},ready:function(t,n){var o=arguments[2];if("string"==typeof t&&(t=t.split(" ")),o||(t=e.map(e.grep(t,function(e){return!p(e)}),function(e){return e+"Ready"})),!t.length)return n(e,u,window,document),void 0;var a=t.shift(),r=function(){m(t,n,!0)};e(document).one(a,r)},capturingEvents:function(t,n){document.addEventListener&&("string"==typeof t&&(t=[t]),e.each(t,function(t,a){var r=function(t){return t=e.event.fix(t),n&&u.capturingEventPrevented&&u.capturingEventPrevented(t),e.event.dispatch.call(this,t)};o[a]=o[a]||{},o[a].setup||o[a].teardown||e.extend(o[a],{setup:function(){this.addEventListener(a,r,!0)},teardown:function(){this.removeEventListener(a,r,!0)}})}))},register:function(t,n){var o=v[t];if(!o)return u.error("can't find module: "+t),void 0;if(o.noAutoCallback){var a=function(){n(e,u,window,document,void 0,o.options),p(t,!0)};o.d&&o.d.length?m(o.d,a):a()}},c:{},loader:{addModule:function(t,n){v[t]=n,n.name=n.name||t,n.c||(n.c=[]),e.each(n.c,function(e,n){u.c[n]||(u.c[n]=[]),u.c[n].push(t)})},loadList:function(){var t=[],n=function(n,o){"string"==typeof o&&(o=[o]),e.merge(t,o),y.loadScript(n,!1,o)},o=function(n,o){if(p(n)||-1!=e.inArray(n,t))return!0;var a=v[n];d[a.f||n]||{};var r;return a?(r=a.test&&e.isFunction(a.test)?a.test(o):a.test,r?(p(n,!0),!0):!1):!0},a=function(t,n){if(t.d&&t.d.length){var a=function(t,a){o(a,n)||-1!=e.inArray(a,n)||n.push(a)};e.each(t.d,function(t,n){v[n]?a(t,n):f[n]&&(e.each(f[n],a),m(f[n],function(){p(n,!0)}))}),t.noAutoCallback||(t.noAutoCallback=!0)}};return function(r){var i,s,c,l,d=[],f=function(o,a){return l=a,e.each(u.c[a],function(n,o){return-1==e.inArray(o,d)||-1!=e.inArray(o,t)?(l=!1,!1):void 0}),l?(n("combos/"+l,u.c[l]),!1):void 0};for(s=0;r.length>s;s++)i=v[r[s]],i&&!o(i.name,r)?(i.css&&y.loadCSS(i.css),i.loadInit&&i.loadInit(),i.loaded=!0,a(i,r),d.push(i.name)):i||u.warn("could not find: "+r[s]);for(s=0,c=d.length;c>s;s++)l=!1,i=d[s],-1==e.inArray(i,t)&&("noCombo"!=u.debug&&e.each(v[i].c,f),l||n(v[i].src||i,i))}}(),makePath:function(e){return-1!=e.indexOf("//")||0===e.indexOf("/")?e:(-1==e.indexOf(".")&&(e+=".js"),d.addCacheBuster&&(e+=d.addCacheBuster),d.basePath+e)},loadCSS:function(){var t,n=[];return function(o){o=this.makePath(o),-1==e.inArray(o,n)&&(t=t||e("link, style")[0]||e("script")[0],n.push(o),e('<link rel="stylesheet" />').insertBefore(t).attr({href:o}))}}(),loadScript:function(){var t=[];return function(n,o,a){if(n=y.makePath(n),-1==e.inArray(n,t)){var r=function(){r=null,o&&o(),a&&("string"==typeof a&&(a=a.split(" ")),e.each(a,function(e,t){v[t]&&(v[t].afterLoad&&v[t].afterLoad(),p(v[t].noAutoCallback?t+"FileLoaded":t,!0))}))};t.push(n),window.require?require([n],r):window.sssl?sssl(n,r):window.yepnope?yepnope.injectJs(n,r):window.steal&&steal(n).then(r)}}}()}};e.webshims=u;var d=u.cfg,f=u.features,p=u.isReady,m=u.ready,h=u.addPolyfill,v=u.modules,y=u.loader,g=y.loadList,w=y.addModule,b=u.bugs,x=[],P={warn:1,error:1};u.addMethodName=function(t){t=t.split(":");var n=t[1];1==t.length?(n=t[0],t=t[0]):t=t[0],e.fn[t]=function(){return this.callProp(n,arguments)}},e.fn.callProp=function(t,n){var o;return n||(n=[]),this.each(function(){var a=e.prop(this,t);if(a&&a.apply){if(o=a.apply(this,n),void 0!==o)return!1}else u.warn(t+" is not a method of "+this)}),void 0!==o?o:this},u.activeLang=function(){var e=navigator.browserLanguage||navigator.language||"";return m("webshimLocalization",function(){u.activeLang(e)}),function(t){if(t)if("string"==typeof t)e=t;else if("object"==typeof t){var n=arguments,o=this;m("webshimLocalization",function(){u.activeLang.apply(o,n)})}return e}}(),u.errorLog=[],e.each(["log","error","warn","info"],function(e,t){u[t]=function(e){(P[t]&&u.debug!==!1||u.debug)&&(u.errorLog.push(e),window.console&&console.log&&console[console[t]?t:"log"](e))}}),function(){e.isDOMReady=e.isReady;var t=function(){e.isDOMReady=!0,p("DOM",!0),setTimeout(function(){p("WINDOWLOAD",!0)},9999)};if(e.isDOMReady)t();else{var n=e.ready;e.ready=function(o){return o!==!0&&document.body&&(t(),e.ready=n),n.apply(this,arguments)},e.ready.promise=n.promise}e(t),e(window).load(function(){t(),setTimeout(function(){p("WINDOWLOAD",!0)},9)})}(),function(){var t=[],n=function(){1==this.nodeType&&u.triggerDomUpdate(this)};e.extend(u,{addReady:function(e){var n=function(t,n){u.ready("DOM",function(){e(t,n)})};t.push(n),n(document,a)},triggerDomUpdate:function(n){if(!n||!n.nodeType)return n&&n.jquery&&n.each(function(){u.triggerDomUpdate(this)}),void 0;var o=n.nodeType;if(1==o||9==o){var r=n!==document?e(n):a;e.each(t,function(e,t){t(n,r)})}}}),e.fn.htmlPolyfill=function(t){var o=e.fn.html.call(this,t);return o===this&&e.isDOMReady&&this.each(n),o},e.fn.jProp=function(){return e(e.fn.prop.apply(this,arguments)||[])},e.each(["after","before","append","prepend","replaceWith"],function(t,o){e.fn[o+"Polyfill"]=function(t){return t=e(t),e.fn[o].call(this,t),e.isDOMReady&&t.each(n),this}}),e.each(["insertAfter","insertBefore","appendTo","prependTo","replaceAll"],function(t,n){e.fn[n.replace(/[A-Z]/,function(e){return"Polyfill"+e})]=function(){return e.fn[n].apply(this,arguments),e.isDOMReady&&u.triggerDomUpdate(this),this}}),e.fn.updatePolyfill=function(){return e.isDOMReady&&u.triggerDomUpdate(this),this},e.each(["getNativeElement","getShadowElement","getShadowFocusElement"],function(t,n){e.fn[n]=function(){return this.pushStack(this)}})}(),function(){var t="defineProperty",n=c.prototype.hasOwnProperty,o=["configurable","enumerable","writable"],a=function(e){for(var t=0;3>t;t++)void 0!==e[o[t]]||"writable"===o[t]&&void 0===e.value||(e[o[t]]=!0)},r=function(e){if(e)for(var t in e)n.call(e,t)&&a(e[t])};c.create&&(u.objectCreate=function(t,n,o){r(n);var a=c.create(t,n);return o&&(a.options=e.extend(!0,{},a.options||{},o),o=a.options),a._create&&e.isFunction(a._create)&&a._create(o),a}),c[t]&&(u[t]=function(e,n,o){return a(o),c[t](e,n,o)}),c.defineProperties&&(u.defineProperties=function(e,t){return r(t),c.defineProperties(e,t)}),u.getOwnPropertyDescriptor=c.getOwnPropertyDescriptor,u.getPrototypeOf=c.getPrototypeOf}(),w("swfmini",{test:function(){return window.swfobject&&!window.swfmini&&(window.swfmini=window.swfobject),"swfmini"in window},c:[16,7,2,8,1,12,19,25,23,27]}),v.swfmini.test(),h("es5",{test:!(!r.ES5||!Function.prototype.bind),c:[14,18,19,25,20]}),h("dom-extend",{f:t,noAutoCallback:!0,d:["es5"],c:[16,7,2,15,30,3,8,4,9,10,14,25,19,20,26,28,31]}),h("json-storage",{test:r.localstorage&&"sessionStorage"in window&&"JSON"in window,d:["swfmini"],noAutoCallback:!0,c:[14],nM:"localstorage"}),h("geolocation",{test:r.geolocation,options:{destroyWrite:!0},d:["json-storage"],c:[21],nM:"geolocation"}),function(){var n;h("canvas",{src:"excanvas",test:r.canvas,options:{type:"flash"},noAutoCallback:!0,loadInit:function(){var t,o=this.options.type;!o||-1===o.indexOf("flash")||v.swfmini.test()&&!swfmini.hasFlashPlayerVersion("9.0.0")||(window.FlashCanvasOptions=window.FlashCanvasOptions||{},n=FlashCanvasOptions,"flash"==o?(e.extend(n,{swfPath:d.basePath+"FlashCanvas/"}),this.src="FlashCanvas/flashcanvas",t=n.swfPath+"flashcanvas.swf"):(e.extend(n,{swfPath:d.basePath+"FlashCanvasPro/"}),this.src="FlashCanvasPro/flashcanvas",t=n.swfPath+"flash10canvas.swf"))},afterLoad:function(){u.addReady(function(t,n){t==document&&window.G_vmlCanvasManager&&G_vmlCanvasManager.init_&&G_vmlCanvasManager.init_(document),e("canvas",t).add(n.filter("canvas")).each(function(){var e=this.getContext;!e&&window.G_vmlCanvasManager&&G_vmlCanvasManager.initElement(this)}),t==document&&p("canvas",!0)})},methodNames:["getContext"],d:[t],nM:"canvas"})}(),function(){var n,o,a,i=r.input,c=r.inputtypes,l="formvalidation",f="form-number-date-api",p=e('<select required="" name="a"><option disabled="" /></select>')[0],m=!1,y=function(){return y.run||(s(l,function(){return!(!i.required||!i.pattern)}),s("fieldsetdisabled",function(){var t=e("<fieldset />")[0];return"elements"in t&&"disabled"in t}),c&&s("styleableinputrange",function(){return c.range&&!window.opera}),r[l]&&(b.bustedValidity=m=!(!window.opera&&r.formattribute!==!1&&r.fieldsetdisabled&&"value"in document.createElement("progress")&&"value"in document.createElement("output")&&(e('<input type="date" value="1488-12-11" />')[0].validity||{valid:!0}).valid&&"required"in p&&!(p.validity||{}).valid)),n=r[l]&&!m?"form-native-extend":"form-shim-extend"),y.run=!0,!1};i&&c&&y(),document.createElement("datalist"),u.formcfg=[],u.validationMessages=u.validityMessages=[],u.inputTypes={},h("form-core",{f:"forms",d:["es5"],test:y,options:{placeholderType:"value",langSrc:"i18n/formcfg-",messagePopover:{},datalistPopover:{constrainWidth:!0},iVal:{handleBubble:!0,sel:".ws-instantvalidation",recheckDelay:400},availabeLangs:["ar","ch-ZN","el","es","fr","he","hi","hu","it","ja","lt","nl","pt-PT","ru","sv"]},methodNames:["setCustomValidity","checkValidity"],c:[16,7,2,8,1,15,30,3,31],nM:"input"}),o=d.forms,h("form-native-extend",{f:"forms",test:function(t){return!r[l]||m||-1==e.inArray(f,t||[])||v[f].test()},d:["form-core",t,"form-message"],c:[6,5]}),h("form-shim-extend",{f:"forms",test:function(){return r[l]&&!m},d:["form-core",t],c:[16,15]}),h("form-message",{f:"forms",test:function(e){return!(o.customMessages||!r[l]||m||!v[n].test(e))},d:[t],c:[16,7,15,30,3,8,4]}),a={noAutoCallback:!0,options:o,c:[24]},w("form-validation",e.extend({d:["form-message"]},a)),w("form-validators",e.extend({},a)),h(f,{f:"forms-ext",options:{types:"range date time number month"},test:function(){var t=!0,n=this.options;return n._types||(n._types=n.types.split(" ")),y(),e.each(n._types,function(e,n){return n in c&&!c[n]?(t=!1,!1):void 0}),t},methodNames:["stepUp","stepDown"],d:["forms",t],c:[6,5,18,17],nM:"input inputtypes"}),w("range-ui",{options:{},noAutoCallback:!0,test:function(){return!!e.fn.rangeUI},d:["es5"],c:[6,5,9,10,18,17,11]}),h("form-number-date-ui",{f:"forms-ext",test:function(){return y(),!this.options.replaceUI&&v[f].test()},d:["forms",t,f,"range-ui"],options:{widgets:{calculateWidth:!0,monthNames:"monthNamesShort",monthNamesHead:"monthNames"}},c:[6,5,9,10,18,17,11]}),h("form-datalist",{f:"forms",test:function(){return y(),i.list&&!o.customDatalist},d:["form-core",t],c:[16,7,6,2,9,15,30,31]})}(),h("filereader",{test:"FileReader"in window,d:["swfmini",t],c:[25,26,27]}),"details"in r||s("details",function(){return"open"in document.createElement("details")}),h("details",{test:r.details,d:[t],options:{text:"Details"},c:[21,22]}),function(){u.mediaelement={},h("mediaelement-core",{f:"mediaelement",noAutoCallback:!0,options:{preferFlash:!1,player:"jaris",vars:{},params:{},attrs:{},changeSWF:e.noop},methodNames:["play","pause","canPlayType","mediaLoad:load"],d:["swfmini"],c:[16,7,2,8,1,12,13,19,25,20,23],nM:"audio video texttrackapi"}),h("mediaelement-jaris",{f:"mediaelement",d:["swfmini",t],test:function(){if(!r.audio||!r.video||u.mediaelement.loadSwf)return!1;var e=this.options;return e.preferFlash&&!v.swfmini.test()&&(e.preferFlash=!1),!(e.preferFlash&&window.swfmini.hasFlashPlayerVersion("9.0.115"))},c:[21,19,25,20,28]}),b.track=r.track&&(!r.texttrackapi||"string"!=typeof(document.createElement("track").track||{}).mode),h("track",{options:{positionDisplay:!0,override:b.track},test:function(){return r.track&&!this.options.override&&!b.track},d:["mediaelement",t],methodNames:["addTextTrack"],c:[21,12,13,22,29],nM:"texttrackapi"}),w("track-ui",{d:["track",t],c:[29]})}(),h("feature-dummy",{test:!0,loaded:!0,c:x}),u.$=e,u.M=r,window.webshims=u,n.filter("[data-polyfill-cfg]").each(function(){try{u.setOptions(e(this).data("polyfillCfg"))}catch(t){u.warn("error parsing polyfill cfg: "+t)}}).end().filter("[data-polyfill]").each(function(){u.polyfill(e.trim(e(this).data("polyfill")||""))}),i&&(i.cfg&&u.setOptions(i.cfg),i.lang&&u.activeLang(i.lang),"polyfill"in i&&u.polyfill(i.polyfill))});