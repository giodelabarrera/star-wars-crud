import CharacterName from './characterName'

type CharacterNameRaw = {
  value: string
}

export default function createCharacterName({
  value
}: CharacterNameRaw): CharacterName {
  return new CharacterName({value})
}
