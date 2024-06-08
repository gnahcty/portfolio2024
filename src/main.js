import './assets/style.css'
import 'vue-final-modal/style.css'
import 'video.js/dist/video-js.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createVfm } from 'vue-final-modal'
import Vue3Marquee from 'vue3-marquee'
import VueVideoPlayer from '@videojs-player/vue'

import App from './App.vue'
import router from './router'

const app = createApp(App)
const vfm = createVfm()

app.use(createPinia()).use(router).use(vfm).use(Vue3Marquee).use(VueVideoPlayer)

app.mount('#app')
