import createCharacterMass from '..'

test('should create a character mass', () => {
  const value = 80
  const characterMass = createCharacterMass({value})
  expect(characterMass).toBeDefined()
  expect(characterMass).toHaveProperty('value', value)
})
