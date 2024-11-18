<script setup lang="ts">
import type { VPFeature } from 'vitepress/dist/client/theme-default/components/VPFeatures.vue';
import VPFeatures from 'vitepress/dist/client/theme-default/components/VPFeatures.vue';
import { useData } from 'vitepress';
const { frontmatter } = useData();
</script>

<template>
  <VPFeatures v-if="frontmatter.friends" class="VPFeatures" :features="frontmatter.friends" />
</template>
