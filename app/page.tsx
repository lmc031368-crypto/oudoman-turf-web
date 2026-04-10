"use client";
import React from 'react';

export default function Home() {
  const companyName = "Handan Oudoman Sports Technology Co., Ltd.";
  
  return (
    <div style={{ backgroundColor: '#f8fafc', minHeight: '100vh', fontFamily: 'sans-serif', color: '#1e293b' }}>
      {/* 顶部导航 */}
      <nav style={{ backgroundColor: '#fff', padding: '15px 5%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', position: 'sticky', top: 0, zIndex: 100 }}>
        <div style={{ fontSize: '22px', fontWeight: 'bold', color: '#15803d' }}>OUDMAN TURF</div>
        <a href="https://wa.me/8615075550800" style={{ backgroundColor: '#22c55e', color: 'white', padding: '10px 20px', borderRadius: '5px', textDecoration: 'none', fontWeight: 'bold' }}>
          CONTACT US
        </a>
      </nav>

      {/* 巨幕宣传 (Hero) */}
      <header style={{ textAlign: 'center', padding: '100px 20px', background: 'linear-gradient(135deg, #166534 0%, #14532d 100%)', color: 'white' }}>
        <h1 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '15px' }}>{companyName}</h1>
        <p style={{ fontSize: '18px', maxWidth: '700px', margin: '0 auto', opacity: '0.9' }}>Leading Manufacturer of Premium Artificial Turf solutions for global markets.</p>
      </header>

      {/* 产品展示区 - 精准匹配你的图片名 */}
      <main style={{ maxWidth: '1200px', margin: '60px auto', padding: '0 20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
          
          {/* 卡片 1: Gym Turf */}
          <div style={cardStyle}>
            <img src="/gym.jpg.png" alt="Gym" style={imgStyle} />
            <div style={{ padding: '25px' }}>
              <h3 style={{ fontSize: '22px', marginBottom: '10px' }}>Gym & Fitness Turf</h3>
              <p style={{ color: '#64748b', lineHeight: '1.6', fontSize: '15px' }}>Heavy-duty turf designed for intense gym sled training and indoor sports flooring.</p>
            </div>
          </div>

          {/* 卡片 2: Golf Green */}
          <div style={cardStyle}>
            <img src="/golf.jpg.png" alt="Golf" style={imgStyle} />
            <div style={{ padding: '25px' }}>
              <h3 style={{ fontSize: '22px', marginBottom: '10px' }}>Professional Golf Green</h3>
              <p style={{ color: '#64748b', lineHeight: '1.6', fontSize: '15px' }}>Superior putting surface providing realistic ball roll for training and backyard greens.</p>
            </div>
          </div>

          {/* 卡片 3: Pet Grass */}
          <div style={cardStyle}>
            <img src="/pet.jpg.png" alt="Pet" style={imgStyle} />
            <div style={{ padding: '25px' }}>
              <h3 style={{ fontSize: '22px', marginBottom: '10px' }}>Pet Friendly Turf</h3>
              <p style={{ color: '#64748b', lineHeight: '1.6', fontSize: '15px' }}>Soft, non-toxic fibers with fast drainage. Safe for pets, durable, and easy to clean.</p>
            </div>
          </div>

        </div>
      </main>

      {/* 页脚 */}
      <footer style={{ backgroundColor: '#0f172a', color: '#94a3b8', padding: '60px 20px', textAlign: 'center', marginTop: '60px' }}>
        <p style={{ color: 'white', marginBottom: '10px' }}>© 2026 {companyName}</p>
        <p>WhatsApp: +86 150 7555 0800</p>
      </footer>
    </div>
  );
}

// 样式定义
const cardStyle = {
  backgroundColor: '#fff',
  borderRadius: '16px',
  overflow: 'hidden',
  boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)',
  border: '1px solid #e2e8f0',
  transition: 'transform 0.2s'
};

const imgStyle = {
  width: '100%',
  height: '240px',
  objectFit: 'cover'
};
