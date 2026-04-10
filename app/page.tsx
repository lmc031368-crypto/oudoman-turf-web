"use client";
import React from 'react';

export default function Home() {
  const companyName = "Handan Oudoman Sports Technology Co., Ltd.";
  const myWhatsApp = "8615075550800";
  const myEmail = "sales@oudoman.com";

  return (
    <div style={{ backgroundColor: '#f0fdf4', minHeight: '100vh', fontFamily: 'sans-serif', color: '#1e293b' }}>
      
      {/* 顶部导航栏 */}
      <nav style={{ backgroundColor: '#fff', padding: '15px 5%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', position: 'sticky', top: 0, zIndex: 100 }}>
        <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#166534' }}>OUDMAN TURF</div>
        <div style={{ display: 'flex', gap: '15px' }}>
          <a href={`https://wa.me/${myWhatsApp}`} target="_blank" rel="noopener noreferrer" style={navBtnStyle}>
            WhatsApp
          </a>
          <a href={`mailto:${myEmail}`} style={{ ...navBtnStyle, backgroundColor: '#334155' }}>
            Email Us
          </a>
        </div>
      </nav>

      {/* 巨幕横幅 */}
      <header style={{ textAlign: 'center', padding: '100px 20px', background: 'linear-gradient(135deg, #166534 0%, #14532d 100%)', color: 'white' }}>
        <h1 style={{ fontSize: '38px', fontWeight: 'bold', marginBottom: '20px' }}>{companyName}</h1>
        <p style={{ fontSize: '20px', maxWidth: '800px', margin: '0 auto', opacity: '0.9' }}>
          Your Trusted Manufacturer of High-Performance Artificial Turf for Sports, Golf, and Landscaping.
        </p>
      </header>

      {/* 产品展示区 - 匹配您在 public/images 中的路径 */}
      <main style={{ maxWidth: '1200px', margin: '60px auto', padding: '0 20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
          
          {/* Gym Turf */}
          <div style={cardStyle}>
            <img src="/images/gym.jpg.png" alt="Gym Turf" style={imgStyle} />
            <div style={{ padding: '25px' }}>
              <h3 style={{ fontSize: '22px', marginBottom: '12px', color: '#166534' }}>Gym & Fitness Turf</h3>
              <p style={{ color: '#64748b', lineHeight: '1.6' }}>Professional-grade synthetic grass designed for heavy sled training and indoor gyms.</p>
            </div>
          </div>

          {/* Golf Green */}
          <div style={cardStyle}>
            <img src="/images/golf.jpg.png" alt="Golf Green" style={imgStyle} />
            <div style={{ padding: '25px' }}>
              <h3 style={{ fontSize: '22px', marginBottom: '12px', color: '#166534' }}>Professional Golf Green</h3>
              <p style={{ color: '#64748b', lineHeight: '1.6' }}>High-density putting surface providing a realistic ball roll for home and commercial use.</p>
            </div>
          </div>

          {/* Pet Grass */}
          <div style={cardStyle}>
            <img src="/images/pet.jpg.png" alt="Pet Grass" style={imgStyle} />
            <div style={{ padding: '25px' }}>
              <h3 style={{ fontSize: '22px', marginBottom: '12px', color: '#166534' }}>Pet Friendly Turf</h3>
              <p style={{ color: '#64748b', lineHeight: '1.6' }}>Safe, non-toxic, and easy-to-drain turf perfect for backyard pets and play areas.</p>
            </div>
          </div>

        </div>
      </main>

      {/* 页脚联系区域 */}
      <footer style={{ backgroundColor: '#0f172a', color: '#f8fafc', padding: '80px 20px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '28px', marginBottom: '30px' }}>Ready to start your project?</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '40px' }}>
          <a href={`https://wa.me/${myWhatsApp}`} style={largeBtnStyle}>Contact on WhatsApp</a>
        </div>
        <div style={{ borderTop: '1px solid #334155', paddingTop: '40px', fontSize: '14px', color: '#94a3b8' }}>
          <p style={{ marginBottom: '10px' }}>© 2026 {companyName}</p>
          <p>Email: {myEmail} | WhatsApp: +{myWhatsApp}</p>
        </div>
      </footer>
    </div>
  );
}

// 样式对象
const navBtnStyle = { backgroundColor: '#22c55e', color: 'white', padding: '10px 20px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold', fontSize: '14px' };
const largeBtnStyle = { backgroundColor: '#22c55e', color: 'white', padding: '15px 35px', borderRadius: '10px', textDecoration: 'none', fontWeight: 'bold', fontSize: '18px' };
const cardStyle = { backgroundColor: '#fff', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)', border: '1px solid #e2e8f0' };
const imgStyle = { width: '100%', height: '260px', objectFit: 'cover' };
