import { Color, Colors, combine, Grid, PaddingProps, Space } from "@/foundation";
import { PropsWithChildren } from "react"

export default function Page() {
  return (
    <main className="flex flex-col">
      <Grid columns={3} gap={new Space()}>
        <Feature color={new Color(Colors.surface)} padding={new Space()}>
          <h2 className="text-2xl font-semibold">Library OS</h2>
        </Feature>
        <Feature color={new Color(Colors.surface)} padding={new Space()}>
          <h2 className="text-2xl font-semibold">PVD Things</h2>
        </Feature>
        <Feature color={new Color(Colors.surface)} padding={new Space()}>
          <h2 className="text-2xl font-semibold">Starboard</h2>
        </Feature>
      </Grid>
    </main>
  )
}

type FeatureProps = {
  color?: Color
} & PaddingProps

function Feature({ color, padding, children }: PropsWithChildren<FeatureProps>) {
  const bg = color?.background
  const p = padding?.padding
  const className = combine(["relative", "rounded-md", bg, p])

  return (
    <div className={className}>
      {children}
    </div>
  )
}