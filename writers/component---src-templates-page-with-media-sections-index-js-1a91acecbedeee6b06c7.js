(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{141:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return f});var a=n(0),r=n.n(a),o=n(180),s=n.n(o),i=n(148),c=n(160),l=n(150),u=n(166),m=n(161),p=n(185),d=n(186),h=n(159);n(382);t.default=function(e){var t=e.data.markdownRemark,n=t.frontmatter,a=t.html,o=n.bottomContent,f=n.topContent,E=e.pageContext,g=E.pageTitle,v=E.description,w=E.keywords,k=s()(a);return r.a.createElement(c.a,null,r.a.createElement("div",{className:"pageWithMediaSections"},r.a.createElement(h.a,{pageTitle:g,description:v,keywords:w}),r.a.createElement(l.a,n),r.a.createElement(u.a,{nav:n.subnav,location:e.location}),r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"top"},r.a.createElement("h2",null,f.header),r.a.createElement("p",null,f.text)),r.a.createElement("div",{className:"sections"},r.a.createElement("h2",null,n.sectionsTitle),n.sections.map(function(e,t){var n=[];return e.carousel&&(n=e.carousel.map(function(e){return{image:e}})),r.a.createElement("div",{className:"section",key:t},r.a.createElement("div",null,r.a.createElement("h4",null,e.title),r.a.createElement("p",null,e.content)),e.carousel&&r.a.createElement(m.a,{className:"image-carousel",SlideComponent:function(e){return r.a.createElement("div",{className:"image-container"},r.a.createElement("div",{className:"image",style:{backgroundImage:"url("+Object(i.withPrefix)(e.image)+")"}}))},slides:n}))})),r.a.createElement("div",{className:"bottom"},r.a.createElement("div",null,r.a.createElement("h2",null,o.header),r.a.createElement("p",{className:"text"},o.text)),r.a.createElement("div",{className:"video"},r.a.createElement("iframe",{width:"425",height:"236",src:"https://www.youtube.com/embed/"+o.videoId,frameBorder:"0",allowFullScreen:!0}))),r.a.createElement("div",{className:"body"},k)),n.testimonials&&r.a.createElement(m.a,{title:"Testimonials",SlideComponent:p.a,slides:n.testimonials}),n.faqs&&r.a.createElement(d.a,{questions:n.faqs}))))};var f="948657509"},150:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(146),s=n.n(o),i=n(151),c=n.n(i),l=n(152),u=n.n(l),m=n(153),p=n.n(m),d=(n(154),{resources:{title:"Writer Resources",content:"Writers understand other writers. They get the nuances of how to craft compelling characters, the frustrations of writer’s block, and the satisfaction of pressing “Publish.” That’s why we’ve pulled together the best community resources on writing – created by writers, for writers.",background:c.a},opportunities:{title:"Writer Programs & Opportunities",content:"Writers like you are the heartbeat of the Wattpad community. We work tirelessly to create programs to support  creativity and growth, and opportunities to help writers connect their stories with new audiences. From online programs like The Wattys to IRL events like WattCon, there’s something for everyone.",background:u.a},news:{title:"News",content:"writers understand other writers. they get the nuances of how to craft compelling characters, the frustrations of writer’s block, and the satisfaction of pressing “publish.”",background:c.a},faq:{title:"Frequently Asked Questions",content:"Have a burning question for our team? Chances are, you're not the first to ask! Take a look at some of the most common questions from across our community. Still looking for answers? <a target='_blank' href='https://support.wattpad.com/hc/en-us/requests/new'>Reach out to our team.</a>",background:p.a}});t.a=function(e){var t,n=d[e.hero_content]||{},a=s()(((t={hero:!0})[e.hero_content]=!0,t));return r.a.createElement("div",{className:a,style:{backgroundImage:"url("+n.background+")"}},r.a.createElement("div",{className:"wrapper"},r.a.createElement("h1",null,n.title),n.content&&r.a.createElement("div",{className:"content",dangerouslySetInnerHTML:{__html:n.content}})))}},151:function(e,t,n){e.exports=n.p+"static/resource-4e5947e6f9a9b4a6d811a910b96fc1c8.png"},152:function(e,t,n){e.exports=n.p+"static/programs-22092ee2c60c739c19510c8e8e894c6f.png"},153:function(e,t,n){e.exports=n.p+"static/faq-07d7d66d680d543302ece35fafd30d0c.png"},154:function(e,t,n){},161:function(e,t,n){"use strict";n.d(t,"a",function(){return m});n(32);var a=n(7),r=n.n(a),o=n(0),s=n.n(o),i=n(179),c=n.n(i),l=n(146),u=n.n(l),m=(n(162),n(163),n(164),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t=Object.assign({dots:!0,speed:500,slidesToShow:1,slidesToScroll:1,autoplaySpeed:5e3},this.props.settings),n=this.props.SlideComponent,a=u()(((e={carousel:!0})[this.props.className]=!0,e));return s.a.createElement("div",{className:a},this.props.title&&s.a.createElement("h3",null,this.props.title),s.a.createElement(c.a,Object.assign({className:"carouselSlider"},t),this.props.slides.map(function(e,t){return s.a.createElement("div",{className:"slide",key:t},s.a.createElement(n,Object.assign({},e,{index:t})))})))},t}(o.Component))},162:function(e,t,n){},163:function(e,t,n){},164:function(e,t,n){},166:function(e,t,n){"use strict";n.d(t,"a",function(){return u});var a=n(7),r=n.n(a),o=n(0),s=n.n(o),i=n(148),c=(n(146),n(167),[{title:"Get Inspired",to:"/resources/get-inspired/"},{title:"Sharpen Your Skills",to:"/resources/sharpen-your-skills/"},{title:"Build Your Audience",to:"/resources/build-your-audience/"}]),l=[{title:"Wattys",to:"/opportunities/wattys/"},{title:"Next",to:"/opportunities/nextbeta/"},{title:"Books",to:"/opportunities/books/"},{title:"Picks",to:"/opportunities/picks/"},{title:"WattCon",to:"/opportunities/wattcon/"},{title:"Stars",to:"/opportunities/stars/"},{title:"Studios",to:"/opportunities/studios/"},{title:"Contests",to:"/opportunities/contests/"},{title:"Futures",to:"/opportunities/futures/"}],u=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e="resources"===this.props.nav?c:l;return s.a.createElement("div",{className:"subNav"},s.a.createElement("ul",null,e.map(function(e){return s.a.createElement("li",{key:e.to},s.a.createElement(i.Link,{to:e.to,activeClassName:"active"},e.title))})),s.a.createElement("select",{onChange:function(e){Object(i.navigate)(e.target.value)},defaultValue:this.props.location.pathname},e.map(function(e){return s.a.createElement("option",{value:e.to,key:e.to},e.title)})))},t}(o.Component)},167:function(e,t,n){},184:function(e,t){},185:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("div",{className:"testimonial"},r.a.createElement("p",null,e.quote),r.a.createElement("a",{className:"attribution",target:"_blank",href:"https://wattpad.com/"+e.username},"@",e.username))}},186:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var a=n(7),r=n.n(a),o=n(0),s=n.n(o),i=(n(187),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return s.a.createElement("div",{className:"faq"},s.a.createElement("h3",null,"FAQ"),this.props.questions.map(function(e,t){return s.a.createElement("div",{className:"question",key:t},s.a.createElement("h4",{className:"questionText"},e.question),s.a.createElement("p",{className:"answer"},e.answer))}))},t}(o.Component))},187:function(e,t,n){},382:function(e,t,n){}}]);
//# sourceMappingURL=component---src-templates-page-with-media-sections-index-js-1a91acecbedeee6b06c7.js.map