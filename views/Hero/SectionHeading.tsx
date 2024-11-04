import { Text } from "@/components";
import { PropsWithChildren } from "react";

const SectionHeading = ({ children }: PropsWithChildren) => {
  return (
    <Text.Heading h="h2" size="2xl">
      {children}
    </Text.Heading>
  );
};

export default SectionHeading;