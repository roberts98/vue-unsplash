(function(e){function n(n){for(var r,o,s=n[0],c=n[1],u=n[2],p=0,f=[];p<s.length;p++)o=s[p],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(n);while(f.length)f.shift()();return i.push.apply(i,u||[]),t()}function t(){for(var e,n=0;n<i.length;n++){for(var t=i[n],r=!0,s=1;s<t.length;s++){var c=t[s];0!==a[c]&&(r=!1)}r&&(i.splice(n--,1),e=o(o.s=t[0]))}return e}var r={},a={app:0},i=[];function o(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=e,o.c=r,o.d=function(e,n,t){o.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,n){if(1&n&&(e=o(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)o.d(t,r,function(n){return e[n]}.bind(null,r));return t},o.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(n,"a",n),n},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.p="/vue-unsplash/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=n,s=s.slice();for(var u=0;u<s.length;u++)n(s[u]);var l=c;i.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"00d1":function(e,n,t){"use strict";var r=t("5f1d"),a=t.n(r);a.a},"034f":function(e,n,t){"use strict";var r=t("85ec"),a=t.n(r);a.a},"39e1":function(e,n,t){"use strict";var r=t("a272"),a=t.n(r);a.a},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("ImagesList")],1)},i=[],o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[e.isLoading?t("Spinner"):t("div",{staticClass:"row"},e._l(e.images,(function(e){return t("div",{key:e.id,staticClass:"item"},[t("img",{attrs:{src:e.urls.small,alt:e.alt_description}})])})),0),t("button",{on:{click:e.handleClick}},[e._v("Load more")])],1)},s=[],c=(t("99af"),t("96cf"),t("1da1")),u=t("bc3a"),l=t.n(u),p="ThjMD5Mdr1W2Xqw_EMFOP-WouR8NmzQDKacQvGI_XPQ";function f(e){return d.apply(this,arguments)}function d(){return d=Object(c["a"])(regeneratorRuntime.mark((function e(n){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,l.a.get("https://api.unsplash.com/photos/",{params:{client_id:p,page:n,per_page:16}});case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)}))),d.apply(this,arguments)}var h=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"spinner-container"},[t("div",{staticClass:"spinner"},[e._v(e._s(e.loading))])])},g=[],m={name:"Spinner",props:["loading"]},v=m,b=(t("00d1"),t("2877")),w=Object(b["a"])(v,h,g,!1,null,"610db10e",null),y=w.exports,_={name:"ImagesList",components:{Spinner:y},data:function(){return{images:[],isLoading:!0,page:1}},methods:{handleClick:function(){this.page+=1,this.$nextTick(Object(c["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.isLoading=!0,e.next=3,f(this.page);case 3:n=e.sent,this.images=this.images.concat(n),this.isLoading=!1;case 6:case"end":return e.stop()}}),e,this)}))))}},mounted:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.isLoading=!0,n.next=3,f(e.page);case 3:e.images=n.sent,e.isLoading=!1;case 5:case"end":return n.stop()}}),n)})))()},updated:function(){window.scrollTo(0,document.body.scrollHeight)}},O=_,j=(t("39e1"),Object(b["a"])(O,o,s,!1,null,"6802d50d",null)),x=j.exports,k={name:"App",components:{ImagesList:x}},L=k,P=(t("034f"),Object(b["a"])(L,a,i,!1,null,null,null)),S=P.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(S)}}).$mount("#app")},"5f1d":function(e,n,t){},"85ec":function(e,n,t){},a272:function(e,n,t){}});
//# sourceMappingURL=app.b2ed0a40.js.map