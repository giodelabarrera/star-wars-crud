import Character from './character/character'

export type SearchProps = {
  query: string
  fields: Record<string, unknown>
}

export type RetrieveProps = {
  id: number
}

export type CreateProps = {
  character: Character
}

export type UpdateProps = {
  character: Character
}

interface CharacterRepository {
  search(params?: SearchProps): Promise<Character[]>

  retrieve(params: RetrieveProps): Promise<Character>

  create(params: CreateProps): Promise<Character>

  update(params: UpdateProps): Promise<Character>
}

export default CharacterRepository
