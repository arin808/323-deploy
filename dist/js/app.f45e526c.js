(function(){"use strict";var t={5525:function(t,e,n){var r=n(9242),a=n(3396);function l(t,e,n,r,l,i){const s=(0,a.up)("main-nav"),o=(0,a.up)("router-view");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(s),(0,a.Wm)(o)])}const i={class:"w-full h-16 text-sm"},s={class:"fixed top-0 left-0 w-full h-16 bg-brand-teal-1"},o={class:"flex h-full"},c={class:"flex h-full items-center pl-5 text-brand-cream-1 text-base justify-between"};function u(t,e,n,r,l,u){const d=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("header",i,[(0,a._)("div",s,[(0,a._)("div",o,[(0,a._)("ul",c,[(0,a._)("li",null,[(0,a.Wm)(d,{to:"/",class:"text-2xl px-12"},{default:(0,a.w5)((()=>[(0,a.Uk)("Instrumanagement")])),_:1})]),(0,a._)("li",null,[(0,a.Wm)(d,{to:"/create",class:"text-2xl px-12"},{default:(0,a.w5)((()=>[(0,a.Uk)("Create")])),_:1})]),(0,a._)("li",null,[(0,a.Wm)(d,{to:"/inventory",class:"text-2xl px-12"},{default:(0,a.w5)((()=>[(0,a.Uk)("Inventory")])),_:1})])])])])])}var d={name:"MainNav"},m=n(89);const p=(0,m.Z)(d,[["render",u]]);var v=p,y={name:"App",components:{MainNav:v}};const x=(0,m.Z)(y,[["render",l]]);var h=x,f=n(2483);const b={class:"relative text-white"},w=(0,a._)("h2",{class:"text-3xl p-12"},"This is Instrumanagement",-1),_=(0,a._)("p",{class:"text-xl pl-12 text-center"}," The goal of this web application is to make the management of instruments easy. This is from the perspective of a shop owner or collector wishing to keep things in order. ",-1),g=[w,_];function V(t,e,n,r,l,i){return(0,a.wg)(),(0,a.iD)("div",b,g)}var k={name:"HomeView"};const C=(0,m.Z)(k,[["render",V]]);var I=C;function D(t,e,n,r,l,i){const s=(0,a.up)("create");return(0,a.wg)(),(0,a.j4)(s)}var j=n(7139);const O={class:"relative text-center"},Z=(0,a._)("h2",{class:"text-3xl font-bold underline text-white pb-12 m-6"}," Add an Instrument to the Inventory ",-1),q={class:"container mx-auto rounded-2xl bg-white w-2/5"},B=(0,a._)("div",{class:"text-2xl font-semibold pt-12 mb-4"},"New Instrument",-1),T=(0,a._)("label",{for:"name",class:"form-label text-gray-900 text-l mr-1"},"Name:",-1),U=(0,a._)("br",null,null,-1),W={key:0,class:"text-brand-red-1 text-md"},z=(0,a._)("label",{for:"type",class:"form-label text-gray-900 text-l mr-1"},"Type:",-1),F=(0,a._)("br",null,null,-1),M={key:0,class:"text-brand-red-1 text-md"},N=(0,a._)("label",{for:"year",class:"form-label text-gray-900 text-l mr-1"},"Year:",-1),P=(0,a._)("br",null,null,-1),S={key:0,class:"text-brand-red-1 text-md"},$=(0,a._)("label",{for:"company",class:"form-label text-gray-900 text-l mr-1"},"Company:",-1),E=(0,a._)("br",null,null,-1),H={key:0,class:"text-brand-red-1 text-md"},Y=(0,a._)("label",{for:"price",class:"form-label text-gray-900 text-l mr-1"},"Price:",-1),A=(0,a._)("br",null,null,-1),G={key:0,class:"text-brand-red-1 text-md"},K={class:"action-buttons"};function J(t,e,n,l,i,s){const o=(0,a.up)("button-component");return(0,a.wg)(),(0,a.iD)("div",O,[Z,(0,a._)("div",q,[B,(0,a._)("form",{onSubmit:e[10]||(e[10]=(0,r.iM)(((...t)=>s.submitForm&&s.submitForm(...t)),["prevent"]))},[(0,a._)("div",{class:(0,j.C_)(["mb-4",{invalid:!i.name.isValid}])},[T,U,(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":e[0]||(e[0]=t=>i.name.val=t),type:"text",class:"text-center text-xl border-black border-2 rounded h-12 w-64",onBlur:e[1]||(e[1]=t=>s.clearValidity("name"))},null,544),[[r.nr,i.name.val,void 0,{trim:!0}]]),i.name.isValid?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("p",W," Name must not be empty "))],2),(0,a._)("div",{class:(0,j.C_)(["mb-4",{invalid:!i.type.isValid}])},[z,F,(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":e[2]||(e[2]=t=>i.type.val=t),type:"text",class:"text-center text-xl border-black border-2 rounded h-12 w-64",onBlur:e[3]||(e[3]=t=>s.clearValidity("type"))},null,544),[[r.nr,i.type.val,void 0,{trim:!0}]]),i.type.isValid?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("p",M," Type must not be empty "))],2),(0,a._)("div",{class:(0,j.C_)(["mb-4",{invalid:!i.year.isValid}])},[N,P,(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":e[4]||(e[4]=t=>i.year.val=t),type:"number",min:"1900",max:"2023",class:"text-center text-xl border-black border-2 rounded h-12 w-64",onBlur:e[5]||(e[5]=t=>s.clearValidity("year"))},null,544),[[r.nr,i.year.val,void 0,{trim:!0}]]),i.year.isValid?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("p",S," Year must not be empty "))],2),(0,a._)("div",{class:(0,j.C_)(["mb-4",{invalid:!i.company.isValid}])},[$,E,(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":e[6]||(e[6]=t=>i.company.val=t),type:"text",class:"text-center text-xl border-black border-2 rounded h-12 w-64",onBlur:e[7]||(e[7]=t=>s.clearValidity("company"))},null,544),[[r.nr,i.company.val,void 0,{trim:!0}]]),i.company.isValid?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("p",H," Company must not be empty "))],2),(0,a._)("div",{class:(0,j.C_)(["mb-4",{invalid:!i.price.isValid}])},[Y,A,(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":e[8]||(e[8]=t=>i.price.val=t),type:"number",min:"0.01",max:"999999.00",step:"0.01",class:"text-center text-xl border-black border-2 rounded h-12 w-64",onBlur:e[9]||(e[9]=t=>s.clearValidity("price"))},null,544),[[r.nr,i.price.val,void 0,{trim:!0}]]),i.price.isValid?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("p",G," Price must be valid "))],2),(0,a._)("div",K,[(0,a.Wm)(o,{link:"",to:"/inventory","button-type":"secondary",text:"Go back",class:"w-28 h-12 mt-6 mb-12 mr-2 text-xl"}),(0,a.Wm)(o,{"button-type":"create",text:"Create",class:"w-28 h-12 mt-6 mb-12 ml-2 text-xl"})])],32)])])}n(7658);var L=n(5939);const Q=async t=>{const e="/instruments",n=await L.Z.post(e,t);return console.log(n.data),n.data};var R=Q;function X(t,e,n,r,l,i){const s=(0,a.up)("router-link");return n.link?((0,a.wg)(),(0,a.j4)(s,{key:1,to:n.to,class:(0,j.C_)(i.buttonClass)},{default:(0,a.w5)((()=>[(0,a.Uk)((0,j.zw)(n.text),1)])),_:1},8,["to","class"])):((0,a.wg)(),(0,a.iD)("button",{key:0,class:(0,j.C_)(i.buttonClass)},(0,j.zw)(n.text),3))}var tt={props:{buttonType:{type:String,required:!1,default:"primary"},link:{type:Boolean,required:!1,default:!1},to:{type:String,required:!1,default:"/"},text:{type:String,required:!0}},computed:{buttonClass(){return{[this.buttonType]:!0}}}};const et=(0,m.Z)(tt,[["render",X],["__scopeId","data-v-612a9378"]]);var nt=et,rt={name:"Create",components:{ButtonComponent:nt},data(){return{name:{val:"",isValid:!0},type:{val:"",isValid:!0},year:{val:"",isValid:!0},company:{val:"",isValid:!0},price:{val:"",isValid:!0},formIsValid:!0,errorMessage:null}},methods:{clearValidity(t){this[t].isValid=!0},validateForm(){this.formIsValid=!0,(this.name.val.length<1||this.name.val.length>35)&&(this.name.isValid=!1,this.formIsValid=!1),(this.type.val.length<1||this.type.val.length>25)&&(this.type.isValid=!1,this.formIsValid=!1),(this.year.val<1900||this.year.val>2023)&&(this.year.isValid=!1,this.formIsValid=!1),(this.company.val.length<1||this.company.val.length>25)&&(this.company.isValid=!1,this.formIsValid=!1),(this.price.val<0||this.price.val>999999)&&(this.price.isValid=!1,this.formIsValid=!1)},async newInstrument(t){await R(t),this.$router.push("/inventory")},submitForm(){if(this.validateForm(),!this.formIsValid)return;const t={name:this.name.val,type:this.type.val,year:this.year.val,company:this.company.val,price:this.price.val};this.newInstrument(t)}}};const at=(0,m.Z)(rt,[["render",J]]);var lt=at,it={name:"CreateView",components:{Create:lt}};const st=(0,m.Z)(it,[["render",D]]);var ot=st;function ct(t,e,n,r,l,i){const s=(0,a.up)("inventory");return(0,a.wg)(),(0,a.j4)(s)}const ut={class:"flex justify-end"},dt=(0,a._)("div",{class:"flex flex-col items-center text-center h-32"},[(0,a._)("h1",{class:"text-brand-cream-1 text-4xl mt-6 mb-16 fixed"}," Instrument Inventory ")],-1),mt={key:0},pt={class:"grid gap-y-20 grid-cols-4 justify-center items-center relative"},vt={key:1},yt=(0,a._)("h3",{class:"text-brand-cream-1"}," Error occurred or No instruments were found ",-1),xt=[yt];function ht(t,e,n,r,l,i){const s=(0,a.up)("Button"),o=(0,a.up)("card");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a._)("div",ut,[(0,a.Wm)(s,{text:"Create","button-type":"create",link:"",to:"/create",class:"my-3 mx-3 text-3xl fixed"})]),dt,l.inventory.length>0?((0,a.wg)(),(0,a.iD)("div",mt,[(0,a._)("div",pt,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(l.inventory,(t=>((0,a.wg)(),(0,a.j4)(o,{key:t._id,instrument:t,onEmitDelete:e[0]||(e[0]=t=>i.deleteInstrument(t))},null,8,["instrument"])))),128))])])):0===l.inventory.length?((0,a.wg)(),(0,a.iD)("div",vt,xt)):(0,a.kq)("",!0)])}const ft={class:"flex justify-center"},bt={class:"block rounded-2xl shadow-xl bg-white w-4/5"},wt={class:"p-6 text-center"},_t={class:"m-4"},gt={class:"text-3xl font-bold underline pb-6"},Vt={class:"text-xl"},kt={class:"text-xl"},Ct={class:"text-xl italic"},It={class:"text-xl"},Dt={class:"actions"};function jt(t,e,n,l,i,s){const o=(0,a.up)("Button");return(0,a.wg)(),(0,a.iD)("div",ft,[(0,a._)("div",bt,[(0,a._)("div",wt,[(0,a._)("div",_t,[(0,a._)("h2",gt,(0,j.zw)(n.instrument.name),1),(0,a._)("h3",Vt,(0,j.zw)(n.instrument.type),1),(0,a._)("h4",kt,(0,j.zw)(n.instrument.year),1),(0,a._)("h4",Ct,(0,j.zw)(n.instrument.company),1),(0,a._)("h4",It,"$"+(0,j.zw)(n.instrument.price),1)]),(0,a._)("div",Dt,[(0,a.Wm)(o,{text:"Delete","button-type":"delete",class:"m-2 w-64 text-xl",onClick:(0,r.iM)(s.emitDelete,["prevent"])},null,8,["onClick"])])])])])}var Ot={name:"Card",components:{Button:nt},props:{instrument:{type:Object,required:!0}},emits:["emit-delete"],data(){return{}},methods:{emitDelete(){console.log("emitting delete id: "+this.instrument._id),this.$emit("emit-delete",this.instrument._id)}}};const Zt=(0,m.Z)(Ot,[["render",jt]]);var qt=Zt;const Bt=async()=>{const t="/instruments",e=await L.Z.get(t);return console.log(e.data),e.data};var Tt=Bt;const Ut=async t=>{const e=`/instruments/${t}`,n=await L.Z["delete"](e);return console.log(n.data),n.data};var Wt=Ut,zt={name:"Inventory",components:{Card:qt,Button:nt},data(){return{inventory:[]}},async mounted(){this.inventory=await Tt()},methods:{async deleteInstrument(t){const e=t,n=await Wt(e);n&&(this.inventory=await Tt())}}};const Ft=(0,m.Z)(zt,[["render",ht]]);var Mt=Ft,Nt={name:"InventoryView",components:{Inventory:Mt}};const Pt=(0,m.Z)(Nt,[["render",ct]]);var St=Pt;const $t=[{path:"/",name:"Home",component:I},{path:"/create",name:"Create",component:ot},{path:"/inventory",name:"Inventory",component:St}],Et=(0,f.p7)({history:(0,f.PO)("/"),routes:$t});var Ht=Et;(0,r.ri)(h).use(Ht).mount("#app")}},e={};function n(r){var a=e[r];if(void 0!==a)return a.exports;var l=e[r]={exports:{}};return t[r](l,l.exports,n),l.exports}n.m=t,function(){var t=[];n.O=function(e,r,a,l){if(!r){var i=1/0;for(u=0;u<t.length;u++){r=t[u][0],a=t[u][1],l=t[u][2];for(var s=!0,o=0;o<r.length;o++)(!1&l||i>=l)&&Object.keys(n.O).every((function(t){return n.O[t](r[o])}))?r.splice(o--,1):(s=!1,l<i&&(i=l));if(s){t.splice(u--,1);var c=a();void 0!==c&&(e=c)}}return e}l=l||0;for(var u=t.length;u>0&&t[u-1][2]>l;u--)t[u]=t[u-1];t[u]=[r,a,l]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,r){var a,l,i=r[0],s=r[1],o=r[2],c=0;if(i.some((function(e){return 0!==t[e]}))){for(a in s)n.o(s,a)&&(n.m[a]=s[a]);if(o)var u=o(n)}for(e&&e(r);c<i.length;c++)l=i[c],n.o(t,l)&&t[l]&&t[l][0](),t[l]=0;return n.O(u)},r=self["webpackChunkcst323clc"]=self["webpackChunkcst323clc"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(5525)}));r=n.O(r)})();
//# sourceMappingURL=app.f45e526c.js.map