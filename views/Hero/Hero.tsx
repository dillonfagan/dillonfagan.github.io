"use client";
import { ProjectsProvider } from "@/content";
import Projects from "./Projects";
import Technologies from "./Technologies";
import Intro from "./Intro";

export default () => {
  return (
    <ProjectsProvider>
      <main className="flex flex-col gap-4 lg:gap-8 items-stretch mx-auto w-screen p-4 lg:p-8">
        <Intro />
        <Projects />
        <Technologies />
      </main>
    </ProjectsProvider>
  );
};
