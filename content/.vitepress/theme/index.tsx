// https://vitepress.dev/guide/custom-theme
import 'uno.css';
import DefaultTheme from 'vitepress/theme';
import './style.css';
// import './scss/main.scss';

import { MailTo } from './utils/MailTo.tsx'
import { OAUIcons } from './utils/OAUIcons.tsx'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('MailTo', MailTo);
    app.component('OAUIcons', OAUIcons);
  },
};
