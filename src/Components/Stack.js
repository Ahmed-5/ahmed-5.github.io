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
          <div className="flex flex-wrap">
            {stack.imgs.map((img, ind) =>
              ind % 2 === 0 ? (
                <img
                  className="object-contain shadow-2xl p-1 w-40 h-40 bg-white rounded-full animate-float m-8"
                  src={img}
                  alt={ind}
                />
              ) : (
                <img
                  className="object-contain shadow-2xl p-1 w-40 h-40 bg-white rounded-full animate-refloat m-8"
                  src={img}
                  alt={ind}
                />
              )
            )}
          </div>
        </div>
      ))}
    </Section>
  );
}
