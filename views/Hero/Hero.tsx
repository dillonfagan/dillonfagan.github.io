"use client";
import { Card, Image, Margin, Text } from "@/components";
import { Backgrounds } from "@/components/style";
import { ProjectsProvider, useProjects } from "@/content";
import { ArrowRight } from "@phosphor-icons/react";
import { PropsWithChildren } from "react";

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
        <div className="flex flex-col gap-4 lg:gap-8 items-stretch mx-auto w-screen p-4 lg:p-8">
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
        </div>
      </main>
    </ProjectsProvider>
  );
};

const SectionHeading = ({ children }: PropsWithChildren) => {
  return (
    <Margin top={5}>
      <Text.Heading h="h2" size="2xl">
        {children}
      </Text.Heading>
    </Margin>
  );
};

const Projects = () => {
  const { projects } = useProjects();

  const ProjectCard = ({
    title,
    summary,
    url,
  }: {
    title: string;
    summary?: string;
    url?: string;
  }) => (
    <Card relative>
      <Card.Body>
        <Text.Heading h="h3" size="xl">
          {title}
        </Text.Heading>
        <div className="flex-grow max-w-prose">
          {summary && <Text>{summary}</Text>}
        </div>
        {url && (
          <div className="flex flex-row items-center justify-end gap-2">
            <Text size="sm" weight="semibold">
              Learn More
            </Text>
            <ArrowLink href={url} />
          </div>
        )}
      </Card.Body>
    </Card>
  );

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-8">
      {projects.map(({ title, summary, url }) => (
        <ProjectCard
          key={`project-${title}`}
          title={title}
          summary={summary}
          url={url}
        />
      ))}
    </section>
  );
};

const ArrowLink = ({ href }: { href: string }) => {
  return (
    <a
      href={href}
      target="_blank"
      className="btn btn-sm btn-primary btn-circle shadow hover:shadow-sm active:shadow-none"
    >
      <ArrowRight color="white" size="1.2rem" weight="bold" />
    </a>
  );
};
