import React from "react";
import { COMPANY } from "../data/company";

export const QuickContactFloating: React.FC = () => {
  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col gap-2 pointer-events-none">
      <div className="flex items-center gap-2 pointer-events-auto">
        {/* WhatsApp Fast Connect (Skeuomorphic Push Button) */}
        <a
          href={COMPANY.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-13 h-13 rounded-full text-white transition-all hover:scale-105 active:scale-95 active:translate-y-0.5 cursor-pointer"
          style={{
            background: "linear-gradient(180deg, #34d399 0%, #10b981 45%, #059669 100%)",
            border: "1.5px solid #047857",
            boxShadow: "inset 0 1.5px 0 rgba(255,255,255,0.6), inset 0 -2px 0 rgba(0,0,0,0.3), 0 6px 14px rgba(5,150,105,0.45), 0 2px 4px rgba(0,0,0,0.15)",
          }}
          aria-label="Direct WhatsApp Message"
          title="Chat on WhatsApp"
        >
          <svg
            viewBox="0 0 24 24"
            width="26"
            height="26"
            fill="currentColor"
            className="w-6 h-6 fill-white"
            aria-hidden="true"
          >
            <path d="M12.031 2c-5.502 0-9.972 4.467-9.972 9.969 0 1.76.459 3.48 1.332 5.001L2 22l5.176-1.358a9.945 9.945 0 0 0 4.855 1.258h.004c5.502 0 9.971-4.467 9.971-9.969 0-2.663-1.037-5.167-2.923-7.051A9.907 9.907 0 0 0 12.031 2zm0 18.232c-1.5 0-2.969-.404-4.249-1.163l-.305-.182-3.158.828.843-3.078-.2-.317a8.232 8.232 0 0 1-1.26-4.351c0-4.544 3.697-8.241 8.245-8.241 2.203 0 4.274.858 5.832 2.417a8.196 8.196 0 0 1 2.413 5.824c0 4.545-3.697 8.243-8.245 8.243zm4.516-6.177c-.247-.124-1.464-.722-1.691-.805-.227-.082-.393-.124-.558.124-.165.248-.641.805-.785.97-.145.165-.289.186-.536.062-.247-.124-1.044-.385-1.988-1.228-.735-.657-1.232-1.469-1.376-1.716-.145-.248-.015-.382.109-.505.111-.111.247-.289.371-.433.124-.145.165-.248.248-.413.082-.165.041-.31-.021-.433-.062-.124-.558-1.343-.764-1.84-.201-.484-.405-.418-.558-.426-.144-.008-.31-.01-.475-.01s-.433.062-.66.31c-.227.248-.868.848-.868 2.067 0 1.22.889 2.398 1.013 2.563.124.165 1.751 2.673 4.242 3.748.593.256 1.056.409 1.417.524.595.189 1.137.162 1.565.098.477-.071 1.464-.599 1.67-1.177.206-.578.206-1.074.145-1.177-.062-.103-.227-.165-.474-.289z"/>
          </svg>
        </a>
      </div>
    </div>
  );
};
