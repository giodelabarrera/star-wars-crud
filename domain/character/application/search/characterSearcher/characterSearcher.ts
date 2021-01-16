import CharacterRepository from '../../../domain/characterRepository'

export default class CharacterSearcher {
  readonly characterRepository: CharacterRepository

  constructor({characterRepository}) {
    this.characterRepository = characterRepository
  }

  async execute(params?): Promise<Record<string, unknown>[]> {
    const characters = await this.characterRepository.search(params)
    return characters.map(character => character.toJson())
  }
}
