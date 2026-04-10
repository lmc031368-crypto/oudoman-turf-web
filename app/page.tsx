"use client";

import React from 'react';

// 手动定义图标组件，彻底避免库导入报错
const Icons = {
  Facebook: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
  ),
  Instagram: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
  ),
  WhatsApp: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-11.7 8.38 8.38 0 0 1 3.8.9L21 3z"/></svg>
  ),
  FileText: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/></svg>
  )
};

export default function Home() {
  const companyName = "Handan oudoman Sports Technology CO.,Ltd";
  const myNumber = "8615075550800"; 
  const waMessage = encodeURIComponent(`Hello, I'm interested in products from ${companyName}.`);

  const featuredProducts = [
    { name: "Gym Turf", img: "/gym.jpg", desc: "High-density fibers for heavy sled training." },
    { name: "Golf Green", img: "/golf.jpg", desc: "Professional putting surface with realistic roll." },
    { name: "Pet Grass", img: "/pet.jpg", desc: "Anti-bacterial turf perfect for pets." }
  ];

  // 修复了 items 语法逻辑
  const categories = [
    { title: "Sports Turf", items: ["Football Grass", "Tennis Court", "Padel Court"] },
    { title: "Landscaping", items: ["Garden Lawn", "Roof Garden", "Balcony Decor"] },
    { title: "Accessories", items: ["Installation Glue", "Joint Tape", "Shock Pad"] }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* 侧边悬浮社交栏 */}
      <div className="fixed right-6 bottom-10 flex flex-col gap-4 z-50">
        <a href="https://facebook.com" target="_blank" className="w-12 h-12 bg-[#1877F2] text-white rounded-full flex items-center justify-center shadow-2xl hover:-translate-x-2 transition-all">
          <Icons.Facebook />
        </a>
        <a href="https://instagram.com" target="_blank" className="w-12 h-12 bg-[#E4405F] text-white rounded-full flex items-center justify-center shadow-2xl hover:-translate-x-2 transition-all">
          <Icons.Instagram />
        </a>
        <a href={`https://wa.me/${myNumber}`} target="_blank" className="w-12 h-12 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:-translate-x-2 transition-all">
          <Icons.WhatsApp />
        </a>
      </div>

      <nav className="flex justify-between items-center px-6 md:px-12 py-5 border-b sticky top-0 bg-white/90 backdrop-blur-sm z-50">
        <h1 className="text-xl font-black text-green-700 uppercase">{companyName}</h1>
        <a href={`https://wa.me/${myNumber}`} target="_blank" className="bg-green-500 text-white px-5 py-2 rounded-full font-bold hover:bg-green-600 transition shadow-lg text-sm">
          WhatsApp Us
        </a>
      </nav>

      <header className="py-24 px-6 text-center bg-gray-50">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
          Professional <span className="text-green-600">Artificial Turf</span>
        </h2>
        <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">High-performance synthetic grass solutions for worldwide projects.</p>
        <a href={`https://wa.me/${myNumber}`} className="bg-black text-white px-12 py-4 rounded-full font-bold text-lg hover:opacity-80 transition shadow-xl">
          Get Free Samples
        </a>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-24">
          {featuredProducts.map((p, i) => (
            <div key={i} className="group border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition">
              <div className="h-64 bg-gray-200">
                <img 
                  src={p.img} 
                  alt={p.name} 
                  className="w-full h-full object-cover"
                  onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/600x400?text=Turf"; }} 
                />
              </div>
              <div className="p-8">
                <h4 className="font-bold text-2xl mb-3">{p.name}</h4>
                <p className="text-gray-500 text-sm mb-8">{p.desc}</p>
                <a href={`https://wa.me/${myNumber}`} className="flex items-center justify-center gap-2 w-full py-3 border-2 border-black rounded-xl font-bold hover:bg-black hover:text-white transition">
                  <Icons.WhatsApp /> Inquire Now
                </a>
              </div>
            </div>
          ))}
        </div>

        <section className="bg-gray-50 rounded-[2.5rem] p-8 md:p-16 border border-gray-100">
          <h3 className="text-2xl font-bold mb-12 border-l-4 border-green-500 pl-4">Full Product Category</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {categories.map((cat, i) => (
              <div key={i}>
                <h4 className="font-extrabold text-lg text-green-700 mb-6 uppercase tracking-widest">{cat.title}</h4>
                <ul className="space-y-4">
                  {cat.items.map((item, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <span className="mr-3 text-green-500 font-bold">✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center p-10 border-2 border-dashed border-gray-300 rounded-3xl bg-white shadow-inner">
            <p className="text-gray-500 italic mb-6">Need a complete price list?</p>
            <div className="flex flex-col md:flex-row justify-center gap-5">
              <a href="/catalog.pdf" target="_blank" className="bg-green-600 text-white px-10 py-4 rounded-xl font-bold hover:bg-green-700 transition flex items-center justify-center gap-2">
                <Icons.FileText /> View PDF Catalog
              </a>
              <a href={`https://wa.me/${myNumber}?text=${waMessage}`} className="bg-green-50 text-green-700 px-10 py-4 rounded-xl font-bold hover:bg-green-100 transition flex items-center justify-center gap-2">
                <Icons.WhatsApp /> Contact WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-20 bg-gray-900 text-white text-center">
        <p className="font-black mb-8 uppercase text-green-500">{companyName}</p>
        <p className="text-xs text-gray-500 tracking-widest">© 2026 {companyName}. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
