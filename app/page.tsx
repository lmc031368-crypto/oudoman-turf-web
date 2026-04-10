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

  // 现代样式定义 (使用 flex 和 grid 布局)
  const colors = { green: '#166534', lightGreen: '#f0fdf4', text: '#333', subText: '#666', white: '#fff' };
  
  const navStyle = { backgroundColor: colors.white, padding: '15px 5%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky' as const, top: 0, zIndex: 1000, boxShadow: '0 2px 10px rgba(0,0,0,0.05)' };
  const heroStyle = { textAlign: 'center' as const, padding: '100px 20px', background: 'linear-gradient(135deg, #166534 0%, #064e3b 100%)', color: colors.white };
  const mainStyle = { maxWidth: '1100px', margin: '60px auto', padding: '0 20px' };
  const gridStyle = { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginTop: '40px' };
  
  const cardStyle = { backgroundColor: colors.white, borderRadius: '15px', overflow: 'hidden', border: '1px solid #eee', transition: 'all 0.3s ease', boxShadow: '0 4px 6px rgba(0,0,0,0.03)' };
  const imgStyle = { width: '100%', height: '240px', objectFit: 'cover' as const, borderBottom: '1px solid #eee' };
  const cardContentStyle = { padding: '25px', textAlign: 'center' as const };
  
  const iconLinkStyle = { display: 'inline-block', transition: 'transform 0.2s', padding: '10px' };

  return (
    <div style={{ backgroundColor:colors.lightGreen, minHeight: '100vh', fontFamily: 'system-ui, -apple-system, sans-serif', color: colors.text, margin: 0, padding: 0 }}>
      
      {/* 现代化导航 */}
      <nav style={navStyle}>
        <div style={{ fontSize: '24px', fontWeight: 'bold', color: colors.green, letterSpacing: '1px' }}>OUDMAN TURF</div>
        <a href={socialLinks.whatsapp} target="_blank" rel="noopener noreferrer" style={{ backgroundColor: '#22c55e', color: colors.white, padding: '10px 20px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold', fontSize: '14px', transition: 'all 0.2s' }}>WhatsApp</a>
      </nav>

      {/* 精致头部 */}
      <header style={heroStyle}>
        <h1 style={{ fontSize: '36px', marginBottom: '15px', fontWeight: '800' }}>{companyName}</h1>
        <p style={{ fontSize: '18px', opacity: 0.9, maxWidth: '700px', margin: '0 auto', lineHeight: '1.6' }}>
          Professional Artificial Turf Manufacturer for Global Sports and Leisure Projects.
        </p>
      </header>

      {/* 产品区域 - 图片路径与 public/images/ 匹配 */}
      <main style={mainStyle}>
        <h2 style={{ fontSize: '28px', color: colors.green, textAlign: 'center', marginBottom: '10px' }}>Our Featured Products</h2>
        <div style={gridStyle}>
          
          <div style={cardStyle}>
            {/* 请确保项目中有此文件: public/images/gym.jpg.png */}
            <img src="/images/gym.jpg.png" alt="Gym" style={imgStyle} />
            <div style={cardContentStyle}>
              <h3 style={{ fontSize: '20px', color: colors.green, marginBottom: '8px' }}>Gym & Fitness Turf</h3>
              <p style={{ fontSize: '15px', color: colors.subText }}>High-density fibers engineered for heavy sled training.</p>
            </div>
          </div>

          <div style={cardStyle}>
            {/* 请确保项目中有此文件: public/images/golf.jpg.png */}
            <img src="/images/golf.jpg.png" alt="Golf" style={imgStyle} />
            <div style={cardContentStyle}>
              <h3 style={{ fontSize: '20px', color: colors.green, marginBottom: '8px' }}>Professional Golf Green</h3>
              <p style={{ fontSize: '15px', color: colors.subText }}>Superior putting surfaces with realistic ball roll.</p>
            </div>
          </div>

          <div style={cardStyle}>
            {/* 请确保项目中有此文件: public/images/pet.jpg.png */}
            <img src="/images/pet.jpg.png" alt="Pet" style={imgStyle} />
            <div style={cardContentStyle}>
              <h3 style={{ fontSize: '20px', color: colors.green, marginBottom: '8px' }}>Pet Friendly Grass</h3>
              <p style={{ fontSize: '15px', color: colors.subText }}>Safe, non-toxic, and easy-to-clean synthetic turf.</p>
            </div>
          </div>

        </div>
      </main>

      {/* 精致页脚 - 彩色图标跳转 */}
      <footer style={{ backgroundColor: colors.white, padding: '60px 20px', textAlign: 'center', borderTop: '1px solid #eee', marginTop: '60px' }}>
        <h3 style={{ fontSize: '22px', color: colors.green, marginBottom: '30px' }}>Follow Us & Stay Connected</h3>
        
        {/* 彩色图片图标跳转区 */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', marginBottom: '40px' }}>
          <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" style={iconLinkStyle} title="Facebook"><img src="https://cdn-icons-png.flaticon.com/512/124/124010.png" width="32" height="32" alt="FB"/></a>
          <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" style={iconLinkStyle} title="Instagram"><img src="https://cdn-icons-png.flaticon.com/512/174/174855.png" width="32" height="32" alt="IG"/></a>
          <a href={socialLinks.tiktok} target="_blank" rel="noopener noreferrer" style={iconLinkStyle} title="TikTok"><img src="https://cdn-icons-png.flaticon.com/512/3046/3046121.png" width="32" height="32" alt="TK"/></a>
          <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" style={iconLinkStyle} title="LinkedIn"><img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" width="32" height="32" alt="IN"/></a>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px' }}>
          <a href={socialLinks.whatsapp} target="_blank" rel="noopener noreferrer" style={{ ...navStyle, position: 'relative' as const, padding: '15px 40px', background: '#22c55e', color: colors.white, borderRadius: '8px', fontSize: '16px', border: 'none', top: 0, boxShadow: 'none' }}> WhatsApp Us: +86 188 3109 7125</a>
          <p style={{ color: colors.subText, fontSize: '16px' }}>Email: {myEmail}</p>
          <p style={{ fontSize: '14px', color: '#999', marginTop: '20px' }}>
            © 2026 OUDMAN TURF. All Rights Reserved.
          </p>
        </div>
      </footer>

    </div>
  );
}
    </div>
  );
}
