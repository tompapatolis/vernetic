!function(){"use strict";var e=[,function(e,t,n){function r(){const e=document.querySelector(".navbar__hamburger"),t=document.querySelector(".navbar__meatballs"),n=document.querySelector(".navbar__sidebar-left"),r=document.querySelector(".navbar__sidebar-right"),s=document.querySelector(".overlay"),a=document.body;e&&e.addEventListener("click",(t=>{e.classList.toggle("active"),o(e.querySelector("use"),"nav","close"),n.classList.toggle("show"),r.classList.contains("show")||(s.classList.toggle("show"),a.classList.toggle("no-scroll"))})),t&&t.addEventListener("click",(e=>{t.classList.toggle("active"),o(t.querySelector("use"),"meatballs","close"),r.classList.toggle("show"),n.classList.contains("show")||(s.classList.toggle("show"),a.classList.toggle("no-scroll"))})),s&&s.addEventListener("click",(o=>{e.classList.remove("active"),c(e.querySelector("use"),"#nav"),t.classList.remove("active"),c(t.querySelector("use"),"#meatballs"),n.classList.remove("show"),r.classList.remove("show"),s.classList.remove("show"),a.classList.remove("no-scroll")}))}function o(e,t,n){let r=e.getAttribute("href"),o=r.includes(t)?r.replace(t,n):r.replace(n,t);e.setAttribute("href",o)}function c(e,t){let n=e.getAttribute("href").replace(/#.*$/,t);e.setAttribute("href",n)}function s(){document.querySelectorAll("[data-nav-active]").forEach((e=>{const t=e.dataset.navActive;e.querySelectorAll("a").forEach((e=>{e.dataset.match==t&&e.classList.add("active")}))}))}function a(){if(!document.querySelector(".dropdown"))return;const e=document.querySelectorAll(".dropdown");document.querySelectorAll(".dropdown__toggle").forEach((t=>{t.addEventListener("click",(n=>{const r=t.parentElement;[...e].filter((e=>e!==r)).forEach((e=>{e.classList.remove("dropdown--show")})),r.classList.toggle("dropdown--show")}))})),document.addEventListener("click",(t=>{t.target.closest(".dropdown")||e.forEach((e=>{e.classList.remove("dropdown--show")}))}))}function i(){const e=document.querySelector(".navbar--dynamic");if(!e)return;const t=document.querySelector(".navbar__observe");new IntersectionObserver((t=>{t.forEach((t=>{0===t.intersectionRatio?e.classList.add("navbar--scrolled"):e.classList.remove("navbar--scrolled")}))}),{threshold:[0]}).observe(t)}function l(){const e=document.querySelector(".pagination__more");if(!e)return;const t=document.querySelector(".pagination__list");e.addEventListener("click",(e=>{t.classList.toggle("hidden")})),document.addEventListener("click",(n=>{e.contains(n.target)||t.classList.add("hidden")}))}n.r(t),n.d(t,{activeNav:function(){return s},dropdownToggle:function(){return a},initNavbar:function(){return r},navChange:function(){return i},pagination:function(){return l}})},function(e,t,n){n.r(t),n.d(t,{convToSymbol:function(){return s},copyCode:function(){return l},copyShareUrl:function(){return v},copyTableCell:function(){return d},deleteButtonInForm:function(){return u},escapeHtml:function(){return a},jumpNext:function(){return f},sharePopupCentered:function(){return o},showIconsList:function(){return c},syntaxHighlight:function(){return i},validatePassword:function(){return m}});var r=n(3);function o(){document.querySelectorAll(".popup-centered").forEach((e=>{e.addEventListener("click",(t=>{var n,r,o,c,s,a,i,l,d,u,m;t.preventDefault(),n=e.href,r="Share",o="700",c="600",s=null!=window.screenLeft?window.screenLeft:screen.left,a=null!=window.screenTop?window.screenTop:screen.top,i=window.innerWidth?window.innerWidth:document.documentElement.clientWidth?document.documentElement.clientWidth:screen.width,l=window.innerHeight?window.innerHeight:document.documentElement.clientHeight?document.documentElement.clientHeight:screen.height,d=i/2-o/2+s,u=l/2-c/2+a,m=window.open(n,r,"scrollbars=yes, width="+o+", height="+c+", top="+u+", left="+d),window.focus&&m.focus()}))}))}function c(){if(!document.querySelector(".elements-icons-list"))return;const e=document.querySelector("#verdin-icons").querySelectorAll("symbol"),t=document.querySelector(".elements-icons-list"),n=[...e];n.sort((function(e,t){return e.id-t.id||e.id.localeCompare(t.id)})),n.forEach((e=>{let n=document.createElement("div");n.innerHTML=`<svg class="svg-icon"><use href="#${e.id}"></use></svg>`,n.innerHTML+=`<span>${e.id}</span>`,n.classList.add("elements-icon"),t.appendChild(n),n.addEventListener("click",(t=>{const r=e.id;copyClipboard(r),document.querySelectorAll(".elements-icon").forEach((e=>{e.classList.remove("elements-icon--copied")})),n.classList.add("elements-icon--copied")}))}));const r=document.querySelector('input[name="framework-search"]');r.addEventListener("input",(e=>{var t;t=r.value,document.querySelectorAll(".elements-icon").forEach((e=>{e.querySelector("span").innerText.includes(t)?e.classList.remove("hidden"):e.classList.add("hidden")}))}))}function s(){if(!document.querySelector('.elements-converter[data-type="svg"]'))return;const e=document.querySelector('textarea[name="elements-svg-source"]'),t=document.querySelector('textarea[name="elements-svg-dest"]');e.addEventListener("paste",(n=>{setTimeout((()=>{let n=e.value.trim();n=n.replace("<svg","<symbol"),n=n.replace("</svg>","\r\n</symbol>"),n=n.replace('xmlns="http://www.w3.org/2000/svg"','id="icon"'),n=n.replace('height="24" ',""),n=n.replace(' width="24"',""),n=n.replace("<path","\r\n    <path"),t.value=n,copyClipboard(n)}))}))}function a(){if(!document.querySelector('.elements-converter[data-type="html"]'))return;const e=document.querySelector('textarea[name="elements-html-source"]'),t=document.querySelector('textarea[name="elements-html-dest"]');e.addEventListener("paste",(n=>{setTimeout((()=>{let n=e.value.trim();n=function(e){var t={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"};return e.replace(/[&<>"']/g,(function(e){return t[e]}))}(n),t.value=n,copyClipboard(n)}))}))}function i(){if(!document.querySelector(".syntax-highlight"))return;document.querySelectorAll(".syntax-highlight").forEach((e=>{let t=e.innerHTML.replace(/(\s[\w-]+)=("|')([^"']*)("|')/g,'<span class="cl2">$1</span>=$2<span class="cl3">$3</span>$4');t=t.replace(/&lt;(\/?)(\w+\s?)/g,'&lt;$1<span class="cl1">$2</span>');t=t.replace(/(&lt;!--.*?--&gt;)/g,'<span class="cl0">$1</span>'),e.innerHTML=t}))}function l(){if(!document.querySelector(".code"))return;document.querySelectorAll(".code").forEach((e=>{const t=e.querySelector("code");let n=document.createElement("button"),o=(0,r.baseUrl)()+"assets/verdin-icons/verdin-icons.svg#copy";n.innerHTML='<svg class="svg-icon"><use href="'+o+'"></use></svg>',n.classList.add("btn","btn-900","code-copy"),n.addEventListener("click",(e=>{copyClipboard(t.innerText),o=(0,r.baseUrl)()+"assets/verdin-icons/verdin-icons.svg#done",n.innerHTML='<svg class="svg-icon"><use href="'+o+'"></use></svg>',n.classList.add("btn-green-300"),n.blur()})),e.appendChild(n)}))}function d(){if(window.innerWidth<1200)return;if(!document.querySelector(".table"))return;const e=document.querySelector(".table");e.addEventListener("click",(t=>{const n=t.target;"TD"===n.tagName&&(e.querySelectorAll("td").forEach((e=>{e.classList.remove("set-green-300")})),copyClipboard(n.innerText),n.classList.add("set-green-300"))}))}function u(){const e=document.querySelector("[data-delete-setter]");if(!e)return;const t=document.querySelector('input[name="delete"]'),n=t.closest("form");e.addEventListener("click",(e=>{t.value=1,n.submit()}))}function m(){const e=document.querySelector("[data-validate-password]");e&&e.addEventListener("input",(function(){const t=e.value;/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#\-+_:\;\(\)§])[A-Za-z\d@$!%*?&#\-+_:\;\(\)§]{8,}$/.test(t)?(e.classList.remove("invalid-password"),e.classList.add("valid-password")):(e.classList.remove("valid-password"),e.classList.add("invalid-password"))}))}function f(){const e=document.querySelectorAll("[data-jump-next] input");e.forEach(((t,n)=>{t.addEventListener("input",(()=>{if(t.value.length>=t.maxLength){const t=e[n+1];t?t.focus():document.querySelector("button").focus()}}))}))}function v(){const e=document.querySelector("[data-share-button]"),t=document.querySelector("[data-share-url]");e&&t&&e.addEventListener("click",(function(){const n=t.dataset.shareUrl;navigator.clipboard.writeText(n).then((()=>{e.querySelector("span").textContent="Copied!",e.classList.add("disabled"),e.disabled=!0})).catch((e=>{console.error("Failed to copy: ",e)}))}))}},function(e,t,n){function r(){let e="";if("http://[::1]"==window.location.origin){let t=window.location.pathname.split("/").slice(0,3);e=window.location.origin+t.join("/")+"/"}else e=window.location.origin+"/";return e}n.r(t),n.d(t,{baseUrl:function(){return r}})},function(e,t,n){function r(){if(!document.querySelector(".draglist"))return;const e=document.querySelector(".draglist");document.querySelectorAll(".draglist__item").forEach((e=>{e.addEventListener("dragstart",(()=>{e.classList.add("draglist__dragging")})),e.addEventListener("dragend",(()=>{e.classList.remove("draglist__dragging")}))})),e.addEventListener("dragover",(t=>{t.preventDefault();const n=(r=t.clientY,[...document.querySelectorAll(".draglist__item:not(.draglist__dragging)")].reduce(((e,t)=>{const n=t.getBoundingClientRect(),o=r-n.top-n.height/2;return o<0&&o>e.offset?{offset:o,element:t}:e}),{offset:Number.NEGATIVE_INFINITY}).element);var r;const o=document.querySelector(".draglist__dragging");null==n?e.appendChild(o):e.insertBefore(o,n)}))}function o(){if(!document.querySelector(".accordion"))return;const e=document.querySelectorAll(".accordion__header");e.forEach((e=>{e.firstElementChild.insertAdjacentHTML("afterbegin",'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960"><path d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"/></svg>'),e.addEventListener("click",(e=>{e.currentTarget.closest(".accordion").classList.toggle("accordion--open")}))}))}function c(){if(!document.querySelector(".modal"))return;let e=document.querySelector(".modal__overlay");e||(e=document.createElement("div"),e.classList.add("modal__overlay"),document.body.appendChild(e));document.querySelectorAll(".modal").forEach((t=>{t.querySelector(".modal__close").addEventListener("click",(n=>{t.classList.remove("modal--show"),e.classList.remove("modal__overlay--show")}))}));document.querySelectorAll("[data-show-modal]").forEach((t=>{t.addEventListener("click",(n=>{const r=t.dataset.showModal;document.querySelector("#"+r).classList.add("modal--show"),e.classList.add("modal__overlay--show")}))}))}function s(){if(!document.querySelector(".tabs"))return;document.querySelectorAll(".tabs").forEach((e=>{const t=e.querySelector(".tabs__button.active"),n=e.querySelector(".tabs__line");n.style.width=t.offsetWidth+"px",n.style.left=t.offsetLeft+"px";const r=e.querySelectorAll(".tabs__button"),o=e.querySelectorAll(".tabs__content");r.forEach(((e,t)=>{e.addEventListener("click",(c=>{r.forEach((e=>{e.classList.remove("active")})),e.classList.add("active"),o.forEach((e=>{e.classList.remove("active")})),o[t].classList.add("active"),n.style.width=c.currentTarget.offsetWidth+"px",n.style.left=c.currentTarget.offsetLeft+"px"}))}))}))}function a(){if(!document.querySelector(".tabs-vertical"))return;const e=document.querySelectorAll(".tabs-vertical"),t=(document.querySelector('meta[name="base-url"]')?.getAttribute("content")||"").replace(/(^\w+:|^)\/\//,"").replace(/\W/g,"_");e.forEach((e=>{const n=e.querySelector(".tabs-vertical__button.active"),r=e.querySelector(".tabs-vertical__line");r.style.height=n.offsetHeight+"px",r.style.top=n.offsetTop+"px";const o=e.id,c=localStorage.getItem(t+"-tabIndex-"+o),s=e.querySelectorAll(".tabs-vertical__button"),a=e.querySelectorAll(".tabs-vertical__content");null!==o&&null!==c&&(a.forEach((e=>{e.classList.remove("active")})),a[c].classList.add("active"),s.forEach((e=>{e.classList.remove("active")})),s[c].classList.add("active"),r.style.height=s[c].offsetHeight+"px",r.style.top=s[c].offsetTop+"px"),s.forEach(((e,n)=>{e.addEventListener("click",(c=>{s.forEach((e=>{e.classList.remove("active")})),e.classList.add("active"),a.forEach((e=>{e.classList.remove("active")})),a[n].classList.add("active"),r.style.height=c.currentTarget.offsetHeight+"px",r.style.top=c.currentTarget.offsetTop+"px",null!==o&&localStorage.setItem(t+"-tabIndex-"+o,n)}))}))}))}function i(){if(!document.querySelector(".panel"))return;document.querySelectorAll(".panel").forEach((e=>{const t=e.querySelector(".panel__header");e.querySelector(".panel__body");let n=document.createElement("button");n.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960"><path d="m283 711-43-43 240-240 240 239-43 43-197-197-197 198Z"/></svg>',n.classList.add("panel__toggle"),n.type="button",t.appendChild(n),t.addEventListener("click",(()=>{e.classList.toggle("panel--open")}))}))}function l(){document.querySelectorAll(".drop-image").forEach((e=>{const t=e.querySelector("#input-file");e.querySelector(".drop-image__view");t.addEventListener("change",(t=>{d(e)})),e.addEventListener("dragover",(e=>{e.preventDefault()})),e.addEventListener("drop",(n=>{n.preventDefault(),t.files=n.dataTransfer.files,d(e)}))}))}function d(e){const t=e.querySelector("#input-file").form,n=t.dataset.action,r=t.dataset.shareInput,o=e.querySelector(".drop-image__view");o.innerHTML="&nbsp;",e.style.border="3px solid #000",e.classList.add("drop-image--pulsate"),fetch(n,{method:"POST",body:new FormData(t),cache:"no-cache"}).then((e=>e.json())).then((t=>{const n=t.baseurl+"/images/"+t.filename+".webp";if(o.style.backgroundImage=`url(${n})`,e.classList.remove("drop-image--pulsate"),e.style.border=0,r){document.querySelector(`input[name="${r}"]`).value=t.filename}})).catch((e=>{console.log(e)}))}n.r(t),n.d(t,{accordion:function(){return o},draggable:function(){return r},dropImage:function(){return l},initModal:function(){return c},panels:function(){return i},tabs:function(){return s},tabsVertical:function(){return a}})},function(e,t,n){function r(){const e=document.querySelectorAll("[data-animation]"),t=(e,t)=>{e.forEach((e=>{e.isIntersecting&&(e.target.classList.add(e.target.dataset.animation),t.unobserve(e.target))}))};if(window.innerWidth<=1024||"ontouchstart"in window||navigator.maxTouchPoints&&navigator.maxTouchPoints>0)e.forEach((e=>e.removeAttribute("data-animation")));else{const n=new IntersectionObserver(t,{threshold:.25});e.forEach((e=>n.observe(e)))}}function o(){const e=document.querySelector(".page__hero");let t=!1;window.matchMedia("(min-width: 1200px)").matches&&e&&window.addEventListener("scroll",(function(){t||(window.requestAnimationFrame((function(){const n=.5*window.scrollY;e.style.backgroundPosition=`center ${n}px`,t=!1})),t=!0)}))}n.r(t),n.d(t,{newObserveElements:function(){return r},parallax:function(){return o}})},function(e,t,n){function r(e=".tree-menu"){const t=document.querySelector(e);if(!t)return;!function(e=".tree-menu"){const t=document.querySelector(e);if(!t)return;const n=JSON.parse(localStorage.getItem("treeMenuState"))||[];t.querySelectorAll('li[data-type="folder"]').forEach((e=>{const t=e.dataset.id;t&&n.includes(t)&&e.classList.add("expanded")}))}();t.querySelectorAll("li").forEach((t=>{const n="file"===t.dataset.type;if(t.querySelectorAll("a").forEach((e=>{e.addEventListener("click",(e=>{e.stopPropagation()}))})),!n){const n=t.querySelector("span");n&&n.addEventListener("click",(n=>{n.stopPropagation(),t.classList.toggle("expanded"),function(e=".tree-menu"){const t=document.querySelector(e);if(!t)return;const n=[];t.querySelectorAll('li[data-type="folder"].expanded').forEach((e=>{const t=e.dataset.id;t&&n.push(t)})),localStorage.setItem("treeMenuState",JSON.stringify(n))}(e)}))}}))}n.r(t),n.d(t,{initializeTreeMenu:function(){return r}})},function(e,t,n){function r(){fetch("https://cdn.jsdelivr.net/gh/tompapatolis/vernetic@v7.0.4/dist/icons/vernetic.svg",{mode:"cors"}).then((e=>{if(!e.ok)throw new Error(`HTTP error! status: ${e.status}`);return console.log("test"),e.text()})).then((e=>{document.body.insertAdjacentHTML("afterbegin",e)})).catch((e=>{console.error("Error fetching Vernetic SVG:",e)}))}n.r(t),n.d(t,{injectVerneticIcons:function(){return r}})}],t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var c=t[r]={exports:{}};return e[r](c,c.exports,n),c.exports}n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};!function(){n.r(r);var e=n(1),t=n(2),o=n(4),c=n(5),s=n(6);n(7).icons.injectVerneticIcons(),function(){switch(document.body.id){case"members-register":t.validatePassword();break;case"members-activate":t.jumpNext();break;case"admin-edit":o.dropImage();break;case"admin-page_order":case"admin-sort_settings":case"admin-sort_sections":o.draggable();break;case"site-page":c.parallax();break;case"site-post":t.copyShareUrl()}e.initNavbar(),e.activeNav(),e.dropdownToggle(),e.navChange(),e.pagination(),t.deleteButtonInForm(),o.initModal(),o.tabs(),o.tabsVertical(),s.initializeTreeMenu()}()}()}();