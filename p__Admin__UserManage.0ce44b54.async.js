(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[210],{43819:function(F,v,t){"use strict";t.r(v),t.d(v,{waitTimePromise:function(){return O},waitTime:function(){return T}});var B=t(11849),R=t(62350),Z=t(24565),K=t(34792),P=t(48086),L=t(57663),M=t(71577),W=t(71153),_=t(60331),b=t(12968),C=t(20352),i=t(90636),m=t(3182),A=t(37476),j=t(5894),c=t(5966),y=t(24608),I=t(67294),D=t(93387),h=t(64317),f=t(34436),n=t(85893),O=function(){var d=(0,m.Z)((0,i.Z)().mark(function s(){var e,a=arguments;return(0,i.Z)().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return e=a.length>0&&a[0]!==void 0?a[0]:100,r.abrupt("return",new Promise(function(l){setTimeout(function(){l(!0)},e)}));case 2:case"end":return r.stop()}},s)}));return function(){return d.apply(this,arguments)}}(),T=function(){var d=(0,m.Z)((0,i.Z)().mark(function s(){var e,a=arguments;return(0,i.Z)().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return e=a.length>0&&a[0]!==void 0?a[0]:100,r.next=3,O(e);case 3:case"end":return r.stop()}},s)}));return function(){return d.apply(this,arguments)}}(),U=[{title:"\u5E8F\u53F7",dataIndex:"id",valueType:"indexBorder",width:48,align:"center"},{title:"\u7528\u6237\u540D",dataIndex:"username",copyable:!0,ellipsis:!0,tip:"\u7528\u6237\u540D\u79F0",align:"center"},{title:"\u7528\u6237\u8D26\u6237",dataIndex:"userAccount",copyable:!0,align:"center"},{title:"\u5934\u50CF",dataIndex:"avatarUrl",render:function(s,e){return(0,n.jsx)("div",{children:(0,n.jsx)(C.Z,{src:e.avatarUrl,width:"80px",height:"80px"})})},copyable:!0,align:"center"},{title:"vip\u7F16\u53F7",dataIndex:"vipCode",copyable:!0,align:"center"},{title:"\u7535\u8BDD",dataIndex:"phone",copyable:!0,align:"center"},{title:"\u90AE\u4EF6",dataIndex:"email",copyable:!0,align:"center"},{title:"\u6027\u522B",dataIndex:"gender",valueType:"select",valueEnum:{\u7537:{text:(0,n.jsx)(_.Z,{color:"success",children:"\u7537"})},\u5973:{text:(0,n.jsx)(_.Z,{color:"error",children:"\u5973"})}},align:"center"},{title:"\u7528\u6237\u72B6\u6001",dataIndex:"userStatus",valueType:"select",valueEnum:{0:{text:(0,n.jsx)(_.Z,{color:"success",children:"\u6B63\u5E38"}),status:"Success"},1:{text:(0,n.jsx)(_.Z,{color:"warning",children:"\u6CE8\u9500"}),status:"Default"},2:{text:(0,n.jsx)(_.Z,{color:"error",children:"\u5C01\u53F7"}),status:"Error"}},align:"center"},{title:"\u7528\u6237\u89D2\u8272",dataIndex:"userrole",valueType:"select",valueEnum:{user:{text:(0,n.jsx)(_.Z,{color:"default",children:"\u666E\u901A\u7528\u6237"})},admin:{text:(0,n.jsx)(_.Z,{color:"success",children:"\u7BA1\u7406\u5458"})},ban:{text:(0,n.jsx)(_.Z,{color:"error",children:"\u5C01\u53F7"}),status:"Error"}},align:"center"},{title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"createtime",valueType:"dateTime",align:"center"},{title:"\u64CD\u4F5C",align:"center",valueType:"option",key:"option",render:function(s,e,a,p){return[(0,n.jsx)(A.Y,{title:"\u4FEE\u6539\u7528\u6237\u4FE1\u606F",trigger:(0,n.jsx)(M.Z,{type:"link",children:"\u4FEE\u6539"}),autoFocusFirstInput:!0,modalProps:{destroyOnClose:!0,onCancel:function(){return console.log("run")}},submitTimeout:2e3,onFinish:function(){var r=(0,m.Z)((0,i.Z)().mark(function l(E){var u;return(0,i.Z)().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,T(1e3);case 2:return console.log("values \u7684\u503C\u4E3A-------"),E.id=e.id,o.next=6,(0,D.dj)(E);case 6:if(u=o.sent,!u){o.next=11;break}return P.ZP.success("\u63D0\u4EA4\u6210\u529F"),location.reload(),o.abrupt("return",!0);case 11:return o.abrupt("return",!1);case 12:case"end":return o.stop()}},l)}));return function(l){return r.apply(this,arguments)}}(),children:(0,n.jsxs)(j.A.Group,{children:[(0,n.jsx)(c.Z,{width:"md",name:"username",label:"\u7528\u6237\u540D",placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u540D",initialValue:e.username}),(0,n.jsx)(c.Z,{width:"md",name:"userAccount",label:"\u7528\u6237\u8D26\u6237",placeholder:"\u8BF7\u8F93\u5165\u8D26\u6237",initialValue:e.userAccount}),(0,n.jsx)(c.Z,{width:"md",name:"vipCode",label:"\u7528\u6237vip\u7F16\u53F7",placeholder:"\u8BF7\u8F93\u5165vip\u9080\u8BF7\u7801",initialValue:e.vipCode}),(0,n.jsx)(c.Z,{width:"md",name:"gender",label:"\u6027\u522B",placeholder:"\u8BF7\u8F93\u5165\u6027\u522B",initialValue:e.gender}),(0,n.jsx)(c.Z,{width:"md",name:"phone",label:"\u624B\u673A\u53F7",placeholder:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7",initialValue:e.phone}),(0,n.jsx)(c.Z,{width:"md",name:"email",label:"\u90AE\u7BB1",placeholder:"\u8BF7\u8F93\u5165\u90AE\u7BB1",initialValue:e.email}),(0,n.jsx)(h.Z,{name:"userStatus",fieldProps:{size:"large"},label:"\u7528\u6237\u72B6\u6001",options:f.ss,initialValue:e.userStatus,placeholder:"\u9009\u62E9\u7528\u6237\u72B6\u6001",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u7528\u6237\u72B6\u6001"}]}),(0,n.jsx)(h.Z,{name:"avatarUrl",fieldProps:{size:"large"},label:"\u7528\u6237\u5934\u50CF",options:f.lx,placeholder:"\u8BF7\u9009\u62E9\u7528\u6237\u5934\u50CF ",initialValue:e.avatarUrl,rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u9009\u62E9\u7528\u6237\u5934\u50CF!"}]}),(0,n.jsx)(h.Z,{name:"gender",fieldProps:{size:"large"},label:"\u6027\u522B",options:f.VU,placeholder:"\u8BF7\u9009\u62E9\u6027\u522B",initialValue:e.gender,rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u6027\u522B"}]}),(0,n.jsx)(h.Z,{name:"userrole",fieldProps:{size:"large"},label:"\u7528\u6237\u89D2\u8272",options:f.JU,initialValue:e.userrole,placeholder:"\u9009\u62E9\u7528\u6237\u89D2\u8272",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u7528\u6237\u89D2\u8272"}]})]})}),(0,n.jsx)("a",{children:(0,n.jsx)(Z.Z,{title:"\u5220\u9664\u7528\u6237",onConfirm:function(){var r=(0,m.Z)((0,i.Z)().mark(function l(E){var u,x;return(0,i.Z)().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return console.log(E),console.log(e.id),u=e.id,g.next=5,(0,D.h8)({id:u});case 5:x=g.sent,x?(P.ZP.success("\u5220\u9664\u6210\u529F"),location.reload()):P.ZP.error("\u5220\u9664\u5931\u8D25");case 7:case"end":return g.stop()}},l)}));return function(l){return r.apply(this,arguments)}}(),onCancel:function(l){},okText:"Yes",cancelText:"No",children:(0,n.jsx)(M.Z,{type:"link",danger:!0,children:"\u5220\u9664"})})},"view")]}}];v.default=function(){var d=(0,I.useRef)();return(0,n.jsx)(y.Z,{columns:U,actionRef:d,cardBordered:!0,request:function(){var s=(0,m.Z)((0,i.Z)().mark(function e(a,p,r){var l;return(0,i.Z)().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return console.log(a,p,r),u.next=3,T(2e3);case 3:return u.next=5,(0,D.pz)();case 5:return l=u.sent,u.abrupt("return",{data:l});case 7:case"end":return u.stop()}},e)}));return function(e,a,p){return s.apply(this,arguments)}}(),editable:{type:"multiple"},columnsState:{persistenceKey:"pro-table-singe-demos",persistenceType:"localStorage",onChange:function(e){console.log("value: ",e)}},rowKey:"id",search:{labelWidth:"auto"},options:{setting:{listsHeight:400}},form:{syncToUrl:function(e,a){return a==="get"?(0,B.Z)((0,B.Z)({},e),{},{created_at:[e.startTime,e.endTime]}):e}},pagination:{pageSize:5,onChange:function(e){return console.log(e)}},dateFormatter:"string",headerTitle:"\u9AD8\u7EA7\u8868\u683C"})}}}]);
