"use client";
import React, { useState } from "react";

const ResponsiveNavbar = () => {
  const [isExpand, setIsExpand] = useState(false);
  return (
    <section className="fixed top-4 z-[9999] main-container md:hidden  flex justify-end">
      <aside
        className={`relative h-11 flex justify-center items-center bg-white shadow-[0_8px_15px_rgba(0,0,0,0.2)] border border-primary rounded-full transition-all duration-500 ease-in-out overflow-hidden ${
          isExpand ? "w-full" : "w-11"
        }`}
        onClick={() => setIsExpand(!isExpand)}
      >
        <span
          className={`absolute left-[6.5px] w-7 h-1 rounded-full pointer-events-none duration-500 ${
            isExpand
              ? "-rotate-45 top-1/2 -translate-y-1/2 bg-rose-500"
              : "top-3 bg-[#222224]"
          }`}
        ></span>
        <span
          className={`absolute left-[6.5px] top-1/2 -translate-y-1/2 w-7 h-1 rounded-full pointer-events-none duration-500 ${
            isExpand ? "-rotate-90 opacity-0" : "opacity-100 bg-[#222224]"
          }`}
        ></span>
        <span
          className={`absolute left-[6.5px] w-7 h-1 rounded-full pointer-events-none duration-500 ${
            isExpand
              ? "rotate-45 top-1/2 -translate-y-1/2 bg-rose-500"
              : "top-[26px] bg-[#222224]"
          }`}
        ></span>
        <div
          className={`w-full common-transition flex items-center justify-center gap-3 text-[11px] uppercase font-semibold ${
            isExpand ? "opacity-100" : "opacity-0"
          }`}
        >
          <p>Lifestyle</p>
          <p>Technology</p>
          <p>Video</p>
          <p>Travel</p>
          <p>Feature</p>
        </div>
      </aside>
    </section>
  );
};

export default ResponsiveNavbar;
