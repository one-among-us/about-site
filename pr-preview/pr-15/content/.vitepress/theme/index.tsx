// https://vitepress.dev/guide/custom-theme
import 'uno.css';
import Theme from 'vitepress/theme';
import OurHome from './OurHome.vue';
import './style.css';
// import './scss/main.scss';

export default {
  ...Theme,
  enhanceApp({ app, router, siteData }) {
    app.component('ourhome', OurHome)
  },
};
