import AppHeader from "@/components/AppHeader"
import Biography from "@/components/Biography"
import ProjectTile from "@/components/ProjectTile"
import Tile from "@/components/Tile"

const Home = () => {
  return (
    <main className="flex flex-col">
      <AppHeader />
      <div className="flex flex-col p-8 md:p-12">
        <section>
          <h2>Bio</h2>
          <Biography />
        </section>
        <section>
          <h2>Projects</h2>
          <div className="flex flex-row flex-wrap gap-4">
            <ProjectTile
              title="PVD Things"
              blurb="Open source software for tool-lending libraries."
              href="https://github.com/pvdthings"
            />
            <ProjectTile
              title="Mob"
              blurb="A timer for mob programming."
              href="https://github.com/dillonfagan/mob"
            />
          </div>
        </section>
        <section>
          <h2>Frameworks</h2>
          <div className="flex flex-row flex-wrap gap-4">
            <Tile title="React" imgSrc="/icons/react-mark.svg" />
            <Tile title="Svelte" imgSrc="/icons/svelte-mark.svg" />
            <Tile title="Flutter" imgSrc="/icons/flutter-mark.svg" />
            <Tile title=".NET" imgSrc="/icons/dotnet-mark.svg" />
          </div>
        </section>
        <section>
          <h2>Languages</h2>
          <div className="flex flex-row flex-wrap gap-4">
            <Tile title="JavaScript" imgSrc="/icons/js-mark.svg" />
            <Tile title="TypeScript" imgSrc="/icons/ts-mark.svg" />
            <Tile title="C#" imgSrc="/icons/csharp-mark.svg" />
            <Tile title="Dart" imgSrc="/icons/dart-mark.png" />
            <Tile title="Python" imgSrc="/icons/python-mark.png" />
          </div>
        </section>
        <section>
          <h2>Human Languages</h2>
          <div className="flex flex-row flex-wrap gap-4">
            <Tile title="English" />
            <Tile title="German" />
          </div>
        </section>
      </div>
    </main>
  )
}

export default Home