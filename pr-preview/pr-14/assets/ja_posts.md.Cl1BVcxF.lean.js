import{_ as m}from"./chunks/theme.UL5Z_O_T.js";import{d as c,o as r,h as n,l as s,F as d,s as p,j as i,b as f,p as u,q as l,e as h}from"./chunks/framework.DZDWiKa2.js";const x=JSON.parse('[{"frontmatter":{"title":"社旗と社歌","date":"2023-06-05T14:00:00.000Z"},"url":"/ja/posts/flag_anthem"},{"frontmatter":{"layout":"page"},"url":"/ja/posts/"}]'),g={class:"main"},D={class:"vp-doc mt-4"},j={class:"flex flex-col sm:flex-row"},w={class:"ml-4!"},N=c({__name:"index",setup(_){const o=x.filter(({frontmatter:e})=>e.title).sort((e,a)=>{const t=new Date(e.frontmatter.date);return new Date(a.frontmatter.date).getTime()-t.getTime()}).map(({url:e,frontmatter:{date:a,title:t}})=>({url:e,date:a,title:t}));return(e,a)=>(r(),n("main",g,[s("article",D,[s("div",j,[s("ul",w,[(r(!0),n(d,null,p(h(o),t=>(r(),n("li",{key:t.url,class:"list-none p-0 m-0"},[i(m,{href:t.url,class:"text-xl"},{default:f(()=>[u(l(t.title),1)]),_:2},1032,["href"]),s("p",null,l(new Date(t.date).toLocaleDateString()),1)]))),128))])])])]))}}),b=JSON.parse('{"title":"","description":"","frontmatter":{"layout":"page"},"headers":[],"relativePath":"ja/posts.md","filePath":"ja/posts/index.md"}'),v={name:"ja/posts.md"},k=c({...v,setup(_){return(o,e)=>(r(),n("div",null,[i(N)]))}});export{b as __pageData,k as default};
