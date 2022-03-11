import React from "react";
import serviceData from "../Content/services.json";
import Section from "./Section";
import ServiceCard from "./ServiceCard";

export default function Services() {
  const { id, name, heading, services } = serviceData;
  return (
    <Section id={id} name={name} heading={heading}>
      <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
        {services.map((service) => (
          <ServiceCard
            img={service.img}
            desc={service.desc}
            name={service.name}
          />
        ))}
      </div>
    </Section>
  );
}
