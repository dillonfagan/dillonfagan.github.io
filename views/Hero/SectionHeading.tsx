import { Margin, Text } from "@/components";
import { PropsWithChildren } from "react";

const SectionHeading = ({ children }: PropsWithChildren) => {
  return (
    <Margin top={5}>
      <Text.Heading h="h2" size="2xl">
        {children}
      </Text.Heading>
    </Margin>
  );
};

export default SectionHeading;