(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{60:function(e,t,a){e.exports=a(97)},65:function(e,t,a){},97:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(10),c=a.n(i),o=(a(65),a(58)),s=a(13),r=a(14),m=a(17),d=a(15),u=a(18),h=a(16),p=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=new Date,t=this.props,a=t.title,n=t.desc,i=t.handleChange,c=t.handleSubmit;return l.a.createElement("div",{className:"my-3"},l.a.createElement("form",{onSubmit:c},l.a.createElement("div",{className:"input-group"},l.a.createElement("input",{type:"text",className:"form-control",placeholder:"Add Subject",value:a,onChange:i}),l.a.createElement("input",{type:"hidden",value:e})),l.a.createElement("textarea",{className:"w-100 mt-3",rows:"10",placeholder:"Description",value:n,onChange:i}),l.a.createElement("button",{type:"submit",className:"btn btn-block btn-success"},"Add Item")))}}]),t}(l.a.Component),b=a(52),f=a.n(b),v=a(24),E=a(25),y=a(101),g=a(103),w=a(102),j=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props,t=e.title,a=e.desc,n=e.color,i=e.handleDelete;return l.a.createElement(f.a,{bounds:"html",axis:"both",handle:".draggableDiv",defaultPosition:{x:0,y:0},position:null,scale:1,onStart:this.handleStart,onDrag:this.handleDrag,onStop:this.handleStop},l.a.createElement("div",{className:"draggableDiv w-25"},l.a.createElement(y.a,{defaultActiveKey:"0"},l.a.createElement("li",{className:"list-group-item text-capitalize d-flex justify-content-between p-1 cItems",style:{background:n}},l.a.createElement("h6",null,l.a.createElement(y.a.Toggle,{as:g.a,variant:"link",eventKey:"0"},l.a.createElement("a",{"data-toggle":"collapse",href:"#collapseExample",role:"button","aria-expanded":"false","aria-controls":"collapseExample",className:"white text-capitalize"},t)),l.a.createElement(y.a.Collapse,{eventKey:"0"},l.a.createElement(w.a.Body,null,l.a.createElement("p",{className:"justify-text"},a)))),l.a.createElement("div",{className:"todo-icon"},l.a.createElement("span",{className:"mx-2 text-danger close-btn",onClick:i},l.a.createElement(v.a,{icon:E.c})))))))}}]),t}(l.a.Component),S=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props,t=e.items,a=e.handleDelete;return l.a.createElement("ul",{className:"list-group my-5"},t.map(function(e){return l.a.createElement(j,{key:e.id,title:e.title,desc:e.desc,color:e.color,handleDelete:function(){return a(e.id)}})}))}}]),t}(l.a.Component),k=a(99),O=a(100),N=(a(80),a(38)),x=a.n(N),C=a(55),D=a.n(C),_=function(e){function t(e,a){var n;return Object(s.a)(this,t),(n=Object(m.a)(this,Object(d.a)(t).call(this,e,a))).state={items:[],id:x()(),title:"",desc:"",editItem:!1,modalShow:!1,color:Math.floor(16777215*Math.random()).toString(16)},n.handleChange=function(e){"INPUT"===e.target.tagName?n.setState({title:e.target.value}):n.setState({desc:e.target.value})},n.handleSubmit=function(e){if(e.preventDefault(),""!==n.state.title){var t={id:n.state.id,title:n.state.title,desc:n.state.desc,color:"#"+Math.floor(16777215*Math.random()).toString(16)},a=[].concat(Object(o.a)(n.state.items),[t]);n.setState({items:a,title:"",desc:"",id:x()(),editItem:!1})}else alert("Subject must not be empty")},n.clearList=function(){n.setState({items:[]})},n.handleDelete=function(e){var t=n.state.items.filter(function(t){return t.id!==e});n.setState({items:t})},n.handleShow=n.handleShow.bind(Object(u.a)(n)),n.handleClose=n.handleClose.bind(Object(u.a)(n)),n}return Object(h.a)(t,e),Object(r.a)(t,[{key:"handleClose",value:function(){this.setState({modalShow:!1})}},{key:"handleShow",value:function(){this.setState({modalShow:!0})}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{id:"particles-js"},l.a.createElement(k.a,{show:this.state.modalShow,onHide:this.handleClose},l.a.createElement(k.a.Header,{closeButton:!0},l.a.createElement(k.a.Title,null,"New Task")),l.a.createElement(k.a.Body,null,l.a.createElement(p,{title:this.state.title,desc:this.state.desc,handleChange:this.handleChange,handleSubmit:this.handleSubmit}))),l.a.createElement("div",{className:"m-2"},l.a.createElement(O.a,{className:"justify-content-between"},l.a.createElement("button",{type:"button",className:"btn btn-primary text-capitalize m-1",onClick:this.handleShow},l.a.createElement(v.a,{icon:E.a})),l.a.createElement(O.a.Brand,{className:"text-white"},l.a.createElement(v.a,{icon:E.b})," To Do List"),l.a.createElement("button",{type:"button",className:"btn btn-danger text-capitalize m-1",onClick:this.clearList},l.a.createElement(v.a,{icon:E.d}))),l.a.createElement(S,{items:this.state.items,handleDelete:this.handleDelete})),l.a.createElement(D.a,{params:{particles:{number:{value:100,density:{enable:!1,value_area:800}},color:{value:"#ffffff"},shape:{type:"star",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5},image:{src:"http://wiki.lexisnexis.com/academic/images/f/fb/Itunes_podcast_icon_300.jpg",width:100,height:100}},opacity:{value:.5,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:4,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!1,distance:150,color:"#ffffff",opacity:.4,width:1},move:{enable:!0,speed:14,direction:"left",random:!1,straight:!0,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!1,mode:"grab"},onclick:{enable:!0,mode:"repulse"},resize:!0},modes:{grab:{distance:200,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0},className:"absolute-position"})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[60,1,2]]]);
//# sourceMappingURL=main.03572aa5.chunk.js.map