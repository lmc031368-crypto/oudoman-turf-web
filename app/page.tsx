"use client";
import React from 'react';

export default function Home() {
  const companyName = "Handan Oudoman Sports Technology Co., Ltd.";
  const myWhatsApp = "8618831097125"; 

  const socialLinks = {
    whatsapp: `https://wa.me/${myWhatsApp}`,
    facebook: "https://www.facebook.com/profile.php?id=61582199365054", 
    instagram: "https://www.instagram.com/cathywang5784/", 
    tiktok: "https://www.tiktok.com/@wangcathy3", 
  };

  return (
    <div style={{ backgroundColor: '#f0fdf4', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      
      {/* 顶部导航栏 */}
      <nav style={{ 
        backgroundColor: 'rgba(255,255,255,0.95)', 
        padding: '15px 5%', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        position: 'sticky', 
        top: 0, 
        zIndex: 1000, 
        boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
        backdropFilter: 'blur(5px)'
      }}>
        <div style={{ fontSize: '22px', fontWeight: 'bold', color: '#166534' }}>OUDMAN TURF</div>
        <a href={socialLinks.whatsapp} target="_blank" rel="noopener noreferrer" style={{ background: '#22c55e', color: '#fff', padding: '10px 22px', borderRadius: '30px', textDecoration: 'none', fontWeight: 'bold', fontSize: '14px' }}>WhatsApp Online</a>
      </nav>

      {/* 首屏全屏大图区 */}
      <header style={{ 
        textAlign: 'center', 
        padding: '160px 20px', 
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.55)), url(/images/1.1.jpg)', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        color: 'white'
      }}>
        <h1 style={{ fontSize: '42px', margin: '0 auto', fontWeight: '800', maxWidth: '950px', lineHeight: '1.2', textShadow: '2px 2px 10px rgba(0,0,0,0.5)' }}>{companyName}</h1>
        <p style={{ marginTop: '20px', fontSize: '22px', opacity: 0.9 }}>Professional Artificial Turf Manufacturer</p>
        
        {/* ✅ 修正后的 PDF 路径：/images/products-details.pdf */}
        <div style={{ marginTop: '45px' }}>
          <a 
            href="/images/products-details.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ 
              backgroundColor: '#166534', 
              color: '#fff', 
              padding: '18px 40px', 
              borderRadius: '50px', 
              textDecoration: 'none', 
              fontWeight: 'bold', 
              fontSize: '18px', 
              display: 'inline-block',
              boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
              border: '2px solid #166534'
            }}
          >
            📂 View Technical Parameters (PDF)
          </a>
        </div>
      </header>

      {/* 产品展示网格 */}
      <main style={{ maxWidth: '1200px', margin: '80px auto', padding: '0 20px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
        {[
          { name: "Gym & Fitness", img: "/images/gym.jpg.png", desc: "High-density durable turf for crossfit training." },
          { name: "Professional Golf", img: "/images/golf.jpg.png", desc: "True-to-life putting experience for golf lovers." },
          { name: "Landscape & Pet", img: "/images/pet.jpg.png", desc: "Eco-friendly, safe and extremely easy to maintain." }
        ].map((item, idx) => (
          <div key={idx} style={{ background: '#fff', borderRadius: '25px', overflow: 'hidden', boxShadow: '0 15px 35px rgba(0,0,0,0.05)' }}>
            <img src={item.img} alt={item.name} style={{ width: '100%', height: '280px', objectFit: 'cover' }} />
            <div style={{ padding: '30px', textAlign: 'center' }}>
              <h3 style={{ color: '#166534', fontSize: '24px', marginBottom: '10px' }}>{item.name}</h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>{item.desc}</p>
            </div>
          </div>
        ))}
      </main>

      {/* 底部与可爱图标 */}
      <footer style={{ backgroundColor: '#fff', padding: '80px 20px', textAlign: 'center', borderTop: '1px solid #eee' }}>
        <h3 style={{ color: '#166534', fontSize: '28px', marginBottom: '40px' }}>Connect With Us</h3>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '35px', marginBottom: '40px', flexWrap: 'wrap' }}>
          <a href={socialLinks.facebook} target="_blank" style={{ textDecoration: 'none', textAlign: 'center' }}>
            <img src="https://cdn-icons-png.flaticon.com/512/124/124010.png" width="45" height="45" alt="Facebook" />
            <div style={{ fontSize: '12px', color: '#3b5998', fontWeight: 'bold', marginTop: '8px' }}>Facebook</div>
          </a>
          <a href={socialLinks.instagram} target="_blank" style={{ textDecoration: 'none', textAlign: 'center' }}>
            <img src="https://cdn-icons-png.flaticon.com/512/174/174855.png" width="45" height="45" alt="Instagram" />
            <div style={{ fontSize: '12px', color: '#e1306c', fontWeight: 'bold', marginTop: '8px' }}>Instagram</div>
          </a>
          <a href={socialLinks.tiktok} target="_blank" style={{ textDecoration: 'none', textAlign: 'center' }}>
            <img src="https://cdn-icons-png.flaticon.com/512/3046/3046121.png" width="45" height="45" alt="TikTok" />
            <div style={{ fontSize: '12px', color: '#000', fontWeight: 'bold', marginTop: '8px' }}>TikTok</div>
          </a>
          <a href={socialLinks.whatsapp} target="_blank" style={{ textDecoration: 'none', textAlign: 'center' }}>
            <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" width="45" height="45" alt="WhatsApp" />
            <div style={{ fontSize: '12px', color: '#25D366', fontWeight: 'bold', marginTop: '8px' }}>WhatsApp</div>
          </a>
        </div>

        <p style={{ color: '#666', fontSize: '18px' }}>Email: wangcathy633@gmail.com</p>
        <p style={{ fontSize: '14px', color: '#999', marginTop: '30px' }}>© 2026 OUDOMAN TURF. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
