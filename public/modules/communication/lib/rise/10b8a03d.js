"use strict";(self.wpRiseJsonp=self.wpRiseJsonp||[]).push([["vendors-node_modules_pnpm_articulate_design-system_1_8_0__articulate_design-system-tokens_1_2-433fb5"],{32216:(cn,La,Gr)=>{Gr.r(La),Gr.d(La,{Arc:()=>wi,ArcAbstractFlexLayouts:()=>Ge,ArcAbstractGapSizes:()=>Ha,ArcAbstractIconSizes:()=>va,ArcAbstractTextLayouts:()=>We,ArcAbstractTextOverflows:()=>Va,ArcAbstractTextSizes:()=>qe,ArcAvatar:()=>Ca,ArcAvatarColors:()=>pe,ArcAvatarColorsReserved:()=>gt,ArcAvatarOverflow:()=>go,ArcAvatarOverflowSizes:()=>wt,ArcAvatarPile:()=>Pt,ArcAvatarPileSizes:()=>yt,ArcAvatarSizes:()=>bt,ArcAvatarText:()=>Tt,ArcAvatarTextGapSizes:()=>ft,ArcAvatarTextOverflows:()=>xt,ArcAvatarTextSizes:()=>$t,ArcBadge:()=>So,ArcBadgeContrasts:()=>ko,ArcBadgeCount:()=>Io,ArcBadgeCountShapes:()=>To,ArcBadgeCountSizes:()=>jo,ArcBadgeCountVariants:()=>Eo,ArcBadgeLayouts:()=>zo,ArcBadgeSizes:()=>Ao,ArcBadgeVariants:()=>Co,ArcButton:()=>kr,ArcButtonHierarchies:()=>Qt,ArcButtonLayouts:()=>Kt,ArcButtonShapes:()=>Wt,ArcButtonSizes:()=>Gt,ArcButtonVariants:()=>Jt,ArcCheckbox:()=>Be,ArcCheckboxBar:()=>Yo,ArcCheckboxBarLayouts:()=>Fo,ArcCheckboxBarOption:()=>Zo,ArcCheckboxBarSizes:()=>Do,ArcCheckboxLayouts:()=>Ho,ArcCheckboxSizes:()=>Vo,ArcCheckboxVariants:()=>No,ArcIcon:()=>j,ArcIconText:()=>Fr,ArcIconTextVariants:()=>yo,ArcInputAction:()=>Xo,ArcLabel:()=>$r,ArcLabelContent:()=>yr,ArcLabelLayouts:()=>Ro,ArcLink:()=>Go,ArcLinkVariants:()=>Wo,ArcPopover:()=>Ea,ArcPopoverAnchors:()=>ze,ArcPopoverBoundaries:()=>ke,ArcPopoverButton:()=>ta,ArcPopoverDefaults:()=>rr,ArcPopoverModes:()=>Ae,ArcPopoverVariants:()=>Sa,ArcPopoverVariantsWithOutline:()=>Lt,ArcRadio:()=>He,ArcRadioBar:()=>oi,ArcRadioBarLayouts:()=>ai,ArcRadioBarOption:()=>ti,ArcRadioBarSizes:()=>ei,ArcRadioLayouts:()=>Jo,ArcRadioSizes:()=>Qo,ArcSwitch:()=>si,ArcSwitchLabelPositions:()=>_r,ArcSwitchSizes:()=>ii,ArcSwitchStates:()=>M,ArcSystemAlignments:()=>Ma,ArcSystemColors:()=>ua,ArcSystemHierarchies:()=>Oa,ArcSystemLayouts:()=>or,ArcSystemLineHeights:()=>Ba,ArcSystemPopoverModes:()=>ha,ArcSystemShapes:()=>pa,ArcSystemSizes:()=>G,ArcSystemVariants:()=>Z,ArcTextAlignments:()=>gi,ArcTextBodyElements:()=>Ne,ArcTextBodySizes:()=>vi,ArcTextBodyVariants:()=>mi,ArcTextElements:()=>Ue,ArcTextHeadingElements:()=>Ve,ArcTextHeadingSizes:()=>pi,ArcTextHeadingVariants:()=>ui,ArcTextInput:()=>Yi,ArcTextInputLayouts:()=>Ui,ArcTextInputSizes:()=>Fi,ArcTextInputTypes:()=>Zi,ArcTextInputVariants:()=>Di,ArcTextKinds:()=>li,ArcTextLineHeights:()=>bi,ArcTextSubheadingSizes:()=>hi,ArcTextTitleSizes:()=>di,ArcToast:()=>Ze,ArcToastPlacements:()=>an,ArcToastPopoverModes:()=>rn,ArcToastProgressBarVariants:()=>en,ArcToastSeverities:()=>Ki,ArcToastSizes:()=>Ji,ArcToastVariants:()=>Qi,LogoArticulate:()=>ue,LogoProductAI:()=>ve,LogoProductPeek:()=>me,LogoProductReach:()=>ge,LogoProductReview:()=>be,LogoProductRise:()=>fe,LogoProductStoryline:()=>xe,adoptStyles:()=>_,assignRef:()=>Je,clamp:()=>Na,css:()=>h,didElementRectChange:()=>Ua,extractTextFromReactNode:()=>Vr,getPopoverId:()=>Ie,isDifferent:()=>vr,isSame:()=>Kr,joinArray:()=>on,makeHtmlId:()=>nr,mapDeprecated:()=>Ke,pickFromList:()=>y,updatePopoverPosition:()=>_a});const pa=["circle","square","narrow"],Z=["inherit","common","disabled","neutral","outline","solid","ai","primary","secondary","tertiary","inverse","critical-primary","critical-secondary","ai-primary","ai-secondary","primary-inverse","secondary-inverse","tertiary-inverse","overlay-light","overlay-dark","brand-black","brand-blue","brand","info","success","warning","critical"],Oa=["primary","secondary","tertiary"],or=["hug","fill","icon","gutter","inline"],ha=["","auto","manual"],Ma=["inherit","start","left","justify","center","between","around","evenly","stretch","end","right"],Ba=["inherit","tight","standard","loose"],G=["inherit","xxl","xl","lg","md","sm","xs","xxs"],ua=["blue","orange","mint","red","yellow","green","maroon","purple","neutral","white","black"],va=["inherit","xl","lg","md","sm","xs"],Ha=["inherit","lg","md","sm"],qe=["inherit","md","sm"],Va=["inherit","wrap","truncate"],We=["gutter","inline"],Ge=["hug","fill"],Ke=(a,r)=>r[a]||a,y=(a,r)=>a.filter(e=>r.includes(e)),Je=(a,r)=>{a&&(typeof a=="function"?a(r):a.current=r)},Na=(a,r=0,e=100)=>Math.min(Math.max(a,r),e),vr=(a,r)=>a!==r,Kr=(a,r)=>a===r,Ua=({a,b:r})=>vr(a?.top,r?.top)||vr(a?.left,r?.left)||vr(a?.width,r?.width)||vr(a?.height,r?.height);var i=Gr(62778),$=Gr(59288);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Jr=globalThis,ma=Jr.ShadowRoot&&(Jr.ShadyCSS===void 0||Jr.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ga=Symbol(),Fa=new WeakMap;class Da{constructor(r,e,o){if(this._$cssResult$=!0,o!==ga)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=r,this.t=e}get styleSheet(){let r=this.o;const e=this.t;if(ma&&r===void 0){const o=e!==void 0&&e.length===1;o&&(r=Fa.get(e)),r===void 0&&((this.o=r=new CSSStyleSheet).replaceSync(this.cssText),o&&Fa.set(e,r))}return r}toString(){return this.cssText}}const Qe=a=>new Da(typeof a=="string"?a:a+"",void 0,ga),h=(a,...r)=>{const e=a.length===1?a[0]:r.reduce((o,n,c)=>o+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+a[c+1],a[0]);return new Da(e,a,ga)},rt=(a,r)=>{if(ma)a.adoptedStyleSheets=r.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of r){const o=document.createElement("style"),n=Jr.litNonce;n!==void 0&&o.setAttribute("nonce",n),o.textContent=e.cssText,a.appendChild(o)}},Za=ma?a=>a:a=>a instanceof CSSStyleSheet?(r=>{let e="";for(const o of r.cssRules)e+=o.cssText;return Qe(e)})(a):a;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:at,defineProperty:et,getOwnPropertyDescriptor:tt,getOwnPropertyNames:ot,getOwnPropertySymbols:it,getPrototypeOf:nt}=Object,Qr=globalThis,Ya=Qr.trustedTypes,ct=Ya?Ya.emptyScript:"",st=Qr.reactiveElementPolyfillSupport,Rr=(a,r)=>a,ba={toAttribute(a,r){switch(r){case Boolean:a=a?ct:null;break;case Object:case Array:a=a==null?a:JSON.stringify(a)}return a},fromAttribute(a,r){let e=a;switch(r){case Boolean:e=a!==null;break;case Number:e=a===null?null:Number(a);break;case Object:case Array:try{e=JSON.parse(a)}catch{e=null}}return e}},Xa=(a,r)=>!at(a,r),qa={attribute:!0,type:String,converter:ba,reflect:!1,useDefault:!1,hasChanged:Xa};Symbol.metadata??=Symbol("metadata"),Qr.litPropertyMetadata??=new WeakMap;class wr extends HTMLElement{static addInitializer(r){this._$Ei(),(this.l??=[]).push(r)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(r,e=qa){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(r)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(r,e),!e.noAccessor){const o=Symbol(),n=this.getPropertyDescriptor(r,o,e);n!==void 0&&et(this.prototype,r,n)}}static getPropertyDescriptor(r,e,o){const{get:n,set:c}=tt(this.prototype,r)??{get(){return this[e]},set(s){this[e]=s}};return{get:n,set(s){const m=n?.call(this);c?.call(this,s),this.requestUpdate(r,m,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(r){return this.elementProperties.get(r)??qa}static _$Ei(){if(this.hasOwnProperty(Rr("elementProperties")))return;const r=nt(this);r.finalize(),r.l!==void 0&&(this.l=[...r.l]),this.elementProperties=new Map(r.elementProperties)}static finalize(){if(this.hasOwnProperty(Rr("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Rr("properties"))){const e=this.properties,o=[...ot(e),...it(e)];for(const n of o)this.createProperty(n,e[n])}const r=this[Symbol.metadata];if(r!==null){const e=litPropertyMetadata.get(r);if(e!==void 0)for(const[o,n]of e)this.elementProperties.set(o,n)}this._$Eh=new Map;for(const[e,o]of this.elementProperties){const n=this._$Eu(e,o);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(r){const e=[];if(Array.isArray(r)){const o=new Set(r.flat(1/0).reverse());for(const n of o)e.unshift(Za(n))}else r!==void 0&&e.push(Za(r));return e}static _$Eu(r,e){const o=e.attribute;return o===!1?void 0:typeof o=="string"?o:typeof r=="string"?r.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(r=>r(this))}addController(r){(this._$EO??=new Set).add(r),this.renderRoot!==void 0&&this.isConnected&&r.hostConnected?.()}removeController(r){this._$EO?.delete(r)}_$E_(){const r=new Map,e=this.constructor.elementProperties;for(const o of e.keys())this.hasOwnProperty(o)&&(r.set(o,this[o]),delete this[o]);r.size>0&&(this._$Ep=r)}createRenderRoot(){const r=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return rt(r,this.constructor.elementStyles),r}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(r=>r.hostConnected?.())}enableUpdating(r){}disconnectedCallback(){this._$EO?.forEach(r=>r.hostDisconnected?.())}attributeChangedCallback(r,e,o){this._$AK(r,o)}_$ET(r,e){const o=this.constructor.elementProperties.get(r),n=this.constructor._$Eu(r,o);if(n!==void 0&&o.reflect===!0){const c=(o.converter?.toAttribute!==void 0?o.converter:ba).toAttribute(e,o.type);this._$Em=r,c==null?this.removeAttribute(n):this.setAttribute(n,c),this._$Em=null}}_$AK(r,e){const o=this.constructor,n=o._$Eh.get(r);if(n!==void 0&&this._$Em!==n){const c=o.getPropertyOptions(n),s=typeof c.converter=="function"?{fromAttribute:c.converter}:c.converter?.fromAttribute!==void 0?c.converter:ba;this._$Em=n,this[n]=s.fromAttribute(e,c.type)??this._$Ej?.get(n)??null,this._$Em=null}}requestUpdate(r,e,o){if(r!==void 0){const n=this.constructor,c=this[r];if(o??=n.getPropertyOptions(r),!((o.hasChanged??Xa)(c,e)||o.useDefault&&o.reflect&&c===this._$Ej?.get(r)&&!this.hasAttribute(n._$Eu(r,o))))return;this.C(r,e,o)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(r,e,{useDefault:o,reflect:n,wrapped:c},s){o&&!(this._$Ej??=new Map).has(r)&&(this._$Ej.set(r,s??e??this[r]),c!==!0||s!==void 0)||(this._$AL.has(r)||(this.hasUpdated||o||(e=void 0),this._$AL.set(r,e)),n===!0&&this._$Em!==r&&(this._$Eq??=new Set).add(r))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const r=this.scheduleUpdate();return r!=null&&await r,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[n,c]of this._$Ep)this[n]=c;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[n,c]of o){const{wrapped:s}=c,m=this[n];s!==!0||this._$AL.has(n)||m===void 0||this.C(n,void 0,c,m)}}let r=!1;const e=this._$AL;try{r=this.shouldUpdate(e),r?(this.willUpdate(e),this._$EO?.forEach(o=>o.hostUpdate?.()),this.update(e)):this._$EM()}catch(o){throw r=!1,this._$EM(),o}r&&this._$AE(e)}willUpdate(r){}_$AE(r){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(r)),this.updated(r)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(r){return!0}update(r){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(r){}firstUpdated(r){}}wr.elementStyles=[],wr.shadowRootOptions={mode:"open"},wr[Rr("elementProperties")]=new Map,wr[Rr("finalized")]=new Map,st?.({ReactiveElement:wr}),(Qr.reactiveElementVersions??=[]).push("2.1.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const fa=globalThis,ra=fa.trustedTypes,Wa=ra?ra.createPolicy("lit-html",{createHTML:a=>a}):void 0,xa="$lit$",ir=`lit$${Math.random().toFixed(9).slice(2)}$`,$a="?"+ir,lt=`<${$a}>`,mr=document,Lr=()=>mr.createComment(""),Or=a=>a===null||typeof a!="object"&&typeof a!="function",ya=Array.isArray,Ga=a=>ya(a)||typeof a?.[Symbol.iterator]=="function",wa=`[ 	
\f\r]`,Mr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ka=/-->/g,Ja=/>/g,gr=RegExp(`>|${wa}(?:([^\\s"'>=/]+)(${wa}*=${wa}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Qa=/'/g,re=/"/g,ae=/^(?:script|style|textarea|title)$/i,Aa=a=>(r,...e)=>({_$litType$:a,strings:r,values:e}),sn=Aa(1),ln=Aa(2),dn=Aa(3),Ar=Symbol.for("lit-noChange"),O=Symbol.for("lit-nothing"),ee=new WeakMap,br=mr.createTreeWalker(mr,129);function te(a,r){if(!ya(a)||!a.hasOwnProperty("raw"))throw Error("invalid template strings array");return Wa!==void 0?Wa.createHTML(r):r}const oe=(a,r)=>{const e=a.length-1,o=[];let n,c=r===2?"<svg>":r===3?"<math>":"",s=Mr;for(let m=0;m<e;m++){const l=a[m];let p,g,v=-1,f=0;for(;f<l.length&&(s.lastIndex=f,g=s.exec(l),g!==null);)f=s.lastIndex,s===Mr?g[1]==="!--"?s=Ka:g[1]!==void 0?s=Ja:g[2]!==void 0?(ae.test(g[2])&&(n=RegExp("</"+g[2],"g")),s=gr):g[3]!==void 0&&(s=gr):s===gr?g[0]===">"?(s=n??Mr,v=-1):g[1]===void 0?v=-2:(v=s.lastIndex-g[2].length,p=g[1],s=g[3]===void 0?gr:g[3]==='"'?re:Qa):s===re||s===Qa?s=gr:s===Ka||s===Ja?s=Mr:(s=gr,n=void 0);const x=s===gr&&a[m+1].startsWith("/>")?" ":"";c+=s===Mr?l+lt:v>=0?(o.push(p),l.slice(0,v)+xa+l.slice(v)+ir+x):l+ir+(v===-2?m:x)}return[te(a,c+(a[e]||"<?>")+(r===2?"</svg>":r===3?"</math>":"")),o]};class Br{constructor({strings:r,_$litType$:e},o){let n;this.parts=[];let c=0,s=0;const m=r.length-1,l=this.parts,[p,g]=oe(r,e);if(this.el=Br.createElement(p,o),br.currentNode=this.el.content,e===2||e===3){const v=this.el.content.firstChild;v.replaceWith(...v.childNodes)}for(;(n=br.nextNode())!==null&&l.length<m;){if(n.nodeType===1){if(n.hasAttributes())for(const v of n.getAttributeNames())if(v.endsWith(xa)){const f=g[s++],x=n.getAttribute(v).split(ir),A=/([.?@])?(.*)/.exec(f);l.push({type:1,index:c,name:A[2],strings:x,ctor:A[1]==="."?ne:A[1]==="?"?ce:A[1]==="@"?se:Hr}),n.removeAttribute(v)}else v.startsWith(ir)&&(l.push({type:6,index:c}),n.removeAttribute(v));if(ae.test(n.tagName)){const v=n.textContent.split(ir),f=v.length-1;if(f>0){n.textContent=ra?ra.emptyScript:"";for(let x=0;x<f;x++)n.append(v[x],Lr()),br.nextNode(),l.push({type:2,index:++c});n.append(v[f],Lr())}}}else if(n.nodeType===8)if(n.data===$a)l.push({type:2,index:c});else{let v=-1;for(;(v=n.data.indexOf(ir,v+1))!==-1;)l.push({type:7,index:c}),v+=ir.length-1}c++}}static createElement(r,e){const o=mr.createElement("template");return o.innerHTML=r,o}}function fr(a,r,e=a,o){if(r===Ar)return r;let n=o!==void 0?e._$Co?.[o]:e._$Cl;const c=Or(r)?void 0:r._$litDirective$;return n?.constructor!==c&&(n?._$AO?.(!1),c===void 0?n=void 0:(n=new c(a),n._$AT(a,e,o)),o!==void 0?(e._$Co??=[])[o]=n:e._$Cl=n),n!==void 0&&(r=fr(a,n._$AS(a,r.values),n,o)),r}class ie{constructor(r,e){this._$AV=[],this._$AN=void 0,this._$AD=r,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(r){const{el:{content:e},parts:o}=this._$AD,n=(r?.creationScope??mr).importNode(e,!0);br.currentNode=n;let c=br.nextNode(),s=0,m=0,l=o[0];for(;l!==void 0;){if(s===l.index){let p;l.type===2?p=new zr(c,c.nextSibling,this,r):l.type===1?p=new l.ctor(c,l.name,l.strings,this,r):l.type===6&&(p=new le(c,this,r)),this._$AV.push(p),l=o[++m]}s!==l?.index&&(c=br.nextNode(),s++)}return br.currentNode=mr,n}p(r){let e=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(r,o,e),e+=o.strings.length-2):o._$AI(r[e])),e++}}class zr{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(r,e,o,n){this.type=2,this._$AH=O,this._$AN=void 0,this._$AA=r,this._$AB=e,this._$AM=o,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let r=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&r?.nodeType===11&&(r=e.parentNode),r}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(r,e=this){r=fr(this,r,e),Or(r)?r===O||r==null||r===""?(this._$AH!==O&&this._$AR(),this._$AH=O):r!==this._$AH&&r!==Ar&&this._(r):r._$litType$!==void 0?this.$(r):r.nodeType!==void 0?this.T(r):Ga(r)?this.k(r):this._(r)}O(r){return this._$AA.parentNode.insertBefore(r,this._$AB)}T(r){this._$AH!==r&&(this._$AR(),this._$AH=this.O(r))}_(r){this._$AH!==O&&Or(this._$AH)?this._$AA.nextSibling.data=r:this.T(mr.createTextNode(r)),this._$AH=r}$(r){const{values:e,_$litType$:o}=r,n=typeof o=="number"?this._$AC(r):(o.el===void 0&&(o.el=Br.createElement(te(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===n)this._$AH.p(e);else{const c=new ie(n,this),s=c.u(this.options);c.p(e),this.T(s),this._$AH=c}}_$AC(r){let e=ee.get(r.strings);return e===void 0&&ee.set(r.strings,e=new Br(r)),e}k(r){ya(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let o,n=0;for(const c of r)n===e.length?e.push(o=new zr(this.O(Lr()),this.O(Lr()),this,this.options)):o=e[n],o._$AI(c),n++;n<e.length&&(this._$AR(o&&o._$AB.nextSibling,n),e.length=n)}_$AR(r=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);r&&r!==this._$AB;){const o=r.nextSibling;r.remove(),r=o}}setConnected(r){this._$AM===void 0&&(this._$Cv=r,this._$AP?.(r))}}class Hr{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(r,e,o,n,c){this.type=1,this._$AH=O,this._$AN=void 0,this.element=r,this.name=e,this._$AM=n,this.options=c,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=O}_$AI(r,e=this,o,n){const c=this.strings;let s=!1;if(c===void 0)r=fr(this,r,e,0),s=!Or(r)||r!==this._$AH&&r!==Ar,s&&(this._$AH=r);else{const m=r;let l,p;for(r=c[0],l=0;l<c.length-1;l++)p=fr(this,m[o+l],e,l),p===Ar&&(p=this._$AH[l]),s||=!Or(p)||p!==this._$AH[l],p===O?r=O:r!==O&&(r+=(p??"")+c[l+1]),this._$AH[l]=p}s&&!n&&this.j(r)}j(r){r===O?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,r??"")}}class ne extends Hr{constructor(){super(...arguments),this.type=3}j(r){this.element[this.name]=r===O?void 0:r}}class ce extends Hr{constructor(){super(...arguments),this.type=4}j(r){this.element.toggleAttribute(this.name,!!r&&r!==O)}}class se extends Hr{constructor(r,e,o,n,c){super(r,e,o,n,c),this.type=5}_$AI(r,e=this){if((r=fr(this,r,e,0)??O)===Ar)return;const o=this._$AH,n=r===O&&o!==O||r.capture!==o.capture||r.once!==o.once||r.passive!==o.passive,c=r!==O&&(o===O||n);n&&this.element.removeEventListener(this.name,this,o),c&&this.element.addEventListener(this.name,this,r),this._$AH=r}handleEvent(r){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,r):this._$AH.handleEvent(r)}}class le{constructor(r,e,o){this.element=r,this.type=6,this._$AN=void 0,this._$AM=e,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(r){fr(this,r)}}const pn={M:xa,P:ir,A:$a,C:1,L:oe,R:ie,D:Ga,V:fr,I:zr,H:Hr,N:ce,U:se,B:ne,F:le},dt=fa.litHtmlPolyfillSupport;dt?.(Br,zr),(fa.litHtmlVersions??=[]).push("3.3.0");const pt=(a,r,e)=>{const o=e?.renderBefore??r;let n=o._$litPart$;if(n===void 0){const c=e?.renderBefore??null;o._$litPart$=n=new zr(r.insertBefore(Lr(),c),c,void 0,e??{})}return n._$AI(a),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const za=globalThis;class aa extends wr{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const r=super.createRenderRoot();return this.renderOptions.renderBefore??=r.firstChild,r}update(r){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(r),this._$Do=pt(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Ar}}aa._$litElement$=!0,aa.finalized=!0,za.litElementHydrateSupport?.({LitElement:aa});const ht=za.litElementPolyfillSupport;ht?.({LitElement:aa});const hn={_$AK:(a,r,e)=>{a._$AK(r,e)},_$AL:a=>a._$AL};(za.litElementVersions??=[]).push("4.2.0");const de={};function _(a,r){if(typeof document<"u"&&r?.styleSheet){const e=de[a];de[a]=r.styleSheet,document.adoptedStyleSheets=[...document.adoptedStyleSheets.filter(o=>o!==e),r.styleSheet]}}const b=h`arc•avatar`,P=h`arc•modifier`,V=h`${b}•computed`,ar=h`${b}•mask`,ut=a=>a?.trim().charAt(0)??void 0,vt=(a,r)=>{let e=0;const o=Math.min(a.length,50);for(let n=0;n<o;n+=1)e=(e+a.charCodeAt(n))%(r??33);return e},mt=(a,r,e)=>r?.length?a?.trim()===""?e||r[0]:r[vt(a,r.length)]||e||r[0]:e,pe=y(ua,["blue","orange","mint","red","yellow","green","maroon","purple"]),gt=y(ua,["neutral","white","black"]),ea=y(G,["lg","md","sm","xs"]),bt=[...ea,"profile-sm","profile-md","profile-lg"],ft=Ha,xt=Va,$t=ea,yt=ea,wt=ea,ka=h`

  &[data-size=xs] {
    --${P}: 10; /* unitless, desired size at 100% */
    --${b}-num-size-1: 10;
    --${b}-num-size-2: 8;
    --${b}-num-size-3: 6;
    --${b}-size: 20;
  }

  &[data-size=sm] {
    --${P}: 12; /* unitless, desired size at 100% */
    --${b}-num-size-1: 12;
    --${b}-num-size-2: 10;
    --${b}-num-size-3: 8;
    --${b}-size: 24;
  }

  &:is([data-size=md], [data-size=inherit], :not([data-size])) { /* @default size */
    --${P}: 14; /* unitless, desired size at 100% */
    --${b}-num-size-1: 14;
    --${b}-num-size-2: 12;
    --${b}-num-size-3: 10;
    --${b}-size: 32;
  }

  &[data-size=lg] {
    --${P}: 16; /* unitless, desired size at 100% */
    --${b}-num-size-1: 16;
    --${b}-num-size-2: 14;
    --${b}-num-size-3: 12;
    --${b}-size: 40;
  }

`,he=h`
  [arc-avatar] {
    --${P}: inherit;
    --${b}-num-size-1: inherit;
    --${b}-num-size-2: inherit;
    --${b}-num-size-3: inherit;
    --${b}-size: inherit;
  }
`,At=h`
@layer arc-components {

[arc-avatar] {

  /* Colors --------------------------------------------------------• */

  --${b}-color: var(--arc-avatar-color, var(--arc-color-text-inverse));

  &:has([data-color=blue]) { /* @default color */
    --${b}-background: var(--arc-color-blue-400);
  }
  &:has([data-color=purple]) {
    --${b}-background: var(--arc-color-purple-400);
  }
  &:has([data-color=red]) {
    --${b}-background: var(--arc-color-red-400);
  }
  &:has([data-color=yellow]) {
    --${b}-background: var(--arc-color-yellow-400);
  }
  &:has([data-color=green]) {
    --${b}-background: var(--arc-color-green-400);
  }
  &:has([data-color=maroon]) {
    --${b}-background: var(--arc-color-maroon-400);
  }
  &:has([data-color=orange]) {
    --${b}-background: var(--arc-color-orange-400);
  }
  &:has([data-color=mint]) {
    --${b}-background: var(--arc-color-mint-400);
  }


  /* RESERVED COLORS -----------------------------------------------• */

  &:has([data-color=black]) {
    --${b}-background: var(--arc-color-mono-black);
  }

  &:has([data-color=neutral]) { /* @default anonymous */
    --${b}-color: var(--${b}-neutral-color, var(--arc-color-icon-secondary));
    --${b}-background: var(--${b}-neutral-background, var(--arc-color-alpha-black-10));
  }

  &:has([data-color=white]) {
    --${b}-color: var(--arc-color-text-primary);
    --${b}-background: var(--arc-color-mono-white);
  }


  /* SIZES ---------------------------------------------------------• */

  ${ka}


  /* PROFILE SIZES -------------------------------------------------• */

  &[data-size=profile-sm] {
    --${P}: 28; /* unitless, desired size at 100% */
    --${b}-size: 64;
  }

  &[data-size=profile-md] {
    --${P}: 32; /* unitless, desired size at 100% */
    --${b}-size: 96;
  }

  &[data-size=profile-lg] {
    --${P}: 40; /* unitless, desired size at 100% */
    --${b}-size: 160;
  }


  /* COMPUTED -------------------------------------------------------• */

  --${P}-px: var(--${P}) * 1px;
  --${P}-em: var(--${P}) * 1em;

  --${V}-font-size: calc(var(--${P}-px));
  --${V}-size: calc(var(--${b}-size) / var(--${P}-em));
  --${V}-num-size-1: calc(var(--${b}-num-size-1) / var(--${P}-em));
  --${V}-num-size-2: calc(var(--${b}-num-size-2) / var(--${P}-em));
  --${V}-num-size-3: calc(var(--${b}-num-size-3) / var(--${P}-em));
}

/* CORE AVATAR STYLES ----------------------------------------------• */

[arc-avatar] {
  font-size: var(--arc-avatar-font-size, var(--${V}-font-size));

  flex: none;
  align-self: center;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--${V}-size);
  aspect-ratio: 1 / 1;
  line-height: normal;

  text-align: center;
  position: relative;
  overflow: hidden;
  border-radius: var(--arc-border-radius-circle);

  &[data-is-inactive] {
    opacity: var(--arc-alpha-50);
  }

  [data-num-length] {
    --arc-button-font-size: var(--${V}-num-size-1);
  }

  [data-num-length='2'] {
    --arc-button-font-size: var(--${V}-num-size-2);
  }

  [data-num-length='3'] {
    --arc-button-font-size: var(--${V}-num-size-3);
  }


  /* INNER ELEMENTS ------------------------------------------------• */

  [data-element=counter] {
    --${b}-pointer-events: all;

    /* Inter-Component Communication • ArcButton --------------------• */
    --arc-button-width: 100%;
    --arc-button-height: auto;
    --arc-button-aspect-ratio: 1 /1;
    --arc-button-padding: 0;
    --arc-button-background: var(--arc-avatar-background, var(--${b}-background));
    --arc-button-color: var(--arc-avatar-color, var(--${b}-color));
    /* --arc-button-content-pointer-events: all; */

    &:disabled {
      --arc-button-cursor: default;
    }
  }

  [data-element=image] {
    object-fit: cover;

    /* Hides problematic image */
    &:is([data-not-loaded], [data-has-error]) {
      --${b}-visibility: hidden;
    }

    /* Hides subsequent elements with valid image */
    &:not([data-has-error]) ~ [data-element] {
      --${b}-color: transparent;
      --${b}-background: none;
    }
  }

  :is(
    [data-element=counter],
    [data-element=initial],
    [data-element=anonymous]
   ) {
    background: var(--${b}-background);
    color: var(--${b}-color);
  }

  [data-element] {
    flex: none;
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;

    border-radius: inherit;
    font-weight: var(--arc-font-weight-600);
    visibility: var(--${b}-visibility, unset);

    transition-property: visibility, background-color, color;
    transition-behavior: allow-discrete;
    transition-duration: 200ms;
    transition-timing-function: linear;

    pointer-events: var(--${b}-pointer-events, none);
    user-select: none;
    -webkit-user-select: none;
  }
}

}
`,zt=({children:a,initial:r,color:e,...o})=>(0,i.jsx)("span",{...o,"data-element":"initial","data-color":e,children:a||r}),kt=({isLoaded:a,hasError:r,onLoad:e,onError:o,...n})=>{const c=!a&&""||void 0,s=r&&""||void 0,m=!a||r||void 0;return(0,i.jsx)("img",{...n,hidden:m,"data-element":"image","data-not-loaded":c,"data-has-error":s,onLoad:e,onError:o})},ue=a=>(0,i.jsx)("svg",{...a,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.2362 2V4.04215H3.7443V2H16.2362ZM13.8453 11.7538C13.8453 9.47528 12.1743 7.75773 9.96905 7.75773C7.79316 7.75773 6.15147 9.47528 6.15147 11.7538C6.15147 14.0323 7.7899 15.753 9.96905 15.753C12.1775 15.753 13.8453 14.0355 13.8453 11.7569V11.7538ZM9.96905 18C6.29153 18 3.5 15.3213 3.5 11.7538C3.5 8.20209 6.27524 5.50758 9.96905 5.49183C13.6922 5.49183 16.5 8.17057 16.5 11.738V17.6754H13.8485V16.3581C13.8485 16.3581 12.3925 18 9.97231 18H9.96905Z",fill:"var(--arc-color-logo-articulate, #000000)"})}),ve=a=>(0,i.jsxs)("svg",{...a,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:[(0,i.jsx)("defs",{children:(0,i.jsxs)("linearGradient",{id:"ai_gradient",x1:"2",y1:"18",x2:"18",y2:"2",gradientUnits:"userSpaceOnUse",children:[(0,i.jsx)("stop",{stopColor:"var(--arc-color-logo-ai-purple, #9c15ff)"}),(0,i.jsx)("stop",{offset:"1",stopColor:"var(--arc-color-logo-ai-blue, #1eb4fb)"})]})}),(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.25 10C17.25 14.0041 14.0041 17.25 10 17.25C5.99594 17.25 2.75 14.0041 2.75 10C2.75 5.99594 5.99594 2.75 10 2.75C14.0041 2.75 17.25 5.99594 17.25 10ZM18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM11.8524 12.87V8.17199H12.6444V12.87H11.8524ZM11.8524 7.28999V6.29999H12.6444V7.28999H11.8524ZM6.5 11.511C6.5 11.211 6.584 10.953 6.752 10.737C6.926 10.515 7.163 10.344 7.463 10.224C7.763 10.104 8.111 10.044 8.507 10.044C8.717 10.044 8.939 10.062 9.173 10.098C9.407 10.128 9.614 10.176 9.794 10.242V9.89999C9.794 9.53999 9.686 9.25799 9.47 9.05399C9.254 8.84399 8.948 8.73899 8.552 8.73899C8.294 8.73899 8.045 8.78699 7.805 8.88299C7.571 8.97299 7.322 9.10499 7.058 9.27899L6.77 8.72099C7.076 8.51099 7.382 8.35499 7.688 8.25299C7.994 8.14499 8.312 8.09099 8.642 8.09099C9.242 8.09099 9.716 8.25899 10.064 8.59499C10.412 8.92499 10.586 9.38699 10.586 9.98099V11.97C10.586 12.066 10.604 12.138 10.64 12.186C10.682 12.228 10.748 12.252 10.838 12.258V12.87C10.76 12.882 10.691 12.891 10.631 12.897C10.577 12.903 10.532 12.906 10.496 12.906C10.31 12.906 10.169 12.855 10.073 12.753C9.983 12.651 9.932 12.543 9.92 12.429L9.902 12.132C9.698 12.396 9.431 12.6 9.101 12.744C8.771 12.888 8.444 12.96 8.12 12.96C7.808 12.96 7.529 12.897 7.283 12.771C7.037 12.639 6.845 12.465 6.707 12.249C6.569 12.027 6.5 11.781 6.5 11.511ZM9.56 11.844C9.632 11.76 9.689 11.676 9.731 11.592C9.773 11.502 9.794 11.427 9.794 11.367V10.782C9.608 10.71 9.413 10.656 9.209 10.62C9.005 10.578 8.804 10.557 8.606 10.557C8.204 10.557 7.877 10.638 7.625 10.8C7.379 10.956 7.256 11.172 7.256 11.448C7.256 11.598 7.295 11.745 7.373 11.889C7.457 12.027 7.577 12.141 7.733 12.231C7.895 12.321 8.093 12.366 8.327 12.366C8.573 12.366 8.807 12.318 9.029 12.222C9.251 12.12 9.428 11.994 9.56 11.844Z",fill:"url(#ai_gradient)"})]}),me=a=>(0,i.jsx)("svg",{...a,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10 18C5.582 18 2 14.418 2 10C2 5.582 5.582 2 10 2C14.418 2 18 5.582 18 10C18 14.418 14.418 18 10 18ZM10 17.272C14.016 17.272 17.272 14.016 17.272 10C17.272 5.984 14.016 2.728 10 2.728C5.984 2.728 2.728 5.984 2.728 10C2.728 14.016 5.984 17.272 10 17.272ZM11.3493 8.65067L13.3747 7.51C13.4276 7.48023 13.4874 7.46481 13.5481 7.46529C13.6088 7.46576 13.6683 7.48211 13.7207 7.51271C13.7732 7.54331 13.8167 7.58709 13.847 7.63971C13.8772 7.69233 13.8932 7.75196 13.8933 7.81267V12.14C13.8934 12.2014 13.8772 12.2616 13.8464 12.3147C13.8156 12.3678 13.7713 12.4118 13.7181 12.4423C13.6648 12.4727 13.6044 12.4886 13.5431 12.4882C13.4817 12.4878 13.4215 12.4712 13.3687 12.44L11.3433 11.2453C11.2911 11.2146 11.2479 11.1707 11.2178 11.1181C11.1878 11.0655 11.172 11.0059 11.172 10.9453V8.95333C11.172 8.828 11.24 8.712 11.3493 8.65067ZM7.20267 7.46333H9.93867C10.3227 7.46333 10.634 7.77467 10.634 8.15867V11.592C10.634 11.9767 10.3227 12.288 9.93867 12.288H7.202C7.0177 12.288 6.84094 12.2148 6.71056 12.0846C6.58018 11.9543 6.50684 11.7776 6.50667 11.5933V8.16C6.50667 7.77533 6.818 7.464 7.202 7.464L7.20267 7.46333Z",fill:"var(--arc-color-logo-peek, #497add)"})}),ge=a=>(0,i.jsx)("svg",{...a,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.25 10C17.25 14.0041 14.0041 17.25 10 17.25C5.99594 17.25 2.75 14.0041 2.75 10C2.75 5.99594 5.99594 2.75 10 2.75C14.0041 2.75 17.25 5.99594 17.25 10ZM18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM11.7343 12.569C11.3803 12.569 11.0563 12.506 10.7623 12.38C10.4743 12.248 10.2223 12.071 10.0063 11.849C9.79627 11.621 9.63127 11.36 9.51127 11.066C9.39727 10.772 9.34027 10.46 9.34027 10.13C9.34027 9.68601 9.44227 9.28101 9.64627 8.91501C9.85027 8.54901 10.1323 8.25501 10.4923 8.03301C10.8583 7.81101 11.2753 7.70001 11.7433 7.70001C12.2173 7.70001 12.6283 7.81401 12.9763 8.04201C13.3303 8.26401 13.6033 8.55801 13.7953 8.92401C13.9933 9.28401 14.0923 9.67401 14.0923 10.094C14.0923 10.154 14.0893 10.214 14.0833 10.274C14.0833 10.328 14.0803 10.37 14.0743 10.4H10.1773C10.2013 10.706 10.2853 10.979 10.4293 11.219C10.5793 11.453 10.7713 11.639 11.0053 11.777C11.2393 11.909 11.4913 11.975 11.7613 11.975C12.0493 11.975 12.3193 11.903 12.5713 11.759C12.8293 11.615 13.0063 11.426 13.1023 11.192L13.7863 11.381C13.6843 11.609 13.5313 11.813 13.3273 11.993C13.1293 12.173 12.8923 12.314 12.6163 12.416C12.3463 12.518 12.0523 12.569 11.7343 12.569ZM10.1503 9.85101H13.3543C13.3303 9.54501 13.2433 9.27501 13.0933 9.04101C12.9433 8.80701 12.7513 8.62401 12.5173 8.49201C12.2833 8.36001 12.0253 8.29401 11.7433 8.29401C11.4673 8.29401 11.2123 8.36001 10.9783 8.49201C10.7443 8.62401 10.5523 8.80701 10.4023 9.04101C10.2583 9.27501 10.1743 9.54501 10.1503 9.85101ZM8.984 8.47401C8.588 8.48001 8.237 8.58201 7.931 8.78001C7.631 8.97201 7.418 9.23901 7.292 9.58101V12.479H6.5V7.78101H7.238V8.87001C7.4 8.54601 7.613 8.28501 7.877 8.08701C8.147 7.88301 8.429 7.76901 8.723 7.74501H8.876C8.918 7.74501 8.954 7.74801 8.984 7.75401V8.47401Z",fill:"var(--arc-color-logo-reach, #0081de)"})}),be=a=>(0,i.jsx)("svg",{...a,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.25 10C17.25 14.0041 14.0041 17.25 10 17.25C5.99594 17.25 2.75 14.0041 2.75 10C2.75 5.99594 5.99594 2.75 10 2.75C14.0041 2.75 17.25 5.99594 17.25 10ZM18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM9.38402 8.46899C8.98802 8.47499 8.63702 8.57699 8.33102 8.77499C8.03102 8.96699 7.81802 9.23399 7.69202 9.57599V12.474H6.90002V7.77599H7.63802V8.86499C7.80002 8.54099 8.01302 8.27999 8.27702 8.08199C8.54702 7.87799 8.82902 7.76399 9.12302 7.73999H9.27602C9.31802 7.73999 9.35402 7.74299 9.38402 7.74899V8.46899ZM11.5195 12.474L9.67455 7.77599H10.5025L11.9785 11.718L13.4545 7.77599H14.2285L12.3835 12.474H11.5195Z",fill:"var(--arc-color-logo-review, #35b062)"})}),fe=a=>(0,i.jsx)("svg",{...a,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10 18C5.582 18 2 14.418 2 10C2 5.582 5.582 2 10 2C14.418 2 18 5.582 18 10C18 14.418 14.418 18 10 18ZM10 17.272C14.016 17.272 17.272 14.016 17.272 10C17.272 5.984 14.016 2.728 10 2.728C5.984 2.728 2.728 5.984 2.728 10C2.728 14.016 5.984 17.272 10 17.272ZM9.29467 8.48267C8.90667 8.49467 8.564 8.59467 8.268 8.78267C7.97067 8.97067 7.76067 9.232 7.63733 9.56733V12.406H6.86133V7.804H7.584V8.87067C7.74267 8.55333 7.95133 8.296 8.21067 8.09933C8.46867 7.90267 8.74467 7.79267 9.03867 7.76867H9.18867C9.23 7.76867 9.26533 7.772 9.29467 7.77733V8.48267ZM11.6747 12.494C11.3035 12.4941 10.9347 12.4363 10.5813 12.3227C10.2233 12.208 9.91467 12.042 9.656 11.824L9.99067 11.304C10.2613 11.51 10.532 11.664 10.802 11.7667C11.0727 11.87 11.3573 11.9213 11.6573 11.9213C11.992 11.9213 12.258 11.8547 12.4553 11.7227C12.5492 11.6632 12.6258 11.5803 12.6776 11.482C12.7294 11.3838 12.7546 11.2737 12.7507 11.1627C12.7507 11.0513 12.724 10.956 12.6707 10.876C12.6092 10.7892 12.5278 10.7183 12.4333 10.6693C12.3044 10.6014 12.1682 10.5482 12.0273 10.5107C11.8627 10.464 11.672 10.4133 11.454 10.3607C11.2142 10.3005 10.9763 10.2329 10.7407 10.158C10.566 10.1052 10.3997 10.028 10.2467 9.92867C10.1259 9.85011 10.0285 9.7405 9.96467 9.61133C9.90168 9.46686 9.87162 9.31019 9.87667 9.15267C9.87261 8.94053 9.91923 8.73049 10.0127 8.54C10.104 8.36067 10.2287 8.21133 10.388 8.09067C10.5561 7.96556 10.746 7.87287 10.948 7.81733C11.173 7.7542 11.4057 7.72301 11.6393 7.72467C11.986 7.72467 12.3093 7.78067 12.6093 7.892C12.9093 8.004 13.162 8.15067 13.3673 8.33267L13.0147 8.8C12.824 8.63151 12.6026 8.50136 12.3627 8.41667C12.1249 8.33193 11.8744 8.28864 11.622 8.28867C11.34 8.28867 11.1 8.34867 10.9033 8.46933C10.7067 8.59 10.608 8.78267 10.608 9.04733C10.608 9.15267 10.6273 9.24067 10.6653 9.31133C10.7106 9.38903 10.776 9.45306 10.8547 9.49667C10.9433 9.55 11.056 9.59667 11.1947 9.638C11.3327 9.67867 11.4987 9.72333 11.6927 9.77C11.998 9.84067 12.264 9.91267 12.4907 9.986C12.7167 10.0593 12.9047 10.146 13.0547 10.246C13.2047 10.346 13.316 10.4633 13.3893 10.5993C13.4627 10.734 13.5 10.8987 13.5 11.0927C13.5 11.5213 13.3353 11.8627 13.0067 12.1153C12.6767 12.368 12.2333 12.494 11.6747 12.494Z",fill:"var(--arc-color-logo-rise, #ff6600)"})}),xe=a=>(0,i.jsx)("svg",{...a,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.25 10C17.25 14.0041 14.0041 17.25 10 17.25C5.99594 17.25 2.75 14.0041 2.75 10C2.75 5.99594 5.99594 2.75 10 2.75C14.0041 2.75 17.25 5.99594 17.25 10ZM18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM11.2815 6.29999H12.0735V11.655C12.0735 11.913 12.1095 12.072 12.1815 12.132C12.2535 12.192 12.3405 12.222 12.4425 12.222C12.5685 12.222 12.6885 12.21 12.8025 12.186C12.9165 12.156 13.0125 12.126 13.0905 12.096L13.2165 12.744C13.0845 12.798 12.9285 12.843 12.7485 12.879C12.5685 12.915 12.4095 12.933 12.2715 12.933C11.9655 12.933 11.7225 12.846 11.5425 12.672C11.3685 12.498 11.2815 12.255 11.2815 11.943V6.29999ZM8.48 12.96C8.09 12.96 7.724 12.897 7.382 12.771C7.04 12.639 6.746 12.444 6.5 12.186L6.806 11.628C7.076 11.88 7.346 12.06 7.616 12.168C7.886 12.276 8.162 12.33 8.444 12.33C8.768 12.33 9.032 12.27 9.236 12.15C9.44 12.024 9.542 11.841 9.542 11.601C9.542 11.427 9.488 11.298 9.38 11.214C9.278 11.13 9.131 11.061 8.939 11.007C8.747 10.947 8.519 10.881 8.255 10.809C7.931 10.713 7.658 10.611 7.436 10.503C7.214 10.395 7.046 10.26 6.932 10.098C6.818 9.93599 6.761 9.73199 6.761 9.48599C6.761 9.18599 6.839 8.93399 6.995 8.72999C7.151 8.51999 7.364 8.36099 7.634 8.25299C7.91 8.14499 8.222 8.09099 8.57 8.09099C8.918 8.09099 9.233 8.14499 9.515 8.25299C9.797 8.36099 10.04 8.51999 10.244 8.72999L9.884 9.27899C9.698 9.08699 9.494 8.94599 9.272 8.85599C9.05 8.75999 8.801 8.71199 8.525 8.71199C8.363 8.71199 8.204 8.73299 8.048 8.77499C7.892 8.81099 7.763 8.87999 7.661 8.98199C7.559 9.07799 7.508 9.21599 7.508 9.39599C7.508 9.54599 7.547 9.66599 7.625 9.75599C7.709 9.83999 7.829 9.91199 7.985 9.97199C8.147 10.032 8.342 10.098 8.57 10.17C8.924 10.272 9.23 10.374 9.488 10.476C9.752 10.578 9.956 10.71 10.1 10.872C10.244 11.034 10.316 11.259 10.316 11.547C10.316 11.991 10.148 12.339 9.812 12.591C9.476 12.837 9.032 12.96 8.48 12.96Z",fill:"var(--arc-color-logo-storyline, #c560b3)"})}),Ct=h`
@layer arc-components {

[arc-icon] {
  color: var(--arc-icon-color, currentcolor);
  opacity: var(--arc-icon-opacity, 1);

  &:not([hidden]) {
    /* hand-off to actual interior FontAwesome icon node */
    --fa-display: var(--arc-icon-display, inline-flex);
    --fa-line-height: var(--arc-icon-fa-line-height, 1);

    flex: none;
    align-self: var(--arc-icon-align-self, unset);
    display: var(--fa-display);
    align-items: center;
    justify-content: center;
    height: var(--arc-icon-height, 1lh);
    max-height: var(--arc-icon-max-height, 1lh);
  }

  &:has(svg) {
    align-self: var(--arc-icon-svg-align-self, center);

    svg {
      font-size: var(--arc-icon-size, 1em);
      width: 1em;
      height: 1em;
      fill: var(--arc-icon-color, currentcolor);
    }
  }

  [class|=fa] {
    font-size: var(--arc-icon-size, 1em);
    align-items: center;
    justify-content: center;

    /* fix for FontAwesome line-height oddities in certain cases */
    line-height: normal !important;
  }
}

/* Some SVG icons are also already styled as [arc-icon] so we need to ignore the nested [arc-icon] styles */
[arc-icon]:not([hidden]) > [arc-icon] { display: contents; }

}
`,St=a=>typeof a=="number"?`calc(${a/10}rem * var(--arc-internal-font-size))`:a,j=({children:a,icon:r="fa-regular fa-circle-dashed",color:e,size:o,style:n,...c})=>{const s={...n,"--arc-icon-size":St(o),"--arc-icon-color":e},m=!!(c["aria-label"]||c["aria-labelledby"]),l=typeof r=="string"&&r.length>0?(0,i.jsx)("span",{className:r}):r;return(0,i.jsx)("span",{"aria-hidden":!m||void 0,...c,"arc-icon":"",style:s,children:a||l})};j.Articulate=a=>(0,i.jsx)(j,{...a,icon:(0,i.jsx)(ue,{})}),j.AI=a=>(0,i.jsx)(j,{...a,icon:(0,i.jsx)(ve,{})}),j.Peek=a=>(0,i.jsx)(j,{...a,icon:(0,i.jsx)(me,{})}),j.Reach=a=>(0,i.jsx)(j,{...a,icon:(0,i.jsx)(ge,{})}),j.Review=a=>(0,i.jsx)(j,{...a,icon:(0,i.jsx)(be,{})}),j.Rise=a=>(0,i.jsx)(j,{...a,icon:(0,i.jsx)(fe,{})}),j.Storyline=a=>(0,i.jsx)(j,{...a,icon:(0,i.jsx)(xe,{})}),_("ArcIcon",Ct);const _t=({children:a,icon:r,color:e,...o})=>(0,i.jsx)("span",{...o,"data-element":"anonymous","data-color":"neutral",children:a||(0,i.jsx)(j,{icon:r})}),$e="blue",ye="neutral",jt="fa-solid fa-user",Ca=(0,$.forwardRef)(({children:a,size:r,color:e,isActive:o=!0,isAnonymous:n,alt:c,src:s,name:m,email:l,...p},g)=>{const[v,f]=(0,$.useState)(!1),[x,A]=(0,$.useState)(!1),T=W=>{f(!0),A(!1),p.onLoad?.(W)},B=W=>{f(!1),A(!0),p.onError?.(W)},I=ut(m||l),C=!!I,z=n||(!v||x)&&!C,H=!z&&!!s&&!x||void 0,J=(z&&ye||void 0)??(e||void 0)??mt(String(l||m||void 0),pe,$e)??$e,dr={src:s,alt:c,isLoaded:v,hasError:x,onLoad:T,onError:B};return(0,$.useEffect)(()=>{z&&f(!1)},[z]),(0,i.jsx)("span",{...p,ref:g,"arc-avatar":"","data-is-inactive":!o||void 0,"data-size":r,"aria-label":(p.title??m??l)||void 0,children:a||(z?(0,i.jsx)(_t,{icon:jt,color:ye}):(0,i.jsxs)(i.Fragment,{children:[H&&(0,i.jsx)(kt,{...dr}),C&&(0,i.jsx)(zt,{initial:I,color:J})]}))})});_("ArcAvatar",At);const F=h`${b}•text`,pr=h`${b}•subtext`,er=h`${b}•gap`,Et=h`
@layer arc-components {

  [arc-avatar-text] {
    --${F}-font-size: max(var(--arc-font-size-14), 0.875em); /* 14px @ 100% */
    --${pr}-font-size: max(var(--arc-font-size-12), 0.75em); /* 12px @ 100% */
    --${er}: max(var(--arc-space-1), 0.5em); /* 8px @ 100% */

    --${F}-overflow: unset;
    --${F}-text-overflow: unset;
    --${F}-white-space: unset;

    &[data-overflow=truncate] {
      --${F}-overflow: hidden;
      --${F}-text-overflow: ellipsis;
      --${F}-white-space: nowrap;
    }

    /* @default size: md */

    &:has([data-size=inherit]) {
      --${F}-font-size: 1em;
      --${pr}-font-size: 0.875em;
      --${er}: 0.5em;
    }

    &:has([data-size=lg]) {
      --${F}-font-size: var(--arc-font-size-14);
      --${pr}-font-size: var(--arc-font-size-12);
      --${er}: var(--arc-space-1);
    }

    &:has([data-size=md]) {
      --${F}-font-size: var(--arc-font-size-14);
      --${pr}-font-size: var(--arc-font-size-12);
      --${er}: var(--arc-space-1);
    }

    &:has([data-size=sm]) {
      --${F}-font-size: var(--arc-font-size-14);
      --${pr}-font-size: var(--arc-font-size-12);
      --${er}: var(--arc-space-1);
    }

    &:has([data-size=xs]) {
      --${F}-font-size: var(--arc-font-size-12);
      --${pr}-font-size: var(--arc-font-size-12);
      --${er}: var(--arc-space-0-75);
    }

    &[data-gap=lg] { --${er}: var(--arc-space-1-5); }
    &[data-gap=md] { --${er}: var(--arc-space-1); }
    &[data-gap=sm] { --${er}: var(--arc-space-0-5); }
  }

  [arc-avatar-text] {
    font-size: var(--${F}-font-size, inherit);
    display: inline-flex;
    align-items: center;
    gap: var(--${er}, 0.5em);
    line-height: normal;

    min-width: 0%; /* @note: allows truncation/ellipsis for [data-element=text] */

    &[is-strong] [data-element=text] {
      font-weight: var(--arc-avatar-text-font-weight, var(--arc-font-weight-bold));

      [data-element=subtext] {
        font-weight: var(--arc-avatar-text-subtext-font-weight, var(--arc-font-weight-normal));
      }
    }

    [data-element=text] {
      flex: 1;
      text-align: start;
    }

    [data-element=subtext] {
      display: block;
      font-size: var(--arc-avatar-subtext-font-size, var(--${pr}-font-size));
      color: var(--arc-avatar-subtext-color, var(--${pr}-color, color-mix(in srgb, currentcolor 61%, transparent)));
    }

    :where([data-element=text], [data-element=subtext]) {
      overflow: var(--${F}-overflow);
      text-overflow: var(--${F}-text-overflow);
      white-space: var(--${F}-white-space);
    }
  }

}
`,we="Anonymous",Tt=({children:a,avatar:r,subtext:e,size:o,gapSize:n,overflow:c,isStrong:s,...m})=>{const l=r.name||r.email||r.src,p=r.name||r.email||we,g=r.isAnonymous||!l,v=a||g?we:p,f=n!=="inherit"?n:void 0,x=c!=="inherit"?c:void 0;return(0,i.jsxs)("span",{...m,"arc-avatar-text":"","data-gap":f,"data-overflow":x,"is-strong":s?"":void 0,children:[(0,i.jsx)(Ca,{...r,isAnonymous:g,size:o}),(0,i.jsxs)("span",{"data-element":"text",children:[v,e&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("br",{}),(0,i.jsx)("small",{"data-element":"subtext",children:e})]})]})]})};_("ArcAvatarText",Et);const It=h`
@layer arc-components {

  [arc-avatar-pile] {
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: 0;

    ${ka}
    ${he}

    /* OVERLAP MASK --------------------------------------------------•
       --${P} comes from avatarSizesShared
    */

    --${P}-em: var(--${P}) * 1em;
    --${V}-offset: calc(2 / var(--${P}-em));
    --${V}-mask-shift: calc(-2 / var(--${P}-em));

    --${ar}-position: 50% 50% at calc(-50% + var(--${V}-offset)) 50%;
    --${ar}-sharpness: min(var(--${V}-offset), 0.015em);
    --${ar}-hide: transparent calc(100% + var(--${V}-offset));
    --${ar}-show: black calc(100% + var(--${ar}-sharpness) + var(--${V}-offset));

    --${ar}: radial-gradient(
      var(--${ar}-position),
      var(--${ar}-hide),
      var(--${ar}-show)
    ) padding-box;

    /* Cutout (mask) a portion of subsequent avatars -----------------• */

    [arc-avatar]+[arc-avatar] {
      margin-left: var(--${V}-mask-shift);
      mask: var(--${ar}); /* magic! */
    }

  }

}
`,Pt=({size:a="md",...r})=>(0,i.jsx)("div",{...r,"arc-avatar-pile":"","data-size":a});_("ArcAvatarPile",It);const Vr=a=>typeof a=="string"?a:typeof a=="number"?a.toString():Array.isArray(a)?a.map(Vr).join(""):(0,$.isValidElement)(a)?Vr(a.props.children):"",Rt=()=>Math.random().toString(16).slice(-6),nr=a=>`${a||"id"}-${Rt()}`,Ae=[...ha],Sa=y(Z,["common"]),Lt=y(Z,["ai","brand"]),ze=["top-start","top-center","top-end","left-start","right-start","left-center","center","right-center","left-end","right-end","bottom-start","bottom-center","bottom-end"],ke=["ignore","flip"],w={Threshold:0,StartX:{align:"start",y:"y1",oY:"ch",xMod:-1,yMod:1},StartY:{align:"start",x:"x1",oX:"cw",xMod:-1,yMod:1},CenterX:{align:"center",y:"cy",oY:"z",xMod:-1,yMod:1},CenterY:{align:"center",x:"cx",oX:"z",xMod:1,yMod:-1},EndX:{align:"end",y:"y2",oY:"ch",xMod:1,yMod:-1},EndY:{align:"end",x:"x2",oX:"cw",xMod:1,yMod:-1},Top:{edge:"top",y:"top",pX:"z",pY:"ch",oY:"z",pMod:-1},Bottom:{edge:"bottom",y:"bottom",pX:"z",pY:"ch",oY:"z",pMod:1},Right:{edge:"right",x:"right",pX:"cw",pY:"z",oX:"z",pMod:1},Left:{edge:"left",x:"left",pX:"cw",pY:"z",oX:"z",pMod:-1},Center:{edge:"center",pX:"cw",pY:"ch",pMod:0}},K=(a,r,e)=>e==="left"&&a.a.left>=a.v.threshold&&a.a.left-a.p.width+r.x>=a.v.threshold||e==="top"&&a.a.top>=a.v.threshold&&a.a.top-a.p.height+r.y>=a.v.threshold||e==="right"&&a.a.right<=a.v.width-a.v.threshold&&a.a.right+a.p.width+r.x<=a.v.width-a.v.threshold||e==="bottom"&&a.a.bottom<=a.v.height-a.v.threshold&&a.a.bottom+a.p.height+r.y<=a.v.height-a.v.threshold,Ce=(a,r)=>a.a.top+a.p.height+r.y<=a.v.height-a.v.threshold&&a.a.top>=a.v.threshold,Se=(a,r)=>a.a.left+a.p.width+r.x<=a.v.width-a.v.threshold&&a.a.left>=a.v.threshold,_e=(a,r)=>a.a.cy+a.p.ch+r.y<=a.v.height-a.v.threshold&&a.a.cy-a.p.ch+r.y>=a.v.threshold,je=(a,r)=>a.a.cx+a.p.cw+r.x<=a.v.width-a.v.threshold&&a.a.cx-a.p.cw+r.x>=a.v.threshold,Ee=(a,r)=>a.a.bottom<=a.v.height-a.v.threshold&&a.a.bottom-a.p.height+r.y>=a.v.threshold,Te=(a,r)=>a.a.right<=a.v.width-a.v.threshold&&a.a.right-a.p.width+r.x>=a.v.threshold,Nr={"top-start":{...w.Top,...w.StartY,fitCheck:(a,r)=>K(a,r,w.Top.edge)&&Se(a,r),flip:"bottom-start"},"top-center":{...w.Top,...w.CenterY,fitCheck:(a,r)=>K(a,r,w.Top.edge)&&je(a,r),flip:"bottom-center"},"top-end":{...w.Top,...w.EndY,fitCheck:(a,r)=>K(a,r,w.Top.edge)&&Te(a,r),flip:"bottom-end"},"right-start":{...w.Right,...w.StartX,fitCheck:(a,r)=>K(a,r,w.Right.edge)&&Ce(a,r),flip:"left-start"},"right-center":{...w.Right,...w.CenterX,fitCheck:(a,r)=>K(a,r,w.Right.edge)&&_e(a,r),flip:"left-center"},"right-end":{...w.Right,...w.EndX,fitCheck:(a,r)=>K(a,r,w.Right.edge)&&Ee(a,r),flip:"left-end"},center:{...w.Center,...w.CenterX,...w.CenterY,fitCheck:(a,r)=>a.a.cx-a.p.cw+r.x>=a.v.threshold&&a.a.cx+a.p.cw+r.x<=a.v.width-a.v.threshold&&a.a.cy-a.p.ch+r.y>=a.v.threshold&&a.a.cy+a.p.ch+r.y<=a.v.height-a.v.threshold,flip:"center"},"bottom-start":{...w.Bottom,...w.StartY,fitCheck:(a,r)=>K(a,r,w.Bottom.edge)&&Se(a,r),flip:"top-start"},"bottom-center":{...w.Bottom,...w.CenterY,fitCheck:(a,r)=>K(a,r,w.Bottom.edge)&&je(a,r),flip:"top-center"},"bottom-end":{...w.Bottom,...w.EndY,fitCheck:(a,r)=>K(a,r,w.Bottom.edge)&&Te(a,r),flip:"top-end"},"left-start":{...w.Left,...w.StartX,fitCheck:(a,r)=>K(a,r,w.Left.edge)&&Ce(a,r),flip:"right-start"},"left-center":{...w.Left,...w.CenterX,fitCheck:(a,r)=>K(a,r,w.Left.edge)&&_e(a,r),flip:"right-center"},"left-end":{...w.Left,...w.EndX,fitCheck:(a,r)=>K(a,r,w.Left.edge)&&Ee(a,r),flip:"right-end"}},rr={popover:Ae[0],anchorAt:ze[10],boundary:ke[0],variant:Sa[0],isInverse:!1,hasTail:!1,tailSize:10,threshold:0,offset:0},Ie=(a,r="arc-popover")=>a||nr(r),Ot=(a=rr.threshold)=>({threshold:a,width:document.documentElement.clientWidth,height:document.documentElement.clientHeight,scrollX:window.scrollX,scrollY:window.scrollY,left:window.scrollX,top:window.scrollY,right:window.scrollX+document.documentElement.clientWidth,bottom:window.scrollY+document.documentElement.clientHeight}),Pe=a=>({...JSON.parse(JSON.stringify(a)),cw:a.width/2,ch:a.height/2,cx:a.left+a.width/2,cy:a.top+a.height/2,x1:a.left,x2:a.left+a.width,y1:a.top,y2:a.top+a.height,z:0}),Mt=(a,r,e=rr.offset,o=rr.tailSize,n=rr.threshold)=>({a:Pe(a?.getBoundingClientRect()??new DOMRect),p:Pe(r?.getBoundingClientRect()??new DOMRect),o:e,v:Ot(n),t:o}),Re=(a,r,e)=>({x:["left","right"].includes(a)?r*e:0,y:["top","bottom"].includes(a)?r*e:0}),Bt=(a,r)=>[...Object.keys(Nr)].filter(e=>vr(e,a)&&vr(r.align,"center")?!e.includes("center"):e).sort((e,o)=>{const n=Kr(Nr[e].edge,r.edge),c=Kr(Nr[o].edge,r.edge),s=n?-1:1;return Kr(n,c)?0:s}),Le=({anchorAt:a,measurements:r})=>{const e=Nr[a],o=Re(e.edge,r.o,e.pMod);return{cx:r.a.cx,cy:r.a.cy,offsets:o,config:e}},Ht=({anchorAt:a,measurements:r})=>{const{offsets:e,config:o}=Le({anchorAt:a,measurements:r});return o.fitCheck(r,e)?a:[o.flip,...Bt(a,o)].find(n=>{const c=Nr[n],s=Re(c.edge,r.o,c.pMod);return c.fitCheck(r,s)})??a},cr=(a,r="px")=>`${a}${r}`,_a=({anchorElement:a,popoverElement:r,anchorAt:e=rr.anchorAt,boundary:o,offset:n,tailSize:c,threshold:s=w.Threshold})=>{const m=e,l=Mt(a,r,n,c,s),p=o==="flip"?Ht({anchorAt:m,measurements:l}):m,{cx:g,cy:v}=Le({anchorAt:p,measurements:l}),f={cx:g,cy:v},x=a?.dataset?.layout==="icon"||l.t>0||!e?.includes("-center")&&(e?.includes("left-")||e?.includes("right-"));return{anchorAt:p,vars:{"--js-cx":cr((f.cx+window.scrollX).toFixed(2)),"--js-cy":cr((f.cy+window.scrollY).toFixed(2)),"--js-w":cr(l.a.width.toFixed(2)),"--js-h":cr(l.a.height.toFixed(2)),"--js-cw":cr(l.a.cw.toFixed(2)),"--js-ch":cr(l.a.ch.toFixed(2)),"--js-o":cr(l.o.toFixed(2)),"--js-t":cr(l.t,""),"--js-i":x?"1":"0","--js-m":cr(Na(l.t,l.a.height,l.a.cw).toFixed(2))}}},t=h`arc•button`,R=h`arc•modifier`,k=h`${t}•computed`,Vt=h`
  &[data-size=xxl] {
    --${R}: 16; /* unitless, desired font size at 100% */
    --${t}-icon-size: 20;
    --${t}-spinner-size: 32;
    --${t}-height: 56;
    --${t}-gap: 10;
    --${t}-padding-inline: 32;
  }

  &[data-size=xl] {
    --${R}: 14; /* unitless, desired font size at 100% */
    --${t}-icon-size: 16;
    --${t}-spinner-size: 16;
    --${t}-height: 48;
    --${t}-gap: 8;
    --${t}-padding-inline: 32;
  }

  &[data-size=lg] { /** @default */
    --${R}: 14; /* unitless, desired font size at 100% */
    --${t}-icon-size: 16;
    --${t}-spinner-size: 16;
    --${t}-height: 40;
    --${t}-gap: 8;
    --${t}-padding-inline: 20;
  }

  &[data-size=md] {
    --${R}: 14; /* unitless, desired font size at 100% */
    --${t}-icon-size: 14;
    --${t}-spinner-size: 16;
    --${t}-height: 32;
    --${t}-gap: 8;
    --${t}-padding-inline: 16;
  }

  &[data-size=sm] {
    --${R}: 12; /* unitless, desired font size at 100% */
    --${t}-icon-size: 12;
    --${t}-spinner-size: 14;
    --${t}-height: 24;
    --${t}-gap: 4;
    --${t}-padding-inline: 12;
  }

`,Nt=h`
  &[data-layout=hug] {
    --${t}-width: auto;
    --${t}-content-width: fit-content;
  }

  &[data-layout=fill] {
    --${t}-display: flex;
    --${t}-width: 100%;
    --${t}-content-width: 0;
  }

  &[data-layout=icon] {
    --${t}-aspect-ratio: 1 / 1;
    --${t}-flex: none;
    --${t}-min-width: min-content;
    --${t}-max-width: none;
    --${t}-padding-inline: 0;

    &[data-shape=narrow] {
      --${t}-aspect-ratio: auto;
      --${t}-padding-inline: 2;
    }
  }

`,Ut=h`
  &[data-variant=common],&[data-variant=primary] { /** @default */
    --${t}-text: var(--arc-color-mono-white);
    --${t}-fill: var(--arc-color-mono-black);
    --${t}-edge: transparent;

    --${t}-text-active: var(--arc-color-neutral-200);
    --${t}-text-disabled: var(--arc-color-alpha-black-30);

    --${t}-fill-hover: var(--arc-color-neutral-800);
    --${t}-fill-active: var(--arc-color-neutral-600);
    --${t}-fill-processing: var(--arc-color-neutral-800);
    --${t}-fill-disabled: var(--arc-color-alpha-black-05);
  }

  &[data-variant=secondary] { /** @default - when icon-only */
    --${t}-text: var(--arc-color-mono-black);
    --${t}-fill: var(--arc-color-mono-white);
    --${t}-edge: var(--arc-color-border-full);

    --${t}-text-active: var(--arc-color-alpha-black-60);
    --${t}-text-processing: var(--arc-color-neutral-200);
    --${t}-text-disabled: var(--arc-color-alpha-black-30);

    --${t}-fill-hover: var(--arc-color-neutral-100);
    --${t}-fill-active: var(--arc-color-neutral-200);
    --${t}-fill-processing: var(--arc-color-alpha-white-30);
    --${t}-fill-disabled: var(--arc-color-alpha-white-60);

    --${t}-edge-active: var(--arc-color-border-stark);
    --${t}-edge-processing: var(--arc-color-border-stark);
    --${t}-edge-disabled: var(--arc-color-border-standard);

    &[data-layout=icon] {
      --${t}-edge: var(--arc-color-border-standard);
      --${t}-edge-hover: var(--arc-color-border-stark);
      --${t}-edge-focus: var(--arc-color-border-standard);
    }
  }

  &[data-variant=tertiary] {
    --${t}-text: var(--arc-color-mono-black);
    --${t}-fill: transparent;
    --${t}-edge: transparent;

    --${t}-text-active: var(--arc-color-alpha-black-60);
    --${t}-text-processing: var(--arc-color-neutral-200);
    --${t}-text-disabled: var(--arc-color-alpha-black-30);

    --${t}-fill-hover: var(--arc-color-alpha-black-05);
    --${t}-fill-focus: var(--arc-color-alpha-white-05);
    --${t}-fill-active: var(--arc-color-alpha-black-10);
    --${t}-fill-processing: var(--arc-color-alpha-black-03);
  }

`,Ft=h`
  &[data-variant=primary-inverse] {
    --${t}-text: var(--arc-color-mono-black);
    --${t}-fill: var(--arc-color-mono-white);
    --${t}-edge: transparent;

    --${t}-text-active: var(--arc-color-alpha-black-80);
    --${t}-text-processing: var(--arc-color-neutral-200);
    --${t}-text-disabled: var(--arc-color-alpha-white-40);

    --${t}-fill-hover: var(--arc-color-alpha-white-80);
    --${t}-fill-active: var(--arc-color-alpha-white-60);
    --${t}-fill-processing: var(--arc-color-alpha-white-30);
    --${t}-fill-disabled: var(--arc-color-alpha-white-20);

    &[data-layout=icon] {
      --${t}-fill-hover: var(--arc-color-alpha-white-70);
    }
  }

  &[data-variant=secondary-inverse] {
    --${t}-text: var(--arc-color-alpha-white-95);
    --${t}-fill: transparent;
    --${t}-edge: var(--arc-color-alpha-white-60);

    --${t}-text-active: var(--arc-color-alpha-white-95);
    --${t}-text-processing: var(--arc-color-neutral-200);
    --${t}-text-disabled: var(--arc-color-alpha-white-40);

    --${t}-fill-hover: var(--arc-color-alpha-white-20);
    --${t}-fill-focus: var(--arc-color-alpha-black-05);
    --${t}-fill-active: var(--arc-color-alpha-white-40);
    --${t}-fill-processing: transparent;

    --${t}-edge-hover: var(--arc-color-alpha-white-80);
    --${t}-edge-focus: var(--arc-color-alpha-white-60);
    --${t}-edge-active: var(--arc-color-alpha-white-50);
    --${t}-edge-processing: var(--arc-color-alpha-white-60);
    --${t}-edge-disabled: var(--arc-color-alpha-white-20);

    &[data-layout=icon] {
      --${t}-text: var(--arc-color-alpha-white-80);

      --${t}-text-hover: var(--arc-color-alpha-white-100);
      --${t}-text-focus: var(--arc-color-alpha-white-100);
      --${t}-text-active: var(--arc-color-alpha-white-80);

      --${t}-fill-hover: var(--arc-color-alpha-white-30);
      --${t}-fill-focus: var(--arc-color-alpha-black-05);
      --${t}-fill-active: var(--arc-color-alpha-white-30);

      --${t}-edge-focus: var(--arc-color-alpha-white-60);
      --${t}-edge-active: var(--arc-color-alpha-white-40);
    }
  }

  &[data-variant=tertiary-inverse] {
    --${t}-text: var(--arc-color-alpha-white-95);
    --${t}-fill: transparent;
    --${t}-edge: transparent;

    --${t}-text-active: var(--arc-color-alpha-white-80);
    --${t}-text-processing: var(--arc-color-neutral-200);
    --${t}-text-disabled: var(--arc-color-alpha-white-40);

    --${t}-fill-hover: var(--arc-color-alpha-white-20);
    --${t}-fill-active: var(--arc-color-alpha-white-40);
    --${t}-fill-processing: var(--arc-color-alpha-white-20);

    &[data-layout=icon] {
      --${t}-text: var(--arc-color-alpha-white-80);

      --${t}-text-hover: var(--arc-color-alpha-white-100);
      --${t}-text-focus: var(--arc-color-alpha-white-100);
      --${t}-text-active: var(--arc-color-alpha-white-80);

      --${t}-fill-hover: var(--arc-color-alpha-white-30);
      --${t}-fill-focus: var(--arc-color-alpha-black-05);
      --${t}-fill-active: var(--arc-color-alpha-white-30);
    }
  }

`,Dt=h`
  &[data-variant=ai-primary] {
    --${t}-text: var(--arc-color-mono-white);
    --${t}-fill: var(--arc-gradient-ai-500) padding-box, var(--arc-gradient-ai-200) border-box;

    --${t}-text-active: var(--arc-color-alpha-white-80);
    --${t}-text-processing: var(--arc-color-alpha-white-70);

    --${t}-fill-hover: var(--arc-gradient-ai-400) padding-box, var(--arc-gradient-ai-200) border-box;
    --${t}-fill-active: var(--arc-gradient-ai-600) padding-box, var(--arc-gradient-ai-200) border-box;
    --${t}-fill-processing: var(--arc-gradient-ai-400) padding-box, var(--arc-gradient-ai-100) border-box;
    --${t}-fill-disabled: var(--arc-color-alpha-black-05);
  }

  &[data-variant=ai-secondary] {
    --${t}-text: var(--arc-color-mono-black);
    --${t}-fill: linear-gradient(var(--arc-color-mono-white) 0 0) padding-box, var(--arc-gradient-ai-200) border-box;

    --${t}-text-active: var(--arc-color-alpha-black-60);
    --${t}-text-processing: var(--arc-color-neutral-200);

    --${t}-fill-hover: var(--arc-gradient-ai-050) padding-box, var(--arc-gradient-ai-300) border-box;
    --${t}-fill-active: var(--arc-gradient-ai-050) padding-box, var(--arc-gradient-ai-100) border-box;
    --${t}-fill-processing: linear-gradient(var(--arc-color-mono-white) 0 0) padding-box, var(--arc-gradient-ai-100) border-box;
    --${t}-fill-disabled: var(--arc-color-alpha-white-30);
  }

  &[data-variant^=ai-] {
    --${t}-edge: transparent;

    --${t}-text-disabled: var(--arc-color-alpha-black-30);
    --${t}-edge-disabled: var(--arc-color-border-standard);
  }

`,Zt=h`
  &[data-variant=critical-primary] {
    --${t}-text: var(--arc-color-mono-white);
    --${t}-fill: var(--arc-color-critical-dark);
    --${t}-edge: transparent;

    --${t}-text-active: var(--arc-color-critical-medium);
    --${t}-text-disabled: var(--arc-color-alpha-black-30);

    --${t}-fill-hover: var(--arc-color-critical-heavy);
    --${t}-fill-active: var(--arc-color-critical-heavy);
    --${t}-fill-processing: var(--arc-color-critical-heavy);
    --${t}-fill-disabled: var(--arc-color-alpha-black-05);
  }

  &[data-variant=critical-secondary] {
    --${t}-text: var(--arc-color-critical-dark);
    --${t}-fill: transparent;
    --${t}-edge: var(--arc-color-critical-dark);

    --${t}-text-active: var(--arc-color-red-300);
    --${t}-text-processing: var(--arc-color-neutral-200);
    --${t}-text-disabled: var(--arc-color-alpha-black-30);

    --${t}-fill-hover: var(--arc-color-critical-light);
    --${t}-fill-focus: var(--arc-color-alpha-white-100);
    --${t}-fill-active: var(--arc-color-red-100);
    --${t}-fill-disabled: var(--arc-color-alpha-white-30);

    --${t}-edge-active: var(--arc-color-critical-medium);
    --${t}-edge-processing: var(--arc-color-critical-medium);
    --${t}-edge-disabled: var(--arc-color-border-standard);
  }

`,Yt=h`
  --${t}-color: var(--${t}-text);
  --${t}-background: var(--${t}-fill);
  --${t}-border-color: var(--${t}-edge);
  --${t}-cursor: var(--arc-button-cursor, pointer);
  --${t}-font-weight: var(--arc-font-weight-600);
  --${t}-transition: 0.2s ease-out;

  /* MODIFIERS */

  --${R}-base: var(--${R}) * var(--${R}-unit, 1px);
  --${R}-em: var(--${R}) * 1em;

  /* COMPUTED */

  --${k}-font-size: calc(var(--${R}-base));
  --${k}-icon-size: calc(var(--${t}-icon-size) / var(--${R}-em));
  --${k}-border-size: max(var(--arc-border-width-sm), calc(1 / var(--${R}-em)));
  --${k}-outline-size: max(var(--arc-border-width-md), calc(2 / var(--${R}-em)));
  --${k}-border-radius-md: max(var(--arc-border-radius-md), calc(4 / var(--${R}-em)));
  --${k}-height: calc(var(--${t}-height) / var(--${R}-em));
  --${k}-padding: 0 calc(var(--${t}-padding-inline) / var(--${R}-em));
  --${k}-spinner-size: calc(var(--${t}-spinner-size) / var(--${R}-em));
  --${k}-gap: max(var(--arc-space-0-5), calc(var(--${t}-gap) / var(--${R}-em)));

  --${k}-border: var(--${k}-border-size) solid var(--${t}-border-color, transparent);
  --${k}-outline: var(--${k}-outline-size) solid var(--arc-button-outline-color, var(--arc-color-border-focus));

  /* CONTEXT OVERRIDES */

  &[data-variant^=ai-] {
    --${k}-border-size: max(var(--arc-border-width-md), calc(2 / var(--${R}-em)));
  }

  &:is(:not([data-shape]), [data-shape=circle]) {
    --${k}-border-radius: var(--arc-border-radius-pill);
  }

  &:is(
    [arc-button=custom],
    [data-layout=icon]:not([data-shape]),
    [data-shape=square],
    [data-shape=narrow]
  ) {
    --${k}-border-radius: var(--${k}-border-radius-md);
  }

  /* Inter-Component Communication */

  --arc-icon-fa-line-height: 1lh;
  --arc-icon-size: var(--${k}-icon-size); /** ArcIcon */

`,Xt=h`
  &:is([is-processing], :has(input)) {
    --${t}-position: relative;
  }

  &:is([is-disabled]) {
    --${t}-color: var(--${t}-text-disabled, var(--${t}-text));
    --${t}-background: var(--${t}-fill-disabled, var(--${t}-fill));
    --${t}-border-color: var(--${t}-edge-disabled, var(--${t}-edge));
    --${t}-opacity: var(--arc-button-disabled-opacity, unset);
    --${t}-cursor: var(--arc-button-disabled-cursor, not-allowed);
  }

  &:not([is-disabled], [is-processing]) {
    &:hover {
      --${t}-color: var(--${t}-text-hover, var(--${t}-text));
      --${t}-background: var(--${t}-fill-hover, var(--${t}-fill));
      --${t}-border-color: var(--${t}-edge-hover, var(--${t}-edge));
    }

    &:is(:active, [is-active]) {
      --${t}-color: var(--${t}-text-active, var(--${t}-text));
      --${t}-background: var(--${t}-fill-active, var(--${t}-fill));
      --${t}-border-color: var(--${t}-edge-active, var(--${t}-edge));
    }
  }

  &[is-processing] {
    --${t}-content-visibility: hidden;
    --${t}-content-opacity: 0;
    --${t}-opacity: var(--arc-button-processing-opacity, unset);
    --${t}-cursor: var(--arc-button-processing-cursor, default);

    --${t}-color: var(--${t}-text-processing, var(--${t}-text));
    --${t}-background: var(--${t}-fill-processing, var(--${t}-fill));
    --${t}-border-color: var(--${t}-edge-processing, var(--${t}-edge));

    /* spinner svg style controls */
    --${t}-spinner-opacity: var(--arc-alpha-30);
    --${t}-spinner-circle-color: var(--arc-button-color, var(--${t}-color, currentcolor));
    --${t}-spinner-progress-color: var(--arc-button-progress-color, var(--${t}-color, currentcolor));

    &:is(
      [data-variant*=secondary],
      [data-variant*=tertiary],
      [data-variant^=ai-],
      [data-variant$=-inverse]
    ) {
      --${t}-spinner-opacity: var(--arc-alpha-100);
      --${t}-spinner-progress-color: var(--arc-color-brand-root);
    }
  }

  &:where(:focus, :focus-within):focus-visible {
    --${t}-color: var(--${t}-text-focus, var(--${t}-text));
    --${t}-background: var(--${t}-fill-focus, var(--${t}-fill));
    --${t}-border-color: var(--${t}-edge-focus, var(--${t}-edge));
    --${t}-outline-color: var(--arc-color-border-focus);


    &[data-variant$=-inverse] {
      --${t}-outline-color: var(--arc-color-border-focus-inverse);
    }

    --${t}-outline: var(--arc-button-outline, var(--${k}-outline));
    --${t}-outline-offset: var(--arc-button-outline-offset, var(--${k}-outline-size));

    * {
      outline: none;
    }
  }

`,qt=h`
  :where([arc-button]) {
    ${Vt}
    ${Nt}

    /* VARIANTS */
    ${Ut}
    ${Ft}
    ${Dt}
    ${Zt}

    /* CORE */
    ${Yt}
    ${Xt}

    appearance: none;
    cursor: var(--arc-button-cursor, var(--${t}-cursor));
    position: var(--arc-button-position, var(--${t}-position, unset));
    transition: var(--arc-button-transition, var(--${t}-transition));

    /* FOOTPRINT */

    font: inherit;
    font-weight: var(--arc-button-font-weight, var(--${t}-font-weight));
    font-size: var(--arc-button-font-size, var(--${k}-font-size, inherit));
    height: var(--arc-button-height, var(--${k}-height, auto));
    width: var(--arc-button-width, var(--${t}-width, auto));
    min-width: var(--arc-button-min-width, var(--${t}-min-width, unset));
    max-width: var(--arc-button-max-width, var(--${t}-max-width, 100%));
    aspect-ratio: var(--arc-button-aspect-ratio, var(--${t}-aspect-ratio, unset));

    padding: var(--arc-button-padding, var(--${k}-padding));

    /* VARIANT THEME APPLIED */

    color: var(--arc-button-color, var(--${t}-color));
    background: var(--arc-button-background, var(--${t}-background));
    border: var(--arc-button-border, var(--${k}-border));
    border-radius: var(--arc-button-border-radius, var(--${k}-border-radius));

    opacity: var(--arc-button-opacity, 1);

    outline: var(--arc-button-outline, var(--${t}-outline));
    outline-offset: var(--arc-button-outline-offset, var(--${t}-outline-offset));

    &[href] {
      text-decoration: var(--arc-button-text-decoration, none);
    }

    /* INNER-ELEMENTS */

    [arc-button-content] {
      flex: 1;
      display: flex;
      align-items: var(--arc-button-align-items, center);
      justify-content: var(--arc-button-justify-content, center);
      gap: var(--arc-button-gap, var(--${k}-gap));

      opacity: var(--arc-button-content-opacity, unset);
      visibility: var(--arc-button-content-visibility, var(--${t}-content-visibility));
      pointer-events: var(--arc-button-content-pointer-events, none);

      width: var(--arc-button-content-width, var(--${t}-content-width, auto));
      max-width: var(--arc-button-content-max-width, 100%);
      overflow: var(--arc-button-content-overflow, hidden);

      line-height: normal;
      user-select: none;
    }

    [arc-button-label] {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      max-width: 100%;
      transition: var(--arc-button-label-transition, var(--${t}-transition));
    }

    [arc-button-icon] {
      transition: var(--arc-button-icon-transition, var(--${t}-transition));
    }

    :is([arc-spinner], input) {
      position: absolute;
      inset: var(--arc-spinner-inset, 50% auto auto 50%);
      translate: var(--arc-spinner-translate, -50% -50%);
    }

    input {
      opacity: 0;
      scale: 0.1;
    }

    /* PROCESSING SPINNER */

    [arc-spinner] {
      display: flex;
      pointer-events: none;
      border-radius: 50%;
      width: var(--arc-spinner-size, var(--${k}-spinner-size));
      aspect-ratio: 1 / 1;

      [arc-spinner-circle] {
        fill: none;
        stroke: var(--arc-button-spinner-circle-color, currentcolor);
        opacity: var(--arc-button-spinner-opacity, var(--${t}-spinner-opacity, var(--arc-alpha-40)));
      }

      [arc-spinner-progress] {
        fill: none;
        stroke: var(--arc-button-spinner-progress-color, var(--${t}-spinner-progress-color));
        stroke-dasharray: 0.3334 1;
        stroke-dashoffset: 0;
        stroke-linecap: round;
        animation: 743ms arc-spinner-rotate linear infinite;
        transform-origin: 50% 50%;
      }
    }
  }

  /* SPECIAL CASES */
  [arc-button=custom] {
    --${t}-font-weight: normal;
    --${t}-disabled-opacity: var(--arc-alpha-30);

    /* Default size matches [data-size=lg] */
    --${R}: 14; /* unitless, desired font size at 100% */
    --${R}-unit: 0.0625em; /* 1/16th of an em for the computed calcs */
    --${t}-icon-size: 16;
    --${t}-gap: 8;
    --${t}-padding-inline: 4; /* results in 24x24 for icon button @ 100% font size */
    --${t}-spinner-size: 16;
  }

  [arc-button]:not([hidden]) {
    flex: var(--arc-button-flex, unset);
    display: var(--arc-button-display, var(--${t}-display, inline-flex));
    align-items: center;
    justify-content: center;
  }

  @keyframes arc-spinner-rotate {
    to {
      transform: rotate3d(0, 0, 1, 360deg);
    }
  }
`,Wt=y(pa,["circle","square","narrow"]),Gt=y(G,["xxl","xl","lg","md","sm"]),Kt=y(or,["hug","fill","icon"]),Jt=y(Z,["common","primary","secondary","tertiary","critical","ai","critical-primary","critical-secondary","ai-primary","ai-secondary","primary-inverse","secondary-inverse","tertiary-inverse"]),Qt=y(Oa,["primary","secondary","tertiary"]),ro=(0,i.jsxs)("svg",{viewBox:"0 0 100 100","arc-spinner":"",children:[(0,i.jsx)("circle",{"arc-spinner-circle":"",cx:"50%",cy:"50%",r:"45%",strokeWidth:"12.5%",pathLength:"1"}),(0,i.jsx)("circle",{"arc-spinner-progress":"",cx:"50%",cy:"50%",r:"45%",strokeWidth:"12.5%",pathLength:"1"})]}),kr=(0,$.forwardRef)(({children:a,...r},e)=>{const{iconEnd:o,iconStart:n,icon:c,text:s,isActive:m,isDisabled:l,isProcessing:p,tag:g,href:v,type:f,title:x,layout:A,shape:T,size:B="lg",variant:I="common",hierarchy:C="primary",isInverse:z=!1,_isCustom:H,...J}=r,dr=I&&["primary","secondary","tertiary","critical-primary","critical-secondary","ai-primary","ai-secondary","primary-inverse","secondary-inverse","tertiary-inverse"].includes(I),W=(()=>{if(dr||!["common","critical","ai"].includes(I))return I;const qr=C||"primary";return I==="common"?z?`${qr}-inverse`:qr:`${I}-${qr}`})(),tr=A==="icon",Er=g??(v?"a":"button"),Ia=Er==="button"?f||"button":void 0,Yr=p||l||r.disabled,ca=n||c,Xr=!tr&&(a||s),Tr=!tr&&o;return(0,i.jsxs)(Er,{...J,ref:e,"arc-button":H?"custom":"",href:v||void 0,title:x||void 0,type:Ia,"data-layout":A,"data-shape":H?void 0:T,"data-size":H?void 0:B,"data-variant":H?void 0:W,"is-active":m?"":void 0,"is-processing":p?"":void 0,"is-disabled":Yr?"":void 0,"aria-disabled":Yr||void 0,children:[(0,i.jsxs)("span",{"arc-button-content":"",children:[!!ca&&(0,i.jsx)(j,{"arc-button-icon":"",icon:ca}),!!Xr&&(0,i.jsx)("span",{"arc-button-label":"",children:Xr}),!!Tr&&(0,i.jsx)(j,{"arc-button-icon":"",icon:o})]}),p&&ro]})});kr.displayName="ArcButton",_("ArcButton",qt);const ta=(0,$.forwardRef)((a,r)=>(0,i.jsx)(kr,{...a,ref:r,"arc-popover-button":""})),Oe=({isInverse:a=!1,isOpen:r,...e})=>(0,i.jsx)(kr,{...e,icon:"fa-regular fa-xmark fa-fw",text:"Dismiss",layout:"icon",shape:"square",size:"sm",variant:"common",hierarchy:"tertiary",isInverse:a,"arc-popover-dismiss":""}),ao=({children:a,showDismiss:r,dismissProps:e,tag:o="header",...n})=>(0,i.jsxs)(o,{...n,"arc-popover-header":"",children:[a,r&&(0,i.jsx)(Oe,{...e})]}),eo=({tag:a="article",...r})=>(0,i.jsx)(a,{...r,"arc-popover-body":""}),to=({showDivider:a,tag:r="footer",...e})=>(0,i.jsx)(r,{...e,"arc-popover-footer":"","has-divider":a?"":void 0}),oo=a=>(0,i.jsx)("span",{...a,"arc-popover-tail":""});ta.displayName="ArcPopoverButton";const xr=h`arc•modifier`,u=h`arc•popover`,hr=h`${u}•computed`,S=h`${u}•space`,Y=h`${u}•shift`,Cr=h`${u}•offset`,D=h`${u}•outline`,Me=h`${u}•header`,oa=h`${u}•body`,Ur=h`${u}•footer`,d=h`${u}•tail`,io=h`
  --${xr}: 16; /* unitless base • user agent font-size: 16px @ 100% */
  --${xr}-px: var(--${xr}) * 1px;
  --${xr}-em: var(--${xr}) * 1em;

  /* mix ratio for tail's outline color gradient along popover's perimeter, e.g.: dropdown[variant=ai-outline] */
  --${u}-trail-mix: 50%;

  /* local spacing 16px base @ 100% */
  --${S}-1: max(1px, 0.0625em);
  --${S}-2: max(2px, 0.125em);
  --${S}-3: max(3px, 0.1875em);
  --${S}-4: max(4px, 0.25em);
  --${S}-6: max(6px, 0.375em);
  --${S}-8: max(8px, 0.5em);
  --${S}-10: max(10px, 0.625em);
  --${S}-12: max(12px, 0.75em);
  --${S}-16: max(16px, 1em);
  --${S}-20: max(20px, 1.25em);
  --${S}-24: max(24px, 1.5em);

  --${D}-size: var(--arc-popover-outline-size, var(--${S}-2));

  --${hr}-font-size: calc(12 / var(--${xr}-em));
  --${hr}-min-width: calc(var(--js-w) + ((var(--${d}-shift) - var(--${D}-size)) * 2));
  --${hr}-min-height: calc(var(--js-h) + ((var(--${d}-shift) - var(--${D}-size)) * 2));

  /* tail metrics */
  --${d}-base: (var(--js-t, 10) / var(--${xr}-em));
  --${d}-size: (var(--${d}-base) + var(--${D}-size));

  /* 0.707 = sqrt(2)/2 = multiplier for half of rotated tail size (used in offset calcs) */
  --${d}-shift: (var(--${d}-base) * 0.707 * var(--js-i));

  /* offset */
  --${Cr}-x: calc(var(--js-cw) + var(--js-o) + var(--arc-popover-nudge, 0em));
  --${Cr}-y: calc(var(--js-ch) + var(--js-o) + var(--arc-popover-nudge, 0em));
  --${Y}-x: calc(var(--js-cw) + var(--${d}-shift));
  --${Y}-y: calc(var(--js-ch) + var(--${d}-shift));

  /* padding */
  --${u}-padding: var(--${S}-12);
  --${Me}-gap: var(--${S}-12);
  --${Ur}-gap: var(--${S}-12);

  &:has([arc-popover-body]) {
    --${u}-padding: 0;
    &:has([arc-popover-header]) { --${oa}-padding-block-start: 0; }
    &:has([arc-popover-footer]:not([has-divider])) { --${oa}-padding-block-end: 0; }
  }

  &:has([arc-popover-tail]) {
    --${d}-nudge: var(--${D}-size);
    --${d}-radius: var(--${D}-size);
    --${d}-clamp: clamp(
      var(--${d}-shift),
      var(--js-h) - (var(--${d}-shift) * 2),
      var(--js-cw) - (var(--${D}-size) * 2)
    );
  }
`,no=h`
  &:where([arc-popover*=top], [arc-popover*=bottom]) {
    --${u}-min-width: var(--${hr}-min-width);
    --${u}-min-height: auto;
  }

  &:where([arc-popover*=right], [arc-popover*=left]) {
    --${u}-min-width: auto;
    --${u}-min-height: var(--${hr}-min-height);
  }

  &:where([arc-popover=center]) {
    --${u}-min-width: auto;
    --${u}-min-height: auto;
  }

  &:where([arc-popover*=top]) {
    --${u}-tr: var(--${d}-radius) 0;
    --${u}-ty: calc(-100% - var(--${Cr}-y));
    --${d}-ty: 50%;

    &:where([arc-popover*=-start]) {
      --${u}-trail-mix: 87.5%;
      --${u}-tx: calc(0% - var(--${Y}-x));
      --${d}-inset: auto auto var(--${d}-nudge) calc(0% + var(--${d}-clamp));
      --${d}-tx: 50%;
    }

    &:where([arc-popover*=-center]) {
      --${u}-trail-mix: 75%;
      --${u}-tx: -50%;
      --${d}-inset: auto auto var(--${d}-nudge) 50%;
      --${d}-tx: -50%;
    }

    &:where([arc-popover*=-end]) {
      --${u}-trail-mix: 62.5%;
      --${u}-tx: calc(-100% + var(--${Y}-x));
      --${d}-inset: auto auto var(--${d}-nudge) calc(100% - var(--${d}-clamp));
      --${d}-tx: -150%;
    }
  }

  &:where([arc-popover*=right]) {
    --${u}-tr: 0 var(--${d}-radius);
    --${u}-tx: calc(0% + var(--${Cr}-x));
    --${d}-tx: -50%;

    &:where([arc-popover*=-start]) {
      --${u}-trail-mix: 62.5%;
      --${u}-ty: calc(0% - var(--${Y}-y));
      --${d}-ty: calc(50% + var(--${Y}-y));
      --${d}-inset: auto auto 100% var(--${d}-nudge);
    }

    &:where([arc-popover*=-center]) {
      --${u}-trail-mix: 75%;
      --${u}-ty: -50%;
      --${d}-ty: 50%;
      --${d}-inset: auto auto 50% var(--${d}-nudge);
    }

    &:where([arc-popover*=-end]) {
      --${u}-trail-mix: 87.5%;
      --${u}-ty: calc(-100% + var(--${Y}-y));
      --${d}-ty: calc(50% - var(--${Y}-y));
      --${d}-inset: auto auto 0% var(--${d}-nudge);
    }
  }

  &:where([arc-popover=center]) {
    --${u}-trail-mix: 50%;
    --${u}-tx: -50%;
    --${u}-ty: -50%;
    --${d}-size: 0em;
    --${d}-display: none;
    --${d}-display-duration: 0ms;
  }

  &:where([arc-popover*=bottom]) {
    --${u}-tr: var(--${d}-radius) 0;
    --${u}-ty: calc(0% + var(--${Cr}-y));
    --${d}-ty: -50%;

    &:where([arc-popover*=-start]) {
      --${u}-trail-mix: 37.5%;
      --${u}-tx: calc(0% - var(--${Y}-x));
      --${d}-tx: 50%;
      --${d}-inset: var(--${d}-nudge) auto auto calc(0% + var(--${d}-clamp));
    }

    &:where([arc-popover*=-center]) {
      --${u}-trail-mix: 25%;
      --${u}-tx: -50%;
      --${d}-tx: -50%;
      --${d}-inset: var(--${d}-nudge) auto auto 50%;
    }

    &:where([arc-popover*=-end]) {
      --${u}-trail-mix: 12.5%;
      --${u}-tx: calc(-100% + var(--${Y}-x));
      --${d}-tx: -150%;
      --${d}-inset: var(--${d}-nudge) auto auto calc(100% - var(--${d}-clamp));
    }
  }

  &:where([arc-popover*=left]) {
    --${u}-tr: 0 var(--${d}-radius);
    --${u}-tx: calc(-100% - var(--${Cr}-x));
    --${d}-tx: 50%;

    &:where([arc-popover*=-start]) {
      --${u}-trail-mix: 12.5%;
      --${u}-ty: calc(0% - var(--${Y}-y));
      --${d}-ty: calc(50% + var(--${Y}-y));
      --${d}-inset: auto var(--${d}-nudge) 100% auto;
    }

    &:where([arc-popover*=-center]) {
      --${u}-trail-mix: 25%;
      --${u}-ty: -50%;
      --${d}-ty: 50%;
      --${d}-inset: auto var(--${d}-nudge) 50% auto;
    }

    &:where([arc-popover*=-end]) {
      --${u}-trail-mix: 37.5%;
      --${u}-ty: calc(-100% + var(--${Y}-y));
      --${d}-ty: calc(50% - var(--${Y}-y));
      --${d}-inset: auto var(--${d}-nudge) 0% auto;
    }
  }

`,co=h`
  /* default variant: common */
  &[variant] {
    --${u}-color: var(--arc-color-text-primary);
    --${u}-background: var(--arc-color-background-primary);
    --${Ur}-divider-color: var(--arc-color-border-standard);
    --${D}-color: var(--${u}-background);
    --${d}-background: var(--${D}-color);
    --${d}-outline-color: var(--${D}-color);
    --${d}-border: solid var(--${D}-size) var(--${d}-outline-color);
    --${u}-shadow: var(--arc-shadow-light-lg);
  }

  &[variant=common][is-inverse] {
    --${u}-color: var(--arc-color-text-inverse);
    --${u}-background: var(--arc-color-background-inverse);
    --${u}-shadow: var(--arc-shadow-dark-lg);
    --${Ur}-divider-color: var(--arc-color-alpha-white-20);
  }

  &[variant=brand] {
    --${u}-background: var(--arc-color-brand-light);
    --${d}-background: var(--arc-color-brand-light);
    --${D}-color: var(--arc-color-border-brand);
  }

  &[variant=ai] {
    --${u}-background: var(--arc-color-ai-blue-050) var(--arc-gradient-ai-050);
    --${D}-color: var(--arc-gradient-ai-200);
    --${d}-background: color-mix(in srgb,
      var(--arc-color-ai-purple-050) var(--${u}-trail-mix, 37.5%),
      var(--arc-color-ai-blue-050) clamp(0%, 100% - var(--${u}-trail-mix, 37.5%), 100%)
    );
    --${d}-outline-color: color-mix(in srgb,
      var(--arc-color-ai-purple-200) var(--${u}-trail-mix, 37.5%),
      var(--arc-color-ai-blue-200) clamp(0%, 100% - var(--${u}-trail-mix, 37.5%), 100%)
    );
  }
`,so=h`
  [arc-popover] {
    position: absolute;
    inset: var(--js-cy, 50%) auto auto var(--js-cx, 50%);
    translate: var(--${u}-tx) var(--${u}-ty) 0;
    will-change: translate, opacity;
    overflow: visible; /* For the tail – content overflow is set on '[arc-popover-content]' */

    font-size: max(var(--arc-font-size-16), 1em);

    padding: var(--${D}-size);
    background: var(--arc-popover-outline-color, var(--${D}-color));
    border-radius: calc(var(--arc-popover-border-radius, var(--arc-border-radius-lg)) + var(--${D}-size));
    border: none;
    box-shadow: var(--arc-popover-shadow, var(--${u}-shadow));
    margin: 0;

    &::backdrop {
      background: var(--arc-popover-backdrop, transparent);
    }

    /* Header-less Popover: DismissButton typical starting spot */
    &:where(:not([arc-popover-header])) > [arc-popover-dismiss] {
      --arc-button-position: absolute;
      --arc-popover-dismiss-margin: 0;
      inset: var(--arc-popover-dismiss-inset, 0.5em 0.5em auto auto);
    }

    [arc-popover-content] {
      flex: var(--arc-popover-flex, 1);
      position: relative;
      display: var(--arc-popover-content-display, flex);
      flex-direction: var(--arc-popover-content-flex-direction, column);
      gap: var(--arc-popover-content-gap, 0);

      overflow: var(--arc-popover-overflow, auto);
      overscroll-behavior: var(--arc-popover-overscroll-behavior, contain);

      color: var(--arc-popover-color, var(--${u}-color));
      padding: var(--arc-popover-padding, var(--${u}-padding));
      background: var(--arc-popover-background, var(--${u}-background));
      border-radius: var(--arc-popover-border-radius, var(--arc-border-radius-lg));
      border: var(--arc-popover-border, var(--${S}-2) solid transparent);

      width: var(--arc-popover-width, fit-content);
      height: var(--arc-popover-height, fit-content);
      min-width: var(--arc-popover-min-width, var(--${hr}-min-width));
      min-height: var(--arc-popover-min-height, var(--${hr}-min-height));
      max-width: var(--arc-popover-max-width, 100vw);
      max-height: var(--arc-popover-max-height, 65vh);
      resize: var(--arc-popover-resize, none);
      font-size: var(--arc-popover-font-size, var(--${hr}-font-size));
    }

    [arc-popover-dismiss] {
      align-self: var(--arc-popover-dismiss-align-self, auto);
      display: var(--arc-popover-dismiss-display, inline-flex);
      align-items: var(--arc-popover-dismiss-align-items, center);
      justify-content: var(--arc-popover-dismiss-justify-content, center);
      margin:  var(--arc-popover-dismiss-margin, calc(-1 * var(--${S}-6)) 0);
    }

    [arc-popover-header] {
      flex: var(--arc-popover-header-flex, none);
      display: var(--arc-popover-header-display, flex);
      justify-content: var(--arc-popover-header-justify-content, space-between);
      align-items: var(--arc-popover-header-align-items, baseline);
      gap: var(--arc-popover-header-gap, var(--${Me}-gap));

      padding: var(--arc-popover-header-padding, var(--${S}-12));

      color: var(--arc-popover-header-color, inherit);
      background: var(--arc-popover-header-background, none);

      &:has([arc-popover-dismiss]) {
        padding-inline-end: var(--${S}-12);
      }
    }

    [arc-popover-body] {
      flex: var(--arc-popover-body-flex, 1);
      display: var(--arc-popover-body-display, block);
      flex-direction: var(--arc-popover-body-flex-direction, unset);

      padding: var(--arc-popover-body-padding,
        var(--${oa}-padding-block-start, var(--${S}-12))
        var(--${S}-12)
        var(--${oa}-padding-block-end, var(--${S}-12))
        var(--${S}-12)
      );
    }

    [arc-popover-footer] {
      flex: var(--arc-popover-footer-flex, none);
      display: var(--arc-popover-footer-display, flex);
      flex-direction: var(--arc-popover-footer-flex-direction, row-reverse);
      justify-content: var(--arc-popover-footer-justify-content, space-between);
      align-items: var(--arc-popover-footer-align-items, center);
      gap: var(--arc-popover-footer-gap, var(--${Ur}-gap));

      padding: var(--arc-popover-footer-padding, var(--${S}-12));

      background: var(--arc-popover-footer-background, none);
      color: var(--arc-popover-footer-color, inherit);

      &:where([has-divider]) {
        border-top: var(--arc-popover-footer-border-top, var(--${S}-1) solid var(--${Ur}-divider-color));
      }
    }

    [arc-popover-tail] {
      position: absolute;
      display: var(--${d}-display, block);
      width: calc(var(--${d}-size));
      height: calc(var(--${d}-size));
      inset: var(--${d}-inset);
      translate: var(--${d}-tx) var(--${d}-ty);
      rotate: 45deg;

      background: var(--${d}-background);
      border: var(--${d}-border, none);
      border-radius: var(--${u}-tr);
    }
  }

`,ia={SETUP:io,POSITION:no,VARIANTS:co,ELEMENTS:so},lo=h`
@layer arc-components {
  [arc-popover] {
    ${ia.SETUP}
    ${ia.POSITION}
    ${ia.VARIANTS}
  }

  ${ia.ELEMENTS}

  /* POPOVER transition --------------------------------------------• */

  [arc-popover] {
    transition-behavior: allow-discrete, smooth;
    transition-duration: var(--arc-popover-transition-duration, 240ms);
    transition-property: display, opacity;
    transition-timing-function: ease-out;

    &::backdrop {
      transition: inherit;
    }
  }

  @supports (overlay: auto) {
    [arc-popover] {
      transition-behavior: allow-discrete;
      transition-property: display, overlay, opacity;
    }
  }

  /* POPOVER State -------------------------------------------------• */

  [arc-popover] {
    opacity: 0;

    &::backdrop {
      opacity: 0;
    }

    &:popover-open {
      opacity: 1;
    }

    &:popover-open::backdrop {
      opacity: 1;
    }
  }

  @starting-style {
    [arc-popover]:popover-open {
      opacity: 0;
    }

    [arc-popover]:popover-open::backdrop {
      opacity: 0;
    }
  }
}

`,po=(a,r)=>{const e=document.getElementById(a);({toggle:()=>e?.togglePopover(),show:()=>e?.showPopover(),hide:()=>e?.hidePopover()})[r??"toggle"]()},ja=(0,$.forwardRef)(({children:a,popover:r=rr.popover,alternateAnchor:e,anchorProps:o,anchorAt:n,boundary:c,variant:s=rr.variant,isInverse:m,hasTail:l,tailSize:p=rr.tailSize,offset:g=rr.offset,hidePopoverButton:v,headerSlot:f,showDismiss:x,dismissProps:A,footerSlot:T,showFooterDivider:B,tag:I="div",contentTag:C="div",onToggle:z,...H},J)=>{const dr=(0,$.useRef)(null),W=(0,$.useRef)(null);(0,$.useImperativeHandle)(J,()=>W.current);const[tr,Er]=(0,$.useState)(!1),[Ia,Yr]=(0,$.useState)(n||rr.anchorAt),[ca,Xr]=(0,$.useState)({}),[Tr,qr]=(0,$.useState)(0),[sa,nn]=(0,$.useState)(l?g??0:0),Pa=(0,$.useMemo)(()=>m&&[...Sa].includes(s),[s,m]),la=(0,$.useMemo)(()=>({popovertarget:H.id,"aria-haspopup":!0,"aria-controls":H.id,"aria-expanded":tr}),[H.id,tr]),Ye=(0,$.useMemo)(()=>({isInverse:Pa,isOpen:tr,"aria-label":"Dismiss",...la,...A}),[A,Pa,tr,la]),Ra=(0,$.useMemo)(()=>({ref:dr,...la,...o}),[dr,o,la]),Ir=(0,$.useMemo)(()=>typeof e=="function"?e(Ra):typeof e=="string"?document.getElementById(e):dr.current,[e,Ra]),da=(0,$.useCallback)(({...Q})=>{Yr(Q.anchorAt),Xr(Q.vars)},[Yr,Xr]);return(0,$.useEffect)(()=>{const Q=l?p??0:0,ur=Number(g??0)+Q*(Math.sqrt(2)/2);qr(Q),nn(ur)},[l,p,g]),(0,$.useEffect)(()=>{const Q=W?.current;if(!Ir)return;let ur=null,Wr=null,Pr=null;const Xe=()=>{ur=Ir?.getBoundingClientRect()??{},Pr&&Ua({a:ur,b:Wr})?(Wr=ur,da(_a({anchorElement:Ir,popoverElement:Q,anchorAt:n,boundary:c,offset:sa,tailSize:Tr}))):Pr=null,Pr=requestAnimationFrame(Xe)};Pr=requestAnimationFrame(Xe)},[Ir,tr,n,c,sa,Tr,da]),(0,$.useEffect)(()=>{const Q=W.current;if(!Q)return;const ur=Wr=>{const{newState:Pr}=Wr;Er(Pr==="open"),da(_a({anchorElement:Ir,popoverElement:Q,anchorAt:n,boundary:c,offset:sa,tailSize:Tr})),z?.(Wr)};return Q.addEventListener("toggle",ur),()=>{Q.removeEventListener("toggle",ur)}},[W,z,Ir,n,c,sa,Tr,da]),(0,i.jsxs)(i.Fragment,{children:[!(e&&v)&&(0,i.jsx)(ta,{...Ra}),(0,i.jsxs)(I,{...H,role:H.role??"dialog","arc-popover":Ia,ref:W,popover:r,boundary:c,variant:s,"is-inverse":Pa?"":void 0,"has-tail":l?"":void 0,style:{...H.style,...ca},children:[l&&(0,i.jsx)(oo,{}),(0,i.jsxs)(C,{"arc-popover-content":"",children:[!!f&&(0,i.jsx)(ao,{showDismiss:x,dismissProps:Ye,children:f}),f||T?(0,i.jsx)(eo,{children:a}):a,!!T&&(0,i.jsx)(to,{showDivider:B,children:T})]}),x&&!f&&(0,i.jsx)(Oe,{...Ye})]})]})});ja.handlePopover=po,ja.Button=ta;const Ea=ja;_("ArcPopover",lo);const ho=h`
@layer arc-components {

  [arc-avatar-overflow] {
    /* Inter-Component Communication • ArcPopover ------------------• */
    --arc-popover-font-size: var(--arc-font-size-body-md);
    --arc-popover-translate: -100% 0.5em;
    --arc-popover-width: max-content;
    --arc-popover-max-width: 18em;
    --arc-popover-padding: 0;
    --arc-popover-outline-color: var(--arc-color-alpha-black-80);
    --arc-popover-background: var(--arc-color-alpha-black-10);
    --arc-popover-color: var(--arc-color-text-inverse);

    backdrop-filter: blur(0.375em);

    /* For Neutral/Anonymous avatars -------------------------------• */

    --${b}-neutral-color: var(--arc-color-alpha-white-70);
    --${b}-neutral-background: var(--arc-color-alpha-white-20);

    [data-element=list] {
      margin: 0;
      padding: var(--arc-space-0-5) var(--arc-space-0);
    }

    [data-element=list-item] {
      display: flex;
      align-items: center;
      gap: var(--arc-space-0-75);
      padding: var(--arc-space-0-5) var(--arc-space-1);
    }

    ${ka}
    ${he}

  }

}
`,uo=a=>(0,i.jsx)("ul",{...a,"data-element":"list"}),vo=a=>(0,i.jsx)("li",{...a,"data-element":"list-item"}),mo=({count:a,anchorId:r,overflowId:e,shouldShowOverflow:o,...n})=>(0,i.jsx)(Ca,{title:`+${a}`,children:(0,i.jsx)(Ea.Button,{...n,id:r,popovertarget:e,text:`+${a}`,variant:"common",hierarchy:"primary",disabled:!o,"data-element":"counter","data-color":"black","data-num-length":a?.toString().length})}),go=({children:a,id:r,size:e="sm",overflowCount:o=0,shouldShowOverflow:n=!1,anchorAt:c="bottom-end",boundary:s="flip",...m})=>{const l=Math.min(o,999),p=(0,$.useMemo)(()=>Ie(r,"arc-avatar-overflow"),[r]),g=(0,$.useMemo)(()=>`${p}-anchor`,[p]),v=(0,$.useMemo)(()=>$.Children.toArray(a),[a]);return(0,i.jsxs)(i.Fragment,{children:[l>0&&(0,i.jsx)(mo,{count:l,anchorId:g,overflowId:p,shouldShowOverflow:n}),n&&l>0&&(0,i.jsx)(Ea,{...m,"arc-avatar-overflow":"",id:p,anchorAt:c,boundary:s,alternateAnchor:g,hidePopoverButton:!0,variant:"common",isInverse:!0,"data-size":e,children:(0,i.jsx)(uo,{children:v.map((f,x)=>(0,i.jsx)(vo,{children:f},x))})})]})};_("ArcAvatarOverflow",ho);const sr=h`arc•icon•text`,L=h`${sr}•icon`,E=h`${sr}•text`,Sr=h`${sr}•subtext`,lr=h`${sr}•gap`,bo=h`

  &[data-variant=inherit] { /* @default 'inherit' • uses font/color props from context */
    --${E}-color: currentcolor;
    --${L}-color: currentcolor;
  }

  &[data-variant=primary] {
    --${E}-color: var(--arc-color-text-primary);
    --${L}-color: var(--arc-color-icon-primary);
  }

  &[data-variant=secondary] {
    --${E}-color: var(--arc-color-text-secondary);
    --${L}-color: var(--arc-color-icon-secondary);
  }

  &[data-variant=inverse] {
    --${E}-color: var(--arc-color-text-inverse);
    --${L}-color: var(--arc-color-icon-inverse);
  }

  &[data-variant=brand] {
    --${E}-color: var(--arc-color-text-brand);
    --${L}-color: var(--arc-color-icon-brand);
  }

  &[data-variant=info] {
    --${E}-color: var(--arc-color-text-info);
    --${L}-color: var(--arc-color-icon-info);
  }

  &[data-variant=success] {
    --${E}-color: var(--arc-color-text-success);
    --${L}-color: var(--arc-color-icon-success);
  }

  &[data-variant=warning] {
    --${E}-color: var(--arc-color-text-warning);
    --${L}-color: var(--arc-color-icon-warning);
  }

  &[data-variant=critical] {
    --${E}-color: var(--arc-color-text-critical);
    --${L}-color: var(--arc-color-icon-critical);
  }

`,fo=h`

  /* Overall Text Sizes */

  &[data-size=inherit] { /* @default 'inherit' • uses font/size from context */
    --${sr}-font-size: 1em;
    --${Sr}-font-size: 0.75em;
    --${L}-size: 1em;
    --${lr}: 0.25em; /* 4px @ 100% */
  }

  &[data-size=md] {
    --${sr}-font-size: var(--arc-font-size-14);
    --${Sr}-font-size: var(--arc-font-size-12);
    --${lr}: var(--arc-space-0-5);
  }

  &[data-size=sm] {
    --${sr}-font-size: var(--arc-font-size-12);
    --${Sr}-font-size: var(--arc-font-size-12);
    --${lr}: var(--arc-space-0-5);
  }

  /* Gap Sizes */

  &[data-gap=lg] { --${lr}: max(var(--arc-space-1-5), 0.75em); } /* 12px @ 100% */
  &[data-gap=md] { --${lr}: max(var(--arc-space-1), 0.5em); }    /* 8px @ 100% */
  &[data-gap=sm] { --${lr}: max(var(--arc-space-0-5), 0.25em); } /* 4px @ 100% */

  /* Icon Sizes */

  &[icon-size=xl] { --${L}-size: max(var(--arc-font-size-24), 1.5em); }
  &[icon-size=lg] { --${L}-size: max(var(--arc-font-size-20), 1.25em); }
  &[icon-size=md] { --${L}-size: max(var(--arc-font-size-16), 1em); }
  &[icon-size=sm] { --${L}-size: max(var(--arc-font-size-14), 0.75em); }
  &[icon-size=xs] { --${L}-size: max(var(--arc-font-size-12), 0.625em); }
`,xo=h`

  /* 61.2% is the opacity equivalent of the secondary-text color token's gray value. */
  --${Sr}-color: var(--arc-icon-text-subtext-color, color-mix(in srgb, currentcolor 61.2%, transparent));

  /* ArcIcon */
  --arc-icon-color: var(--arc-icon-text-icon-color, var(--${L}-color));
  --arc-icon-size: var(--arc-icon-text-icon-size, var(--${L}-size));
  --arc-icon-fa-line-height: normal;
  --arc-icon-align-self: normal;

  &[data-layout=inline] {
    --${E}-overflow: unset;
    --${E}-text-overflow: unset;
    --${E}-white-space: unset;

    --${L}-vertical-align: calc((var(--${L}-size) - var(--${sr}-font-size)) / -2);

    &:has(svg) { --${L}-vertical-align: text-bottom; }
  }

  /* Text Overflows */
  &[data-layout=gutter] {
    --${E}-overflow: visible;
    --${E}-text-overflow: unset;
    --${E}-white-space: normal;

    &[data-overflow=truncate] {
      --${E}-overflow: hidden;
      --${E}-text-overflow: ellipsis;
      --${E}-white-space: nowrap;
    }
  }

`,$o=h`
@layer arc-components {

  [arc-icon-text] {
    ${bo}
    ${fo}
    ${xo}
  }

  [arc-icon-text] {
    position: var(--arc-icon-text-position, relative);
    font-size: var(--arc-icon-text-font-size, var(--${sr}-font-size));
    color: var(--arc-icon-text-text-color, var(--${E}-color));

    [data-element=text],
    [data-element=subtext] {
      position: relative;
      hyphens: auto;
    }

    &[is-strong] [data-element=text] {
      font-weight: var(--arc-icon-text-font-weight, var(--arc-font-weight-bold));

      [data-element=subtext] {
        font-weight: var(--arc-icon-text-subtext-font-weight, var(--arc-font-weight-normal));
      }
    }

    /* @default • gutter layout */
    &[data-layout=gutter] {
      display: inline-flex;
      align-items: var(--arc-icon-text-align-items, first baseline);
      gap: var(--arc-icon-text-gap, var(--${lr}));

      /* Truncation Support */
      overflow: var(--arc-icon-text-overflow, var(--${E}-overflow));

      &[is-flipped] { flex-direction: row-reverse; }

      [data-element=icon] { line-height: 1lh; }

      [data-element=text] {
        flex: 1;
        min-width: 0%;
      }

      [data-element=subtext] {
        display: block;
        line-height: normal;
        font-size: var(--arc-icon-text-subtext-font-size, var(--${Sr}-font-size));
        color: var(--arc-icon-text-subtext-color, var(--${Sr}-color));
      }

      :where([data-element=text], [data-element=subtext]) {
        overflow: var(--arc-icon-text-overflow, var(--${E}-overflow));
        text-overflow: var(--arc-icon-text-text-overflow, var(--${E}-text-overflow));
        white-space: var(--arc-icon-text-white-space, var(--${E}-white-space));
      }
    }

    &[data-layout=inline] {
      display: inline;

      [data-element=icon] {
        line-height: normal;
        vertical-align: var(--arc-icon-text-icon-vertical-align, var(--${L}-vertical-align));
      }

      [data-element=icon] + [data-element=text] { margin-inline-start: var(--arc-icon-text-gap, var(--${lr})); }
      [data-element=text]:has(+ [data-element=icon]) { margin-inline-end: var(--arc-icon-text-gap, var(--${lr})); }
      [data-element=subtext] { display: contents; }

      &:has(svg) {
        --${L}-vertical-align: text-bottom;
      }
    }
  }
}

`,yo=y(Z,["inherit","primary","secondary","inverse","brand","info","success","warning","critical"]),Fr=({children:a,layout:r="gutter",size:e="inherit",variant:o="inherit",tag:n="span",icon:c,text:s,subtext:m,overflow:l,iconSize:p,gapSize:g,isFlipped:v=!1,isStrong:f=!1,...x})=>{const A=a||s,T=!!c,B=!!A,I=r==="gutter",C=r==="inline",z=T&&(!v||I),H=T&&B&&v&&C,J=!!p&&p!=="inherit",dr=J&&va.includes(p)?p:void 0,W=J&&!va.includes(p)?p:void 0,tr=g!=="inherit"?g:void 0,Er=l!=="inherit"?l:void 0;return(0,i.jsxs)(n,{...x,"arc-icon-text":"","data-variant":o,"data-layout":r,"data-overflow":Er,"data-size":e,"data-gap":tr,"icon-size":dr,"is-flipped":v?"":void 0,"is-strong":f?"":void 0,children:[z&&(0,i.jsx)(j,{"data-element":"icon",icon:c,size:W}),B&&(0,i.jsxs)("span",{"data-element":"text",children:[A,!!m&&(I?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("br",{}),(0,i.jsx)("small",{"data-element":"subtext",children:m})]}):(0,i.jsxs)(i.Fragment,{children:[" ",(0,i.jsx)("span",{"data-element":"subtext",children:m})]}))]}),H&&(0,i.jsx)(j,{"data-element":"icon",icon:c,size:W})]})};_("ArcIconText",$o);const wo=h`
@layer arc-components {

[arc-badge-wrapper] {

  /* VARIANTS ------------------------------------------------------• */

  &:has(>[data-variant=brand-black]) {
    --arc-internal-badge-background-high: var(--arc-color-mono-black);
    --arc-internal-badge-background-low: var(--arc-color-neutral-100);
    --arc-internal-badge-color-high: var(--arc-color-text-inverse);
    --arc-internal-badge-color-low: var(--arc-color-text-primary);
  }

  /** @default */
  &:has(>[data-variant=brand-blue]) {
    --arc-internal-badge-background-high: var(--arc-color-blue-500);
    --arc-internal-badge-background-low: var(--arc-color-blue-100);
    --arc-internal-badge-color-high: var(--arc-color-text-inverse);
    --arc-internal-badge-color-low: var(--arc-color-blue-700);
  }

  &:has(>[data-variant=neutral]) {
    --arc-internal-badge-background-high: var(--arc-color-neutral-600);
    --arc-internal-badge-background-low: var(--arc-color-neutral-100);
    --arc-internal-badge-color-high: var(--arc-color-text-inverse);
    --arc-internal-badge-color-low: var(--arc-color-neutral-800);
  }

  &:has(>[data-variant=info]) {
    --arc-internal-badge-background-high: var(--arc-color-info-dark);
    --arc-internal-badge-background-low: var(--arc-color-purple-100);
    --arc-internal-badge-color-high: var(--arc-color-text-inverse);
    --arc-internal-badge-color-low: var(--arc-color-info-heavy);
  }

  &:has(>[data-variant=success]) {
    --arc-internal-badge-background-high: var(--arc-color-success-dark);
    --arc-internal-badge-background-low: var(--arc-color-green-100);
    --arc-internal-badge-color-high: var(--arc-color-text-inverse);
    --arc-internal-badge-color-low: var(--arc-color-success-heavy);
  }

  &:has(>[data-variant=warning]) {
    --arc-internal-badge-background-high: var(--arc-color-warning-root);
    --arc-internal-badge-background-low: var(--arc-color-yellow-100);
    --arc-internal-badge-color-high: var(--arc-color-text-primary);
    --arc-internal-badge-color-low: var(--arc-color-warning-heavy);
  }

  &:has(>[data-variant=critical]) {
    --arc-internal-badge-background-high: var(--arc-color-critical-root);
    --arc-internal-badge-background-low: var(--arc-color-red-100);
    --arc-internal-badge-color-high: var(--arc-color-text-inverse);
    --arc-internal-badge-color-low: var(--arc-color-critical-heavy);
  }

  &:has(>[data-variant=ai]) {
    --arc-internal-badge-background-high: var(--arc-gradient-ai-200);
    --arc-internal-badge-background-low: var(--arc-gradient-ai-200);
    --arc-internal-badge-color-high: var(--arc-color-text-inverse);
    --arc-internal-badge-color-low: var(--arc-color-text-inverse);
    --arc-internal-badge-mix-blend-mode-low: normal;
    --arc-internal-badge-mix-blend-mode-high: normal;
  }

  &:has(>[data-variant=overlay-light]) {
    --arc-internal-badge-background-high: var(--arc-color-alpha-white-80);
    --arc-internal-badge-background-low: var(--arc-color-alpha-white-20);
    --arc-internal-badge-color-high: var(--arc-color-text-primary);
    --arc-internal-badge-color-low: var(--arc-color-text-inverse);
    --arc-internal-badge-mix-blend-mode-low: normal;
  }

  &:has(>[data-variant=overlay-dark]) {
    --arc-internal-badge-background-high: var(--arc-color-alpha-black-70);
    --arc-internal-badge-background-low: var(--arc-color-alpha-black-40);
    --arc-internal-badge-color-high: var(--arc-color-text-inverse);
    --arc-internal-badge-color-low: var(--arc-color-text-inverse);
    --arc-internal-badge-mix-blend-mode-low: normal;
  }


  /* CONTRASTS -----------------------------------------------------• */

  &:has(>[data-contrast=high]) {
    --arc-internal-badge-color: var(--arc-internal-badge-color-high);
    --arc-internal-badge-background: var(--arc-internal-badge-background-high);
    --arc-internal-badge-mix-blend-mode: var(--arc-internal-badge-mix-blend-mode-high, normal);
  }

  &:has(>[data-contrast=low]) {
    --arc-internal-badge-color: var(--arc-internal-badge-color-low);
    --arc-internal-badge-background: var(--arc-internal-badge-background-low);
    --arc-internal-badge-mix-blend-mode: var(--arc-internal-badge-mix-blend-mode-low, multiply);
  }


  /* SIZES ---------------------------------------------------------• */

  &:has(>[data-size=lg]) {
    --arc-modifier: 14; /* unitless, desired font size at 100% */
    --arc-internal-badge-font-size-uppercase: 12;
    --arc-internal-badge-size: 24;
    --arc-internal-badge-min-size: 30;
    --arc-internal-badge-padding-inline: 8;
    --arc-internal-badge-border-radius: 4;
  }

  &:has(>[data-size=md], >[data-size=inherit]) {
    --arc-modifier: 12; /* unitless, desired font size at 100% */
    --arc-internal-badge-font-size-uppercase: 10;
    --arc-internal-badge-size: 20;
    --arc-internal-badge-min-size: 24;
    --arc-internal-badge-padding-inline: 6;
    --arc-internal-badge-border-radius: 4;
  }

  /** @default • relative equivalent of 'md' at 100% • (16 x 75% = 12) */
  &:has(>[data-size=inherit]) {
    --arc-inherit-badge-font-size: 0.75em;
    --arc-inherit-badge-min-size: 1.5em;
  }

  &:has(>[data-size=sm]) {
    --arc-modifier: 10; /* unitless, desired font size at 100% */
    --arc-internal-badge-font-size-uppercase: 8;
    --arc-internal-badge-size: 16;
    --arc-internal-badge-min-size: 18;
    --arc-internal-badge-padding-inline: 4;
    --arc-internal-badge-border-radius: 4;
  }


  /* COMPUTED ------------------------------------------------------• */

  & {
    --arc-modifier-px: var(--arc-modifier) * 1px;
    --arc-modifier-em: var(--arc-modifier) * 1em;

    --arc-computed-badge-font-size: var(--arc-inherit-badge-font-size, calc(var(--arc-modifier-px)));
    --arc-computed-badge-font-size-uppercase: calc(var(--arc-internal-badge-font-size-uppercase) / var(--arc-modifier-em));
    --arc-computed-badge-size: calc(var(--arc-internal-badge-size) / var(--arc-modifier-em));
    --arc-computed-badge-padding-inline: calc(var(--arc-internal-badge-padding-inline) / var(--arc-modifier-em));
    --arc-computed-badge-border-radius: calc(var(--arc-internal-badge-border-radius) / var(--arc-modifier-em));
    --arc-computed-badge-min-width: var(--arc-inherit-badge-min-size, calc(var(--arc-internal-badge-min-size) * 1px));

    --arc-internal-badge-min-width: min-content;

    /* Inter-Component Communication • ArcIconText -------------------• */

    --arc-icon-text-modifier: var(--arc-modifier);
    --arc-icon-text-align-items: center;
  }


  /* LAYOUTS -------------------------------------------------------• */

  &:has(>[data-layout=fill]) {
    --arc-internal-badge-flex: 1;
    --arc-internal-badge-display: flex;
    --arc-internal-badge-min-width: var(--arc-computed-badge-min-width);

    /* Inter-Component Communication • ArcIconText -------------------• */
    --arc-icon-text-overflow: hidden;
    --arc-icon-text-white-space: nowrap;
    --arc-icon-text-text-overflow: ellipsis;
  }
}


/* CORE STYLES -----------------------------------------------------• */

[arc-badge-wrapper]:not([hidden]) {
  flex: var(--arc-badge-flex, var(--arc-internal-badge-flex, unset));
  align-self: var(--arc-badge-align-self, flex-start);
  display: var(--arc-internal-badge-display, inline-flex);
  align-items: center;
  justify-content: center;
  height: 1lh;
  max-height: 1lh;
  vertical-align: bottom;

  &:has(>[data-is-flexible]) {
    min-width: var(--arc-badge-min-width, var(--arc-internal-badge-min-width));
  }
}


[arc-badge] {
  font-size: var(--arc-badge-font-size, var(--arc-computed-badge-font-size));
  font-weight: var(--arc-font-weight-600);

  flex: 1;
  display: var(--arc-internal-badge-display, inline-flex);
  align-items: center;
  justify-content: center;
  height: var(--arc-computed-badge-size); /** @computed • height */
  padding-inline: var(--arc-computed-badge-padding-inline); /** @computed • padding-inline */

  overflow: hidden;
  white-space: nowrap;
  line-height: 2;

  color: var(--arc-badge-color, var(--arc-internal-badge-color));
  background: var(--arc-badge-background, var(--arc-internal-badge-background));
  border-radius: var(--arc-computed-badge-border-radius); /** @computed • border-radius */
  mix-blend-mode: var(--arc-badge-mix-blend-mode, var(--arc-internal-badge-mix-blend-mode));

  &[data-is-uppercase] [data-element=text] {
    text-transform: uppercase;
    font-size: var(--arc-computed-badge-font-size-uppercase); /** @computed • font-size */
  }
}

}
`,Ao=y(G,["inherit","lg","md","sm"]),zo=y(or,["hug","fill"]),ko=["high","low"],Co=y(Z,["brand-black","brand-blue","neutral","info","success","warning","critical","ai","overlay-light","overlay-dark"]),So=({children:a,icon:r,text:e,isFlipped:o,isFlexible:n,isUppercase:c,variant:s="brand-blue",size:m="inherit",layout:l="hug",contrast:p="high",...g})=>{const v=a||(0,i.jsx)(Fr,{icon:r,text:e,isFlipped:o,layout:"gutter"}),f=l==="fill"&&n;return(0,i.jsx)("span",{...g,"arc-badge-wrapper":"",children:(0,i.jsx)("span",{"arc-badge":"","data-contrast":p,"data-variant":s,"data-layout":l,"data-size":m,"data-is-flexible":f?"":void 0,"data-is-uppercase":c?"":void 0,children:v})})};_("ArcBadge",wo);const _o=h`
@layer arc-components {

[arc-badge-count] {

  /* VARIANTS ------------------------------------------------------• */

  &[data-variant=neutral] { /** @default */
    --arc-internal-badgecount-color: var(--arc-color-neutral-800);
    --arc-internal-badgecount-background: var(--arc-color-neutral-100);
    --arc-internal-badgecount-mix-blend-mode: multiply;
  }

  &[data-variant=brand] {
    --arc-internal-badgecount-color: var(--arc-color-blue-700);
    --arc-internal-badgecount-background: var(--arc-color-blue-100);
    --arc-internal-badgecount-mix-blend-mode: multiply;
  }

  &[data-variant=success] {
    --arc-internal-badgecount-color: var(--arc-color-success-heavy);
    --arc-internal-badgecount-background: var(--arc-color-green-100);
    --arc-internal-badgecount-mix-blend-mode: multiply;
  }

  &[data-variant=warning] {
    --arc-internal-badgecount-color: var(--arc-color-warning-heavy);
    --arc-internal-badgecount-background: var(--arc-color-yellow-100);
    --arc-internal-badgecount-mix-blend-mode: multiply;
  }

  &[data-variant=critical] {
    --arc-internal-badgecount-color: var(--arc-color-text-inverse);
    --arc-internal-badgecount-background: var(--arc-color-critical-root);
    --arc-internal-badgecount-mix-blend-mode: normal;
  }

  &[data-variant=inverse] {
    --arc-internal-badgecount-color: var(--arc-color-text-primary);
    --arc-internal-badgecount-background: var(--arc-color-mono-white);
    --arc-internal-badgecount-mix-blend-mode: normal;
  }


  /* SIZES ---------------------------------------------------------• */

  &[data-size=lg] {
    --arc-modifier: 14; /* unitless, desired font size at 100% */
    --arc-internal-badgecount-size: 24;
    --arc-internal-badgecount-padding-inline: 4;
  }

  &:is([data-size=md], [data-size=inherit]) {
    --arc-modifier: 12; /* unitless, desired font size at 100% */
    --arc-internal-badgecount-size: 20;
    --arc-internal-badgecount-padding-inline: 4;
  }

  &[data-size=sm] {
    --arc-modifier: 10; /* unitless, desired font size at 100% */
    --arc-internal-badgecount-size: 16;
    --arc-internal-badgecount-padding-inline: 4;
  }

  &[data-size=inherit] { /** @default • scalable based on 'md' size */
    --arc-inherit-badgecount-font-size: 0.75em;
  }


  /* SHAPES ------------------------------------------------------• */

  &[data-shape=square] {
    --arc-internal-badgecount-border-radius: 4;
  }


  /* COMPUTED ------------------------------------------------------• */

  & {
    --arc-modifier-px: var(--arc-modifier) * 1px;
    --arc-modifier-em: var(--arc-modifier) * 1em;

    --arc-computed-badgecount-font-size: var(--arc-inherit-badgecount-font-size, calc(var(--arc-modifier-px)));
    --arc-computed-badgecount-size: calc(var(--arc-internal-badgecount-size) / var(--arc-modifier-em));
    --arc-computed-badgecount-padding-inline: calc(var(--arc-internal-badgecount-padding-inline) / var(--arc-modifier-em));
    --arc-computed-badgecount-border-radius: calc(var(--arc-internal-badgecount-border-radius) / var(--arc-modifier-em));
  }

  &[data-shape=circle] {
    --arc-computed-badgecount-border-radius: var(--arc-border-radius-pill);
  }
}


/* CORE STYLES ------------------------------------------------------ */

[arc-badge-count-wrapper]:not([hidden]) {
  flex: none;
  align-self: var(--arc-badge-count-align-self, flex-start);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 1lh;
  max-height: 1lh;
  vertical-align: bottom;
}

[arc-badge-count] {
  mix-blend-mode: var(--arc-badge-count-mix-blend-mode, var(--arc-internal-badgecount-mix-blend-mode));
  font-size: var(--arc-badge-count-font-size, var(--arc-computed-badgecount-font-size));
  font-weight: var(--arc-font-weight-600);

  flex: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: var(--arc-computed-badgecount-size); /** @computed • height */
  min-width: var(--arc-computed-badgecount-size); /** @computed • min-width */
  padding-inline: var(--arc-computed-badgecount-padding-inline); /** @computed • padding-inline */

  white-space: nowrap;
  line-height: normal;

  color: var(--arc-badge-count-color, var(--arc-internal-badgecount-color));
  background: var(--arc-badge-count-background, var(--arc-internal-badgecount-background));
  border-radius: var(--arc-computed-badgecount-border-radius); /** @computed • border-radius */
}

`,jo=y(G,["inherit","lg","md","sm"]),Eo=y(Z,["neutral","brand","critical","warning","success","inverse"]),To=y(pa,["square","circle"]),Io=({children:a,text:r,variant:e="neutral",size:o="inherit",shape:n="square",...c})=>{const s=a||r;return(0,i.jsx)("span",{...c,"arc-badge-count-wrapper":"",children:(0,i.jsx)("span",{"arc-badge-count":"","data-variant":e,"data-shape":n,"data-size":o,children:s})})};_("ArcBadgeCount",_o);const Po=h`
@layer arc-components {

[arc-label] {

  /* Inter-Component Communication ---------------------------------• */

  /* also to: ArcLabelContent */
  --arc-internal-label-opacity: var(--arc-label-opacity, unset);
  --arc-internal-label-opacity-disabled: var(--arc-label-opacity-disabled, var(--arc-alpha-60));


  /* Internal STYLES -----------------------------------------------• */

  --arc-internal-label-cursor: var(--arc-label-cursor, pointer);
  --arc-internal-label-cursor-disabled: var(--arc-label-cursor-disabled, not-allowed);

  &:has(:disabled) {
    --arc-internal-label-cursor: var(--arc-internal-label-cursor-disabled);
    --arc-internal-label-opacity: var(--arc-internal-label-opacity-disabled);
  }

  &[data-layout=fill] {
    --arc-internal-label-display: flex;
  }
}


/* CORE STYLES -----------------------------------------------------• */

[arc-label]:not([hidden]) {
  display: var(--arc-internal-label-display, inline-flex);
  align-items: var(--arc-label-align-items, baseline);
  gap: var(--arc-label-gap, max(var(--arc-space-1), 0.5em));
  cursor: var(--arc-internal-label-cursor);
}

}
`,Ro=y(or,["hug","fill"]),$r=({layout:a,...r})=>(0,i.jsx)("label",{...r,"arc-label":"","data-layout":a});_("ArcLabel",Po);const Lo=h`
@layer arc-components {

[arc-label-content] {
  opacity: var(--arc-label-opacity, var(--arc-internal-label-opacity, unset));
  transition: var(--arc-label-transition, opacity 100ms ease-out);
  user-select: var(--arc-label-user-select, none);
  -webkit-user-select: var(--arc-label-user-select, none);
}

}
`,yr=a=>(0,i.jsx)("span",{...a,"arc-label-content":""});_("LabelContent",Lo);const Oo={checkbox:"checkbox",radio:"radio",switch:"radio"},Dr=({id:a,indeterminate:r,type:e,onChange:o,...n})=>{const c=e==="checkbox"&&!!r,s=(0,$.useRef)(null),m=(0,$.useMemo)(()=>a||nr(`arc-${e}`),[a]),l=p=>g=>{if(!(g?.target instanceof HTMLInputElement))return;const v={checked:g?.target.checked,indeterminate:g?.target?.indeterminate,name:g?.target?.name,value:n?.value};p?.(v,g)};return(0,$.useEffect)(()=>{s.current?.type==="checkbox"&&(s.current.indeterminate=!!r)},[r]),(0,i.jsx)("input",{...n,id:m,ref:s,type:Oo[e],"arc-input-type":e,"aria-disabled":n?.disabled||void 0,"data-is-disabled":n?.disabled||void 0,"data-is-checked":n?.checked||void 0,"data-is-indeterminate":c||void 0,onChange:l(o)})},Mo=h`
@layer arc-components {

[arc-input-mask] {

  /* Inter-Component Communication ---------------------------------• */

  --arc-icon-size: var(--arc-internal-inputmask-icon-size); /* ArcIcon */


  /* --arc-internal- Tokens • NOT FOR CONSUMER USE -----------------• */

  --arc-internal-inputmask-border-width: max(var(--arc-border-width-sm), 0.0625em);
  --arc-internal-inputmask-border: var(--arc-internal-inputmask-border-width) solid var(--arc-internal-inputmask-border-color);


  &:has(:disabled) {
    --arc-internal-inputmask-cursor: not-allowed;
  }

  &:has(:focus:focus-visible) {
    --arc-internal-inputmask-outline: var(--arc-internal-inputmask-border-width) solid var(--arc-color-border-focus);
  }
}

[arc-input-mask-wrapper] {
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: 1lh;
}

[arc-input-mask] {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--arc-internal-inputmask-width);
  height: var(--arc-internal-inputmask-height);
  opacity: var(--arc-internal-inputmask-opacity, var(--arc-alpha-100));

  color: var(--arc-internal-inputmask-color, transparent);
  background: var(--arc-internal-inputmask-background);
  border: var(--arc-internal-inputmask-border);
  border-radius: var(--arc-internal-inputmask-border-radius);
  text-shadow: var(--arc-internal-inputmask-text-shadow, unset);
  translate: var(--arc-internal-inputmask-translate, unset);

  outline: var(--arc-internal-inputmask-outline, none);
  outline-offset: var(--arc-internal-inputmask-border-width);

  transition-property: opacity, background, color, border-color, outline;
  transition-duration: 100ms;
  transition-timing-function: ease-in-out;
  transition-behavior: allow-discrete;

  [arc-input-type] {
    flex: none;
    outline: none;
    appearance: none;
    position: absolute;
    inset: calc(var(--arc-internal-inputmask-border-width) * -1);
    cursor: var(--arc-internal-inputmask-cursor, pointer);
    margin: 0;
    padding: 0;
    border: 0;
    z-index: var(--arc-internal-input-z-index, unset);
  }

}

}
`,na=({type:a,...r})=>(0,i.jsx)("span",{"arc-input-mask-wrapper":"",children:(0,i.jsx)("span",{...r,"arc-input-mask":a})});_("ArcBooleanInputMask",Mo);const Bo=h`
@layer arc-components {

[arc-checkbox] {

  /* SIZES ---------------------------------------------------------• */

  &[data-size=inherit] { /* font-size base or parent context @ 100% */
    --arc-inherit-checkbox-font-size: 1em;
    --arc-inherit-checkbox-gap: 0.5em;
    --arc-inherit-checkbox-size: 1.125em; /* 18px @ 100% */
    --arc-inherit-checkbox-icon-size: 0.625em; /* 10px @ 100% */
  }

  &[data-size=md] {
    --arc-modifier: 14; /* unitless, desired font size at 100% */
    --arc-internal-checkbox-gap: 8;
    --arc-internal-checkbox-size: 18;
    --arc-internal-checkbox-icon-size: 10;
  }

  &[data-size=sm] {
    --arc-modifier: 12; /* unitless, desired font size at 100% */
    --arc-internal-checkbox-gap: 6;
    --arc-internal-checkbox-size: 16;
    --arc-internal-checkbox-icon-size: 10;
  }


  /* COMPUTED ------------------------------------------------------• */

  & {
    --arc-modifier-px: var(--arc-modifier) * 1px;
    --arc-modifier-em: var(--arc-modifier) * 1em;

    --arc-computed-checkbox-font-size: var(--arc-inherit-checkbox-font-size, calc(var(--arc-modifier-px)));
    --arc-computed-checkbox-gap:  var(--arc-inherit-checkbox-gap, calc(var(--arc-internal-checkbox-gap) / var(--arc-modifier-em)));
    --arc-computed-checkbox-size:  var(--arc-inherit-checkbox-size, calc(var(--arc-internal-checkbox-size) / var(--arc-modifier-em)));
    --arc-computed-checkbox-icon-size:  var(--arc-inherit-checkbox-icon-size, calc(var(--arc-internal-checkbox-icon-size) / var(--arc-modifier-em)));


    /* Inter-Component Communication -------------------------------• */

    /* for: ArcBooleanInputMask */
    --arc-internal-inputmask-color: var(--arc-color-alpha-white-0);
    --arc-internal-inputmask-background: var(--arc-color-alpha-white-50);
    --arc-internal-inputmask-border-color: var(--arc-color-alpha-black-40);
    --arc-internal-inputmask-border-radius: 0.25em; /* 4px @ 100% */
    --arc-internal-inputmask-size: var(--arc-computed-checkbox-size);
    --arc-internal-inputmask-icon-size: var(--arc-computed-checkbox-icon-size);
    --arc-internal-inputmask-width: var(--arc-computed-checkbox-size);
    --arc-internal-inputmask-height: var(--arc-computed-checkbox-size);
    --arc-internal-inputmask-translate: 0 -0.0625em; /* 1px @ 100% */
    --arc-internal-inputmask-text-shadow: 0 0.025em 0 currentcolor;

    /* for: ArcLabel */
    --arc-label-gap: var(--arc-computed-checkbox-gap);
    --arc-label-align-items: stretch; /* ArcLabel • this allows the mask
                                       to stay inline with the label text
                                       regardless of applied line-height */
  }
}


/* CORE STYLES -----------------------------------------------------• */

[arc-checkbox]:not([hidden]) {
  display: var(--arc-checkbox-display, inline-flex);
  font-size: var(--arc-computed-checkbox-font-size);
  min-height: 1lh;

  &:not(:has(:disabled, :checked, :indeterminate)) {
    &:hover {
      --arc-internal-inputmask-background: var(--arc-color-alpha-black-10);
      --arc-internal-inputmask-border-color: var(--arc-color-alpha-black-100);
    }
  }

  &:has(:disabled) {
    &:not(:has(:checked, :indeterminate)) {
      --arc-internal-inputmask-background: var(--arc-color-alpha-black-05);
      --arc-internal-inputmask-border-color: var(--arc-color-alpha-black-20);
    }
  }

  &:has(:checked, :indeterminate) {
    --arc-internal-inputmask-border-color: var(--arc-color-alpha-black-100);

    &:not(:has(:disabled)):hover {
      --arc-internal-inputmask-opacity: var(--arc-alpha-60);
    }

    &[data-variant=primary] {
      --arc-internal-inputmask-color: var(--arc-color-alpha-white-100);
      --arc-internal-inputmask-background: var(--arc-color-alpha-black-100);

      &:has(:disabled) {
        --arc-internal-inputmask-opacity: var(--arc-alpha-30);
      }
    }

    &[data-variant=secondary] {
      --arc-internal-inputmask-color: var(--arc-color-alpha-black-100);
      --arc-internal-inputmask-background: var(--arc-color-alpha-white-50);

      &:has(:disabled) {
        --arc-internal-inputmask-color: var(--arc-color-alpha-black-30);
        --arc-internal-inputmask-border-color: var(--arc-color-alpha-black-20);
      }
    }
  }
}

}
`,Ho=y(or,["hug","fill"]),Vo=y(G,["inherit","md","sm"]),No=y(Z,["primary","secondary"]),Be=({children:a,label:r,layout:e,size:o="md",variant:n="primary",useMask:c=!0,...s})=>{const{className:m,title:l,...p}=s,g={className:m,title:l},v=a??r,f=(0,i.jsx)(Dr,{...p,type:"checkbox"}),x=c&&(0,i.jsxs)(na,{type:"checkbox",children:[f,(0,i.jsx)(j,{icon:p?.indeterminate?"fa-solid fa-minus fa-fw":"fa-solid fa-check fa-fw"})]}),A=!!v&&(0,i.jsxs)($r,{layout:e,children:[x||f,(0,i.jsx)(yr,{children:v})]});return(0,i.jsx)("span",{...g,"arc-checkbox":"","data-size":o,"data-variant":n,children:A||x||f})};_("ArcCheckbox",Bo);const Uo=h`
@layer arc-components {

[arc-checkbox-bar] {

  /* --arc-internal/modifier/computed • NOT FOR CONSUMER USE -------• */

  --arc-internal-cb-space: 2;
  --arc-internal-cb-space-subtract: 0;
  --arc-internal-cb-border-radius: 8;
  --arc-internal-cb-background: var(--arc-color-alpha-black-0);

  --arc-internal-cbo-color: var(--arc-color-text-secondary);
  --arc-internal-cbo-background: var(--arc-color-alpha-white-0);
  --arc-internal-cbo-border-color: var(--arc-color-alpha-black-0);
  --arc-internal-cbo-border-width: 1;
  --arc-internal-cbo-border-width-subtract: 2;

  --arc-modifier: var(--arc-checkboxbar-modifier, 14); /* used for size calculations */
  --arc-modifier-px: var(--arc-modifier) * 1px;
  --arc-modifier-em: var(--arc-modifier) * 1em;


  /* SIZES ---------------------------------------------------------- */

  &[data-size=lg] { /* @default */
    --arc-internal-cbo-size: 40;
    --arc-internal-cbo-icon-padding: 8;
    --arc-internal-cbo-text-padding: 12;
  }

  &[data-size=md] {
    --arc-internal-cbo-size: 32;
    --arc-internal-cbo-icon-padding: 6;
    --arc-internal-cbo-text-padding: 8;
  }


  /* COMPUTED --------------------------------------------------------- */

  & {
    --arc-computed-cb-font-size: calc(var(--arc-modifier-px)); /* 14px */
    --arc-computed-cb-space: calc(var(--arc-internal-cb-space) / var(--arc-modifier-em));
    --arc-computed-cb-border-radius: calc(var(--arc-internal-cb-border-radius) / var(--arc-modifier-em));

    --arc-computed-cbo-size: calc((var(--arc-internal-cbo-size) - var(--arc-internal-cb-space-subtract)) / var(--arc-modifier-em));
    --arc-computed-cbo-line-height: calc((var(--arc-internal-cbo-size) - var(--arc-internal-cbo-border-width-subtract)) / var(--arc-modifier));
    --arc-computed-cbo-border-radius: calc((var(--arc-internal-cb-border-radius) - var(--arc-internal-cb-space)) / var(--arc-modifier-em));
    --arc-computed-cbo-border-width: calc(var(--arc-internal-cbo-border-width) / var(--arc-modifier-em));
    --arc-computed-cbo-icon-padding: calc(var(--arc-internal-cbo-icon-padding) / var(--arc-modifier-em));
    --arc-computed-cbo-text-padding: calc(var(--arc-internal-cbo-text-padding) / var(--arc-modifier-em));
  }


  /* LAYOUTS -------------------------------------------------------- */

  &[data-layout=hug] { /* @default */
    --arc-internal-cb-display: inline-flex;
  }

  &[data-layout=fill] {
    --arc-internal-cb-display: flex;
  }
}


[arc-checkbox-bar-option] {

  /* Inter-Component Communication ---------------------------------• */

  --arc-label-align-items: stretch; /* control ArcLabel's vertical footprint;
                                       allows long label text to wrap
                                       without compromising option's
                                       visual border */


  /* STATES --------------------------------------------------------- */

  &:not(:has(:disabled, :checked)) {
    &:hover {
      --arc-internal-cbo-color: var(--arc-color-text-secondary);
      --arc-internal-cbo-background: var(--arc-color-alpha-black-05);
      --arc-internal-cbo-border-color: var(--arc-color-alpha-black-0);
    }
  }

  &:has(:checked) {
    --arc-internal-cbo-color: var(--arc-color-text-primary);
    --arc-internal-cbo-background: var(--arc-color-alpha-black-05);
    --arc-internal-cbo-border-color: var(--arc-color-alpha-black-0);
    --arc-internal-cbo-font-weight: var(--arc-font-weight-500);
  }

  &:has(:focus-within:focus-visible) {
    --arc-internal-cbo-outline: var(--arc-computed-cbo-border-width) solid var(--arc-color-border-focus);
  }
}


/* CORE STYLES ------------------------------------------------------ */

[arc-checkbox-bar-option] {
  flex: 1 1 auto;
  display: flex;
  position: relative;
}

[arc-checkbox-bar] {
  font-size: var(--arc-computed-cb-font-size);
  display: var(--arc-internal-cb-display);
  gap: var(--arc-computed-cb-space);
  border-radius: var(--arc-computed-cb-border-radius);
  background: var(--arc-internal-cb-background);

  padding: 0;
  margin: 0;


  /* Inter-Component Communication ---------------------------------• */

  [arc-input-type=checkbox] {
    opacity: var(--arc-alpha-0);
    appearance: none;
    pointer-events: none;
    position: absolute;
  }

  [arc-checkbox] {
    flex: 1;
    display: flex;
    justify-content: center;
    border-radius: var(--arc-computed-cbo-border-radius);
    outline: var(--arc-internal-cbo-outline, none);
    outline-offset: var(--arc-computed-cbo-border-width);
  }

  [arc-label] {
    flex: 1;
    line-height: var(--arc-computed-cbo-line-height);
    overflow: hidden;
  }

  [arc-label-content] {
    flex: 1;
    display: flex;
    align-items: safe center;
    justify-content: center;

    height: var(--arc-computed-cbo-size);
    min-width: var(--arc-computed-cbo-size);

    border-radius: var(--arc-computed-cbo-border-radius);
    border: var(--arc-computed-cbo-border-width) solid var(--arc-internal-cbo-border-color);
    background: var(--arc-internal-cbo-background);
    color: var(--arc-internal-cbo-color);
    font-weight: var(--arc-internal-cbo-font-weight, unset);

    transition-property: border, background, color, font-weight;
    transition-duration: 200ms;
    transition-timing-function: ease-out;

    &:has([data-element=text]) {
      padding: 0 var(--arc-computed-cbo-text-padding);
    }

    &:not(:has([data-element=text])) {
      padding: 0 var(--arc-computed-cbo-icon-padding);
    }
  }

  [arc-icon-text] [data-element] {
    min-width: min-content;
    overflow: hidden;
    overflow-wrap: break-word;
  }
}

}
`,Fo=y(or,["hug","fill"]),Do=y(G,["lg","md"]),Zo=({children:a,label:r,icon:e,...o})=>{const n=a||(0,i.jsx)(Fr,{icon:e,text:r});return(0,i.jsx)("li",{"arc-checkbox-bar-option":"","data-is-checked":o?.checked||void 0,children:(0,i.jsx)(Be,{...o,label:n,layout:"fill",useMask:!1})})},Yo=({children:a,size:r="lg",layout:e="hug",...o})=>(0,i.jsx)("ul",{...o,"arc-checkbox-bar":"","data-size":r,"data-layout":e,role:"group",children:a});_("ArcCheckboxBar",Uo);const Xo=a=>(0,i.jsx)(kr,{...a,layout:"icon",size:"md",variant:"common",hierarchy:"tertiary"}),X=h`arc•link`,N=h`${X}•icon`,U=h`${X}•text`,qo=h`
@layer arc-components {

[arc-link] {

  /* VARIANTS ------------------------------------------------------• */

  &[data-variant=inherit] { /* @default */
    --${N}-color: currentcolor;
    --${N}-color-hover: color-mix(in srgb, currentcolor, transparent 38.75%);
    --${N}-color-disabled: color-mix(in srgb, currentcolor, transparent 70%);

    --${U}-color: currentcolor;
    --${U}-color-hover: color-mix(in srgb, currentcolor, transparent 38.75%);
    --${U}-color-disabled: color-mix(in srgb, currentcolor, transparent 70%);

    --${X}-focus-color: var(--arc-color-border-focus);
  }

  &[data-variant=primary] {
    --${N}-color: var(--arc-color-icon-primary);
    --${U}-color: var(--arc-color-text-primary);
    --${N}-color-hover: var(--arc-color-icon-primary-hover);
    --${U}-color-hover: var(--arc-color-text-primary-hover);
    --${N}-color-disabled: var(--arc-color-icon-disabled);
    --${U}-color-disabled: var(--arc-color-text-disabled);
    --${X}-focus-color: var(--arc-color-border-focus);
  }

  &[data-variant=secondary] {
    --${N}-color: var(--arc-color-icon-secondary);
    --${U}-color: var(--arc-color-text-secondary);
    --${N}-color-hover: var(--arc-color-icon-secondary-hover);
    --${U}-color-hover: var(--arc-color-text-secondary-hover);
    --${N}-color-disabled: var(--arc-color-icon-disabled);
    --${U}-color-disabled: var(--arc-color-text-disabled);
    --${X}-focus-color: var(--arc-color-border-focus);
  }

  &[data-variant=inverse] {
    --${N}-color: var(--arc-color-icon-inverse);
    --${U}-color: var(--arc-color-text-inverse);
    --${N}-color-hover: var(--arc-color-icon-inverse-hover);
    --${U}-color-hover: var(--arc-color-text-inverse-hover);
    --${N}-color-disabled: var(--arc-color-icon-inverse-disabled);
    --${U}-color-disabled: var(--arc-color-text-inverse-disabled);
    --${X}-focus-color: var(--arc-color-border-focus-inverse);
  }

  & {
    --${X}-outline-size: 0.125em; /* 2px */
    --${X}-outline-offset: 0.0625em; /* 1px */
  }


  /* STATES --------------------------------------------------------• */

  &:not([data-is-disabled]):hover {
    --${U}-color: var(--arc-link-color-hover, var(--${U}-color-hover));
    --${N}-color: var(--arc-link-color-hover, var(--${N}-color-hover));
  }

  &:where(:focus, :focus-within):focus-visible {
    --${X}-outline: var(--${X}-outline-size) solid var(--arc-link-color-focus, var(--${X}-focus-color));
    --${X}-outline-offset: var(--${X}-outline-offset);

    * {
      outline: none;
    }
  }

  &[data-is-disabled] {
    --${U}-color: var(--arc-link-color-disabled, var(--${U}-color-disabled));
    --${N}-color: var(--arc-link-color-disabled, var(--${N}-color-disabled));
    --${X}-cursor: not-allowed;
  }


  & {

    /* Inter-Component Communication -------------------------------• */
    --arc-icon-color: var(--arc-link-color, var(--${N}-color));  /** ArcIcon color */

  }

}


/* CORE STYLES ------------------------------------------------------ */

[arc-link] {
  color: var(--arc-link-color, var(--${U}-color));
  border-radius: var(--arc-border-radius-sm); /* for focus outline */
  text-decoration: var(--arc-link-text-decoration, underline);

  [data-element=icon] {
    text-decoration: none;
  }

  [data-element=text] {
    text-decoration: var(--arc-link-text-decoration, underline);
    text-decoration-color: currentcolor;
  }
}

}
`,Wo=y(Z,["inherit","primary","secondary","inverse"]),Go=({children:a,layout:r="gutter",size:e="inherit",variant:o="inherit",tag:n="a",href:c,icon:s,text:m,overflow:l,iconSize:p,gapSize:g,isFlipped:v,isDisabled:f,...x})=>(0,i.jsx)(n,{...x,href:f?void 0:c,"arc-link":"","data-variant":o,"aria-disabled":f,"data-is-disabled":f?"":void 0,children:a||(0,i.jsx)(Fr,{icon:s,text:m,overflow:l,iconSize:p,gapSize:g,size:e,layout:r,isFlipped:v})});_("ArcLink",qo);const Ko=h`
@layer arc-components {

[arc-radio] {

  /* SIZES ---------------------------------------------------------• */

  &[data-size=inherit] { /* font-size base or parent context @ 100% */
    --arc-inherit-radio-font-size: 1em;
    --arc-inherit-radio-gap: 0.5em;
    --arc-inherit-radio-size: 1.125em; /* 18px @ 100% */
    --arc-inherit-radio-icon-size: 0.625em; /* 10px @ 100% */
  }

  &[data-size=md] {
    --arc-modifier: 14; /* unitless, desired font size at 100% */
    --arc-internal-radio-gap: 8;
    --arc-internal-radio-size: 18;
    --arc-internal-radio-icon-size: 10;
  }

  &[data-size=sm] {
    --arc-modifier: 12; /* unitless, desired font size at 100% */
    --arc-internal-radio-gap: 6;
    --arc-internal-radio-size: 16;
    --arc-internal-radio-icon-size: 10;
  }

  /* COMPUTED ------------------------------------------------------• */

  & {
    --arc-modifier-px: var(--arc-modifier) * 1px;
    --arc-modifier-em: var(--arc-modifier) * 1em;

    --arc-computed-radio-font-size: var(--arc-inherit-radio-font-size, calc(var(--arc-modifier-px)));
    --arc-computed-radio-gap:  var(--arc-inherit-radio-gap, calc(var(--arc-internal-radio-gap) / var(--arc-modifier-em)));
    --arc-computed-radio-size:  var(--arc-inherit-radio-size, calc(var(--arc-internal-radio-size) / var(--arc-modifier-em)));
    --arc-computed-radio-icon-size:  var(--arc-inherit-radio-icon-size, calc(var(--arc-internal-radio-icon-size) / var(--arc-modifier-em)));


    /* Inter-Component Communication -------------------------------• */

    /* for: ArcBooleanInputMask */
    --arc-internal-inputmask-color: var(--arc-color-alpha-white-0);
    --arc-internal-inputmask-background: var(--arc-color-alpha-white-50);
    --arc-internal-inputmask-border-color: var(--arc-color-alpha-black-40);
    --arc-internal-inputmask-border-radius: var(--arc-border-radius-circle);
    --arc-internal-inputmask-size: var(--arc-computed-radio-size);
    --arc-internal-inputmask-icon-size: var(--arc-computed-radio-icon-size);
    --arc-internal-inputmask-width: var(--arc-computed-radio-size);
    --arc-internal-inputmask-height: var(--arc-computed-radio-size);
    --arc-internal-inputmask-translate: 0 -0.0625em; /* 1px @ 100% */


    /* for: ArcLabel */
    --arc-label-gap: var(--arc-computed-radio-gap);
    --arc-label-align-items: stretch; /* ArcLabel • this allows the mask
                                       to stay inline with the label text
                                       regardless of applied line-height */
  }
}


/* CORE STYLES -----------------------------------------------------• */

[arc-radio]:not([hidden]) {
  display: var(--arc-radio-display, flex);
  font-size: var(--arc-computed-radio-font-size);
  min-height: 1lh;

  &:not(:has(:disabled, :checked)) {
    &:hover {
      --arc-internal-inputmask-background: var(--arc-color-alpha-black-10);
      --arc-internal-inputmask-border-color: var(--arc-color-alpha-black-100);
    }
  }

  &:has(:disabled) {
    &:not(:has(:checked)) {
      --arc-internal-inputmask-background: var(--arc-color-alpha-black-05);
      --arc-internal-inputmask-border-color: var(--arc-color-alpha-black-20);
    }
  }

  &:has(:checked) {
    --arc-internal-inputmask-color: var(--arc-color-alpha-white-100);
    --arc-internal-inputmask-background: var(--arc-color-alpha-black-100);
    --arc-internal-inputmask-border-color: var(--arc-color-alpha-black-100);

    &:not(:has(:disabled)):hover {
      --arc-internal-inputmask-opacity: var(--arc-alpha-60);
    }

    &:has(:disabled) {
      --arc-internal-inputmask-opacity: var(--arc-alpha-30);
    }
  }
}

}
`,Jo=y(or,["hug","fill"]),Qo=y(G,["inherit","md","sm"]),He=({children:a,label:r,layout:e,size:o="md",useMask:n=!0,...c})=>{const{className:s,title:m,...l}=c,p={className:s,title:m},g=a??r,v=(0,i.jsx)(Dr,{...l,type:"radio"}),f=n&&(0,i.jsxs)(na,{type:"radio",children:[v,(0,i.jsx)(j,{icon:"fa-solid fa-circle-small fa-fw"})]}),x=!!g&&(0,i.jsxs)($r,{layout:e,children:[f||v,(0,i.jsx)(yr,{children:g})]});return(0,i.jsx)("span",{...p,"arc-radio":"","data-size":o,children:x||f||v})};_("ArcRadio",Ko);const ri=h`
@layer arc-components {

[arc-radio-bar] {

  /* --arc-internal/modifier/computed • NOT FOR CONSUMER USE -------- */

  --arc-internal-rb-space: 2;
  --arc-internal-rb-space-subtract: 4;
  --arc-internal-rb-space-border-subtract: 6;
  --arc-internal-rb-border-radius: 8;
  --arc-internal-rb-background: var(--arc-color-alpha-black-03);

  --arc-internal-rbo-color: var(--arc-color-text-secondary);
  --arc-internal-rbo-background: var(--arc-color-alpha-white-0);
  --arc-internal-rbo-border-color: var(--arc-color-alpha-black-0);
  --arc-internal-rbo-border-width: 1;
  --arc-internal-rbo-border-width-subtract: 2;

  --arc-modifier: var(--arc-radiobar-modifier, 14); /* used for size calculations */
  --arc-modifier-px: var(--arc-modifier) * 1px;
  --arc-modifier-em: var(--arc-modifier) * 1em;


  /* SIZES ---------------------------------------------------------• */

  &[data-size=lg] { /** @default */
    --arc-internal-rbo-size: 40;
    --arc-internal-rbo-icon-padding: 8;
    --arc-internal-rbo-text-padding: 12;
  }

  &[data-size=md] {
    --arc-internal-rbo-size: 32;
    --arc-internal-rbo-icon-padding: 6;
    --arc-internal-rbo-text-padding: 8;
  }


  /* COMPUTED ------------------------------------------------------• */

  & {
    --arc-computed-rb-font-size: calc(var(--arc-modifier-px)); /* 14px */
    --arc-computed-rb-space: calc(var(--arc-internal-rb-space) / var(--arc-modifier-em));
    --arc-computed-rb-border-radius: calc(var(--arc-internal-rb-border-radius) / var(--arc-modifier-em));

    --arc-computed-rbo-size: calc((var(--arc-internal-rbo-size) - var(--arc-internal-rb-space-subtract)) / var(--arc-modifier-em));
    --arc-computed-rbo-line-height: calc((var(--arc-internal-rbo-size) - var(--arc-internal-rb-space-border-subtract)) / var(--arc-modifier));
    --arc-computed-rbo-border-radius: calc((var(--arc-internal-rb-border-radius) - var(--arc-internal-rb-space)) / var(--arc-modifier-em));
    --arc-computed-rbo-border-width: calc(var(--arc-internal-rbo-border-width) / var(--arc-modifier-em));
    --arc-computed-rbo-icon-padding: calc(var(--arc-internal-rbo-icon-padding) / var(--arc-modifier-em));
    --arc-computed-rbo-text-padding: calc(var(--arc-internal-rbo-text-padding) / var(--arc-modifier-em));
  }


  /* LAYOUTS -------------------------------------------------------• */

  &[data-layout=hug] { /** @default */
    --arc-internal-rb-display: inline-flex;
  }

  &[data-layout=fill] {
    --arc-internal-rb-display: flex;
  }
}


[arc-radio-bar-option] {

  /* Inter-Component Communication ---------------------------------• */

  --arc-label-align-items: stretch; /* control ArcLabel's vertical footprint;
                                       allows long label text to wrap
                                       without compromising option's
                                       visual border */


  /* STATES --------------------------------------------------------• */

  &:not(:has(:disabled, :checked)) {
    &:hover {
      --arc-internal-rbo-color: var(--arc-color-text-primary);
      --arc-internal-rbo-background: var(--arc-color-alpha-black-05);
      --arc-internal-rbo-border-color: var(--arc-color-border-standard);
    }
  }

  &:has(:checked) {
      --arc-internal-rbo-color: var(--arc-color-text-primary);
      --arc-internal-rbo-background: var(--arc-color-alpha-white-100);
      --arc-internal-rbo-border-color: var(--arc-color-border-stark);
      --arc-internal-rbo-font-weight: var(--arc-font-weight-500);
  }

  &:has(:focus-within:focus-visible) {
    --arc-internal-rbo-outline: var(--arc-computed-rbo-border-width) solid var(--arc-color-border-focus);
  }
}


/* CORE STYLES -----------------------------------------------------• */

[arc-radio-bar-option] {
  flex: 1 1 auto;
  display: flex;
  position: relative;
}

[arc-radio-bar] {
  font-size: var(--arc-computed-rb-font-size);
  display: var(--arc-internal-rb-display);
  gap: var(--arc-computed-rb-space);
  border-radius: var(--arc-computed-rb-border-radius);
  background: var(--arc-internal-rb-background);

  padding: var(--arc-computed-rb-space);
  margin: 0;


  /* Inter-Component Communication ---------------------------------• */

  [arc-input-type=radio] {
    opacity: var(--arc-alpha-0);
    appearance: none;
    pointer-events: none;
    position: absolute;
  }

  [arc-radio] {
    flex: 1;
    display: flex;
    justify-content: center;
    border-radius: var(--arc-computed-rbo-border-radius);
    outline: var(--arc-internal-rbo-outline, none);
    outline-offset: var(--arc-computed-rbo-border-width);
  }

  [arc-label] {
    flex: 1;
    line-height: var(--arc-computed-rbo-line-height);
    overflow: hidden;
  }

  [arc-label-content] {
    flex: 1;
    display: flex;
    align-items: safe center;
    justify-content: center;

    height: var(--arc-computed-rbo-size);
    min-width: var(--arc-computed-rbo-size);

    border-radius: var(--arc-computed-rbo-border-radius);
    border: var(--arc-computed-rbo-border-width) solid var(--arc-internal-rbo-border-color);
    background: var(--arc-internal-rbo-background);
    color: var(--arc-internal-rbo-color);
    font-weight: var(--arc-internal-rbo-font-weight, unset);

    transition-property: border, background, color, font-weight;
    transition-duration: 200ms;
    transition-timing-function: ease-out;

    &:has([data-element=text]) {
      padding: 0 var(--arc-computed-rbo-text-padding);
    }

    &:not(:has([data-element=text])) {
      padding: 0 var(--arc-computed-rbo-icon-padding);
    }
  }

  [arc-icon-text] [data-element] {
    min-width: min-content;
    overflow: hidden;
    overflow-wrap: break-word;
  }
}

}
`,ai=y(or,["hug","fill"]),ei=y(G,["lg","md"]),ti=({children:a,label:r,icon:e,...o})=>{const n=a||(0,i.jsx)(Fr,{icon:e,text:r});return(0,i.jsx)("li",{"arc-radio-bar-option":"","data-is-checked":o?.checked||void 0,children:(0,i.jsx)(He,{...o,label:n,layout:"fill",useMask:!1})})},oi=({children:a,size:r="lg",layout:e="hug",...o})=>(0,i.jsx)("ul",{...o,"arc-radio-bar":"","data-size":r,"data-layout":e,role:"radiogroup",children:a});_("ArcRadioBar",ri);const ii=y(G,["inherit","md","sm"]),M={On:"on",Off:"off"},_r={Before:"before",After:"after"},ni=({disabled:a,id:r,name:e,size:o="md",value:n,labelOff:c,labelOn:s,onChange:m,...l})=>{const p=(0,$.useMemo)(()=>e||nr("arc-switch-name"),[e]),g=(0,$.useMemo)(()=>r&&`${r}-off`||nr("arc-switch-off"),[r]),v=(0,$.useMemo)(()=>r&&`${r}-on`||nr("arc-switch-on"),[r]),f=C=>{if(C.code==="Space"){C.preventDefault(),C.stopPropagation();const z=n===M.On?M.Off:M.On;m?.({value:z},C)}},x=C=>{const z={on:Vr(s),off:Vr(c)};return z?.on&&z?.off?z[C]:!z?.on&&z?.off?`${z?.off}: ${C}`:z?.on&&!z?.off?`${z?.on}: ${C}`:z[C]},A=(0,i.jsxs)(na,{type:"switch",onKeyDown:f,children:[(0,i.jsx)(Dr,{type:"switch",name:p,id:g,value:M.Off,checked:n===M.Off,disabled:a,"aria-label":x(M.Off)?.trim(),onChange:m}),(0,i.jsx)(Dr,{type:"switch",name:p,id:v,value:M.On,checked:n===M.On,disabled:a,"aria-label":x(M.On)?.trim(),onChange:m}),(0,i.jsx)("span",{"data-element":"mask"})]}),T=!s&&n===M.Off?v:g,B=!c&&n===M.On?g:v,I=!!(s||c)&&(0,i.jsxs)(i.Fragment,{children:[!!c&&(0,i.jsx)($r,{htmlFor:T,"arc-switch-label":s?M.Off:"",children:(0,i.jsx)(yr,{children:c})}),A,!!s&&(0,i.jsx)($r,{htmlFor:B,"arc-switch-label":c?M.On:"",children:(0,i.jsx)(yr,{children:s})})]});return(0,i.jsx)("span",{...l,"arc-switch":"","data-state":n,"data-size":o,role:"radiogroup",children:I||A})},ci=h`
@layer arc-components {

[arc-switch] {
  --arc-internal-switch-background: var(--arc-color-alpha-white-100);
  --arc-internal-switch-shadow: var(--arc-shadow-md);

  --arc-internal-inputmask-border-radius: var(--arc-border-radius-pill);

  --arc-label-align-items: stretch; /* ArcLabel • this allows the mask to
                                      stay inline with the label text
                                      regardless of applied line-height */


  /* COLORS via STATES ---------------------------------------------• */

  &:has(:disabled) {
    --arc-internal-switch-background: var(--arc-color-alpha-white-70);
    --arc-internal-switch-shadow: 0 0 1em max(1px, 0.0625em) var(--arc-color-alpha-white-50) inset;

    [arc-switch-label] {
      --arc-label-cursor: not-allowed;
      --arc-label-opacity: var(--arc-alpha-60);
    }
  }

  &[data-state=off] {
    --arc-internal-inputmask-background: var(--arc-color-alpha-black-05);
    --arc-internal-inputmask-border-color: var(--arc-color-alpha-black-30);

    &:not(:has(:disabled)):hover {
      --arc-internal-inputmask-background: var(--arc-color-alpha-black-10);
      --arc-internal-inputmask-border-color: var(--arc-color-alpha-black-100);
    }

    &:has(:disabled) {
    --arc-internal-inputmask-background: var(--arc-color-alpha-black-05);
    --arc-internal-inputmask-border-color: var(--arc-color-alpha-black-20);
    }
  }

  &[data-state=on] {
    --arc-internal-inputmask-background: var(--arc-color-alpha-black-100);
    --arc-internal-inputmask-border-color: var(--arc-color-alpha-black-100);

    &:not(:has(:disabled)):hover {
      --arc-internal-inputmask-opacity: var(--arc-alpha-60);
    }

    &:has(:disabled) {
      --arc-internal-inputmask-opacity: var(--arc-alpha-30);
    }
  }


  /* SIZES  --------------------------------------------------------• */

  &[data-size=inherit] {
    --arc-inherit-switch-font-size: 1em;
    --arc-inherit-switch-gap: 0.5em;  /* 8px @ 100%/16px base */
    --arc-inherit-switch-width: 2.5em; /* 40px @ 100% */
    --arc-inherit-switch-height: 1.5em; /* 24px @ 100% */
    --arc-inherit-switch-x-shift: 0.25em; /* 4px @ 100% */
    --arc-inherit-switch-size: 1.5em; /* 24px @ 100% */
    --arc-inherit-switch-gap: 0.5em; /* 8px @ 100% */
  }

  &[data-size=md] { /* @default */
    --arc-modifier: 14; /* unitless, desired font size at 100% */
    --arc-internal-switch-width: 40;
    --arc-internal-switch-height: 24;
    --arc-internal-switch-x-shift: 4;
    --arc-internal-switch-size: 24;
    --arc-internal-switch-gap: 8;
  }

  &[data-size=sm] {
    --arc-modifier: 12; /* unitless, desired font size at 100% */
    --arc-internal-switch-width: 30;
    --arc-internal-switch-height: 14;
    --arc-internal-switch-x-shift: 1;
    --arc-internal-switch-size: 16;
    --arc-internal-switch-gap: 8;
  }


  /* COMPUTED ------------------------------------------------------• */

  & {
    --arc-modifier-px: var(--arc-modifier) * 1px;
    --arc-modifier-em: var(--arc-modifier) * 1em;

    --arc-computed-switch-font-size: var(--arc-inherit-switch-font-size, calc(var(--arc-modifier-px)));
    --arc-computed-switch-gap: var(--arc-inherit-switch-gap, calc(var(--arc-internal-switch-gap) / var(--arc-modifier-em)));
    --arc-computed-switch-width: var(--arc-inherit-switch-width, calc(var(--arc-internal-switch-width) / var(--arc-modifier-em)));
    --arc-computed-switch-height: var(--arc-inherit-switch-height, calc(var(--arc-internal-switch-height) / var(--arc-modifier-em)));
    --arc-computed-switch-x-shift: var(--arc-inherit-switch-x-shift, calc(var(--arc-internal-switch-x-shift) / var(--arc-modifier-em)));
    --arc-computed-switch-size: var(--arc-inherit-switch-size, calc(var(--arc-internal-switch-size) / var(--arc-modifier-em)));


    /* Intern-Component Communication -------------------------------• to ArcBooleanInputMask */
    --arc-internal-inputmask-width: var(--arc-computed-switch-width);
    --arc-internal-inputmask-height: var(--arc-computed-switch-height);
    --arc-internal-inputmask-x-shift: var(--arc-computed-switch-x-shift);
    --arc-internal-inputmask-size: var(--arc-computed-switch-size);
  }


  /* SWITCH PLACEMENT ----------------------------------------------• */

  &[data-state=off] {
    --arc-internal-switch-mask-translate-x: calc(-100% + var(--arc-computed-switch-x-shift));
  }

  &[data-state=on] {
    --arc-internal-switch-mask-translate-x: calc(0% - var(--arc-computed-switch-x-shift));
  }
}


/* CORE STYLES -----------------------------------------------------• */

[arc-switch] {
  font-size: var(--arc-switch-font-size, var(--arc-computed-switch-font-size));
  display: inline-flex;
  align-items: baseline;
  gap: var(--arc-computed-switch-gap);
  user-select: none;

  [arc-switch-label] {
    font-size: inherit;
    hyphens: auto;
  }

  [arc-input-type=switch] {
    &:where(:not(:checked)) {
      --arc-internal-input-z-index: 1;
    }
  }

  [arc-input-mask-wrapper] {
    align-self: flex-start;
    height: 1lh;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  [data-element=mask] {
  }

  [data-element=mask] {
    position: absolute;
    top: 50%;
    left: 50%;
    translate: var(--arc-internal-switch-mask-translate-x) -50%;

    display: inline-flex;
    width: var(--arc-computed-switch-size);
    height: var(--arc-computed-switch-size);

    transition-property: opacity, background, color, border-color, outline, translate;
    transition-duration: 100ms;
    transition-timing-function: ease-in-out;
    transition-behavior: allow-discrete;
    transition-behavior: allow-discrete;

    background: var(--arc-internal-switch-background);
    box-shadow: var(--arc-internal-switch-shadow);
    border: var(--arc-internal-inputmask-border);
    border-radius: var(--arc-border-radius-circle);
    pointer-events: none;
  }
}

}
`,si=({disabled:a,id:r,name:e,size:o="md",value:n,label:c,labelPosition:s=_r.After,onChange:m,labelOff:l,labelOn:p,...g})=>{const v=(0,$.useMemo)(()=>e||nr("arc-switch-name"),[e]),f=(0,$.useMemo)(()=>r||nr("arc-switch"),[r]),x=(B,I)=>{const C=B.checked?M.On:M.Off;m?.({...B,value:C},I)};!c&&(p||l)&&(c=p||l,s=p?_r.After:_r.Before);const A=(0,i.jsxs)(na,{type:"checkbox",children:[(0,i.jsx)(Dr,{type:"checkbox",name:v,id:f,checked:n===M.On,disabled:a,role:"switch","aria-checked":n===M.On,"aria-label":c?void 0:"Toggle switch",tabIndex:0,onChange:x}),(0,i.jsx)("span",{"data-element":"mask","aria-hidden":"true",tabIndex:-1})]}),T=(0,i.jsx)($r,{htmlFor:f,"arc-switch-label":s,children:(0,i.jsx)(yr,{children:c})});return l&&p?(0,i.jsx)(ni,{...g,disabled:a,id:r,name:e,labelOff:l,labelOn:p,size:o,value:n,onChange:m}):(0,i.jsxs)("span",{...g,"arc-switch":"","data-state":n,"data-size":o,"data-label-position":s,role:"presentation","aria-live":"off",children:[c&&s===_r.Before&&T,A,c&&s===_r.After&&T]})};_("ArcSwitch",ci);const li=["title","heading","subheading","body"],Ve=["h1","h2","h3","h4","h5","h6"],Ne=["code","div","li","p","pre","span"],Ue=[...Ve,...Ne],di=["title-inherit","title-lg","title-md","title-sm"],pi=["heading-inherit","heading-lg","heading-md","heading-sm"],hi=["subheading-inherit","subheading-lg","subheading-md","subheading-sm"],ui=y(Z,["inherit","primary","primary-inverse"]),vi=["body-inherit","body-lg","body-md","body-sm","body-xs"],mi=y(Z,["inherit","primary","secondary","primary-inverse","secondary-inverse","critical","warning","success","info"]),gi=y(Ma,["inherit","start","center","justify","end"]),bi=y(Ba,["inherit","loose","standard","tight"]),fi={h1:"title",h2:"heading",h3:"heading",h4:"subheading",h5:"subheading",h6:"subheading",p:"body",span:"body",div:"body",code:"body",pre:"body",li:"body"},xi=a=>{const{align:r,lineHeight:e,size:o,variant:n,isMonospace:c,tag:s,...m}=a,l=fi?.[s]??"body",p=o?.includes("inherit")?o?.split("-")?.[0]:o;return{...m,"arc-text":p||l,"data-is-monospace":c?"":void 0,"data-align":r?.includes("inherit")?void 0:r,"data-variant":n?.includes("inherit")?void 0:n,"data-line-height":e?.includes("inherit")?void 0:e}},$i=h`
@layer arc-components {

[arc-text] {

  /* LINE HEIGHT ---------------------------------------------------• */

  &[data-line-height=standard] {
    --arc-text-line-height: var(--arc-line-height-standard);
  }

  &[data-line-height=loose] {
    --arc-text-line-height: var(--arc-line-height-loose);
  }

  &[data-line-height=tight] {
    --arc-text-line-height: var(--arc-line-height-tight);
  }

  /* ALIGNMENT -----------------------------------------------------• */

  &[data-align=start] {
    --arc-text-align: start;
  }

  &[data-align=center] {
    --arc-text-align: center;
  }

  &[data-align=justify] {
    --arc-text-align: justify;
  }

  &[data-align=end] {
    --arc-text-align: end;
  }

  /* VARIANTS ------------------------------------------------------• */

  &[data-variant=primary] {
    --arc-text-color: var(--arc-color-text-primary);
  }

  &[data-variant=primary-inverse] {
    --arc-text-color: var(--arc-color-text-inverse);
  }

  &[data-variant=secondary] {
    --arc-text-color: var(--arc-color-text-secondary);
  }

  &[data-variant=secondary-inverse] {
    --arc-text-color: var(--arc-color-alpha-white-60);
  }

  &[data-variant=critical] {
    --arc-text-color: var(--arc-color-text-critical);
  }

  &[data-variant=warning] {
    --arc-text-color: var(--arc-color-text-warning);
  }

  &[data-variant=success] {
    --arc-text-color: var(--arc-color-text-success);
  }

  &[data-variant=info] {
    --arc-text-color: var(--arc-color-text-info);
  }
}

/* FONT PROPERTIES -------------------------------------------------• */

[arc-text^=title] {
  --arc-text-font-family: var(--arc-font-family-title);
  --arc-text-font-weight: var(--arc-font-weight-title);
  --arc-text-letter-spacing: var(--arc-letter-spacing-title);
  --arc-text-line-height: var(--arc-line-height-title);

  --arc-text-font-size: 2em; /* @default title • 32÷16*1em • same as 'title-md' @ 100% */

  &:where([arc-text*=-lg]) {
    --arc-text-font-size: var(--arc-font-size-title-lg);
  }

  &:where([arc-text*=-md]) {
    --arc-text-font-size: var(--arc-font-size-title-md);
  }

  &:where([arc-text*=-sm]) {
    --arc-text-font-size: var(--arc-font-size-title-sm);
  }
}

[arc-text^=heading] {
  --arc-text-font-family: var(--arc-font-family-heading);
  --arc-text-font-weight: var(--arc-font-weight-heading);
  --arc-text-letter-spacing: var(--arc-letter-spacing-heading);
  --arc-text-line-height: var(--arc-line-height-heading);

  --arc-text-font-size: 1.25em; /* @default heading • 20÷16*1em • same as 'heading-md' @ 100% */

  &:where([arc-text*=-lg]) {
    --arc-text-font-size: var(--arc-font-size-heading-lg);
  }

  &:where([arc-text*=-md]) {
    --arc-text-font-size: var(--arc-font-size-heading-md);
  }

  &:where([arc-text*=-sm]) {
    --arc-text-font-size: var(--arc-font-size-heading-sm);
  }
}

[arc-text^=subheading] {
  --arc-text-font-family: var(--arc-font-family-subheading);
  --arc-text-font-weight: var(--arc-font-weight-subheading);
  --arc-text-letter-spacing: unset;
  --arc-text-line-height: var(--arc-line-height-subheading);

  --arc-text-font-size: 0.875em; /* @default subheading • 14÷16*1em • same as 'subheading-md' @ 100% */

  &:where([arc-text*=-lg]) {
    --arc-text-font-size: var(--arc-font-size-subheading-lg);
  }

  &:where([arc-text*=-md]) {
    --arc-text-font-size: var(--arc-font-size-subheading-md);
  }

  &:where([arc-text*=-sm]) {
    --arc-text-font-size: var(--arc-font-size-subheading-sm);
  }
}

[arc-text^=body] {
  --arc-text-font-family: var(--arc-font-family-body);
  --arc-text-font-weight: var(--arc-font-weight-body);
  --arc-text-line-height: var(--arc-line-height-body);
  --arc-text-font-size: 0.875em; /* @default body • 14÷16*1em • same as 'body-md' @ 100% */

  &:where([arc-text*=-lg]) {
    --arc-text-font-size: var(--arc-font-size-body-lg);
  }

  &:where([arc-text*=-md]) {
    --arc-text-font-size: var(--arc-font-size-body-md);
  }

  &:where([arc-text*=-sm]) {
    --arc-text-font-size: var(--arc-font-size-body-sm);
  }

  &:where([arc-text*=-xs]) {
    --arc-text-font-size: var(--arc-font-size-body-xs);
  }
}

[arc-text]:where(pre, code) {
  --arc-text-font-size: 1em;
}

[arc-text]:where(pre, code, [data-is-monospace]) {
  --arc-text-font-family: var(--arc-font-family-mono);
  --arc-text-line-height: var(--arc-line-height-mono);
}


/* CORE STYLES -----------------------------------------------------• */

[arc-text] {
  /* conveniences for element properties */
  flex: var(--arc-text-flex, unset);
  hyphens: var(--arc-text-hyphens, auto); /* not unset as fallback so text-breaks by default */
  opacity: var(--arc-text-opacity, unset);
  text-align: var(--arc-text-align, unset);
  white-space: var(--arc-text-white-space, unset);

  color: var(--arc-text-color, unset);

  font-size: var(--arc-text-font-size, unset);
  font-family: var(--arc-text-font-family, unset);
  font-weight: var(--arc-text-font-weight, unset);
  line-height: var(--arc-text-line-height, unset);
  letter-spacing: var(--arc-text-letter-spacing, unset);

  font-variation-settings: var(--arc-font-variation-settings, var(--arc-internal-font-vs));
}

}
`,yi=a=>(0,$.forwardRef)((r,e)=>(0,$.createElement)(a,{...xi({...r,tag:a}),ref:e})),wi=[...Ue].reduce((a,r)=>({...a,[r]:yi(r)}),{});_("Arc",$i);const jr=a=>(0,i.jsx)(i.Fragment,{children:!!a.children&&(0,i.jsx)("span",{...a})}),Ai=a=>(0,i.jsx)(i.Fragment,{children:!!a.children&&(0,i.jsx)("span",{...a})}),Ta=({children:a,...r})=>(0,i.jsx)(i.Fragment,{children:!!a&&(0,i.jsx)($r,{...r,children:(0,i.jsx)(yr,{children:a})})}),zi=({children:a,layout:r,size:e,variant:o,tag:n="span",...c})=>(0,i.jsx)(n,{...c,"data-layout":r,"data-size":e,"data-variant":o,children:a}),ki=()=>(0,i.jsx)("span",{"input-element":"spacer"}),Ci=a=>(0,i.jsx)(jr,{...a,"input-element":"header"}),Si=a=>(0,i.jsx)(Ta,{...a,"input-element":"header-label"}),_i=a=>(0,i.jsx)(jr,{...a,"input-element":"header-slot"}),ji=a=>(0,i.jsx)(jr,{...a,"input-element":"body"}),Ei=a=>(0,i.jsx)(Ta,{...a,"input-element":"input-prefix"}),Ti=a=>(0,i.jsx)(Ta,{...a,"input-element":"input-suffix"}),Ii=a=>(0,i.jsx)(Ai,{...a,"input-element":"input-action"}),Pi=a=>(0,i.jsx)(jr,{...a,"input-element":"footer"}),Ri=a=>(0,i.jsx)(jr,{...a,"input-element":"footer-caption"}),Li=a=>(0,i.jsx)(jr,{...a,"input-element":"footer-slot"}),Oi=a=>r=>{if(!(r?.target instanceof HTMLInputElement))return;const e={name:r?.target?.name,value:r?.target?.value};a?.(e,r)},Mi=h`
@layer arc-components {

/* --arc[-internal, -modifier, -computed] • NOT FOR CONSUMER USE ---• */

[arc-input] {

  /* SIZES ---------------------------------------------------------• */

  &[data-size=xl] {
    --arc-internal-input-height: 48;
    --arc-internal-input-padding-inline-end: 8;
  }

  &:is([data-size=lg], [data-size=inherit]) { /* @default • base size at 100% */
    --arc-internal-input-height: 40;
  }

  &[data-size=md] {
    --arc-internal-input-height: 32;
    --arc-internal-input-border-radius: 4;
    --arc-internal-input-action-max-height: 80%;
  }

  & {
    --arc-modifier: 14; /* unitless, desired font size at 100% */
    --arc-modifier-slot: 12; /* unitless, desired font size at 100% */
    --arc-internal-input-gap: 6;
    --arc-internal-input-slot-gap: 4;
    --arc-internal-input-padding-inline: 12;
    --arc-internal-input-padding-inline-end: 3;
    --arc-internal-input-border-radius: 8;
    --arc-internal-input-border-width: 1;
    --arc-internal-input-outline-size: 2;
    --arc-internal-input-outline-offset: -1;

    /* COMPUTED VARIABLES ------------------------------------------• */

    --arc-modifier-px: var(--arc-modifier) * 1px;
    --arc-modifier-em: var(--arc-modifier) * 1em;
    --arc-modifier-slot-px: var(--arc-modifier-slot) * 1px;
    --arc-modifier-slot-em: var(--arc-modifier-slot) * 1em;

    --arc-computed-input-font-size: calc(var(--arc-modifier-px));
    --arc-computed-input-slot-font-size: calc(var(--arc-modifier-slot-px));

    --arc-computed-input-border-radius: calc(var(--arc-internal-input-border-radius) / var(--arc-modifier-em));
    --arc-computed-input-border-width: calc(var(--arc-internal-input-border-width) / var(--arc-modifier-em)); /* 1px at 100% */
    --arc-computed-input-outline-size: calc(var(--arc-internal-input-outline-size) / var(--arc-modifier-em)); /* 2px at 100% */
    --arc-computed-input-outline-offset: calc(var(--arc-internal-input-outline-offset) / var(--arc-modifier-em)); /* -1px at 100% */

    --arc-computed-input-height: calc(var(--arc-internal-input-height) / var(--arc-modifier-em));
    --arc-computed-input-gap: calc(var(--arc-internal-input-gap) / var(--arc-modifier-em));
    --arc-computed-input-padding-inline: calc(var(--arc-internal-input-padding-inline) / var(--arc-modifier-em));
    --arc-computed-input-padding-inline-end: calc(var(--arc-internal-input-padding-inline-end) / var(--arc-modifier-em));
    --arc-computed-input-slot-gap: calc(var(--arc-internal-input-slot-gap) / var(--arc-modifier-slot-em));


    /* Inter-Component Communication -------------------------------• */

    --arc-label-cursor: var(--arc-internal-input-cursor, inherit); /* ArcLabel • cursor syncing */
    --arc-icon-text-modifier: var(--arc-modifier-slot); /* ArcIconText • modifier for font-size */

    &[data-size=inherit] {
      --arc-computed-input-font-size: 0.875em; /* 14px at 100% */
      --arc-computed-input-slot-font-size: 0.75em; /* 12px at 100% */
    }

    &[data-size=md] {
      /* Inter-Component Communication -------------------------------• */
      --arc-button-border-radius: var(--arc-border-radius-sm);
      --arc-button-outline-offset: 0;
      --arc-button-font-size: 0.8em; /* ArcButton • the input size 'md' needs
                                        a slightly smaller "input-action" button
                                        footprint; there's no direct access to
                                        ArcButton['size'] prop in this context */
    }
  }

  /* VARIANTS ------------------------------------------------------• */

  & {
    --arc-internal-input-color: var(--arc-color-text-primary);
    --arc-internal-input-header-label-color: inherit;
    --arc-internal-input-header-slot-color: var(--arc-color-text-secondary);
    --arc-internal-input-footer-caption-color: var(--arc-color-text-secondary);
    --arc-internal-input-footer-slot-color: var(--arc-color-text-secondary);

    &[data-variant=outline] { /* @default */
      --arc-internal-input-background: var(--arc-color-mono-white);
      --arc-internal-input-border-color: var(--arc-color-border-stark);
      --arc-internal-input-border-color-hover: var(--arc-color-border-full);

      --arc-internal-input-color-disabled: var(--arc-color-text-secondary);
      --arc-internal-input-background-disabled: var(--arc-color-background-secondary);
      --arc-internal-input-border-color-disabled: var(--arc-color-border-standard);

      --arc-internal-input-color-readonly: var(--arc-color-text-primary);
      --arc-internal-input-background-readonly: var(--arc-color-background-secondary);
      --arc-internal-input-border-color-readonly: var(--arc-color-border-standard);

      --arc-internal-input-color-invalid: var(--arc-color-text-critical);
      --arc-internal-input-background-invalid: var(--arc-color-mono-white);
      --arc-internal-input-border-color-invalid: var(--arc-color-text-critical);
    }

    &[data-variant=solid] {
      --arc-internal-input-background: var(--arc-color-alpha-black-03);
      --arc-internal-input-border-color: transparent;
      --arc-internal-input-border-color-hover: var(--arc-color-border-stark);

      --arc-internal-input-color-invalid: var(--arc-color-text-critical);
      --arc-internal-input-background-invalid: var(--arc-color-critical-light);
      --arc-internal-input-border-color-invalid: transparent;

      --arc-internal-input-color-disabled: var(--arc-color-text-secondary);
      --arc-internal-input-background-disabled: var(--arc-color-alpha-black-05);
      --arc-internal-input-border-color-disabled: transparent;

      --arc-internal-input-color-readonly: var(--arc-color-text-primary);
      --arc-internal-input-background-readonly: var(--arc-color-alpha-black-05);
      --arc-internal-input-border-color-readonly: transparent;
    }
  }


  /* STATES --------------------------------------------------------• */

  &:not(:has(input:read-only, input:disabled)) {
    &:has([input-element=header-label]:hover, [input-element=body]:hover) {
      --arc-internal-input-border-color: var(--arc-input-border-color-hover, var(--arc-internal-input-border-color-hover));
    }

    &:has([input-element=body]:where(:focus-within, :has(:focus, :active))) {
      --arc-internal-input-outline-color: var(--arc-color-border-focus);
    }
  }

  &:has(input:read-only) {
    --arc-internal-input-cursor: default;
    --arc-internal-input-color: var(--arc-internal-input-color-readonly);
    --arc-internal-input-background: var(--arc-internal-input-background-readonly);
    --arc-internal-input-border-color: var(--arc-internal-input-border-color-readonly);
  }

  &:has(input:disabled) {
    --arc-internal-input-cursor: not-allowed;
    --arc-internal-input-color: var(--arc-internal-input-color-disabled);
    --arc-internal-input-background: var(--arc-internal-input-background-disabled);
    --arc-internal-input-border-color: var(--arc-internal-input-border-color-disabled);
  }

  &:has(input:user-invalid:not(:focus)) {
    --arc-internal-input-color: var(--arc-internal-input-color-invalid);
    --arc-internal-input-background: var(--arc-internal-input-background-invalid);
    --arc-internal-input-border-color: var(--arc-internal-input-border-color-invalid);
    --arc-internal-input-footer-caption-color: var(--arc-internal-input-color-invalid);
  }


  /* LAYOUTS -------------------------------------------------------• */

  &[data-layout=fill] { /* @default */
    --arc-internal-input-display: flex;
  }

  &[data-layout=hug] {
    --arc-internal-input-display: inline-flex;
  }

  & {
    --arc-internal-input-border: var(--arc-border-width-sm) solid var(--arc-internal-input-border-color);
    --arc-internal-input-outline: var(--arc-computed-input-outline-size) solid var(--arc-internal-input-outline-color, transparent);
  }
}

[arc-input]:not([hidden]) {
  display: var(--arc-internal-input-display, flex);
  flex-direction: var(--arc-internal-input-flex-direction, column);
  gap: var(--arc-computed-input-slot-gap);

  :is([input-element=header], [input-element=footer]) {
    display: flex;
    justify-content: space-between;
    font-size: var(--arc-input-slot-font-size, var(--arc-computed-input-slot-font-size));
    gap: var(--arc-computed-input-slot-gap);
  }

  [input-element=spacer] {
    display: safe flex-end;
  }

  [input-element=header] {
    align-items: safe flex-end;
  }

  [input-element=header-label] {
    flex: 1;
    color: var(--arc-input-header-label-color, var(--arc-internal-input-header-label-color));
    font-weight: var(--arc-input-header-label-font-weight, var(--arc-font-weight-600));
  }

  [input-element=header-slot] {
    color: var(--arc-input-header-slot-color, var(--arc-internal-input-header-slot-color));
    min-width: var(--arc-input-header-slot-min-width, fit-content);
  }

  [input-element=footer] {
    align-items: baseline;
  }

  [input-element=footer-caption] {
    flex: 1;
    color: var(--arc-input-footer-caption-color, var(--arc-internal-input-footer-caption-color));
  }

  [input-element=footer-slot] {
    color: var(--arc-input-footer-slot-color, var(--arc-internal-input-footer-slot-color));
    min-width: var(--arc-input-footer-slot-min-width, fit-content);
  }

  [input-element=body] {
    flex: none;
    display: flex;
    align-items: center;
    gap: var(--arc-computed-input-gap);
    height: var(--arc-computed-input-height);
    font-size: var(--arc-computed-input-font-size);

    color: var(--arc-input-color, var(--arc-internal-input-color));
    background: var(--arc-input-background, var(--arc-internal-input-background));
    border: var(--arc-input-border, var(--arc-internal-input-border));
    border-radius: var(--arc-input-border-radius, var(--arc-computed-input-border-radius));
    outline: var(--arc-internal-input-outline, none);
    outline-offset: var(--arc-computed-input-outline-offset);

    transition-property: border, background, color, height;
    transition-duration: 200ms;
    transition-timing-function: ease-out;

    cursor: var(--arc-internal-input-cursor, unset);

    padding-inline: var(--arc-computed-input-padding-inline);

    &:has([input-element=input-action]) {
      padding-inline-end: var(--arc-computed-input-padding-inline-end);
    }

    input {
      cursor: inherit;
      apprearance: none;
      -webkit-apprearance: none;
      align-self: stretch;
      flex: 1;
      font: inherit;
      border: var(--arc-border-width-sm) solid transparent;
      background: transparent;
      padding: 0;
      margin: 0;
      outline: none;
      line-height: normal;
      min-width: 1em;
      max-width: 100%;
      text-align: var(--arc-input-text-align, unset);
    }
  }

  [input-element=input-prefix] {
    flex: none;
  }

  [input-element=input-suffix] {
    flex: none;
    opacity: var(--arc-input-suffix-opacity, var(--arc-alpha-40));
  }

  [input-element=input] {
    flex: 1;
    display: flex;
  }

  [input-element=input-action] {
    flex: none;
    cursor: inherit;
    align-self: stretch;
    display: flex;
    align-items: center;
    justify-content: center;

    button {
      max-height: var(--arc-internal-input-action-max-height, unset);
    }
  }
}

}
`,Bi={onChangeHandler:Oi,Wrapper:zi,Spacer:ki,Header:Ci,HeaderLabel:Si,HeaderSlot:_i,InputBody:ji,InputPrefix:Ei,InputSuffix:Ti,InputAction:Ii,Footer:Pi,FooterCaption:Ri,FooterSlot:Li};_("ArcInput",Mi);const q=Bi,Hi=y(or,["fill","hug"]),Vi=y(G,["inherit","xl","lg","md"]),Ni=y(Z,["outline","solid"]),Ui=Hi,Fi=Vi,Di=Ni,Zi=["text","number","password","email","url"],Yi=(0,$.forwardRef)(({layout:a="hug",size:r="inherit",variant:e="outline",inputProps:o,headerLabel:n,headerSlot:c,inputPrefix:s,inputAction:m,inputSuffix:l,footerCaption:p,footerSlot:g,...v},f)=>{const{id:x,onChange:A,...T}=o,B=T?.type||"text",I=T?.disabled||void 0,C=T?.readOnly||void 0,z=T?.required||void 0,H=!!(n||c),J=!!(p||g);return(0,i.jsxs)(q.Wrapper,{...v,"arc-text-input":"","arc-input":B,layout:a,size:r,variant:e,children:[H&&(0,i.jsxs)(q.Header,{children:[(0,i.jsx)(q.HeaderLabel,{htmlFor:x,children:n}),!!c&&(0,i.jsx)(q.Spacer,{}),(0,i.jsx)(q.HeaderSlot,{children:c})]}),(0,i.jsxs)(q.InputBody,{children:[(0,i.jsx)(q.InputPrefix,{htmlFor:x,children:s}),(0,i.jsx)("input",{...T,ref:f,id:x,"arc-input-type":B,onChange:q.onChangeHandler(A),"aria-disabled":I,"aria-readonly":C,"aria-required":z}),(0,i.jsx)(q.InputSuffix,{htmlFor:x,children:l}),(0,i.jsx)(q.InputAction,{children:m})]}),J&&(0,i.jsxs)(q.Footer,{children:[(0,i.jsx)(q.FooterCaption,{children:p}),!!g&&(0,i.jsx)(q.Spacer,{}),(0,i.jsx)(q.FooterSlot,{children:g})]})]})}),Fe=h`arc•progress`,De=h`${Fe}•bar`,Zr=h`${Fe}•value`,Xi=h`
@layer arc-components {
[arc-progress-bar] {
  --${De}-background: var(--arc-color-alpha-white-20);
  --${Zr}-background: var(--arc-color-brand-root);

  &[data-variant=ai] {
    --${Zr}-background: linear-gradient(to right, var(--arc-color-ai-purple-200), var(--arc-color-ai-blue-200));
  }

  &[data-variant=critical] {
    --${Zr}-background: var(--arc-color-critical-root);
  }
}

[arc-progress-bar] {
  appearance: none;
  -webkit-appearance: none;
  width: 100%;
  height: max(var(--arc-space-1), 0.5em);

  /* firefox needs these at this level, other browsers can use these too */
  background: var(--arc-progress-bar-background, var(--${De}-background));
  border-radius: var(--arc-border-radius-pill);
  border: none;

  /* turn off the default bar background for other browsers */
  &::-webkit-progress-bar { background: none; }

  /* firefox's progress-value bar */
  &::-moz-progress-bar {
    border-radius: var(--arc-border-radius-pill);
    background: var(--arc-progress-bar-value-background, var(--${Zr}-background));
  }

  /* all the others' progress-value bar */
  &::-webkit-progress-value {
    border-radius: var(--arc-border-radius-pill);
    background: var(--arc-progress-bar-value-background, var(--${Zr}-background));
  }
}

}
`,qi=({progress:a=0,variant:r="common",...e})=>(0,i.jsxs)("progress",{...e,"arc-progress-bar":"","data-variant":r,value:a,max:e.max||100,"aria-valuenow":a,"aria-valuemax":e.max||100,children:[a,"% "]});_("ArcProgressBar",Xi);const Wi=h`
@layer arc-components {

  [arc-toast] {
    --arc-toast-padding: 0.75em 0.75em 0.75em 1em;
    --arc-toast-transition-duration: 300ms;
    --arc-toast-offset: 1em;

    --arc-modifier: 14;
    --arc-toast-content-gap: max(0.125em, calc(2 / var(--arc-modifier) * 1em));

    /* SIZES ----------------------------------------------------------------• */

    &[data-size=md] { /* @default */
      --arc-toast-font-size: var(--arc-font-size-body-lg);
      --arc-toast-content-font-size: var(--arc-font-size-body-md); /* 14px @ 100% */
    }

    &[data-size=inherit] {
      --arc-toast-font-size: 1em;
      --arc-toast-content-font-size: 0.875em;
    }

    /* STATES ---------------------------------------------------------------• */
    &[data-severity=error] {
      --arc-toast-icon-color: var(--arc-color-critical-root);
    }

    &[data-severity=success] {
      --arc-toast-icon-color: var(--arc-color-success-root);
    }

    &[data-severity=warning] {
      --arc-toast-icon-color: var(--arc-color-warning-root);
    }

    /* VARIANTS -------------------------------------------------------------• */

    &[data-variant=common] { /* @default */
      --arc-toast-background: var(--arc-color-text-primary);
      --arc-toast-color: var(--arc-color-text-inverse);
    }
  }

  /* CORE STYLES --------------------------------------------------• */

  [arc-toast] {
    inset: var(--arc-toast-inset,
      var(--top, auto)
      var(--right, auto)
      var(--bottom, auto)
      var(--left, auto)
    );

    &[data-placement*=top-] {
      --top: var(--arc-toast-offset);
    }

    &[data-placement*=bottom-] {
      --bottom: var(--arc-toast-offset);
    }

    &[data-placement=center] {
      --arc-toast-inset: 0;
    }

    &[data-placement*=-left] {
      --left: var(--arc-toast-offset);
    }

    &[data-placement*=-right] {
      --right: var(--arc-toast-offset);
    }

    &[data-placement*=-center] {
      --left: 50%;
      translate: -50% 0;
    }
  }

  [arc-toast] {
    font-size: var(--arc-toast-font-size);
    content-visibility: hidden;
    align-items: center;
    color: var(--arc-toast-color);
    background-color: var(--arc-toast-background);
    border-radius: var(--arc-toast-border-radius, 0.5em);
    padding: var(--arc-toast-padding);
    box-shadow: var(--arc-shadow-dark-lg);
    min-width: var(--arc-toast-min-width, 25em);
    min-height: var(--arc-toast-min-height, 3.5em);
    border: none;

    &:has([arc-toast-heading]):has([arc-toast-subtext]) {
      --arc-toast-min-height: 5em;
      --arc-toast-content-display: flex;
    }

    [arc-toast-content-grid] {
      flex: 1;
      display: grid;
      grid-template-columns: 1fr auto;
      gap: 0.5em 1em;
    }

    [arc-toast-body] {
      display: flex;
      align-items: baseline;
      gap: 0.5em;
      padding: 0.25em 0; /* vertical padding to align with action button text */
    }

    [arc-toast-icon] {
      --arc-icon-color: var(--arc-toast-icon-color, currentcolor);

      height: 1lh;
      padding: 0 0.125em;
    }

    [arc-toast-content] {
      flex: 1;
      line-height: var(--arc-line-height-loose);
      font-size: var(--arc-toast-content-font-size);
      hyphens: auto;
      display: var(--arc-toast-content-display, block);
      flex-direction: column;
      gap: var(--arc-toast-content-gap);

      p {
        margin: 0;
      }
    }

    [arc-toast-actions] {
      align-self: baseline;

      display: flex;
      align-items: center;
      gap: 0.5em;
    }

    [arc-toast-progress-bar] {
      grid-column: 1 / -1;
    }
  }

  /* POPOVER + state ---------------------------------------------• */

  [arc-toast] {
    opacity: 0;
    transition:
      display var(--arc-toast-transition-duration) allow-discrete,
      overlay var(--arc-toast-transition-duration) allow-discrete,
      opacity var(--arc-toast-transition-duration);
  }

  [arc-toast]:popover-open {
    display: flex;
    opacity: 1;
    content-visibility: visible;
  }

  @starting-style {
    [arc-toast]:popover-open {
      opacity: 0;
    }
  }
}
`,Gi=y(Z,["common","ai","critical"]),Ki=["default","success","warning","error"],Ji=y(G,["inherit","md"]),Qi=y(Z,["common"]),rn=y(ha,["","auto","manual"]),an=["top-left","top-center","top-right","center","bottom-left","bottom-center","bottom-right"],en=Gi.filter(a=>a!=="critical"),tn=(a,r="toggle")=>{const e=document.getElementById(a);({toggle:()=>e?.togglePopover(),show:()=>e?.showPopover(),hide:()=>e?.hidePopover()})[r]()},Ze=({id:a,children:r,icon:e,heading:o,subtext:n,dismissProps:c,showDismiss:s=!0,onClose:m,actionSlot:l,size:p="md",variant:g="common",placement:v="bottom-left",getToastId:f,progressBarProps:x,severity:A,...T})=>{const B=()=>{m?.()},I=!!l||s,C=(0,$.useMemo)(()=>a||nr("arc-toast"),[a]),{variant:z,hierarchy:H,...J}=c||{};return(0,$.useEffect)(()=>{f?.(C)},[f,C]),(0,i.jsx)("div",{...T,"arc-toast":"","data-size":p,"data-variant":g,"data-placement":v,"data-severity":A||void 0,id:C,children:(0,i.jsxs)("div",{"arc-toast-content-grid":"",children:[(0,i.jsxs)("div",{"arc-toast-body":"",children:[e&&(0,i.jsx)(j,{icon:e,"arc-toast-icon":""}),(0,i.jsx)("div",{"arc-toast-content":"",children:r||(0,i.jsxs)(i.Fragment,{children:[o&&(0,i.jsx)("header",{"arc-toast-heading":"",children:(0,i.jsx)("strong",{children:o})}),n&&(0,i.jsx)("p",{"arc-toast-subtext":"",children:n})]})})]}),I&&(0,i.jsxs)("div",{"arc-toast-actions":"",children:[l,s&&(0,i.jsx)(kr,{icon:"fa-regular fa-xmark-large",layout:"icon",variant:"common",hierarchy:"tertiary",isInverse:!0,size:"md",shape:"square","aria-label":"Dismiss",...J,popovertarget:C,onClick:B})]}),x&&(0,i.jsx)(qi,{...x,variant:A==="error"?"critical":x.variant,"arc-toast-progress-bar":""})]})})};Ze.handleToast=tn,_("ArcToast",Wi);const on=(a,r=1/0,e=" ")=>[...a].flat(r)?.filter(Boolean)?.join(e)}}]);
