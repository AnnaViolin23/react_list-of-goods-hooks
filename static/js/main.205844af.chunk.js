(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var s=n(6),c=n.n(s),o=n(5),r=n(7),a=n(1),i=(n(12),n(13),n(0)),u=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],l=function(e){return e.Name="Sort alphabetically",e.Length="Sort by length",e.Reverse="Reverse",e.Reset="Reset",e}(l||{}),b="is-light";var h=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],s=t[1],c=Object(a.useState)(""),h=Object(o.a)(c,2),d=h[0],j=h[1],g=function(e,t){var n=t.sortBy,s=t.order,c=void 0===s?"":s,o=Object(r.a)(e);return n&&o.sort((function(e,t){switch(n){case l.Name:return e.localeCompare(t);case l.Length:return e.length-t.length;case l.Reset:default:return 0}})),c===l.Reverse?o.reverse():o}(u,{sortBy:n,order:d}),m=function(){s(""),j("")};return Object(i.jsxs)("div",{className:"section content",children:[Object(i.jsxs)("div",{className:"buttons",children:[Object(i.jsx)("button",{type:"button",className:"button is-info ".concat(n===l.Name?"":b),onClick:function(){return s(l.Name)},children:"Sort alphabetically"}),Object(i.jsx)("button",{type:"button",className:"button is-success ".concat(n===l.Length?"":b),onClick:function(){return s(l.Length)},children:"Sort by length"}),Object(i.jsx)("button",{type:"button",className:"button is-warning ".concat(d===l.Reverse?"":b),onClick:function(){d===l.Reverse?j(""):j(l.Reverse)},children:"Reverse"}),(n||d)&&Object(i.jsx)("button",{type:"button",onClick:m,className:"button is-danger is-light",children:"Reset"})]}),Object(i.jsx)("ul",{children:g.map((function(e){return Object(i.jsx)("li",{"data-cy":"Good",children:e},e)}))})]})};c.a.render(Object(i.jsx)(h,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.205844af.chunk.js.map