import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Draggable } from 'gsap/Draggable'
import seaVideo from '../utils/imagePath'
import HeroSection from '../components/HeroSection'
import DasNashwerkGallery from '../components/GallerySection'
import WhatToExpectSection from '../components/WhatToExpectSection'
import AboutSection from '../components/AboutSection'
import ContactSection from '../components/ContactSection'

gsap.registerPlugin(ScrollTrigger, Draggable)

const Landing = () => {

  useEffect(() => {
    // Kill any existing ScrollTriggers
    ScrollTrigger.getAll().forEach(trigger => trigger.kill())

    // set initial state of items
    gsap.set('.cards li', { xPercent: 400, opacity: 0, scale: 0 })

    const spacing = 0.5 // Increased spacing for slower, more controlled animation
    const cards = gsap.utils.toArray('.cards li')
    
    const animateFunc = element => {
      const tl = gsap.timeline()
      tl.fromTo(element, 
        { scale: 0, opacity: 0 }, 
        { scale: 1, opacity: 1, zIndex: 100, duration: 0.8, yoyo: true, repeat: 1, ease: "power1.in", immediateRender: false }
      )
      .fromTo(element, 
        { xPercent: 400 }, 
        { xPercent: -400, duration: 2.5, ease: "none", immediateRender: false }, 
        0
      )
      return tl
    }

    const seamlessLoop = buildSeamlessLoop(cards, spacing, animateFunc)
    const playhead = { offset: 0 }
    
    const wrapTime = gsap.utils.wrap(0, seamlessLoop.duration())
    
    const scrub = gsap.to(playhead, {
      offset: 0,
      onUpdate() {
        seamlessLoop.time(wrapTime(playhead.offset))
      },
      duration: 0.5,
      ease: "power3",
      paused: true
    })

    // Button event listeners
    const nextBtn = document.querySelector(".next")
    const prevBtn = document.querySelector(".prev")
    
    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        const newOffset = scrub.vars.offset + spacing
        scrub.vars.offset = newOffset
        scrub.invalidate().restart()
      })
    }
    if (prevBtn) {
      prevBtn.addEventListener("click", () => {
        const newOffset = scrub.vars.offset - spacing
        scrub.vars.offset = newOffset
        scrub.invalidate().restart()
      })
    }

    // Dragging functionality
    Draggable.create(".drag-proxy", {
      type: "x",
      trigger: ".cards",
      onPress() {
        this.startOffset = scrub.vars.offset
      },
      onDrag() {
        scrub.vars.offset = this.startOffset + (this.startX - this.x) * 0.001
        scrub.invalidate().restart()
      }
    })

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
      Draggable.get(".drag-proxy")?.kill()
    }
  }, [])

  function buildSeamlessLoop(items, spacing, animateFunc) {
    let rawSequence = gsap.timeline({ paused: true })
    let seamlessLoop = gsap.timeline({
      paused: true,
      repeat: -1,
      onRepeat() {
        this._time === this._dur && (this._tTime += this._dur - 0.01)
      },
      onReverseComplete() {
        this.totalTime(this.rawTime() + this.duration() * 100)
      }
    })
    let cycleDuration = spacing * items.length
    let dur

    items.concat(items).concat(items).forEach((item, i) => {
      let anim = animateFunc(items[i % items.length])
      rawSequence.add(anim, i * spacing)
      dur || (dur = anim.duration())
    })

    seamlessLoop.fromTo(rawSequence, {
      time: cycleDuration + dur / 2
    }, {
      time: "+=" + cycleDuration,
      duration: cycleDuration,
      ease: "none"
    })
    return seamlessLoop
  }

  return (
    <div className="landing-page">
      {/* Hero section with video background */}
      <HeroSection seaVideo={videoPaths["coffee-1"]} />

      {/* Gallery section */}
      <DasNashwerkGallery/>

      {/* What to Expect section */}
      <WhatToExpectSection />

      {/* About section */}
      <AboutSection />

      {/* Contact section */}
      <ContactSection />
    </div>
  )
}

export default Landing 
