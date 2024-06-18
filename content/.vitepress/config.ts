import { footnote } from '@mdit/plugin-footnote';
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
          { text: '链接', link: '/zh-Hans/links' },
          {
            text: '联系我们',
            link: '/zh-Hans/contact',
          },
          { text: '会员登录', link: '/res' },
        ],
        sidebar: {
          '/zh-Hans/posts': getPostList('zh-Hans'),
        },
      },
    },
    ja: {
      label: '日本語',
      lang: 'ja',
      themeConfig: {
        nav: [
          { text: 'ニューズ', link: '/ja/posts' },
          { text: 'リンク', link: '/ja/links' },
          {
            text: '連絡先',
            link: '/ja/contact',
          },
          { text: '会員ログイン', link: '/res' },
        ],
        sidebar: {
          '/ja/posts': getPostList('ja'),
        },
      },
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Posts', link: '/posts' },
      { text: 'Links', link: '/links' },
      { text: 'People', link: '/people' },
      { text: 'Contact', link: '/contact' },
      { text: 'Member Login', link: '/res' },
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
    'people/index.md': 'people.md',
    'links/index.md': 'links.md',
    'zh-Hans/posts/index.md': 'zh-Hans/posts.md',
    'zh-Hans/links/index.md': 'zh-Hans/links.md',
    'ja/posts/index.md': 'ja/posts.md',
    'ja/links/index.md': 'ja/links.md',
  },
  vite: { plugins: [VueJsx(), Unocss()], server: { host: '0.0.0.0' } },
  markdown: {
    config: (md) => {
      md.use(imgPlugin);
      // @ts-expect-error
      md.use(footnote);
    },
  },
});
