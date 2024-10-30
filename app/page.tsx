import { Card, Text } from "@/components";

export default () => {
  return (
    <main>
      <div className="flex flex-col gap-4 items-stretch mx-auto w-screen sm:w-4/5 md:w-2/3 lg:w-3/5 p-4 lg:p-8">
        <Card.Outlined>
          <Card.Body>
            <Text.Hero>
              I <Text.Primary>develop</Text.Primary> software,{" "}
              <Text.Primary>envision</Text.Primary> products, and{" "}
              <Text.Primary>organize</Text.Primary> cooperative enterprises.
            </Text.Hero>
          </Card.Body>
        </Card.Outlined>
        <section>
          <Card>
            <Card.Body>
              <Text.Heading h={2}>Why am I here?</Text.Heading>
              <Text>Why would I want to engage with these ideas or enterprises?</Text>
            </Card.Body>
          </Card>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <Card.Body>
              <Text.Heading h={3}>PVD Things</Text.Heading>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Text.Heading h={3}>Library OS</Text.Heading>
              <Text>
                Elevating the tool library experience, for borrowers and
                librarians.
              </Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Text.Heading h={3}>Mob app</Text.Heading>
            </Card.Body>
          </Card>
        </section>
      </div>
    </main>
  );
};
