import Character from './character/character'

export type SearchProps = {
  query: string
  fields: Record<string, unknown>
}

export type RetrieveProps = {
  id: number
}

interface CharacterRepository {
  search(params?: SearchProps): Promise<Character[]>

  retrieve(params?: RetrieveProps): Promise<Character>
}

export default CharacterRepository
