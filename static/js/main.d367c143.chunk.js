(this["webpackJsonpworkday-organizer"]=this["webpackJsonpworkday-organizer"]||[]).push([[0],{18:function(e,a,t){},19:function(e,a,t){"use strict";t.r(a);var r=t(1),n=t(5),c=t.n(n),o=t(6),u=t(7),s=t(11),l=t(10),i=t(8),d=t.n(i),h=t(0);var v=function(){return Object(h.jsxs)("header",{className:"jumbotron",children:[Object(h.jsx)("h1",{className:"display-3",children:"Work Day Scheduler"}),Object(h.jsx)("p",{className:"lead",children:"A simple calendar app for scheduling your work day"}),Object(h.jsx)("p",{id:"currentDay",className:"lead",children:Object(h.jsx)(d.a,{format:"dddd, MMMM Do YYYY, h:mma"})})]})};t(4);var m=function(e){return Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"col-sm-1 hour",children:e.hour}),Object(h.jsx)("input",{className:"col-md-10 taskInput ".concat(e.tense),id:e.id,type:"text",placeholder:"Input Tasks Here"}),Object(h.jsx)("button",{onClick:function(){return e.saveTask(e)},className:"col-sm-1 btn",type:"submit",children:"Save"})]})},j=t(9),p=t(3),b=t.n(p),f=function(e){Object(s.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(o.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=a.call.apply(a,[this].concat(n))).determineTense=function(e,a){return a===e?"present":"future"},e.colorCode=function(a){var t=a.id,r=Number(b()().format("H"));return r>t?"past":e.determineTense(t,r)},e}return Object(u.a)(t,[{key:"componentDidMount",value:function(){for(var e=9;e<=17;e++){var a=localStorage.getItem("".concat(e));null!==a&&(document.getElementById("".concat(e)).value=a)}}},{key:"saveTask",value:function(e){var a=document.getElementById(e.id).value;localStorage.setItem("".concat(e.id),a),alert("".concat(e.hour," Task Saved!"))}},{key:"render",value:function(){var e=this;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(v,{}),j.map((function(a){return Object(h.jsx)(m,{saveTask:e.saveTask,tense:e.colorCode(a),id:a.id,hour:a.hour,value:a.value},a.id)}))]})}}]),t}(r.Component);t(18);c.a.render(Object(h.jsx)(f,{}),document.getElementById("root"))},9:function(e){e.exports=JSON.parse('[{"id":9,"hour":"9AM","value":""},{"id":10,"hour":"10AM","value":""},{"id":11,"hour":"11AM","value":""},{"id":12,"hour":"12PM","value":""},{"id":13,"hour":"1PM","value":""},{"id":14,"hour":"2PM","value":""},{"id":15,"hour":"3PM","value":""},{"id":16,"hour":"4PM","value":""},{"id":17,"hour":"5PM","value":""}]')}},[[19,1,2]]]);
//# sourceMappingURL=main.d367c143.chunk.js.map