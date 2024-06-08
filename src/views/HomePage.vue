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
import { useGeneralStore } from '@/stores/data'
import { scrollToTop, sectionTrigger } from '@/animation/animations.js'

const site = useGeneralStore()

onMounted(() => {
  // signal loading is done
  site.isLoading = false

  // scroll to top when reloaded
  scrollToTop()

  // create section trigger after intro animation finished and rest of DOM is rendered
  watch(
    () => site.AnimeCompleted,
    (state) => {
      if (state === true) {
        nextTick(() => {
          sectionTrigger(site)
        })
      }
    }
  )
})
</script>
