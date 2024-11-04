import { Card, Text } from "@/components";

const Intro = () => {
  return (
    <Card.Outlined>
      <Card.Body>
        <Text.Heading h="h1" size="3xl">
          Dillon Fagan
        </Text.Heading>
      </Card.Body>
      <Card.Body>
        <Text.Hero>
          I <Text.Primary>develop</Text.Primary> software,
          <br />
          <Text.Primary>envision</Text.Primary> products,
          <br />
          and <Text.Primary>organize</Text.Primary> cooperative
          enterprises.
        </Text.Hero>
      </Card.Body>
    </Card.Outlined>
  );
};

export default Intro;