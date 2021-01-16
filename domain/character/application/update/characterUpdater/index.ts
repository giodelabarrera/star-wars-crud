import createRESTRepository from '../../../infrastructure/restRepository'

import CharacterUpdater from './characterUpdater'

export default function createCharacterUpdater() {
  const characterRepository = createRESTRepository()
  return new CharacterUpdater({characterRepository})
}
