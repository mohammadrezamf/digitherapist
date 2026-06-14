import { Metadata } from "next";
import { CheckCircle2, Menu, MessageCircle, Phone, X } from "lucide-react";
import FooterSection from "@/app/(sections)/wrapper/footer";
import PainPointSection from "@/app/(sections)/home/components/landing/pain-point-section";
import WhyUsSection from "@/app/(sections)/home/components/landing/why-us-section";
import Products from "@/app/(sections)/home/components/landing/products";
import FeaturesSection from "@/app/(sections)/home/components/landing/fetaures-section";
import TopSection from "@/app/(sections)/home/components/landing/top-section";
import ContactPopover from "@/app/(sections)/home/components/landing/contact-popover";
import Link from "next/link";

const PHONE = "09375332212";

// ۱. افزودن Metadata برای سئو
export const metadata: Metadata = {
  title: "دیجی‌تراپیست | طراحی وب‌سایت و سیستم نوبت‌دهی روانشناسان",
  description:
    "دیجی‌تراپیست، پلتفرم اختصاصی طراحی وب‌سایت شخصی و سیستم نوبت‌دهی هوشمند برای روانشناسان و درمانگران. بدون واسطه نوبت بگیرید و برند شخصی خود را بسازید.",
  keywords: [
    "طراحی سایت روانشناسی",
    "نوبت دهی آنلاین درمانگران",
    "سایت شخصی روانشناس",
    "دیجی‌تراپیست",
    "نرم افزار مدیریت کلینیک",
  ],
  openGraph: {
    title: "دیجی‌تراپیست | برند شخصی شما در دنیای دیجیتال",
    description: "سیستم نوبت‌دهی و وب‌سایت اختصاصی روانشناسان",
    locale: "fa_IR",
    type: "website",
  },
  alternates: {
    canonical: "https://digitherapist.ir",
  },
};

export default function Landing() {
  // ۲. افزودن Structured Data (JSON-LD) برای درک بهتر موتورهای جستجو
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "DigiTherapist",
    operatingSystem: "Web",
    applicationCategory: "HealthApplication",
    description: "پلتفرم نوبت‌دهی و طراحی سایت اختصاصی برای روانشناسان و درمانگران",
    url: "https://digitherapist.ir",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "IRR",
    },
  };

  return (
    <div
      className="min-h-screen bg-slate-50 text-slate-800 selection:bg-blue-600 selection:text-white"
      dir="rtl"
    >
      {/* تزریق JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ۳. استفاده از تگ‌های معنایی (header) */}
      <header className="sticky top-0 z-40 border-b border-slate-100 bg-white/90 backdrop-blur-md transition-all">
        <input type="checkbox" id="mobile-menu-toggle" className="peer hidden" aria-hidden="true" />

        <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div className="flex items-center gap-10">
              <Link
                href="/"
                className="flex items-center gap-3"
                aria-label="صفحه اصلی دیجی‌تراپیست"
              >
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-xl font-black text-white shadow-lg shadow-blue-500/20"
                  aria-hidden="true"
                >
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
              </Link>

              <nav
                className="hidden items-center gap-8 text-sm font-semibold text-slate-600 md:flex"
                aria-label="منوی اصلی"
              >
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

            <div className="hidden items-center gap-4 sm:flex">
              <ContactPopover />
            </div>

            {/* افزودن aria-label برای دسترسی‌پذیری */}
            <label
              htmlFor="mobile-menu-toggle"
              className="cursor-pointer rounded-lg p-2 text-slate-600 transition-colors hover:bg-slate-100 md:hidden"
              aria-label="باز و بسته کردن منوی موبایل"
            >
              <Menu className="block h-6 w-6 peer-checked:hidden" aria-hidden="true" />
              <X className="hidden h-6 w-6 peer-checked:block" aria-hidden="true" />
            </label>
          </div>
        </div>

        <div className="hidden peer-checked:block md:hidden">
          <nav
            className="space-y-3 border-b border-slate-100 bg-white px-4 pt-2 pb-6 shadow-lg"
            aria-label="منوی موبایل"
          >
            <a
              href="#features"
              className="block rounded-lg px-3 py-2 font-medium text-slate-700 hover:bg-slate-50"
            >
              امکانات سیستم
            </a>
            <a
              href="#why-us"
              className="block rounded-lg px-3 py-2 font-medium text-slate-700 hover:bg-slate-50"
            >
              چرا دیجی‌تراپیست؟
            </a>
            <a
              href="#before-after"
              className="block rounded-lg px-3 py-2 font-medium text-slate-700 hover:bg-slate-50"
            >
              محیط کاربری
            </a>
            <a
              href="#pricing"
              className="block rounded-lg px-3 py-2 font-medium text-slate-700 hover:bg-slate-50"
            >
              تعرفه‌ها
            </a>
            <a
              href="#faq"
              className="block rounded-lg px-3 py-2 font-medium text-slate-700 hover:bg-slate-50"
            >
              سوالات متداول
            </a>

            <div className="flex flex-col gap-3 border-t border-slate-100 pt-4">
              <a
                href={`tel:${PHONE}`}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 py-2.5 text-center font-bold text-white"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                ثبت سفارش و هماهنگی
              </a>
              <a
                href={`https://wa.me/98${PHONE.slice(1)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-lg border border-green-500 py-2.5 text-center font-bold text-green-600"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                واتساپ
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* ۴. استفاده از تگ <main> برای بدنه اصلی */}
      <main>
        <TopSection />

        {/* ۵. استفاده از تگ‌های معنایی مثل article یا section با تیترهای مناسب */}
        <section
          aria-labelledby="personal-brand-heading"
          className="relative scroll-mt-20 overflow-hidden bg-linear-to-l from-slate-900 to-indigo-950 py-20 text-white sm:py-28"
        >
          <div
            className="absolute top-0 right-0 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-purple-600/10 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
              <div className="order-2 lg:order-1 lg:col-span-5">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md sm:p-8">
                  {/* تبدیل h3 به تگ مناسب‌تر (یا حفظ استایل با تگ معنایی) */}
                  <p className="text-2xl leading-relaxed font-black text-white sm:text-3xl">
                    یک <span className="text-indigo-400">وب‌سایت شخصی</span> اختصاصی؛ جایی برای
                    معرفی تخصص و دریافت مستقیم نوبت از مراجعان.
                  </p>
                </div>
              </div>

              <div className="order-1 space-y-6 lg:order-2 lg:col-span-7 lg:pr-10">
                <span className="inline-block rounded-full bg-indigo-500/10 px-3.5 py-1.5 text-xs font-extrabold tracking-widest text-indigo-400 uppercase">
                  وب‌سایت اختصاصی درمانگر
                </span>

                {/* h2 به عنوان تیتر بخش */}
                <h2
                  id="personal-brand-heading"
                  className="text-3xl leading-tight font-black text-white sm:text-4xl"
                >
                  برند شخصی شما در دنیای دیجیتال
                </h2>

                <p className="text-lg leading-relaxed text-slate-300">
                  با دیجی‌تراپیست، یک هویت دیجیتال مستقل بسازید. وب‌سایتی اختصاصی که دقیقاً
                  بازتاب‌دهنده تخصص شماست و شما را از پلتفرم‌های واسطه بی‌نیاز می‌کند.
                </p>

                <div className="space-y-4 border-t border-white/10 pt-6">
                  {/* تبدیل h4 به h3 برای رعایت سلسه‌مراتب (Hierarchy) تیترها در سئو */}
                  <div className="flex items-start gap-4">
                    <div
                      className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-500/20 text-indigo-400"
                      aria-hidden="true"
                    >
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white">پورتفولیوی درمانی</h3>
                      <p className="mt-1 text-sm text-slate-400">
                        نمایش حرفه‌ای سوابق علمی، گواهینامه‌ها و حوزه‌های تخصصی.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div
                      className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-500/20 text-indigo-400"
                      aria-hidden="true"
                    >
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white">نوبت‌دهی مستقیم</h3>
                      <p className="mt-1 text-sm text-slate-400">
                        حذف واسطه‌ها با امکان رزرو مستقیم وقت مشاوره (آنلاین یا حضوری).
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div
                      className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-500/20 text-indigo-400"
                      aria-hidden="true"
                    >
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white">وبلاگ تخصصی</h3>
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

        <FeaturesSection />
        <WhyUsSection />
        <Products />
        <PainPointSection />
      </main>

      {/* ۶. استفاده از تگ <footer> */}
      <FooterSection />
    </div>
  );
}
