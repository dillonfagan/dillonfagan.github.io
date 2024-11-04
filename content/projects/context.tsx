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
        summary: 'Software to simplify tool library management. Developed from scratch for PVD Things.',
        url: 'https://www.pvdthings.coop/software',
      },
      {
        title: 'Mutual Credit',
        summary: "Instant access to community credit and low transaction fees for local businesses. It's the future of digital finance for the cooperative age.",
        url: 'https://github.com/dillonfagan/mutual_credit_app',
      },
      {
        title: 'Mob',
        summary: "A timer for good mob programming. Installable as a progressive web application (PWA).",
        url: '/mob/index.html',
      },
      {
        title: 'Rhode Island Worker Cooperative Alliance',
        summary: 'Educating the public about worker-owned cooperatives and building mutualist infrastructure in the Providence area, representing over 3,200 co-op members.',
        url: 'https://riworkercoop.org/',
      },
    ]
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};
