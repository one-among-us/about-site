<script lang="tsx">
import '@splidejs/vue-splide/css/skyblue';
import { defineClientComponent, useData } from 'vitepress';
import { computed } from 'vue';

const photos: { url: string; alt: Record<string, string> }[] = [
  {
    url: 'https://eu2.contabostorage.com/176b8434127b4d90bfb1360e128e586c:oneamongus/about-us/5.jpg',
    alt: { en: 'Poster -- Licensed under CC-BY-SA', 'zh-Hans': '海报，知识共享-署名-相同方式共享授权' },
  },
  {
    url: 'https://eu2.contabostorage.com/176b8434127b4d90bfb1360e128e586c:oneamongus/about-us/4.jpg',
    alt: { en: 'Events Photo -- All rights reserved', 'zh-Hans': '活动照片，保留所有权利' },
  },
  {
    url: 'https://eu2.contabostorage.com/176b8434127b4d90bfb1360e128e586c:oneamongus/about-us/1.jpg',
    alt: { en: 'Events Photo -- All rights reserved', 'zh-Hans': '活动照片，保留所有权利' },
  },
  {
    url: 'https://eu2.contabostorage.com/176b8434127b4d90bfb1360e128e586c:oneamongus/about-us/2.jpg',
    alt: { en: 'Events Photo -- All rights reserved', 'zh-Hans': '活动照片，保留所有权利' },
  },
  {
    url: 'https://eu2.contabostorage.com/176b8434127b4d90bfb1360e128e586c:oneamongus/about-us/3.jpg',
    alt: { en: 'Events Photo -- All rights reserved', 'zh-Hans': '活动照片，保留所有权利' },
  },
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
  transition:
    border-color 0.25s,
    background-color 0.25s;
}

.splideimg:hover {
  border-color: var(--vp-c-brand-1);
}
</style>
