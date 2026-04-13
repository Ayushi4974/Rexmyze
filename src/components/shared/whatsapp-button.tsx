"use client";

import React from "react";

const WhatsAppButton = () => {
  const phoneNumber = "917096181126";
  const message = encodeURIComponent("Hello! I'm interested in learning more about Rexmyze Academy courses.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      <div className="relative group">
        {/* Pulsing Backlight */}
        <div className="absolute inset-0 bg-[#25D366] rounded-full blur-md opacity-40 animate-pulse group-hover:opacity-70 transition-opacity"></div>
        
        {/* Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-[#25D366]/40 hover:-translate-y-1 active:translate-y-0 transition-all duration-300"
          aria-label="Contact on WhatsApp"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="white"
            stroke="none"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .004 5.41.001 12.045c0 2.12.54 4.19 1.566 6.02L0 24l6.135-1.61a11.893 11.893 0 005.911 1.569h.005c6.632 0 12.042-5.41 12.046-12.045a11.83 11.83 0 00-3.535-8.527" />
          </svg>
          
          {/* Tooltip */}
          <span className="absolute right-full mr-4 bg-white text-[#075e54] text-xs font-bold px-3 py-1.5 rounded-lg shadow-xl border border-gray-100 opacity-0 -translate-x-2 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap">
            Chat with us
          </span>
        </a>
      </div>
    </div>
  );
};

export default WhatsAppButton;
