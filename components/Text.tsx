import { PropsWithChildren } from "react";

const Text = ({ children }) => (<span>{children}</span>);

Text.Heading = ({ h, children }: PropsWithChildren<{ h: H }>) => {
  switch (h) {
    case 1:
      return <h1 className="font-semibold text-3xl">{children}</h1>;
    case 2:
      return <h2 className="font-semibold text-2xl">{children}</h2>;
    case 3:
      return <h3 className="font-semibold text-xl">{children}</h3>;
    case 4:
      return <h4 className="font-semibold text-lg">{children}</h4>;
    case 5:
    default:
      return <h5 className="font-semibold">{children}</h5>;
  }
};

Text.Hero = ({ children }) => {
  return (
    <span className="font-semibold text-4xl lg:text-5xl text-base-content">{children}</span>
  );
};

Text.Accent = ({ children }) => {
  return (
    <span className="text-primary">{children}</span>
  );
};

export type H = 1 | 2 | 3 | 4 | 5;

export default Text;