import{i as P,w as $,o as _,a as X,b as pe,c as q,r as he,d as C,e as j,f as Z,u as V,g as be,h as O,j as T,k as b,l as ve,m as de,t as G,n as ye,p as Ie,q as fe,s as Ce,S as ee,v as xe,x as oe,y as N,z as w,A as z,B as ge,C as re,D as Se,E as ke,F as Oe,G as Le,H as we,I as De,J as We,K as Ye,L as Te,M as le,N as je,O as Be,P as Re,Q as Ne,R as Ze,T as F,U as Ae,V as M,W as ze,X as Ee,_ as He,Y as Me,Z as Ke,$ as ie,a0 as R,a1 as A,a2 as B,a3 as qe,a4 as H,a5 as U,a6 as Ge,a7 as ae,a8 as Pe,a9 as $e,aa as se,ab as _e,ac as Xe,ad as Ve,ae as Fe,af as Ue,ag as Je,ah as Qe}from"./index-CeZNBN06.js";function me(e){return typeof e=="string"?document.querySelector(e):typeof e=="function"?e():e}function et(e,n,o){const l=P(e,null);l!==null&&(n in l||(l[n]=[]),l[n].push(o.value),$(o,(a,d)=>{const f=l[n],u=f.findIndex(g=>g===d);~u&&f.splice(u,1),f.push(a)}),_(()=>{const a=l[n],d=a.findIndex(f=>f===o.value);~d&&a.splice(d,1)}))}function tt(e,n,o){const l=P(e,null);l!==null&&(n in l||(l[n]=[]),X(()=>{const a=o();a&&l[n].push(a)}),_(()=>{const a=l[n],d=o(),f=a.findIndex(u=>u===d);~f&&a.splice(f,1)}))}function nt(e){switch(typeof e){case"string":return e||void 0;case"number":return String(e);default:return}}var ot=/\s/;function rt(e){for(var n=e.length;n--&&ot.test(e.charAt(n)););return n}var lt=/^\s+/;function it(e){return e&&e.slice(0,rt(e)+1).replace(lt,"")}var ce=NaN,at=/^[-+]0x[0-9a-f]+$/i,st=/^0b[01]+$/i,ct=/^0o[0-7]+$/i,ut=parseInt;function ue(e){if(typeof e=="number")return e;if(pe(e))return ce;if(q(e)){var n=typeof e.valueOf=="function"?e.valueOf():e;e=q(n)?n+"":n}if(typeof e!="string")return e===0?e:+e;e=it(e);var o=st.test(e);return o||ct.test(e)?ut(e.slice(2),o?2:8):at.test(e)?ce:+e}var J=function(){return he.Date.now()},dt="Expected a function",ft=Math.max,gt=Math.min;function mt(e,n,o){var l,a,d,f,u,g,v=0,S=!1,p=!1,L=!0;if(typeof e!="function")throw new TypeError(dt);n=ue(n)||0,q(o)&&(S=!!o.leading,p="maxWait"in o,d=p?ft(ue(o.maxWait)||0,n):d,L="trailing"in o?!!o.trailing:L);function D(t){var i=l,I=a;return l=a=void 0,v=t,f=e.apply(I,i),f}function m(t){return v=t,u=setTimeout(c,n),S?D(t):f}function h(t){var i=t-g,I=t-v,W=n-i;return p?gt(W,d-I):W}function s(t){var i=t-g,I=t-v;return g===void 0||i>=n||i<0||p&&I>=d}function c(){var t=J();if(s(t))return y(t);u=setTimeout(c,h(t))}function y(t){return u=void 0,L&&l?D(t):(l=a=void 0,f)}function k(){u!==void 0&&clearTimeout(u),v=0,l=g=a=u=void 0}function x(){return u===void 0?f:y(J())}function r(){var t=J(),i=s(t);if(l=arguments,a=this,g=t,i){if(u===void 0)return m(g);if(p)return clearTimeout(u),u=setTimeout(c,n),D(g)}return u===void 0&&(u=setTimeout(c,n)),f}return r.cancel=k,r.flush=x,r}var pt="Expected a function";function ht(e,n,o){var l=!0,a=!0;if(typeof e!="function")throw new TypeError(pt);return q(o)&&(l="leading"in o?!!o.leading:l,a="trailing"in o?!!o.trailing:a),mt(e,n,{leading:l,maxWait:n,trailing:a})}const bt=C("affix",[j("affixed",{position:"fixed"},[j("absolute-positioned",{position:"absolute"})])]);function vt(e){return e instanceof HTMLElement?e.scrollTop:window.scrollY}function yt(e){return e instanceof HTMLElement?e.getBoundingClientRect():{top:0,bottom:window.innerHeight}}const te={listenTo:[String,Object,Function],top:Number,bottom:Number,triggerTop:Number,triggerBottom:Number,position:{type:String,default:"fixed"},offsetTop:{type:Number,validator:()=>!0,default:void 0},offsetBottom:{type:Number,validator:()=>!0,default:void 0},target:{type:Function,validator:()=>!0,default:void 0}},It=de(te),Ct=Z({name:"Affix",props:te,setup(e){const{mergedClsPrefixRef:n}=V(e);be("-affix",bt,n);let o=null;const l=O(!1),a=O(!1),d=O(null),f=O(null),u=T(()=>a.value||l.value),g=T(()=>{var s,c;return(c=(s=e.triggerTop)!==null&&s!==void 0?s:e.offsetTop)!==null&&c!==void 0?c:e.top}),v=T(()=>{var s,c;return(c=(s=e.top)!==null&&s!==void 0?s:e.triggerTop)!==null&&c!==void 0?c:e.offsetTop}),S=T(()=>{var s,c;return(c=(s=e.bottom)!==null&&s!==void 0?s:e.triggerBottom)!==null&&c!==void 0?c:e.offsetBottom}),p=T(()=>{var s,c;return(c=(s=e.triggerBottom)!==null&&s!==void 0?s:e.offsetBottom)!==null&&c!==void 0?c:e.bottom}),L=O(null),D=()=>{const{target:s,listenTo:c}=e;s?o=s():c?o=me(c):o=document,o&&(o.addEventListener("scroll",m),m())};function m(){ve(h)}function h(){const{value:s}=L;if(!o||!s)return;const c=vt(o);if(u.value){f.value!==null&&c<f.value&&(l.value=!1,f.value=null),d.value!==null&&c>d.value&&(a.value=!1,d.value=null);return}const y=yt(o),k=s.getBoundingClientRect(),x=k.top-y.top,r=y.bottom-k.bottom,t=g.value,i=p.value;t!==void 0&&x<=t?(l.value=!0,f.value=c-(t-x)):(l.value=!1,f.value=null),i!==void 0&&r<=i?(a.value=!0,d.value=c+i-r):(a.value=!1,d.value=null)}return X(()=>{D()}),_(()=>{o&&o.removeEventListener("scroll",m)}),{selfRef:L,affixed:u,mergedClsPrefix:n,mergedstyle:T(()=>{const s={};return l.value&&g.value!==void 0&&v.value!==void 0&&(s.top=`${v.value}px`),a.value&&p.value!==void 0&&S.value!==void 0&&(s.bottom=`${S.value}px`),s})}},render(){const{mergedClsPrefix:e}=this;return b("div",{ref:"selfRef",class:[`${e}-affix`,{[`${e}-affix--affixed`]:this.affixed,[`${e}-affix--absolute-positioned`]:this.position==="absolute"}],style:this.mergedstyle},this.$slots)}}),K=Ie("n-anchor"),xt={title:String,href:String},St=Z({name:"AnchorLink",props:xt,setup(e,{slots:n}){const o=O(null),l=P(K),a=G(e,"href"),d=ye(()=>a.value&&a.value===l.activeHref.value);et(K,"collectedLinkHrefs",a),tt(K,"titleEls",()=>o.value),$(d,u=>{u&&o.value&&l.updateBarPosition(o.value)});function f(){e.href!==void 0&&l.setActiveHref(e.href)}return()=>{var u;const{value:g}=l.mergedClsPrefix;return b("div",{class:[`${g}-anchor-link`,d.value&&`${g}-anchor-link--active`]},b("a",{ref:o,class:[`${g}-anchor-link__title`],href:e.href,title:nt(e.title),onClick:f},e.title),(u=n.default)===null||u===void 0?void 0:u.call(n))}}});function kt(e,n){const{top:o,height:l}=e.getBoundingClientRect(),a=n instanceof HTMLElement?n.getBoundingClientRect().top:0;return{top:o-a,height:l}}const ne={type:{type:String,default:"rail"},showRail:{type:Boolean,default:!0},showBackground:{type:Boolean,default:!0},bound:{type:Number,default:12},internalScrollable:Boolean,ignoreGap:Boolean,offsetTarget:[String,Object,Function]},Ot=de(ne),Lt=Z({name:"BaseAnchor",props:Object.assign(Object.assign({},ne),{mergedClsPrefix:{type:String,required:!0}}),setup(e){const n=[],o=[],l=O(null),a=O(null),d=O(null),f=O(null),u=T(()=>e.type==="block"),g=T(()=>!u.value&&e.showRail);function v(){const{value:m}=d,{value:h}=a;m&&(m.style.transition="none"),h&&(h.style.transition="none"),o.forEach(s=>{s.style.transition="none"}),xe(()=>{const{value:s}=d,{value:c}=a;s&&(s.offsetWidth,s.style.transition=""),c&&(c.offsetWidth,c.style.transition=""),o.forEach(y=>{y.offsetWidth,y.style.transition=""})})}function S(m,h=!0){const{value:s}=d,{value:c}=a,{value:y}=f;if(!y||!s)return;h||(s.style.transition="none",c&&(c.style.transition="none"));const{offsetHeight:k,offsetWidth:x}=m,{top:r,left:t}=m.getBoundingClientRect(),{top:i,left:I}=y.getBoundingClientRect(),W=r-i,E=t-I;s.style.top=`${W}px`,s.style.height=`${k}px`,c&&(c.style.top=`${W}px`,c.style.height=`${k}px`,c.style.maxWidth=`${x+E}px`),s.offsetHeight,c&&c.offsetHeight,h||(s.style.transition="",c&&(c.style.transition=""))}const p=ht(()=>{D(!0)},128);function L(m,h=!0){const s=/^#([^#]+)$/.exec(m);if(!s)return;const c=document.getElementById(s[1]);c&&(l.value=m,c.scrollIntoView(),h||v(),p())}function D(m=!0){var h;const s=[],c=me((h=e.offsetTarget)!==null&&h!==void 0?h:document);n.forEach(t=>{const i=/#([^#]+)$/.exec(t);if(!i)return;const I=document.getElementById(i[1]);if(I&&c){const{top:W,height:E}=kt(I,c);s.push({top:W,height:E,href:t})}}),s.sort((t,i)=>t.top>i.top?1:(t.top===i.top&&t.height<i.height,-1));const y=l.value,{bound:k,ignoreGap:x}=e,r=s.reduce((t,i)=>i.top+i.height<0?x?i:t:i.top<=k?t===null?i:i.top===t.top?i.href===y?i:t:i.top>t.top?i:t:t,null);m||v(),r?l.value=r.href:l.value=null}return fe(K,{activeHref:l,mergedClsPrefix:G(e,"mergedClsPrefix"),updateBarPosition:S,setActiveHref:L,collectedLinkHrefs:n,titleEls:o}),X(()=>{document.addEventListener("scroll",p,!0),L(window.location.hash),D(!1)}),Ce(()=>{L(window.location.hash),D(!1)}),_(()=>{document.removeEventListener("scroll",p,!0)}),$(l,m=>{if(m===null){const{value:h}=a;h&&!u.value&&(h.style.maxWidth="0")}}),{selfRef:f,barRef:d,slotRef:a,setActiveHref:L,activeHref:l,isBlockType:u,mergedShowRail:g}},render(){var e;const{mergedClsPrefix:n,mergedShowRail:o,isBlockType:l,$slots:a}=this,d=b("div",{class:[`${n}-anchor`,l&&`${n}-anchor--block`,o&&`${n}-anchor--show-rail`],ref:"selfRef"},o&&this.showBackground?b("div",{ref:"slotRef",class:`${n}-anchor-link-background`}):null,o?b("div",{class:`${n}-anchor-rail`},b("div",{ref:"barRef",class:[`${n}-anchor-rail__bar`,this.activeHref!==null&&`${n}-anchor-rail__bar--active`]})):null,(e=a.default)===null||e===void 0?void 0:e.call(a));return this.internalScrollable?b(ee,null,{default:()=>d}):d}}),wt=C("anchor",`
 position: relative;
`,[oe("block",`
 padding-left: var(--n-rail-width);
 `,[C("anchor-link",[N("+, >",[C("anchor-link",`
 margin-top: .5em;
 `)])]),C("anchor-link-background",`
 max-width: 0;
 border-top-right-radius: 10.5px;
 border-bottom-right-radius: 10.5px;
 `),oe("show-rail",[N(">",[C("anchor-link","padding-left: 0;")])])]),j("block",[C("anchor-link",`
 margin-bottom: 4px;
 padding: 2px 8px;
 transition: background-color .3s var(--n-bezier);
 background-color: transparent;
 border-radius: var(--n-link-border-radius);
 `,[j("active",`
 background-color: var(--n-link-color);
 `)])]),C("anchor-link-background",`
 position: absolute;
 left: calc(var(--n-rail-width) / 2);
 width: 100%;
 background-color: var(--n-link-color);
 transition:
 top .15s var(--n-bezier),
 max-width .15s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),C("anchor-rail",`
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 width: var(--n-rail-width);
 border-radius: calc(var(--n-rail-width) / 2);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-rail-color);
 `,[w("bar",`
 position: absolute;
 left: 0;
 width: var(--n-rail-width);
 height: 21px;
 background-color: #0000;
 transition: 
 top .15s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `,[j("active",{backgroundColor:"var(--n-rail-color-active)"})])]),C("anchor-link",`
 padding: var(--n-link-padding);
 position: relative;
 line-height: 1.5;
 font-size: var(--n-link-font-size);
 min-height: 1.5em;
 display: flex;
 flex-direction: column;
 `,[j("active",[N(">",[w("title",`
 color: var(--n-link-text-color-active);
 `)])]),w("title",`
 outline: none;
 max-width: 100%;
 text-decoration: none;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 cursor: pointer;
 display: inline-block;
 padding-right: 16px;
 transition: color .3s var(--n-bezier);
 color: var(--n-link-text-color);
 `,[N("&:hover, &:focus",`
 color: var(--n-link-text-color-hover);
 `),N("&:active",`
 color: var(--n-link-text-color-pressed);
 `)])])]),Dt=Object.assign(Object.assign(Object.assign(Object.assign({},z.props),{affix:Boolean}),te),ne),Wt=Z({name:"Anchor",props:Dt,setup(e,{slots:n}){const{mergedClsPrefixRef:o,inlineThemeDisabled:l}=V(e),a=z("Anchor","-anchor",wt,Se,e,o),d=O(null),f=T(()=>{const{self:{railColor:g,linkColor:v,railColorActive:S,linkTextColor:p,linkTextColorHover:L,linkTextColorPressed:D,linkTextColorActive:m,linkFontSize:h,railWidth:s,linkPadding:c,borderRadius:y},common:{cubicBezierEaseInOut:k}}=a.value;return{"--n-link-border-radius":y,"--n-link-color":v,"--n-link-font-size":h,"--n-link-text-color":p,"--n-link-text-color-hover":L,"--n-link-text-color-active":m,"--n-link-text-color-pressed":D,"--n-link-padding":c,"--n-bezier":k,"--n-rail-color":g,"--n-rail-color-active":S,"--n-rail-width":s}}),u=l?ge("anchor",void 0,f,e):void 0;return{scrollTo(g){var v;(v=d.value)===null||v===void 0||v.setActiveHref(g)},renderAnchor:()=>(u==null||u.onRender(),b(Lt,Object.assign({ref:d,style:l?void 0:f.value,class:u==null?void 0:u.themeClass.value},re(e,Ot),{mergedClsPrefix:o.value}),n))}},render(){return this.affix?b(Ct,Object.assign({},re(this,It)),{default:this.renderAnchor}):this.renderAnchor()}});function Yt(){return ke}const Tt={name:"Space",self:Yt};let Q;function jt(){if(!Oe)return!0;if(Q===void 0){const e=document.createElement("div");e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e);const n=e.scrollHeight===1;return document.body.removeChild(e),Q=n}return Q}const Bt=Object.assign(Object.assign({},z.props),{align:String,justify:{type:String,default:"start"},inline:Boolean,vertical:Boolean,reverse:Boolean,size:{type:[String,Number,Array],default:"medium"},wrapItem:{type:Boolean,default:!0},itemClass:String,itemStyle:[String,Object],wrap:{type:Boolean,default:!0},internalUseGap:{type:Boolean,default:void 0}}),Rt=Z({name:"Space",props:Bt,setup(e){const{mergedClsPrefixRef:n,mergedRtlRef:o}=V(e),l=z("Space","-space",void 0,Tt,e,n),a=Le("Space",o,n);return{useGap:jt(),rtlEnabled:a,mergedClsPrefix:n,margin:T(()=>{const{size:d}=e;if(Array.isArray(d))return{horizontal:d[0],vertical:d[1]};if(typeof d=="number")return{horizontal:d,vertical:d};const{self:{[Ye("gap",d)]:f}}=l.value,{row:u,col:g}=Te(f);return{horizontal:le(g),vertical:le(u)}})}},render(){const{vertical:e,reverse:n,align:o,inline:l,justify:a,itemClass:d,itemStyle:f,margin:u,wrap:g,mergedClsPrefix:v,rtlEnabled:S,useGap:p,wrapItem:L,internalUseGap:D}=this,m=we(De(this),!1);if(!m.length)return null;const h=`${u.horizontal}px`,s=`${u.horizontal/2}px`,c=`${u.vertical}px`,y=`${u.vertical/2}px`,k=m.length-1,x=a.startsWith("space-");return b("div",{role:"none",class:[`${v}-space`,S&&`${v}-space--rtl`],style:{display:l?"inline-flex":"flex",flexDirection:e&&!n?"column":e&&n?"column-reverse":!e&&n?"row-reverse":"row",justifyContent:["start","end"].includes(a)?`flex-${a}`:a,flexWrap:!g||e?"nowrap":"wrap",marginTop:p||e?"":`-${y}`,marginBottom:p||e?"":`-${y}`,alignItems:o,gap:p?`${u.vertical}px ${u.horizontal}px`:""}},!L&&(p||D)?m:m.map((r,t)=>r.type===We?r:b("div",{role:"none",class:d,style:[f,{maxWidth:"100%"},p?"":e?{marginBottom:t!==k?c:""}:S?{marginLeft:x?a==="space-between"&&t===k?"":s:t!==k?h:"",marginRight:x?a==="space-between"&&t===0?"":s:"",paddingTop:y,paddingBottom:y}:{marginRight:x?a==="space-between"&&t===k?"":s:t!==k?h:"",marginLeft:x?a==="space-between"&&t===0?"":s:"",paddingTop:y,paddingBottom:y}]},r)))}}),Nt=C("layout-sider",`
 flex-shrink: 0;
 box-sizing: border-box;
 position: relative;
 z-index: 1;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 min-width .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 transform .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 display: flex;
 justify-content: flex-end;
`,[j("bordered",[w("border",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 1px;
 background-color: var(--n-border-color);
 transition: background-color .3s var(--n-bezier);
 `)]),w("left-placement",[j("bordered",[w("border",`
 right: 0;
 `)])]),j("right-placement",`
 justify-content: flex-start;
 `,[j("bordered",[w("border",`
 left: 0;
 `)]),j("collapsed",[C("layout-toggle-button",[C("base-icon",`
 transform: rotate(180deg);
 `)]),C("layout-toggle-bar",[N("&:hover",[w("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),w("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])])]),C("layout-toggle-button",`
 left: 0;
 transform: translateX(-50%) translateY(-50%);
 `,[C("base-icon",`
 transform: rotate(0);
 `)]),C("layout-toggle-bar",`
 left: -28px;
 transform: rotate(180deg);
 `,[N("&:hover",[w("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),w("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})])])]),j("collapsed",[C("layout-toggle-bar",[N("&:hover",[w("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),w("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])]),C("layout-toggle-button",[C("base-icon",`
 transform: rotate(0);
 `)])]),C("layout-toggle-button",`
 transition:
 color .3s var(--n-bezier),
 right .3s var(--n-bezier),
 left .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 cursor: pointer;
 width: 24px;
 height: 24px;
 position: absolute;
 top: 50%;
 right: 0;
 border-radius: 50%;
 display: flex;
 align-items: center;
 justify-content: center;
 font-size: 18px;
 color: var(--n-toggle-button-icon-color);
 border: var(--n-toggle-button-border);
 background-color: var(--n-toggle-button-color);
 box-shadow: 0 2px 4px 0px rgba(0, 0, 0, .06);
 transform: translateX(50%) translateY(-50%);
 z-index: 1;
 `,[C("base-icon",`
 transition: transform .3s var(--n-bezier);
 transform: rotate(180deg);
 `)]),C("layout-toggle-bar",`
 cursor: pointer;
 height: 72px;
 width: 32px;
 position: absolute;
 top: calc(50% - 36px);
 right: -28px;
 `,[w("top, bottom",`
 position: absolute;
 width: 4px;
 border-radius: 2px;
 height: 38px;
 left: 14px;
 transition: 
 background-color .3s var(--n-bezier),
 transform .3s var(--n-bezier);
 `),w("bottom",`
 position: absolute;
 top: 34px;
 `),N("&:hover",[w("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),w("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})]),w("top, bottom",{backgroundColor:"var(--n-toggle-bar-color)"}),N("&:hover",[w("top, bottom",{backgroundColor:"var(--n-toggle-bar-color-hover)"})])]),w("border",`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 width: 1px;
 transition: background-color .3s var(--n-bezier);
 `),C("layout-sider-scroll-container",`
 flex-grow: 1;
 flex-shrink: 0;
 box-sizing: border-box;
 height: 100%;
 opacity: 0;
 transition: opacity .3s var(--n-bezier);
 max-width: 100%;
 `),j("show-content",[C("layout-sider-scroll-container",{opacity:1})]),j("absolute-positioned",`
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 `)]),Zt=Z({props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return b("div",{onClick:this.onClick,class:`${e}-layout-toggle-bar`},b("div",{class:`${e}-layout-toggle-bar__top`}),b("div",{class:`${e}-layout-toggle-bar__bottom`}))}}),At=Z({name:"LayoutToggleButton",props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return b("div",{class:`${e}-layout-toggle-button`,onClick:this.onClick},b(je,{clsPrefix:e},{default:()=>b(Be,null)}))}}),zt={position:Ae,bordered:Boolean,collapsedWidth:{type:Number,default:48},width:{type:[Number,String],default:272},contentClass:String,contentStyle:{type:[String,Object],default:""},collapseMode:{type:String,default:"transform"},collapsed:{type:Boolean,default:void 0},defaultCollapsed:Boolean,showCollapsedContent:{type:Boolean,default:!0},showTrigger:{type:[Boolean,String],default:!1},nativeScrollbar:{type:Boolean,default:!0},inverted:Boolean,scrollbarProps:Object,triggerClass:String,triggerStyle:[String,Object],collapsedTriggerClass:String,collapsedTriggerStyle:[String,Object],"onUpdate:collapsed":[Function,Array],onUpdateCollapsed:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,onExpand:[Function,Array],onCollapse:[Function,Array],onScroll:Function},Et=Z({name:"LayoutSider",props:Object.assign(Object.assign({},z.props),zt),setup(e){const n=P(ze),o=O(null),l=O(null),a=O(e.defaultCollapsed),d=Re(G(e,"collapsed"),a),f=T(()=>F(d.value?e.collapsedWidth:e.width)),u=T(()=>e.collapseMode!=="transform"?{}:{minWidth:F(e.width)}),g=T(()=>n?n.siderPlacement:"left");function v(r,t){if(e.nativeScrollbar){const{value:i}=o;i&&(t===void 0?i.scrollTo(r):i.scrollTo(r,t))}else{const{value:i}=l;i&&i.scrollTo(r,t)}}function S(){const{"onUpdate:collapsed":r,onUpdateCollapsed:t,onExpand:i,onCollapse:I}=e,{value:W}=d;t&&M(t,!W),r&&M(r,!W),a.value=!W,W?i&&M(i):I&&M(I)}let p=0,L=0;const D=r=>{var t;const i=r.target;p=i.scrollLeft,L=i.scrollTop,(t=e.onScroll)===null||t===void 0||t.call(e,r)};Ne(()=>{if(e.nativeScrollbar){const r=o.value;r&&(r.scrollTop=L,r.scrollLeft=p)}}),fe(Ze,{collapsedRef:d,collapseModeRef:G(e,"collapseMode")});const{mergedClsPrefixRef:m,inlineThemeDisabled:h}=V(e),s=z("Layout","-layout-sider",Nt,Ee,e,m);function c(r){var t,i;r.propertyName==="max-width"&&(d.value?(t=e.onAfterLeave)===null||t===void 0||t.call(e):(i=e.onAfterEnter)===null||i===void 0||i.call(e))}const y={scrollTo:v},k=T(()=>{const{common:{cubicBezierEaseInOut:r},self:t}=s.value,{siderToggleButtonColor:i,siderToggleButtonBorder:I,siderToggleBarColor:W,siderToggleBarColorHover:E}=t,Y={"--n-bezier":r,"--n-toggle-button-color":i,"--n-toggle-button-border":I,"--n-toggle-bar-color":W,"--n-toggle-bar-color-hover":E};return e.inverted?(Y["--n-color"]=t.siderColorInverted,Y["--n-text-color"]=t.textColorInverted,Y["--n-border-color"]=t.siderBorderColorInverted,Y["--n-toggle-button-icon-color"]=t.siderToggleButtonIconColorInverted,Y.__invertScrollbar=t.__invertScrollbar):(Y["--n-color"]=t.siderColor,Y["--n-text-color"]=t.textColor,Y["--n-border-color"]=t.siderBorderColor,Y["--n-toggle-button-icon-color"]=t.siderToggleButtonIconColor),Y}),x=h?ge("layout-sider",T(()=>e.inverted?"a":"b"),k,e):void 0;return Object.assign({scrollableElRef:o,scrollbarInstRef:l,mergedClsPrefix:m,mergedTheme:s,styleMaxWidth:f,mergedCollapsed:d,scrollContainerStyle:u,siderPlacement:g,handleNativeElScroll:D,handleTransitionend:c,handleTriggerClick:S,inlineThemeDisabled:h,cssVars:k,themeClass:x==null?void 0:x.themeClass,onRender:x==null?void 0:x.onRender},y)},render(){var e;const{mergedClsPrefix:n,mergedCollapsed:o,showTrigger:l}=this;return(e=this.onRender)===null||e===void 0||e.call(this),b("aside",{class:[`${n}-layout-sider`,this.themeClass,`${n}-layout-sider--${this.position}-positioned`,`${n}-layout-sider--${this.siderPlacement}-placement`,this.bordered&&`${n}-layout-sider--bordered`,o&&`${n}-layout-sider--collapsed`,(!o||this.showCollapsedContent)&&`${n}-layout-sider--show-content`],onTransitionend:this.handleTransitionend,style:[this.inlineThemeDisabled?void 0:this.cssVars,{maxWidth:this.styleMaxWidth,width:F(this.width)}]},this.nativeScrollbar?b("div",{class:[`${n}-layout-sider-scroll-container`,this.contentClass],onScroll:this.handleNativeElScroll,style:[this.scrollContainerStyle,{overflow:"auto"},this.contentStyle],ref:"scrollableElRef"},this.$slots):b(ee,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",style:this.scrollContainerStyle,contentStyle:this.contentStyle,contentClass:this.contentClass,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,builtinThemeOverrides:this.inverted&&this.cssVars.__invertScrollbar==="true"?{colorHover:"rgba(255, 255, 255, .4)",color:"rgba(255, 255, 255, .3)"}:void 0}),this.$slots),l?l==="bar"?b(Zt,{clsPrefix:n,class:o?this.collapsedTriggerClass:this.triggerClass,style:o?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):b(At,{clsPrefix:n,class:o?this.collapsedTriggerClass:this.triggerClass,style:o?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):null,this.bordered?b("div",{class:`${n}-layout-sider__border`}):null)}}),Ht=Object.assign(Object.assign({},z.props),{trigger:String,xScrollable:Boolean,onScroll:Function,contentClass:String,contentStyle:[Object,String],size:Number,yPlacement:{type:String,default:"right"},xPlacement:{type:String,default:"bottom"}}),Mt=Z({name:"Scrollbar",props:Ht,setup(){const e=O(null);return Object.assign(Object.assign({},{scrollTo:(...o)=>{var l;(l=e.value)===null||l===void 0||l.scrollTo(o[0],o[1])},scrollBy:(...o)=>{var l;(l=e.value)===null||l===void 0||l.scrollBy(o[0],o[1])}}),{scrollbarInstRef:e})},render(){return b(ee,Object.assign({ref:"scrollbarInstRef"},this.$props),this.$slots)}}),Kt={key:0,class:"doc"},qt={class:"doc-detail"},Gt={__name:"DocView",props:{isLoading:{default:!0},minHeight:{default:700}},setup(e,{expose:n}){const o=Je(),l=e,a=O("GMCY2020"),d=O(),f=r=>{a.value!="GMCY2020"&&(r+="?owner="+a.value),o.push(r)},u=Me(),g=Ke(),v=O({});X(async()=>{v.value["readme-zh"]=await k(new URL("data:text/markdown;base64,IyDllYrmmK/nibnll7fmoYMNCg0KIyMgMS4g572R56uZ5L+h5oGvDQoNCi0g56uZ5ZCNOiDllYrmmK/nibnll7fmoYMNCi0g5L2c6ICFOiBg5ZWK5piv54m55Ze35qGDYA0KLSDliJvlu7rml7bpl7Q6IDIwMjUvMDIvMDMNCg0KIyMgMi4g572R56uZ5LuL57uNDQoNCi0g5ZWK5piv54m55Ze35qGDIOaYryBg5ZWK5piv54m55Ze35qGDYCDnmoQg5Liq5Lq6572R56uZDQotIOaUr+aMgSDpnZ4g5oiRIOeahCBnaXRodWIg55qEIOeUqOaItyDkvb/nlKgNCi0g6Z2eIOaIkSDnmoQgZ2l0aHViIOeahCDnlKjmiLcg5Y+v5LulIOWujOWujOWFqOWFqCBg6Zu25Luj56CBYCDmnInoh6rlt7HnmoTkuKrkurrnvZHnq5kNCg0KLSDnvZHnq5nlhoXlrrnmnaXmupA6IOmAmui/hyBgZ2l0aHViYCDnmoQgYGFwaWAg6I635Y+WIOeUqOaItyDnmoQg5YWs5byA5L+h5oGv44CB6aG555uu5ZKMIHJlYWRtZSDnrYkNCi0g5Li76KaB5pi+56S6IOeUqOaItyDln7rmnKzkv6Hmga8g5ZKMIOeUqOaIt+mhueebrueahCByZWFkbWUNCi0g5pSv5oyBIGDkuK3oi7HmlofliIfmjaJgIGDpu5Hnmb3kuLvpopjliIfmjaJgIGDlk43lupTlvI/luIPlsYBgDQoNCiMjIDMuIOS9v+eUqOivtOaYjg0KDQotIOWJjeaPkDog5pyJIEdpdEh1YiDotKblj7csIOi0puWPt+S4iuaciSDpobnnm64sIOmhueebruWkp+WkmuaciSByZWFkbWUNCg0KLSDpgJrov4forr/pl64g572R5Z2AIFtodHRwczovL2dtY3kyMDIwLmdpdGh1Yi5pby9dKGh0dHBzOi8vZ21jeTIwMjAuZ2l0aHViLmlvLykNCg0KLSDlkI7pnaLmt7vliqAgYD9vd25lcj1b5L2g55qER2l0SHVi55m75b2V5ZCN56ewXWAg5Y2z5Y+vDQoNCi0g5L6L5aaCIFtodHRwczovL2dtY3kyMDIwLmdpdGh1Yi5pby8/b3duZXI9dnVlanNdKGh0dHBzOi8vZ21jeTIwMjAuZ2l0aHViLmlvLz9vd25lcj12dWVqcykNCg0KIyMgNC4g6K+m57uG55qE5L2/55So6K+05piODQoNCi0g5Li76aG1OiDmmL7npLogR2l0SHViIOS4iiDnmoQgYGF2YXRhcmAgYG5hbWVgIGBiaW9gICjmjaLooYzliJnmmL7npLrkuKTooYzlhoXlrrkpDQotIOS4u+mhtTog5pi+56S655qEIHJlYWRtZSDkuI4gR2l0SHViIOmmlumhteaYvuekuueahCByZWFkbWUg5LiA6Ie0DQotIOS4u+mhtTogYEdpdEh1YmAg6Lez6L2s5Yiw5a+55bqU55So5oi355qEIEdpdEh1YiDpobXpnaINCi0g5Li76aG1OiBgR2l0SHViQmxvZ2Ag6Lez6L2s5Yiw5a+55bqU55So5oi355qEIEdpdEh1Yi5pbyDpobXpnaIgKGJsb2cg5Li656m65YiZ6Lez6L2s5YiwIDQwNCkNCi0g5Li76aG1OiBg5YiG5LqrYCDmjInpkq4g54K55Ye7IOeUn+aIkOS4gOS4qiBbaHR0cHM6Ly9nbWN5MjAyMC5naXRodWIuaW8vXShodHRwczovL2dtY3kyMDIwLmdpdGh1Yi5pby8pICsgYG93bmVyPVvkvaDnmoRHaXRIdWLnmbvlvZXlkI3np7BdYCDnmoQg5LqM57u056CB5Zu+54mHLCDlj7PplK7lj6/kv53lrZgsIOaJi+acuuaJq+aPj+iHquWKqOi3s+i9rOWIsOWvueW6lCBpbyDpobXpnaINCg0KLSDmlofmoaM6IOaYvuekuiDpobnnm64g5a+55bqUIHJlYWRtZQ0KLSDmlofmoaM6IOS5n+aUr+aMgSDluKblj4LmlbAg55qE6ZO+5o6lIOebtOaOpeWIsOi+vg0KLSDmlofmoaM6IFtodHRwczovL2dtY3kyMDIwLmdpdGh1Yi5pby9kb2MvP3JlcG89Z21jeTIwMjAuZ2l0aHViLmlvXShodHRwczovL2dtY3kyMDIwLmdpdGh1Yi5pby9kb2MvP3JlcG89Z21jeTIwMjAuZ2l0aHViLmlvKQ0KDQojIyA1LiDms6gNCg0KIyMjIDUuMSDmmL7npLrnmoQgcmVhZG1lIOivtOaYjg0KDQotIOWboOS4uiBHaXRIdWIg572R57uc5bu25pe2LCDmnInkupvlm77niYflj6/og73liqDovb3kuI3lh7rmnaUsIOW8gOWKoOmAn+WZqOS4gOiIrOayoemXrumimA0KLSDlm77niYfpk77mjqUg55uu5YmNIOWPqiDmm7/mjaIgYCFbXSgpYCDlkowgYDxpbWcgc3JjPSIiIC8+YCDnmoQg6Z2eIOWujOaVtOmTvuaOpQ0KLSDmm7/mjaLkuLogR2l0SHViIHJhdyDpk77mjqUgYGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9bb3duZXJdL1tyZXBvXS9tYXN0ZXIvYA0KDQojIyMgNS4yIOacrOe9keermeaJgOS9v+eUqOeahOiOt+WPliBnaXRodWIg5YWs5byA5pWw5o2uIOeahCBhcGkNCg0KLSDojrflj5YgdXNlcjogaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy9bb3duZXJdDQotIOiOt+WPluS7k+W6kzogaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy9bb3duZXJdL3JlcG9zDQotIOiOt+WPliByZWFkbWU6IGh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vcmVwb3MvW293bmVyXS9bcmVwb10vcmVhZG1lDQotIOiOt+WPliDlm77niYc6IGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9bb3duZXJdL1tyZXBvXS9tYXN0ZXIvW2RldGFpbFBhdGhdDQoNCiMjIyDirZAgNS4zIEdpdEh1YiBhcGkg6ZmQ5Yi2IOivtOaYjg0KDQotIOato+W4uOacque7j+i6q+S7vemqjOivgSAtIOavj+S4quWOn+WniyBJUCDlnLDlnYDmr4/lsI/ml7Y2MOS4quivt+axgg0KLSDlt7Lpqozor4EgLSDmr4/kuKrnlKjmiLfmr4/lsI/ml7blj6/lj5HpgIEgNSwwMDAg5Liq6K+35rGCDQotIOacrOe9keermSDmmK8gYOato+W4uOacque7j+i6q+S7vemqjOivgWANCi0g5omA5LulIOe9keermeiuv+mXriBHaXRIdWIg55So5oi3KD9vd25lcj1b5L2g55qER2l0SHVi55m75b2V5ZCN56ewXSksIOS8mue8k+WtmCDnlKjmiLflr7nlupQgYHVzZXJgIGByZXBvc2AgYOWvueW6lCByZXBvIOeahCByZWFkbWVgIOWIsOacrOWcsCDku6UgYOWHj+Wwkeiwg+eUqOasoeaVsGANCi0g5a+55bqUIHJlcG8g55qEIHJlYWRtZSDlpoLmnpzkuI3lrZjlnKgg5bCx5Lya6Lez6L+H5bm25o+Q56S6DQotIOeUqOaIt+e8k+WtmOWGheWuuei2hei/hyAx5bCP5pe25ZCOIOWGjeasoeiuv+mXruS8muWIt+aWsA0KLSDliqDovb3miJbliLfmlrDmlbDmja7mnKrlrozmiJDml7YsIOWwvemHj+WLv+WKqOmhtemdoiwg6YG/5YWN5Yqg6L295aSx6LSlICjljZXnur/nqIssIOmhtemdouWPmOWMluWwseaWreS6hiwg5oiR5Yiw5pe255yL55yL5aSa57q/56iL5bqU6K+l5bCx5Y+v5Lul6Kej5YazKQ0KLSBg5aaC5p6c6LaF6ZmQ5Yi2IC0+IOWGheWuueacquaYvuekuiwg5pi+56S65LiN5YWoLCDlgZzlnKggJ+WKoOi9veS4rSwg6K+35Yu/5pON5L2cJywg5pi+56S65rKh5pyJ6L+Z5Liq55So5oi3IC0+IOWImeivtyAx5bCP5pe25ZCO5YaN6K6/6ZeuYA0KLSBg5Zu+54mHYCDlkowgYOWktOWDj2Ag5Lmf5pivDQotIOWPr+mAmui/hyBg5riF6Zmk57yT5a2YYCDmjInpkq4g5riF56m657yT5a2YIOW5tumHjeaWsOWKoOi9vSAo5aaC5p6c6L+Y5LiN6KGMLCDor7fliLfmlrDpobXpnaLlkI7pmpTlh6Dnp5Llho3mjInkuIDmrKEpDQoNCiMjIyDirZAgNS40IOWjsOaYjg0KDQotIOWXr34gbyhf77+j4pa977+jXylvLCDkv53pmanov5jmmK/lo7DmmI7kuIDkuIt+DQotIOacrOe9keermSDkuLvopoEg5pivIGDllYrmmK/nibnll7fmoYNgIOeahCDkuKrkurog572R56uZDQotIOS7peWxleekuiBg5ZWK5piv54m55Ze35qGDYCDkuKrkurrlhoXlrrkg5Li65Li7DQotIOmdniDmiJEg55qEIGdpdGh1YiDnmoQg55So5oi3IOS9v+eUqOaXtiwg5omA5pyJ55qE5pWw5o2u5p2l6IeqIEdpdEh1YiDnmoQg5YWs5byA5pWw5o2uLCDlj6og57yT5a2YIOWcqCDmtY/op4jlmajmnKzlnLAuDQotIOWPr+mAmui/hyBg5riF6Zmk57yT5a2YYCDmuIXnqbog5Zyo5rWP6KeI5Zmo55qE5pys5Zyw57yT5a2YDQotIOmdniDmiJEg55qEIGdpdGh1YiDnmoQg55So5oi3IOS9v+eUqOaXtiwg5aaC6Iul6YCg5oiQIOaNn+WksSwg5bey57uP5aOw5piOLCDnlKjmiLfoh6rooYzotJ/otKMNCi0g5bqU6K+l5LiN6Iez5LqO5ZCnfiDpg73mmK8gR2l0SHViIOeahCDlhazlvIDmlbDmja5+DQo=",import.meta.url).href),v.value["readme-en"]=await k(new URL("/assets/readme-en-DHQb7uDI.md",import.meta.url).href)});const S=O(),p=O([{type:"group",label:"啊是特嗷桃",key:"tao",children:[{label:()=>b("div",{onclick:()=>{f("/doc")}},H.global.t("bar.explain")),key:"explain"}]}]),L=O([{}]),D=r=>{L.value=r},m=r=>{r=r.replace(/[\\-_]/g,"+").replace(/[^A-Za-z0-9+/=]/g,"");const t=atob(r),i=t.length,I=new Uint8Array(i);for(let Y=0;Y<i;Y++)I[Y]=t.charCodeAt(Y);return new TextDecoder("utf-8").decode(I)},h=r=>{a.value=r.owner,d.value=r,p.value=[{type:"group",label:"啊是特嗷桃",key:"tao",children:[{label:()=>b("div",{onclick:()=>{f("/doc")}},H.global.t("bar.explain")),key:"explain"}]}],r.owner!="GMCY2020"&&p.value.push({type:"group",label:r.owner,key:r.owner,children:[]});for(let t in g.caches[r.owner].repos){let i={label:()=>b("div",{onclick:()=>{let I=`/doc/?repo=${g.caches[r.owner].repos[t].name}`;r.owner!="GMCY2020"&&(I+=`&owner=${r.owner}`),o.push(I)},style:{padding:"6.6px 0px"}},g.caches[r.owner].repos[t].name),key:g.caches[r.owner].repos[t].name};r.owner=="GMCY2020"?p.value[0].children.push(i):p.value[1].children.push(i)}if("repo"in r){let t=H.global.t("readmeNone");r.repo in g.caches[r.owner].readmes&&(t=m(g.caches[r.owner].readmes[r.repo].content));let i=`https://raw.githubusercontent.com/${r.owner}/${r.repo}/master/`;t=s(i,t),S.value=t}else S.value=v.value[H.global.t("readme")];x.value&&location.hash==""&&x.value.scrollTo({top:0})},s=(r,t)=>(t=c(r,t),t=y(r,t),t),c=(r,t)=>t.replace(/!\[([^\]]*)\]\(\s*((?!https?:\/\/).*?)\s*\)/g,(i,I,W)=>`![${I}](${r}${W.trim()})`),y=(r,t)=>t.replace(/(<img[^>]*?src=["'])(?!https?:\/\/)([^"']+)(["'][^>]*>)/gi,`$1${r}$2$3`),k=async r=>await(await fetch(r)).text();$(()=>u.locale,()=>{"repo"in d.value||(S.value=v.value[H.global.t("readme")]),(S.value=="空空如也~"||S.value=="Empty ~~")&&(S.value=H.global.t("readmeNone"))}),n({initData:h});const x=O();return(r,t)=>l.isLoading?(U(),ie("div",Kt,[R(B(Rt),{vertical:"",size:"large"},{default:A(()=>[R(B(Ge),{"has-sider":"",style:ae("height:"+l.minHeight+"px;")},{default:A(()=>[R(B(Et),{class:"leftMenu",bordered:"","collapsed-width":0,width:272,"show-trigger":""},{default:A(()=>[R(B(Pe),{options:p.value},null,8,["options"])]),_:1}),R(B(Mt),{ref_key:"scroll",ref:x,style:ae("max-height:"+l.minHeight+"px;"),class:"con"},{default:A(()=>[R(B($e),{cols:"10","item-responsive":""},{default:A(()=>[R(B(se),{span:"10 600:8"},{default:A(()=>[_e("div",qt,[R(B(Xe),{id:"md",modelValue:S.value,"onUpdate:modelValue":t[0]||(t[0]=i=>S.value=i),theme:B(u).theme==null?"light":"dark",style:{"background-color":"rgba(0, 0, 0, 0)"},onOnGetCatalog:D},null,8,["modelValue","theme"])]),R(Ve)]),_:1}),R(B(se),{span:"0 600:2",class:"box"},{default:A(()=>[R(B(Wt),{"show-rail":!1,"show-background":!1,style:{position:"sticky",top:"30px"}},{default:A(()=>[(U(!0),ie(Fe,null,Ue(L.value,(i,I)=>(U(),Qe(B(St),{key:I,style:{"white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis",width:"100%"},title:i.text,href:"#"+i.text},null,8,["title","href"]))),128))]),_:1})]),_:1})]),_:1})]),_:1},8,["style"])]),_:1},8,["style"])]),_:1})])):qe("",!0)}},$t=He(Gt,[["__scopeId","data-v-67b6317c"]]);export{$t as default};
