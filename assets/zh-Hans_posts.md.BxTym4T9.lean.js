import{_ as d}from"./chunks/theme.Bs6l4icf.js";import{d as i,o as n,h as r,l as s,F as c,s as u,j as m,b as p,p as f,q as l,e as h}from"./chunks/framework.CRAi6p8d.js";const z=JSON.parse('[{"frontmatter":{"title":"2023年4月理事会补选结果公示","date":"2023-04-23T00:00:00.000Z"},"url":"/zh-Hans/posts/board_election_202304"},{"frontmatter":{"title":"2024 届理事会选举结果公示","date":"2023-12-19T01:00:00.000Z"},"url":"/zh-Hans/posts/board_election_202312"},{"frontmatter":{"title":"理事会关于跨性别学术小组的决议","date":"2024-07-21T04:59:00.000Z"},"url":"/zh-Hans/posts/board_resolution_2024_tsui_no_sora"},{"frontmatter":{"title":"One Among Us 社群公约","date":"2023-08-18T14:00:00.000Z"},"url":"/zh-Hans/posts/community-guidelines"},{"frontmatter":{"title":"会旗与会歌","date":"2023-06-05T14:00:00.000Z"},"url":"/zh-Hans/posts/flag_anthem"},{"frontmatter":{"layout":"page"},"url":"/zh-Hans/posts/"},{"frontmatter":{"title":"务虚之言：One Among Us 是怎样的组织？","date":"2023-12-19T15:00:00.000Z"},"url":"/zh-Hans/posts/mandate"},{"frontmatter":{"title":"无题","date":"2024-07-07T03:00:00.000Z"},"url":"/zh-Hans/posts/statement-20240706"},{"frontmatter":{"title":"关于巴勒斯坦解放和近期事件的立场声明","date":"2024-06-17T14:00:00.000Z"},"url":"/zh-Hans/posts/statement-simone"},{"frontmatter":{"title":"我们对近期长毛象「翻译/精选」账号相关争议的态度","date":"2023-09-02T03:59:00.000Z"},"url":"/zh-Hans/posts/statement_xiyu"}]'),g={class:"main"},x={class:"vp-doc mt-4"},H={class:"flex flex-col sm:flex-row"},T={class:"ml-4!"},D=i({__name:"index",setup(_){const o=z.filter(({frontmatter:e})=>e.title).sort((e,a)=>{const t=new Date(e.frontmatter.date);return new Date(a.frontmatter.date).getTime()-t.getTime()}).map(({url:e,frontmatter:{date:a,title:t}})=>({url:e,date:a,title:t}));return(e,a)=>(n(),r("main",g,[s("article",x,[s("div",H,[s("ul",T,[(n(!0),r(c,null,u(h(o),t=>(n(),r("li",{key:t.url,class:"list-none p-0 m-0"},[m(d,{href:t.url,class:"text-xl"},{default:p(()=>[f(l(t.title),1)]),_:2},1032,["href"]),s("p",null,l(new Date(t.date).toLocaleDateString()),1)]))),128))])])])]))}}),N=JSON.parse('{"title":"","description":"","frontmatter":{"layout":"page"},"headers":[],"relativePath":"zh-Hans/posts.md","filePath":"zh-Hans/posts/index.md"}'),Z={name:"zh-Hans/posts.md"},v=i({...Z,setup(_){return(o,e)=>(n(),r("div",null,[m(D)]))}});export{N as __pageData,v as default};