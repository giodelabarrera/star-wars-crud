import createCharacterGender from '../characterGender'
import createCharacterHeight from '../characterHeight'
import createCharacterMass from '../characterMass'
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
  mass: massValue,
  hairColor,
  skinColor,
  eyeColor,
  birthYear,
  gender: genderValue
}: CharacterRaw): Character {
  const gender = createCharacterGender({value: genderValue})
  const height = createCharacterHeight({value: heightValue})
  const mass = createCharacterMass({value: massValue})
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
