(function(t){function e(e){for(var a,r,i=e[0],c=e[1],l=e[2],f=0,d=[];f<i.length;f++)r=i[f],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&d.push(n[r][0]),n[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(d.length)d.shift()();return o.push.apply(o,l||[]),s()}function s(){for(var t,e=0;e<o.length;e++){for(var s=o[e],a=!0,i=1;i<s.length;i++){var c=s[i];0!==n[c]&&(a=!1)}a&&(o.splice(e--,1),t=r(r.s=s[0]))}return t}var a={},n={app:0},o=[];function r(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=a,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(s,a,function(e){return t[e]}.bind(null,a));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;o.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},4678:function(t,e,s){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(t){var e=o(t);return s(e)}function o(t){if(!s.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}n.keys=function(){return Object.keys(a)},n.resolve=o,t.exports=n,n.id="4678"},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("KeepAccounts")],1)},o=[],r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a-tabs",{attrs:{"default-active-key":"1"}},[s("a-tab-pane",{key:"1"},[s("span",{attrs:{slot:"tab"},slot:"tab"},[s("a-icon",{attrs:{type:"form"}}),t._v(" 记一笔 ")],1),s("SaveAccountTab")],1),s("a-tab-pane",{key:"2"},[s("span",{attrs:{slot:"tab"},slot:"tab"},[s("a-icon",{attrs:{type:"profile"}}),t._v(" 看一眼 ")],1),s("AccountTableTab")],1)],1)},i=[],c=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("main",[s("a-form-model",{ref:"ruleForm",attrs:{model:t.form,rules:t.rules,"label-col":t.labelCol,"wrapper-col":t.wrapperCol}},[s("a-form-model-item",{attrs:{label:"金额",prop:"money"}},[s("a-input-number",{model:{value:t.form.money,callback:function(e){t.$set(t.form,"money",e)},expression:"form.money"}})],1),s("a-form-model-item",{attrs:{label:"时间",required:"",prop:"time"}},[s("a-date-picker",{staticStyle:{width:"100%"},attrs:{locale:t.locale,"show-time":"",type:"date",placeholder:"何时花的"},model:{value:t.form.time,callback:function(e){t.$set(t.form,"time",e)},expression:"form.time"}})],1),s("a-form-model-item",{attrs:{label:"位置",prop:"position"}},[s("a-input",{attrs:{placeholder:"在哪花的"},model:{value:t.form.position,callback:function(e){t.$set(t.form,"position",e)},expression:"form.position"}})],1),s("a-form-model-item",{attrs:{label:"标签",prop:"tags"}},[s("a-select",{staticStyle:{width:"200px"},attrs:{mode:"multiple",placeholder:"标签"},model:{value:t.form.tags,callback:function(e){t.$set(t.form,"tags",e)},expression:"form.tags"}},t._l(t.tags,(function(e,a){return s("a-select-option",{key:a,attrs:{value:e}},[t._v(" "+t._s(e)+" ")])})),1)],1),s("a-form-model-item",{attrs:{label:"原因",prop:"reason"}},[s("a-input",{attrs:{type:"textarea"},model:{value:t.form.reason,callback:function(e){t.$set(t.form,"reason",e)},expression:"form.reason"}})],1),s("a-form-model-item",{attrs:{"wrapper-col":{offset:1}}},[s("a-button-group",[s("a-button",{staticStyle:{background:"#16a184","border-color":"#16a184"},attrs:{loading:t.loading,type:"primary"},on:{click:function(e){return t.onSubmit("颜臭屁")}}},[s("a-icon",{attrs:{type:"man"}}),t._v("颜臭屁")],1),s("a-button",{staticStyle:{background:"#8e44ad","border-color":"#8e44ad"},attrs:{loading:t.loading,type:"primary"},on:{click:function(e){return t.onSubmit("林香香")}}},[s("a-icon",{attrs:{type:"woman"}}),t._v(" 林香香 ")],1)],1)],1)],1),s("a-modal",{attrs:{title:null,closable:!1,visible:t.visible,okText:"行",cancelText:""},on:{ok:t.handleOk}},[s("p",[t._v("记账成功"),s("a-icon",{staticStyle:{color:"#52c41a"},attrs:{type:"check-circle"}})],1),s("p",[t._v(t._s(t.form.create)+"完成了一次记账，奖励一朵小红花🌹")]),s("template",{slot:"footer"},[s("a-button",{attrs:{type:"primary"},on:{click:t.handleOk}},[t._v("行")])],1)],2)],1)},l=[],u=s("40a7"),f=s("c1df"),d=s.n(f),b=(s("5c3a"),{data:function(){return{labelCol:{span:1},wrapperCol:{span:14},other:"",locale:u["a"],loading:!1,form:{money:0,time:d()(),create:"",position:"",reason:"",tags:[]},tags:["游戏","衣服","淘宝","美食","医疗","交通","美妆","通讯","购物","日用","蔬菜","水果","零食","运动","娱乐","美容","住房","居家","长辈","社交","数码","书籍","学习","礼金","礼物","办公","维修","捐赠","亲友","快递","其他"],rules:{money:[{required:!0,type:"number",message:"一分没花？",trigger:"blur"}],time:[{required:!0,message:"去年花的？",trigger:"change"}],position:[{required:!0,message:"在哪偷的？",trigger:"blur"}],tags:[{type:"array",message:"花哪儿了？",trigger:"change",range:[2,10]}]},visible:!1}},methods:{onSubmit:function(t){var e=this;this.form.create=t,this.$refs.ruleForm.validate((function(t){if(!t)return!1;e.save()}))},resetForm:function(){this.$refs.ruleForm.resetFields()},save:function(){var t=this;this.loading=!0;var e=new this.$AV.Object("consume");e.set("money",this.form.money),e.set("time",this.form.time.format("YYYY-MM-DD HH:mm:ss")),e.set("create",this.form.create),e.set("position",this.form.position),e.set("reason",this.form.reason),e.set("tags",this.form.tags),e.save().then((function(){t.visible=!0,t.loading=!1,setTimeout((function(){t.visible=!1}),1e3)}))},handleOk:function(){this.visible=!1}},beforeCreate:function(){}}),m=b,p=s("2877"),y=Object(p["a"])(m,c,l,!1,null,null,null),j=y.exports,h=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("main",[s("a-radio-group",{on:{change:t.statisticsChange},model:{value:t.statisticsType,callback:function(e){t.statisticsType=e},expression:"statisticsType"}},[s("a-radio-button",{attrs:{value:"day"}},[t._v(" 本日 ")]),s("a-radio-button",{attrs:{value:"week"}},[t._v(" 本周 ")]),s("a-radio-button",{attrs:{value:"month"}},[t._v(" 本月 ")])],1),s("div",{staticStyle:{"font-size":"18px"}},[t._v(" 今天一共花了"),s("span",{staticStyle:{"font-size":"25px",color:"#e84c3d"}},[t._v(t._s(t.statisticsMoney)+" ")]),t._v("元 ")]),s("span",[s("LL"),t._v("花了"),s("span",{staticStyle:{"font-size":"25px",color:"#e84c3d"}},[t._v(t._s(t.llMoney)+" ")]),t._v("元")],1),s("a-divider",{attrs:{type:"vertical"}}),s("span",[s("BB"),t._v("花了"),s("span",{staticStyle:{"font-size":"25px",color:"#e84c3d"}},[t._v(t._s(t.bbMoney)+" ")]),t._v("元")],1),s("div",{staticStyle:{"margin-top":"10px"}},[t._v(" 节约大王是"),s("span",["颜臭屁"===t.king?s("BB"):"林香香"===t.king?s("LL"):s("span",[s("LL"),t._v("和 "),s("BB")],1)],1)]),s("a-divider",{attrs:{type:"horizontal"}}),s("a-table",{attrs:{size:"small",columns:t.columns,loading:t.loading,"data-source":t.data,pagination:t.pagination,"row-key":function(t){return t.id},bordered:""},on:{change:t.handleTableChange},scopedSlots:t._u([{key:"operation",fn:function(e,a){return s("span",{staticClass:"table-operation"},[s("a-button",{attrs:{type:"danger",size:"small"},on:{click:function(e){return t.remove(a)}}},[s("a-icon",{attrs:{type:"delete"}})],1)],1)}},{key:"create",fn:function(t){return s("span",{},[s("颜臭屁"===t?"BB":"LL")],1)}}])})],1)},v=[],g=(s("4de4"),s("7db0"),s("d81d"),s("13d5"),s("2ca0"),s("4478")),k=s("5530"),_=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticStyle:{color:"#8e44ad","font-size":"16px"}},[t._v("林香香")])},M=[],w={},x=w,z=Object(p["a"])(x,_,M,!1,null,null,null),O=z.exports,T=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticStyle:{color:"#16a184","font-size":"16px"}},[t._v("颜臭屁")])},$=[],S={},Y=S,A=Object(p["a"])(Y,T,$,!1,null,null,null),D=A.exports,C=[{dataIndex:"create",key:"create",title:"谁",scopedSlots:{customRender:"create"}},{title:"花了",dataIndex:"money",key:"money"},{title:"在哪",dataIndex:"position",key:"position"},{title:"干啥",key:"tags",dataIndex:"tags"},{title:"为啥",key:"reason",dataIndex:"reason"},{title:"操作",key:"operation",scopedSlots:{customRender:"operation"}}],L={components:{LL:O,BB:D},data:function(){return{data:[],columns:C,limit:10,loading:!1,pagination:{},statisticsMoney:0,llMoney:0,bbMoney:0,statisticsType:"day"}},computed:{king:function(){return this.llMoney==this.bbMoney?"林香香和颜臭屁":this.llMoney<this.bbMoney?"林香香":"颜臭屁"}},methods:{getTableData:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.loading=!0;var s=new this.$Query("consume");s.limit(this.limit),s.skip(this.limit*(e-1)),s.find().then((function(e){t.data=e.map((function(t){return t.attributes.id=t.id,t.attributes})),t.loading=!1}));var a=new this.$Query("consume");a.count().then((function(e){t.$set(t.pagination,"total",e)}))},remove:function(t){var e=this.$AV.Object.createWithoutData("consume",t.id);e.destroy(),this.$message.success("删除成功"),this.data=this.data.filter((function(e){return e.id!=t.id}))},handleTableChange:function(t){var e=Object(k["a"])({},this.pagination);e.current=t.current,this.pagination=e,this.getTableData(t.current)},statisticsToday:function(){var t=this,e=new this.$AV.Query("consume");e.startsWith("time",d()().format("YYYY-MM-DD")),e.find().then((function(e){0!==e.length&&(t.statisticsMoney=e.map((function(t){return t.attributes.money})).reduce((function(t,e){return t+e})),t.llMoney=e.filter((function(t){return"林香香"==t.attributes.create})).map((function(t){return t.attributes.money})).reduce((function(t,e){return t+e})),t.bbMoney=t.statisticsMoney-t.llMoney)}))},statisticsWeek:function(){var t=this,e=d()().weekday()+1,s=[];while(0!==e--){var a=new this.$AV.Query("consume");a.startsWith("time",d()().weekday(e).format("YYYY-MM-DD")),s.push(a)}var n=Object(g["a"])(this.$AV.Query.or,s);n.find().then((function(e){0!==e.length&&(t.statisticsMoney=e.map((function(t){return t.attributes.money})).reduce((function(t,e){return t+e})),t.llMoney=e.filter((function(t){return"林香香"==t.attributes.create})).map((function(t){return t.attributes.money})).reduce((function(t,e){return t+e})),t.bbMoney=t.statisticsMoney-t.llMoney)}))},statisticsMonth:function(){var t=this,e=new this.$AV.Query("consume");e.startsWith("time",d()().format("YYYY-MM")),e.find().then((function(e){0!==e.length&&(t.statisticsMoney=e.map((function(t){return t.attributes.money})).reduce((function(t,e){return t+e})),t.llMoney=e.filter((function(t){return"林香香"==t.attributes.create})).map((function(t){return t.attributes.money})).reduce((function(t,e){return t+e})),t.bbMoney=t.statisticsMoney-t.llMoney)}))},statisticsChange:function(){this.statisticsMoney=0,this.llMoney=0,this.bbMoney=this.statisticsMoney-this.llMoney,"day"===this.statisticsType?this.statisticsToday():"week"===this.statisticsType?this.statisticsWeek():this.statisticsMonth()}},mounted:function(){this.getTableData(),this.statisticsToday()}},B=L,E=Object(p["a"])(B,h,v,!1,null,null,null),V=E.exports,Q={components:{SaveAccountTab:j,AccountTableTab:V}},P=Q,W=Object(p["a"])(P,r,i,!1,null,null,null),q=W.exports,F={name:"app",components:{KeepAccounts:q}},I=F,H=Object(p["a"])(I,n,o,!1,null,null,null),K=H.exports,R=s("bc3a"),J=s.n(R),U=s("f23d");s("3aed");a["a"].use(U["a"]);var N=s("c72e"),G=N.Query;a["a"].config.productionTip=!1,N.init({appId:"hD3WyLygRshsM0oVHEVSBVEm-gzGzoHsz",appKey:"7cClyCuuYc54sTDAK6uo2JwO",serverURL:"https://hd3wylyg.lc-cn-n1-shared.com"}),console.log("https://hd3wylyg.lc-cn-n1-shared.com"),a["a"].prototype.$AV=N,a["a"].prototype.$Query=G,a["a"].prototype.$axios=J.a,new a["a"]({render:function(t){return t(K)}}).$mount("#app")}});
//# sourceMappingURL=app.ebfa6e03.js.map