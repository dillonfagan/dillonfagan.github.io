type Class = string|undefined
type ClassCombination = Class[]

export default function combine(classes: ClassCombination) {
  return classes.filter(c => !!c).join(' ')
}