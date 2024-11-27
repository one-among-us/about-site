<template>
  <main class="xl:max-w-[980px] max-w-7/8 mx-auto">
    <section v-for="[title, work] in Object.entries(people)" :key="title">
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

interface People {
  // index string , value Feature
  [index: string]: Feature[];
}

const people: People = {
  'Meet the Team!': [
    {
      title: 'Beiyan Shu (she/they)',
      details:
        'Shu is our Executive Director. She is in charge of the inter-communication of One Among Us. She likes being with people. She is not a good cook and we warned you not to eat her cooking.',
      link: 'https://eu2.contabostorage.com/176b8434127b4d90bfb1360e128e586c:oneamongus/about-us/people/shu.jpg',
      icon: {
        src: 'https://eu2.contabostorage.com/176b8434127b4d90bfb1360e128e586c:oneamongus/about-us/people/shu.jpg',
        width: '100%',
      },
    },
    {
      title: 'Esme (she/她/elle)',
      details:
        'Esme is our director. She is in charge of One Among Us annual TDoR and TDoV events in Toronto and is currently working on political campaigns demanding OHIP for all. She doesn’t enjoy computer programming, nor does she enjoy learning math. What she loves is to capture the everyday landscapes of the city and moments of her friends on photo, as well as fixing up vintage bikes and electronics.',
      link: 'https://eu2.contabostorage.com/176b8434127b4d90bfb1360e128e586c:oneamongus/about-us/people/esme.jpg',
      icon: {
        src: 'https://eu2.contabostorage.com/176b8434127b4d90bfb1360e128e586c:oneamongus/about-us/people/esme.jpg',
        width: '100%',
      },
    },
    {
      title: 'Vapaa (they/she)',
      details:
        'Vapaa is primarily responsible for organizing and sharing a wide range of information, including how gender-diverse individuals can better complete their education, plan and start their lives worldwide, and many other related areas. If Vapaa does not notice the approach of other beings, you might see them jump in fright when startled.',
      link: 'https://eu2.contabostorage.com/176b8434127b4d90bfb1360e128e586c:oneamongus/about-us/people/vapaa.jpg',
      icon: {
        src: 'https://eu2.contabostorage.com/176b8434127b4d90bfb1360e128e586c:oneamongus/about-us/people/vapaa.jpg',
        width: '100%',
      },
    },
    {
      title: 'Annie (she/her)',
      details:
        'Annie is one of One Among Us website maintainers, she contributes on writing entries that preserve memories of our departed friends. Occasionally, she gets bursts of inspiration and enjoys expressing them creatively. Well, she is also a stray cat who loves sneaking snacks (figuratively).',
      link: 'https://eu2.contabostorage.com/176b8434127b4d90bfb1360e128e586c:oneamongus/about-us/people/annie.png',
      icon: {
        src: 'https://eu2.contabostorage.com/176b8434127b4d90bfb1360e128e586c:oneamongus/about-us/people/annie.png',
        width: '100%',
      },
    },
  ],
};
</script>
