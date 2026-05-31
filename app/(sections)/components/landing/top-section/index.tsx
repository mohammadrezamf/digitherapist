import React from "react";
import { Activity, CheckCircle2 } from "lucide-react";

const TopSection = () => {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-white to-blue-50/30 pt-12 pb-24 lg:pt-20 lg:pb-32">
      {/* Background elements */}
      <div className="pointer-events-none absolute top-0 right-1/4 h-96 w-96 rounded-full bg-blue-200/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 left-1/4 h-72 w-72 rounded-full bg-indigo-200/30 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Hero Text */}
          <div className="space-y-8 text-center lg:col-span-7 lg:text-right">
            <h1 className="text-4xl leading-[1.2] font-black text-slate-900 sm:text-5xl lg:text-4xl lg:leading-[1.15]">
              مدیریت هوشمند جلسات درمانی، <br />
              <span className="mt-4 block bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                افزایش ماندگاری مراجعان
              </span>
            </h1>

            <p className="mx-auto max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base lg:mx-0">
              با <strong>دیجی‌تراپیست</strong> فرآیندهای پیچیده و دستی مدیریت کلینیک روان‌شناسی را
              کنار بگذارید. از نوبت‌دهی هوشمند تا پرونده درمانی دیجیتال، تحلیل پیشرفت درمان، ماژول
              ریزش مراجعان، نقشه ظرفیت درمانگران و داشبورد تحلیلی دقیق
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
              <a
                href="tel:09116666120"
                className="w-full rounded-xl bg-blue-600 px-6 py-3 text-center text-sm font-medium text-white transition-all hover:bg-blue-700 sm:w-auto"
              >
                ثبت سفارش و هماهنگی: <span dir="ltr">0911 666 6120</span>
              </a>

              <a
                href="#features"
                className="w-full rounded-xl border border-slate-200 bg-white px-6 py-3 text-center text-sm font-medium text-slate-700 transition-all hover:bg-slate-50 sm:w-auto"
              >
                مشاهده امکانات و ماژول‌ها
              </a>
            </div>

            {/* Trust & Social Proof Stats */}
            <div className="mx-auto grid max-w-md grid-cols-3 gap-4 border-t border-slate-200/60 pt-8 lg:mx-0">
              <div className="text-center lg:text-right">
                <div className="text-2xl font-black text-slate-950 sm:text-3xl">۲۰+</div>
                <div className="mt-1 text-xs text-slate-500">روان‌شناس فعال</div>
              </div>
              <div className="border-x border-slate-200 px-2 text-center lg:text-right">
                <div className="text-2xl font-black text-slate-950 sm:text-3xl">۹۸٪</div>
                <div className="mt-1 text-xs text-slate-500">رضایت کلینیک‌ها</div>
              </div>
              <div className="text-center lg:text-right">
                <div className="text-2xl font-black text-slate-950 sm:text-3xl">۴.۹/۵</div>
                <div className="mt-1 text-xs text-slate-500">رضایت مراجعین</div>
              </div>
            </div>
          </div>

          {/* Hero Illustration / Mockup */}
          <div className="relative flex justify-center lg:col-span-5">
            <div className="relative w-full max-w-115">
              {/* Decorative glowing backdrops */}
              <div className="absolute inset-0 scale-95 rotate-3 transform rounded-3xl bg-linear-to-tr from-blue-500 to-indigo-500 opacity-10 blur-xl" />

              {/* Main Mockup Card */}
              <div className="relative rounded-3xl border border-slate-100 bg-white p-6 shadow-2xl">
                <div className="mb-4 flex items-center justify-between border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-400" />
                    <div className="h-3 w-3 rounded-full bg-amber-400" />
                    <div className="h-3 w-3 rounded-full bg-green-400" />
                  </div>
                  <span className="text-xs font-semibold text-slate-400">
                    داشبورد کلینیک دیجی‌تراپیست
                  </span>
                </div>

                {/* Simulated App Screen */}
                <div className="space-y-4">
                  {/* Next Appointment */}
                  <div className="flex items-center justify-between rounded-2xl bg-slate-50 p-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 font-bold text-blue-600">
                        م
                      </div>
                      <div>
                        <p className="text-xs text-slate-500">مراجع بعدی</p>
                        <p className="text-sm font-bold text-slate-800">
                          الهام توسلی – اضطراب عمومی
                        </p>
                      </div>
                    </div>
                    <span className="rounded-md bg-emerald-100 px-2 py-1 text-xs font-semibold text-emerald-800">
                      ساعت ۱۴:۳۰
                    </span>
                  </div>

                  {/* Chart simulation */}
                  <div className="rounded-2xl border border-slate-100 p-4">
                    <div className="mb-3 flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-700">
                        میزان مراجعه این هفته
                      </span>
                      <span className="text-[10px] font-semibold text-blue-600">پیک: دوشنبه</span>
                    </div>

                    <div className="flex h-20 items-end justify-between px-2 pt-2">
                      <div className="h-[40%] w-5 rounded-t-sm bg-blue-200" />
                      <div className="h-[60%] w-5 rounded-t-sm bg-blue-200" />
                      <div className="relative h-[90%] w-5 rounded-t-sm bg-blue-600">
                        <span className="absolute -top-6 left-1/2 -translate-x-1/2 rounded bg-slate-800 px-1.5 py-0.5 font-mono text-[9px] font-bold text-white">
                          ۹۲٪
                        </span>
                      </div>
                      <div className="h-[50%] w-5 rounded-t-sm bg-blue-200" />
                      <div className="h-[75%] w-5 rounded-t-sm bg-indigo-500" />
                      <div className="h-[30%] w-5 rounded-t-sm bg-blue-200" />
                    </div>
                  </div>

                  {/* Quick Stat badges */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-xl border border-indigo-100/30 bg-indigo-50/50 p-3">
                      <p className="text-[10px] text-slate-500">جلسات امروز</p>
                      <p className="text-lg font-black text-indigo-700">۳۴ جلسه</p>
                    </div>
                    <div className="rounded-xl border border-emerald-100/30 bg-emerald-50/50 p-3">
                      <p className="text-[10px] text-slate-500">میزان ادامه درمان</p>
                      <p className="text-lg font-black text-emerald-700">۸۸٪</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div
                className="absolute -top-6 -right-6 flex animate-bounce items-center gap-3 rounded-2xl border border-slate-100 bg-white p-3 shadow-xl"
                style={{ animationDuration: "4s" }}
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500 text-white">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400">یادآوری جلسه ارسال شد</p>
                  <p className="text-xs font-bold text-slate-800">مریم شریفی – فردا ۱۰ صبح</p>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 flex items-center gap-3 rounded-2xl bg-slate-900 p-3.5 text-white shadow-xl">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600">
                  <Activity className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400">نسخه ابری فوق‌سریع</p>
                  <p className="text-xs font-extrabold">تاخیر کمتر از ۰.۱ ثانیه</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopSection;
