(this["webpackJsonpreact-svg"]=this["webpackJsonpreact-svg"]||[]).push([[0],{17:function(e,t,a){e.exports=a(28)},22:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),r=a(15),c=a.n(r),i=(a(22),a(7)),o=a(1),u=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",null,"Top page"),n.a.createElement("div",null,n.a.createElement(i.b,{to:"/p1"},"page1")),n.a.createElement("div",null,n.a.createElement(i.b,{to:"/p2"},"page2")),n.a.createElement("div",null,n.a.createElement(i.b,{to:"/p2-1"},"page2-1")),n.a.createElement("div",null,n.a.createElement(i.b,{to:"/p3"},"page3")))},m=function(){return n.a.createElement("main",null,n.a.createElement("svg",{width:"200",height:"200",className:"svgcode"},"\xa0\xa0",n.a.createElement("rect",{x:"50",y:"50",width:"100",height:"70",fill:"red"})),n.a.createElement("svg",{width:"200",height:"200",className:"svgcode"},n.a.createElement("rect",{x:"30",y:"50",width:"100",height:"70",rx:"10",ry:"10",fill:"blue",stroke:"black",strokeWidth:"5"})))},s=function(){return n.a.createElement("main",null,n.a.createElement("svg",{width:"200",height:"200",className:"svgcode"},n.a.createElement("circle",{cx:"100",cy:"100",r:"50",fill:"red"})),n.a.createElement("svg",{width:"200",height:"200",className:"svgcode"},n.a.createElement("circle",{cx:"100",cy:"100",r:"60",stroke:"black",strokeWidth:"5",fill:"blue"})))},E=function(e){return n.a.createElement("svg",{width:"40",height:"40"},n.a.createElement("circle",{cx:"20",cy:"20",r:"20",fill:e.color}))},d=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",null,"rect"),n.a.createElement(m,null),n.a.createElement("div",null,"circle"),n.a.createElement(s,null),n.a.createElement("div",null,"circle Button(props\u3067\u8272\u6307\u5b9a\uff09"),n.a.createElement(E,{color:"green"}))},h=a(6),f=function(){var e=Object(l.useState)(!1),t=Object(h.a)(e,2),a=t[0],r=t[1],c=[{p1:{color:"orange",isComplete:!1}},{p2:{color:"gray",isComplete:!1}},{p3:{color:"red",isComplete:!1}}];n.a.useEffect((function(){var e=document.getElementsByClassName("parts");Array.from(e).forEach((function(e){var t,a=e.getAttribute("id");null===(t=document.querySelector("#".concat(a)))||void 0===t||t.addEventListener("click",(function(){c.forEach((function(t){a&&a===Object.keys(t)[0]&&(e.setAttribute("fill",t[a].color),t[a].isComplete=!0)})),console.log(i()),i()===c.length&&r(!0)}))})),console.log(a)}));var i=function(){return c.filter((function(e){return!0===e[Object.keys(e)[0]].isComplete})).length};return n.a.createElement("main",null,n.a.createElement("svg",{width:"300",height:"300"},n.a.createElement("g",null,n.a.createElement("rect",{className:"parts",id:"p1",x:"50",y:"50",width:"100",height:"70",fill:"red"}),n.a.createElement("rect",{id:"p2",className:"parts",x:"100",y:"70",width:"100",height:"150",fill:"black"}),n.a.createElement("rect",{id:"p3",className:"parts",x:"70",y:"130",width:"100",height:"150",fill:"blue"}))))},g=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",null,"onClick"),n.a.createElement(f,null))},p=n.a.createContext({color:"#000"}),v=function(e){var t=n.a.useContext(p),a=Object(h.a)(t,2)[1];return n.a.createElement("svg",{width:"40",height:"40"},n.a.createElement("circle",{cx:"20",cy:"20",r:"20",fill:e.color,onClick:function(){return a({color:e.color})}}))},b=function(){var e=n.a.useContext(p),t=Object(h.a)(e,1)[0];return n.a.useEffect((function(){var e=document.getElementsByClassName("parts");Array.from(e).forEach((function(e){var a,l=e.getAttribute("id");null===(a=document.querySelector("#".concat(l)))||void 0===a||a.addEventListener("click",(function(){console.log("click"),e.setAttribute("fill",t.color)}))}))})),n.a.createElement("main",null,n.a.createElement("svg",{width:"300",height:"300"},n.a.createElement("g",null,n.a.createElement("rect",{className:"parts",id:"p1",x:"50",y:"50",width:"100",height:"70",fill:"red"}),n.a.createElement("rect",{id:"p2",className:"parts",x:"100",y:"70",width:"100",height:"150",fill:"black"}),n.a.createElement("rect",{id:"p3",className:"parts",x:"70",y:"130",width:"100",height:"150",fill:"blue"}))),n.a.createElement("div",null,n.a.createElement(v,{color:"pink"}),n.a.createElement(v,{color:"red"}),n.a.createElement(v,{color:"blue"}),n.a.createElement(v,{color:"gray"})),n.a.createElement("div",null,"color:",t.color))},y=function(){var e=Object(l.useState)({color:""}),t=Object(h.a)(e,2),a=t[0],r=t[1];return n.a.createElement(p.Provider,{value:[a,r]},n.a.createElement("div",null,"onClick(useContext)"),n.a.createElement(b,null))},x=function(){var e=n.a.useRef(null);return n.a.useEffect((function(){var t=e.current.getContext("2d");t.fillStyle="rgb(255, 255, 255)",t.strokeStyle="rgb(180, 180, 180)",t.beginPath(),t.arc(125,125,90,2*Math.PI,!1),t.fill();for(var a=1;a<6;a++)t.beginPath(),t.arc(125,125,18*a,2*Math.PI,!1),t.stroke()})),n.a.createElement("main",null,n.a.createElement("canvas",{ref:e,width:300,height:300}))},k=function(){return n.a.createElement(i.a,null,n.a.createElement(o.c,null,n.a.createElement(o.a,{exact:!0,path:"/react-svg",render:function(){return n.a.createElement(u,null)}}),n.a.createElement(o.a,{exact:!0,path:"/",render:function(){return n.a.createElement(u,null)}}),n.a.createElement(o.a,{exact:!0,path:"/p1",render:function(){return n.a.createElement(d,null)}}),n.a.createElement(o.a,{exact:!0,path:"/p2",render:function(){return n.a.createElement(g,null)}}),n.a.createElement(o.a,{exact:!0,path:"/p2-1",render:function(){return n.a.createElement(y,null)}}),n.a.createElement(o.a,{exact:!0,path:"/p3",render:function(){return n.a.createElement(x,null)}})))};c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(k,null)),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.94a74b66.chunk.js.map