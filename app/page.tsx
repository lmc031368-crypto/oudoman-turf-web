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
    linkedin: "#" 
  };

  // 样式定义
  const heroStyle = { textAlign: 'center' as const, padding: '80px 20px', background: 'linear-gradient(135deg, #166534 0%, #064e3b 100%)', color: 'white' };
  const cardStyle = { backgroundColor: '#fff', borderRadius: '15px', overflow: 'hidden', border: '1px solid #eee', textAlign: 'center' as const };
  const iconLink = { textDecoration: 'none', transition: 'transform 0.2s', display: 'inline-block' };

  return (
    <div style={{ backgroundColor: '#f9fafb', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      <nav style={{ backgroundColor: '#fff', padding: '15px 5%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #eee' }}>
        <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#15803d' }}>OUDMAN</div>
        <a href={socialLinks.whatsapp} target="_blank" style={{ background: '#22c55e', color: '#fff', padding: '8px 16px', borderRadius: '5px', textDecoration: 'none', fontSize: '14px' }}>WhatsApp</a>
      </nav>

      <header style={heroStyle}>
        <h1 style={{ fontSize: '32px' }}>{companyName}</h1>
        <p style={{ opacity: 0.9 }}>Professional Artificial Turf Manufacturer</p>
      </header>

      <main style={{ maxWidth: '1000px', margin: '40px auto', padding: '20px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
        <div style={cardStyle}><img src="/images/gym.jpg.png" style={{ width: '100%' }} /><h3>Gym Turf</h3></div>
        <div style={cardStyle}><img src="/images/golf.jpg.png" style={{ width: '100%' }} /><h3>Golf Turf</h3></div>
        <div style={cardStyle}><img src="/images/pet.jpg.png" style={{ width: '100%' }} /><h3>Pet Turf</h3></div>
      </main>

      <footer style={{ backgroundColor: '#fff', padding: '50px 20px', textAlign: 'center', borderTop: '1px solid #eee' }}>
        <h3 style={{ color: '#166534', marginBottom: '20px' }}>Follow Us</h3>
        
        {/* 彩色图标区 */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '25px', marginBottom: '30px' }}>
          <a href={socialLinks.facebook} target="_blank" style={iconLink}><img src="https://cdn-icons-png.flaticon.com/512/124/124010.png" width="30"/></a>
          <a href={socialLinks.instagram} target="_blank" style={iconLink}><img src="https://cdn-icons-png.flaticon.com/512/174/174855.png" width="30"/></a>
          <a href={socialLinks.tiktok} target="_blank" style={iconLink}><img src="https://cdn-icons-png.flaticon.com/512/3046/3046121.png" width="30"/></a>
          <a href={socialLinks.linkedin} target="_blank" style={iconLink}><img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" width="30"/></a>
        </div>

        <p>Email: {myEmail}</p>
        <p style={{ fontSize: '12px', color: '#999', marginTop: '20px' }}>© 2026 OUDMAN TURF</p>
      </footer>
    </div>
  );
}
