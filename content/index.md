---
# https://vitepress.dev/reference/default-theme-home-page
layout: ourhome
hero:
  name: 'One Among Us'
  text: ''
  tagline: A community for East-Asian and East-Asian Canadian transgender and gender diverse people.
  image: "https://www.one-among.us/favicon-large.png"
  actions:
    - theme: alt
      text: About
      link: /about
    - theme: alt
      text: People
      link: /people
    - theme: alt
      text: Archives
      link: /posts
    - theme: alt
      text: Contact
      link: /contact
    - theme: alt
      text: Community Resource
      link: /community-resource
    - theme: brand
      text: Member Login
      link: /res
    - text: Instagram
      link: https://instagram.com/oneamongus_ca
    - text: X (Formerly Twitter)
      link: https://twitter.com/oneamong_us_en
    - theme: brand
      text: Support .us
      link: https://github.com/sponsors/one-among-us/

features:
  - icon: <img src="https://www.one-among.us/favicon-large.png" style="padding:8px;">
    title: One Among Us
    details: A memorial website dedicated to transgender individuals and their allies who had passed away.
    link: https://one-among.us
  - icon: '<img src="https://oau.edu.kg/community-logo.png" style="filter:brightness(90%);">'
    title: Transgender University Guidance
    details: A collective effort aimed at providing valuable resources and support for transgender individuals pursuing higher education.
    link: https://uniguide.oneamongus.ca/
  - icon: <img src="https://oau.edu.kg/rxn-logo.jpg" style="mix-blend-mode:multiply;">
    title: Local Services
    details: Local service groups. Mainly in Greater Toronto Area.
    link: /community-resource
	
friends:
  - title: Project Trans
    details: 'Project Trans (formerly MtF.wiki) aims to better maintain multiple projects including MtF wiki, FtM wiki and more.'
    link: 'https://about.project-trans.org/en/'
    icon: '<img src="https://about.project-trans.org/en/home/logo.png">'
  - title: '2345.LGBT'
    details: 'A transgender navigation site owned and maintained by Project Trans.'
    link: 'https://2345.lgbt/en/'
    icon: '<img src="https://2345.lgbt/brand.svg">'
  - title: 'Trans in Academia!'
    details: 'A community for diasporic Chinese transgender and gender non-conforming people who are pursuing their academic goals or careers.'
    link: 'https://oau.edu.kg'
    icon: '<img src="https://oau.edu.kg/TIA_LogoLA@3x.png">'

intro: >
          Hi! We are One Among Us, proudly a registered not-for-profit organization, but more
          proudly a <strong>community</strong> of the great East Asian and East Asian-Canadian
          transgender and gender diverse family. We provide peer and community support for our
          fellows, aiming to build connection between travelers and those in our hometown. <br />We
          started as a memorial site for Chinese transgender people and allies who passed away. We
          believe that both those who are still living and those who had passed away are important
          members of our community, are the “Ones” Among Us.

---

Hi! We are One Among Us, proudly a registered not-for-profit organization, but more proudly a **community** of the great East Asian and East Asian-Canadian transgender and gender diverse family. We provide peer and community support for our fellows, aiming to build connection between travelers and those in our hometown.

We started as a memorial site for Chinese transgender people and allies who passed away. We believe that both those who are still living and those who had passed away are important members of our community, are the “Ones” Among Us.

## Events Calendar

<script setup lang="ts">
import Calendar from './Calendar.vue'
import Carousel from './Carousel.vue'
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
