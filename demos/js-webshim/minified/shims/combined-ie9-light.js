(function(a){if(!navigator.geolocation){var f=function(){setTimeout(function(){throw"document.write is overwritten by geolocation shim. This method is incompatibel with this plugin";},1)},v=0;navigator.geolocation=function(){var p,j={getCurrentPosition:function(n,o,i){var q=function(){clearTimeout(b);if(!(p||!window.google||!google.loader||!google.loader.ClientLocation)){var c=google.loader.ClientLocation;p={coords:{latitude:c.latitude,longitude:c.longitude,altitude:null,accuracy:43E3,altitudeAccuracy:null,
heading:parseInt("NaN",10),velocity:null},address:a.extend({streetNumber:"",street:"",premises:"",county:"",postalCode:""},c.address)}}if(p)n(a.extend(p,{timestamp:(new Date).getTime()}));else o&&o({code:2,message:"POSITION_UNAVAILABLE"})},b;if(!window.google||!google.loader){if(a.webshims.modules.geolocation.options.destroyWrite){document.write=f;document.writeln=f}a(document).one("google-loader",q);a.webshims.loader.loadScript("http://www.google.com/jsapi",false,"google-loader");if(i&&i.timeout)b=
setTimeout(function(){a(document).unbind("google-loader",q);o&&o({code:3,message:"TIMEOUT"})},i.timeout)}else setTimeout(q,1)},clearWatch:a.noop};j.watchPosition=function(n,o,i){j.getCurrentPosition(n,o,i);v++;return v};return j}()}})(jQuery);
jQuery.webshims.ready("es5",function(a,f,v,p,j){f.getVisualInput=function(g){g=a(g);return(g.data("inputUIReplace")||{visual:g}).visual};var n=a.support,o=f.getVisualInput,i={checkbox:1,radio:1},q=a([]),b=function(g){g=a(g);return i[g[0].type]&&g[0].name?a(p.getElementsByName(g[0].name)).not(g[0]):q};a.extend(a.expr.filters,{"valid-element":function(g){return(a.attr(g,"validity")||{valid:true}).valid},"invalid-element":function(g){return!c(g)},willValidate:function(g){return a.attr(g,"willValidate")}});
var c=a.expr.filters["valid-element"],d=a.attr,e={selectedIndex:1,value:1,checked:1,disabled:1,readonly:1},h;a.attr=function(g,k,l){if(g.form&&e[k]&&l!==j&&a(g).hasClass("form-ui-invalid")){var m=d.apply(this,arguments);if(c(g)){o(g).removeClass("form-ui-invalid");k=="checked"&&l&&b(g).removeClass("form-ui-invalid")}return m}return d.apply(this,arguments)};a(document).bind("focusout change refreshValidityStyle",function(g){if(!(h||!g.target||!g.target.form)){var k=a.attr(g.target,"html5element")||
g.target;if(a.attr(k,"willValidate")){var l,m;if(c(g.target)){l="form-ui-valid";m="form-ui-invalid";i[g.target.type]&&g.target.checked&&b(k).removeClass(m).removeAttr("aria-invalid")}else{l="form-ui-invalid";m="form-ui-valid";i[g.target.type]&&!g.target.checked&&b(k).removeClass(m)}o(k).addClass(l).removeClass(m);h=true;setTimeout(function(){h=false},9)}else o(k).removeClass("form-ui-invalid form-ui-valid")}});f.triggerInlineForm=function(){var g=function(k){if(typeof k!="string"||k.indexOf("-")!==
-1||k.indexOf(".")!==-1||k.indexOf('"')!==-1)return"";return"var "+k+' = this.form["'+k+'"];'};return function(k,l){var m=k["on"+l]||k.getAttribute("on"+l)||"",s;l=a.Event({type:l,target:k[0],currentTarget:k[0]});if(m&&typeof m=="string"&&k.form&&k.form.elements){var w="";s=0;for(var z=k.form.elements,t=z.length;s<t;s++){var u=z[s].name,x=z[s].id;if(u)w+=g(u);if(x&&x!==u)w+=g(x)}s=function(){eval(w+m)}.call(k,l)}a(k).trigger(l);return s}}();var r=function(){f.scrollRoot=a.browser.webkit||p.compatMode==
"BackCompat"?a(p.body):a(p.documentElement)};r();a(r);f.validityAlert=function(){var g=!a.browser.msie||parseInt(a.browser.version,10)>7?"span":"label",k={hideDelay:5E3,showFor:function(t,u,x){t=a(t);var y=o(t);z();k.clear();this.getMessage(t,u);this.position(y);this.show();if(this.hideDelay)m=setTimeout(s,this.hideDelay);x||this.setFocus(y,t[0])},setFocus:function(t,u){var x=a("input, select, textarea, .ui-slider-handle",t).filter(":visible:first");x[0]||(x=t);var y=f.scrollRoot.scrollTop(),A=x.offset().top,
B;l.attr("for",f.getID(x));if(y>A){if((B=u.id&&a('label[for="'+u.id+'"]',u.form).offset())&&B.top<A)A=B.top;f.scrollRoot.animate({scrollTop:A-5},{queue:false,duration:Math.max(Math.min(450,(y-A)*2),140)});B=true}try{x[0].focus()}catch(C){}B&&f.scrollRoot.scrollTop(y);a(p).bind("focusout.validityalert",s)},getMessage:function(t,u){a("> span",l).text(u||t.attr("validationMessage"))},position:function(t){var u=t.offset();u.top+=t.outerHeight();l.css(u)},show:function(){l.css("display")==="none"?l.fadeIn():
l.fadeTo(400,1)},hide:function(){k.clear();l.fadeOut()},clear:function(){clearTimeout(m);a(p).unbind("focusout.validityalert");l.stop().removeAttr("for")},alert:a("<"+g+' class="validity-alert" role="alert"><span class="va-box" /></'+g+">").css({position:"absolute",display:"none"})},l=k.alert,m=false,s=a.proxy(k,"hide"),w=false,z=function(){if(!w){w=true;a(function(){l.appendTo("body")})}};return k}();(function(){var g,k=[],l;a(p).bind("invalid",function(m){var s=a(m.target).addClass("form-ui-invalid").removeClass("form-ui-valid");
if(!g){g=a.Event("firstinvalid");s.trigger(g)}g&&g.isDefaultPrevented()&&m.preventDefault();k.push(m.target);m.extraData="fix";clearTimeout(l);l=setTimeout(function(){var w={type:"lastinvalid",cancelable:false,invalidlist:a(k)};g=false;k=[];a(void 0).unbind("submit.preventInvalidSubmit");s.trigger(w,w)},9)})})();(function(){if(!(!n.validity||v.noHTMLExtFixes||n.fieldsetValidation)){var g=function(m){var s=(a.attr(m,"validity")||{valid:true}).valid,w=l.value._polyfilled[m.nodeName.toLowerCase()]||
m.checkValidity;!s&&w.call(m)&&a(m).trigger("invalid");return s},k=["fieldset"];n.output||(k=["input","textarea","select","form","fieldset"]);var l={value:function(){if(this.elements||a.nodeName(this,"fieldset")){var m=true;a(this.elements||"input, textarea, select",this).each(function(){g(this)||(m=false)});return m}else if(this.checkValidity)return g(this)}};f.defineNodeNamesProperty(k,"checkValidity",l,true)}})();f.createReadyEvent("form-core")},true);
jQuery.webshims.ready("form-core",function(a,f,v,p){var j=f.validityMessages,n=a.support;j.en=j.en||j["en-US"]||{typeMismatch:{email:"{%value} is not a legal email address",url:"{%value} is not a valid web address",number:"{%value} is not a number!",date:"{%value} is not a date",time:"{%value} is not a time",range:"{%value} is not a number!","datetime-local":"{%value} is not a correct date-time format."},rangeUnderflow:"{%value} is too low. The lowest value you can use is {%min}.",rangeOverflow:"{%value}  is too high. The highest value you can use is {%max}.",
stepMismatch:"The value {%value} is not allowed for this form.",tooLong:"The entered text is too large! You used {%valueLen} letters and the limit is {%maxlength}.",patternMismatch:"{%value} is not in the format this page requires! {%title}",valueMissing:"You have to specify a value"};j["en-US"]=j["en-US"]||j.en;j[""]=j[""]||j["en-US"];j.de=j.de||{typeMismatch:{email:"{%value} ist keine zul\u00e4ssige E-Mail-Adresse",url:"{%value} ist keine zul\u00e4ssige Webadresse",number:"{%value} ist keine Nummer!",
date:"{%value} ist kein Datum",time:"{%value} ist keine Uhrzeit",range:"{%value} ist keine Nummer!","datetime-local":"{%value} ist kein Datum-Uhrzeit Format."},rangeUnderflow:"{%value} ist zu niedrig. {%min} ist der unterste Wert, den Sie benutzen k\u00f6nnen.",rangeOverflow:"{%value} ist zu hoch. {%max} ist der oberste Wert, den Sie benutzen k\u00f6nnen.",stepMismatch:"Der Wert {%value} ist in diesem Feld nicht zul\u00e4ssig. Hier sind nur bestimmte Werte zul\u00e4ssig. {%title}",tooLong:"Der eingegebene Text ist zu lang! Sie haben {%valueLen} Buchstaben eingegeben, dabei sind {%maxlength} das Maximum.",
patternMismatch:"{%value} hat f\u00fcr diese Seite ein falsches Format! {%title}",valueMissing:"Sie m\u00fcssen einen Wert eingeben"};var o=j[""];a(p).bind("htmlExtLangChange",function(){f.activeLang(j,"form-message",function(i){o=i})});f.createValidationMessage=function(i,q){var b=o[q];if(b&&typeof b!=="string")b=b[(i.getAttribute("type")||"").toLowerCase()]||b.defaultMessage;b&&["value","min","max","title","maxlength","label"].forEach(function(c){if(b.indexOf("{%"+c)!==-1){var d=(c=="label"?a.trim(a('label[for="'+
i.id+'"]',i.form).text()).replace(/\*$|:$/,""):a.attr(i,c))||"";b=b.replace("{%"+c+"}",d);if("value"==c)b=b.replace("{%valueLen}",d.length)}});return b||""};p=f.overrideValidationMessages||f.implement.customValidationMessage?["customValidationMessage"]:[];if(!v.noHTMLExtFixes&&!n.validationMessage||!n.validity)p.push("validationMessage");p.forEach(function(i){var q={get:function(){var b="";if(!a.attr(this,"willValidate"))return b;var c=a.attr(this,"validity")||{valid:1};if(c.valid)return b;if(b=this.getAttribute("x-moz-errormessage")||
this.getAttribute("data-errormessage")||"")return b;if(c.customError&&this.nodeName)if(b=q.get._polyfilled[this.nodeName.toLowerCase()].call(this)||a.data(this,"customvalidationMessage"))return b;a.each(c,function(d,e){if(!(d=="valid"||!e))if(b=f.createValidationMessage(this,d))return false});return b||""},set:a.noop};f.defineNodeNamesProperty(["input","select","textarea","fieldset","output"],i,q,i=="validationMessage")})},true);
jQuery.webshims.ready("form-core",function(a,f,v){if(!a.support.validity){f.inputTypes=f.inputTypes||{};var p=f.inputTypes,j={radio:1,checkbox:1};f.addInputType=function(b,c){p[b]=c};var n={customError:false,typeMismatch:false,rangeUnderflow:false,rangeOverflow:false,stepMismatch:false,tooLong:false,patternMismatch:false,valueMissing:false,valid:true},o={valueMissing:function(b,c,d){var e=b[0].getAttribute("aria-required");if(!b.attr("required")){e=="true"&&b[0].setAttribute("aria-required","false");
return false}e=="false"&&b[0].setAttribute("aria-required","true");e=false;if(!("type"in d))d.type=(b[0].getAttribute("type")||b[0].type||"").toLowerCase();return e=d.nodeName=="select"?!c&&b[0].type=="select-one"&&b[0].size<2&&a("> option:first-child:not(:disabled)",b).attr("selected"):j[d.type]?!a(b[0].form&&b[0].name?b[0].form[b[0].name]:[]).filter(":checked")[0]:!c},tooLong:function(b,c,d){if(c===""||d.nodeName=="select")return false;b=b.attr("maxlength");d=false;var e=c.length;if(e&&b>=0&&c.replace&&
(typeof b=="number"||b&&b==b*1))d=e>b;return d},typeMismatch:function(b,c,d){if(c===""||d.nodeName=="select")return false;var e=false;if(!("type"in d))d.type=(b[0].getAttribute("type")||b[0].type||"").toLowerCase();if(p[d.type]&&p[d.type].mismatch)e=p[d.type].mismatch(c,b);return e},patternMismatch:function(b,c,d){if(c===""||d.nodeName=="select")return false;b=b.attr("pattern");if(!b)return false;return!RegExp("^(?:"+b+")$").test(c)}};f.addValidityRule=function(b,c){o[b]=c};f.defineNodeNamesProperty(["input",
"textarea","select","form","fieldset"],"checkValidity",{value:function(){var b,c=function(d){var e,h=a.attr(d,"validity");if(h)a.data(d,"cachedValidity",h);else return true;if(!h.valid){e=a.Event("invalid");var r=a(d).trigger(e);if(!b&&!e.isDefaultPrevented()){f.validityAlert.showFor(r);b=true}}a.data(d,"cachedValidity",false);return h.valid};return function(){b=false;if(a.nodeName(this,"form")||a.nodeName(this,"fieldset")){for(var d=true,e=this.elements||a("input, textarea, select",this),h=0,r=e.length;h<
r;h++)c(e[h])||(d=false);return d}else return this.form?c(this):true}}()},true,"form-htc-checkValidity.htc");f.defineNodeNamesProperty(["input","textarea","select"],"setCustomValidity",{value:function(b){a.data(this,"customvalidationMessage",""+b)}},true,"form-htc-validity.htc");a.event.special.invalid={add:function(){a.data(this,"invalidEventShim")||a.event.special.invalid.setup.call(this)},setup:function(){a(this).bind("submit",a.event.special.invalid.handler).data("invalidEventShim",true);var b=
a(this).data("events").submit;b&&b.length>1&&b.unshift(b.pop())},teardown:function(){a(this).unbind("submit",a.event.special.invalid.handler).data("invalidEventShim",false)},handler:function(b){if(!(b.type!="submit"||!a.nodeName(b.target,"form")||a.attr(b.target,"novalidate")!=null||a.data(b.target,"novalidate")))if(!a(b.target).checkValidity()){!b.originalEvent&&v.console&&console.log&&console.log("submit");b.stopImmediatePropagation();return false}}};f.defineNodeNamesProperty(["input","select",
"textarea"],"validity",{set:a.noop,get:function(){var b=a.data(this,"cachedValidity");if(b)return b;b=a.extend({},n);if(!a.attr(this,"willValidate")||this.type=="submit")return b;var c=a(this),d=c.val(),e={nodeName:this.nodeName.toLowerCase()};this.getAttribute("aria-invalid");b.customError=!!a.data(this,"customvalidationMessage");if(b.customError)b.valid=false;a.each(o,function(h,r){if(r(c,d,e)){b[h]=true;b.valid=false}});this.setAttribute("aria-invalid",b.valid?"false":"true");return b}},true,"form-htc-validity.htc");
f.defineNodeNamesBooleanProperty(["input","textarea","select"],"required");f.defineNodeNamesProperty(["input","select","textarea","fieldset","button","output"],"willValidate",{get:function(){var b={button:1,reset:1,add:1,remove:1,"move-up":1,"move-down":1,hidden:1},c={fieldset:1,button:1,output:1};return function(){return!!(this.form&&!this.disabled&&!this.readOnly&&!b[this.type]&&!c[(this.nodeName||"").toLowerCase()]&&a.attr(this.form,"novalidate")==null)}}()},true,"form-htc-validity.htc");f.addInputType("email",
{mismatch:function(){var b=/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|(\x22((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?\x22))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)*(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i;
return function(c){return!b.test(c)}}()});f.addInputType("url",{mismatch:function(){var b=/^([a-z]([a-z]|\d|\+|-|\.)*):(\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?((\[(|(v[\da-f]{1,}\.(([a-z]|\d|-|\.|_|~)|[!\$&'\(\)\*\+,;=]|:)+))\])|((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=])*)(:\d*)?)(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*|(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)){0})(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;
return function(c){return!b.test(c)}}()});var i=function(){var b=this;if(b.form){a.data(b.form,"novalidate",true);setTimeout(function(){a.data(b.form,"novalidate",false)},1)}},q={submit:1,button:1};a(document).bind("click",function(b){b.target&&b.target.form&&q[b.target.type]&&a.attr(b.target,"formnovalidate")!=null&&i.call(b.target)});f.addReady(function(b,c){var d=a("form",b).add(c.filter("form")).bind("invalid",a.noop).find("button[formnovalidate]").bind("click",i).end();setTimeout(function(){if(!document.activeElement||
!document.activeElement.form){var e=true;a("input, select, textarea",d).each(function(){if(!e)return false;if(this.getAttribute("autofocus")!=null){e=false;var h=f.getVisualInput(this),r=a("input, select, textarea, .ui-slider-handle",h).filter(":visible:first");r[0]||(r=h);try{r[0].focus()}catch(g){}}})}},9)});f.createReadyEvent("form-extend")}},true);
jQuery.webshims.ready("es5",function(a,f,v,p,j){if(!a.support.placeholder){var n=function(c,d,e,h,r){if(!h){h=a.data(c,"placeHolder");if(!h)return}if(r=="focus"||!r&&c===document.activeElement)h.box.removeClass("placeholder-visible");else{if(d===false)d=a.attr(c,"value");if(d)h.box.removeClass("placeholder-visible");else{if(e===false)e=a.attr(c,"placeholder");h.box[e&&!d?"addClass":"removeClass"]("placeholder-visible")}}},o=function(c){c=a(c);var d=c.attr("id"),e=!!(c.attr("title")||c.attr("aria-labeledby"));
if(!e&&d)e=!!a('label[for="'+d+'"]',c[0].form)[0];return a(e?'<span class="placeholder-text"></span>':'<label for="'+(d||a.webshims.getID(c))+'" class="placeholder-text"></label>')},i=function(){var c=/\n|\r|\f|\t/g,d={text:1,search:1,url:1,email:1,password:1,tel:1};return{create:function(e){var h=a.data(e,"placeHolder");if(h)return h;h=a.data(e,"placeHolder",{text:o(e)});h.box=a(e).wrap('<span class="placeholder-box placeholder-box-'+(e.nodeName||"").toLowerCase()+'" />').bind("focus.placeholder blur.placeholder",
function(k){n(this,false,false,h,k.type)}).parent();h.text.insertAfter(e).bind("mousedown.placeholder",function(){n(this,false,false,h,"focus");e.focus();return false});a.each(["Left","Top"],function(k,l){var m=(parseInt(a.curCSS(e,"padding"+l),10)||0)+Math.max(parseInt(a.curCSS(e,"margin"+l),10)||0,0)+(parseInt(a.curCSS(e,"border"+l+"Width"),10)||0);h.text.css("padding"+l,m)});a.curCSS(e,"lineHeight");var r={width:a(e).width(),height:a(e).height()},g=a.curCSS(e,"float");a.each(["lineHeight","fontSize",
"fontFamily","fontWeight"],function(k,l){var m=a.curCSS(e,l);h.text.css(l)!=m&&h.text.css(l,m)});r.width&&r.height&&h.text.css(r);g!=="none"&&h.box.addClass("placeholder-box-"+g);return h},update:function(e,h){if(d[a.attr(e,"type")]||a.nodeName(e,"textarea")){if(a.nodeName(e,"input"))h=h.replace(c,"");var r=i.create(e);f.contentAttr(e,"placeholder")!=h&&f.contentAttr(e,"placeholder",h);r.text.text(h);n(e,false,h,r)}}}}();a.webshims.publicMethods={pHolder:i};f.defineNodeNamesProperty(["input","textarea"],
"placeholder",{set:function(c){i.update(this,c)},get:function(){return f.contentAttr(this,"placeholder")||""}},true,"form-htc-placeholder.htc");var q={set:function(c){var d=f.contentAttr(this,"placeholder");d&&"value"in this&&n(this,c,d);q.set._polyfilled[this.nodeName.toLowerCase()].apply(this,arguments)}};f.defineNodeNamesProperty(["input","textarea"],"value",q);var b=a.fn.val;a.fn.val=function(c){c!==j&&this.each(function(){this.nodeType===1&&q.set.call(this,c,a.noop)});return b.apply(this,arguments)};
a.webshims.addReady(function(c,d){f.useDHTMLBehavior&&f.useMagic||a("input[placeholder], textarea[placeholder]",c).add(d.filter("input[placeholder], textarea[placeholder]")).attr("placeholder",function(e,h){return h})})}});
jQuery.webshims.ready("form-core",function(a,f){if(!("value"in document.createElement("output"))){var v=document;(function(){var j={input:1,textarea:1},n={radio:1,checkbox:1,submit:1,button:1,image:1,reset:1,color:1},o=function(i){var q,b=i.attr("value"),c=function(e){if(i){var h=i.attr("value");if(h!==b){b=h;if(!e||e.type!="input")f.triggerInlineForm(i[0],"input")}}},d=function(){i.unbind("focusout",d).unbind("input",c);clearInterval(q);c();i=null};clearInterval(q);q=setInterval(c,a.browser.mozilla?
250:111);setTimeout(c,9);i.bind("focusout",d).bind("input",c)};a(v).bind("focusin",function(i){if(i.target&&i.target.type&&!i.target.readonly&&!i.target.readOnly&&!i.target.disabled&&j[(i.target.nodeName||"").toLowerCase()]&&!n[i.target.type])o(a(i.target))})})();var p=function(j){if(!j.getAttribute("aria-live")){j=a(j);var n=(j.text()||"").trim(),o=j.attr("id"),i=j.attr("for"),q=a('<input class="output-shim" type="hidden" name="'+(j.attr("name")||"")+'" value="'+n+'" style="display: none" />').insertAfter(j),
b=q[0].form||v,c=function(d){q[0].value=d;d=q[0].value;j.text(d);f.contentAttr(j[0],"value",d)};j[0].defaultValue=n;f.contentAttr(j[0],"value",n);j.attr({"aria-live":"polite"});if(o){q.attr("id",o);j.attr("aria-labeldby",f.getID(a('label[for="'+o+'"]',b)))}if(i){o=f.getID(j);i.split(" ").forEach(function(d){(d=b.getElementById(d))&&d.setAttribute("aria-controls",o)})}j.data("outputShim",c);q.data("outputShim",c);return c}};f.defineNodeNameProperty("output","value",{set:function(j){var n=a.data(this,
"outputShim");if(n==null)n=p(this);n(j)},get:function(){return f.contentAttr(this,"value")}},true);f.addReady(function(j,n){a("output",j).add(n.filter("output")).each(function(){p(this)})});f.createReadyEvent("form-output")}},true);
