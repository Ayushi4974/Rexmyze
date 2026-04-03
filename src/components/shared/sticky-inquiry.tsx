"use client";

import { MessageSquare } from "lucide-react";

export default function StickyInquiry() {
  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-[60] flex flex-col items-end">
      <button 
        className="bg-primary text-white px-2 py-6 rounded-l-xl shadow-2xl flex items-center gap-2 [writing-mode:vertical-lr] rotate-180 font-bold tracking-widest text-xs uppercase hover:pr-4 transition-all"
        onClick={() => {
          window.location.href = "/contact";
        }}
      >
        <MessageSquare size={16} className="rotate-90 mb-2" />
        Inquiry Now
      </button>
    </div>
  );
}
