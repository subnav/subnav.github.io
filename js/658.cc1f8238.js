"use strict";(self["webpackChunkchinese_myths"]=self["webpackChunkchinese_myths"]||[]).push([[658],{4658:function(e,t,n){n.r(t),n.d(t,{default:function(){return r}});var i=function(){var e=this,t=e._self._c;return t("el-container",[t("el-aside",{attrs:{width:"220px"}},[t("el-menu",{attrs:{"default-active":e.$store.state.activePath,"background-color":"#333744","text-color":"#fff","active-text-color":"#409FFF"}},[t("div",{staticClass:"logo"},[t("img",{attrs:{src:n(1869),alt:""}})]),t("el-menu-item",{attrs:{index:"/bghome"},on:{click:function(t){return e.toManagement("/bghome")}}},[t("template",{slot:"title"},[t("i",{staticClass:"el-icon-s-home"}),t("span",[e._v("首页")])])],2),e._l(e.menuList,(function(n){return t("el-submenu",{key:n.index,attrs:{index:n.index}},[t("template",{slot:"title"},[t("i",{class:n.icon}),t("span",[e._v(e._s(n.title))])]),e._l(n.children,(function(i){return t("el-menu-item",{directives:[{name:"show",rawName:"v-show",value:n.children,expression:"item.children"}],key:i.index,attrs:{index:i.index},on:{click:function(t){return e.toManagement(i.index)}}},[t("template",{slot:"title"},[t("i",{class:i.icon}),t("span",[e._v(e._s(i.title))])])],2)}))],2)}))],2)],1),t("el-container",[t("el-header",{staticStyle:{height:"80px"}},[t("img",{attrs:{src:e.$store.state.user.portrait,alt:""}}),t("el-button",{attrs:{type:"info"},on:{click:e.logout}},[e._v("返回")])],1),t("el-main",[t("router-view")],1)],1)],1)},l=[],o=(n(7658),{data(){return{menuList:[{index:"1",icon:"el-icon-menu",title:"板块管理",children:[{index:"/PlateList",icon:"el-icon-s-order",title:"板块列表"}]},{index:"2",icon:"el-icon-folder-opened",title:"帖子管理",children:[{index:"/PlateDetailList",icon:"el-icon-document",title:"帖子详情"}]},{index:"3",icon:"el-icon-s-custom",title:"用户管理",children:[{index:"/usermanagement",icon:"el-icon-data-line",title:"用户数据"}]}]}},methods:{logout(){this.$router.push("/home")},toManagement(e){this.$router.push(e)}}}),s=o,a=n(1001),c=(0,a.Z)(s,i,l,!1,null,"0a74ab4c",null),r=c.exports},1869:function(e,t,n){e.exports=n.p+"img/logoBg.3ecb51b9.svg"}}]);
//# sourceMappingURL=658.cc1f8238.js.map