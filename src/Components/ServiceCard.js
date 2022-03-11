import React from "react";
import SkewedCard from "./SkewedCard";

export default function ServiceCard({img, name, desc}) {
  return (
    <SkewedCard>
      <img
        className="rounded-t-md servicesImageHeight bg-blue-500"
        alt="image"
        src={img}
      />
      <div className="px-10 pb-6">
        <h2 className="pt-3 font-bold text-2xl text-gray-800">
          {name}
        </h2>
        <p className="pt-3">
          {desc}
        </p>
      </div>
    </SkewedCard>
  );
}
