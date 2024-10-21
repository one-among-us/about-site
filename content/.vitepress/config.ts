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
      { icon: { svg: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6.335 5.144C4.681 3.945 2 3.017 2 5.97c0 .59.35 4.953.556 5.661C3.269 14.094 5.686 14.381 8 14c-4.045.665-4.889 3.208-2.667 5.41C6.363 20.428 7.246 21 8 21c2 0 3.134-2.769 3.5-3.5q.5-1 .5-1.5q0 .5.5 1.5c.366.731 1.5 3.5 3.5 3.5c.754 0 1.637-.571 2.667-1.59C20.889 17.207 20.045 14.664 16 14c2.314.38 4.73.094 5.444-2.369c.206-.708.556-5.072.556-5.661c0-2.953-2.68-2.025-4.335-.826C15.372 6.806 12.905 10.192 12 12c-.905-1.808-3.372-5.194-5.665-6.856"/></svg>' }, link: 'https://bsky.app/profile/oneamongus.bsky.social', ariaLabel: 'Bluesky' },
      { icon: 'instagram', link: 'https://instagram.com/oneamongus_ca', ariaLabel: 'Instagram' },
      { icon: { svg: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><path fill="currentColor" d="M212 96a27.8 27.8 0 0 0-10.51 2L171 59.94A28 28 0 1 0 120 44a29 29 0 0 0 .15 2.94L73.68 66.3a28 28 0 1 0-28.6 44.83l1.85 46.38a28 28 0 1 0 32.74 41.42L128 212.47a28 28 0 1 0 49.13-18.79l27.21-42.75A28 28 0 1 0 212 96m-140.81 8.36L113.72 129l-41.46 32.22a28 28 0 0 0-9.34-4.35l-1.85-46.38a28 28 0 0 0 10.12-6.13M149.57 72a27.8 27.8 0 0 0 8.94-2L189 108.06a27.9 27.9 0 0 0-4.18 9.22l-46.57 2.22ZM82.09 173.85L124 141.26l15.94 47.83a28.2 28.2 0 0 0-7.6 8L84 183.53a28 28 0 0 0-1.91-9.68M156 184h-.89l-16.18-48.53l46.65-2.22a27.9 27.9 0 0 0 5.28 9L163.65 185a28 28 0 0 0-7.65-1M126.32 61.7a28.4 28.4 0 0 0 7.68 6.54l-11.3 47.45l-43.47-25.17A28 28 0 0 0 80 84a29 29 0 0 0-.15-2.94Z"/></svg>'}, link: 'https://kazv.moe/users/tia', ariaLabel: 'Fediverse/Pleroma/Compatible with mastodon' },
      { icon: { svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M23.1117 4.49449C23.4296 2.94472 21.9074 1.65683 20.4317 2.227L2.3425 9.21601C0.694517 9.85273 0.621087 12.1572 2.22518 12.8975L6.1645 14.7157L8.03849 21.2746C8.13583 21.6153 8.40618 21.8791 8.74917 21.968C9.09216 22.0568 9.45658 21.9576 9.70712 21.707L12.5938 18.8203L16.6375 21.8531C17.8113 22.7334 19.5019 22.0922 19.7967 20.6549L23.1117 4.49449ZM3.0633 11.0816L21.1525 4.0926L17.8375 20.2531L13.1 16.6999C12.7019 16.4013 12.1448 16.4409 11.7929 16.7928L10.5565 18.0292L10.928 15.9861L18.2071 8.70703C18.5614 8.35278 18.5988 7.79106 18.2947 7.39293C17.9906 6.99479 17.4389 6.88312 17.0039 7.13168L6.95124 12.876L3.0633 11.0816ZM8.17695 14.4791L8.78333 16.6015L9.01614 15.321C9.05253 15.1209 9.14908 14.9366 9.29291 14.7928L11.5128 12.573L8.17695 14.4791Z"/></svg>'}, link: 'https://t.me/s/transacademicorg', ariaLabel: 'Telegram' },
      { icon: 'twitter', link: 'https://twitter.com/oneamong_us_en', ariaLabel: 'X/Formerly Twitter' },
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

