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
    <div style={{ backgroundColor: '#f0fdf4', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      
      {/* 导航组件 (Navbar) */}
      <nav style={{ backgroundColor: '#fff', padding: '15px 5%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 2px 5px rgba(0,0,0,0.05)', position: 'sticky', top: 0, zIndex: 1000 }}>
        <div style={{ fontSize: '22px', fontWeight: 'bold', color: '#166534' }}>OUDMAN TURF</div>
        <a href={socialLinks.whatsapp} target="_blank" rel="noopener noreferrer" style={{ background: '#22c55e', color: '#fff', padding: '10px 20px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold' }}>WhatsApp</a>
      </nav>

      {/* 首屏大图组件 (Hero Section) - 使用 1.1.jpg */}
      <header style={{ 
        textAlign: 'center', 
        padding: '140px 20px', 
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5)), url(/images/1.1.jpg)', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        color: 'white' 
      }}>
        <h1 style={{ fontSize: '38px', margin: '0 auto', fontWeight: '800', maxWidth: '900px', textShadow: '2px 2px 10px rgba(0,0,0,0.7)' }}>{companyName}</h1>
        <p style={{ opacity: 0.95, marginTop: '20px', fontSize: '20px', textShadow: '1px 1px 5px rgba(0,0,0,0.7)' }}>
          Premier Manufacturer of Professional Artificial Turf for Sports & Landscape.
        </p>
      </header>

      {/* 产品展示网格组件 (Product Grid) */}
      <main style={{ maxWidth: '1100px', margin: '60px auto', padding: '0 20px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
        
        <div style={{ background: '#fff', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
          <img src="/images/gym.jpg.png" alt="Gym" style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
          <div style={{ padding: '25px', textAlign: 'center' }}><h3 style={{ color: '#166534' }}>Gym & Fitness</h3><p>Professional grade durability.</p></div>
        </div>

        <div style={{ background: '#fff', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
          <img src="/images/golf.jpg.png" alt="Golf" style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
          <div style={{ padding: '25px', textAlign: 'center' }}><h3 style={{ color: '#166534' }}>Professional Golf</h3><p>Superior putting experience.</p></div>
        </div>

        <div style={{ background: '#fff', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
          <img src="/images/pet.jpg.png" alt="Pet" style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
          <div style={{ padding: '25px', textAlign: 'center' }}><h3 style={{ color: '#166534' }}>Pet Friendly</h3><p>Safe and easy to maintain.</p></div>
        </div>

      </main>

      {/* 🛑 核心更新：PDF 下载组件 (Division 区域) */}
      <div style={{ textAlign: 'center', padding: '60px 20px', backgroundColor: '#fff', margin: '40px 0' }}>
        <h2 style={{ color: '#166534', marginBottom: '20px' }}>Technical Parameters</h2>
        <p style={{ color: '#666', marginBottom: '30px', maxWidth: '700px', margin: '0 auto 30px auto' }}>
          Check our detailed specifications including Pile Height, Dtex, and Density for professional turf solutions.
        </p>
        <a 
          href="/PRODUCTS DETAILS.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ 
            backgroundColor: '#166534', 
            color: '#fff', 
            padding: '15px 35px', 
            borderRadius: '30px', 
            textDecoration: 'none', 
            fontWeight: 'bold',
            display: 'inline-block',
            boxShadow: '0 4px 15px rgba(22, 101, 52, 0.2)'
          }}
        >
          View Full Product Details (PDF)
        </a>
      </div>

      {/* 页脚组件 (Footer) */}
      <footer style={{ backgroundColor: '#fff', padding: '60px 20px', textAlign: 'center', borderTop: '1px solid #eee' }}>
        <h3 style={{ color: '#166534', marginBottom: '30px' }}>Follow Us</h3>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '25px', marginBottom: '30px' }}>
          <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer"><img src="https://cdn-icons-png.flaticon.com/512/124/124010.png" width="30" height="30" alt="FB"/></a>
          <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer"><img src="https://cdn-icons-png.flaticon.com/512/174/174855.png" width="30" height="30" alt="IG"/></a>
          <a href={socialLinks.tiktok} target="_blank" rel="noopener noreferrer"><img src="https://cdn-icons-png.flaticon.com/512/3046/3046121.png" width="30" height="30" alt="TK"/></a>
        </div>
        <p>Email: {myEmail}</p>
        <p style={{ fontSize: '14px', color: '#999', marginTop: '20px' }}>© 2026 OUDMAN TURF. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
