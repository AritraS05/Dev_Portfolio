import { SKILLS } from "@/data";
import AnimationContainer from "./animated/animated-container";
import EmailCopyCard from "./site/email-copy-card";

const ACCENTS = ["#FA3C23", "#0D8BFF", "#00C060", "#A855F7"];

const Grid = () => {
  return (
    <section id="about" className="w-full py-24">
      <AnimationContainer className="w-full">
        <h2 className="text-3xl font-bold tracking-tight text-neutral-900 md:text-5xl">
          About me<span className="text-[#0D8BFF]">.</span>
        </h2>

        <p className="mt-8 max-w-3xl text-lg font-medium leading-relaxed text-neutral-800 md:text-xl">
          Hi, I&apos;m Aritra Sarkar! I&apos;m a passionate developer with a love
          for turning ideas into digital experiences. With a focus on clean code
          and creative solutions, I enjoy building projects that solve real-world
          problems. When I&apos;m not coding, I&apos;m exploring new technologies,
          learning. Join me as I explore the intersection of tech and creativity!
        </p>
      </AnimationContainer>

      <div className="mt-14 space-y-8">
        {SKILLS?.map(({ title, stacks }, groupIndex) => (
          <AnimationContainer key={title} className="w-full">
            <div>
              <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-neutral-500">
                <span
                  aria-hidden
                  className="inline-block h-2.5 w-2.5 rounded-sm"
                  style={{ backgroundColor: ACCENTS[groupIndex % ACCENTS.length] }}
                />
                {title}
              </h3>
              <div className="flex flex-wrap items-center gap-2">
                {stacks.map((stack) => (
                  <span
                    key={stack}
                    className="rounded-full border border-neutral-200 bg-neutral-50 px-3.5 py-1.5 text-sm font-medium text-neutral-800 transition-colors hover:border-neutral-400"
                  >
                    {stack}
                  </span>
                ))}
              </div>
            </div>
          </AnimationContainer>
        ))}
      </div>

      <EmailCopyCard />
    </section>
  );
};

export default Grid;
