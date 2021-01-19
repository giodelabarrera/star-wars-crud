import createCharacterGender from '..'
import InvalidArgumentException from '../../../../shared/domain/invalidArgumentException'

test('should create a character gender', () => {
  const value = 'male'
  const characterGender = createCharacterGender({value})
  expect(characterGender).toHaveProperty('isMale')
  expect(characterGender).toHaveProperty('isFemale')
  expect(characterGender).toHaveProperty('isNotApplicable')
  expect(characterGender).toHaveProperty('value', value)
})

test('should fail when it receives a invalid value', () => {
  const value = 'mmale'
  expect(() => createCharacterGender({value})).toThrowError(
    InvalidArgumentException
  )
})
