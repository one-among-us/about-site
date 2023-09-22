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
  locales: {
    root: {
      label: 'English',
      lang: 'en',
    },
    'zh-Hans': {
      label: '简体中文',
      lang: 'zh-Hans',
      themeConfig: {
        nav: [
          { text: '文章', link: '/zh-Hans/posts' },
          { text: '友情链接', link: '/zh-Hans/links' },
          {
            text: '联系我们',
            link: '/zh-Hans/contact',
          },
        ],
      },
    },
  },
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

    footer: {
      message:
        'Licensed under <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>',
      copyright: 'Copyright © 2023 One Among Us Transgender Support',
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/one-among-us' }],
  },
  rewrites: {
    'posts/index.md': 'posts.md',
    'links/index.md': 'links.md',
    'zh-Hans/posts/index.md': 'zh-Hans/posts.md',
    'zh-Hans/links/index.md': 'zh-Hans/links.md',
  },
  vite: { plugins: [VueJsx(), Unocss()], server: { host: '0.0.0.0' } },
  markdown: {
    config: (md) => {
      md.use(imgPlugin);
    },
  },
});
