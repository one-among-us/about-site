<template>
  <main class="xl:max-w-[980px] max-w-7/8 mx-auto">
    <section v-for="[title, work] in Object.entries(works)" :key="title">
      <h1 class="text-[1.2rem] text-gray-500 mt-10">
        {{ title }}
      </h1>
      <VPFeatures :features="work" class="my-6 px-0!" />
    </section>
  </main>
</template>

<script setup lang="ts">
import type { Feature } from 'vitepress/dist/client/theme-default/components/VPFeatures.vue';
import VPFeatures from 'vitepress/dist/client/theme-default/components/VPFeatures.vue';

interface MyWorks {
  // index string , value Feature
  [index: string]: Feature[];
}

const works: MyWorks = {
  '项目': [
    {
      title: '那些秋叶 One Among Us',
      details: '去世跨性别者及友跨人士的纪念网站。',
      link: 'https://one-among.us',
      icon: { src: 'https://www.one-among.us/favicon-large.png' },
    },
    {
      title: 'Trans in Academia! 跨性别学术小组',
      details:
        '分享与跨性别有关的学术动态，帮助跨性别者及友跨人士求学、进修、工作，以跨性别学术人的视角发声。',
      link: 'https://oau.edu.kg',
      icon: { src: 'https://oau.edu.kg/TIA_LogoD@3x.png' },
    },
    {
      title: '跨性别选校手册',
      details:
        '共同编辑的资料库，为跨性别者求学海内外提供信息。',
      link: 'https://uniguide.transacademic.org/zh-hans/',
      icon: '<img src="https://oau.edu.kg/logo.png" style="filter:brightness(90%);">',
    },
  ],
  '社交媒体': [
    {
      title: 'Telegram（电报）频道',
      details:
        '跨性别学术小组 Telegram 频道（含附属讨论群）。',
      link: 'https://t.me/transacademicorg',
    },
        {
      title: 'Instagram',
      details:
        '我们的 Instagram 账号，以多伦多在地内容为主。',
      link: 'https://instagram.com/oneamongus_ca',
    },
    {
      title: 'Fediverse 邦联宇宙（Pleroma）',
      details:
        '架设在 kazv.moe 飞升星上的跨性别学术广播。Fediverse 内各网站（Pleroma/Mastodon/Misskey 等）皆可互通。',
      link: 'https://kazv.moe/users/tia',
    },
    {
      title: 'X（以前叫 Twitter）',
      details:
        '我们谴责 X 对平台泛滥反跨内容的纵容。',
      link: 'https://twitter.com/oneamong_us',
    },
  ],
  '在地社群': [
    {
      title: 'OAU 大多伦多地区跨性别和性别多元人士社群（中文）',
      details: '活动/医疗资源/出二手/生活分享/约饭/RLE/非在籍移民互助。点击链接查阅加群方式。',
      link: 'https://t.me/transacademicorg/775',
    },
  ],
  '朋友们': [
    {
      title: '跨儿计划 Project trans',
      details:
        'MtF.wiki, FtM.wiki, RLE.wiki 等诸多知识站的运营方。',
      link: 'https://about.project-trans.org/zh-hans/',
      icon: { src: 'https://about.project-trans.org/zh-hans/home/logo.png', height: '15px' },
    },
    {
      title: '2345.LGBT 跨性别导航',
      details: '跨性别相关网站集结。',
      link: 'https://2345.lgbt/zh-cn/',
      icon: { src: 'https://2345.lgbt/brand.svg', height: '15px' },
    },
  ],
};
</script>
