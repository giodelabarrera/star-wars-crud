import CharacterRepository from '../../../domain/characterRepository'

export default class CharacterSearcher {
  readonly characterRepository: CharacterRepository

  constructor({characterRepository}) {
    this.characterRepository = characterRepository
  }

  async execute() {
    const characters = await this.characterRepository.search()
    return characters.map(character => character.toJson())
  }
}
