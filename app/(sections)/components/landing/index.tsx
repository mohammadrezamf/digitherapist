'use client'

import {useState} from 'react';
import {
    Activity,
    ArrowRight,
    BarChart3,
    Calendar,
    CheckCircle2,
    ChevronDown,
    FolderLock,
    Menu,
    MousePointerClick,
    Phone,
    PieChart,
    Sparkles,
    UserCircle2,
    Users,
    X
} from 'lucide-react';

export default function Landing() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeFaq, setActiveFaq] = useState(null);
    const [beforeAfterValue, setBeforeAfterValue] = useState(50);
    const [billingPeriod, setBillingPeriod] = useState('yearly'); // 'monthly' or 'yearly'

    const features = [
        {
            icon: <Calendar className="w-6 h-6 text-indigo-600"/>,
            tag: "مدیریت جلسات",
            title: "نوبت‌دهی و زمان‌بندی آنلاین",
            desc: "مدیریت یکپارچه جلسات حضوری و آنلاین، تعیین ظرفیت روان‌شناسان و جلوگیری از تداخل نوبت‌ها با رزرو آسان برای مراجعین.",
            bgColor: "bg-indigo-50",
            tagColor: "bg-indigo-100 text-indigo-800"
        },
        {
            icon: <FolderLock className="w-6 h-6 text-purple-600"/>,
            tag: "مدیریت درمان",
            title: "پرونده دیجیتال مراجع",
            desc: "ثبت امن سوابق، یادداشت‌های درمانی، نتایج تست‌های روان‌شناسی و روند پیشرفت مراجع با دسترسی سریع برای تیم درمان.",
            bgColor: "bg-purple-50",
            tagColor: "bg-purple-100 text-purple-800"
        },
        {
            icon: <UserCircle2 className="w-6 h-6 text-blue-600"/>,
            tag: "برندینگ شخصی",
            title: "وبسایت اختصاصی روان‌شناس",
            desc: "ساخت صفحه حرفه‌ای برای هر روان‌شناس شامل معرفی، تخصص‌ها، سوابق علمی و لینک مستقیم رزرو نوبت.",
            bgColor: "bg-blue-50",
            tagColor: "bg-blue-100 text-blue-800"
        },
        {
            icon: <PieChart className="w-6 h-6 text-pink-600"/>,
            tag: "تحلیل پیشرفته",
            title: "نقشه ماندگاری درمان",
            desc: "تحلیل دقیق ریزش مراجعان و بررسی روند جلسات برای بهبود نرخ بازگشت مراجعین و استمرار درمان.",
            bgColor: "bg-pink-50",
            tagColor: "bg-pink-100 text-pink-800"
        },
        {
            icon: <Users className="w-6 h-6 text-amber-600"/>,
            tag: "مدیریت منابع",
            title: "نقشه ظرفیت روان‌شناسان",
            desc: "نمایش بصری بار کاری هر درمانگر برای توزیع بهینه مراجعان و مدیریت حرفه‌ای ظرفیت کلینیک.",
            bgColor: "bg-amber-50",
            tagColor: "bg-amber-100 text-amber-800"
        },
        {
            icon: <BarChart3 className="w-6 h-6 text-emerald-600"/>,
            tag: "گزارش مدیریتی",
            title: "داشبورد تحلیلی هوشمند",
            desc: "گزارش‌های جامع از میزان تعامل مراجعان، درآمد کلینیک، شاخص‌های عملکرد درمانگران و وضعیت سلامت کلینیک.",
            bgColor: "bg-emerald-50",
            tagColor: "bg-emerald-100 text-emerald-800"
        }
    ];

    const faqs = [
        {
            question: "آیا دیجی‌تراپیست برای کلینیک‌های بزرگ مناسب است؟",
            answer: "بله، دیجی‌تراپیست طوری طراحی شده که هم برای روان‌شناسان مستقل و هم برای مراکز مشاوره و کلینیک‌های بزرگ با چندین درمانگر کاملاً بهینه است."
        },
        {
            question: "آیا امکان ساخت صفحه اختصاصی برای هر درمانگر وجود دارد؟",
            answer: "بله، شما می‌توانید برای هر یک از روان‌شناسان مجموعه، یک وبسایت شخصی شامل رزومه، تخصص‌ها و تقویم نوبت‌دهی مستقل ایجاد کنید."
        },
        {
            question: "سیستم نوبت‌دهی برای جلسات آنلاین هم کاربرد دارد؟",
            answer: "کاملاً. سیستم نوبت‌دهی دیجی‌تراپیست برای هر دو مدل جلسات حضوری و آنلاین طراحی شده و قابلیت‌های هماهنگی و یادآوری دقیق برای هر دو نوع را دارد."
        },
        {
            question: "امنیت اطلاعات و حریم خصوصی مراجعین چگونه تأمین می‌شود؟",
            answer: "امنیت داده‌های حساس روان‌شناسی اولویت ماست. تمامی اطلاعات در سرورهای ابری امن با پروتکل‌های رمزنگاری پیشرفته نگهداری می‌شوند و دسترسی‌ها کاملاً سطح‌بندی شده است."
        }
    ];

    const toggleFaq = (index) => {
        if (activeFaq === index) {
            setActiveFaq(null);
        } else {
            setActiveFaq(index);
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 text-slate-800  selection:bg-blue-600 selection:text-white"
             dir="rtl">
            <div
                className="bg-linear-to-l from-blue-700 to-indigo-800 text-white text-xs sm:text-sm py-2 px-4 text-center font-medium relative z-50">
                <span className="inline-block bg-blue-500/30 text-blue-200 px-2.5 py-0.5 rounded-full ml-2 text-xs">
جدید
                </span>
                نسخه ۵.۲ دیجی‌تراپیست با داشبورد تحلیلی پیشرفته کلینیک‌های روان‌شناسی منتشر شد!
                <a href="#demo" className="underline mr-2 hover:text-bl-200 transition-colors">
                    درخواست دمو رایگان
                </a>
            </div>

            {/* Header */}
            <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-100 transition-all">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">

                        {/* Logo and Nav links */}
                        <div className="flex items-center gap-10">
                            <a href="#" className="flex items-center gap-3">
                                <div
                                    className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20 text-white font-black text-xl">
                                    د
                                </div>
                                <div className="flex flex-col">
                                    <span
                                        className="font-bold text-xl text-slate-900 tracking-tight">دیجی‌تراپیست</span>
                                    <span
                                        className="text-[10px] text-blue-600 font-medium -mt-1 tracking-wider">DigiTherapist</span>
                                </div>
                            </a>

                            {/* Desktop Nav */}
                            <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
                                <a href="#features" className="hover:text-blue-600 transition-colors">امکانات سیستم</a>
                                <a href="#why-us" className="hover:text-blue-600 transition-colors">چرا دیجی
                                    تراپیست؟</a>
                                <a href="#before-after" className="hover:text-blue-600 transition-colors">محیط
                                    کاربری</a>
                                <a href="#pricing" className="hover:text-blue-600 transition-colors">تعرفه‌ها</a>
                                <a href="#faq" className="hover:text-blue-600 transition-colors">سوالات متداول</a>
                            </nav>
                        </div>

                        {/* CTA Actions */}
                        <div className="hidden sm:flex items-center gap-4">
                            <a href="#login"
                               className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors px-3 py-2">
                                ورود به پنل
                            </a>
                            <a href="#demo"
                               className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-md shadow-blue-500/10 hover:shadow-lg transition-all transform hover:-translate-y-0.5">
                                شروع رایگان (۱۴ روز)
                            </a>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
                        >
                            {mobileMenuOpen ? <X className="w-6 h-6"/> : <Menu className="w-6 h-6"/>}
                        </button>
                    </div>
                </div>

                {mobileMenuOpen && (
                    <div className="md:hidden bg-white border-b border-slate-100 px-4 pt-2 pb-6 space-y-3 shadow-lg">
                        <a
                            href="#features"
                            onClick={() => setMobileMenuOpen(false)}
                            className="block px-3 py-2 rounded-lg text-slate-700 hover:bg-slate-50 font-medium"
                        >
                            امکانات سیستم
                        </a>
                        <a
                            href="#why-us"
                            onClick={() => setMobileMenuOpen(false)}
                            className="block px-3 py-2 rounded-lg text-slate-700 hover:bg-slate-50 font-medium"
                        >
                            چرا دیجی‌تراپیست؟
                        </a>
                        <a
                            href="#before-after"
                            onClick={() => setMobileMenuOpen(false)}
                            className="block px-3 py-2 rounded-lg text-slate-700 hover:bg-slate-50 font-medium"
                        >
                            محیط کاربری
                        </a>
                        <a
                            href="#pricing"
                            onClick={() => setMobileMenuOpen(false)}
                            className="block px-3 py-2 rounded-lg text-slate-700 hover:bg-slate-50 font-medium"
                        >
                            تعرفه‌ها
                        </a>
                        <a
                            href="#faq"
                            onClick={() => setMobileMenuOpen(false)}
                            className="block px-3 py-2 rounded-lg text-slate-700 hover:bg-slate-50 font-medium"
                        >
                            سوالات متداول
                        </a>

                        <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
                            <a
                                href="#login"
                                className="w-full text-center py-2.5 rounded-lg border border-slate-200 text-slate-700 font-semibold"
                            >
                                ورود به پنل
                            </a>
                            <a
                                href="#demo"
                                className="w-full text-center py-2.5 rounded-lg bg-blue-600 text-white font-bold"
                            >
                                شروع رایگان (۱۴ روز)
                            </a>
                        </div>
                    </div>
                )}
            </header>

            {/* Hero Section */}
            <section
                className="relative overflow-hidden pt-12 pb-24 lg:pt-20 lg:pb-32 bg-linear-to-b from-white to-blue-50/30"
            >

                {/* Background elements */}
                <div
                    className="absolute top-0 right-1/4 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl pointer-events-none"/>
                <div
                    className="absolute bottom-10 left-1/4 w-72 h-72 bg-indigo-200/30 rounded-full blur-3xl pointer-events-none"/>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">

                        {/* Hero Text */}
                        <div className="lg:col-span-7 space-y-8 text-center lg:text-right">

                            <div
                                className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-xs font-semibold">
                                <Sparkles className="w-4 h-4 text-blue-600 animate-pulse"/>
                                پرکاربردترین سامانه ابری مدیریت کلینیک‌های روان‌شناسی در سال ۱۴۰۵
                            </div>

                            <h1 className="text-4xl sm:text-5xl lg:text-4xl font-black text-slate-900 leading-[1.2] lg:leading-[1.15]">
                                مدیریت هوشمند جلسات درمانی، <br/>
                                <span
                                    className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600">
            افزایش ماندگاری مراجعان
          </span>
                            </h1>

                            <p className="text-slate-600 text-lg sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
                                با <strong>دیجی‌تراپیست</strong> فرآیندهای پیچیده و دستی مدیریت کلینیک روان‌شناسی را
                                کنار بگذارید. از نوبت‌دهی هوشمند تا پرونده درمانی دیجیتال، تحلیل پیشرفت درمان،
                                ماژول ریزش مراجعان، نقشه ظرفیت درمانگران و داشبورد تحلیلی دقیق—all in one.
                            </p>

                            <div
                                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                                <a
                                    href="#demo"
                                    className="w-full sm:w-auto text-center bg-blue-600 hover:bg-blue-700 text-white font-extrabold px-8 py-4 rounded-xl shadow-lg shadow-blue-500/20 transition-all transform hover:-translate-y-1">
                                    درخواست دموی رایگان
                                </a>
                                <a
                                    href="#features"
                                    className="w-full sm:w-auto text-center bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 font-bold px-8 py-4 rounded-xl transition-all shadow-sm hover:shadow-md">
                                    مشاهده امکانات و ماژول‌ها
                                </a>
                            </div>

                            {/* Trust & Social Proof Stats */}
                            <div
                                className="pt-8 border-t border-slate-200/60 grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0">
                                <div className="text-center lg:text-right">
                                    <div className="text-2xl sm:text-3xl font-black text-slate-950">۱,۲۰۰+</div>
                                    <div className="text-xs text-slate-500 mt-1">روان‌شناس فعال</div>
                                </div>
                                <div className="text-center lg:text-right border-x border-slate-200 px-2">
                                    <div className="text-2xl sm:text-3xl font-black text-slate-950">۹۸٪</div>
                                    <div className="text-xs text-slate-500 mt-1">رضایت کلینیک‌ها</div>
                                </div>
                                <div className="text-center lg:text-right">
                                    <div className="text-2xl sm:text-3xl font-black text-slate-950">۴.۹/۵</div>
                                    <div className="text-xs text-slate-500 mt-1">رضایت مراجعین</div>
                                </div>
                            </div>

                        </div>

                        {/* Hero Illustration / Mockup */}
                        <div className="lg:col-span-5 relative flex justify-center">
                            <div className="relative w-full max-w-115">

                                {/* Decorative glowing backdrops */}
                                <div
                                    className="absolute inset-0 bg-linear-to-tr from-blue-500 to-indigo-500 rounded-3xl transform rotate-3 scale-95 opacity-10 blur-xl"/>

                                {/* Main Mockup Card */}
                                <div className="relative bg-white border border-slate-100 rounded-3xl p-6 shadow-2xl">
                                    <div
                                        className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4">
                                        <div className="flex items-center gap-2">
                                            <div className="w-3 h-3 rounded-full bg-red-400"/>
                                            <div className="w-3 h-3 rounded-full bg-amber-400"/>
                                            <div className="w-3 h-3 rounded-full bg-green-400"/>
                                        </div>
                                        <span className="text-xs font-semibold text-slate-400">
                داشبورد کلینیک دیجی‌تراپیست
              </span>
                                    </div>

                                    {/* Simulated App Screen */}
                                    <div className="space-y-4">

                                        {/* Next Appointment */}
                                        <div className="bg-slate-50 p-3 rounded-2xl flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <div
                                                    className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
                                                    م
                                                </div>
                                                <div>
                                                    <p className="text-xs text-slate-500">مراجع بعدی</p>
                                                    <p className="text-sm font-bold text-slate-800">
                                                        الهام توسلی – اضطراب عمومی
                                                    </p>
                                                </div>
                                            </div>
                                            <span
                                                className="text-xs bg-emerald-100 text-emerald-800 px-2 py-1 rounded-md font-semibold">
                  ساعت ۱۴:۳۰
                </span>
                                        </div>

                                        {/* Chart simulation */}
                                        <div className="border border-slate-100 rounded-2xl p-4">
                                            <div className="flex items-center justify-between mb-3">
                                                <span
                                                    className="text-xs font-bold text-slate-700">میزان مراجعه این هفته</span>
                                                <span
                                                    className="text-[10px] text-blue-600 font-semibold">پیک: دوشنبه</span>
                                            </div>

                                            <div className="flex items-end justify-between h-20 pt-2 px-2">
                                                <div className="w-5 bg-blue-200 rounded-t-sm h-[40%]"/>
                                                <div className="w-5 bg-blue-200 rounded-t-sm h-[60%]"/>
                                                <div className="w-5 bg-blue-600 rounded-t-sm h-[90%] relative">
                    <span
                        className="absolute -top-6 left-1/2 -translate-x-1/2 text-[9px] bg-slate-800 text-white px-1.5 py-0.5 rounded font-mono font-bold">
                      ۹۲٪
                    </span>
                                                </div>
                                                <div className="w-5 bg-blue-200 rounded-t-sm h-[50%]"/>
                                                <div className="w-5 bg-indigo-500 rounded-t-sm h-[75%]"/>
                                                <div className="w-5 bg-blue-200 rounded-t-sm h-[30%]"/>
                                            </div>
                                        </div>

                                        {/* Quick Stat badges */}
                                        <div className="grid grid-cols-2 gap-3">
                                            <div className="bg-indigo-50/50 p-3 rounded-xl border border-indigo-100/30">
                                                <p className="text-[10px] text-slate-500">جلسات امروز</p>
                                                <p className="text-lg font-black text-indigo-700">۳۴ جلسه</p>
                                            </div>
                                            <div
                                                className="bg-emerald-50/50 p-3 rounded-xl border border-emerald-100/30">
                                                <p className="text-[10px] text-slate-500">میزان ادامه درمان</p>
                                                <p className="text-lg font-black text-emerald-700">۸۸٪</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Floating elements */}
                                <div
                                    className="absolute -top-6 -right-6 bg-white p-3 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 animate-bounce"
                                    style={{animationDuration: "4s"}}
                                >
                                    <div
                                        className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white">
                                        <CheckCircle2 className="w-5 h-5"/>
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-slate-400">یادآوری جلسه ارسال شد</p>
                                        <p className="text-xs font-bold text-slate-800">مریم شریفی – فردا ۱۰ صبح</p>
                                    </div>
                                </div>

                                <div
                                    className="absolute -bottom-6 -left-6 bg-slate-900 text-white p-3.5 rounded-2xl shadow-xl flex items-center gap-3"
                                >
                                    <div
                                        className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
                                        <Activity className="w-5 h-5 text-white"/>
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
            {/* Core Features Grid Section */}
            <section id="features" className="py-20 sm:py-28 bg-white scroll-mt-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 sm:mb-24">
      <span
          className="text-blue-600 font-extrabold text-sm tracking-wider uppercase bg-blue-50 px-3.5 py-1.5 rounded-full">
        امکانات حرفه‌ای
      </span>

                        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                            پلتفرم کامل مدیریت کلینیک روان‌شناسی
                        </h2>

                        <p className="text-slate-500 text-lg leading-relaxed">
                            با دیجی‌تراپیست نیاز به چندین ابزار جداگانه برای نوبت‌دهی، مدیریت پرونده،
                            پرداخت، برنامه‌ریزی درمان و تحلیل عملکرد ندارید. همه‌چیز در یک سامانه
                            یکپارچه، سریع و امن در اختیار شماست.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((item, idx) => (
                            <div
                                key={idx}
                                className="group p-8 rounded-2xl border border-slate-200/60 bg-white hover:border-blue-500/30 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 flex flex-col justify-between"
                            >
                                <div className="space-y-5">
                                    <div
                                        className={`w-12 h-12 rounded-xl ${item.bgColor} flex items-center justify-center transition-all group-hover:scale-110`}>
                                        {item.icon}
                                    </div>

                                    <span
                                        className={`inline-block px-2.5 py-0.5 rounded-md text-xs font-semibold ${item.tagColor}`}>
              {item.tag}
            </span>

                                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                                        {item.title}
                                    </h3>

                                    <p className="text-slate-500 text-sm leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>

                                <div
                                    className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-400 group-hover:text-blue-600 transition-colors">
                                    <span>بیشتر بدانید</span>
                                    <ArrowRight
                                        className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform"/>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* Stats and Highlights Banner */}
            <section
                id="why-us"
                className="bg-linear-to-l from-slate-900 to-indigo-950 text-white py-20 sm:py-28 relative overflow-hidden scroll-mt-20"
            >
                <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl"/>
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl"/>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">

                        {/* Stats */}
                        <div className="lg:col-span-5 grid grid-cols-2 gap-4 sm:gap-6 order-2 lg:order-1">

                            <div
                                className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
                                <span className="text-3xl sm:text-4xl font-black text-blue-400">۱۲۰۰+</span>
                                <h4 className="text-sm font-bold text-white mt-2">روان‌شناس فعال</h4>
                                <p className="text-xs text-slate-400 mt-1">از سراسر کشور در حال استفاده</p>
                            </div>

                            <div
                                className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
                                <span className="text-3xl sm:text-4xl font-black text-indigo-400">۳۰۰+</span>
                                <h4 className="text-sm font-bold text-white mt-2">کلینیک و مرکز مشاوره</h4>
                                <p className="text-xs text-slate-400 mt-1">درمانگاه‌های کوچک و بزرگ</p>
                            </div>

                            <div
                                className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
                                <span className="text-3xl sm:text-4xl font-black text-emerald-400">۹۹.۹٪</span>
                                <h4 className="text-sm font-bold text-white mt-2">پایداری سرورها</h4>
                                <p className="text-xs text-slate-400 mt-1">بدون قطعی و از دست رفتن داده</p>
                            </div>

                            <div
                                className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
                                <span className="text-3xl sm:text-4xl font-black text-pink-400">۲۴/۷</span>
                                <h4 className="text-sm font-bold text-white mt-2">پشتیبانی همیشگی</h4>
                                <p className="text-xs text-slate-400 mt-1">آنلاین، تلفنی و اختصاصی</p>
                            </div>

                        </div>

                        {/* Text */}
                        <div className="lg:col-span-7 space-y-6 lg:pr-10 order-1 lg:order-2">
        <span
            className="text-blue-400 font-extrabold text-xs uppercase tracking-wider bg-blue-500/10 px-3.5 py-1.5 rounded-full">
          چرا دیجی‌تراپیست؟
        </span>

                            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
                                تحول اساسی در مدیریت کلینیک‌های روان‌شناسی
                            </h2>

                            <p className="text-slate-300 text-lg leading-relaxed">
                                هدف ما این است که درمانگران وقت خود را صرف درمان کنند، نه کارهای اداری.
                                دیجی‌تراپیست فرآیندهای مهم مانند نوبت‌دهی، مدیریت پرونده درمانی، پرداخت‌ها،
                                پیگیری درمان و تحلیل عملکرد کلینیک را تا حد ممکن خودکار می‌کند.
                            </p>

                            <div className="space-y-4 pt-4 border-t border-white/10">
                                <div className="flex items-start gap-3">
                                    <div
                                        className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                                        <CheckCircle2 className="w-4 h-4"/>
                                    </div>
                                    <p className="text-slate-300 text-sm">
                                        آموزش کامل برای منشی‌ها و درمانگران تا تسلط کامل روی سیستم.
                                    </p>
                                </div>

                                <div className="flex items-start gap-3">
                                    <div
                                        className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                                        <CheckCircle2 className="w-4 h-4"/>
                                    </div>
                                    <p className="text-slate-300 text-sm">
                                        ارسال خودکار پیامک یادآوری جلسات و پیگیری درمان برای کاهش لغو نوبت‌ها.
                                    </p>
                                </div>

                                <div className="flex items-start gap-3">
                                    <div
                                        className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                                        <CheckCircle2 className="w-4 h-4"/>
                                    </div>
                                    <p className="text-slate-300 text-sm">
                                        دسترسی سریع روان‌شناسان به برنامه جلسات و اطلاعات مراجعان از طریق موبایل و وب.
                                    </p>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>
            <section id="before-after" className="py-20 sm:py-28 bg-slate-50 scroll-mt-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
                        <span
                            className="text-blue-600 font-extrabold text-sm uppercase bg-blue-100/50 px-3.5 py-1.5 rounded-full">تحول عینی و ملموس</span>
                        <h2 className="text-3xl sm:text-4xl font-black text-slate-900">مطب شما قبل و بعد از دندانو</h2>
                        <p className="text-slate-500 text-md">
                            اسلایدر زیر را حرکت دهید و تفاوت چشمگیر مدیریت مدرن ابری را با روش‌های سنتی و دستی گذشته
                            مقایسه کنید:
                        </p>
                    </div>

                    {/* Interactive Slider Container */}
                    <div
                        className="max-w-4xl mx-auto relative bg-white border border-slate-200 p-4 sm:p-6 rounded-3xl shadow-xl overflow-hidden">

                        <div className="relative h-85 sm:h-100 w-full rounded-2xl overflow-hidden select-none">

                            {/* "BEFORE" Slide (Traditional Chaos) */}
                            <div className="absolute inset-0 bg-slate-100 p-6 flex flex-col justify-between">
                                <div
                                    className="absolute top-4 left-4 bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-bold shadow-sm z-20">
                                    قبل از دندانو (روش سنتی)
                                </div>

                                <div className="grid grid-cols-2 gap-4 mt-8 opacity-60">
                                    <div className="bg-white p-4 rounded-xl border border-red-200">
                                        <p className="text-xs text-red-600 font-bold mb-1">پرونده کاغذی گم شده!</p>
                                        <p className="text-xs text-slate-500">منشی ۲۰ دقیقه دنبال پرونده سوابق بیمار
                                            می‌گردد...</p>
                                    </div>
                                    <div className="bg-white p-4 rounded-xl border border-red-200">
                                        <p className="text-xs text-red-600 font-bold mb-1">تداخل شدید نوبت‌ها</p>
                                        <p className="text-xs text-slate-500">سه بیمار همزمان برای ساعت ۱۶ نوبت داده
                                            شده‌اند!</p>
                                    </div>
                                    <div className="bg-white p-4 rounded-xl border border-red-200">
                                        <p className="text-xs text-red-600 font-bold mb-1">انبار پرهزینه و نامعلوم</p>
                                        <p className="text-xs text-slate-500">وسط جراحی متوجه اتمام مواد قالب‌گیری
                                            می‌شویم.</p>
                                    </div>
                                    <div className="bg-white p-4 rounded-xl border border-red-200">
                                        <p className="text-xs text-red-600 font-bold mb-1">حساب‌های درهم‌ریخته</p>
                                        <p className="text-xs text-slate-500">مشخص نیست چه میزان سود خالص و بدهی‌های
                                            معوق داریم.</p>
                                    </div>
                                </div>

                                <div className="text-center pb-4">
                                    <p className="text-red-700 font-black text-lg">کاهش بازدهی، خستگی کادر درمان و عدم
                                        رضایت بیماران</p>
                                </div>
                            </div>

                            {/* "AFTER" Slide (Modernized Dandano) */}
                            <div
                                className="absolute inset-0 bg-linear-to-tr from-blue-900 to-indigo-900 p-6 flex flex-col justify-between text-white"
                                style={{clipPath: `polygon(0 0, ${beforeAfterValue}% 0, ${beforeAfterValue}% 100%, 0 100%)`}}
                            >
                                <div
                                    className="absolute top-4 right-4 bg-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-sm z-20">
                                    بعد از دندانو (مدیریت ابری)
                                </div>

                                <div className="grid grid-cols-2 gap-4 mt-8">
                                    <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                                        <p className="text-xs text-emerald-400 font-bold mb-1 flex items-center gap-1.5">
                                            <CheckCircle2 className="w-3.5 h-3.5"/> جستجو در کسری از ثانیه
                                        </p>
                                        <p className="text-xs text-slate-200">تمام سوابق درمانی و مالی بیمار با یک کلیک
                                            آماده است.</p>
                                    </div>
                                    <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                                        <p className="text-xs text-emerald-400 font-bold mb-1 flex items-center gap-1.5">
                                            <CheckCircle2 className="w-3.5 h-3.5"/> نوبت‌دهی خودکار پیامکی
                                        </p>
                                        <p className="text-xs text-slate-200">پنل مراجعین یکپارچه و بهینه بدون کوچکترین
                                            تداخل نوبتی.</p>
                                    </div>
                                    <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                                        <p className="text-xs text-emerald-400 font-bold mb-1 flex items-center gap-1.5">
                                            <CheckCircle2 className="w-3.5 h-3.5"/> مانیتورینگ آنلاین انبار
                                        </p>
                                        <p className="text-xs text-slate-200">اعلام خودکار اتمام سریع مواد مصرفی
                                            دندانپزشکی.</p>
                                    </div>
                                    <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                                        <p className="text-xs text-emerald-400 font-bold mb-1 flex items-center gap-1.5">
                                            <CheckCircle2 className="w-3.5 h-3.5"/> گزارش‌های مالی هوشمند
                                        </p>
                                        <p className="text-xs text-slate-200">نمودارهای دقیق درصد پزشکان، سود خالص و
                                            هزینه‌های جاری.</p>
                                    </div>
                                </div>

                                <div className="text-center pb-4">
                                    <p className="text-emerald-400 font-black text-lg flex items-center justify-center gap-2">
                                        <Sparkles className="w-5 h-5 animate-pulse"/> مراجعین منظم‌تر و کادر درمانی
                                        پرانرژی‌تر
                                    </p>
                                </div>
                            </div>

                            {/* Slider Controller Line */}
                            <div
                                className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-30 shadow-lg"
                                style={{left: `${beforeAfterValue}%`}}
                            >
                                <div
                                    className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white border-4 border-white shadow-xl">
                                    <MousePointerClick className="w-4 h-4 animate-pulse"/>
                                </div>
                            </div>

                        </div>

                        {/* Standard Range Input to simulate the drag effect effortlessly */}
                        <div className="mt-6 flex items-center gap-4">
                            <span className="text-xs font-bold text-slate-400">سنتی</span>
                            <input
                                type="range"
                                min="0"
                                max="100"
                                value={beforeAfterValue}
                                onChange={(e) => setBeforeAfterValue(e.target.value)}
                                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                            />
                            <span className="text-xs font-bold text-blue-600">با دندانو</span>
                        </div>

                    </div>

                </div>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="py-20 sm:py-28 bg-white scroll-mt-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="text-center max-w-2xl mx-auto space-y-4 mb-12">
                        <span
                            className="text-blue-600 font-extrabold text-sm uppercase bg-blue-50 px-3.5 py-1.5 rounded-full">تعرفه‌های شفاف و منعطف</span>
                        <h2 className="text-3xl sm:text-4xl font-black text-slate-900">پرداخت به اندازه نیاز کلینیک
                            شما</h2>
                        <p className="text-slate-500 text-md">
                            بدون هزینه‌های پنهان یا اجباری؛ پکیج مناسب کار خود را انتخاب کنید و هر زمان مایل بودید آن را
                            ارتقا دهید.
                        </p>

                        {/* Billing toggle */}
                        <div className="inline-flex items-center gap-1 bg-slate-100 p-1.5 rounded-xl mt-4">
                            <button
                                onClick={() => setBillingPeriod('monthly')}
                                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${billingPeriod === 'monthly' ? 'bg-white text-slate-950 shadow-sm' : 'text-slate-500 hover:text-slate-800'}`}
                            >
                                پرداخت ماهانه
                            </button>
                            <button
                                onClick={() => setBillingPeriod('yearly')}
                                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${billingPeriod === 'yearly' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-500 hover:text-slate-800'}`}
                            >
                                پرداخت سالانه <span
                                className="bg-emerald-500 text-white text-[10px] px-1.5 py-0.5 rounded-md font-semibold">۲۰٪ تخفیف</span>
                            </button>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">

                        {/* Standard Tier */}
                        <div
                            className="bg-slate-50 border border-slate-200/80 p-8 rounded-3xl flex flex-col justify-between hover:shadow-xl transition-all relative">
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900">پنل مطب شخصی</h3>
                                    <p className="text-xs text-slate-400 mt-1">ایده‌آل برای دندانپزشکان تک‌مطب</p>
                                </div>

                                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-black text-slate-900">
                    {billingPeriod === 'yearly' ? '۱,۹۰۰,۰۰۰' : '۱۹۰,۰۰۰'}
                  </span>
                                    <span
                                        className="text-slate-500 text-xs">تومان / {billingPeriod === 'yearly' ? 'سالانه' : 'ماهانه'}</span>
                                </div>

                                <p className="text-xs text-slate-500 leading-relaxed">
                                    مناسب برای مدیریت آسان پرونده‌ها و بیماران در مطب‌های شخصی کوچک.
                                </p>

                                <div className="space-y-3.5 pt-6 border-t border-slate-200">
                                    <div className="flex items-center gap-2 text-xs text-slate-600">
                                        <CheckCircle2 className="w-4.5 h-4.5 text-blue-500 shrink-0"/>
                                        <span>پذیرش و تشکیل پرونده الکترونیک</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs text-slate-600">
                                        <CheckCircle2 className="w-4.5 h-4.5 text-blue-500 shrink-0"/>
                                        <span>سیستم نوبت‌دهی آنلاین اختصاصی</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs text-slate-600">
                                        <CheckCircle2 className="w-4.5 h-4.5 text-blue-500 shrink-0"/>
                                        <span>ارسال پیامک یادآوری نوبت‌ها</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs text-slate-600">
                                        <CheckCircle2 className="w-4.5 h-4.5 text-blue-500 shrink-0"/>
                                        <span>پشتیبانی تیکتی و آنلاین</span>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-8">
                                <a href="#demo"
                                   className="block text-center bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 font-bold py-3 px-4 rounded-xl text-xs transition-colors">
                                    شروع دوره آزمایشی رایگان
                                </a>
                            </div>
                        </div>

                        {/* Pro Tier (Popular) */}
                        <div
                            className="bg-linear-to-b from-blue-900 to-indigo-950 text-white p-8 rounded-3xl flex flex-col justify-between hover:shadow-2xl transition-all relative transform md:-translate-y-4 border-2 border-blue-500">
                            <div
                                className="absolute -top-4 right-1/2 translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-[10px] font-extrabold tracking-widest uppercase shadow-md">
                                پیشنهاد دندانو
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-xl font-bold">کلینیک متوسط و پرجمعیت</h3>
                                    <p className="text-xs text-blue-200 mt-1">بیشترین انتخاب در کلینیک‌های پرتردد</p>
                                </div>

                                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-black text-white">
                    {billingPeriod === 'yearly' ? '۴,۵۰۰,۰۰۰' : '۴۵۰,۰۰۰'}
                  </span>
                                    <span
                                        className="text-blue-200 text-xs">تومان / {billingPeriod === 'yearly' ? 'سالانه' : 'ماهانه'}</span>
                                </div>

                                <p className="text-xs text-blue-200/80 leading-relaxed">
                                    پکیج جامع با تمامی قابلیت‌های مدیریتی، مالی، انبار و وب‌سایت نوبت‌دهی آنلاین.
                                </p>

                                <div className="space-y-3.5 pt-6 border-t border-white/10">
                                    <div className="flex items-center gap-2 text-xs text-slate-100">
                                        <CheckCircle2 className="w-4.5 h-4.5 text-emerald-400 shrink-0"/>
                                        <span>تمام ویژگی‌های پنل مطب شخصی</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs text-slate-100">
                                        <CheckCircle2 className="w-4.5 h-4.5 text-emerald-400 shrink-0"/>
                                        <span>ماژول انبارداری و ثبت مواد مصرفی</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs text-slate-100">
                                        <CheckCircle2 className="w-4.5 h-4.5 text-emerald-400 shrink-0"/>
                                        <span>سیستم جامع حسابداری کلینیک</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs text-slate-100">
                                        <CheckCircle2 className="w-4.5 h-4.5 text-emerald-400 shrink-0"/>
                                        <span>محاسبه اتوماتیک پورسانت پزشکان</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs text-slate-100">
                                        <CheckCircle2 className="w-4.5 h-4.5 text-emerald-400 shrink-0"/>
                                        <span>پشتیبانی تلفنی و اولویت‌دار ۲۴ ساعته</span>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-8">
                                <a href="#demo"
                                   className="block text-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-xl text-xs transition-colors shadow-lg shadow-blue-500/30">
                                    خرید و ارتقا به پنل کلینیک
                                </a>
                            </div>
                        </div>

                        {/* Enterprise Tier */}
                        <div
                            className="bg-slate-50 border border-slate-200/80 p-8 rounded-3xl flex flex-col justify-between hover:shadow-xl transition-all">
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900">کلینیک بزرگ / چندشعبه‌ای</h3>
                                    <p className="text-xs text-slate-400 mt-1">پنل تمام سفارشی و نامحدود</p>
                                </div>

                                <div className="py-2">
                                    <span className="text-3xl font-black text-slate-900">تماس بگیرید</span>
                                </div>

                                <p className="text-xs text-slate-500 leading-relaxed">
                                    دارای سرور کاملاً اختصاصی، امنیت پیشرفته نظامی، و قابلیت شخصی‌سازی بر اساس فرآیندها.
                                </p>

                                <div className="space-y-3.5 pt-6 border-t border-slate-200">
                                    <div className="flex items-center gap-2 text-xs text-slate-600">
                                        <CheckCircle2 className="w-4.5 h-4.5 text-blue-500 shrink-0"/>
                                        <span>تمام ویژگی‌های پنل کلینیک متوسط</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs text-slate-600">
                                        <CheckCircle2 className="w-4.5 h-4.5 text-blue-500 shrink-0"/>
                                        <span>فضای ذخیره‌سازی نامحدود تصاویر درمان</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs text-slate-600">
                                        <CheckCircle2 className="w-4.5 h-4.5 text-blue-500 shrink-0"/>
                                        <span>پنل مدیریت شعب زنجیره‌ای مجزا</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs text-slate-600">
                                        <CheckCircle2 className="w-4.5 h-4.5 text-blue-500 shrink-0"/>
                                        <span>کارشناس استقرار اختصاصی در محل شما</span>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-8">
                                <a href="tel:+982100000"
                                   className="block text-center bg-slate-800 hover:bg-slate-900 text-white font-bold py-3 px-4 rounded-xl text-xs transition-colors">
                                    درخواست هماهنگی و مشاوره دمو
                                </a>
                            </div>
                        </div>

                    </div>

                </div>
            </section>

            {/* Pain Point Callout Section */}
            <section className="bg-linear-to-r from-red-500 to-pink-600 text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="space-y-2 text-center md:text-right">
                            <h3 className="text-2xl font-black">بیماران از کلینیک شما فرار می‌کنند؟</h3>
                            <p className="text-sm text-red-100 max-w-2xl">
                                بر طبق آمار، ۴۷٪ بیماران به علت بی‌نظمی در نوبت‌دهی و انتظار بیش از حد در سالن انتظار
                                کلینیک خود را تغییر می‌دهند. این چرخه را همین امروز با دندانو قطع کنید.
                            </p>
                        </div>
                        <a href="#demo"
                           className="bg-white text-red-600 hover:bg-red-50 font-extrabold px-8 py-4 rounded-xl text-sm transition-all shadow-lg shrink-0">
                            ثبت‌نام و مشاوره رایگان
                        </a>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="py-20 sm:py-28 bg-white scroll-mt-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6">

                    <div className="text-center space-y-4 mb-16">
                        <span
                            className="text-blue-600 font-extrabold text-sm uppercase bg-blue-50 px-3.5 py-1.5 rounded-full">پاسخ شفاف به شما</span>
                        <h2 className="text-3xl sm:text-4xl font-black text-slate-900">سوالات متداول همکاران</h2>
                        <p className="text-slate-500 text-md">
                            پاسخ پرتکرارترین پرسش‌هایی که دندانپزشکان عزیز قبل از تهیه سامانه دندانو مطرح می‌کنند را
                            بخوانید:
                        </p>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, idx) => (
                            <div
                                key={idx}
                                className="border border-slate-200/80 rounded-2xl overflow-hidden transition-all duration-300"
                            >
                                <button
                                    onClick={() => toggleFaq(idx)}
                                    className="w-full flex items-center justify-between p-6 bg-white hover:bg-slate-50 text-right transition-colors"
                                >
                  <span className="font-bold text-slate-800 text-md sm:text-lg pl-4">
                    {faq.question}
                  </span>
                                    <ChevronDown
                                        className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${activeFaq === idx ? 'transform rotate-180 text-blue-600' : ''}`}/>
                                </button>

                                <div
                                    className={`transition-all duration-300 overflow-hidden ${activeFaq === idx ? 'max-h-125 border-t border-slate-100' : 'max-h-0'}`}
                                >
                                    <div className="p-6 bg-slate-50/50 text-slate-600 text-sm leading-relaxed">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* Newsletter Signup Banner */}
            <section className="bg-slate-900 text-white py-12 border-b border-slate-800">
                <div className="max-w-5xl mx-auto px-4 sm:px-6">
                    <div
                        className="bg-linear-to-l from-blue-700/20 to-indigo-800/20 border border-blue-500/20 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="space-y-2 text-center md:text-right">
                            <h3 className="text-2xl font-black">از جدیدترین آپدیت‌ها مطلع شوید</h3>
                            <p className="text-slate-400 text-sm">
                                هر ماه مقالات تخصصی مدیریت مطب و آخرین امکانات دندانو را به صورت خلاصه در ایمیل خود
                                دریافت کنید.
                            </p>
                        </div>
                        <div className="w-full md:w-auto flex flex-col sm:flex-row gap-3">
                            <input
                                type="email"
                                placeholder="آدرس ایمیل شما..."
                                className="bg-slate-950 border border-slate-700 rounded-xl px-5 py-3 text-sm focus:outline-none focus:border-blue-500 placeholder-slate-500 w-full sm:w-64"
                            />
                            <button
                                className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-xl text-sm transition-colors whitespace-nowrap shrink-0">
                                عضویت در خبرنامه
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-slate-950 text-slate-400 pt-16 pb-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-900">

                        {/* Brand column */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div
                                    className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-black text-xl">
                                    د
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-bold text-xl text-white tracking-tight">دندانو</span>
                                    <span
                                        className="text-[10px] text-blue-500 font-medium -mt-1 tracking-wider">Dandano</span>
                                </div>
                            </div>
                            <p className="text-xs text-slate-400 leading-relaxed">
                                سامانه هوشمند و ابری دندانو اولین سیستم مدیریت تخصصی مطب و کلینیک دندانپزشکی در کشور است
                                که با تکیه بر استانداردهای بین‌المللی طراحی و توسعه یافته است.
                            </p>
                            <div className="flex items-center gap-3 pt-2">
                                <a href="#"
                                   className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-blue-600 hover:text-white flex items-center justify-center transition-colors text-slate-400">
                                    𝕏
                                </a>
                                <a href="#"
                                   className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-blue-600 hover:text-white flex items-center justify-center transition-colors text-slate-400">
                                    📸
                                </a>
                                <a href="#"
                                   className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-blue-600 hover:text-white flex items-center justify-center transition-colors text-slate-400">
                                    ✉️
                                </a>
                            </div>
                        </div>

                        {/* Quick links */}
                        <div className="space-y-4">
                            <h4 className="text-white font-bold text-sm">پیوندهای کاربردی</h4>
                            <ul className="space-y-2.5 text-xs">
                                <li><a href="#features" className="hover:text-white transition-colors">امکانات و
                                    ماژول‌های دندانو</a></li>
                                <li><a href="#pricing" className="hover:text-white transition-colors">لیست کامل تعرفه
                                    اشتراک‌ها</a></li>
                                <li><a href="#why-us" className="hover:text-white transition-colors">آمار رضایت و
                                    نظرسنجی مراجعین</a></li>
                                <li><a href="#before-after" className="hover:text-white transition-colors">مقایسه دندانو
                                    با نرم‌افزارهای قدیمی</a></li>
                                <li><a href="#faq" className="hover:text-white transition-colors">سوالات پرتکرار همکاران
                                    دندانپزشک</a></li>
                            </ul>
                        </div>

                        {/* Contact details */}
                        <div className="space-y-4">
                            <h4 className="text-white font-bold text-sm">ارتباط با ما</h4>
                            <ul className="space-y-3 text-xs">
                                <li className="flex items-center gap-2">
                                    <Phone className="w-4 h-4 text-blue-500"/>
                                    <span>۰۲۱ - ۹۱۰۰۸۸۸۸ (خط ویژه)</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-blue-500 font-bold">📍</span>
                                    <span>تهران، خیابان ولیعصر، بالاتر از میدان ونک، برج نگار، طبقه ۱۵</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-blue-500 font-bold">📧</span>
                                    <span>support@dandano.com</span>
                                </li>
                            </ul>
                        </div>

                        {/* Badges / Certifications */}
                        <div className="space-y-4">
                            <h4 className="text-white font-bold text-sm">مجوزها و تاییده‌ها</h4>
                            <div className="grid grid-cols-2 gap-2">
                                <div
                                    className="bg-slate-900 border border-slate-800 p-3 rounded-xl flex items-center justify-center text-[10px] text-center text-slate-400">
                                    عضو رسمی صنف نرم‌افزارهای سلامت
                                </div>
                                <div
                                    className="bg-slate-900 border border-slate-800 p-3 rounded-xl flex items-center justify-center text-[10px] text-center text-slate-400">
                                    سازمان نظام دندانپزشکی کشور
                                </div>
                                <div
                                    className="bg-slate-900 border border-slate-800 p-3 rounded-xl flex items-center justify-center text-[10px] text-center text-slate-400">
                                    دارای نماد اعتماد الکترونیک ۵ ستاره
                                </div>
                                <div
                                    className="bg-slate-900 border border-slate-800 p-3 rounded-xl flex items-center justify-center text-[10px] text-center text-slate-400">
                                    پشتیبان‌گیری رمزنگاری شده سرور ملی
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Copyright and Legal */}
                    <div
                        className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-4">
                        <p>© ۱۴۰۵ سامانه ابری دندانو. تمامی حقوق مادی و معنوی برای دندانو محفوظ است.</p>
                        <div className="flex gap-4">
                            <a href="#" className="hover:text-slate-300">قوانین و مقررات استفاده</a>
                            <a href="#" className="hover:text-slate-300">سیاست حریم خصوصی مراجعین</a>
                        </div>
                    </div>

                </div>
            </footer>
            <a
                href="https://wa.me/9891200000"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 left-6 z-50 bg-emerald-500 hover:bg-emerald-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/30 transition-all transform hover:scale-110 active:scale-95 group"
            >
        <span
            className="absolute -top-10 right-1/2 translate-x-1/2 bg-slate-900 text-white text-[10px] font-bold px-2 py-1 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          پشتیبانی آنلاین واتساپ
        </span>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                     className="lucide lucide-phone-call">
                    <path
                        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    <path d="M14.05 2a9 9 0 0 1 8 7.94"/>
                    <path d="M14.05 6A5 5 0 0 1 18 10"/>
                </svg>
            </a>

        </div>
    );
}