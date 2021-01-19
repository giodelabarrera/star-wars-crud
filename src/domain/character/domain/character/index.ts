import createCharacterName from '../characterName'
import createCharacterHeight from '../characterHeight'
import createCharacterMass from '../characterMass'
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
  name: nameValue,
  height: heightValue,
  mass: massValue,
  hairColor,
  skinColor,
  eyeColor,
  birthYear,
  gender: genderValue
}: CharacterRaw): Character {
  const name = createCharacterName({value: nameValue})
  const height = createCharacterHeight({value: heightValue})
  const mass = createCharacterMass({value: massValue})
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
