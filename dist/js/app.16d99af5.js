(function(){"use strict";var t={5620:function(t,e,n){var r=n(9242),a=n(3396);function i(t,e,n,r,i,l){const s=(0,a.up)("main-nav"),o=(0,a.up)("router-view");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(s),(0,a.Wm)(o)])}const l={class:"w-full h-16 text-sm"},s={class:"fixed top-0 left-0 w-full h-16 bg-brand-teal-1"},o={class:"flex h-full"},c={class:"flex h-full items-center pl-5 text-brand-cream-1 text-base justify-between"};function u(t,e,n,r,i,u){const d=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("header",l,[(0,a._)("div",s,[(0,a._)("div",o,[(0,a._)("ul",c,[(0,a._)("li",null,[(0,a.Wm)(d,{to:"/",class:"text-2xl px-12"},{default:(0,a.w5)((()=>[(0,a.Uk)("Instrumanagement")])),_:1})]),(0,a._)("li",null,[(0,a.Wm)(d,{to:"/create",class:"text-2xl px-12"},{default:(0,a.w5)((()=>[(0,a.Uk)("Create")])),_:1})]),(0,a._)("li",null,[(0,a.Wm)(d,{to:"/inventory",class:"text-2xl px-12"},{default:(0,a.w5)((()=>[(0,a.Uk)("Inventory")])),_:1})])])])])])}var d={name:"MainNav"},m=n(89);const p=(0,m.Z)(d,[["render",u]]);var y=p,v={name:"App",components:{MainNav:y}};const h=(0,m.Z)(v,[["render",i]]);var x=h,f=n(2483);const b={class:"relative text-white"},g=(0,a._)("h2",{class:"text-3xl p-12"},"This is Instrumanagement",-1),w=(0,a._)("p",{class:"text-xl pl-12 text-center"}," The goal of this web application is to make the management of instruments easy. This is from the perspective of a shop owner or collector wishing to keep things in order. ",-1),_=[g,w];function k(t,e,n,r,i,l){return(0,a.wg)(),(0,a.iD)("div",b,_)}var V={name:"HomeView"};const I=(0,m.Z)(V,[["render",k]]);var C=I;function D(t,e,n,r,i,l){const s=(0,a.up)("create");return(0,a.wg)(),(0,a.j4)(s)}var O=n(7139);const j={class:"relative text-center"},S=(0,a._)("h2",{class:"text-3xl font-bold underline text-white pb-12 m-6"}," Add an Instrument to the Inventory ",-1),Z={class:"container mx-auto rounded-2xl bg-white w-2/5"},q=(0,a._)("div",{class:"text-2xl font-semibold pt-12 mb-4"},"New Instrument",-1),B=(0,a._)("label",{for:"name",class:"form-label text-gray-900 text-l mr-1"},"Name:",-1),E=(0,a._)("br",null,null,-1),T={key:0,class:"text-brand-red-1 text-md"},U=(0,a._)("label",{for:"type",class:"form-label text-gray-900 text-l mr-1"},"Type:",-1),N=(0,a._)("br",null,null,-1),W={key:0,class:"text-brand-red-1 text-md"},M=(0,a._)("label",{for:"year",class:"form-label text-gray-900 text-l mr-1"},"Year:",-1),z=(0,a._)("br",null,null,-1),P={key:0,class:"text-brand-red-1 text-md"},F=(0,a._)("label",{for:"company",class:"form-label text-gray-900 text-l mr-1"},"Company:",-1),$=(0,a._)("br",null,null,-1),H={key:0,class:"text-brand-red-1 text-md"},J=(0,a._)("label",{for:"price",class:"form-label text-gray-900 text-l mr-1"},"Price:",-1),Y=(0,a._)("br",null,null,-1),A={key:0,class:"text-brand-red-1 text-md"},G={class:"action-buttons"};function K(t,e,n,i,l,s){const o=(0,a.up)("button-component");return(0,a.wg)(),(0,a.iD)("div",j,[S,(0,a._)("div",Z,[q,(0,a._)("form",{onSubmit:e[10]||(e[10]=(0,r.iM)(((...t)=>s.submitForm&&s.submitForm(...t)),["prevent"]))},[(0,a._)("div",{class:(0,O.C_)(["mb-4",{invalid:!l.name.isValid}])},[B,E,(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":e[0]||(e[0]=t=>l.name.val=t),type:"text",class:"text-center text-xl border-black border-2 rounded h-12 w-64",onBlur:e[1]||(e[1]=t=>s.clearValidity("name"))},null,544),[[r.nr,l.name.val,void 0,{trim:!0}]]),l.name.isValid?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("p",T," Name must not be empty "))],2),(0,a._)("div",{class:(0,O.C_)(["mb-4",{invalid:!l.type.isValid}])},[U,N,(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":e[2]||(e[2]=t=>l.type.val=t),type:"text",class:"text-center text-xl border-black border-2 rounded h-12 w-64",onBlur:e[3]||(e[3]=t=>s.clearValidity("type"))},null,544),[[r.nr,l.type.val,void 0,{trim:!0}]]),l.type.isValid?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("p",W," Type must not be empty "))],2),(0,a._)("div",{class:(0,O.C_)(["mb-4",{invalid:!l.year.isValid}])},[M,z,(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":e[4]||(e[4]=t=>l.year.val=t),type:"number",min:"1900",max:"2023",class:"text-center text-xl border-black border-2 rounded h-12 w-64",onBlur:e[5]||(e[5]=t=>s.clearValidity("year"))},null,544),[[r.nr,l.year.val,void 0,{trim:!0}]]),l.year.isValid?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("p",P," Year must not be empty "))],2),(0,a._)("div",{class:(0,O.C_)(["mb-4",{invalid:!l.company.isValid}])},[F,$,(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":e[6]||(e[6]=t=>l.company.val=t),type:"text",class:"text-center text-xl border-black border-2 rounded h-12 w-64",onBlur:e[7]||(e[7]=t=>s.clearValidity("company"))},null,544),[[r.nr,l.company.val,void 0,{trim:!0}]]),l.company.isValid?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("p",H," Company must not be empty "))],2),(0,a._)("div",{class:(0,O.C_)(["mb-4",{invalid:!l.price.isValid}])},[J,Y,(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":e[8]||(e[8]=t=>l.price.val=t),type:"number",min:"0.01",max:"999999.00",step:"0.01",class:"text-center text-xl border-black border-2 rounded h-12 w-64",onBlur:e[9]||(e[9]=t=>s.clearValidity("price"))},null,544),[[r.nr,l.price.val,void 0,{trim:!0}]]),l.price.isValid?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("p",A," Price must be valid "))],2),(0,a._)("div",G,[(0,a.Wm)(o,{link:"",to:"/inventory","button-type":"secondary",text:"Go back",class:"w-28 h-12 mt-6 mb-12 mr-2 text-xl"}),(0,a.Wm)(o,{"button-type":"create",text:"Create",class:"w-28 h-12 mt-6 mb-12 ml-2 text-xl"})])],32)])])}n(7658);var R=n(5939);const L=async t=>{const e="/instruments",n=await R.Z.post(e,t);return n.data};var Q=L;function X(t,e,n,r,i,l){const s=(0,a.up)("router-link");return n.link?((0,a.wg)(),(0,a.j4)(s,{key:1,to:n.to,class:(0,O.C_)(l.buttonClass)},{default:(0,a.w5)((()=>[(0,a.Uk)((0,O.zw)(n.text),1)])),_:1},8,["to","class"])):((0,a.wg)(),(0,a.iD)("button",{key:0,class:(0,O.C_)(l.buttonClass)},(0,O.zw)(n.text),3))}var tt={props:{buttonType:{type:String,required:!1,default:"primary"},link:{type:Boolean,required:!1,default:!1},to:{type:String,required:!1,default:"/"},text:{type:String,required:!0}},computed:{buttonClass(){return{[this.buttonType]:!0}}}};const et=(0,m.Z)(tt,[["render",X],["__scopeId","data-v-612a9378"]]);var nt=et,rt=n(7750),at={name:"Create",components:{ButtonComponent:nt},data(){return{name:{val:"",isValid:!0},type:{val:"",isValid:!0},year:{val:"",isValid:!0},company:{val:"",isValid:!0},price:{val:"",isValid:!0},formIsValid:!0,errorMessage:null}},methods:{clearValidity(t){this[t].isValid=!0},validateForm(){this.formIsValid=!0,(this.name.val.length<1||this.name.val.length>35)&&(this.name.isValid=!1,this.formIsValid=!1),(this.type.val.length<1||this.type.val.length>25)&&(this.type.isValid=!1,this.formIsValid=!1),(this.year.val<1900||this.year.val>2023)&&(this.year.isValid=!1,this.formIsValid=!1),(this.company.val.length<1||this.company.val.length>25)&&(this.company.isValid=!1,this.formIsValid=!1),(this.price.val<0||this.price.val>999999)&&(this.price.isValid=!1,this.formIsValid=!1)},async newInstrument(t){await Q(t),rt.n_({category:"create instrument",message:"instrument has been created: "+JSON.stringify(t),level:"info"}),this.$router.push("/inventory")},submitForm(){if(this.validateForm(),!this.formIsValid)return void rt.n_({category:"formSubmit",message:"form has been submitted but is not valid",level:"info"});const t={name:this.name.val,type:this.type.val,year:this.year.val,company:this.company.val,price:this.price.val};this.newInstrument(t)}}};const it=(0,m.Z)(at,[["render",K]]);var lt=it,st={name:"CreateView",components:{Create:lt}};const ot=(0,m.Z)(st,[["render",D]]);var ct=ot;function ut(t,e,n,r,i,l){const s=(0,a.up)("inventory");return(0,a.wg)(),(0,a.j4)(s)}const dt={class:"flex justify-end"},mt=(0,a._)("div",{class:"flex flex-col items-center text-center h-32"},[(0,a._)("h1",{class:"text-brand-cream-1 text-4xl mt-6 mb-16"}," Instrument Inventory ")],-1),pt={key:0},yt={class:"px-5 py-5"},vt={class:"grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-10 mr-7"},ht={key:1},xt=(0,a._)("h3",{class:"text-brand-cream-1"}," Error occurred or No instruments were found ",-1),ft=[xt];function bt(t,e,n,r,i,l){const s=(0,a.up)("Button"),o=(0,a.up)("card");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a._)("div",dt,[(0,a.Wm)(s,{text:"Create","button-type":"create",link:"",to:"/create",class:"my-3 mx-3 text-3xl"})]),mt,i.inventory.length>0?((0,a.wg)(),(0,a.iD)("div",pt,[(0,a._)("div",yt,[(0,a._)("div",vt,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(i.inventory,(t=>((0,a.wg)(),(0,a.j4)(o,{key:t._id,instrument:t,onEmitDelete:e[0]||(e[0]=t=>l.deleteInstrument(t))},null,8,["instrument"])))),128))])])])):0===i.inventory.length?((0,a.wg)(),(0,a.iD)("div",ht,ft)):(0,a.kq)("",!0)])}const gt={class:"flex justify-center"},wt={class:"block rounded-2xl shadow-xl bg-white w-4/5"},_t={class:"p-6 text-center"},kt={class:"m-4"},Vt={class:"text-3xl font-bold underline pb-6"},It={class:"text-xl"},Ct={class:"text-xl"},Dt={class:"text-xl italic"},Ot={class:"text-xl"},jt={class:"actions"};function St(t,e,n,i,l,s){const o=(0,a.up)("Button");return(0,a.wg)(),(0,a.iD)("div",gt,[(0,a._)("div",wt,[(0,a._)("div",_t,[(0,a._)("div",kt,[(0,a._)("h2",Vt,(0,O.zw)(n.instrument.name),1),(0,a._)("h3",It,(0,O.zw)(n.instrument.type),1),(0,a._)("h4",Ct,(0,O.zw)(n.instrument.year),1),(0,a._)("h4",Dt,(0,O.zw)(n.instrument.company),1),(0,a._)("h4",Ot,"$"+(0,O.zw)(n.instrument.price),1)]),(0,a._)("div",jt,[(0,a.Wm)(o,{text:"Delete","button-type":"delete",class:"m-2 w-32 text-xl items-center text-center",onClick:(0,r.iM)(s.emitDelete,["prevent"])},null,8,["onClick"])])])])])}var Zt={name:"Card",components:{Button:nt},props:{instrument:{type:Object,required:!0}},emits:["emit-delete"],data(){return{}},methods:{emitDelete(){console.log("emitting delete id: "+this.instrument._id),this.$emit("emit-delete",this.instrument._id)}}};const qt=(0,m.Z)(Zt,[["render",St]]);var Bt=qt;const Et=async()=>{const t="/instruments",e=await R.Z.get(t);return e.data};var Tt=Et;const Ut=async t=>{const e=`/instruments/${t}`,n=await R.Z["delete"](e);return n.data};var Nt=Ut,Wt={name:"Inventory",components:{Card:Bt,Button:nt},data(){return{inventory:[]}},async mounted(){this.inventory=await Tt(),rt.n_({category:"inventory",message:"got inventory"+JSON.stringify(this.inventory),level:"info"}),0===this.inventory.length&&rt.n_({category:"inventory",message:"there are no items in the inventory or an error has occurred"+JSON.stringify(this.inventory),level:"info"})},methods:{async deleteInstrument(t){const e=t,n=await Nt(e);n&&(this.inventory=await Tt()),rt.n_({category:"delete instrument",message:"instrument has been deleted that had an ID of: "+t,level:"info"})},throwError(){throw rt.n_({category:"error",message:"error button clicked",level:"error"}),new Error("Sentry Error")}}};const Mt=(0,m.Z)(Wt,[["render",bt]]);var zt=Mt,Pt={name:"InventoryView",components:{Inventory:zt}};const Ft=(0,m.Z)(Pt,[["render",ut]]);var $t=Ft;const Ht=[{path:"/",name:"Home",component:C},{path:"/create",name:"Create",component:ct},{path:"/inventory",name:"Inventory",component:$t}],Jt=(0,f.p7)({history:(0,f.PO)("/"),routes:Ht});var Yt=Jt,At=n(4632),Gt=n(9312),Kt=n(6763);const Rt=(0,r.ri)(x);Rt.use(Yt),At.S({app:Rt,dsn:"https://ab9cac46d1654e888a6617eac694c628@o4504958259036160.ingest.sentry.io/4504958260936704",integrations:[new Gt.gE({routingInstrumentation:Kt.x(Yt),tracePropagationTargets:["localhost","https://arin-nicole-clc.herokuapp.com/",/^\//]})],tracesSampleRate:1}),Rt.mount("#app")}},e={};function n(r){var a=e[r];if(void 0!==a)return a.exports;var i=e[r]={id:r,loaded:!1,exports:{}};return t[r](i,i.exports,n),i.loaded=!0,i.exports}n.m=t,function(){var t=[];n.O=function(e,r,a,i){if(!r){var l=1/0;for(u=0;u<t.length;u++){r=t[u][0],a=t[u][1],i=t[u][2];for(var s=!0,o=0;o<r.length;o++)(!1&i||l>=i)&&Object.keys(n.O).every((function(t){return n.O[t](r[o])}))?r.splice(o--,1):(s=!1,i<l&&(l=i));if(s){t.splice(u--,1);var c=a();void 0!==c&&(e=c)}}return e}i=i||0;for(var u=t.length;u>0&&t[u-1][2]>i;u--)t[u]=t[u-1];t[u]=[r,a,i]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.hmd=function(t){return t=Object.create(t),t.children||(t.children=[]),Object.defineProperty(t,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+t.id)}}),t}}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,r){var a,i,l=r[0],s=r[1],o=r[2],c=0;if(l.some((function(e){return 0!==t[e]}))){for(a in s)n.o(s,a)&&(n.m[a]=s[a]);if(o)var u=o(n)}for(e&&e(r);c<l.length;c++)i=l[c],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(u)},r=self["webpackChunkcst323clc"]=self["webpackChunkcst323clc"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(5620)}));r=n.O(r)})();
//# sourceMappingURL=app.16d99af5.js.map