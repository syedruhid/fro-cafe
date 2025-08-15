import React from "react";

interface ExpectationCardProps {
  imageUrl: string;
  title: string;
  description: string;
}

const ExpectationCard: React.FC<ExpectationCardProps> = ({
  imageUrl,
  title,
  description,
}) => {
  return (
    <div style={{ cursor: 'pointer', maxWidth: '320px' }}>
      {/* Image block */}
      <div style={{ width: '100%', aspectRatio: '1/1', overflow: 'hidden', borderRadius: '10px' }}>
        <img
          src={imageUrl}
          alt={title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.03)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
          }}
        />
      </div>

      {/* Text block */}
      <div style={{ marginTop: '1rem' }}>
        <h3
          style={{
            fontSize: '1rem',
            fontFamily: 'var(--font-heading)',
            color: 'var(--walnut-brown)',
            fontWeight: 600,
            marginBottom: '0.5rem',
          }}
        >
          {title}
        </h3>
        <p
          style={{
            fontSize: '0.875rem',
            fontFamily: 'var(--font-body)',
            color: 'var(--walnut-brown)',
            opacity: 0.7,
            lineHeight: '1.5',
            margin: 0,
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

const WhatToExpectSection: React.FC = () => {
  const expectations = [
    {
      imageUrl: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      title: "Artisanal Coffee",
      description: "Savor our expertly crafted coffee, sourced from the finest beans and brewed with passion.",
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      title: "Wholesome Breakfasts",
      description: "Start your day right with our nourishing breakfasts, made with fresh, regional ingredients.",
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      title: "Creamy Ice Cream",
      description: "Indulge in our homemade ice cream, a delightful treat with unique, seasonal flavors.",
    },
  ];

  return (
    <div style={{
      background: 'white',
      width: '100%',
      position: 'relative',
      overflow: 'hidden',
      padding: '4rem 0'
    }}>
      <div style={{
        padding: '0 2rem',
        textAlign: 'left',
        position: 'relative',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <h2 style={{
          fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
          fontFamily: 'var(--font-heading)',
          color: 'var(--walnut-brown)',
          fontWeight: '600',
          marginBottom: '1.5rem',
          letterSpacing: '-0.02em',
          textAlign: 'left'
        }}>
          What to Expect
        </h2>
        <p style={{
          fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)',
          fontFamily: 'var(--font-body)',
          color: 'var(--walnut-brown)',
          opacity: 0.7,
          maxWidth: '600px',
          lineHeight: '1.6',
          fontWeight: '300',
          margin: '0 0 3rem 0'
        }}>
          Discover the unique experiences that await you at FRØ
        </p>

        {/* Cards Grid */}
        <div style={{
          display: 'flex',
          gap: '2rem',
          justifyContent: 'space-between',
          flexWrap: 'nowrap'
        }}>
          {expectations.map((expectation, index) => (
            <div key={index} style={{ flex: '1', minWidth: '0' }}>
              <ExpectationCard {...expectation} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatToExpectSection;
