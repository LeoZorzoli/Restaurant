(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{88:function(e,t,n){},89:function(e,t,n){},90:function(e,t,n){},91:function(e,t,n){},92:function(e,t,n){},93:function(e,t,n){},94:function(e,t,n){},96:function(e,t,n){},97:function(e,t,n){},99:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(0),r=n(18),s=n.n(r),i=n(14),o=n(6),l=n.n(o),j=n(11),d=n(24),u=n(7),b=n(30),h=n.n(b),x={getAll:function(){var e=Object(j.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("/api/menu");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INIT_MENU":return t.data;default:return e}},m=n(60),p="/api/reservations",f=function(){var e=Object(j.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get(p);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v={createReservation:function(){var e=Object(j.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.post(p,t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),getReservations:f},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ALL":return t.content;case"CREATE_RESERVATION":return[].concat(Object(m.a)(e),[t.content]);default:return e}},g=(n(88),n(89),n(101)),w=n(102),y=function(){return Object(c.jsx)("div",{children:Object(c.jsx)(g.a,{fluid:!0,className:"homepage",children:Object(c.jsxs)(w.a,{children:[Object(c.jsx)("div",{className:"col-lg-4 col-sm-12 fondo1"}),Object(c.jsx)("div",{className:"col-lg-4 col-sm-12 fondo3",children:Object(c.jsxs)("p",{className:"title",children:["Explore and discover ",Object(c.jsx)("br",{})," ",Object(c.jsx)("span",{className:"title-2",children:"Authentic & modern Restaurant"})]})}),Object(c.jsx)("div",{className:"col-lg-4 col-sm-12 fondo2"})]})})})},k=n(55),T=(n(90),function(){return document.title="MaxRestaurant | About us",Object(c.jsx)("div",{children:Object(c.jsx)(g.a,{fluid:!0,className:"about-container",children:Object(c.jsxs)(w.a,{children:[Object(c.jsxs)(k.a,{xl:6,md:12,xs:12,className:"col-about",children:[Object(c.jsxs)("p",{className:"about-info",children:["This page was created by ",Object(c.jsx)("a",{className:"link-about",href:"https://www.linkedin.com/in/leonelzorzoli/",rel:"noreferrer",target:"_blank",children:"Leonel Zorzoli"})," with the aim of improving his skills as a web programmer. Everything you see here is fictional and created for demonstration purposes. All the images were taken from Google Images and the entire menu is from ",Object(c.jsx)("a",{className:"link-about",href:"https://earls.ca/",children:"Earls"})," restaurant."]}),Object(c.jsx)("p",{className:"about-info",children:"Created with React, React-Redux, React-Router, Bootstrap, Node, Express, MongoDB"})]}),Object(c.jsxs)(k.a,{xl:6,md:12,xs:12,className:"col-about",children:[Object(c.jsx)("p",{className:"personal-info",children:"I'm a 25-year-old guy based in Argentina, passionate about creating products that help the community, and solving real world problems with software. I like to be in the intersection of design, marketing and engineering."}),Object(c.jsxs)("p",{className:"social",children:["You can find me on github as ",Object(c.jsx)("a",{className:"link-about",href:"https://github.com/LeoZorzoli",rel:"noreferrer",target:"_blank",children:"@LeoZorzoli"})," or on twitter as ",Object(c.jsx)("a",{className:"link-about",href:"https://twitter.com/ProgramandoM",rel:"noreferrer",target:"_blank",children:"@ProgramandoM"})]})]})]})})})}),I=(n(91),function(e){var t=e.item;return Object(c.jsxs)("div",{className:"item-div",children:[Object(c.jsx)("div",{children:Object(c.jsxs)("p",{className:"item-title",children:[Object(c.jsx)("span",{children:t.name}),Object(c.jsx)("span",{className:"right",children:t.price})]})}),Object(c.jsx)("p",{className:"item-description",children:Object(c.jsx)("small",{children:t.description})}),t.additions.map((function(e){return Object(c.jsxs)("p",{className:"additions",children:[Object(c.jsx)("small",{children:e.name}),Object(c.jsx)("span",{className:"right-additions",children:e.price})]},e._id)}))]})}),E=function(e){var t=e.type;return Object(c.jsxs)("div",{className:"type-div",children:[Object(c.jsx)("div",{className:"flex",children:Object(c.jsx)("p",{className:"subtitle",children:Object(c.jsx)("strong",{children:t.name})})}),Object(c.jsx)(w.a,{children:t.items.map((function(e){return Object(c.jsx)(k.a,{xs:12,md:4,children:Object(c.jsx)(I,{item:e})},e._id)}))})]})},C=function(e){return Object(c.jsxs)(g.a,{fluid:!0,className:"container-menu-component",children:[Object(c.jsx)("p",{className:"title-menu fancy",children:Object(c.jsx)("span",{children:Object(c.jsx)("strong",{children:e.menu.name})})}),Object(c.jsx)(w.a,{children:e.menu.types.map((function(e){return Object(c.jsx)(E,{type:e},e._id)}))})]})},R=(n(92),function(){document.title="MaxRestaurant | Menu";var e=Object(i.c)((function(e){return e.menu})).map((function(e){return Object(c.jsx)(w.a,{children:Object(c.jsx)(C,{menu:e})},e.id)}));return Object(c.jsx)(g.a,{fluid:!0,className:"container-menu-page",children:e})}),L=n(9),A=n(105),_=n(103),M=n(28),S=function(e){var t=Object(a.useState)(""),n=Object(M.a)(t,2),c=n[0],r=n[1];return{type:e,value:c,onChange:function(e){r(e.target.value)}}},G=function(){var e=Object(a.useState)(null),t=Object(M.a)(e,2),n=t[0],c=t[1];return{selected:n,onChange:function(e){c(e.target.value)}}},P=function(e,t){return function(){var n=Object(j.a)(l.a.mark((function n(c){return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:c({type:"SET_NOTIFICATION",data:{message:e,delay:setTimeout((function(){c(D(""))}),1e3*t)}});case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},D=function(){return{type:"DELETE_NOTIFICATION"}},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_NOTIFICATION":return clearTimeout(e.delay),t.data;case"DELETE_NOTIFICATION":return"";default:return e}},z=n(108),V=(n(93),function(){var e=Object(i.c)((function(e){return e.notification}));return Object(c.jsx)("div",{children:e?Object(c.jsx)(z.a,{className:"notification",children:e.message}):Object(c.jsx)(c.Fragment,{})})}),Y=(n(94),function(){document.title="MaxRestaurant | Reservate";var e=Object(i.b)(),t=G(),n=G(),a=S("date"),r=S("text"),s=S("text"),o=S("text"),d=S("email");return Object(c.jsxs)("div",{className:"reservation-container",children:[Object(c.jsx)(g.a,{children:Object(c.jsxs)(A.a,{onSubmit:function(c){if(c.preventDefault(),null===t.selected||null===n.selected||null===a.value||null===r.value||null===s.value||null===d.value)e(P("Missing data",2));else{var i={totalPeople:t.selected,hour:n.selected,date:a.value,firstName:r.value,lastName:s.value,phoneNumber:o.value,email:d.value};e((u=i,function(){var e=Object(j.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.createReservation(u);case 2:n=e.sent,t({type:"CREATE_RESERVATION",content:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())),e(P("Reservation created",2))}var u},children:[Object(c.jsxs)(w.a,{className:"row-form",children:[Object(c.jsx)(k.a,{xs:12,md:4,children:Object(c.jsxs)(A.a.Group,{controlId:"totalPeople",children:[Object(c.jsx)(A.a.Label,{className:"label-reservation",children:"Total People"}),Object(c.jsxs)(A.a.Control,Object(L.a)(Object(L.a)({},t),{},{className:"form-control-reservation",as:"select",defaultValue:"Choose...",children:[Object(c.jsx)("option",{disabled:!0,children:"Choose..."}),Object(c.jsx)("option",{children:"1"}),Object(c.jsx)("option",{children:"2"}),Object(c.jsx)("option",{children:"3"}),Object(c.jsx)("option",{children:"4"}),Object(c.jsx)("option",{children:"5"}),Object(c.jsx)("option",{children:"6"}),Object(c.jsx)("option",{children:"7"}),Object(c.jsx)("option",{children:"8"})]})),Object(c.jsxs)(A.a.Text,{className:"text-reservation",children:["To reserve a table for more than 8 people call ",Object(c.jsx)("span",{className:"phone-number",children:"1500-777-0800"}),"."]})]})}),Object(c.jsx)(k.a,{xs:12,md:4,children:Object(c.jsxs)(A.a.Group,{controlId:"date",children:[Object(c.jsx)(A.a.Label,{className:"label-reservation",children:"Date"}),Object(c.jsx)(A.a.Control,Object(L.a)(Object(L.a)({},a),{},{className:"form-control-reservation"})),Object(c.jsx)(A.a.Text,{className:"text-reservation",children:"You have up to three days in advance to change the date."})]})}),Object(c.jsx)(k.a,{xs:12,md:4,children:Object(c.jsxs)(A.a.Group,{controlId:"hour",children:[Object(c.jsx)(A.a.Label,{className:"label-reservation",children:"Hour"}),Object(c.jsxs)(A.a.Control,Object(L.a)(Object(L.a)({},n),{},{className:"form-control-reservation",as:"select",defaultValue:"Choose...",children:[Object(c.jsx)("option",{disabled:!0,children:"Choose..."}),Object(c.jsx)("option",{children:"9:00"}),Object(c.jsx)("option",{children:"9:30"}),Object(c.jsx)("option",{children:"10:00"}),Object(c.jsx)("option",{children:"10:30"}),Object(c.jsx)("option",{children:"11:00"}),Object(c.jsx)("option",{children:"11:30"}),Object(c.jsx)("option",{children:"12:00"}),Object(c.jsx)("option",{children:"12:30"}),Object(c.jsx)("option",{children:"13:00"}),Object(c.jsx)("option",{children:"13:30"}),Object(c.jsx)("option",{children:"18:00"}),Object(c.jsx)("option",{children:"18:30"}),Object(c.jsx)("option",{children:"19:00"}),Object(c.jsx)("option",{children:"19:30"}),Object(c.jsx)("option",{children:"20:00"}),Object(c.jsx)("option",{children:"20:30"}),Object(c.jsx)("option",{children:"21:00"}),Object(c.jsx)("option",{children:"21:30"}),Object(c.jsx)("option",{children:"22:00"}),Object(c.jsx)("option",{children:"22:30"}),Object(c.jsx)("option",{children:"23:00"}),Object(c.jsx)("option",{children:"23:30"})]})),Object(c.jsx)(A.a.Text,{className:"text-reservation",children:"You have up to three days in advance to change the hour."})]})})]}),Object(c.jsxs)("div",{className:"personal-info2",children:[Object(c.jsx)("p",{className:"subtitle",children:"Personal Info"}),Object(c.jsxs)(w.a,{className:"row-form",children:[Object(c.jsx)(k.a,{xs:12,md:6,children:Object(c.jsxs)(A.a.Group,{controlId:"firstName",children:[Object(c.jsx)(A.a.Label,{className:"label-reservation",children:"First Name"}),Object(c.jsx)(A.a.Control,Object(L.a)(Object(L.a)({},r),{},{className:"form-control-reservation"}))]})}),Object(c.jsx)(k.a,{xs:12,md:6,children:Object(c.jsxs)(A.a.Group,{controlId:"lastName",children:[Object(c.jsx)(A.a.Label,{className:"label-reservation",children:"Last Name"}),Object(c.jsx)(A.a.Control,Object(L.a)(Object(L.a)({},s),{},{className:"form-control-reservation"}))]})})]}),Object(c.jsxs)(w.a,{children:[Object(c.jsx)(k.a,{xs:12,md:6,children:Object(c.jsxs)(A.a.Group,{controlId:"phone",children:[Object(c.jsx)(A.a.Label,{className:"label-reservation",children:"Phone"}),Object(c.jsx)(A.a.Control,Object(L.a)(Object(L.a)({},o),{},{className:"form-control-reservation"})),Object(c.jsx)(A.a.Text,{className:"text-reservation",children:"Only for trouble reports."})]})}),Object(c.jsx)(k.a,{xs:12,md:6,children:Object(c.jsxs)(A.a.Group,{controlId:"email",children:[Object(c.jsx)(A.a.Label,{className:"label-reservation",children:"Email"}),Object(c.jsx)(A.a.Control,Object(L.a)(Object(L.a)({},d),{},{className:"form-control-reservation"})),Object(c.jsx)(A.a.Text,{className:"text-reservation",children:"In case of problems with the reservation we will contact this email."})]})})]})]}),Object(c.jsx)("div",{className:"btn-middle",children:Object(c.jsx)(_.a,{className:"button-reservation",type:"submit",children:"Submit"})})]})}),Object(c.jsx)(V,{})]})}),B=n(104),Z=function(e){var t=e.reservations;return Object(c.jsxs)(B.a,{className:"table-reservations",responsive:!0,striped:!0,bordered:!0,hover:!0,children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"First Name"}),Object(c.jsx)("th",{children:"Last Name"}),Object(c.jsx)("th",{children:"Phone number"}),Object(c.jsx)("th",{children:"Email"}),Object(c.jsx)("th",{children:"Date"}),Object(c.jsx)("th",{children:"Hour"}),Object(c.jsx)("th",{children:"Total people"})]})}),Object(c.jsx)("tbody",{children:t.map((function(e){return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:e.firstName}),Object(c.jsx)("td",{children:e.lastName}),Object(c.jsx)("td",{children:e.phoneNumber}),Object(c.jsx)("td",{children:e.email}),Object(c.jsx)("td",{children:e.date}),Object(c.jsx)("td",{children:e.hour}),Object(c.jsx)("td",{children:e.totalPeople})]},e.id)}))})]})},H=(n(96),function(){document.title="MaxRestaurant | Admin";var e=Object(i.c)((function(e){return e.reservations}));return Object(c.jsx)("div",{children:Object(c.jsx)(Z,{reservations:e})})}),J=n(107),U=n(106),W=(n(97),function(){var e=Object(a.useState)(!1),t=Object(M.a)(e,2),n=t[0],r=t[1],s=Object(a.useState)(!1),i=Object(M.a)(s,2),o=i[0],l=i[1];return Object(a.useEffect)((function(){window.addEventListener("scroll",(function(){l(window.scrollY>50)}))}),[]),Object(c.jsxs)(J.a,{expanded:n,fixed:"top",expand:"lg",className:o?"a-nav nav-shadow":"a-nav",children:[Object(c.jsx)(J.a.Toggle,{onClick:function(){return r(!n&&"expanded")},"aria-controls":"basic-navbar-nav"}),Object(c.jsxs)(J.a.Collapse,{id:"responsive-navbar-nav",children:[Object(c.jsxs)(d.b,{onClick:function(){return r(!1)},className:"nav-link logo",to:"/",children:["Max",Object(c.jsx)("span",{className:"restaurant",children:"Restaurant"})]}),Object(c.jsxs)(U.a,{className:"mr-auto",children:[Object(c.jsx)(d.b,{onClick:function(){return r(!1)},to:"/menu",className:"nav-link link-style",children:"Menu"}),Object(c.jsx)(d.b,{onClick:function(){return r(!1)},to:"/about",className:"nav-link link-style",children:"About"})]}),Object(c.jsx)(U.a,{children:Object(c.jsx)(d.b,{onClick:function(){return r(!1)},to:"/reservations",className:"nav-link link-style",children:"Reservations"})})]})]})});var q=function(){var e=Object(i.b)();return Object(a.useEffect)((function(){(function(){var t=Object(j.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e(function(){var e=Object(j.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.getAll();case 2:n=e.sent,t({type:"INIT_MENU",data:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e(function(){var e=Object(j.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.getReservations();case 2:n=e.sent,t({type:"GET_ALL",content:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e]),Object(c.jsxs)(d.a,{className:"page",children:[Object(c.jsx)(W,{}),Object(c.jsx)("div",{className:"page-component",children:Object(c.jsxs)(u.c,{children:[Object(c.jsx)(u.a,{exact:!0,path:"/",component:y}),Object(c.jsx)(u.a,{path:"/menu",component:R}),Object(c.jsx)(u.a,{path:"/about",component:T}),Object(c.jsx)(u.a,{path:"/reservations",component:Y}),Object(c.jsx)(u.a,{path:"/admin",component:H})]})})]})},K=n(22),Q=n(58),X=n(59),$=Object(K.combineReducers)({notification:F,reservations:N,menu:O}),ee=Object(K.createStore)($,Object(X.composeWithDevTools)(Object(K.applyMiddleware)(Q.a)));s.a.render(Object(c.jsx)(i.a,{store:ee,children:Object(c.jsx)(q,{})}),document.getElementById("root"))}},[[99,1,2]]]);
//# sourceMappingURL=main.cecaa5ce.chunk.js.map