import{h as u,o,b as a,l as p,k as l,t as c,m as f,p as m,r as x,q as b,s as y,F as h,v as g,u as k,c as v}from"./entry.709b340c.js";const w={key:0,class:"text-[30px] text-black font-bold"},B={class:"text-[30px] text-black font-bold"},S={class:"text-[16px] text-black"},C=u({__name:"Post",props:{title:{type:String,required:!0},body:{type:String,required:!0},featured:{type:Boolean}},setup(e){return(t,r)=>(o(),a("div",{class:f(["p-8 mt-5 w-fit rounded-lg ml-5 border-blue-500 border-2 md:border-red-500 shadow-2xl",{"!border-yellow-400":e.featured}])},[e.featured?(o(),a("p",w,"this is a featured post")):p("",!0),l("p",B,c(e.title),1),l("p",S,c(e.body),1)],2))}}),P=()=>{const e=m(),t=x();async function r(){const{data:n,error:s}=await e.from("Posts").select();if(s)throw s;console.log(n),console.log(s),t.value=n}return b(()=>{r()}),{result:t}},q={class:"flex justify-start"},F=u({__name:"index",setup(e){y();const{result:t}=P();return(r,n)=>{const s=C;return o(),a("div",q,[(o(!0),a(h,null,g(k(t),({title:d,body:i,featured:_})=>(o(),v(s,{title:d,body:i,featured:_},null,8,["title","body","featured"]))),256))])}}});export{F as default};