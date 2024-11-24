---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
hero:
  name: 'One Among Us'
  text: ''
  tagline: A warm, strong and resilient community for East-Asian and East-Asian Canadian transgender and gender-diverse people.
  image: /assets/favicon-new.png
  actions:
    - theme: alt
      text: About
      link: /about
    - theme: alt
      text: People
      link: /people
    - theme: alt
      text: Posts
      link: /posts
    - theme: alt
      text: Contact
      link: /contact
    - theme: alt
      text: Events
      link: /zh-Hans/events
    - theme: brand
      text: Community Resource
      link: /community-resource
    - theme: brand
      text: Member Login
      link: /login
    - theme: brand
      text: Support .us
      link: https://github.com/sponsors/one-among-us/

features:
  - icon: <img src="/assets/favicon-new.png">
    title: One Among Us
    details: A memorial website dedicated to transgender individuals and their allies who had passed away.
    link: https://one-among.us
  - icon: <img src="https://rle.wiki/logo.svg">
    title: RLE.wiki
    details: A collective effort aimed at providing valuable resources and support for transgender and gender-diverse real-life experience.
    link: https://rle.wiki/
  - icon: <img src="/assets/rxn-logo.png">
    title: Local Services
    details: Local service groups. Mainly in Greater Toronto Area.
    link: /community-resource

friends:
  - title: Project Trans
    details: Project Trans (formerly MtF.wiki) aims to better maintain multiple projects including MtF wiki, FtM wiki and more.
    link: https://about.project-trans.org/en/
    icon: <img src="/assets/prts-logo.png">
  - title: 'Awesome Trans'
    details: A transgender navigation site owned and maintained by Project Trans.
    link: https://2345.lgbt/en/
    icon: <img src="/assets/2345brand.svg">
  - title: Trans in Academia! (TiA!)
    details: An organization aiming to document theoretical and practical knowledge from the Sinophone trans community, help trans people pursue studies, professional development, and employment, share academic knowledge related to trans issues, and produce original content from the perspective of trans people. 
    link: https://transinacademia.org
    icon: <img src="/assets/tia-logo.png">
---

Hi! We are One Among Us, proudly a community of the proud East Asian and East Asian-Canadian transgender and gender-diverse family. We provide peer and community support for our fellows, aiming to build connections between travelers and those in our hometown.

We started as [a memorial site](https://one-among.us) for our friends and allies who passed away. We believe that both those who are still living and those who had passed away are important members of our community, are the “Ones” Among Us. Now we have developed into [an alliance of seven interconnected workgroups](./about).

We are a registered not-for-profit organization in Ontario, Canada.

## Events Calendar

<script setup lang="ts">
import Calendar from '@/Calendar.vue'
import Carousel from '@/Carousel.vue'
</script>

<Calendar url="https://oau.app/calendar/ical/c_def3dc162ddaf3b15b3ee419551a2b65068b2493c0ecbbdce7daa867f2bc0aeb%40group.calendar.google.com/public/basic.ics"></Calendar>

[Add to your Google Calendar](https://calendar.google.com/calendar/u/1?cid=Y19kZWYzZGMxNjJkZGFmM2IxNWIzZWU0MTk1NTFhMmI2NTA2OGIyNDkzYzBlY2JiZGNlN2RhYTg2N2YyYmMwYWViQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20) or [Get link to ICal (ics) file](https://calendar.google.com/calendar/ical/c_def3dc162ddaf3b15b3ee419551a2b65068b2493c0ecbbdce7daa867f2bc0aeb%40group.calendar.google.com/public/basic.ics).

## Photos

<Carousel />

## Friends

<style module>

.logo img {
  content: url("/assets/favicon-new.png");
}
</style>
