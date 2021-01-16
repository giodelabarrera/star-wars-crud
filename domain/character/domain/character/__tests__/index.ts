import createCharacter from '..'

test('should create a character', () => {
  const characterRaw = {
    name: 'Luke Skywalker',
    height: '172',
    mass: '77',
    hairColor: 'blond',
    skinColor: 'fair',
    eyeColor: 'blue',
    birthYear: '19BBY',
    gender: 'male',
    created: '2014-12-09T13:50:51.644000Z',
    edited: '2014-12-20T21:17:56.891000Z'
  }
  const character = createCharacter(characterRaw)
  expect(character).toHaveProperty('name', characterRaw.name)
  expect(character).toHaveProperty('height', characterRaw.height)
  expect(character).toHaveProperty('mass', characterRaw.mass)
  expect(character).toHaveProperty('hairColor', characterRaw.hairColor)
  expect(character).toHaveProperty('skinColor', characterRaw.skinColor)
  expect(character).toHaveProperty('eyeColor', characterRaw.eyeColor)
  expect(character).toHaveProperty('birthYear', characterRaw.birthYear)
  expect(character).toHaveProperty('gender.toJson')
  expect(character.gender.toJson().value).toBe(characterRaw.gender)
  expect(character).toHaveProperty('created', characterRaw.created)
  expect(character).toHaveProperty('edited', characterRaw.edited)
})
