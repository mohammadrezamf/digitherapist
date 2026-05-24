import React from "react";

const CallToAction = () => {
  return (
    <section className="border-b border-slate-800 bg-slate-900 py-12 text-white">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-8 rounded-3xl border border-blue-500/20 bg-linear-to-l from-blue-700/20 to-indigo-800/20 p-8 md:flex-row md:p-12">
          <div className="space-y-2 text-center md:text-right">
            <h3 className="text-2xl font-black">از جدیدترین آپدیت‌ها مطلع شوید</h3>
            <p className="text-sm text-slate-400">
              هر ماه مقالات تخصصی مدیریت مطب و آخرین امکانات دیجی تراپیست را به صورت خلاصه در ایمیل
              خود دریافت کنید.
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:flex-row md:w-auto">
            <input
              type="email"
              placeholder="آدرس ایمیل شما..."
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-5 py-3 text-sm placeholder-slate-500 focus:border-blue-500 focus:outline-none sm:w-64"
            />
            <button className="shrink-0 rounded-xl bg-blue-600 px-6 py-3 text-sm font-bold whitespace-nowrap text-white transition-colors hover:bg-blue-700">
              عضویت در خبرنامه
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
