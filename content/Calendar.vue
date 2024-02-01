<script setup lang="ts">
import { ref, onMounted } from 'vue';
import ICAL, { CalendarComponent } from 'ical';

// Props
const props = defineProps({
  url: {
    type: String,
    required: true,
  },
});

// Reactive properties
const evs = ref<CalendarComponent[]>([]);

// Function to fetch and parse the ical
const fetchIcal = async () => {
  try {
    const response = await fetch(`https://corsproxy.io/?${encodeURIComponent(props.url)}`);
    if (!response.ok) throw new Error('Network response was not ok');

    const data = await response.text();
    const cal = ICAL.parseICS(data);

    // Get the events
    const now = new Date();
    console.log(cal);

    const _tmp = [];
    for (let k in cal) _tmp.push(cal[k]);
    const events = _tmp.filter((ev) => ev.type == 'VEVENT' && ev.start && ev.start > now);

    // If there are no upcoming events, show one from the past
    if (events.length == 0) {
      const pastEvents = _tmp.filter((ev) => ev.type == 'VEVENT' && ev.start && ev.start < now);
      if (pastEvents.length > 0) events.push(pastEvents[pastEvents.length - 1]);
    }

    // Remove the terrible line added by Google Meet
    events.forEach((e) => {
      if (e['GOOGLE-CONFERENCE']) {
        e.googleMeet = e['GOOGLE-CONFERENCE'];
        delete e['GOOGLE-CONFERENCE'];
        // Typically, the description uses HTML <br> for line breaks, and only the Google Meet line
        // uses \n. So the first \n we see indicate the start of the Google Meet line.
        // TODO: This might need more testing

        if (e.description?.includes('\n'))
          e.description = e.description.substring(0, e.description.indexOf('\n'));

        // if (e.description.includes('<br>'))
        //     e.description = e.description.substring(0, e.description.lastIndexOf('<br>'))
      }
    });

    evs.value = events;
  } catch (error) {
    console.error('There was a problem with the fetch operation:', (error as Error).message);
  }
};

// Execute the fetch function on component mount
onMounted(fetchIcal);
</script>

<template>
  <div class="description" v-if="evs.length === 0">There is no recent event(s).</div>
  <div class="events">
    <div class="event" v-for="ev in evs" :key="ev.summary">
      <div class="date" v-if="ev.start">
        <span class="month">{{ ev.start.toLocaleDateString('default', { month: 'short' }) }}</span>
        <span class="day">{{ ev.start.toLocaleDateString('default', { day: 'numeric' }) }}</span>
        <span class="dow">{{ ev.start.toLocaleDateString('default', { weekday: 'long' }) }}</span>
        <div class="actual-date">
          <span class="month">{{
            ev.start.toLocaleDateString('default', { month: 'short' })
          }}</span>
          <span class="day">{{ ev.start.toLocaleDateString('default', { day: 'numeric' }) }}</span>
          <span class="dow">{{ ev.start.toLocaleDateString('default', { weekday: 'long' }) }}</span>
        </div>
      </div>
      <div class="info">
        <div class="summary">{{ ev.summary }}</div>
        <div class="time" v-if="ev.start && ev.end">
          {{ ev.start.toLocaleTimeString('default', { hour: '2-digit', minute: '2-digit' }) }} -
          {{
            ev.end.toLocaleString('default', {
              hour: '2-digit',
              minute: '2-digit',
              timeZoneName: 'long',
            })
          }}
        </div>

        <a class="googleMeetBtn" v-if="ev.googleMeet" :href="(ev.googleMeet as string)">
          <img src="./assets/google-meet.svg" alt="google meet icon" />
          <span>Google Meet</span>
        </a>

        <div class="location">{{ ev.location }}</div>
        <div class="description" v-html="ev.description"></div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="sass">
a
    text-decoration: none
    color: inherit

a:hover
    color: inherit

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

.event:hover
    border-color: var(--vp-c-brand-1)

.events
    display: flex
    flex-direction: column
    gap: 1em

.date, .actual-date
    display: flex
    gap: 0.5em
    justify-content: flex-end

.date
    .month, .day
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

.dow, .time
    color: var(--vp-c-brand-1)

.summary
    font-weight: bold
    font-size: 1.2em

.description
    margin-top: 1em

// Google Meet button (The button style is copied from VitePress homepage theme)
.googleMeetBtn
    display: flex
    align-items: center
    gap: 0.5em
    margin-top: 1em

    width: max-content

    border-color: var(--vp-button-alt-border)
    color: var(--vp-button-alt-text)
    background-color: var(--vp-button-alt-bg)

    border-radius: 20px
    padding: 0 20px
    line-height: 38px
    font-size: 14px

    transition: all 0.5s ease

    img
        width: 1.5em
        height: 1.5em

.googleMeetBtn:hover
    border-color: var(--vp-button-alt-hover-border)
    color: var(--vp-button-alt-hover-text)
    background-color: var(--vp-button-alt-hover-bg)

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
