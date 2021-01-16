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

export type CharacterGender = {
  value: CharacterGenderType
  isMale: () => boolean
  isFemale: () => boolean
  isNotApplicable: () => boolean
  toJson: () => Record<string, unknown>
}

export default function CharacterGender({
  value
}: CharacterGenderProps): CharacterGender {
  function toJson() {
    return {value}
  }

  function isMale(): boolean {
    return value === TYPES.MALE
  }

  function isFemale(): boolean {
    return value === TYPES.FEMALE
  }

  function isNotApplicable(): boolean {
    return value === TYPES.NOT_APPLICABLE
  }

  return {value, isMale, isFemale, isNotApplicable, toJson}
}
