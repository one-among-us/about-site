import type { PluginSimple } from 'markdown-it';

const imgPlugin: PluginSimple = (md) => {
  const defaultRender = md.renderer.rules.image!;

  md.renderer.rules.image = (tokens, idx, options, env, self) => {
    const token = tokens[idx];
    const src = token.attrGet('src');
    const alt = token.attrGet('alt') || token.content;
    const title = token.attrGet('title');
    if (!src) return defaultRender(tokens, idx, options, env, self);
    let oriStr = `<img src="${src}" ${alt ? `alt="${alt}"` : ''} ${
      title ? `title="${title}"` : ''
    }>`;
    if (title) oriStr += `<span class="imageCaption">◎ ${title}</span>`;
    return oriStr;
  };
};

export default imgPlugin;
