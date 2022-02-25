(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[924],{4330:function(e,n,s){"use strict";s.r(n),s.d(n,{meta:function(){return t}});var i=s(5893),a=s(6192),t={title_short:"Developers: you don\u2019t always need a coded backend for your forms",title:"Developers: you don\u2019t always need a coded backend for your forms | Insight | Matthew Spence",description:"With the rising popularity of managed services in all areas of tech, we\u2019ll explore a useful method of offsetting the backend of your...",image:"//".concat(location.host,"/images/medium/1__Vu__Q1c8FDNRWdWlFnHBsoA.png"),borderColor:"#43a9a3",background:"#43a9a3",date:"29th, Aug, 2021",publishedAt:"2021-08-29"},r=function(e){var n=e.children;return(0,i.jsx)(a.Z,{meta:t,children:n})};n.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return r?(0,i.jsx)(r,Object.assign({},e,{children:(0,i.jsx)(n,{})})):n();function n(){var n=Object.assign({p:"p",img:"img",strong:"strong",em:"em",ul:"ul",li:"li",br:"br",blockquote:"blockquote",h2:"h2",a:"a",h3:"h3",ol:"ol",hr:"hr"},e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"/images/medium/1__Vu__Q1c8FDNRWdWlFnHBsoA.png",alt:""})}),"\n",(0,i.jsx)(n.p,{children:"Websites are elaborate."}),"\n",(0,i.jsx)(n.p,{children:"Business requirements. User Journeys. Wireframes. Design\u2026"}),"\n",(0,i.jsx)(n.p,{children:"Development. Tech stacks. Coded frontends. Coded backends. Changing requirements. Maintenance\u2026"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"/images/medium/1__fGSmfewHrExhmkaRgGNzkQ.png",alt:""})}),"\n",(0,i.jsx)(n.p,{children:"It can get pretty complicated relatively quickly, right? But there\u2019s always new ways to help make it easier."}),"\n",(0,i.jsxs)(n.p,{children:["In this article, ",(0,i.jsx)(n.strong,{children:"we\u2019ll focus on how you can speed up development"})," by reducing or removing backend development for forms, so you can re-allocate resources on what matters most: the visual front-end your customers actually see."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"This article is split in 3 easy steps"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"What is a backend and what isn\u2019t?"}),(0,i.jsx)(n.br,{}),"\n","(",(0,i.jsx)(n.em,{children:"5 second read"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"When do you need a backend for your website?"}),(0,i.jsx)(n.br,{}),"\n","(",(0,i.jsx)(n.em,{children:"30 second read"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"How you can ditch coding the backend for your forms"}),(0,i.jsx)(n.br,{}),"\n","(",(0,i.jsx)(n.em,{children:"30 second read"}),")"]}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"This article assumes you have limited knowledge of Jamstack. If that\u2019s not true and you\u2019re a legendary expert wizard at Jamstack, you may still find hidden powers in the last step for replacing your website forms!"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"what-is-a-backend-and-what-isnt",children:"What is a backend and what isn\u2019t?"}),"\n",(0,i.jsx)(n.p,{children:"A backend normally refers to a server-side area of your website, with responsibilities such as:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Loading dynamic pages"}),"\n",(0,i.jsx)(n.li,{children:"Processing and validating form submissions"}),"\n",(0,i.jsx)(n.li,{children:"Acting as a data layer for your website; collecting and reporting data"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["A ",(0,i.jsx)(n.em,{children:"frontend"})," is essentially anything your web visitor can see, experience and interact with using their mouse or keyboard, whereas everything else that typically involves saving or loading data, ",(0,i.jsx)(n.em,{children:"like hitting that tempting Clap button in this article"}),", requires a server somewhere to process such a request."]}),"\n",(0,i.jsxs)(n.p,{children:["So a ",(0,i.jsx)(n.em,{children:"backend"})," typically handles and manages data for your website."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"/images/medium/0__sutLKhvAALg__wZTk.png",alt:""})}),"\n",(0,i.jsx)(n.h2,{id:"when-do-you-need-a-coded-backend",children:"When do you need a coded backend?"}),"\n",(0,i.jsx)(n.p,{children:"This question is not black and white."}),"\n",(0,i.jsxs)(n.p,{children:["For many, it is tempting to always build a backend for your website, in a preventative way. \u201c",(0,i.jsx)(n.em,{children:"We may need one in the future so we WILL build one"}),"\u201d."]}),"\n",(0,i.jsxs)(n.p,{children:["There is a better alternative that takes up less development time when building ",(0,i.jsx)(n.em,{children:"bespoke,"})," quality websites, pulling from ",(0,i.jsx)(n.a,{href:"https://jamstack.org/",children:"concepts of Jamstack"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"/images/medium/0__qYEysNCr2UxuSCIc.jpg",alt:""})}),"\n",(0,i.jsxs)(n.p,{children:["If you build your frontend to ",(0,i.jsx)(n.a,{href:"https://jamstack.org/what-is-jamstack/",children:"consume an API"}),", instead of being tightly coupled like WordPress, then you will give yourself the ability to either use \u201cbackend\u201d APIs from third parties ",(0,i.jsx)(n.strong,{children:"or"})," build your own backend should you ",(0,i.jsx)(n.em,{children:"later"})," need one."]}),"\n",(0,i.jsxs)(n.p,{children:["Think about it. This saves you ",(0,i.jsx)(n.em,{children:"so much time"})," that can be better invested in what your website\u2019s customers will actually see and play with!"]}),"\n",(0,i.jsxs)(n.p,{children:["You can utilize third party APIs where you ",(0,i.jsx)(n.em,{children:"don\u2019t have to maintain the backend."})]}),"\n",(0,i.jsx)(n.p,{children:"You can even have your website partially consume your own and third party APIs during a transitional period towards adding more backend functionality!"}),"\n",(0,i.jsx)(n.h2,{id:"how-you-can-ditch-coding-the-backend-for-your-forms",children:"How you can ditch coding the backend for your forms"}),"\n",(0,i.jsx)(n.h3,{id:"use-a-free-backend-api-instead",children:"Use a free backend API instead"}),"\n",(0,i.jsx)(n.p,{children:"We have briefly touched on that fact that a \u201cJamstack\u201d website consumes APIs instead of directly being loaded with a backend."}),"\n",(0,i.jsx)(n.p,{children:"By consuming an API, a frontend website you have built can actually use a backend built by a third party."}),"\n",(0,i.jsx)(n.h3,{id:"one-recommended-api-service-basin",children:"One recommended API service: Basin"}),"\n",(0,i.jsx)(n.p,{children:"There are many API services out there that specialize in taking the workload off of your backend (pun intended), but the one I actively use today for my own website is Basin."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"/images/medium/1__Lm0GoVfkFUNGaZ0jYqfcyQ.png",alt:""})}),"\n",(0,i.jsxs)(n.p,{children:["Basin is a backend provider that specializes in providing you with an ",(0,i.jsx)(n.a,{href:"https://usebasin.com/?via=spence",children:"API to save form submissions."})," They have a free offering that I still use today! They also offer scalable packages too, should you eventually need one."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"/images/medium/1__n6l__O66toxxpuSVX6TkZhA.png",alt:""})}),"\n",(0,i.jsx)(n.p,{children:"Basin is mostly no-code, which means it only takes you a few minutes to setup a fully functional backend to handle your website forms."}),"\n",(0,i.jsx)(n.p,{children:"It asks you:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"What data do you need stored?"}),"\n",(0,i.jsx)(n.li,{children:"What structure do you want it saved as?"}),"\n",(0,i.jsx)(n.li,{children:"How do you want to be notified of a form submission?"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Then, once you\u2019ve setup the no-code backend, you simply point your website forms to their endpoint. Here\u2019s a basic example:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"/images/medium/1__G8bc0__ECnvwl1tE3lcr3yQ.png",alt:""})}),"\n",(0,i.jsx)(n.p,{children:"Basin also supports Google ReCaptcha, Akismet, and Honeypots so you can make sure your form\u2019s don\u2019t accept spam."}),"\n",(0,i.jsx)(n.p,{children:"Lastly, Basin is free to get started with, offering 100 submissions a month for free. This is certainly adequate for many contact us forms. However, if you website is booming and you need more than 100, then with your new business pouring in you\u2019ll find their next package offers 1,000 submissions for only $8.00 a month. Pretty cheap!"}),"\n",(0,i.jsxs)(n.p,{children:["Affiliate link to Basin: ",(0,i.jsx)(n.a,{href:"https://usebasin.com/?via=spence",children:"usebasin.com/?via=spence"})]}),"\n",(0,i.jsx)(n.h3,{id:"theres-much-more-than-just-basin-out-there-too",children:"There\u2019s much more than just Basin out there too\u2026"}),"\n",(0,i.jsx)(n.p,{children:"At the moment, there\u2019s a surplus of third party APIs you can use to both render information on your frontend and save data on backends you no longer have to maintain."}),"\n",(0,i.jsx)(n.p,{children:"Depending on your website requirements, these APIs may be a useful game changer to keep your time and hosting costs low!"}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"Read more"}),": Learn how there\u2019s an easier way for you to wireframe, design and build digital products that ",(0,i.jsx)(n.a,{href:"https://medium.com/@mrspencehimself/is-there-an-easier-way-to-wireframe-design-build-digital-products-that-fulfils-a-clients-vision-4f964384e921",children:"fulfils your client\u2019s vision"}),"."]})]})}}},5522:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/medium/developers-you-dont-always-need-a-coded-backend-for-your-forms",function(){return s(4330)}])}},function(e){e.O(0,[774,702,424,421,33,192,888,179],(function(){return n=5522,e(e.s=n);var n}));var n=e.O();_N_E=n}]);