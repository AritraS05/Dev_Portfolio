import React from "react";

import { workExperience } from "@/data";
import AnimationContainer from "./animated/animated-container";

const ACCENTS = ["#FA3C23", "#0D8BFF", "#00C060", "#A855F7"];

const Experience = () => {
  return (
    <section className="w-full py-24">
      <h2 className="text-3xl font-bold tracking-tight text-neutral-900 md:text-5xl">
        Work experience<span className="text-[#00C060]">.</span>
      </h2>

      <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-2">
        {workExperience.map((card, index) => (
          <AnimationContainer key={card.id} className="h-full">
            <div className="h-full rounded-3xl border border-neutral-200 bg-white p-8 transition-colors hover:border-neutral-300 md:p-10">
              <span
                className="grid h-10 w-10 place-items-center rounded-xl text-sm font-bold text-white"
                style={{ backgroundColor: ACCENTS[index % ACCENTS.length] }}
              >
                0{index + 1}
              </span>
              <h3 className="mt-5 text-2xl font-bold tracking-tight text-neutral-900">
                {card.title}
              </h3>
              <p className="mt-4 whitespace-pre-line text-[15px] leading-relaxed text-neutral-700">
                {card.desc}
              </p>
            </div>
          </AnimationContainer>
        ))}
      </div>
    </section>
  );
};

export default Experience;
