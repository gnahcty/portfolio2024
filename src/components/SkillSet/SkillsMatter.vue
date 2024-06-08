<template>
  <div ref="matterContainer" id="matterContainer" class="flex-center relative flex h-full w-full">
    <div
      v-for="(skill, i) in skills"
      :key="i"
      class="chips select-none"
      :ref="(el) => (skillChips[i] = el)"
    >
      {{ skill }}
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, reactive, onBeforeUnmount } from 'vue'
import { useElementSize } from '@vueuse/core'
import { useDataStore } from '@/stores/data'
import { initializeMatter, clearMatter } from '@/animation/matter'
import { triggerMatterAnimation } from '@/animation/animations'

const { skills } = useDataStore()
const skillChips = reactive([])

const matterContainer = ref(null)
const { width: canvasWidth, height: canvasHeight } = useElementSize(matterContainer)

onMounted(() => {
  const { skillBodies, engine, requestRef } = initializeMatter(
    skillChips,
    canvasWidth,
    canvasHeight,
    matterContainer
  )
  triggerMatterAnimation('#matterContainer', skillBodies, engine, requestRef)
})

onBeforeUnmount(() => {
  clearMatter()
})
</script>

<style scoped>
.chips {
  padding: 0.5rem 4rem;
  border-radius: 5rem;
  font-weight: 500;
  font-size: 2vw;
  cursor: pointer;
  background-color: #edeae4;
  border: 3px solid black;
}
</style>
