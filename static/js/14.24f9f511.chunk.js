"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[14],{25:function(n,t,r){r.d(t,{M1:function(){return p},Pt:function(){return u},TP:function(){return s},tx:function(){return f},z5:function(){return c}});var e=r(861),a=r(757),i=r.n(a),o=r(243).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"e0b0002470051a4dbc4e00339852fea1"}}),c=function(){var n=(0,e.Z)(i().mark((function n(){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.get("/trending/movie/day");case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,e.Z)(i().mark((function n(t){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.get("/search/movie",{params:{query:t}});case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),s=function(){var n=(0,e.Z)(i().mark((function n(t){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.get("/movie/".concat(t));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(i().mark((function n(t){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.get("/movie/".concat(t,"/credits"));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(i().mark((function n(t){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.get("/movie/".concat(t,"/reviews"));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},854:function(n,t,r){r.d(t,{a:function(){return i}});var e=r(402),a=r(184),i=function(){return(0,a.jsx)(e.Nx,{width:"200",color:"rgba(191, 122, 158, 0.8)"})}},612:function(n,t,r){r.d(t,{O:function(){return g}});var e,a,i,o,c,u=r(168),s=r(444),p=r(87),f=s.ZP.li(e||(e=(0,u.Z)(["\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover {\n    transform: scale(1.03);\n  }\n"]))),l=(0,s.ZP)(p.rU)(a||(a=(0,u.Z)(["\n  color: rgba(191, 122, 158, 0.8);\n"]))),d=s.ZP.h3(i||(i=(0,u.Z)(["\n  display: flex;\n  align-content: center;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  margin-top: 5px;\n  font-size: 20px;\n"]))),m=s.ZP.img(o||(o=(0,u.Z)(["\n  width: 100%;\n  height: 500px;\n  object-fit: cover;\n  cursor: pointer;\n"]))),h=r(184),x=function(n){var t=n.id,r=n.title,e=n.poster_path,a=n.state;return(0,h.jsx)(f,{children:(0,h.jsxs)(l,{to:"/movies/".concat(t),state:a,children:[(0,h.jsx)(m,{src:e?"https://image.tmdb.org/t/p/w500".concat(e):"https://static.wikia.nocookie.net/just-because/images/0/0c/NoImage_Available.png/revision/latest?cb=20170601005615",alt:r,loading:"lazy"}),(0,h.jsx)(d,{children:r})]})},t)},v=s.ZP.ul(c||(c=(0,u.Z)(["\n  display: grid;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  grid-gap: 16px;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"]))),g=function(n){var t=n.movies,r=n.state;return(0,h.jsx)("div",{children:(0,h.jsx)(v,{children:t.map((function(n){var t=n.id,e=n.title,a=n.poster_path;return(0,h.jsx)(x,{id:t,title:e,poster_path:a,state:r,loading:"lazy"},t)}))})})}},14:function(n,t,r){r.r(t),r.d(t,{default:function(){return P}});var e,a,i,o,c=r(861),u=r(439),s=r(757),p=r.n(s),f=r(791),l=r(25),d=r(87),m=r(689),h=r(168),x=r(444),v=x.ZP.form(e||(e=(0,h.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 15px;\n  gap: 5px;\n"]))),g=x.ZP.input(a||(a=(0,h.Z)(["\n  border-radius: 5px;\n  font-size: 20px;\n  color: rgba(191, 122, 158, 0.8);\n  background-color: #fff;\n  border: 1px solid #bdbdbd;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  &::placeholder {\n    font-size: 20px;\n  }\n  &:focus,\n  &:hover {\n    color: rgba(191, 122, 158, 0.8);\n    background-color: #fff;\n    border-color: rgba(191, 122, 158, 0.8);\n  }\n"]))),b=x.ZP.button(i||(i=(0,h.Z)(["\n  width: 100px;\n  font-size: 20px;\n  cursor: pointer;\n  border-radius: 5px;\n  border: 1px solid #bdbdbd;\n  background-color: #fff;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover,\n  &:focus {\n    color: #fff;\n    background-color: rgba(191, 122, 158, 0.8);\n  }\n"]))),w=r(184),Z=function(n){var t=n.onChangeSearch,r=n.value,e=(0,f.useState)(r||""),a=(0,u.Z)(e,2),i=a[0],o=a[1];return(0,w.jsxs)(v,{onSubmit:function(n){n.preventDefault(),t(i)},children:[(0,w.jsx)(g,{type:"text",onChange:function(n){o(n.currentTarget.value.toLowerCase().trim())},value:i,autoComplete:"off",autoFocus:!0,placeholder:"Search movie",required:!0}),(0,w.jsx)(b,{type:"submit",children:"Search"})]})},y=r(612),k=r(854),j=x.ZP.div(o||(o=(0,h.Z)(["\n  width: 100%;\n  margin: 0 auto;\n  padding: 15px 15px;\n  color: #5f0000;\n  text-align: center;\n  @media screen and (min-width: 768px) {\n    max-width: 768px;\n  }\n  @media screen and (min-width: 1200px) {\n    max-width: 1200px;\n  }\n"]))),P=function(){var n=(0,f.useState)([]),t=(0,u.Z)(n,2),r=t[0],e=t[1],a=(0,f.useState)(!1),i=(0,u.Z)(a,2),o=i[0],s=i[1],h=(0,d.lr)(),x=(0,u.Z)(h,2),v=x[0],g=x[1],b=v.get("query");(0,f.useEffect)((function(){if(b){var n=function(){var n=(0,c.Z)(p().mark((function n(){var t;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,s(!0),n.next=4,(0,l.Pt)(b);case 4:t=n.sent,e(t.results),0===t.total_results&&alert("We don't find any movies"),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),alert(n.t0);case 12:return n.prev=12,s(!1),n.finish(12);case 15:case"end":return n.stop()}}),n,null,[[0,9,12,15]])})));return function(){return n.apply(this,arguments)}}();n()}}),[b]);var P=(0,m.TH)();return(0,w.jsxs)(j,{children:[(0,w.jsx)(Z,{onChangeSearch:function(n){g({query:n})},value:b}),r.length>0&&(0,w.jsx)(y.O,{movies:r,state:{from:P}}),o&&(0,w.jsx)(k.a,{})]})}}}]);
//# sourceMappingURL=14.24f9f511.chunk.js.map