import characterGender, {
  CharacterGenderType,
  CharacterGender
} from './characterGender'

type CharacterGenderRaw = {
  value: string
}

export default function createCharacterGender({
  value
}: CharacterGenderRaw): CharacterGender {
  return characterGender({value: <CharacterGenderType>value})
}
