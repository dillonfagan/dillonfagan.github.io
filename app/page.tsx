import AppHeader from "@/components/AppHeader"
import ProjectTile from "@/components/ProjectTile"
import Tile from "@/components/Tile"

const Home = () => {
  return (
    <main className="flex flex-col items-center">
      <AppHeader />
      <div className="flex flex-col w-full md:w-4/5 lg:w-2/3 xl:w-1/2 p-8 md:p-0">
        <section>
          <h2 className="text-4xl lg:text-5xl break-words leading-normal lg:leading-relaxed text-zinc-400">
            I <span className="text-black">develop software</span>, <span className="text-black">envision products</span>, and build <span className="text-black">cooperative enterprises</span>.
          </h2>
        </section>
        <section>
          <h2>Software</h2>
          <div className="flex flex-row flex-wrap gap-4">
            <ProjectTile
              title="Librarian"
              blurb="Simply manage your library of things."
              href="https://github.com/pvdthings/librarian_app"
            />
            <ProjectTile
              title="Mob"
              blurb="A timer for mob programming."
              href="https://github.com/dillonfagan/mob"
            />
          </div>
        </section>
        <section>
          <h3>Frameworks</h3>
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
            <Tile title="JavaScript" imgSrc="/icons/js-mark.svg" />
            <Tile title="TypeScript" imgSrc="/icons/ts-mark.svg" />
            <Tile title="C#" imgSrc="/icons/csharp-mark.svg" />
            <Tile title="Dart" imgSrc="/icons/dart-mark.png" />
            <Tile title="Python" imgSrc="/icons/python-mark.png" />
          </div>
        </section>
      </div>
    </main>
  )
}

export default Home