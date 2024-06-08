// cSpell:disable
<template>
  <div id="IntroAnime" class="page flex-center flex bg-black text-white">
    <!-- title -->
    <div id="fullText" class="title absolute z-20 flex text-[15vw] leading-none">
      <!-- c -->
      <span>c</span>
      <!-- c -->
      <!-- rest of the phrase -->
      <div id="trailPlaceHolder" class="relative h-[1em] text-nowrap uppercase">
        <!-- roll up texts -->
        <div id="trailWrapper" class="absolute z-20 h-[1em] overflow-hidden">
          <div id="trail">
            <div>ontinue</div>
            <div>rafting</div>
            <div>onsistent</div>
            <div>reations</div>
            <div class="h-[1em]"></div>
            <div>hloe chang</div>
          </div>
        </div>
        <!-- roll up texts -->

        <!-- placeholder確保字跑完動畫會在正確的位置 -->
        <div id="startPlaceHolder" class="opacity-0">ontinue</div>
        <div id="trailPlaceHolder" class="opacity-0">hloe chang</div>
        <!-- placeholder確保字跑完動畫會在正確的位置 -->
      </div>
      <!-- rest of the phrase -->
    </div>
    <!-- title -->
  </div>
</template>
<script setup>
import { onMounted, watch } from 'vue'
import { useGeneralStore } from '@/stores/data'
import { introAnimation } from '@/animation/animations.js'

const site = useGeneralStore()

onMounted(() => {
  const entryTL = introAnimation(() => (site.AnimeCompleted = true))

  // play the animation when the site is loaded
  watch(
    () => site.isLoading,
    (state) => {
      if (state === false) {
        entryTL.play()
      }
    }
  )
})
</script>
