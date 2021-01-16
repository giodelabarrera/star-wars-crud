import CharacterRepository from '../../../domain/characterRepository'
import createCharacter, {CharacterRaw} from '../../../domain/character'

export default class CharacterUpdater {
  readonly characterRepository: CharacterRepository

  constructor({characterRepository}) {
    this.characterRepository = characterRepository
  }

  async execute(params: CharacterRaw): Promise<Record<string, unknown>> {
    const character = createCharacter(params)
    const updatedCharacter = await this.characterRepository.update({character})
    return updatedCharacter.toJson()
  }
}
