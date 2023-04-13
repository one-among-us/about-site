<template>
  <Layout>
    <template #home-hero-after>
      <p class="before">
        One Among Us is a registered not-for-profit organization located in Toronto, Ontario,
        Canada. We are an organization <strong>of</strong>, <strong>by</strong>, and
        <strong>for</strong> Asian-Canadian transgender and gender non-conforming people. We aim to
        <strong>advocate rights</strong> of and <strong>provide community services</strong> to
        transgender, gender non-conforming people and their allies, and
        <strong>commemorate</strong> those who passed away.
      </p>
    </template>
  </Layout>
</template>

<script setup lang="ts">
import DefaultTheme from 'vitepress/theme';
const { Layout } = DefaultTheme;
</script>

<style scoped>
.before {
  max-width: 1152px;
  margin: 0 auto 2rem auto;
  padding: 0 1rem;
}
</style>
