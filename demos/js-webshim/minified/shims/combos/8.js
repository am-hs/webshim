var swfmini=function(){function e(){if(!C){try{var e=T.getElementsByTagName("body")[0].appendChild(p("span"));e.parentNode.removeChild(e)}catch(t){return}C=!0;for(var n=E.length,r=0;n>r;r++)E[r]()}}function t(e){C?e():E[E.length]=e}function n(){}function r(){x&&a()}function a(){var e=T.getElementsByTagName("body")[0],t=p(h);t.setAttribute("type",b);var n=e.appendChild(t);if(n){var r=0;(function(){if(typeof n.GetVariable!=m){var a=n.GetVariable("$version");a&&(a=a.split(" ")[1].split(","),M.pv=[parseInt(a[0],10),parseInt(a[1],10),parseInt(a[2],10)])}else if(10>r)return r++,setTimeout(arguments.callee,10),void 0;e.removeChild(t),n=null})()}}function i(e){var t=null,n=c(e);if(n&&"OBJECT"==n.nodeName)if(typeof n.SetVariable!=m)t=n;else{var r=n.getElementsByTagName(h)[0];r&&(t=r)}return t}function o(e,t,n){var r,a=c(n);if(M.wk&&312>M.wk)return r;if(a)if(typeof e.id==m&&(e.id=n),M.ie&&M.win){var i="";for(var o in e)e[o]!=Object.prototype[o]&&("data"==o.toLowerCase()?t.movie=e[o]:"styleclass"==o.toLowerCase()?i+=' class="'+e[o]+'"':"classid"!=o.toLowerCase()&&(i+=" "+o+'="'+e[o]+'"'));var u="";for(var l in t)t[l]!=Object.prototype[l]&&(u+='<param name="'+l+'" value="'+t[l]+'" />');a.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+i+">"+u+"</object>",k[k.length]=e.id,r=c(e.id)}else{var d=p(h);d.setAttribute("type",b);for(var f in e)e[f]!=Object.prototype[f]&&("styleclass"==f.toLowerCase()?d.setAttribute("class",e[f]):"classid"!=f.toLowerCase()&&d.setAttribute(f,e[f]));for(var v in t)t[v]!=Object.prototype[v]&&"movie"!=v.toLowerCase()&&s(d,v,t[v]);a.parentNode.replaceChild(d,a),r=d}return r}function s(e,t,n){var r=p("param");r.setAttribute("name",t),r.setAttribute("value",n),e.appendChild(r)}function u(e){var t=c(e);t&&"OBJECT"==t.nodeName&&(M.ie&&M.win?(t.style.display="none",function(){4==t.readyState?l(e):setTimeout(arguments.callee,10)}()):t.parentNode.removeChild(t))}function l(e){var t=c(e);if(t){for(var n in t)"function"==typeof t[n]&&(t[n]=null);t.parentNode.removeChild(t)}}function c(e){var t=null;try{t=T.getElementById(e)}catch(n){}return t}function p(e){return T.createElement(e)}function d(e){var t=M.pv,n=e.split(".");return n[0]=parseInt(n[0],10),n[1]=parseInt(n[1],10)||0,n[2]=parseInt(n[2],10)||0,t[0]>n[0]||t[0]==n[0]&&t[1]>n[1]||t[0]==n[0]&&t[1]==n[1]&&t[2]>=n[2]?!0:!1}function f(e,t){if(S){var n,r=t?"visible":"hidden";C&&n&&c(e)&&(c(e).style.visibility=r)}}var m="undefined",h="object",v=jQuery.webshims||window.webshims,g="Shockwave Flash",y="ShockwaveFlash.ShockwaveFlash",b="application/x-shockwave-flash",w=window,T=document,N=navigator,x=!1,E=[r],k=[],A=[],C=!1,S=!0,M=function(){var e=typeof T.getElementById!=m&&typeof T.getElementsByTagName!=m&&typeof T.createElement!=m,t=N.userAgent.toLowerCase(),n=N.platform.toLowerCase(),r=n?/win/.test(n):/win/.test(t),a=n?/mac/.test(n):/mac/.test(t),i=/webkit/.test(t)?parseFloat(t.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):!1,o=!1,s=[0,0,0],u=null;if(typeof N.plugins!=m&&typeof N.plugins[g]==h)u=N.plugins[g].description,!u||typeof N.mimeTypes!=m&&N.mimeTypes[b]&&!N.mimeTypes[b].enabledPlugin||(x=!0,o=!1,u=u.replace(/^.*\s+(\S+\s+\S+$)/,"$1"),s[0]=parseInt(u.replace(/^(.*)\..*$/,"$1"),10),s[1]=parseInt(u.replace(/^.*\.(.*)\s.*$/,"$1"),10),s[2]=/[a-zA-Z]/.test(u)?parseInt(u.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0);else if(typeof w.ActiveXObject!=m)try{var l=new ActiveXObject(y);l&&(u=l.GetVariable("$version"),u&&(o=!0,u=u.split(" ")[1].split(","),s=[parseInt(u[0],10),parseInt(u[1],10),parseInt(u[2],10)]))}catch(c){}return{w3:e,pv:s,wk:i,ie:o,win:r,mac:a}}();return function(){M.ie&&M.win&&window.attachEvent&&window.attachEvent("onunload",function(){for(var e=A.length,t=0;e>t;t++)A[t][0].detachEvent(A[t][1],A[t][2]);for(var n=k.length,r=0;n>r;r++)u(k[r]);for(var a in M)M[a]=null;M=null;for(var i in swfmini)swfmini[i]=null;swfmini=null})}(),v.ready("DOM",e),{registerObject:function(){},getObjectById:function(e){return M.w3?i(e):void 0},embedSWF:function(e,n,r,a,i,s,u,l,c,p){var v={success:!1,id:n};M.w3&&!(M.wk&&312>M.wk)&&e&&n&&r&&a&&i?(f(n,!1),t(function(){r+="",a+="";var t={};if(c&&typeof c===h)for(var s in c)t[s]=c[s];t.data=e,t.width=r,t.height=a;var g={};if(l&&typeof l===h)for(var y in l)g[y]=l[y];if(u&&typeof u===h)for(var b in u)typeof g.flashvars!=m?g.flashvars+="&"+b+"="+u[b]:g.flashvars=b+"="+u[b];if(d(i)){var w=o(t,g,n);t.id==n&&f(n,!0),v.success=!0,v.ref=w}else f(n,!0);p&&p(v)})):p&&p(v)},switchOffAutoHideShow:function(){S=!1},ua:M,getFlashPlayerVersion:function(){return{major:M.pv[0],minor:M.pv[1],release:M.pv[2]}},hasFlashPlayerVersion:d,createSWF:function(e,t,n){return M.w3?o(e,t,n):void 0},showExpressInstall:function(){},removeSWF:function(e){M.w3&&u(e)},createCSS:function(){},addDomLoadEvent:t,addLoadEvent:n,expressInstallCallback:function(){}}}();webshims.register("dom-extend",function(e,t,n,r,a){"use strict";if(t.assumeARIA=e.support.getSetAttribute||Modernizr.canvas||Modernizr.video||Modernizr.boxsizing,("text"==e('<input type="email" />').attr("type")||""===e("<form />").attr("novalidate")||"required"in e("<input />")[0].attributes)&&t.error("IE browser modes are busted in IE10. Please test your HTML/CSS/JS with a real IE version or at least IETester or similiar tools"),e.parseHTML||t.error("Webshims needs jQuery 1.8+ to work properly. Please update your jQuery version or downgrade webshims."),!t.cfg.no$Switch){var i=function(){if(!n.jQuery||n.$&&n.jQuery!=n.$||n.jQuery.webshims||(t.error("jQuery was included more than once. Make sure to include it only once! Webshims and other Plugins might not work properly."),n.$&&(n.$=t.$),n.jQuery=t.$),t.M!=Modernizr){t.error("Modernizr was included more than once. Make sure to include it only once! Webshims and other scripts might not work properly.");for(var e in Modernizr)e in t.M||(t.M[e]=Modernizr[e]);Modernizr=t.M}};i(),setTimeout(i,90),e(i)}var o=t.modules,s=/\s*,\s*/,u={},l={},c={},p={},d={},f=e.fn.val,m=function(t,n,r,a,i){return i?f.call(e(t)):f.call(e(t),r)};e.widget||function(){var t=e.cleanData;e.cleanData=function(n){if(!e.widget)for(var r,a=0;null!=(r=n[a]);a++)try{e(r).triggerHandler("remove")}catch(i){}t(n)}}(),e.fn.val=function(t){var n=this[0];if(arguments.length&&null==t&&(t=""),!arguments.length)return n&&1===n.nodeType?e.prop(n,"value",t,"val",!0):f.call(this);if(e.isArray(t))return f.apply(this,arguments);var r=e.isFunction(t);return this.each(function(i){if(n=this,1===n.nodeType)if(r){var o=t.call(n,i,e.prop(n,"value",a,"val",!0));null==o&&(o=""),e.prop(n,"value",o,"val")}else e.prop(n,"value",t,"val")})},e.fn.onTrigger=function(e,t){return this.on(e,t).each(t)},e.fn.onWSOff=function(t,n,a,i){i||(i=r),e(i)[a?"onTrigger":"on"](t,n),this.on("remove",function(r){r.originalEvent||e(i).off(t,n)})};var h="_webshimsLib"+Math.round(1e3*Math.random()),v=function(t,n,r){if(t=t.jquery?t[0]:t,!t)return r||{};var i=e.data(t,h);return r!==a&&(i||(i=e.data(t,h,{})),n&&(i[n]=r)),n?i&&i[n]:i};[{name:"getNativeElement",prop:"nativeElement"},{name:"getShadowElement",prop:"shadowElement"},{name:"getShadowFocusElement",prop:"shadowFocusElement"}].forEach(function(t){e.fn[t.name]=function(){var n=[];return this.each(function(){var r=v(this,"shadowData"),a=r&&r[t.prop]||this;-1==e.inArray(a,n)&&n.push(a)}),this.pushStack(n)}}),e.Tween.propHooks._default&&e.css&&function(){var n=!1;try{n="10px"==e.css(e('<b style="width: 10px" />')[0],"width","")}catch(r){t.error(r)}var a=n?function(t,n){return e.css(t,n,!1,"")}:function(t,n){return e.css(t,n,"")};e.extend(e.Tween.propHooks._default,{get:function(t){var n;return null==t.elem[t.prop]&&!l[t.prop]||t.elem.style&&null!=t.elem.style[t.prop]?(n=a(t.elem,t.prop),n&&"auto"!==n?n:0):l[t.prop]?e.prop(t.elem,t.prop):t.elem[t.prop]},set:function(t){jQuery.fx.step[t.prop]?jQuery.fx.step[t.prop](t):t.elem.style&&(null!=t.elem.style[jQuery.cssProps[t.prop]]||jQuery.cssHooks[t.prop])?jQuery.style(t.elem,t.prop,t.now+t.unit):l[t.prop]?e.prop(t.elem,t.prop,t.now):t.elem[t.prop]=t.now}})}(),["removeAttr","prop","attr"].forEach(function(n){u[n]=e[n],e[n]=function(t,r,i,o,s){var p="val"==o,f=p?m:u[n];if(!t||!l[r]||1!==t.nodeType||!p&&o&&"attr"==n&&e.attrFn[r])return f(t,r,i,o,s);var h,v,g,y=(t.nodeName||"").toLowerCase(),b=c[y],w="attr"!=n||i!==!1&&null!==i?n:"removeAttr";if(b||(b=c["*"]),b&&(b=b[r]),b&&(h=b[w]),h){if("value"==r&&(v=h.isVal,h.isVal=p),"removeAttr"===w)return h.value.call(t);if(i===a)return h.get?h.get.call(t):h.value;h.set&&("attr"==n&&i===!0&&(i=r),g=h.set.call(t,i)),"value"==r&&(h.isVal=v)}else g=f(t,r,i,o,s);if((i!==a||"removeAttr"===w)&&d[y]&&d[y][r]){var T;T="removeAttr"==w?!1:"prop"==w?!!i:!0,d[y][r].forEach(function(e){(!e.only||(e.only="prop"&&"prop"==n)||"attr"==e.only&&"prop"!=n)&&e.call(t,i,T,p?"val":w,n)})}return g},p[n]=function(e,r,i){c[e]||(c[e]={}),c[e][r]||(c[e][r]={});var o=c[e][r][n],s=function(e,t,a){return t&&t[e]?t[e]:a&&a[e]?a[e]:"prop"==n&&"value"==r?function(e){var t=this;return i.isVal?m(t,r,e,!1,0===arguments.length):u[n](t,r,e)}:"prop"==n&&"value"==e&&i.value.apply?function(){var e=u[n](this,r);return e&&e.apply&&(e=e.apply(this,arguments)),e}:function(e){return u[n](this,r,e)}};c[e][r][n]=i,i.value===a&&(i.set||(i.set=i.writeable?s("set",i,o):t.cfg.useStrict&&"prop"==r?function(){throw r+" is readonly on "+e}:function(){t.info(r+" is readonly on "+e)}),i.get||(i.get=s("get",i,o))),["value","get","set"].forEach(function(e){i[e]&&(i["_sup"+e]=s(e,o))})}});var g=function(){var e=t.getPrototypeOf(r.createElement("foobar")),n=Object.prototype.hasOwnProperty,a=Modernizr.advancedObjectProperties&&Modernizr.objectAccessor;return function(i,o,s){var u,l;if(!(a&&(u=r.createElement(i))&&(l=t.getPrototypeOf(u))&&e!==l)||u[o]&&n.call(u,o))s._supvalue=function(){var e=v(this,"propValue");return e&&e[o]&&e[o].apply?e[o].apply(this,arguments):e&&e[o]},y.extendValue(i,o,s.value);else{var c=u[o];s._supvalue=function(){return c&&c.apply?c.apply(this,arguments):c},l[o]=s.value}s.value._supvalue=s._supvalue}}(),y=function(){var n={};t.addReady(function(r,i){var o={},s=function(t){o[t]||(o[t]=e(r.getElementsByTagName(t)),i[0]&&e.nodeName(i[0],t)&&(o[t]=o[t].add(i)))};e.each(n,function(e,n){return s(e),n&&n.forEach?(n.forEach(function(t){o[e].each(t)}),a):(t.warn("Error: with "+e+"-property. methods: "+n),a)}),o=null});var i,o=e([]),s=function(t,a){n[t]?n[t].push(a):n[t]=[a],e.isDOMReady&&(i||e(r.getElementsByTagName(t))).each(a)};return{createTmpCache:function(t){return e.isDOMReady&&(i=i||e(r.getElementsByTagName(t))),i||o},flushTmpCache:function(){i=null},content:function(t,n){s(t,function(){var t=e.attr(this,n);null!=t&&e.attr(this,n,t)})},createElement:function(e,t){s(e,t)},extendValue:function(t,n,r){s(t,function(){e(this).each(function(){var e=v(this,"propValue",{});e[n]=this[n],this[n]=r})})}}}(),b=function(e,t){e.defaultValue===a&&(e.defaultValue=""),e.removeAttr||(e.removeAttr={value:function(){e[t||"prop"].set.call(this,e.defaultValue),e.removeAttr._supvalue.call(this)}}),e.attr||(e.attr={})};e.extend(t,{getID:function(){var t=(new Date).getTime();return function(n){n=e(n);var r=n.prop("id");return r||(t++,r="ID-"+t,n.eq(0).prop("id",r)),r}}(),implement:function(e,n){var r=v(e,"implemented")||v(e,"implemented",{});return r[n]?(t.warn(n+" already implemented for element #"+e.id),!1):(r[n]=!0,!0)},extendUNDEFProp:function(t,n){e.each(n,function(e,n){e in t||(t[e]=n)})},createPropDefault:b,data:v,moveToFirstEvent:function(t,n,r){var a,i=(e._data(t,"events")||{})[n];i&&i.length>1&&(a=i.pop(),r||(r="bind"),"bind"==r&&i.delegateCount?i.splice(i.delegateCount,0,a):i.unshift(a)),t=null},addShadowDom:function(){var a,i,o,s={init:!1,runs:0,test:function(){var e=s.getHeight(),t=s.getWidth();e!=s.height||t!=s.width?(s.height=e,s.width=t,s.handler({type:"docresize"}),s.runs++,9>s.runs&&setTimeout(s.test,90)):s.runs=0},handler:function(t){clearTimeout(a),a=setTimeout(function(){if("resize"==t.type){var a=e(n).width(),u=e(n).width();if(u==i&&a==o)return;i=u,o=a,s.height=s.getHeight(),s.width=s.getWidth()}e(r).triggerHandler("updateshadowdom")},"resize"==t.type?50:9)},_create:function(){e.each({Height:"getHeight",Width:"getWidth"},function(e,t){var n=r.body,a=r.documentElement;s[t]=function(){return Math.max(n["scroll"+e],a["scroll"+e],n["offset"+e],a["offset"+e],a["client"+e])}})},start:function(){!this.init&&r.body&&(this.init=!0,this._create(),this.height=s.getHeight(),this.width=s.getWidth(),setInterval(this.test,600),e(this.test),t.ready("WINDOWLOAD",this.test),e(n).bind("resize",this.handler),function(){var t,n=e.fn.animate;e.fn.animate=function(){return clearTimeout(t),t=setTimeout(function(){s.test()},99),n.apply(this,arguments)}}())}};return t.docObserve=function(){t.ready("DOM",function(){s.start()})},function(n,r,a){a=a||{},n.jquery&&(n=n[0]),r.jquery&&(r=r[0]);var i=e.data(n,h)||e.data(n,h,{}),o=e.data(r,h)||e.data(r,h,{}),s={};a.shadowFocusElement?a.shadowFocusElement&&(a.shadowFocusElement.jquery&&(a.shadowFocusElement=a.shadowFocusElement[0]),s=e.data(a.shadowFocusElement,h)||e.data(a.shadowFocusElement,h,s)):a.shadowFocusElement=r,e(n).on("remove",function(t){t.originalEvent||e(r).remove()}),i.hasShadow=r,s.nativeElement=o.nativeElement=n,s.shadowData=o.shadowData=i.shadowData={nativeElement:n,shadowElement:r,shadowFocusElement:a.shadowFocusElement},a.shadowChilds&&a.shadowChilds.each(function(){v(this,"shadowData",o.shadowData)}),a.data&&(s.shadowData.data=o.shadowData.data=i.shadowData.data=a.data),a=null,t.docObserve()}}(),propTypes:{standard:function(e){b(e),e.prop||(e.prop={set:function(t){e.attr.set.call(this,""+t)},get:function(){return e.attr.get.call(this)||e.defaultValue}})},"boolean":function(e){b(e),e.prop||(e.prop={set:function(t){t?e.attr.set.call(this,""):e.removeAttr.value.call(this)},get:function(){return null!=e.attr.get.call(this)}})},src:function(){var t=r.createElement("a");return t.style.display="none",function(n,r){b(n),n.prop||(n.prop={set:function(e){n.attr.set.call(this,e)},get:function(){var n,a=this.getAttribute(r);if(null==a)return"";if(t.setAttribute("href",a+""),!e.support.hrefNormalized){try{e(t).insertAfter(this),n=t.getAttribute("href",4)}catch(i){n=t.getAttribute("href",4)}e(t).detach()}return n||t.href}})}}(),enumarated:function(e){b(e),e.prop||(e.prop={set:function(t){e.attr.set.call(this,t)},get:function(){var t=(e.attr.get.call(this)||"").toLowerCase();return t&&-1!=e.limitedTo.indexOf(t)||(t=e.defaultValue),t}})}},reflectProperties:function(n,r){"string"==typeof r&&(r=r.split(s)),r.forEach(function(r){t.defineNodeNamesProperty(n,r,{prop:{set:function(t){e.attr(this,r,t)},get:function(){return e.attr(this,r)||""}}})})},defineNodeNameProperty:function(n,r,a){return l[r]=!0,a.reflect&&t.propTypes[a.propType||"standard"](a,r),["prop","attr","removeAttr"].forEach(function(i){var o=a[i];o&&(o="prop"===i?e.extend({writeable:!0},o):e.extend({},o,{writeable:!0}),p[i](n,r,o),"*"!=n&&t.cfg.extendNative&&"prop"==i&&o.value&&e.isFunction(o.value)&&g(n,r,o),a[i]=o)}),a.initAttr&&y.content(n,r),a},defineNodeNameProperties:function(e,n,r,a){for(var i in n)!a&&n[i].initAttr&&y.createTmpCache(e),r&&(n[i][r]||(n[i][r]={},["value","set","get"].forEach(function(e){e in n[i]&&(n[i][r][e]=n[i][e],delete n[i][e])}))),n[i]=t.defineNodeNameProperty(e,i,n[i]);return a||y.flushTmpCache(),n},createElement:function(n,r,a){var i;return e.isFunction(r)&&(r={after:r}),y.createTmpCache(n),r.before&&y.createElement(n,r.before),a&&(i=t.defineNodeNameProperties(n,a,!1,!0)),r.after&&y.createElement(n,r.after),y.flushTmpCache(),i},onNodeNamesPropertyModify:function(t,n,r,a){"string"==typeof t&&(t=t.split(s)),e.isFunction(r)&&(r={set:r}),t.forEach(function(e){d[e]||(d[e]={}),"string"==typeof n&&(n=n.split(s)),r.initAttr&&y.createTmpCache(e),n.forEach(function(t){d[e][t]||(d[e][t]=[],l[t]=!0),r.set&&(a&&(r.set.only=a),d[e][t].push(r.set)),r.initAttr&&y.content(e,t)}),y.flushTmpCache()})},defineNodeNamesBooleanProperty:function(n,r,i){i||(i={}),e.isFunction(i)&&(i.set=i),t.defineNodeNamesProperty(n,r,{attr:{set:function(e){this.setAttribute(r,e),i.set&&i.set.call(this,!0)},get:function(){var e=this.getAttribute(r);return null==e?a:r}},removeAttr:{value:function(){this.removeAttribute(r),i.set&&i.set.call(this,!1)}},reflect:!0,propType:"boolean",initAttr:i.initAttr||!1})},contentAttr:function(e,t,n){if(e.nodeName){var r;return n===a?(r=e.attributes[t]||{},n=r.specified?r.value:null,null==n?a:n):("boolean"==typeof n?n?e.setAttribute(t,t):e.removeAttribute(t):e.setAttribute(t,n),a)}},activeLang:function(){var n,r,a=[],i={},s=/:\/\/|^\.*\//,u=function(n,r,a){var i;return r&&a&&-1!==e.inArray(r,a.availabeLangs||[])?(n.loading=!0,i=a.langSrc,s.test(i)||(i=t.cfg.basePath+i),t.loader.loadScript(i+r+".js",function(){n.langObj[r]?(n.loading=!1,c(n,!0)):e(function(){n.langObj[r]&&c(n,!0),n.loading=!1})}),!0):!1},l=function(e){i[e]&&i[e].forEach(function(e){e.callback(n,r,"")})},c=function(e,t){if(e.activeLang!=n&&e.activeLang!==r){var a=o[e.module].options;e.langObj[n]||r&&e.langObj[r]?(e.activeLang=n,e.callback(e.langObj[n]||e.langObj[r],n),l(e.module)):t||u(e,n,a)||u(e,r,a)||!e.langObj[""]||""===e.activeLang||(e.activeLang="",e.callback(e.langObj[""],n),l(e.module))}},p=function(t){return"string"==typeof t&&t!==n?(n=t,r=n.split("-")[0],n==r&&(r=!1),e.each(a,function(e,t){c(t)})):"object"==typeof t&&(t.register?(i[t.register]||(i[t.register]=[]),i[t.register].push(t),t.callback(n,r,"")):(t.activeLang||(t.activeLang=""),a.push(t),c(t))),n};return p}()}),e.each({defineNodeNamesProperty:"defineNodeNameProperty",defineNodeNamesProperties:"defineNodeNameProperties",createElements:"createElement"},function(e,n){t[e]=function(e,r,a,i){"string"==typeof e&&(e=e.split(s));var o={};return e.forEach(function(e){o[e]=t[n](e,r,a,i)}),o}}),t.isReady("webshimLocalization",!0)}),function(e,t){if(!(!e.webshims.assumeARIA||"content"in t.createElement("template")||(e(function(){var t=e("main").attr({role:"main"});t.length>1?webshims.error("only one main element allowed in document"):t.is("article *, section *")&&webshims.error("main not allowed inside of article/section elements")}),"hidden"in t.createElement("a")))){var n={article:"article",aside:"complementary",section:"region",nav:"navigation",address:"contentinfo"},r=function(e,t){var n=e.getAttribute("role");n||e.setAttribute("role",t)};e.webshims.addReady(function(a,i){if(e.each(n,function(t,n){for(var o=e(t,a).add(i.filter(t)),s=0,u=o.length;u>s;s++)r(o[s],n)}),a===t){var o=t.getElementsByTagName("header")[0],s=t.getElementsByTagName("footer"),u=s.length;if(o&&!e(o).closest("section, article")[0]&&r(o,"banner"),!u)return;var l=s[u-1];e(l).closest("section, article")[0]||r(l,"contentinfo")}})}}(jQuery,document),webshims.register("form-core",function(e,t,n,r,a,i){"use strict";t.capturingEventPrevented=function(t){if(!t._isPolyfilled){var n=t.isDefaultPrevented,r=t.preventDefault;t.preventDefault=function(){return clearTimeout(e.data(t.target,t.type+"DefaultPrevented")),e.data(t.target,t.type+"DefaultPrevented",setTimeout(function(){e.removeData(t.target,t.type+"DefaultPrevented")},30)),r.apply(this,arguments)},t.isDefaultPrevented=function(){return!(!n.apply(this,arguments)&&!e.data(t.target,t.type+"DefaultPrevented"))},t._isPolyfilled=!0}},Modernizr.formvalidation&&!t.bugs.bustedValidity&&t.capturingEvents(["invalid"],!0);var o=function(t){return(e.prop(t,"validity")||{valid:1}).valid},s=function(){t.loader.loadList(i.addValidators?["form-validation","form-validators"]:["form-validation"]),e(r).off(".lazyloadvalidation")},u={number:1,range:1,date:1,time:1,month:1},l=function(t){var n=!1;return e(e.prop(t,"elements")).each(function(){return n=e(this).is(":invalid"),n?!1:a}),n};e.extend(e.expr[":"],{"valid-element":function(t){return e.nodeName(t,"form")?!l(t):!(!e.prop(t,"willValidate")||!o(t))},"invalid-element":function(t){return e.nodeName(t,"form")?l(t):!(!e.prop(t,"willValidate")||o(t))},"required-element":function(t){return!(!e.prop(t,"willValidate")||!e.prop(t,"required"))},"user-error":function(t){return e.prop(t,"willValidate")&&e(t).hasClass("user-error")},"optional-element":function(t){return!(!e.prop(t,"willValidate")||e.prop(t,"required")!==!1)},"in-range":function(t){if(!u[e.prop(t,"type")]||!e.prop(t,"willValidate"))return!1;var n=e.prop(t,"validity");return!(!n||n.rangeOverflow||n.rangeUnderflow)},"out-of-range":function(t){if(!u[e.prop(t,"type")]||!e.prop(t,"willValidate"))return!1;var n=e.prop(t,"validity");return!(!n||!n.rangeOverflow&&!n.rangeUnderflow)}}),["valid","invalid","required","optional"].forEach(function(t){e.expr[":"][t]=e.expr.filters[t+"-element"]}),e.expr[":"].focus=function(e){try{var t=e.ownerDocument;return e===t.activeElement&&(!t.hasFocus||t.hasFocus())}catch(n){}return!1},t.triggerInlineForm=function(t,n){e(t).trigger(n)};var c=function(e,n,r){s(),t.ready("form-validation",function(){e[n].apply(e,r)})};t.wsPopover={id:0,_create:function(){this.options=e.extend({},t.cfg.wspopover,this.options),this.id=t.wsPopover.id++,this.eventns=".wsoverlay"+this.id,this.timers={},this.element=e('<div class="ws-popover" tabindex="-1"><div class="ws-po-outerbox"><div class="ws-po-arrow"><div class="ws-po-arrowbox" /></div><div class="ws-po-box" /></div></div>'),this.contentElement=e(".ws-po-box",this.element),this.lastElement=e([]),this.bindElement(),this.element.data("wspopover",this)},options:{},content:function(e){this.contentElement.html(e)},bindElement:function(){var e=this,t=function(){e.stopBlur=!1};this.preventBlur=function(){e.stopBlur=!0,clearTimeout(e.timers.stopBlur),e.timers.stopBlur=setTimeout(t,9)},this.element.on({mousedown:this.preventBlur})},show:function(){c(this,"show",arguments)}},t.validityAlert={showFor:function(){c(this,"showFor",arguments)}},function(){var t,n,a=[];e(r).on("invalid",function(i){if(!i.wrongWebkitInvalid){var o=e(i.target);if(!t){t=e.Event("firstinvalid"),t.isInvalidUIPrevented=i.isDefaultPrevented;var s=e.Event("firstinvalidsystem");e(r).triggerHandler(s,{element:i.target,form:i.target.form,isInvalidUIPrevented:i.isDefaultPrevented}),o.trigger(t)}t&&t.isDefaultPrevented()&&i.preventDefault(),a.push(i.target),i.extraData="fix",clearTimeout(n),n=setTimeout(function(){var n={type:"lastinvalid",cancelable:!1,invalidlist:e(a)};t=!1,a=[],e(i.target).trigger(n,n)},9),o=null}})}(),t.getContentValidationMessage=function(t,n,r){var i=e(t).data("errormessage")||t.getAttribute("x-moz-errormessage")||"";return r&&i[r]&&(i=i[r]),"object"==typeof i&&(n=n||e.prop(t,"validity")||{valid:1},n.valid||e.each(n,function(e,t){return t&&"valid"!=e&&i[e]?(i=i[e],!1):a})),"object"==typeof i&&(i=i.defaultMessage),i||""},e.fn.getErrorMessage=function(n){var r="",a=this[0];return a&&(r=t.getContentValidationMessage(a,!1,n)||e.prop(a,"customValidationMessage")||e.prop(a,"validationMessage")),r},t.ready("forms",function(){e(r).on("focusin.lazyloadvalidation",function(t){"form"in t.target&&e(t.target).is(":invalid")&&s()})}),t.ready("WINDOWLOAD",s),i.overrideMessages&&(i.customMessages=!0,t.error("overrideMessages is deprecated. use customMessages instead.")),i.replaceValidationUI&&t.ready("DOM forms",function(){e(r).on("firstinvalid",function(e){e.isInvalidUIPrevented()||(e.preventDefault(),t.validityAlert.showFor(e.target))})})}),webshims.register("form-message",function(e,t,n,r,a,i){"use strict";i.overrideMessages&&(i.customMessages=!0,t.error("overrideMessages is deprecated. use customMessages instead."));var o=t.validityMessages,s=i.customMessages?["customValidationMessage"]:[];o.en=e.extend(!0,{typeMismatch:{defaultMessage:"Please enter a valid value.",email:"Please enter an email address.",url:"Please enter a URL.",number:"Please enter a number.",date:"Please enter a date.",time:"Please enter a time.",range:"Invalid input.",month:"Please enter a valid value.","datetime-local":"Please enter a datetime."},rangeUnderflow:{defaultMessage:"Value must be greater than or equal to {%min}."},rangeOverflow:{defaultMessage:"Value must be less than or equal to {%max}."},stepMismatch:"Invalid input.",tooLong:"Please enter at most {%maxlength} character(s). You entered {%valueLen}.",patternMismatch:"Invalid input. {%title}",valueMissing:{defaultMessage:"Please fill out this field.",checkbox:"Please check this box if you want to proceed."}},o.en||o["en-US"]||{}),"object"==typeof o.en.valueMissing&&["select","radio"].forEach(function(e){o.en.valueMissing[e]=o.en.valueMissing[e]||"Please select an option."}),"object"==typeof o.en.rangeUnderflow&&["date","time","datetime-local","month"].forEach(function(e){o.en.rangeUnderflow[e]=o.en.rangeUnderflow[e]||"Value must be at or after {%min}."}),"object"==typeof o.en.rangeOverflow&&["date","time","datetime-local","month"].forEach(function(e){o.en.rangeOverflow[e]=o.en.rangeOverflow[e]||"Value must be at or before {%max}."}),o["en-US"]=o["en-US"]||o.en,o[""]=o[""]||o["en-US"],o.de=e.extend(!0,{typeMismatch:{defaultMessage:"{%value} ist in diesem Feld nicht zulässig.",email:"{%value} ist keine gültige E-Mail-Adresse.",url:"{%value} ist kein(e) gültige(r) Webadresse/Pfad.",number:"{%value} ist keine Nummer.",date:"{%value} ist kein Datum.",time:"{%value} ist keine Uhrzeit.",month:"{%value} ist in diesem Feld nicht zulässig.",range:"{%value} ist keine Nummer.","datetime-local":"{%value} ist kein Datum-Uhrzeit Format."},rangeUnderflow:{defaultMessage:"{%value} ist zu niedrig. {%min} ist der unterste Wert, den Sie benutzen können."},rangeOverflow:{defaultMessage:"{%value} ist zu hoch. {%max} ist der oberste Wert, den Sie benutzen können."},stepMismatch:"Der Wert {%value} ist in diesem Feld nicht zulässig. Hier sind nur bestimmte Werte zulässig. {%title}",tooLong:"Der eingegebene Text ist zu lang! Sie haben {%valueLen} Zeichen eingegeben, dabei sind {%maxlength} das Maximum.",patternMismatch:"{%value} hat für dieses Eingabefeld ein falsches Format. {%title}",valueMissing:{defaultMessage:"Bitte geben Sie einen Wert ein.",checkbox:"Bitte aktivieren Sie das Kästchen."}},o.de||{}),"object"==typeof o.de.valueMissing&&["select","radio"].forEach(function(e){o.de.valueMissing[e]=o.de.valueMissing[e]||"Bitte wählen Sie eine Option aus."}),"object"==typeof o.de.rangeUnderflow&&["date","time","datetime-local","month"].forEach(function(e){o.de.rangeUnderflow[e]=o.de.rangeUnderflow[e]||"{%value} ist zu früh. {%min} ist die früheste Zeit, die Sie benutzen können."}),"object"==typeof o.de.rangeOverflow&&["date","time","datetime-local","month"].forEach(function(e){o.de.rangeOverflow[e]=o.de.rangeOverflow[e]||"{%value} ist zu spät. {%max} ist die späteste Zeit, die Sie benutzen können."});var u=o[""],l=function(t,n){return t&&"string"!=typeof t&&(t=t[e.prop(n,"type")]||t[(n.nodeName||"").toLowerCase()]||t.defaultMessage),t||""},c={value:1,min:1,max:1};t.createValidationMessage=function(n,r){var a,i=l(u[r],n),s=e.prop(n,"type");return i||(i=l(o[""][r],n)||e.prop(n,"validationMessage"),t.info("could not find errormessage for: "+r+" / "+s+". in language: "+e.webshims.activeLang())),i&&["value","min","max","title","maxlength","label"].forEach(function(o){if(-1!==i.indexOf("{%"+o)){var u=("label"==o?e.trim(e('label[for="'+n.id+'"]',n.form).text()).replace(/\*$|:$/,""):e.prop(n,o))||"";"patternMismatch"!=r||"title"!=o||u||t.error("no title for patternMismatch provided. Always add a title attribute."),c[o]&&(a||(a=e(n).getShadowElement().data("wsWidget"+s)),a&&a.formatValue&&(u=a.formatValue(u,!1))),i=i.replace("{%"+o+"}",u),"value"==o&&(i=i.replace("{%valueLen}",u.length))}}),i||""},(!Modernizr.formvalidation||t.bugs.bustedValidity)&&s.push("validationMessage"),t.activeLang({langObj:o,module:"form-core",callback:function(e){u=e}}),s.forEach(function(n){t.defineNodeNamesProperty(["fieldset","output","button"],n,{prop:{value:"",writeable:!1}}),["input","select","textarea"].forEach(function(r){var i=t.defineNodeNameProperty(r,n,{prop:{get:function(){var n=this,r="";if(!e.prop(n,"willValidate"))return r;var o=e.prop(n,"validity")||{valid:1};return o.valid?r:(r=t.getContentValidationMessage(n,o))?r:o.customError&&n.nodeName&&(r=Modernizr.formvalidation&&!t.bugs.bustedValidity&&i.prop._supget?i.prop._supget.call(n):t.data(n,"customvalidationMessage"))?r:(e.each(o,function(e,i){return"valid"!=e&&i?(r=t.createValidationMessage(n,e),r?!1:a):a}),r||"")},writeable:!1}})})})}),function(e,t,n){"use strict";var r,a,i=t.audio&&t.video,o=!1,s=n.bugs,u="mediaelement-jaris",l=function(){n.ready(u,function(){n.mediaelement.createSWF||(n.mediaelement.loadSwf=!0,n.reTest([u],i))})},c=n.cfg.mediaelement;if(!c)return n.error("mediaelement wasn't implemented but loaded"),void 0;if(i){var p=document.createElement("video");t.videoBuffered="buffered"in p,o="loop"in p,n.capturingEvents(["play","playing","waiting","paused","ended","durationchange","loadedmetadata","canplay","volumechange"]),t.videoBuffered||(n.addPolyfill("mediaelement-native-fix",{d:["dom-support"]}),n.loader.loadList(["mediaelement-native-fix"]))}if(i&&!c.preferFlash){var d={1:1,2:1},f=function(t){var r,i;!c.preferFlash&&(e(t.target).is("audio, video")||(i=t.target.parentNode)&&e("source:last",i)[0]==t.target)&&(r=e(t.target).closest("audio, video"))&&!d[r.prop("error")]&&e(function(){a&&!c.preferFlash?(l(),n.ready("WINDOWLOAD "+u,function(){setTimeout(function(){c.preferFlash||!n.mediaelement.createSWF||r.is(".nonnative-api-active")||(c.preferFlash=!0,document.removeEventListener("error",f,!0),e("audio, video").each(function(){n.mediaelement.selectSource(this)}),n.error("switching mediaelements option to 'preferFlash', due to an error with native player: "+t.target.src+" Mediaerror: "+r.prop("error")))},9)})):document.removeEventListener("error",f,!0)})};document.addEventListener("error",f,!0),e("audio, video").each(function(){var t=e.prop(this,"error");return t&&!d[t]?(f({target:this}),!1):void 0})}t.track&&!s.track&&function(){if(s.track||(s.track="number"!=typeof e("<track />")[0].readyState),!s.track)try{new TextTrackCue(2,3,"")}catch(t){s.track=!0}}(),r=t.track&&!s.track,n.register("mediaelement-core",function(e,t,n,s,p){a=swfmini.hasFlashPlayerVersion("9.0.115"),e("html").addClass(a?"swf":"no-swf");var d=t.mediaelement;d.parseRtmp=function(e){var n,r,a,i=e.src.split("://"),o=i[1].split("/");for(e.server=i[0]+"://"+o[0]+"/",e.streamId=[],n=1,r=o.length;r>n;n++)a||-1===o[n].indexOf(":")||(o[n]=o[n].split(":")[1],a=!0),a?e.streamId.push(o[n]):e.server+=o[n]+"/";e.streamId.length||t.error("Could not parse rtmp url"),e.streamId=e.streamId.join("/")};var f=function(t,n){t=e(t);var r,a={src:t.attr("src")||"",elem:t,srcProp:t.prop("src")};return a.src?(r=t.attr("data-server"),null!=r&&(a.server=r),r=t.attr("type"),r?(a.type=r,a.container=e.trim(r.split(";")[0])):(n||(n=t[0].nodeName.toLowerCase(),"source"==n&&(n=(t.closest("video, audio")[0]||{nodeName:"video"}).nodeName.toLowerCase())),a.server?(a.type=n+"/rtmp",a.container=n+"/rtmp"):(r=d.getTypeForSrc(a.src,n,a),r&&(a.type=r,a.container=r))),r=t.attr("media"),r&&(a.media=r),("audio/rtmp"==a.type||"video/rtmp"==a.type)&&(a.server?a.streamId=a.src:d.parseRtmp(a)),a):a},m=!a&&"postMessage"in n&&i,h=function(){h.loaded||(h.loaded=!0,t.ready("WINDOWLOAD",function(){g(),t.loader.loadList(["track-ui"])}))},v=function(){var n;return function(){!n&&m&&(n=!0,t.loader.loadScript("https://www.youtube.com/player_api"),e(function(){t._polyfill(["mediaelement-yt"])}))}}(),g=function(){a?l():v()};t.addPolyfill("mediaelement-yt",{test:!m,d:["dom-support"]}),d.mimeTypes={audio:{"audio/ogg":["ogg","oga","ogm"],'audio/ogg;codecs="opus"':"opus","audio/mpeg":["mp2","mp3","mpga","mpega"],"audio/mp4":["mp4","mpg4","m4r","m4a","m4p","m4b","aac"],"audio/wav":["wav"],"audio/3gpp":["3gp","3gpp"],"audio/webm":["webm"],"audio/fla":["flv","f4a","fla"],"application/x-mpegURL":["m3u8","m3u"]},video:{"video/ogg":["ogg","ogv","ogm"],"video/mpeg":["mpg","mpeg","mpe"],"video/mp4":["mp4","mpg4","m4v"],"video/quicktime":["mov","qt"],"video/x-msvideo":["avi"],"video/x-ms-asf":["asf","asx"],"video/flv":["flv","f4v"],"video/3gpp":["3gp","3gpp"],"video/webm":["webm"],"application/x-mpegURL":["m3u8","m3u"],"video/MP2T":["ts"]}},d.mimeTypes.source=e.extend({},d.mimeTypes.audio,d.mimeTypes.video),d.getTypeForSrc=function(t,n){if(-1!=t.indexOf("youtube.com/watch?")||-1!=t.indexOf("youtube.com/v/"))return"video/youtube";
if(0===t.indexOf("rtmp"))return n+"/rtmp";t=t.split("?")[0].split("."),t=t[t.length-1];var r;return e.each(d.mimeTypes[n],function(e,n){return-1!==n.indexOf(t)?(r=e,!1):p}),r},d.srces=function(t,n){if(t=e(t),!n){n=[];var r=t[0].nodeName.toLowerCase(),a=f(t,r);return a.src?n.push(a):e("source",t).each(function(){a=f(this,r),a.src&&n.push(a)}),n}t.removeAttr("src").removeAttr("type").find("source").remove(),e.isArray(n)||(n=[n]),n.forEach(function(e){var n=s.createElement("source");"string"==typeof e&&(e={src:e}),n.setAttribute("src",e.src),e.type&&n.setAttribute("type",e.type),e.media&&n.setAttribute("media",e.media),t.append(n)})},e.fn.loadMediaSrc=function(t,n){return this.each(function(){n!==p&&(e(this).removeAttr("poster"),n&&e.attr(this,"poster",n)),d.srces(this,t),e(this).mediaLoad()})},d.swfMimeTypes=["video/3gpp","video/x-msvideo","video/quicktime","video/x-m4v","video/mp4","video/m4p","video/x-flv","video/flv","audio/mpeg","audio/aac","audio/mp4","audio/x-m4a","audio/m4a","audio/mp3","audio/x-fla","audio/fla","youtube/flv","video/jarisplayer","jarisplayer/jarisplayer","video/youtube","video/rtmp","audio/rtmp"],d.canThirdPlaySrces=function(t,n){var r="";return(a||m)&&(t=e(t),n=n||d.srces(t),e.each(n,function(e,t){return t.container&&t.src&&(a&&-1!=d.swfMimeTypes.indexOf(t.container)||m&&"video/youtube"==t.container)?(r=t,!1):p})),r};var y={};d.canNativePlaySrces=function(t,n){var r="";if(i){t=e(t);var a=(t[0].nodeName||"").toLowerCase(),o=(y[a]||{prop:{_supvalue:!1}}).prop._supvalue||t[0].canPlayType;if(!o)return r;n=n||d.srces(t),e.each(n,function(e,n){return n.type&&o.call(t[0],n.type)?(r=n,!1):p})}return r};var b=/^\s*application\/octet\-stream\s*$/i,w=function(){var t=b.test(e.attr(this,"type")||"");return t&&e(this).removeAttr("type"),t};d.setError=function(n,r){if(e("source",n).filter(w).length){t.error('"application/octet-stream" is a useless mimetype for audio/video. Please change this attribute.');try{e(n).mediaLoad()}catch(a){}}else r||(r="can't play sources"),e(n).pause().data("mediaerror",r),t.error("mediaelementError: "+r),setTimeout(function(){e(n).data("mediaerror")&&e(n).trigger("mediaerror")},1)};var T=function(){var e;return function(n,r,i){t.ready(a?u:"mediaelement-yt",function(){d.createSWF?d.createSWF(n,r,i):e||(e=!0,g(),T(n,r,i))}),e||!m||d.createSWF||v()}}(),N=function(e,t,n,r,a){var i;n||n!==!1&&t&&"third"==t.isActive?(i=d.canThirdPlaySrces(e,r),i?T(e,i,t):a?d.setError(e,!1):N(e,t,!1,r,!0)):(i=d.canNativePlaySrces(e,r),i?t&&"third"==t.isActive&&d.setActive(e,"html5",t):a?(d.setError(e,!1),t&&"third"==t.isActive&&d.setActive(e,"html5",t)):N(e,t,!0,r,!0))},x=/^(?:embed|object|datalist)$/i,E=function(n,r){var a=t.data(n,"mediaelementBase")||t.data(n,"mediaelementBase",{}),i=d.srces(n),o=n.parentNode;clearTimeout(a.loadTimer),e.data(n,"mediaerror",!1),i.length&&o&&1==o.nodeType&&!x.test(o.nodeName||"")&&(r=r||t.data(n,"mediaelement"),N(n,r,c.preferFlash||p,i))};d.selectSource=E,e(s).on("ended",function(n){var r=t.data(n.target,"mediaelement");(!o||r&&"html5"!=r.isActive||e.prop(n.target,"loop"))&&setTimeout(function(){!e.prop(n.target,"paused")&&e.prop(n.target,"loop")&&e(n.target).prop("currentTime",0).play()},1)}),t.ready("dom-support",function(){o||t.defineNodeNamesBooleanProperty(["audio","video"],"loop"),["audio","video"].forEach(function(n){var r=t.defineNodeNameProperty(n,"load",{prop:{value:function(){var e=t.data(this,"mediaelement");E(this,e),!i||e&&"html5"!=e.isActive||!r.prop._supvalue||r.prop._supvalue.apply(this,arguments)}}});y[n]=t.defineNodeNameProperty(n,"canPlayType",{prop:{value:function(t){var r="";return i&&y[n].prop._supvalue&&(r=y[n].prop._supvalue.call(this,t),"no"==r&&(r="")),!r&&a&&(t=e.trim((t||"").split(";")[0]),-1!=d.swfMimeTypes.indexOf(t)&&(r="maybe")),r}}})}),t.onNodeNamesPropertyModify(["audio","video"],["src","poster"],{set:function(){var e=this,n=t.data(e,"mediaelementBase")||t.data(e,"mediaelementBase",{});clearTimeout(n.loadTimer),n.loadTimer=setTimeout(function(){E(e),e=null},9)}})});var k=function(){var a=function(){if(t.implement(this,"mediaelement")&&(E(this),i)){var r,a,o=this,s=function(){var t=e.prop(o,"buffered");if(t){for(var n="",r=0,a=t.length;a>r;r++)n+=t.end(r);return n}},u=function(){var n=s();n!=a&&(a=n,t.info("needed to trigger progress manually"),e(o).triggerHandler("progress"))};e(this).on({"play loadstart progress":function(e){"progress"==e.type&&(a=s()),clearTimeout(r),r=setTimeout(u,999)},"emptied stalled mediaerror abort suspend":function(e){"emptied"==e.type&&(a=!1),clearTimeout(r)}}),"ActiveXObject"in n&&e.prop(this,"paused")&&!e.prop(this,"readyState")&&e(this).is('audio[preload="none"][controls]:not([autoplay],.nonnative-api-active)')&&e(this).prop("preload","metadata").mediaLoad()}},o=!1;t.ready("dom-support",function(){o=!0,t.addReady(function(t,n){var r=e("video, audio",t).add(n.filter("video, audio")).each(a);!h.loaded&&e("track",r).length&&h(),r=null})}),i&&!o&&t.addReady(function(n,a){o||e("video, audio",n).add(a.filter("video, audio")).each(function(){return d.canNativePlaySrces(this)?(r&&!t.modules.track.options.override||h.loaded||!e("track",this).length||h(),p):(g(),o=!0,!1)})})};r&&t.defineProperty(TextTrack.prototype,"shimActiveCues",{get:function(){return this._shimActiveCues||this.activeCues}}),i?(t.isReady("mediaelement-core",!0),k(),t.ready("WINDOWLOAD mediaelement",g)):t.ready(u,k),t.ready("track",h)})}(jQuery,Modernizr,webshims);