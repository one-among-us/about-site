---
title: People
layout: page
people:
  'Meet the Team!':
    - title: 'Esme (she/她/elle)'
      details: >-
        Esme is our director. She is in charge of One Among Us annual TDoR and
        TDoV events in Toronto and is currently working on political campaigns
        demanding OHIP for all. She doesn’t enjoy computer programming, nor
        does she enjoy learning math. What she loves is to capture the everyday
        landscapes of the city and moments of her friends on photo, as well as
        fixing up vintage bikes and electronics.
      link: 'https://eu2.contabostorage.com/176b8434127b4d90bfb1360e128e586c:oneamongus/about-us/people/esme.jpg'
      icon:
        src: 'https://eu2.contabostorage.com/176b8434127b4d90bfb1360e128e586c:oneamongus/about-us/people/esme.jpg'
    - title: 'Annie (she/her)'
      details: >-
        Annie is one of One Among Us website maintainers, she contributes on
        writing entries that preserve memories of our departed friends.
        Occasionally, she gets bursts of inspiration and enjoys expressing them
        creatively. Well, she is also a stray cat who loves sneaking snacks
        (figuratively).
      link: 'https://eu2.contabostorage.com/176b8434127b4d90bfb1360e128e586c:oneamongus/about-us/people/annie.png'
      icon:
        src: 'https://eu2.contabostorage.com/176b8434127b4d90bfb1360e128e586c:oneamongus/about-us/people/annie.png'
    - title: 'Vapaa (they/she)'
      details: >-
        Vapaa is primarily responsible for organizing and sharing a wide range
        of information, including how gender-diverse individuals can better
        complete their education, plan and start their lives worldwide, and
        many other related areas. If Vapaa does not notice the approach of other
        beings, you might see them jump in fright when startled.
      link: 'https://eu2.contabostorage.com/176b8434127b4d90bfb1360e128e586c:oneamongus/about-us/people/vapaa.jpg'
      icon:
        src: 'https://eu2.contabostorage.com/176b8434127b4d90bfb1360e128e586c:oneamongus/about-us/people/vapaa.jpg'
    - title: 'Beiyan Shu (she/they)'
      details: >-
        Shu is primarily responsible for the Toronto community service and the
        inter-communication of One Among Us. She likes being with people. She is
        not a good cook and we warned you not to eat her cooking.
      link: 'https://eu2.contabostorage.com/176b8434127b4d90bfb1360e128e586c:oneamongus/about-us/people/shu.png'
      icon:
        src: 'https://eu2.contabostorage.com/176b8434127b4d90bfb1360e128e586c:oneamongus/about-us/people/shu.png'
  'In memorial of':
    - title: ArtsEpiphany
      link: 'https://one-among.us/profile/ArtsEpiphany'
      icon:
        src: 'https://data.one-among.us/people/ArtsEpiphany/photos/profile.jpg'
    - title: 'Elihuso Quigley (cat/neko)'
      details: |-
        A neko cat which could coding...
        Yep our tech supporter just a neko!
      link: 'https://github.com/LS-KR'
      icon:
        src: 'https://avatars.githubusercontent.com/u/64070144?v=4'
---

<script setup lang="ts">
import Page from './index.vue';
import { useData } from 'vitepress';

const { frontmatter } = useData();
</script>

<Page :people="frontmatter.people" />
