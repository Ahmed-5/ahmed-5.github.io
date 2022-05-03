import React from "react";

export default function TimelineLeft({ title, time, content, index }) {
  return (
    <div class="flex flex-row-reverse md:contents">
      <div class="bg-primary col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
        <h3 class="font-bold text-lg mb-1">{title}</h3>
        <h4 class="font-semibold text-lg mb-1">{time}</h4>
        <p class="leading-tight text-justify">
          {content}
        </p>
      </div>
      <div class="col-start-5 col-end-6 md:mx-auto relative mr-10">
        <div class="h-full w-6 flex items-center justify-center">
          <div class="h-full w-1 bg-gradient-to-b from-primary to-secondary pointer-events-none"></div>
        </div>
        <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-secondary shadow text-center">{index}</div>
      </div>
    </div>
  );
}
