import { defineStore } from 'pinia'
import { ref } from 'vue'

function getImageUrl(name) {
  return new URL(`../assets/img/${name}.png`, import.meta.url).href
}
function getVidUrl(name) {
  return new URL(`../assets/vids/${name}.mp4`, import.meta.url).href
}

export const useDataStore = defineStore('data', () => {
  const goals = ['compelling', 'fun', 'customized', 'useful'] //creating xxx website
  const introduction = `Hello there.
  I am an aspiring frontend developer based in Taipei.
  I am diligent, quick and good to work with.
  Hit me up if you need a companion on your web dev journey!`

  const skills = [
    'vue',
    'node.js',
    'MongoDB',
    'Pinia',
    'Quasar',
    'PrimeVue',
    'Tailwind.css',
    'Sass',
    'GSAP',
    'Git',
    'Figma',
    'photoshop',
    'illustrator'
  ]

  const portfolio = [
    {
      title: 'Event Scheduling Website 影展排程網站',
      description:
        'An efficient event scheduling site crafted with PrimeVue, TailwindCSS, and GSAP, collaborating with a backend engineer using Axios.',
      details: `與後端工程師協作，使用vue3 composition api做成的影展排程網站，使用axios串接API，並使用pinia作網站狀態管理。
      使用者可以查看影展的詳細片單，並且做排程管理。
      本專案專注於RWD以及視覺效果的呈現，按設計需求手刻了大多數元件，並且使用了GSAP來做動畫效果。撰寫網站時有嘗試做更好的元件切分及提升程式碼可讀性。`,
      img: getImageUrl('ffSchedular'),
      vid: getVidUrl('dave_demo')
    },
    {
      title: 'Movie Forum 電影論壇',
      description:
        'A dynamic movie discussion platform built using the Quasar framework, GSAP, Node.js, Express, and MongoDB, with TMDb API integration via Axios.',
      details:
        '使用Quasar框架製作的電影論壇，使用Node.js, Express, MongoDB製作後端，並且使用TMDb API串接電影資料。',
      img: getImageUrl('filmory'),
      vid: getVidUrl('filmory')
    },
    {
      title: 'metaCritic line bot 影評查詢機器人',
      description:
        'A line bot that fetches movie ratings from Metacritic using Node.js, cheerio and Line Message API.',
      details:
        '使用Node.js製作的line bot，使用cheerio爬取Metacritic網站的資料，並且使用Line Message API來回應使用者的查詢。',
      img: new URL(`../assets/img/linebot.jpg`, import.meta.url).href,
      vid: getVidUrl('metacriticLineBotDemo')
    },
    {
      title: 'Help Dave Get Dressed! JQuery小遊戲',
      description:
        'An engaging card game developed with jQuery, offering a fun and interactive way to help Dave choose his outfit. Uses bubble sort for scoring.',
      details:
        '使用jQuery製作的卡牌小遊戲，使用css和jQuery增刪class來達到卡牌效果，最後使用bubble sort次數計分。',
      img: getImageUrl('dave_demo'),
      vid: getVidUrl('dave_demo')
    },
    {
      title: 'Feed the Cat! JQuery小遊戲',
      description:
        'A delightful game created with jQuery where players feed the cat, featuring score tracking with localStorage.',
      details: '使用jQuery製作的簡單小遊戲，玩家要針對標的點擊按鈕改變游標，並且有分數紀錄功能。',
      img: getImageUrl('cat_demo'),
      vid: getVidUrl('cat_game_demo')
    }
  ]

  const contact = { email: 'gnahcty@gmail.com', github: 'https://github.com/gnahcty' }

  return { goals, introduction, skills, portfolio, contact }
})

export const useGeneralStore = defineStore('general', () => {
  const isLoading = ref(false)
  const AnimeCompleted = ref(false)
  const bgBlack = ref(false)

  const section = {
    activeSection: ref(0),
    modifiable: ref(true),
    changeSection: (index) => {
      if (this.modifiable.value) {
        this.activeSection.value = index
      }
    }
  }

  return { isLoading, AnimeCompleted, bgBlack, section }
})
