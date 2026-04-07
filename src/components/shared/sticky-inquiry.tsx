"use client";

import { MessageSquare } from "lucide-react";

export default function StickyInquiry() {
  return (
    <>
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-60 hidden md:flex flex-col items-end">
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

      {/* Mobile FAB */}
      <div className="fixed bottom-6 right-6 z-60 block md:hidden">
        <button 
          className="bg-primary text-white h-14 w-14 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all animate-bounce"
          onClick={() => {
            window.location.href = "/contact";
          }}
        >
          <MessageSquare size={24} />
        </button>
      </div>
    </>
  );
}
