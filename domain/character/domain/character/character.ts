import CharacterGender from '../characterGender/characterGender'

type CharacterProps = {
  id?: number
  name: string
  height: string
  mass: string
  hairColor: string
  skinColor: string
  eyeColor: string
  birthYear: string
  gender: CharacterGender
  created?: string
  edited?: string
}

export default class Character {
  readonly id: number
  readonly name: string
  readonly height: string
  readonly mass: string
  readonly hairColor: string
  readonly skinColor: string
  readonly eyeColor: string
  readonly birthYear: string
  readonly gender: CharacterGender
  readonly created: string
  readonly edited: string

  constructor({
    id,
    name,
    height,
    mass,
    hairColor,
    skinColor,
    eyeColor,
    birthYear,
    gender,
    created,
    edited
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
    this.created = created
    this.edited = edited
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
      gender: this.gender.toJson().value,
      created: this.created,
      edited: this.edited
    }
  }
}
