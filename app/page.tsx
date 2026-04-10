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
  const colors = { green: '#166534', lightGreen: '#f0fdf4', text: '#333', subText: '#666', white: '#fff' };
  
  // 🛑 核心更新：大背景改为浅绿色 (#f0fdf4)
  const navStyle = { backgroundColor: colors.white, padding: '15px 5%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky' as const, top: 0, zIndex: 1000, boxShadow: '0 2px 10px rgba(0,0,0,0.05)' };
  const heroStyle = { textAlign: 'center' as const, padding: '100px 20px', background: 'linear-gradient(135deg, #166534 0%, #064e3b 100%)', color: colors.white };
  const cardStyle = { backgroundColor: colors.white, borderRadius: '15px', overflow: 'hidden', border: '1px solid #eee', transition: 'all 0.3s ease', boxShadow: '0 4px 6px rgba(0,0,0,0.03)' };

  return (
    // 🛑 核心更新：这里的 backgroundColor 决定了大背景
    <div style={{ backgroundColor: colors.lightGreen, minHeight: '100vh', fontFamily: 'system-ui, -apple-system, sans-serif', color: colors.text, margin: 0, padding: 0 }}>
      
      {/* 导航 */}
      <nav style={navStyle}>
        <div style={{ fontSize: '24px', fontWeight: 'bold', color: colors.green, letterSpacing: '1px' }}>OUDMAN TURF</div>
        <a href={socialLinks.whatsapp} target="_blank" rel="noopener noreferrer" style={{ backgroundColor: '#22c55e', color: colors.white, padding: '10px 20px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold' }}>WhatsApp</a>
      </nav>

      {/* 头部 */}
      <header style={heroStyle}>
        <h1 style={{ fontSize: '36px', marginBottom: '15px', fontWeight: '800' }}>{companyName}</h1>
        <p style={{ fontSize: '18px', opacity: 0.9, maxWidth: '700px', margin: '0 auto' }}>Professional Artificial Turf Manufacturer for Global Sports Projects.</p>
      </header>

      {/* 内容区域 (图片路径已稳定) */}
      <main style={{ maxWidth: '1100px', margin: '60px auto', padding: '0 20px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
        
        {/* 卡片 (已增加浅灰色边框) */}
        <div style={cardStyle}>
          {/* 请确保项目中有此文件: public/images/gym.jpg.png */}
          <img src="/images/gym.jpg.png" alt="Gym" style={{ width: '100%' }} />
          <div style={{ padding: '25px', textAlign: 'center' }}><h3>Gym Turf</h3></div>
        </div>

        <div style={cardStyle}>
          {/* 请确保项目中有此文件: public/images/golf.jpg.png */}
          <img src="/images/golf.jpg.png" alt="Golf" style={{ width: '100%' }} />
          <div style={{ padding: '25px', textAlign: 'center' }}><h3>Golf Turf</h3></div>
        </div>

        <div style={cardStyle}>
          {/* 请确保项目中有此文件: public/images/pet.jpg.png */}
          <img src="/images/pet.jpg.png" alt="Pet" style={{ width: '100%' }} />
          <div style={{ padding: '25px', textAlign: 'center' }}><h3>Pet Friendly Grass</h3></div>
        </div>

      </main>

      {/* 页脚 - 包含彩色图标跳转 */}
      <footer style={{ backgroundColor: colors.white, padding: '60px 20px', textAlign: 'center', borderTop: '1px solid #eee', marginTop: '60px' }}>
        <h3 style={{ fontSize: '22px', color: colors.green, marginBottom: '30px' }}>Follow Our Social Media</h3>
        
        {/* 彩色图标跳转区 */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', marginBottom: '40px' }}>
          <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer"><img src="https://cdn-icons-png.flaticon.com/512/124/124010.png" width="32" height="32" alt="FB"/></a>
          <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer"><img src="https://cdn-icons-png.flaticon.com/512/174/174855.png" width="32" height="32" alt="IG"/></a>
          <a href={socialLinks.tiktok} target="_blank" rel="noopener noreferrer"><img src="https://cdn-icons-png.flaticon.com/512/3046/3046121.png" width="32" height="32" alt="TK"/></a>
          <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer"><img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" width="32" height="32" alt="IN"/></a>
        </div>

        <p>Email: {myEmail}</p>
        <p style={{ fontSize: '14px', color: '#999', marginTop: '20px' }}>
          © 2026 OUDMAN TURF. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}
