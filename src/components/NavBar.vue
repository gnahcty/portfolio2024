<template>
  <div
    class="fixed inset-x-0 top-0 z-50 flex w-full items-center justify-between px-4"
    :class="site.bgBlack === true ? 'text-white' : 'text:black'"
  >
    <div
      v-for="(section, i) in navItems"
      :key="section.name"
      class="navItems cursor-pointer select-none text-lg font-bold lg:text-2xl"
      :class="site.section.activeSection === i ? 'underline' : ''"
      @click="scrollToSection(section.section, i)"
    >
      {{ section.name }}
    </div>
  </div>
</template>

<script setup>
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import ScrollToPlugin from 'gsap/ScrollToPlugin'
import { useGeneralStore } from '@/stores/data'
const site = useGeneralStore()

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

const navItems = [
  { name: 'Home', path: '/', section: 0 },
  { name: 'About', path: '/#about', section: '#aboutMe' },
  { name: 'Skills', path: '/#skills', section: '#skillSet' },
  { name: 'Works', path: '/#works', section: '#workCollection' },
  { name: 'Contact', path: '/#contact', section: '#contactMe' }
]

const scrollToSection = (section, i) => {
  // Prevent scrollTrigger from changing the active section
  site.section.modifiable = false
  // Scroll to the section
  gsap.to(window, {
    duration: 1,
    scrollTo: section,
    // Change active section after the scroll is complete
    onComplete: () => {
      site.section.modifiable = true
      site.section.activeSection = i
    }
  })
}
</script>
