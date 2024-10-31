import { PropsWithChildren } from "react";

const Margin = ({ children, top }: PropsWithChildren<{ top?: Space }>) => {
  const space = {
    1: 'mt-1',
    2: 'mt-2',
    3: 'mt-3',
    4: 'mt-4',
    5: 'mt-5',
  };

  const mt = top ? space[top] : '';

  return (
    <div className={`flex flex-col flex-grow items-stretch ${mt}`}>
      {children}
    </div>
  );
};

export type Space = 1 | 2 | 3 | 4 | 5;

export default Margin;