import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Matter from 'matter-js'
// import { watch } from 'vue'
gsap.registerPlugin(ScrollTrigger)

export const introAnimation = (onCompleteCallback) => {
  const entryTL = gsap.timeline({
    ease: 'power4.out',
    paused: true,
    onComplete: onCompleteCallback
  })

  entryTL
    // trail expand
    .from('#trail', { duration: 3, width: 0, delay: 2 })
    // startPlaceHolder expand 確保首字置中
    .from('#startPlaceHolder', { duration: 1, width: 0 }, '<')
    // trailPlaceHolder expand 確保最後一字置中
    .from('#trailPlaceHolder', { duration: 6, width: 0 }, '<')
    // fullText scale up
    .from('#fullText', { duration: 6, scale: 0.3 }, '<+=2')
    // text roll up
    .to('#trail', { y: '-1em', duration: 1 }, '<')
    .to('#trail', { y: '-2em', duration: 1 }, '>')
    .to('#trail', { y: '-3em', duration: 1 }, '>')
    .to('#trail', { y: '-4em', duration: 1 }, '>')
    .to('#trail', { y: '-5em', duration: 2 }, '>')
    // transition to hero page
    .to('#fullText', { color: 'black', duration: 1 })
    .to('#IntroAnime', { backgroundColor: '#edeae4', duration: 1 }, '<')

  return entryTL
}

export const heroPageAnimation = () => {
  const animateItems = ['.shiro', '.eye', '#dave']
  const heroAnimeTL = gsap.timeline({
    repeat: -1,
    paused: true
  })

  animateItems.forEach((el) => {
    heroAnimeTL
      .to(el, { duration: 1, opacity: 1, ease: 'bounce.in' }, '>')
      .to(el, { duration: 0.5, opacity: 0, ease: 'power3.in' }, `>1.5`)
  })

  //only play animation when hero page is in view
  ScrollTrigger.create({
    trigger: '#heroPage',
    start: 'top center',
    end: 'bottom center',
    onEnter: () => heroAnimeTL.play(),
    onLeave: () => heroAnimeTL.pause(),
    onEnterBack: () => heroAnimeTL.play(),
    onLeaveBack: () => heroAnimeTL.pause()
  })
}

export const pinHeroPage = () => {
  ScrollTrigger.create({
    trigger: '#heroPage',
    start: 'top top',
    end: 'bottom top',
    pin: true,
    pinSpacing: false
  })
}

// Scroll to the top of the page when the page is loaded
export const scrollToTop = () => {
  gsap.to(window, { duration: 0, scrollTo: 0 })
  window.onbeforeunload = () => {
    window.scrollTo(0, 0)
  }
}

// Change the active section based on the scroll position
export const sectionTrigger = (site) => {
  gsap.utils.toArray('.section').forEach((section, i) => {
    ScrollTrigger.create({
      trigger: section,
      start: 'top top',
      end: 'bottom top',
      onEnter: () => {
        site.section.activeSection = i
      },
      onLeaveBack: () => {
        site.section.activeSection = i - 1
      }
    })
  })
}

// signal the change of background color when entering & leaving the aboutMe section
export const signalAboutMeBG = (site) => {
  ScrollTrigger.create({
    trigger: '#aboutMe',
    start: 'top top+=1%',
    end: 'bottom top',
    onEnter: () => {
      site.bgBlack = true
    },
    onEnterBack: () => {
      site.bgBlack = true
    },
    onLeaveBack: () => {
      site.bgBlack = false
    },
    onLeave: () => {
      site.bgBlack = false
    }
  })
}

// animate the roll up text in the aboutMe section
export const TriggerRollUpText = (tl, copyTL) => {
  ScrollTrigger.create({
    trigger: '#aboutMe',
    start: 'top center',

    end: 'bottom center',
    onEnter: () => {
      tl.play()
      copyTL.play()
    },
    onLeave: () => {
      tl.pause()
      copyTL.pause()
    },
    onEnterBack: () => {
      tl.play()
      copyTL.play()
    },
    onLeaveBack: () => {
      tl.pause()
      copyTL.pause()
    }
  })
}

// side scroll the works carousel
export const workCarouselAnimation = () => {
  const sections = gsap.utils.toArray('.works')

  let maxWidth = 0
  const getMaxWidth = () => {
    maxWidth = 0
    sections.forEach((section) => {
      maxWidth += section.offsetWidth
    })
  }

  getMaxWidth()

  // 最後一個 section 的右邊界
  const furthestPoint = sections[sections.length - 1].getBoundingClientRect().right
  const offset = 0

  // get the width of the carousel when refreshed
  ScrollTrigger.addEventListener('refreshInit', getMaxWidth)

  // animate the carousel
  gsap.to(sections, {
    x: () => `-${furthestPoint + offset - window.innerWidth}`,
    ease: 'none',
    scrollTrigger: {
      trigger: '#workCollection',
      pin: true,
      scrub: 1,
      end: () => `+=${maxWidth}`,
      invalidateOnRefresh: true
    }
  })
}

// animate the title & bg & signal bgChange of the works section according to work carousel
export const workTitleAnimation = (site) => {
  gsap.from('#collectionTitle', {
    scale: 2,
    ease: 'linear',
    scrollTrigger: {
      trigger: '#collectionHead',
      toggleActions: 'start pause resume none',
      start: 'left left',
      end: 'right left+=20%',
      scrub: 1,
      onLeave: () => {
        site.bgBlack = true
        gsap.set('#collectionTitle', { color: 'white', ease: 'none' })
        gsap.set('#workCollection', { backgroundColor: 'black', ease: 'none' })
      },
      onEnterBack: () => {
        site.bgBlack = false
        gsap.set('#collectionTitle', { color: 'black', ease: 'none' })
        gsap.set('#workCollection', { backgroundColor: '#edeae4', ease: 'none' })
      }
    }
  })
}

// signal the change of background color when leaving & reentering the works section
export const signalWorkBGLeave = (site) => {
  ScrollTrigger.create({
    trigger: '#contactMe',
    start: 'top top+=5%',
    end: 'bottom bottom',
    onEnter: () => {
      site.bgBlack = false
    },
    onLeaveBack: () => {
      site.bgBlack = true
    }
  })
}

// trigger matter.js animation when the skills section is in view
export const triggerMatterAnimation = (trigger, skillBodies, engine, requestRef) => {
  let triggered = false
  ScrollTrigger.create({
    trigger: trigger,
    start: 'top 50%',
    onEnter() {
      if (!triggered) {
        triggered = true
        ;(function rerender() {
          skillBodies.forEach((element) => {
            element.render()
          })
          Matter.Engine.update(engine)
          requestRef.value = requestAnimationFrame(rerender)
        })()
      }
    }
  })
}
