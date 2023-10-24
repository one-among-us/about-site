---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: 'One Among Us'
  text: ''
  tagline: A community for East-Asian and East-Asian Canadian transgender and gender diverse people.
  image: https://www.one-among.us/favicon-large.png
  actions:
    #- theme: brand
    #  text: Markdown Examples
    #  link: /markdown-examples
    #- theme: alt
    #  text: API Examples
    #  link: /api-examples
    - theme: brand
      text: Posts
      link: /posts
    - theme: alt
      text: Links
      link: /links
    - theme: alt
      text: Contact
      link: /contact
    - theme: brand
      text: Support .us
      link: https://github.com/sponsors/one-among-us/

features:
  - icon: <img src="https://www.one-among.us/favicon-large.png" style="padding:8px;">
    title: One Among Us
    details: A memorial website dedicated to transgender individuals and their allies who had passed away.
    link: https://one-among.us
  - icon: <img src="https://oau.edu.kg/logo.png">
    title: Trans in Academia!
    details: A community for diasporic Chinese transgender and gender non-conforming people who are pursuing their academic goals or careers.
    link: https://oau.edu.kg
  - title: 'Arts Among Us: An epiphanic library of creativity.'
    details: An online gallery showcasing Asian-Canadian trans and queer arts.
  - icon: <img src="https://oau.edu.kg/rxn-logo.jpg" style="mix-blend-mode:multiply;">
    title: Local Services
    details: Local service groups.
    link: contact#local-service-groups
---

<div :class="$style.outerContent">
<div :class="$style.content" class="vp-doc">

## Events Calendar

<script setup>
import Calendar from './Calendar.vue'
</script>

<Calendar url="https://calendar.google.com/calendar/ical/c_def3dc162ddaf3b15b3ee419551a2b65068b2493c0ecbbdce7daa867f2bc0aeb%40group.calendar.google.com/public/basic.ics"></Calendar>

[Add to your Google Calendar](https://calendar.google.com/calendar/u/1?cid=Y19kZWYzZGMxNjJkZGFmM2IxNWIzZWU0MTk1NTFhMmI2NTA2OGIyNDkzYzBlY2JiZGNlN2RhYTg2N2YyYmMwYWViQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20) or [Get link to ICal (ics) file](https://calendar.google.com/calendar/ical/c_def3dc162ddaf3b15b3ee419551a2b65068b2493c0ecbbdce7daa867f2bc0aeb%40group.calendar.google.com/public/basic.ics).

## History

In November 2021, Azalea, Yvette and their friends started a website to mourn their transgender friends.
The website was launched before 2021's Transgender Day of Remembrance.
It was named by Maura.
“One Among Us” — represents that both those who are still living and those who had passed away are members of our trans and gender non-conforming community.
As they wrote on the front page:

> Perhaps the names written on the monuments made of stones do not convey what they really are, but we can remember them properly by building monuments made of zeros and ones with our hearts.

On Dec 15, 2022, One Among Us was incorporated as a registered NPO in Toronto, Ontario, Canada. We believe the incorporation isn't just a change in name; the NPO status will certainly help with our work.

On Mar 13, 2023, we lost our beloved member, ArtsEpiphany, to her mental health condition. We named our new online-arts-gallery project “Arts Among Us” in memory of her.

We now have one full-time coordinator and more than ten part-time volunteers. Some of them work in Canada; others work outside Canada.

</div>
</div>

<style module>
.content {
  max-width: 1152px;
  margin: 0 auto 2rem auto;
}
.outerContent {
  padding: 0 1rem;
}
</style>
