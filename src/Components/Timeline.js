import React from "react";
import timelineData from "../Content/timeline.json";
import Section from "./Section";
import TimelineRight from "./TimelineRight";
import TimelineLeft from "./TimelineLeft";

export default function Timeline() {
  const { id, name, heading, timeline } = timelineData;
  timeline.sort((a,b) => (a.time > b.time) ? 1 : ((b.time > a.time) ? -1 : 0))
  return (
    <Section name={name} heading={heading} id={id}>
      <div class="container mx-auto w-full h-full">
        <div class="relative wrap overflow-hidden p-10 h-full">
          <div
            class="border-2-2 absolute border-opacity-20 border-gray-700 h-full border"
            style={{ left: "50%" }}
          ></div>
          {timeline.map((cell, ind) =>
            ind % 2 === 0 ? (
              <TimelineLeft
                title={cell.title}
                time={cell.time}
                content={cell.content}
              />
            ) : (
              <TimelineRight
                title={cell.title}
                time={cell.time}
                content={cell.content}
              />
            )
          )}
        </div>
      </div>
    </Section>
  );
}
