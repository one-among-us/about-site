<template>
  <main class="main">
    <article class="vp-doc mt-4">
      <div class="flex flex-col sm:flex-row">
        <ul class="ml-4!">
          <li v-for="post in organizedPosts" :key="post.url" class="list-none p-0 m-0">
            <VPLink :href="post.url" class="text-xl">
              {{ post.title }}
            </VPLink>
            <p>
              {{ new Date(post.date).toLocaleDateString() }}
            </p>
          </li>
        </ul>
      </div>
    </article>
  </main>
</template>
<script setup lang="ts">
// @ts-expect-error load data from .data files
import { data as posts } from '../.vitepress/theme/utils/getPostList.data';
import type PostData from '../.vitepress/types/PostData';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';

const organizedPosts = (posts as PostData[])
  .filter(({ frontmatter }) => frontmatter.title)
  .sort((a, b) => {
    const aDate = new Date(a.frontmatter.date);
    const bDate = new Date(b.frontmatter.date);
    return bDate.getTime() - aDate.getTime();
  })
  .map(({ url, frontmatter: { date, title } }) => {
    return { url, date, title };
  });
</script>
