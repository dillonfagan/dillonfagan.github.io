import AppHeader from "@/components/AppHeader"
import HorizontalEllipsis from "@/components/HorizontalEllipsis"
import ProjectTile from "@/components/ProjectTile"
import Tile from "@/components/Tile"

const Home = () => {
  return (
    <main className="flex flex-col items-center">
      <AppHeader />
      <div className="flex flex-col w-full md:w-4/5 lg:w-2/3 max-w-5xl p-4 md:p-0">
        <section className="hero">
          <h2 className="text-4xl lg:text-5xl break-words leading-normal lg:leading-relaxed text-zinc-400">
            I <span className="text-black">develop software</span>, <span className="text-black">envision products</span>, and build <span className="text-black">cooperative enterprises</span>.
          </h2>
        </section>
        <section className="flex flex-row justify-center items-center text-zinc-400">
          <HorizontalEllipsis />
        </section>
        <section className="major">
          <h2>Cooperatives</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <ProjectTile
              title="Starboard"
              subtitle="Co-Founder, Developer"
              blurb="Intended as a worker-owned co-op of software developers, Starboard launched PVD Things and built the first iteration of the Catalog software."
            />
            <ProjectTile
              title="Providence Library of Things"
              subtitle="Co-Founder, Digital Director"
              blurb="A cooperative 501(c)(3) of 285+ members, serving the greater Providence area with rent-free tool lending. Members contribute volunteer time and money to split the operating costs. In our first year, the average borrower saved $500 annually."
              href="https://www.pvdthings.coop"
            />
            <ProjectTile
              title="Commonplace"
              subtitle="Consultant"
              blurb="Commonplace is a startup that envisions a platform cooperative for community coordination."
              href="https://www.commonplace.coop"
            />
          </div>
        </section>
        <section className="major">
          <h2>Software</h2>
          <div className="grid grid-cols-2 gap-4">
            <ProjectTile
              title="Librarian"
              blurb="Simply manage your Library of Things."
              href="https://github.com/pvdthings/librarian_app"
            />
            <ProjectTile
              title="Catalog"
              blurb="Browse the things at PVD Things."
              href="https://app.pvdthings.coop"
            />
            <ProjectTile
              title="Mob"
              blurb="Start mob programming with minimal setup."
              href="/mob/index.html"
            />
          </div>
        </section>
        <section>
          <h3>Tools</h3>
          <div className="flex flex-row flex-wrap gap-4">
            <Tile title="React" imgSrc="/icons/react-mark.svg" />
            <Tile title="Svelte" imgSrc="/icons/svelte-mark.svg" />
            <Tile title="Flutter" imgSrc="/icons/flutter-mark.svg" />
            <Tile title=".NET" imgSrc="/icons/dotnet-mark.svg" />
          </div>
        </section>
        <section>
          <h3>Languages</h3>
          <div className="flex flex-row flex-wrap gap-4">
            <Tile title="TypeScript" imgSrc="/icons/ts-mark.svg" />
            <Tile title="JavaScript" imgSrc="/icons/js-mark.svg" />
            <Tile title="Dart" imgSrc="/icons/dart-mark.png" />
            <Tile title="C#" imgSrc="/icons/csharp-mark.svg" />
          </div>
        </section>
      </div>
    </main>
  )
}

export default Home