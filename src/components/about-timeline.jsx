"use client";

import TimelineCard from "./about-timelinecards";
import { timeline } from "@/data/timeline";

export default function Timeline() {
  return (
    <section className="max-w-4xl mx-auto mt-20">

      <div className="space-y-2">

        {timeline.map((item, index) => (

        <TimelineCard
            key={item.year}
            {...item}
            left={index % 2 === 0}
            isLast={index === timeline.length - 1}
        />

        ))}

      </div>

    </section>
  );
}