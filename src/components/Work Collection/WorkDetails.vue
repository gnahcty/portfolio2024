<template>
  <div
    class="flex h-[90vh] w-screen max-w-7xl flex-auto flex-col gap-5 overflow-y-auto overflow-x-clip sm:w-[90vw] sm:gap-0"
  >
    <!-- title -->
    <div class="text-nowrap text-[10vw] font-black sm:leading-none">
      <Vue3Marquee class="overflow-y-clip" :clone="true">
        <span class="flex-0 mx-5 text-nowrap">{{ target.title }}</span>
      </Vue3Marquee>
    </div>
    <!-- title -->

    <!-- content -->
    <div class="flex flex-auto items-start gap-5 sm:items-center sm:gap-0">
      <div
        class="flex flex-auto flex-col-reverse gap-5 px-5 pb-4 lg:flex-row lg:justify-center"
      >
        <!-- description & details -->
        <div class="flex flex-col justify-between gap-5 lg:w-96">
          <div class="text-md font-bold">{{ target.description }}</div>
          <div class="">{{ target.details }}</div>
        </div>
        <!-- description & details -->
        <!-- demo -->
        <div class="flex h-full w-full flex-auto items-center justify-end">
          <video-player
            :src="target.vid"
            preload="auto"
            controls
            noUITitleAttributes
            fluid
            autoplay
            playsinline
            :loop="true"
            :volume="0"
          />
        </div>
        <!-- demo -->
      </div>
    </div>
    <!-- content -->
  </div>

  <div
    class="absolute inset-x-0 bottom-0 flex justify-center p-5 text-center lg:justify-end"
  >
    Swipe Right to Close <span>&#8594;</span>
  </div>
</template>

<script setup>
import { useDataStore } from "@/stores/data";
const props = defineProps(["work"]);
const { portfolio } = useDataStore();
const target = portfolio[props.work];
</script>
