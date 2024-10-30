"use client";
import { Card, Text } from "@/components";
import { ProjectsProvider, useProjects } from "@/content";

export default () => {
  return (
    <ProjectsProvider>
      <main>
        <div className="flex flex-col gap-4 lg:gap-8 items-stretch mx-auto w-screen sm:w-4/5 md:w-2/3 lg:w-3/5 p-4 lg:p-8">
          <Card.Outlined>
            <Card.Body>
              <Text.Hero>
                I <Text.Primary>develop</Text.Primary> software,{" "}
                <Text.Primary>envision</Text.Primary> products, and{" "}
                <Text.Primary>organize</Text.Primary> cooperative enterprises.
              </Text.Hero>
            </Card.Body>
          </Card.Outlined>
          <section>
            <Card>
              <Card.Body>
                <Text.Heading h="h2" size="2xl">
                  Why am I here?
                </Text.Heading>
                <Text size="xl">
                  Why would I want to engage with these ideas or enterprises?
                </Text>
              </Card.Body>
            </Card>
          </section>
          <Projects />
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
    <section className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8">
      {projects.map((p) => (
        <ProjectCard title={p.title} summary={p.summary} />
      ))}
    </section>
  );
};
