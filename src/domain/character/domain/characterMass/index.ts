import CharacterMass from './characterMass'

type CharacterMassRaw = {
  value: number
}

export default function createCharacterMass({
  value
}: CharacterMassRaw): CharacterMass {
  return new CharacterMass({value})
}
