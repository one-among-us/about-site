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
	  { text: '活动日历', link: '/zh-Hans/events' },
          { text: '通知公告', link: '/zh-Hans/posts' },
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
      { text: 'People', link: '/people' },
      { text: 'Events', link: '/zh-Hans/events' },
      { text: 'Archives', link: '/posts' },
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
      { icon: { svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 196.52 196.52"><path d="M47.9242 72.7966a18.2278 18.2278 0 0 1-7.7959 7.7597l42.7984 42.9653 10.3182-5.2291zm56.4524 56.6704-10.3182 5.2291 21.686 21.7708a18.2278 18.2278 0 0 1 7.7975-7.7608z"/><path d="M129.6645 102.0765l1.7865 11.4272 27.4149-13.8942a18.2278 18.2278 0 0 1-4.9719-9.8124zm-14.0658 7.1282-57.2891 29.0339a18.2278 18.2278 0 0 1 4.9728 9.8133l54.1027-27.4194z"/><path d="M69.5312 91.6539l8.1618 8.1933 29.269-57.1387a18.2278 18.2278 0 0 1-9.787-5.0219zm-7.1897 14.0363-14.0022 27.3353a18.2278 18.2278 0 0 1 9.786 5.0214l12.3775-24.1639z"/><path d="M39.8906 80.6763a18.2278 18.2278 0 0 1-10.8655 1.7198l8.1762 52.2981a18.2278 18.2278 0 0 1 10.8645-1.7198z"/><path d="M63.3259 148.3109a18.2278 18.2278 0 0 1-1.7322 10.8629l52.2893 8.3907a18.2278 18.2278 0 0 1 1.7322-10.8629z"/><path d="M134.9148 146.9182a18.2278 18.2278 0 0 1 9.788 5.0224l24.1345-47.117a18.2278 18.2278 0 0 1-9.7875-5.0229z"/><path d="M126.1329 33.1603a18.2278 18.2278 0 0 1-7.7975 7.7608l37.3765 37.5207a18.2278 18.2278 0 0 1 7.7969-7.7608z"/><path d="M44.7704 51.6279a18.2278 18.2278 0 0 1 4.9723 9.8123l47.2478-23.9453a18.2278 18.2278 0 0 1-4.9718-9.8113z"/><path d="M118.2491 40.9645a18.2278 18.2278 0 0 1-10.8511 1.8123l4.1853 26.8 11.42 1.8324zm-4.2333 44.1927 9.8955 63.3631a18.2278 18.2278 0 0 1 10.88-1.6278l-9.355-59.9035z"/><path d="M49.7763 61.6412a18.2278 18.2278 0 0 1-1.694 10.8686l26.8206 4.3077 5.2715-10.2945zm45.9677 7.382-5.272 10.2955 63.3713 10.1777a18.2278 18.2278 0 0 1 1.7606-10.8593z"/><path d="M93.4385 23.8419a1 1 0 1 0 33.0924 1.8025 1 1 0 1 0-33.0924-1.8025"/><path d="M155.314 85.957a1 1 0 1 0 33.0923 1.8025 1 1 0 1 0-33.0923-1.8025"/><path d="M115.3466 163.9824a1 1 0 1 0 33.0923 1.8025 1 1 0 1 0-33.0923-1.8025"/><path d="M28.7698 150.0898a1 1 0 1 0 33.0923 1.8025 1 1 0 1 0-33.0923-1.8025"/><path d="M15.2298 63.4781a1 1 0 1 0 33.0923 1.8025 1 1 0 1 0-33.0923-1.8025"/></svg><!--cc0 license-->'}, link: 'https://kazv.moe/users/tia', ariaLabel: 'Fediverse/Pleroma/Compatible with mastodon' },
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
    'zh-Hans/events/index.md': 'zh-Hans/events.md',
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

