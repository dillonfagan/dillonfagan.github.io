"use client";
import { Card, Center, Image, Text } from "@/components";
import { Backgrounds } from "@/components/style";
import { ProjectsProvider, useProjects } from "@/content";

export default () => {
  const tech = [
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
  ];

  return (
    <ProjectsProvider>
      <main>
        <div className="flex flex-col gap-4 lg:gap-8 items-stretch mx-auto w-screen sm:w-4/5 lg:w-2/3 p-4 lg:p-8">
          <Center>
            <Text.Heading h="h1" size="3xl">
              Dillon Fagan
            </Text.Heading>
          </Center>
          <Card.Outlined>
            <Card.Body>
              <Text.Hero>
                I <Text.Primary>develop</Text.Primary> software,{" "}
                <Text.Primary>envision</Text.Primary> products, and{" "}
                <Text.Primary>organize</Text.Primary> cooperative enterprises.
              </Text.Hero>
            </Card.Body>
          </Card.Outlined>
          <Card>
            <Card.Body>
              <Text.Heading h="h2" size="2xl">
                Why am I here?
              </Text.Heading>
              <Text size="xl">...</Text>
            </Card.Body>
          </Card>
          <Projects />
          <Center>
            <Text.Heading h="h2" size="2xl">
              Technologies
            </Text.Heading>
          </Center>
          <section className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-8 h-64 xl:h-36">
            {tech.map(({ color, image, title }) => (
              <Card key={`tech-${title}`} bg={color} relative>
                <Card.Body>
                    <Text.Heading size='xl'>{title}</Text.Heading>
                    <div className="absolute -bottom-1 -right-1">
                      <Image src={image} alt={title} height={80} width={80} />
                    </div>
                </Card.Body>
              </Card>
            ))}
          </section>
        </div>
      </main>
    </ProjectsProvider>
  );
};

const Projects = () => {
  const { projects } = useProjects();

  const ProjectCard = ({
    title,
    summary,
  }: {
    title: string;
    summary?: string;
  }) => (
    <Card>
      <Card.Body>
        <Text.Heading h="h3" size="xl">
          {title}
        </Text.Heading>
        {summary && <Text>{summary}</Text>}
      </Card.Body>
    </Card>
  );

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-8">
      {projects.map((p) => (
        <ProjectCard
          key={`project-${p.title}`}
          title={p.title}
          summary={p.summary}
        />
      ))}
    </section>
  );
};
