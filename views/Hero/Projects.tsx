import { ArrowLink, Card, Text } from "@/components";
import { useProjects } from "@/content";

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

export default Projects;
