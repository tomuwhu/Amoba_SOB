import{s as F,n as X,r as G}from"../chunks/scheduler.BvLojk_z.js";import{S as J,i as Q,e as b,s as L,m as I,c as T,n as y,h as R,o as j,j as k,p as O,q as B,g as o,r as W,b as N,d as H,f as q,k as C,l as z,u as V}from"../chunks/index.hIJ0IEWM.js";function D(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function P(n,t,f){const a=n.slice();return a[8]=t[f],a[10]=f,a}function S(n,t,f){const a=n.slice();return a[11]=t[f],a[12]=t,a[13]=f,a}function Y(n){let t,f,a,l="<th>Nyert:</th>",i,r,s,_,m,E,p,h,d="Új játék",g,v;return{c(){t=b("div"),f=b("table"),a=b("tr"),a.innerHTML=l,i=L(),r=b("tr"),s=b("td"),_=N(n[2]),m=L(),E=b("hr"),p=L(),h=b("button"),h.textContent=d,this.h()},l(e){t=T(e,"DIV",{});var u=H(t);f=T(u,"TABLE",{});var c=H(f);a=T(c,"TR",{"data-svelte-h":!0}),y(a)!=="svelte-14sokgz"&&(a.innerHTML=l),i=R(c),r=T(c,"TR",{});var A=H(r);s=T(A,"TD",{class:!0});var w=H(s);_=q(w,n[2]),w.forEach(o),A.forEach(o),c.forEach(o),u.forEach(o),m=R(e),E=T(e,"HR",{}),p=R(e),h=T(e,"BUTTON",{"data-svelte-h":!0}),y(h)!=="svelte-u8d50n"&&(h.textContent=d),this.h()},h(){j(s,"class",n[2])},m(e,u){k(e,t,u),C(t,f),C(f,a),C(f,i),C(f,r),C(r,s),C(s,_),k(e,m,u),k(e,E,u),k(e,p,u),k(e,h,u),g||(v=B(h,"click",n[7]),g=!0)},p(e,u){u&4&&z(_,e[2]),u&4&&j(s,"class",e[2])},d(e){e&&(o(t),o(m),o(E),o(p),o(h)),g=!1,v()}}}function Z(n){let t,f,a="<th>Következik:</th>",l,i,r,s=n[4](n[2])+"",_,m,E,p,h,d,g=D(n[3]),v=[];for(let e=0;e<g.length;e+=1)v[e]=K(P(n,g,e));return{c(){t=b("table"),f=b("tr"),f.innerHTML=a,l=L(),i=b("tr"),r=b("td"),_=N(s),E=L(),p=b("hr"),h=L(),d=b("table");for(let e=0;e<v.length;e+=1)v[e].c();this.h()},l(e){t=T(e,"TABLE",{});var u=H(t);f=T(u,"TR",{"data-svelte-h":!0}),y(f)!=="svelte-1qcdpy5"&&(f.innerHTML=a),l=R(u),i=T(u,"TR",{});var c=H(i);r=T(c,"TD",{class:!0});var A=H(r);_=q(A,s),A.forEach(o),c.forEach(o),u.forEach(o),E=R(e),p=T(e,"HR",{}),h=R(e),d=T(e,"TABLE",{});var w=H(d);for(let M=0;M<v.length;M+=1)v[M].l(w);w.forEach(o),this.h()},h(){j(r,"class",m=n[4](n[2]))},m(e,u){k(e,t,u),C(t,f),C(t,l),C(t,i),C(i,r),C(r,_),k(e,E,u),k(e,p,u),k(e,h,u),k(e,d,u);for(let c=0;c<v.length;c+=1)v[c]&&v[c].m(d,null)},p(e,u){if(u&4&&s!==(s=e[4](e[2])+"")&&z(_,s),u&4&&m!==(m=e[4](e[2]))&&j(r,"class",m),u&30){g=D(e[3]);let c;for(c=0;c<g.length;c+=1){const A=P(e,g,c);v[c]?v[c].p(A,u):(v[c]=K(A),v[c].c(),v[c].m(d,null))}for(;c<v.length;c+=1)v[c].d(1);v.length=g.length}},d(e){e&&(o(t),o(E),o(p),o(h),o(d)),V(v,e)}}}function U(n){let t,f=n[11]+"",a,l,i,r;function s(){return n[6](n[11],n[12],n[13],n[10])}return{c(){t=b("td"),a=N(f),this.h()},l(_){t=T(_,"TD",{class:!0});var m=H(t);a=q(m,f),m.forEach(o),this.h()},h(){j(t,"class",l=n[11])},m(_,m){k(_,t,m),C(t,a),i||(r=B(t,"click",s),i=!0)},p(_,m){n=_,m&8&&f!==(f=n[11]+"")&&z(a,f),m&8&&l!==(l=n[11])&&j(t,"class",l)},d(_){_&&o(t),i=!1,r()}}}function K(n){let t,f,a=D(n[8]),l=[];for(let i=0;i<a.length;i+=1)l[i]=U(S(n,a,i));return{c(){t=b("tr");for(let i=0;i<l.length;i+=1)l[i].c();f=L()},l(i){t=T(i,"TR",{});var r=H(t);for(let s=0;s<l.length;s+=1)l[s].l(r);f=R(r),r.forEach(o)},m(i,r){k(i,t,r);for(let s=0;s<l.length;s+=1)l[s]&&l[s].m(t,null);C(t,f)},p(i,r){if(r&30){a=D(i[8]);let s;for(s=0;s<a.length;s+=1){const _=S(i,a,s);l[s]?l[s].p(_,r):(l[s]=U(_),l[s].c(),l[s].m(t,f))}for(;s<l.length;s+=1)l[s].d(1);l.length=a.length}},d(i){i&&o(t),V(l,i)}}}function $(n){let t,f="Amőba",a,l,i,r,s,_;function m(h,d){return h[1]?Y:Z}let E=m(n),p=E(n);return{c(){t=b("h1"),t.textContent=f,a=L(),l=b("input"),i=L(),p.c(),r=I(),this.h()},l(h){t=T(h,"H1",{"data-svelte-h":!0}),y(t)!=="svelte-fxdwj2"&&(t.textContent=f),a=R(h),l=T(h,"INPUT",{type:!0,min:!0,max:!0}),i=R(h),p.l(h),r=I(),this.h()},h(){j(l,"type","range"),j(l,"min","5"),j(l,"max","15")},m(h,d){k(h,t,d),k(h,a,d),k(h,l,d),O(l,n[0]),k(h,i,d),p.m(h,d),k(h,r,d),s||(_=[B(l,"change",n[5]),B(l,"input",n[5])],s=!0)},p(h,[d]){d&1&&O(l,h[0]),E===(E=m(h))&&p?p.p(h,d):(p.d(1),p=E(h),p&&(p.c(),p.m(r.parentNode,r)))},i:X,o:X,d(h){h&&(o(t),o(a),o(l),o(i),o(r)),p.d(h),s=!1,G(_)}}}function x(n,t,f){let a;var l=12,i=!1,r="X";const s=p=>p=="X"?"O":"X";function _(){l=W(this.value),f(0,l)}const m=(p,h,d,g)=>{f(3,h[d]=f(2,r=s(r)),a),[[1,0],[0,1],[1,1],[1,-1]].forEach(v=>{var e=0,u=d,c=g,[A,w]=v;do e++,u+=A,c+=w;while(a[c]&&a[c][u]==r);u=d,c=g;do e++,u-=A,c-=w;while(a[c]&&a[c][u]==r);e>5&&f(1,i=!0)})},E=()=>f(1,i=!1);return n.$$.update=()=>{n.$$.dirty&3&&f(3,a=!i&&Array(l).fill().map(()=>Array(l).fill().map(()=>" ")))},[l,i,r,a,s,_,m,E]}class le extends J{constructor(t){super(),Q(this,t,x,$,F,{})}}export{le as component};
