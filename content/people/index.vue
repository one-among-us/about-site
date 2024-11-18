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
      link: 'https://eu2.contabostorage.com/176b8434127b4d90bfb1360e128e586c:oneamongus/oauca/beiyan-shu.jpg',
      icon: {
        src: 'https://eu2.contabostorage.com/176b8434127b4d90bfb1360e128e586c:oneamongus/oauca/beiyan-shu.jpg',
        width: '100%',
      },
    },
    {
      title: 'Esme (she/她/elle)',
      details:
        'Esme is our director. She is in charge of One Among Us annual TDoR and TDoV events in Toronto and is currently working on political campaigns demanding OHIP for all. She doesn’t enjoy computer programming, nor does she enjoy learning math. What she loves is to capture the everyday landscapes of the city and moments of her friends on photo, as well as fixing up vintage bikes and electronics.',
      link: 'https://eu2.contabostorage.com/176b8434127b4d90bfb1360e128e586c:oneamongus/oauca/esme.jpg',
      icon: {
        src: 'https://eu2.contabostorage.com/176b8434127b4d90bfb1360e128e586c:oneamongus/oauca/esme.jpg',
        width: '100%',
      },
    },
    {
      title: 'Vapaa (they/she)',
      details:
        'Vapaa is a member of Trans in Academia. They primarily work on the Uniguide project. When approaching them, it’s advisable to approach them gently. Abrupt interactions may startle them, and you will see them jump in fright (literally).',
      link: 'https://eu2.contabostorage.com/176b8434127b4d90bfb1360e128e586c:oneamongus/oauca/vapaa.jpg',
      icon: {
        src: 'https://eu2.contabostorage.com/176b8434127b4d90bfb1360e128e586c:oneamongus/oauca/vapaa.jpg',
        width: '100%',
      },
    },
  ],
};
</script>
