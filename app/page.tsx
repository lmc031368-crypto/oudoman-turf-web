"use client";
import React from 'react';

export default function Home() {
  const companyName = "Handan Oudoman Sports Technology Co., Ltd.";
  const myWhatsApp = "8618831097125"; // 已更新号码
  const myEmail = "sales@oudoman.com";

  // 社交媒体链接 - 请在这里替换为你真实的账号链接
  const socialLinks = {
    whatsapp: `https://wa.me/${myWhatsApp}`,
    facebook: "#", // 这里替换你的 Facebook 链接
    instagram: "#", // 这里替换你的 Instagram 链接
    linkedin: "#" // 这里替换你的 LinkedIn 链接
  };

  // 基础样式定义
  const navStyle = { backgroundColor: '#fff', padding: '15px 5%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' };
  const heroStyle = { textAlign: 'center' as const, padding: '100px 20px', background: 'linear-gradient(135deg, #166534 0%, #064e3b 100%)', color: 'white' };
  const cardStyle = { backgroundColor: '#fff', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)', border: '1px solid #e2e8f0' };
  const imgStyle = { width: '100%', height: '260px', objectFit: 'cover' as const };
  const btnStyle = { backgroundColor: '#22c55e', color: 'white', padding: '12px 24px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold', fontSize: '14px', display: 'inline-flex', alignItems: 'center', gap: '8px' };
  const iconLinkStyle = { display: 'flex', alignItems: 'center', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' as const };

  // SVG 图标代码
  const icons = {
    whatsapp: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.438 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.363-1.669c1.8.978 3.83 1.492 5.89 1.492h.005c6.554 0 11.89-5.335 11.893-11.892a11.826 11.826 0 00-3.48-8.413Z"></path></svg>
    ),
    facebook: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="#6b7280"><path d="M12 2.04C6.5 2.04 2.04 6.5 2.04 12c0 4.97 3.64 9.09 8.41 9.84v-6.96h-2.53V12h2.53V9.66c0-2.51 1.49-3.89 3.77-3.89 1.09 0 2.23.19 2.23.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.88h-2.34v6.96C18.36 21.09 22 16.97 22 12c0-5.5-4.5-9.96-10-9.96z"></path></svg>
    ),
    instagram: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="#6b7280"><path d="M7.8 2h8.4c3.2 0 5.8 2.6 5.8 5.8v8.4c0 3.2-2.6 5.8-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 017.8 2m-.2 2A3.6 3.6 0 004 7.6v8.8c0 2 1.6 3.6 3.6 3.6h8.8c2 0 3.6-1.6 3.6-3.6V7.6A3.6 3.6 0 0016.4 4H7.6M12 7a5 5 0 015 5 5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5m0 2a3 3 0 00-3 3 3 3 0 003 3 3 3 0 003-3 3 3 0 00-3-3m5.1-.9a1.1 1.1 0 11-1.1 1.1 1.1 1.1 0 011.1-1.1z"></path></svg>
    ),
    linkedin: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="#6b7280"><path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"></path></svg>
    )
  };

  return (
    <div style={{ backgroundColor: '#f0fdf4', minHeight: '100vh', fontFamily: 'sans-serif', color: '#1e293b' }}>
      
      {/* 顶部导航 */}
      <nav style={navStyle}>
        <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#15803d' }}>OUDMAN TURF</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <a href={socialLinks.whatsapp} target="_blank" rel="noopener noreferrer" style={btnStyle}>
            {icons.whatsapp} WhatsApp
          </a>
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

      {/* 页脚图标 */}
      <footer style={{ backgroundColor: '#fff', color: '#1e293b', padding: '60px 20px', textAlign: 'center', borderTop: '1px solid #e2e8f0' }}>
        <h2 style={{ fontSize: '24px', marginBottom: '30px', color: '#166534' }}>Follow & Contact Us</h2>
        
        <div style={{...iconLinkStyle, marginBottom: '40px'}}>
          <a href={socialLinks.facebook} target="_blank" title="Facebook">{icons.facebook}</a>
          <a href={socialLinks.instagram} target="_blank" title="Instagram">{icons.instagram}</a>
          <a href={socialLinks.linkedin} target="_blank" title="LinkedIn">{icons.linkedin}</a>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px' }}>
          <a href={socialLinks.whatsapp} target="_blank" style={{ ...btnStyle, padding: '15px 40px', fontSize: '18px' }}>
            {icons.whatsapp} WhatsApp Us: +86 188 3109 7125
          </a>
          <p style={{ color: '#64748b', marginTop: '20px' }}>Email: {myEmail}</p>
          <p style={{ fontSize: '14px', color: '#94a3b8', borderTop: '1px solid #e2e8f0', paddingTop: '20px', width: '100%', marginTop: '20px' }}>
            © 2026 {companyName}. All Rights Reserved.
          </p>
        </div>
      </footer>

    </div>
  );
}
