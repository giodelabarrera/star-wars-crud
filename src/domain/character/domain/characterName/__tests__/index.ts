import createCharacterName from '..'
import InvalidArgumentException from '../../../../shared/domain/invalidArgumentException'

test('should create a character name', () => {
  const value = 'Anakin Skywalker'
  const characterMass = createCharacterName({value})
  expect(characterMass).toBeDefined()
  expect(characterMass).toHaveProperty('value', value)
})

test('should fail when it receives a invalid value', () => {
  const value = ''
  expect(() => createCharacterName({value})).toThrowError(
    InvalidArgumentException
  )
})
