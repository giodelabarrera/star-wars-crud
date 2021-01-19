import InvalidArgumentException from '../../../shared/domain/invalidArgumentException'

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

export default class CharacterGender {
  readonly value: CharacterGenderType

  constructor({value}: CharacterGenderProps) {
    if (!this.ensureIsValid(value)) {
      throw new InvalidArgumentException(`The value ${value} is not accepted`)
    }
    this.value = value
  }

  private ensureIsValid(value) {
    return Object.values(TYPES).includes(value)
  }

  toJson() {
    return {value: this.value}
  }

  isMale(): boolean {
    return this.value === TYPES.MALE
  }

  isFemale(): boolean {
    return this.value === TYPES.FEMALE
  }

  isNotApplicable(): boolean {
    return this.value === TYPES.NOT_APPLICABLE
  }
}
