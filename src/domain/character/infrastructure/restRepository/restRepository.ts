import {stringify} from 'query-string'

import createCharacter from '../../domain/character'
import Character from '../../domain/character/character'
import CharacterRepository, {
  RetrieveProps,
  CreateProps,
  UpdateProps,
  DeleteProps
} from '../../domain/characterRepository'

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

  async retrieve({id}: RetrieveProps): Promise<Character> {
    const options = {
      method: ClientMethod.GET
    }
    const response = await this.client(`characters/${id}`, options)

    const characterRaw = mapSingleResponseToCharacterRaw(response)
    const character = createCharacter(characterRaw)
    return character
  }

  async create({character}: CreateProps): Promise<Character> {
    const singleData: Record<string, unknown> = mapCharacterRawToSingleData(
      character
    )
    const options = {
      method: ClientMethod.POST,
      data: singleData
    }
    const response = await this.client(`characters`, options)

    const characterRaw = mapSingleResponseToCharacterRaw(response)
    const createdCharacter = createCharacter(characterRaw)
    return createdCharacter
  }

  async update({character}: UpdateProps): Promise<Character> {
    const {id} = character
    const singleData: Record<string, unknown> = mapCharacterRawToSingleData(
      character
    )
    const options = {
      method: ClientMethod.PUT,
      data: singleData
    }
    const response = await this.client(`characters/${id}`, options)

    const characterRaw = mapSingleResponseToCharacterRaw(response)
    const updatedCharacter = createCharacter(characterRaw)
    return updatedCharacter
  }

  async delete({id}: DeleteProps): Promise<boolean> {
    const options = {
      method: ClientMethod.DELETE
    }
    await this.client(`characters/${id}`, options)
    return true
  }
}

function mapFieldsToFieldsData(fields) {
  return {
    ...(fields.name && {name: fields.name}),
    ...(fields.height && {height: fields.height}),
    ...(fields.mass && {mass: fields.mass}),
    ...(fields.gender && {gender: fields.gender}),
    ...(fields.hairColor && {hair_color: fields.hairColor}),
    ...(fields.skinColor && {skin_color: fields.skinColor}),
    ...(fields.eyeColor && {eye_color: fields.eyeColor}),
    ...(fields.birthYear && {birth_year: fields.birthYear})
  }
}

function mapSearchParamsToQueryString({query, fields}) {
  const parsedParams: Record<string, unknown> = {}
  if (query) parsedParams.q = query
  if (fields) {
    const fieldsData = mapFieldsToFieldsData(fields)
    parsedParams._sort = Object.keys(fieldsData).join(',')
    parsedParams._order = Object.values(fieldsData).join(',')
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
    gender
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
    gender
  }
}

function mapListResponseToCharactersRaw(response) {
  return response.map(mapSingleResponseToCharacterRaw)
}

function mapCharacterRawToSingleData(character: Character) {
  return {
    name: character.name.value,
    birth_year: character.birthYear.value,
    gender: character.gender.value,
    height: character.height.value,
    mass: character.mass.value,
    hair_color: character.hairColor,
    skin_color: character.skinColor,
    eye_color: character.eyeColor
  }
}

export default RESTRepository
