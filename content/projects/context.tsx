import { createContext, PropsWithChildren, useContext } from "react";

const Context = createContext<ProjectsViewModel>(undefined);

export type ProjectsViewModel = {
  projects: Project[];
};

export type Project = {
  title: string;
  summary?: string;
  url?: string;
};

export const useProjects = () => {
  return useContext(Context);
};

export const ProjectsProvider = ({ children }: PropsWithChildren) => {
  const value = {
    projects: [
      {
        title: 'PVD Things',
        url: 'https://www.pvdthings.coop/',
      },
      {
        title: 'Library OS',
        summary: 'Everything you need to manage a library of things.'
      },
      {
        title: 'Mutual Credit',
        summary: 'A glimpse into the future of digital finance, backed by community mutual credit. Transactions without money.'
      }
    ]
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};
