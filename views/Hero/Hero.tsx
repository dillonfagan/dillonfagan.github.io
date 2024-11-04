"use client";
import { Card, Image, Text } from "@/components";
import { Backgrounds } from "@/components/style";
import { ProjectsProvider } from "@/content";
import SectionHeading from "./SectionHeading";
import Projects from "./Projects";

export default () => {
  return (
    <ProjectsProvider>
      <main className="flex flex-col gap-4 lg:gap-8 items-stretch mx-auto w-screen p-4 lg:p-8">
        <Text.Heading h="h1" size="3xl">
          Dillon Fagan
        </Text.Heading>
        <Card.Outlined>
          <Card.Body>
            <Text.Hero>
              I <Text.Primary>develop</Text.Primary> software,
              <br />
              <Text.Primary>envision</Text.Primary> products,
              <br />
              and <Text.Primary>organize</Text.Primary> cooperative
              enterprises.
            </Text.Hero>
          </Card.Body>
        </Card.Outlined>
        <SectionHeading>Projects</SectionHeading>
        <Projects />
        <SectionHeading>Technologies</SectionHeading>
        <section className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-8 h-64 xl:h-36">
          {tech.map(({ color, image, title }) => (
            <Card key={`tech-${title}`} bg={color} relative>
              <Card.Body>
                <Text.Heading size="xl">{title}</Text.Heading>
                <div className="absolute -bottom-1 -right-1">
                  <Image src={image} alt={title} height={80} width={80} />
                </div>
              </Card.Body>
            </Card>
          ))}
        </section>
      </main>
    </ProjectsProvider>
  );
};

const tech = Object.freeze([
  {
    title: ".NET",
    image: "/icons/dotnet-mark.svg",
    color: Backgrounds.purple[100],
  },
  {
    title: "React",
    image: "/icons/react-mark.svg",
    color: Backgrounds.blue[100],
  },
  {
    title: "Svelte",
    image: "/icons/svelte-mark.svg",
    color: Backgrounds.orange[100],
  },
  {
    title: "Flutter",
    image: "/icons/flutter-mark.svg",
    color: Backgrounds.sky[100],
  },
]);