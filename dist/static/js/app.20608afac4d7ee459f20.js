webpackJsonp([1],Array(26).concat([function(t,n,a){"use strict";a.d(n,"a",function(){return e}),a.d(n,"d",function(){return s}),a.d(n,"c",function(){return o}),a.d(n,"b",function(){return r});var e="CONTENTS_UPDATE",s="TASK_UPDATE",o="TASK_INSERT",r="TASK_DELETE"},,,,function(t,n,a){"use strict";var e=["https://www.natorisana.love/sounds/%E3%81%9B%E3%82%93%E3%81%9B%E3%81%88%E3%81%A8%E3%81%AA%E3%81%84%E3%81%97%E3%82%87%E3%81%B0%E3%81%AA%E3%81%97/%E8%AA%BF%E5%AD%90%E3%81%AB%E4%B9%97%E3%81%A3%E3%81%9F%E3%82%89%E3%81%A0%E3%82%81%E3%81%A0%E3%81%9E.mp3","https://www.natorisana.love/sounds/%E7%BE%8E%E8%A1%93%E9%A4%A8/%E3%81%8C%E3%82%93%E3%81%B0%E3%82%8C%E3%81%8C%E3%82%93%E3%81%B0%E3%82%8C.mp3","https://www.natorisana.love/sounds/%E5%90%8D%E5%8F%96%E3%81%A8%E5%85%B1%E3%81%AB%E5%9C%B0%E7%8D%84%E3%81%AB%E5%8F%A9%E3%81%8D%E8%90%BD%E3%81%95%E3%82%8C%E3%82%8B/%E3%81%82%E3%82%89%E3%82%84%E3%82%8A%E3%81%BE%E3%81%99%E3%81%AD%E3%81%87%EF%BC%81.mp3"],s=["https://www.natorisana.love/sounds/%E3%81%9B%E3%82%93%E3%81%9B%E3%81%88%E3%81%A8%E3%81%AA%E3%81%84%E3%81%97%E3%82%87%E3%81%B0%E3%81%AA%E3%81%97/%E3%81%8C%E3%82%93%E3%81%B0%E3%82%8C%E7%84%A1%E7%90%86%E3%81%9B%E3%81%9A%E3%81%AB.mp3","https://www.natorisana.love/sounds/GW%E6%8C%AF%E3%82%8A%E8%BF%94%E3%82%8A%E9%85%8D%E4%BF%A1/%E4%BC%91%E3%82%93%E3%81%98%E3%82%83%E3%81%88%E3%81%B0%E3%83%BC%EF%BC%9F.mp3"];n.a={donePlay:function(){var t=Math.floor(Math.random()*e.length),n=e[t],a=new Audio;a.src=n,a.play()},redoPlay:function(){var t=Math.floor(Math.random()*s.length),n=s[t],a=new Audio;a.src=n,a.play()}}},,function(t,n,a){"use strict";n.a={name:"app"}},function(t,n,a){"use strict";var e=a(34),s=a.n(e),o=a(25),r=a(26),i=(a(43),a(136)),c=a(138),u=a(140);n.a={name:"StartPage",data:function(){return{footerShowFlag:!0,taskMessage:"",textdialog:!1}},components:{"header-component":i.a,"footer-component":c.a,"contents-component":u.a},methods:s()({},Object(o.c)({CONTENTS_UPDATE:r.a})),computed:{nav:{get:function(){return this.$store.state.nowContent},set:function(t){this.CONTENTS_UPDATE(t)}}}}},,,,,,,,,,function(t,n,a){"use strict";var e=a(87),s=(a.n(e),a(115)),o=(a.n(s),a(117));a.n(o)},,,,,,,,,,,,,function(t,n,a){"use strict";n.a={name:"header-component",data:function(){return{}}}},function(t,n,a){"use strict";n.a={name:"footer-component",props:{footerValue:Boolean,nav:String},data:function(){return{}},computed:{navLocal:{get:function(){return this.nav},set:function(t){this.$emit("update:nav",t)}}}}},function(t,n,a){"use strict";var e=a(34),s=a.n(e),o=a(25),r=a(26),i=a(59),c=a(141),u=a(145),v=a(148),l=a(151);n.a={name:"ContentConponent",data:function(){return{}},components:{"task-component":c.a,"done-component":u.a,"delete-component":v.a,"setting-component":l.a},props:{nav:String},methods:s()({},Object(o.c)({TASK_INSERT:r.c,TASK_UPDATE:r.d,TASK_DELETE:r.b}),{checkboxEvent:function(t){this.TASK_UPDATE({id:t})},taskInsert:function(t){this.TASK_INSERT({text:t})},taskDelete:function(t){this.TASK_DELETE({id:t})}}),computed:s()({},Object(o.b)({remainData:i.b}),Object(o.b)({doneData:i.a}),Object(o.d)({taskData:"taskData"}))}},function(t,n,a){"use strict";a.d(n,"b",function(){return e}),a.d(n,"a",function(){return s});var e="REMAIN_TASK",s="DONE_TASK"},function(t,n,a){"use strict";var e=a(30);a(143);n.a={name:"TaskWindow",props:{taskData:Array},data:function(){return{taskText:""}},methods:{updateTaskStatus:function(t){console.log("pushChange id: "+t.id),t.status||e.a.donePlay(),this.$emit("changeStatusEvent",t.id)},timestamp2string:function(t){return t.toString(t)},addTask:function(){this.taskText.length>0&&""!=this.taskText&&(this.$emit("taskInsertEvent",this.taskText),this.taskText="")}},computed:{}}},function(t,n,a){"use strict";var e=a(30);n.a={name:"DoneWindow",props:{taskData:Array},data:function(){return{taskText:""}},methods:{updateTaskStatus:function(t){console.log("pushChange id: "+t.id),this.$emit("changeStatusEvent",t.id),t.status||e.a.redoPlay()}},computed:{}}},function(t,n,a){"use strict";a(30);n.a={name:"DeleteWindow",props:{taskData:Array},data:function(){return{taskText:""}},methods:{deleteTask:function(t){console.log("pushChange id: "+t.id),this.$emit("deleteTaskEvent",t.id)}},computed:{}}},function(t,n,a){"use strict";n.a={}},,function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=a(9),s=a(68),o=a(72),r=a(156),i=a(166),c=a.n(i),u=a(167),v=(a.n(u),a(168));e.default.use(v,{name:"v-touch"}),e.default.use(c.a),e.default.config.productionTip=!1,new e.default({el:"#app",router:o.a,store:r.a,template:"<App/>",components:{App:s.a}})},,,function(t,n,a){"use strict";function e(t){a(69)}var s=a(32),o=a(71),r=a(4),i=e,c=r(s.a,o.a,!1,i,null,null);n.a=c.exports},function(t,n){},,function(t,n,a){"use strict";var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{attrs:{id:"app"}},[a("main",[a("router-view")],1)])},s=[],o={render:e,staticRenderFns:s};n.a=o},function(t,n,a){"use strict";var e=a(9),s=a(73),o=a(74);e.default.use(s.a),n.a=new s.a({routes:[{path:"/",name:"main",component:o.a}]})},,function(t,n,a){"use strict";function e(t){a(75)}var s=a(33),o=a(155),r=a(4),i=e,c=r(s.a,o.a,!1,i,"data-v-aae0806c",null);n.a=c.exports},function(t,n){},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,n,a){"use strict";var e=a(56),s=a(137),o=a(4),r=o(e.a,s.a,!1,null,null,null);n.a=r.exports},function(t,n,a){"use strict";var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("v-toolbar",{attrs:{color:"pink",dark:"",fixed:""}},[a("v-toolbar-title",[t._v("タスク完了するところみてて・・・・")])],1)},s=[],o={render:e,staticRenderFns:s};n.a=o},function(t,n,a){"use strict";var e=a(57),s=a(139),o=a(4),r=o(e.a,s.a,!1,null,null,null);n.a=r.exports},function(t,n,a){"use strict";var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",[a("v-bottom-nav",{attrs:{active:t.navLocal,value:t.footerValue,fixed:"",height:"70"},on:{"update:active":function(n){t.navLocal=n}}},[a("v-btn",{attrs:{color:"pink",flat:"",value:"task"}},[a("span",[t._v("Task")]),t._v(" "),a("v-icon",[t._v("description")])],1),t._v(" "),a("v-btn",{attrs:{color:"pink",flat:"",value:"done"}},[a("span",[t._v("Done")]),t._v(" "),a("v-icon",[t._v("done")])],1),t._v(" "),a("v-btn",{attrs:{color:"pink",flat:"",value:"delete"}},[a("span",[t._v("delete")]),t._v(" "),a("v-icon",[t._v("clear")])],1),t._v(" "),a("v-btn",{attrs:{color:"pink",flat:"",value:"setting"}},[a("span",[t._v("setting")]),t._v(" "),a("v-icon",[t._v("build")])],1)],1)],1)},s=[],o={render:e,staticRenderFns:s};n.a=o},function(t,n,a){"use strict";var e=a(58),s=a(154),o=a(4),r=o(e.a,s.a,!1,null,null,null);n.a=r.exports},function(t,n,a){"use strict";function e(t){a(142)}var s=a(60),o=a(144),r=a(4),i=e,c=r(s.a,o.a,!1,i,"data-v-42496be6",null);n.a=c.exports},function(t,n){},function(t,n,a){"use strict"},function(t,n,a){"use strict";var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",[a("h1",[t._v("タスク一覧")]),t._v(" "),t._l(t.taskData,function(n){return a("v-container",{key:n.id,attrs:{"grid-list-xs":""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs2:""}},[a("v-btn",{attrs:{fab:"",dark:"",small:"",color:"green"},on:{click:function(a){t.updateTaskStatus(n)}}},[a("v-icon",{attrs:{dark:""}},[t._v("done")])],1)],1),t._v(" "),a("v-flex",{attrs:{xs10:""}},[a("p",[t._v(t._s(n.text))])])],1)],1)}),t._v(" "),a("v-container",{staticClass:"input-task",attrs:{"text-xs-center":""}},[a("v-text-field",{attrs:{"append-outer-icon":"send","prepend-icon":"description",placeholder:"タスクを入力",clearable:""},on:{"click:append-outer":t.addTask,keyup:function(n){return"button"in n||!t._k(n.keyCode,"enter",13,n.key,"Enter")?t.addTask(n):null}},model:{value:t.taskText,callback:function(n){t.taskText=n},expression:"taskText"}})],1)],2)},s=[],o={render:e,staticRenderFns:s};n.a=o},function(t,n,a){"use strict";function e(t){a(146)}var s=a(61),o=a(147),r=a(4),i=e,c=r(s.a,o.a,!1,i,"data-v-2695cd53",null);n.a=c.exports},function(t,n){},function(t,n,a){"use strict";var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",[a("h1",[t._v("完了タスク一覧")]),t._v(" "),t._l(t.taskData,function(n){return a("v-container",{key:n.id,attrs:{"grid-list-xs":""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs2:""}},[a("v-btn",{attrs:{fab:"",dark:"",small:"",color:"blue"},on:{click:function(a){t.updateTaskStatus(n)}}},[a("v-icon",{attrs:{dark:""}},[t._v("undo")])],1)],1),t._v(" "),a("v-flex",{attrs:{xs10:""}},[a("p",[t._v(t._s(n.text))])])],1)],1)})],2)},s=[],o={render:e,staticRenderFns:s};n.a=o},function(t,n,a){"use strict";function e(t){a(149)}var s=a(62),o=a(150),r=a(4),i=e,c=r(s.a,o.a,!1,i,"data-v-695b4fae",null);n.a=c.exports},function(t,n){},function(t,n,a){"use strict";var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",[a("h1",[t._v("タスクを削除")]),t._v(" "),t._l(t.taskData,function(n){return a("v-container",{key:n.id,attrs:{"grid-list-xs":""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs2:""}},[a("v-btn",{attrs:{fab:"",dark:"",small:"",color:"red"},on:{click:function(a){t.deleteTask(n)}}},[a("v-icon",{attrs:{dark:""}},[t._v("clear")])],1)],1),t._v(" "),a("v-flex",{attrs:{xs10:""}},[a("p",[t._v(t._s(n.text))])])],1)],1)})],2)},s=[],o={render:e,staticRenderFns:s};n.a=o},function(t,n,a){"use strict";function e(t){a(152)}var s=a(63),o=a(153),r=a(4),i=e,c=r(s.a,o.a,!1,i,"data-v-4c2c7926",null);n.a=c.exports},function(t,n){},function(t,n,a){"use strict";var e=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",[a("h3",[t._v("設定")]),t._v(" "),a("p",[t._v("そのうち設定できるようになる予定")]),t._v(" "),a("p",[t._v("今はInfomationとして使います")]),t._v(" "),a("h3",[t._v("2019/2/4")]),t._v(" "),a("p",[t._v("deleteボタンを押しても該当項目が消えないバグを修正")]),t._v(" "),a("p",[t._v("前回開いていたページを保存するようにしました")]),t._v(" "),a("h3",[t._v("動きがおかしい時は")]),t._v(" "),a("p",[t._v("\n    動きが怪しい時は一回アプリを削除してから\n    "),a("a",{attrs:{href:"https://sana-task.herokuapp.com/#/"}},[t._v("ブラウザ")]),t._v("\n    で開くとなおるかもしれません\n  ")]),t._v(" "),a("span",[t._v("ハグ等があったらこちらへ")]),t._v(" "),a("a",{staticClass:"twitter-mention-button",attrs:{href:"https://twitter.com/intent/tweet?screen_name=naporin24690&ref_src=twsrc%5Etfw","data-show-count":"false"}},[t._v("Tweet to @naporin24690")])])}],o={render:e,staticRenderFns:s};n.a=o},function(t,n,a){"use strict";var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",["task"==t.nav?a("task-component",{attrs:{taskData:t.remainData},on:{changeStatusEvent:t.checkboxEvent,taskInsertEvent:t.taskInsert}}):"done"==t.nav?a("done-component",{attrs:{taskData:t.doneData},on:{changeStatusEvent:t.checkboxEvent}}):"delete"==t.nav?a("delete-component",{attrs:{taskData:t.taskData},on:{deleteTaskEvent:t.taskDelete}}):"setting"==t.nav?a("setting-component"):t._e()],1)},s=[],o={render:e,staticRenderFns:s};n.a=o},function(t,n,a){"use strict";var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",[a("header-component"),t._v(" "),a("v-card-text",{staticStyle:{height:"10vh"}}),t._v(" "),a("contents-component",{attrs:{nav:t.nav}}),t._v(" "),a("v-card-text",{staticStyle:{height:"60px"}}),t._v(" "),a("footer-component",{attrs:{footerValue:t.footerShowFlag,nav:t.nav},on:{"update:nav":function(n){t.nav=n}}})],1)},s=[],o={render:e,staticRenderFns:s};n.a=o},function(t,n,a){"use strict";var e=a(9),s=a(25),o=a(157),r=(a.n(o),a(158)),i=a(162);a(163);e.default.use(s.a),n.a=new s.a.Store({actions:o,getters:r.a,state:i.b,mutations:i.a})},function(t,n){},function(t,n,a){"use strict";a.d(n,"a",function(){return i});var e,s=a(64),o=a.n(s),r=a(59),i=(e={},o()(e,r.b,function(t){return console.log("remain_task"),t.taskData.filter(function(t){return 0==t.status})}),o()(e,r.a,function(t){return console.log("done_task"),t.taskData.filter(function(t){return 1==t.status})}),e)},,,,function(t,n,a){"use strict";a.d(n,"b",function(){return c}),a.d(n,"a",function(){return u});var e,s=a(64),o=a.n(s),r=a(9),i=a(26),c=(a(43),{nowContent:"task",taskData:[],doneAudioList:[],redoAudioList:[]}),u=(e={},o()(e,i.c,function(t,n){var a=0;t.taskData.length>0&&(a=Math.max.apply(null,t.taskData.map(function(t){return t.id}))),n.id=a+1,n.createDate=(new Date).getTime()/1e3+32400,n.status=!1,n.finishDate=null,t.taskData.push(n)}),o()(e,i.d,function(t,n){console.log(n);var a=t.taskData.findIndex(function(t){return t.id===n.id}),e=t.taskData[a];e.status=!e.status,e.status?e.finishDate=(new Date).getTime()/1e3+32400:e.finishDate=null,r.default.set(t.taskData,a,e)}),o()(e,i.b,function(t,n){var a=t.taskData.findIndex(function(t){return t.id===n.id});t.taskData.splice(a,1)}),o()(e,i.a,function(t,n){t.nowContent=n}),e)},,,,,function(t,n){}]),[65]);
//# sourceMappingURL=app.20608afac4d7ee459f20.js.map