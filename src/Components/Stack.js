import React from "react";
import Section from "./Section";
import stackData from "../Content/stack.json";

export default function Stack() {
  const { id, name, heading, stacks } = stackData;
  return (
    <Section name={name} heading={heading} id={id}>
      {stacks.map((stack) => (
        <div className="text-center">
          <p className="pt-2 text-xl">{stack.name}</p>
          <div className="flex flex-wrap justify-between">
            {stack.imgs.map((img, ind) =>
              ind % 2 === 0 ? (
                <img
                  className="object-contain shadow-2xl p-1 w-24 h-24 bg-white rounded-full animate-float m-5"
                  src={img.img}
                  alt={img.alt}
                />
              ) : (
                <img
                  className="object-contain shadow-2xl p-1 w-24 h-24 bg-white rounded-full animate-refloat m-5"
                  src={img.img}
                  alt={img.alt}
                />
              )
            )}
          </div>
        </div>
      ))}
    </Section>
  );
}
