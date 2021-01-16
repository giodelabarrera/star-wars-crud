import CharacterGender, {CharacterGenderType} from './characterGender'

type CharacterGenderRawProps = {
  value: string
}

function createCharacterGender({value}: CharacterGenderRawProps) {
  return CharacterGender({value: <CharacterGenderType>value})
}

export default createCharacterGender
