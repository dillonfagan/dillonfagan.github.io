type SpacingScale = 1|2|3|4|5
const baseSpacing = 2

class Space {
  private scale: SpacingScale

  constructor(scale?: SpacingScale) {
    this.scale = scale ?? 1
  }

  get gap() {
    return `gap-${baseSpacing * this.scale}`
  }

  get padding() {
    return `p-${baseSpacing * this.scale}`
  }

  static get none() {
    return 0
  }
}

export default Space