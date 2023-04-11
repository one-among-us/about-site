import { defineConfig } from 'vitepress';
import VueJsx from '@vitejs/plugin-vue-jsx';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'One Among Us',
  description: 'A not-for-profit organization which operates one-among.us and other projects.',
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Blog', link: '/posts/mh_promotion' },
    ],

    sidebar: [
      {
        text: 'Posts',
        items: [
          {
            text: 'One Among Us Promotes Mental Health Among Members',
            link: '/posts/mh_promotion',
          },
        ],
      },
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }],
  },
  vite: { plugins: [VueJsx()] },
});
