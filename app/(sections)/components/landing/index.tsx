"use client";

import { useState } from "react";
import { CheckCircle2, Menu, MessageCircle, Phone, X } from "lucide-react";
import TopSection from "@/app/(sections)/components/landing/top-section";
import FeaturesSection from "@/app/(sections)/components/landing/fetaures-section";
import WhyUsSection from "@/app/(sections)/components/landing/why-us-section";
import PainPointSection from "@/app/(sections)/components/landing/pain-point-section";
import CallToAction from "@/app/(sections)/components/landing/call-to-action-section";
import FooterSection from "@/app/(sections)/components/wrapper/footer";
import Products from "@/app/(sections)/components/landing/products";
import ContactPopover from "@/app/(sections)/components/landing/contact-popover";

const PHONE = "09116666120";

export default function Landing() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div
      className="min-h-screen bg-slate-50 text-slate-800 selection:bg-blue-600 selection:text-white"
      dir="rtl"
    >
      <header className="sticky top-0 z-40 border-b border-slate-100 bg-white/90 backdrop-blur-md transition-all">
        <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo and Nav links */}
            <div className="flex items-center gap-10">
              <a href="#" className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-xl font-black text-white shadow-lg shadow-blue-500/20">
                  د
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold tracking-tight text-slate-900">
                    دیجی‌تراپیست
                  </span>
                  <span className="mt-1 text-[10px] font-medium tracking-wider text-blue-600">
                    DigiTherapist
                  </span>
                </div>
              </a>

              {/* Desktop Nav */}
              <nav className="hidden items-center gap-8 text-sm font-semibold text-slate-600 md:flex">
                <a href="#features" className="transition-colors hover:text-blue-600">
                  امکانات سیستم
                </a>
                <a href="#why-us" className="transition-colors hover:text-blue-600">
                  چرا دیجی تراپیست؟
                </a>
                <a href="#before-after" className="transition-colors hover:text-blue-600">
                  محیط کاربری
                </a>
                <a href="#pricing" className="transition-colors hover:text-blue-600">
                  تعرفه‌ها
                </a>
                <a href="#faq" className="transition-colors hover:text-blue-600">
                  سوالات متداول
                </a>
              </nav>
            </div>

            {/* CTA Actions */}
            <div className="hidden items-center gap-4 sm:flex">
              <ContactPopover />
            </div>
            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-lg p-2 text-slate-600 transition-colors hover:bg-slate-100 md:hidden"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="space-y-3 border-b border-slate-100 bg-white px-4 pt-2 pb-6 shadow-lg md:hidden">
            <a
              href="#features"
              onClick={() => setMobileMenuOpen(false)}
              className="block rounded-lg px-3 py-2 font-medium text-slate-700 hover:bg-slate-50"
            >
              امکانات سیستم
            </a>
            <a
              href="#why-us"
              onClick={() => setMobileMenuOpen(false)}
              className="block rounded-lg px-3 py-2 font-medium text-slate-700 hover:bg-slate-50"
            >
              چرا دیجی‌تراپیست؟
            </a>
            <a
              href="#before-after"
              onClick={() => setMobileMenuOpen(false)}
              className="block rounded-lg px-3 py-2 font-medium text-slate-700 hover:bg-slate-50"
            >
              محیط کاربری
            </a>
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="block rounded-lg px-3 py-2 font-medium text-slate-700 hover:bg-slate-50"
            >
              تعرفه‌ها
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="block rounded-lg px-3 py-2 font-medium text-slate-700 hover:bg-slate-50"
            >
              سوالات متداول
            </a>

            <div className="flex flex-col gap-3 border-t border-slate-100 pt-4">
              <a
                href={`tel:${PHONE}`}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 py-2.5 text-center font-bold text-white"
              >
                <Phone className="h-4 w-4" />
                ثبت سفارش و هماهنگی
              </a>
              <a
                href={`https://wa.me/98${PHONE.slice(1)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-lg border border-green-500 py-2.5 text-center font-bold text-green-600"
              >
                <MessageCircle className="h-4 w-4" />
                واتساپ
              </a>
            </div>
          </div>
        )}
      </header>

      <TopSection />
      <section className="relative scroll-mt-20 overflow-hidden bg-linear-to-l from-slate-900 to-indigo-950 py-20 text-white sm:py-28">
        <div className="absolute top-0 right-0 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-purple-600/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
            {/* Stats */}
            <div className="order-2 lg:order-1 lg:col-span-5">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md sm:p-8">
                <h3 className="text-2xl leading-relaxed font-black text-white sm:text-3xl">
                  یک <span className="text-indigo-400">وب‌سایت شخصی</span> اختصاصی؛ جایی برای معرفی
                  تخصص و دریافت مستقیم نوبت از مراجعان.
                </h3>
              </div>
            </div>

            <div className="order-1 space-y-6 lg:order-2 lg:col-span-7 lg:pr-10">
              {/* Badge */}
              <span className="inline-block rounded-full bg-indigo-500/10 px-3.5 py-1.5 text-xs font-extrabold tracking-widest text-indigo-400 uppercase">
                وب‌سایت اختصاصی درمانگر
              </span>

              {/* Title */}
              <h2 className="text-3xl leading-tight font-black text-white sm:text-4xl">
                برند شخصی شما در دنیای دیجیتال
              </h2>

              {/* Description */}
              <p className="text-lg leading-relaxed text-slate-300">
                با دیجی‌تراپیست، یک هویت دیجیتال مستقل بسازید. وب‌سایتی اختصاصی که دقیقاً
                بازتاب‌دهنده تخصص شماست و شما را از پلتفرم‌های واسطه بی‌نیاز می‌کند.
              </p>

              {/* Features List */}
              <div className="space-y-4 border-t border-white/10 pt-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-500/20 text-indigo-400">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">پورتفولیوی درمانی</h4>
                    <p className="mt-1 text-sm text-slate-400">
                      نمایش حرفه‌ای سوابق علمی، گواهینامه‌ها و حوزه‌های تخصصی.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-500/20 text-indigo-400">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">نوبت‌دهی مستقیم</h4>
                    <p className="mt-1 text-sm text-slate-400">
                      حذف واسطه‌ها با امکان رزرو مستقیم وقت مشاوره (آنلاین یا حضوری).
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-500/20 text-indigo-400">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">وبلاگ تخصصی</h4>
                    <p className="mt-1 text-sm text-slate-400">
                      انتشار مقالات و ویدیوهای آموزشی برای افزایش اعتبار علمی شما.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Core Features Grid Section */}
      {/*<VideoPlayerModal />*/}
      <FeaturesSection />
      <WhyUsSection />
      <Products />
      <PainPointSection />
      {/*<CallToAction />*/}
      <FooterSection />
    </div>
  );
}
