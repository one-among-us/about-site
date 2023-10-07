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
  'リンク': [
    {
      title: '秋の葉ものがたり One Among Us(いま中国語・英語のみ)',
      details: 'トランスジェンダーとそのアライたちの追悼サイト。',
      link: 'https://one-among.us',
      icon: { src: 'https://www.one-among.us/favicon-large.png', height: '15px' },
    },
    {
      title: 'トランスアカデミー 掲示版(英)',
      details:
        '学術を追求するトランスジェンダーおよびジェンダー・ノンコンフォーミングの同士のコミュニティ',
      link: 'https://oau.edu.kg',
      icon: '<img src="https://oau.edu.kg/logo.jpg" style="padding:0px;mix-blend-mode:multiply;filter:brightness(110%);clip-path:polygon(0% 0%, 90% 0%, 90% 80%, 0% 80%);position:relative;top:4px;">',
    },
    {
      title: 'グレータートロントトランスコミュニティ',
      details: 'イベント・医療・中古品・ヘルプ・ＲＬＥ・その他（いま中国語は大部分、日本語を使用する方が大歓迎）。',
      link: 'https://t.me/transacademicorg/775',
    },
  ],
  'フレンズ': [
    {
      title: 'プロジェクト・トランス Project Trans',
      details:
        'プロジェクト・トランス（Project Trans）は、MtF wiki チームがリニューアルし、MtF wiki も FtM wiki などのプロジェクトをより良く維持するために作成されました。',
      link: 'https://about.project-trans.org/ja/',
      icon: { src: 'https://about.project-trans.org/ja/home/logo.png', height: '15px' },
    },
    {
      title: '2345.LGBT',
      details: 'トランス・ジェンダーのすべて。',
      link: 'https://2345.lgbt/ja/',
      icon: { src: 'https://2345.lgbt/brand.svg', height: '15px' },
    },
  ],
};
</script>
