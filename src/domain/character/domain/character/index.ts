import createCharacterGender from '../characterGender'
import createCharacterHeight from '../characterHeight'
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
  height: heightValue,
  mass,
  hairColor,
  skinColor,
  eyeColor,
  birthYear,
  gender: genderValue
}: CharacterRaw): Character {
  const gender = createCharacterGender({value: genderValue})
  const height = createCharacterHeight({value: heightValue})
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
