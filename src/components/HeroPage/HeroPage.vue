<template>
  <div id="heroPage" class="page flex-center relative flex">
    <!-- title -->
    <div class="title absolute z-20 text-center text-[15vw]">chloe chang</div>
    <!-- title -->
    <!-- imgs -->
    <div class="flex-center relative flex h-full w-full flex-col overflow-clip">
      <!-- dave -->
      <img
        id="dave"
        src="@/assets/img/dave.png"
        alt="dave"
        class="absolute max-h-[200vh] translate-y-40 opacity-0"
      />
      <!-- dave -->

      <!-- eye -->
      <img
        src="@/assets/img/eye-right_top.png"
        alt="eye-right_top"
        class="eye absolute right-0 top-0 h-1/2 opacity-0"
      />
      <img
        src="@/assets/img/eye-left_btm.png"
        alt="eye-left_btm"
        class="eye absolute bottom-0 left-0 h-1/2 opacity-0"
      />
      <!-- eye -->

      <!-- shiro -->
      <div class="shiro relative h-[50vh] w-full -translate-y-1/3 opacity-0">
        <img
          src="@/assets/img/shiro.png"
          alt="shiro"
          class="absolute inset-x-0 top-0 mx-auto max-h-full rotate-180"
        />
      </div>
      <div class="shiro relative h-[50vh] w-full translate-y-1/3 opacity-0">
        <img
          src="@/assets/img/shiro.png"
          alt="shiro"
          class="absolute inset-x-0 bottom-0 mx-auto max-h-full"
        />
      </div>
      <!-- shiro -->
    </div>
    <!-- imgs -->
    <div
      class="flex-center absolute inset-x-0 bottom-2 z-20 flex animate-bounce text-center text-5xl font-bold leading-none"
    >
      <span id="scrollDown" class="icon-[mingcute--down-fill]"> </span>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { heroPageAnimation, pinHeroPage } from '@/animation/animations.js'

onMounted(() => {
  heroPageAnimation()
  pinHeroPage()
})
</script>
