import createRESTRepository from '../../../infrastructure/restRepository'

import CharacterEliminator from './characterEliminator'

export default function createCharacterEliminator() {
  const characterRepository = createRESTRepository()
  return new CharacterEliminator({characterRepository})
}
