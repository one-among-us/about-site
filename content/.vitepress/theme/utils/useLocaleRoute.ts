import { useRoute } from 'vitepress';
import { computed } from 'vue';

const locales = ['zh-Hans'];

const useLocaleRoute = () => {
  const route = useRoute();
  return computed(() => {
    const locale = route.path.split('/')[1];
    if (!locales.includes(locale)) return 'en';
    return locale as 'zh-Hans' | 'en';
  });
};

export default useLocaleRoute;
