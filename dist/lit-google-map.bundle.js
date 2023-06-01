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

    /**
     * @license
     * Copyright 2019 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
    const t$1=window,e$4=t$1.ShadowRoot&&(void 0===t$1.ShadyCSS||t$1.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$3=Symbol(),n$4=new WeakMap;class o$3{constructor(t,e,n){if(this._$cssResult$=!0,n!==s$3)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e;}get styleSheet(){let t=this.o;const s=this.t;if(e$4&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=n$4.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&n$4.set(s,t));}return t}toString(){return this.cssText}}const r$2=t=>new o$3("string"==typeof t?t:t+"",void 0,s$3),i$2=(t,...e)=>{const n=1===t.length?t[0]:e.reduce(((e,s,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[n+1]),t[0]);return new o$3(n,t,s$3)},S$1=(s,n)=>{e$4?s.adoptedStyleSheets=n.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):n.forEach((e=>{const n=document.createElement("style"),o=t$1.litNonce;void 0!==o&&n.setAttribute("nonce",o),n.textContent=e.cssText,s.appendChild(n);}));},c$1=e$4?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r$2(e)})(t):t;

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */var s$2;const e$3=window,r$1=e$3.trustedTypes,h$1=r$1?r$1.emptyScript:"",o$2=e$3.reactiveElementPolyfillSupport,n$3={toAttribute(t,i){switch(i){case Boolean:t=t?h$1:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t);}catch(t){s=null;}}return s}},a$1=(t,i)=>i!==t&&(i==i||t==t),l$2={attribute:!0,type:String,converter:n$3,reflect:!1,hasChanged:a$1};class d$1 extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u();}static addInitializer(t){var i;this.finalize(),(null!==(i=this.h)&&void 0!==i?i:this.h=[]).push(t);}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,s)=>{const e=this._$Ep(s,i);void 0!==e&&(this._$Ev.set(e,s),t.push(e));})),t}static createProperty(t,i=l$2){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e);}}static getPropertyDescriptor(t,i,s){return {get(){return this[i]},set(e){const r=this[t];this[i]=e,this.requestUpdate(t,r,s);},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||l$2}static finalize(){if(this.hasOwnProperty("finalized"))return !1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s]);}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(i){const s=[];if(Array.isArray(i)){const e=new Set(i.flat(1/0).reverse());for(const i of e)s.unshift(c$1(i));}else void 0!==i&&s.push(c$1(i));return s}static _$Ep(t,i){const s=i.attribute;return !1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)));}addController(t){var i,s;(null!==(i=this._$ES)&&void 0!==i?i:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t));}removeController(t){var i;null===(i=this._$ES)||void 0===i||i.splice(this._$ES.indexOf(t)>>>0,1);}_$Eg(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this._$Ei.set(i,this[i]),delete this[i]);}));}createRenderRoot(){var t;const s=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return S$1(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}));}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}));}attributeChangedCallback(t,i,s){this._$AK(t,s);}_$EO(t,i,s=l$2){var e;const r=this.constructor._$Ep(t,s);if(void 0!==r&&!0===s.reflect){const h=(void 0!==(null===(e=s.converter)||void 0===e?void 0:e.toAttribute)?s.converter:n$3).toAttribute(i,s.type);this._$El=t,null==h?this.removeAttribute(r):this.setAttribute(r,h),this._$El=null;}}_$AK(t,i){var s;const e=this.constructor,r=e._$Ev.get(t);if(void 0!==r&&this._$El!==r){const t=e.getPropertyOptions(r),h="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(s=t.converter)||void 0===s?void 0:s.fromAttribute)?t.converter:n$3;this._$El=r,this[r]=h.fromAttribute(i,t.type),this._$El=null;}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||a$1)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===s.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this._$E_=this._$Ej());}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,i)=>this[i]=t)),this._$Ei=void 0);let i=!1;const s=this._$AL;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(s)):this._$Ek();}catch(t){throw i=!1,this._$Ek(),t}i&&this._$AE(s);}willUpdate(t){}_$AE(t){var i;null===(i=this._$ES)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t);}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return !0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,i)=>this._$EO(i,this[i],t))),this._$EC=void 0),this._$Ek();}updated(t){}firstUpdated(t){}}d$1.finalized=!0,d$1.elementProperties=new Map,d$1.elementStyles=[],d$1.shadowRootOptions={mode:"open"},null==o$2||o$2({ReactiveElement:d$1}),(null!==(s$2=e$3.reactiveElementVersions)&&void 0!==s$2?s$2:e$3.reactiveElementVersions=[]).push("1.6.1");

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
    var t;const i$1=window,s$1=i$1.trustedTypes,e$2=s$1?s$1.createPolicy("lit-html",{createHTML:t=>t}):void 0,o$1="$lit$",n$2=`lit$${(Math.random()+"").slice(9)}$`,l$1="?"+n$2,h=`<${l$1}>`,r=document,d=()=>r.createComment(""),u=t=>null===t||"object"!=typeof t&&"function"!=typeof t,c=Array.isArray,v=t=>c(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),a="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_=/-->/g,m=/>/g,p=RegExp(`>|${a}(?:([^\\s"'>=/]+)(${a}*=${a}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),g=/'/g,$=/"/g,y=/^(?:script|style|textarea|title)$/i,w=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),x=w(1),T=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),E=new WeakMap,C=r.createTreeWalker(r,129,null,!1),P=(t,i)=>{const s=t.length-1,l=[];let r,d=2===i?"<svg>":"",u=f;for(let i=0;i<s;i++){const s=t[i];let e,c,v=-1,a=0;for(;a<s.length&&(u.lastIndex=a,c=u.exec(s),null!==c);)a=u.lastIndex,u===f?"!--"===c[1]?u=_:void 0!==c[1]?u=m:void 0!==c[2]?(y.test(c[2])&&(r=RegExp("</"+c[2],"g")),u=p):void 0!==c[3]&&(u=p):u===p?">"===c[0]?(u=null!=r?r:f,v=-1):void 0===c[1]?v=-2:(v=u.lastIndex-c[2].length,e=c[1],u=void 0===c[3]?p:'"'===c[3]?$:g):u===$||u===g?u=p:u===_||u===m?u=f:(u=p,r=void 0);const w=u===p&&t[i+1].startsWith("/>")?" ":"";d+=u===f?s+h:v>=0?(l.push(e),s.slice(0,v)+o$1+s.slice(v)+n$2+w):s+n$2+(-2===v?(l.push(void 0),i):w);}const c=d+(t[s]||"<?>")+(2===i?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return [void 0!==e$2?e$2.createHTML(c):c,l]};class V{constructor({strings:t,_$litType$:i},e){let h;this.parts=[];let r=0,u=0;const c=t.length-1,v=this.parts,[a,f]=P(t,i);if(this.el=V.createElement(a,e),C.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes);}for(;null!==(h=C.nextNode())&&v.length<c;){if(1===h.nodeType){if(h.hasAttributes()){const t=[];for(const i of h.getAttributeNames())if(i.endsWith(o$1)||i.startsWith(n$2)){const s=f[u++];if(t.push(i),void 0!==s){const t=h.getAttribute(s.toLowerCase()+o$1).split(n$2),i=/([.?@])?(.*)/.exec(s);v.push({type:1,index:r,name:i[2],strings:t,ctor:"."===i[1]?k:"?"===i[1]?I:"@"===i[1]?L:R});}else v.push({type:6,index:r});}for(const i of t)h.removeAttribute(i);}if(y.test(h.tagName)){const t=h.textContent.split(n$2),i=t.length-1;if(i>0){h.textContent=s$1?s$1.emptyScript:"";for(let s=0;s<i;s++)h.append(t[s],d()),C.nextNode(),v.push({type:2,index:++r});h.append(t[i],d());}}}else if(8===h.nodeType)if(h.data===l$1)v.push({type:2,index:r});else {let t=-1;for(;-1!==(t=h.data.indexOf(n$2,t+1));)v.push({type:7,index:r}),t+=n$2.length-1;}r++;}}static createElement(t,i){const s=r.createElement("template");return s.innerHTML=t,s}}function N(t,i,s=t,e){var o,n,l,h;if(i===T)return i;let r=void 0!==e?null===(o=s._$Co)||void 0===o?void 0:o[e]:s._$Cl;const d=u(i)?void 0:i._$litDirective$;return (null==r?void 0:r.constructor)!==d&&(null===(n=null==r?void 0:r._$AO)||void 0===n||n.call(r,!1),void 0===d?r=void 0:(r=new d(t),r._$AT(t,s,e)),void 0!==e?(null!==(l=(h=s)._$Co)&&void 0!==l?l:h._$Co=[])[e]=r:s._$Cl=r),void 0!==r&&(i=N(t,r._$AS(t,i.values),r,e)),i}class S{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var i;const{el:{content:s},parts:e}=this._$AD,o=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:r).importNode(s,!0);C.currentNode=o;let n=C.nextNode(),l=0,h=0,d=e[0];for(;void 0!==d;){if(l===d.index){let i;2===d.type?i=new M(n,n.nextSibling,this,t):1===d.type?i=new d.ctor(n,d.name,d.strings,this,t):6===d.type&&(i=new z(n,this,t)),this._$AV.push(i),d=e[++h];}l!==(null==d?void 0:d.index)&&(n=C.nextNode(),l++);}return o}v(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class M{constructor(t,i,s,e){var o;this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cp=null===(o=null==e?void 0:e.isConnected)||void 0===o||o;}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===(null==t?void 0:t.nodeType)&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=N(this,t,i),u(t)?t===A||null==t||""===t?(this._$AH!==A&&this._$AR(),this._$AH=A):t!==this._$AH&&t!==T&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):v(t)?this.T(t):this._(t);}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t));}_(t){this._$AH!==A&&u(this._$AH)?this._$AA.nextSibling.data=t:this.$(r.createTextNode(t)),this._$AH=t;}g(t){var i;const{values:s,_$litType$:e}=t,o="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=V.createElement(e.h,this.options)),e);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===o)this._$AH.v(s);else {const t=new S(o,this),i=t.u(this.options);t.v(s),this.$(i),this._$AH=t;}}_$AC(t){let i=E.get(t.strings);return void 0===i&&E.set(t.strings,i=new V(t)),i}T(t){c(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const o of t)e===i.length?i.push(s=new M(this.k(d()),this.k(d()),this,this.options)):s=i[e],s._$AI(o),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,i){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i;}}setConnected(t){var i;void 0===this._$AM&&(this._$Cp=t,null===(i=this._$AP)||void 0===i||i.call(this,t));}}class R{constructor(t,i,s,e,o){this.type=1,this._$AH=A,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=A;}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,s,e){const o=this.strings;let n=!1;if(void 0===o)t=N(this,t,i,0),n=!u(t)||t!==this._$AH&&t!==T,n&&(this._$AH=t);else {const e=t;let l,h;for(t=o[0],l=0;l<o.length-1;l++)h=N(this,e[s+l],i,l),h===T&&(h=this._$AH[l]),n||(n=!u(h)||h!==this._$AH[l]),h===A?t=A:t!==A&&(t+=(null!=h?h:"")+o[l+1]),this._$AH[l]=h;}n&&!e&&this.j(t);}j(t){t===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"");}}class k extends R{constructor(){super(...arguments),this.type=3;}j(t){this.element[this.name]=t===A?void 0:t;}}const H=s$1?s$1.emptyScript:"";class I extends R{constructor(){super(...arguments),this.type=4;}j(t){t&&t!==A?this.element.setAttribute(this.name,H):this.element.removeAttribute(this.name);}}class L extends R{constructor(t,i,s,e,o){super(t,i,s,e,o),this.type=5;}_$AI(t,i=this){var s;if((t=null!==(s=N(this,t,i,0))&&void 0!==s?s:A)===T)return;const e=this._$AH,o=t===A&&e!==A||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,n=t!==A&&(e===A||o);o&&this.element.removeEventListener(this.name,this,e),n&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){var i,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t);}}class z{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){N(this,t);}}const j=i$1.litHtmlPolyfillSupport;null==j||j(V,M),(null!==(t=i$1.litHtmlVersions)&&void 0!==t?t:i$1.litHtmlVersions=[]).push("2.7.2");const B=(t,i,s)=>{var e,o;const n=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let l=n._$litPart$;if(void 0===l){const t=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:null;n._$litPart$=l=new M(i.insertBefore(d(),t),t,void 0,null!=s?s:{});}return l._$AI(t),l};

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */var l,o;class s extends d$1{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=B(i,this.renderRoot,this.renderOptions);}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0);}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1);}render(){return T}}s.finalized=!0,s._$litElement$=!0,null===(l=globalThis.litElementHydrateSupport)||void 0===l||l.call(globalThis,{LitElement:s});const n$1=globalThis.litElementPolyfillSupport;null==n$1||n$1({LitElement:s});(null!==(o=globalThis.litElementVersions)&&void 0!==o?o:globalThis.litElementVersions=[]).push("3.3.1");

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
    const e$1=e=>n=>"function"==typeof n?((e,n)=>(customElements.define(e,n),n))(e,n):((e,n)=>{const{kind:t,elements:s}=n;return {kind:t,elements:s,finisher(n){customElements.define(e,n);}}})(e,n);

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
    const i=(i,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(n){n.createProperty(e.key,i);}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this));},finisher(n){n.createProperty(e.key,i);}};function e(e){return (n,t)=>void 0!==t?((i,e,n)=>{e.constructor.createProperty(n,i);})(e,n,t):i(e,n)}

    /**
     * @license
     * Copyright 2021 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */var n;null!=(null===(n=window.HTMLSlotElement)||void 0===n?void 0:n.prototype.assignedElements)?(o,n)=>o.assignedElements(n):(o,n)=>o.assignedNodes(n).filter((o=>o.nodeType===Node.ELEMENT_NODE));

    class ScriptLoaderMap {
        constructor() {
            this.apiMap = {};
        }
        require(url, notifyCallback, jsonpCallbackName) {
            var name = this.nameFromUrl(url);
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
            return url.replace(/[\:\/\%\?\&\.\=\-\,]/g, "_") + "_api";
        }
    }
    class ScriptLoader {
        constructor(name, url, callbackName) {
            this.callbackMacro = "%%callback%%";
            this.loaded = false;
            this.script = null;
            this.notifiers = [];
            if (!callbackName) {
                if (url.indexOf(this.callbackMacro) >= 0) {
                    callbackName = name + "_loaded";
                    url = url.replace(this.callbackMacro, callbackName);
                }
                else {
                    console.error("ScriptLoader class: a %%callback%% parameter is required in libraryUrl");
                    return;
                }
            }
            this.callbackName = callbackName;
            window[this.callbackName] =
                this.success.bind(this);
            this.addScript(url);
        }
        addScript(src) {
            var script = document.createElement("script");
            script.src = src;
            script.onerror = this.handleError.bind(this);
            var s = document.querySelector("script") || document.body;
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
        success() {
            this.loaded = true;
            this.result = Array.prototype.slice.call(arguments);
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
            var url = mapsUrl + "&v=" + version;
            url += "&libraries=drawing,geometry,places,visualization";
            if (apiKey && !clientId) {
                url += "&key=" + apiKey;
            }
            if (clientId) {
                url += "&client=" + clientId;
            }
            if (!apiKey && !clientId) {
                var warning = "No Google Maps API Key or Client ID specified. " +
                    "See https://developers.google.com/maps/documentation/javascript/get-api-key " +
                    "for instructions to get started with a key or client id.";
                console.warn(warning);
            }
            if (language) {
                url += "&language=" + language;
            }
            if (mapId) {
                url += "&map_ids=" + mapId;
            }
            return url;
        }
    };
    __decorate([
        e({ type: String, attribute: "api-key" }),
        __metadata("design:type", Object)
    ], exports.LitGoogleMapsApi.prototype, "apiKey", void 0);
    __decorate([
        e({ type: String, attribute: "client-id" }),
        __metadata("design:type", Object)
    ], exports.LitGoogleMapsApi.prototype, "clientId", void 0);
    __decorate([
        e({ type: String, attribute: "maps-url" }),
        __metadata("design:type", Object)
    ], exports.LitGoogleMapsApi.prototype, "mapsUrl", void 0);
    __decorate([
        e({ type: String }),
        __metadata("design:type", Object)
    ], exports.LitGoogleMapsApi.prototype, "version", void 0);
    __decorate([
        e({ type: String }),
        __metadata("design:type", Object)
    ], exports.LitGoogleMapsApi.prototype, "language", void 0);
    __decorate([
        e({ type: String, attribute: "map-id" }),
        __metadata("design:type", Object)
    ], exports.LitGoogleMapsApi.prototype, "mapId", void 0);
    exports.LitGoogleMapsApi = __decorate([
        e$1("lit-google-maps-api")
    ], exports.LitGoogleMapsApi);

    exports.LitGoogleMapMarker = class LitGoogleMapMarker extends s {
        constructor() {
            super(...arguments);
            this.latitude = 0;
            this.longitude = 0;
            this.label = null;
            this.zIndex = 0;
            this.open = false;
            this.icon = null;
            this.id = null;
            this.omitFromFit = false;
            this.map = null;
            this.marker = null;
        }
        attributeChangedCallback(name, oldval, newval) {
            var _a, _b, _c;
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
                case "label": {
                    (_a = this.marker) === null || _a === void 0 ? void 0 : _a.setLabel(this.label);
                    break;
                }
                case "icon": {
                    (_b = this.marker) === null || _b === void 0 ? void 0 : _b.setIcon(this.icon);
                    break;
                }
                case "z-index": {
                    (_c = this.marker) === null || _c === void 0 ? void 0 : _c.setZIndex(this.zIndex);
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
            var _a;
            (_a = this.marker) === null || _a === void 0 ? void 0 : _a.setPosition(new google.maps.LatLng(this.latitude, this.longitude));
        }
        changeMap(newMap) {
            this.map = newMap;
            this.mapChanged();
        }
        mapChanged() {
            if (this.marker) {
                this.marker.setMap(null);
                google.maps.event.clearInstanceListeners(this.marker);
            }
            if (this.map && this.map instanceof google.maps.Map) {
                this.mapReady();
            }
        }
        mapReady() {
            this.marker = new google.maps.Marker({
                map: this.map,
                icon: this.icon,
                position: {
                    lat: this.latitude,
                    lng: this.longitude,
                },
                label: this.label,
                zIndex: this.zIndex,
            });
            this.marker.addListener("mouseover", () => {
                this.dispatchEvent(new CustomEvent("mouseover", {
                    detail: { id: this.id },
                    bubbles: true,
                    composed: true,
                }));
            });
            this.marker.addListener("mouseout", () => {
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
            var content = this.innerHTML.trim();
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
        e({ type: Number, reflect: true }),
        __metadata("design:type", Number)
    ], exports.LitGoogleMapMarker.prototype, "latitude", void 0);
    __decorate([
        e({ type: Number, reflect: true }),
        __metadata("design:type", Number)
    ], exports.LitGoogleMapMarker.prototype, "longitude", void 0);
    __decorate([
        e({ type: String, reflect: true }),
        __metadata("design:type", String)
    ], exports.LitGoogleMapMarker.prototype, "label", void 0);
    __decorate([
        e({ type: Number, reflect: true, attribute: "z-index" }),
        __metadata("design:type", Number)
    ], exports.LitGoogleMapMarker.prototype, "zIndex", void 0);
    __decorate([
        e({ type: Boolean, reflect: true }),
        __metadata("design:type", Boolean)
    ], exports.LitGoogleMapMarker.prototype, "open", void 0);
    __decorate([
        e({ type: String, reflect: true }),
        __metadata("design:type", String)
    ], exports.LitGoogleMapMarker.prototype, "icon", void 0);
    __decorate([
        e({ type: String, reflect: true }),
        __metadata("design:type", String)
    ], exports.LitGoogleMapMarker.prototype, "id", void 0);
    __decorate([
        e({ type: Boolean, attribute: "omit-from-fit" }),
        __metadata("design:type", Boolean)
    ], exports.LitGoogleMapMarker.prototype, "omitFromFit", void 0);
    exports.LitGoogleMapMarker = __decorate([
        e$1("lit-google-map-marker")
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
        e({ type: Number, attribute: "center-latitude" }),
        __metadata("design:type", Number)
    ], exports.LitGoogleMapCircle.prototype, "centerLatitude", void 0);
    __decorate([
        e({ type: Number, attribute: "center-longitude" }),
        __metadata("design:type", Number)
    ], exports.LitGoogleMapCircle.prototype, "centerLongitude", void 0);
    __decorate([
        e({ type: Number }),
        __metadata("design:type", Number)
    ], exports.LitGoogleMapCircle.prototype, "radius", void 0);
    __decorate([
        e({ type: String, attribute: "fill-color" }),
        __metadata("design:type", String)
    ], exports.LitGoogleMapCircle.prototype, "fillColor", void 0);
    __decorate([
        e({ type: Number, attribute: "fill-opacity" }),
        __metadata("design:type", Number)
    ], exports.LitGoogleMapCircle.prototype, "fillOpacity", void 0);
    __decorate([
        e({ type: String, attribute: "stroke-color" }),
        __metadata("design:type", String)
    ], exports.LitGoogleMapCircle.prototype, "strokeColor", void 0);
    __decorate([
        e({ type: Number, attribute: "stroke-opacity" }),
        __metadata("design:type", Number)
    ], exports.LitGoogleMapCircle.prototype, "strokeOpacity", void 0);
    __decorate([
        e({ type: Number, attribute: "stroke-weight" }),
        __metadata("design:type", Number)
    ], exports.LitGoogleMapCircle.prototype, "strokeWeight", void 0);
    exports.LitGoogleMapCircle = __decorate([
        e$1("lit-google-map-circle")
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
        e({ type: Array }),
        __metadata("design:type", Array)
    ], exports.LitGoogleMapPolygon.prototype, "paths", void 0);
    __decorate([
        e({ type: String, attribute: "fill-color" }),
        __metadata("design:type", String)
    ], exports.LitGoogleMapPolygon.prototype, "fillColor", void 0);
    __decorate([
        e({ type: Number, attribute: "fill-opacity" }),
        __metadata("design:type", Number)
    ], exports.LitGoogleMapPolygon.prototype, "fillOpacity", void 0);
    __decorate([
        e({ type: String, attribute: "stroke-color" }),
        __metadata("design:type", String)
    ], exports.LitGoogleMapPolygon.prototype, "strokeColor", void 0);
    __decorate([
        e({ type: Number, attribute: "stroke-opacity" }),
        __metadata("design:type", Number)
    ], exports.LitGoogleMapPolygon.prototype, "strokeOpacity", void 0);
    __decorate([
        e({ type: Number, attribute: "stroke-weight" }),
        __metadata("design:type", Number)
    ], exports.LitGoogleMapPolygon.prototype, "strokeWeight", void 0);
    exports.LitGoogleMapPolygon = __decorate([
        e$1("lit-google-map-polygon")
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
            this.mapId = "";
            this.map = null;
        }
        initGMap() {
            if (this.map != null) {
                return;
            }
            var gMapApiElement = this.shadowRoot.getElementById("api");
            if (gMapApiElement == null || gMapApiElement.libraryLoaded != true) {
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
                for (let child of children) {
                    child.changeMap(this.map);
                }
            }
        }
        detachChildrenFromMap(children) {
            if (this.map) {
                for (let child of children) {
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
                if (added.length == 0)
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
            var shapesSelector = this.shadowRoot.getElementById("shapes-selector");
            if (!shapesSelector)
                return;
            this.shapes = shapesSelector.items;
            for (let s of this.shapes) {
                s.attachToMap(this.map);
            }
        }
        fitToMarkersChanged() {
            const markers = this.markers.filter((m) => !m.omitFromFit);
            if (this.map && this.fitToMarkers && markers.length > 0) {
                var latLngBounds = new google.maps.LatLngBounds();
                for (var marker of markers) {
                    latLngBounds.extend(new google.maps.LatLng(marker.latitude, marker.longitude));
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
                    (!oldMarkers || oldMarkers.indexOf(m) === -1));
            });
            return addedInBounds.length > 0;
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
        e({ type: String, attribute: "api-key" }),
        __metadata("design:type", String)
    ], exports.LitGoogleMap.prototype, "apiKey", void 0);
    __decorate([
        e({ type: String }),
        __metadata("design:type", String)
    ], exports.LitGoogleMap.prototype, "version", void 0);
    __decorate([
        e({ type: Object }),
        __metadata("design:type", Object)
    ], exports.LitGoogleMap.prototype, "styles", void 0);
    __decorate([
        e({ type: Number }),
        __metadata("design:type", Number)
    ], exports.LitGoogleMap.prototype, "zoom", void 0);
    __decorate([
        e({ type: Boolean, attribute: "fit-to-markers" }),
        __metadata("design:type", Boolean)
    ], exports.LitGoogleMap.prototype, "fitToMarkers", void 0);
    __decorate([
        e({ type: String, attribute: "map-type" }),
        __metadata("design:type", String)
    ], exports.LitGoogleMap.prototype, "mapType", void 0);
    __decorate([
        e({ type: Number, attribute: "center-latitude" }),
        __metadata("design:type", Number)
    ], exports.LitGoogleMap.prototype, "centerLatitude", void 0);
    __decorate([
        e({ type: Number, attribute: "center-longitude" }),
        __metadata("design:type", Number)
    ], exports.LitGoogleMap.prototype, "centerLongitude", void 0);
    __decorate([
        e({ type: String }),
        __metadata("design:type", String)
    ], exports.LitGoogleMap.prototype, "language", void 0);
    __decorate([
        e({ type: String, attribute: "map-id" }),
        __metadata("design:type", String)
    ], exports.LitGoogleMap.prototype, "mapId", void 0);
    exports.LitGoogleMap = __decorate([
        e$1("lit-google-map")
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
            this.selection.slice().forEach((item) => {
                if (!excludes || excludes.indexOf(item) < 0)
                    this.setItemSelected(item, false);
            });
        }
        isSelected(item) {
            return this.selection.indexOf(item) >= 0;
        }
        setItemSelected(item, isSelected) {
            if (item == null || isSelected == this.isSelected(item))
                return;
            if (isSelected) {
                this.selection.push(item);
            }
            else {
                var i = this.selection.indexOf(item);
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
                if (isSelected != item.hasAttribute(this.selectedAttribute))
                    item.toggleAttribute(this.selectedAttribute);
            }
        }
        updateItems() {
            var _a;
            var slotElement = this.querySelector("slot");
            this._items = (_a = slotElement === null || slotElement === void 0 ? void 0 : slotElement.assignedNodes()) !== null && _a !== void 0 ? _a : [];
        }
        addListener(eventName) {
            this.addEventListener(eventName, (event) => this.activateHandler(event));
        }
        removeListener(eventName) {
            this.removeEventListener(eventName, (event) => this.activateHandler(event));
        }
        activateHandler(event) {
            var t = event.target;
            var items = this.items;
            while (t && t != this) {
                var i = items.indexOf(t);
                if (i >= 0) {
                    var value = this.indexToValue(i);
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
            var item = this.valueToItem(this.selected);
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
        e({ type: String, attribute: "activate-event" }),
        __metadata("design:type", String)
    ], exports.LitSelector.prototype, "activateEvent", void 0);
    __decorate([
        e({ type: String, attribute: "selected-attribute" }),
        __metadata("design:type", String)
    ], exports.LitSelector.prototype, "selectedAttribute", void 0);
    __decorate([
        e({ type: Number, reflect: true }),
        __metadata("design:type", Object)
    ], exports.LitSelector.prototype, "selected", void 0);
    exports.LitSelector = __decorate([
        e$1("lit-selector")
    ], exports.LitSelector);

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({});
