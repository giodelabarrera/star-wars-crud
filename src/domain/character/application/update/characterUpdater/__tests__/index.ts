import fetchMock from 'fetch-mock'

import createCharacterUpdater from '..'
import {CharacterRaw} from '../../../../domain/character'

const baseUrl = 'http://localhost:3306'

afterEach(() => {
  fetchMock.reset()
})

test('should update a character', async () => {
  const id = 1
  const endpoint = `${baseUrl}/characters/${id}`
  const fakeCharacter = {
    id: 1,
    name: 'Luke Skywalker',
    height: 182,
    mass: 80,
    hair_color: 'blond',
    skin_color: 'fair',
    eye_color: 'brown',
    birth_year: '19BBY',
    gender: 'male'
  }
  fetchMock.put(endpoint, fakeCharacter)

  const characterUpdater = createCharacterUpdater()
  const params: CharacterRaw = {
    id: 1,
    name: 'Luke Skywalker',
    height: 182,
    mass: 80,
    hairColor: 'blond',
    skinColor: 'fair',
    eyeColor: 'brown',
    birthYear: '19BBY',
    gender: 'male'
  }
  const updatedCharacter = await characterUpdater.execute(params)

  expect(updatedCharacter).toBeDefined()
  expect(updatedCharacter).not.toBeNull()
  expect(updatedCharacter).toHaveProperty('id', id)
  expect(updatedCharacter.height).toBe(182)
  expect(updatedCharacter.mass).toBe(80)
  expect(updatedCharacter.eyeColor).toBe('brown')
})
