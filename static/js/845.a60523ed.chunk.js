"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[845],{25:function(n,e,t){t.d(e,{M1:function(){return p},Pt:function(){return o},TP:function(){return u},tx:function(){return d},z5:function(){return s}});var r=t(861),a=t(757),i=t.n(a),c=t(243).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"e0b0002470051a4dbc4e00339852fea1"}}),s=function(){var n=(0,r.Z)(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("/trending/movie/day");case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("/search/movie",{params:{query:e}});case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("/movie/".concat(e));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("/movie/".concat(e,"/credits"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("/movie/".concat(e,"/reviews"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},854:function(n,e,t){t.d(e,{a:function(){return i}});var r=t(402),a=t(184),i=function(){return(0,a.jsx)(r.Nx,{width:"200",color:"rgba(191, 122, 158, 0.8)"})}},845:function(n,e,t){t.r(e),t.d(e,{default:function(){return U}});var r,a,i,c,s,o,u,p=t(861),d=t(439),l=t(757),f=t.n(l),x=t(791),h=t(689),v=t(25),m=t(854),g=t(168),w=t(444),b=t(87),j=w.ZP.div(r||(r=(0,g.Z)(["\n  width: 100%;\n  margin: 0 auto;\n  padding: 15px 15px;\n  color: #fff;\n  @media screen and (min-width: 768px) {\n    max-width: 768px;\n  }\n  @media screen and (min-width: 1200px) {\n    max-width: 1200px;\n  }\n"]))),Z=(0,w.ZP)(b.rU)(a||(a=(0,g.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  width: 150px;\n  border: none;\n  border-radius: 10px;\n  font-size: 25px;\n  font-weight: bold;\n  color: rgba(0, 0, 0, 0.85);\n  background-color: #fff;\n  margin-bottom: 10px;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover,\n  &:focus {\n    color: #fff;\n    background-color: rgba(191, 122, 158, 0.8);\n  }\n"]))),k=w.ZP.div(i||(i=(0,g.Z)(["\n  margin-bottom: 15px;\n  @media screen and (min-width: 768px) {\n    display: flex;\n    gap: 15px;\n  }\n"]))),y=w.ZP.div(c||(c=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n  font-size: 25px;\n  text-align: justify;\n"]))),P=w.ZP.span(s||(s=(0,g.Z)(["\n  display: block;\n  font-weight: bold;\n"]))),_=w.ZP.ul(o||(o=(0,g.Z)(["\n  display: grid;\n  margin-bottom: 15px;\n  gap: 10px;\n"]))),z=(0,w.ZP)(b.OL)(u||(u=(0,g.Z)(["\n  padding: 10px 0;\n  color: #fff;\n  &.active,\n  &:hover,\n  &:focus {\n    color: rgba(191, 122, 158, 0.8);\n  }\n"]))),S=t(184),U=function(){var n,e,t=(0,x.useState)(null),r=(0,d.Z)(t,2),a=r[0],i=r[1],c=(0,x.useState)(!0),s=(0,d.Z)(c,2),o=s[0],u=s[1],l=(0,h.UO)().id;(0,x.useEffect)((function(){var n=function(){var n=(0,p.Z)(f().mark((function n(){var e;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,u(!0),n.next=4,(0,v.TP)(l);case 4:e=n.sent,i(e),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),alert(n.t0);case 11:return n.prev=11,u(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[0,8,11,14]])})));return function(){return n.apply(this,arguments)}}();n()}),[l]);var g,w,b=null!==(n=null===(e=(0,h.TH)().state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/";return(0,S.jsxs)(j,{children:[(0,S.jsx)(Z,{to:b,children:"Go Back"}),o&&(0,S.jsx)(m.a,{}),!o&&(0,S.jsxs)(k,{children:[(0,S.jsx)("img",{src:a.poster_path?"https://image.tmdb.org/t/p/w500".concat(a.poster_path):"https://static.wikia.nocookie.net/just-because/images/0/0c/NoImage_Available.png/revision/latest?cb=20170601005615",alt:a.title,width:"300",loading:"lazy"}),(0,S.jsxs)(y,{children:[(0,S.jsxs)("h3",{children:[a.title," (",(w=a.release_date,(new Date).getFullYear(w)),")"]}),(0,S.jsxs)("p",{children:["User score: ",Math.round(10*a.vote_average),"%"]}),(0,S.jsxs)("p",{children:[(0,S.jsx)(P,{children:"Overview"})," ",a.overview]}),(0,S.jsxs)("p",{children:[(0,S.jsx)(P,{children:"Genres"})," ",(g=a.genres,g.map((function(n){return n.name})).join(", "))]})]})]}),(0,S.jsxs)(y,{children:[(0,S.jsx)(P,{children:"Additional information"}),(0,S.jsxs)(_,{children:[(0,S.jsxs)("li",{children:["\u2192",(0,S.jsx)(z,{to:"/movies/".concat(l,"/cast"),state:{from:b},children:"View cast information here"})]}),(0,S.jsxs)("li",{children:["\u2192",(0,S.jsx)(z,{to:"/movies/".concat(l,"/reviews"),state:{from:b},children:"See reviews here"})]})]})]}),(0,S.jsx)(x.Suspense,{fallback:(0,S.jsx)("div",{children:"Loading..."}),children:(0,S.jsx)(h.j3,{})})]})}}}]);
//# sourceMappingURL=845.a60523ed.chunk.js.map