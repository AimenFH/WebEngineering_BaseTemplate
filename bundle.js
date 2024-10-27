(()=>{"use strict";var n={208:(n,e,t)=>{t.d(e,{A:()=>a});var o=t(354),A=t.n(o),r=t(314),i=t.n(r)()(A());i.push([n.id,'/* General Setup */\nhtml, body {\n  margin: 0;\n  padding: 0;\n  font-family: \'Open Sans Condensed\', sans-serif;\n}\n\nhtml {\n  font-size: 10px;\n  background-color: #f0f0f0;\n}\n\nbody {\n  width: 80%;\n  min-width: 1024px;\n  margin: 0 auto;\n}\n\n/* Typography */\nh1, h2, h3 {\n  font-family: \'Sonsie One\', cursive;\n  color: #333333;\n}\n\nh1 {\n  font-size: 4rem;\n  text-align: center;\n  color: #ffffff;\n  text-shadow: 2px 2px 10px #000000;\n}\n\nh2 {\n  font-size: 3rem;\n  text-align: center;\n  color: #333333;\n}\n\nh3 {\n  font-size: 2.2rem;\n  color: #333333;\n}\n\ninput, li, table, label {\n  font-size: 1.6rem;\n  line-height: 1.5;\n  color: #333333;\n}\n\np {\n  font-size: 1.8rem; /* Increase font size */\n  line-height: 1.8;  /* Increase line height */\n  padding: 10px 0;   /* Add padding for better spacing */\n}\n/* Navigation */\nnav {\n  background-color: #009688;\n  display: flex;\n  padding: 1% 0;\n  margin-bottom: 10px;\n}\n\nnav ul {\n  flex: 2;\n  display: flex;\n  padding: 0;\n  list-style-type: none;\n}\n\nnav li {\n  flex: 1;\n  text-align: center;\n}\n\nnav a {\n  font-size: 2rem;\n  text-transform: uppercase;\n  text-decoration: none;\n  color: #ffffff;\n}\n\n/* Search form */\n.search {\n  flex: 1;\n  display: flex;\n  align-items: center;\n}\n\n.search input[type="search"] {\n  flex: 3;\n  font-size: 1.6rem;\n  height: 32px;\n}\n\n.search input[type="submit"] {\n  flex: 1;\n  margin-left: 1rem;\n  background: #00796b;\n  border: none;\n  color: #ffffff;\n}\n\n/* Main Layout */\nmain {\n  display: flex;\n}\n\narticle {\n  flex: 5;\n  padding: 10px 30px;\n  background-color: #00796b;\n}\n\n.secondary {\n  flex: 2;\n  background-color: #00796b;\n  padding: 10px 30px;\n}\n\nfooter {\n  margin-top: 10px;\n  padding: 10px 30px;\n  background-color: #00796b;\n  text-align: center;\n  color: #ffffff;\n}\n\n/* Table Styling */\ntable {\n  width: 100%;\n  background-color: #ffffff;\n  border-collapse: collapse;\n}\n\nth, td {\n  padding: 10px;\n}\n\nth {\n  border-bottom: 1px solid #666666;\n}\n\ntbody tr:nth-child(odd) {\n  background-color: #e0f2f1;\n}\n\n/* Styling for images and audio */\nimg, audio {\n  display: block;\n  margin: 0 auto;\n}\n\naudio {\n  width: 500px;\n}\n\n/* Comments Section */\n.comments {\n  background-color: #e0f2f1;\n  padding: 10px;\n}\n\n.show-hide {\n  cursor: pointer;\n  text-align: center;\n  font-size: 1.6rem;\n  background: #00796b;\n  color: #ffffff;\n  width: 150px;\n  margin: 10px auto;\n}\n\n.comment-form {\n  margin-bottom: 3rem;\n}\n\n.comment-form .flex-pair {\n  display: flex;\n  padding: 0 3rem 1rem;\n}\n\n.comment-form label {\n  align-self: center;\n  flex: 2;\n  text-align: right;\n}\n\n.comment-form input {\n  margin-left: 1rem;\n  flex: 6;\n}\n\n.comment-form input[type="submit"] {\n  width: 30%;\n  display: block;\n  margin: 0 auto;\n  background: #00796b;\n  border: none;\n  color: #ffffff;\n}\n\n.comment-container {\n  margin-top: 0;\n}\n\n.comment-container li {\n  list-style-type: none;\n  display: flex;\n}\n\n.comment-container li p:first-of-type {\n  flex: 1;\n  font-weight: bold;\n}\n\n.comment-container li p:nth-of-type(2) {\n  flex: 5;\n}\n.visually-hidden {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0;\n}\n\n.visually-hidden-tabel {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0;\n}\n',"",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"AAAA,kBAAkB;AAClB;EACE,SAAS;EACT,UAAU;EACV,8CAA8C;AAChD;;AAEA;EACE,eAAe;EACf,yBAAyB;AAC3B;;AAEA;EACE,UAAU;EACV,iBAAiB;EACjB,cAAc;AAChB;;AAEA,eAAe;AACf;EACE,kCAAkC;EAClC,cAAc;AAChB;;AAEA;EACE,eAAe;EACf,kBAAkB;EAClB,cAAc;EACd,iCAAiC;AACnC;;AAEA;EACE,eAAe;EACf,kBAAkB;EAClB,cAAc;AAChB;;AAEA;EACE,iBAAiB;EACjB,cAAc;AAChB;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,cAAc;AAChB;;AAEA;EACE,iBAAiB,EAAE,uBAAuB;EAC1C,gBAAgB,GAAG,yBAAyB;EAC5C,eAAe,IAAI,mCAAmC;AACxD;AACA,eAAe;AACf;EACE,yBAAyB;EACzB,aAAa;EACb,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,OAAO;EACP,aAAa;EACb,UAAU;EACV,qBAAqB;AACvB;;AAEA;EACE,OAAO;EACP,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,yBAAyB;EACzB,qBAAqB;EACrB,cAAc;AAChB;;AAEA,gBAAgB;AAChB;EACE,OAAO;EACP,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,OAAO;EACP,iBAAiB;EACjB,YAAY;AACd;;AAEA;EACE,OAAO;EACP,iBAAiB;EACjB,mBAAmB;EACnB,YAAY;EACZ,cAAc;AAChB;;AAEA,gBAAgB;AAChB;EACE,aAAa;AACf;;AAEA;EACE,OAAO;EACP,kBAAkB;EAClB,yBAAyB;AAC3B;;AAEA;EACE,OAAO;EACP,yBAAyB;EACzB,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,yBAAyB;EACzB,kBAAkB;EAClB,cAAc;AAChB;;AAEA,kBAAkB;AAClB;EACE,WAAW;EACX,yBAAyB;EACzB,yBAAyB;AAC3B;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,gCAAgC;AAClC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA,iCAAiC;AACjC;EACE,cAAc;EACd,cAAc;AAChB;;AAEA;EACE,YAAY;AACd;;AAEA,qBAAqB;AACrB;EACE,yBAAyB;EACzB,aAAa;AACf;;AAEA;EACE,eAAe;EACf,kBAAkB;EAClB,iBAAiB;EACjB,mBAAmB;EACnB,cAAc;EACd,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,oBAAoB;AACtB;;AAEA;EACE,kBAAkB;EAClB,OAAO;EACP,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;EACjB,OAAO;AACT;;AAEA;EACE,UAAU;EACV,cAAc;EACd,cAAc;EACd,mBAAmB;EACnB,YAAY;EACZ,cAAc;AAChB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,qBAAqB;EACrB,aAAa;AACf;;AAEA;EACE,OAAO;EACP,iBAAiB;AACnB;;AAEA;EACE,OAAO;AACT;AACA;EACE,kBAAkB;EAClB,UAAU;EACV,WAAW;EACX,YAAY;EACZ,UAAU;EACV,gBAAgB;EAChB,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,kBAAkB;EAClB,UAAU;EACV,WAAW;EACX,YAAY;EACZ,UAAU;EACV,gBAAgB;EAChB,sBAAsB;EACtB,SAAS;AACX",sourcesContent:['/* General Setup */\nhtml, body {\n  margin: 0;\n  padding: 0;\n  font-family: \'Open Sans Condensed\', sans-serif;\n}\n\nhtml {\n  font-size: 10px;\n  background-color: #f0f0f0;\n}\n\nbody {\n  width: 80%;\n  min-width: 1024px;\n  margin: 0 auto;\n}\n\n/* Typography */\nh1, h2, h3 {\n  font-family: \'Sonsie One\', cursive;\n  color: #333333;\n}\n\nh1 {\n  font-size: 4rem;\n  text-align: center;\n  color: #ffffff;\n  text-shadow: 2px 2px 10px #000000;\n}\n\nh2 {\n  font-size: 3rem;\n  text-align: center;\n  color: #333333;\n}\n\nh3 {\n  font-size: 2.2rem;\n  color: #333333;\n}\n\ninput, li, table, label {\n  font-size: 1.6rem;\n  line-height: 1.5;\n  color: #333333;\n}\n\np {\n  font-size: 1.8rem; /* Increase font size */\n  line-height: 1.8;  /* Increase line height */\n  padding: 10px 0;   /* Add padding for better spacing */\n}\n/* Navigation */\nnav {\n  background-color: #009688;\n  display: flex;\n  padding: 1% 0;\n  margin-bottom: 10px;\n}\n\nnav ul {\n  flex: 2;\n  display: flex;\n  padding: 0;\n  list-style-type: none;\n}\n\nnav li {\n  flex: 1;\n  text-align: center;\n}\n\nnav a {\n  font-size: 2rem;\n  text-transform: uppercase;\n  text-decoration: none;\n  color: #ffffff;\n}\n\n/* Search form */\n.search {\n  flex: 1;\n  display: flex;\n  align-items: center;\n}\n\n.search input[type="search"] {\n  flex: 3;\n  font-size: 1.6rem;\n  height: 32px;\n}\n\n.search input[type="submit"] {\n  flex: 1;\n  margin-left: 1rem;\n  background: #00796b;\n  border: none;\n  color: #ffffff;\n}\n\n/* Main Layout */\nmain {\n  display: flex;\n}\n\narticle {\n  flex: 5;\n  padding: 10px 30px;\n  background-color: #00796b;\n}\n\n.secondary {\n  flex: 2;\n  background-color: #00796b;\n  padding: 10px 30px;\n}\n\nfooter {\n  margin-top: 10px;\n  padding: 10px 30px;\n  background-color: #00796b;\n  text-align: center;\n  color: #ffffff;\n}\n\n/* Table Styling */\ntable {\n  width: 100%;\n  background-color: #ffffff;\n  border-collapse: collapse;\n}\n\nth, td {\n  padding: 10px;\n}\n\nth {\n  border-bottom: 1px solid #666666;\n}\n\ntbody tr:nth-child(odd) {\n  background-color: #e0f2f1;\n}\n\n/* Styling for images and audio */\nimg, audio {\n  display: block;\n  margin: 0 auto;\n}\n\naudio {\n  width: 500px;\n}\n\n/* Comments Section */\n.comments {\n  background-color: #e0f2f1;\n  padding: 10px;\n}\n\n.show-hide {\n  cursor: pointer;\n  text-align: center;\n  font-size: 1.6rem;\n  background: #00796b;\n  color: #ffffff;\n  width: 150px;\n  margin: 10px auto;\n}\n\n.comment-form {\n  margin-bottom: 3rem;\n}\n\n.comment-form .flex-pair {\n  display: flex;\n  padding: 0 3rem 1rem;\n}\n\n.comment-form label {\n  align-self: center;\n  flex: 2;\n  text-align: right;\n}\n\n.comment-form input {\n  margin-left: 1rem;\n  flex: 6;\n}\n\n.comment-form input[type="submit"] {\n  width: 30%;\n  display: block;\n  margin: 0 auto;\n  background: #00796b;\n  border: none;\n  color: #ffffff;\n}\n\n.comment-container {\n  margin-top: 0;\n}\n\n.comment-container li {\n  list-style-type: none;\n  display: flex;\n}\n\n.comment-container li p:first-of-type {\n  flex: 1;\n  font-weight: bold;\n}\n\n.comment-container li p:nth-of-type(2) {\n  flex: 5;\n}\n.visually-hidden {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0;\n}\n\n.visually-hidden-tabel {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0;\n}\n'],sourceRoot:""}]);const a=i},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,A,r){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(i[c]=!0)}for(var l=0;l<n.length;l++){var f=[].concat(n[l]);o&&i[f[0]]||(void 0!==r&&(void 0===f[5]||(f[1]="@layer".concat(f[5].length>0?" ".concat(f[5]):""," {").concat(f[1],"}")),f[5]=r),t&&(f[2]?(f[1]="@media ".concat(f[2]," {").concat(f[1],"}"),f[2]=t):f[2]=t),A&&(f[4]?(f[1]="@supports (".concat(f[4],") {").concat(f[1],"}"),f[4]=A):f[4]="".concat(A)),e.push(f))}},e}},354:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var o=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),A="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),r="/*# ".concat(A," */");return[e].concat([r]).join("\n")}return[e].join("\n")}},72:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var r={},i=[],a=0;a<n.length;a++){var c=n[a],l=o.base?c[0]+o.base:c[0],f=r[l]||0,d="".concat(l," ").concat(f);r[l]=f+1;var s=t(d),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==s)e[s].references++,e[s].updater(p);else{var m=A(p,o);o.byIndex=a,e.splice(a,0,{identifier:d,updater:m,references:1})}i.push(d)}return i}function A(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,A){var r=o(n=n||[],A=A||{});return function(n){n=n||[];for(var i=0;i<r.length;i++){var a=t(r[i]);e[a].references--}for(var c=o(n,A),l=0;l<r.length;l++){var f=t(r[l]);0===e[f].references&&(e[f].updater(),e.splice(f,1))}r=c}}},659:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var A=void 0!==t.layer;A&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,A&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(o){var A=e[o];if(void 0!==A)return A.exports;var r=e[o]={id:o,exports:{}};return n[o](r,r.exports,t),r.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0;var o=t(72),A=t.n(o),r=t(825),i=t.n(r),a=t(659),c=t.n(a),l=t(56),f=t.n(l),d=t(540),s=t.n(d),p=t(113),m=t.n(p),u=t(208),E={};E.styleTagTransform=m(),E.setAttributes=f(),E.insert=c().bind(null,"head"),E.domAPI=i(),E.insertStyleElement=s(),A()(u.A,E),u.A&&u.A.locals&&u.A.locals;var C=function(n,e,t,o){return new(t||(t=Promise))((function(A,r){function i(n){try{c(o.next(n))}catch(n){r(n)}}function a(n){try{c(o.throw(n))}catch(n){r(n)}}function c(n){var e;n.done?A(n.value):(e=n.value,e instanceof t?e:new t((function(n){n(e)}))).then(i,a)}c((o=o.apply(n,e||[])).next())}))};const g=document.querySelector(".show-hide"),h=document.querySelector(".comment-wrapper");if(g&&h){const n=()=>{var n;const e=(null===(n=g.textContent)||void 0===n?void 0:n.trim())||"";g.textContent="Show comments"===e?"Hide comments":"Show comments",h.style.display="Show comments"===e?"none":"block"};g.addEventListener("click",n),g.addEventListener("keydown",(e=>{"Enter"===e.key&&n()}))}else console.error("Required elements not found in the DOM");const B=document.querySelector(".comment-form"),y=document.querySelector("#name"),x=document.querySelector("#comment"),b=document.querySelector(".comment-container");B&&y&&x&&b?B.addEventListener("submit",(n=>{if(n.preventDefault(),y&&x&&b){const n=document.createElement("li"),e=document.createElement("p"),t=document.createElement("p"),o=y.value.trim(),A=x.value.trim();o&&A?(e.textContent=o,t.textContent=A,n.append(e,t),b.appendChild(n),y.value="",x.value=""):alert("Please fill out both name and comment fields.")}})):console.error("Required form elements are missing from the DOM.");const v="https://en.wikipedia.org/w/api.php",k={action:"parse",page:"List_of_ursids",prop:"wikitext",section:"3",format:"json",origin:"*"},w=n=>C(void 0,void 0,void 0,(function*(){var e,t,o;const A=`${v}?${new URLSearchParams({action:"query",titles:`File:${n}`,prop:"imageinfo",iiprop:"url",format:"json",origin:"*"}).toString()}`;try{const n=yield fetch(A),r=(yield n.json()).query.pages;return(null===(o=null===(t=null===(e=Object.values(r)[0])||void 0===e?void 0:e.imageinfo)||void 0===t?void 0:t[0])||void 0===o?void 0:o.url)||"placeholder-image-url.jpg"}catch(n){return console.error("Failed to fetch image URL:",n),"placeholder-image-url.jpg"}}));C(void 0,void 0,void 0,(function*(){const n=`${v}?${new URLSearchParams(k).toString()}`;try{const e=yield fetch(n),t=(yield e.json()).parse.wikitext["*"];yield(n=>C(void 0,void 0,void 0,(function*(){const e=n.split("{{Species table/end}}"),t=[];for(const n of e){const e=n.split("{{Species table/row");for(const n of e){const e=n.match(/\|name=\[\[(.*?)\]\]/),o=n.match(/\|binomial=(.*?)\n/),A=n.match(/\|image=(.*?)\n/),r=n.match(/\|range=(.*?)\n/);if(e&&o&&A){const n=A[1].trim().replace("File:",""),i=yield w(n),a={name:e[1],binomial:o[1],image:i,range:r?r[1]:"Range data not available"};t.push(a)}}}const o=document.querySelector(".more_bears");o&&t.forEach((n=>{o.innerHTML+=`\n        <div>\n          <h3>${n.name} (${n.binomial})</h3>\n          <img src="${n.image}" alt="${n.name}" style="width:200px; height:auto;">\n          <p><strong>Range:</strong> ${n.range}</p>\n        </div>\n      `}))})))(t)}catch(n){console.error("Failed to fetch bear data:",n),alert("Failed to load bear data. Please try again later.")}}))})();
//# sourceMappingURL=bundle.js.map