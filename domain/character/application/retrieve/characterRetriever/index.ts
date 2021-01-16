import createRESTRepository from '../../../infrastructure/restRepository'

import CharacterRetriever from './characterRetriever'

export default function createCharacterRetriever() {
  const characterRepository = createRESTRepository()
  return new CharacterRetriever({characterRepository})
}
