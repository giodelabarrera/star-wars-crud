import createCharacter from '../../domain/character'
import Character from '../../domain/character/character'
import CharacterRepository from '../../domain/characterRepository'

import {ClientMethod, ClientOptions} from './client'

class RESTRepository implements CharacterRepository {
  readonly client: (endpoint: string, options: ClientOptions) => Promise<any>

  constructor({client}) {
    this.client = client
  }

  async search(): Promise<Character[]> {
    const options = {method: ClientMethod.GET}
    const response = await this.client('/characters', options)
    const charactersRaw = mapListResponseToCharactersRaw(response)
    const characters = charactersRaw.map(createCharacter)
    return characters
  }
}

function mapSingleResponseToCharacterRaw(response) {
  const {
    name,
    height,
    mass,
    hair_color: hairColor,
    skin_color: skinColor,
    eye_color: eyeColor,
    birth_year: birthYear,
    gender,
    created,
    edited
  } = response
  return {
    name,
    height,
    mass,
    hairColor,
    skinColor,
    eyeColor,
    birthYear,
    gender,
    created,
    edited
  }
}

function mapListResponseToCharactersRaw(response) {
  return response.map(mapSingleResponseToCharacterRaw)
}

export default RESTRepository
