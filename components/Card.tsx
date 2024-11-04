import { PropsWithChildren } from "react";
import { Background, Backgrounds } from "./style";

const Card = ({ children, bg, relative }: Props) => {
  return <div className={`${bg ?? Backgrounds.base[200]} card card-compact lg:card-normal flex flex-col overflow-hidden ${relative ? 'relative' : ''} select-none`}>{children}</div>;
};

Card.Outlined = ({ children }: Props) => {
  return (
    <div className="bg-transparent card card-bordered card-compact lg:card-normal flex flex-col overflow-hidden select-none">
      {children}
    </div>
  );
};

Card.Body = ({ children }) => {
  return <div className="card-body">{children}</div>;
};

Card.Actions = ({ children }) => {
  return <div className="card-actions">{children}</div>;
};

export type Props = PropsWithChildren<{ bg?: Background, relative?: true }>;

export default Card;