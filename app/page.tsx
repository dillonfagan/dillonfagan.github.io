import { Card, Text } from "@/components";

export default () => {
  return (
    <main>
      <div className="flex flex-col gap-4 items-stretch mx-auto w-screen sm:w-4/5 md:w-2/3 lg:w-3/5 p-4 lg:p-8">
        <Card.Outlined>
            <Card.Body>
              <Text.Hero>I <Text.Accent>develop</Text.Accent> software, <Text.Accent>envision</Text.Accent> products, and <Text.Accent>organize</Text.Accent> cooperative enterprises.</Text.Hero>
            </Card.Body>
        </Card.Outlined>
        <section>
          <Card>
            <Card.Body>
              My name is Dillon Fagan, software engineer, product manager, and cooperative entrepreneur. For the past 6 years, I've worked in fintech building backend and frontend applications for wealth management. For 4 of those years, I've been co-founder and product manager for an open source suite called Library OS.
            </Card.Body>
          </Card>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <Card.Body>PVD Things</Card.Body>
          </Card>
          <Card>
            <Card.Body>Library OS</Card.Body>
          </Card>
          <Card>
            <Card.Body>Mob</Card.Body>
          </Card>
        </section>
      </div>
    </main>
  );
};
