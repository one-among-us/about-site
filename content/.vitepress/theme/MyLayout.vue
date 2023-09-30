<template>
  <Layout>
    <template #home-hero-after>
      <div :class="$style.outerContent">
        <div v-if="locale === 'zh-Hans'" :class="$style.content">中文文本（等待翻译）</div>
        <div v-else :class="$style.content">
          Hi! We are One Among Us, proudly a registered not-for-profit organization, but more
          proudly a <strong>community</strong> of the great East Asian and East Asian-Canadian
          transgender and gender diverse family. We provide peer and community support for our
          fellows, aiming to build connection between travelers and those in our hometown. <br />We
          started as a memorial site for Chinese transgender people and allies who passed away. We
          believe that both those who are still living and those who had passed away are important
          members of our community, are the “Ones” Among Us.
        </div>
      </div>
    </template>
  </Layout>
</template>

<script setup lang="ts">
import DefaultTheme from 'vitepress/theme';
import useLocaleRoute from '../theme/utils/useLocaleRoute';
const { Layout } = DefaultTheme;

const locale = useLocaleRoute();
</script>

<style module>
.content {
  max-width: 1152px;
  margin: 0 auto 2rem auto;
}
.outerContent {
  padding: 0 1rem;
}
</style>
