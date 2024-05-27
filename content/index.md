---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: 'One Among Us'
  text: ''
  tagline: A community for East-Asian and East-Asian Canadian transgender and gender diverse people.
  image: /assets/favicon-new.png
  actions:
    #- theme: brand
    #  text: Markdown Examples
    #  link: /markdown-examples
    #- theme: alt
    #  text: API Examples
    #  link: /api-examples
    - theme: alt
      text: Posts
      link: /posts
    - theme: alt
      text: Links
      link: /links
    - theme: alt
      text: People
      link: /people
    - theme: alt
      text: Contact
      link: /contact
    - theme: alt
      text: Community Resource
      link: /community-resource
    - theme: brand
      text: Support .us
      link: https://github.com/sponsors/one-among-us/

features:
  - icon: <img class="logo" style="padding:8px;">
    title: One Among Us
    details: A memorial website dedicated to transgender individuals and their allies who had passed away.
    link: /#our-memorial
  - icon: <img src="https://oau.edu.kg/TIA_LogoLA@3x.png">
    title: Trans in Academia!
    details: A community for diasporic Chinese transgender and gender non-conforming people who are pursuing their academic goals or careers.
    link: /#trans-in-academia
  - title: 'Arts Among Us: An epiphanic library of creativity.'
    details: An online gallery showcasing Asian-Canadian trans and queer arts.
    link: /#arts-among-us
  - icon: <img src="https://oau.edu.kg/rxn-logo.jpg" style="mix-blend-mode:multiply;">
    title: Local Services
    details: Local service groups.
    link: /#local-groups
---

<div :class="$style.outerContent">
<div :class="$style.content" class="vp-doc">

## Events Calendar

<script setup>
import Calendar from './Calendar.vue'
import Carousel from './Carousel.vue'
</script>

<Calendar url="https://calendar.google.com/calendar/ical/c_def3dc162ddaf3b15b3ee419551a2b65068b2493c0ecbbdce7daa867f2bc0aeb%40group.calendar.google.com/public/basic.ics"></Calendar>

[Add to your Google Calendar](https://calendar.google.com/calendar/u/1?cid=Y19kZWYzZGMxNjJkZGFmM2IxNWIzZWU0MTk1NTFhMmI2NTA2OGIyNDkzYzBlY2JiZGNlN2RhYTg2N2YyYmMwYWViQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20) or [Get link to ICal (ics) file](https://calendar.google.com/calendar/ical/c_def3dc162ddaf3b15b3ee419551a2b65068b2493c0ecbbdce7daa867f2bc0aeb%40group.calendar.google.com/public/basic.ics).

## Our Memorial

We started a website to mourn their transgender friends since 2021 November.
It was launched before 2021’s Transgender Day of Remembrance.
The website was named by Maura “One Among Us.”
— That name represents that both those who are still living and those who had passed away are members of our trans and gender non-conforming community.
As we write on the front page:

> Perhaps the names written on the monuments made of stones do not convey what they really are, but we can remember them properly by building monuments made of zeros and ones with our hearts.

We collect information about those who have passed away within our transgender community and write entries for them lest we forget.

Visit [one-among.us](https://one-among.us) and leave a small lollipop to our beloved friends. Contribute an entry to whom you commemorate via [our GitHub repository](https://github.com/one-among-us/data).

## Local Groups

On 2022 Dec 15, One Among Us was incorporated as a registered NPO in Toronto, Ontario, Canada.
We believe the incorporation isn’t just a change in name; the NPO status will certainly help with our work.
We serve and gather people wherever we live, either in Toronto or somewhere.

Visit our [Linktree](https://linktr.ee/oneamongus) or [Instagram](https://www.instagram.com/oneamongus_ca/) for more events information.

<Carousel />

## Trans in Academia!

Trans in Academia! is our branch for diasporic East Asian and Canadian scholars, students and enthusiasts. Visit their [website](https://oau.edu.kg).

## Arts Among Us

On 2023 Mar 13, we lost our beloved member, ArtsEpiphany, to her mental health condition.
We named our new online-arts-gallery project “Arts Among Us” in memory of her.
Please keep up with our further updates.

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

.logo img {
  content: url("/assets/favicon-new.png");
}
</style>
