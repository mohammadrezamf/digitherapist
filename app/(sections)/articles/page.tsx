import React from "react";
import Articles from "@/app/(sections)/articles/components";

const myArticles = [
  {
    id: 1,
    title: "نوبت‌دهی و زمان‌بندی آنلاین",
    description:
      "امکان رزرو، لغو و جابجایی نوبت‌ها به صورت آنلاین توسط مراجعین و مدیریت یکپارچه تقویم درمانگران کلینیک.",
    date: "۱۵ آبان ۱۴۰۲",
    badge: "نوبت‌دهی",
    imageUrl:
      "https://s3.thr1.sotoon.ir/media-fast-1/server_files/2e20a88c-6a36-4612-a6b5-1f8ddd813ef4.png",
  },
  {
    id: 2,
    title: "پرونده الکترونیک مراجعین",
    description:
      "ثبت و نگهداری امن تاریخچه پزشکی، یادداشت‌های جلسات مشاوره و سوابق مراجعین با قابلیت دسترسی سریع برای روان‌شناسان.",
    date: "۲۰ آبان ۱۴۰۲",
    badge: "پرونده سلامت",
    imageUrl: "https://gapgpt.app/media-f1/server_files/e135bc65-5179-4a22-825d-ef0f8fd35dd7.png",
  },
  {
    id: 3,
    title: "مشاوره آنلاین و ویدیویی",
    description:
      "برقراری جلسات مشاوره از راه دور با بالاترین کیفیت صدا و تصویر در بستری امن و محرمانه برای مراجعین.",
    date: "۲۵ آبان ۱۴۰۲",
    badge: "ویزیت آنلاین",
    imageUrl:
      "https://images.unsplash.com/photo-1618498082410-b4aa22193b38?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "یادآوری خودکار پیامکی",
    description:
      "ارسال پیامک‌های یادآوری نوبت به مراجعین جهت کاهش کنسلی‌ها و مدیریت بهتر زمان‌بندی جلسات کلینیک.",
    date: "۲ آذر ۱۴۰۲",
    badge: "اطلاع‌رسانی",
    imageUrl: "https://gapgpt.app/media-f1/server_files/7ce2fbce-d425-4416-9fb5-0280ab6ef6f4.png",
  },
  {
    id: 5,
    title: "مدیریت مالی و حسابداری",
    description:
      "صدور فاکتور، مدیریت پرداخت‌ها، محاسبه حق‌السهم درمانگران و ارائه گزارش‌های دقیق مالی از درآمد کلینیک.",
    date: "۱۰ آذر ۱۴۰۲",
    badge: "مالی",
    imageUrl: "https://gapgpt.app/media-f1/server_files/3c0d44d7-597f-46da-a6fc-6909d1746177.png",
  },
  {
    id: 6,
    title: "گزارش‌گیری و تحلیل آماری",
    description:
      "دسترسی به نمودارها و آمارهای جامع از عملکرد کلینیک، تعداد مراجعین و میزان رضایت‌مندی برای تصمیم‌گیری بهتر.",
    date: "۱۸ آذر ۱۴۰۲",
    badge: "آمار و گزارش",
    imageUrl: "https://gapgpt.app/media-f1/server_files/25c8a3da-850e-4243-b273-c9c851405101.png",
  },
];

const ArticlesPage = () => {
  return <Articles articles={myArticles} />;
};

export default ArticlesPage;
