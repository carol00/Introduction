(this.webpackJsonpintroduction=this.webpackJsonpintroduction||[]).push([[0],{157:function(t,e,a){},158:function(t,e,a){},161:function(t,e,a){},162:function(t,e,a){"use strict";a.r(e);var c=a(0),n=a.n(c),i=a(36),r=a.n(i),o=a(22),s=Object(o.c)({name:"counter",initialState:{value:10,init:"test"},reducers:{increment:function(t,e){t.value+=1},decrement:function(t){t.value-=1},incrementByAmount:function(t,e){t.value+=e.payload}}}),l=s.actions,d=l.increment,j=l.decrement,u=l.incrementByAmount,b=s.reducer,m=Object(o.c)({name:"rotateTitle",initialState:{total:0},reducers:{rotateTotal:function(t){t.total+=1}}}),h=m.actions.rotateTotal,O=m.reducer,_=a(23),x=a.n(_),v=a(38),f=a(51),p=a.n(f),g="../../list.json";g="/Introduction/../../list.json";var N=Object(o.b)("introduction",Object(v.a)(x.a.mark((function t(){var e;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.get(g);case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))),y=Object(o.c)({name:"introduction",initialState:{titleData:[]},reducers:{},extraReducers:function(t){t.addCase(N.fulfilled,(function(t,e){t.titleData=e.payload.titleData}))}}).reducer,C=Object(o.b)("family",Object(v.a)(x.a.mark((function t(){var e;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.get("../../list.json");case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))),w=Object(o.c)({name:"family",initialState:{photo:[],avatar:[]},reducers:{},extraReducers:function(t){t.addCase(C.fulfilled,(function(t,e){t.photo=e.payload.family.lifePhotoData,t.avatar=e.payload.family.avatar}))}}).reducer,S=Object(o.b)("handMade",Object(v.a)(x.a.mark((function t(){var e;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.get("../../list.json");case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))),k=Object(o.c)({name:"handMade",initialState:{herbarium:[],crystal:[],birthday:[],dog:[]},reducers:{},extraReducers:function(t){t.addCase(S.fulfilled,(function(t,e){t.herbarium=e.payload.handMade.herbarium,t.crystal=e.payload.handMade.crystal,t.birthday=e.payload.handMade.birthday,t.dog=e.payload.handMade.dog,t.advancedCrystal=e.payload.handMade.advancedCrystal,t.advancedDog=e.payload.handMade.advancedDog}))}}).reducer,T=Object(o.c)({name:"switcher",initialState:{light:!1},reducers:{lightSwitcher:function(t){t.light=!t.light}}}),E=(T.actions.lightSwitcher,T.reducer),M=Object(o.c)({name:"cloudAmount",initialState:{amount:0},reducers:{addAmount:function(t){t.amount+=1}}}),B=M.actions.addAmount,F=M.reducer,P=Object(o.a)({reducer:{counter:b,rotateTitle:O,introduction:y,family:w,handMade:k,switcher:E,cloudAmount:F}}),I=a(18),A=(a(157),a(9)),L=a(81),D=(a(158),a(7)),G=a(41),R=a.n(G),W=a.p+"static/media/avatar.cfe31c53.jpg",H=a(44),q=a.n(H),Q=a(6),Z=a(2);function X(t){var e=Object(I.b)(),a=Object(c.useState)(!1),n=Object(D.a)(a,2),i=n[0],r=n[1];return Object(Z.jsx)("div",{className:q.a.root,children:Object(Z.jsx)("div",{className:q.a.wrap,children:Object(Z.jsxs)("div",{className:Object(Q.a)(q.a.content,i&&q.a.flip),onClick:function(){i||(e(h()),r(!i))},children:[Object(Z.jsx)("div",{className:"".concat(q.a.card," ").concat(q.a.front),children:Object(Z.jsx)("span",{children:t.title})}),Object(Z.jsx)("div",{className:"".concat(q.a.card," ").concat(q.a.back),children:Object(Z.jsx)("span",{children:t.content})})]})})})}var z=a(59),J=a.n(z),U=a(106),V=a.n(U),Y=a(110),K=a.n(Y);function $(t){var e=t.switcher;return Object(Z.jsxs)("div",{className:J.a.root,children:[Object(Z.jsx)(V.a,{className:Object(Q.a)(J.a.lightBulbIcon,e&&J.a.openLightBulb)}),Object(Z.jsx)(K.a,{className:Object(Q.a)(J.a.electricalIcon,e&&J.a.openElectrical)})]})}var tt=a(88),et=a.n(tt);function at(t){var e=t.img,a=t.width,c=t.height;return Object(Z.jsx)("div",{className:et.a.root,children:Object(Z.jsx)("div",{className:et.a.container,style:{width:a,height:c},children:Object(Z.jsx)("img",{src:e,alt:""})})})}function ct(){return Object(Z.jsxs)("div",{className:R.a.about,children:[Object(Z.jsx)(at,{img:W,width:200,height:200}),Object(Z.jsxs)("div",{className:R.a.name,children:[Object(Z.jsx)("h2",{children:"\u8a31\u4f69\u84c9"}),Object(Z.jsx)("p",{children:"Carol"})]})]})}function nt(){var t=Object(I.c)((function(t){return t.introduction.titleData}));return Object(Z.jsx)("div",{className:R.a.description,children:t.map((function(t,e){return Object(Z.jsx)(X,{title:t.title,content:t.content},e)}))})}var it=["dark","light","brighter"];function rt(){var t=Object(I.c)((function(t){return t.rotateTitle.total})),e=Object(c.useState)(!1),a=Object(D.a)(e,2),n=a[0],i=a[1],r=Object(I.b)();return Object(c.useEffect)((function(){r(N()),3===t&&i(!0)}),[r,n,t]),Object(Z.jsx)("div",{className:R.a.root,children:Object(Z.jsxs)("div",{className:Object(Q.a)(R.a.wrap,t&&R.a["".concat(it[t-1])]),children:[Object(Z.jsx)("div",{className:R.a.stars}),Object(Z.jsxs)("div",{className:R.a.container,children:[Object(Z.jsx)(ct,{}),Object(Z.jsxs)("div",{className:R.a.content,children:[Object(Z.jsx)($,{switcher:n}),Object(Z.jsx)(nt,{})]})]})]})})}var ot=a(200),st=a(199),lt=a(201),dt=a(89),jt=a.n(dt),ut=a(111),bt=a.n(ut),mt=a(32),ht=a.n(mt),Ot=a(197),_t=a(202),xt=a(198),vt=a(203),ft=a(115);function pt(t){var e=t.children,a=t.value;return Object(Z.jsx)(st.a,{enterTouchDelay:0,placement:"top",title:a,children:e})}var gt=[{name:"\u5ba3\u63da",time:"2016/01~2017/10",content:"\u524d\u53f0\u3001\u5f8c\u53f0",icon:Object(Z.jsx)(bt.a,{})},{name:"\u9577\u9752",time:"2017/11~2021/05",content:"\u5b98\u7db2\u3001H5\u8001\u864e\u6a5f",icon:Object(Z.jsx)(jt.a,{})},{name:"\u5f08\u6a02",time:"2021/11/08 ~",content:"\u5b98\u7db2",icon:Object(Z.jsx)(jt.a,{})}],Nt=Object(ft.a)({palette:{primary:{main:"#285869"}}});function yt(){var t=Object(c.useState)(0),e=Object(D.a)(t,2),a=e[0],n=e[1],i=Object(c.useCallback)((function(){a>=2||n(a+1)}),[a]);return Object(Z.jsx)("div",{className:ht.a.root,children:Object(Z.jsx)("div",{className:ht.a.container,children:Object(Z.jsxs)(lt.a,{sx:{width:350},onClick:function(){return i()},className:ht.a.box,children:[Object(Z.jsx)("div",{className:ht.a.content,children:gt.map((function(t,e){return Object(Z.jsx)("div",{className:ht.a.items,children:Object(Z.jsxs)(_t.a,{children:[Object(Z.jsxs)(Ot.a,{className:Object(Q.a)(ht.a.name,a===e&&ht.a.activeColor),children:[t.name,Object(Z.jsx)("div",{className:ht.a.text,children:Object(Z.jsx)("p",{children:t.content})})]}),Object(Z.jsx)(vt.a,{className:Object(Q.a)(ht.a.icon,a===e&&ht.a.activeScale),children:t.icon}),Object(Z.jsx)(xt.a,{className:Object(Q.a)(ht.a.time,a===e&&ht.a.activeColor),children:t.time})]})},e)}))}),Object(Z.jsx)("div",{className:ht.a.sliderBar,children:Object(Z.jsx)(ot.a,{components:{ValueLabel:pt},"aria-label":"Volume",theme:Nt,value:a,max:2.4})})]})})})}var Ct=a(56),wt=a(90),St=a.n(wt),kt=a(204),Tt=a(205),Et=function(t,e){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;return{src:"".concat(t,"?w=").concat(e*c,"&h=").concat(e*a,"&fit=crop&auto=format"),srcSet:"".concat(t,"?w=").concat(e*c,"&h=").concat(e*a,"&fit=crop&auto=format&dpr=2 2x")}},Mt=function(){var t=Object(I.c)((function(t){return t.family.photo}));return Object(Z.jsx)(kt.a,{sx:{width:650,height:600},variant:"quilted",cols:4,rowHeight:121,children:t.map((function(t){return Object(Z.jsx)(Tt.a,{cols:t.cols||1,rows:t.rows||1,children:Object(Z.jsx)("img",Object(Ct.a)(Object(Ct.a)({},Et(t.src,121,t.rows,t.cols)),{},{alt:t.title,loading:"lazy"}))},t.src)}))})};function Bt(){var t=Object(I.b)();return Object(c.useEffect)((function(){t(C())}),[t]),Object(Z.jsx)("div",{className:St.a.root,children:Object(Z.jsx)("div",{className:St.a.container,children:Object(Z.jsx)(Mt,{})})})}var Ft=a(45),Pt=a(91),It=a.n(Pt);function At(t){var e=t.img,a=t.title,c=t.width,n=t.height;return Object(Z.jsxs)("div",{className:It.a.content,style:{width:c,height:n},children:[Object(Z.jsx)("img",{src:e,alt:""}),Object(Z.jsx)("div",{className:It.a.title,children:Object(Z.jsx)("p",{children:a})})]})}var Lt=a(114),Dt=a.n(Lt),Gt=a(47),Rt=a(17),Wt=a.n(Rt),Ht=270,qt=270,Qt=function(t){var e=t.title,a=t.iconName;return Object(Z.jsxs)("div",{className:Wt.a.titleContent,children:[Object(Z.jsx)("div",{className:Wt.a.icon,children:Object(Z.jsx)(Dt.a,{path:a})}),Object(Z.jsx)("h1",{children:e})]})},Zt=function(t){var e=t.data.herbarium;return Object(Z.jsxs)("div",{className:Wt.a.items,children:[Object(Z.jsx)(Qt,{title:"\u6d6e\u6e38\u82b1",iconName:Gt.b}),Object(Z.jsx)("div",{className:Wt.a.picContent,children:e.map((function(t,e){return Object(Z.jsx)(At,{img:t.src,title:t.title,width:Ht,height:qt},e)}))})]})},Xt=function(t){var e=t.data.crystal;return Object(Z.jsxs)("div",{className:Wt.a.items,children:[Object(Z.jsx)(Qt,{title:"\u6c34\u6676\u82b1",iconName:Gt.b}),Object(Z.jsx)("div",{className:Wt.a.picContent,children:e.map((function(t,e){return Object(Z.jsx)(At,{img:t.src,title:t.title,width:Ht,height:qt},e)}))})]})},zt=function(t){var e=t.data.advancedCrystal;return Object(Z.jsxs)("div",{className:Wt.a.items,children:[Object(Z.jsx)(Qt,{title:"\u6c34\u6676\u82b1",iconName:Gt.b}),Object(Z.jsx)("div",{className:Wt.a.picContent,children:e.map((function(t,e){return Object(Z.jsx)(At,{img:t.src,title:t.title,width:Ht,height:qt},e)}))})]})},Jt=function(t){var e=t.data.birthday;return Object(Z.jsxs)("div",{className:Wt.a.items,children:[Object(Z.jsx)(Qt,{title:"\u6176\u751f",iconName:Gt.b}),Object(Z.jsx)("div",{className:Wt.a.picContent,children:e.map((function(t,e){return Object(Z.jsx)(At,{img:t.src,title:t.title,width:Ht,height:qt},e)}))})]})},Ut=function(t){var e=t.data.dog;return Object(Z.jsxs)("div",{className:Wt.a.items,children:[Object(Z.jsx)(Qt,{title:"\u9805\u5708",iconName:Gt.a}),Object(Z.jsx)("div",{className:Wt.a.picContent,children:e.map((function(t,e){return Object(Z.jsx)(At,{img:t.src,title:t.title,width:Ht,height:qt},e)}))})]})},Vt=function(t){var e=t.data.advancedDog;return Object(Z.jsxs)("div",{className:Wt.a.items,children:[Object(Z.jsx)(Qt,{title:"\u9805\u5708",iconName:Gt.a}),Object(Z.jsx)("div",{className:Wt.a.picContent,children:e.map((function(t,e){return Object(Z.jsx)(At,{img:t.src,title:t.title,width:Ht,height:260},e)}))})]})},Yt=[function(t){var e=t.style,a=t.data;return n.a.createElement(Ft.animated.div,{className:"".concat(Wt.a.container),style:Object.assign(Object.assign({},e))},Object(Z.jsx)(Xt,{data:a}))},function(t){var e=t.style,a=t.data;return n.a.createElement(Ft.animated.div,{className:"".concat(Wt.a.container),style:Object.assign(Object.assign({},e))},Object(Z.jsx)(zt,{data:a}))},function(t){var e=t.style,a=t.data;return n.a.createElement(Ft.animated.div,{className:"".concat(Wt.a.container),style:Object.assign(Object.assign({},e))},Object(Z.jsx)(Zt,{data:a}))},function(t){var e=t.style,a=t.data;return n.a.createElement(Ft.animated.div,{className:"".concat(Wt.a.container),style:Object.assign(Object.assign({},e))},Object(Z.jsx)(Jt,{data:a}))},function(t){var e=t.style,a=t.data;return n.a.createElement(Ft.animated.div,{className:"".concat(Wt.a.container),style:Object.assign(Object.assign({},e))},Object(Z.jsx)(Ut,{data:a}))},function(t){var e=t.style,a=t.data;return n.a.createElement(Ft.animated.div,{className:"".concat(Wt.a.container),style:Object.assign(Object.assign({},e))},Object(Z.jsx)(Vt,{data:a}))}];function Kt(){var t=Object(I.b)(),e=Object(I.c)((function(t){return t.handMade})),a=Object(c.useState)(0),i=Object(D.a)(a,2),r=i[0],o=i[1],s=Object(c.useCallback)((function(){return o((function(t){return(t+1)%6}))}),[]),l=Object(Ft.useSpringRef)(),d=Object(Ft.useTransition)(r,{ref:l,keys:null,from:{opacity:0,transform:"translate3d(0,100%,0)"},enter:{opacity:1,transform:"translate3d(0,0%,0)"},leave:{opacity:0,transform:"translate3d(0,-50%,0)"},data:e});return Object(c.useEffect)((function(){t(S()),l.start()}),[t,r,l]),n.a.createElement("div",{className:"".concat(Wt.a.root),onClick:s},d((function(t,a){var c=Yt[a];return n.a.createElement(c,{style:t,data:e})})))}var $t=a(37),te=a.n($t),ee=[{title:"\u77ed\u671f",content:"\u5b78\u597dReact"},{title:"\u4e2d\u671f",content:"\u80fd\u5920\u7368\u7acb\u5b8c\u6210\u7dad\u8b77\u5de5\u4f5c"},{title:"\u9577\u671f",content:"..."}],ae=["moveCloud1","moveCloud2","moveCloud3"],ce=["cloudPos1","cloudPos2","cloudPos3"],ne=function(t){var e=t.item,a=t.index,n=Object(I.b)(),i=Object(I.c)((function(t){return t.cloudAmount.amount})),r=Object(c.useState)(!1),o=Object(D.a)(r,2),s=o[0],l=o[1],d=Object(c.useCallback)((function(){s||2===i||(n(B()),l(!s))}),[n,s,i]);return Object(Z.jsx)("div",{className:Object(Q.a)(te.a.cloudWrap,te.a["".concat(ce[a])],s&&te.a[ae[a]]),children:Object(Z.jsxs)("div",{className:Object(Q.a)(te.a.cloud),onClick:function(){return d()},children:[Object(Z.jsx)("h3",{children:e.title}),Object(Z.jsx)("p",{className:te.a.depiction,children:e.content})]})})};function ie(){var t=Object(I.c)((function(t){return t.cloudAmount.amount}));return Object(Z.jsx)("div",{className:te.a.root,children:Object(Z.jsxs)("div",{className:Object(Q.a)(te.a.container,2===t&&te.a.showF1),children:[Object(Z.jsxs)("div",{className:Object(Q.a)(te.a.finalGoal,2===t&&te.a.showFinalGoal),children:[Object(Z.jsx)("h3",{children:"\u9577\u671f"}),Object(Z.jsx)("p",{children:"\u770bF1\u8cfd\u8eca\u73fe\u5834!!!"})]}),Object(Z.jsx)("div",{className:Object(Q.a)(te.a.content),children:ee.map((function(t,e){return Object(Z.jsx)(ne,{item:t,index:e},e)}))})]})})}function re(){var t=Object(I.c)((function(t){return t.counter.value})),e=Object(I.b)(),a=Object(c.useState)("2"),n=Object(D.a)(a,2),i=n[0],r=n[1];return Object(Z.jsxs)("div",{children:[t,Object(Z.jsxs)("div",{children:[Object(Z.jsx)("button",{onClick:function(){return e(d())},children:"+"}),Object(Z.jsx)("button",{onClick:function(){return e(j())},children:"-"})]}),Object(Z.jsxs)("div",{children:[Object(Z.jsx)("input",{value:i,onChange:function(t){return r(t.target.value)}}),Object(Z.jsx)("button",{onClick:function(){return e(u(Number(i)))},children:"add mount"}),Object(Z.jsx)("button",{onClick:function(){return e((t=Number(i),function(e){setTimeout((function(){e(u(t))}),1e3)}));var t},children:"add async"})]})]})}var oe=a(92),se=a.n(oe),le=[{name:"Introduction",to:"/"},{name:"Family",to:"/family"},{name:"Hand Made",to:"/handMade"},{name:"Experience",to:"/experience"},{name:"Goal",to:"/goal"}];function de(){var t=Object(A.e)();return Object(Z.jsx)("div",{className:se.a.root,children:Object(Z.jsx)("ul",{children:le.map((function(e,a){return Object(Z.jsx)("li",{children:Object(Z.jsx)(L.b,{to:e.to,className:Object(Q.a)(t.pathname==="".concat(e.to)&&se.a.active),children:e.name})},a)}))})})}var je=function(){return Object(Z.jsxs)(A.c,{children:[Object(Z.jsx)(A.a,{exact:!0,path:"/",element:Object(Z.jsx)(rt,{})}),Object(Z.jsx)(A.a,{exact:!0,path:"experience",element:Object(Z.jsx)(yt,{})}),Object(Z.jsx)(A.a,{exact:!0,path:"family",element:Object(Z.jsx)(Bt,{})}),Object(Z.jsx)(A.a,{exact:!0,path:"handMade",element:Object(Z.jsx)(Kt,{})}),Object(Z.jsx)(A.a,{exact:!0,path:"goal",element:Object(Z.jsx)(ie,{})}),Object(Z.jsx)(A.a,{exact:!0,path:"test",element:Object(Z.jsx)(re,{})}),Object(Z.jsx)(A.a,{path:"*",element:Object(Z.jsx)(rt,{})})]})};var ue=function(){return Object(Z.jsx)("div",{className:"App",children:Object(Z.jsxs)(L.a,{children:[Object(Z.jsx)(de,{}),Object(Z.jsx)(je,{})]})})},be=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,206)).then((function(e){var a=e.getCLS,c=e.getFID,n=e.getFCP,i=e.getLCP,r=e.getTTFB;a(t),c(t),n(t),i(t),r(t)}))};a(161);r.a.render(Object(Z.jsx)(I.a,{store:P,children:Object(Z.jsx)(n.a.StrictMode,{children:Object(Z.jsx)(ue,{})})}),document.getElementById("root")),be()},17:function(t,e,a){t.exports={root:"handMade_root__31vsq",container:"handMade_container__1b-Pi",picContent:"handMade_picContent__20SSI",items:"handMade_items__13GTh",titleContent:"handMade_titleContent__1cCO3",icon:"handMade_icon__1ODjc"}},32:function(t,e,a){t.exports={root:"experience_root__3vpE7",container:"experience_container__q3xtY",box:"experience_box__tm5Xy",content:"experience_content__WqCFT",items:"experience_items__50Iyr",icon:"experience_icon__3k03W",name:"experience_name__1ICRm",time:"experience_time__2nUPu",text:"experience_text__coERF",activeScale:"experience_activeScale__2oZTU",scale:"experience_scale__2Njxg",activeColor:"experience_activeColor__3_eCE",color:"experience_color__32fwb",sliderBar:"experience_sliderBar__3NL7O"}},37:function(t,e,a){t.exports={root:"goal_root__3QyH7",container:"goal_container__2W4f-",finalGoal:"goal_finalGoal__3VZMb",showFinalGoal:"goal_showFinalGoal__lYAU2",appearFinalGoal:"goal_appearFinalGoal__Zgy8z",content:"goal_content__1c6o2",cloudWrap:"goal_cloudWrap__-H2Zl",cloud:"goal_cloud__2TEW8",depiction:"goal_depiction__2OLwx",cloudPos1:"goal_cloudPos1__3H6Z9",cloudPos2:"goal_cloudPos2__kGQMe",cloudPos3:"goal_cloudPos3__1ylw5",moveCloud1:"goal_moveCloud1__1qUoc",moveLeft:"goal_moveLeft__2uL_c",moveCloud2:"goal_moveCloud2__3H1gO",moveRight:"goal_moveRight__1RCIL",scale:"goal_scale__1rF4h",showF1:"goal_showF1__1iqYo",transformImg:"goal_transformImg__1SQG8"}},41:function(t,e,a){t.exports={root:"introduction_root__1twCd",wrap:"introduction_wrap__1jR99",stars:"introduction_stars__2pQSu",container:"introduction_container__3Tj-T",about:"introduction_about__1gFY-",content:"introduction_content__1eihv",name:"introduction_name__29CXi",description:"introduction_description__tx19K",brighter:"introduction_brighter__3wxDS"}},44:function(t,e,a){t.exports={root:"rotateTitle_root__SwyXW",wrap:"rotateTitle_wrap__2kZaB",content:"rotateTitle_content__2wOCs",card:"rotateTitle_card__B8_K-",front:"rotateTitle_front__3gSPT",back:"rotateTitle_back__eSxrX",flip:"rotateTitle_flip__18WcX"}},59:function(t,e,a){t.exports={root:"lightBulb_root__u1yME",lightBulbIcon:"lightBulb_lightBulbIcon__xi5uT",electricalIcon:"lightBulb_electricalIcon__6HaPC",openLightBulb:"lightBulb_openLightBulb__2ztsQ",openLightAni:"lightBulb_openLightAni__3S-oz",openElectrical:"lightBulb_openElectrical__1tRs7",openElectricalAni:"lightBulb_openElectricalAni__1jmlM"}},88:function(t,e,a){t.exports={root:"avatar_root__1KgcA",container:"avatar_container__1NfJp"}},90:function(t,e,a){t.exports={root:"family_root__wh9Cf",container:"family_container__2k0yq"}},91:function(t,e,a){t.exports={content:"artWorkPic_content__21sIl",title:"artWorkPic_title__2Er2y"}},92:function(t,e,a){t.exports={root:"header_root__IPVQJ",active:"header_active__3FcF7"}}},[[162,1,2]]]);
//# sourceMappingURL=main.db3742ec.chunk.js.map