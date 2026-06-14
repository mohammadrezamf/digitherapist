import React from "react";
import { Phone } from "lucide-react";
import CopyRight from "@/app/(sections)/wrapper/copy-right";

const FooterSection = () => {
  return (
    <footer className="bg-slate-950 pt-16 pb-8 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 border-b border-slate-900 pb-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-xl font-black text-white">
                د
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white">دیجی تراپیست</span>
                <span className="mt-1 text-[10px] font-medium tracking-wider text-blue-500">
                  Dandano
                </span>
              </div>
            </div>
            <p className="text-xs leading-relaxed text-slate-400">
              سامانه هوشمند و ابری دیجی تراپیست اولین سیستم مدیریت تخصصی مطب و کلینیکی روانشناسی در
              کشور است که با تکیه بر استانداردهای بین‌المللی طراحی و توسعه یافته است.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900 text-slate-400 transition-colors hover:bg-blue-600 hover:text-white"
              >
                𝕏
              </a>
              <a
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900 text-slate-400 transition-colors hover:bg-blue-600 hover:text-white"
              >
                📸
              </a>
              <a
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900 text-slate-400 transition-colors hover:bg-blue-600 hover:text-white"
              >
                ✉️
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white">پیوندهای کاربردی</h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#features" className="transition-colors hover:text-white">
                  امکانات و ماژول‌های دیجی تراپیست
                </a>
              </li>
              <li>
                <a href="#pricing" className="transition-colors hover:text-white">
                  لیست کامل تعرفه اشتراک‌ها
                </a>
              </li>
              <li>
                <a href="#why-us" className="transition-colors hover:text-white">
                  آمار رضایت و نظرسنجی مراجعین
                </a>
              </li>
              <li>
                <a href="#before-after" className="transition-colors hover:text-white">
                  مقایسه دیجی تراپیست با نرم‌افزارهای قدیمی
                </a>
              </li>
              <li>
                <a href="#faq" className="transition-colors hover:text-white">
                  سوالات پرتکرار همکاران دندانپزشک
                </a>
              </li>
            </ul>
          </div>

          {/* Contact details */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white">ارتباط با ما</h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-blue-500" />
                <span style={{ direction: "ltr" }}>0911 6666 120</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="font-bold text-blue-500">📍</span>
                <span>تهران، خیابان ولیعصر، بالاتر از میدان ونک، برج نگار، طبقه ۱۵</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="font-bold text-blue-500">📧</span>
                <span>support@dandano.com</span>
              </li>
            </ul>
          </div>

          {/* Badges / Certifications */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white">مجوزها و تاییده‌ها</h4>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center justify-center rounded-xl border border-slate-800 bg-slate-900 p-3 text-center text-[10px] text-slate-400">
                عضو رسمی صنف نرم‌افزار
              </div>
              {/*<div className="flex items-center justify-center rounded-xl border border-slate-800 bg-slate-900 p-3 text-center text-[10px] text-slate-400">*/}
              {/*  سازمان نظام دندانپزشکی کشور*/}
              {/*</div>*/}
              {/*<div className="flex items-center justify-center rounded-xl border border-slate-800 bg-slate-900 p-3 text-center text-[10px] text-slate-400">*/}
              {/*  دارای نماد اعتماد الکترونیک*/}
              {/*</div>*/}
              <div className="flex items-center justify-center rounded-xl border border-slate-800 bg-slate-900 p-3 text-center text-[10px] text-slate-400">
                پشتیبان‌گیری رمزنگاری شده سرور ملی
              </div>
            </div>
          </div>
        </div>

        {/* Copyright and Legal */}
        <CopyRight />
      </div>
    </footer>
  );
};

export default FooterSection;
