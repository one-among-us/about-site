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
      details:
        'A memorial website dedicated to transgender individuals and their allies who had passed away.',
      link: 'https://one-among.us',
      icon: { src: 'https://www.one-among.us/favicon-large.png', height: '15px' },
    },
    {
      title: 'Trans in Academia!',
      details:
        'A community for diasporic Chinese transgender and gender non-conforming people who are pursuing their academic goals or careers.',
      link: 'https://oau.edu.kg',
      icon: '<img src="https://oau.edu.kg/logo.jpg" style="padding:0px;mix-blend-mode:multiply;filter:brightness(110%);clip-path:polygon(0% 0%, 90% 0%, 90% 80%, 0% 80%);position:relative;top:4px;">',
    },
    {
      title: 'Transgender University Guidance',
      details:
        'A collective effort aimed at providing valuable resources and support for transgender individuals pursuing higher education.',
      link: 'https://uniguide.transacademic.org/',
      icon: '<img src="https://oau.edu.kg/logo.jpg" style="padding:0px;mix-blend-mode:multiply;filter:brightness(110%);clip-path:polygon(0% 0%, 90% 0%, 90% 80%, 0% 80%);position:relative;top:4px;">',
    },
  ],
  Friends: [
    {
      title: 'Project trans',
      details:
        'Project Trans (formerly known as MtF.wiki) aims to better maintain multiple projects including MtF wiki, FtM wiki and more.',
      link: 'https://about.project-trans.org/en/',
      icon: { src: 'https://about.project-trans.org/en/home/en.png', height: '15px' },
    },
    {
      title: 'TranslateCN',
      details: 'TranslateCN commits to translating a selection of quality, diversed news and posts into the Chinese world.',
      link: 'https://linktr.ee/twitter_translate',
      icon: '<img src="https://d1fdloi71mui9q.cloudfront.net/io9nxIiTqdVNDgW66Kgn_mn313K6byJCYTZI6" style="border-radius:9999px">'
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
