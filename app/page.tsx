"use client";
import React from 'react';

export default function Home() {
  const companyName = "Handan Oudoman Sports Technology Co., Ltd.";
  const myNumber = "86 18831097125"; 

  return (
    <div style={{ backgroundColor: '#f8fafc', minHeight: '100vh', fontFamily: 'sans-serif', color: '#1e293b' }}>
      {/* Navigation */}
      <nav style={{ backgroundColor: '#fff', padding: '18px 6%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
        <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#166534' }}>OUDMAN TURF</div>
        <a href={`https://wa.me/${myNumber}`} style={{ backgroundColor: '#22c55e', color: 'white', padding: '12px 24px', borderRadius: '6px', textDecoration: 'none', fontWeight: '600' }}>
          CONTACT US
        </a>
      </nav>

      {/* Hero Section */}
      <header style={{ textAlign: 'center', padding: '100px 20px', background: '#14532d', color: 'white' }}>
        <h1 style={{ fontSize: '42px', fontWeight: '800', marginBottom: '20px' }}>{companyName}</h1>
        <p style={{ fontSize: '20px', opacity: '0.9', maxWidth: '800px', margin: '0 auto' }}>Professional Artificial Grass & Synthetic Turf Manufacturer for Global Markets.</p>
      </header>

      {/* Product Grid */}
      <main style={{ maxWidth: '1200px', margin: '60px auto', padding: '0 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
          
          <div style={cardStyle}>
            <img src="/gym.jpg" alt="Gym" style={imgStyle} />
            <div style={{ padding: '25px' }}>
              <h3 style={{ fontSize: '22px', marginBottom: '10px' }}>Gym & Fitness Turf</h3>
              <p style={{ color: '#64748b', lineHeight: '1.6' }}>High-density fibers designed for heavy sled training and intensive indoor sports.</p>
            </div>
          </div>

          <div style={cardStyle}>
            <img src="/golf.jpg" alt="Golf" style={imgStyle} />
            <div style={{ padding: '25px' }}>
              <h3 style={{ fontSize: '22px', marginBottom: '10px' }}>Professional Golf Green</h3>
              <p style={{ color: '#64748b', lineHeight: '1.6' }}>Superior putting surface providing realistic ball roll for training facilities.</p>
            </div>
          </div>

          <div style={cardStyle}>
            <img src="/pet.jpg" alt="Pet" style={imgStyle} />
            <div style={{ padding: '25px' }}>
              <h3 style={{ fontSize: '22px', marginBottom: '10px' }}>Pet Friendly Turf</h3>
              <p style={{ color: '#64748b', lineHeight: '1.6' }}>Antibacterial and fast drainage system. Safe for pets and easy to clean.</p>
            </div>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer style={{ backgroundColor: '#0f172a', color: '#94a3b8', padding: '60px 24px', textAlign: 'center' }}>
        <p style={{ color: 'white', fontWeight: 'bold' }}>© 2026 {companyName}</p>
        <p>WhatsApp/WeChat: +86 188 3109 7125</p>
      </footer>
    </div>
  );
}

const cardStyle = { backgroundColor: '#fff', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)', border: '1px solid #e2e8f0' };
const imgStyle = { width: '100%', height: '240px', objectFit: 'cover' };
  fontWeight: '600',
  cursor: 'pointer'
};
