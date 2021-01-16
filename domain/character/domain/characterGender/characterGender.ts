const TYPES = {
  MALE: 'male',
  FEMALE: 'female',
  NOT_APPLICABLE: 'n/a'
} as const

type Keys = keyof typeof TYPES
export type CharacterGenderType = typeof TYPES[Keys]

type CharacterGenderProps = {
  value: CharacterGenderType
}

export default function CharacterGender({value}: CharacterGenderProps) {
  function toJson() {
    return {value}
  }

  function isMale() {
    return value === TYPES.MALE
  }

  function isFemale() {
    return value === TYPES.FEMALE
  }

  function isNotApplicable() {
    return value === TYPES.NOT_APPLICABLE
  }

  return {value, isMale, isFemale, isNotApplicable, toJson}
}
