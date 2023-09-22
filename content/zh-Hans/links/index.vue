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
  'One Among Us Projects': [
    {
      title: 'One Among Us',
      details: '跨性别者及其盟友的纪念网站',
      link: 'https://one-among.us',
      icon: { src: 'https://www.one-among.us/favicon-large.png', height: '15px' },
    },
    {
      title: 'Trans in Academia! Bulletin',
      details:
        'A community for diasporic Chinese transgender and gender non-conforming people who are pursuing their academic goals or careers.',
      link: 'https://oau.edu.kg',
      icon: '<img src="https://oau.edu.kg/logo.jpg" style="padding:0px;mix-blend-mode:multiply;filter:brightness(110%);clip-path:polygon(0% 0%, 90% 0%, 90% 80%, 0% 80%);position:relative;top:4px;">',
    },
    {
      title: 'Trans in Academia! Broadcast',
      details:
        'Join the Telegram channel of Trans in Academia! and view its discussion (mainly in Chinese).',
      link: 'https://t.me/transacademicorg',
      icon: '<img src="https://oau.edu.kg/logo.jpg" style="padding:0px;mix-blend-mode:multiply;filter:brightness(110%);clip-path:polygon(0% 0%, 90% 0%, 90% 80%, 0% 80%);position:relative;top:4px;">',
    },
    {
      title: 'Transgender University Guidance',
      details:
        'A collective effort aimed at providing valuable resources and support for transgender individuals pursuing higher education.',
      link: 'https://uniguide.transacademic.org/',
      icon: '<img src="https://oau.edu.kg/logo.jpg" style="padding:0px;mix-blend-mode:multiply;filter:brightness(110%);clip-path:polygon(0% 0%, 90% 0%, 90% 80%, 0% 80%);position:relative;top:4px;">',
    },
    {
      title: 'OAU Greater Toronto Area Gathering',
      details: 'Join the Telegram group via this broadcast.',
      link: 'https://t.me/transacademicorg/775',
    },
  ],
  Friends: [
    {
      title: 'Project trans',
      details:
        'Project Trans (formerly known as MtF.wiki) aims to better maintain multiple projects including MtF wiki, FtM wiki and more.',
      link: 'https://about.project-trans.org/en/',
      icon: { src: 'https://about.project-trans.org/en/home/logo.png', height: '15px' },
    },
    {
      title: '2345.LGBT',
      details: 'A transgender navigation site owned and maintained by Project Trans.',
      link: 'https://2345.lgbt/en/',
      icon: { src: 'https://2345.lgbt/brand.svg', height: '15px' },
    },
  ],
};
</script>
