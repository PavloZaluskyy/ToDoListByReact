(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{22:function(t,e,n){},30:function(t,e,n){},32:function(t,e,n){},33:function(t,e,n){},34:function(t,e,n){},35:function(t,e,n){},36:function(t,e,n){},38:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(7),s=n.n(r),i=(n(22),n(13)),o=n.n(i),l=n(16),u=n(2),d=n(3),f=n(5),p=n(4),j=n(9),m="ADD_TASK",v="REMOVE_TASK",k="COMPLETED_TASK",h="CHANGE_FILTER",b=(n(30),n(1)),O=function(t){Object(f.a)(n,t);var e=Object(p.a)(n);function n(t){return Object(u.a)(this,n),e.call(this,t)}return Object(d.a)(n,[{key:"render",value:function(){var t=this.props,e=t.title,n=t.completed,a=t.completedTask,c=t.removeTask,r=t.id;return Object(b.jsxs)("li",{onClick:function(){return a(r)},className:"todo-item",children:[Object(b.jsx)("i",{className:n?"mark far fa-check-circle":"mark far fa-circle"}),Object(b.jsx)("span",{className:n?"completed text":"text",children:e}),Object(b.jsx)("i",{onClick:function(){return c(r)},className:"fas fa-times"})]})}}]),n}(c.a.Component);O.defaultProps={title:"",completed:!1,removeTask:function(){},completedTask:function(){},id:0};var T=O,x=(n(32),function(t){Object(f.a)(n,t);var e=Object(p.a)(n);function n(t){return Object(u.a)(this,n),e.call(this,t)}return Object(d.a)(n,[{key:"render",value:function(){var t=this.props,e=t.tasksList,n=t.removeTask,a=t.completedTask;return Object(b.jsx)("ul",{className:"todo-list",children:e.map((function(t){var e=t.id,c=t.title,r=t.completed;return Object(b.jsx)(T,{id:e,completedTask:a,removeTask:n,title:c,completed:r},e)}))})}}]),n}(c.a.Component));x.defaultProps={tasksList:[],removeTask:function(){},completedTask:function(){}};var g=x,C=(n(33),function(t){var e=t.value,n=t.onChange,a=t.onClick,c=t.onKeyPress;return Object(b.jsxs)("div",{className:"todo-input-wrapper",children:[Object(b.jsx)("i",{onClick:a,className:"fas fa-plus"}),Object(b.jsx)("input",{className:"todo-input",placeholder:"Click to add task",onChange:n,value:e,onKeyPress:c})]})});C.defaultProps={onChange:function(){},onKeyPress:function(){},value:""};var y=C,F=(n(34),[{text:"All",id:"all"},{text:"Active",id:"active"},{text:"Completed",id:"completed"}]),N=function(t){Object(f.a)(n,t);var e=Object(p.a)(n);function n(t){return Object(u.a)(this,n),e.call(this,t)}return Object(d.a)(n,[{key:"render",value:function(){var t=this.props,e=t.amounts,n=t.activeFilter,a=t.changeFilter;return Object(b.jsxs)("div",{className:"footer",children:[Object(b.jsx)("span",{className:"amount",children:"".concat(e," Tasks left")}),Object(b.jsx)("div",{className:"btn-group",children:F.map((function(t){var e=t.text,c=t.id;return Object(b.jsx)("button",{onClick:function(){return a(c)},className:c===n?"filter-btn active":"filter-btn",children:e},c)}))})]})}}]),n}(c.a.Component);N.defaultProps={amount:0,activeFilter:"all",changeFilter:function(){}};var w=N,A=(n(35),function(t){Object(f.a)(n,t);var e=Object(p.a)(n);function n(t){var a;return Object(u.a)(this,n),(a=e.call(this,t)).handlerInputChange=function(t){var e=t.target.value;a.setState({taskText:e})},a.addTask=function(){var t=Object(l.a)(o.a.mark((function t(e){var n,c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=e.key,(c=a.state.taskText).length>3&&"Enter"===n&&((0,a.props.addTask)((new Date).getTime(),c,!1),a.setState({taskText:""}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),a.addTaskOnClick=function(){var t=a.state.taskText;t.length>3&&((0,a.props.addTask)((new Date).getTime(),t,!1),a.setState({taskText:""}))},a.filterTasks=function(t,e){switch(e){case"completed":return t.filter((function(t){return t.completed}));case"active":return t.filter((function(t){return!t.completed}));default:return t}},a.getActiveTasksCounter=function(t){return t.filter((function(t){return!t.completed})).length},a.state={isLoaded:!1,error:null,taskText:"",TASKS:{}},a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var t=this;setTimeout((function(){t.setState({isLoaded:!0,error:""})}),500)}},{key:"render",value:function(){var t=this.state,e=(t.activeFilter,t.isLoaded),n=t.error,a=t.taskText,c=this.props,r=c.tasks,s=c.removeTask,i=c.completedTask,o=c.filters,l=c.changeFilter,u=r&&r.length>0,d=this.filterTasks(r,o),f=this.getActiveTasksCounter(r);return n?Object(b.jsxs)("div",{children:["\u041f\u043e\u043c\u0438\u043b\u043a\u0430: ",n]}):e?Object(b.jsxs)("div",{className:"todo-wrapper",children:[Object(b.jsx)(y,{onKeyPress:this.addTask,onClick:this.addTaskOnClick,onChange:this.handlerInputChange,value:a}),u&&Object(b.jsx)(g,{tasksList:d,completedTask:i,removeTask:s}),u&&Object(b.jsx)(w,{changeFilter:l,amounts:f,activeFilter:o})]}):Object(b.jsx)("div",{children:Object(b.jsx)("img",{src:"./6.gif"})})}}]),n}(a.Component)),P=Object(j.b)((function(t){return{tasks:t.tasks,filters:t.filters}}),{addTask:function(t,e,n){return{type:m,id:t,title:e,completed:n}},removeTask:function(t){return{type:v,id:t}},completedTask:function(t){return{type:k,id:t}},changeFilter:function(t){return{type:h,activeFilter:t}}})(A);n(36);var S=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(P,{})})},L=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,39)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,s=e.getTTFB;n(t),a(t),c(t),r(t),s(t)}))},E=n(6),K=n(10),D=n(8),I=Object(D.load)({namespace:"todo-list"});I&&I.tasks&&I.tasks.length||(I={tasks:[]});var M,_=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I.tasks,e=arguments.length>1?arguments[1]:void 0,n=e.id,a=e.title,c=e.completed,r=e.type;switch(r){case m:return[].concat(Object(K.a)(t),[{id:n,title:a,completed:c}]);case v:return Object(K.a)(t).filter((function(t){return t.id!==n}));case k:return Object(K.a)(t).map((function(t){return t.id===n&&(t.completed=!t.completed),t}));default:return t}},B=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"all",e=arguments.length>1?arguments[1]:void 0,n=e.type,a=e.activeFilter;switch(n){case h:return a;default:return t}},J=Object(E.c)({tasks:_,filters:B}),R=E.d,G=(M={},Object(E.e)(J,M,R(Object(E.a)(Object(D.save)({namespace:"todo-list"})))));s.a.render(Object(b.jsx)(j.a,{store:G,children:Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(S,{})})}),document.getElementById("root")),L()}},[[38,1,2]]]);
//# sourceMappingURL=main.559a6bbe.chunk.js.map