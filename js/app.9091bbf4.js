(function(){"use strict";var t={2182:function(t,e,a){var s=a(6369),i=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("link",{attrs:{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css"}}),e("my-loader",{attrs:{"is-loading":t.isLoading}}),t.isLoading?t._e():e("div",[e("header",{staticClass:"sticky-top"},[e("div",{staticClass:"container-fluid sticky-top"},[t._m(0),e("div",{staticClass:"navb-items d-none d-xl-flex"},[e("div",{staticClass:"item"},[e("router-link",{staticClass:"link",attrs:{to:"/"}},[t._v("Login")])],1),e("div",{staticClass:"item"},[e("router-link",{staticClass:"link",attrs:{to:"/home"}},[t._v("Home")])],1),e("div",{staticClass:"item"},[e("router-link",{staticClass:"link",attrs:{to:"/services"}},[t._v("Services")])],1),e("div",{staticClass:"item"},[e("router-link",{staticClass:"link",attrs:{to:"/booking"}},[t._v("Booking")])],1),e("div",{staticClass:"item"},[e("router-link",{staticClass:"link",attrs:{to:"/about"}},[t._v("About")])],1),e("div",{staticClass:"item"},[e("router-link",{staticClass:"link",attrs:{to:"/Contact"}},[t._v("ContactUs")])],1),e("div",{staticClass:"item-button"},[e("router-link",{staticClass:"navb-button btn",attrs:{to:"/chatbot"}},[t._v("Let's talk")])],1)]),t._m(1),e("div",{staticClass:"modal fade",attrs:{id:"navbModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog"},[e("div",{staticClass:"modal-content"},[t._m(2),e("div",{staticClass:"modal-body"},[e("div",{staticClass:"modal-line"},[e("i",{staticClass:"fa-solid fa-house"}),e("router-link",{staticClass:"link",attrs:{to:""}},[t._v("Home")])],1),e("div",{staticClass:"modal-line"},[e("i",{staticClass:"fa-solid fa-bell-concierge"}),e("router-link",{staticClass:"link",attrs:{to:""}},[t._v("Services")])],1),e("div",{staticClass:"modal-line"},[e("i",{staticClass:"fa-solid fa-file-lines"}),e("router-link",{staticClass:"link",attrs:{to:""}},[t._v("ContactUs")])],1),e("div",{staticClass:"modal-line"},[e("i",{staticClass:"fa-solid fa-circle-info"}),e("router-link",{staticClass:"link",attrs:{to:""}},[t._v("About")])],1),e("router-link",{staticClass:"navb-button1",attrs:{to:"/chatbot"}},[t._v("Let's talk")])],1),t._m(3)])])])])]),e("router-view")],1)],1)},o=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"navb-logo"},[e("img",{attrs:{src:a(6949),alt:"Logo"}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"mobile-toggler d-lg-none"},[e("a",{attrs:{href:"#","data-bs-toggle":"modal","data-bs-target":"#navbModal"}},[e("i",{staticClass:"fa-solid fa-bars"})])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"modal-header"},[e("img",{attrs:{src:a(1404),alt:"Logo"}}),e("button",{staticClass:"btn-close",attrs:{type:"button","data-bs-dismiss":"modal","aria-label":"Close"}},[e("i",{staticClass:"fa-solid fa-xmark"})])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"mobile-modal-footer"},[e("a",{attrs:{target:"_blank",href:"#"}},[e("i",{staticClass:"fa-brands fa-instagram"})]),e("a",{attrs:{target:"_blank",href:"#"}},[e("i",{staticClass:"fa-brands fa-linkedin-in"})]),e("a",{attrs:{target:"_blank",href:"#"}},[e("i",{staticClass:"fa-brands fa-youtube"})]),e("a",{attrs:{target:"_blank",href:"#"}},[e("i",{staticClass:"fa-brands fa-facebook"})])])}],n=function(){var t=this,e=t._self._c;return t.isLoading?e("div",{staticClass:"loader"},[t._m(0)]):t._e()},r=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"wrapper"},[e("div",{staticClass:"circle"}),e("div",{staticClass:"circle"}),e("div",{staticClass:"circle"}),e("div",{staticClass:"shadow"}),e("div",{staticClass:"shadow"}),e("div",{staticClass:"shadow"})])}],l={props:{isLoading:{type:Boolean,default:!1}}},c=l,u=a(1001),m=(0,u.Z)(c,n,r,!1,null,null,null),d=m.exports,v={name:"app",components:{MyLoader:d},data(){return{isLoading:!0}},mounted(){setTimeout((()=>{this.isLoading=!1}),2e3)}},f=v,p=(0,u.Z)(f,i,o,!1,null,"0988bacb",null),h=p.exports,g=a(2631),C=function(){var t=this,e=t._self._c;return e("div",[e("main",[e("div",{class:["big-wrapper",t.mode]},[e("div",{staticClass:"bottom-area"},[e("div",{staticClass:"container"},[e("button",{staticClass:"toggle-btn",on:{click:t.toggleMode}},[e("i",{staticClass:"far fa-moon"}),e("i",{staticClass:"far fa-sun"})])])]),e("div",{staticClass:"showcase-area"},[e("div",{staticClass:"container"},[e("div",{staticClass:"left"},[t._m(0),e("p",{staticClass:"text"},[t._v(" Welcome to our parking reservation system, where we make parking a hassle-free experience. With our easy-to-use platform, you can reserve a parking spot in advance and enjoy peace of mind knowing that a spot is waiting for you. ")]),e("div",{staticClass:"cta"},[e("a",{on:{click:function(e){return t.booking()}}},[e("img",{attrs:{src:a(5618),width:""}})])])]),t._m(1)])]),e("footerPage",{staticClass:"footer1"})],1)])])},b=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"big-title"},[e("h1",[t._v("Park with ease,")]),e("h1",[t._v("reserve with confidence")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"right"},[e("img",{staticClass:"person",attrs:{src:a(6827),alt:"Person Image"}})])}],y=(a(7658),function(){var t=this,e=t._self._c;return e("div",[e("link",{attrs:{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css"}}),e("footer",[e("div",{staticClass:"row"},[t._m(0),t._m(1),t._m(2),e("div",{staticClass:"col"},[t._m(3),e("form",[e("ion-icon",{staticClass:"icon",attrs:{name:"mail"}}),e("input",{attrs:{type:"email",placeholder:"Enter your email",required:""}}),e("button",{attrs:{type:"submit"}},[e("ion-icon",{staticClass:"icon_right",attrs:{name:"arrow-round-forward"}})],1)],1),t._m(4)])]),e("hr"),e("p",{staticClass:"copyright"},[t._v(" © 2023 Parking Reservation System. All rights reserved. ")])])])}),_=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"col"},[e("img",{staticClass:"footer_logo",attrs:{src:a(1404)}}),e("p",{staticClass:"footer_about"},[t._v(" Welcome to ParkMyRide, the ultimate solution for stress-free parking! Our advanced reservation system makes it easy to book a spot in advance, so you can arrive at your destination with peace of mind knowing you have a guaranteed parking space. ")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"col"},[e("h4",[t._v(" Office "),e("div",{staticClass:"bottom_line"},[e("span")])]),e("p",[t._v("2841 Romines Mill Road")]),e("p",[t._v("Plano")]),e("p",[t._v("Texas, ZIP 75074, United States")]),e("p",{staticClass:"footer_email"},[t._v("support@parkmyride.com")]),e("h4",[t._v("+1 - 2145958195")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"col"},[e("h4",[t._v(" Links "),e("div",{staticClass:"bottom_line"},[e("span")])]),e("ul",[e("li",[e("a",{attrs:{href:""}},[t._v("HOME")])]),e("li",[e("a",{attrs:{href:""}},[t._v("ABOUT")])]),e("li",[e("a",{attrs:{href:""}},[t._v("SERVICE")])]),e("li",[e("a",{attrs:{href:""}},[t._v("CONTACT US")])])])])},function(){var t=this,e=t._self._c;return e("h4",[t._v(" Newsletter "),e("div",{staticClass:"bottom_line"},[e("span")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"social_icons"},[e("nav",{staticClass:"nav"},[e("div",{staticClass:"sm"},[e("h3",{staticClass:"sm-header"},[t._v("Follow us on")])]),e("div",{staticClass:"line"}),e("ul",{staticClass:"nav-list"},[e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:"#"}},[e("i",{staticClass:"fab fa-facebook-f"})])]),e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:"#"}},[e("i",{staticClass:"fab fa-twitter"})])]),e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:"#"}},[e("i",{staticClass:"fab fa-google-plus-g"})])]),e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:"#"}},[e("i",{staticClass:"fab fa-dribbble"})])]),e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:"#"}},[e("i",{staticClass:"fab fa-linkedin-in"})])])])])])}],w={name:"footerPage"},k=w,x=(0,u.Z)(k,y,_,!1,null,"f1e0b482",null),M=x.exports,S={components:{footerPage:M},data(){return{mode:"light",isMenuActive:!1}},methods:{booking(){this.$router.push("/booking")},toggleMode(){this.mode="light"===this.mode?"dark":"light"},toggleMenu(){this.isMenuActive=!this.isMenuActive}}},T=S,P=(0,u.Z)(T,C,b,!1,null,"ef451e52",null),N=P.exports,O=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container",class:{"sign-up-mode":t.isSignUpMode}},[e("div",{staticClass:"forms-container"},[e("div",{staticClass:"signin-signup"},[e("form",{staticClass:"sign-in-form",on:{submit:function(e){return e.preventDefault(),t.loginauthentication.apply(null,arguments)}}},[e("h2",{staticClass:"title"},[t._v("Sign in")]),e("div",{staticClass:"input-field"},[e("i",{staticClass:"fas fa-user"}),e("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"email",placeholder:"E-mail"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),e("div",{staticClass:"input-field"},[e("i",{staticClass:"fas fa-lock"}),e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",placeholder:"Password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),e("input",{staticClass:"btn solid",attrs:{type:"submit",value:"Login"}}),e("p",{staticClass:"social-text"},[t._v("Or Sign in with social platforms")]),t._m(0)]),e("form",{staticClass:"sign-up-form",on:{submit:function(e){return e.preventDefault(),t.signauthentication.apply(null,arguments)}}},[e("h2",{staticClass:"title"},[t._v("Sign up")]),e("div",{staticClass:"input-field"},[e("i",{staticClass:"fas fa-user"}),e("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"name",placeholder:"Name"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),e("div",{staticClass:"input-field"},[e("i",{staticClass:"fas fa-envelope"}),e("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"email",placeholder:"Email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),e("div",{staticClass:"input-field"},[e("i",{staticClass:"fas fa-lock"}),e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",placeholder:"Password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),e("input",{staticClass:"btn",attrs:{type:"submit",value:"Sign up"}}),e("p",{staticClass:"social-text"},[t._v("Or Sign up with social platforms")]),t._m(1)])])]),e("div",{staticClass:"panels-container"},[e("div",{staticClass:"panel left-panel"},[e("div",{staticClass:"content"},[e("h3",[t._v("Sign in to access your parking reservations")]),e("p",[t._v("Welcome back! Simply sign in to your account to access all of your parking reservations in one convenient location.")]),e("button",{staticClass:"btn transparent",on:{click:t.toggleSignUpMode}},[t._v("Sign up")])]),e("img",{staticClass:"image",attrs:{src:a(9087),alt:""}})]),e("div",{staticClass:"panel right-panel"},[e("div",{staticClass:"content"},[e("h3",[t._v("Sign up and park with ease")]),e("p",[t._v("Ready to make parking a stress-free experience? Sign up today and start reserving your parking spot in advance.")]),e("button",{staticClass:"btn transparent",on:{click:t.toggleSignUpMode}},[t._v("Sign in")])]),e("img",{staticClass:"image",attrs:{src:a(1062),alt:""}})])])])},F=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"social-media"},[e("a",{staticClass:"social-icon",attrs:{href:"#"}},[e("i",{staticClass:"fab fa-facebook-f"})]),e("a",{staticClass:"social-icon",attrs:{href:"#"}},[e("i",{staticClass:"fab fa-twitter"})]),e("a",{staticClass:"social-icon",attrs:{href:"#"}},[e("i",{staticClass:"fab fa-google"})]),e("a",{staticClass:"social-icon",attrs:{href:"#"}},[e("i",{staticClass:"fab fa-linkedin-in"})])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"social-media"},[e("a",{staticClass:"social-icon",attrs:{href:"#"}},[e("i",{staticClass:"fab fa-facebook-f"})]),e("a",{staticClass:"social-icon",attrs:{href:"#"}},[e("i",{staticClass:"fab fa-twitter"})]),e("a",{staticClass:"social-icon",attrs:{href:"#"}},[e("i",{staticClass:"fab fa-google"})]),e("a",{staticClass:"social-icon",attrs:{href:"#"}},[e("i",{staticClass:"fab fa-linkedin-in"})])])}],A=a(4161),j={data(){return{isSignUpMode:!1,email:"",password:"",name:""}},methods:{toggleSignUpMode(){this.isSignUpMode=!this.isSignUpMode},async signauthentication(){try{const t=await A.Z.post("http://127.0.0.1:3000/signup",{name:this.name,email:this.email,password:this.password});console.log(t.data),alert("Your Account is created successful"),this.isSignUpMode=!this.isSignUpMode}catch(t){console.error(t),alert("Failed  to created account")}},async loginauthentication(){try{const t=await A.Z.post("http://127.0.0.1:3000/login",{email:this.email,password:this.password});this.$router.push("/home"),console.log(t.data),alert("Welcome to ParkMyRide - your one-stop parking reservation system. ")}catch(t){console.error(t),alert("Failed to login")}}}},I=j,R=(0,u.Z)(I,O,F,!1,null,"fe46bbc4",null),$=R.exports,U=function(){var t=this,e=t._self._c;return e("main",[e("div",{class:["big-wrapper",t.mode]},[e("div",{staticClass:"bottom-area"},[e("div",{staticClass:"container"},[e("button",{staticClass:"toggle-btn",on:{click:t.toggleMode}},[e("i",{staticClass:"far fa-moon"}),e("i",{staticClass:"far fa-sun"})])])]),t._m(0),t._m(1),t._m(2)]),e("footerPage",{staticClass:"footer1"})],1)},Z=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"showcase-area"},[e("div",{staticClass:"container"},[e("div",{staticClass:"left"},[e("div",{staticClass:"big-title"},[e("h1",[t._v("Our Mission")])]),e("p",{staticClass:"text"},[t._v(" Our mission is to revolutionize the way people think about parking. We believe that parking should be simple, stress-free, and accessible to everyone, regardless of where they live or work. We are committed to creating a platform that empowers users to take control of their parking needs, while also providing them with innovative solutions that save time, money, and reduce their environmental footprint. Our mission is to make parking a hassle-free experience, so that users can focus on the things that matter most. ")])]),e("div",{staticClass:"right"},[e("img",{staticClass:"person",attrs:{src:a(1051),alt:"Person Image"}})])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"showcase-area new"},[e("div",{staticClass:"container"},[e("div",{staticClass:"right"},[e("img",{staticClass:"person1",attrs:{src:a(6254),alt:"Person Image"}})]),e("div",{staticClass:"left"},[e("div",{staticClass:"big-title"},[e("h1",[t._v("Our Goals")])]),e("p",{staticClass:"text"},[t._v(" At our parking reservation system, our primary goal is to provide a seamless and convenient parking experience for our customers. We strive to create a platform that makes it easy for users to find and reserve parking spaces, while also providing them with reliable and accurate information about available options. Additionally, we are committed to reducing traffic congestion and environmental impact by promoting sustainable modes of transportation and incentivizing users to choose alternative options such as public transportation or carpooling. ")])]),e("div",{staticClass:"right"},[e("img",{staticClass:"person2",attrs:{src:a(6254),alt:"Person Image"}})])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"showcase-area"},[e("div",{staticClass:"container"},[e("div",{staticClass:"left"},[e("div",{staticClass:"big-title"},[e("h1",[t._v("Our Values")])]),e("p",{staticClass:"text"},[t._v(" At our parking reservation system, we are guided by a set of core values that inform everything we do. These values include transparency, trust, reliability, and innovation. We believe in being transparent and open with our users about our processes, fees, and services. We also believe in building trust with our customers by providing them with accurate and up-to-date information, and delivering on our promises. Reliability is crucial to our success, and we are committed to providing a platform that is always available, responsive, and dependable. Finally, we value innovation and creativity, and are constantly seeking new and better ways to improve our services and enhance the user experience. ")])]),e("div",{staticClass:"right"},[e("img",{staticClass:"person",attrs:{src:a(5552),alt:"Person Image"}})])])])}],E={components:{footerPage:M},data(){return{mode:"light",isMenuActive:!1}},methods:{toggleMode(){this.mode="light"===this.mode?"dark":"light"},toggleMenu(){this.isMenuActive=!this.isMenuActive}}},L=E,W=(0,u.Z)(L,U,Z,!1,null,"0401cd1a",null),V=W.exports,q=function(){var t=this,e=t._self._c;return e("div",{staticClass:"chatbot-container"},[e("header",[t._v("Talk With Us")]),e("section",{staticClass:"main"},[e("div",{staticClass:"chatarea-main"},[e("div",{staticClass:"chatarea-outer"},t._l(t.chatMessages,(function(a,s){return e("div",{key:s,staticClass:"chatarea-inner",class:a.sender},[t._v(" "+t._s(a.text)+" ")])})),0)]),t._m(0),e("button",{attrs:{id:"mic"},on:{click:t.activateMic}},[e("img",{attrs:{src:a(6037)}})])])])},B=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"chatbot-area"},[e("img",{attrs:{src:a(6838)}})])}],D={data(){return{chatMessages:[],intro:["Welcome to ParkMyRide! How can I assist you?"],help:["How may I help you with your parking reservation?"],greetings:["I'm doing well, thank you. How can I assist you with your parking reservation?","I'm fine, thanks for asking. How can I assist you with your parking reservation?"],info:["I can help you with parking reservations, pricing, and availability.","You can make a reservation, check availability, and view prices with me!"],reservation:["Sure, what date and time would you like to reserve a spot?","I can help you reserve a spot. When do you need it?"],confirmation:["Your reservation is confirmed! Thank you for choosing ParkMyRide!","Great, your parking spot is reserved! Thank you for choosing ParkMyRide!"],thanks:["You're welcome!","No problem!","It's my pleasure!","Anytime!"],closing:["Okay, have a great day!","Goodbye!"]}},methods:{showUserMsg(t){this.chatMessages.push({text:t,sender:"user"})},showChatbotMsg(t){this.chatMessages.push({text:t,sender:"chatbot"})},chatbotVoice(t){const e=new SpeechSynthesisUtterance;e.text="This is test message";let a="";return t.includes("hello")?a=this.intro[Math.floor(Math.random()*this.intro.length)]:t.includes("hi")?a=this.help[Math.floor(Math.random()*this.help.length)]:t.includes("how are you")?a=this.greetings[Math.floor(Math.random()*this.greetings.length)]:t.includes("tell me something about you")?a=this.info[Math.floor(Math.random()*this.info.length)]:t.includes("reserve")?a=this.reservation[Math.floor(Math.random()*this.reservation.length)]:t.includes("confirm")?a=this.confirmation[Math.floor(Math.random()*this.confirmation.length)]:t.includes("thanks")?a=this.thanks[Math.floor(Math.random()*this.thanks.length)]:t.includes("bye")&&(a=this.closing[Math.floor(Math.random()*this.closing.length)]),e.text=a||"I'm sorry, I didn't understand that. Can you please rephrase?",window.speechSynthesis.speak(e),a},activateMic(){const{webkitSpeechRecognition:t}=window,e=new t;e.lang="en-US",e.start(),e.onresult=t=>{const e=t.results[0][0].transcript;this.showUserMsg(e);const a=this.chatbotVoice(e);a?this.showChatbotMsg(a):setTimeout((()=>{this.showChatbotMsg("I'm sorry, I didn't understand that. Can you please rephrase?")}),1e3)},e.onend=()=>{console.log("Speech recognition service disconnected")}}}},H=D,z=(0,u.Z)(H,q,B,!1,null,"36a1fdfe",null),Y=z.exports,G=function(){var t=this,e=t._self._c;return e("div",[t._m(0),e("footerPage",{staticClass:"footer1"})],1)},J=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"section-padding"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-12"},[e("div",{staticClass:"section-header text-center"},[e("h2",[t._v("Our Services")]),e("p",[t._v("Simplify Your Parking Experience with Our Reservation System")])])])]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-4"},[e("div",{staticClass:"single-service"},[e("span",{staticClass:"icon"},[e("img",{attrs:{src:a(4365)}})]),e("div",{staticClass:"content"},[e("h3",[t._v("Online Parking Reservations")]),e("p",[t._v(" Our parking reservation system allows you to reserve a parking spot in advance, so you can avoid the hassle of driving around in search of a parking space. ")])])])]),e("div",{staticClass:"col-lg-4"},[e("div",{staticClass:"single-service"},[e("span",{staticClass:"icon"},[e("img",{attrs:{src:a(7842)}})]),e("div",{staticClass:"content"},[e("h3",[t._v("Mobile App Integration")]),e("p",[t._v(" Our parking reservation system integrates with a mobile app, so you can reserve a spot and pay for parking right from your phone. ")])])])]),e("div",{staticClass:"col-lg-4"},[e("div",{staticClass:"single-service"},[e("span",{staticClass:"icon"},[e("img",{attrs:{src:a(8698)}})]),e("div",{staticClass:"content"},[e("h3",[t._v("24/7 Customer Support")]),e("p",[t._v(" Our customer support team is available 24/7 to assist you with any issues or questions you may have about our parking reservation system. ")])])])])])])])}],K={components:{footerPage:M}},Q=K,X=(0,u.Z)(Q,G,J,!1,null,"773961ac",null),tt=X.exports,et=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"container mt-5"},[e("h2",{staticClass:"text-center mb-5"},[t._v("Parking Reservation System")]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-8"},[e("div",{staticClass:"row parking-slots"},t._l(t.slots,(function(a){return e("div",{key:a.id,staticClass:"col-md-3 mb-3",class:{"parking-slot":!0,available:a.available,booked:!a.available},on:{click:function(e){return t.selectSlot(a)}}},[a.available?e("span",{staticClass:"text-white"},[t._v("Slot "+t._s(a.id)+" Available")]):e("span",{staticClass:"text-white"},[t._v("Booked")])])})),0)]),e("div",{staticClass:"col-md-4"},[t.selectedSlot?e("div",{staticClass:"booking-form"},[e("h3",{staticClass:"text-center mb-4"},[t._v("Book Slot "+t._s(t.selectedSlot.id))]),e("form",{on:{submit:function(e){return e.preventDefault(),t.submitForm.apply(null,arguments)}}},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"ownerName"}},[t._v("Owner Name:")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.ownerName,expression:"form.ownerName"}],staticClass:"form-control",attrs:{type:"text",id:"ownerName",required:""},domProps:{value:t.form.ownerName},on:{input:function(e){e.target.composing||t.$set(t.form,"ownerName",e.target.value)}}})]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"vehicleModel"}},[t._v("Vehicle Model:")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.vehicleModel,expression:"form.vehicleModel"}],staticClass:"form-control",attrs:{type:"text",id:"vehicleModel",required:""},domProps:{value:t.form.vehicleModel},on:{input:function(e){e.target.composing||t.$set(t.form,"vehicleModel",e.target.value)}}})]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"vehicleType"}},[t._v("Vehicle Type:")]),e("select",{directives:[{name:"model",rawName:"v-model",value:t.form.vehicleType,expression:"form.vehicleType"}],staticClass:"form-control",attrs:{id:"vehicleType",required:""},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.form,"vehicleType",e.target.multiple?a:a[0])}}},[e("option",{attrs:{value:""}},[t._v("Select vehicle type")]),e("option",{attrs:{value:"2-wheeler"}},[t._v("2-Wheeler")]),e("option",{attrs:{value:"3-wheeler"}},[t._v("3-Wheeler")]),e("option",{attrs:{value:"4-wheeler"}},[t._v("4-Wheeler")])])]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"vehicleNumber"}},[t._v("Vehicle Number:")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.vehicleNumber,expression:"form.vehicleNumber"}],staticClass:"form-control",attrs:{type:"text",id:"vehicleNumber",required:""},domProps:{value:t.form.vehicleNumber},on:{input:function(e){e.target.composing||t.$set(t.form,"vehicleNumber",e.target.value)}}})]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"entryTime"}},[t._v("Entry Datetime:")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.entryTime,expression:"form.entryTime"}],staticClass:"form-control",attrs:{type:"datetime-local",id:"entryTime",required:""},domProps:{value:t.form.entryTime},on:{input:function(e){e.target.composing||t.$set(t.form,"entryTime",e.target.value)}}})]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"exitTime"}},[t._v("Exit Datetime:")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.exitTime,expression:"form.exitTime"}],staticClass:"form-control",attrs:{type:"datetime-local",id:"exitTime",required:""},domProps:{value:t.form.exitTime},on:{input:function(e){e.target.composing||t.$set(t.form,"exitTime",e.target.value)}}})]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"fees"}},[t._v("Fees:")]),"2-wheeler"===t.form.vehicleType?e("span",{ref:"spanValue"},[t._v(t._s(t.calculateFees(5)))]):"3-wheeler"===t.form.vehicleType||"4-wheeler"===t.form.vehicleType?e("span",{ref:"spanValue"},[t._v(t._s(t.calculateFees(10)))]):t._e()]),e("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Book Slot")])])]):t._e()])])]),e("footerPage",{staticClass:"footer1"})],1)},at=[],st=a(8914),it={components:{footerPage:M},data(){return{slots:[{id:1,available:!0},{id:2,available:!0},{id:3,available:!0},{id:4,available:!0},{id:5,available:!0},{id:6,available:!0},{id:7,available:!0},{id:8,available:!0},{id:9,available:!0},{id:10,available:!0}],selectedSlot:1,form:{ownerName:"",vehicleModel:"",vehicleType:"",vehicleNumber:"",entryTime:"",exitTime:"",fees:0}}},methods:{selectSlot(t){t.available&&(this.selectedSlot=t)},generateTransactionId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=t.length;let a="";for(let s=0;s<13;s++){const s=Math.floor(Math.random()*e);a+=t.charAt(s)}return a},calculateFees(t){const e=new Date(this.form.entryTime),a=new Date(this.form.exitTime),s=Math.abs(a-e),i=Math.ceil(s/36e5);return i*t},resetForm(){this.form.ownerName="",this.form.vehicleModel="",this.form.vehicleType="",this.form.vehicleNumber="",this.form.entryTime="",this.form.exitTime="",this.form.fees=0},generateReceipt(){const t=this.generateTransactionId(),e=new st.ZP,a=[30,67,137],s=[224,224,224];e.addFont("Helvetica-Bold.ttf","helvetica-bold","bold"),e.addFont("Helvetica.ttf","helvetica","normal"),e.setFont("helvetica"),e.setFillColor(...a),e.rect(0,0,210,40,"F"),e.setTextColor(255,255,255),e.setFontSize(24),e.setFont("helvetica-bold"),e.text("ParkMyRide",105,25,{align:"center"}),e.setFontSize(12),e.text("Your one-stop parking reservation system",105,35,{align:"center"}),e.setTextColor(0,0,0),e.setFillColor(...s),e.rect(20,70,170,110,"F"),e.setFontSize(16),e.setFont("helvetica-bold"),e.text("Parking Receipt",105,80,{align:"center"}),e.setDrawColor(...a),e.setLineWidth(.5),e.line(20,90,190,90),e.setFont("helvetica"),e.setFontSize(12),e.text(`Transaction ID: ${t}`,25,105),e.text(`Owner Name: ${this.form.ownerName}`,25,115),e.text(`Vehicle Model: ${this.form.vehicleModel}`,25,125),e.text(`Vehicle Number: ${this.form.vehicleNumber}`,25,135),e.text(`Entry Time: ${this.form.entryTime}`,25,145),e.text(`Exit Time: ${this.form.exitTime}`,25,155),e.setFont("helvetica-bold"),e.text(`Fees: Rs. ${this.$refs.spanValue.textContent}`,25,170),e.setFontSize(10),e.setFont("helvetica"),e.text("Contact us:",20,195),e.text("Phone: +91-1234567890",20,200),e.text("Email: contact@parkmyride.com",20,205),e.setFontSize(14),e.setFont("helvetica-bold"),e.text("Thank you for using ParkMyRide!",105,240,{align:"center"}),e.save(`ParkMyRide_ParkingReceipt_${t}.pdf`)},async submitForm(){try{const t=await A.Z.post("http://127.0.0.1:3000/buynow",{ownerName:this.form.ownerName,slotName:this.selectedSlot.id,vehicleType:this.form.vehicleType,vehicleModel:this.form.vehicleModel,vehicleNumber:this.form.vehicleNumber,entryTime:this.form.entryTime,exitTime:this.form.exitTime,parkingFee:this.$refs.spanValue.textContent});if(console.log(t.data),201===t.status){const t=this.slots.findIndex((t=>t.id===this.selectedSlot.id));t>=0&&(this.slots[t].available=!1,this.selectedSlot=1,alert(`Booking Successful!\nOwner Name: ${this.form.ownerName}\nCar Number: ${this.form.vehicleNumber}\nBooking Fees: ${this.$refs.spanValue.textContent}`))}this.generateReceipt(),this.resetForm()}catch(t){console.error(t),alert("Slot is not avaliable now")}}}},ot=it,nt=(0,u.Z)(ot,et,at,!1,null,"f9080068",null),rt=nt.exports,lt=function(){var t=this,e=t._self._c;return e("div",{staticClass:".main"},[e("link",{attrs:{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css"}}),e("div",{staticClass:"container2"},[e("span",{staticClass:"big-circle"}),e("img",{staticClass:"square",attrs:{src:a(6333),alt:""}}),e("div",{staticClass:"form"},[t._m(0),e("div",{staticClass:"contact-form"},[e("div",{attrs:{id:"wrap"}},[e("h1",[t._v("send a message!")]),e("br"),e("br"),e("br"),e("div",{attrs:{id:"form-wrap"}},[e("form",{attrs:{method:"post"},on:{submit:function(e){return e.preventDefault(),t.submitForm.apply(null,arguments)}}},[e("label",{attrs:{for:"email"}},[t._v("message:")]),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],attrs:{name:"message",id:"message",cols:"30",rows:"10",value:"your message"},domProps:{value:t.message},on:{input:function(e){e.target.composing||(t.message=e.target.value)}}}),e("label",{attrs:{for:"name"}},[t._v("Name:")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"text",name:"name",id:"name",value:""},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),e("label",{attrs:{for:"email"}},[t._v("Email:")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"text",name:"email",id:"email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),e("input",{attrs:{type:"submit",name:"submit",value:"Get in Touch"}})])])])])])]),e("footerPage",{staticClass:"footer1"})],1)},ct=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"contact-info"},[e("h3",{staticClass:"title"},[t._v("Let's get in touch")]),e("div",{staticClass:"tagline"},[e("p",{staticClass:"text"},[t._v(" Have a question, comment, or concern? We'd love to hear from you!! ")]),e("p",{staticClass:"text"},[e("strong",[t._v("Making parking easy and stress-free.")])])]),e("div",{staticClass:"info"},[e("div",{staticClass:"information"},[e("img",{staticClass:"icon",attrs:{src:a(9466),alt:""}}),e("p",[e("strong",[t._v("123 Main Street, Anytown USA 12345")])])]),e("div",{staticClass:"information"},[e("img",{staticClass:"icon",attrs:{src:a(1008),alt:""}}),e("p",[e("strong",[t._v("info@parkmyride.com")])])]),e("div",{staticClass:"information"},[e("img",{staticClass:"icon",attrs:{src:a(3970),alt:""}}),e("p",[e("strong",[t._v("123-456-789")])])])]),e("div",{staticClass:"social-media"},[e("p",[t._v("Connect with us :")]),e("div",{staticClass:"social-icons"},[e("a",{attrs:{href:"https://www.facebook.com/",target:"_blank"}},[e("i",{staticClass:"fa-brands fa-facebook"})]),e("a",{attrs:{href:"https://twitter.com/login?lang=en",target:"_blank"}},[e("i",{staticClass:"fab fa-twitter"})]),e("a",{attrs:{href:"https://www.instagram.com/",target:"_blank"}},[e("i",{staticClass:"fab fa-instagram"})]),e("a",{attrs:{href:"https://in.linkedin.com/",target:"_blank"}},[e("i",{staticClass:"fab fa-linkedin-in"})])])])])}],ut={components:{footerPage:M},data(){return{name:"",email:"",phone:"",message:""}},methods:{resetForm(){this.name="",this.email="",this.message=""},async submitForm(){try{const t=await A.Z.post("http://127.0.0.1:3000/ContactUs",{name:this.name,email:this.email,message:this.message});console.log(t.data),alert("Thank you for contacting ParkMyRide!\nYour message has been received and we will respond to you as soon as possible."),this.resetForm()}catch(t){console.error(t),alert("Server not avaliable now")}}}},mt=ut,dt=(0,u.Z)(mt,lt,ct,!1,null,"bfc4e70c",null),vt=dt.exports;s.ZP.config.productionTip=!1,s.ZP.use(g.ZP);const ft=[{path:"/",component:$},{path:"/home",component:N},{path:"/about",component:V},{path:"/chatbot",component:Y},{path:"/services",component:tt},{path:"/booking",component:rt},{path:"/contact",component:vt}],pt=new g.ZP({mode:"history",routes:ft});new s.ZP({router:pt,render:t=>t(h)}).$mount("#app")},1051:function(t,e,a){t.exports=a.p+"img/car.085ee4db.svg"},6838:function(t,e,a){t.exports=a.p+"img/chat.fe208935.svg"},6827:function(t,e,a){t.exports=a.p+"img/home_park.4652e4fb.svg"},5552:function(t,e,a){t.exports=a.p+"img/value.8a6958d7.svg"},9087:function(t,e,a){t.exports=a.p+"img/welcome.866281a0.svg"},7842:function(t,e,a){t.exports=a.p+"img/app.c4c9ca05.gif"},5618:function(t,e,a){t.exports=a.p+"img/bookNow.85d69e8e.gif"},1008:function(t,e,a){t.exports=a.p+"img/email.3034c4c9.gif"},9466:function(t,e,a){t.exports=a.p+"img/location.bbeb4fb9.gif"},6254:function(t,e,a){t.exports=a.p+"img/login.4fda99c2.gif"},1404:function(t,e,a){t.exports=a.p+"img/logo-white.aeaefd9c.png"},6949:function(t,e,a){t.exports=a.p+"img/logo.a8796233.png"},6037:function(t,e,a){t.exports=a.p+"img/mic.608d780e.gif"},3970:function(t,e,a){t.exports=a.p+"img/phone.2fd1698a.gif"},4365:function(t,e,a){t.exports=a.p+"img/reservationSystem.d6f0e7d9.gif"},6333:function(t,e,a){t.exports=a.p+"img/shape.31261855.png"},1062:function(t,e,a){t.exports=a.p+"img/signup.42d0473e.png"},8698:function(t,e,a){t.exports=a.p+"img/tech-support.6c73ed00.gif"}},e={};function a(s){var i=e[s];if(void 0!==i)return i.exports;var o=e[s]={exports:{}};return t[s].call(o.exports,o,o.exports,a),o.exports}a.m=t,function(){var t=[];a.O=function(e,s,i,o){if(!s){var n=1/0;for(u=0;u<t.length;u++){s=t[u][0],i=t[u][1],o=t[u][2];for(var r=!0,l=0;l<s.length;l++)(!1&o||n>=o)&&Object.keys(a.O).every((function(t){return a.O[t](s[l])}))?s.splice(l--,1):(r=!1,o<n&&(n=o));if(r){t.splice(u--,1);var c=i();void 0!==c&&(e=c)}}return e}o=o||0;for(var u=t.length;u>0&&t[u-1][2]>o;u--)t[u]=t[u-1];t[u]=[s,i,o]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){var t,e=Object.getPrototypeOf?function(t){return Object.getPrototypeOf(t)}:function(t){return t.__proto__};a.t=function(s,i){if(1&i&&(s=this(s)),8&i)return s;if("object"===typeof s&&s){if(4&i&&s.__esModule)return s;if(16&i&&"function"===typeof s.then)return s}var o=Object.create(null);a.r(o);var n={};t=t||[null,e({}),e([]),e(e)];for(var r=2&i&&s;"object"==typeof r&&!~t.indexOf(r);r=e(r))Object.getOwnPropertyNames(r).forEach((function(t){n[t]=function(){return s[t]}}));return n["default"]=function(){return s},a.d(o,n),o}}(),function(){a.d=function(t,e){for(var s in e)a.o(e,s)&&!a.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){a.f={},a.e=function(t){return Promise.all(Object.keys(a.f).reduce((function(e,s){return a.f[s](t,e),e}),[]))}}(),function(){a.u=function(t){return"js/"+t+"."+{269:"f2ff5e92",297:"baeb4f72",617:"bbd3f741"}[t]+".js"}}(),function(){a.miniCssF=function(t){}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="parkingreservation:";a.l=function(s,i,o,n){if(t[s])t[s].push(i);else{var r,l;if(void 0!==o)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var m=c[u];if(m.getAttribute("src")==s||m.getAttribute("data-webpack")==e+o){r=m;break}}r||(l=!0,r=document.createElement("script"),r.charset="utf-8",r.timeout=120,a.nc&&r.setAttribute("nonce",a.nc),r.setAttribute("data-webpack",e+o),r.src=s),t[s]=[i];var d=function(e,a){r.onerror=r.onload=null,clearTimeout(v);var i=t[s];if(delete t[s],r.parentNode&&r.parentNode.removeChild(r),i&&i.forEach((function(t){return t(a)})),e)return e(a)},v=setTimeout(d.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=d.bind(null,r.onerror),r.onload=d.bind(null,r.onload),l&&document.head.appendChild(r)}}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){a.p="/parking/"}(),function(){var t={143:0};a.f.j=function(e,s){var i=a.o(t,e)?t[e]:void 0;if(0!==i)if(i)s.push(i[2]);else{var o=new Promise((function(a,s){i=t[e]=[a,s]}));s.push(i[2]=o);var n=a.p+a.u(e),r=new Error,l=function(s){if(a.o(t,e)&&(i=t[e],0!==i&&(t[e]=void 0),i)){var o=s&&("load"===s.type?"missing":s.type),n=s&&s.target&&s.target.src;r.message="Loading chunk "+e+" failed.\n("+o+": "+n+")",r.name="ChunkLoadError",r.type=o,r.request=n,i[1](r)}};a.l(n,l,"chunk-"+e,e)}},a.O.j=function(e){return 0===t[e]};var e=function(e,s){var i,o,n=s[0],r=s[1],l=s[2],c=0;if(n.some((function(e){return 0!==t[e]}))){for(i in r)a.o(r,i)&&(a.m[i]=r[i]);if(l)var u=l(a)}for(e&&e(s);c<n.length;c++)o=n[c],a.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return a.O(u)},s=self["webpackChunkparkingreservation"]=self["webpackChunkparkingreservation"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=a.O(void 0,[998],(function(){return a(2182)}));s=a.O(s)})();
//# sourceMappingURL=app.9091bbf4.js.map