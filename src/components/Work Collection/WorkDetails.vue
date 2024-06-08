<template>
  <div
    class="flex h-[90vh] w-screen max-w-7xl flex-auto flex-col overflow-y-auto overflow-x-clip sm:w-[90vw]"
  >
    <!-- title -->
    <div class="text-nowrap text-[10vw] font-black leading-none">
      <Vue3Marquee class="overflow-y-clip" :clone="true">
        <span class="flex-0 mx-5 text-nowrap">{{ target.title }}</span>
      </Vue3Marquee>
    </div>
    <!-- title -->

    <!-- content -->
    <div class="flex-center flex flex-auto">
      <div
        class="flex flex-auto flex-col-reverse gap-5 px-5 pb-4 lg:flex-row lg:justify-between"
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
</template>

<script setup>
import { useDataStore } from "@/stores/data";
const props = defineProps(["work"]);
const { portfolio } = useDataStore();
const target = portfolio[props.work];
</script>
