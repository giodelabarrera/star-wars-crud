import createCharacter from '..'

test('should create a character with all the fields', () => {
  const characterRaw = {
    name: 'Luke Skywalker',
    height: 172,
    mass: 77,
    hairColor: 'blond',
    skinColor: 'fair',
    eyeColor: 'blue',
    birthYear: '19BBY',
    gender: 'male'
  }
  const character = createCharacter(characterRaw)
  expect(character).toHaveProperty('name')
  expect(character.name.value).toBe(characterRaw.name)
  expect(character).toHaveProperty('birthYear.value')
  expect(character.birthYear.value).toBe(characterRaw.birthYear)
  expect(character).toHaveProperty('gender.value')
  expect(character.gender.value).toBe(characterRaw.gender)
  expect(character).toHaveProperty('height.value')
  expect(character.height.value).toBe(characterRaw.height)
  expect(character).toHaveProperty('mass.value')
  expect(character.mass.value).toBe(characterRaw.mass)
  expect(character).toHaveProperty('hairColor', characterRaw.hairColor)
  expect(character).toHaveProperty('skinColor', characterRaw.skinColor)
  expect(character).toHaveProperty('eyeColor', characterRaw.eyeColor)
})

test('should create a character only with required fields', () => {
  const characterRaw = {
    name: 'Luke Skywalker',
    birthYear: '19BBY',
    gender: 'male',
    height: null,
    mass: null,
    hairColor: '',
    skinColor: '',
    eyeColor: ''
  }
  const character = createCharacter(characterRaw)
  expect(character).toHaveProperty('name')
  expect(character.name.value).toBe(characterRaw.name)
  expect(character).toHaveProperty('birthYear.value')
  expect(character.birthYear.value).toBe(characterRaw.birthYear)
  expect(character).toHaveProperty('gender.value')
  expect(character.gender.value).toBe(characterRaw.gender)
  expect(character).toHaveProperty('height.value')
  expect(character.height.value).toBe(characterRaw.height)
  expect(character).toHaveProperty('mass.value')
  expect(character.mass.value).toBe(characterRaw.mass)
  expect(character).toHaveProperty('hairColor', characterRaw.hairColor)
  expect(character).toHaveProperty('skinColor', characterRaw.skinColor)
  expect(character).toHaveProperty('eyeColor', characterRaw.eyeColor)
})

test('should create a character with required and integer fields', () => {
  const characterRaw = {
    name: 'Luke Skywalker',
    birthYear: '19BBY',
    gender: 'male',
    height: 180,
    mass: 90,
    hairColor: '',
    skinColor: '',
    eyeColor: ''
  }
  const character = createCharacter(characterRaw)
  expect(character).toHaveProperty('name')
  expect(character.name.value).toBe(characterRaw.name)
  expect(character).toHaveProperty('birthYear.value')
  expect(character.birthYear.value).toBe(characterRaw.birthYear)
  expect(character).toHaveProperty('gender.value')
  expect(character.gender.value).toBe(characterRaw.gender)
  expect(character).toHaveProperty('height.value')
  expect(character.height.value).toBe(characterRaw.height)
  expect(character).toHaveProperty('mass.value')
  expect(character.mass.value).toBe(characterRaw.mass)
  expect(character).toHaveProperty('hairColor', characterRaw.hairColor)
  expect(character).toHaveProperty('skinColor', characterRaw.skinColor)
  expect(character).toHaveProperty('eyeColor', characterRaw.eyeColor)
})
