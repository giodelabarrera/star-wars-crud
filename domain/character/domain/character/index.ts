import createCharacterGender from '../characterGender'
import Character from './character'

export type CharacterRaw = {
  id?: number
  name: string
  height: string
  mass: string
  hairColor: string
  skinColor: string
  eyeColor: string
  birthYear: string
  gender: string
  created?: string
  edited?: string
}

export default function createCharacter({
  id,
  name,
  height,
  mass,
  hairColor,
  skinColor,
  eyeColor,
  birthYear,
  gender: genderValue,
  created,
  edited
}: CharacterRaw): Character {
  const gender = createCharacterGender({value: genderValue})
  return new Character({
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
  })
}
