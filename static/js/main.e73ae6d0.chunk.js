(this.webpackJsonpconvert=this.webpackJsonpconvert||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(7),r=n.n(a),u=n(4),s=n.n(u),o=n(2),l=n(6),j=n(3),i=(n(13),n(0)),b=function(e){var t=e.usd,n=e.eur;return Object(i.jsxs)("div",{className:"head",children:[Object(i.jsx)("h1",{className:"head__title",children:"Currency \u0441onverter"}),Object(i.jsxs)("h3",{className:"head__subtitle",children:["USD: ",t]}),Object(i.jsxs)("h3",{className:"head__subtitle",children:["EUR: ",n]})]})},O=(n(15),function(e){var t=e.valut,n=e.currency,c=e.value,a=e.onChange,r=e.setInput;return Object(i.jsx)("div",{className:"form",children:Object(i.jsxs)("div",{className:"form__body",children:[Object(i.jsx)("select",{className:"form__select",onChange:a,value:n,children:t.map((function(e,t){return Object(i.jsx)("option",{children:e},t)}))}),Object(i.jsx)("label",{className:"form__label",htmlFor:"value1",children:"Enter value"}),Object(i.jsx)("input",{className:"form__input",onChange:r,type:"text",id:"value1",value:c})]})})}),f=function(e){return fetch("https://open.er-api.com/v6/latest/".concat(e)).then((function(e){if(!e.ok)throw new Error("".concat(e.status," - ").concat(e.statusText));return e.json()}))},h=(n(16),function(){var e=Object(c.useState)(null),t=Object(j.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(!0),u=Object(j.a)(r,2),h=u[0],v=u[1],p=Object(c.useState)(0),m=Object(j.a)(p,2),d=m[0],x=m[1],y=Object(c.useState)(null),_=Object(j.a)(y,2),C=_[0],g=_[1],N=Object(c.useState)(null),F=Object(j.a)(N,2),S=F[0],k=F[1],w=Object(c.useState)({fromCurrency:"UAH",toCurrency:""}),E=Object(j.a)(w,2),U=E[0],T=E[1],A=Object(c.useState)({valueTo:1,valueFrom:""}),H=Object(j.a)(A,2),I=H[0],D=H[1];function J(){return R.apply(this,arguments)}function R(){return(R=Object(l.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f("EUR");case 2:return t=e.sent,k(1*t.rates.UAH),e.next=6,f("USD");case 6:n=e.sent,g(1*n.rates.UAH);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function B(){return(B=Object(l.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f(t);case 2:n=e.sent,J(),a(Object.keys(n.rates)),T(Object(o.a)(Object(o.a)({},U),{},{fromCurrency:n.base_code,toCurrency:Object.keys(n.rates)[1]})),x(n.rates[Object.keys(n.rates)[1]]);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(c.useEffect)((function(){null===n&&function(e){B.apply(this,arguments)}("UAH")}),[n]),Object(c.useEffect)((function(){D(h?Object(o.a)(Object(o.a)({},I),{},{valueFrom:(I.valueTo*d).toFixed(2)}):Object(o.a)(Object(o.a)({},I),{},{valueTo:(I.valueFrom*d).toFixed(2)}))}),[h,I.valueTo,I.valueFrom,U,d]),Object(c.useEffect)((function(){null!==n&&(h?fetch("https://open.er-api.com/v6/latest/".concat(U.fromCurrency)).then((function(e){return e.json()})).then((function(e){return x(e.rates[U.toCurrency])})):fetch("https://open.er-api.com/v6/latest/".concat(U.toCurrency)).then((function(e){return e.json()})).then((function(e){return x(e.rates[U.fromCurrency])})))}),[U,h,n]),Object(i.jsxs)("div",{className:"app",children:[Object(i.jsx)(b,{usd:C,eur:S}),Object(i.jsx)("div",{className:"app__body",children:null!==n?Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(O,{value:I.valueTo,setInput:function(e){D(Object(o.a)(Object(o.a)({},I),{},{valueTo:e.target.value})),v(!0)},valut:n,currency:U.fromCurrency,onChange:function(e){T(Object(o.a)(Object(o.a)({},U),{},{fromCurrency:e.target.value})),v(!0)}}),Object(i.jsx)(O,{value:I.valueFrom,currency:U.toCurrency,setInput:function(e){D(Object(o.a)(Object(o.a)({},I),{},{valueFrom:e.target.value})),v(!1)},valut:n,onChange:function(e){T(Object(o.a)(Object(o.a)({},U),{},{toCurrency:e.target.value})),v(!0)}})]}):Object(i.jsx)("div",{className:"app__load",children:"Loading..."})})]})});r.a.render(Object(i.jsx)(h,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.e73ae6d0.chunk.js.map