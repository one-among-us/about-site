import VueJsx from '@vitejs/plugin-vue-jsx';
import Unocss from 'unocss/vite';
import { defineConfig } from 'vitepress';
import imgPlugin from './plugins/imgPlugin';
import getPostList from './theme/utils/getPostList';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'One Among Us',
  description: 'A not-for-profit organization which operates one-among.us and other projects.',
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Posts', link: '/posts' },
      { text: 'Links', link: '/links' },
      { text: 'Contact', link: '/contact' },
    ],
    logo: 'https://www.one-among.us/favicon-large.png',

    sidebar: {
      '/posts': getPostList(),
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/one-among-us' }],
  },
  rewrites: { 'posts/index.md': 'posts.md', 'links/index.md': 'links.md' },
  vite: { plugins: [VueJsx(), Unocss()], server: { host: '0.0.0.0' } },
  markdown: {
    config: (md) => {
      md.use(imgPlugin);
    },
  },
});
