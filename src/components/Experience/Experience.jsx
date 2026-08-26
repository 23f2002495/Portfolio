"use client";

import { useRef, useState } from "react";
import {
  useScroll,
  useMotionValueEvent,
} from "framer-motion";

import ExpShowcase from "./ExpShowcase";
import experiences from "./ExpData";

export default function Experience() {

  const sectionRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(
    scrollYProgress,
    "change",
    (latest) => {

      const index = Math.min(
        experiences.length - 1,
        Math.round(
          latest * (experiences.length - 1)
        )
      );

      setActiveIndex(index);

    }
  );

  return (

    <section
      id="experience"
      ref={sectionRef}
      className="relative h-[550vh]" 
    >

      <ExpShowcase
        experiences={experiences}
        activeIndex={activeIndex}
        progress={scrollYProgress}
      />

    </section>

  );

}