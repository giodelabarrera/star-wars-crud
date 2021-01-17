import CharacterRepository from '../../../domain/characterRepository'

export default class CharacterEliminator {
  readonly characterRepository: CharacterRepository

  constructor({characterRepository}) {
    this.characterRepository = characterRepository
  }

  async execute({id}: {id: number}): Promise<boolean> {
    const removed = await this.characterRepository.delete({id})
    return removed
  }
}
