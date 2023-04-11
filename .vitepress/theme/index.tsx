// https://vitepress.dev/guide/custom-theme
import Theme from 'vitepress/theme';
import './style.css';
import './scss/main.scss';

export default {
  ...Theme,
  Layout: () => {
    return <Theme.Layout />;
  },
  enhanceApp({ app, router, siteData }) {
    // ...
  },
};
