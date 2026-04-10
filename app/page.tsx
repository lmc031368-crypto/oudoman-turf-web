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

  // Color Palette
  const colors = {
    primaryGreen: '#166534',
    lightBg: '#f0fdf4', // Your requested Light Green background
    white: '#ffffff',
    textMain: '#1a202c',
    textSub: '#4a5568'
  };

  return (
    <div style={{ backgroundColor: colors.lightBg, minHeight: '100vh', fontFamily: 'sans-serif', margin: 0, padding: 0 }}>
      
      {/* Navigation Bar */}
      <nav style={{ backgroundColor: colors.white, padding: '15px 5%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 2px 4px rgba(0,0,0,0.05)', position: 'sticky', top: 0, zIndex: 100 }}>
        <div style={{ fontSize: '22px', fontWeight: 'bold', color: colors.primaryGreen }}>OUDMAN TURF</div>
        <a href={socialLinks.whatsapp} target="_blank" rel="noopener noreferrer" style={{ backgroundColor: '#22c55e', color: colors.white, padding: '10px 20px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold', fontSize: '14px' }}>WhatsApp</a>
      </nav>

      {/* Hero Section */}
      <header style={{ textAlign: 'center', padding: '100px 20px', background: 'linear-gradient(135deg, #166534 0%, #064e3b 100%)', color: colors.white }}>
        <h1 style={{ fontSize: '36px', marginBottom: '20px', fontWeight: '800' }}>{companyName}</h1>
        <p style={{ fontSize: '20px', opacity: 0.9, maxWidth: '800px', margin: '0 auto' }}>Leading Manufacturer of Premium Artificial Turf for Sports and Landscape.</p>
      </header>

      {/* Products Grid */}
      <main style={{ maxWidth: '1200px', margin: '60px auto', padding: '0 20px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px' }}>
        
        {/* Card 1 */}
        <div style={{ backgroundColor: colors.white, borderRadius: '20px', overflow: 'hidden', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}>
          <img src="/images/gym.jpg.png" alt="Gym" style={{ width: '100%', height: '260px', objectFit: 'cover' }} 
               onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/400x260?text=Gym+Turf"; }} />
          <div style={{ padding: '30px', textAlign: 'center' }}>
            <h3 style={{ color: colors.primaryGreen }}>Gym & Fitness Turf</h3>
            <p style={{ color: colors.textSub }}>Durable and high-density fibers for professional training.</p>
          </div>
        </div>

        {/* Card 2 */}
        <div style={{ backgroundColor: colors.white, borderRadius: '20px', overflow: 'hidden', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}>
          <img src="/images/golf.jpg.png" alt="Golf" style={{ width: '100%', height: '260px', objectFit: 'cover' }}
               onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/400x260?text=Golf+Turf"; }} />
          <div style={{ padding: '30px', textAlign: 'center' }}>
            <h3 style={{ color: colors.primaryGreen }}>Professional Golf Green</h3>
            <p style={{ color: colors.textSub }}>Realistic putting surfaces for commercial and home use.</p>
          </div>
        </div>

        {/* Card 3 */}
        <div style={{ backgroundColor: colors.white, borderRadius: '20px', overflow: 'hidden', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}>
          <img src="/images/pet.jpg.png" alt="Pet" style={{ width: '100%', height: '260px', objectFit: 'cover' }}
               onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/400x260?text=Pet+Turf"; }} />
          <div style={{ padding: '30px', textAlign: 'center' }}>
            <h3 style={{ color: colors.primaryGreen }}>Pet Friendly Grass</h3>
            <p style={{ color: colors.textSub }}>Safe, non-toxic, and easy to clean for your furry friends.</p>
          </div>
        </div>

      </main>

      {/* Footer Section */}
      <footer style={{ backgroundColor: colors.white, padding: '80px 20px', textAlign: 'center', borderTop: '1px solid #e2e8f0' }}>
        <h2 style={{ fontSize: '26px', marginBottom: '30px', color: colors.primaryGreen }}>Follow Our Social Media</h2>
        
        {/* Social Icons with Links */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', marginBottom: '40px' }}>
          <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer"><img src="https://cdn-icons-png.flaticon.com/512/124/124010.png" width="35" height="35" alt="Facebook"/></a>
          <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer"><img src="https://cdn-icons-png.flaticon.com/512/174/174855.png" width="35" height="35" alt="Instagram"/></a>
          <a href={socialLinks.tiktok} target="_blank" rel="noopener noreferrer"><img src="https://cdn-icons-png.flaticon.com/512/3046/3046121.png" width="35" height="35" alt="TikTok"/></a>
          <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer"><img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" width="35" height="35" alt="LinkedIn"/></a>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px' }}>
          <a href={socialLinks.whatsapp} target="_blank" rel="noopener noreferrer" style={{ backgroundColor: '#22c55e', color: colors.white, padding: '15px 40px', borderRadius: '12px', fontSize: '18px', fontWeight: 'bold', textDecoration: 'none' }}>WhatsApp Us: +86 188 3109 7125</a>
          <p style={{ color: colors.textSub }}>Email: {myEmail}</p>
          <p style={{ fontSize: '14px', color: '#a0aec0', marginTop: '30px' }}>© 2026 OUDMAN TURF. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
  );
}
