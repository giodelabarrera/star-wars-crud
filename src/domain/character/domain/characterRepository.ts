import Character from './character/character'

export type SearchProps = {
  query?: string
  fields?: Record<string, unknown> | null
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

export type DeleteProps = {
  id: number
}

interface CharacterRepository {
  search(params?: SearchProps): Promise<Character[]>

  retrieve(params: RetrieveProps): Promise<Character>

  create(params: CreateProps): Promise<Character>

  update(params: UpdateProps): Promise<Character>

  delete(params: DeleteProps): Promise<boolean>
}

export default CharacterRepository
