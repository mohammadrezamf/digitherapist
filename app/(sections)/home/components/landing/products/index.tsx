import React from "react";
import { CheckCircle2 } from "lucide-react";

const Products = () => {
  return (
    <section id="products" className="scroll-mt-20 bg-white py-10 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl space-y-4 text-center">
          <span className="rounded-full bg-blue-50 px-3.5 py-1.5 text-sm font-extrabold text-blue-600 uppercase">
            تعرفه‌های شفاف و منعطف
          </span>
          <h2 className="text-3xl font-black text-slate-900 sm:text-4xl">
            راهکار مناسب برای مسیر حرفه‌ای شما
          </h2>
          <p className="text-md text-slate-500">
            بدون هزینه‌های پنهان یا اجباری؛ پلتفرم مناسب فعالیت روان‌شناسی خود را انتخاب کنید و هر
            زمان مایل بودید آن را ارتقا دهید.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl items-stretch gap-8 md:grid-cols-3">
          <div className="relative flex flex-col justify-between rounded-3xl border border-slate-200/80 bg-slate-50 p-8 transition-all hover:shadow-xl">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-slate-900">وب‌سایت شخصی روان‌شناس</h3>
                <p className="mt-1 text-xs text-slate-400">
                  ایده‌آل برای درمانگران و مشاوران مستقل
                </p>
              </div>

              <div className="flex items-baseline gap-2"></div>

              <p className="text-xs leading-relaxed text-slate-500">
                داشتن یک وب‌سایت حرفه‌ای برای معرفی تخصص، همراه با سیستم نوبت‌دهی خودکار مراجعان.
              </p>

              <div className="space-y-3.5 border-t border-slate-200 pt-6">
                <div className="flex items-center gap-2 text-xs text-slate-600">
                  <CheckCircle2 className="h-4.5 w-4.5 shrink-0 text-blue-500" />
                  <span>وب‌سایت اختصاصی با دامنه شخصی</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-600">
                  <CheckCircle2 className="h-4.5 w-4.5 shrink-0 text-blue-500" />
                  <span>سیستم نوبت‌دهی آنلاین مراجعان</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-600">
                  <CheckCircle2 className="h-4.5 w-4.5 shrink-0 text-blue-500" />
                  <span>بخش مقالات و پروفایل معرفی درمانگر</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-600">
                  <CheckCircle2 className="h-4.5 w-4.5 shrink-0 text-blue-500" />
                  <span>ارسال پیامک یادآوری جلسات مشاوره</span>
                </div>
              </div>
            </div>

            {/*<div className="pt-8">*/}
            {/*  <a*/}
            {/*    href="#demo"*/}
            {/*    className="block rounded-xl border border-slate-200 bg-white px-4 py-3 text-center text-xs font-bold text-slate-700 transition-colors hover:bg-slate-100"*/}
            {/*  >*/}
            {/*    شروع دوره آزمایشی رایگان*/}
            {/*  </a>*/}
            {/*</div>*/}
          </div>

          {/* Pro Tier (Popular) */}
          <div className="relative flex transform flex-col justify-between rounded-3xl border-2 border-blue-500 bg-linear-to-b from-blue-900 to-indigo-950 p-8 text-white transition-all hover:shadow-2xl md:-translate-y-4">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold">داشبورد مدیریت کلینیک</h3>
                <p className="mt-1 text-xs text-blue-200">بیشترین انتخاب برای مراکز مشاوره</p>
              </div>
              <p className="text-xs leading-relaxed text-blue-200/80">
                سیستم جامع برای مدیریت یکپارچه درمانگران، زمان‌بندی اتاق‌ها، امور مالی و نوبت‌دهی
                متمرکز.
              </p>

              <div className="space-y-3.5 border-t border-white/10 pt-6">
                <div className="flex items-center gap-2 text-xs text-slate-100">
                  <CheckCircle2 className="h-4.5 w-4.5 shrink-0 text-emerald-400" />
                  <span>تمام ویژگی‌های وب‌سایت نوبت‌دهی</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-100">
                  <CheckCircle2 className="h-4.5 w-4.5 shrink-0 text-emerald-400" />
                  <span>تشکیل پرونده الکترونیک امن مراجعان</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-100">
                  <CheckCircle2 className="h-4.5 w-4.5 shrink-0 text-emerald-400" />
                  <span>مدیریت تقویم درمانگران و اتاق‌های جلسات</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-100">
                  <CheckCircle2 className="h-4.5 w-4.5 shrink-0 text-emerald-400" />
                  <span>سیستم حسابداری و محاسبه اتوماتیک پورسانت</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-100">
                  <CheckCircle2 className="h-4.5 w-4.5 shrink-0 text-emerald-400" />
                  <span>گزارش‌گیری جامع مدیریتی و پشتیبانی ۲۴ ساعته</span>
                </div>
              </div>
            </div>

            {/*<div className="pt-8">*/}
            {/*  <a*/}
            {/*    href="#demo"*/}
            {/*    className="block rounded-xl bg-blue-500 px-4 py-3 text-center text-xs font-bold text-white shadow-lg shadow-blue-500/30 transition-colors hover:bg-blue-600"*/}
            {/*  >*/}
            {/*    خرید و ارتقا به داشبورد کلینیک*/}
            {/*  </a>*/}
            {/*</div>*/}
          </div>

          {/* Enterprise Tier */}
          <div className="flex flex-col justify-between rounded-3xl border border-slate-200/80 bg-slate-50 p-8 transition-all hover:shadow-xl">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-slate-900">پلتفرم کلینیک آنلاین</h3>
                <p className="mt-1 text-xs text-slate-400">برگزاری جلسات مجازی با مراجعان</p>
              </div>

              <div className="py-2">
                <span className="text-3xl font-black text-slate-900">تماس بگیرید</span>
              </div>

              <p className="text-xs leading-relaxed text-slate-500">
                زیرساخت اختصاصی، پایدار و امن برای برگزاری جلسات مشاوره صوتی، تصویری و متنی در بستر
                وب.
              </p>

              <div className="space-y-3.5 border-t border-slate-200 pt-6">
                <div className="flex items-center gap-2 text-xs text-slate-600">
                  <CheckCircle2 className="h-4.5 w-4.5 shrink-0 text-blue-500" />
                  <span>زیرساخت تماس تصویری و صوتی پایدار</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-600">
                  <CheckCircle2 className="h-4.5 w-4.5 shrink-0 text-blue-500" />
                  <span>چت امن برای جلسات مشاوره متنی</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-600">
                  <CheckCircle2 className="h-4.5 w-4.5 shrink-0 text-blue-500" />
                  <span>درگاه پرداخت اختصاصی جلسات آنلاین</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-600">
                  <CheckCircle2 className="h-4.5 w-4.5 shrink-0 text-blue-500" />
                  <span>سرورهای قدرتمند برای پایداری کیفیت جلسات</span>
                </div>
              </div>
            </div>

            {/*<div className="pt-8">*/}
            {/*  <a*/}
            {/*    href="tel:+982100000"*/}
            {/*    className="block rounded-xl bg-slate-800 px-4 py-3 text-center text-xs font-bold text-white transition-colors hover:bg-slate-900"*/}
            {/*  >*/}
            {/*    درخواست هماهنگی و دمو*/}
            {/*  </a>*/}
            {/*</div>*/}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
