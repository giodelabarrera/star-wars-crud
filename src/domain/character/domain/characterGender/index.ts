import CharacterGender, {CharacterGenderType} from './characterGender'

type CharacterGenderRaw = {
  value: string
}

export default function createCharacterGender({
  value
}: CharacterGenderRaw): CharacterGender {
  return new CharacterGender({value: value as CharacterGenderType})
}
