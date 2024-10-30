import { createContext, PropsWithChildren, useContext } from "react";

const Context = createContext<ProjectsViewModel>(undefined);

export type ProjectsViewModel = {
  projects: Project[];
};

export type Project = {
  title: string;
  summary?: string;
};

export const useProjects = () => {
  return useContext(Context);
};

export const ProjectsProvider = ({ children }: PropsWithChildren) => {
  const value = {
    projects: [
      {
        title: 'PVD Things'
      },
      {
        title: 'Library OS',
        summary: 'Changing the way we interact with tools and tool libraries.'
      },
      {
        title: 'Mob app'
      }
    ]
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};
