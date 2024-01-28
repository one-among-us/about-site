<script lang="tsx">
import '@splidejs/vue-splide/css/skyblue';
import { defineClientComponent } from 'vitepress';

const photos = [
  'https://www.one-among.us/favicon-large.png',
  '/people/beiyan-shu.png',
  '/people/vapaa.jpg',
];

export default defineClientComponent(async () => {
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
        <SplideSlide key={photo}>
          <img src={photo} />
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
