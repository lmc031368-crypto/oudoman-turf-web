"use client";
import React from 'react';

export default function Home() {
  const companyName = "Handan Oudoman Sports Technology Co., Ltd.";
  const myWhatsApp = "8615075550800";

  return (
    <div style={{ backgroundColor: '#f0fdf4', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      {/* 导航栏 */}
      <nav style={{ backgroundColor: '#ffffff', padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <h1 style={{ color: '#166534', margin: 0 }}>OUDMAN TURF</h1>
        <a href={`https://wa.me/${myWhatsApp}`} style={{ backgroundColor: '#22c55e', color: 'white', padding: '10px 20px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold' }}>WhatsApp Us</a>
      </nav>

      {/* 标题 */}
      <div style={{ textAlign: 'center', padding: '60px 20px' }}>
        <h2 style={{ fontSize: '32px', color: '#111' }}>{companyName}</h2>
        <p style={{ color: '#666', fontSize: '18px' }}>Global Supplier of Artificial Turf Solutions</p>
      </div>

      {/* 产品列表 */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
        
        {/* 产品 1 */}
        <div style={{ backgroundColor: '#fff', borderRadius: '12px', overflow: 'hidden', border: '1px solid #e5e7eb' }}>
          <img src="/gym.jpg.png" alt="Gym" style={{ width: '100%', height: '240px', objectFit: 'cover' }} />
          <div style={{ padding: '20px' }}>
            <h3 style={{ margin: '0 0 10px 0' }}>Gym & Fitness Turf</h3>
            <p style={{ color: '#666' }}>High density for heavy training.</p>
          </div>
        </div>

        {/* 产品 2 */}
        <div style={{ backgroundColor: '#fff', borderRadius: '12px', overflow: 'hidden', border: '1px solid #e5e7eb' }}>
          <img src="/golf.jpg.png" alt="Golf" style={{ width: '100%', height: '240px', objectFit: 'cover' }} />
          <div style={{ padding: '20px' }}>
            <h3 style={{ margin: '0 0 10px 0' }}>Professional Golf Green</h3>
            <p style={{ color: '#666' }}>Realistic ball roll for putting.</p>
          </div>
        </div>

        {/* 产品 3 */}
        <div style={{ backgroundColor: '#fff', borderRadius: '12px', overflow: 'hidden', border: '1px solid #e5e7eb' }}>
          <img src="/pet.jpg.png" alt="Pet" style={{ width: '100%', height: '240px', objectFit: 'cover' }} />
          <div style={{ padding: '20px' }}>
            <h3 style={{ margin: '0 0 10px 0' }}>Pet Friendly Grass</h3>
            <p style={{ color: '#666' }}>Safe, soft and easy to clean.</p>
          </div>
        </div>

      </div>

      {/* 页脚 */}
      <footer style={{ textAlign: 'center', padding: '40px', color: '#999' }}>
        <p>© 2026 {companyName}</p>
      </footer>
    </div>
  );
}
