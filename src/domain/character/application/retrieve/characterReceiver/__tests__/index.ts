import fetchMock from 'fetch-mock'

import createCharacterReceiver from '..'

const baseUrl = 'http://localhost:3306'

afterEach(() => {
  fetchMock.reset()
})

test('should return a character by id', async () => {
  const id = 1
  const endpoint = `${baseUrl}/characters/${id}`
  const fakeCharacter = {
    id: 1,
    name: 'Luke Skywalker',
    height: 172,
    mass: 77,
    hair_color: 'blond',
    skin_color: 'fair',
    eye_color: 'blue',
    birth_year: '19BBY',
    gender: 'male',
    homeworld: 'http://swapi.dev/api/planets/1/',
    films: [
      'http://swapi.dev/api/films/1/',
      'http://swapi.dev/api/films/2/',
      'http://swapi.dev/api/films/3/',
      'http://swapi.dev/api/films/6/'
    ],
    species: [],
    vehicles: [
      'http://swapi.dev/api/vehicles/14/',
      'http://swapi.dev/api/vehicles/30/'
    ],
    starships: [
      'http://swapi.dev/api/starships/12/',
      'http://swapi.dev/api/starships/22/'
    ],
    created: '2014-12-09T13:50:51.644000Z',
    edited: '2014-12-20T21:17:56.891000Z',
    url: 'http://swapi.dev/api/people/1/'
  }
  fetchMock.get(endpoint, fakeCharacter)

  const characterReceiver = createCharacterReceiver()
  const character = await characterReceiver.execute({id})

  expect(character).toBeDefined()
  expect(character).not.toBeNull()
  expect(character).toHaveProperty('id', id)
})

test('should fail when it happens a not found error', async () => {
  const id = 2
  const endpoint = `${baseUrl}/characters/${id}`
  fetchMock.get(endpoint, 404)

  const characterReceiver = createCharacterReceiver()

  await expect(characterReceiver.execute({id})).rejects.toHaveProperty(
    'status',
    404
  )
})

test('should fail when it happens a server error', async () => {
  const id = 2
  const endpoint = `${baseUrl}/characters/${id}`
  fetchMock.get(endpoint, 500)

  const characterReceiver = createCharacterReceiver()

  await expect(characterReceiver.execute({id})).rejects.toHaveProperty(
    'status',
    500
  )
})
