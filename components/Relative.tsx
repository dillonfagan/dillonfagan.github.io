import { PropsWithChildren } from "react";

const Relative = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex-grow relative">{children}</div>
  );
};

Relative.BottomLeft = ({ children, distance }: PropsWithChildren<{ distance?: Distance }>) => {
  return (
    <div className={`absolute bottom-${distance ?? 0} left-${distance ?? 0}`}>{children}</div>
  );
};

Relative.TopRight = ({ children, distance }: PropsWithChildren<{ distance?: Distance }>) => {
  return (
    <div className={`absolute right-${distance ?? 0} top-${distance ?? 0}`}>{children}</div>
  );
};

export type Distance = 1 | 2 | 3 | 4 | 5;

export default Relative;