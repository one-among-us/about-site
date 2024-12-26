---
title: Events Calendar
layout: page
events:
  2025 Board Election:
    time: 2024-12-20T23:59:59+00:00
    link:
      type: Vote
      url: https://vote.belenios.org/v3/election#LVmumycHSUVuos
    community:
      - Members Only
    image: election25.jpg
  2024 TDOR Broadcast Event (Poster II):
    lang:
      - 普通话
    time: 2024-11-23T20:00:00+08:00
    link:
      type: Replay (YouTube)
      url: 'https://www.youtube.com/watch?v=IA7gERgmK_c'
    community:
      - Online
      - feat. Project Trans
      - feat. 跨性别相关放送
    image: 11200-compressed.jpg

  2024 TDOR Broadcast Event (Poster I):
    lang:
      - 普通话
    time: 2024-11-23T20:00:00+08:00
    link:
      type: Replay (YouTube)
      url: 'https://www.youtube.com/watch?v=IA7gERgmK_c'
    community:
      - Online
      - feat. Project Trans
      - feat. 跨性别相关放送
    image: 11203-compressed.jpg

  OAU 02 Local - TDOR Vigil:
    lang:
      - 普通话
      - English
      - 日本語
    time: 2024-11-22T18:30:00-05:00
    community:
      - Toronto
    location: The 519 (Toronto)
    image: 1120-compressed.jpg

  2024 TDOR - Write a Letter:
    time: 2024-11-18T12:00:00+08:00
    community:
      - Online
      - feat. Project Trans
      - feat. 跨性别相关放送
    image: tdor20241.jpg

  Neuroqueer Roundtable:
    lang:
      - 普通话
    location: 720 Spadina Ave, 2nd Fl (Toronto)
    time: 2024-11-09T13:30:00-05:00
    community:
      - Toronto
      - feat. Studio DISSONANCE
    image: neuroqueer.jpg

  Gender-Diverse Free MakeUp Trial:
    lang:
      - 普通话
      - English
    time: 2024-10-25T18:30:00-04:00
    location: The 519 (Toronto)
    community:
      - Toronto
      - feat. Studio DISSONANCE
    image: makeup-toronto.jpg

  East Asian Trans Support Group:
    lang:
      - 普通话
      - English
      - 日本語
    time: 2024-09-27T18:30:00-04:00
    location: The 519 (Toronto)
    community:
      - Toronto
    image: 519EventsPosterZip.png

  Mooncake Gathering:
    lang:
      - 普通话
      - English
    time: 2024-09-14T15:00:00-04:00
    location: Christie Pits Park (Toronto)
    community:
      - Toronto
    image: toronto-midautumn.jpg

  One Among Us 2024 Annual Meeting:
    lang:
      - 普通话
      - English
      - 日本語
    time: 2024-08-31T14:15:00+00:00
    location: North York Central Library & Online
    community:
      - 多伦多社群
      - 线上
      - OAU 会员
    image: ag-2024.jpg

  Abolitionist Pride Together:
    lang:
      - 普通话
      - English
    community:
      - Toronto
      - feat. Chinese Feminism in Toronto
      - feat. NPPC
    time: 2024-06-30T14:00:00-04:00
    location: Grange Park (Toronto)
    image: abopri2024.jpg

  TGD Employment & Education Roundtable:
    lang:
      - 普通话
    community:
      - Online
      - UniGuide
      - feat. Trans in Academia!
      - feat. RLE.wiki
    time: 2024-06-22T20:00:00+08:00
    image: bhd-poster-imageonly.jpg

  2024 TDOV Online Broadcast:
    lang:
      - 普通话
    time: 2024-03-31T20:00:00+08:00
    image: OAU_TDOV_2024.jpg
    community:
      - TransArts
      - Online
      - feat. Project Trans
    link:
      type: Replay (Bilibili)
      url: https://www.bilibili.com/video/BV14z421o76C/

  2023 TDOR Craft Event:
    lang:
      - 普通话
      - 吳語
      - English
      - 日本語
    time: 2023-11-18T14:00:00-05:00
    image: 2023TDOREvent.png
    community:
      - Toronto
      - Online
      - TransArts
    location: The 519 Community Centre (Toronto)
    link:
      type: Replay (YouTube)
      url: 'https://www.youtube.com/watch?v=QbgYWXa5Pm8'

  Ruins of Memorial:
    time: 2024-11-11
    lang:
      - 普通话
    community:
      - Toronto
      - feat. Chinese Feminism in Toronto
    image: ruins-of-memorial.png
    location: Toronto Public Library - Northern District Branch

  TGD Education Roundtable:
    lang:
      - 普通话
    community:
      - UniGuide
      - Online
    time: 2023-10-28T14:00:00+00:00
    image: bhd-poster.jpg

  2023 TDOV Broadcast:
    lang:
      - 普通话
    image: miyazawa-poster.jpg
    link:
      type: Replay (YouTube)
      url: 'https://www.youtube.com/watch?v=TGhNTd-2I3c'
    time: 2024-03-31T20:00:00+08:00
    description: >
      Livestream reading of Night of the Milky Way Railway on TDOV 2023, by One Among Us & Project Trans.
      Replay is available on YouTube.
---

<div class="EventGrid">
  <div class="container">
    <div class="events">
      <div v-for="(item, name) in $frontmatter.events" :key="name" class="event" loading='lazy'>
        <div class="date" v-if="item.time">
          <span class="year">{{ (new Date(item.time)).toLocaleDateString('default', {  year: 'numeric' }) }}</span>
          <span class="month">{{ (new Date(item.time)).toLocaleDateString('default', {  month: 'short' }) }}</span>
          <span class="day">{{ (new Date(item.time)).toLocaleDateString('default', { day: 'numeric' }) }}</span>
          <div class="actual-date">
            <span class="year">{{ (new Date(item.time)).toLocaleDateString('default', {  year: 'numeric' }) }}</span>
            <span class="month">{{ (new Date(item.time)).toLocaleDateString('default', {  month: 'short' }) }}</span>
            <span class="day">{{ (new Date(item.time)).toLocaleDateString('default', { day: 'numeric' }) }}</span>
          </div>
        </div>
        <div>
          <div class="info">
            <div class="summary"> {{ name }} </div>
            <div class="time">
              <span v-if="item.time">
                {{ (new Date(item.time)).toLocaleTimeString('default', { weekday: "long", hour: '2-digit', minute: '2-digit', hour12: false, timeZoneName: "short" }) }}
              </span>
              <span v-if="item.location">
                @ {{ item.location }}
              </span>
            </div>
            <div class="community">
              <div v-for="c in item.community" :key="c" class="cclick" loading='lazy'> {{ c }}
              </div>
              <div class="clink" v-if="item.link && item.link.type">
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
            <img :src="`/assets/events/${item.image}`" :alt="`${name}`" />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

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

</style>
