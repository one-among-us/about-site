import { readdirSync, readFileSync, statSync } from 'node:fs';
import metadataParser from 'markdown-yaml-metadata-parser';

const getPostList = (locale?: string) =>
  readdirSync(locale ? `./content/${locale}/posts` : './content/posts')
    .map((file) => {
      const [fileName, ext] = file.split('.');
      if (ext !== 'md') return null;
      const fileContent = readFileSync(
        locale ? `./content/${locale}/posts/${file}` : `./content/posts/${file}`,
        'utf-8',
      );
      const { metadata } = metadataParser(fileContent);
      if (!metadata?.title) return null;
      let date;
      if (metadata?.date) {
        date = Number(new Date(metadata.date));
      } else {
        date = statSync(
          locale ? `./content/${locale}/posts/${file}` : `./content/posts/${file}`,
        ).ctimeMs;
      }
      return {
        text: metadata.title as string,
        link: locale ? `/${locale}/posts/${fileName}` : `/posts/${fileName}`,
        time: date,
      };
    })
    .filter((item) => item !== null)
    .sort((a, b) => b.time - a.time)
    .map(({ text, link }) => ({ text, link }));

export default getPostList;
