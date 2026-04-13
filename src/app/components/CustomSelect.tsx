import { useState, useRef, useEffect } from "react";

interface CustomSelectProps {
  value: string;
  onChange: (value: string) => void;
  options: string[];
  placeholder: string;
  required?: boolean;
}

export function CustomSelect({ value, onChange, options, placeholder, required }: CustomSelectProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const baseClass =
    "w-full px-5 rounded-xl bg-white/5 border text-sm transition-all cursor-pointer";
  const borderClass = open ? "border-indigo-500/60 bg-white/8" : "border-white/10";

  return (
    <div ref={ref} className="relative w-full">
      {/* Trigger */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className={`${baseClass} ${borderClass} flex items-center justify-between focus:outline-none`}
        style={{ height: "52px", color: value === "" ? "#64748b" : "white" }}
      >
        <span>{value || placeholder}</span>
        <svg
          className="w-4 h-4 text-slate-500 shrink-0 transition-transform"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M4 6l4 4 4-4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Dropdown panel */}
      {open && (
        <div className="absolute z-50 w-full mt-1.5 rounded-xl bg-slate-900 border border-white/10 overflow-hidden shadow-2xl">
          {options.map((opt) => (
            <div
              key={opt}
              onClick={() => {
                onChange(opt);
                setOpen(false);
              }}
              className="flex items-center px-5 text-sm text-white cursor-pointer hover:bg-white/8 transition-colors"
              style={{ height: "44px" }}
            >
              {opt}
            </div>
          ))}
        </div>
      )}

      {/* Hidden native input for form required validation */}
      {required && (
        <input
          tabIndex={-1}
          required
          value={value}
          onChange={() => {}}
          className="absolute inset-0 opacity-0 pointer-events-none w-full"
        />
      )}
    </div>
  );
}
