import React from "react";

export default function TimelineLeft({ title, time, content, index }) {
  return (
    <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
      <div class="order-1 w-5/12"></div>
      <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
        <h1 class="mx-auto text-white font-semibold text-lg">{index}</h1>
      </div>
      <div class="order-1 bg-gradient-to-r from-primary to-secondary rounded-lg shadow-xl w-5/12 px-6 py-4">
        <h3 class="mb-3 font-bold text-white text-xl">{title}</h3>
        <h4 class="mb-3 font-bold text-white text-xl">{time}</h4>
        <p class="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
          {content}
        </p>
      </div>
    </div>
  );
}
