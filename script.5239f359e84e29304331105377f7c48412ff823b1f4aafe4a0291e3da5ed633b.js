!function(){"use strict";function e(e,n,t,i){var a=document.querySelectorAll(n);for(var o in a)if(a.hasOwnProperty(o)){var r=a[o].className;(void 0===i||i.indexOf(r)<0)&&(e?a[o].className=t:a[o].classList.add(t))}}var n=function(e,n,t){this.selector=e,this.hi=n,this.lo=t},t=[new n(".pure-menu","pure-menu pure-menu-horizontal","pure-menu"),new n(".navigation-header-subtitle","pure-menu-list navigation-header-subtitle pull-end","pure-menu-list navigation-header-subtitle"),new n(".navigation-header","navigation-header clearfix","navigation-header")];document.addEventListener("DOMContentLoaded",(function(){var n;e(!1,"img","pure-img"),e(!1,"table","pure-table",["lntable"]),function(){function n(){for(var n=document.documentElement.clientWidth>=768,i=0,a=t;i<a.length;i++){var o=a[i];e(!0,o.selector,n?o.hi:o.lo)}}n(),window.addEventListener("resize",n)}(),null!==(n=document.getElementById("btn-gototop"))&&n.addEventListener("click",(function(){!function e(){var n=window.pageYOffset;n>0&&setTimeout(e,8),window.scroll(0,n-512)}()}))}))}();