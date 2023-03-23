(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,a,t){},16:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),i=t(7),s=t.n(i),c=(t(14),t(1)),o=t(2),r=t(4),m=t(3),u=t(5),p=function(e){function a(){return Object(c.a)(this,a),Object(r.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{id:"home"},l.a.createElement("nav",{id:"nav-wrap"},l.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),l.a.createElement("a",{className:"mobile-btn",href:"#",title:"Hide navigation"},"Hide navigation"),l.a.createElement("ul",{id:"nav",className:"nav"},l.a.createElement("li",{className:"current"},l.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Resume")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Projects")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#testimonials"},"Testimonials")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#contact"},"Contact")))),l.a.createElement("div",{className:"row banner"},l.a.createElement("div",{className:"banner-text"},l.a.createElement("h1",{className:"responsive-headline"},e.name),l.a.createElement("h3",{style:{color:"#fff",fontFamily:"sans-serif "}},e.roleDescription),l.a.createElement("hr",null),l.a.createElement("ul",{className:"social"},e.socialLinks&&e.socialLinks.map(function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{href:e.url,target:"_blank"},l.a.createElement("i",{className:e.className})))})))),l.a.createElement("p",{className:"scrolldown"},l.a.createElement("a",{className:"smoothscroll",href:"#about"},l.a.createElement("i",{className:"icon-down-circle"})))))}}]),a}(n.Component),d=function(e){function a(){return Object(c.a)(this,a),Object(r.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"about"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"three columns"},l.a.createElement("img",{className:"profile-pic",src:"images/Anna_Main.jpg",alt:""})),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("h2",null,"About Anna"),l.a.createElement("p",{className:"about-text"},e.aboutme),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"columns contact-details"},l.a.createElement("h2",null,"Contact Details"),l.a.createElement("p",{className:"address about-text"},l.a.createElement("span",null,e.name),l.a.createElement("br",null),l.a.createElement("a",{href:"mailto:annahickeyfotis@gmail.com"},e.email),l.a.createElement("br",null),l.a.createElement("span",null,e.phone)))))))}}]),a}(n.Component),h=t(8),f=t.n(h),E=function(e){function a(){return Object(c.a)(this,a),Object(r.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"resume"},l.a.createElement("div",{className:"row education"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Experience"))),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("div",{className:"row item"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h3",null,"Resume"),l.a.createElement("p",{className:"resume-link"},l.a.createElement("a",{href:f.a,download:!0},"Download Anna's Resume")),e.work&&e.work.map(function(e){return l.a.createElement("div",{className:"row item"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h3",null,e.CompanyName),l.a.createElement("p",{className:"info"},e.specialization,l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},e.MonthOfStarting," ",e.YearOfStarting," - ",e.MonthOfLeaving," ",e.YearOfLeaving)),l.a.createElement("p",null,e.Achievements)))}))))),l.a.createElement("hr",null),l.a.createElement("div",{className:"row skill"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Skills"))),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("div",{className:"row item skills-row"},e.skills&&e.skills.map(function(e){return l.a.createElement("div",{className:"skills-list"},l.a.createElement("span",null,l.a.createElement("img",{className:"skills-img",src:e.skillIcon}),l.a.createElement("div",{style:{textAlign:"center",fontSize:"bold",paddingBottom:"10px"}},e.skillName)))})))))}}]),a}(n.Component),g=function(e){function a(){return Object(c.a)(this,a),Object(r.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"portfolio"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns collapsed"},l.a.createElement("h1",null,"Check Out Some of My Projects",l.a.createElement("p",null,l.a.createElement("a",{href:"https://github.com/AHFotis",target:"_blank"},"Anna's GitHub"))),l.a.createElement("div",{id:"portfolio-wrapper",className:"bgrid-halves s-bgrid-thirds cf"},e.portfolio&&e.portfolio.map(function(e){return l.a.createElement("a",{href:e.projectLink,target:"_blank"},l.a.createElement("div",{className:"columns portfolio-item"},l.a.createElement("div",{className:"item-wrap"},l.a.createElement("img",{src:"".concat(e.imgurl),className:"item-img"}),l.a.createElement("div",{className:"overlay"},l.a.createElement("div",{className:"portfolio-item-meta"},l.a.createElement("h5",null,e.name),l.a.createElement("p",null,e.description))))))})))))}}]),a}(n.Component),k=function(e){function a(){return Object(c.a)(this,a),Object(r.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"testimonials"},l.a.createElement("div",{className:"text-container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"two columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Client Testimonials"))),l.a.createElement("div",{className:"ten columns flex-container"},l.a.createElement("div",{className:"flexslider"},l.a.createElement("ul",{className:"slides"},e.testimonials&&e.testimonials.map(function(e){return l.a.createElement("li",null,l.a.createElement("blockquote",null,l.a.createElement("p",null,e.description),l.a.createElement("cite",null,e.name)))})))," ")," ")," "),"  ")}}]),a}(n.Component),b=function(e){function a(){return Object(c.a)(this,a),Object(r.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"contact"},l.a.createElement("div",{className:"row section-head"},l.a.createElement("div",{className:"ten columns"},l.a.createElement("p",{style:{color:"white",fontSize:"15px"}},'"The more particular you make something, the more universal it becomes." - Greta Gerwig'),l.a.createElement("h4",null,"Let's Connect!"),l.a.createElement("div",{className:"row"},l.a.createElement("aside",{className:"eigth columns footer-widgets"},e.contact&&e.contact.map(function(e){return l.a.createElement("p",{className:"contact-items"},l.a.createElement("i",{className:e.icon}),e.link?l.a.createElement("a",{href:e.link,target:"_blank"},e.detail):l.a.createElement("span",{className:"phone-number"},e.detail))}))))))}}]),a}(n.Component),v=function(e){function a(){return Object(c.a)(this,a),Object(r.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("footer",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("ul",{className:"social-links"},e.socialLinks&&e.socialLinks.map(function(e){return l.a.createElement("li",null,l.a.createElement("a",{href:e.url,target:"_blank"},l.a.createElement("i",{className:e.className})))}))),l.a.createElement("div",{id:"go-top"},l.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},l.a.createElement("i",{className:"icon-up-open"})))))}}]),a}(n.Component),N={name:"Anna Hickey Fotis",linkedinId:"Your LinkedIn Id",roleDescription:"An enthusiastic, collaborative Full Stack Developer, crafting purposefully designed, meticulously crafted, and universally accessible web pages and applications.",socialLinks:[{name:"linkedin",url:"https://www.linkedin.com/in/anna-hickey-fotis",className:"fa fa-linkedin"},{name:"github",url:"http://github.com/AHFotis",className:"fa fa-github"},{name:"facebook",url:"https://www.facebook.com/profile.php?id=13957518",className:"fa fa-facebook"}],aboutme:"Hello! I am a full stack developer based in Minneapolis, MN. An enthusiastic, collaborative designer and developer, my consistent goal is to craft one-of-a-kind, user-friendly deployments with a laser-like focus on accessibility, function, and design unity across multiple user platforms. I believe collaborattion is they key to success, and am skilled in React, JavaScript, TypeScript, HTML, CSS, Node.js, and Airtable to name a few. When not at my code editor, you can find me on stages and screens around Minneapolis as a theatrical and commercial actress and teaching artist.",email:"annahickeyfotis@gmail.com",phone:"(952) 239 9980",work:[{CompanyName:"DMC Global Inc",specialization:"Full Stack Developer",MonthOfStarting:"Jan",YearOfStarting:"2022",MonthOfLeaving:"Mar",YearOfLeaving:"2023",Achievements:"Developer and Quality Engineer. Utilized skill in React, TypeScript, CSS, Salesforce, and Ionic to create and maintain complex technological infrastructure and functionality of complex customer portals and quote calculation tools according to business standards."},{CompanyName:"Freelance Web Developer",specialization:"Contract",MonthOfStarting:"May",YearOfStarting:"2021",MonthOfLeaving:"Present",Achievements:"Employed critical thinking, respect, and equity to collaborate with clients to architect UI enhancements and advanced application functionality while maintaining brand integrity."}],skills:[{skillName:"HTML5",skillIcon:"images/skills/html.png"},{skillName:"CSS",skillIcon:"images/skills/CSS.png"},{skillName:"JavaScript",skillIcon:"images/skills/js.png"},{skillName:"Reactjs",skillIcon:"images/skills/react.png"},{skillName:"TypeScript",skillIcon:"images/skills/typescript.png"},{skillName:"AJAX",skillIcon:"images/skills/AJAX.png"},{skillName:"Express",skillIcon:"images/skills/express.png"},{skillName:"Git",skillIcon:"images/skills/git.png"},{skillName:"jQuery",skillIcon:"images/skills/jquery.png"},{skillName:"MongoDB",skillIcon:"images/skills/mongodb.png"},{skillName:"MySQL",skillIcon:"images/skills/mysql.png"},{skillName:"Node",skillIcon:"images/skills/node.png"},{skillName:"VS Code",skillIcon:"images/skills/vscode.png"},{skillName:"Airtable",skillIcon:"images/skills/airtable.png"},{skillName:"Azure",skillIcon:"images/skills/azure.png"}],portfolio:[{name:"Snuze",description:"Snuze is a tranquil React app, designed to meet the needs of users who want some extra help to fall asleep comfortably.",imgurl:"images/portfolio/snuze.png",projectLink:"https://github.com/AHFotis/Snueze"},{name:"Cup of Sugar",description:"A platform for good neighbors to be good neighbors",imgurl:"images/portfolio/cupOfSugar.png",projectLink:"https://github.com/AHFotis/Cup-of-Sugar"},{name:"Google Book Worm",description:"A MERN book search and save.",imgurl:"images/portfolio/book.png",projectLink:"https://github.com/AHFotis/GoogleBookWorm"},{name:"Employee Finder",description:"A React employee directory that allows the user to search an employee database",imgurl:"images/portfolio/employee.png",projectLink:"https://github.com/AHFotis/EmployeeFinder"}],testimonials:[{description:"Anna is awesome to work with. Her animated sense of humor and grounded thought process combine to give her teams a positively productive environment in which to work, which is ideal for any situation. She consistently delivers on her commitments while going above and beyond to challenge her technical skillset.",name:"Kyle Kleven, Senior Analyst"},{description:"Anna is a hard working and creative developer with excellent communication and collaboration skills. The focus, positivity, and drive she brought to our team was paramount to our success.",name:"Amy Pastorius, Project Manager"},{description:"Anna demonstrated great leadership when planning and executing several high-quality web application projects. I would highly recommend her for opportunities to exhibit her skill set with technologies such as Git/Github, Bootstrap, React, Node, Express, MongoDB, MySql, as well as the deployment of software built on these stacks.",name:"Nathan Perfetti, Software Engineer and Educator"}],contact:[{icon:"fa fa-phone contact-detail",detail:"(952) 239 9980"},{icon:"fa fa-envelope contact-detail",link:"mailto:annahickeyfotis@gmail.com",detail:"annahickeyfotis@gmail.com"},{icon:"fa fa-github contact-detail",link:"https://github.com/AHFotis",detail:"https://github.com/AHFotis"},{icon:"fa fa-linkedin contact-detail",link:"https://www.linkedin.com/in/anna-hickey-fotis/",detail:"https://www.linkedin.com/in/anna-hickey-fotis/"}]},w=function(e){function a(){return Object(c.a)(this,a),Object(r.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(p,{resumeData:N}),l.a.createElement(d,{resumeData:N}),l.a.createElement(E,{resumeData:N}),l.a.createElement(g,{resumeData:N}),l.a.createElement(k,{resumeData:N}),l.a.createElement(b,{resumeData:N}),l.a.createElement(v,{resumeData:N}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,a,t){e.exports=t.p+"static/media/AnnaHickeyFotisResume.d59eb97e.pdf"},9:function(e,a,t){e.exports=t(16)}},[[9,2,1]]]);
//# sourceMappingURL=main.66870ecc.chunk.js.map