"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[597],{25:function(t,n,r){r.d(n,{M1:function(){return p},Pt:function(){return s},TP:function(){return o},tx:function(){return f},z5:function(){return i}});var e=r(861),a=r(757),u=r.n(a),c=r(243).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"e0b0002470051a4dbc4e00339852fea1"}}),i=function(){var t=(0,e.Z)(u().mark((function t(){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("/trending/movie/day");case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),s=function(){var t=(0,e.Z)(u().mark((function t(n){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("/search/movie",{params:{query:n}});case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),o=function(){var t=(0,e.Z)(u().mark((function t(n){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("/movie/".concat(n));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,e.Z)(u().mark((function t(n){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("/movie/".concat(n,"/credits"));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,e.Z)(u().mark((function t(n){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("/movie/".concat(n,"/reviews"));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},854:function(t,n,r){r.d(n,{a:function(){return u}});var e=r(402),a=r(184),u=function(){return(0,a.jsx)(e.Nx,{width:"200",color:"rgba(191, 122, 158, 0.8)"})}},597:function(t,n,r){r.r(n),r.d(n,{default:function(){return v}});var e,a=r(861),u=r(439),c=r(757),i=r.n(c),s=r(791),o=r(689),p=r(25),f=r(854),d=r(168),l=r(444).ZP.ul(e||(e=(0,d.Z)(["\n  display: grid;\n  align-items: baseline;\n  justify-items: stretch;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));\n  grid-gap: 16px;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"]))),h=r(184),v=function(){var t=(0,s.useState)(null),n=(0,u.Z)(t,2),r=n[0],e=n[1],c=(0,s.useState)(!0),d=(0,u.Z)(c,2),v=d[0],m=d[1],x=(0,o.UO)().id;return(0,s.useEffect)((function(){var t=function(){var t=(0,a.Z)(i().mark((function t(){var n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,m(!0),t.next=4,(0,p.M1)(x);case 4:n=t.sent,e(n.cast),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),alert(t.t0);case 11:return t.prev=11,m(!1),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[0,8,11,14]])})));return function(){return t.apply(this,arguments)}}();t()}),[x]),(0,h.jsxs)("div",{children:[v&&(0,h.jsx)(f.a,{}),!v&&r.length>0&&(0,h.jsx)("div",{children:(0,h.jsx)(l,{children:r.map((function(t){var n=t.id,r=t.profile_path,e=t.name,a=t.character;return(0,h.jsxs)("li",{children:[(0,h.jsx)("img",{src:r?"https://image.tmdb.org/t/p/w92".concat(r):"https://www.iconpacks.net/icons/1/free-user-icon-244-thumb.png",alt:e,width:"150",loading:"lazy"}),(0,h.jsx)("p",{children:e}),(0,h.jsxs)("p",{children:["Character: ",a]})]},n)}))})})]})}}}]);
//# sourceMappingURL=597.813a87b6.chunk.js.map