import{s as F,n as D,r as G}from"../chunks/scheduler.BvLojk_z.js";import{S as J,i as K,e as b,s as y,m as X,c as v,n as R,h as j,o as C,j as m,p as q,q as L,g as u,r as Q,b as P,d as E,f as S,k,l as U,u as V}from"../chunks/index.hIJ0IEWM.js";function N(i){return(i==null?void 0:i.length)!==void 0?i:Array.from(i)}function z(i,n,a){const t=i.slice();return t[7]=n[a],t[9]=a,t}function I(i,n,a){const t=i.slice();return t[10]=n[a],t[11]=n,t[12]=a,t}function W(i){let n,a,t,e="<th>Nyert:</th>",s,l,f,o,d,g,_,c,p="Új játék",w,A;return{c(){n=b("div"),a=b("table"),t=b("tr"),t.innerHTML=e,s=y(),l=b("tr"),f=b("td"),o=P(i[2]),d=y(),g=b("hr"),_=y(),c=b("button"),c.textContent=p,this.h()},l(r){n=v(r,"DIV",{});var h=E(n);a=v(h,"TABLE",{});var T=E(a);t=v(T,"TR",{"data-svelte-h":!0}),R(t)!=="svelte-14sokgz"&&(t.innerHTML=e),s=j(T),l=v(T,"TR",{});var H=E(l);f=v(H,"TD",{class:!0});var B=E(f);o=S(B,i[2]),B.forEach(u),H.forEach(u),T.forEach(u),h.forEach(u),d=j(r),g=v(r,"HR",{}),_=j(r),c=v(r,"BUTTON",{"data-svelte-h":!0}),R(c)!=="svelte-u8d50n"&&(c.textContent=p),this.h()},h(){C(f,"class",i[2])},m(r,h){m(r,n,h),k(n,a),k(a,t),k(a,s),k(a,l),k(l,f),k(f,o),m(r,d,h),m(r,g,h),m(r,_,h),m(r,c,h),w||(A=L(c,"click",i[6]),w=!0)},p(r,h){h&4&&U(o,r[2]),h&4&&C(f,"class",r[2])},d(r){r&&(u(n),u(d),u(g),u(_),u(c)),w=!1,A()}}}function Y(i){let n,a=N(i[3]),t=[];for(let e=0;e<a.length;e+=1)t[e]=O(z(i,a,e));return{c(){n=b("table");for(let e=0;e<t.length;e+=1)t[e].c()},l(e){n=v(e,"TABLE",{});var s=E(n);for(let l=0;l<t.length;l+=1)t[l].l(s);s.forEach(u)},m(e,s){m(e,n,s);for(let l=0;l<t.length;l+=1)t[l]&&t[l].m(n,null)},p(e,s){if(s&14){a=N(e[3]);let l;for(l=0;l<a.length;l+=1){const f=z(e,a,l);t[l]?t[l].p(f,s):(t[l]=O(f),t[l].c(),t[l].m(n,null))}for(;l<t.length;l+=1)t[l].d(1);t.length=a.length}},d(e){e&&u(n),V(t,e)}}}function M(i){let n,a=i[10]+"",t,e,s,l;function f(){return i[5](i[10],i[11],i[12],i[9])}return{c(){n=b("td"),t=P(a),this.h()},l(o){n=v(o,"TD",{class:!0});var d=E(n);t=S(d,a),d.forEach(u),this.h()},h(){C(n,"class",e=i[10])},m(o,d){m(o,n,d),k(n,t),s||(l=L(n,"click",f),s=!0)},p(o,d){i=o,d&8&&a!==(a=i[10]+"")&&U(t,a),d&8&&e!==(e=i[10])&&C(n,"class",e)},d(o){o&&u(n),s=!1,l()}}}function O(i){let n,a,t=N(i[7]),e=[];for(let s=0;s<t.length;s+=1)e[s]=M(I(i,t,s));return{c(){n=b("tr");for(let s=0;s<e.length;s+=1)e[s].c();a=y()},l(s){n=v(s,"TR",{});var l=E(n);for(let f=0;f<e.length;f+=1)e[f].l(l);a=j(l),l.forEach(u)},m(s,l){m(s,n,l);for(let f=0;f<e.length;f+=1)e[f]&&e[f].m(n,null);k(n,a)},p(s,l){if(l&14){t=N(s[7]);let f;for(f=0;f<t.length;f+=1){const o=I(s,t,f);e[f]?e[f].p(o,l):(e[f]=M(o),e[f].c(),e[f].m(n,a))}for(;f<e.length;f+=1)e[f].d(1);e.length=t.length}},d(s){s&&u(n),V(e,s)}}}function Z(i){let n,a="Amőba",t,e,s,l,f,o;function d(c,p){return c[1]?W:Y}let g=d(i),_=g(i);return{c(){n=b("h1"),n.textContent=a,t=y(),e=b("input"),s=y(),_.c(),l=X(),this.h()},l(c){n=v(c,"H1",{"data-svelte-h":!0}),R(n)!=="svelte-fxdwj2"&&(n.textContent=a),t=j(c),e=v(c,"INPUT",{type:!0,min:!0,max:!0}),s=j(c),_.l(c),l=X(),this.h()},h(){C(e,"type","range"),C(e,"min","5"),C(e,"max","15")},m(c,p){m(c,n,p),m(c,t,p),m(c,e,p),q(e,i[0]),m(c,s,p),_.m(c,p),m(c,l,p),f||(o=[L(e,"change",i[4]),L(e,"input",i[4])],f=!0)},p(c,[p]){p&1&&q(e,c[0]),g===(g=d(c))&&_?_.p(c,p):(_.d(1),_=g(c),_&&(_.c(),_.m(l.parentNode,l)))},i:D,o:D,d(c){c&&(u(n),u(t),u(e),u(s),u(l)),_.d(c),f=!1,G(o)}}}function x(i,n,a){let t;var e=12,s=!1,l="X";function f(){e=Q(this.value),a(0,e)}const o=(g,_,c,p)=>{a(3,_[c]=a(2,l=l=="X"?"O":"X"),t),[[1,0],[0,1],[1,1],[1,-1]].forEach(w=>{var A=0,r=c,h=p,[T,H]=w;do A++,r+=T,h+=H;while(t[h]&&t[h][r]==l);r=c,h=p;do A++,r-=T,h-=H;while(t[h]&&t[h][r]==l);A>5&&a(1,s=!0)})},d=()=>a(1,s=!1);return i.$$.update=()=>{i.$$.dirty&3&&a(3,t=!s&&Array(e).fill().map(()=>Array(e).fill().map(()=>" ")))},[e,s,l,t,f,o,d]}class te extends J{constructor(n){super(),K(this,n,x,Z,F,{})}}export{te as component};
