"use client";
import React from 'react';

export default function Home() {
  const companyName = "Handan Oudoman Sports Technology Co., Ltd.";
  
  // 社交媒体变量
  const myWhatsApp = "8615075550800"; // 在这里修改你的 WhatsApp 账号
  const whatsAppMessage = "Hello Oudoman! I am interested in your artificial turf. Please send me a quote."; // 预设信息
  const email = "sales@oudoman.com"; // 在这里修改你的邮箱
  const myLinkedin = "https://www.linkedin.com/company/oudoman-turf/"; // 在这里粘贴你的 LinkedIn 主页链接

  return (
    <div style={{ backgroundColor: '#f0fdf4', minHeight: '100vh', fontFamily: 'sans-serif', color: '#1e293b' }}>
      
      {/* 顶部导航 */}
      <nav style={{ backgroundColor: '#fff', padding: '15px 5%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#166534' }}>OUDMAN TURF</div>
        
        {/* 这里是社交媒体联系入口 (导航栏版) */}
        <div style={{ display: 'flex', gap: '15px' }}>
          <a href={`https://wa.me/${myWhatsApp}?text=${encodeURIComponent(whatsAppMessage)}`} target="_blank" style={navLinkStyle}>
            <svg style={iconStyle} viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.438 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.363-1.669c1.8.978 3.83 1.492 5.89 1.492h.005c6.554 0 11.89-5.335 11.893-11.892a11.826 11.826 0 00-3.48-8.413Z"></path></svg>
            WhatsApp
          </a>
        </div>
      </nav>

      {/* Hero 标题标题标题 */}
      <header style={{ textAlign: 'center', padding: '80px 20px', background: 'linear-gradient(135deg, #166534 0%, #14532d 100%)', color: 'white' }}>
        <h1 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '15px' }}>{companyName}</h1>
        <p style={{ fontSize: '18px', maxWidth: '700px', margin: '0 auto', opacity: '0.9' }}>Leading Manufacturer of Premium Artificial Turf solutions for global markets.</p>
      </header>

      {/* 产品展示区 */}
      <main style={{ maxWidth: '1200px', margin: '60px auto', padding: '0 20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
          
          <div style={cardStyle}>
            {/* 我们暂时还在猜测图片名字，这三个大概率还是裂开的！裂开也没关系！ */}
            <img src="/gym.jpg" alt="Gym" style={imgStyle} />
            <div style={{ padding: '25px' }}>
              <h3 style={{ fontSize: '22px', marginBottom: '10px' }}>Gym & Fitness Turf</h3>
              <p style={{ color: '#64748b' }}>Heavy-duty turf designed for intense gym sled training.</p>
            </div>
          </div>

          <div style={cardStyle}>
            <img src="/golf.jpg" alt="Golf" style={imgStyle} />
            <div style={{ padding: '25px' }}>
              <h3 style={{ fontSize: '22px', marginBottom: '10px' }}>Professional Golf Green</h3>
              <p style={{ color: '#64748b' }}>Superior putting surface providing realistic ball roll.</p>
            </div>
          </div>

          <div style={cardStyle}>
            <img src="/pet.jpg" alt="Pet" style={imgStyle} />
            <div style={{ padding: '25px' }}>
              <h3 style={{ fontSize: '22px', marginBottom: '10px' }}>Pet Friendly Turf</h3>
              <p style={{ color: '#64748b' }}>Soft, non-toxic fibers. Safe for pets and easy to clean.</p>
            </div>
          </div>

        </div>
      </main>

      {/* 这里是页脚社交媒体入口 */}
      <footer style={{ backgroundColor: '#0f172a', color: '#94a3b8', padding: '60px 20px', textAlign: 'center' }}>
        <h2 style={{ color: 'white', marginBottom: '30px' }}>GET A QUOTE QUICKLY</h2>
        
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginBottom: '40px' }}>
          <a href={`https://wa.me/${myWhatsApp}?text=${encodeURIComponent(whatsAppMessage)}`} style={footerIconButtonStyle}>WhatsApp Us Now</a>
          <a href={`mailto:${email}`} style={footerIconButtonStyle}>Email Sales</a>
        </div>

        <p>© 2026 {companyName}</p>
        <p>Email: {email}</p>
      </footer>
    </div>
  );
}

// 样式定义
const navLinkStyle = {
  backgroundColor: '#22c55e', color: 'white', padding: '8px 16px', borderRadius: '6px', textDecoration: 'none', fontWeight: 'bold', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '6px'
};

const footerIconButtonStyle = {
  backgroundColor: '#22c55e', color: 'white', padding: '12px 24px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold', display: 'inline-block'
};

const iconStyle = {
  width: '16px', height: '16px', fill: 'white'
};

const cardStyle = { backgroundColor: '#fff', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)', border: '1px solid #e2e8f0' };
const imgStyle = { width: '100%', height: '240px', objectFit: 'cover' };
    </div>
  );
}
