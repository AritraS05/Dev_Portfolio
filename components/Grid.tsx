import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { SKILLS } from "@/data";
import { Badge } from "./ui/badge";
import AnimationContainer from "./animated/animated-container";
const Grid = () => {
  return (
    <section id="about">
      <AnimationContainer className="w-full py-12 lg:py-16">
      <h2 className="mb-8 text-2xl font-bold tracking-tight text-center md:text-left text-white lg:text-start">
        About me
      </h2>

      <p className="w-full text-base font-normal leading-7 text-justify text-neutral-200">
        Hi, I&apos;m Aritra Sarkar! I&apos;m a passionate developer with a love
        for turning ideas into digital experiences. With a focus on clean code
        and creative solutions, I enjoy building projects that solve real-world
        problems. When I&apos;m not coding, I&apos;m exploring new technologies,
        learning. Join me as I
        explore the intersection of tech and creativity!
      </p>
    </AnimationContainer>
    <AnimationContainer className="w-full ">
      <div className="flex flex-col items-start mt-8">
        <div className="flex flex-col flex-wrap items-start mb-2 space-y-4">
          {SKILLS?.map(({ title, stacks }) => (
            <AnimationContainer
            key={title}
            className="flex fex-col items-center"
          >
              <div>
                <h3 className="items-start mb-3 text-lg font-bold text-white">
                  {title}
                </h3>
                <div className="flex flex-wrap items-center gap-2 mb-5">
                  {/* <ShowSkills stacks={stack} /> */}
                  {stacks.map((stack) => (
                    <Badge
                      key={stack}
                      className="bg-neutral-600/70 hover:bg-neutral-700 transition-colors duration-300 ease-in-out"
                    >
                      <span className="font-medium text-white">{stack}</span>
                    </Badge>
                  ))}
                </div>
              </div>
              </AnimationContainer>
          ))}
        </div>
      </div>
      <BentoGrid className="w-full py-20">
        {gridItems.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={i}
            title={item.title}
            description={item.description}
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          />
        ))}
      </BentoGrid>
      </AnimationContainer>
    </section>
  );
};

export default Grid;