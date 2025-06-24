// components/ToggleButton.jsx
"use client";
export default function ToggleButton({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`border px-6 py-4 mb-4 text-left rounded-md w-full transition 
        ${active ? "border-white text-white" : "border-gray-600 text-gray-500"}
      `}
    >
      <h3 className="text-xl font-medium">{label.title}</h3>
      <p className="text-sm">{label.subtitle}</p>
    </button>
  );
}
