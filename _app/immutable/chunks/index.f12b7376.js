function w(){}function G(t,e){for(const n in e)t[n]=e[n];return t}function k(t){return t()}function T(){return Object.create(null)}function y(t){t.forEach(k)}function q(t){return typeof t=="function"}function lt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let x;function ut(t,e){return x||(x=document.createElement("a")),x.href=e,t===x.href}function I(t){return Object.keys(t).length===0}function J(t,...e){if(t==null)return w;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function ot(t,e,n){t.$$.on_destroy.push(J(e,n))}function st(t,e,n,i){if(t){const r=B(t,e,n,i);return t[0](r)}}function B(t,e,n,i){return t[1]&&i?G(n.ctx.slice(),t[1](i(e))):n.ctx}function ft(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const s=[],c=Math.max(e.dirty.length,r.length);for(let o=0;o<c;o+=1)s[o]=e.dirty[o]|r[o];return s}return e.dirty|r}return e.dirty}function at(t,e,n,i,r,s){if(r){const c=B(e,n,i,s);t.p(c,r)}}function _t(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}let E=!1;function K(){E=!0}function L(){E=!1}function R(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function W(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let u=0;u<e.length;u++){const a=e[u];a.claim_order!==void 0&&l.push(a)}e=l}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let l=0;l<e.length;l++){const u=e[l].claim_order,a=(r>0&&e[n[r]].claim_order<=u?r+1:R(1,r,g=>e[n[g]].claim_order,u))-1;i[l]=n[a]+1;const f=a+1;n[f]=l,r=Math.max(f,r)}const s=[],c=[];let o=e.length-1;for(let l=n[r]+1;l!=0;l=i[l-1]){for(s.push(e[l-1]);o>=l;o--)c.push(e[o]);o--}for(;o>=0;o--)c.push(e[o]);s.reverse(),c.sort((l,u)=>l.claim_order-u.claim_order);for(let l=0,u=0;l<c.length;l++){for(;u<s.length&&c[l].claim_order>=s[u].claim_order;)u++;const a=u<s.length?s[u]:null;t.insertBefore(c[l],a)}}function Q(t,e){if(E){for(W(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function dt(t,e,n){E&&!n?Q(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function U(t){t.parentNode&&t.parentNode.removeChild(t)}function V(t){return document.createElement(t)}function S(t){return document.createTextNode(t)}function ht(){return S(" ")}function mt(){return S("")}function pt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function X(t){return Array.from(t.childNodes)}function Y(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function H(t,e,n,i,r=!1){Y(t);const s=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const o=t[c];if(e(o)){const l=n(o);return l===void 0?t.splice(c,1):t[c]=l,r||(t.claim_info.last_index=c),o}}for(let c=t.claim_info.last_index-1;c>=0;c--){const o=t[c];if(e(o)){const l=n(o);return l===void 0?t.splice(c,1):t[c]=l,r?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,o}}return i()})();return s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,s}function Z(t,e,n,i){return H(t,r=>r.nodeName===e,r=>{const s=[];for(let c=0;c<r.attributes.length;c++){const o=r.attributes[c];n[o.name]||s.push(o.name)}s.forEach(c=>r.removeAttribute(c))},()=>i(e))}function yt(t,e,n){return Z(t,e,n,V)}function tt(t,e){return H(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>S(e),!0)}function gt(t){return tt(t," ")}function xt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function bt(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function $t(t,e){const n=[];let i=0;for(const r of e.childNodes)if(r.nodeType===8){const s=r.textContent.trim();s===`HEAD_${t}_END`?(i-=1,n.push(r)):s===`HEAD_${t}_START`&&(i+=1,n.push(r))}else i>0&&n.push(r);return n}function wt(t,e){return new t(e)}let p;function m(t){p=t}function O(){if(!p)throw new Error("Function called outside component initialization");return p}function Et(t){O().$$.on_mount.push(t)}function Nt(t){O().$$.after_update.push(t)}const h=[],D=[],b=[],M=[],P=Promise.resolve();let A=!1;function z(){A||(A=!0,P.then(F))}function At(){return z(),P}function v(t){b.push(t)}const N=new Set;let d=0;function F(){if(d!==0)return;const t=p;do{try{for(;d<h.length;){const e=h[d];d++,m(e),et(e.$$)}}catch(e){throw h.length=0,d=0,e}for(m(null),h.length=0,d=0;D.length;)D.pop()();for(let e=0;e<b.length;e+=1){const n=b[e];N.has(n)||(N.add(n),n())}b.length=0}while(h.length);for(;M.length;)M.pop()();A=!1,N.clear(),m(t)}function et(t){if(t.fragment!==null){t.update(),y(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(v)}}const $=new Set;let _;function vt(){_={r:0,c:[],p:_}}function St(){_.r||y(_.c),_=_.p}function nt(t,e){t&&t.i&&($.delete(t),t.i(e))}function jt(t,e,n,i){if(t&&t.o){if($.has(t))return;$.add(t),_.c.push(()=>{$.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function Ct(t){t&&t.c()}function Tt(t,e){t&&t.l(e)}function it(t,e,n,i){const{fragment:r,after_update:s}=t.$$;r&&r.m(e,n),i||v(()=>{const c=t.$$.on_mount.map(k).filter(q);t.$$.on_destroy?t.$$.on_destroy.push(...c):y(c),t.$$.on_mount=[]}),s.forEach(v)}function rt(t,e){const n=t.$$;n.fragment!==null&&(y(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ct(t,e){t.$$.dirty[0]===-1&&(h.push(t),z(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Dt(t,e,n,i,r,s,c,o=[-1]){const l=p;m(t);const u=t.$$={fragment:null,ctx:[],props:s,update:w,not_equal:r,bound:T(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:T(),dirty:o,skip_bound:!1,root:e.target||l.$$.root};c&&c(u.root);let a=!1;if(u.ctx=n?n(t,e.props||{},(f,g,...j)=>{const C=j.length?j[0]:g;return u.ctx&&r(u.ctx[f],u.ctx[f]=C)&&(!u.skip_bound&&u.bound[f]&&u.bound[f](C),a&&ct(t,f)),g}):[],u.update(),a=!0,y(u.before_update),u.fragment=i?i(u.ctx):!1,e.target){if(e.hydrate){K();const f=X(e.target);u.fragment&&u.fragment.l(f),f.forEach(U)}else u.fragment&&u.fragment.c();e.intro&&nt(t.$$.fragment),it(t,e.target,e.anchor,e.customElement),L(),F()}m(l)}class Mt{$destroy(){rt(this,1),this.$destroy=w}$on(e,n){if(!q(n))return w;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!I(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{it as A,rt as B,Q as C,w as D,ot as E,st as F,ut as G,at as H,_t as I,ft as J,$t as K,Mt as S,ht as a,dt as b,gt as c,jt as d,mt as e,St as f,nt as g,U as h,Dt as i,Nt as j,V as k,yt as l,X as m,pt as n,Et as o,bt as p,S as q,tt as r,lt as s,At as t,xt as u,vt as v,D as w,wt as x,Ct as y,Tt as z};
