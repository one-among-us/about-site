import VueJsx from '@vitejs/plugin-vue-jsx';
import Unocss from 'unocss/vite';
import { defineConfig } from 'vitepress';
import imgPlugin from './plugins/imgPlugin';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'One Among Us',
  description: 'A not-for-profit organization which operates one-among.us and other projects.',
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Posts', link: '/posts' },
      { text: 'Contact', link: '/contact' },
    ],
    logo: 'https://www.one-among.us/favicon-large.png',

    sidebar: {
      '/posts': [
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
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/one-among-us' }],
  },
  rewrites: { 'posts/index.md': 'posts.md' },
  vite: { plugins: [VueJsx(), Unocss()] },
  markdown: {
    config: (md) => {
      md.use(imgPlugin);
    },
  },
});
