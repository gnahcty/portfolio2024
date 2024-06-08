<template>
  <div class="h-[1em] overflow-clip">
    <!-- render 2 groups -->
    <div v-for="n in 2" :key="n">
      <!-- render texts -->
      <div
        v-for="(adj, i) in props.textGroup"
        :key="i"
        :class="`group${n}`"
        class="text-nowrap text-center leading-none"
      >
        {{ adj }}
      </div>
      <!-- render texts -->
    </div>
    <!-- render 2 groups -->
  </div>
</template>

<script setup>
import { onMounted, nextTick } from 'vue'
import gsap from 'gsap'
import { TriggerRollUpText } from '@/animation/animations'

const props = defineProps({
  textGroup: {
    type: Array,
    default: () => ['please', 'bind', 'textGroup', 'prop', 'to', 'this', 'component']
  },
  ease: {
    type: String,
    default: 'power3.inOut'
  }
})

const createTimeline = (groupClass, repeats = 1) => {
  const timeline = gsap.timeline({ repeat: -1, ease: props.ease })
  for (let i = 1; i <= props.textGroup.length * repeats; i++) {
    timeline.to(groupClass, { duration: 1, yPercent: -100 * i })
  }
  return timeline
}

onMounted(() => {
  nextTick(() => {
    // 第一組往上跑一輪
    const timeline1 = createTimeline('.group1')
    // 第二組往上跑兩輪
    const timeline2 = createTimeline('.group2', 2).pause()

    // 第一組跑完後，隱藏，跑到視窗下方，再顯示，等第二組跑完再回到原位
    timeline1
      .set('.group1', { opacity: 0 }) // 隱藏
      .to('.group1', { duration: 1, yPercent: 100 }) // 跑到視窗下方
      .set('.group1', { opacity: 1 }) // 顯示
      .to('.group1', { duration: 1, yPercent: 0, delay: props.textGroup.length - 2 }) // 回到原位
      .pause()

    TriggerRollUpText(timeline1, timeline2)
  })
})
</script>
