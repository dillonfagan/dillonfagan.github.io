import Colors from "./colors"
import colors from "./colors.map"

class Color {
  private value: Colors

  constructor(value: Colors) {
    this.value = value
  }

  get background() {
    return `bg-${colors[this.value]}`
  }
}

export default Color