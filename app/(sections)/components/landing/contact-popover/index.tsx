"use client";

import { useState, useRef, useEffect } from "react";
import { CheckCircle2, Menu, X, Phone, MessageCircle } from "lucide-react";
// ... other imports

const PHONE = "09123456789"; // شماره خودت رو بذار

function ContactPopover() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="transform rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-blue-500/10 transition-all hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg"
      >
        ثبت سفارش و هماهنگی
      </button>

      {open && (
        <div className="absolute top-full left-0 z-50 mt-2 w-56 rounded-2xl border border-slate-100 bg-white p-4 shadow-xl">
          <p className="mb-3 text-xs font-semibold text-slate-500">راه‌های ارتباطی</p>
          <a
            href={`tel:${PHONE}`}
            className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-bold text-slate-700 transition hover:bg-slate-50"
          >
            <Phone className="h-4 w-4 text-blue-600" />
            {PHONE}
          </a>
          <a
            href={`https://wa.me/98${PHONE.slice(1)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-bold text-slate-700 transition hover:bg-green-50"
          >
            <MessageCircle className="h-4 w-4 text-green-500" />
            واتساپ
          </a>
        </div>
      )}
    </div>
  );
}

export default ContactPopover;
