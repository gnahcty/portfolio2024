<template>
  <div id="workCollection" class="page flex-center relative flex">
    <WorkCarousel @showWork="showWork" />
    <VueFinalModal
      v-model="showDialog"
      display-directive="if"
      overlay-transition="vfm - fade"
      content-transition="vfm-slide-down"
      click-to-close
      esc-to-close
      background="non-interactive"
      lock-scroll
      swipe-to-close="right"
      class="flex items-center justify-center"
      content-class=" bg-bg rounded-lg flex"
    >
      <WorkDetails :work />
    </VueFinalModal>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { VueFinalModal } from "vue-final-modal";

const showDialog = ref(false);
const work = ref(0);
const showWork = (i) => {
  showDialog.value = !showDialog.value;
  work.value = i;
};
</script>
