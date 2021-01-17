import createRESTRepository from '../../../infrastructure/restRepository'

import CharacterCreator from './characterCreator'

export default function createCharacterCreator() {
  const characterRepository = createRESTRepository()
  return new CharacterCreator({characterRepository})
}
