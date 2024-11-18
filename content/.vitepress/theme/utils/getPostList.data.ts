import PostData from '@/.vitepress/types/PostData';
import { createContentLoader } from 'vitepress';

export default createContentLoader('en/posts/**/*.md', {
  transform: (data) => data.map((item) => ({ ...item, url: item.url.replace('en/', '') })),
});

export declare const data: PostData[];
