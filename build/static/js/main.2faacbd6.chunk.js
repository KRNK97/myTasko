(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{26:function(e,t,s){},60:function(e,t,s){"use strict";s.r(t);var a=s(1),n=s(28),c=s.n(n),o=s(3),l=s(6),i=s(5),r=s(29),d=s.n(r).a.create({baseURL:"https://mytasko.herokuapp.com/api/",timeout:5e3,headers:{Authorization:localStorage.getItem("access_token")?"JWT "+localStorage.getItem("access_token"):null,"Content-Type":"application/json",accept:"application/json"}}),u=s(2),j=(s(26),s(0)),b=function(e){var t=e.setTasks,s=e.setEdit,n=(e.editVisible,e.setCompTasks),c=e.setPendTasks,r=(Object(u.e)(),Object.freeze({title:"",status:!1})),b=Object(a.useState)(r),p=Object(o.a)(b,2),m=p[0],g=p[1];return Object(j.jsx)("div",{className:"mb-1",children:Object(j.jsx)("form",{action:"",onSubmit:function(e){e.preventDefault(),d.post("tasks/add/",{title:m.title}).then((function(e){g(Object(i.a)(Object(i.a)({},r),{},Object(l.a)({},"title",""))),console.log(e),d.get("tasks/all/").then((function(e){console.log(e.data.tasks),t(e.data.tasks),n(e.data.tasks.filter((function(e){return e.status}))),c(e.data.tasks.filter((function(e){return!e.status})))})).catch((function(e){console.log(e)})),console.log("getting data")})).catch((function(e){console.log(e)}))},children:Object(j.jsxs)("div",{class:"input-group mb-3",children:[Object(j.jsx)("div",{class:"input-group-prepend",children:Object(j.jsx)("span",{class:"input-group-text",id:"",children:Object(j.jsx)("i",{class:"fas fa-plus"})})}),Object(j.jsx)("input",{type:"text",name:"title",placeholder:"Add a task",className:"form-control form-inputs",onChange:function(e){g(Object(i.a)(Object(i.a)({},r),{},Object(l.a)({},e.target.name,e.target.value))),console.log(m)},value:m.title,onFocus:function(){s(!1)},autoComplete:"off"})]})})})},p=function(e){var t=e.selectedTask,s=e.setTasks,n=e.setCompTasks,c=e.setPendTasks;console.log(t);var r=Object.freeze({title:"",status:!1});Object(a.useEffect)((function(){var e;m(Object(i.a)(Object(i.a)({},r),{},(e={},Object(l.a)(e,"title",t?t.title:""),Object(l.a)(e,"status",!!t&&t.status),e)))}),[t]);var u=Object(a.useState)(r),b=Object(o.a)(u,2),p=b[0],m=b[1];return Object(j.jsx)("div",{className:"mb-1",children:Object(j.jsx)("form",{action:"",onSubmit:function(e){e.preventDefault(),d.put("tasks/".concat(t.id,"/"),{title:p.title}).then((function(e){m(Object(i.a)(Object(i.a)({},r),{},Object(l.a)({},"title",""))),console.log(e),d.get("tasks/all/").then((function(e){console.log(e.data.tasks),s(e.data.tasks),n(e.data.tasks.filter((function(e){return e.status}))),c(e.data.tasks.filter((function(e){return!e.status})))})).catch((function(e){console.log(e)})),console.log("updating data")})).catch((function(e){console.log(e)}))},children:Object(j.jsxs)("div",{class:"input-group mb-3",children:[Object(j.jsx)("div",{class:"input-group-prepend",children:Object(j.jsx)("span",{class:"input-group-text",id:"",children:Object(j.jsx)("i",{class:"fas fa-pen"})})}),Object(j.jsx)("input",{type:"text",name:"title",placeholder:"select a task to start editing",className:"form-control form-inputs-edit",onChange:function(e){var s;m(Object(i.a)(Object(i.a)({},r),{},(s={},Object(l.a)(s,e.target.name,e.target.value),Object(l.a)(s,"status",t.status),s))),console.log(p)},value:p.title,disabled:t?"":"disabled",autoComplete:"off"})]})})})},m=function(e){var t=e.tasks,s=e.setTasks,a=e.setSelected,n=e.setEdit,c=e.editVisible,o=e.setCompTasks,l=e.setPendTasks;if(!e.user)return Object(j.jsxs)("div",{className:"m-4 p-4 text-muted text-lg-center",children:[Object(j.jsx)("div",{className:"font-weight-bold",children:"Hey There,"}),Object(j.jsx)("div",{className:"title",children:"Sign Up To Start Using Tasko."}),Object(j.jsx)("a",{href:"/register/",className:"btn btn-outline-primary btn-md-sm btn-block mt-2",children:"Sign Up"})]});if(t.length<1)return Object(j.jsx)("div",{className:"font-weight-bold p-2 text-center text-muted",children:"Nothing here to see . . ."});var i=t.map((function(e){return Object(j.jsxs)("div",{className:"list-group-item list-group-item-action d-flex align-items-center justify-content-between ".concat(e.status?"completed":""),onClick:function(){return a(e)},children:[Object(j.jsx)("span",{className:"text-dark w-100 p-0 task-title",children:e.title}),Object(j.jsxs)("div",{className:"buttons d-flex justify-content-between",children:[Object(j.jsx)("span",{className:e.status?"btn btn-primary mr-1 icons":"btn btn-outline-primary mr-1 icons",onClick:function(){return t=e.id,console.log(t),void d.post("tasks/".concat(t,"/status/")).then((function(e){console.log(e),d.get("tasks/all/").then((function(e){console.log(e.data.tasks),s(e.data.tasks),o(e.data.tasks.filter((function(e){return e.status}))),l(e.data.tasks.filter((function(e){return!e.status})))})).catch((function(e){console.log(e)}))})).catch((function(e){console.log(e)}));var t},children:Object(j.jsx)("i",{class:"fas fa-check"})}),Object(j.jsx)("span",{className:"btn btn-outline-danger icons",onClick:function(){return t=e.id,console.log(t),void d.delete("tasks/".concat(t,"/")).then((function(e){console.log(e),d.get("tasks/all/").then((function(e){console.log(e.data.tasks),s(e.data.tasks),o(e.data.tasks.filter((function(e){return e.status}))),l(e.data.tasks.filter((function(e){return!e.status})))})).catch((function(e){console.log(e)}))})).catch((function(e){console.log(e)}));var t},children:Object(j.jsx)("i",{class:"far fa-trash-alt"})})]})]})}));return Object(j.jsxs)("div",{className:"list-group shadow-sm",children:[Object(j.jsx)("span",{className:"btn btn-light text-muted btn-block mb-1 mx-auto font-weight-bold",onClick:function(){n(!c)},children:c?"Click on an item, then edit it using the displayed input box.":"Show Editing Input"}),i]})},g=function(e){var t=e.setNewUser,s=Object(u.e)(),n=Object(a.useState)({email:"",password:"",username:"",msg:""}),c=Object(o.a)(n,2),r=c[0],b=c[1],p=Object.freeze({username:"",email:"",password:""}),m=Object(a.useState)(p),g=Object(o.a)(m,2),h=g[0],f=g[1],O=function(e){console.log(e.target.name),f(Object(i.a)(Object(i.a)({},h),{},Object(l.a)({},e.target.name,e.target.value))),b({email:"",password:"",username:"",msg:""})};return Object(j.jsx)("div",{className:"mb-1",children:Object(j.jsxs)("form",{action:"",onSubmit:function(e){e.preventDefault(),d.post("register/",{username:h.username,email:h.email,password:h.password}).then((function(e){console.log("res "+e),s.push("/login/"),t(h.username)})).catch((function(e){e.response&&(b({msg:JSON.stringify(e.response.data.email[0])}),console.log("error "+JSON.stringify(e.response.data)))}))},className:"p-2",children:[Object(j.jsx)("legend",{className:"text-primary font-weight-bold small",children:"Sign Up With Tasko"}),Object(j.jsxs)("div",{class:"input-group mb-3",children:[Object(j.jsx)("div",{class:"input-group-prepend ",style:{width:"7rem"},children:Object(j.jsx)("span",{class:"input-group-text w-100 font-weight-bold",id:"",children:"Username"})}),Object(j.jsx)("input",{type:"text",name:"username",placeholder:"set a username",className:"form-control form-inputs",onChange:O,autoComplete:"off",required:!0})]}),Object(j.jsxs)("div",{class:"input-group mb-3",children:[Object(j.jsx)("div",{class:"input-group-prepend",style:{width:"7rem"},children:Object(j.jsx)("span",{class:"input-group-text w-100 font-weight-bold",id:"",children:"Email"})}),Object(j.jsx)("input",{type:"email",name:"email",placeholder:"enter your email",className:"form-control form-inputs",onChange:O,autoComplete:"off",required:!0})]}),Object(j.jsxs)("div",{class:"input-group mb-3",children:[Object(j.jsx)("div",{class:"input-group-prepend",style:{width:"7rem"},children:Object(j.jsx)("span",{class:"input-group-text w-100 font-weight-bold",id:"",children:"Password"})}),Object(j.jsx)("input",{type:"password",name:"password",placeholder:"set a password",className:"form-control form-inputs",onChange:O,autoComplete:"off",required:!0})]}),Object(j.jsxs)("div",{className:"".concat(""!=r.msg?"text-danger my-2 small font-weight-bold border border-danger p-2 rounded":""),children:[Object(j.jsx)("span",{className:"".concat(""!=r.msg?"mr-1":"d-none"),children:Object(j.jsx)("i",{class:"fas fa-exclamation-circle"})}),r.msg.slice(7,-2)]}),Object(j.jsx)("button",{type:"submit",className:"btn btn-primary btn-block",children:"Sign Up"})]})})},h=function(e){var t=e.newUser,s=Object(u.e)(),n=Object(a.useState)({email:"",password:"",username:"",msg:""}),c=Object(o.a)(n,2),r=c[0],b=c[1],p=Object.freeze({email:"",password:""}),m=Object(a.useState)(p),g=Object(o.a)(m,2),h=g[0],f=g[1],O=function(e){console.log(e.target.name),f(Object(i.a)(Object(i.a)({},h),{},Object(l.a)({},e.target.name,e.target.value))),b({email:"",password:"",username:"",msg:""})};return Object(j.jsx)("div",{className:"mb-1",children:Object(j.jsxs)("form",{action:"",onSubmit:function(e){e.preventDefault(),console.log(h),d.post("token/",{email:h.email,password:h.password}).then((function(e){console.log(e),localStorage.setItem("access_token",e.data.access),localStorage.setItem("refresh_token",e.data.refresh),d.defaults.headers.Authorization="JWT "+localStorage.getItem("access_token"),s.push("/"),window.location.reload()})).catch((function(e){e.response&&(b({msg:JSON.stringify(e.response.data.detail)}),console.log("error "+JSON.stringify(e.response.data)))}))},className:"p-2",children:[Object(j.jsx)("div",{className:"".concat(t?"my-2 border-bottom border-success mb-2 text-right":"d-none"),children:Object(j.jsxs)("span",{className:"small font-weight-bold",children:["account created for "," ",Object(j.jsxs)("span",{className:"newusername text-primary",children:["".concat(t)," "]}),Object(j.jsx)("span",{className:"font-weight-regular"})]})}),Object(j.jsx)("legend",{className:"text-primary font-weight-bold small",children:"Sign In To Tasko"}),Object(j.jsxs)("div",{class:"input-group mb-3",children:[Object(j.jsx)("div",{class:"input-group-prepend",style:{width:"7rem"},children:Object(j.jsx)("span",{class:"input-group-text w-100 font-weight-bold",id:"",children:"Email"})}),Object(j.jsx)("input",{type:"email",name:"email",placeholder:"enter your email",className:"form-control form-inputs",onChange:O,autoComplete:"off",required:!0})]}),Object(j.jsxs)("div",{class:"input-group mb-3",children:[Object(j.jsx)("div",{class:"input-group-prepend",style:{width:"7rem"},children:Object(j.jsx)("span",{class:"input-group-text font-weight-bold w-100",id:"",children:"Password"})}),Object(j.jsx)("input",{type:"password",name:"password",placeholder:"enter your password",className:"form-control form-inputs",onChange:O,autoComplete:"off",required:!0})]}),Object(j.jsxs)("div",{className:"".concat(""!=r.msg?"text-danger my-2 small font-weight-bold border border-danger p-2 rounded":""),children:[Object(j.jsx)("span",{className:"".concat(""!=r.msg?"mr-1":"d-none"),children:Object(j.jsx)("i",{class:"fas fa-exclamation-circle"})}),r.msg.slice(1,-1)]}),Object(j.jsx)("button",{type:"submit",className:"btn btn-primary btn-block",children:"Sign In"})]})})},f=function(e){var t=e.user,s=e.setUser,a=Object(u.e)(),n=function(){localStorage.removeItem("access_token"),localStorage.removeItem("refresh_token"),d.defaults.headers.Authorization=null,s(null),a.push("/"),window.location.reload()};return Object(j.jsx)("div",{children:Object(j.jsxs)("nav",{class:"navbar navbar-expand-lg navbar-light bg-light",children:[Object(j.jsx)("a",{class:"navbar-brand font-weight-bold text-primary",href:"/",children:"Tasko"}),Object(j.jsx)("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(j.jsx)("span",{class:"navbar-toggler-icon"})}),Object(j.jsx)("div",{class:"collapse navbar-collapse",id:"navbarNav",children:Object(j.jsxs)("ul",{class:"navbar-nav w-100",children:[t?Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("li",{class:"nav-item ",children:Object(j.jsx)("a",{class:"nav-link",href:"/",onClick:n,children:"Logout"})})}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("li",{class:"nav-item",children:Object(j.jsx)("a",{class:"nav-link",href:"/login/",children:Object(j.jsx)("span",{className:"",children:"Sign In"})})}),Object(j.jsx)("li",{class:"nav-item",children:Object(j.jsx)("a",{class:"nav-link",href:"/register/",children:Object(j.jsx)("span",{className:"",children:"Sign Up"})})})]}),Object(j.jsx)("div",{className:"p-lg-2 p-0 font-weight-bold text-muted username",children:t})]})})]})})},O=s(11),x=function(){var e=Object(a.useState)(null),t=Object(o.a)(e,2),s=t[0],n=t[1],c=Object(a.useState)([]),l=Object(o.a)(c,2),i=l[0],r=l[1],x=Object(a.useState)(null),v=Object(o.a)(x,2),k=v[0],w=v[1],N=Object(a.useState)(!1),y=Object(o.a)(N,2),S=y[0],T=y[1],C=Object(a.useState)([]),U=Object(o.a)(C,2),I=U[0],E=U[1],P=Object(a.useState)([]),_=Object(o.a)(P,2),J=_[0],z=_[1],q=Object(a.useState)("all"),A=Object(o.a)(q,2),F=A[0],D=A[1],V=Object(a.useState)(null),W=Object(o.a)(V,2),L=W[0],G=W[1];Object(a.useEffect)((function(){d.get("getuser/").then((function(e){console.log(e.data.current_user),n(e.data.current_user)})).catch((function(e){console.log(e)}))}),n),Object(a.useEffect)((function(){d.get("tasks/all/").then((function(e){console.log(e.data.tasks),r(e.data.tasks),E(e.data.tasks.filter((function(e){return e.status}))),z(e.data.tasks.filter((function(e){return!e.status})))})).catch((function(e){console.log(e)})),console.log("getting data")}),[r]);return Object(j.jsx)(O.a,{children:Object(j.jsxs)("div",{className:"container mt-lg-4 mt-0",children:[Object(j.jsx)(f,{user:s,setUser:n}),Object(j.jsxs)("div",{className:"header px-2 d-flex align-items-center justify-content-between",children:[Object(j.jsx)("div",{className:"my-1 title d-inline",children:"Tasko"}),Object(j.jsxs)("div",{class:"input-group my-1 w-50",children:[Object(j.jsx)("div",{class:"input-group-prepend",children:Object(j.jsx)("label",{class:"input-group-text",for:"inputGroupSelect01",children:"Filter"})}),Object(j.jsxs)("select",{name:"filter",id:"filter",className:"custom-select",onChange:function(e){return function(e){D(e.target.value)}(e)},children:[Object(j.jsx)("option",{value:"all",className:"font-weight-regular text-primary p-2",selected:!0,children:"All"}),Object(j.jsx)("option",{value:"comp",className:"font-weight-regular text-primary p-2",children:"Completed"}),Object(j.jsx)("option",{value:"pend",className:"font-weight-regular text-primary p-2",children:"Pending"})]})]})]}),Object(j.jsx)(u.a,{exact:!0,path:"/",component:function(){return Object(j.jsxs)(a.Fragment,{children:[Object(j.jsx)(b,{setTasks:r,setEdit:T,editVisible:S,setCompTasks:E,setPendTasks:z}),S?Object(j.jsx)(p,{selectedTask:k,setTasks:r,setCompTasks:E,setPendTasks:z}):"",Object(j.jsx)(m,{tasks:"all"==F?i:"comp"==F?I:J,setTasks:r,setSelected:w,setEdit:T,editVisible:S,setCompTasks:E,setPendTasks:z,user:s})]})}}),Object(j.jsx)(u.a,{exact:!0,path:"/register/",component:function(){return Object(j.jsx)(g,{setNewUser:G})}}),Object(j.jsx)(u.a,{exact:!0,path:"/login/",component:function(){return Object(j.jsx)(h,{newUser:L})}})]})})};s(59);c.a.render(Object(j.jsx)(x,{}),document.querySelector("#root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.2faacbd6.chunk.js.map