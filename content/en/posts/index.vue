<template>
  <main class="main">
    <article class="vp-doc mt-4">
      <div class="flex flex-col sm:flex-row">
        <ul style="padding-left:0">
          <li v-for="post in organizedPosts" :key="post.url" class="list-none p-0 m-0">
            <VPLink :href="post.url" class="text-xl">
              {{ post.title }}
            </VPLink>
            <p>
              <time :datetime="post.date">{{ new Date(post.date).toLocaleDateString() }}</time>
            </p>
          </li>
        </ul>
      </div>
    </article>
  </main>
</template>
<script setup lang="ts">
import { data as posts } from '@/.vitepress/theme/utils/getPostList.data';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';

const organizedPosts = posts
  .filter(({ frontmatter }) => frontmatter.date)
  .sort((a, b) => {
    const aDate = new Date(a.frontmatter.date);
    const bDate = new Date(b.frontmatter.date);
    return bDate.getTime() - aDate.getTime();
  })
  .map(({ url, frontmatter: { date, title } }) => {
    return { url, date, title };
  });
</script>
