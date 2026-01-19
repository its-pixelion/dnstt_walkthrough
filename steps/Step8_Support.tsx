
import React, { useState } from 'react';
import { Language } from '../types';

// Updated export name to Step9 to match step ID 9
export const Step9: React.FC<{ lang: Language }> = ({ lang }) => {
  const isRtl = lang === 'fa';
  const shareUrl = window.location.href;
  const shareText = isRtl 
    ? "آموزش گام‌به‌گام و تعاملی نصب DNSTT - کاری از pixeLion" 
    : "Interactive DNSTT Installation Walkthrough - by pixeLion";
  
  const [copied, setCopied] = useState(false);

  const handleShare = (platform: 'x' | 'telegram' | 'whatsapp') => {
    let url = '';
    switch (platform) {
      case 'x':
        url = `https://x.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
        break;
      case 'telegram':
        url = `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`;
        break;
      case 'whatsapp':
        url = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`;
        break;
    }
    window.open(url, '_blank');
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
      {/* DNS Resolvers Info Section */}
      <section className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow">
        <div className={`flex items-center gap-3 mb-4 ${isRtl ? 'flex-row-reverse' : 'flex-row'}`}>
          <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center shrink-0 shadow-inner">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>
          </div>
          <h3 className="text-xl font-bold text-slate-900">{isRtl ? 'آدرس‌های DNS Resolver' : 'DNS Resolver Addresses'}</h3>
        </div>
        <div className={`space-y-4 text-slate-600 text-sm leading-relaxed ${isRtl ? 'text-right' : 'text-left'}`}>
          <p>
            {isRtl 
              ? "آدرس‌های موجود در این لیست ممکن است روی اپراتور یا سرویس‌دهنده اینترنت شما کار نکنند:" 
              : "The addresses in this list might not work on your specific operator or internet provider:"}
          </p>
          <a href="https://dnstt.network/ir_dns_servers.txt" target="_blank" className="block p-3 bg-slate-50 rounded-xl border border-slate-100 font-mono text-blue-600 hover:text-blue-800 break-all">
            dnstt.network/ir_dns_servers.txt
          </a>
          <p>
            {isRtl 
              ? "شما باید آن‌ها را یکی یکی تست کنید تا ببینید کدام‌یک برای شما متصل می‌شود." 
              : "You need to try them one by one to find which one successfully establishes a connection for you."}
          </p>
          
          <div className="pt-4 border-t border-slate-100">
            <p className="text-xs text-slate-400 italic">
              {isRtl 
                ? "نکته فنی: اسکریپت‌هایی برای خودکارسازی پیدا کردن IP سالم وجود دارند، اما استفاده از آن‌ها نیاز به دانش فنی بالاتری دارد (مانند AzadiDNSTester):" 
                : "Technical note: There are scripts to automate finding working IPs, but they are quite technical to use (e.g., AzadiDNSTester):"}
            </p>
            <a href="https://github.com/AzadiAzadiAzadi/AzadiDNSTester" target="_blank" className="text-xs text-blue-500 hover:underline mt-1 inline-block">
              github.com/AzadiAzadiAzadi/AzadiDNSTester
            </a>
          </div>
        </div>
      </section>

      {/* Common Issues Section */}
      <section className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow">
        <div className={`flex items-center gap-3 mb-4 ${isRtl ? 'flex-row-reverse' : 'flex-row'}`}>
          <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center shrink-0 shadow-inner">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
          </div>
          <h3 className="text-xl font-bold text-slate-900">{isRtl ? 'رفع مشکلات متداول' : 'Troubleshooting'}</h3>
        </div>
        <p className="text-slate-600 text-sm mb-6 leading-relaxed">
          {isRtl 
            ? 'اگر در هر مرحله‌ای به مشکل برخوردید، مستندات رسمی شامل لیستی از خطاهای رایج و راه‌حل‌های آن‌ها است.' 
            : 'If you encounter any issues during the setup, the official documentation includes a comprehensive list of common errors and their fixes.'}
        </p>
        <a 
          href="https://github.com/bugfloyd/dnstt-deploy?tab=readme-ov-file#common-issues" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-all shadow-lg shadow-slate-200 text-sm active:scale-95"
        >
          {isRtl ? 'مشاهده راه‌حل‌ها در گیت‌هاب' : 'View Common Issues on GitHub'}
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
        </a>
      </section>

      {/* Credits Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-3xl p-6 shadow-sm">
        <div className={`flex items-center gap-3 mb-6 ${isRtl ? 'flex-row-reverse' : 'flex-row'}`}>
          <div className="w-12 h-12 bg-white text-slate-900 rounded-2xl flex items-center justify-center shrink-0 shadow-sm">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.045 4.126H5.078z"/>
            </svg>
          </div>
          <h3 className="text-xl font-bold text-slate-900">{isRtl ? 'قدردانی و سازندگان' : 'Credits & Authors'}</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className={`bg-white/60 backdrop-blur-sm p-4 rounded-2xl border border-white/50 ${isRtl ? 'text-right' : 'text-left'}`}>
            <p className="text-slate-800 text-sm font-bold mb-2">{isRtl ? 'توسعه اسکریپت:' : 'Script Developer:'}</p>
            <p className="text-slate-600 text-xs leading-relaxed mb-3">
              {isRtl 
                ? 'تشکر ویژه از @bugfloyd برای خلق این اسکریپت نصب فوق‌العاده و کاربردی.' 
                : 'Special thanks to @bugfloyd for creating this incredible and efficient deployment script.'}
            </p>
            <a href="https://x.com/bugfloyd" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-black text-white rounded-lg text-[10px] font-bold hover:bg-slate-800 transition-colors">
              @bugfloyd on X
            </a>
          </div>

          <div className={`bg-white/60 backdrop-blur-sm p-4 rounded-2xl border border-white/50 ${isRtl ? 'text-right' : 'text-left'}`}>
            <p className="text-slate-800 text-sm font-bold mb-2">{isRtl ? 'طراحی راهنما:' : 'Tutorial Creator:'}</p>
            <p className="text-slate-600 text-xs leading-relaxed mb-3">
              {isRtl 
                ? 'این راهنمای تعاملی توسط pixeLion طراحی شده است. به راحتی آن را به اشتراک بگذارید.' 
                : 'This interactive tutorial was created by pixeLion (@its_pixel_lion). Feel free to share it.'}
            </p>
            <a href="https://x.com/its_pixel_lion" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-black text-white rounded-lg text-[10px] font-bold hover:bg-slate-800 transition-colors">
              @its_pixel_lion on X
            </a>
          </div>
        </div>
      </section>

      {/* Share Section */}
      <section className="bg-slate-900 rounded-3xl p-8 text-center text-white relative overflow-hidden shadow-xl">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-emerald-500 to-indigo-500"></div>
        <h3 className="text-lg font-bold mb-2">{isRtl ? 'این راهنما را با دیگران به اشتراک بگذارید' : 'Spread the Word'}</h3>
        <p className="text-slate-400 text-xs mb-6 max-w-sm mx-auto">
          {isRtl ? 'با اشتراک‌گذاری این لینک، به دوستان خود در دور زدن محدودیت‌های اینترنت کمک کنید.' : 'Help others bypass internet restrictions by sharing this interactive walkthrough.'}
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
          <button 
            onClick={() => handleShare('x')}
            className="w-12 h-12 bg-white text-black rounded-2xl flex items-center justify-center hover:scale-110 transition-transform shadow-lg active:scale-95"
            title="Share on X"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.045 4.126H5.078z"/>
            </svg>
          </button>
          <button 
            onClick={() => handleShare('telegram')}
            className="w-12 h-12 bg-[#0088cc] text-white rounded-2xl flex items-center justify-center hover:scale-110 transition-transform shadow-lg active:scale-95"
            title="Share on Telegram"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .33z"/>
            </svg>
          </button>
          <button 
            onClick={() => handleShare('whatsapp')}
            className="w-12 h-12 bg-[#25D366] text-white rounded-2xl flex items-center justify-center hover:scale-110 transition-transform shadow-lg active:scale-95"
            title="Share on WhatsApp"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
          </button>
        </div>

        <button 
          onClick={copyToClipboard}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border flex items-center gap-2 mx-auto ${copied ? 'bg-emerald-500 border-emerald-400 text-white' : 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700'}`}
        >
          {copied ? (isRtl ? 'لینک کپی شد!' : 'Link Copied!') : (isRtl ? 'کپی لینک راهنما' : 'Copy Guide Link')}
          {!copied && <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg>}
        </button>
      </section>

      {/* Free Iran Tribute */}
      <div className="pt-12 pb-6 flex flex-col items-center justify-center gap-6 border-t border-slate-100">
        <div className="flex flex-col items-center gap-4">
            <div className="text-4xl font-black tracking-tighter text-slate-900 flex flex-col items-center">
               <span className="text-emerald-600 drop-shadow-sm">FREE IRAN</span>
            </div>
            
            {/* Iranian Lion and Sun Flag Representation */}
            <div className="flex flex-col items-center shadow-2xl rounded-lg overflow-hidden border border-slate-100 group">
              <div className="h-3 w-48 bg-[#238232] group-hover:brightness-110 transition-all"></div>
              <div className="h-10 w-48 bg-white flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform">
                 {/* Stylized Lion and Sun Emoji - Centerpiece */}
                 <span className="text-3xl filter saturate-150 drop-shadow-md select-none">🦁☀️</span>
              </div>
              <div className="h-3 w-48 bg-[#DA291C] group-hover:brightness-110 transition-all"></div>
            </div>
        </div>
        
        <div className="text-center space-y-1">
          <p className="text-xs text-slate-500 font-bold uppercase tracking-[0.3em] animate-pulse">
          زنده باد ایران آزاد! / Long Live Free Iran!
          </p>
          <p className="text-[9px] text-slate-400 font-medium italic">
            Created with Google AI Studio
          </p>
        </div>
      </div>
    </div>
  );
};
