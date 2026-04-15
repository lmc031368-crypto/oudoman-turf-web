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
    <div style={{ backgroundColor: '#f9fafb', minHeight: '100vh', fontFamily: 'sans-serif', color: '#333' }}>
      
      {/* 导航栏组件 */}
      <nav style={{ backgroundColor: '#fff', padding: '15px 5%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', position: 'sticky', top: 0, zIndex: 1000 }}>
        <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#166534' }}>OUDMAN TURF</div>
        <a href={socialLinks.whatsapp} target="_blank" rel="noopener noreferrer" style={{ background: '#22c55e', color: '#fff', padding: '10px 20px', borderRadius: '30px', textDecoration: 'none', fontWeight: 'bold', fontSize: '14px' }}>Contact WhatsApp</a>
      </nav>

      {/* 首屏大图 - 使用 1.1.jpg */}
      <header style={{ 
        textAlign: 'center', 
        padding: '120px 20px', 
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(/images/1.1.jpg)', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        color: 'white' 
      }}>
        <h1 style={{ fontSize: '32px', marginBottom: '20px', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>{companyName}</h1>
        <p style={{ fontSize: '18px', maxWidth: '800px', margin: '0 auto' }}>Leading manufacturer of landscape and sports artificial grass.</p>
      </header>

      {/* 🔴 核心功能：PDF 技术参数下载区 */}
      <section style={{ maxWidth: '1000px', margin: '60px auto', padding: '40px 20px', backgroundColor: '#fff', borderRadius: '20px', textAlign: 'center', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
        <h2 style={{ color: '#166534', marginBottom: '15px' }}>Technical Data & Product Catalog</h2>
        <p style={{ color: '#666', marginBottom: '30px' }}>Discover our detailed parameters including Pile Height, Dtex, and Gauge details.</p>
        
        {/* 这里是你的 PDF 按钮，注意 href 必须和文件名一致 */}
        <a 
          href="/products.pdf" 
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
            transition: 'transform 0.2s'
          }}
        >
          📂 Open Product Details (PDF)
        </a>
        <p style={{ fontSize: '12px', color: '#999', marginTop: '15px' }}>*Click to view or save the technical specifications.</p>
      </section>

      {/* 产品网格展示 */}
      <main style={{ maxWidth: '1100px', margin: '40px auto', padding: '0 20px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
        <div style={{ background: '#fff', borderRadius: '12px', overflow: 'hidden' }}>
          <img src="/images/gym.jpg.png" alt="Gym" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
          <div style={{ padding: '20px' }}><h3>Gym Turf</h3></div>
        </div>
        <div style={{ background: '#fff', borderRadius: '12px', overflow: 'hidden' }}>
          <img src="/images/golf.jpg.png" alt="Golf" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
          <div style={{ padding: '20px' }}><h3>Golf Green</h3></div>
        </div>
        <div style={{ background: '#fff', borderRadius: '12px', overflow: 'hidden' }}>
          <img src="/images/pet.jpg.png" alt="Pet" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
          <div style={{ padding: '20px' }}><h3>Pet Landscape</h3></div>
        </div>
      </main>

      {/* 页脚 */}
      <footer style={{ textAlign: 'center', padding: '40px', borderTop: '1px solid #eee', marginTop: '60px' }}>
        <p>Email: {myEmail}</p>
        <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', gap: '20px' }}>
          <a href={socialLinks.facebook} target="_blank">Facebook</a>
          <a href={socialLinks.instagram} target="_blank">Instagram</a>
          <a href={socialLinks.tiktok} target="_blank">TikTok</a>
        </div>
      </footer>
    </div>
  );
}
