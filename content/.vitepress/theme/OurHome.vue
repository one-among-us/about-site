<script setup lang="ts">
import VPHomeHero from 'vitepress/dist/client/theme-default/components/VPHomeHero.vue';
import VPHomeFeatures from 'vitepress/dist/client/theme-default/components/VPHomeFeatures.vue';
import VPHomeContent from 'vitepress/dist/client/theme-default/components/VPHomeContent.vue';
import VPHomeFriends from './VPHomeFriends.vue';
import { useData } from 'vitepress';

const { frontmatter } = useData();
</script>

<template>
  <div class="VPHome">
    <slot name="home-hero-before" />
    <VPHomeHero>
      <template #home-hero-info-before><slot name="home-hero-info-before" /></template>
      <template #home-hero-info><slot name="home-hero-info" /></template>
      <template #home-hero-info-after><slot name="home-hero-info-after" /></template>
      <template #home-hero-actions-after><slot name="home-hero-actions-after" /></template>
      <template #home-hero-image><slot name="home-hero-image" /></template>
    </VPHomeHero>
    <slot name="home-hero-after" />

    <VPHomeFeatures />
    <div :class="$style.outerContent">
      <div :class="$style.content">
        <VPHomeIntro />
      </div>
    </div>

    <VPHomeContent v-if="frontmatter.markdownStyles !== false">
      <Content />
    </VPHomeContent>
    <Content v-else />

    <div :class="$style.outerContent">
      <div :class="$style.content">
        <VPHomeFriends />
      </div>
    </div>
  </div>
</template>

<style scoped>
.VPHome {
  margin-bottom: 96px;
}

@media (min-width: 768px) {
  .VPHome {
    margin-bottom: 128px;
  }
}
</style>

<style module>
.content {
}
.outerContent {
}
</style>
