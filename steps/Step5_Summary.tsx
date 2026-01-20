
import React from 'react';
import { Language } from '../types';

// Updated export name to Step6 to match step ID 6
export const Step6: React.FC<{ lang: Language }> = ({ lang }) => {
  const isRtl = lang === 'fa';
  const managementCmd = "dnstt-deploy";
  const passwdCmd = "sudo passwd dnstt";
  const nanoCmd = "sudo nano /etc/ssh/sshd_config";
  const restartSshCmd = "sudo systemctl restart ssh";

  const menuOptions = [
    {
      id: 1,
      en: "Install/Reconfigure dnstt server",
      fa: "نصب یا پیکربندی مجدد سرور DNSTT",
      descEn: "Set up or modify existing configuration",
      descFa: "راه‌اندازی اولیه یا تغییر تنظیمات فعلی"
    },
    {
      id: 2,
      en: "Update dnstt-deploy script",
      fa: "بروزرسانی اسکریپت dnstt-deploy",
      descEn: "Check for and install script updates",
      descFa: "بررسی و نصب آخرین نسخه اسکریپت نصب"
    },
    {
      id: 3,
      en: "Check service status",
      fa: "بررسی وضعیت سرویس",
      descEn: "View current service status",
      descFa: "مشاهده وضعیت فعال بودن سرویس تونل"
    },
    {
      id: 4,
      en: "View service logs",
      fa: "مشاهده لاگ‌های سرویس",
      descEn: "Monitor real-time logs (Ctrl+C to exit)",
      descFa: "مانیتورینگ زنده ترافیک (Ctrl+C برای خروج)"
    },
    {
      id: 5,
      en: "Exit",
      fa: "خروج",
      descEn: "Quit the menu",
      descFa: "خروج از منوی تعاملی"
    }
  ];

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="space-y-6">
      <p className="text-slate-700">
        {isRtl 
          ? "پس از اتمام نصب، برای مدیریت، عیب‌یابی یا تغییر تنظیمات سرور، نیازی به اجرای مجدد فرمان طولانی نصب ندارید. کافیست از دستور زیر استفاده کنید:" 
          : "After installation, you can manage your DNSTT server anytime using the dedicated management command. No need to run the long installation script again."}
      </p>

      {/* Management Command Block */}
      <div className="bg-slate-900 rounded-2xl p-6 relative group" dir="ltr">
        <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Management Command</div>
        <div className="flex items-center justify-between">
          <code className="text-blue-400 font-mono text-lg">{managementCmd}</code>
          <button 
            onClick={() => copyToClipboard(managementCmd)}
            className="text-slate-500 hover:text-white transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg>
          </button>
        </div>
      </div>

      <div className="space-y-4">
        <h5 className={`font-bold text-slate-900 text-lg ${isRtl ? 'text-right' : 'text-left'}`}>
          {isRtl ? "گزینه‌های منوی مدیریت:" : "Interactive Menu Options:"}
        </h5>
        
        <div className="grid gap-3">
          {menuOptions.map((option) => (
            <div key={option.id} className={`flex items-start gap-4 p-4 bg-white border border-slate-200 rounded-2xl shadow-sm hover:border-blue-300 transition-all ${isRtl ? 'flex-row-reverse' : 'flex-row'}`}>
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-xs font-bold">
                {option.id}
              </span>
              <div className={isRtl ? 'text-right' : 'text-left'}>
                <div className="font-bold text-slate-800">{isRtl ? option.fa : option.en}</div>
                <div className="text-xs text-slate-500 mt-0.5">{isRtl ? option.descFa : option.descEn}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-amber-50 border border-amber-100 p-5 rounded-2xl">
        <div className={`flex items-center gap-2 mb-2 ${isRtl ? 'flex-row-reverse' : 'flex-row'}`}>
          <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
          <span className="font-bold text-amber-800">{isRtl ? "نکته مهم" : "Important Note"}</span>
        </div>
        <p className="text-sm text-amber-700 leading-relaxed">
          {isRtl 
            ? "برای مشاهده لاگ‌ها به صورت زنده (گزینه ۴)، پس از مشاهده اطلاعات مورد نیاز، از کلید ترکیبی Ctrl+C برای خروج از محیط لاگ و بازگشت به خط فرمان استفاده کنید." 
            : "When viewing real-time logs (Option 4), use Ctrl+C to exit the log viewer and return to the command prompt."}
        </p>
      </div>

      {/* User Management & Security Section */}
      <div className="bg-emerald-50 border border-emerald-100 p-6 rounded-2xl space-y-5 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 left-0 h-1 bg-emerald-200 opacity-50"></div>
        <div className={`flex flex-wrap items-center gap-2 ${isRtl ? 'flex-row-reverse' : 'flex-row'}`}>
          <div className="flex items-center gap-2">
            <svg className="w-6 h-6 text-emerald-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
            <span className="font-bold text-emerald-900 text-base md:text-lg">{isRtl ? "امنیت و مدیریت کاربران" : "Security & User Management"}</span>
          </div>
          <div className={`flex gap-1.5 ${isRtl ? 'flex-row-reverse mr-auto' : 'flex-row ml-auto'}`}>
            <span className="px-2 py-0.5 bg-white border border-emerald-200 text-emerald-600 text-[9px] font-bold rounded uppercase tracking-wider">
              {isRtl ? "اختیاری" : "Optional"}
            </span>
            <span className="px-2 py-0.5 bg-emerald-600 text-white text-[9px] font-bold rounded uppercase tracking-wider">
              {isRtl ? "توصیه شده" : "Recommended"}
            </span>
          </div>
        </div>

        <div className={`text-sm text-emerald-800 space-y-6 leading-relaxed ${isRtl ? 'text-right' : 'text-left'}`}>
          <p className="text-xs md:text-sm">
            {isRtl 
              ? "انجام این مراحل برای پایداری سرویس اجباری نیست، اما به دلایل امنیتی شدیداً توصیه می‌شود تا دسترسی کاربر اصلی (root) را با دیگران به اشتراک نگذارید." 
              : "While not strictly required for the service to function, these steps are highly recommended for security to avoid sharing root access."}
          </p>
          
          {/* Step 1: Password Assignment */}
          <div className="space-y-3">
            <p className="font-bold text-emerald-900 text-xs md:text-sm">
              {isRtl ? "۱. تعیین رمز عبور برای کاربر جدید (dnstt):" : "1. Assign a password to the new user (dnstt):"}
            </p>
            <div className="bg-white/60 p-3 rounded-xl font-mono text-emerald-900 text-[11px] md:text-xs border border-emerald-200 flex items-center justify-between shadow-inner" dir="ltr">
              <code>{passwdCmd}</code>
              <button onClick={() => copyToClipboard(passwdCmd)} className="hover:text-emerald-600 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg>
              </button>
            </div>
          </div>

          {/* Step 2: SSH Config Editing */}
          <div className="space-y-4">
            <p className="font-bold text-emerald-900 text-xs md:text-sm">
              {isRtl ? "۲. ویرایش تنظیمات SSH:" : "2. Edit SSH Configuration:"}
            </p>
            <p className="text-[11px] md:text-xs text-emerald-700">
              {isRtl 
                ? "برای اینکه بتوانید با رمز عبور وارد شوید، باید فایل تنظیمات SSH را ویرایش کنید:" 
                : "To allow password-based logins, you must edit the SSH configuration file:"}
            </p>
            
            {/* Nano command block */}
            <div className="bg-slate-900/90 text-white p-4 rounded-xl font-mono text-[10px] md:text-xs border border-slate-700 shadow-xl" dir="ltr">
              <div className="flex justify-between mb-2">
                <span className="text-slate-500 uppercase tracking-tighter text-[9px]">Edit Config</span>
                <button onClick={() => copyToClipboard(nanoCmd)} className="text-slate-500 hover:text-white transition-colors">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg>
                </button>
              </div>
              <code className="text-emerald-400">{nanoCmd}</code>
            </div>

            {/* Nano walkthrough steps */}
            <div className={`bg-white/40 p-4 rounded-xl border border-emerald-200 text-[11px] md:text-xs space-y-2 ${isRtl ? 'text-right' : 'text-left'}`}>
              <div className={`flex items-start gap-2 ${isRtl ? 'flex-row-reverse' : 'flex-row'}`}>
                <span className="shrink-0 w-4 h-4 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-[9px]">1</span>
                <span>{isRtl ? "با کلیدهای جهت‌نما به پایین بروید تا عبارت PasswordAuthentication را پیدا کنید." : "Use arrow keys to scroll down and find 'PasswordAuthentication'."}</span>
              </div>
              <div className={`flex items-start gap-2 ${isRtl ? 'flex-row-reverse' : 'flex-row'}`}>
                <span className="shrink-0 w-4 h-4 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-[9px]">2</span>
                <span>{isRtl ? "آن را به yes تغییر دهید (اگر قبل از آن علامت # است، آن را حذف کنید)." : "Set it to 'yes' (remove the '#' character if it exists at the start of the line)."}</span>
              </div>
              <div className={`flex items-start gap-2 ${isRtl ? 'flex-row-reverse' : 'flex-row'}`}>
                <span className="shrink-0 w-4 h-4 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-[9px]">3</span>
                <span>{isRtl ? "برای ذخیره: کلید Ctrl + O و سپس Enter را بزنید." : "To save: Press Ctrl + O and then Enter."}</span>
              </div>
              <div className={`flex items-start gap-2 ${isRtl ? 'flex-row-reverse' : 'flex-row'}`}>
                <span className="shrink-0 w-4 h-4 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-[9px]">4</span>
                <span>{isRtl ? "برای خروج: کلید Ctrl + X را بزنید." : "To exit: Press Ctrl + X."}</span>
              </div>
            </div>

            {/* SSH Restart Command */}
            <p className="text-[11px] md:text-xs text-emerald-700 mt-4">
              {isRtl 
                ? "در نهایت، برای اعمال تغییرات، سرویس SSH را ری‌استارت کنید:" 
                : "Finally, restart the SSH service to apply the changes:"}
            </p>
            <div className="bg-white/60 p-3 rounded-xl font-mono text-emerald-900 text-[11px] md:text-xs border border-emerald-200 flex items-center justify-between shadow-inner" dir="ltr">
              <code>{restartSshCmd}</code>
              <button onClick={() => copyToClipboard(restartSshCmd)} className="hover:text-emerald-600 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
