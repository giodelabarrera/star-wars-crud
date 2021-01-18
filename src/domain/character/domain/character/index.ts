import createCharacterGender from '../characterGender'
import Character from './character'

export type CharacterRaw = {
  id?: number
  name: string
  height: number
  mass: number
  hairColor: string
  skinColor: string
  eyeColor: string
  birthYear: string
  gender: string
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
  gender: genderValue
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
    gender
  })
}
