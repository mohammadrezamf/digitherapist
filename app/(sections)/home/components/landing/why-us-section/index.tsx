import React from "react";
import { BrainCircuit, Code2, Paintbrush, Target } from "lucide-react";

const WhyUsSection = () => {
  return (
    <section id="why-us" className="rounded-t-full bg-blue-100 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl space-y-5 text-center">
          <h2 className="text-3xl font-black text-slate-900 sm:text-4xl">چرا دیجی‌تراپیست؟</h2>
          <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
            دیجی‌تراپیست تنها یک نرم‌افزار مدیریت نیست؛ بلکه حاصل هم‌افزایی تیمی از متخصصان فناوری و
            روان‌شناسی است که با تمرکز ۱۰۰ درصدی، منحصراً برای رفع نیازهای این حوزه طراحی و توسعه
            یافته است.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Feature 1 */}
          <div className="rounded-2xl border border-slate-200/60 bg-white p-6 shadow-xs transition-shadow hover:shadow-md">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <Code2 className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-base font-bold text-slate-900">برنامه‌نویسان وب و موبایل</h3>
            <p className="text-xs leading-relaxed text-slate-500">
              تیمی از مهندسان نرم‌افزار که با استفاده از جدیدترین تکنولوژی‌ها، پلتفرمی سریع، امن و
              پایدار را برای شما توسعه داده‌اند.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="rounded-2xl border border-slate-200/60 bg-white p-6 shadow-xs transition-shadow hover:shadow-md">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
              <Paintbrush className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-base font-bold text-slate-900">طراحان و مدیران محصول</h3>
            <p className="text-xs leading-relaxed text-slate-500">
              طراحی رابط کاربری ساده و روان بر اساس نیازهای واقعی کاربران، تا مدیریت کلینیک به
              ساده‌ترین شکل ممکن انجام شود.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="rounded-2xl border border-slate-200/60 bg-white p-6 shadow-xs transition-shadow hover:shadow-md">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
              <BrainCircuit className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-base font-bold text-slate-900">مشاوران روان‌شناس</h3>
            <p className="text-xs leading-relaxed text-slate-500">
              حضور روان‌شناسان حرفه‌ای در تیم توسعه، تضمین می‌کند که تمامی امکانات نرم‌افزار دقیقاً
              منطبق بر نیازهای واقعی درمانگران باشد.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="rounded-2xl border border-slate-200/60 bg-white p-6 shadow-xs transition-shadow hover:shadow-md">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
              <Target className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-base font-bold text-slate-900">تمرکز کاملاً تخصصی</h3>
            <p className="text-xs leading-relaxed text-slate-500">
              برخلاف سیستم‌های عمومی، تمام تمرکز ما صرفاً روی حوزه سلامت روان است تا کامل‌ترین
              اکوسیستم روان‌شناسی را ارائه دهیم.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
