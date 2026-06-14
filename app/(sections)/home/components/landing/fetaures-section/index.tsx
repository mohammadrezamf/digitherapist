import React from "react";

import { ArrowRight } from "lucide-react";
import { features } from "@/app/(sections)/home/components/landing/constant";

const FeaturesSection = () => {
  return (
    <section id="features" className="scroll-mt-20 bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl space-y-4 text-center sm:mb-24">
          <span className="rounded-full bg-blue-50 px-3.5 py-1.5 text-sm font-extrabold tracking-wider text-blue-600 uppercase">
            امکانات حرفه‌ای
          </span>

          <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
            پلتفرم کامل مدیریت کلینیک روان‌شناسی
          </h2>

          <p className="text-lg leading-relaxed text-slate-500">
            با دیجی‌تراپیست نیاز به چندین ابزار جداگانه برای نوبت‌دهی، مدیریت پرونده، پرداخت،
            برنامه‌ریزی درمان و تحلیل عملکرد ندارید. همه‌چیز در یک سامانه یکپارچه، سریع و امن در
            اختیار شماست.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="group flex flex-col justify-between rounded-2xl border border-slate-200/60 bg-white p-8 shadow-lg shadow-blue-300 transition-all duration-300 hover:border-blue-500/30 hover:shadow-xl hover:shadow-blue-500/5"
            >
              <div className="space-y-5">
                <div
                  className={`h-12 w-12 rounded-xl ${item.bgColor} flex items-center justify-center transition-all group-hover:scale-110`}
                >
                  {item.icon}
                </div>

                <span
                  className={`inline-block rounded-md px-2.5 py-0.5 text-xs font-semibold ${item.tagColor}`}
                >
                  {item.tag}
                </span>

                <h3 className="text-xl font-bold text-slate-900 transition-colors group-hover:text-blue-600">
                  {item.title}
                </h3>

                <p className="text-sm leading-relaxed text-slate-500">{item.desc}</p>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-6 text-xs font-bold text-slate-400 transition-colors group-hover:text-blue-600">
                <span>بیشتر بدانید</span>
                <ArrowRight className="h-4 w-4 transform transition-transform group-hover:-translate-x-1" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
