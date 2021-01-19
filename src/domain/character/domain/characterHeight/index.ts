import CharacterHeight from './characterHeight'

type CharacterHeightRaw = {
  value: number
}

export default function createCharacterHeight({
  value
}: CharacterHeightRaw): CharacterHeight {
  return new CharacterHeight({value})
}
