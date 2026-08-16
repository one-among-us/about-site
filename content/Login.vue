<template>
  <main class="xl:max-w-[980px] max-w-7/8 mx-auto">
    <section v-for="[title, work] in Object.entries($frontmatter.items)" :key="title">
      <h1 class="text-[1.2rem] text-gray-500 mt-10">
        {{ title }}
      </h1>
      <VPFeatures v-if="Array.isArray(work)" :features="work" class="my-6 px-0!" />
      <appendix v-else>
        <div v-for="[item, details] in Object.entries(work)" :key="item">
          <h2>{{ item }}</h2>
          <p v-for="(detail, index) in details" :key="index">
            <template v-if="isMailDetail(detail)">
              <span v-html="renderMarkdown(detail.before)"></span><MailTo :template="detail.email" /><span v-html="renderMarkdown(detail.after)"></span>
            </template>
            <span v-else v-html="renderMarkdown(detail)"></span>
          </p>
	    </div>
      </appendix>
    </section>
  </main>
</template>
<script setup lang="ts">
  import type { Feature } from 'vitepress/dist/client/theme-default/components/VPFeatures.vue';
  import VPFeatures from 'vitepress/dist/client/theme-default/components/VPFeatures.vue';
  import MarkdownIt from 'markdown-it';
  import { MailTo } from './.vitepress/theme/utils/MailTo';

  const markdown = new MarkdownIt({ html: false, linkify: true });
  const renderMarkdown = (content: string) => markdown.renderInline(content);

  interface MailDetail {
    before: string;
    email: string;
    after: string;
  }

  const isMailDetail = (detail: unknown): detail is MailDetail =>
    typeof detail === 'object' && detail !== null && 'email' in detail;
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
