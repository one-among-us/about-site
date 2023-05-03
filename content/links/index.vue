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
  'Producted by One Among Us': [
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
      icon: { src: 'https://oau.edu.kg/logo.jpg', height: '15px' },
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
      title: 'Twitter Translate',
      details: '',
      link: 'https://linktr.ee/twitter_translate',
      icon: {
        src: 'https://d1fdloi71mui9q.cloudfront.net/io9nxIiTqdVNDgW66Kgn_mn313K6byJCYTZI6',
        height: '15px',
      },
    },
  ],
};
</script>
