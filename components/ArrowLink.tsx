import { ArrowRight } from "@phosphor-icons/react";

const ArrowLink = ({ href }: { href: string }) => {
  return (
    <a
      href={href}
      target="_blank"
      className="btn btn-sm btn-primary btn-circle shadow hover:shadow-sm active:shadow-none"
    >
      <ArrowRight color="white" size="1.2rem" weight="bold" />
    </a>
  );
};

export default ArrowLink;