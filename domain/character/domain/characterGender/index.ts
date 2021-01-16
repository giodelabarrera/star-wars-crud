import CharacterGender, {CharacterGenderType} from './characterGender'

type CharacterGenderRawProps = {
  value: string
}

export default function createCharacterGender({
  value
}: CharacterGenderRawProps) {
  return CharacterGender({value: <CharacterGenderType>value})
}
