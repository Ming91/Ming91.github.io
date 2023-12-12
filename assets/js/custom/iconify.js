/**
 * Minified by jsDelivr using Terser v5.10.0.
 * Original file: /npm/iconify@1.4.0/src/browser/index.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
var $=require("jquery"),Main=module.exports=require("../core")({$:$,DOMParser:DOMParser,XMLSerializer:XMLSerializer,btoa:btoa,fetchSvg:function(e,n){var t=$.Deferred(),r=$.extend({},n);return Object.keys(Main.load.defaultOptions).forEach((function(e){delete r[e]})),$.ajax(e,r).then((function(e,r,o){var a=o.responseXML;t.resolve(a instanceof Document&&a.documentElement||("function"==typeof n.decode?n.decode(e):o.responseText))})).fail((function(e,n,r){t.reject(r)})),t},writeRules:function(e,n){var t=document.createElement("style");t.className=n.family+" icons",document.head.appendChild(t);var r=t.sheet,o=r.cssRules;e.forEach((function(e){r.insertRule(e,o.length)}))}});
//# sourceMappingURL=/sm/c1be860f4472b696346bf1673b47f4304a6468f23c35cf713d18f97aec630559.map