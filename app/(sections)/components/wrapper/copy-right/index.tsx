import React from "react";

const CopyRight = () => {
  return (
    <div className="flex flex-col items-center justify-between gap-4 pt-8 text-[11px] text-slate-500 sm:flex-row">
      <p>© ۱۴۰۵ سامانه ابری دیجی تراپیست. تمامی حقوق مادی و معنوی برای دیجی تراپیست محفوظ است.</p>
      <div className="flex gap-4">
        <a href="#" className="hover:text-slate-300">
          قوانین و مقررات استفاده
        </a>
        <a href="#" className="hover:text-slate-300">
          سیاست حریم خصوصی مراجعین
        </a>
      </div>
    </div>
  );
};

export default CopyRight;
