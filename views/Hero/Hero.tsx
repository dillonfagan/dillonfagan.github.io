"use client";
import { Card, Text } from "@/components";
import { ProjectsProvider } from "@/content";
import Projects from "./Projects";
import Technologies from "./Technologies";

export default () => {
  return (
    <ProjectsProvider>
      <main className="flex flex-col gap-4 lg:gap-8 items-stretch mx-auto w-screen p-4 lg:p-8">
        <Card.Outlined>
          <Card.Body>
            <Text.Heading h="h1" size="3xl">
              Dillon Fagan
            </Text.Heading>
          </Card.Body>
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
        <Projects />
        <Technologies />
      </main>
    </ProjectsProvider>
  );
};
