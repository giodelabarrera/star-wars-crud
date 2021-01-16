import {stringify} from 'query-string'

import createCharacter from '../../domain/character'
import Character from '../../domain/character/character'
import CharacterRepository from '../../domain/characterRepository'

import {ClientMethod, ClientOptions} from './client'

class RESTRepository implements CharacterRepository {
  readonly client: (endpoint: string, options: ClientOptions) => Promise<any>

  constructor({client}) {
    this.client = client
  }

  async search({query = '', fields = null} = {}): Promise<Character[]> {
    const params = {query, fields}
    const queryString = mapSearchParamsToQueryString(params)

    const endpoint = 'characters' + (queryString && `?${queryString}`)
    const options = {
      method: ClientMethod.GET
    }
    const response = await this.client(endpoint, options)

    const charactersRaw = mapListResponseToCharactersRaw(response)
    const characters = charactersRaw.map(createCharacter)
    return characters
  }

  async retrieve({id}: {id: number}): Promise<Character> {
    const options = {
      method: ClientMethod.GET
    }
    const response = await this.client(`characters/${id}`, options)

    const characterRaw = mapSingleResponseToCharacterRaw(response)
    const character = createCharacter(characterRaw)
    return character
  }
}

function mapSearchParamsToQueryString({query, fields}) {
  const parsedParams: Record<string, unknown> = {}
  if (query) parsedParams.q = query
  if (fields) {
    parsedParams._sort = Object.keys(fields).join(',')
    parsedParams._order = Object.values(fields).join(',')
  }
  return stringify(parsedParams)
}

function mapSingleResponseToCharacterRaw(response) {
  const {
    id,
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
    id,
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
