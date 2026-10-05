'use client';

import React from 'react';

export const WhatsAppWidget: React.FC = () => {
  return (
    <a
      href="https://wa.me/919448215689?text=Hello%20Oxford%20English%20Medium%20School%20Bukkapatna,%20I%20would%20like%20to%20inquire%20about%20Admissions%202026-27."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-[#25d366] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center animate-pulse-glow"
      aria-label="Chat with Oxford School on WhatsApp"
    >
      <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
        <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm5.79 14.07c-.24.68-1.4 1.3-1.94 1.38-.5.08-1.14.12-3.66-.92-3.23-1.33-5.32-4.63-5.48-4.85-.16-.22-1.31-1.74-1.31-3.32 0-1.58.83-2.36 1.12-2.68.3-.32.65-.4 0.87-.4.22 0 .43 0 .62.01.2.01.47-.08.73.55.27.65.92 2.25.99 2.42.08.17.13.37.03.59-.1.22-.16.35-.31.54-.16.18-.34.4-.48.54-.16.16-.33.34-.14.66.19.32.84 1.39 1.8 2.25 1.24 1.1 2.29 1.45 2.61 1.61.33.16.51.14.7-.08.19-.22.82-.96 1.04-1.29.22-.33.44-.27.73-.16.3.11 1.89.89 2.21 1.05.33.16.54.24.62.38.08.14.08.8-.16 1.48z" />
      </svg>
    </a>
  );
};
