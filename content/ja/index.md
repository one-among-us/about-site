---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: One Among Us
  text: '〜秋の葉ものがたり〜'
  tagline: 東アジアと海外でのトランスジェンダー交流・相互扶助を目指す非営利組織。
  image: https://www.one-among.us/favicon-large.png
  actions:
    #- theme: brand
    #  text: Markdown Examples
    #  link: /markdown-examples
    #- theme: alt
    #  text: API Examples
    #  link: /api-examples
    - theme: brand
      text: ニューズ
      link: /ja/posts
    - theme: alt
      text: リンク
      link: /ja/links
    - theme: alt
      text: 連絡先
      link: /ja/contact
    - theme: brand
      text: ご支援のお願い
      link: https://github.com/sponsors/one-among-us/

features:
  - icon: <img src="https://www.one-among.us/favicon-large.png" style="padding:8px;">
    title: 秋の葉ものがたり One Among Us
    details: トランスジェンダーとそのアライたちの追悼サイト。
    link: https://one-among.us
  - icon: <img src="https://oau.edu.kg/TIA_LogoLA@3x.png">
    title: トランスアカデミー Trans in Academia!
    details: 学術を追求するトランスジェンダーおよびジェンダー・ノンコンフォーミングの同士のコミュニティ（いま中国語は大部分、日本語を使用する方が大歓迎）。
    link: https://oau.edu.kg
  - title: 'Arts Among Us'
    details: トランスコミュニティのアートギャラリー。
  - icon: <img src="https://oau.edu.kg/rxn-logo.jpg" style="mix-blend-mode:multiply;">
    title: ローカルサービス
    details: ローカルサービスチーム。
    link: ja/contact#ローカルサービス
---

<div :class="$style.outerContent">
<div :class="$style.content" class="vp-doc">

## 活動カレンダー

<script setup>
import Calendar from '../Calendar.vue'
</script>

<Calendar url="https://oau.app/calendar/ical/c_def3dc162ddaf3b15b3ee419551a2b65068b2493c0ecbbdce7daa867f2bc0aeb%40group.calendar.google.com/public/basic.ics"></Calendar>

[Google Calendar に登録する](https://calendar.google.com/calendar/u/1?cid=Y19kZWYzZGMxNjJkZGFmM2IxNWIzZWU0MTk1NTFhMmI2NTA2OGIyNDkzYzBlY2JiZGNlN2RhYTg2N2YyYmMwYWViQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20)・[ICal(ics)ファイルダウンロード](https://calendar.google.com/calendar/ical/c_def3dc162ddaf3b15b3ee419551a2b65068b2493c0ecbbdce7daa867f2bc0aeb%40group.calendar.google.com/public/basic.ics)。

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
