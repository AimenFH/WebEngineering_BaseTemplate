(()=>{"use strict";var n={208:(n,e,t)=>{t.d(e,{A:()=>a});var A=t(354),o=t.n(A),r=t(314),i=t.n(r)()(o());i.push([n.id,'/* General Setup */\nhtml, body {\n  margin: 0;\n  padding: 0;\n  font-family: \'Open Sans Condensed\', sans-serif;\n}\n\nhtml {\n  font-size: 10px;\n  background-color: #f0f0f0;\n}\n\nbody {\n  width: 80%;\n  min-width: 1024px;\n  margin: 0 auto;\n}\n\n/* Typography */\nh1, h2, h3 {\n  font-family: \'Sonsie One\', cursive;\n  color: #333333;\n}\n\nh1 {\n  font-size: 4rem;\n  text-align: center;\n  color: #ffffff;\n  text-shadow: 2px 2px 10px #000000;\n}\n\nh2 {\n  font-size: 3rem;\n  text-align: center;\n  color: #333333;\n}\n\nh3 {\n  font-size: 2.2rem;\n  color: #333333;\n}\n\ninput, li, table, label {\n  font-size: 1.6rem;\n  line-height: 1.5;\n  color: #333333;\n}\n\np {\n  font-size: 1.8rem; /* Increase font size */\n  line-height: 1.8;  /* Increase line height */\n  padding: 10px 0;   /* Add padding for better spacing */\n}\n\n/* Navigation */\nnav {\n  background-color: #009688;\n  display: flex;\n  padding: 1% 0;\n  margin-bottom: 10px;\n}\n\nnav ul {\n  flex: 2;\n  display: flex;\n  padding: 0;\n  list-style-type: none;\n}\n\nnav li {\n  flex: 1;\n  text-align: center;\n}\n\nnav a {\n  font-size: 2rem;\n  text-transform: uppercase;\n  text-decoration: none;\n  color: #ffffff;\n}\n\n/* Search form */\n.search {\n  flex: 1;\n  display: flex;\n  align-items: center;\n}\n\n.search input[type="search"] {\n  flex: 3;\n  font-size: 1.6rem;\n  height: 32px;\n}\n\n.search input[type="submit"] {\n  flex: 1;\n  margin-left: 1rem;\n  background: #00796b;\n  border: none;\n  color: #ffffff;\n}\n\n/* Main Layout */\nmain {\n  display: flex;\n}\n\narticle {\n  flex: 5;\n  padding: 10px 30px;\n  background-color: #00796b;\n}\n\n.secondary {\n  flex: 2;\n  background-color: #00796b;\n  padding: 10px 30px;\n}\n\nfooter {\n  margin-top: 10px;\n  padding: 10px 30px;\n  background-color: #00796b;\n  text-align: center;\n  color: #ffffff;\n}\n\n/* Table Styling */\ntable {\n  width: 100%;\n  background-color: #ffffff;\n  border-collapse: collapse;\n}\n\nth, td {\n  padding: 10px;\n}\n\nth {\n  border-bottom: 1px solid #666666;\n}\n\ntbody tr:nth-child(odd) {\n  background-color: #e0f2f1;\n}\n\n/* Styling for images and audio */\nimg, audio {\n  display: block;\n  margin: 0 auto;\n}\n\naudio {\n  width: 500px;\n}\n\n/* Comments Section */\n.comments {\n  background-color: #e0f2f1;\n  padding: 10px;\n}\n\n.show-hide {\n  cursor: pointer;\n  text-align: center;\n  font-size: 1.6rem;\n  background: #00796b;\n  color: #ffffff;\n  width: 150px;\n  margin: 10px auto;\n}\n\n.comment-form {\n  margin-bottom: 3rem;\n}\n\n.comment-form .flex-pair {\n  display: flex;\n  padding: 0 3rem 1rem;\n}\n\n.comment-form label {\n  align-self: center;\n  flex: 2;\n  text-align: right;\n}\n\n.comment-form input {\n  margin-left: 1rem;\n  flex: 6;\n}\n\n.comment-form input[type="submit"] {\n  width: 30%;\n  display: block;\n  margin: 0 auto;\n  background: #00796b;\n  border: none;\n  color: #ffffff;\n}\n\n.comment-container {\n  margin-top: 0;\n}\n\n.comment-container li {\n  list-style-type: none;\n  display: flex;\n}\n\n.comment-container li p:first-of-type {\n  flex: 1;\n  font-weight: bold;\n}\n\n.comment-container li p:nth-of-type(2) {\n  flex: 5;\n}\n\n/* Visually Hidden */\n.visually-hidden {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0;\n}\n\n.visually-hidden-table {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0;\n}',"",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"AAAA,kBAAkB;AAClB;EACE,SAAS;EACT,UAAU;EACV,8CAA8C;AAChD;;AAEA;EACE,eAAe;EACf,yBAAyB;AAC3B;;AAEA;EACE,UAAU;EACV,iBAAiB;EACjB,cAAc;AAChB;;AAEA,eAAe;AACf;EACE,kCAAkC;EAClC,cAAc;AAChB;;AAEA;EACE,eAAe;EACf,kBAAkB;EAClB,cAAc;EACd,iCAAiC;AACnC;;AAEA;EACE,eAAe;EACf,kBAAkB;EAClB,cAAc;AAChB;;AAEA;EACE,iBAAiB;EACjB,cAAc;AAChB;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,cAAc;AAChB;;AAEA;EACE,iBAAiB,EAAE,uBAAuB;EAC1C,gBAAgB,GAAG,yBAAyB;EAC5C,eAAe,IAAI,mCAAmC;AACxD;;AAEA,eAAe;AACf;EACE,yBAAyB;EACzB,aAAa;EACb,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,OAAO;EACP,aAAa;EACb,UAAU;EACV,qBAAqB;AACvB;;AAEA;EACE,OAAO;EACP,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,yBAAyB;EACzB,qBAAqB;EACrB,cAAc;AAChB;;AAEA,gBAAgB;AAChB;EACE,OAAO;EACP,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,OAAO;EACP,iBAAiB;EACjB,YAAY;AACd;;AAEA;EACE,OAAO;EACP,iBAAiB;EACjB,mBAAmB;EACnB,YAAY;EACZ,cAAc;AAChB;;AAEA,gBAAgB;AAChB;EACE,aAAa;AACf;;AAEA;EACE,OAAO;EACP,kBAAkB;EAClB,yBAAyB;AAC3B;;AAEA;EACE,OAAO;EACP,yBAAyB;EACzB,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,yBAAyB;EACzB,kBAAkB;EAClB,cAAc;AAChB;;AAEA,kBAAkB;AAClB;EACE,WAAW;EACX,yBAAyB;EACzB,yBAAyB;AAC3B;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,gCAAgC;AAClC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA,iCAAiC;AACjC;EACE,cAAc;EACd,cAAc;AAChB;;AAEA;EACE,YAAY;AACd;;AAEA,qBAAqB;AACrB;EACE,yBAAyB;EACzB,aAAa;AACf;;AAEA;EACE,eAAe;EACf,kBAAkB;EAClB,iBAAiB;EACjB,mBAAmB;EACnB,cAAc;EACd,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,oBAAoB;AACtB;;AAEA;EACE,kBAAkB;EAClB,OAAO;EACP,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;EACjB,OAAO;AACT;;AAEA;EACE,UAAU;EACV,cAAc;EACd,cAAc;EACd,mBAAmB;EACnB,YAAY;EACZ,cAAc;AAChB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,qBAAqB;EACrB,aAAa;AACf;;AAEA;EACE,OAAO;EACP,iBAAiB;AACnB;;AAEA;EACE,OAAO;AACT;;AAEA,oBAAoB;AACpB;EACE,kBAAkB;EAClB,UAAU;EACV,WAAW;EACX,YAAY;EACZ,UAAU;EACV,gBAAgB;EAChB,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,kBAAkB;EAClB,UAAU;EACV,WAAW;EACX,YAAY;EACZ,UAAU;EACV,gBAAgB;EAChB,sBAAsB;EACtB,SAAS;AACX",sourcesContent:['/* General Setup */\nhtml, body {\n  margin: 0;\n  padding: 0;\n  font-family: \'Open Sans Condensed\', sans-serif;\n}\n\nhtml {\n  font-size: 10px;\n  background-color: #f0f0f0;\n}\n\nbody {\n  width: 80%;\n  min-width: 1024px;\n  margin: 0 auto;\n}\n\n/* Typography */\nh1, h2, h3 {\n  font-family: \'Sonsie One\', cursive;\n  color: #333333;\n}\n\nh1 {\n  font-size: 4rem;\n  text-align: center;\n  color: #ffffff;\n  text-shadow: 2px 2px 10px #000000;\n}\n\nh2 {\n  font-size: 3rem;\n  text-align: center;\n  color: #333333;\n}\n\nh3 {\n  font-size: 2.2rem;\n  color: #333333;\n}\n\ninput, li, table, label {\n  font-size: 1.6rem;\n  line-height: 1.5;\n  color: #333333;\n}\n\np {\n  font-size: 1.8rem; /* Increase font size */\n  line-height: 1.8;  /* Increase line height */\n  padding: 10px 0;   /* Add padding for better spacing */\n}\n\n/* Navigation */\nnav {\n  background-color: #009688;\n  display: flex;\n  padding: 1% 0;\n  margin-bottom: 10px;\n}\n\nnav ul {\n  flex: 2;\n  display: flex;\n  padding: 0;\n  list-style-type: none;\n}\n\nnav li {\n  flex: 1;\n  text-align: center;\n}\n\nnav a {\n  font-size: 2rem;\n  text-transform: uppercase;\n  text-decoration: none;\n  color: #ffffff;\n}\n\n/* Search form */\n.search {\n  flex: 1;\n  display: flex;\n  align-items: center;\n}\n\n.search input[type="search"] {\n  flex: 3;\n  font-size: 1.6rem;\n  height: 32px;\n}\n\n.search input[type="submit"] {\n  flex: 1;\n  margin-left: 1rem;\n  background: #00796b;\n  border: none;\n  color: #ffffff;\n}\n\n/* Main Layout */\nmain {\n  display: flex;\n}\n\narticle {\n  flex: 5;\n  padding: 10px 30px;\n  background-color: #00796b;\n}\n\n.secondary {\n  flex: 2;\n  background-color: #00796b;\n  padding: 10px 30px;\n}\n\nfooter {\n  margin-top: 10px;\n  padding: 10px 30px;\n  background-color: #00796b;\n  text-align: center;\n  color: #ffffff;\n}\n\n/* Table Styling */\ntable {\n  width: 100%;\n  background-color: #ffffff;\n  border-collapse: collapse;\n}\n\nth, td {\n  padding: 10px;\n}\n\nth {\n  border-bottom: 1px solid #666666;\n}\n\ntbody tr:nth-child(odd) {\n  background-color: #e0f2f1;\n}\n\n/* Styling for images and audio */\nimg, audio {\n  display: block;\n  margin: 0 auto;\n}\n\naudio {\n  width: 500px;\n}\n\n/* Comments Section */\n.comments {\n  background-color: #e0f2f1;\n  padding: 10px;\n}\n\n.show-hide {\n  cursor: pointer;\n  text-align: center;\n  font-size: 1.6rem;\n  background: #00796b;\n  color: #ffffff;\n  width: 150px;\n  margin: 10px auto;\n}\n\n.comment-form {\n  margin-bottom: 3rem;\n}\n\n.comment-form .flex-pair {\n  display: flex;\n  padding: 0 3rem 1rem;\n}\n\n.comment-form label {\n  align-self: center;\n  flex: 2;\n  text-align: right;\n}\n\n.comment-form input {\n  margin-left: 1rem;\n  flex: 6;\n}\n\n.comment-form input[type="submit"] {\n  width: 30%;\n  display: block;\n  margin: 0 auto;\n  background: #00796b;\n  border: none;\n  color: #ffffff;\n}\n\n.comment-container {\n  margin-top: 0;\n}\n\n.comment-container li {\n  list-style-type: none;\n  display: flex;\n}\n\n.comment-container li p:first-of-type {\n  flex: 1;\n  font-weight: bold;\n}\n\n.comment-container li p:nth-of-type(2) {\n  flex: 5;\n}\n\n/* Visually Hidden */\n.visually-hidden {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0;\n}\n\n.visually-hidden-table {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0;\n}'],sourceRoot:""}]);const a=i},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",A=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),A&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),A&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,A,o,r){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(A)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(i[c]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);A&&i[d[0]]||(void 0!==r&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=r),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},354:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var A=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(A),r="/*# ".concat(o," */");return[e].concat([r]).join("\n")}return[e].join("\n")}},72:n=>{var e=[];function t(n){for(var t=-1,A=0;A<e.length;A++)if(e[A].identifier===n){t=A;break}return t}function A(n,A){for(var r={},i=[],a=0;a<n.length;a++){var c=n[a],l=A.base?c[0]+A.base:c[0],d=r[l]||0,f="".concat(l," ").concat(d);r[l]=d+1;var s=t(f),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==s)e[s].references++,e[s].updater(p);else{var m=o(p,A);A.byIndex=a,e.splice(a,0,{identifier:f,updater:m,references:1})}i.push(f)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var r=A(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<r.length;i++){var a=t(r[i]);e[a].references--}for(var c=A(n,o),l=0;l<r.length;l++){var d=t(r[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}r=c}}},659:n=>{var e={};n.exports=function(n,t){var A=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!A)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");A.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var A="";t.supports&&(A+="@supports (".concat(t.supports,") {")),t.media&&(A+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(A+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),A+=t.css,o&&(A+="}"),t.media&&(A+="}"),t.supports&&(A+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(A+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(A,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(A){var o=e[A];if(void 0!==o)return o.exports;var r=e[A]={id:A,exports:{}};return n[A](r,r.exports,t),r.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var A in e)t.o(e,A)&&!t.o(n,A)&&Object.defineProperty(n,A,{enumerable:!0,get:e[A]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0;var A=t(72),o=t.n(A),r=t(825),i=t.n(r),a=t(659),c=t.n(a),l=t(56),d=t.n(l),f=t(540),s=t.n(f),p=t(113),m=t.n(p),u=t(208),E={};E.styleTagTransform=m(),E.setAttributes=d(),E.insert=c().bind(null,"head"),E.domAPI=i(),E.insertStyleElement=s(),o()(u.A,E),u.A&&u.A.locals&&u.A.locals;var C=function(n,e,t,A){return new(t||(t=Promise))((function(o,r){function i(n){try{c(A.next(n))}catch(n){r(n)}}function a(n){try{c(A.throw(n))}catch(n){r(n)}}function c(n){var e;n.done?o(n.value):(e=n.value,e instanceof t?e:new t((function(n){n(e)}))).then(i,a)}c((A=A.apply(n,e||[])).next())}))};const h=n=>C(void 0,void 0,void 0,(function*(){var e,t,A;const o={action:"query",titles:`File:${n}`,prop:"imageinfo",iiprop:"url",format:"json",origin:"*"};try{const n=yield fetch(`https://en.wikipedia.org/w/api.php?${new URLSearchParams(o)}`),r=(yield n.json()).query.pages,i=null===(A=null===(t=null===(e=Object.values(r)[0])||void 0===e?void 0:e.imageinfo)||void 0===t?void 0:t[0])||void 0===A?void 0:A.url;return i&&i.startsWith("http")?i:"placeholder-image-url.jpg"}catch(n){return console.error("Failed to fetch image URL:",n),"placeholder-image-url.jpg"}}));(()=>{const n=document.querySelector(".show-hide"),e=document.querySelector(".comment-wrapper");if(!n||!e)return void console.error("Required elements not found in the DOM");const t=()=>{const t="block"===e.style.display;e.style.display=t?"none":"block",n.textContent=t?"Show comments":"Hide comments"};n.addEventListener("click",t),n.addEventListener("keydown",(n=>{"Enter"===n.key&&t()}))})(),(()=>{const n=document.querySelector(".comment-form"),e=document.querySelector("#name"),t=document.querySelector("#comment"),A=document.querySelector(".comment-container");n&&e&&t&&A?n.addEventListener("submit",(n=>{n.preventDefault();const o=e.value.trim(),r=t.value.trim();if(!o||!r)return void alert("Please fill out both name and comment fields.");const i=document.createElement("li");i.innerHTML=`<p>${o}</p><p>${r}</p>`,A.appendChild(i),e.value="",t.value=""})):console.error("Required form elements are missing from the DOM.")})(),C(void 0,void 0,void 0,(function*(){const n={action:"parse",page:"List_of_ursids",prop:"wikitext",section:"3",format:"json",origin:"*"};try{const e=yield fetch(`https://en.wikipedia.org/w/api.php?${new URLSearchParams(n)}`),t=(yield e.json()).parse.wikitext["*"];yield(n=>C(void 0,void 0,void 0,(function*(){const e=n.split("{{Species table/end}}"),t=[];for(const n of e){const e=n.split("{{Species table/row");for(const n of e){const e=n.match(/\|name=\[\[(.*?)\]\]/),A=n.match(/\|binomial=(.*?)\n/),o=n.match(/\|image=(.*?)\n/),r=n.match(/\|range=(.*?)\n/);if(e&&A&&o){const n=o[1].trim().replace("File:",""),i=yield h(n);t.push({name:e[1],binomial:A[1],image:i,range:r?r[1].replace(/\[\[|\]\]/g,""):"Range data not available"})}}}const A=document.querySelector(".more_bears");A&&t.forEach((n=>{const e=document.createElement("div");e.innerHTML=`\n        <h3>${n.name} (${n.binomial})</h3>\n        <img src="${n.image}" alt="${n.name}" style="width:200px; height:auto;">\n        <p><strong>Range:</strong> ${n.range}</p>\n      `,A.appendChild(e)}))})))(t)}catch(n){console.error("Failed to fetch bear data:",n),alert("Failed to load bear data. Please try again later.")}}))})();
//# sourceMappingURL=bundle.js.map