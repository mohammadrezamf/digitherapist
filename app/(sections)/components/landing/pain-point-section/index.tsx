import React from "react";

const PainPointSection = () => {
  return (
    <section className="bg-linear-to-r from-red-300 to-pink-300 py-12 text-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="space-y-2 text-center md:text-right">
            <h3 className="text-2xl font-black">بیماران در کلینیک شما باقی نمی مانند </h3>
            <p className="max-w-2xl text-sm text-gray-600">
              بیماران به علت بی‌نظمی در نوبت‌دهی و انتظار بیش از حد در سالن انتظار کلینیک خود را
              تغییر می‌دهند. این چرخه را همین امروز با دیجی تراپیست قطع کنید.
            </p>
          </div>
          <a
            href="#demo"
            className="shrink-0 rounded-xl bg-white px-8 py-4 text-sm font-extrabold text-red-600 shadow-lg transition-all hover:bg-red-50"
          >
            ثبت‌نام و مشاوره رایگان
          </a>
        </div>
      </div>
    </section>
  );
};

export default PainPointSection;
