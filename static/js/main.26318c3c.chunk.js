(this["webpackJsonpv2ex-hot-topic-web"]=this["webpackJsonpv2ex-hot-topic-web"]||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),s=n.n(a),i=n(6),r=n.n(i),o=n(8),l=n.n(o),h=n(9),d=n(2),u=n(3),p=n(5),b=n(4);function j(e){var t=new Date(e),n=t.getFullYear(),c=t.getMonth()+1,a=t.getDate();return c<10&&(c="0"+c),a<10&&(a="0"+a),"".concat(n,"-").concat(c,"-").concat(a)}function v(){return new Date(Date.now()+60*(new Date).getTimezoneOffset()*1e3).getTime()}n(16);var x=function(e){Object(p.a)(n,e);var t=Object(b.a)(n);function n(e){var c;return Object(d.a)(this,n),(c=t.call(this,e)).props=void 0,c.props=e,c}return Object(u.a)(n,[{key:"render",value:function(){return Object(c.jsx)("div",{className:"dialog-main-wrapper",children:Object(c.jsx)("div",{className:"dialog-main-container "+this.props.class,children:this.props.children})})}}]),n}(s.a.Component),f=(n(17),function(e){Object(p.a)(n,e);var t=Object(b.a)(n);function n(){var e,c=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(d.a)(this,n),(e=t.call(this,c)).tempContainerEl=void 0,e.tempContainerEl=document.createElement("div"),e}return Object(u.a)(n,[{key:"show",value:function(){document.body.classList.add("dialog-present-no-scroll"),r.a.render(this.render(),document.body.appendChild(this.tempContainerEl))}},{key:"close",value:function(){this.tempContainerEl.remove(),document.body.classList.remove("dialog-present-no-scroll")}},{key:"render",value:function(){return Object(c.jsxs)(x,{class:"about-dialog-container",children:[Object(c.jsxs)("div",{className:"header-container",children:[Object(c.jsx)("p",{className:"title-text",children:"About"}),Object(c.jsx)("span",{className:"btn close-btn",onClick:this.close.bind(this),children:"Close"})]}),Object(c.jsxs)("div",{className:"content-container",children:[Object(c.jsx)("p",{children:"V2EX \u70ed\u8bae\u8bdd\u9898\u699c\uff0c\u5c55\u793a\u4ece 2020-12-18 \u65e5\u5f00\u59cb\u7684 V2EX \u70ed\u8bae\u8bdd\u9898\u699c\u5355\u3002"}),Object(c.jsxs)("p",{children:["\u6e90\u7801\u5730\u5740\uff1a",Object(c.jsx)("a",{href:"https://github.com/boojack/v2ex-daily-hot-topic-web",children:"GitHub"})]})]})]})}}]),n}(s.a.Component)),m=(n(18),function(e){Object(p.a)(n,e);var t=Object(b.a)(n);function n(e){var c;return Object(d.a)(this,n),(c=t.call(this,e)).props=void 0,c.props=e,c}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.date,n=e.topics;return Object(c.jsxs)("div",{className:"topics-container",children:[Object(c.jsx)("p",{className:"date-text",children:t}),0===n.length?Object(c.jsx)("p",{className:"null-text",children:"\u7a7a\u7a7a\u5982\u4e5f"}):n.map((function(e,t){return Object(c.jsxs)("div",{className:"topic-container",children:[Object(c.jsxs)("span",{className:"index-text",children:[t+1,"."]}),Object(c.jsx)("a",{className:"link-text",href:e.url,children:e.title})]},e.id)}))]})}}]),n}(s.a.Component)),O=(n(19),function(e){Object(p.a)(n,e);var t=Object(b.a)(n);function n(e){var c;return Object(d.a)(this,n),(c=t.call(this,e)).state=void 0,c.state={isFetching:!0,dailyTopics:[],failedFetching:!1},c}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=Object(h.a)(l.a.mark((function e(){var t,n,c,a,s,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=16082208e5,n=v();case 2:if(!(n>t)){e.next=26;break}return c=j(n),a="https://boojack.github.io/v2ex-daily-hot-topic/raw/"+c+".json",e.prev=5,e.next=8,fetch(a);case 8:if(s=e.sent,i={date:c,topics:[]},s.ok||404!==s.status){e.next=13;break}e.next=16;break;case 13:return e.next=15,s.json();case 15:i.topics=e.sent;case 16:this.setState({dailyTopics:this.state.dailyTopics.concat(i)}),e.next=23;break;case 19:return e.prev=19,e.t0=e.catch(5),this.setState({failedFetching:!0}),e.abrupt("break",26);case 23:n-=864e5,e.next=2;break;case 26:this.setState({isFetching:!1});case 27:case"end":return e.stop()}}),e,this,[[5,19]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(c.jsxs)("div",{className:"page-container",children:[Object(c.jsxs)("header",{className:"header-container",children:[Object(c.jsx)("p",{className:"header-text",children:"V2EX \u6bcf\u65e5\u70ed\u95e8\u8bdd\u9898"}),Object(c.jsx)("span",{className:"about-btn",onClick:this.showAboutDialog.bind(this),children:"About"})]}),this.state.dailyTopics.map((function(e){return Object(c.jsx)(m,{topics:e.topics,date:e.date},e.date)})),this.state.isFetching&&Object(c.jsx)("p",{children:"\u83b7\u53d6\u6570\u636e\u4e2d..."}),this.state.failedFetching&&Object(c.jsxs)("p",{children:["\u83b7\u53d6\u6570\u636e\u5931\u8d25\uff0c",Object(c.jsx)("span",{className:"error-text",onClick:this.refreshPage.bind(this),children:"\u5c1d\u8bd5\u5237\u65b0\u4e00\u4e0b\u5427"})]})]})}},{key:"refreshPage",value:function(){var e=this;this.setState({isFetching:!0,dailyTopics:[],failedFetching:!1}),setTimeout((function(){e.componentDidMount()}),2e3)}},{key:"showAboutDialog",value:function(){(new f).show()}}]),n}(s.a.Component));n(20);r.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(O,{})}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.26318c3c.chunk.js.map