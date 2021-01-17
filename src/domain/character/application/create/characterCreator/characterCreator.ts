import CharacterRepository from '../../../domain/characterRepository'
import createCharacter, {CharacterRaw} from '../../../domain/character'

export default class CharacterCreator {
  readonly characterRepository: CharacterRepository

  constructor({
    characterRepository
  }: {
    characterRepository: CharacterRepository
  }) {
    this.characterRepository = characterRepository
  }

  async execute(params: CharacterRaw): Promise<Record<string, unknown>> {
    const character = createCharacter(params)
    const createdCharacter = await this.characterRepository.create({character})
    return createdCharacter.toJson()
  }
}
