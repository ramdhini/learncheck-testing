import React from "react";

export default function ErrorCard({ message, onClose, visible = true }) {
  if (!visible) return null;

  return (
    <div
      className="
        fixed inset-0 z-[9999]
        flex items-center justify-center
        bg-black/40
        px-4
      "
      role="dialog"
      aria-modal="true"
      aria-labelledby="error-title"
      aria-describedby="error-description"
      style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      }}
    >
      <div
        className="
          w-full max-w-sm
          bg-[var(--bg-secondary)] text-[var(--text-primary)]
          p-5 sm:p-6
          rounded-xl shadow-lg
          border-2 border-[var(--red-primary)]
        "
        style={{
          animation: 'fadeIn 0.2s ease-out'
        }}
      >
        {/* Header dengan icon error */}
        <div className="flex items-center gap-3 mb-3">
          <div className="
            w-10 h-10 rounded-full
            bg-[var(--red-secondary)]
            border border-[var(--red-primary)]
            flex items-center justify-center
            flex-shrink-0
          ">
            <svg 
              className="w-5 h-5 text-[var(--red-primary)]" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" 
              />
            </svg>
          </div>
          
          <h3
            id="error-title"
            className="text-base sm:text-lg font-bold text-[var(--red-primary)]"
          >
            Terjadi Kesalahan
          </h3>
        </div>

        <p
          id="error-description"
          className="text-xs sm:text-sm opacity-80 mb-6 leading-relaxed ml-13"
        >
          {message || "Terjadi kesalahan yang tidak terduga. Silakan coba lagi."}
        </p>

        <div className="flex justify-end gap-2 sm:gap-3">
          {onClose && (
            <button
              type="button"
              onClick={onClose}
              className="
                px-4 sm:px-5 py-2
                rounded-lg 
                bg-[var(--red-primary)] text-white
                text-xs sm:text-sm font-semibold
                hover:brightness-110 active:brightness-95
                transition
              "
            >
              Tutup
            </button>
          )}
        </div>
      </div>
    </div>
  );
}