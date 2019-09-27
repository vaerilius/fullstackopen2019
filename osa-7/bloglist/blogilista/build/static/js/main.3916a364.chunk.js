(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{202:function(e,t,n){e.exports=n(357)},357:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(75),u=n.n(c),l=n(24),o=n(366),i=n(61),s=n(369),m=function(e){var t=e.blog;return a.a.createElement("div",null,a.a.createElement(s.a.Item,null,a.a.createElement(s.a.Icon,{name:"blogger",size:"large"}),a.a.createElement(i.b,{to:"blogs/".concat(t.id)}," ",t.title," ",t.author)))},p=n(59),f=n(370),d=a.a.forwardRef(function(e,t){var n=Object(r.useState)(!1),c=Object(p.a)(n,2),u=c[0],l=c[1],o={display:u?"none":""},i={display:u?"":"none"},s=function(){l(!u)};return Object(r.useImperativeHandle)(t,function(){return{toggleVisibility:s}}),a.a.createElement("div",null,a.a.createElement("div",{style:o},a.a.createElement(f.a,{onClick:s},e.buttonLabel)),a.a.createElement("div",{style:i},e.children,a.a.createElement(f.a,{onClick:s},"cancel")))});d.displayName="Togglable";var b=d,g=n(8),v=n.n(g),E=n(16),h=n(191),O=n(78),y=n(62),w=n.n(y),j="/api/blogs",k=null,x=function(){return{headers:{Authorization:k}}},S={getAll:function(){return w.a.get(j).then(function(e){return e.data})},create:function(){var e=Object(E.a)(v.a.mark(function e(t){var n;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.post(j,t,x());case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),update:function(){var e=Object(E.a)(v.a.mark(function e(t){var n;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.put("".concat(j,"/").concat(t.id),t,x());case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),remove:function(){var e=Object(E.a)(v.a.mark(function e(t){var n;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.delete("".concat(j,"/").concat(t.id),x());case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),setToken:function(e){k="bearer ".concat(e)},destroyToken:function(){k=null},comment:function(){var e=Object(E.a)(v.a.mark(function e(t,n){var r;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.post("".concat(j,"/").concat(n,"/comments"),t,x());case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}()},T=function(e){return function(){var t=Object(E.a)(v.a.mark(function t(n){return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n({type:"SET_MESSAGE",notification:e}),setTimeout(function(){n({type:"SET_MESSAGE",notification:{type:"",message:null}})},5e3);case 2:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{type:"",message:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_MESSAGE":return t.notification;default:return e}},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INIT_BLOGS":return Object(O.a)(t.blogs);case"CREATE_BLOG":return[].concat(Object(O.a)(e),[t.blog]);case"VOTE_BLOG":return Object(O.a)(e).map(function(e){return e.id!==t.data.id?e:t.data}).sort(function(e,t){return t.likes-e.likes});case"COMMENT_BLOG":return Object(O.a)(e).map(function(e){return e.id!==t.data.id?e:t.data});case"REMOVE_BLOG":return Object(O.a)(e).filter(function(e){return e.id!==t.id});default:return e}},U=n(367),A=n(365),L=function(e){var t=Object(r.useState)(""),n=Object(p.a)(t,2),a=n[0],c=n[1];return[{type:e,value:a,onChange:function(e){c(e.target.value)}},function(){c("")}]},_=Object(l.b)(null,{onCreateBlog:function(e){return function(){var t=Object(E.a)(v.a.mark(function t(n){var r,a;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r={title:e.title,author:e.author,url:e.url,likes:0},t.next=4,S.create(r);case 4:a=t.sent,n({type:"CREATE_BLOG",blog:a}),n(T({message:"a new blog ".concat(e.title," by ").concat(e.author," added"),type:""})),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),n(T({message:t.t0.message,type:"error"}));case 12:case"end":return t.stop()}},t,null,[[0,9]])}));return function(e){return t.apply(this,arguments)}}()}})(function(e){var t=L("text"),n=Object(p.a)(t,2),r=n[0],c=n[1],u=L("text"),l=Object(p.a)(u,2),o=l[0],i=l[1],s=L("text"),m=Object(p.a)(s,2),d=m[0],b=m[1],g=function(){var t=Object(E.a)(v.a.mark(function t(n){return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n.preventDefault(),e.onCreateBlog({title:r.value,author:o.value,url:d.value}),e.newBlogRef.current.toggleVisibility(),c(),i(),b();case 6:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}();return a.a.createElement("div",null,a.a.createElement("h3",null,"create new blog"),a.a.createElement(U.a,{onSubmit:g},a.a.createElement(U.a.Group,{widths:"equal"},a.a.createElement(U.a.Field,Object.assign({id:"title",control:A.a,label:"Title",placeholder:"Title"},r)),a.a.createElement(U.a.Field,Object.assign({id:"author",control:A.a,label:"Author",placeholder:"Author"},o)),a.a.createElement(U.a.Field,Object.assign({id:"url",control:A.a,label:"Url",placeholder:"Url"},d))),a.a.createElement(U.a.Field,{id:"create",control:f.a,content:"create",label:"Label with htmlFor",type:"submit"})))}),R=Object(l.b)(function(e){return{blogs:e.blogs}})(function(e){var t=a.a.createRef();return a.a.createElement("div",null,a.a.createElement(b,{buttonLabel:"create new",ref:t},a.a.createElement(_,{newBlogRef:t})),a.a.createElement(s.a,{celled:!0,relaxedsize:"big"},e.blogs.map(function(e){return a.a.createElement(m,{key:e.id,blog:e})})))}),G=Object(l.b)(function(e){return{user:e.user}},{onLikeBlog:function(e){return function(){var t=Object(E.a)(v.a.mark(function t(n){var r,a;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r=Object(h.a)({},e,{likes:e.likes+1}),t.next=4,S.update(r);case 4:a=t.sent,n({type:"VOTE_BLOG",data:a}),n(T({message:"blog ".concat(e.title," by ").concat(e.author," liked!"),type:""})),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),n(T({message:t.t0.message,type:"error"}));case 12:case"end":return t.stop()}},t,null,[[0,9]])}));return function(e){return t.apply(this,arguments)}}()},onRemoveBlog:function(e){return function(){var t=Object(E.a)(v.a.mark(function t(n){var r;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r=e,t.next=4,S.remove(e);case 4:n({type:"REMOVE_BLOG",id:r.id}),n(T({message:"blog ".concat(e.title," by ").concat(e.author," removed!"),type:""})),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),n(T({message:"".concat(e.title," has removed allready!"),type:"error"}));case 11:case"end":return t.stop()}},t,null,[[0,8]])}));return function(e){return t.apply(this,arguments)}}()},onAddComment:function(e,t){return function(){var n=Object(E.a)(v.a.mark(function n(r){var a;return v.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,S.comment(e,t);case 2:a=n.sent,r({type:"COMMENT_BLOG",data:a});case 4:case"end":return n.stop()}},n)}));return function(e){return n.apply(this,arguments)}}()}})(function(e){if(void 0===e.blog)return null;var t=L("text"),n=Object(p.a)(t,2),r=n[0],c=n[1];return a.a.createElement("div",null,a.a.createElement("h1",null,e.blog.title," ",e.blog.author),a.a.createElement("div",null,a.a.createElement("a",{href:e.blog.url},e.blog.url),a.a.createElement("div",null,e.blog.likes," likes",a.a.createElement(f.a,{onClick:function(){return t=e.blog,e.onLikeBlog(t);var t},id:"like"},"like")),a.a.createElement("div",null,"added by ",e.blog.user.name),e.blog.user.username===e.user.username&&a.a.createElement(f.a,{onClick:function(){return t=e.blog,e.onRemoveBlog(t);var t}},"remove ")),a.a.createElement("h4",null,"Comments"),a.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.onAddComment({comment:r.value},e.blog.id),c()}},a.a.createElement("div",null,a.a.createElement(A.a,Object.assign({},r,{id:"commentInput"})),a.a.createElement(f.a,{type:"submit"},"add comment"))),a.a.createElement("ul",null,e.blog.comments.map(function(e){return a.a.createElement("li",{key:e}," ",e," ")})))}),C={login:function(){var e=Object(E.a)(v.a.mark(function e(t){var n;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.post("/api/login",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INIT_USER":return t.user;case"LOGIN_USER":return t.newUser;case"LOGOUT":return null;default:return e}},z=n(372),M=Object(l.b)(function(e){return{user:e.user}},{loginUser:function(e){return function(){var t=Object(E.a)(v.a.mark(function t(n){var r;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,C.login({username:e.username,password:e.password});case 3:(r=t.sent)&&(window.localStorage.setItem("loggedBlogAppUser",JSON.stringify(r)),S.setToken(r.token),n({type:"LOGIN_USER",newUser:r}),n(T({message:"user: ".concat(r.username," logged in"),type:""}))),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),n(T({message:"wrong username or password",type:"error"}));case 10:case"end":return t.stop()}},t,null,[[0,7]])}));return function(e){return t.apply(this,arguments)}}()}})(function(e){var t=L("text"),n=Object(p.a)(t,1)[0],r=L("password"),c=Object(p.a)(r,1)[0],u=function(){var t=Object(E.a)(v.a.mark(function t(r){return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:r.preventDefault(),e.loginUser({username:n.value,password:c.value});case 2:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}();return a.a.createElement("div",null,a.a.createElement(z.a,{as:"h1"},"Login to the application"),a.a.createElement("form",{onSubmit:u},a.a.createElement("div",null,"k\xe4ytt\xe4j\xe4tunnus",a.a.createElement(A.a,Object.assign({id:"username"},n))),a.a.createElement("div",null,"salasana",a.a.createElement(A.a,Object.assign({id:"password"},c))),a.a.createElement(f.a,{type:"submit"},"login")))}),F=Object(l.b)(function(e){return{notification:e.notification}})(function(e){var t=e.notification;if(null===t.message)return null;var n={color:"error"===t.type?"red":"green",background:"lightgrey",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10};return a.a.createElement("div",{style:n},t.message)}),V=Object(l.b)(function(e){return{user:e.user}},{logout:function(){return function(){var e=Object(E.a)(v.a.mark(function e(t){return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:S.destroyToken(),window.localStorage.removeItem("loggedBlogAppUser"),t({type:"LOGOUT"}),t(T({message:"user loggedout",type:""}));case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}})(function(e){return a.a.createElement(a.a.Fragment,null,e.user.name," logged in ",a.a.createElement(f.a,{onClick:function(){return e.logout()}},"logout"))}),D=n(64),J=n(371),q=Object(l.b)(function(e){return{user:e.user}})(function(e){return a.a.createElement(J.a,{inverted:!0},a.a.createElement(J.a.Item,{name:"blogs"},a.a.createElement(i.b,{to:"/users"},"users")),a.a.createElement(J.a.Item,{name:"users"},a.a.createElement(i.b,{to:"/"},"blogs")),a.a.createElement(J.a.Item,{name:"login"},"       ",e.user?a.a.createElement("em",null,a.a.createElement(V,null)):a.a.createElement(D.a,{to:"/login"})))}),H=function(e){var t=e.user;return void 0===t?null:a.a.createElement("div",null,a.a.createElement("p",null,"Added blogs"),a.a.createElement("ul",null,t.blogs.map(function(e){return a.a.createElement("li",{key:e.id},a.a.createElement(i.b,{to:"/blogs/".concat(e.id)},e.title))})))},W=Object(l.b)(function(e){return{users:e.users}})(function(e){return a.a.createElement("div",null,a.a.createElement("h2",null,"Users"),a.a.createElement("table",null,a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("th",null),a.a.createElement("th",null,"blogs created")),e.users.map(function(e){return"root"===e.username?null:a.a.createElement("tr",{key:e.id},a.a.createElement("td",null,a.a.createElement(i.b,{to:"users/".concat(e.id)},e.name)),a.a.createElement("td",null,e.blogs.length))}))))}),K={getAll:function(){var e=Object(E.a)(v.a.mark(function e(){var t;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.get("/api/users");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INIT_USERS":return Object(O.a)(t.data);default:return e}},Q=Object(l.b)(function(e){return{user:e.user,users:e.users,blogs:e.blogs}},{initializeUser:function(){return function(){var e=Object(E.a)(v.a.mark(function e(t){var n;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:try{null!==(n=JSON.parse(window.localStorage.getItem("loggedBlogAppUser")))?(S.setToken(n.token),t({type:"INIT_USER",user:n})):t({type:"INIT_USER",user:null})}catch(r){console.log(r)}case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},initializeBlogs:function(){return function(){var e=Object(E.a)(v.a.mark(function e(t){var n;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.getAll();case 2:n=e.sent,t({type:"INIT_BLOGS",blogs:n});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},initiazeUsers:function(){return function(){var e=Object(E.a)(v.a.mark(function e(t){var n;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K.getAll();case 2:n=e.sent,t({type:"INIT_USERS",data:n});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}})(function(e){Object(r.useEffect)(function(){e.initializeUser(),e.initializeBlogs(),e.initiazeUsers()},[]);return null===e.user?a.a.createElement(o.a,null,a.a.createElement(M,null)):a.a.createElement(o.a,null,a.a.createElement("div",null,a.a.createElement(i.a,null,a.a.createElement(q,null),a.a.createElement("h2",null,"Awesome Blog App"),a.a.createElement(F,null),a.a.createElement(D.b,{exact:!0,path:"/",render:function(){return a.a.createElement(R,null)}}),a.a.createElement(D.b,{exact:!0,path:"/login",render:function(){return a.a.createElement(M,null)}}),a.a.createElement(D.b,{exact:!0,path:"/blogs/:id",render:function(t){var n=t.match;return a.a.createElement(G,{blog:e.blogs.find(function(e){return e.id===n.params.id})})}}),a.a.createElement(D.b,{exact:!0,path:"/users",render:function(){return a.a.createElement(W,null)}}),a.a.createElement(D.b,{exact:!0,path:"/users/:id",render:function(t){var n,r=t.match;return a.a.createElement(H,{user:(n=r.params.id,e.users.find(function(e){return e.id===n}))})}}))))}),X=n(82),Y=n(189),Z=n(190),$=Object(X.combineReducers)({user:N,notification:I,blogs:B,users:P}),ee=Object(X.createStore)($,Object(Z.composeWithDevTools)(Object(X.applyMiddleware)(Y.a)));u.a.render(a.a.createElement(l.a,{store:ee},a.a.createElement(Q,null)),document.getElementById("root"))}},[[202,2,1]]]);
//# sourceMappingURL=main.3916a364.chunk.js.map