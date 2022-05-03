import React from "react";

export default function Section({ id, name, heading, children }) {
  return (
    <section className="py-20 px-8 animate-fade-in-left" id={id}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <h1 className="text-6xl text-gray-800 font-bold">{name}</h1>
          <p className="pt-2 text-2xl">{heading}</p>
        </div>
        {children}
      </div>
    </section>
  );
}
