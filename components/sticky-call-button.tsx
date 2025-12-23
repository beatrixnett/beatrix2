import React from "react";

export default function StickyCallButton() {
  return (
    <a
      href="tel:+18336190239"
      className="fixed bottom-6 right-6 z-50 flex items-center px-5 py-3 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-lg transition-all duration-200 gap-2 text-lg font-semibold"
      style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.15)" }}
      aria-label="Call Now"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 2.25v2.25m0 0a6.75 6.75 0 016.75 6.75v2.25a6.75 6.75 0 01-6.75 6.75v2.25m0-2.25a6.75 6.75 0 01-6.75-6.75V11.25a6.75 6.75 0 016.75-6.75z" />
      </svg>
      CALL NOW
    </a>
  );
}
