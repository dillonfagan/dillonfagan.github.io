import AppHeader from "@/components/AppHeader"
import ProjectTile from "@/components/ProjectTile"
import Tile from "@/components/Tile"

const Home = () => {
  return (
    <main>
      <AppHeader />
      <div className="flex flex-col p-12">
        <section>
          <h2>Projects</h2>
          <div className="flex flex-row flex-wrap gap-4">
            <ProjectTile
              title="PVD Things - Librarian"
              blurb="Software for managing tool library lending."
            />
            <ProjectTile
              title="PVD Things - Catalog"
              blurb="Tool library catalog software."
            />
            <ProjectTile
              title="Mob"
              blurb="A timer for mob programming."
            />
          </div>
        </section>
        <section>
          <h2>Frameworks</h2>
          <div className="flex flex-row flex-wrap gap-4">
            <Tile />
            <Tile />
          </div>
        </section>
      </div>
    </main>
  )
}

export default Home