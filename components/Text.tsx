import { createElement, PropsWithChildren } from "react";
import { H, TextSize, TextSizes, FontWeight, FontWeights } from "./style";

const Text = ({
  size,
  weight,
  children,
}: PropsWithChildren<{ size?: TextSize; weight?: FontWeight }>) => {
  return (
    <span className={`${TextSizes[size ?? "base"]} ${FontWeights[weight ?? "normal"]}`}>
      {children}
    </span>
  );
};

Text.Heading = ({
  h,
  size,
  children,
}: PropsWithChildren<{ h?: H; size?: TextSize }>) => {
  const className = `font-semibold ${TextSizes[size ?? "base"]}`;
  return createElement(h ?? "h5", { className }, children);
};

Text.Hero = ({ children }) => {
  return (
    <span className="font-semibold text-5xl lg:text-8xl text-base-content">
      {children}
    </span>
  );
};

Text.Primary = ({ children }) => {
  return <span className="text-primary">{children}</span>;
};

export default Text;
