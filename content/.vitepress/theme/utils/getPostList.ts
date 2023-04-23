import { readdirSync, readFileSync } from 'node:fs';
import metadataParser from 'markdown-yaml-metadata-parser';

const getPostList = () =>
  readdirSync('./content/posts')
    .map((file) => {
      const [fileName, ext] = file.split('.');
      if (ext !== 'md') return null;
      const fileContent = readFileSync(`./content/posts/${file}`, 'utf-8');
      const { metadata, content } = metadataParser(fileContent);
      if (!metadata?.title) return null;
      return { text: metadata.title as string, link: `/posts/${fileName}` };
      // const title = fileContent.split('title: ')[1].split('')[0];
    })
    .filter((item) => item !== null);

export default getPostList;
