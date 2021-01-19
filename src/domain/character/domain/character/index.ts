import createCharacterName from '../characterName'
import createCharacterHeight from '../characterHeight'
import createCharacterMass from '../characterMass'
import createCharacterGender from '../characterGender'
import Character from './character'
import createCharacterBirthYear from '../characterBirthYear'

export type CharacterRaw = {
  id?: number
  name: string
  birthYear: string
  gender: string
  height?: number
  mass?: number
  hairColor?: string
  skinColor?: string
  eyeColor?: string
}

export default function createCharacter({
  id,
  name: nameValue,
  height: heightValue,
  mass: massValue,
  hairColor,
  skinColor,
  eyeColor,
  birthYear: birthYearValue,
  gender: genderValue
}: CharacterRaw): Character {
  const name = createCharacterName({value: nameValue})
  const birthYear = createCharacterBirthYear({value: birthYearValue})
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
