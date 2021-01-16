import createCharacterGender from '..'

test('should create a character gender', () => {
  const value = 'male'
  const characterGender = createCharacterGender({value})
  expect(characterGender).toHaveProperty('isMale')
  expect(characterGender).toHaveProperty('isFemale')
  expect(characterGender).toHaveProperty('isNotApplicable')
  expect(characterGender).toHaveProperty('value', value)
})
