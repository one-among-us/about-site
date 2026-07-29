<script lang="tsx">
import '@splidejs/vue-splide/css/skyblue';
import { defineClientComponent, useData } from 'vitepress';
import { computed } from 'vue';

import photosData from './photos.json';

const photos: { url: string; alt: Record<string, string> }[] = photosData;

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
          <img class="splideimg" src={photo.url} alt={photo.alt[locale.value] || photo.alt.en} />
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

.splideimg {
  border: 1px solid var(--vp-c-bg-soft);
  border-radius: 12px;
  max-height: 70vh;
  max-width: 100%;
  width: auto;
  object-fit: contain;
  transition:
    border-color 0.25s,
    background-color 0.25s;
}

.splideimg:hover {
  border-color: var(--vp-c-brand-1);
}

/* Override VitePress default list styling that misaligns the pagination buttons */
.splide__pagination li {
  margin-top: 0 !important;
}
</style>
