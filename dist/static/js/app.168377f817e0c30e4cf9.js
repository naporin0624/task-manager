webpackJsonp([1],{127:function(t,n,a){"use strict";var e=a(54),s=a(128),o=a(4),r=o(e.a,s.a,!1,null,null,null);n.a=r.exports},128:function(t,n,a){"use strict";var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("v-toolbar",{attrs:{color:"pink",dark:"",fixed:""}},[a("v-toolbar-title",[t._v("タスク完了するところみてて・・・・")])],1)},s=[],o={render:e,staticRenderFns:s};n.a=o},129:function(t,n,a){"use strict";var e=a(55),s=a(130),o=a(4),r=o(e.a,s.a,!1,null,null,null);n.a=r.exports},130:function(t,n,a){"use strict";var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",[a("v-bottom-nav",{attrs:{active:t.navLocal,value:t.footerValue,fixed:"",height:"70"},on:{"update:active":function(n){t.navLocal=n}}},[a("v-btn",{attrs:{color:"pink",flat:"",value:"task"}},[a("span",[t._v("Task")]),t._v(" "),a("v-icon",[t._v("description")])],1),t._v(" "),a("v-btn",{attrs:{color:"pink",flat:"",value:"done"}},[a("span",[t._v("Done")]),t._v(" "),a("v-icon",[t._v("done")])],1)],1)],1)},s=[],o={render:e,staticRenderFns:s};n.a=o},131:function(t,n,a){"use strict";var e=a(56),s=a(146),o=a(4),r=o(e.a,s.a,!1,null,null,null);n.a=r.exports},139:function(t,n,a){"use strict";function e(t){a(140)}var s=a(58),o=a(142),r=a(4),i=e,u=r(s.a,o.a,!1,i,"data-v-7ed7c19b",null);n.a=u.exports},140:function(t,n){},141:function(t,n,a){"use strict"},142:function(t,n,a){"use strict";var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",[a("h1",[t._v("タスク一覧")]),t._v(" "),t._l(t.taskData,function(n){return a("v-container",{key:n.id,attrs:{"grid-list-xs":""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs2:""}},[a("v-btn",{attrs:{fab:"",dark:"",small:"",color:"green"},on:{click:function(a){t.updateTaskStatus(n)}}},[a("v-icon",{attrs:{dark:""}},[t._v("done")])],1)],1),t._v(" "),a("v-flex",{attrs:{xs10:""}},[a("p",[t._v(t._s(n.text))])])],1)],1)}),t._v(" "),a("v-container",{staticClass:"input-task",attrs:{"text-xs-center":""}},[a("v-text-field",{attrs:{"append-outer-icon":"send","prepend-icon":"description",placeholder:"タスクを入力",clearable:"",roles:""},on:{"click:append-outer":t.addTask,keyup:function(n){return"button"in n||!t._k(n.keyCode,"enter",13,n.key,"Enter")?t.addTask(n):null}},model:{value:t.taskText,callback:function(n){t.taskText=n},expression:"taskText"}})],1)],2)},s=[],o={render:e,staticRenderFns:s};n.a=o},143:function(t,n,a){"use strict";function e(t){a(144)}var s=a(60),o=a(145),r=a(4),i=e,u=r(s.a,o.a,!1,i,"data-v-4dbe03de",null);n.a=u.exports},144:function(t,n){},145:function(t,n,a){"use strict";var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",[a("h1",[t._v("完了タスク一覧")]),t._v(" "),t._l(t.taskData,function(n){return a("v-container",{key:n.id,attrs:{"grid-list-xs":""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs2:""}},[a("v-btn",{attrs:{fab:"",dark:"",small:"",color:"blue"},on:{click:function(a){t.updateTaskStatus(n)}}},[a("v-icon",{attrs:{dark:""}},[t._v("undo")])],1)],1),t._v(" "),a("v-flex",{attrs:{xs10:""}},[a("p",[t._v(t._s(n.text))])])],1)],1)})],2)},s=[],o={render:e,staticRenderFns:s};n.a=o},146:function(t,n,a){"use strict";var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",["task"==t.nav?a("task-component",{attrs:{taskData:t.remainData},on:{changeStatusEvent:t.checkboxEvent,taskInsertEvent:t.taskInsert}}):"done"==t.nav?a("done-component",{attrs:{taskData:t.doneData},on:{changeStatusEvent:t.checkboxEvent}}):t._e()],1)},s=[],o={render:e,staticRenderFns:s};n.a=o},147:function(t,n,a){"use strict";var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",[a("header-component"),t._v(" "),a("v-card-text",{staticStyle:{height:"60px"}}),t._v(" "),a("transition",[a("contents-component",{attrs:{nav:t.nav}})],1),t._v(" "),a("v-card-text",{staticStyle:{height:"60px"}}),t._v(" "),a("footer-component",{attrs:{footerValue:t.footerShowFlag,nav:t.nav},on:{"update:nav":function(n){t.nav=n}}})],1)},s=[],o={render:e,staticRenderFns:s};n.a=o},148:function(t,n,a){"use strict";var e=a(9),s=a(18),o=a(149),r=(a.n(o),a(150)),i=a(154),u=a(155);e.default.use(s.a),n.a=new s.a.Store({actions:o,getters:r.a,state:i.b,mutations:i.a,plugins:[Object(u.a)()]})},149:function(t,n){},150:function(t,n,a){"use strict";a.d(n,"a",function(){return i});var e,s=a(61),o=a.n(s),r=a(57),i=(e={},o()(e,r.b,function(t){return console.log("remain_task"),t.taskData.filter(function(t){return 0==t.status})}),o()(e,r.a,function(t){return console.log("done_task"),t.taskData.filter(function(t){return 1==t.status})}),e)},154:function(t,n,a){"use strict";a.d(n,"b",function(){return u}),a.d(n,"a",function(){return c});var e,s=a(61),o=a.n(s),r=a(9),i=a(19),u=(a(33),{taskData:[]}),c=(e={},o()(e,i.a,function(t,n){var a=Math.max.apply(null,t.taskData.map(function(t){return t.id}));n.id=a+1,n.createDate=(new Date).getTime()/1e3+32400,n.status=!1,n.finishDate=null,t.taskData.push(n)}),o()(e,i.b,function(t,n){n.status=!n.status;var a=t.taskData.findIndex(function(t){t.id,n.id});n.status?n.finishDate=(new Date).getTime()/1e3+32400:n.finishDate=null,r.default.set(t.taskData,a,n)}),e)},159:function(t,n){},19:function(t,n,a){"use strict";a.d(n,"b",function(){return e}),a.d(n,"a",function(){return s});var e="TASK_UPDATE",s="TASK_INSERT"},31:function(t,n,a){"use strict";n.a={name:"app"}},32:function(t,n,a){"use strict";var e=(a(18),a(19),a(33),a(127)),s=a(129),o=a(131);n.a={name:"StartPage",data:function(){return{nav:"task",footerShowFlag:!0,taskMessage:"",textdialog:!1}},components:{"header-component":e.a,"footer-component":s.a,"contents-component":o.a},methods:{addClick:function(){console.log("addClick"),this.textdialog=!this.textdialog,console.log(this.textdialog)}}}},33:function(t,n,a){"use strict";var e=a(73),s=(a.n(e),a(106)),o=(a.n(s),a(108));a.n(o)},54:function(t,n,a){"use strict";n.a={name:"header-component",data:function(){return{}}}},55:function(t,n,a){"use strict";n.a={name:"footer-component",props:{footerValue:Boolean,nav:String},data:function(){return{}},computed:{navLocal:{get:function(){return this.nav},set:function(t){this.$emit("update:nav",t)}}}}},56:function(t,n,a){"use strict";var e=a(132),s=a.n(e),o=a(18),r=a(19),i=a(57),u=a(139),c=a(143);n.a={name:"ContentConponent",data:function(){return{}},components:{"task-component":u.a,"done-component":c.a},props:{nav:String},methods:s()({},Object(o.c)({TASK_INSERT:r.a,TASK_UPDATE:r.b}),{checkboxEvent:function(t){console.log("checkboxEvent"),this.TASK_UPDATE(t)},taskInsert:function(t){this.TASK_INSERT({text:t})}}),computed:s()({},Object(o.b)({remainData:i.b}),Object(o.b)({doneData:i.a}))}},57:function(t,n,a){"use strict";a.d(n,"b",function(){return e}),a.d(n,"a",function(){return s});var e="REMAIN_TASK",s="DONE_TASK"},58:function(t,n,a){"use strict";var e=a(59);a(141);n.a={name:"TaskWindow",props:{taskData:Array},data:function(){return{taskText:""}},methods:{updateTaskStatus:function(t){console.log("pushChange id: "+t.id),t.status||e.a.donePlay(),this.$emit("changeStatusEvent",t)},timestamp2string:function(t){return t.toString(t)},addTask:function(){this.taskText.length>0&&""!=this.taskText&&(this.$emit("taskInsertEvent",this.taskText),this.taskText="")}},computed:{}}},59:function(t,n,a){"use strict";var e=["https://www.natorisana.love/sounds/%E3%81%9B%E3%82%93%E3%81%9B%E3%81%88%E3%81%A8%E3%81%AA%E3%81%84%E3%81%97%E3%82%87%E3%81%B0%E3%81%AA%E3%81%97/%E8%AA%BF%E5%AD%90%E3%81%AB%E4%B9%97%E3%81%A3%E3%81%9F%E3%82%89%E3%81%A0%E3%82%81%E3%81%A0%E3%81%9E.mp3","https://www.natorisana.love/sounds/%E7%BE%8E%E8%A1%93%E9%A4%A8/%E3%81%8C%E3%82%93%E3%81%B0%E3%82%8C%E3%81%8C%E3%82%93%E3%81%B0%E3%82%8C.mp3","https://www.natorisana.love/sounds/%E5%90%8D%E5%8F%96%E3%81%A8%E5%85%B1%E3%81%AB%E5%9C%B0%E7%8D%84%E3%81%AB%E5%8F%A9%E3%81%8D%E8%90%BD%E3%81%95%E3%82%8C%E3%82%8B/%E3%81%82%E3%82%89%E3%82%84%E3%82%8A%E3%81%BE%E3%81%99%E3%81%AD%E3%81%87%EF%BC%81.mp3"],s=["https://www.natorisana.love/sounds/%E3%81%9B%E3%82%93%E3%81%9B%E3%81%88%E3%81%A8%E3%81%AA%E3%81%84%E3%81%97%E3%82%87%E3%81%B0%E3%81%AA%E3%81%97/%E3%81%8C%E3%82%93%E3%81%B0%E3%82%8C%E7%84%A1%E7%90%86%E3%81%9B%E3%81%9A%E3%81%AB.mp3","https://www.natorisana.love/sounds/GW%E6%8C%AF%E3%82%8A%E8%BF%94%E3%82%8A%E9%85%8D%E4%BF%A1/%E4%BC%91%E3%82%93%E3%81%98%E3%82%83%E3%81%88%E3%81%B0%E3%83%BC%EF%BC%9F.mp3"];n.a={donePlay:function(){var t=Math.floor(Math.random()*e.length),n=e[t],a=new Audio;a.src=n,a.play()},redoPlay:function(){var t=Math.floor(Math.random()*s.length),n=s[t],a=new Audio;a.src=n,a.play()}}},60:function(t,n,a){"use strict";var e=a(59);n.a={name:"TaskWindow",props:{taskData:Array},data:function(){return{taskText:""}},methods:{updateTaskStatus:function(t){console.log("pushChange id: "+t.id),this.$emit("changeStatusEvent",t),t.status||e.a.redoPlay()},addTask:function(){this.$emit("taskInsertEvent",this.taskText),this.taskText=""}},computed:{}}},62:function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=a(9),s=a(65),o=a(69),r=a(148),i=a(158),u=a.n(i),c=a(159),l=(a.n(c),a(160));e.default.use(l,{name:"v-touch"}),e.default.use(u.a),e.default.config.productionTip=!1,new e.default({el:"#app",router:o.a,store:r.a,template:"<App/>",components:{App:s.a}})},65:function(t,n,a){"use strict";function e(t){a(66)}var s=a(31),o=a(68),r=a(4),i=e,u=r(s.a,o.a,!1,i,null,null);n.a=u.exports},66:function(t,n){},68:function(t,n,a){"use strict";var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{attrs:{id:"app"}},[a("main",[a("router-view")],1)])},s=[],o={render:e,staticRenderFns:s};n.a=o},69:function(t,n,a){"use strict";var e=a(9),s=a(70),o=a(71);e.default.use(s.a),n.a=new s.a({routes:[{path:"/",name:"main",component:o.a}]})},71:function(t,n,a){"use strict";function e(t){a(72)}var s=a(32),o=a(147),r=a(4),i=e,u=r(s.a,o.a,!1,i,"data-v-82ad0f2a",null);n.a=u.exports},72:function(t,n){}},[62]);
//# sourceMappingURL=app.168377f817e0c30e4cf9.js.map