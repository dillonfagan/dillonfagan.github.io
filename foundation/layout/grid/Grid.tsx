import React, { PropsWithChildren } from "react"
import { combine } from "../../style"
import { Space } from "../padding"

type Props = {
  columns?: number
  rows?: number
  gap?: Space
}

export default function Grid({ columns, rows, gap, children }: PropsWithChildren<Props>) {
  const c = `grid-cols-${columns ?? 'auto'}`
  const r = `grid-rows-${rows ?? 'auto'}`
  const g = gap?.gap ?? 'gap-0'

  const className = combine(["grid", c, r, g])

  return (
    <div className={className}>
      {children}
    </div>
  )
}