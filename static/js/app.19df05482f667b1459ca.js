webpackJsonp([1],[,,,,,,function(t,e,a){"use strict";var n=a(25);e.a={components:{SideDrawer:n.a},data:function(){return{clipped:!1,temporary:!0,drawer:!1,fixed:!1,miniVariant:!1,title:"UC Wireless"}},name:"App"}},function(t,e,a){"use strict";var n=a(26),s=a(28);e.a={name:"side-drawer",components:{Gauge:s.a,SideMenuItems:n.a},props:{clipped:{},temporary:{},drawer:{},miniVariant:{}}}},function(t,e,a){"use strict";e.a={name:"side-menu-item",props:{drawer:{}},data:function(){return{}}}},function(t,e,a){"use strict";e.a={name:"gauge",components:{},props:{percentUsed:{default:0,type:Number}},data:function(){return{}},created:function(){},methods:{getColor:function(t){return t>=100?"red":t<100&&t>=75?"yellow":"teal"}}}},function(t,e,a){"use strict";e.a={name:"home",components:{},props:[],data:function(){return{}},created:function(){},methods:{}}},function(t,e,a){"use strict";e.a={name:"",components:{},props:[],data:function(){return{}},created:function(){this.$store.state.header.title="My Account"},methods:{}}},function(t,e,a){"use strict";e.a={name:"devices",components:{},props:[],data:function(){return{}},created:function(){this.$store.state.header.title="My Devices"},methods:{}}},,,,,,,function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(2),s=a(22),r=a(34),i=a(45),c=a.n(i),o=a(46),A=a(51),u=(a.n(A),a(52)),l=(a.n(u),a(53)),v=a.n(l),f=a(72),d=a.n(f);n.default.use(c.a,{theme:{primary:"#009688",secondary:"#b0bec5",accent:"#8c9eff",error:"#b71c1c"}}),n.default.use(a(13)),Object(u.sync)(o.a,r.a),n.default.use(d.a,v.a),n.default.use(a(13)),n.default.use(c.a),n.default.config.productionTip=!1,new n.default({el:"#app",router:r.a,store:o.a,components:{App:s.a},template:"<App/>"})},,,function(t,e,a){"use strict";function n(t){a(23)}var s=a(6),r=a(33),i=a(1),c=n,o=i(s.a,r.a,!1,c,null,null);e.a=o.exports},function(t,e){},,function(t,e,a){"use strict";var n=a(7),s=a(31),r=a(1),i=r(n.a,s.a,!1,null,null,null);e.a=i.exports},function(t,e,a){"use strict";var n=a(8),s=a(27),r=a(1),i=r(n.a,s.a,!1,null,null,null);e.a=i.exports},function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-list",t._l(t.$store.state.sideMenu.items,function(e,n){return a("v-list-tile",{key:n,attrs:{value:"true",to:e.path}},[a("v-list-tile-action",[a("v-list-tile-avatar",[a("v-icon",[t._v(t._s(e.icon))])],1)],1),t._v(" "),a("v-list-tile-content",[a("v-list-tile-title",{staticClass:"black--text"},[t._v(t._s(e.title))])],1)],1)}))},s=[],r={render:n,staticRenderFns:s};e.a=r},function(t,e,a){"use strict";function n(t){a(29)}var s=a(9),r=a(30),i=a(1),c=n,o=i(s.a,r.a,!1,c,"data-v-46bbe753",null);e.a=o.exports},function(t,e){},function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-progress-circular",{attrs:{rotate:360,size:50,width:5,value:t.percentUsed,color:t.getColor(t.percentUsed)}},[t._v("\n    "+t._s(t.percentUsed)+"%\n")])},s=[],r={render:n,staticRenderFns:s};e.a=r},function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-navigation-drawer",{attrs:{persistent:"","mini-variant":t.miniVariant,clipped:t.clipped,temporary:t.temporary,"enable-resize-watcher":"",fixed:"",app:""},on:{toggle:function(e){t.$store.state.sideMenu.active=!t.$store.state.sideMenu.active}},model:{value:t.$store.state.sideMenu.active,callback:function(e){t.$set(t.$store.state.sideMenu,"active",e)},expression:"$store.state.sideMenu.active"}},[n("v-layout",[n("v-flex",[n("v-card",{staticClass:"elevation-6",attrs:{height:"160px"}},[n("v-toolbar",{staticClass:"toolbar",attrs:{dark:""}},[n("v-toolbar-title",[t._v("Marcus Taylor")]),t._v(" "),n("v-spacer"),t._v(" "),n("img",{attrs:{src:a(32),width:"40px"}})],1),t._v(" "),n("v-card-text",{staticClass:"mb-2"},[n("v-layout",{staticClass:"mb-1",attrs:{row:""}},[n("v-flex",[t._v("\n                            marcus.taylor@cyberware.ltd.uk\n                        ")])],1),t._v(" "),n("v-layout",{attrs:{row:""}},[n("v-flex",{staticClass:"pa-1",attrs:{xs3:""}},[n("gauge",{attrs:{"percent-used":25}})],1),t._v(" "),n("v-flex",{staticClass:"pt-2 teal--text"},[n("div",[n("strong",[t._v("\n                                    1.5G / 5G Used\n                                ")])]),t._v(" "),n("div",[t._v("\n                                15 days remaining\n                            ")])])],1)],1)],1)],1)],1),t._v(" "),n("side-menu-items",{attrs:{drawer:t.drawer}})],1)},s=[],r={render:n,staticRenderFns:s};e.a=r},function(t,e){t.exports="data:image/png;base64,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"},function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("side-drawer",{attrs:{clipped:t.clipped,drawer:t.drawer,"mini-variant":t.miniVariant,temporary:t.temporary}}),t._v(" "),a("v-toolbar",{staticClass:"white--text toolbar",attrs:{app:"","clipped-left":t.clipped}},[a("v-toolbar-side-icon",{class:{"rotate-45":t.$store.state.sideMenu.active},attrs:{dark:""},on:{click:function(e){t.$store.state.sideMenu.active=!t.$store.state.sideMenu.active}}}),t._v(" "),a("v-toolbar-title",{domProps:{textContent:t._s(t.$store.state.header.title)}})],1),t._v(" "),a("v-content",[a("router-view")],1),t._v(" "),a("v-footer",{attrs:{fixed:t.fixed,app:""}},[a("span",[t._v("© The world")])])],1)},s=[],r={render:n,staticRenderFns:s};e.a=r},function(t,e,a){"use strict";var n=a(2),s=a(35),r=a(36),i=a(39),c=a(42);n.default.use(s.a),e.a=new s.a({routes:[{path:"/",name:"Home",component:r.a},{path:"/account",name:"Account",component:i.a},{path:"/devices",name:"Devices",component:c.a}]})},,function(t,e,a){"use strict";function n(t){a(37)}var s=a(10),r=a(38),i=a(1),c=n,o=i(s.a,r.a,!1,c,"data-v-a9d9fd0e",null);e.a=o.exports},function(t,e){},function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-card",{staticClass:"white--text",attrs:{color:"blue-grey darken-2"}},[a("v-card-title",{attrs:{"primary-title":""}},[a("div",{staticClass:"headline"},[t._v("Unlimited music now")]),t._v(" "),a("div",[t._v("Listen to your favorite artists and albums whenever and wherever, online and offline.")])]),t._v(" "),a("v-card-actions",[a("v-btn",{attrs:{flat:"",dark:""}},[t._v("Listen now")])],1)],1)],1)],1)],1)},s=[],r={render:n,staticRenderFns:s};e.a=r},function(t,e,a){"use strict";function n(t){a(40)}var s=a(11),r=a(41),i=a(1),c=n,o=i(s.a,r.a,!1,c,"data-v-259ff47e",null);e.a=o.exports},function(t,e){},function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:""}},[a("div",{staticClass:"elevation-6 teal lighten-5"},[a("v-layout",{attrs:{row:"","align-center":""}},[a("h2",{staticClass:"grey--text"},[t._v("Data Usage")]),t._v(" "),a("v-flex",{staticClass:"text-xs-center"})],1),t._v(" "),a("v-layout",{attrs:{row:"","align-center":""}},[a("v-flex",{staticClass:"text-xs-center",attrs:{xs2:""}},[t._v("\n                1.2G\n            ")]),t._v(" "),a("v-flex",{attrs:{xs8:""}},[a("v-progress-linear",{attrs:{value:25}})],1),t._v(" "),a("v-flex",{staticClass:"text-xs-center",attrs:{xs2:""}},[t._v("\n                5G\n            ")])],1)],1)])},s=[],r={render:n,staticRenderFns:s};e.a=r},function(t,e,a){"use strict";function n(t){a(43)}var s=a(12),r=a(44),i=a(1),c=n,o=i(s.a,r.a,!1,c,"data-v-a7542ab2",null);e.a=o.exports},function(t,e){},function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:""}},[a("v-layout",[a("v-flex",[t._v("\n            This is the device list\n\n        ")])],1)],1)},s=[],r={render:n,staticRenderFns:s};e.a=r},,function(t,e,a){"use strict";var n=a(2),s=a(47),r=a(48),i=a(49),c=a(50);n.default.use(s.a),e.a=new s.a.Store({state:r.a,actions:i.a,mutations:c.a})},,function(t,e,a){"use strict";e.a={pageTitle:"Homepage",header:{title:" UC Wireless"},side:!0,sideMenu:{active:!1,items:[{title:"My Account",path:"/account",icon:"person"},{title:"My Devices",path:"/devices",icon:"smartphone"}]}}},function(t,e,a){"use strict";e.a={}},function(t,e,a){"use strict";e.a={}},function(t,e){}],[19]);
//# sourceMappingURL=app.19df05482f667b1459ca.js.map