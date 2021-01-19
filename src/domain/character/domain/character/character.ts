import CharacterName from '../characterName/characterName'
import CharacterBirthYear from '../characterBirthYear/characterBirthYear'
import CharacterGender from '../characterGender/characterGender'
import CharacterHeight from '../characterHeight/characterHeight'
import CharacterMass from '../characterMass/characterMass'

type CharacterProps = {
  id?: number
  name: CharacterName
  birthYear: CharacterBirthYear
  gender: CharacterGender
  height?: CharacterHeight
  mass?: CharacterMass
  hairColor?: string
  skinColor?: string
  eyeColor?: string
}

export default class Character {
  readonly id: number
  readonly name: CharacterName
  readonly birthYear: CharacterBirthYear
  readonly gender: CharacterGender
  readonly height: CharacterHeight
  readonly mass: CharacterMass
  readonly hairColor: string
  readonly skinColor: string
  readonly eyeColor: string

  constructor({
    id,
    name,
    birthYear,
    gender,
    height,
    mass,
    hairColor,
    skinColor,
    eyeColor
  }: CharacterProps) {
    this.id = id
    this.name = name
    this.birthYear = birthYear
    this.gender = gender
    this.height = height
    this.mass = mass
    this.hairColor = hairColor
    this.skinColor = skinColor
    this.eyeColor = eyeColor
  }

  toJson() {
    return {
      id: this.id,
      name: this.name.toJson().value,
      birthYear: this.birthYear.toJson().value,
      gender: this.gender.toJson().value,
      height: this.height.toJson().value,
      mass: this.mass.toJson().value,
      hairColor: this.hairColor,
      skinColor: this.skinColor,
      eyeColor: this.eyeColor
    }
  }
}
