"use client";
import React from 'react';

export default function Home() {
  const companyName = "Handan Oudoman Sports Technology Co., Ltd.";
  const myWhatsApp = "8618831097125"; // 已更新号码
  const myEmail = "sales@oudoman.com";

  // 样式定义
  const navStyle = { backgroundColor: '#fff', padding: '15px 5%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', position: 'sticky' as const, top: 0, zIndex: 100 };
  const heroStyle = { textAlign: 'center' as const, padding: '100px 20px', background: 'linear-gradient(135deg, #166534 0%, #064e3b 100%)', color: 'white' };
  const cardStyle = { backgroundColor: '#fff', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)', border: '1px solid #e2e8f0', transition: 'transform 0.3s' };
  const imgStyle = { width: '100%', height: '260px', objectFit: 'cover' as const };
  const btnStyle = { backgroundColor: '#22c55e', color: 'white', padding: '10px 20px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold', fontSize: '14px' };
  const socialIconStyle = { color: 'white', fontSize: '20px', textDecoration: 'none', margin: '0 10px' };

  return (
    <div style={{ backgroundColor: '#f0fdf4', minHeight: '100vh', fontFamily: 'sans-serif', color: '#1e293b' }}>
      
      {/* 顶部导航 */}
      <nav style={navStyle}>
        <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#15803d' }}>OUDMAN TURF</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <a href={`https://wa.me/${myWhatsApp}`} target="_blank" rel="noopener noreferrer" style={btnStyle}>WhatsApp Us</a>
        </div>
      </nav>

      {/* 巨幕横幅 */}
      <header style={heroStyle}>
        <h1 style={{ fontSize: '36px', marginBottom: '20px', fontWeight: '800' }}>{companyName}</h1>
        <p style={{ fontSize: '20px', opacity: 0.9, maxWidth: '700px', margin: '0 auto', lineHeight: '1.6' }}>
          Leading Professional Artificial Turf Manufacturer. High-performance synthetic grass solutions for worldwide projects.
        </p>
      </header>

      {/* 产品展示区 */}
      <main style={{ maxWidth: '1200px', margin: '60px auto', padding: '0 20px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px' }}>
        
        <div style={cardStyle}>
          <img src="/images/gym.jpg.png" alt="Gym Turf" style={imgStyle} />
          <div style={{ padding: '30px' }}>
            <h3 style={{ color: '#166534', fontSize: '22px', marginBottom: '10px' }}>Gym & Fitness Turf</h3>
            <p style={{ color: '#64748b' }}>High-density fibers engineered for heavy sled training and durability.</p>
          </div>
        </div>

        <div style={cardStyle}>
          <img src="/images/golf.jpg.png" alt="Golf Green" style={imgStyle} />
          <div style={{ padding: '30px' }}>
            <h3 style={{ color: '#166534', fontSize: '22px', marginBottom: '10px' }}>Professional Golf Green</h3>
            <p style={{ color: '#64748b' }}>Superior putting surfaces with realistic ball roll for home and commercial greens.</p>
          </div>
        </div>

        <div style={cardStyle}>
          <img src="/images/pet.jpg.png" alt="Pet Grass" style={imgStyle} />
          <div style={{ padding: '30px' }}>
            <h3 style={{ color: '#166534', fontSize: '22px', marginBottom: '10px' }}>Pet Friendly Grass</h3>
            <p style={{ color: '#64748b' }}>Safe, non-toxic, and easy-to-clean turf, perfect for your furry friends.</p>
          </div>
        </div>

      </main>

      {/* 页脚 & 社媒 */}
      <footer style={{ backgroundColor: '#0f172a', color: 'white', padding: '80px 20px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '28px', marginBottom: '30px' }}>Follow Us & Get a Quote</h2>
        
        {/* 社媒链接区 */}
        <div style={{ marginBottom: '40px', display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '20px' }}>
          <a href="#" style={socialIconStyle}>Facebook</a>
          <a href="#" style={socialIconStyle}>Instagram</a>
          <a href="#" style={socialIconStyle}>LinkedIn</a>
          <a href="#" style={socialIconStyle}>YouTube</a>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px' }}>
          <a href={`https://wa.me/${myWhatsApp}`} style={{ ...btnStyle, padding: '15px 40px', fontSize: '18px' }}>
            WhatsApp: +86 188 3109 7125
          </a>
          <p style={{ color: '#94a3b8', marginTop: '20px' }}>Email: {myEmail}</p>
          <p style={{ fontSize: '14px', color: '#475569', borderTop: '1px solid #1e293b', paddingTop: '20px', width: '100%' }}>
            © 2026 {companyName}. All Rights Reserved.
          </p>
        </div>
      </footer>

    </div>
  );
}
