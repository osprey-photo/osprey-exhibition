(function(t){function e(e){for(var s,l,r=e[0],o=e[1],c=e[2],h=0,d=[];h<r.length;h++)l=r[h],Object.prototype.hasOwnProperty.call(i,l)&&i[l]&&d.push(i[l][0]),i[l]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);u&&u(e);while(d.length)d.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],s=!0,r=1;r<a.length;r++){var o=a[r];0!==i[o]&&(s=!1)}s&&(n.splice(e--,1),t=l(l.s=a[0]))}return t}var s={},i={app:0},n=[];function l(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=t,l.c=s,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)l.d(a,s,function(e){return t[e]}.bind(null,s));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/osprey-exhibition/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],o=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var u=o;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},1725:function(t){t.exports=JSON.parse('{"entries":[{"id":1,"original":"/home/matthew/Pictures/testimgs/bob/1050x1050.jpg","author":"bob","title":"1050x1050","large":"gallery/1_bob_1050x1050_large.png","thumbnail":"gallery/1_bob_1050x1050_tb.png","exif":{},"size":{"width":1600,"height":900}},{"id":2,"original":"/home/matthew/Pictures/testimgs/bob/1400by1050.jpg","author":"bob","title":"1400by1050","large":"gallery/2_bob_1400by1050_large.png","thumbnail":"gallery/2_bob_1400by1050_tb.png","exif":{},"size":{"width":1600,"height":900}},{"id":3,"original":"/home/matthew/Pictures/testimgs/bob/1400x1050.jpg","author":"bob","title":"1400x1050","large":"gallery/3_bob_1400x1050_large.png","thumbnail":"gallery/3_bob_1400x1050_tb.png","exif":{},"size":{"width":1600,"height":900}},{"id":4,"original":"/home/matthew/Pictures/testimgs/bob/1600x1200.jpg","author":"bob","title":"1600x1200","large":"gallery/4_bob_1600x1200_large.png","thumbnail":"gallery/4_bob_1600x1200_tb.png","exif":{},"size":{"width":1600,"height":900}},{"id":5,"original":"/home/matthew/Pictures/testimgs/bob/1600x400.jpg","author":"bob","title":"1600x400","large":"gallery/5_bob_1600x400_large.png","thumbnail":"gallery/5_bob_1600x400_tb.png","exif":{},"size":{"width":1600,"height":900}},{"id":6,"original":"/home/matthew/Pictures/testimgs/bob/1600x900.jpg","author":"bob","title":"1600x900","large":"gallery/6_bob_1600x900_large.png","thumbnail":"gallery/6_bob_1600x900_tb.png","exif":{},"size":{"width":1600,"height":900}},{"id":7,"original":"/home/matthew/Pictures/testimgs/bob/400x1200.jpg","author":"bob","title":"400x1200","large":"gallery/7_bob_400x1200_large.png","thumbnail":"gallery/7_bob_400x1200_tb.png","exif":{},"size":{"width":1600,"height":900}},{"id":8,"original":"/home/matthew/Pictures/testimgs/bob/900x900.jpg","author":"bob","title":"900x900","large":"gallery/8_bob_900x900_large.png","thumbnail":"gallery/8_bob_900x900_tb.png","exif":{},"size":{"width":1600,"height":900}}]}')},"2ade":function(t,e,a){},"2d61":function(t,e,a){},3421:function(t,e,a){"use strict";var s=a("2d61"),i=a.n(s);i.a},"3b7d":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("section",{staticClass:"hero is-fullheight has-background"},[a("div",{staticClass:"hero-head"},[a("nav",{staticClass:"navbar is-transparent"},[a("div",{staticClass:"container"},[a("div",{staticClass:"navbar-brand"},[a("span",{staticClass:"navbar-burger burger",class:{"is-active":t.showMobileMenu},attrs:{"data-target":"navbarMenuHeroB"},on:{click:function(e){t.showMobileMenu=!t.showMobileMenu}}},[a("span"),a("span"),a("span")])]),t._m(0),a("div",{staticClass:"navbar-menu",class:{"is-active":t.showMobileMenu},attrs:{id:"navbarMenuHeroB"},on:{click:function(e){t.showMobileMenu=!t.showMobileMenu}}},[a("div",{staticClass:"navbar-end"},[a("router-link",{staticClass:"navbar-item is-active",attrs:{to:"/"}},[t._v("Home")]),a("router-link",{staticClass:"navbar-item",attrs:{to:"/Gallery"}},[t._v("Gallery")]),a("router-link",{staticClass:"navbar-item",attrs:{to:"/Junior"}},[t._v("Junior")]),a("router-link",{staticClass:"navbar-item",attrs:{to:"/Panels"}},[t._v("Panels")]),a("router-link",{staticClass:"navbar-item",attrs:{to:"/Catalog"}},[t._v("Catalog")]),a("router-link",{staticClass:"navbar-item",attrs:{to:"/Guestbook"}},[t._v("Guestbook")])],1)])])])]),a("img",{staticClass:"hero-background is-transparent",attrs:{alt:"Bishops Waltham Palace",src:"bgd.jpg"}}),a("div",{staticStyle:{position:"relative",top:"-35px"}},[a("div",{staticClass:"hero-body py-0"},[a("div",{staticClass:"container has-text-centered"},[a("transition",{attrs:{name:"fade",mode:"out-in"}},[a("router-view")],1)],1)])]),t._m(1)])])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"navbar-menu"},[a("div",{staticClass:"navbar-start"},[a("a",{staticClass:"navbar-item",attrs:{href:"https://bishopswalthamphotosociety.co.uk"}},[t._v("Bishop's Waltham Photographic Society")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hero-foot"},[a("nav",{staticClass:"tabs is-boxed is-fullwidth"},[a("div",{staticClass:"container"},[a("p",[t._v("All images are copyright of the individual photographers")])])])])}],l={data:function(){return{showMobileMenu:!1}}},r=l,o=(a("8329"),a("2877")),c=Object(o["a"])(r,i,n,!1,null,"c95ea7b0",null),u=c.exports,h=a("8c4f"),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("IntroComp")},p=[],g=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},b=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("img",{staticClass:"image has-image-centered is-128x128",attrs:{src:"BWPSLogo2016.png",alt:"Logo"}}),a("p",{staticClass:"is-size-1 title"},[t._v("Bishop's Waltham Photographic Society")]),a("p",{staticClass:"is-size-1 title"},[t._v("Annual Exhbition 2020")]),a("a",{staticClass:"button",attrs:{href:"#/Gallery/"}},[t._v("Enter the gallery...")])])}],f={name:"IntroComp"},v=f,m=(a("3421"),Object(o["a"])(v,g,b,!1,null,"7bbf1f25",null)),_=m.exports,C={name:"Home",components:{IntroComp:_}},y=C,w=Object(o["a"])(y,d,p,!1,null,"1126b44a",null),x=w.exports,k=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},M=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tile is-ancestor"},[a("div",{staticClass:"tile is-vertical"},[a("div",{staticClass:"tile is-parent"},[a("article",{staticClass:"tile is-child notification has-background-grey-lighter"},[a("p",{staticClass:"title"},[t._v("Panels")]),t._v("Members' work designed to be shown together as a panel. "),a("div",{staticClass:"content"})])]),a("div",{staticClass:"tile"},[a("div",{staticClass:"tile is-parent"},[a("article",{staticClass:"tile is-child notification"},[a("p",{staticClass:"title"},[t._v("On Blurred Flowers")]),a("p",{staticClass:"subtitle"},[t._v("Matthew White")]),a("figure",{staticClass:"image is-4by3"},[a("img",{attrs:{src:"gallery/51_Matthew White_Yellow Flower2_tb.png"}})])])]),a("div",{staticClass:"tile is-parent"},[a("article",{staticClass:"tile is-child notification"},[a("p",{staticClass:"title"},[t._v("On Blurred Flowers")]),a("p",{staticClass:"subtitle"},[t._v("Matthew White")]),a("figure",{staticClass:"image is-4by3"},[a("img",{attrs:{src:"gallery/51_Matthew White_Yellow Flower2_tb.png"}})])])]),a("div",{staticClass:"tile is-parent"},[a("article",{staticClass:"tile is-child notification"},[a("p",{staticClass:"title"},[t._v("On Blurred Flowers")]),a("p",{staticClass:"subtitle"},[t._v("Matthew White")]),a("figure",{staticClass:"image is-4by3"},[a("img",{attrs:{src:"gallery/51_Matthew White_Yellow Flower2_tb.png"}})])])])])])])}],E={name:"Panels",components:{}},j=E,O=Object(o["a"])(j,k,M,!1,null,"f0a49ca4",null),$=O.exports,P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[t.showGallery?t._e():a("article",{staticClass:"box has-background-grey-lighter"},[a("p",{staticClass:"title"},[t._v("Choose which gallery to look around")])]),t.showGallery?t._e():a("div",{staticClass:"tile is-ancestor"},[a("div",{staticClass:"tile is-parent"},[a("article",{staticClass:"tile is-child notification"},[a("p",{staticClass:"title"},[t._v("Guided Tour")]),a("div",{staticClass:"content"},[t._v("All Members' images in an automatic slideshow")]),a("button",{staticClass:"button is-large",on:{click:function(e){return t.guided()}}},[t._v("Enter...")])])]),a("div",{staticClass:"tile is-parent"},[a("article",{staticClass:"tile is-child notification"},[a("p",{staticClass:"title"},[t._v("Self-Guided Tour")]),a("div",{staticClass:"content"},[t._v("You choose when to move on")]),a("button",{staticClass:"button is-large",on:{click:function(e){return t.selfGuided()}}},[t._v("Enter...")])])]),a("div",{staticClass:"tile is-parent"},[a("article",{staticClass:"tile is-child notification"},[a("p",{staticClass:"title"},[t._v("Junior Competition")]),a("div",{staticClass:"content"},[t._v("All the images from our Junior Competition")]),a("button",{staticClass:"button is-large",on:{click:function(e){return t.guided()}}},[t._v("Enter...")])])])]),t.showGallery?t._e():a("div",{staticClass:"tile is-ancestor"}),t.showGallery?a("GalleryComp2",{attrs:{autoplay:t.autoplay,gallery:t.gallery},on:{"hook:beforeDestroy":function(e){return t.reset()}}}):t._e()],1)},G=[],S=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},F=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{attrs:{id:"gallery"}})])}],z=(a("99af"),a("d81d"),{name:"GalleryComp2",properties:["autoplay","gallery"],components:{},data:function(){return{}},computed:{},mounted:function(){var t=this.$store.getters.getAll(this.gallery).map((function(t){return{src:t.large,w:t.size.width,h:t.size.height,title:t.title,author:t.author}}));this.$photoswipe.open(t,{showShare:!1,shareEl:!1,bgOpacity:.7,showHideOpacity:!0,showAnimationDuration:0,timeToIdle:2e3,addCaptionHTMLFn:function(t,e){return t.title?(e.children[0].innerHTML='<span class="title has-text-white">"'.concat(t.title,'"</span><span class="title">&nbsp;&nbsp;|&nbsp;&nbsp;</span> <span class="title has-text-white">').concat(t.author,"</span>"),!0):(e.children[0].innerHTML="hello",!1)}}),this.$photoswipe.listen("close",this.beforeChange)},destroy:function(){this.$photoswipe.close(),console.log("beforeDestroy")},methods:{beforeChange:function(){for(var t,e=arguments.length,a=new Array(e),s=0;s<e;s++)a[s]=arguments[s];(t=console).log.apply(t,["beforeChange"].concat(a))},show:function(){}}}),W=z,A=(a("9a58"),Object(o["a"])(W,S,F,!1,null,"0aeb8fcc",null)),B=A.exports,H={name:"Gallery",data:function(){return{showGallery:!1,gallery:"",autoplay:!1}},components:{GalleryComp2:B},mounted:function(){this.$photoswipe.listen("close",this.reset)},methods:{selfGuided:function(){this.autoplay=!1,this.showGallery=!0,this.gallery="selfguided"},guided:function(){this.autoplay=!0,this.gallery="guided",this.showGallery=!0},reset:function(){this.showGallery=!1}},beforeRouteUpdate:function(){this.showGallery=!1}},J=H,T=Object(o["a"])(J,P,G,!1,null,"b74bf15e",null),I=T.exports,R=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},V=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("article",{staticClass:"box has-background-grey-lighter"},[a("p",{staticClass:"title"},[t._v("All the junior images in catalog format")])])])}],L={name:"Junior",components:{}},Y=L,D=Object(o["a"])(Y,R,V,!1,null,"70d41c75",null),N=D.exports,q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{overflow:"auto","max-height":"90vh"}},t._l(t.entries,(function(t){return a("CatalogRow",{key:t.rowid,attrs:{entries:t}})})),1)},U=[],K=(a("fb6a"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"columns"},t._l(t.entries,(function(t){return a("div",{key:t.id,staticClass:"column is-3"},[a("CatalogEntry",{attrs:{title:t.title,thumbnail:t.thumbnail,notes:t.notes,author:t.author,large:t.large,entryid:t.id,exif:t.exif}})],1)})),0)}),Q=[],X=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"tile is-transparent"},[a("div",{staticClass:"card is-transparent"},[a("div",{staticClass:"card-image"},[a("figure",{staticClass:"imgage is-square"},[a("img",{staticClass:"pt-2",attrs:{src:t.thumbnail,alt:"Placeholder image"}})])]),a("div",{staticClass:"card-content"},[a("div",{staticClass:"media"},[a("div",{staticClass:"media-content"},[a("p",{staticClass:"title is-4"},[t._v(t._s(t.title))]),a("p",{staticClass:"subtitle is-6"},[t._v(t._s(t.author))])])])]),a("footer",{staticClass:"card-footer"},[t.isError?a("div",[t._v("..errr try again later..")]):t.isVoting?a("div",[a("spinner",{staticClass:"card-footer-item"})],1):a("div",[t.isFavourite?a("div",[t._v("Favourite !")]):a("div",[a("a",{staticClass:"card-footer-item",attrs:{href:"#"},on:{click:function(e){return t.vote()}}},[t._v("Vote as Favourite")])])]),a("a",{staticClass:"card-footer-item",attrs:{href:"#"},on:{click:function(e){t.showModal=!0}}},[t._v("More Information")])])])]),a("div",[a("div",{directives:[{name:"show",rawName:"v-show",value:t.showModal,expression:"showModal"}],staticClass:"modal is-active",on:{close:function(e){t.showModal=!1}}},[a("div",{staticClass:"modal-background"}),a("div",{staticClass:"modal-content"},[a("div",{staticClass:"box"},[a("div",{staticClass:"columns"},[a("div",{staticClass:"column"},[a("figure",{staticClass:"image"},[a("img",{attrs:{src:t.large,alt:"Placeholder image"}})])]),a("div",{staticClass:"column"},[a("p",{staticClass:"title"},[t._v(t._s(t.title))]),a("p",{staticClass:"subtitle"},[t._v(t._s(t.author))]),a("p",{},[t._v(t._s(t.notes))]),a("table",{staticClass:"table has-text-left"},t._l(t.exif,(function(e,s,i){return a("tr",{key:i},[a("td",[t._v(t._s(s))]),a("td",[t._v(t._s(e))])])})),0)])])])]),a("button",{staticClass:"modal-close",on:{click:function(e){t.showModal=!1}}})])])])},Z=[],tt=(a("96cf"),a("1da1")),et=a("5b7e"),at=a.n(et),st={name:"CatalogEntry",props:["entryid","thumbnail","author","title","notes","large","exif"],components:{Spinner:at.a},data:function(){return{showModal:!1,isVoting:!1,isError:!1}},computed:{isFavourite:function(){return this.$store.getters.isFavourite(this.entryid)}},methods:{vote:function(){var t=this;return Object(tt["a"])(regeneratorRuntime.mark((function e(){var a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t.isVoting=!0,e.next=4,t.$http.post("https://8d06c43d.eu-gb.apiconnect.appdomain.cloud/api/vote",{entryid:t.entryid});case 4:a=e.sent,s=a.data,t.$store.commit("addFavourite",t.entryid),console.log(s),e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](0),t.isError=!0;case 13:return e.prev=13,t.isVoting=!1,e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[0,10,13,16]])})))()}}},it=st,nt=(a("8daf"),Object(o["a"])(it,X,Z,!1,null,"19f3f06e",null)),lt=nt.exports,rt={name:"CatalogRow",components:{CatalogEntry:lt},props:["entries"]},ot=rt,ct=Object(o["a"])(ot,K,Q,!1,null,null,null),ut=ct.exports;function ht(t,e){var a=0,s=t.length,i=[],n=0;for(a=0;a<s;a+=e){var l=t.slice(a,a+e);l.rowid=n++,i.push(l)}return i}var dt={name:"Catalog",properties:["gallery"],components:{CatalogRow:ut},computed:{entries:function(){var t=ht(this.$store.getters.getAll(this.gallery),4);return console.log(t),t}}},pt=dt,gt=Object(o["a"])(pt,q,U,!1,null,"2980961e",null),bt=gt.exports,ft=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},vt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("article",{staticClass:"box has-background-grey-lighter"},[a("p",{staticClass:"title"},[t._v("Guest Book")])]),a("div",{staticClass:"section has-text-left"},[a("div",{staticClass:"box"},[a("p",[t._v("We'd love to hear from you, and your thoughts on the Exhibition.")]),a("div",{staticClass:"field"},[a("div",{staticClass:"control"},[a("textarea",{staticClass:"textarea is-info",attrs:{placeholder:"Message..."}})])])]),a("div",{staticClass:"box"},[a("p",[t._v("If you'd like to know about the society and join us, please leave you name and email!")]),a("div",{staticClass:"container has-text-left"},[a("div",{staticClass:"field is-horizontal"},[a("div",{staticClass:"field-body"},[a("div",{staticClass:"field"},[a("p",{staticClass:"control is-expanded has-icons-left"},[a("input",{staticClass:"input is-info",attrs:{type:"text",placeholder:"Name"}}),a("span",{staticClass:"icon is-small is-left"},[a("i",{staticClass:"fas fa-user"})])])]),a("div",{staticClass:"field"},[a("p",{staticClass:"control is-expanded has-icons-left has-icons-right"},[a("input",{staticClass:"input is-info",attrs:{type:"email",placeholder:"Email",value:"alex@smith.com"}}),a("span",{staticClass:"icon is-small is-left"},[a("i",{staticClass:"fas fa-envelope"})]),a("span",{staticClass:"icon is-small is-right"},[a("i",{staticClass:"fas fa-check"})])])])])])])]),a("div",{staticClass:"field is-grouped"},[a("div",{staticClass:"control"},[a("button",{staticClass:"button is-link"},[t._v("Submit")])]),a("div",{staticClass:"control"},[a("button",{staticClass:"button is-link is-light"},[t._v("Cancel")])])])])])}],mt={},_t=mt,Ct=Object(o["a"])(_t,ft,vt,!1,null,null,null),yt=Ct.exports;s["a"].use(h["a"]);var wt=[{path:"/",name:"Home",component:x},{path:"/panels",name:"Panels",component:$},{path:"/gallery",name:"Gallery",component:I},{path:"/catalog",name:"Catalog",component:bt},{path:"/junior",name:"Junior",component:N},{path:"/guestbook",name:"Guestbook",component:yt}],xt=new h["a"]({routes:wt}),kt=xt,Mt=(a("caad"),a("d3b7"),a("2532"),a("ddb0"),a("2f62")),Et=a("1725");s["a"].use(Mt["a"]);var jt=new Mt["a"].Store({state:{entries:Et.entries,currentEntry:0,favouriteEntry:[]},getters:{getAll:function(t){return function(e){return console.log("Vuex getting gallery"+e),t.entries}},isFavourite:function(t){return function(e){return t.favouriteEntry.includes(e)}}},mutations:{setCurrent:function(t,e){t.currentEntry=e},addFavourite:function(t,e){t.favouriteEntry.push(e)}},actions:{},modules:{}}),Ot=(a("9299"),a("bc3a")),$t=a.n(Ot),Pt=a("a7fe"),Gt=a.n(Pt),St=a("52fc");a("ffe8");s["a"].use(Gt.a,$t.a),s["a"].use(St["a"]),s["a"].config.productionTip=!1,new s["a"]({router:kt,store:jt,render:function(t){return t(u)}}).$mount("#app")},8329:function(t,e,a){"use strict";var s=a("2ade"),i=a.n(s);i.a},"8daf":function(t,e,a){"use strict";var s=a("3b7d"),i=a.n(s);i.a},9299:function(t,e,a){},"9a58":function(t,e,a){"use strict";var s=a("a250"),i=a.n(s);i.a},a250:function(t,e,a){}});
//# sourceMappingURL=app.3b9958b0.js.map