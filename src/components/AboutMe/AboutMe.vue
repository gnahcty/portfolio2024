<template>
  <div id="aboutMe" class="page flex-center relative z-20 flex bg-black text-white">
    <div class="title flex w-full max-w-screen-xl flex-col text-[15vw] leading-none">
      <div class="text-center sm:text-left">creating</div>
      <div class="flex justify-center">
        <InfiniteRollUpText :textGroup="goals" />
      </div>
      <div class="text-center sm:text-right">websites</div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useGeneralStore, useDataStore } from '@/stores/data'
import { signalAboutMeBG } from '@/animation/animations.js'

const { goals } = useDataStore()
const site = useGeneralStore()

onMounted(() => {
  signalAboutMeBG(site)
})
</script>
