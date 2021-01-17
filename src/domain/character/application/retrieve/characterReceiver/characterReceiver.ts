import CharacterRepository from '../../../domain/characterRepository'

export default class CharacterReceiver {
  readonly characterRepository: CharacterRepository

  constructor({characterRepository}) {
    this.characterRepository = characterRepository
  }

  async execute({id}: {id: number}): Promise<Record<string, unknown>> {
    const character = await this.characterRepository.retrieve({id})
    return character.toJson()
  }
}
