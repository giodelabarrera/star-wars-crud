import {CharacterGender} from '../characterGender/characterGender'

type CharacterProps = {
  name: string
  height: string
  mass: string
  hairColor: string
  skinColor: string
  eyeColor: string
  birthYear: string
  gender: CharacterGender
  created: string
  edited: string
}

export type Character = {
  name: string
  height: string
  mass: string
  hairColor: string
  skinColor: string
  eyeColor: string
  birthYear: string
  gender: CharacterGender
  created: string
  edited: string
  toJson: () => Record<string, unknown>
}

function character({
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
}: CharacterProps): Character {
  function toJson() {
    return {
      name,
      height,
      mass,
      hairColor,
      skinColor,
      eyeColor,
      birthYear,
      gender: gender.toJson().value,
      created,
      edited
    }
  }

  return {
    name,
    height,
    mass,
    hairColor,
    skinColor,
    eyeColor,
    birthYear,
    gender,
    created,
    edited,
    toJson
  }
}

export default character