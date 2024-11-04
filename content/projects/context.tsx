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
        summary: "A democratically operated tool library. Borrow what you need when you need it. It's that simple.",
        url: 'https://www.pvdthings.coop/',
      },
      {
        title: 'Library OS',
        summary: 'Everything you need to manage a library of things.'
      },
      {
        title: 'Mutual Credit',
        summary: "Instant access to community credit and low transaction fees for local businesses. It's the future of digital finance for the cooperative age."
      }
    ]
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};
