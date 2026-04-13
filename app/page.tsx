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
    <div style={{ backgroundColor: '#f0fdf4', minHeight: '100vh', fontFamily: 'sans-serif', margin: 0, padding: 0 }}>
      
      {/* 顶部导航 */}
      <nav style={{ backgroundColor: '#fff', padding: '15px 5%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 2px 5px rgba(0,0,0,0.05)', position: 'sticky', top: 0, zIndex: 1000 }}>
        <div style={{ fontSize: '22px', fontWeight: 'bold', color: '#166534' }}>OUDMAN TURF</div>
        <a href={socialLinks.whatsapp} target="_blank" style={{ background: '#22c55e', color: '#fff', padding: '10px 20px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold' }}>WhatsApp Us</a>
      </nav>

      {/* 🛑 核心更新：这里的背景色换成了高尔夫球场图片 */}
      <header style={{ 
        textAlign: 'center', 
        padding: '120px 20px', 
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(/images/golf_hero.jpg)', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        color: 'white' 
      }}>
        <h1 style={{ fontSize: '38px', margin: 0, fontWeight: '800', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>{companyName}</h1>
        <p style={{ opacity: 0.95, marginTop: '20px', fontSize: '18px', textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}>
          Premier Manufacturer of Professional Artificial Turf for Sports & Landscaping.
        </p>
      </header>

      {/* 产品展示区域 */}
      <main style={{ maxWidth: '1100px', margin: '60px auto', padding: '0 20px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
        
        <div style={{ background: '#fff', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}>
          <img src="/images/gym.jpg.png" alt="Gym Turf" style={{ width: '100%', height: '250px', objectFit: 'cover' }} 
               onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/400x250?text=Gym+Turf"; }} />
          <div style={{ padding: '25px', textAlign: 'center' }}><h3 style={{ color: '#166534' }}>Gym Turf</h3><p>Durable for heavy sled training.</p></div>
        </div>

        <div style={{ background: '#fff', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}>
          <img src="/images/golf.jpg.png" alt="Golf Turf" style={{ width: '100%', height: '250px', objectFit: 'cover' }} 
               onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/400x260?text=Golf+Turf"; }} />
          <div style={{ padding: '25px', textAlign: 'center' }}><h3 style={{ color: '#166534' }}>Professional Golf Green</h3><p>Superior realistic ball roll.</p></div>
        </div>

        <div style={{ background: '#fff', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}>
          <img src="/images/pet.jpg.png" alt="Pet Turf" style={{ width: '100%', height: '250px', objectFit: 'cover' }} 
               onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/400x250?text=Pet+Turf"; }} />
          <div style={{ padding: '25px', textAlign: 'center' }}><h3 style={{ color: '#166534' }}>Pet Friendly Grass</h3><p>Safe, non-toxic & easy to clean.</p></div>
        </div>

      </main>

      {/* 页脚 - 包含彩色社媒图标 */}
      <footer style={{ backgroundColor: '#fff', padding: '60px 20px', textAlign: 'center', borderTop: '1px solid #eee' }}>
        <h3 style={{ color: '#166534', marginBottom: '30px' }}>Follow Our Social Media</h3>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '25px', marginBottom: '30px' }}>
          <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer"><img src="https://cdn-icons-png.flaticon.com/512/124/124010.png" width="35" height="35" alt="FB"/></a>
          <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer"><img src="https://cdn-icons-png.flaticon.com/512/174/174855.png" width="35" height="35" alt="IG"/></a>
          <a href={socialLinks.tiktok} target="_blank" rel="noopener noreferrer"><img src="https://cdn-icons-png.flaticon.com/512/3046/3046121.png" width="35" height="35" alt="TK"/></a>
          <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer"><img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" width="35" height="35" alt="IN"/></a>
        </div>

        <p>Email: {myEmail}</p>
        <p style={{ fontSize: '14px', color: '#999', marginTop: '20px' }}>© 2026 OUDMAN TURF. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
