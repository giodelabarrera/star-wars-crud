import Character from './character/character'

export type SearchProps = {
  query: string
  fields: Record<string, unknown>
}

interface CharacterRepository {
  search(params?: SearchProps): Promise<Character[]>
}

export default CharacterRepository
