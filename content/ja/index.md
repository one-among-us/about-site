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
  - icon: <img src="https://oau.edu.kg/logo.png">
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
