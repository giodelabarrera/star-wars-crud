export type SearchProps = {
  query?: string
}

interface CharacterRepository {
  search({query}: SearchProps): Promise<any[]>
}

export default CharacterRepository
