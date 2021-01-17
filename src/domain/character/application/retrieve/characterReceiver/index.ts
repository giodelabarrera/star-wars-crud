import createRESTRepository from '../../../infrastructure/restRepository'

import CharacterReceiver from './characterReceiver'

export default function createCharacterReceiver() {
  const characterRepository = createRESTRepository()
  return new CharacterReceiver({characterRepository})
}
