import createCharacterGender from '../index'
import {Gender} from '../characterGender'

test('should return a character gender', () => {
  const characterGender = createCharacterGender({value: Gender.FEMALE})

  debugger
  expect(characterGender).toBe(4)
})
