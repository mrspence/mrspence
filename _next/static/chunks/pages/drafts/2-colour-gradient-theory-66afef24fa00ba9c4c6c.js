(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[304],{4298:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return j},meta:function(){return b}});var a=n(5893),o=n(6192),r=n(2809);function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function i(t,e){if(t){if("string"===typeof t)return s(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(t,e):void 0}}function c(t){return function(t){if(Array.isArray(t))return s(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||i(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var a,o,r=[],s=!0,i=!1;try{for(n=n.call(t);!(s=(a=n.next()).done)&&(r.push(a.value),!e||r.length!==e);s=!0);}catch(c){i=!0,o=c}finally{try{s||null==n.return||n.return()}finally{if(i)throw o}}return r}}(t,e)||i(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var u=n(8216),h=n(5997),v=n(4695),d=n(3444),f=n(268),p=n(2953),C=n(7294),g=function(t,e,n){var a,o,r,s=n*e,i=t%360/60,c=s*(1-Math.abs(i%2-1));i>=0&&i<=1?(a=s,o=c,r=0):i>=1&&i<=2?(a=c,o=s,r=0):i>=2&&i<=3?(a=0,o=s,r=c):i>=3&&i<=4?(a=0,o=c,r=s):i>=4&&i<=5?(a=c,o=0,r=s):i>=5&&i<=6&&(a=s,o=0,r=c);var l=n-s;return[255*(a+l),255*(o+l),255*(r+l)]};function x(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function m(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?x(Object(n),!0).forEach((function(e){(0,r.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function y(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,a=(0,p.Z)(t);if(e){var o=(0,p.Z)(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return(0,f.Z)(this,n)}}var w=function(t){(0,d.Z)(n,t);var e=y(n);function n(t){var a;return(0,u.Z)(this,n),(a=e.call(this,t)).canvasRef=(0,C.createRef)(),a.color1Ref=(0,C.createRef)(),a.color2Ref=(0,C.createRef)(),a.state={convasContext:null,currentInteractingColor:null,isCanvasActive:!1,isUserInteracting:!1,color1:[348,.82,.95],color2:[156.7,.82,.95]},a.renderCanvas=a.renderCanvas.bind((0,v.Z)(a)),a.windowResizeEvent=a.windowResizeEvent.bind((0,v.Z)(a)),a.mouseDownChangeColor1Event=a.mouseDownChangeColor1Event.bind((0,v.Z)(a)),a.mouseDownChangeColor2Event=a.mouseDownChangeColor2Event.bind((0,v.Z)(a)),a.mouseUpChangeColorEvent=a.mouseUpChangeColorEvent.bind((0,v.Z)(a)),a.mouseMoveChangeColorEvent=a.mouseMoveChangeColorEvent.bind((0,v.Z)(a)),a.handleColorInputEvent=a.handleColorInputEvent.bind((0,v.Z)(a)),a}return(0,h.Z)(n,[{key:"cartesianToPolar",value:function(t,e){return[Math.sqrt(t*t+e*e),Math.atan2(e,t)]}},{key:"radiansToDegrees",value:function(t){return(t+Math.PI)/(2*Math.PI)*360}},{key:"renderCanvas",value:function(){var t=this;if(this.state.isCanvasActive&&null!==this.state.canvasContext&&this.canvasRef&&this.canvasRef.current){var e,n;this.state.canvasContext.clearRect(0,0,this.state.canvasContext.canvas.width,this.state.canvasContext.canvas.height),this.state.canvasContext.shadowBlur=3,this.state.canvasContext.shadowOffsetX=2,this.state.canvasContext.shadowOffsetY=2,this.state.canvasContext.shadowColor="rgba(0, 0, 0, 0.2)";for(var a=this.state.canvasContext.canvas.width/2,o=this.state.canvasContext.createImageData(this.state.canvasContext.canvas.width,this.state.canvasContext.canvas.height),r=o.data,s=function(t,e){return[t*Math.cos(e)+a,t*Math.sin(e)+a]},i=-a;i<a;i++)for(var u=-a;u<a;u++){var h=l(this.cartesianToPolar(i,u),2),v=h[0],d=h[1];if(!(v>a)){var f=this.radiansToDegrees(d),p=4*(i+a+(u+a)*(2*a)),C=l(g(f,v/a,.95),3),x=C[0],m=C[1],y=C[2];r[p]=x,r[p+1]=m,r[p+2]=y,r[p+3]=255}}this.state.canvasContext.putImageData(o,0,0);var w=function(t,e,n){return[a*e,t*Math.PI/180+-180*Math.PI/180]},b=w.apply(void 0,c(this.state.color1)),E=s.apply(void 0,c(b)),j=w.apply(void 0,c(this.state.color2)),R=s.apply(void 0,c(j));!1===this.state.isUserInteracting&&(this.color1Ref.current.style.top="".concat(E[1],"px"),this.color1Ref.current.style.left="".concat(E[0],"px"),this.color2Ref.current.style.top="".concat(R[1],"px"),this.color2Ref.current.style.left="".concat(R[0],"px"));this.state.canvasContext.strokeStyle="rgba(120, 120, 120, 0.5)",this.state.canvasContext.strokeWidth=1,this.state.canvasContext.beginPath(),(e=this.state.canvasContext).moveTo.apply(e,c(E)),(n=this.state.canvasContext).lineTo.apply(n,c(R)),this.state.canvasContext.stroke();var I=[(b[0]+j[0])/2,Math.abs(b[1]-j[1])>180*Math.PI/180?(b[1]+j[1]+360*Math.PI/180)/2:(b[1]+j[1])/2],k=s.apply(void 0,I);this.state.canvasContext.strokeStyle="#fff",this.state.canvasContext.strokeWidth=2,this.state.canvasContext.beginPath(),this.state.canvasContext.moveTo(E[0],E[1]),this.state.canvasContext.quadraticCurveTo(k[0],k[1],R[0],R[1]),this.state.canvasContext.stroke(),[{coords:E,rgb:g.apply(void 0,c(this.state.color1))},{coords:R,rgb:g.apply(void 0,c(this.state.color2))}].forEach((function(e){t.state.canvasContext.strokeStyle="#fff",t.state.canvasContext.strokeWidth=2,t.state.canvasContext.fillStyle="rgb(".concat(e.rgb[0],", ").concat(e.rgb[1],", ").concat(e.rgb[2],")"),t.state.canvasContext.beginPath(),t.state.canvasContext.arc(e.coords[0],e.coords[1],10,0,2*Math.PI),t.state.canvasContext.fill(),t.state.canvasContext.stroke()})),[this.state.color1,this.state.color2].forEach((function(e,n){var a=g.apply(void 0,c(e));t.state.canvasContext.fillStyle="rgb(".concat(a[0],", ").concat(a[1],", ").concat(a[2],")"),t.state.canvasContext.beginPath(),t.state.canvasContext.rect(16*(n+1),t.state.canvasContext.canvas.height-32,12,12),t.state.canvasContext.fill()})),requestAnimationFrame(this.renderCanvas)}}},{key:"windowResizeEvent",value:function(){if(this.canvasRef&&this.canvasRef.current&&this.state.canvasContext){var t=this.canvasRef.current.getBoundingClientRect().width;this.state.canvasContext.canvas.width=t,this.state.canvasContext.canvas.height=t+32}}},{key:"mouseUpChangeColorEvent",value:function(t){this.setState((function(t){return m(m({},t),{},{isUserInteracting:!1,currentInteractingColor:null})}))}},{key:"mouseDownChangeColor1Event",value:function(t){this.setState((function(t){return m(m({},t),{},{isUserInteracting:!0,currentInteractingColor:"color1"})}))}},{key:"mouseDownChangeColor2Event",value:function(t){this.setState((function(t){return m(m({},t),{},{isUserInteracting:!0,currentInteractingColor:"color2"})}))}},{key:"mouseMoveChangeColorEvent",value:function(t){var e=this;if(!1!==this.state.isUserInteracting&&null!==this.state.currentInteractingColor){var n=this.canvasRef.current,a=this.state.canvasContext.canvas.width/2,o=function(t,e){for(var n=t.pageX,o=t.pageY,r={left:e.offsetLeft,top:e.offsetTop},s=e.offsetParent;s;)r.left+=s.offsetLeft,r.top+=s.offsetTop,s=s.offsetParent;return[n-r.left-a,o-r.top-a]}(t,n),s=l(this.cartesianToPolar.apply(this,c(o)),2),i=s[0],u=s[1];if(!(i+10>a)){var h=[this.radiansToDegrees(u),i/a,.9];this[this.state.currentInteractingColor+"Ref"].current.style.top="".concat(o[1],"px"),this[this.state.currentInteractingColor+"Ref"].current.style.left="".concat(o[0],"px"),this.setState((function(t){return m(m({},t),{},(0,r.Z)({},e.state.currentInteractingColor,h))}))}}}},{key:"handleColorInputEvent",value:function(t){var e=t.target,n=e.value,a=e.name,o=a[5],s=a[7],i="color".concat(o);this.setState((function(t){var e=t[i];return e[s]=Number.parseFloat(n),m(m({},t),{},(0,r.Z)({},i,e))}))}},{key:"componentDidMount",value:function(){var t=this,e=this.canvasRef.current;this.setState((function(t){return m(m({},t),{},{canvasContext:e.getContext("2d"),isCanvasActive:!0})}),(function(){t.color1Ref.current.addEventListener("mousedown",t.mouseDownChangeColor1Event),t.color2Ref.current.addEventListener("mousedown",t.mouseDownChangeColor2Event),window.addEventListener("mouseup",t.mouseUpChangeColorEvent),t.canvasRef.current.addEventListener("mousemove",t.mouseMoveChangeColorEvent),window.addEventListener("resize",t.windowResizeEvent),t.windowResizeEvent(),t.state.canvasContext.imageSmoothingEnabled=!0,t.renderCanvas()}))}},{key:"componentWillUnmount",value:function(){this.color1Ref.current.removeEventListener("mousedown",this.mouseDownChangeColor1Event),this.color2Ref.current.removeEventListener("mousedown",this.mouseDownChangeColor2Event),window.removeEventListener("mouseup",this.mouseUpChangeColorEvent),this.canvasRef.current.removeEventListener("mousemove",this.mouseMoveChangeColorEvent),window.removeEventListener("resize",this.windowResizeEvent),this.setState((function(t){return m(m({},t),{},{canvasContext:null,isCanvasActive:null})}))}},{key:"render",value:function(){var t=this,e={position:"absolute",padding:"10px",borderRadius:"50%",zIndex:50,transform:"translate(-50%, -50%)",cursor:this.state.isUserInteracting?"grabbing":"grab"},n=function(e){var n=g.apply(void 0,c(t.state[e]));return(0,a.jsxs)("div",{className:"flex pb-2",children:[(0,a.jsx)("div",{style:{width:"1rem",height:"1rem",background:"rgb(".concat(n[0],", ").concat(n[1],", ").concat(n[2],")")}}),(0,a.jsx)("input",{type:"number",className:"px-3 py-1 border-none rounded text-xs",name:"".concat(e,"_0"),value:+t.state[e][0].toFixed(2),onChange:t.handleColorInputEvent,min:0,max:360,step:1}),(0,a.jsx)("input",{type:"number",className:"px-3 py-1 border-none rounded text-xs",name:"".concat(e,"_1"),value:+t.state[e][1].toFixed(2),onChange:t.handleColorInputEvent,min:0,max:1,step:.01}),(0,a.jsx)("input",{type:"number",className:"px-3 py-1 border-none rounded text-xs",name:"".concat(e,"_2"),value:+t.state[e][2].toFixed(2),onChange:t.handleColorInputEvent,min:0,max:1,step:.1,disabled:!0})]})};return(0,a.jsxs)("div",{className:"relative",children:[(0,a.jsx)("canvas",{ref:this.canvasRef,style:{width:"100%"}}),(0,a.jsx)("div",{ref:this.color1Ref,style:e}),(0,a.jsx)("div",{ref:this.color2Ref,style:e}),n("color1"),n("color2")]})}}]),n}(C.Component),b={title_short:"The gray dead zone ",title:"How to get the perfect colour gradient for web | Web Dev Tool | Matthew Spence",description:"A gradient between two colours often suffers with a horrible 'gray dead zone', use this tool to fix it...",image:"//".concat(location.host,"/images/posts/1/1-hero.png"),borderColor:"#25c6a3",background:"linear-gradient(90deg, #25c6a3, #25c691, #26c67e, #26c76c, #26c75a, #27c748, #27c736, #2bc728, #3ec728, #51c828, #63c829, #76c829)",date:"29th, May, Spring 2020",publishedAt:"29-05-2020"},E=function(t){var e=t.children;return(0,a.jsx)(o.Z,{meta:b,children:e})};var j=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return E?(0,a.jsx)(E,Object.assign({},t,{children:(0,a.jsx)(e,{})})):e();function e(){var e=Object.assign({p:"p",ul:"ul",li:"li",code:"code"},t.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.p,{children:"When creating a gradient between two colours, often a gray dead zone appears in the middle."}),"\n",(0,a.jsx)(e.p,{children:"See for yourself."}),"\n",(0,a.jsx)("div",{className:"max-w-xs w-full mx-auto my-12 rounded-lg shadow-lg py-20 px-4 text-center",style:{background:"linear-gradient(to right, aqua, red)"},children:(0,a.jsx)("span",{className:"!text-white text-xl",children:"...Ewww"})}),"\n",(0,a.jsx)(e.p,{children:"I know. I know. Kill it with fire. \ud83d\udd25"}),"\n",(0,a.jsx)("div",{className:"max-w-xs mx-auto",children:(0,a.jsx)(w,{})}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"Read this article by CSS Tricks https://css-tricks.com/the-gray-dead-zone-of-gradients/"}),"\n",(0,a.jsx)(e.li,{children:"The tool was amazing, but I wanted to understand it further: lets build our own!"}),"\n",(0,a.jsxs)(e.li,{children:["Building a colour wheel - https://medium.com/@bantic/hand-coding-a-color-wheel-with-canvas-78256c9d7d43","\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["Tech:","\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["HTML ",(0,a.jsx)(e.code,{children:"<canvas/>"})]}),"\n",(0,a.jsx)(e.li,{children:"JS"}),"\n",(0,a.jsx)(e.li,{children:"CSS"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(e.li,{children:"Theory:\nGenerate a line that shows the colours in a correctly formed line, then bend it into a circle."}),"\n",(0,a.jsx)(e.li,{children:"Colour Theory:\nWe don't want to use RGB as it is \"additive\", instead we want to use HSV (Hue, Saturation Value) image.\nHowever, canvas works with RGB, so we'll need to convert from HSV to RGB."}),"\n",(0,a.jsx)(e.li,{children:"Polar Coords!!! (what are polar coords) - convert"}),"\n"]}),"\n"]}),"\n"]})]})}}},3195:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/drafts/2-colour-gradient-theory",function(){return n(4298)}])}},function(t){t.O(0,[774,702,424,421,33,192,888,179],(function(){return e=3195,t(t.s=e);var e}));var e=t.O();_N_E=e}]);