import React from "react";

export default function TimelineRight({ title, time, content, index }) {
  return (
    <div class="mb-8 flex justify-between items-center w-full right-timeline">
      <div class="order-1 w-5/12"></div>
      <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
        <h1 class="mx-auto font-semibold text-lg text-white">{index}</h1>
      </div>
      <div class="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
        <h3 class="mb-3 font-bold text-gray-800 text-xl">{title}</h3>
        <h4 class="mb-3 font-bold text-gray-800 text-xl">{time}</h4>
        <p class="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
          {content}
        </p>
      </div>
    </div>
  );
}
