import{_ as d}from"./chunks/theme.DWmYPstE.js";import{d as c,o as r,c as n,l as s,F as m,s as p,a as i,h as u,q as l,u as f,p as h}from"./chunks/framework.JK79ihrF.js";const x=JSON.parse('[{"frontmatter":{"title":"社旗と社歌","date":"2023-06-05T14:00:00.000Z"},"url":"/ja/posts/flag_anthem"},{"frontmatter":{"layout":"page"},"url":"/ja/posts/"}]'),g={class:"main"},D={class:"vp-doc mt-4"},j={class:"flex flex-col sm:flex-row"},w={class:"ml-4!"},N=c({__name:"index",setup(_){const o=x.filter(({frontmatter:e})=>e.title).sort((e,a)=>{const t=new Date(e.frontmatter.date);return new Date(a.frontmatter.date).getTime()-t.getTime()}).map(({url:e,frontmatter:{date:a,title:t}})=>({url:e,date:a,title:t}));return(e,a)=>(r(),n("main",g,[s("article",D,[s("div",j,[s("ul",w,[(r(!0),n(m,null,p(f(o),t=>(r(),n("li",{key:t.url,class:"list-none p-0 m-0"},[i(d,{href:t.url,class:"text-xl"},{default:u(()=>[h(l(t.title),1)]),_:2},1032,["href"]),s("p",null,l(new Date(t.date).toLocaleDateString()),1)]))),128))])])])]))}}),k=JSON.parse('{"title":"","description":"","frontmatter":{"layout":"page"},"headers":[],"relativePath":"ja/posts/index.md","filePath":"ja/posts/index.md"}'),v={name:"ja/posts/index.md"},B=c({...v,setup(_){return(o,e)=>(r(),n("div",null,[i(N)]))}});export{k as __pageData,B as default};
