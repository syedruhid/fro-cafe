import React from 'react'
import Footer from './Footer'

const ContactSection: React.FC = () => {
  return (
    <div style={{ 
      height: '100vh', 
      width: '100%',
      position: 'relative', 
      background: 'var(--matcha-green)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      padding: '2rem 1rem',
      overflow: 'hidden',
      paddingTop:"80px",
    }}>
      {/* Background Pattern for Contact */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `
          radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.05) 0%, transparent 50%),
          linear-gradient(135deg, transparent 49%, rgba(255, 255, 255, 0.03) 50%, transparent 51%)
        `,
        backgroundSize: '100% 100%, 100% 100%, 30px 30px',
        pointerEvents: 'none'
      }}></div>

      <div style={{ 
        textAlign: 'center', 
        width: '100%',
        maxWidth: '1400px',
        position: 'relative',
        zIndex: 1
      }}>
        <h2 style={{ 
          fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', 
          marginBottom: '1rem', 
          fontFamily: 'var(--font-heading)', 
          color: 'white',
          fontWeight: '600'
        }}>
          Visit FRØ
        </h2>
        
        <p style={{ 
          fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', 
          marginBottom: 'clamp(2rem, 4vw, 4rem)', 
          color: 'white',
          fontFamily: 'var(--font-body)',
          opacity: 0.9,
          maxWidth: '600px',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
          Join us in Siegen for the complete coffee experience
        </p>

        <div style={{ 
          display: 'flex', 
          flexDirection: 'row',
          gap: 'clamp(2rem, 4vw, 4rem)',
          marginBottom: 'clamp(2rem, 4vw, 4rem)',
          justifyContent: 'center',
          alignItems: 'stretch',
          flexWrap: 'wrap'
        }}>
          {/* Opening Hours */}
          <div style={{
            padding: 'clamp(2rem, 4vw, 3rem)',
            borderLeft: '4px solid rgba(255, 255, 255, 0.3)',
            textAlign: 'left',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '20px',
            backdropFilter: 'blur(10px)',
            flex: '1',
            minWidth: '300px',
            maxWidth: '600px',
            minHeight: '250px'
          }}>
            <h3 style={{ 
              fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', 
              marginBottom: 'clamp(1.5rem, 3vw, 2rem)',
              fontFamily: 'var(--font-heading)',
              color: 'white',
              fontWeight: '500'
            }}>
              Opening Hours
            </h3>
            <div style={{ 
              fontSize: 'clamp(1rem, 2vw, 1.3rem)',
              fontFamily: 'var(--font-body)',
              lineHeight: '2.2',
              opacity: 0.9
            }}>
              <p><strong>Monday - Saturday:</strong> 9:00 - 19:00</p>
              <p><strong>Sunday:</strong> 9:00 - 18:00</p>
            </div>
          </div>

          {/* Location */}
          <div style={{
            padding: 'clamp(2rem, 4vw, 3rem)',
            borderLeft: '4px solid rgba(255, 255, 255, 0.3)',
            textAlign: 'left',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '20px',
            backdropFilter: 'blur(10px)',
            flex: '1',
            minWidth: '300px',
            maxWidth: '600px',
            minHeight: '250px'
          }}>
            <h3 style={{ 
              fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', 
              marginBottom: 'clamp(1.5rem, 3vw, 2rem)',
              fontFamily: 'var(--font-heading)',
              color: 'white',
              fontWeight: '500'
            }}>
              Location
            </h3>
            <p style={{ 
              fontSize: 'clamp(1rem, 2vw, 1.3rem)',
              fontFamily: 'var(--font-body)',
              lineHeight: '2',
              opacity: 0.9
            }}>
              <strong>FRØ Café</strong><br />
              <a className="text-blue-600 underline hover:text-blue-800"
 href='https://www.google.com/maps/search/Am+Bahnhof+17+%0D%0A57072+Siegen?entry=gmail&source=g' target='blank_'>
              At the train station 17<br />
              57072 Siegen<br />
              </a>
              <br /> froe-cafe@outlook.de<br />
               +49 271 123 456
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default ContactSection 