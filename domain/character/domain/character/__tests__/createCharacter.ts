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
    gender: 'male'
  }
  const character = createCharacter(characterRaw)
  expect(character).toHaveProperty('name', characterRaw.name)
  expect(character).toHaveProperty('height', characterRaw.height)
  expect(character).toHaveProperty('mass', characterRaw.mass)
  expect(character).toHaveProperty('hairColor', characterRaw.hairColor)
  expect(character).toHaveProperty('skinColor', characterRaw.skinColor)
  expect(character).toHaveProperty('eyeColor', characterRaw.eyeColor)
  expect(character).toHaveProperty('birthYear', characterRaw.birthYear)
  expect(character).toHaveProperty('gender.value')
  expect(character.gender.value).toBe(characterRaw.gender)
})
