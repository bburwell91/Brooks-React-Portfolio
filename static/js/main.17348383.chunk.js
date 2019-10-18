(window.webpackJsonpportfolio=window.webpackJsonpportfolio||[]).push([[0],{20:function(e,t,a){e.exports=a(37)},25:function(e,t,a){},26:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var l=a(0),i=a.n(l),n=a(5),r=a.n(n),o=(a(25),a(26),a(6)),s=a(7),c=a(10),m=a(9),u=a(11),d=a(1),p=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(c.a)(this,Object(m.a)(t).call(this))).state={},e}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=document.querySelector("#navbar"),t=e.offsetTop;window.addEventListener("scroll",(function(){window.scrollY>=t?(e.classList.add("fixed-nav"),document.body.style.paddingTop=e.offsetHeight+"px"):(e.classList.remove("fixed-nav"),document.body.style.paddingTop=0)}))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll")}},{key:"render",value:function(){return i.a.createElement("header",{id:"helloworld"},i.a.createElement("ul",{id:"opener"},i.a.createElement("li",null,i.a.createElement("h1",null,"Hello World.")),i.a.createElement("li",{class:"head-font"},"My name is ",i.a.createElement("b",{class:"emphasis"},"Brooks Burwell")),i.a.createElement("li",{class:"head-font"},"I'm a Full-Stack Developer")),i.a.createElement("div",{id:"navbar"},i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(d.Link,{activeClass:"active",to:"about",spy:!0,smooth:!0,duration:100},"About")),i.a.createElement("li",null,i.a.createElement(d.Link,{activeClass:"active",to:"skills",spy:!0,smooth:!0,duration:100},"Skills")),i.a.createElement("li",null,i.a.createElement(d.Link,{activeClass:"active",to:"work",spy:!0,smooth:!0,duration:100},"Work")),i.a.createElement("li",null,i.a.createElement(d.Link,{activeClass:"active",to:"contact",spy:!0,smooth:!0,duration:100},"Contact")))))}}]),t}(l.Component);var b=function(){return i.a.createElement("div",{id:"about"},i.a.createElement("div",{className:"profile-picture"},i.a.createElement("img",{src:"./../../images/profile-pic.jpg",alt:"portrait"})),i.a.createElement("h2",null,"Who I am."),i.a.createElement("p",{className:"profile-about"},"I'm a web developer based in Portland, Oregon. I have a passion for web design and bringing ideas to life. My specialty is web and mobile design."))};var h=function(){return i.a.createElement("div",{id:"skills"},i.a.createElement("h2",null,"What I can do."),i.a.createElement("div",{id:"skills-container"},i.a.createElement("div",{id:"col1"},i.a.createElement("div",{className:"boxhead"},i.a.createElement("h4",null,"Front-end")),i.a.createElement("div",{className:"box"},i.a.createElement("ul",null,i.a.createElement("li",null,"HTML"),i.a.createElement("li",null,"CSS"),i.a.createElement("li",null,"JavaScript"),i.a.createElement("li",null,"jQuery"),i.a.createElement("li",null,"Bootstrap"),i.a.createElement("li",null,"React")))),i.a.createElement("div",{id:"col2"},i.a.createElement("div",{className:"boxhead"},i.a.createElement("h4",null,"Back-end")),i.a.createElement("div",{className:"box"},i.a.createElement("ul",null,i.a.createElement("li",null,"Node.js"),i.a.createElement("li",null,"Express.js"),i.a.createElement("li",null,"MongoDB"),i.a.createElement("li",null,"MySQL"),i.a.createElement("li",null,"Database Theory"),i.a.createElement("li",null,"Command Line"))))),i.a.createElement("div",{className:"about-row"},i.a.createElement("h2",null,"What I've done."),i.a.createElement("div",{className:"about-col content"},i.a.createElement("ul",null,i.a.createElement("li",{className:"title"},"Full-Stack Bootcamp Certificate"),i.a.createElement("li",null,"University of Oregon - September 2019")),i.a.createElement("ul",null,i.a.createElement("li",{className:"title"},"Associates Degree Web Dev & Design"),i.a.createElement("li",null,"Portland Community College - June 2015")),i.a.createElement("ul",null,i.a.createElement("li",{className:"title"},"Dev Lions Inc. Internship"),i.a.createElement("li",null,"e-Textbooks HTML/CSS and QA Testing"),i.a.createElement("li",null,"October 2014 - February 2015")))))},g=a(8),f=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).handleMouseHover=a.handleMouseHover.bind(Object(g.a)(a)),a.state={isHovering:!1},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"handleMouseHover",value:function(){this.setState(this.toggleHoverState)}},{key:"toggleHoverState",value:function(e){return{isHovering:!e.isHovering}}},{key:"render",value:function(){return i.a.createElement("li",{id:this.props.id,onMouseEnter:this.handleMouseHover,onMouseLeave:this.handleMouseHover},i.a.createElement("a",{href:this.props.link,target:"_blank"},i.a.createElement("div",{className:"project-img"},i.a.createElement("img",{src:this.props.imgUrl,alt:"",className:"resized"})),this.state.isHovering&&i.a.createElement("div",{className:"project-desc"},i.a.createElement("h3",null,this.props.title),i.a.createElement("p",null,this.props.description))))}}]),t}(l.Component),E=[{id:"project1",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSjYDGmqFljeW5SJcgpkHAx0XCpmrBzfGmmcjYa2wHlvbwraFL",link:"https://bburwell91.github.io/TriviaGame/",code:"https://github.com/bburwell91/TriviaGame",title:"Trivia Game",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas auctor tortor nibh, id varius mi consectetur et. Morbi mattis neque finibus vestibulum lobortis. Cras dictum, felis interdum tempor feugiat, magna felis blandit erat, sed porta eros ligula nec nulla. Nullam molestie pretium est. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque egestas accumsan pharetra. Donec tempor ullamcorper lorem in consequat.",alt:"image"},{id:"project2",image:"https://www.birmingham.ac.uk/CachedImage.axd?ImageName=train-station-300px300x300.jpg&ImageWidth=300&ImageHeight=300&ImageVersionID=1819382&ImageModified=20190222155732",link:"https://bburwell91.github.io/TrainStation/",code:"https://github.com/bburwell91/TrainStation",title:"Train Station",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas auctor tortor nibh, id varius mi consectetur et. Morbi mattis neque finibus vestibulum lobortis. Cras dictum, felis interdum tempor feugiat, magna felis blandit erat, sed porta eros ligula nec nulla. Nullam molestie pretium est. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque egestas accumsan pharetra. Donec tempor ullamcorper lorem in consequat.",alt:"image"},{id:"project3",image:"https://www.secret-source.eu/wp-content/uploads/2017/11/node-js-logo.jpg",link:"https://github.com/bburwell91/liri-node-app",code:"https://github.com/bburwell91/liri-node-app/blob/master/liri.js",title:"Liri Node App",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas auctor tortor nibh, id varius mi consectetur et. Morbi mattis neque finibus vestibulum lobortis. Cras dictum, felis interdum tempor feugiat, magna felis blandit erat, sed porta eros ligula nec nulla. Nullam molestie pretium est. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque egestas accumsan pharetra. Donec tempor ullamcorper lorem in consequat.",alt:"image"},{id:"project4",image:"https://www.urbanspacerealtors.com/wp-content/uploads/2019/03/event-2-300x300.jpg",link:"https://bburwell91.github.io/Project-1/search.html",code:"https://github.com/bburwell91/Project-1",title:"Musick Events",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas auctor tortor nibh, id varius mi consectetur et. Morbi mattis neque finibus vestibulum lobortis. Cras dictum, felis interdum tempor feugiat, magna felis blandit erat, sed porta eros ligula nec nulla. Nullam molestie pretium est. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque egestas accumsan pharetra. Donec tempor ullamcorper lorem in consequat.",alt:"image"},{id:"project5",image:"https://askleo.com/wp-content/uploads/2007/05/typing-300x300.jpg",link:"#",code:"https://github.com/bburwell91/Project-2",title:"Socket.io Chatrooms",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas auctor tortor nibh, id varius mi consectetur et. Morbi mattis neque finibus vestibulum lobortis. Cras dictum, felis interdum tempor feugiat, magna felis blandit erat, sed porta eros ligula nec nulla. Nullam molestie pretium est. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque egestas accumsan pharetra. Donec tempor ullamcorper lorem in consequat.",alt:"image"},{id:"project6",image:"https://i.pinimg.com/236x/35/3a/2c/353a2c4b13deb61d1f1aae55912b8ff2--mario-birthday-party-birthday-games.jpg",link:"https://5d56073ac9ddc7deea978f67--dreamy-johnson-68648d.netlify.com/",code:"https://github.com/bburwell91/Memory-Game",title:"Super Mario Memory Game",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas auctor tortor nibh, id varius mi consectetur et. Morbi mattis neque finibus vestibulum lobortis. Cras dictum, felis interdum tempor feugiat, magna felis blandit erat, sed porta eros ligula nec nulla. Nullam molestie pretium est. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque egestas accumsan pharetra. Donec tempor ullamcorper lorem in consequat.",alt:"image"},{id:"project7",image:"https://kiz10.com/upload/thumbnails/mediums/1553883078_boom-burger.jpg",link:"https://5d56073ac9ddc7deea978f67--dreamy-johnson-68648d.netlify.com/",code:"https://github.com/bburwell91/Memory-Game",title:"Eat the Burger",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas auctor tortor nibh, id varius mi consectetur et. Morbi mattis neque finibus vestibulum lobortis. Cras dictum, felis interdum tempor feugiat, magna felis blandit erat, sed porta eros ligula nec nulla. Nullam molestie pretium est. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque egestas accumsan pharetra. Donec tempor ullamcorper lorem in consequat.",alt:"image"}];var v=function(){var e=E.map((function(e){return i.a.createElement(f,{id:e.id,key:e.id,imgUrl:e.image,link:e.link,code:e.code,title:e.title,description:e.description})}));return i.a.createElement("section",{id:"work"},i.a.createElement("h2",null,"My Work."),i.a.createElement("ul",null,e))};var w=function(){return i.a.createElement("footer",{id:"contact"},i.a.createElement("div",{id:"social"},i.a.createElement("div",{id:"phone-footer"},i.a.createElement("i",{className:"fas fa-mobile-alt"}),i.a.createElement("p",null,"Call me at"),i.a.createElement("p",null,"503-975-3281")),i.a.createElement("div",{id:"resume-footer"},i.a.createElement("i",{className:"far fa-file"}),i.a.createElement("a",{href:"https://bburwell91.github.io/Portfolio/resume.pdf",target:"_blank"},i.a.createElement("p",null,"Other experience"),i.a.createElement("p",null,"view my resume"))),i.a.createElement("div",{id:"email-footer"},i.a.createElement("i",{className:"far fa-envelope"}),i.a.createElement("p",null,"Email me at"),i.a.createElement("p",null,"brooks_burwell@live.com"))),i.a.createElement("div",{id:"copyright"},i.a.createElement("p",null,"Created by Brooks Burwell ",i.a.createElement("i",{class:"far fa-copyright"})," 2019")))};var k=function(){return i.a.createElement("div",{id:"side-navigation"},i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("a",{href:"https://github.com/bburwell91"},i.a.createElement("i",{class:"fab fa-github"}))),i.a.createElement("li",null,i.a.createElement("a",{href:"https://www.linkedin.com/in/brooks-burwell-a2507aa4/"},i.a.createElement("i",{class:"fab fa-linkedin"}))),i.a.createElement("li",null,i.a.createElement("a",{href:"https://www.facebook.com/brooks.burwell"},i.a.createElement("i",{className:"fab fa-facebook-square"}))),i.a.createElement("li",null,i.a.createElement("a",{href:"#"},i.a.createElement("i",{className:"fa fa-envelope","aria-hidden":"true"}))),i.a.createElement("li",null,i.a.createElement("a",{href:"https://www.instagram.com/brooks.burwell/"},i.a.createElement("i",{class:"fab fa-instagram"})))))};var y=function(){return i.a.createElement("div",{id:"container"},i.a.createElement(p,null),i.a.createElement(b,null),i.a.createElement(h,null),i.a.createElement(v,null),i.a.createElement(w,null),i.a.createElement(k,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[20,1,2]]]);
//# sourceMappingURL=main.17348383.chunk.js.map