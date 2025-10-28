import React, { useRef, useEffect, useState } from 'react'
import Footer from './Footer'

interface HeroSectionProps {
  seaVideo: string
}

const HeroSection: React.FC<HeroSectionProps> = ({ seaVideo }) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [showExtra, setShowExtra] = useState(false)

  useEffect(() => {
    // Video error handling
    const handleVideoError = () => {
      if (videoRef.current) {
        videoRef.current.style.display = 'none'
      }
    }

    if (videoRef.current) {
      videoRef.current.addEventListener('error', handleVideoError)
    }

    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener('error', handleVideoError)
      }
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (!showExtra && window.scrollY > 1) {
        setShowExtra(true)
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [showExtra])

  return (
    <div style={{ 
      height: '100vh', 
      width: '100%',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Video Background */}
      <video 
        autoPlay 
        muted 
        loop 
        playsInline
        ref={videoRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1
        }}
      >
        <source src={seaVideo} type="video/mp4" />
      </video>
      
      {/* Overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(92, 64, 51, 0.2)',
        zIndex: -1
      }}></div>

      {/* Hero content */}
      <div style={{ 
        height: '100%', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        flexDirection: 'column',
        color: 'white',
        position: 'relative',
        zIndex: 1
      }}>
        <h1 style={{ 
          fontSize: '6rem',  
          fontFamily: 'var(--font-heading)',
          fontWeight: '700',
          textShadow: '2px 2px 8px rgba(0,0,0,0.3)',
          letterSpacing: '0.1em',
          marginBottom: 0,
          transition: 'margin-bottom 0.5s ease',
          background: 'rgba(255, 255, 255, 0)',
          padding: '30px',
        }}>
          FRØ
        </h1>

        {/* Fade-in paragraph */}
        {showExtra && (
          <p style={{ 
            fontSize: '1.3rem', 
            opacity: showExtra ? 1 : 0,
            transform:  'translateY(0)',
            transition: 'opacity 0.8s ease, transform 0.8s ease',
            fontFamily: 'var(--font-body)',
            marginBottom: '3rem',
            fontWeight: '300',
            textShadow: '1px 1px 3px rgba(0,0,0,0.3)'
          }}>
            Experience the journey of coffee in Siegen
          </p>
        )}

      </div>
      <Footer/>
    </div>
  )
}

export default HeroSection
