"use client";
import React from 'react';

export default function Home() {
  const companyName = "Handan Oudoman Sports Technology Co., Ltd.";
  const myNumber = "8615075550800"; // Your WhatsApp number

  return (
    <div style={{ backgroundColor: '#f8fafc', minHeight: '100vh', fontFamily: 'system-ui, -apple-system, sans-serif', color: '#1e293b' }}>
      
      {/* Navigation Bar */}
      <nav style={{ backgroundColor: '#ffffff', padding: '18px 6%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', position: 'sticky', top: 0, zIndex: 100 }}>
        <div style={{ fontSize: '24px', fontWeight: '800', color: '#166534', letterSpacing: '-0.5px' }}>OUDMAN TURF</div>
        <a href={`https://wa.me/${myNumber}`} style={{ backgroundColor: '#22c55e', color: 'white', padding: '12px 24px', borderRadius: '6px', textDecoration: 'none', fontWeight: '600', fontSize: '14px' }}>
          INQUIRY NOW
        </a>
      </nav>

      {/* Hero Section */}
      <header style={{ 
        textAlign: 'center', 
        padding: '100px 20px', 
        background: 'linear-gradient(135deg, #166534 0%, #14532d 100%)', 
        color: 'white' 
      }}>
        <h1 style={{ fontSize: '48px', fontWeight: '800', marginBottom: '20px', lineHeight: '1.2' }}>{companyName}</h1>
        <p style={{ fontSize: '20px', opacity: '0.9', maxWidth: '800px', margin: '0 auto 40px', fontWeight: '300' }}>
          Leading Manufacturer of Premium Artificial Grass & Synthetic Turf Solutions for Global Markets.
        </p>
        <div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
          <div style={{ border: '1px solid rgba(255,255,255,0.3)', padding: '10px 20px', borderRadius: '20px', fontSize: '14px' }}>✓ UV Protection</div>
          <div style={{ border: '1px solid rgba(255,255,255,0.3)', padding: '10px 20px', borderRadius: '20px', fontSize: '14px' }}>✓ Eco-Friendly</div>
          <div style={{ border: '1px solid rgba(255,255,255,0.3)', padding: '10px 20px', borderRadius: '20px', fontSize: '14px' }}>✓ 8-10 Years Warranty</div>
        </div>
      </header>

      {/* Product Catalog */}
      <main style={{ maxWidth: '1200px', margin: '80px auto', padding: '0 24px' }}>
        <h2 style={{ textAlign: 'center', fontSize: '36px', fontWeight: '700', marginBottom: '60px' }}>Our Featured Products</h2>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '40px' 
        }}>
          {/* Card 1: Gym Turf */}
          <div style={cardStyle}>
            <div style={{ overflow: 'hidden', height: '240px' }}>
              <img src="/gym.jpg" alt="Gym Turf" style={imgStyle} />
            </div>
            <div style={{ padding: '30px' }}>
              <h3 style={productTitleStyle}>Gym & Fitness Turf</h3>
              <p style={productDescStyle}>High-density reinforced fibers designed for heavy sled training and intensive indoor sports. Available in multiple colors.</p>
              <button style={btnStyle}>Technical Details</button>
            </div>
          </div>

          {/* Card 2: Golf Green */}
          <div style={cardStyle}>
            <div style={{ overflow: 'hidden', height: '240px' }}>
              <img src="/golf.jpg" alt="Golf Putting Green" style={imgStyle} />
            </div>
            <div style={{ padding: '30px' }}>
              <h3 style={productTitleStyle}>Professional Golf Green</h3>
              <p style={productDescStyle}>Superior putting surface providing realistic ball roll and speed. Perfect for backyard greens and professional training facilities.</p>
              <button style={btnStyle}>Request Sample</button>
            </div>
          </div>

          {/* Card 3: Pet Grass */}
          <div style={cardStyle}>
            <div style={{ overflow: 'hidden', height: '240px' }}>
              <img src="/pet.jpg" alt="Pet Friendly Grass" style={imgStyle} />
            </div>
            <div style={{ padding: '30px' }}>
              <h3 style={productTitleStyle}>Pet Friendly Turf</h3>
              <p style={productDescStyle}>Special antimicrobial backing with fast drainage system. Safe for pets, easy to clean, and stays green all year round.</p>
              <button style={btnStyle}>Get a Quote</button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer style={{ backgroundColor: '#0f172a', color: '#94a3b8', padding: '60px 24px', textAlign: 'center' }}>
        <div style={{ color: 'white', fontSize: '20px', fontWeight: 'bold', marginBottom: '20px' }}>OUDMAN TURF</div>
        <p style={{ marginBottom: '10px' }}>© 2026 {companyName}</p>
        <p style={{ marginBottom: '10px' }}>Factory Address: Handan Industrial Zone, Hebei Province, China</p>
        <p style={{ color: '#22c55e', fontWeight: 'bold' }}>WhatsApp/WeChat: +86 150 7555 0800</p>
      </footer>
    </div>
  );
}

// Global Styles
const cardStyle = {
  backgroundColor: '#ffffff',
  borderRadius: '16px',
  overflow: 'hidden',
  boxShadow: '0 10px 25px -5px rgba(0,0,0,0.05)',
  border: '1px solid #e2e8f0'
};

const imgStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  transition: 'transform 0.5s ease'
};

const productTitleStyle = {
  fontSize: '22px',
  fontWeight: '700',
  marginBottom: '12px',
  color: '#0f172a'
};

const productDescStyle = {
  fontSize: '15px',
  lineHeight: '1.6',
  color: '#64748b',
  marginBottom: '20px',
  minHeight: '72px'
};

const btnStyle = {
  width: '100%',
  padding: '10px',
  backgroundColor: '#f1f5f9',
  border: 'none',
  borderRadius: '8px',
  color: '#475569',
  fontWeight: '600',
  cursor: 'pointer'
};
