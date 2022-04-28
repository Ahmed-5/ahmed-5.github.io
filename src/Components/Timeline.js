import React from "react";
import timelineData from "../Content/timeline.json";
import Section from "./Section";
import TimelineRight from "./TimelineRight";
import TimelineLeft from "./TimelineLeft";

export default function Timeline() {
  const { id, name, heading, timeline } = timelineData;
  timeline.sort((a, b) => (a.time > b.time ? 1 : b.time > a.time ? -1 : 0));
  return (
    <Section name={name} heading={heading} id={id}>
      <div class="container">
        <div class="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50">
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
