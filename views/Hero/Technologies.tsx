import { Card, Image, Text } from "@/components";
import { Backgrounds } from "@/components/style";
import SectionHeading from "./SectionHeading";

const Technologies = () => {
  return (
    <Card.Outlined>
      <Card.Body>
        <SectionHeading>Technologies</SectionHeading>
      </Card.Body>
      <Card.Body>
        <section className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-8 h-64 xl:h-36">
          {tech.map(({ color, image, title }) => (
            <Card key={`tech-${title}`} bg={color} relative>
              <Card.Body>
                <Text.Heading size="xl">{title}</Text.Heading>
                <div className="absolute -bottom-1 -right-1">
                  <Image src={image} alt={title} height={80} width={80} />
                </div>
              </Card.Body>
            </Card>
          ))}
        </section>
      </Card.Body>
    </Card.Outlined>
  );
};

const tech = Object.freeze([
  {
    title: ".NET",
    image: "/icons/dotnet-mark.svg",
    color: Backgrounds.purple[100],
  },
  {
    title: "React",
    image: "/icons/react-mark.svg",
    color: Backgrounds.blue[100],
  },
  {
    title: "Svelte",
    image: "/icons/svelte-mark.svg",
    color: Backgrounds.orange[100],
  },
  {
    title: "Flutter",
    image: "/icons/flutter-mark.svg",
    color: Backgrounds.sky[100],
  },
]);

export default Technologies;