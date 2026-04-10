"use client";
import React from 'react';

export default function Home() {
  const companyName = "Handan Oudoman Sports Technology Co., Ltd.";
  
  return (
    <div style={{ backgroundColor: '#f8fafc', minHeight: '100vh', fontFamily: 'sans-serif', color: '#1e293b' }}>
      {/* Navbar */}
      <nav style={{ backgroundColor: '#fff', padding: '18px 5%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
        <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#166534' }}>OUDMAN TURF</div>
        <a href="https://wa.me/8618831097125" style={{ backgroundColor: '#22c55e', color: 'white', padding: '12px 24px', borderRadius: '6px', textDecoration: 'none', fontWeight: 'bold' }}>
          CONTACT US
        </a>
      </nav>

      {/* Hero */}
      <header style={{ textAlign: 'center', padding: '80px 20px', background: '#14532d', color: 'white' }}>
        <h1 style={{ fontSize: '36px', marginBottom: '20px' }}>{companyName}</h1>
        <p style={{ fontSize: '18px', opacity: '0.9' }}>Leading Manufacturer of Premium Artificial Grass.</p>
      </header>

      {/* Products */}
      <main style={{ maxWidth: '1100px', margin: '50px auto', padding: '0 20px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
        <div style={cardStyle}>
          <img src="/gym.jpg" style={imgStyle} alt="Gym" />
          <div style={{ padding: '20px' }}><h3>Gym Turf</h3><p>Professional fitness flooring.</p></div>
        </div>
        <div style={cardStyle}>
          <img src="/golf.jpg" style={imgStyle} alt="Golf" />
          <div style={{ padding: '20px' }}><h3>Golf Green</h3><p>Realistic putting surface.</p></div>
        </div>
        <div style={cardStyle}>
          <img src="/pet.jpg" style={imgStyle} alt="Pet" />
          <div style={{ padding: '20px' }}><h3>Pet Grass</h3><p>Antibacterial and soft.</p></div>
        </div>
      </main>

      <footer style={{ textAlign: 'center', padding: '40px', background: '#0f172a', color: '#fff' }}>
        <p>© 2026 {companyName}</p>
      </footer>
    </div>
  );
}

const cardStyle = { backgroundColor: '#fff', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', border: '1px solid #eee' };
const imgStyle = { width: '100%', height: '220px', objectFit: 'cover' };
