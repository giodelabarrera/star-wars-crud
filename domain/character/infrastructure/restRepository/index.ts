import client from './client'
import RESTRepository from './restRepository'

import CharacterRepository from '../../domain/characterRepository'

export default function createRESTRepository(): CharacterRepository {
  return new RESTRepository({client})
}
