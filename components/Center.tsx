import { PropsWithChildren } from "react";

const Center = ({ children }: PropsWithChildren) => {
  return <div className="flex flex-row justify-center items-center">{children}</div>;
};

export default Center;