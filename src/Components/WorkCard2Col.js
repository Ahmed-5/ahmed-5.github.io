import React from "react";

export default function WorkCard2Col({img, name, desc, link}) {
  return (
    <div className="bg-white rounded-md shadow-md lg:col-span-2">
      <img
        src={img}
        alt={name}
        className="object-cover rounded-t-md w-full h-80"
      />
      <div className="p-8">
        <h3 className="text-2xl font-bold text-gray-800">{name}</h3>
        <p className="pt-3">{desc}</p>
        <a
          href={link}
          className="inline-block mt-4 px-6 py-2 bg-gradient-to-r from-primary to-secondary rounded-md shadow-md text-white font-bold text-sm"
        >
          View More
        </a>
      </div>
    </div>
  );
}
