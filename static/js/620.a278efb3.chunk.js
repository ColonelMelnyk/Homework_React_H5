"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[620],{8830:function(r,t,e){e.d(t,{IQ:function(){return f},Jh:function(){return h},XT:function(){return o},pm:function(){return l},yK:function(){return p}});var n=e(5861),a=e(4687),c=e.n(a),u=e(1243),s="183c3cacc9c38c09c14d38798ccfe9d7",i=u.Z.create({baseURL:"https://api.themoviedb.org/3/"}),o=function(){var r=(0,n.Z)(c().mark((function r(){var t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,i.get("trending/all/day",{params:{api_key:s}});case 2:return t=r.sent,r.abrupt("return",t.data);case 4:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),p=function(){var r=(0,n.Z)(c().mark((function r(t){var e;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,i.get("movie/".concat(t),{params:{api_key:s}});case 2:return e=r.sent,r.abrupt("return",e);case 4:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),f=function(){var r=(0,n.Z)(c().mark((function r(t){var e;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,i.get("movie/".concat(t,"/credits"),{params:{api_key:s}});case 2:return e=r.sent,r.abrupt("return",e);case 4:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),h=function(){var r=(0,n.Z)(c().mark((function r(t){var e;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,i.get("movie/".concat(t,"/reviews"),{params:{api_key:s}});case 2:return e=r.sent,r.abrupt("return",e);case 4:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),l=function(){var r=(0,n.Z)(c().mark((function r(t){var e;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,i.get("search/movie",{params:{api_key:s,query:t}});case 2:return e=r.sent,r.abrupt("return",e.data);case 4:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}()},9620:function(r,t,e){e.r(t);var n=e(5861),a=e(9439),c=e(4687),u=e.n(c),s=e(7689),i=e(2791),o=e(8830),p=e(4138),f=e(1686),h=e(184);t.default=function(){var r=(0,i.useState)([]),t=(0,a.Z)(r,2),e=t[0],c=t[1],l=(0,i.useState)(!1),v=(0,a.Z)(l,2),m=v[0],d=v[1],x=(0,i.useState)(!1),k=(0,a.Z)(x,2),w=k[0],y=k[1],g=(0,s.UO)(null).id;return(0,i.useEffect)((function(){var r=function(){var r=(0,n.Z)(u().mark((function r(){var t;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,d(!0),r.next=4,(0,o.IQ)(g);case 4:if(0!==(t=r.sent).data.cast.length){r.next=7;break}return r.abrupt("return",f.Notify.failure("No casts present!"));case 7:c(t.data.cast),r.next=14;break;case 10:r.prev=10,r.t0=r.catch(0),y(!0),console.error(r.t0);case 14:return r.prev=14,d(!1),r.finish(14);case 17:case"end":return r.stop()}}),r,null,[[0,10,14,17]])})));return function(){return r.apply(this,arguments)}}();r()}),[g]),(0,h.jsxs)(h.Fragment,{children:[m&&(0,h.jsx)(p.a,{}),w&&(0,h.jsxs)("p",{children:["An Error Occurred! ",w]}),e.length>0?(0,h.jsx)("ul",{children:e.map((function(r){var t=r.profile_path?"https://image.tmdb.org/t/p/w92".concat(r.profile_path):"http://dummyimage.com/92x138";return(0,h.jsxs)("li",{children:[(0,h.jsx)("img",{src:t,alt:"NonPhoto"}),(0,h.jsx)("p",{children:r.original_name}),(0,h.jsxs)("p",{children:["Character: ",r.character]})]},r.id)}))}):(0,h.jsx)("p",{children:"No casts info present"})]})}}}]);
//# sourceMappingURL=620.a278efb3.chunk.js.map