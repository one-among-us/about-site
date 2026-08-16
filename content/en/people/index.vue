<template>
  <main class="PeopleView">
    <div class="container">
      <section v-for="[sectionTitle, peopleInSection] in Object.entries(people)" :key="sectionTitle">
        <h1 class="section-title">{{ sectionTitle }}</h1>
        <div role="list" class="people">
          <div
            v-for="(person, index) in peopleInSection"
            :ref="(element) => setPersonElement(element, `${sectionTitle}-${index}`)"
            :key="person.title"
            role="listitem"
          >
            <a class="person-link" :href="person.link">
              <article class="person">
                <img :src="person.icon.src" :alt="person.title" />
                <div class="info">
                  <h2 class="name">{{ person.title }}</h2>
                  <p v-if="person.details" class="details">{{ person.details }}</p>
                </div>
              </article>
            </a>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>
<script setup lang="ts">
import { onBeforeUnmount, onMounted } from 'vue';

interface Person {
  title: string;
  details?: string;
  link: string;
  icon: {
    src: string;
    width?: string;
  };
}

interface People {
  [index: string]: Person[];
}

const personElements = new Map<string, HTMLElement>();
let resizeObserver: ResizeObserver | undefined;

const resizePerson = (element: HTMLElement) => {
  const card = element.firstElementChild as HTMLElement | null;
  if (!card) return;

  const gap = parseFloat(getComputedStyle(element).fontSize);
  element.style.gridRowEnd = `span ${Math.ceil(card.getBoundingClientRect().height + gap)}`;
};

const setPersonElement = (element: unknown, key: string) => {
  const htmlElement = element as HTMLElement | null;
  const previousElement = personElements.get(key);
  if (previousElement && previousElement !== htmlElement) resizeObserver?.unobserve(previousElement);

  if (htmlElement) {
    personElements.set(key, htmlElement);
    resizeObserver?.observe(htmlElement.firstElementChild as HTMLElement);
  } else {
    personElements.delete(key);
  }
};

onMounted(() => {
  resizeObserver = new ResizeObserver((entries) => {
    for (const entry of entries) resizePerson(entry.target.parentElement as HTMLElement);
  });

  for (const element of personElements.values()) {
    resizeObserver.observe(element.firstElementChild as HTMLElement);
    resizePerson(element);
  }
});

onBeforeUnmount(() => resizeObserver?.disconnect());

const people: People = {
  'Meet the Team!': [
    {
      title: 'Esme (she/她/elle)',
      details:
        'Esme is our director. She is in charge of One Among Us annual TDoR and TDoV events in Toronto and is currently working on political campaigns demanding OHIP for all. She doesn’t enjoy computer programming, nor does she enjoy learning math. What she loves is to capture the everyday landscapes of the city and moments of her friends on photo, as well as fixing up vintage bikes and electronics.',
      link: 'https://eu2.contabostorage.com/176b8434127b4d90bfb1360e128e586c:oneamongus/about-us/people/esme.jpg',
      icon: {
        src: 'https://eu2.contabostorage.com/176b8434127b4d90bfb1360e128e586c:oneamongus/about-us/people/esme.jpg',
        width: '100%',
      },
    },
    {
      title: 'Annie (she/her)',
      details:
        'Annie is one of One Among Us website maintainers, she contributes on writing entries that preserve memories of our departed friends. Occasionally, she gets bursts of inspiration and enjoys expressing them creatively. Well, she is also a stray cat who loves sneaking snacks (figuratively).',
      link: 'https://eu2.contabostorage.com/176b8434127b4d90bfb1360e128e586c:oneamongus/about-us/people/annie.png',
      icon: {
        src: 'https://eu2.contabostorage.com/176b8434127b4d90bfb1360e128e586c:oneamongus/about-us/people/annie.png',
        width: '100%',
      },
    },
    {
      title: 'Vapaa (they/she)',
      details:
        'Vapaa is primarily responsible for organizing and sharing a wide range of information, including how gender-diverse individuals can better complete their education, plan and start their lives worldwide, and many other related areas. If Vapaa does not notice the approach of other beings, you might see them jump in fright when startled.',
      link: 'https://eu2.contabostorage.com/176b8434127b4d90bfb1360e128e586c:oneamongus/about-us/people/vapaa.jpg',
      icon: {
        src: 'https://eu2.contabostorage.com/176b8434127b4d90bfb1360e128e586c:oneamongus/about-us/people/vapaa.jpg',
        width: '100%',
      },
    },
    {
      title: 'Beiyan Shu (she/they)',
      details:
        'Shu is primarily responsible for the Toronto community service and the inter-communication of One Among Us. She likes being with people. She is not a good cook and we warned you not to eat her cooking.',
      link: 'https://eu2.contabostorage.com/176b8434127b4d90bfb1360e128e586c:oneamongus/about-us/people/shu.png',
      icon: {
        src: 'https://eu2.contabostorage.com/176b8434127b4d90bfb1360e128e586c:oneamongus/about-us/people/shu.png',
        width: '100%',
      },
    },
  ],
  'In memorial of': [
    {
      title: 'ArtsEpiphany',
      link: 'https://one-among.us/profile/ArtsEpiphany',
      icon: {
        src: 'https://data.one-among.us/people/ArtsEpiphany/photos/profile.jpg',
      }
    },
    {
      title: 'Elihuso Quigley (cat/neko)',
      details: 'A neko cat which could coding...\nYep our tech supporter just a neko!',
      link: 'https://github.com/LS-KR',
      icon: {
        src: 'https://avatars.githubusercontent.com/u/64070144?v=4',
      }
    },
  ],
};
</script>

<style scoped lang="sass">
.PeopleView
    position: relative
    padding: 0 24px

@media (min-width: 640px)
    .PeopleView
        padding: 0 48px

@media (min-width: 960px)
    .PeopleView
        padding: 0 64px

.container
    margin: 0 auto
    max-width: 1152px

.section-title
    margin-top: 2.5rem
    color: var(--vp-c-text-2)
    font-size: 1.2rem

.people
    display: grid
    grid-template-columns: minmax(0, 1fr)
    grid-auto-flow: row
    grid-auto-rows: 1px
    column-gap: 1em
    width: 100%
    padding: 1em 0

    > div
        min-width: 0

@media (min-width: 960px)
    .people
        grid-template-columns: repeat(2, minmax(0, 1fr))

.person-link
    display: block
    color: inherit
    text-decoration: none

.person
    overflow: hidden
    width: 100%
    border: 1px solid var(--vp-c-bg-soft)
    border-radius: 12px
    background-color: var(--vp-c-bg-soft)
    transition: border-color 0.25s, background-color 0.25s

    &:hover
        border-color: var(--vp-c-brand-1)

    img
        display: block
        width: 100%
        height: auto
        border-radius: 12px

.info
    min-width: 0
    padding: 1em

.name
    margin: 0 0 4px
    overflow-wrap: anywhere
    font-size: 1.2em
    font-weight: bold

.details
    margin: 0
    overflow-wrap: anywhere
    white-space: pre-line
</style>
