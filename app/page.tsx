"use client";
import { Card, Center, Image, Text } from "@/components";
import { ProjectsProvider, useProjects } from "@/content";

export default () => {
  const tech = [
    {
      title: "React",
      image: "/icons/react-mark.svg"
    },
    {
      title: "Svelte",
      image: "/icons/svelte-mark.svg"
    },
    {
      title: "Flutter",
      image: "/icons/flutter-mark.svg"
    },
    {
      title: ".NET",
      image: "/icons/dotnet-mark.svg"
    },
  ];

  return (
    <ProjectsProvider>
      <main>
        <div className="flex flex-col gap-4 lg:gap-8 items-stretch mx-auto w-screen sm:w-4/5 md:w-2/3 lg:w-3/5 p-4 lg:p-8">
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
              <Text size="xl">
                ...
              </Text>
            </Card.Body>
          </Card>
          <Projects />
          <Center>
            <Text.Heading h='h2' size='xl'>Technologies</Text.Heading>
          </Center>
          <section className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-8">
            {tech.map((t) => (
              <Card>
                <Image src={t.image} alt={t.title} height={100} width={100} />
                <Card.Body>
                  <Text.Heading>{t.title}</Text.Heading>
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
        <ProjectCard title={p.title} summary={p.summary} />
      ))}
    </section>
  );
};
