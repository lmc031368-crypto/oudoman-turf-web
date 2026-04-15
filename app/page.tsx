"use client";
import React from 'react';

export default function Home() {
  const companyName = "Handan Oudoman Sports Technology Co., Ltd.";
  const myWhatsApp = "8618831097125"; 
  const myEmail = "wangcathy633@gmail.com"; 

  const socialLinks = {
    whatsapp: `https://wa.me/${myWhatsApp}`,
    facebook: "https://www.facebook.com/profile.php?id=61582199365054", 
    instagram: "https://www.instagram.com/cathywang5784/", 
    tiktok: "https://www.tiktok.com/@wangcathy3", 
  };

  return (
    <div style={{ backgroundColor: '#f0fdf4', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      
      {/* 顶部导航栏 - 保持之前的简洁样式 */}
      <nav style={{ 
        backgroundColor: 'rgba(255,255,255,0.9)', 
        backdropFilter: 'blur(10px)',
        padding: '15px 5%', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        position: 'sticky', 
        top: 0, 
        zIndex: 1000,
        borderBottom: '1px solid #e5e7eb'
      }}>
        <div style={{ fontSize: '22px', fontWeight: 'bold', color: '#166534' }}>OUDMAN TURF</div>
        <a href={socialLinks.whatsapp} target="_blank" rel="noopener noreferrer" style={{ background: '#22c55e', color: '#fff', padding: '10px 22px', borderRadius: '30px', textDecoration: 'none', fontWeight: 'bold' }}>WhatsApp</a>
      </nav>

      {/* 之前的排版：全屏大图 Hero Section */}
      <header style={{ 
        textAlign: 'center', 
        padding: '160px 20px', 
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.55)), url(/images/1.1.jpg)', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        color: 'white',
        marginBottom: '40px'
      }}>
        <h1 style={{ fontSize: '42px', margin: '0 auto', fontWeight: '800', maxWidth: '900px', lineHeight: '1.2' }}>{companyName}</h1>
        <p style={{ marginTop: '25px', fontSize: '22px', opacity: 0.9 }}>Professional Artificial Turf Manufacturer</p>
        
        {/* PDF 按钮直接放在 Hero 区域，更显眼 */}
        <div style={{ marginTop: '40px' }}>
          <a 
            href="/products-details.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ 
              backgroundColor: '#166534', 
              color: '#fff', 
              padding: '16px 35px', 
              borderRadius: '50px', 
              textDecoration: 'none', 
              fontWeight: 'bold',
              fontSize: '18px',
              border: '2px solid #166534',
              display: 'inline-block'
            }}
          >
            📂 View Technical Details (PDF)
          </a>
        </div>
      </header>

      {/* 之前的排版：产品展示网格 */}
      <main style={{ maxWidth: '1200px', margin: '60px auto', padding: '0 20px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
        
        <div style={{ background: '#fff', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
          <img src="/images/gym.jpg.png" alt="Gym" style={{ width: '100%', height: '260px', objectFit: 'cover' }} />
          <div style={{ padding: '30px', textAlign: 'center' }}>
            <h3 style={{ color: '#166534', fontSize: '22px' }}>Gym & Fitness</h3>
            <p style={{ color: '#666' }}>High-density durable turf for crossfit.</p>
          </div>
        </div>

        <div style={{ background: '#fff', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
          <img src="/images/golf.jpg.png" alt="Golf" style={{ width: '100%', height: '260px', objectFit: 'cover' }} />
          <div style={{ padding: '30px', textAlign: 'center' }}>
            <h3 style={{ color: '#166534', fontSize: '22px' }}>Professional Golf</h3>
            <p style={{ color: '#666' }}>True-to-life putting surface performance.</p>
          </div>
        </div>

        <div style={{ background: '#fff', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
          <img src="/images/pet.jpg.png" alt="Pet" style={{ width: '100%', height: '260px', objectFit: 'cover' }} />
          <div style={{ padding: '30px', textAlign: 'center' }}>
            <h3 style={{ color: '#166534', fontSize: '22px' }}>Landscape & Pet</h3>
            <p style={{ color: '#666' }}>Natural looking and easy to drain.</p>
          </div>
        </div>

      </main>

      {/* 之前的排版：简洁页脚 */}
      <footer style={{ backgroundColor: '#fff', padding: '60px 20px', textAlign: 'center', borderTop: '1px solid #eee' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', marginBottom: '30px' }}>
          <a href={socialLinks.facebook} target="_blank">Facebook</a>
          <a href={socialLinks.instagram} target="_blank">Instagram</a>
          <a href={socialLinks.tiktok} target="_blank">TikTok</a>
        </div>
        <p style={{ color: '#666' }}>Email: {myEmail}</p>
        <p style={{ fontSize: '14px', color: '#999', marginTop: '20px' }}>© 2026 OUDOMAN TURF. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
