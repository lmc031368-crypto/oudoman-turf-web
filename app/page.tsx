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

  return (
    <div style={{ backgroundColor: '#f9fafb', minHeight: '100vh', fontFamily: 'sans-serif', color: '#333' }}>
      {/* 导航 */}
      <nav style={{ backgroundColor: '#fff', padding: '15px 5%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #eee' }}>
        <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#15803d' }}>OUDMAN</div>
        <a href={socialLinks.whatsapp} target="_blank" style={{ background: '#22c55e', color: '#fff', padding: '8px 16px', borderRadius: '5px', textDecoration: 'none' }}>WhatsApp</a>
      </nav>

      {/* 头部 */}
      <header style={{ textAlign: 'center', padding: '60px 20px', background: '#064e3b', color: 'white' }}>
        <h1 style={{ fontSize: '28px', margin: 0 }}>{companyName}</h1>
        <p style={{ opacity: 0.8, marginTop: '10px' }}>Professional Artificial Turf Manufacturer</p>
      </header>

      {/* 内容 */}
      <main style={{ maxWidth: '1000px', margin: '40px auto', padding: '0 20px', textAlign: 'center' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
          <div style={{ background: '#fff', borderRadius: '10px', padding: '20px', border: '1px solid #eee' }}><h3>Gym Turf</h3></div>
          <div style={{ background: '#fff', borderRadius: '10px', padding: '20px', border: '1px solid #eee' }}><h3>Golf Turf</h3></div>
          <div style={{ background: '#fff', borderRadius: '10px', padding: '20px', border: '1px solid #eee' }}><h3>Pet Turf</h3></div>
        </div>
      </main>

      {/* 页脚 - 包含彩色图标 */}
      <footer style={{ backgroundColor: '#fff', padding: '40px 20px', textAlign: 'center', borderTop: '1px solid #eee', marginTop: '60px' }}>
        <h3 style={{ color: '#166534' }}>Follow Our Social Media</h3>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', margin: '20px 0' }}>
          {/* 直接使用彩色图标链接 */}
          <a href={socialLinks.facebook} target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/124/124010.png" width="30" height="30" alt="FB"/></a>
          <a href={socialLinks.instagram} target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/174/174855.png" width="30" height="30" alt="IG"/></a>
          <a href={socialLinks.tiktok} target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/3046/3046121.png" width="30" height="30" alt="TK"/></a>
          <a href={socialLinks.linkedin} target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" width="30" height="30" alt="IN"/></a>
        </div>

        <p style={{ margin: '10px 0' }}>Email: {myEmail}</p>
        <p style={{ fontSize: '12px', color: '#999' }}>© 2026 OUDMAN TURF. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
