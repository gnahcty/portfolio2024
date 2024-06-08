<template>
  <div id="skillSet" class="page relative flex flex-row-reverse">
    <div
      class="absolute inset-x-0 inset-y-0 m-auto flex items-center justify-center whitespace-pre-line text-[5vw] font-bold leading-none"
    >
      <div class="mx-5 mb-5 max-w-screen-2xl">{{ introduction }}</div>
    </div>
    <div class="h-1/2 w-full lg:h-full"></div>
    <SkillsMatter></SkillsMatter>
  </div>
</template>

<script setup>
import { useDataStore } from '@/stores/data'
const { introduction } = useDataStore()
</script>
