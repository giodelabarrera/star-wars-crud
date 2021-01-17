import createRESTRepository from '../../../infrastructure/restRepository'

import CharacterSearcher from './characterSearcher'

export default function createCharacterSearcher() {
  const characterRepository = createRESTRepository()
  return new CharacterSearcher({characterRepository})
}
