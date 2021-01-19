import CharacterBirthYear from './characterBirthYear'

type CharacterBirthYearRaw = {
  value: string
}

export default function createCharacterBirthYear({
  value
}: CharacterBirthYearRaw): CharacterBirthYear {
  return new CharacterBirthYear({value})
}
