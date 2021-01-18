import CharacterGender from '../characterGender/characterGender'

type CharacterProps = {
  id?: number
  name: string
  height: number
  mass: number
  hairColor: string
  skinColor: string
  eyeColor: string
  birthYear: string
  gender: CharacterGender
}

export default class Character {
  readonly id: number | undefined
  readonly name: string
  readonly height: number
  readonly mass: number
  readonly hairColor: string
  readonly skinColor: string
  readonly eyeColor: string
  readonly birthYear: string
  readonly gender: CharacterGender

  constructor({
    id,
    name,
    height,
    mass,
    hairColor,
    skinColor,
    eyeColor,
    birthYear,
    gender
  }: CharacterProps) {
    this.id = id
    this.name = name
    this.height = height
    this.mass = mass
    this.hairColor = hairColor
    this.skinColor = skinColor
    this.eyeColor = eyeColor
    this.birthYear = birthYear
    this.gender = gender
  }

  toJson() {
    return {
      id: this.id,
      name: this.name,
      height: this.height,
      mass: this.mass,
      hairColor: this.hairColor,
      skinColor: this.skinColor,
      eyeColor: this.eyeColor,
      birthYear: this.birthYear,
      gender: this.gender.toJson().value
    }
  }
}
