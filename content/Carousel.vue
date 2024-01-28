<script lang="tsx">
import '@splidejs/vue-splide/css/skyblue';
import { defineClientComponent, useData } from 'vitepress';
import { computed } from 'vue';

const photos: { url: string; alt: Record<string, string> }[] = [
  { url: 'https://www.one-among.us/favicon-large.png', alt: { en: '234', 'zh-Hans': '123' } },
  { url: '/people/beiyan-shu.png', alt: { en: '', 'zh-Hans': '' } },
  { url: '/people/vapaa.jpg', alt: { en: '', 'zh-Hans': '' } },
];

export default defineClientComponent(async () => {
  const data = useData();
  const locale = computed(() => data.lang.value);
  // @ts-expect-error TODO: Fix this
  const res = await import('@splidejs/vue-splide');
  const { Splide, SplideSlide } = res;
  return (
    <Splide
      options={{
        wheel: true,
        releaseWheel: true,
        wheelSleep: 500,
        arrows: false,
      }}
    >
      {photos.map((photo) => (
        <SplideSlide key={photo.url}>
          <img src={photo.url} alt={photo.alt[locale.value] || photo.alt.en} />
        </SplideSlide>
      ))}
    </Splide>
  );
});
</script>

<style>
.splide__slide {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
