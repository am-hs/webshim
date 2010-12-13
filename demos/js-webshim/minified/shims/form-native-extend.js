jQuery.webshims.ready("form-message form-core",function(c,f,y,l,z){var g=c.support;if(g.validity){var j=f.inputTypes,q={};f.addInputType=function(a,b){j[a]=b};f.addValidityRule=function(a,b){q[a]=b};f.addValidityRule("typeMismatch",function(a,b,d,e){if(b==="")return false;e=e.typeMismatch;if(!("type"in d))d.type=(a[0].getAttribute("type")||"").toLowerCase();if(j[d.type]&&j[d.type].mismatch)e=j[d.type].mismatch(b,a);return e});var h=f.overrideValidationMessages,r=!g.requiredSelect||!g.numericDateProps||
h,A=["customError","typeMismatch","rangeUnderflow","rangeOverflow","stepMismatch","tooLong","patternMismatch","valueMissing","valid"],B=c.attr,s=c.fn.val,n=h?{value:1,checked:1}:{value:1},m=h?["textarea"]:[],C={radio:1,checkbox:1},k=function(a,b){if(a.form){var d=(a.getAttribute&&a.getAttribute("type")||a.type||"").toLowerCase();if(!h)if(!(!g.requiredSelect&&d=="select-one")&&!j[d])return;h&&!b&&C[d]&&a.name?c(l.getElementsByName(a.name)).each(function(){c.attr(this,"validity")}):c.attr(a,"validity")}},
o={value:function(a){a+="";o.value._polyfilled[this.nodeName.toLowerCase()].call(this,a);if(r){c.data(this,"hasCustomError",!!a);k(this)}}};f.defineNodeNamesProperty(["input","textarea","select"],"setCustomValidity",o,true);if(!y.noHTMLExtFixes&&!g.requiredSelect||h){c.extend(n,{required:1,size:1,multiple:1,selectedIndex:1});m.push("select")}if(!g.numericDateProps||h){c.extend(n,{min:1,max:1,step:1});m.push("input")}if(!g.requiredSelect){f.defineNodeNamesBooleanProperty(["select"],"required",true);
f.addValidityRule("valueMissing",function(a,b,d,e){if(d.nodeName=="select"&&!b&&a.attr("required")&&a[0].size<2){if(!d.type)d.type=a[0].type;if(d.type=="select-one"&&c("> option:first-child:not(:disabled)",a).attr("selected"))return true}return e.valueMissing})}if(r){var t={get:function(){var a=t.get._polyfilled[this.nodeName.toLowerCase()].apply(this,arguments);if(!a)return a;var b={};A.forEach(function(i){b[i]=a[i]});if(!c.attr(this,"willValidate"))return b;var d=c(this),e=this,D={type:(e.getAttribute&&
e.getAttribute("type")||"").toLowerCase(),nodeName:(e.nodeName||"").toLowerCase()},E=s.call(d),F=!!c.data(e,"hasCustomError"),u=o.value._polyfilled[e.nodeName.toLowerCase()]||e.setCustomValidity,v;b.customError=F;if(b.valid&&b.customError)b.valid=false;else if(!b.valid){var w=true;c.each(b,function(i,p){if(p)return w=false});if(w)b.valid=true}c.each(q,function(i,p){b[i]=p(d,E,D,b);if(b[i]&&(b.valid||!v&&h)){u.call(e,f.createValidationMessage(e,i));b.valid=false;v=true}});b.valid&&u.call(e,"");return b},
set:c.noop};f.defineNodeNamesProperty(m,"validity",t,true);c.fn.val=function(){var a=s.apply(this,arguments);this.each(function(){k(this)});return a};c.attr=function(a,b,d){var e=B.apply(this,arguments);n[b]&&d!==z&&a.form&&k(a);return e};if(l.addEventListener){l.addEventListener("change",function(a){k(a.target)},true);g.numericDateProps||l.addEventListener("input",function(a){k(a.target)},true)}var x=m.join(",");f.addReady(function(a,b){c(x,a).add(b.filter(x)).attr("validity")})}f.createReadyEvent("form-extend")}},
true);
