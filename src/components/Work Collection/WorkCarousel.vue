<template>
  <div class="outer-wrap relative flex h-screen items-center">
    <!-- title -->
    <div
      id="collectionTitle"
      class="absolute w-full text-center text-[10vw] font-black leading-none"
    >
      COLLECTIONS
    </div>
    <!-- title -->
    <!-- carousel -->
    <div class="grid-row mx-auto grid grid-cols-12 gap-8">
      <div class="wrapper flex flex-nowrap">
        <!-- empty head panel -->
        <section id="collectionHead" class="works z-10 w-[150vw] shrink-0 bg-transparent"></section>
        <!-- empty head panel -->

        <!-- work collections -->
        <section
          v-for="(work, i) in works"
          :key="i"
          class="works flex-center z-10 ml-16 flex aspect-video w-[50vw] shrink-0"
          :id="`work${i}`"
          @click="emit('showWork', i)"
        >
          <video-player
            :src="work.vid"
            preload="auto"
            :poster="work.img"
            noUITitleAttributes
            fluid
            autoplay
            playsinline
            :loop="true"
            :volume="0"
          />
        </section>
        <!-- work collections -->

        <!-- empty end panel -->
        <section class="works z-10 w-[50vw] shrink-0 bg-transparent"></section>
        <!-- empty end panel -->
      </div>
    </div>
    <!-- carousel -->
  </div>
</template>
<script setup>
import { onMounted } from 'vue'
import { useDataStore, useGeneralStore } from '@/stores/data'
import { workCarouselAnimation, workTitleAnimation } from '@/animation/animations'

const site = useGeneralStore()
const { portfolio } = useDataStore()
const works = portfolio.map((work) => work)
const emit = defineEmits(['showWork'])

onMounted(() => {
  // side scrolling
  workCarouselAnimation()
  // animate the title
  workTitleAnimation(site)
})
</script>
