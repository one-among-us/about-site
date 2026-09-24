import path from 'node:path';
import { mkdirSync, writeFileSync } from 'node:fs';
import { Feed } from 'feed';
import { createContentLoader, type SiteConfig } from 'vitepress';

const SITE_URL = 'https://oneamongus.ca';

interface LocaleFeedConfig {
  locale: string;
  pattern: string;
  title: string;
  description: string;
  lang: string;
  link: string;
  outSubDir: string;
  cleanUrlTransform: (url: string) => string;
}

const FEED_CONFIGS: LocaleFeedConfig[] = [
  {
    locale: 'en',
    pattern: 'en/posts/**/*.md',
    title: 'One Among Us',
    description:
      'A community for East-Asian and East-Asian Canadian transgender and gender diverse people. An Ontario registered not-for-profit corporation.',
    lang: 'en',
    link: `${SITE_URL}`,
    outSubDir: '',
    cleanUrlTransform: (url: string) => url.replace(/^\/?en\//, '/'),
  },
  {
    locale: 'zh-Hans',
    pattern: 'zh-Hans/posts/**/*.md',
    title: 'One Among Us',
    description:
      'A community for East-Asian and East-Asian Canadian transgender and gender diverse people. An Ontario registered not-for-profit corporation.',
    lang: 'zh-Hans',
    link: `${SITE_URL}/zh-Hans/`,
    outSubDir: 'zh-Hans',
    cleanUrlTransform: (url: string) => (url.startsWith('/') ? url : `/${url}`),
  },
  {
    locale: 'ja',
    pattern: 'ja/posts/**/*.md',
    title: 'One Among Us',
    description:
      'A community for East-Asian and East-Asian Canadian transgender and gender diverse people. An Ontario registered not-for-profit corporation.',
    lang: 'ja',
    link: `${SITE_URL}/ja/`,
    outSubDir: 'ja',
    cleanUrlTransform: (url: string) => (url.startsWith('/') ? url : `/${url}`),
  },
];

function sanitizeHtml(html: string | undefined): string | undefined {
  if (!html) return undefined;
  // Convert root-relative URLs to absolute URLs
  return html.replace(/(src|href)="\/([^"]*)"/g, `$1="${SITE_URL}/$2"`);
}

export async function genFeed(config: SiteConfig) {
  for (const item of FEED_CONFIGS) {
    const feed = new Feed({
      title: item.title,
      description: item.description,
      id: item.link,
      link: item.link,
      language: item.lang,
      image: `${SITE_URL}/assets/favicon-new.png`,
      favicon: `${SITE_URL}/favicon.ico`,
      copyright: '2023-2026 One Among Us Transgender Support',
    });

    const posts = await createContentLoader(item.pattern, {
      render: true,
      excerpt: true,
    }).load();

    // Sort descending by date
    posts.sort((a, b) => {
      return +new Date(b.frontmatter.date || 0) - +new Date(a.frontmatter.date || 0);
    });

    for (const post of posts) {
      if (post.url.endsWith('/posts/') || post.url.endsWith('/posts') || !post.frontmatter?.title) {
        continue;
      }

      const relativePath = item.cleanUrlTransform(post.url);
      const postUrl = `${SITE_URL}${relativePath.startsWith('/') ? relativePath : `/${relativePath}`}`;

      feed.addItem({
        title: post.frontmatter.title,
        id: postUrl,
        link: postUrl,
        description: post.excerpt || post.frontmatter.description || '',
        content: sanitizeHtml(post.html),
        author: [
          {
            name: post.frontmatter.author || 'One Among Us',
          },
        ],
        date: new Date(post.frontmatter.date || Date.now()),
      });
    }

    const targetDir = item.outSubDir ? path.join(config.outDir, item.outSubDir) : config.outDir;
    mkdirSync(targetDir, { recursive: true });

    writeFileSync(path.join(targetDir, 'rss.xml'), feed.rss2());
    writeFileSync(path.join(targetDir, 'atom.xml'), feed.atom1());
    writeFileSync(path.join(targetDir, 'feed.json'), feed.json1());
  }
}
