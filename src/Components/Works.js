import React from "react";
import worksData from "../Content/works.json";
import Section from "./Section";
import WorkCard1Col from "./WorkCard1Col";
import WorkCard2Col from "./WorkCard2Col";

export default function Works() {
  const { id, name, heading, works } = worksData;
  return (
    <Section name={name} heading={heading} id={id}>
      <div className="grid mt-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
        {works.map((work, ind) =>
          ind % 4 == 0 || ind % 4 == 3 ? (
            <WorkCard2Col
              name={work.name}
              desc={work.desc}
              img={work.img}
              link={work.link}
            />
          ) : (
            <WorkCard1Col
              name={work.name}
              desc={work.desc}
              img={work.img}
              link={work.link}
            />
          )
        )}
      </div>
    </Section>
  );
}
