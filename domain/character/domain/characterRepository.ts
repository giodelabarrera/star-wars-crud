import Character from './character/character'

export type SearchProps = {
  query?: string
}

interface CharacterRepository {
  search(params?: SearchProps): Promise<Character[]>
}

export default CharacterRepository
