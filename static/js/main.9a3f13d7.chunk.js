(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{14:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(6),l=a.n(o),c=a(1),r=a(2),s=a(4),m=a(3),u=a(5),p=a(7),d=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).state={status:"start",mode:"warm up"},e.onClick=e.onClick.bind(Object(p.a)(e)),e.goBack=e.goBack.bind(Object(p.a)(e)),e.changeMode1=e.changeMode1.bind(Object(p.a)(e)),e.changeMode2=e.changeMode2.bind(Object(p.a)(e)),e}return Object(u.a)(t,e),Object(r.a)(t,[{key:"onClick",value:function(){this.setState({status:"process"})}},{key:"goBack",value:function(){this.setState({status:"start"})}},{key:"changeMode1",value:function(){this.setState({mode:"warm up"})}},{key:"changeMode2",value:function(){this.setState({mode:"recovery"})}},{key:"render",value:function(){return i.a.createElement("div",null,"start"===this.state.status?i.a.createElement(g,{onButtonClick:this.onClick,onChangeClick1:this.changeMode1,onChangeClick2:this.changeMode2}):"warm up"===this.state.mode?i.a.createElement(h,{onButtonClick:this.goBack}):"recovery"===this.state.mode?"\u0420\u0430\u0431\u043e\u0442\u0430\u0435\u0442":"penis")}}]),t}(i.a.Component),g=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).state={click:!0,check1:!0,check2:!1},e}return Object(u.a)(t,e),Object(r.a)(t,[{key:"onClick",value:function(){this.setState({click:!1}),this.props.onButtonClick()}},{key:"changeMode1",value:function(){this.setState({check1:!0,check2:!1}),this.props.onChangeClick1()}},{key:"changeMode2",value:function(){this.setState({check2:!0,check1:!1}),this.props.onChangeClick2()}},{key:"render",value:function(){return i.a.createElement("div",{class:"EyeTraningPage"},i.a.createElement("div",{style:{margin:"35px auto 22px auto"}},"\u0422\u0440\u0435\u043d\u0438\u0440\u043e\u0432\u043a\u0430 \u0433\u043b\u0430\u0437"),i.a.createElement("div",{class:"EyeTraningPage-changing"},i.a.createElement("div",{id:"button1",onClick:this.changeMode1=this.changeMode1.bind(this),style:{backgroundColor:"".concat(!0===this.state.check1&&!1===this.state.check2?"#6b6b6f":"#333336")}},i.a.createElement("div",{style:{margin:"auto 0"}},"\u0420\u0430\u0437\u043c\u0438\u043d\u043a\u0430")),i.a.createElement("div",{id:"button2",onClick:this.changeMode2=this.changeMode2.bind(this),style:{backgroundColor:"".concat(!0===this.state.check2&&!1===this.state.check1?"#6b6b6f":"#333336")}},i.a.createElement("div",{style:{margin:"auto 0"}},"\u0412\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435"))),i.a.createElement("div",{class:"EyeTraningPage-trainigsToday"},i.a.createElement("div",null,"\u0422\u0440\u0435\u043d\u0438\u0440\u043e\u0432\u043e\u043a \u0441\u0435\u0433\u043e\u0434\u043d\u044f:"),i.a.createElement("div",null,"21")),i.a.createElement("div",{style:{margin:"0 auto"}},i.a.createElement("div",{id:"MainButtonStart",onClick:this.onClick=this.onClick.bind(this)},i.a.createElement("div",{style:{margin:"0 5px 0 0"}},i.a.createElement("div",{class:"ButtonCircle1"},i.a.createElement("div",{class:"ButtonCircles1_1"}),i.a.createElement("div",{class:"ButtonCircles1_2"})),i.a.createElement("div",{class:"ButtonCircle2"},i.a.createElement("div",{class:"ButtonCircles2_1"}),i.a.createElement("div",{class:"ButtonCircles2_2"}))),i.a.createElement("div",{style:{margin:"0 0 0 10px"}},i.a.createElement("div",{class:"ButtonCircle3"},i.a.createElement("div",{class:"ButtonCircles3_1"}),i.a.createElement("div",{class:"ButtonCircles3_2"})),i.a.createElement("div",{class:"ButtonCircle4"},i.a.createElement("div",{class:"ButtonCircles4_1"}),i.a.createElement("div",{class:"ButtonCircles4_2"}),i.a.createElement("div",{class:"ButtonCircles4_3"}),i.a.createElement("div",{class:"ButtonCircles4_3_1"}),i.a.createElement("div",{class:"ButtonCircles4_3_2"}))))),i.a.createElement("div",{style:{margin:"33px auto 0px auto"}},"\u041d\u0430\u0436\u043c\u0438\u0442\u0435, \u0447\u0442\u043e\u0431\u044b \u043d\u0430\u0447\u0430\u0442\u044c"))}}]),t}(i.a.Component),h=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={seconds:1,screen:0,goBack:!1},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"tick",value:function(){10===this.state.screen&&clearInterval(this.interval),0!==this.state.seconds&&0!==this.state.screen||this.setState({screen:this.state.screen+1,seconds:16}),0!==this.state.seconds?this.setState((function(e){return{seconds:e.seconds-1}})):clearInterval(this.interval)}},{key:"tak",value:function(){this.setState({screen:this.state.screen+1})}},{key:"Start",value:function(){var e=this;this.interval=setInterval((function(){return e.tick()}),1e3)}},{key:"onClick",value:function(){this.setState({goBack:!0}),this.props.onButtonClick()}},{key:"render",value:function(){return i.a.createElement("div",{class:"EyeTraningPage"},i.a.createElement("div",{style:{margin:"35px auto 22px auto",fontSize:"20px",fontWeight:"bold"}},"\u0422\u0440\u0435\u043d\u0438\u0440\u043e\u0432\u043a\u0430 \u0433\u043b\u0430\u0437"),i.a.createElement("div",{style:{margin:"35px auto 55px auto",fontSize:"65px"}},0===this.state.screen||this.state.screen>9?"":this.state.seconds),0===this.state.screen?i.a.createElement(E,{onButtonClick:this.Start=this.Start.bind(this)}):1===this.state.screen?i.a.createElement(y,null):2===this.state.screen?i.a.createElement(v,null):3===this.state.screen?i.a.createElement(b,null):4===this.state.screen?i.a.createElement(x,null):5===this.state.screen?i.a.createElement(f,null):6===this.state.screen?i.a.createElement(k,null):7===this.state.screen?i.a.createElement(O,null):8===this.state.screen?i.a.createElement(C,null):9===this.state.screen?i.a.createElement(j,null):i.a.createElement(S,{onButtonClick:this.onClick.bind(this)}),0===this.state.seconds?i.a.createElement("audio",{src:"./2.m4a",autoPlay:!0}):this.tick)}}]),t}(i.a.Component),E=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).state={status:!1},e}return Object(u.a)(t,e),Object(r.a)(t,[{key:"onClick",value:function(){this.setState({status:!0}),this.props.onButtonClick()}},{key:"render",value:function(){return i.a.createElement("div",{style:{margin:"0 auto"}},i.a.createElement("div",{style:{margin:"10px",textAlign:"center"}},"\u0420\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0430\u0446\u0438\u0438"),i.a.createElement("div",{style:{margin:"10px",textAlign:"center"}},"\u0412 \u043a\u043e\u043c\u043f\u043b\u0435\u043a\u0441\u0435 \u043d\u0430\u0431\u043e\u0440 \u0443\u043f\u0440\u0430\u0436\u043d\u0435\u043d\u0438\u0439, \u0432\u043e \u0432\u0440\u0435\u043c\u044f \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u043d\u0443\u0436\u043d\u043e \u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0432 \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f, \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u043c\u044b\u0435 \u0442\u043e\u0447\u043a\u043e\u0439."),i.a.createElement("div",{style:{margin:"10px",textAlign:"center"}},"\u0422\u043e\u0447\u043a\u0430 \u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442 \u0442\u043e\u043b\u044c\u043a\u043e \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u2014 \u0432\u0437\u0433\u043b\u044f\u0434 \u043f\u0435\u0440\u0435\u043c\u0435\u0449\u0430\u0439\u0442\u0435 \u0434\u043e \u0443\u043f\u043e\u0440\u0430, \u043d\u043e \u043d\u0435 \u0441\u0438\u043b\u044c\u043d\u043e."),i.a.createElement("div",{style:{margin:"10px",textAlign:"center"}},"\u0412 \u043a\u0440\u0430\u0439\u043d\u0438\u0445 \u0442\u043e\u0447\u043a\u0430\u0445 \u0437\u0430\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0439\u0442\u0435 \u0432\u0437\u0433\u043b\u044f\u0434 \u043d\u0430 \u0441\u0435\u043a\u0443\u043d\u0434\u0443."),i.a.createElement("div",{style:{margin:"10px",textAlign:"center"}},"\u041f\u043e\u0441\u043b\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u0443\u043f\u0440\u0430\u0436\u043d\u0435\u043d\u0438\u044f \u043c\u043e\u0436\u043d\u043e \u043b\u0435\u0433\u043e\u043d\u044c\u043a\u043e \u0437\u0430\u0436\u043c\u0443\u0440\u0438\u0442\u044c\u0441\u044f \u0438\u043b\u0438 \u043f\u043e\u043c\u043e\u0440\u0433\u0430\u0442\u044c \u043f\u0430\u0440\u0443 \u0441\u0435\u043a\u0443\u043d\u0434 \u2013 \u044d\u0442\u043e \u043f\u043e\u043c\u043e\u0433\u0430\u0435\u0442 \u0440\u0430\u0441\u0441\u043b\u0430\u0431\u0438\u0442\u044c\u0441\u044f \u0433\u043b\u0430\u0437\u0430\u043c."),i.a.createElement("div",{style:{margin:"10px",textAlign:"center"}},"\u041e\u0431\u0449\u0435\u0435 \u0432\u0440\u0435\u043c\u044f \u0443\u043f\u0440\u0430\u0436\u043d\u0435\u043d\u0438\u044f: 3 \u043c\u0438\u043d\u0443\u0442\u044b 25 \u0441\u0435\u043a\u0443\u043d\u0434."),i.a.createElement("div",{style:{margin:"70px 10px 10px 10px",textAlign:"center"}},"\u0411\u043e\u043b\u044c\u0448\u0435 \u043d\u0435 \u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c"),i.a.createElement("div",{onClick:this.onClick=this.onClick.bind(this),style:{margin:"10px auto",textAlign:"center",width:"170px",height:"35px",backgroundColor:"#6b6b6f",borderRadius:"10px"}},i.a.createElement("div",{style:{padding:"8px"}},"\u041d\u0430\u0447\u0430\u0442\u044c")),!0===this.state.status?i.a.createElement("audio",{src:"./2.m4a",autoPlay:!0}):"")}}]),t}(i.a.Component),y=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{class:"EyeTraningPage"},i.a.createElement("div",{style:{margin:"0px auto 0px auto",fontSize:"16px",fontWeight:"bold"}},"\u0420\u0430\u0441\u0441\u043b\u0430\u0431\u044c\u0442\u0435\u0441\u044c"),i.a.createElement("div",{style:{margin:"0px auto 0px auto",fontSize:"16px",fontWeight:"bold"}},i.a.createElement("div",{class:"Eye"},i.a.createElement("img",{src:"./Eye.svg",style:{height:"300px",width:"300px",position:"relative",bottom:"73px"}}),i.a.createElement("div",{class:"Pupil",style:{animationName:"none",margin:"0px auto",bottom:"249px",left:"5px"}}),i.a.createElement("div",{class:"PupilSmall",style:{animationName:"none",margin:"0px auto",bottom:"303px",left:"5px"}}),i.a.createElement("div",{class:"ClosedEye2",style:{animationName:"eyeAnimationClose",animationDuration:"0.1s",animationTimingFunction:"ease-in-out",animationIterationCount:"1",animationDelay:"0.5s",animationFillMode:"backwards",position:"relative",bottom:"413px",left:"58px"}}))),i.a.createElement("div",{style:{margin:"0px auto 0px auto",fontSize:"16px",fontWeight:"bold"}},"\u0417\u0430\u043a\u0440\u043e\u0439\u0442\u0435 \u0433\u043b\u0430\u0437\u0430 \u0434\u043e \u0441\u0438\u0433\u043d\u0430\u043b\u0430"))}}]),t}(i.a.Component),v=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{class:"EyeTraningPage"},i.a.createElement("div",{style:{margin:"0px auto 0px auto",fontSize:"16px",fontWeight:"bold"}},"\u0412\u0432\u0435\u0440\u0445-\u0432\u043d\u0438\u0437"),i.a.createElement("div",{style:{margin:"0px auto"}},i.a.createElement("div",{class:"Eye"},i.a.createElement("img",{src:"./Eye.svg",style:{height:"300px",width:"300px",position:"relative",bottom:"73px"}}),i.a.createElement("div",{class:"Pupil",style:{bottom:"253px",animationName:"eyeAnimationUpDown",animationDuration:"4",animationIterationCount:"10"}}),i.a.createElement("div",{class:"PupilSmall",style:{bottom:"307px",animationName:"smallEyeAnimationUpDown",animationDuration:"4",animationIterationCount:"10"}}),i.a.createElement("div",{class:"Background",style:{transform:"rotate(44deg)",margin:"0 auto",bottom:"420px"}}))),i.a.createElement("div",{style:{margin:"0px auto 0px auto",fontSize:"16px",fontWeight:"bold",textAlign:"center"}},"\u041f\u043b\u0430\u0432\u043d\u043e \u043f\u0435\u0440\u0435\u0432\u043e\u0434\u0438\u0442\u0435 \u0432\u0437\u0433\u043b\u044f\u0434 \u0441\u0432\u0435\u0440\u0445\u0443 \u0432 \u043d\u0438\u0437,",i.a.createElement("br",null),"\u0430 \u043c\u044b\u0441\u043b\u0435\u043d\u043d\u043e \u043f\u0440\u043e\u0434\u043e\u043b\u0436\u0430\u0435\u043c \u0434\u0432\u0438\u0436\u0435\u043d\u0438\u0435 \u0433\u043b\u0430\u0437 \u0437\u0430 \u043c\u0430\u043a\u0443\u0448\u043a\u0443 \u0433\u043e\u043b\u043e\u0432\u044b \u0438 \u043f\u043e\u0434\u0431\u043e\u0440\u043e\u0434\u043e\u043a"))}}]),t}(i.a.Component),b=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{class:"EyeTraningPage"},i.a.createElement("div",{style:{margin:"0px auto 0px auto",fontSize:"16px",fontWeight:"bold"}},"\u0420\u0430\u0441\u0441\u043b\u0430\u0431\u044c\u0442\u0435\u0441\u044c"),i.a.createElement("div",{style:{margin:"0px auto"}},i.a.createElement("div",{class:"Eye"},i.a.createElement("img",{src:"./Eye.svg",style:{height:"300px",width:"300px",position:"relative",bottom:"73px",right:"3px"}}),i.a.createElement("div",{class:"Pupil",style:{animationName:"nichego",bottom:"250px"}}),i.a.createElement("div",{class:"PupilSmall",style:{animationName:"nichego",bottom:"305px"}}),i.a.createElement("img",{src:"./EyeBlue.svg",style:{height:"300px",width:"300px",position:"relative",bottom:"485px",right:"3px",animationName:"eyeAnimationClip",animationDuration:"0.3s",animationIterationCount:"100",animationTimingFunction:"linear"}}))),i.a.createElement("div",{style:{margin:"0px auto 0px auto",fontSize:"16px",fontWeight:"bold",textAlign:"center"}},"\u041f\u043e\u043c\u043e\u0440\u0433\u0430\u0439\u0442\u0435 \u043b\u0435\u0433\u043a\u043e \u0438 \u0447\u0430\u0441\u0442\u043e,",i.a.createElement("br",null),"\u043f\u0440\u0438\u043c\u0435\u0440\u043d\u043e \u0442\u0430\u043a, \u043a\u0430\u043a \u043c\u0430\u0448\u0435\u0442 \u043a\u0440\u044b\u043b\u044b\u0448\u043a\u0430\u043c\u0438 \u043c\u043e\u0442\u044b\u043b\u0451\u043a"))}}]),t}(i.a.Component),x=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{class:"EyeTraningPage"},i.a.createElement("div",{style:{margin:"0px auto 0px auto",fontSize:"16px",fontWeight:"bold"}},"\u0412\u043b\u0435\u0432\u043e-\u0432\u043f\u0440\u0430\u0432\u043e"),i.a.createElement("div",{style:{margin:"0px auto"}},i.a.createElement("div",{class:"Eye"},i.a.createElement("img",{src:"./Eye.svg",style:{height:"300px",width:"300px",position:"relative",bottom:"73px"}}),i.a.createElement("div",{class:"Pupil",style:{bottom:"253px",animationName:"eyeAnimationLeftRight",animationDuration:"4s",animationIterationCount:"10"}}),i.a.createElement("div",{class:"PupilSmall",style:{bottom:"307px",animationName:"smallEyeAnimationLeftRight",animationDuration:"4s",animationIterationCount:"10"}}),i.a.createElement("div",{class:"Background",style:{transform:"rotate(44deg)",margin:"0 auto",bottom:"420px"}}))),i.a.createElement("div",{style:{margin:"0px auto 0px auto",fontSize:"16px",fontWeight:"bold",textAlign:"center"}},"\u041f\u043b\u0430\u0432\u043d\u043e \u043f\u0435\u0440\u0435\u0432\u043e\u0434\u0438\u0442\u0435 \u0432\u0437\u0433\u043b\u044f\u0434 \u0441\u043b\u0435\u0432\u0430 \u043d\u0430 \u043f\u0440\u0430\u0432\u043e,",i.a.createElement("br",null),"\u0430 \u043c\u044b\u0441\u043b\u0435\u043d\u043d\u043e \u043f\u0440\u043e\u0434\u043e\u043b\u0436\u0430\u0435\u043c \u0434\u0432\u0438\u0436\u0435\u043d\u0438\u0435 \u0433\u043b\u0430\u0437 \u0437\u0430 \u0443\u0445\u043e"))}}]),t}(i.a.Component),f=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{class:"EyeTraningPage"},i.a.createElement("div",{style:{margin:"0px auto 0px auto",fontSize:"16px",fontWeight:"bold"}},"\u0427\u0430\u0441\u0438\u043a\u0438"),i.a.createElement("div",{style:{margin:"0px auto"}},i.a.createElement("div",{class:"Eye"},i.a.createElement("img",{src:"./Eye.svg",style:{height:"300px",width:"300px",position:"relative",bottom:"73px"}}),i.a.createElement("div",{class:"Pupil",style:{bottom:"253px",animationName:"eyeAnimationClock",animationDuration:"4s",animationIterationCount:"10",animationTimingFunction:"cubic-bezier(0.52,-0.05, 0.45, 1.08)"}}),i.a.createElement("div",{class:"PupilSmall",style:{bottom:"307px",animationName:"smallEyeAnimationClock",animationDuration:"4s",animationIterationCount:"10",animationTimingFunction:"cubic-bezier(0.52,-0.05, 0.45, 1.08)"}}),i.a.createElement("div",{class:"Background",style:{transform:"rotate(44deg)",margin:"0 auto",bottom:"420px"}}))),i.a.createElement("div",{style:{margin:"0px auto 0px auto",fontSize:"16px",fontWeight:"bold",textAlign:"center"}},"\u041f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u044c\u0442\u0435 \u0446\u0438\u0444\u0435\u0440\u0431\u043b\u0430\u0434",i.a.createElement("br",null)," \u043e\u0431\u043e\u0437\u043d\u0430\u0447\u0442\u0435 \u043d\u0430 \u043d\u0451\u043c 12, 3, 6 \u0438 9 \u0447\u0430\u0441\u043e\u0432",i.a.createElement("br",null),"\u0438 \u043f\u0435\u0440\u0435\u043c\u0435\u0449\u0430\u0439\u0442\u0435 \u0432\u0437\u0433\u043b\u044f\u0434 \u043f\u043e \u044d\u0442\u0438\u043c \u0442\u043e\u0447\u043a\u0430\u043c"))}}]),t}(i.a.Component),k=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{class:"EyeTraningPage"},i.a.createElement("div",{style:{margin:"0px auto 0px auto",fontSize:"16px",fontWeight:"bold"}},"\u041a\u0440\u0443\u0433\u043e\u0432\u044b\u0435 \u0432\u0440\u0430\u0449\u0435\u043d\u0438\u044f"),i.a.createElement("div",{style:{margin:"0px auto"}},i.a.createElement("div",{class:"Eye"},i.a.createElement("img",{src:"./Eye.svg",style:{height:"300px",width:"300px",position:"relative",bottom:"73px"}}),i.a.createElement("div",{class:"Pupil",style:{bottom:"253px",animationName:"eyeAnimationCircle",animationDuration:"2.5s",animationIterationCount:"1000",animationTimingFunction:"linear"}}),i.a.createElement("div",{class:"PupilSmall",style:{bottom:"307px",animationName:"smallEyeAnimationCircle",animationDuration:"2.5s",animationIterationCount:"1000",animationTimingFunction:"linear"}}),i.a.createElement("div",{class:"Background",style:{transform:"rotate(44deg)",margin:"0 auto",bottom:"420px"}}))),i.a.createElement("div",{style:{margin:"0px auto 0px auto",fontSize:"16px",fontWeight:"bold",textAlign:"center"}},"\u041f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u044c\u0442\u0435 \u043f\u0435\u0440\u0435\u0434 \u0441\u043e\u0431\u043e\u0439 \u043a\u0440\u0443\u0433",i.a.createElement("br",null),"\u0438 \u0447\u0451\u0442\u043a\u043e \u043f\u043e \u0435\u0433\u043e \u0442\u0440\u0430\u0435\u043a\u0442\u043e\u0440\u0438\u0438 \u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0437\u0433\u043b\u044f\u0434, \u0440\u0438\u0441\u0443\u044f \u0435\u0433\u043e \u0441\u043d\u043e\u0432\u0430 \u0438 \u0441\u043d\u043e\u0432\u0430"))}}]),t}(i.a.Component),O=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{class:"EyeTraningPage"},i.a.createElement("div",{style:{margin:"0px auto 0px auto",fontSize:"16px",fontWeight:"bold"}},"\u0412\u043e\u0441\u044c\u043c\u0435\u0440\u043a\u0430"),i.a.createElement("div",{style:{margin:"0px auto"}},i.a.createElement("div",{class:"Eye"},i.a.createElement("img",{src:"./Eye.svg",style:{height:"300px",width:"300px",position:"relative",bottom:"73px"}}),i.a.createElement("div",{class:"Pupil",style:{bottom:"253px",animationName:"eyeAnimationEight",animationDuration:"3s",animationIterationCount:"1000",animationTimingFunction:"linear"}}),i.a.createElement("div",{class:"PupilSmall",style:{bottom:"307px",animationName:"smallEyeAnimationEight",animationDuration:"3s",animationIterationCount:"1000",animationTimingFunction:"linear"}}),i.a.createElement("div",{class:"Background",style:{transform:"rotate(44deg)",margin:"0 auto",bottom:"420px"}}))),i.a.createElement("div",{style:{margin:"0px auto 0px auto",fontSize:"16px",fontWeight:"bold",textAlign:"center"}},"\u041f\u0443\u0441\u0442\u044c \u0432\u0438\u0442\u044f \u0442\u0435\u043a\u0441\u0442 \u043d\u0430\u043f\u0438\u0448\u0435\u0442, \u043c\u043d\u0435 \u0432 \u043f\u0430\u0434\u043b\u0443"))}}]),t}(i.a.Component),C=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{class:"EyeTraningPage"},i.a.createElement("div",{style:{margin:"0px auto 0px auto",fontSize:"16px",fontWeight:"bold"}},"\u0425\u043e\u0434\u0438\u043a\u0438"),i.a.createElement("div",{style:{margin:"0px auto"}},i.a.createElement("div",{class:"Eye"},i.a.createElement("img",{src:"./Eye.svg",style:{height:"300px",width:"300px",position:"relative",bottom:"73px"}}),i.a.createElement("div",{class:"Pupil",style:{bottom:"253px",animationName:"eyeAnimationHourglass",animationDuration:"2.8s",animationIterationCount:"10",animationTimingFunction:"linear"}}),i.a.createElement("div",{class:"PupilSmall",style:{bottom:"307px",animationName:"smallEyeAnimationHourglass",animationDuration:"2.8s",animationIterationCount:"10",animationTimingFunction:"linear"}}),i.a.createElement("div",{class:"Background",style:{transform:"rotate(44deg)",margin:"0 auto",bottom:"420px"}}))),i.a.createElement("div",{style:{margin:"0px auto 0px auto",fontSize:"16px",fontWeight:"bold",textAlign:"center"}},"\u041c\u043d\u0435 \u043d\u0430\u0434\u043e\u0435\u043b\u043e \u043f\u0438\u0441\u0430\u0442\u044c \u0442\u0435\u043a\u0441\u0442 \u043f\u0440\u0438\u043f\u0430\u0448\u0443 \u0432\u0438\u0442\u044e"))}}]),t}(i.a.Component),j=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{class:"EyeTraningPage"},i.a.createElement("div",{style:{margin:"0px auto 0px auto",fontSize:"16px",fontWeight:"bold"}},"\u0412\u0431\u043b\u0438\u0437\u0438 \u0432\u0434\u0430\u043b\u0438"),i.a.createElement("div",{style:{margin:"0px auto"}},i.a.createElement("div",{class:"Eye"},i.a.createElement("div",{style:{animationName:"nearAndFar1",animationDuration:"3s",animationIterationCount:"10",animationTimingFunction:"linear"}},i.a.createElement("img",{src:"./background.svg",style:{height:"157px"}})),i.a.createElement("div",{style:{animationName:"nearAndFar2",animationDuration:"3s",animationIterationCount:"10",position:"relative",bottom:"113px",left:"81px",animationTimingFunction:"linear"}},i.a.createElement("img",{src:"./hand.svg",style:{width:"125px"}})))),i.a.createElement("div",{style:{margin:"auto 0px auto",fontSize:"16px",fontWeight:"bold",textAlign:"center"}},"\u041f\u0440\u043e\u0442\u044f\u043d\u0438\u0442\u0435 \u0432\u0430\u0448\u0443  \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0441\u0442\u043e\u0438\u0442 \u0434\u0430\u043b\u0435\u043a\u043e \u043e\u0442 \u0432\u0430\u0441,",i.a.createElement("br",null),"\u0442\u0435\u043f\u0435\u0440\u044c \u043e\u0431\u044a\u0435\u043a\u0442\u0430 \u043d\u0430 \u043b\u0430\u0434\u043e\u043d\u044c \u0438 \u043d\u0430\u043e\u0431\u043e\u0440\u043e\u0442"))}}]),t}(i.a.Component),S=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).state={status:!1},e}return Object(u.a)(t,e),Object(r.a)(t,[{key:"onClick",value:function(){this.setState({status:!0}),this.props.onButtonClick()}},{key:"render",value:function(){return i.a.createElement("div",{class:"EyeTraningPage"},i.a.createElement("div",{style:{margin:"40px auto 0px auto",fontSize:"18px",fontWeight:"bold"}},"\u0413\u043e\u0442\u043e\u0432\u043e!"),i.a.createElement("div",{style:{margin:"0px auto 0px auto",fontSize:"16px",fontWeight:"normal"}},"\u0422\u0440\u0435\u043d\u0438\u0440\u043e\u0432\u043a\u0430 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0430"),i.a.createElement("div",{style:{margin:"0px auto"}},i.a.createElement("div",{class:"AcceptCircle"},i.a.createElement("div",{class:"AcceptCheck"},i.a.createElement("div",{class:"AcceptCheck1"})))),i.a.createElement("div",{style:{margin:"0px auto 0px auto",fontSize:"16px",fontWeight:"thin",textAlign:"center",width:"250px",height:"35px",backgroundColor:"#6b6b6f",borderRadius:"50px"}},i.a.createElement("div",{onClick:this.onClick=this.onClick.bind(this),style:{margin:" 9px"}},"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e")))}}]),t}(i.a.Component),B=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,"Da")}}]),t}(i.a.Component),A=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{class:""},"Aga")}}]),t}(i.a.Component),P=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).state={page:1},e}return Object(u.a)(t,e),Object(r.a)(t,[{key:"OnEyeClick",value:function(){this.setState({page:1}),console.log("1")}},{key:"OnSetClick",value:function(){this.setState({page:2}),console.log("2")}},{key:"OnMpClick",value:function(){this.setState({page:3}),console.log("3")}},{key:"render",value:function(){return i.a.createElement("div",{id:"Area"},i.a.createElement("div",{id:"Content"},1===this.state.page?i.a.createElement(d,null):2===this.state.page?i.a.createElement(B,null):i.a.createElement(A,null)),i.a.createElement("div",{id:"Menu"},i.a.createElement("div",{style:{display:"flex"}},i.a.createElement("div",{style:{display:"flex",margin:"auto",marginTop:"20px"},onClick:this.OnSetClick=this.OnSetClick.bind(this)},i.a.createElement(z,null)),i.a.createElement("div",{style:{display:"flex",margin:"auto 30px"},onClick:this.OnEyeClick=this.OnEyeClick.bind(this)},i.a.createElement(T,null)),i.a.createElement("div",{style:{display:"flex",margin:"auto",marginTop:"20px"},onClick:this.OnMpClick=this.OnMpClick.bind(this)},i.a.createElement(I,null)))))}}]),t}(i.a.Component),T=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{class:"BigMenuButtom"},i.a.createElement("img",{style:{margin:"20px 18px"},src:"/Images/MenuButtons/EyeIcon.png",alt:"Sosi"}))}}]),t}(i.a.Component),z=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{class:"SmallMenuButtom"},i.a.createElement("img",{style:{margin:"12px 10px"},src:"/Images/MenuButtons/EyeIcon.png",alt:"Sosi"}))}}]),t}(i.a.Component),I=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{class:"SmallMenuButtom"},i.a.createElement("img",{style:{margin:"12px 10px"},src:"/Images/MenuButtons/EyeIcon.png",alt:"Sosi"}))}}]),t}(i.a.Component),M=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement(P,null)}}]),t}(i.a.Component);l.a.render(i.a.createElement(M,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(14)}},[[9,1,2]]]);
//# sourceMappingURL=main.9a3f13d7.chunk.js.map