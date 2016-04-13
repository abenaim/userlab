(function(c,b,a,d){Foundation.libs.abide={name:"abide",version:"5.5.2",settings:{live_validate:true,validate_on_blur:true,focus_on_invalid:true,error_labels:true,error_class:"error",timeout:1000,patterns:{alpha:/^[a-zA-Z]+$/,alpha_numeric:/^[a-zA-Z0-9]+$/,integer:/^[-+]?\d+$/,number:/^[-+]?\d*(?:[\.\,]\d+)?$/,card:/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,cvv:/^([0-9]){3,4}$/,email:/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/,url:/^(https?|ftp|file|ssh):\/\/([-;:&=\+\$,\w]+@{1})?([-A-Za-z0-9\.]+)+:?(\d+)?((\/[-\+~%\/\.\w]+)?\??([-\+=&;%@\.\w]+)?#?([\w]+)?)?/,domain:/^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,8}$/,datetime:/^([0-2][0-9]{3})\-([0-1][0-9])\-([0-3][0-9])T([0-5][0-9])\:([0-5][0-9])\:([0-5][0-9])(Z|([\-\+]([0-1][0-9])\:00))$/,date:/(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))$/,time:/^(0[0-9]|1[0-9]|2[0-3])(:[0-5][0-9]){2}$/,dateISO:/^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/,month_day_year:/^(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.]\d{4}$/,day_month_year:/^(0[1-9]|[12][0-9]|3[01])[- \/.](0[1-9]|1[012])[- \/.]\d{4}$/,color:/^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/},validators:{equalTo:function(f,h,e){var j=a.getElementById(f.getAttribute(this.add_namespace("data-equalto"))).value,i=f.value,g=(j===i);return g}}},timer:null,init:function(f,g,e){this.bindings(g,e)},events:function(g){var e=this,h=e.S(g).attr("novalidate","novalidate"),f=h.data(this.attr_name(true)+"-init")||{};this.invalid_attr=this.add_namespace("data-invalid");function i(j,k){clearTimeout(e.timer);e.timer=setTimeout(function(){e.validate([j],k)}.bind(j),f.timeout)}h.off(".abide").on("submit.fndtn.abide",function(k){var j=/ajax/i.test(e.S(this).attr(e.attr_name()));return e.validate(e.S(this).find("input, textarea, select").not(":hidden, [data-abide-ignore]").get(),k,j)}).on("validate.fndtn.abide",function(j){if(f.validate_on==="manual"){e.validate([j.target],j)}}).on("reset",function(j){return e.reset(c(this),j)}).find("input, textarea, select").not(":hidden, [data-abide-ignore]").off(".abide").on("blur.fndtn.abide change.fndtn.abide",function(j){if(f.validate_on_blur&&f.validate_on_blur===true){i(this,j)}if(f.validate_on==="change"){i(this,j)}}).on("keydown.fndtn.abide",function(j){if(f.live_validate&&f.live_validate===true&&j.which!=9){i(this,j)}if(f.validate_on==="tab"&&j.which===9){i(this,j)}else{if(f.validate_on==="change"){i(this,j)}}}).on("focus",function(j){if(navigator.userAgent.match(/iPad|iPhone|Android|BlackBerry|Windows Phone|webOS/i)){c("html, body").animate({scrollTop:c(j.target).offset().top},100)}})},reset:function(g,h){var f=this;g.removeAttr(f.invalid_attr);c("["+f.invalid_attr+"]",g).removeAttr(f.invalid_attr);c("."+f.settings.error_class,g).not("small").removeClass(f.settings.error_class);c(":input",g).not(":button, :submit, :reset, :hidden, [data-abide-ignore]").val("").removeAttr(f.invalid_attr)},validate:function(l,n,f){var k=this.parse_patterns(l),j=k.length,m=this.S(l[0]).closest("form"),g=/submit/.test(n.type);for(var h=0;h<j;h++){if(!k[h]&&(g||f)){if(this.settings.focus_on_invalid){l[h].focus()}m.trigger("invalid.fndtn.abide");this.S(l[h]).closest("form").attr(this.invalid_attr,"");return false}}if(g||f){m.trigger("valid.fndtn.abide")}m.removeAttr(this.invalid_attr);if(f){return false}return true},parse_patterns:function(g){var f=g.length,e=[];while(f--){e.push(this.pattern(g[f]))}return this.check_validation_and_apply_styles(e)},pattern:function(f){var e=f.getAttribute("type"),h=typeof f.getAttribute("required")==="string";var g=f.getAttribute("pattern")||"";if(this.settings.patterns.hasOwnProperty(g)&&g.length>0){return[f,this.settings.patterns[g],h]}else{if(g.length>0){return[f,new RegExp(g),h]}}if(this.settings.patterns.hasOwnProperty(e)){return[f,this.settings.patterns[e],h]}g=/.*/;return[f,g,h]},check_validation_and_apply_styles:function(r){var x=r.length,j=[],g=this.S(r[0][0]).closest("[data-"+this.attr_name(true)+"]"),A=g.data(this.attr_name(true)+"-init")||{};while(x--){var f=r[x][0],s=r[x][2],v=f.value.trim(),y=this.S(f).parent(),m=f.getAttribute(this.add_namespace("data-abide-validator")),e=f.type==="radio",t=f.type==="checkbox",p=this.S('label[for="'+f.getAttribute("id")+'"]'),h=(s)?(f.value.length>0):true,o=[];var q,u;if(f.getAttribute(this.add_namespace("data-equalto"))){m="equalTo"}if(!y.is("label")){q=y}else{q=y.parent()}if(e&&s){o.push(this.valid_radio(f,s))}else{if(t&&s){o.push(this.valid_checkbox(f,s))}else{if(m){var w=m.split(" ");var B=true,n=true;for(var l=0;l<w.length;l++){u=this.settings.validators[w[l]].apply(this,[f,s,q]);o.push(u);n=u&&B;B=u}if(n){this.S(f).removeAttr(this.invalid_attr);q.removeClass("error");if(p.length>0&&this.settings.error_labels){p.removeClass(this.settings.error_class).removeAttr("role")}c(f).triggerHandler("valid")}else{this.S(f).attr(this.invalid_attr,"");q.addClass("error");if(p.length>0&&this.settings.error_labels){p.addClass(this.settings.error_class).attr("role","alert")}c(f).triggerHandler("invalid")}}else{if(r[x][1].test(v)&&h||!s&&f.value.length<1||c(f).attr("disabled")){o.push(true)}else{o.push(false)}o=[o.every(function(i){return i})];if(o[0]){this.S(f).removeAttr(this.invalid_attr);f.setAttribute("aria-invalid","false");f.removeAttribute("aria-describedby");q.removeClass(this.settings.error_class);if(p.length>0&&this.settings.error_labels){p.removeClass(this.settings.error_class).removeAttr("role")}c(f).triggerHandler("valid")}else{this.S(f).attr(this.invalid_attr,"");f.setAttribute("aria-invalid","true");var k=q.find("small."+this.settings.error_class,"span."+this.settings.error_class);var z=k.length>0?k[0].id:"";if(z.length>0){f.setAttribute("aria-describedby",z)}q.addClass(this.settings.error_class);if(p.length>0&&this.settings.error_labels){p.addClass(this.settings.error_class).attr("role","alert")}c(f).triggerHandler("invalid")}}}}j=j.concat(o)}return j},valid_checkbox:function(e,g){var e=this.S(e),f=(e.is(":checked")||!g||e.get(0).getAttribute("disabled"));if(f){e.removeAttr(this.invalid_attr).parent().removeClass(this.settings.error_class);c(e).triggerHandler("valid")}else{e.attr(this.invalid_attr,"").parent().addClass(this.settings.error_class);c(e).triggerHandler("invalid")}return f},valid_radio:function(h,m){var e=h.getAttribute("name"),l=this.S(h).closest("[data-"+this.attr_name(true)+"]").find("[name='"+e+"']"),k=l.length,j=false,g=false;for(var f=0;f<k;f++){if(l[f].getAttribute("disabled")){g=true;j=true}else{if(l[f].checked){j=true}else{if(g){j=false}}}}for(var f=0;f<k;f++){if(j){this.S(l[f]).removeAttr(this.invalid_attr).parent().removeClass(this.settings.error_class);c(l[f]).triggerHandler("valid")}else{this.S(l[f]).attr(this.invalid_attr,"").parent().addClass(this.settings.error_class);c(l[f]).triggerHandler("invalid")}}return j},valid_equal:function(f,h,e){var j=a.getElementById(f.getAttribute(this.add_namespace("data-equalto"))).value,i=f.value,g=(j===i);if(g){this.S(f).removeAttr(this.invalid_attr);e.removeClass(this.settings.error_class);if(label.length>0&&settings.error_labels){label.removeClass(this.settings.error_class)}}else{this.S(f).attr(this.invalid_attr,"");e.addClass(this.settings.error_class);if(label.length>0&&settings.error_labels){label.addClass(this.settings.error_class)}}return g},valid_oneof:function(h,j,g,e){var h=this.S(h),f=this.S("["+this.add_namespace("data-oneof")+"]"),i=f.filter(":checked").length>0;if(i){h.removeAttr(this.invalid_attr).parent().removeClass(this.settings.error_class)}else{h.attr(this.invalid_attr,"").parent().addClass(this.settings.error_class)}if(!e){var k=this;f.each(function(){k.valid_oneof.call(k,this,null,null,true)})}return i},reflow:function(g,f){var e=this,h=e.S("["+this.attr_name()+"]").attr("novalidate","novalidate");e.S(h).each(function(i,j){e.events(j)})}}}(jQuery,window,window.document));