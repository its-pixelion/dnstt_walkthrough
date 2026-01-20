
import React from 'react';
import { Language } from '../types';

// Updated export name to Step7 to match step ID 7
export const Step7: React.FC<{ lang: Language }> = ({ lang }) => {
  const isRtl = lang === 'fa';
  
  return (
    <div className="space-y-6">
      <div className="bg-blue-50 border border-blue-100 p-5 rounded-2xl">
        <p className="text-sm text-blue-800 leading-relaxed">
          {isRtl 
            ? "در این آموزش ما فقط بر روی حالت تونل SSH تمرکز می‌کنیم. اگر به دنبال استفاده از حالت SOCKS پروکسی هستید، می‌توانید به مستندات اصلی مراجعه کنید:" 
            : "In this walkthrough, we focus specifically on SSH tunnel mode. For SOCKS proxy mode instructions, please visit the original repository:"}
          <a href="https://github.com/bugfloyd/dnstt-deploy" target="_blank" className="block mt-2 font-bold underline">github.com/bugfloyd/dnstt-deploy</a>
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Android Apps */}
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
          <h5 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
            <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24"><path d="M17.523 15.3414C16.9463 15.3414 16.4776 14.8727 16.4776 14.296C16.4776 13.7193 16.9463 13.2506 17.523 13.2506C18.0997 13.2506 18.5684 13.7193 18.5684 14.296C18.5684 14.8727 18.0997 15.3414 17.523 15.3414ZM6.47715 15.3414C5.90048 15.3414 5.43178 14.8727 5.43178 14.296C5.43178 13.7193 5.90048 13.2506 6.47715 13.2506C7.05382 13.2506 7.52252 13.7193 7.52252 14.296C7.52252 14.8727 7.05382 15.3414 6.47715 15.3414ZM17.8633 11.2335L19.8519 7.78857C19.9575 7.60538 19.8948 7.37198 19.7116 7.26637C19.5285 7.16075 19.2951 7.22345 19.1894 7.40664L17.1795 10.8887C15.6888 10.2078 14.0041 9.82512 12.2341 9.82512C10.4641 9.82512 8.7794 10.2078 7.28873 10.8887L5.27878 7.40664C5.17317 7.22345 4.93977 7.16075 4.75658 7.26637C4.57339 7.37198 4.51068 7.60538 4.6163 7.78857L6.6049 11.2335C3.21147 13.0453 0.887207 16.5385 0.887207 20.6186H23.581C23.581 16.5385 21.2568 13.0453 17.8633 11.2335Z"/></svg>
            Android
          </h5>
          <div className="space-y-2">
            <a href="https://play.google.com/store/apps/details?id=com.evozi.injector" target="_blank" className="flex items-center justify-between p-3 bg-slate-50 rounded-xl hover:bg-blue-50 transition-colors text-sm font-medium border border-slate-100">
              HTTP Injector <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.netmod.syna&hl=en-US&pli=1" target="_blank" className="flex items-center justify-between p-3 bg-slate-50 rounded-xl hover:bg-blue-50 transition-colors text-sm font-medium border border-slate-100">
              NetMod VPN <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
            </a>
            <a href="https://play.google.com/store/apps/details?id=xyz.easypro.httpcustom" target="_blank" className="flex items-center justify-between p-3 bg-slate-50 rounded-xl hover:bg-blue-50 transition-colors text-sm font-medium border border-slate-100">
              HTTP Custom <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
            </a>
            <a href="https://play.google.com/store/apps/details?id=net.darktunnel.app" target="_blank" className="flex items-center justify-between p-3 bg-slate-50 rounded-xl hover:bg-blue-50 transition-colors text-sm font-medium border border-slate-100">
              DarkTunnel <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
            </a>
          </div>
        </div>

        {/* iOS Apps */}
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
          <h5 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
            <svg className="w-5 h-5 text-slate-800" fill="currentColor" viewBox="0 0 24 24"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.1 2.48-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.36 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
            iOS
          </h5>
          <div className="space-y-2">
            <a href="https://apps.apple.com/us/app/http-injector/id1659992827" target="_blank" className="flex items-center justify-between p-3 bg-slate-50 rounded-xl hover:bg-blue-50 transition-colors text-sm font-medium border border-slate-100">
              HTTP Injector <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
            </a>
          </div>
        </div>
      </div>

      <div className="bg-red-50 border border-red-100 p-5 rounded-2xl">
        <div className={`flex items-center gap-2 mb-2 ${isRtl ? 'flex-row-reverse' : 'flex-row'}`}>
          <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
          <span className="font-bold text-red-800">{isRtl ? "هشدار امنیتی" : "Security Notice"}</span>
        </div>
        <p className="text-sm text-red-700 leading-relaxed">
          {isRtl 
            ? "به دلایل امنیتی و دسترسی‌های اینترنت، ما نمی‌توانیم لینک‌های مستقیم دانلود فایل‌های نصبی (APK) را برای کاربران داخل ایران ارائه دهیم. لطفاً فایل‌ها را از طریق فردی مورد اعتماد در سرویس‌های داخلی بارگذاری و دریافت نمایید. با جستجو در توییتر و یا تلگرام می‌توانید افراد یا گروه‌هایی را بیابید که این فایل‌ها را به اشتراک می‌گذارند." 
            : "For security reasons and local network restrictions, we do not provide direct APK download links. Please ask someone you trust to upload the files to a trusted local service. You can find individuals or groups sharing these files by searching on Twitter/X or Telegram."}
        </p>
      </div>
    </div>
  );
};
