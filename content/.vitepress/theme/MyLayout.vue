<template>
  <Layout>
    <template>
      <div :class="$style.outerContent">
        <div v-if="locale === 'zh-Hans'" :class="$style.content">
          你好呀！我们是 One Among
          Us，是一个注册在加拿大的非营利组织，不过我们更喜欢用<strong>社群</strong>这个词来称呼自己。我们希望为东亚（现在主要是中国）以及在加拿大的跨性别/性别多元社群提供同辈互助和社群支持，增强两地跨儿之间的联系与互助。<br />我们最初的起点，也是最重要的工作，是维护「那些秋叶」纪念网站。这份工作告诉我们，无论是活着的还是逝去的，都永远是我们中的一员，是
          “one among us”。
        </div>
        <div v-else-if="locale === 'ja'" :class="$style.content">
        こんにちは。<br />
        『One Among Us』というカナダで登録されているNPOです。私たちは、中国を始めとする東アジア、およびカナダのジェンダー多様性コミュニティに、ピアサポート・コミュニティサポートを提供し、ジェンダーマイノリティの方々の交流と扶助に力を加えるための団体です。<br />
        私たちの出発点でありし最も大事なプロジェクトは、「秋の葉ものがたり」という追悼サイトです。コミュニティの友だちが亡くなったとしても、私たちの中のひとり (One) であり続けていて、コミュニティの未来を見守っている (Among Us) ように考えたいです。
        </div>
        <div v-else :class="$style.content">
        </div>
      </div>
    </template>
  </Layout>
</template>

<script setup lang="ts">
import { useData } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
const { Layout } = DefaultTheme;

const frontmatter = useData();
</script>

