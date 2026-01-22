---
title: 活动日历
layout: page
---

<script setup>
import EventsView from '../../EventsView.vue';

const importedFiles = import.meta.glob('./_*.md', { eager: true });
const labels = {
  displayMode: '显示模式',
  showPoster: '显示活动海报',
  showText: '显示活动文字',
};
</script>

<EventsView :imports="importedFiles" :labels="labels" />
