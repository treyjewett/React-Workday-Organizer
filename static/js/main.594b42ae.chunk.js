(this["webpackJsonpworkday-organizer"]=this["webpackJsonpworkday-organizer"]||[]).push([[0],{20:function(e,a,t){},22:function(e,a,t){},23:function(e,a,t){},24:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t(5),c=t.n(r),o=t(6),u=t(7),s=t(11),i=t(10),l=(t(3),t(8)),d=t.n(l),h=(t(17),t(20),t(0));var v=function(){return Object(h.jsxs)("header",{className:"jumbotron",children:[Object(h.jsx)("h1",{className:"display-3",children:"Work Day Scheduler"}),Object(h.jsx)("p",{className:"lead",children:"A simple calendar app for scheduling your work day"}),Object(h.jsx)("p",{id:"currentDay",className:"lead",children:Object(h.jsx)(d.a,{format:"dddd, MMMM Do YYYY, h:mma"})})]})};t(22);var j=function(e){return Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"col-sm-1 hour",children:e.hour}),Object(h.jsx)("input",{className:"col-md-10 taskInput",id:e.id,type:"text",placeholder:"Input Tasks Here"}),Object(h.jsx)("button",{onClick:function(){return e.saveTask(e)},className:"col-sm-1 btn",type:"submit",children:"Save"})]})},m=t(9),p=function(e){Object(s.a)(t,e);var a=Object(i.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(u.a)(t,[{key:"componentDidMount",value:function(){for(var e=1;e<=9;e++){var a=localStorage.getItem("".concat(e));null!==a&&(document.getElementById("".concat(e)).value=a)}}},{key:"saveTask",value:function(e){var a=document.getElementById(e.id).value;localStorage.setItem("".concat(e.id),a),alert("".concat(e.hour," Task Saved!"))}},{key:"render",value:function(){var e=this;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(v,{}),m.map((function(a){return Object(h.jsx)(j,{saveTask:e.saveTask,id:a.id,hour:a.hour,value:a.value},a.id)}))]})}}]),t}(n.Component);t(23);c.a.render(Object(h.jsx)(p,{}),document.getElementById("root"))},9:function(e){e.exports=JSON.parse('[{"id":1,"hour":"9AM","value":""},{"id":2,"hour":"10AM","value":""},{"id":3,"hour":"11AM","value":""},{"id":4,"hour":"12PM","value":""},{"id":5,"hour":"1PM","value":""},{"id":6,"hour":"2PM","value":""},{"id":7,"hour":"3PM","value":""},{"id":8,"hour":"4PM","value":""},{"id":9,"hour":"5PM","value":""}]')}},[[24,1,2]]]);
//# sourceMappingURL=main.594b42ae.chunk.js.map