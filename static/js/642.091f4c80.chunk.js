"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[642],{8830:function(t,r,e){e.d(r,{IQ:function(){return p},Jh:function(){return v},XT:function(){return o},pm:function(){return l},yK:function(){return f}});var n=e(5861),u=e(4687),a=e.n(u),c=e(1243),i="183c3cacc9c38c09c14d38798ccfe9d7",s=c.Z.create({baseURL:"https://api.themoviedb.org/3/"}),o=function(){var t=(0,n.Z)(a().mark((function t(){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.get("trending/all/day",{params:{api_key:i}});case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(a().mark((function t(r){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.get("movie/".concat(r),{params:{api_key:i}});case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(a().mark((function t(r){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.get("movie/".concat(r,"/credits"),{params:{api_key:i}});case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),v=function(){var t=(0,n.Z)(a().mark((function t(r){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.get("movie/".concat(r,"/reviews"),{params:{api_key:i}});case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),l=function(){var t=(0,n.Z)(a().mark((function t(r){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.get("search/movie",{params:{api_key:i,query:r}});case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}()},4236:function(t,r,e){e.d(r,{s:function(){return i}});var n=e(7689),u=e(1087),a=e(5450),c=e(184),i=function(t){var r=t.films,e=(0,n.TH)();return(0,c.jsx)(a.ON,{children:r.map((function(t){return(0,c.jsx)(a.Fo,{children:(0,c.jsx)(u.rU,{to:"/movies/".concat(t.id),state:{from:e},children:t.title||t.name||t.original_title})},t.id)}))})}},5450:function(t,r,e){e.d(r,{Fo:function(){return f},ON:function(){return s},tk:function(){return o}});var n,u,a,c=e(168),i=e(1109),s=i.Z.div(n||(n=(0,c.Z)(["\nlist-style-type:none;\n"]))),o=i.Z.div(u||(u=(0,c.Z)(["\n\nfont-size: 32px;\n"]))),f=i.Z.div(a||(a=(0,c.Z)(["\nmargin-top: 10px;\n"])))},3642:function(t,r,e){e.r(r);var n=e(5861),u=e(9439),a=e(4687),c=e.n(a),i=e(1087),s=e(8830),o=e(2791),f=e(4236),p=e(1686),v=e(4138),l=e(184);r.default=function(){var t=(0,o.useState)(!1),r=(0,u.Z)(t,2),e=r[0],a=r[1],m=(0,o.useState)(!1),h=(0,u.Z)(m,2),d=h[0],x=h[1],y=(0,i.lr)(),k=(0,u.Z)(y,2),Z=k[0],w=k[1],b=(0,o.useState)(""),g=(0,u.Z)(b,2),j=g[0],_=g[1],S=(0,o.useState)([]),N=(0,u.Z)(S,2),q=N[0],C=N[1];(0,o.useEffect)((function(){var t=function(){var t=(0,n.Z)(c().mark((function t(r){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a(!0),t.next=4,(0,s.pm)(r);case 4:if(0!==(e=t.sent).results.length){t.next=7;break}return t.abrupt("return",p.Notify.failure("No movies found, try something else!"));case 7:C(e.results),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(0),x(!0),console.error(t.t0);case 14:return t.prev=14,a(!1),t.finish(14);case 17:case"end":return t.stop()}}),t,null,[[0,10,14,17]])})));return function(r){return t.apply(this,arguments)}}(),r=Z.get("query");r&&t(r)}),[Z]);return(0,l.jsxs)("main",{children:[(0,l.jsxs)("form",{action:"",onSubmit:function(t){if(t.preventDefault(),!j.trim())return p.Notify.failure("Input Required!");w({query:j.trim()}),_("")},children:[(0,l.jsx)("input",{type:"text",value:j,onChange:function(t){return _(t.target.value)}}),(0,l.jsx)("button",{type:"submit",children:"Search"})]}),q.length>0&&(0,l.jsx)(f.s,{films:q}),e&&(0,l.jsx)(v.a,{}),d&&(0,l.jsxs)("p",{children:["An Error Occurred! ",d]})]})}}}]);
//# sourceMappingURL=642.091f4c80.chunk.js.map