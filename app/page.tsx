"use client";
import React from 'react';

export default function Home() {
  const companyName = "Handan Oudoman Sports Technology Co., Ltd.";
  const myWhatsApp = "8615075550800";
  const myEmail = "sales@oudoman.com";

  // 样式配置，确保在部署时不会报错
  const navStyle = { 
    backgroundColor: '#ffffff', 
    padding: '15px 5%', 
    display: 'flex', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)' 
  };

  const heroStyle = { 
    textAlign: 'center' as const, 
    padding: '80px 20px', 
    background: 'linear-gradient(135deg, #166534 0%, #14532d 100%)', 
    color: '#ffffff' 
  };

  const cardStyle = { 
    backgroundColor: '#ffffff', 
    borderRadius: '16px', 
    overflow: 'hidden', 
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)', 
    border: '1px solid #e2e8f0' 
  };

  const imgStyle = { 
    width: '100%', 
    height: '240px', 
    objectFit: 'cover' as const 
  };

  const btnStyle = { 
    backgroundColor: '#22c55e', 
    color: '#ffffff', 
    padding: '10px 20px', 
    borderRadius: '8px', 
    textDecoration: 'none', 
    fontWeight: 'bold',
    fontSize: '14px'
  };

  return (
    <div style={{ backgroundColor: '#f8fafc', minHeight: '100vh', fontFamily: 'sans-serif', margin: 0 }}>
      
      {/* 顶部导航 */}
      <nav style={navStyle}>
        <div style={{ fontSize: '22px', fontWeight: 'bold', color: '#15803d' }}>OUDMAN TURF</div>
        <div style={{ display: 'flex', gap: '10px' }}>
          <a href={`https://wa.me/${myWhatsApp}`} target="_blank" rel="noopener noreferrer" style={btnStyle}>WhatsApp</a>
          <a href={`mailto:${myEmail}`} style={{ ...btnStyle, backgroundColor: '#334155' }}>Email Us</a>
        </div>
      </nav>

      {/* 欢迎区域 */}
      <header style={heroStyle}>
        <h1 style={{ fontSize: '32px', marginBottom: '15px' }}>{companyName}</h1>
        <p style={{ fontSize: '18px', opacity: 0.9, maxWidth: '800px', margin: '0 auto' }}>
          Leading Manufacturer of Premium Artificial Turf Solutions for Global Markets.
        </p>
      </header>

      {/* 产品网格 - 路径已匹配 public/images/ */}
      <main style={{ maxWidth: '1200px', margin: '50px auto', padding: '0 20px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
        
        {/* 产品 1: Gym */}
        <div style={cardStyle}>
          <img src="/images/gym.jpg.png" alt="Gym Turf" style={imgStyle} />
          <div style={{ padding: '25px' }}>
            <h3 style={{ color: '#166534', marginTop: 0 }}>Gym & Fitness Turf</h3>
            <p style={{ color: '#64748b', lineHeight: '1.5' }}>High-density artificial grass perfect for heavy training and gym sleds.</p>
          </div>
        </div>

        {/* 产品 2: Golf */}
        <div style={cardStyle}>
          <img src="/images/golf.jpg.png" alt="Golf Green" style={imgStyle} />
          <div style={{ padding: '25px' }}>
            <h3 style={{ color: '#166534', marginTop: 0 }}>Professional Golf Green</h3>
            <p style={{ color: '#64748b', lineHeight: '1.5' }}>Superior putting surfaces designed for realistic ball roll and durability.</p>
          </div>
        </div>

        {/* 产品 3: Pet */}
        <div style={cardStyle}>
          <img src="/images/pet.jpg.png" alt="Pet Grass" style={imgStyle} />
          <div style={{ padding: '25px' }}>
            <h3 style={{ color: '#166534', marginTop: 0 }}>Pet Friendly Grass</h3>
            <p style={{ color: '#64748b', lineHeight: '1.5' }}>Soft, non-toxic fibers that are safe for pets and incredibly easy to clean.</p>
          </div>
        </div>

      </main>

      {/* 联系页脚 */}
      <footer style={{ backgroundColor: '#0f172a', color: '#ffffff', padding: '60px 20px', textAlign: 'center' }}>
        <h2 style={{ marginBottom: '20px' }}>Contact Us Today</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginBottom: '30px' }}>
          <a href={`https://wa.me/${myWhatsApp}`} style={{ ...btnStyle, padding: '15px 30px', fontSize: '16px' }}>
            WhatsApp: +{myWhatsApp}
          </a>
        </div>
        <div style={{ color: '#94a3b8', fontSize: '14px' }}>
          <p>© 2026 {companyName}</p>
          <p>Address: Handan, Hebei, China | Email: {myEmail}</p>
        </div>
      </footer>

    </div>
  );
}
