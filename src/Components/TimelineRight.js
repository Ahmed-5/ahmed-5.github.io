import React from "react";

export default function TimelineRight({ title, time, content, index }) {
  return (
    <div class="flex md:contents">
      <div class="col-start-5 col-end-6 mr-10 md:mx-auto relative">
        <div class="h-full w-6 flex items-center justify-center">
          <div class="h-full w-1 bg-blue-800 pointer-events-none"></div>
        </div>
        <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow text-center">
          {index}
        </div>
      </div>
      <div class="bg-secondary col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md">
        <h3 class="font-bold text-lg mb-1">{title}</h3>
        <h4 class="font-semibold text-lg mb-1">{time}</h4>
        <p class="leading-tight text-justify">{content}</p>
      </div>
    </div>
  );
}
