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
      icon: { src: 'https://www.one-among.us/favicon-large.png' },
    },
    {
      title: 'Trans in Academia!',
      details:
        'A community for diasporic Chinese transgender and gender non-conforming people who are pursuing their academic goals or careers.',
      link: 'https://oau.edu.kg',
      icon: { src: 'https://oau.edu.kg/TIA_LogoD@3x.png' },
    },
    {
      title: 'Transgender University Guidance',
      details:
        'A collective effort aimed at providing valuable resources and support for transgender individuals pursuing higher education.',
      link: 'https://uniguide.transacademic.org/',
      icon: '<img src="https://oau.edu.kg/logo.png" style="filter:brightness(90%);">',
    },
  ],
  'Social Media': [
    {
      title: 'Telegram Channel & Group',
      details:
        'Trans in Academia! Broadcast with discussion group (mainly in Chinese).',
      link: 'https://t.me/transacademicorg',
    },
    {
      title: 'Instagram',
      details:
        'Instagram account for One Among Us Toronto.',
      link: 'https://instagram.com/oneamongus_ca',
    },
    {
      title: 'Fediverse (Pleroma)',
      details:
        'Trans in Academia! Fediverse account on kazv.moe. Follow with your Pleroma/Mastodon/Misskey/etc. account!',
      link: 'https://kazv.moe/users/tia',
    },
    {
      title: 'X (Formerly Twitter)',
      details:
        'We condemn X of their ignorance of transphobic contents.',
      link: 'https://twitter.com/oneamong_us_en',
    },
  ],
  'Local Communities': [
    {
      title: 'OAU Greater Toronto Area Gathering',
      details:
        'Join the Telegram group via this broadcast.',
      link: 'https://t.me/transacademicorg/775',
    },
  ],
  Friends: [
    {
      title: 'Project trans',
      details:
        'Project Trans (formerly known as MtF.wiki) aims to better maintain multiple projects including MtF wiki, FtM wiki and more.',
      link: 'https://about.project-trans.org/en/',
      icon: { src: 'https://about.project-trans.org/en/home/logo.png' },
    },
    {
      title: '2345.LGBT',
      details: 'A transgender navigation site owned and maintained by Project Trans.',
      link: 'https://2345.lgbt/en/',
      icon: { src: 'https://2345.lgbt/brand.svg' },
    },
  ],
};
</script>
