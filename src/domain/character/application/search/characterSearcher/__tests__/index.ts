import fetchMock from 'fetch-mock'

import createCharacterSearcher from '..'

const baseUrl = 'http://localhost:3306'

afterEach(() => {
  fetchMock.reset()
})

test('should return a list of characters', async () => {
  const endpoint = `${baseUrl}/characters`
  const fakeCharacters = [
    {
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
    },
    {
      id: 2,
      name: 'C-3PO',
      height: 167,
      mass: 75,
      hair_color: 'n/a',
      skin_color: 'gold',
      eye_color: 'yellow',
      birth_year: '112BBY',
      gender: 'n/a',
      homeworld: 'http://swapi.dev/api/planets/1/',
      films: [
        'http://swapi.dev/api/films/1/',
        'http://swapi.dev/api/films/2/',
        'http://swapi.dev/api/films/3/',
        'http://swapi.dev/api/films/4/',
        'http://swapi.dev/api/films/5/',
        'http://swapi.dev/api/films/6/'
      ],
      species: ['http://swapi.dev/api/species/2/'],
      vehicles: [],
      starships: [],
      created: '2014-12-10T15:10:51.357000Z',
      edited: '2014-12-20T21:17:50.309000Z',
      url: 'http://swapi.dev/api/people/2/'
    },
    {
      id: 3,
      name: 'R2-D2',
      height: 96,
      mass: 3,
      hair_color: 'n/a',
      skin_color: 'white, blue',
      eye_color: 'red',
      birth_year: '33BBY',
      gender: 'n/a',
      homeworld: 'http://swapi.dev/api/planets/8/',
      films: [
        'http://swapi.dev/api/films/1/',
        'http://swapi.dev/api/films/2/',
        'http://swapi.dev/api/films/3/',
        'http://swapi.dev/api/films/4/',
        'http://swapi.dev/api/films/5/',
        'http://swapi.dev/api/films/6/'
      ],
      species: ['http://swapi.dev/api/species/2/'],
      vehicles: [],
      starships: [],
      created: '2014-12-10T15:11:50.376000Z',
      edited: '2014-12-20T21:17:50.311000Z',
      url: 'http://swapi.dev/api/people/3/'
    },
    {
      id: 4,
      name: 'Darth Vader',
      height: 202,
      mass: 13,
      hair_color: 'none',
      skin_color: 'white',
      eye_color: 'yellow',
      birth_year: '41.9BBY',
      gender: 'male',
      homeworld: 'http://swapi.dev/api/planets/1/',
      films: [
        'http://swapi.dev/api/films/1/',
        'http://swapi.dev/api/films/2/',
        'http://swapi.dev/api/films/3/',
        'http://swapi.dev/api/films/6/'
      ],
      species: [],
      vehicles: [],
      starships: ['http://swapi.dev/api/starships/13/'],
      created: '2014-12-10T15:18:20.704000Z',
      edited: '2014-12-20T21:17:50.313000Z',
      url: 'http://swapi.dev/api/people/4/'
    }
  ]
  fetchMock.get(endpoint, fakeCharacters)

  const characterSearcher = createCharacterSearcher()
  const characters = await characterSearcher.execute()

  expect(characters).toBeInstanceOf(Array)
  expect(characters).toHaveLength(4)
})

test('should return a list of characters searched by query', async () => {
  const endpoint = `${baseUrl}/characters?q=luke`
  const fakeCharacters = [
    {
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
  ]
  fetchMock.get(endpoint, fakeCharacters)

  const characterSearcher = createCharacterSearcher()
  const query = 'luke'
  const characters = await characterSearcher.execute({query})

  expect(characters).toBeInstanceOf(Array)
  expect(characters).toHaveLength(1)

  const expectedName = 'Luke Skywalker'
  expect(characters[0]).toHaveProperty('name', expectedName)
})

test('should return a list of characters sorted by name and ordered ascending', async () => {
  const endpoint = `${baseUrl}/characters?_order=asc&_sort=name`
  const fakeCharacters = [
    {
      id: 7,
      name: 'Beru Whitesun lars',
      height: 165,
      mass: 75,
      hair_color: 'brown',
      skin_color: 'light',
      eye_color: 'blue',
      birth_year: '47BBY',
      gender: 'female',
      homeworld: 'http://swapi.dev/api/planets/1/',
      films: [
        'http://swapi.dev/api/films/1/',
        'http://swapi.dev/api/films/5/',
        'http://swapi.dev/api/films/6/'
      ],
      species: [],
      vehicles: [],
      starships: [],
      created: '2014-12-10T15:53:41.121000Z',
      edited: '2014-12-20T21:17:50.319000Z',
      url: 'http://swapi.dev/api/people/7/'
    },
    {
      id: 9,
      name: 'Biggs Darklighter',
      height: 183,
      mass: 84,
      hair_color: 'black',
      skin_color: 'light',
      eye_color: 'brown',
      birth_year: '24BBY',
      gender: 'male',
      homeworld: 'http://swapi.dev/api/planets/1/',
      films: ['http://swapi.dev/api/films/1/'],
      species: [],
      vehicles: [],
      starships: ['http://swapi.dev/api/starships/12/'],
      created: '2014-12-10T15:59:50.509000Z',
      edited: '2014-12-20T21:17:50.323000Z',
      url: 'http://swapi.dev/api/people/9/'
    },
    {
      id: 2,
      name: 'C-3PO',
      height: 167,
      mass: 75,
      hair_color: 'n/a',
      skin_color: 'gold',
      eye_color: 'yellow',
      birth_year: '112BBY',
      gender: 'n/a',
      homeworld: 'http://swapi.dev/api/planets/1/',
      films: [
        'http://swapi.dev/api/films/1/',
        'http://swapi.dev/api/films/2/',
        'http://swapi.dev/api/films/3/',
        'http://swapi.dev/api/films/4/',
        'http://swapi.dev/api/films/5/',
        'http://swapi.dev/api/films/6/'
      ],
      species: ['http://swapi.dev/api/species/2/'],
      vehicles: [],
      starships: [],
      created: '2014-12-10T15:10:51.357000Z',
      edited: '2014-12-20T21:17:50.309000Z',
      url: 'http://swapi.dev/api/people/2/'
    },
    {
      id: 4,
      name: 'Darth Vader',
      height: 202,
      mass: 13,
      hair_color: 'none',
      skin_color: 'white',
      eye_color: 'yellow',
      birth_year: '41.9BBY',
      gender: 'male',
      homeworld: 'http://swapi.dev/api/planets/1/',
      films: [
        'http://swapi.dev/api/films/1/',
        'http://swapi.dev/api/films/2/',
        'http://swapi.dev/api/films/3/',
        'http://swapi.dev/api/films/6/'
      ],
      species: [],
      vehicles: [],
      starships: ['http://swapi.dev/api/starships/13/'],
      created: '2014-12-10T15:18:20.704000Z',
      edited: '2014-12-20T21:17:50.313000Z',
      url: 'http://swapi.dev/api/people/4/'
    }
  ]
  fetchMock.get(endpoint, fakeCharacters)

  const characterSearcher = createCharacterSearcher()
  const fields = {name: 'asc'}
  const characters = await characterSearcher.execute({fields})

  expect(characters).toBeInstanceOf(Array)
  expect(characters).toHaveLength(4)

  const expectedFirstId = 7
  const expectedLastId = 4
  expect(characters[0]).toHaveProperty('id', expectedFirstId)
  expect(characters[3]).toHaveProperty('id', expectedLastId)
})

test('should return a list of characters sorted by name, ordered descending and searched by Dar', async () => {
  const endpoint = `${baseUrl}/characters?_order=desc&_sort=name&q=Dar`
  const fakeCharacters = [
    {
      id: 4,
      name: 'Darth Vader',
      height: 202,
      mass: 13,
      hair_color: 'none',
      skin_color: 'white',
      eye_color: 'yellow',
      birth_year: '41.9BBY',
      gender: 'male',
      homeworld: 'http://swapi.dev/api/planets/1/',
      films: [
        'http://swapi.dev/api/films/1/',
        'http://swapi.dev/api/films/2/',
        'http://swapi.dev/api/films/3/',
        'http://swapi.dev/api/films/6/'
      ],
      species: [],
      vehicles: [],
      starships: ['http://swapi.dev/api/starships/13/'],
      created: '2014-12-10T15:18:20.704000Z',
      edited: '2014-12-20T21:17:50.313000Z',
      url: 'http://swapi.dev/api/people/4/'
    },
    {
      id: 9,
      name: 'Biggs Darklighter',
      height: 183,
      mass: 84,
      hair_color: 'black',
      skin_color: 'light',
      eye_color: 'brown',
      birth_year: '24BBY',
      gender: 'male',
      homeworld: 'http://swapi.dev/api/planets/1/',
      films: ['http://swapi.dev/api/films/1/'],
      species: [],
      vehicles: [],
      starships: ['http://swapi.dev/api/starships/12/'],
      created: '2014-12-10T15:59:50.509000Z',
      edited: '2014-12-20T21:17:50.323000Z',
      url: 'http://swapi.dev/api/people/9/'
    }
  ]
  fetchMock.get(endpoint, fakeCharacters)

  const characterSearcher = createCharacterSearcher()
  const query = 'Dar'
  const fields = {name: 'desc'}
  const characters = await characterSearcher.execute({query, fields})

  expect(characters).toBeInstanceOf(Array)
  expect(characters).toHaveLength(2)

  const expectedFirstId = 4
  const expectedLastId = 9
  expect(characters[0]).toHaveProperty('id', expectedFirstId)
  expect(characters[1]).toHaveProperty('id', expectedLastId)
})
