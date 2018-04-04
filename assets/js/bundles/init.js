var Travelsoft=Travelsoft||{};(function(a){"use strict";a.SITE_ADDRESS="https://vetliva.ru",a.VIDEO_URL="https://www.youtube.com/embed/",a.REQUEST_URL=a.SITE_ADDRESS+"/travelsoft.pm",a.JS_URL=a.REQUEST_URL+"/assets/js",a.CSS_URL=a.REQUEST_URL+"/assets/css"})(Travelsoft);(function(a){"use strict";a.utils={callbacks:{},makeid:function(){for(var b="",c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",d=0;5>d;d++)b+=c.charAt(Math.floor(Math.random()*c.length));return b},sendRequest:function(b,c,d){function e(){f||(delete a.utils.callbacks[g],console.warn("Query error "+h))}var f=!1,g="cb"+(Math.random()+"").slice(-6),h=a.REQUEST_URL+"/?",j=c,k;j.push("callback=Travelsoft.utils.callbacks."+g),j.push("method="+b),h+=j.join("&"),a.utils.callbacks[g]=function(l){f=!0,delete a.utils.callbacks[g],d(l)},k=document.createElement("script"),k.type="text/javascript",k.onload=e,k.onerror=e,k.src=h,document.body.appendChild(k)},screen:function(b){var c="";return"string"==typeof b&&(c=b.replace(/&/g,"&amp;"),c=b.replace(/</g,"&lt;"),c=b.replace(/"/g,"&quot;"),c=b.replace(/>/g,"&gt;"),c=b.replace(/'/g,"&#039;"),c=b.replace(/script/g,""),c=b.replace(/onclick/g,""),c=b.replace(/onchange/g,""),c=b.replace(/onkeydown/g,""),c=b.replace(/onkeypress/g,""),c=b.replace(/onmouseout/g,""),c=b.replace(/onmouseover/g,"")),c},HWatcher:{__prev:null,__id:null,__parent:null,watch:function(b){var c=this;c.unwatch(b),c.__id=setInterval(function(){c.__prev!==b.scrollHeight&&(c.__parent&&(c.__parent.style.height=b.scrollHeight+10+"px"),c.__prev=b.scrollHeight)},100)},unwatch:function(b){this.__id&&(clearInterval(this.__id),this.__id=null,this.__prev=null,b.style.height=0)}}}})(Travelsoft);(function(a){"use strict";function b(e){var f=d(c(e));return window.parent.document.body.appendChild(f),f}function c(e){return{styles:{position:"absolute",display:"none",top:e.top+6+"px",left:e.left+"px",width:e.width+"px",height:e.height+"px",border:"1px solid #ccc","box-sizing":"border-box","z-index":10,"padding-right":"1px"},attributes:{src:"about:blank",id:e.iframe_id,scrolling:e.scrolling?"yes":"no",className:"iframe-plugin"},iframeContent:``,iframeStylesheets:function(){return["<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\" integrity=\"sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u\" crossorigin=\"anonymous\">","<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css\" integrity=\"sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp\" crossorigin=\"anonymous\">"].join("")+[a.CSS_URL+`/forms/${e.plugin_name}.min.css?`+1e5*Math.random()].map(function(f){return`<link rel="stylesheet" href="${f}">`}).join("")+`<style>${a.utils.screen(e.css)}</style>`}(),iframeScripts:function(){return[a.JS_URL+`/bundles/${e.plugin_name}.js`].map(function(f){return`<script type="text/javascript" src="${f}"></script>`}).join("")+`<script>Travelsoft.${e.plugin_name}.init(${JSON.stringify({iframe_id:e.iframe_id,data:e.data,without:e.without})})</script>`}()}}function d(e){var f=document.createElement("iframe");for(var g in e.styles)f.style[g]=e.styles[g];for(var h in e.attributes)f[h]=e.attributes[h];return f.onload=function(){f.contentDocument.write(a.frames.template.replace("{{stylesheets}}",e.iframeStylesheets).replace("{{content}}",e.iframeContent).replace("{{scripts}}",e.iframeScripts))},f}a.frames={template:`<!DOCTYPE html>
                        <html>
                            <head>
                                <title>travelsoft partner module</title>
                                <meta charset="UTF-8">
                                {{stylesheets}}
                            </head>
                            <body>
                                {{content}}
                                {{scripts}}
                            </body>
                        </html>`,render:{forms:{form:function(e){var f="search-forms-"+Math.ceil(1e3*Math.random()),g=d({styles:{width:"100%",border:"none"},attributes:{src:"about:blank",id:f,scrolling:"yes"},iframeContent:``,iframeStylesheets:function(){return["<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\" integrity=\"sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u\" crossorigin=\"anonymous\">","<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css\" integrity=\"sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp\" crossorigin=\"anonymous\">"].join("")+[a.CSS_URL+"/select2.min.css",a.CSS_URL+"/daterangepicker.min.css",a.CSS_URL+"/forms/styles.min.css?"+1e5*Math.random()].map(function(h){return`<link rel="stylesheet" href="${h}">`}).join("")+`<style>${a.utils.screen(e.mainIframeCss)}</style>`}(),iframeScripts:function(){return e.parent_iframe_id=f,[a.JS_URL+"/jquery-3.2.1.min.js",a.JS_URL+"/bootstrap.min.js",a.JS_URL+"/bundles/forms.js"].map(function(h){return`<script type="text/javascript" src="${h}"></script>`}).join("")+`<script>Travelsoft.forms.init(${JSON.stringify(e)})</script>`}()});return document.getElementById(e.insertion_id).replaceChild(g,document.getElementById(e.insertion_id).querySelector("span")),g},select:function(e){return e.plugin_name="select",b(e)},children:function(e){return e.plugin_name="children",b(e)},datepicker:function(e){var f,g,h=e.left-303+e.width;return e.plugin_name="datepicker",g=c(e),g.styles.width="303px",g.styles.left=h+"px",g.iframeStylesheets+=`<link rel="stylesheet" href="${a.CSS_URL+"/daterangepicker.min.css"}">`+g.iframeStylesheets,g.iframeScripts=function(j){return[a.JS_URL+`/jquery-3.2.1.min.js`,a.JS_URL+`/moment.min.js`,a.JS_URL+`/moment_locales.min.js`,a.JS_URL+`/daterangepicker.min.js`,a.JS_URL+`/bundles/${j.plugin_name}.js`].map(function(k){return`<script type="text/javascript" src="${k}"></script>`}).join("")+`<script>Travelsoft.${j.plugin_name}.init(${JSON.stringify({iframe_id:j.iframe_id,start_date:j.data.start_date,end_date:j.data.end_date,format:j.data.format,date_separator:j.data.date_separator,defValue:j.data.defValue})})</script>`}(e),f=d(g),window.parent.document.body.appendChild(f),f}},searchResult:function(e){var f=e;f.page=1;var g=d({styles:{width:"100%",border:"none","z-index":10},attributes:{src:"about:blank",id:"search-result_"+e.insertion_id,scrolling:"no"},iframeContent:``,iframeStylesheets:function(){return["<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\" integrity=\"sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u\" crossorigin=\"anonymous\">","<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css\" integrity=\"sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp\" crossorigin=\"anonymous\">"].join("")+[a.CSS_URL+"/owl.carousel.min.css",a.CSS_URL+"/search-result/styles.min.css"].map(function(h){return`<link rel="stylesheet" href="${h}">`}).join("")+`<style>${a.utils.screen(e.mainIframeCss)}</style>`}(),iframeScripts:function(){return["https://api-maps.yandex.ru/2.1/?lang=ru_RU",a.JS_URL+"/jquery-3.2.1.min.js",a.JS_URL+"/bootstrap.min.js",a.JS_URL+"/owl.carousel.min.js",a.JS_URL+"/pagenavigator.min.js",a.JS_URL+"/bundles/search_result.js"].map(function(h){return`<script type="text/javascript" src="${h}"></script>`}).join("")+`<script>Travelsoft.searchResult.init(${JSON.stringify(f)})</script>`}()});return document.getElementById(e.insertion_id).replaceChild(g,document.getElementById(e.insertion_id).querySelector("span")),g}}}})(Travelsoft);(function(a){"use strict";function b(c){var d={};return"object"==typeof c&&c?void("object"==typeof c.forms&&c.forms&&a.frames.render.forms.form(c.forms),"object"==typeof c.searchResult&&c.searchResult&&(d=c.searchResult,a.frames.render.searchResult(d))):void console.warn("Parameters not set")}a.init=function(c){"boolean"!=typeof c.afterLoadingPage||c.afterLoadingPage?window.addEventListener("load",function(){b(c)}):b(c)}})(Travelsoft);