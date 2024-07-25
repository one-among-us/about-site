import { footnote } from '@mdit/plugin-footnote';
import VueJsx from '@vitejs/plugin-vue-jsx';
import Unocss from 'unocss/vite';
import { defineConfig } from 'vitepress';
import imgPlugin from './plugins/imgPlugin';
import getPostList from './theme/utils/getPostList';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'One Among Us',
  description: 'A community for East-Asian and East-Asian Canadian transgender and gender diverse people. An Ontario registered not-for-profit corporation.',
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
          { text: '关于我们', link: '/zh-Hans/about' },
          { text: '文章存档', link: '/zh-Hans/posts' },
          { text: '联系方式', link: '/zh-Hans/contact' },
        ],
        sidebar: {
          '/zh-Hans/posts': getPostList('zh-Hans'),
        },
        footer: {
          message:
            '若无特殊说明，本站内容以 <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">知识共享 署名 4.0</a> 协议授权',
          copyright: '2023-2024 One Among Us Transgender Support',
        },
      },
    },
    ja: {
      label: '日本語',
      lang: 'ja',
      themeConfig: {
        nav: [
          // { text: '紹介', link: '/ja/about' },
          // { text: 'アーカイブ', link: '/ja/posts' },
          { text: '連絡先', link: '/ja/contact' },
        ],
        sidebar: {
          '/ja/posts': getPostList('ja'),
        },
        footer: {
          message:
            '注があるものを除いて、このサイトの内容物は <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">クリエイティブ・コモンズ 表示 4.0</a> ライセンスの下に提供されています。',
          copyright: '2023-2024 One Among Us Transgender Support',
        },
      },
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'About', link: '/about' },
      { text: 'Archives', link: '/posts' },
      { text: 'People', link: '/people' },
      { text: 'Contact', link: '/contact' },
    ],
    logo: '/assets/favicon-new.png',

    sidebar: {
      '/posts': getPostList(),
    },

    footer: {
      message:
        'Licensed under <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a> unless otherwise specified',
      copyright: '2023-2024 One Among Us Transgender Support',
    },

    socialLinks: [
      { icon: 'twitter', link: 'https://twitter.com/oneamong_us_en', ariaLabel: 'X/Formerly Twitter' },
      { icon: { svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M23.1117 4.49449C23.4296 2.94472 21.9074 1.65683 20.4317 2.227L2.3425 9.21601C0.694517 9.85273 0.621087 12.1572 2.22518 12.8975L6.1645 14.7157L8.03849 21.2746C8.13583 21.6153 8.40618 21.8791 8.74917 21.968C9.09216 22.0568 9.45658 21.9576 9.70712 21.707L12.5938 18.8203L16.6375 21.8531C17.8113 22.7334 19.5019 22.0922 19.7967 20.6549L23.1117 4.49449ZM3.0633 11.0816L21.1525 4.0926L17.8375 20.2531L13.1 16.6999C12.7019 16.4013 12.1448 16.4409 11.7929 16.7928L10.5565 18.0292L10.928 15.9861L18.2071 8.70703C18.5614 8.35278 18.5988 7.79106 18.2947 7.39293C17.9906 6.99479 17.4389 6.88312 17.0039 7.13168L6.95124 12.876L3.0633 11.0816ZM8.17695 14.4791L8.78333 16.6015L9.01614 15.321C9.05253 15.1209 9.14908 14.9366 9.29291 14.7928L11.5128 12.573L8.17695 14.4791Z"/></svg>'}, link: 'https://t.me/s/transacademicorg', ariaLabel: 'Telegram' },
      { icon: 'mastodon', link: 'https://kazv.moe/users/tia', ariaLabel: 'Fediverse/Pleroma/Compatible with mastodon' },
      { icon: 'instagram', link: 'https://instagram.com/oneamongus_ca', ariaLabel: 'Instagram' },
      { icon: 'youtube', link: 'https://www.youtube.com/@OneAmongUsPride', ariaLabel: 'YouTube' },
      { icon: 'github', link: 'https://github.com/one-among-us', ariaLabel: 'GitHub' },
    ],
  },
  rewrites: {
    'posts/index.md': 'posts.md',
    'people/index.md': 'people.md',
    'zh-Hans/posts/index.md': 'zh-Hans/posts.md',
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
