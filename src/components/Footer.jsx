 import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      width: '100%',
      zIndex: 50,
      background: 'transparent',
      padding: '1.5rem 2rem',
      color:  ' var(--walnut-brown)',
      fontFamily: 'var(--font-body)',
      fontSize: '0.9rem',
    }}>
    
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1rem'
      }}>

        <div style={{ opacity: 0.9 }}>
          Legal<br />Statement
        </div>

        <div style={{ opacity: 0.9 }}>
          Follow us<br />Instagram
        </div>

        <div style={{ opacity: 0.9 }}>
          Stay in the know<br />
          <input
            type="email"
            placeholder="Your email"
            style={{
              background: 'transparent',
              border: 'none',
              borderBottom: '1px solid white',
              color: 'white',
              padding: '0.2rem 0',
              outline: 'none',
              fontSize: '0.9rem',
              width: '150px'
            }}
          />
        </div>
      </div>
    </footer>
  )
}

export default Footer
