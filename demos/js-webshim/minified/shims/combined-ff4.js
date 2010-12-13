jQuery.webshims.ready("es5",function(c,k,z,r,l){k.getVisualInput=function(d){d=c(d);return(d.data("inputUIReplace")||{visual:d}).visual};var u=c.support,t=k.getVisualInput,s={checkbox:1,radio:1},v=c([]),o=function(d){d=c(d);return s[d[0].type]&&d[0].name?c(r.getElementsByName(d[0].name)).not(d[0]):v};c.extend(c.expr.filters,{"valid-element":function(d){return(c.attr(d,"validity")||{valid:true}).valid},"invalid-element":function(d){return!n(d)},willValidate:function(d){return c.attr(d,"willValidate")}});
var n=c.expr.filters["valid-element"],x=c.attr,g={selectedIndex:1,value:1,checked:1,disabled:1,readonly:1},a;c.attr=function(d,e,i){if(d.form&&g[e]&&i!==l&&c(d).hasClass("form-ui-invalid")){var m=x.apply(this,arguments);if(n(d)){t(d).removeClass("form-ui-invalid");e=="checked"&&i&&o(d).removeClass("form-ui-invalid")}return m}return x.apply(this,arguments)};c(document).bind("focusout change refreshValidityStyle",function(d){if(!(a||!d.target||!d.target.form)){var e=c.attr(d.target,"html5element")||
d.target;if(c.attr(e,"willValidate")){var i,m;if(n(d.target)){i="form-ui-valid";m="form-ui-invalid";s[d.target.type]&&d.target.checked&&o(e).removeClass(m).removeAttr("aria-invalid")}else{i="form-ui-invalid";m="form-ui-valid";s[d.target.type]&&!d.target.checked&&o(e).removeClass(m)}t(e).addClass(i).removeClass(m);a=true;setTimeout(function(){a=false},9)}else t(e).removeClass("form-ui-invalid form-ui-valid")}});k.triggerInlineForm=function(){var d=function(e){if(typeof e!="string"||e.indexOf("-")!==
-1||e.indexOf(".")!==-1||e.indexOf('"')!==-1)return"";return"var "+e+' = this.form["'+e+'"];'};return function(e,i){var m=e["on"+i]||e.getAttribute("on"+i)||"",j;i=c.Event({type:i,target:e[0],currentTarget:e[0]});if(m&&typeof m=="string"&&e.form&&e.form.elements){var h="";j=0;for(var f=e.form.elements,p=f.length;j<p;j++){var q=f[j].name,w=f[j].id;if(q)h+=d(q);if(w&&w!==q)h+=d(w)}j=function(){eval(h+m)}.call(e,i)}c(e).trigger(i);return j}}();var b=function(){k.scrollRoot=c.browser.webkit||r.compatMode==
"BackCompat"?c(r.body):c(r.documentElement)};b();c(b);k.validityAlert=function(){var d=!c.browser.msie||parseInt(c.browser.version,10)>7?"span":"label",e={hideDelay:5E3,showFor:function(p,q,w){p=c(p);var y=t(p);f();e.clear();this.getMessage(p,q);this.position(y);this.show();if(this.hideDelay)m=setTimeout(j,this.hideDelay);w||this.setFocus(y,p[0])},setFocus:function(p,q){var w=c("input, select, textarea, .ui-slider-handle",p).filter(":visible:first");w[0]||(w=p);var y=k.scrollRoot.scrollTop(),B=w.offset().top,
A;i.attr("for",k.getID(w));if(y>B){if((A=q.id&&c('label[for="'+q.id+'"]',q.form).offset())&&A.top<B)B=A.top;k.scrollRoot.animate({scrollTop:B-5},{queue:false,duration:Math.max(Math.min(450,(y-B)*2),140)});A=true}try{w[0].focus()}catch(D){}A&&k.scrollRoot.scrollTop(y);c(r).bind("focusout.validityalert",j)},getMessage:function(p,q){c("> span",i).text(q||p.attr("validationMessage"))},position:function(p){var q=p.offset();q.top+=p.outerHeight();i.css(q)},show:function(){i.css("display")==="none"?i.fadeIn():
i.fadeTo(400,1)},hide:function(){e.clear();i.fadeOut()},clear:function(){clearTimeout(m);c(r).unbind("focusout.validityalert");i.stop().removeAttr("for")},alert:c("<"+d+' class="validity-alert" role="alert"><span class="va-box" /></'+d+">").css({position:"absolute",display:"none"})},i=e.alert,m=false,j=c.proxy(e,"hide"),h=false,f=function(){if(!h){h=true;c(function(){i.appendTo("body")})}};return e}();(function(){var d,e=[],i;c(r).bind("invalid",function(m){var j=c(m.target).addClass("form-ui-invalid").removeClass("form-ui-valid");
if(!d){d=c.Event("firstinvalid");j.trigger(d)}d&&d.isDefaultPrevented()&&m.preventDefault();e.push(m.target);m.extraData="fix";clearTimeout(i);i=setTimeout(function(){var h={type:"lastinvalid",cancelable:false,invalidlist:c(e)};d=false;e=[];c(void 0).unbind("submit.preventInvalidSubmit");j.trigger(h,h)},9)})})();(function(){if(!(!u.validity||z.noHTMLExtFixes||u.fieldsetValidation)){var d=function(m){var j=(c.attr(m,"validity")||{valid:true}).valid,h=i.value._polyfilled[m.nodeName.toLowerCase()]||
m.checkValidity;!j&&h.call(m)&&c(m).trigger("invalid");return j},e=["fieldset"];u.output||(e=["input","textarea","select","form","fieldset"]);var i={value:function(){if(this.elements||c.nodeName(this,"fieldset")){var m=true;c(this.elements||"input, textarea, select",this).each(function(){d(this)||(m=false)});return m}else if(this.checkValidity)return d(this)}};k.defineNodeNamesProperty(e,"checkValidity",i,true)}})();k.createReadyEvent("form-core")},true);
jQuery.webshims.ready("form-core",function(c,k,z,r){var l=k.validityMessages,u=c.support;l.en=l.en||l["en-US"]||{typeMismatch:{email:"{%value} is not a legal email address",url:"{%value} is not a valid web address",number:"{%value} is not a number!",date:"{%value} is not a date",time:"{%value} is not a time",range:"{%value} is not a number!","datetime-local":"{%value} is not a correct date-time format."},rangeUnderflow:"{%value} is too low. The lowest value you can use is {%min}.",rangeOverflow:"{%value}  is too high. The highest value you can use is {%max}.",
stepMismatch:"The value {%value} is not allowed for this form.",tooLong:"The entered text is too large! You used {%valueLen} letters and the limit is {%maxlength}.",patternMismatch:"{%value} is not in the format this page requires! {%title}",valueMissing:"You have to specify a value"};l["en-US"]=l["en-US"]||l.en;l[""]=l[""]||l["en-US"];l.de=l.de||{typeMismatch:{email:"{%value} ist keine zul\u00e4ssige E-Mail-Adresse",url:"{%value} ist keine zul\u00e4ssige Webadresse",number:"{%value} ist keine Nummer!",
date:"{%value} ist kein Datum",time:"{%value} ist keine Uhrzeit",range:"{%value} ist keine Nummer!","datetime-local":"{%value} ist kein Datum-Uhrzeit Format."},rangeUnderflow:"{%value} ist zu niedrig. {%min} ist der unterste Wert, den Sie benutzen k\u00f6nnen.",rangeOverflow:"{%value} ist zu hoch. {%max} ist der oberste Wert, den Sie benutzen k\u00f6nnen.",stepMismatch:"Der Wert {%value} ist in diesem Feld nicht zul\u00e4ssig. Hier sind nur bestimmte Werte zul\u00e4ssig. {%title}",tooLong:"Der eingegebene Text ist zu lang! Sie haben {%valueLen} Buchstaben eingegeben, dabei sind {%maxlength} das Maximum.",
patternMismatch:"{%value} hat f\u00fcr diese Seite ein falsches Format! {%title}",valueMissing:"Sie m\u00fcssen einen Wert eingeben"};var t=l[""];c(r).bind("htmlExtLangChange",function(){k.activeLang(l,"form-message",function(s){t=s})});k.createValidationMessage=function(s,v){var o=t[v];if(o&&typeof o!=="string")o=o[(s.getAttribute("type")||"").toLowerCase()]||o.defaultMessage;o&&["value","min","max","title","maxlength","label"].forEach(function(n){if(o.indexOf("{%"+n)!==-1){var x=(n=="label"?c.trim(c('label[for="'+
s.id+'"]',s.form).text()).replace(/\*$|:$/,""):c.attr(s,n))||"";o=o.replace("{%"+n+"}",x);if("value"==n)o=o.replace("{%valueLen}",x.length)}});return o||""};r=k.overrideValidationMessages||k.implement.customValidationMessage?["customValidationMessage"]:[];if(!z.noHTMLExtFixes&&!u.validationMessage||!u.validity)r.push("validationMessage");r.forEach(function(s){var v={get:function(){var o="";if(!c.attr(this,"willValidate"))return o;var n=c.attr(this,"validity")||{valid:1};if(n.valid)return o;if(o=this.getAttribute("x-moz-errormessage")||
this.getAttribute("data-errormessage")||"")return o;if(n.customError&&this.nodeName)if(o=v.get._polyfilled[this.nodeName.toLowerCase()].call(this)||c.data(this,"customvalidationMessage"))return o;c.each(n,function(x,g){if(!(x=="valid"||!g))if(o=k.createValidationMessage(this,x))return false});return o||""},set:c.noop};k.defineNodeNamesProperty(["input","select","textarea","fieldset","output"],s,v,s=="validationMessage")})},true);
jQuery.webshims.ready("form-message form-core",function(c,k,z,r,l){var u=c.support;if(u.validity){var t=k.inputTypes,s={};k.addInputType=function(h,f){t[h]=f};k.addValidityRule=function(h,f){s[h]=f};k.addValidityRule("typeMismatch",function(h,f,p,q){if(f==="")return false;q=q.typeMismatch;if(!("type"in p))p.type=(h[0].getAttribute("type")||"").toLowerCase();if(t[p.type]&&t[p.type].mismatch)q=t[p.type].mismatch(f,h);return q});var v=k.overrideValidationMessages,o=!u.requiredSelect||!u.numericDateProps||
v,n=["customError","typeMismatch","rangeUnderflow","rangeOverflow","stepMismatch","tooLong","patternMismatch","valueMissing","valid"],x=c.attr,g=c.fn.val,a=v?{value:1,checked:1}:{value:1},b=v?["textarea"]:[],d={radio:1,checkbox:1},e=function(h,f){if(h.form){var p=(h.getAttribute&&h.getAttribute("type")||h.type||"").toLowerCase();if(!v)if(!(!u.requiredSelect&&p=="select-one")&&!t[p])return;v&&!f&&d[p]&&h.name?c(r.getElementsByName(h.name)).each(function(){c.attr(this,"validity")}):c.attr(h,"validity")}},
i={value:function(h){h+="";i.value._polyfilled[this.nodeName.toLowerCase()].call(this,h);if(o){c.data(this,"hasCustomError",!!h);e(this)}}};k.defineNodeNamesProperty(["input","textarea","select"],"setCustomValidity",i,true);if(!z.noHTMLExtFixes&&!u.requiredSelect||v){c.extend(a,{required:1,size:1,multiple:1,selectedIndex:1});b.push("select")}if(!u.numericDateProps||v){c.extend(a,{min:1,max:1,step:1});b.push("input")}if(!u.requiredSelect){k.defineNodeNamesBooleanProperty(["select"],"required",true);
k.addValidityRule("valueMissing",function(h,f,p,q){if(p.nodeName=="select"&&!f&&h.attr("required")&&h[0].size<2){if(!p.type)p.type=h[0].type;if(p.type=="select-one"&&c("> option:first-child:not(:disabled)",h).attr("selected"))return true}return q.valueMissing})}if(o){var m={get:function(){var h=m.get._polyfilled[this.nodeName.toLowerCase()].apply(this,arguments);if(!h)return h;var f={};n.forEach(function(C){f[C]=h[C]});if(!c.attr(this,"willValidate"))return f;var p=c(this),q=this,w={type:(q.getAttribute&&
q.getAttribute("type")||"").toLowerCase(),nodeName:(q.nodeName||"").toLowerCase()},y=g.call(p),B=!!c.data(q,"hasCustomError"),A=i.value._polyfilled[q.nodeName.toLowerCase()]||q.setCustomValidity,D;f.customError=B;if(f.valid&&f.customError)f.valid=false;else if(!f.valid){var F=true;c.each(f,function(C,E){if(E)return F=false});if(F)f.valid=true}c.each(s,function(C,E){f[C]=E(p,y,w,f);if(f[C]&&(f.valid||!D&&v)){A.call(q,k.createValidationMessage(q,C));f.valid=false;D=true}});f.valid&&A.call(q,"");return f},
set:c.noop};k.defineNodeNamesProperty(b,"validity",m,true);c.fn.val=function(){var h=g.apply(this,arguments);this.each(function(){e(this)});return h};c.attr=function(h,f,p){var q=x.apply(this,arguments);a[f]&&p!==l&&h.form&&e(h);return q};if(r.addEventListener){r.addEventListener("change",function(h){e(h.target)},true);u.numericDateProps||r.addEventListener("input",function(h){e(h.target)},true)}var j=b.join(",");k.addReady(function(h,f){c(j,h).add(f.filter(j)).attr("validity")})}k.createReadyEvent("form-extend")}},
true);
jQuery.webshims.ready("form-extend",function(c,k,z){k.getStep=function(a,b){var d=c.attr(a,"step");if(d==="any")return d;b=b||s(a);if(!l[b]||!l[b].step)return d;d=g.number.asNumber(d);return(!isNaN(d)&&d>0?d:l[b].step)*l[b].stepScaleFactor};k.addMinMaxNumberToCache=function(a,b,d){if(!(a+"AsNumber"in d)){d[a+"AsNumber"]=l[d.type].asNumber(b.attr(a));if(isNaN(d[a+"AsNumber"])&&a+"Default"in l[d.type])d[a+"AsNumber"]=l[d.type][a+"Default"]}};var r=parseInt("NaN",10),l=k.inputTypes,u=function(a){return typeof a=="number"||
a&&a==a*1},t=function(a){return c('<input type="'+a+'" />').attr("type")===a},s=function(a){return(a.getAttribute("type")||"").toLowerCase()},v=k.addMinMaxNumberToCache,o=function(a,b){a=""+a;b-=a.length;for(var d=0;d<b;d++)a="0"+a;return a};k.addValidityRule("stepMismatch",function(a,b,d){if(b==="")return false;if(!("type"in d))d.type=s(a[0]);if(d.type=="date")return false;var e=false;if(l[d.type]&&l[d.type].step){if(!("step"in d))d.step=k.getStep(a[0],d.type);if(d.step=="any")return false;if(!("valueAsNumber"in
d))d.valueAsNumber=l[d.type].asNumber(b);if(isNaN(d.valueAsNumber))return false;v("min",a,d);a=d.minAsNumber;if(isNaN(a))a=l[d.type].stepBase||0;e=Math.abs((d.valueAsNumber-a)%d.step);e=!(e<=1.0E-7||Math.abs(e-d.step)<=1.0E-7)}return e});[{name:"rangeOverflow",attr:"max",factor:1},{name:"rangeUnderflow",attr:"min",factor:-1}].forEach(function(a){k.addValidityRule(a.name,function(b,d,e){var i=false;if(d==="")return i;if(!("type"in e))e.type=s(b[0]);if(l[e.type]&&l[e.type].asNumber){if(!("valueAsNumber"in
e))e.valueAsNumber=l[e.type].asNumber(d);if(isNaN(e.valueAsNumber))return false;v(a.attr,b,e);if(isNaN(e[a.attr+"AsNumber"]))return i;i=e[a.attr+"AsNumber"]*a.factor<e.valueAsNumber*a.factor-1.0E-7}return i})});var n={get:function(){var a=s(this);return l[a]&&l[a].asNumber?l[a].asNumber(c.attr(this,"value")):r},set:function(a){var b=s(this);if(l[b]&&l[b].numberToString)if(isNaN(a))c.attr(elem,"value","");else{b=l[b].numberToString(a);if(b!==false)c.attr(this,"value",b);else throw"INVALID_STATE_ERR: DOM Exception 11";
}else n.set._polyfilled.input.apply(this,arguments)}},x={get:function(){var a=s(this);return l[a]&&l[a].asDate&&!l[a].noAsDate?l[a].asDate(c.attr(this,"value")):x.get_polyfilled.input.call(this)},set:function(a){var b=s(this);if(l[b]&&l[b].dateToString){if(!z.noHTMLExtFixes)throw"there are some serious issues in opera's implementation. don't use!";if(a===null){c.attr(this,"value","");return""}b=l[b].dateToString(a);if(b!==false){c.attr(this,"value",b);return b}else throw"INVALID_STATE_ERR: DOM Exception 11";
}else return x.set._polyfilled.input.apply(this,arguments)}};k.defineNodeNameProperty("input","valueAsNumber",n,true,"form-htc-number-date.htc");k.defineNodeNameProperty("input","valueAsDate",x,true,"form-htc-number-date.htc");var g={number:{mismatch:function(a){return!u(a)},step:1,stepScaleFactor:1,asNumber:function(a){return u(a)?a*1:r},numberToString:function(a){return u(a)?a:false}},range:{minDefault:0,maxDefault:100},date:{mismatch:function(a){if(!a||!a.split||!/\d$/.test(a))return true;var b=
a.split(/\u002D/);if(b.length!==3)return true;var d=false;c.each(b,function(e,i){if(!(u(i)||i&&i=="0"+i*1)){d=true;return false}});if(d)return d;if(b[0].length!==4||b[1].length!=2||b[1]>12||b[2].length!=2||b[2]>33)d=true;return a!==this.dateToString(this.asDate(a,true))},step:1,stepScaleFactor:864E5,asDate:function(a,b){if(!b&&this.mismatch(a))return null;return new Date(this.asNumber(a,true))},asNumber:function(a,b){var d=r;if(b||!this.mismatch(a)){a=a.split(/\u002D/);d=Date.UTC(a[0],a[1]-1,a[2])}return d},
numberToString:function(a){return u(a)?this.dateToString(new Date(a*1)):false},dateToString:function(a){return a&&a.getFullYear?a.getUTCFullYear()+"-"+o(a.getUTCMonth()+1,2)+"-"+o(a.getUTCDate(),2):false}},time:{mismatch:function(a,b){if(!a||!a.split||!/\d$/.test(a))return true;a=a.split(/\u003A/);if(a.length<2||a.length>3)return true;var d=false,e;if(a[2]){a[2]=a[2].split(/\u002E/);e=parseInt(a[2][1],10);a[2]=a[2][0]}c.each(a,function(i,m){if(!(u(m)||m&&m=="0"+m*1)||m.length!==2){d=true;return false}});
if(d)return true;if(a[0]>23||a[0]<0||a[1]>59||a[1]<0)return true;if(a[2]&&(a[2]>59||a[2]<0))return true;if(e&&isNaN(e))return true;if(e)if(e<100)e*=100;else if(e<10)e*=10;return b===true?[a,e]:false},step:60,stepBase:0,stepScaleFactor:1E3,asDate:function(a){a=new Date(this.asNumber(a));return isNaN(a)?null:a},asNumber:function(a){var b=r;a=this.mismatch(a,true);if(a!==true){b=Date.UTC("1970",0,1,a[0][0],a[0][1],a[0][2]||0);if(a[1])b+=a[1]}return b},dateToString:function(a){if(a&&a.getUTCHours){var b=
o(a.getUTCHours(),2)+":"+o(a.getUTCMinutes(),2),d=a.getSeconds();if(d!="0")b+=":"+o(d,2);d=a.getUTCMilliseconds();if(d!="0")b+="."+o(d,3);return b}else return false}},"datetime-local":{mismatch:function(a,b){if(!a||!a.split||(a+"special").split(/\u0054/).length!==2)return true;a=a.split(/\u0054/);return l.date.mismatch(a[0])||l.time.mismatch(a[1],b)},noAsDate:true,asDate:function(a){a=new Date(this.asNumber(a));return isNaN(a)?null:a},asNumber:function(a){var b=r,d=this.mismatch(a,true);if(d!==true){a=
a.split(/\u0054/)[0].split(/\u002D/);b=Date.UTC(a[0],a[1]-1,a[2],d[0][0],d[0][1],d[0][2]||0);if(d[1])b+=d[1]}return b},dateToString:function(a,b){return l.date.dateToString(a)+"T"+l.time.dateToString(a,b)}}};t("number")||k.addInputType("number",g.number);t("range")||k.addInputType("range",c.extend({},g.number,g.range));t("date")||k.addInputType("date",g.date);t("time")||k.addInputType("time",c.extend({},g.date,g.time));t("datetime-local")||k.addInputType("datetime-local",c.extend({},g.date,g.time,
g["datetime-local"]));k.defineNodeNameProperty("input","type",{get:function(){var a=s(this);return k.inputTypes[a]?a:this.type||this.getAttribute("type")}});k.createReadyEvent("form-number-date")},true);
jQuery.webshims.ready("form-number-date",function(c,k,z,r){var l=k.triggerInlineForm,u=function(g,a){var b={w:g.width()};if(b.w){var d={mL:parseInt(a.css("marginLeft"),10)||0,w:a.outerWidth()};b.mR=parseInt(g.css("marginRight"),10)||0;b.mR&&g.css("marginRight",0);if(d.mL<=d.w*-1){a.css("marginRight",Math.floor(Math.abs(d.w+d.mL)+b.mR));g.css("paddingRight",(parseInt(g.css("paddingRight"),10)||0)+Math.abs(d.mL));g.css("width",Math.floor(b.w+d.mL))}else{a.css("marginRight",b.mR);g.css("width",Math.floor(b.w-
d.mL-d.w))}}},t=c.webshims.modules.inputUI.options,s,v=c([]),o=c.support,n=function(g,a){c("input",g).add(a.filter("input")).each(function(){var b=c.attr(this,"type");n[b]&&!c.data(this,"inputUIReplace")&&n[b](c(this))})};n.common=function(g,a,b){if(t.replaceNative)(function(){var i=[],m;g.bind("firstinvalid",function(j){clearTimeout(m);i.push(j);m=setTimeout(function(){if(!c.data(j.target,"maybePreventedinvalid")&&(!i[0]||!i[0].isDefaultPrevented())&&(!i[1]||!i[1].isDefaultPrevented())){var h=j.target,
f=h.nodeName;if(h.id)f+="#"+h.id;if(h.name)f+='[name="'+h.name+'"]';if(h.className)f+="."+h.className.split(" ").join(".");throw f+" can not be focused. handle the invalid event.";}i=[]},30)})})();else o.validity&&g.bind("firstinvalid",function(i){clearTimeout(s);s=setTimeout(function(){!c.data(i.target,"maybePreventedinvalid")&&!i.isDefaultPrevented()&&k.validityAlert.showFor(i.target)},30)});var d=g.attr("id");d={css:{marginRight:g.css("marginRight"),marginLeft:g.css("marginLeft")},outerWidth:g.outerWidth(),
label:d?c('label[for="'+d+'"]',g[0].form):v};var e=k.getID(d.label);a.addClass(g[0].className).data("html5element",g);g.after(a).data("inputUIReplace",{visual:a,methods:b}).hide();if(a.length==1&&!c("*",a)[0]){a.attr("aria-labeledby",e);d.label.bind("click",function(){a.focus();return false})}return d};if(!o.dateUI||t.replaceNative){n["datetime-local"]=function(g){if(c.fn.datepicker){var a=c('<span role="group" class="input-datetime-local"><input type="text" class="input-datetime-local-date" /><input type="time" class="input-datetime-local-time" /></span>'),
b=this.common(g,a,n["datetime-local"].attrs),d=c("input.input-datetime-local-date",a),e=d.datepicker(c.extend({},t.datepicker,g.data("datepicker"))).bind("change",function(m){var j=d.attr("value"),h=c("input.input-datetime-local-time",a).attr("value");if(j){try{j=(j=c.datepicker.parseDate(d.datepicker("option","dateFormat"),j))?c.datepicker.formatDate("yy-mm-dd",j):d.attr("value")}catch(f){j=d.attr("value")}if(!h){h="00:00";c("input.input-datetime-local-time",a).attr("value",h)}}j=!j&&!h?"":j+"T"+
h;n["datetime-local"].blockAttr=true;g.attr("value",j);n["datetime-local"].blockAttr=false;m.stopImmediatePropagation();l(g[0],"change")}).data("datepicker");e.dpDiv.addClass("input-date-datepicker-control");c("input.input-datetime-local-time",a).bind("change",function(m){var j=c.attr(this,"value"),h=g.attr("value").split("T");if(j&&(h.length<2||!h[0]))h[0]=c.datepicker.formatDate("yy-mm-dd",new Date);if(h[1]=j)try{d.attr("value",c.datepicker.formatDate(d.datepicker("option","dateFormat"),c.datepicker.parseDate("yy-mm-dd",
h[0])))}catch(f){}h=!h[0]&&!h[1]?"":h.join("T");n["datetime-local"].blockAttr=true;g.attr("value",h);n["datetime-local"].blockAttr=false;m.stopImmediatePropagation();l(g[0],"change")});c("input",a).data("html5element",c.data(a[0],"html5element"));a.attr("aria-labeledby",b.label.attr("id"));b.label.bind("click",function(){d.focus();return false});if(b.css){a.css(b.css);if(b.outerWidth){a.outerWidth(b.outerWidth);b=a.width();var i=e.trigger[0]?[0.65,0.35]:[0.6,0.4];d.outerWidth(Math.floor(b*i[0]),true);
c("input.input-datetime-local-time",a).outerWidth(Math.floor(b*i[1]),true);e.trigger[0]&&u(d,e.trigger)}}k.triggerDomUpdate(a);c.each(["disabled","min","max","value","step"],function(m,j){g.attr(j,function(h,f){return f||""})})}};n["datetime-local"].attrs={disabled:function(g,a,b){c("input.input-datetime-local-date",a).datepicker("option","disabled",!!b);c("input.input-datetime-local-time",a).attr("disabled",!!b)},step:function(g,a,b){c("input.input-datetime-local-time",a).attr("step",b)},min:function(g,
a,b){b=b.split?b.split("T"):[];try{b=c.datepicker.parseDate("yy-mm-dd",b[0])}catch(d){b=false}b&&c("input.input-datetime-local-date",a).datepicker("option","minDate",b)},max:function(g,a,b){b=b.split?b.split("T"):[];try{b=c.datepicker.parseDate("yy-mm-dd",b[0])}catch(d){b=false}b&&c("input.input-datetime-local-date",a).datepicker("option","maxDate",b)},value:function(g,a,b){if(!n["datetime-local"].blockAttr){var d;b=b.split?b.split("T"):[];try{d=c.datepicker.parseDate("yy-mm-dd",b[0])}catch(e){d=
false}if(d){c("input.input-datetime-local-date",a).datepicker("setDate",d);c("input.input-datetime-local-time",a).attr("value",b[1]||"00:00")}else{c("input.input-datetime-local-date",a).attr("value",b[0]||"");c("input.input-datetime-local-time",a).attr("value",b[1]||"")}}}};n.date=function(g){if(c.fn.datepicker){var a=c('<input type="text" class="input-date" />'),b=this.common(g,a,n.date.attrs),d=a.datepicker(c.extend({},t.datepicker,g.data("datepicker"))).bind("change",function(e){n.date.blockAttr=
true;var i;try{i=(i=c.datepicker.parseDate(a.datepicker("option","dateFormat"),a.attr("value")))?c.datepicker.formatDate("yy-mm-dd",i):a.attr("value")}catch(m){i=a.attr("value")}g.attr("value",i);n.date.blockAttr=false;e.stopImmediatePropagation();l(g[0],"change")}).data("datepicker");d.dpDiv.addClass("input-date-datepicker-control");if(b.css){a.css(b.css);b.outerWidth&&a.outerWidth(b.outerWidth);d.trigger[0]&&u(a,d.trigger)}c.each(["disabled","min","max","value"],function(e,i){g.attr(i,function(m,
j){return j||""})})}};n.date.attrs={disabled:function(g,a,b){a.datepicker("option","disabled",!!b)},min:function(g,a,b){try{b=c.datepicker.parseDate("yy-mm-dd",b)}catch(d){b=false}b&&a.datepicker("option","minDate",b)},max:function(g,a,b){try{b=c.datepicker.parseDate("yy-mm-dd",b)}catch(d){b=false}b&&a.datepicker("option","maxDate",b)},value:function(g,a,b){if(!n.date.blockAttr){try{var d=c.datepicker.parseDate("yy-mm-dd",b)}catch(e){d=false}d?a.datepicker("setDate",d):a.attr("value",b)}}}}if(!o.rangeUI||
t.replaceNative){n.range=function(g){if(c.fn.slider){var a=c('<span class="input-range"><span class="ui-slider-handle" role="slider" tabindex="0" /></span>'),b=this.common(g,a,n.range.attrs),d=function(e,i){if(e.originalEvent){n.range.blockAttr=true;g.attr("value",i.value);n.range.blockAttr=false;e.type=="slidechange"?l(g[0],"change"):l(g[0],"input")}};c("span",a).attr("aria-labeledby",b.label.attr("id"));b.label.bind("click",function(){c("span",a).focus();return false});if(b.css){a.css(b.css);b.outerWidth&&
a.outerWidth(b.outerWidth)}a.slider(c.extend({},t.slider,g.data("slider"),{change:d,slide:d}));c.each(["disabled","min","max","value","step"],function(e,i){g.attr(i,function(m,j){return j||""})})}};n.range.attrs={disabled:function(g,a,b){b=!!b;a.slider("option","disabled",b);c("span",a).attr({"aria-disabled":b+"",tabindex:b?"-1":"0"})},min:function(g,a,b){b=b?b*1||0:0;a.slider("option","min",b);c("span",a).attr({"aria-valuemin":b})},max:function(g,a,b){b=b||b===0?b*1||100:100;a.slider("option","max",
b);c("span",a).attr({"aria-valuemax":b})},value:function(g,a,b){b=c(g).attr("valueAsNumber");if(isNaN(b)){b=(a.slider("option","max")-a.slider("option","min"))/2;g.value=b}n.range.blockAttr||a.slider("option","value",b);c("span",a).attr({"aria-valuenow":b,"aria-valuetext":b})},step:function(g,a,b){b=b&&c.trim(b)?b*1||1:1;a.slider("option","step",b)}}}c.each(["disabled","min","max","value","step"],function(g,a){var b={set:function(d){var e=c.data(this,"inputUIReplace"),i=b.set._polyfilled.input.apply(this,
arguments);if(e&&e.methods[a])d=e.methods[a](this,e.visual,d);return i}};k.defineNodeNameProperty("input",a,b)});var x=function(g){if(g){g=c.extend({},g,t.date);c("input.hasDatepicker").filter(".input-date, .input-datetime-local-date").datepicker("option",g).each(function(){var a=c.data(this,"html5element");a&&c.each(["disabled","min","max","value"],function(b,d){a.attr(d,function(e,i){return i||""})})});c.datepicker.setDefaults(g)}};c(r).bind("jquery-uiReady.langchange input-widgetsReady.langchange",
function(){c.datepicker&&c(r).bind("htmlExtLangChange",function(){k.activeLang(c.datepicker.regional,"inputUI",x)}).unbind("jquery-uiReady.langchange input-widgetsReady.langchange")});k.addReady(function(g,a){c(r).bind("jquery-uiReady.initinputui input-widgetsReady.initinputui",function(){if(c.datepicker||c.fn.slider)n(g,a);c.datepicker&&c.fn.slider&&c(r).unbind("jquery-uiReady.initinputui input-widgetsReady.initinputui");g===r&&k.createReadyEvent("inputUI")})});(function(){if(!(o.numericDateProps||
!k.modules["form-number-date"])){var g=k.modules["form-number-date"].options,a=c.browser.msie&&parseInt(c.browser.version,10)<8?2:0,b=k.inputTypes,d=function(j,h,f){f=f||{};if(!("type"in f))f.type=c.attr(j,"type");if(!("step"in f))f.step=k.getStep(j,f.type);if(!("valueAsNumber"in f))f.valueAsNumber=b[f.type].asNumber(c.attr(j,"value"));var p=f.step=="any"?b[f.type].step*b[f.type].stepScaleFactor:f.step;k.addMinMaxNumberToCache("min",c(j),f);k.addMinMaxNumberToCache("max",c(j),f);if(isNaN(f.valueAsNumber))f.valueAsNumber=
b[f.type].stepBase||0;if(f.step!=="any")if((j=Math.round((f.valueAsNumber-(f.minAsnumber||0))%f.step*1E7)/1E7)&&Math.abs(j)!=f.step)f.valueAsNumber-=j;j=f.valueAsNumber+p*h;if(!isNaN(f.minAsNumber)&&j<f.minAsNumber)j=f.valueAsNumber*h<f.minAsNumber?f.minAsNumber:isNaN(f.maxAsNumber)?Number.MAX_VALUE:f.maxAsNumber;else if(!isNaN(f.maxAsNumber)&&j>f.maxAsNumber)j=f.valueAsNumber*h>f.maxAsNumber?f.maxAsNumber:isNaN(f.minAsNumber)?Number.MIN_VALUE:f.minAsNumber;return Math.round(j*1E7)/1E7};k.modules["form-number-date"].getNextStep=
d;var e=function(j,h,f){if(!(j.disabled||j.readOnly||c(f).hasClass("step-controls"))){c.attr(j,"value",b[h].numberToString(d(j,c(f).hasClass("step-up")?1:-1,{type:h})));c(j).unbind("blur.stepeventshim");l(j,"input");if(r.activeElement){if(r.activeElement!==j)try{j.focus()}catch(p){}setTimeout(function(){if(r.activeElement!==j)try{j.focus()}catch(q){}c(j).one("blur.stepeventshim",function(){l(j,"change")})},0)}}};if(g.stepArrows){var i={elementNames:["input"],set:function(){i.set._polyfilled.input.apply(this,
arguments);var j=c.data(this,"step-controls");if(j)j[this.disabled||this.readonly?"addClass":"removeClass"]("disabled-step-control")}};k.defineNodeNameProperty("input","disabled",i);k.defineNodeNameProperty("input","readonly",i)}var m={38:1,40:-1};k.addReady(function(j,h){g.stepArrows&&c("input",j).add(h.filter("input")).each(function(){var f=c.attr(this,"type");if(!(!b[f]||!b[f].asNumber||!g.stepArrows||g.stepArrows!==true&&!g.stepArrows[f]||c(this).hasClass("has-step-controls"))){var p=this,q=c('<span class="step-controls" unselectable="on"><span class="step-up" /><span class="step-down" /></span>').insertAfter(this).bind("selectstart dragstart",
function(){return false}).bind("mousedown mousepress",function(y){e(p,f,y.target);return false}),w=c(this).addClass("has-step-controls").data("step-controls",q).attr({readonly:this.readOnly,disabled:this.disabled,autocomplete:"off",role:"spinbutton"}).bind(c.browser.msie?"keydown":"keypress",function(y){if(!(this.disabled||this.readOnly||!m[y.keyCode])){c.attr(this,"value",b[f].numberToString(d(this,m[y.keyCode],{type:f})));l(this,"input");return false}});if(g.calculateWidth){u(w,q);a?q.css("marginBottom",
(w.innerHeight()-q.height()/2)/2-1):q.css("marginBottom",(parseInt(w.css("paddingBottom"),10)||0)/-2)}}})})}})()},true);
