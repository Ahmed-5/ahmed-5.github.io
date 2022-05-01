import React from "react";

export default function SkewedCard({ children }) {
  return (
    <div className="relative">
      <div className="absolute z-10 inset-0 bg-gradient-to-r from-primary to-secondary shadow-lg transform skew-y-0 rotate-6 rounded-lg"></div>
      <div className="relative z-20 bg-white h-full rounded-md shadow-md">
          {children}
      </div>
    </div>
  );
}
