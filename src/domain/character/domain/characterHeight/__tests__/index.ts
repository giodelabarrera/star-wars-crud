import createCharacterHeight from '..'

test('should create a character height', () => {
  const value = 189
  const characterHeight = createCharacterHeight({value})
  expect(characterHeight).toBeDefined()
  expect(characterHeight).toHaveProperty('value', value)
})
