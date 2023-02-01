(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{19:function(e,t,c){},20:function(e,t,c){"use strict";c.r(t);var s=c(9),a=c.n(s),n=c(5),l=c(10),i=c(2),r=c(3),o=c.n(r),d=c(1),j=(c(16),c(17),c(8)),u=c.n(j),b=c(0),h=function(e){var t=e.todos,c=e.onSetSelectedTodo,s=e.selectedTodo;return Object(b.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"#"}),Object(b.jsx)("th",{children:Object(b.jsx)("span",{className:"icon",children:Object(b.jsx)("i",{className:"fas fa-check"})})}),Object(b.jsx)("th",{children:"Title"}),Object(b.jsx)("th",{children:" "})]})}),Object(b.jsx)("tbody",{children:t.map((function(e){return Object(b.jsxs)("tr",{"data-cy":"todo",className:u()({"has-background-info-light":(null===s||void 0===s?void 0:s.id)===e.id}),children:[Object(b.jsx)("td",{className:"is-vcentered",children:e.id}),Object(b.jsx)("td",{className:"is-vcentered",children:e.completed&&Object(b.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(b.jsx)("i",{className:"fas fa-check"})})}),Object(b.jsx)("td",{className:"is-vcentered is-expanded",children:Object(b.jsx)("p",{className:e.completed?"has-text-success":"has-text-danger",children:e.title})}),Object(b.jsx)("td",{className:"has-text-right is-vcentered",children:Object(b.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return c(e)},children:Object(b.jsx)("span",{className:"icon",children:Object(b.jsx)("i",{className:u()("far",{"fa-eye":e!==s,"fa-eye-slash":e===s})})})})})]},e.id)}))})]})},m=function(e){var t=e.inputState,c=e.setInputState,s=e.setToggleFilter;return Object(b.jsxs)("form",{className:"field has-addons",onSubmit:function(e){return e.preventDefault()},children:[Object(b.jsx)("p",{className:"control",children:Object(b.jsx)("span",{className:"select",children:Object(b.jsxs)("select",{"data-cy":"statusSelect",onChange:function(e){return function(e){switch(e){case"active":s(!1);break;case"completed":s(!0);break;default:s(null)}}(e.target.value)},children:[Object(b.jsx)("option",{value:"all",children:"All"}),Object(b.jsx)("option",{value:"active",children:"Active"}),Object(b.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(b.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(b.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:t,onChange:function(e){return c(e.target.value)}}),Object(b.jsx)("span",{className:"icon is-left",children:Object(b.jsx)("i",{className:"fas fa-magnifying-glass"})}),t&&Object(b.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(b.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return c("")}})})]})]})};function O(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}c(19);var x=function(){return Object(b.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(b.jsx)("div",{className:"Loader__content"})})},f=function(e){var t=e.selectedTodo,c=e.onClose,s=Object(d.useState)(!1),a=Object(i.a)(s,2),l=a[0],r=a[1],j=Object(d.useState)(null),u=Object(i.a)(j,2),h=u[0],m=u[1],f=Object(d.useCallback)(function(){var e=Object(n.a)(o.a.mark((function e(t){var c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O("/users/".concat(t));case 2:c=e.sent,m(c),r(!0);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[]);return Object(d.useEffect)((function(){f(t.userId)}),[]),Object(b.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(b.jsx)("div",{className:"modal-background"}),l?Object(b.jsxs)("div",{className:"modal-card",children:[Object(b.jsxs)("header",{className:"modal-card-head",children:[Object(b.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(t.id)}),Object(b.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:c})]}),Object(b.jsxs)("div",{className:"modal-card-body",children:[Object(b.jsx)("p",{className:"block","data-cy":"modal-title",children:t.title}),Object(b.jsxs)("p",{className:"block","data-cy":"modal-user",children:[t.completed?Object(b.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(b.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(b.jsx)("a",{href:"mailto:".concat(null===h||void 0===h?void 0:h.email),children:null===h||void 0===h?void 0:h.name})]})]})]}):Object(b.jsx)(x,{})]})},p=function(){var e=Object(d.useState)([]),t=Object(i.a)(e,2),c=t[0],s=t[1],a=Object(d.useState)(!1),r=Object(i.a)(a,2),j=r[0],u=r[1],p=Object(d.useState)(null),v=Object(i.a)(p,2),N=v[0],y=v[1],g=Object(d.useState)(""),k=Object(i.a)(g,2),S=k[0],w=k[1],C=Object(d.useState)(null),T=Object(i.a)(C,2),L=T[0],I=T[1],_=Object(l.a)(c),E=Object(d.useCallback)(Object(n.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O("/todos");case 2:t=e.sent,s(t),u(!0);case 5:case"end":return e.stop()}}),e)}))),[]);if(Object(d.useEffect)((function(){E()}),[]),S&&S.length>0){var B=S.toLocaleLowerCase().trim();_=_.filter((function(e){return e.title.toLocaleLowerCase().includes(B)}))}return null!==L&&(_=_.filter((function(e){return e.completed===L}))),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"section",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"box",children:[Object(b.jsx)("h1",{className:"title",children:"Todos:"}),Object(b.jsx)("div",{className:"block",children:Object(b.jsx)(m,{inputState:S,setInputState:w,setToggleFilter:I})}),Object(b.jsx)("div",{className:"block",children:j?Object(b.jsx)(h,{todos:_,onSetSelectedTodo:y,selectedTodo:N}):Object(b.jsx)(x,{})})]})})}),N&&Object(b.jsx)(f,{selectedTodo:N,onClose:function(){return y(null)}})]})};a.a.render(Object(b.jsx)(p,{}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.bf6223aa.chunk.js.map