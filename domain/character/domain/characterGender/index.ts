import CharacterGender, {Gender} from './characterGender'

type CharacterGenderRawProps = {
  value: Gender
}

export default function createCharacterGender({
  value
}: CharacterGenderRawProps) {
  Object.values(Gender)
  return CharacterGender({value})
}
