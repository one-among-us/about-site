---
title: Events Calendar
layout: page
---

<script setup>
import EventsView from '../../EventsView.vue';

const importedFiles = import.meta.glob('./_*.md', { eager: true });
const labels = {
  displayMode: 'Display mode',
  showPoster: 'Show event poster',
  showText: 'Show event text',
};
</script>

<EventsView :imports="importedFiles" :labels="labels" />
