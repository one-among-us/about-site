import PostData from '@/.vitepress/types/PostData';
import { createContentLoader } from 'vitepress';

export default createContentLoader('zh-Hans/posts/**/*.md');

export declare const data: PostData[];
