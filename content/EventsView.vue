<template>
  <div class="EventGrid">
    <fieldset class="displayModeBox">
      <legend class="legendText">{{ labels.displayMode }}</legend>
      <div class="choices">
        <div class="choice">
          <label>
            <input type="radio" :checked="!showText" @input="showText = false">
            {{ labels.showPoster }}
          </label>
        </div>
        <div class="choice">
          <label>
            <input type="radio" :checked="showText" @input="showText = true">
            {{ labels.showText }}
          </label>
        </div>
      </div>
    </fieldset>
    <div class="container">
      <div role="list" class="events">
        <div v-for="({ name, item, Content }) in events" role="listitem" :key="name" loading='lazy'>
          <article class="event">
            <time v-if="item.time" class="date" :datetime="getEventDate(new Date(item.time))">
              <span class="year">{{ (new Date(item.time)).toLocaleDateString('default', {  year: 'numeric' }) }}</span>
              <span class="month">{{ (new Date(item.time)).toLocaleDateString('default', {  month: 'short' }) }}</span>
              <span class="day">{{ (new Date(item.time)).toLocaleDateString('default', { day: 'numeric' }) }}</span>
              <div class="actual-date" aria-hidden="true">
                <span class="year">{{ (new Date(item.time)).toLocaleDateString('default', {  year: 'numeric' }) }}</span>
                <span class="month">{{ (new Date(item.time)).toLocaleDateString('default', {  month: 'short' }) }}</span>
                <span class="day">{{ (new Date(item.time)).toLocaleDateString('default', { day: 'numeric' }) }}</span>
              </div>
            </time>
            <div>
              <div class="info">
                <h2 class="summary" v-html="name"></h2>
                <p class="time">
                  <time v-if="item.time" :datetime="getEventFullDateTime(new Date(item.time))">
                    {{ (new Date(item.time)).toLocaleTimeString('default', { weekday: "long", hour: '2-digit', minute: '2-digit', hour12: false, timeZoneName: "short" }) }}
                  </time>
                  <span v-if="item.location">
                    @ {{ item.location }}
                  </span>
                </p>
                <div role="list" class="community">
                  <div v-for="c in item.community" role="listitem" :key="c" class="cclick" loading='lazy' v-html="c">
                  </div>
                  <div class="clink" v-if="item.link && item.link.type" role="listitem">
                    <a v-if="item.link && item.link.type" class="link-type" :href="`${item.link.url}`">
                      {{ item.link.type }}
                    </a>
                  </div>
                </div>
                <!--div class="lang">
                    {{
                    item.lang
                    ? item.lang.reduce((x, y) => x + " / " + y)
                    : "English / 普通话 / 吳語 / 日本語"
                    }}
                    </div-->
              </div>
              <div class="poster">
                <img v-show="!showText" :src="`/assets/events/${item.image}`" :alt="`${name}`" />
                <component v-show="showText" :is="Content" />
                <!-- When js is not available, the user cannot toggle, so make both text and poster visible -->
                <noscript>
                  <component :is="Content" />
                </noscript>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { getEventDate, getEventFullDateTime } from './dateTimeUtils';
import { computed, ref, onMounted, nextTick } from 'vue';

const { imports } = defineProps({
  imports: Object,
  labels: Object,
});

const showText = ref(false);
const showPoster = computed({
  get() { return !showText; },
  set(v) { showText = !v; },
});

const events = computed(() => {
  const r = Object.values(imports).map(({
    __pageData,
    default: Content,
  }) => {
    const { title: name, ...item } = __pageData.frontmatter;
    return {
      name,
      filename: __pageData.filePath,
      item,
      Content,
    };
  });
  // sort by time first, then filename
  r.sort((a, b) =>
    new Date(b.item.time).getTime() - new Date(a.item.time).getTime()
      || (a.filename > b.filename ? -1 : a.filename < b.filename ? 1 : 0)
  );
  return r;
});
</script>

<style scoped lang="sass">
// vitepress/VPFeatures
.EventGrid
    position: relative
    padding: 0 24px

@media (min-width: 640px)
    .EventGrid
        padding: 0 48px

@media (min-width: 960px)
    .EventGrid
        padding: 0 64px

// See Also: ../Calendar.vue

$grid__cols: 12
.container
    margin: 0 auto
    max-width: 1152px

.events
    display: block
    width: 100%
    padding: 1em 0 1em 0

// Event box (this card style is copied from VitePress homepage theme)
.event
    display: flex
    gap: 1em
    border: 1px solid var(--vp-c-bg-soft)
    border-radius: 12px
    height: 100%
    background-color: var(--vp-c-bg-soft)
    transition: border-color 0.25s, background-color 0.25s
    padding: 1em
    margin: 0 0 1em 0
    width: 100%

@media (min-width: 960px)
    .events
        display: block
        column-count: 2

.event:hover
    border-color: var(--vp-c-brand-1)

img
    border-radius: 12px

.date, .actual-date
    display: flex
    gap: 0.5em
    justify-content: flex-end

.date
    .month, .day, .year
        font-size: 1.5em

    .dow
        font-size: 1.2em
        line-height: 1.2em

    // BEGIN sideways-lr COMPATIBILITY WORKAROUND
    // It's okay if you don't understand this whole ordeal, css is awesome right?
    // Check https://stackoverflow.com/q/77353660/7346633
    writing-mode: vertical-rl
    position: relative

    span
        opacity: 0

    .actual-date
        position: absolute
        top: 0
        left: 0

        writing-mode: lr
        width: max-content
        transform: rotate(-90deg) translateX(-100%)
        transform-origin: top left

        span
            opacity: unset
    // END sideways-lr COMPATIBILITY WORKAROUND

.dow, .time, .month
    color: var(--vp-c-brand-1)

.summary
    font-weight: bold
    font-size: 1.2em
    margin: 0 0 4px 0

.description
    margin-top: 1em

.community
    display: flex
    gap: 6px
    flex-wrap: wrap
    padding: 6px 0px 6px 0px
    margin: 0 0 4px 0

.cclick, .clink
    border: 1px solid var(--vp-c-indigo-soft)
    border-radius: 12px
    padding: 2px 8px 0 8px
    color: var(--vp-c-indigo-1)
    background-color: var(--vp-c-indigo-soft)
    height: 26px
    white-space: nowrap

.clink
    border: 1px solid
    border-radius: 12px
    padding: 2px 8px 0 8px
    color: var(--vp-c-red-1)
    background-color: var(--vp-c-red-soft)

// Phone
@media(max-width: 600px)
    .event
        flex-direction: column
        gap: 1.5em
        font-size: 0.8em

    .date
        writing-mode: horizontal-tb
        transform: none
        justify-content: flex-start
        align-items: flex-end

        .actual-date
            display: none

        span
            opacity: 1

.displayModeBox
    border: 1px solid var(--vp-c-brand-1)
    border-radius: 12px
    margin-left: auto
    margin-right: auto
    width: fit-content

    .legendText, .choices
        margin-left: auto
        margin-right: auto

    .choices
        width: fit-content
        margin-bottom: 5px
        margin-left: 10px
        margin-right: 10px
</style>

<style lang="sass">
.poster
    p
        margin-top: 0.5em
    ul, ol
        list-style: inherit
        margin-left: 1em
    a
        color: var(--vp-c-brand-1)
        text-decoration: underline
        &:hover, &:focus-visible
            color: var(--vp-c-brand-2)
</style>
