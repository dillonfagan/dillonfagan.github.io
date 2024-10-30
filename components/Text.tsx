import { createElement, PropsWithChildren } from "react";

const Text = ({ size, children }: PropsWithChildren<{ size?: TextSize }>) => {
  return (
    <span className={`text-${size ?? 'base'}`}>{children}</span>
  );
};

Text.Heading = ({ h, size, children }: PropsWithChildren<{ h?: H, size?: TextSize }>) => {
  const className = `font-semibold text-${size ?? 'base'}`;
  return createElement(h ?? 'h5', { className }, children);
};

Text.Hero = ({ children }) => {
  return (
    <span className="font-semibold text-4xl lg:text-5xl text-base-content">{children}</span>
  );
};

Text.Primary = ({ children }) => {
  return (
    <span className="text-primary">{children}</span>
  );
};

export type H = 'h1' | 'h2' | 'h3' | 'h4' | 'h5';

export type TextSize = 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl';

export default Text;