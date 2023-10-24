<script setup lang="ts">
import { defineProps, ref, onMounted } from 'vue';
import ICAL from 'ical';

// Props
const props = defineProps({
    url: {
        type: String,
        required: true,
    },
});

// Reactive properties
const evs = ref<CalEvent[]>([]);

interface CalEvent {
    summary: string;
    start: Date;
    end: Date;
    location: string;
    description: string;
    url: string;
}

// Function to fetch and parse the ical
const fetchIcal = async () => {
    try {
        const response = await fetch(`https://corsproxy.io/?${encodeURIComponent(props.url)}`);
        if (!response.ok)
            throw new Error('Network response was not ok');

        const data = await response.text();
        const cal = ICAL.parseICS(data);

        // Get the events
        const now = new Date();
        console.log(cal);

        const _tmp = []
        for (let k in cal) _tmp.push(cal[k]);
        const events = _tmp.filter(ev => ev.type == 'VEVENT' && ev.start > now)

        // If there are no upcoming events, show one from the past
        if (events.length == 0) {
            const pastEvents = _tmp.filter(ev => ev.type == 'VEVENT' && ev.start < now)
            if (pastEvents.length > 0) events.push(pastEvents[pastEvents.length - 1])
        }

        evs.value = events

    } catch (error) {
        console.error("There was a problem with the fetch operation:", error.message);
    }
};

// Execute the fetch function on component mount
onMounted(fetchIcal);

</script>


<template>
    <div class="events">
        <div class="event" v-for="ev in evs" :key="ev.summary">
            <div class="date">
                <span class="month">{{ ev.start.toLocaleString('default', { month: 'short' }) }}</span>
                <span class="day">{{ ev.start.toLocaleDateString('default', { day: 'numeric' }) }}</span>
                <span class="dow">{{ ev.start.toLocaleString('default', { weekday: 'long' }) }}</span>
            </div>
            <div class="info">
                <div class="summary">{{ ev.summary }}</div>
                <div class="time">{{ ev.start.toLocaleTimeString('default', { hour: '2-digit', minute: '2-digit' }) }} - {{ ev.end.toLocaleString('default', { hour: '2-digit', minute: '2-digit', timeZoneName: 'long' }) }}</div>
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

.date
    display: flex
    writing-mode: sideways-lr
    gap: 0.5em
    justify-content: flex-end

    .month, .day
        font-size: 1.5em

    .dow
        font-size: 1.2em

.dow, .time
    color: var(--vp-c-brand-1)

.summary
    font-weight: bold
    font-size: 1.2em

.description
    margin-top: 1em

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

        .dow
            line-height: normal
</style>
