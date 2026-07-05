'use client';

import { siteContact } from '@/lib/site';

export default function WhatsAppFloat() {
  const encodedMessage = encodeURIComponent(siteContact.whatsappMessage || '');
  const whatsappUrl = `https://wa.me/${siteContact.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodedMessage}`;

  return (
    <div className="fixed bottom-10 right-6 z-50 flex items-center gap-3 group">
      {/* Tooltip */}
      <div className="pointer-events-none hidden md:block opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 bg-gray-900 text-white text-xs font-semibold px-4 py-2.5 rounded-xl shadow-[0_10px_30px_rgba(15,23,42,0.12)] border border-white/10 select-none whitespace-nowrap">
        Chat with our experts
      </div>

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-[0_12px_36px_rgba(16,185,129,0.35)] transition-all duration-500 hover:scale-110 hover:bg-emerald-400 hover:shadow-[0_16px_40px_rgba(16,185,129,0.5)] active:scale-95"
      >
        {/* Pulse Glow Effect */}
        <span className="absolute inset-0 -z-10 rounded-full bg-emerald-500/40 animate-ping opacity-75 group-hover:bg-emerald-400/40" />

        {/* WhatsApp SVG Icon */}
        <svg
          className="h-7 w-7 transition-transform duration-500 group-hover:rotate-[360deg]"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            fillRule="evenodd"
            d="M12.004 2C6.48 2 2 6.48 2 12.004c0 1.908.533 3.69 1.464 5.215l-1.42 5.185a.75.75 0 00.923.923l5.185-1.42a9.96 9.96 0 005.215 1.464c5.524 0 10.004-4.48 10.004-10.004C22.008 6.48 17.528 2 12.004 2zM12 20.5c-1.688 0-3.263-.483-4.6-1.318a.75.75 0 00-.608-.094l-3.329.91.91-3.328a.75.75 0 00-.094-.608A8.455 8.455 0 013.5 12c0-4.687 3.813-8.5 8.5-8.5s8.5 3.813 8.5 8.5-3.813 8.5-8.5 8.5zm4.81-6.19c-.26-.13-1.53-.756-1.768-.843-.237-.087-.41-.13-.58.13-.172.26-.669.843-.82 1.017-.15.173-.303.195-.563.065a7.11 7.11 0 01-2.09-1.288 7.84 7.84 0 01-1.447-1.802c-.152-.26-.016-.4.113-.53.117-.117.26-.303.39-.455.13-.152.173-.26.26-.433.087-.173.043-.325-.022-.455-.065-.13-.58-1.4-.797-1.922-.21-.51-.424-.44-.58-.448-.15-.008-.325-.01-.497-.01a.955.955 0 00-.693.325c-.238.26-.91.888-.91 2.165s.93 2.511 1.06 2.684c.13.173 1.83 2.796 4.43 3.922.617.268 1.1.428 1.478.547.62.197 1.185.17 1.63.103.496-.074 1.53-.624 1.746-1.229.217-.606.217-1.127.152-1.235-.065-.108-.238-.173-.498-.303z"
            clipRule="evenodd"
          />
        </svg>
      </a>
    </div>
  );
}
