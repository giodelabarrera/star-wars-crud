import fetchMock from 'fetch-mock'

import createCharacterCreator from '..'
import {CharacterRaw} from '../../../../domain/character'

const baseUrl = 'http://localhost:3306'

afterEach(() => {
  fetchMock.reset()
})

test('should create a character', async () => {
  const endpoint = `${baseUrl}/characters`
  const fakeCharacter = {
    id: 11,
    name: 'Anakin Skywalker',
    height: '188',
    mass: '84',
    hair_color: 'blond',
    skin_color: 'fair',
    eye_color: 'blue',
    birth_year: '41.9BBY',
    gender: 'male'
  }
  fetchMock.post(endpoint, fakeCharacter)

  const characterCreator = createCharacterCreator()
  const params: CharacterRaw = {
    name: 'Anakin Skywalker',
    height: '188',
    mass: '84',
    hairColor: 'blond',
    skinColor: 'fair',
    eyeColor: 'blue',
    birthYear: '41.9BBY',
    gender: 'male'
  }
  const newCharacter = await characterCreator.execute(params)

  expect(newCharacter).toBeDefined()
  expect(newCharacter).not.toBeNull()
  expect(newCharacter).toHaveProperty('id')
})
