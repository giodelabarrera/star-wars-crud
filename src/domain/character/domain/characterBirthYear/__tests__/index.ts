import createCharacterBirthYear from '..'
import InvalidArgumentException from '../../../../shared/domain/invalidArgumentException'

test('should create a character birth year', () => {
  const value = '57BBY'
  const characterBirthYear = createCharacterBirthYear({value})
  expect(characterBirthYear).toBeDefined()
  expect(characterBirthYear).toHaveProperty('value', value)
})

test('should fail when it receives a invalid value', () => {
  const value = ''
  expect(() => createCharacterBirthYear({value})).toThrowError(
    InvalidArgumentException
  )
})
