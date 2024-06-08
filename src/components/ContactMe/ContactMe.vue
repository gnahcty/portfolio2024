<template>
  <div id="contactMe" class="page relative flex flex-col justify-end">
    <div class="h-fit sm:translate-y-[20%]">
      <div
        class="relative flex w-full flex-col justify-between text-nowrap text-xl sm:px-12 md:flex-row"
      >
        <div class="cursor-pointer">
          email: <a :href="`mailto:${contact.email}`">{{ contact.email }}</a>
        </div>
        <div class="cursor-pointer">
          github : <a :href="contact.github">{{ contact.github }}</a>
        </div>
      </div>
      <div
        class="flex w-full flex-nowrap justify-between text-nowrap text-center text-[18vw] font-black uppercase sm:leading-none"
      >
        <span>contact</span><span>me</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useDataStore, useGeneralStore } from '@/stores/data'
import { signalWorkBGLeave } from '@/animation/animations.js'

const site = useGeneralStore()
const { contact } = useDataStore()

onMounted(() => {
  signalWorkBGLeave(site)
})
</script>
