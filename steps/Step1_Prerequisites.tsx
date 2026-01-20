
import React from 'react';
import { Language } from '../types';

export const Step1: React.FC<{ lang: Language }> = ({ lang }) => {
  const isRtl = lang === 'fa';
  return (
    <div className="space-y-4">
      {isRtl ? (
        <>
          <p className="text-slate-700 leading-relaxed">
            برای ساخت تونل DNS، به موارد زیر نیاز دارید:
          </p>
          <ul className="list-disc list-inside space-y-3 text-slate-700">
            <li>
              <strong>سرور مجازی لینوکس (VPS):</strong> ترجیحاً اوبونتو ۲۰.۰۴ یا بالاتر.
              <span className="text-slate-500 text-xs block mt-1 ps-5 italic">مثلاً پلن‌های پایه <strong>Hetzner</strong> با قیمت حدود ۴ یورو در ماه.</span>
            </li>
            <li>
              <strong>نام دامنه:</strong> 
              <span className="text-red-600 font-bold block mt-1">ترجیحاً از دامنه‌های .ir استفاده نکنید.</span>
              به دنبال ارزان‌ترین دامنه‌ها باشید اما <strong>از دامنه‌های رایگان استفاده نکنید</strong>. 
              پسوندهای رایج مانند .com، .net و .org بهترین گزینه هستند زیرا کمتر احتمال دارد توسط سیستم‌های فیلترینگ مسدود شوند.
              <span className="text-slate-500 text-xs block mt-1 ps-5 italic">می‌توانید از <strong>Namecheap</strong> یا <strong>Cloudflare</strong> دامنه‌های ارزان (حدود ۳ تا ۵ یورو) تهیه کنید.</span>
            </li>
          </ul>
        </>
      ) : (
        <>
          <p className="text-slate-700 leading-relaxed">
            To build a DNS tunnel, you need:
          </p>
          <ul className="list-disc list-inside space-y-3 text-slate-700">
            <li>
              <strong>Linux VPS:</strong> Ubuntu 20.04+ recommended.
              <span className="text-slate-500 text-xs block mt-1 ps-5 italic">Example: <strong>Hetzner</strong> basic plans starting at ~€4/month.</span>
            </li>
            <li>
              <strong>Domain Name:</strong> 
              <span className="text-red-600 font-bold block mt-1">Preferably avoid ".ir" domains.</span>
              Look for the cheapest available domains but <strong>avoid free ones</strong> (like .tk or .ml). 
              Common TLDs like .com, .net, or .org are less likely to be blocked by advanced filtering systems.
              <span className="text-slate-500 text-xs block mt-1 ps-5 italic">Available via <strong>Namecheap</strong> or <strong>Cloudflare</strong> starting from ~€3-5.</span>
            </li>
          </ul>
        </>
      )}
    </div>
  );
};
