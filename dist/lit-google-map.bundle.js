(function (exports) {
  'use strict';

  /******************************************************************************
  Copyright (c) Microsoft Corporation.

  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.

  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */

  function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  }

  function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
  }

  typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
  };

  /**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const t$2=globalThis,e$2=t$2.ShadowRoot&&(void 0===t$2.ShadyCSS||t$2.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$2=Symbol(),o$3=new WeakMap;class n$3{constructor(t,e,o){if(this._$cssResult$=!0,o!==s$2)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e;}get styleSheet(){let t=this.o;const s=this.t;if(e$2&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=o$3.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&o$3.set(s,t));}return t}toString(){return this.cssText}}const r$4=t=>new n$3("string"==typeof t?t:t+"",void 0,s$2),i$2=(t,...e)=>{const o=1===t.length?t[0]:e.reduce(((e,s,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[o+1]),t[0]);return new n$3(o,t,s$2)},S$1=(s,o)=>{if(e$2)s.adoptedStyleSheets=o.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const e of o){const o=document.createElement("style"),n=t$2.litNonce;void 0!==n&&o.setAttribute("nonce",n),o.textContent=e.cssText,s.appendChild(o);}},c$2=e$2?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r$4(e)})(t):t;

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */const{is:i$1,defineProperty:e$1,getOwnPropertyDescriptor:r$3,getOwnPropertyNames:h$1,getOwnPropertySymbols:o$2,getPrototypeOf:n$2}=Object,a$1=globalThis,c$1=a$1.trustedTypes,l$1=c$1?c$1.emptyScript:"",p$1=a$1.reactiveElementPolyfillSupport,d$1=(t,s)=>t,u$1={toAttribute(t,s){switch(s){case Boolean:t=t?l$1:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,s){let i=t;switch(s){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t);}catch(t){i=null;}}return i}},f$1=(t,s)=>!i$1(t,s),y$1={attribute:!0,type:String,converter:u$1,reflect:!1,hasChanged:f$1};Symbol.metadata??=Symbol("metadata"),a$1.litPropertyMetadata??=new WeakMap;class b extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t);}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,s=y$1){if(s.state&&(s.attribute=!1),this._$Ei(),this.elementProperties.set(t,s),!s.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(t,i,s);void 0!==r&&e$1(this.prototype,t,r);}}static getPropertyDescriptor(t,s,i){const{get:e,set:h}=r$3(this.prototype,t)??{get(){return this[s]},set(t){this[s]=t;}};return {get(){return e?.call(this)},set(s){const r=e?.call(this);h.call(this,s),this.requestUpdate(t,r,i);},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??y$1}static _$Ei(){if(this.hasOwnProperty(d$1("elementProperties")))return;const t=n$2(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties);}static finalize(){if(this.hasOwnProperty(d$1("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(d$1("properties"))){const t=this.properties,s=[...h$1(t),...o$2(t)];for(const i of s)this.createProperty(i,t[i]);}const t=this[Symbol.metadata];if(null!==t){const s=litPropertyMetadata.get(t);if(void 0!==s)for(const[t,i]of s)this.elementProperties.set(t,i);}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const i=this._$Eu(t,s);void 0!==i&&this._$Eh.set(i,t);}this.elementStyles=this.finalizeStyles(this.styles);}static finalizeStyles(s){const i=[];if(Array.isArray(s)){const e=new Set(s.flat(1/0).reverse());for(const s of e)i.unshift(c$2(s));}else void 0!==s&&i.push(c$2(s));return i}static _$Eu(t,s){const i=s.attribute;return !1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev();}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)));}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.();}removeController(t){this._$EO?.delete(t);}_$E_(){const t=new Map,s=this.constructor.elementProperties;for(const i of s.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t);}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return S$1(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()));}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()));}attributeChangedCallback(t,s,i){this._$AK(t,i);}_$EC(t,s){const i=this.constructor.elementProperties.get(t),e=this.constructor._$Eu(t,i);if(void 0!==e&&!0===i.reflect){const r=(void 0!==i.converter?.toAttribute?i.converter:u$1).toAttribute(s,i.type);this._$Em=t,null==r?this.removeAttribute(e):this.setAttribute(e,r),this._$Em=null;}}_$AK(t,s){const i=this.constructor,e=i._$Eh.get(t);if(void 0!==e&&this._$Em!==e){const t=i.getPropertyOptions(e),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:u$1;this._$Em=e,this[e]=r.fromAttribute(s,t.type),this._$Em=null;}}requestUpdate(t,s,i){if(void 0!==t){if(i??=this.constructor.getPropertyOptions(t),!(i.hasChanged??f$1)(this[t],s))return;this.P(t,s,i);}!1===this.isUpdatePending&&(this._$ES=this._$ET());}P(t,s,i){this._$AL.has(t)||this._$AL.set(t,s),!0===i.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t);}async _$ET(){this.isUpdatePending=!0;try{await this._$ES;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,s]of this._$Ep)this[t]=s;this._$Ep=void 0;}const t=this.constructor.elementProperties;if(t.size>0)for(const[s,i]of t)!0!==i.wrapped||this._$AL.has(s)||void 0===this[s]||this.P(s,this[s],i);}let t=!1;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(s)):this._$EU();}catch(s){throw t=!1,this._$EU(),s}t&&this._$AE(s);}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t);}_$EU(){this._$AL=new Map,this.isUpdatePending=!1;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return !0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EC(t,this[t]))),this._$EU();}updated(t){}firstUpdated(t){}}b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[d$1("elementProperties")]=new Map,b[d$1("finalized")]=new Map,p$1?.({ReactiveElement:b}),(a$1.reactiveElementVersions??=[]).push("2.0.4");

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const t$1=globalThis,i=t$1.trustedTypes,s$1=i?i.createPolicy("lit-html",{createHTML:t=>t}):void 0,e="$lit$",h=`lit$${(Math.random()+"").slice(9)}$`,o$1="?"+h,n$1=`<${o$1}>`,r$2=document,l=()=>r$2.createComment(""),c=t=>null===t||"object"!=typeof t&&"function"!=typeof t,a=Array.isArray,u=t=>a(t)||"function"==typeof t?.[Symbol.iterator],d="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,_=/>/g,m=RegExp(`>|${d}(?:([^\\s"'>=/]+)(${d}*=${d}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),p=/'/g,g=/"/g,$=/^(?:script|style|textarea|title)$/i,y=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),x=y(1),w=Symbol.for("lit-noChange"),T=Symbol.for("lit-nothing"),A=new WeakMap,E=r$2.createTreeWalker(r$2,129);function C(t,i){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==s$1?s$1.createHTML(i):i}const P=(t,i)=>{const s=t.length-1,o=[];let r,l=2===i?"<svg>":"",c=f;for(let i=0;i<s;i++){const s=t[i];let a,u,d=-1,y=0;for(;y<s.length&&(c.lastIndex=y,u=c.exec(s),null!==u);)y=c.lastIndex,c===f?"!--"===u[1]?c=v:void 0!==u[1]?c=_:void 0!==u[2]?($.test(u[2])&&(r=RegExp("</"+u[2],"g")),c=m):void 0!==u[3]&&(c=m):c===m?">"===u[0]?(c=r??f,d=-1):void 0===u[1]?d=-2:(d=c.lastIndex-u[2].length,a=u[1],c=void 0===u[3]?m:'"'===u[3]?g:p):c===g||c===p?c=m:c===v||c===_?c=f:(c=m,r=void 0);const x=c===m&&t[i+1].startsWith("/>")?" ":"";l+=c===f?s+n$1:d>=0?(o.push(a),s.slice(0,d)+e+s.slice(d)+h+x):s+h+(-2===d?i:x);}return [C(t,l+(t[s]||"<?>")+(2===i?"</svg>":"")),o]};class V{constructor({strings:t,_$litType$:s},n){let r;this.parts=[];let c=0,a=0;const u=t.length-1,d=this.parts,[f,v]=P(t,s);if(this.el=V.createElement(f,n),E.currentNode=this.el.content,2===s){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes);}for(;null!==(r=E.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(e)){const i=v[a++],s=r.getAttribute(t).split(h),e=/([.?@])?(.*)/.exec(i);d.push({type:1,index:c,name:e[2],strings:s,ctor:"."===e[1]?k:"?"===e[1]?H:"@"===e[1]?I:R}),r.removeAttribute(t);}else t.startsWith(h)&&(d.push({type:6,index:c}),r.removeAttribute(t));if($.test(r.tagName)){const t=r.textContent.split(h),s=t.length-1;if(s>0){r.textContent=i?i.emptyScript:"";for(let i=0;i<s;i++)r.append(t[i],l()),E.nextNode(),d.push({type:2,index:++c});r.append(t[s],l());}}}else if(8===r.nodeType)if(r.data===o$1)d.push({type:2,index:c});else {let t=-1;for(;-1!==(t=r.data.indexOf(h,t+1));)d.push({type:7,index:c}),t+=h.length-1;}c++;}}static createElement(t,i){const s=r$2.createElement("template");return s.innerHTML=t,s}}function N(t,i,s=t,e){if(i===w)return i;let h=void 0!==e?s._$Co?.[e]:s._$Cl;const o=c(i)?void 0:i._$litDirective$;return h?.constructor!==o&&(h?._$AO?.(!1),void 0===o?h=void 0:(h=new o(t),h._$AT(t,s,e)),void 0!==e?(s._$Co??=[])[e]=h:s._$Cl=h),void 0!==h&&(i=N(t,h._$AS(t,i.values),h,e)),i}class S{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:s}=this._$AD,e=(t?.creationScope??r$2).importNode(i,!0);E.currentNode=e;let h=E.nextNode(),o=0,n=0,l=s[0];for(;void 0!==l;){if(o===l.index){let i;2===l.type?i=new M(h,h.nextSibling,this,t):1===l.type?i=new l.ctor(h,l.name,l.strings,this,t):6===l.type&&(i=new L(h,this,t)),this._$AV.push(i),l=s[++n];}o!==l?.index&&(h=E.nextNode(),o++);}return E.currentNode=r$2,e}p(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class M{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,s,e){this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=e?.isConnected??!0;}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t?.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=N(this,t,i),c(t)?t===T||null==t||""===t?(this._$AH!==T&&this._$AR(),this._$AH=T):t!==this._$AH&&t!==w&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):u(t)?this.k(t):this._(t);}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t));}_(t){this._$AH!==T&&c(this._$AH)?this._$AA.nextSibling.data=t:this.T(r$2.createTextNode(t)),this._$AH=t;}$(t){const{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=V.createElement(C(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===e)this._$AH.p(i);else {const t=new S(e,this),s=t.u(this.options);t.p(i),this.T(s),this._$AH=t;}}_$AC(t){let i=A.get(t.strings);return void 0===i&&A.set(t.strings,i=new V(t)),i}k(t){a(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const h of t)e===i.length?i.push(s=new M(this.S(l()),this.S(l()),this,this.options)):s=i[e],s._$AI(h),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i;}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t));}}class R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=T,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=T;}_$AI(t,i=this,s,e){const h=this.strings;let o=!1;if(void 0===h)t=N(this,t,i,0),o=!c(t)||t!==this._$AH&&t!==w,o&&(this._$AH=t);else {const e=t;let n,r;for(t=h[0],n=0;n<h.length-1;n++)r=N(this,e[s+n],i,n),r===w&&(r=this._$AH[n]),o||=!c(r)||r!==this._$AH[n],r===T?t=T:t!==T&&(t+=(r??"")+h[n+1]),this._$AH[n]=r;}o&&!e&&this.j(t);}j(t){t===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"");}}class k extends R{constructor(){super(...arguments),this.type=3;}j(t){this.element[this.name]=t===T?void 0:t;}}class H extends R{constructor(){super(...arguments),this.type=4;}j(t){this.element.toggleAttribute(this.name,!!t&&t!==T);}}class I extends R{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5;}_$AI(t,i=this){if((t=N(this,t,i,0)??T)===w)return;const s=this._$AH,e=t===T&&s!==T||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==T&&(s===T||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t);}}class L{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){N(this,t);}}const Z=t$1.litHtmlPolyfillSupport;Z?.(V,M),(t$1.litHtmlVersions??=[]).push("3.1.2");const j=(t,i,s)=>{const e=s?.renderBefore??i;let h=e._$litPart$;if(void 0===h){const t=s?.renderBefore??null;e._$litPart$=h=new M(i.insertBefore(l(),t),t,void 0,s??{});}return h._$AI(t),h};

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */class s extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=j(i,this.renderRoot,this.renderOptions);}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0);}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1);}render(){return w}}s._$litElement$=!0,s[("finalized")]=!0,globalThis.litElementHydrateSupport?.({LitElement:s});const r$1=globalThis.litElementPolyfillSupport;r$1?.({LitElement:s});(globalThis.litElementVersions??=[]).push("4.0.4");

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const t=t=>(e,o)=>{void 0!==o?o.addInitializer((()=>{customElements.define(t,e);})):customElements.define(t,e);};

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */const o={attribute:!0,type:String,converter:u$1,reflect:!1,hasChanged:f$1},r=(t=o,e,r)=>{const{kind:n,metadata:i}=r;let s=globalThis.litPropertyMetadata.get(i);if(void 0===s&&globalThis.litPropertyMetadata.set(i,s=new Map),s.set(r.name,t),"accessor"===n){const{name:o}=r;return {set(r){const n=e.get.call(this);e.set.call(this,r),this.requestUpdate(o,n,t);},init(e){return void 0!==e&&this.P(o,void 0,t),e}}}if("setter"===n){const{name:o}=r;return function(r){const n=this[o];e.call(this,r),this.requestUpdate(o,n,t);}}throw Error("Unsupported decorator location: "+n)};function n(t){return (e,o)=>"object"==typeof o?r(t,e,o):((t,e,o)=>{const r=e.hasOwnProperty(o);return e.constructor.createProperty(o,r?{...t,wrapped:!0}:t),r?Object.getOwnPropertyDescriptor(e,o):void 0})(t,e,o)}

  class ScriptLoaderMap {
      constructor() {
          this.apiMap = {};
      }
      require(url, notifyCallback, jsonpCallbackName) {
          const name = this.nameFromUrl(url);
          if (!this.apiMap[name])
              this.apiMap[name] = new ScriptLoader(name, url, jsonpCallbackName);
          this.apiMap[name].requestNotify(notifyCallback);
      }
      static getInstance() {
          if (!ScriptLoaderMap.instance) {
              ScriptLoaderMap.instance = new ScriptLoaderMap();
          }
          return ScriptLoaderMap.instance;
      }
      nameFromUrl(url) {
          return `${url.replace(/[\:\/\%\?\&\.\=\-\,]/g, "_")}_api`;
      }
  }
  class ScriptLoader {
      constructor(name, url, callbackName) {
          this.callbackMacro = "%%callback%%";
          this.loaded = false;
          this.script = null;
          this.notifiers = [];
          let scriptUrl = url;
          let scriptCallbackName = callbackName;
          if (!scriptCallbackName) {
              if (scriptUrl.indexOf(this.callbackMacro) >= 0) {
                  scriptCallbackName = `${name}_loaded`;
                  scriptUrl = scriptUrl.replace(this.callbackMacro, scriptCallbackName);
              }
              else {
                  console.error("ScriptLoader class: a %%callback%% parameter is required in libraryUrl");
                  return;
              }
          }
          this.callbackName = scriptCallbackName;
          window[this.callbackName] = this.success.bind(this);
          this.addScript(scriptUrl);
      }
      addScript(src) {
          const script = document.createElement("script");
          script.src = src;
          script.onerror = this.handleError.bind(this);
          const s = document.querySelector("script") || document.body;
          s.parentNode.insertBefore(script, s);
          this.script = script;
      }
      removeScript() {
          if (this.script.parentNode) {
              this.script.parentNode.removeChild(this.script);
          }
          this.script = null;
      }
      handleError(ev) {
          this.error = new Error("Library failed to load");
          this.notifyAll();
          this.cleanup();
      }
      success(...rest) {
          this.loaded = true;
          this.result = rest;
          this.notifyAll();
          this.cleanup();
      }
      cleanup() {
          delete window[this.callbackName];
      }
      notifyAll() {
          this.notifiers.forEach(function (notifyCallback) {
              notifyCallback(this.error, this.result);
          }.bind(this));
          this.notifiers = [];
      }
      requestNotify(notifyCallback) {
          if (this.loaded || this.error) {
              notifyCallback(this.error, this.result);
          }
          else {
              this.notifiers.push(notifyCallback);
          }
      }
  }

  class JsonpLibraryElement extends s {
      constructor() {
          super(...arguments);
          this.libraryLoaded = false;
          this.libraryErrorMessage = null;
          this.isReady = false;
      }
      get callbackName() {
          return null;
      }
      libraryUrlChanged() {
          if (this.isReady && this.libraryUrl != null)
              this.loadLibrary();
      }
      libraryLoadCallback(error, detail) {
          if (error) {
              console.warn("Library load failed:", error.message);
              this.libraryErrorMessage = error.message;
          }
          else {
              this.libraryErrorMessage = null;
              this.libraryLoaded = true;
              if (this.notifyEvent != null) {
                  this.dispatchEvent(new CustomEvent(this.notifyEvent, { detail: detail, composed: true }));
              }
          }
      }
      loadLibrary() {
          ScriptLoaderMap.getInstance().require(this.libraryUrl, this.libraryLoadCallback.bind(this), this.callbackName);
      }
      connectedCallback() {
          super.connectedCallback();
          this.isReady = true;
          if (this.libraryUrl != null)
              this.loadLibrary();
      }
  }
  exports.LitGoogleMapsApi = class LitGoogleMapsApi extends JsonpLibraryElement {
      constructor() {
          super(...arguments);
          this.apiKey = "";
          this.clientId = "";
          this.mapsUrl = "https://maps.googleapis.com/maps/api/js?callback=%%callback%%";
          this.version = "3.39";
          this.language = "";
          this.mapId = "";
      }
      get libraryUrl() {
          return this.computeUrl(this.mapsUrl, this.version, this.apiKey, this.clientId, this.language, this.mapId);
      }
      get notifyEvent() {
          return "api-load";
      }
      computeUrl(mapsUrl, version, apiKey, clientId, language, mapId) {
          let url = `${mapsUrl}&v=${version}`;
          url += "&libraries=drawing,geometry,places,visualization,marker";
          if (apiKey && !clientId) {
              url += `&key=${apiKey}`;
          }
          if (clientId) {
              url += `&client=${clientId}`;
          }
          if (!apiKey && !clientId) {
              const warning = "No Google Maps API Key or Client ID specified. " +
                  "See https://developers.google.com/maps/documentation/javascript/get-api-key " +
                  "for instructions to get started with a key or client id.";
              console.warn(warning);
          }
          if (language) {
              url += `&language=${language}`;
          }
          if (mapId) {
              url += `&map_ids=${mapId}`;
          }
          return url;
      }
  };
  __decorate([
      n({ type: String, attribute: "api-key" }),
      __metadata("design:type", Object)
  ], exports.LitGoogleMapsApi.prototype, "apiKey", void 0);
  __decorate([
      n({ type: String, attribute: "client-id" }),
      __metadata("design:type", Object)
  ], exports.LitGoogleMapsApi.prototype, "clientId", void 0);
  __decorate([
      n({ type: String, attribute: "maps-url" }),
      __metadata("design:type", Object)
  ], exports.LitGoogleMapsApi.prototype, "mapsUrl", void 0);
  __decorate([
      n({ type: String }),
      __metadata("design:type", Object)
  ], exports.LitGoogleMapsApi.prototype, "version", void 0);
  __decorate([
      n({ type: String }),
      __metadata("design:type", Object)
  ], exports.LitGoogleMapsApi.prototype, "language", void 0);
  __decorate([
      n({ type: String, attribute: "map-id" }),
      __metadata("design:type", Object)
  ], exports.LitGoogleMapsApi.prototype, "mapId", void 0);
  exports.LitGoogleMapsApi = __decorate([
      t("lit-google-maps-api")
  ], exports.LitGoogleMapsApi);

  exports.LitGoogleMapMarker = class LitGoogleMapMarker extends s {
      constructor() {
          super(...arguments);
          this.latitude = 0;
          this.longitude = 0;
          this.zIndex = 0;
          this.open = false;
          this.id = null;
          this.glyph = null;
          this.glyphColor = null;
          this.background = null;
          this.borderColor = null;
          this.scale = null;
          this.omitFromFit = false;
          this.map = null;
          this.marker = null;
          this.pin = null;
      }
      attributeChangedCallback(name, oldval, newval) {
          super.attributeChangedCallback(name, oldval, newval);
          switch (name) {
              case "open": {
                  this.openChanged();
                  break;
              }
              case "latitude": {
                  this.updatePosition();
                  break;
              }
              case "longitude": {
                  this.updatePosition();
                  break;
              }
              case "glyph": {
                  if (this.pin) {
                      this.pin.glyph = this.glyph;
                  }
                  break;
              }
              case "glyphColor": {
                  if (this.pin) {
                      this.pin.glyphColor = this.glyphColor;
                  }
                  break;
              }
              case "background": {
                  if (this.pin) {
                      this.pin.background = this.background;
                  }
                  break;
              }
              case "borderColor": {
                  if (this.pin) {
                      this.pin.borderColor = this.borderColor;
                  }
                  break;
              }
              case "scale": {
                  if (this.pin) {
                      this.pin.scale = this.scale;
                  }
                  break;
              }
              case "z-index": {
                  if (this.marker) {
                      this.marker.zIndex = this.zIndex;
                  }
                  break;
              }
          }
      }
      openChanged() {
          if (!this.info)
              return;
          if (this.open) {
              this.info.open(this.map, this.marker);
              this.dispatchEvent(new CustomEvent("google-map-marker-open", { bubbles: true }));
          }
          else {
              this.info.close();
              this.dispatchEvent(new CustomEvent("google-map-marker-close", { bubbles: true }));
          }
      }
      updatePosition() {
          if (this.marker) {
              this.marker.position = new google.maps.LatLng(this.latitude, this.longitude);
          }
      }
      changeMap(newMap) {
          this.map = newMap;
          this.mapChanged();
      }
      mapChanged() {
          if (this.marker) {
              this.marker.map = null;
              google.maps.event.clearInstanceListeners(this.marker);
          }
          if (this.map && this.map instanceof google.maps.Map) {
              this.mapReady();
          }
      }
      mapReady() {
          this.pin = new google.maps.marker.PinElement({
              glyph: this.glyph,
              glyphColor: this.glyphColor,
              background: this.background,
              borderColor: this.borderColor,
              scale: this.scale,
          });
          this.marker = new google.maps.marker.AdvancedMarkerElement({
              map: this.map,
              position: {
                  lat: this.latitude,
                  lng: this.longitude,
              },
              content: this.pin.element,
              zIndex: this.zIndex,
              gmpClickable: true,
          });
          this.pin.element.addEventListener("mouseover", () => {
              this.dispatchEvent(new CustomEvent("mouseover", {
                  detail: { id: this.id },
                  bubbles: true,
                  composed: true,
              }));
          });
          this.pin.element.addEventListener("mouseout", () => {
              this.dispatchEvent(new CustomEvent("mouseout", {
                  detail: { id: this.id },
                  bubbles: true,
                  composed: true,
              }));
          });
          this.marker.addListener("click", () => {
              this.dispatchEvent(new CustomEvent("click", {
                  detail: { id: this.id },
                  bubbles: true,
                  composed: true,
              }));
          });
          this.contentChanged();
      }
      contentChanged() {
          if (this.contentObserver)
              this.contentObserver.disconnect();
          this.contentObserver = new MutationObserver(this.contentChanged.bind(this));
          this.contentObserver.observe(this, {
              childList: true,
              subtree: true,
          });
          const content = this.innerHTML.trim();
          if (content) {
              if (!this.info) {
                  this.info = new google.maps.InfoWindow();
                  this.openInfoHandler = google.maps.event.addListener(this.marker, "click", function () {
                      this.open = true;
                  }.bind(this));
                  this.closeInfoHandler = google.maps.event.addListener(this.info, "closeclick", function () {
                      this.open = false;
                  }.bind(this));
              }
              this.info.setContent(content);
          }
          else {
              if (this.info) {
                  google.maps.event.removeListener(this.openInfoHandler);
                  google.maps.event.removeListener(this.closeInfoHandler);
                  this.info = null;
              }
          }
      }
  };
  __decorate([
      n({ type: Number, reflect: true }),
      __metadata("design:type", Object)
  ], exports.LitGoogleMapMarker.prototype, "latitude", void 0);
  __decorate([
      n({ type: Number, reflect: true }),
      __metadata("design:type", Object)
  ], exports.LitGoogleMapMarker.prototype, "longitude", void 0);
  __decorate([
      n({ type: Number, reflect: true, attribute: "z-index" }),
      __metadata("design:type", Object)
  ], exports.LitGoogleMapMarker.prototype, "zIndex", void 0);
  __decorate([
      n({ type: Boolean, reflect: true }),
      __metadata("design:type", Object)
  ], exports.LitGoogleMapMarker.prototype, "open", void 0);
  __decorate([
      n({ type: String, reflect: true }),
      __metadata("design:type", String)
  ], exports.LitGoogleMapMarker.prototype, "id", void 0);
  __decorate([
      n({ type: String, reflect: true }),
      __metadata("design:type", String)
  ], exports.LitGoogleMapMarker.prototype, "glyph", void 0);
  __decorate([
      n({ type: String, reflect: true }),
      __metadata("design:type", String)
  ], exports.LitGoogleMapMarker.prototype, "glyphColor", void 0);
  __decorate([
      n({ type: String, reflect: true }),
      __metadata("design:type", String)
  ], exports.LitGoogleMapMarker.prototype, "background", void 0);
  __decorate([
      n({ type: String, reflect: true }),
      __metadata("design:type", String)
  ], exports.LitGoogleMapMarker.prototype, "borderColor", void 0);
  __decorate([
      n({ type: Number, reflect: true }),
      __metadata("design:type", Number)
  ], exports.LitGoogleMapMarker.prototype, "scale", void 0);
  __decorate([
      n({ type: Boolean, attribute: "omit-from-fit" }),
      __metadata("design:type", Object)
  ], exports.LitGoogleMapMarker.prototype, "omitFromFit", void 0);
  exports.LitGoogleMapMarker = __decorate([
      t("lit-google-map-marker")
  ], exports.LitGoogleMapMarker);

  exports.LitGoogleMapCircle = class LitGoogleMapCircle extends s {
      constructor() {
          super(...arguments);
          this.centerLatitude = -34.397;
          this.centerLongitude = 150.644;
          this.radius = 100000;
          this.fillColor = "#FF0000";
          this.fillOpacity = 0.35;
          this.strokeColor = "#FF0000";
          this.strokeOpacity = 0.8;
          this.strokeWeight = 2;
          this.map = null;
          this.circle = null;
      }
      attributeChangedCallback(name, oldval, newval) {
          var _a;
          super.attributeChangedCallback(name, oldval, newval);
          switch (name) {
              case "center-latitude": {
                  this.updateCenter();
                  break;
              }
              case "center-longitude": {
                  this.updateCenter();
                  break;
              }
              case "radius": {
                  (_a = this.circle) === null || _a === void 0 ? void 0 : _a.setRadius(this.radius);
                  break;
              }
          }
      }
      updateCenter() {
          var _a;
          (_a = this.circle) === null || _a === void 0 ? void 0 : _a.setCenter(new google.maps.LatLng(this.centerLatitude, this.centerLongitude));
      }
      attachToMap(map) {
          this.map = map;
          this.mapChanged();
      }
      mapChanged() {
          if (this.circle) {
              this.circle.setMap(null);
              google.maps.event.clearInstanceListeners(this.circle);
          }
          if (this.map && this.map instanceof google.maps.Map) {
              this.mapReady();
          }
      }
      mapReady() {
          this.circle = new google.maps.Circle({
              map: this.map,
              strokeColor: this.strokeColor,
              strokeOpacity: this.strokeOpacity,
              strokeWeight: this.strokeWeight,
              fillColor: this.fillColor,
              fillOpacity: this.fillOpacity,
              center: {
                  lat: this.centerLatitude,
                  lng: this.centerLongitude,
              },
              radius: this.radius,
          });
      }
  };
  __decorate([
      n({ type: Number, attribute: "center-latitude" }),
      __metadata("design:type", Object)
  ], exports.LitGoogleMapCircle.prototype, "centerLatitude", void 0);
  __decorate([
      n({ type: Number, attribute: "center-longitude" }),
      __metadata("design:type", Object)
  ], exports.LitGoogleMapCircle.prototype, "centerLongitude", void 0);
  __decorate([
      n({ type: Number }),
      __metadata("design:type", Object)
  ], exports.LitGoogleMapCircle.prototype, "radius", void 0);
  __decorate([
      n({ type: String, attribute: "fill-color" }),
      __metadata("design:type", Object)
  ], exports.LitGoogleMapCircle.prototype, "fillColor", void 0);
  __decorate([
      n({ type: Number, attribute: "fill-opacity" }),
      __metadata("design:type", Object)
  ], exports.LitGoogleMapCircle.prototype, "fillOpacity", void 0);
  __decorate([
      n({ type: String, attribute: "stroke-color" }),
      __metadata("design:type", Object)
  ], exports.LitGoogleMapCircle.prototype, "strokeColor", void 0);
  __decorate([
      n({ type: Number, attribute: "stroke-opacity" }),
      __metadata("design:type", Object)
  ], exports.LitGoogleMapCircle.prototype, "strokeOpacity", void 0);
  __decorate([
      n({ type: Number, attribute: "stroke-weight" }),
      __metadata("design:type", Object)
  ], exports.LitGoogleMapCircle.prototype, "strokeWeight", void 0);
  exports.LitGoogleMapCircle = __decorate([
      t("lit-google-map-circle")
  ], exports.LitGoogleMapCircle);

  exports.LitGoogleMapPolygon = class LitGoogleMapPolygon extends s {
      constructor() {
          super(...arguments);
          this.paths = [];
          this.fillColor = "#FF0000";
          this.fillOpacity = 0.35;
          this.strokeColor = "#FF0000";
          this.strokeOpacity = 0.8;
          this.strokeWeight = 2;
          this.map = null;
          this.polygon = null;
      }
      attachToMap(map) {
          this.map = map;
          this.mapChanged();
      }
      mapChanged() {
          if (this.polygon) {
              this.polygon.setMap(null);
              google.maps.event.clearInstanceListeners(this.polygon);
          }
          if (this.map && this.map instanceof google.maps.Map) {
              this.mapReady();
          }
      }
      mapReady() {
          this.polygon = new google.maps.Polygon({
              map: this.map,
              strokeColor: this.strokeColor,
              strokeOpacity: this.strokeOpacity,
              strokeWeight: this.strokeWeight,
              fillColor: this.fillColor,
              fillOpacity: this.fillOpacity,
              paths: this.paths,
          });
      }
  };
  __decorate([
      n({ type: Array }),
      __metadata("design:type", Array)
  ], exports.LitGoogleMapPolygon.prototype, "paths", void 0);
  __decorate([
      n({ type: String, attribute: "fill-color" }),
      __metadata("design:type", Object)
  ], exports.LitGoogleMapPolygon.prototype, "fillColor", void 0);
  __decorate([
      n({ type: Number, attribute: "fill-opacity" }),
      __metadata("design:type", Object)
  ], exports.LitGoogleMapPolygon.prototype, "fillOpacity", void 0);
  __decorate([
      n({ type: String, attribute: "stroke-color" }),
      __metadata("design:type", Object)
  ], exports.LitGoogleMapPolygon.prototype, "strokeColor", void 0);
  __decorate([
      n({ type: Number, attribute: "stroke-opacity" }),
      __metadata("design:type", Object)
  ], exports.LitGoogleMapPolygon.prototype, "strokeOpacity", void 0);
  __decorate([
      n({ type: Number, attribute: "stroke-weight" }),
      __metadata("design:type", Object)
  ], exports.LitGoogleMapPolygon.prototype, "strokeWeight", void 0);
  exports.LitGoogleMapPolygon = __decorate([
      t("lit-google-map-polygon")
  ], exports.LitGoogleMapPolygon);

  exports.LitGoogleMap = class LitGoogleMap extends s {
      constructor() {
          super(...arguments);
          this.apiKey = "";
          this.version = "3.48";
          this.styles = {};
          this.zoom = 8;
          this.fitToMarkers = false;
          this.mapType = "roadmap";
          this.centerLatitude = -34.397;
          this.centerLongitude = 150.644;
          this.language = "";
          this.mapId = "DEMO_MAP_ID";
          this.map = null;
      }
      initGMap() {
          if (this.map != null) {
              return;
          }
          const gMapApiElement = this.shadowRoot.getElementById("api");
          if (gMapApiElement == null || gMapApiElement.libraryLoaded !== true) {
              return;
          }
          this.map = new google.maps.Map(this.shadowRoot.getElementById("map"), this.getMapOptions());
          this.map.addListener("bounds_changed", () => {
              this.dispatchEvent(new CustomEvent("bounds_changed", {
                  detail: this.map.getBounds().toJSON(),
                  bubbles: true,
                  composed: true,
              }));
          });
          this.map.addListener("tilesloaded", () => {
              this.dispatchEvent(new CustomEvent("tilesloaded", {
                  detail: this.map.getBounds().toJSON(),
                  bubbles: true,
                  composed: true,
              }));
          });
          this.map.addListener("click", (event) => {
              if ("placeId" in event) {
                  event.stop();
                  this.dispatchEvent(new CustomEvent("place_click", {
                      detail: { placeId: event.placeId },
                      bubbles: true,
                      composed: true,
                  }));
              }
          });
          this.updateMarkers();
          this.updateShapes();
      }
      getMapOptions() {
          return {
              zoom: this.zoom,
              center: { lat: this.centerLatitude, lng: this.centerLongitude },
              mapTypeId: this.mapType,
              styles: this.styles,
              mapId: this.mapId,
          };
      }
      mapApiLoaded() {
          this.initGMap();
      }
      connectedCallback() {
          super.connectedCallback();
          this.initGMap();
      }
      attachChildrenToMap(children) {
          if (this.map) {
              for (const child of children) {
                  child.changeMap(this.map);
              }
          }
      }
      detachChildrenFromMap(children) {
          if (this.map) {
              for (const child of children) {
                  child.changeMap(null);
              }
          }
      }
      observeMarkers() {
          if (this.markerObserverSet)
              return;
          this.addEventListener("selector-items-changed", () => {
              this.updateMarkers();
          });
          this.markerObserverSet = true;
      }
      updateMarkers() {
          var _a;
          this.observeMarkers();
          const markersSelector = this.shadowRoot.getElementById("markers-selector");
          if (!markersSelector)
              return;
          const newMarkers = markersSelector.items;
          if (this.markers && newMarkers.length === this.markers.length) {
              const added = newMarkers.filter((m) => {
                  return this.markers && this.markers.indexOf(m) === -1;
              });
              if (added.length === 0)
                  return;
          }
          const boundsChanged = this.checkBoundsChanged(this.markers, newMarkers);
          const removedMarkers = ((_a = this.markers) === null || _a === void 0 ? void 0 : _a.filter((m) => {
              return newMarkers.indexOf(m) === -1;
          })) || [];
          this.detachChildrenFromMap(removedMarkers);
          this.markers = newMarkers;
          this.attachChildrenToMap(this.markers);
          if (this.fitToMarkers && boundsChanged) {
              this.fitToMarkersChanged();
          }
      }
      updateShapes() {
          const shapesSelector = this.shadowRoot.getElementById("shapes-selector");
          if (!shapesSelector)
              return;
          this.shapes = shapesSelector.items;
          for (const s of this.shapes) {
              s.attachToMap(this.map);
          }
      }
      fitToMarkersChanged(retryAttempt = 0) {
          const markers = this.markers.filter((m) => !m.omitFromFit);
          if (this.map && this.fitToMarkers && markers.length > 0) {
              const latLngBounds = new google.maps.LatLngBounds();
              for (const marker of markers) {
                  latLngBounds.extend(new google.maps.LatLng(marker.latitude, marker.longitude));
              }
              const domDimensions = this.getBoundingClientRect();
              if (domDimensions.width === 0 || domDimensions.height === 0) {
                  console.log("Invalid DOM width or height for lit-google-map");
                  const timeout = 2 ** retryAttempt * 100;
                  setTimeout(() => {
                      this.fitToMarkersChanged(retryAttempt + 1);
                  }, timeout);
                  return;
              }
              if (markers.length > 1) {
                  this.map.fitBounds(latLngBounds, 0);
              }
              this.map.setCenter(latLngBounds.getCenter());
          }
      }
      checkBoundsChanged(oldMarkers, newMarkers) {
          const addedInBounds = newMarkers.filter((m) => {
              return (!m.omitFromFit &&
                  (!oldMarkers || !oldMarkers.includes(m)));
          });
          const removedInBounds = oldMarkers === null || oldMarkers === void 0 ? void 0 : oldMarkers.filter((m) => {
              return (!m.omitFromFit &&
                  (!newMarkers || !newMarkers.includes(m)));
          });
          return addedInBounds.length > 0 || removedInBounds.length > 0;
      }
      deselectMarker(event) { }
      deselectShape(event) { }
      render() {
          return x `
      <lit-google-maps-api
        id="api"
        api-key="${this.apiKey}"
        version="${this.version}"
        language="${this.language}"
        map-id="${this.mapId}"
        @api-load=${() => this.mapApiLoaded()}
      >
      </lit-google-maps-api>
      <lit-selector
        id="markers-selector"
        selected-attribute="open"
        activate-event="google-map-marker-open"
        @google-map-marker-close=${(e) => this.deselectMarker(e)}
      >
        <slot id="markers" name="markers"></slot>
      </lit-selector>
      <lit-selector
        id="shapes-selector"
        selected-attribute="open"
        activate-event="google-map-shape-open"
        @google-map-shape-close=${(e) => this.deselectShape(e)}
      >
        <slot id="shapes" name="shapes"></slot>
      </lit-selector>
      <div id="map"></div>
    `;
      }
  };
  exports.LitGoogleMap.styles = i$2 `
    #map {
      width: 100%;
      height: 100%;
    }
  `;
  __decorate([
      n({ type: String, attribute: "api-key" }),
      __metadata("design:type", Object)
  ], exports.LitGoogleMap.prototype, "apiKey", void 0);
  __decorate([
      n({ type: String }),
      __metadata("design:type", Object)
  ], exports.LitGoogleMap.prototype, "version", void 0);
  __decorate([
      n({ type: Object }),
      __metadata("design:type", Object)
  ], exports.LitGoogleMap.prototype, "styles", void 0);
  __decorate([
      n({ type: Number }),
      __metadata("design:type", Object)
  ], exports.LitGoogleMap.prototype, "zoom", void 0);
  __decorate([
      n({ type: Boolean, attribute: "fit-to-markers" }),
      __metadata("design:type", Object)
  ], exports.LitGoogleMap.prototype, "fitToMarkers", void 0);
  __decorate([
      n({ type: String, attribute: "map-type" }),
      __metadata("design:type", Object)
  ], exports.LitGoogleMap.prototype, "mapType", void 0);
  __decorate([
      n({ type: Number, attribute: "center-latitude" }),
      __metadata("design:type", Object)
  ], exports.LitGoogleMap.prototype, "centerLatitude", void 0);
  __decorate([
      n({ type: Number, attribute: "center-longitude" }),
      __metadata("design:type", Object)
  ], exports.LitGoogleMap.prototype, "centerLongitude", void 0);
  __decorate([
      n({ type: String }),
      __metadata("design:type", Object)
  ], exports.LitGoogleMap.prototype, "language", void 0);
  __decorate([
      n({ type: String, attribute: "map-id" }),
      __metadata("design:type", Object)
  ], exports.LitGoogleMap.prototype, "mapId", void 0);
  exports.LitGoogleMap = __decorate([
      t("lit-google-map")
  ], exports.LitGoogleMap);

  class XSelection {
      constructor(selectCallback) {
          this.multi = false;
          this.selection = [];
          this.selectCallback = selectCallback;
      }
      get() {
          return this.multi ? this.selection.slice() : this.selection[0];
      }
      clear(excludes) {
          for (const item of this.selection.slice()) {
              if (!excludes || excludes.indexOf(item) < 0)
                  this.setItemSelected(item, false);
          }
      }
      isSelected(item) {
          return this.selection.indexOf(item) >= 0;
      }
      setItemSelected(item, isSelected) {
          if (item == null || isSelected === this.isSelected(item))
              return;
          if (isSelected) {
              this.selection.push(item);
          }
          else {
              const i = this.selection.indexOf(item);
              if (i >= 0) {
                  this.selection.splice(i, 1);
              }
          }
          if (this.selectCallback) {
              this.selectCallback(item, isSelected);
          }
      }
      select(item) {
          if (this.multi) {
              this.toggle(item);
          }
          else if (this.get() !== item) {
              this.setItemSelected(this.get(), false);
              this.setItemSelected(item, true);
          }
      }
      toggle(item) {
          this.setItemSelected(item, !this.isSelected(item));
      }
  }

  exports.LitSelector = class LitSelector extends s {
      constructor() {
          super(...arguments);
          this.activateEvent = "tap";
          this.selectedAttribute = null;
          this.selected = null;
          this._selection = new XSelection((item, isSelected) => this.applySelection(item, isSelected));
          this._items = [];
      }
      get items() {
          return this._items;
      }
      connectedCallback() {
          super.connectedCallback();
          this.addEventListener("slotchange", (event) => {
              event.stopPropagation();
              this.updateItems();
              this.dispatchEvent(new CustomEvent("selector-items-changed", {
                  detail: {},
                  composed: true,
              }));
          });
          this.addListener(this.activateEvent);
      }
      disconnectedCallback() {
          super.disconnectedCallback();
          this.removeListener(this.activateEvent);
      }
      attributeChangedCallback(name, oldval, newval) {
          super.attributeChangedCallback(name, oldval, newval);
          switch (name) {
              case "selected": {
                  this.updateSelected();
                  break;
              }
          }
      }
      applySelection(item, isSelected) {
          if (this.selectedAttribute && item instanceof Element) {
              if (isSelected !== item.hasAttribute(this.selectedAttribute))
                  item.toggleAttribute(this.selectedAttribute);
          }
      }
      updateItems() {
          var _a;
          const slotElement = this.querySelector("slot");
          this._items = (_a = slotElement === null || slotElement === void 0 ? void 0 : slotElement.assignedNodes()) !== null && _a !== void 0 ? _a : [];
      }
      addListener(eventName) {
          this.addEventListener(eventName, (event) => this.activateHandler(event));
      }
      removeListener(eventName) {
          this.removeEventListener(eventName, (event) => this.activateHandler(event));
      }
      activateHandler(event) {
          let t = event.target;
          const items = this.items;
          while (t && t !== this) {
              const i = items.indexOf(t);
              if (i >= 0) {
                  const value = this.indexToValue(i);
                  this.itemActivate(value, t);
                  return;
              }
              t = t.parentNode;
          }
      }
      itemActivate(value, item) {
          if (this.dispatchEvent(new CustomEvent("selector-item-activate", {
              detail: { selected: value, item: item },
              composed: true,
              cancelable: true,
          })))
              this.select(value);
      }
      select(value) {
          this.selected = value;
      }
      updateSelected() {
          this.selectSelected(this.selected);
      }
      selectSelected(selected) {
          if (!this._items)
              return;
          const item = this.valueToItem(this.selected);
          if (item) {
              this._selection.select(item);
          }
          else {
              this._selection.clear();
          }
      }
      valueToItem(value) {
          return value == null ? null : this._items[this.valueToIndex(value)];
      }
      valueToIndex(value) {
          return Number(value);
      }
      indexToValue(index) {
          return index;
      }
      indexOf(item) {
          return this._items ? this._items.indexOf(item) : -1;
      }
  };
  __decorate([
      n({ type: String, attribute: "activate-event" }),
      __metadata("design:type", Object)
  ], exports.LitSelector.prototype, "activateEvent", void 0);
  __decorate([
      n({ type: String, attribute: "selected-attribute" }),
      __metadata("design:type", String)
  ], exports.LitSelector.prototype, "selectedAttribute", void 0);
  __decorate([
      n({ type: Number, reflect: true }),
      __metadata("design:type", Object)
  ], exports.LitSelector.prototype, "selected", void 0);
  exports.LitSelector = __decorate([
      t("lit-selector")
  ], exports.LitSelector);

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;

})({});
