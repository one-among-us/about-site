<template>
  <main class="xl:max-w-[980px] max-w-7/8 mx-auto">
    <section v-for="[title, work] in Object.entries($frontmatter.items)" :key="title">
      <h1 class="text-[1.2rem] text-gray-500 mt-10">
        {{ title }}
      </h1>
      <VPFeatures v-if="Array.isArray(work)" :features="work" class="my-6 px-0!" />
      <appendix v-else>
        <div v-for="[item, details] in Object.entries(work)">
	  <h2>{{ item }}</h2> <p v-for="detail in details" v-html="detail"></p>
	</div>
      </appendix>
    </section>
  </main>
</template>
<script setup lang="ts">
  import type { Feature } from 'vitepress/dist/client/theme-default/components/VPFeatures.vue';
  import VPFeatures from 'vitepress/dist/client/theme-default/components/VPFeatures.vue';
</script>
<style scoped>
p {
  font-size: 1rem;
  gap: 1em;
  padding: 0 0 0.5em 0;
}
h2 {
  font-size: 1.2rem;
  padding: 1em 0 0.5em 0;
}
appendix::after {
  content: "";
  display: block;
  height: 120px;
}
</style>