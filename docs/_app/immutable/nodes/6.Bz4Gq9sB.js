import{s as S,n as C,r as V}from"../chunks/scheduler.CeNJ-C66.js";import{S as j,i as G,e as d,s as x,c as v,g as N,b,m as R,j as c,d as y,f as o,h as P,l as $,q as T,k as U,n as w,o as z,t as B}from"../chunks/index.Di30BiTI.js";import{e as A}from"../chunks/each.D6YF6ztN.js";function D(r,t,u){const a=r.slice();return a[2]=t[u],a[4]=u,a}function E(r){let t,u=r[4]+1+"",a,h,p;return{c(){t=d("div"),a=U(u),this.h()},l(i){t=v(i,"DIV",{class:!0});var f=R(t);a=w(f,u),f.forEach(c),this.h()},h(){y(t,"class","svelte-9r8ieq")},m(i,f){o(i,t,f),z(t,a),h||(p=$(t,"click",J),h=!0)},p:C,d(i){i&&c(t),h=!1,p()}}}function F(r){let t,u="Grid Példa",a,h,p,i,f,g,k,_,q,H,m=A(Array(r[0]).fill()),s=[];for(let e=0;e<m.length;e+=1)s[e]=E(D(r,m,e));return{c(){t=d("h1"),t.textContent=u,a=x(),h=d("hr"),p=x(),i=d("input"),f=x(),g=d("hr"),k=x(),_=d("div");for(let e=0;e<s.length;e+=1)s[e].c();this.h()},l(e){t=v(e,"H1",{"data-svelte-h":!0}),N(t)!=="svelte-1fuiry6"&&(t.textContent=u),a=b(e),h=v(e,"HR",{}),p=b(e),i=v(e,"INPUT",{type:!0,min:!0,max:!0}),f=b(e),g=v(e,"HR",{}),k=b(e),_=v(e,"DIV",{class:!0});var n=R(_);for(let l=0;l<s.length;l+=1)s[l].l(n);n.forEach(c),this.h()},h(){y(i,"type","range"),y(i,"min","10"),y(i,"max","121"),y(_,"class","c svelte-9r8ieq")},m(e,n){o(e,t,n),o(e,a,n),o(e,h,n),o(e,p,n),o(e,i,n),P(i,r[0]),o(e,f,n),o(e,g,n),o(e,k,n),o(e,_,n);for(let l=0;l<s.length;l+=1)s[l]&&s[l].m(_,null);q||(H=[$(i,"change",r[1]),$(i,"input",r[1])],q=!0)},p(e,[n]){if(n&1&&P(i,e[0]),n&1){m=A(Array(e[0]).fill());let l;for(l=0;l<m.length;l+=1){const I=D(e,m,l);s[l]?s[l].p(I,n):(s[l]=E(I),s[l].c(),s[l].m(_,null))}for(;l<s.length;l+=1)s[l].d(1);s.length=m.length}},i:C,o:C,d(e){e&&(c(t),c(a),c(h),c(p),c(i),c(f),c(g),c(k),c(_)),T(s,e),q=!1,V(H)}}}const J=r=>r.target.style.visibility="hidden";function K(r,t,u){var a=42;function h(){a=B(this.value),u(0,a)}return[a,h]}class Q extends j{constructor(t){super(),G(this,t,K,F,S,{})}}export{Q as component};