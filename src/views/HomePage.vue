<template>
  <div v-if="!site.AnimeCompleted">
    <IntroAnime></IntroAnime>
  </div>
  <div v-else>
    <HeroPage class="section"></HeroPage>
    <AboutMe class="section"></AboutMe>
    <SkillSet class="section"></SkillSet>
    <WorkCollection class="section"></WorkCollection>
    <ContactMe class="section"></ContactMe>
  </div>
</template>

<script setup>
import { onMounted, watch, nextTick } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useGeneralStore } from '@/stores/data'

gsap.registerPlugin(ScrollTrigger)
const site = useGeneralStore()

onMounted(() => {
  // signal loading is done
  site.isLoading = false

  // Scroll to the top of the page when the page is loaded
  gsap.to(window, { duration: 0, scrollTo: 0 })

  // Scroll to the top of the page when the page is refreshed
  window.onbeforeunload = () => {
    window.scrollTo(0, 0)
  }

  // Change the active section based on the scroll position
  watch(
    () => site.AnimeCompleted,
    (state) => {
      if (state === true) {
        nextTick(() => {
          gsap.utils.toArray('.section').forEach((section, i) => {
            ScrollTrigger.create({
              trigger: section,
              start: 'top top',
              end: 'bottom top',
              onEnter: () => {
                site.section.activeSection = i
              },
              onLeaveBack: () => {
                site.section.activeSection = i - 1
              }
            })
          })
        })
      }
    }
  )
})
</script>
<style scoped></style>
