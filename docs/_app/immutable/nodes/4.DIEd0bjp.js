import{s as d,n as Z,r as o}from"../chunks/scheduler.D3aZ0wum.js";import{S as c,i as g,e as v,s as j,k as D,a as $,c as k,g as tt,b as B,n as S,d as h,f as e,h as V,l as r,p as W,j as i}from"../chunks/index.D3x86wLW.js";import"../chunks/paths.D9IQB6K5.js";function x(u){let f,n,b;return{c(){f=D("(kb. "),n=D(u[3]),b=D(" év)")},l(p){f=S(p,"(kb. "),n=S(p,u[3]),b=S(p," év)")},m(p,_){e(p,f,_),e(p,n,_),e(p,b,_)},p(p,_){_&8&&W(n,p[3])},d(p){p&&(i(f),i(n),i(b))}}}function lt(u){let f,n="Dátum input",b,p,_,R,m,C,H,O,U,T=u[0].split("-").join(". ")+"",w,q,F,z,a,A,E,G,J,y=u[1].split("-").join(". ")+"",N,K,L,M,P,Q,I,X,Y,s=u[3]>=.01&&x(u);return{c(){f=v("h1"),f.textContent=n,b=j(),p=v("br"),_=v("hr"),R=j(),m=v("input"),C=j(),H=v("br"),O=v("br"),U=j(),w=D(T),q=D(`.
`),F=v("hr"),z=j(),a=v("input"),A=j(),E=v("br"),G=v("br"),J=j(),N=D(y),K=D(`.
`),L=v("hr"),M=j(),P=D(u[2]),Q=D(` nap a különbség
`),s&&s.c(),I=$(),this.h()},l(t){f=k(t,"H1",{"data-svelte-h":!0}),tt(f)!=="svelte-ntn8ev"&&(f.textContent=n),b=B(t),p=k(t,"BR",{}),_=k(t,"HR",{}),R=B(t),m=k(t,"INPUT",{type:!0}),C=B(t),H=k(t,"BR",{}),O=k(t,"BR",{}),U=B(t),w=S(t,T),q=S(t,`.
`),F=k(t,"HR",{}),z=B(t),a=k(t,"INPUT",{type:!0}),A=B(t),E=k(t,"BR",{}),G=k(t,"BR",{}),J=B(t),N=S(t,y),K=S(t,`.
`),L=k(t,"HR",{}),M=B(t),P=S(t,u[2]),Q=S(t,` nap a különbség
`),s&&s.l(t),I=$(),this.h()},h(){h(m,"type","date"),h(a,"type","date")},m(t,l){e(t,f,l),e(t,b,l),e(t,p,l),e(t,_,l),e(t,R,l),e(t,m,l),V(m,u[0]),e(t,C,l),e(t,H,l),e(t,O,l),e(t,U,l),e(t,w,l),e(t,q,l),e(t,F,l),e(t,z,l),e(t,a,l),V(a,u[1]),e(t,A,l),e(t,E,l),e(t,G,l),e(t,J,l),e(t,N,l),e(t,K,l),e(t,L,l),e(t,M,l),e(t,P,l),e(t,Q,l),s&&s.m(t,l),e(t,I,l),X||(Y=[r(m,"input",u[4]),r(a,"input",u[5])],X=!0)},p(t,[l]){l&1&&V(m,t[0]),l&1&&T!==(T=t[0].split("-").join(". ")+"")&&W(w,T),l&2&&V(a,t[1]),l&2&&y!==(y=t[1].split("-").join(". ")+"")&&W(N,y),l&4&&W(P,t[2]),t[3]>=.01?s?s.p(t,l):(s=x(t),s.c(),s.m(I.parentNode,I)):s&&(s.d(1),s=null)},i:Z,o:Z,d(t){t&&(i(f),i(b),i(p),i(_),i(R),i(m),i(C),i(H),i(O),i(U),i(w),i(q),i(F),i(z),i(a),i(A),i(E),i(G),i(J),i(N),i(K),i(L),i(M),i(P),i(Q),i(I)),s&&s.d(t),X=!1,o(Y)}}}function et(u,f,n){let b,p;const _=new Date;var R=_.toISOString().split("T")[0],m=R;_.setDate(_.getDate()+1);var m=_.toISOString().split("T")[0];function C(){R=this.value,n(0,R)}function H(){m=this.value,n(1,m)}return u.$$.update=()=>{u.$$.dirty&3&&n(2,b=(new Date(m)-new Date(R))/(24*60*60*1e3)),u.$$.dirty&4&&n(3,p=(b/365.2501).toFixed(2))},[R,m,b,p,C,H]}class st extends c{constructor(f){super(),g(this,f,et,lt,d,{})}}export{st as component};