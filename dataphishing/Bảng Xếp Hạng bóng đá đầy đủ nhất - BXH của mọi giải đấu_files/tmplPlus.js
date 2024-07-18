/*!
 * tmplPlus.js: for jQuery Templates Plugin 1.0.0pre
 * Additional templating features or support for more advanced/less common scenarios.
 * Requires jquery.tmpl.js
 * http://github.com/jquery/jquery-tmpl
 *
 * Copyright 2011, Software Freedom Conservancy, Inc.
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 */
!function(e){'function'==typeof define&&define.amd?define(['jquery'],e):e(jQuery)}(function(e){var t=e.tmpl.complete,n=e.fn.domManip;e.tmpl.complete=function(n){var r;t(n);for(r in n)r=n[r],r.addedTmplItems&&-1===e.inArray(r,r.addedTmplItems)&&r.addedTmplItems.push(r);for(r in n)r=n[r],r.rendered&&r.rendered(r)},e.extend({tmplCmd:function(t,n,r){function a(e,t){for(var n,r,a,l=[],p=t.length,o=0,i=e.length;i>o;)for(a=e[o++],r=0;p>r;)n=t[r++],n.data===a&&l.push(n);return l}var l,p=[];switch(n=e.isArray(n)?n:[n],t){case'find':return a(n,r);case'replace':n.reverse()}return e.each(r?a(n,r):n,function(n,a){switch(coll=a.nodes,t){case'update':a.update();break;case'remove':e(coll).remove(),r&&r.splice(e.inArray(a,r),1);break;case'replace':l=l?e(coll).insertBefore(l)[0]:e(coll).appendTo(coll[0].parentNode)[0],p.unshift(a)}}),p}}),e.fn.extend({domManip:function(t,r,a){var l,p=t[1],o=t[0];return t.length<2||'object'!=typeof p||p.nodeType||p instanceof e?n.apply(this,arguments):(l=e.makeArray(arguments),l[0]=[e.tmpl(e.template(o),p,t[2],t[3])],l[2]=function(t){e.tmpl.afterManip(this,t,a)},n.apply(this,l))}})});