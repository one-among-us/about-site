// https://vitepress.dev/guide/custom-theme
import Theme from 'vitepress/theme';
import MyLayout from './MyLayout.vue';
import './style.css';
import './scss/main.scss';

export default {
  ...Theme,
  Layout: () => {
    return <MyLayout />;
  },
  enhanceApp({ app, router, siteData }) {
    // ...
  },
};
