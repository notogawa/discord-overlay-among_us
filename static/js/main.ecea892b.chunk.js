(this["webpackJsonpdiscord-overlay-among_us"]=this["webpackJsonpdiscord-overlay-among_us"]||[]).push([[0],{13:function(n,e,t){},14:function(n,e,t){},16:function(n,e,t){"use strict";t.r(e);var a=t(1),r=t.n(a),c=t(3),o=t.n(c),s=(t(13),t(4)),i=t(5),l=t(6),d=t(8),u=t(7),p=(t(14),t(0)),b=["red","blue","green","pink","orange","yellow","black","white","purple","brown","cyan","lime"],m=function(n){Object(d.a)(t,n);var e=Object(u.a)(t);function t(n){var a;return Object(i.a)(this,t),(a=e.call(this,n)).handleChange=function(n){a.setState(Object(s.a)({},n.target.name,n.target.value))},a.genetate_css=function(){return'\nbody {\n  background-color: rgba(0, 0, 0, 0);\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n}\n\n.avatar.speaking + .user .name {\n  background: #41DAC6 !important;\n}\n\n.user .name {\n  position: relative;\n  overflow: visible;\n  display: inline-block;\n}\n\n.user .name::before {\n  position: absolute;\n  top: -50px;\n  left: -150px;\n  content: "";\n  display: block;\n  width: 90px;\n  height: 115px;\n  background-image: url(https://user-images.githubusercontent.com/372530/109404163-caddd600-79a6-11eb-9e93-8cdf5d469d33.png);\n  background-size: 1080px auto;\n  transform: scale(0.75);\n}\n\n.avatar + .user .name::before {\n  transition: all 0.05s 0s ease-in-out;\n}\n\n.avatar.speaking + .user .name::before {\n  transform: translateX(-15px) scale(-1, 1);\n  animation: rotation 0.75s ease 0.1s infinite alternate none running;\n}\n\nli.voice-state {\n  display: none;\n  padding: 20px 0 0 90px;\n}\n\n@keyframes rotation {\n  0% {\n    transform: translateX(-15px) scale(-1, 1);\n  }\n  50% {\n    transform: translateX(-15px) scale(-1.1, 0.85);\n  }\n  100% {\n    transform: translateX(-15px) scale(-1, 1);\n  }\n}\n'+b.map((function(n,e){return""===a.state[n]?"":"\n/* ".concat(n,' */\nli.voice-state[data-reactid*="').concat(a.state[n],'"] {\n  display: block;\n}\nli.voice-state[data-reactid*="').concat(a.state[n],'"] .user .name::before {\n  background-position: -').concat(90*e,'px 0;\n}\nli.voice-state[data-reactid*="').concat(a.state[n],'"] .avatar.speaking +  .user .name::before {\n  background-position: -').concat(90*e,"px -115px !important;\n}\n")})).reduce((function(n,e){return n+e}))},a.copyToClipboard=function(n){a.code.select(),document.execCommand("copy")},a.state={red:"",blue:"",green:"",pink:"",orange:"",yellow:"",black:"",white:"",purple:"",brown:"",cyan:"",lime:""},a}return Object(l.a)(t,[{key:"render",value:function(){var n=this,e=function(e){return""===n.state[e]?e:e+" used"};return console.log(this.state),Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)("h1",{children:"Discord StreamKit Overlay ID Mapper for Among Us"}),Object(p.jsx)("div",{className:"players",children:Object(p.jsx)("ul",{children:b.map((function(t,a){return Object(p.jsxs)("li",{className:e(t),children:[Object(p.jsx)("div",{className:"chara",children:Object(p.jsx)("img",{alt:"".concat(t," player"),src:"".concat("/discord-overlay-among_us","/players.png")})}),Object(p.jsxs)("div",{className:"form",children:[t," ",Object(p.jsx)("br",{}),Object(p.jsx)("input",{type:"text",name:t,onChange:n.handleChange,value:n.state[t]})]})]},t)}))})}),Object(p.jsx)("div",{className:"style",children:Object(p.jsx)("textarea",{readOnly:!0,ref:function(e){return n.code=e},value:this.genetate_css(),onClick:this.copyToClipboard})})]})}}]),t}(a.Component),g=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,17)).then((function(e){var t=e.getCLS,a=e.getFID,r=e.getFCP,c=e.getLCP,o=e.getTTFB;t(n),a(n),r(n),c(n),o(n)}))};o.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(m,{})}),document.getElementById("root")),g()}},[[16,1,2]]]);
//# sourceMappingURL=main.ecea892b.chunk.js.map