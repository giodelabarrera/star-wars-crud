import InvalidArgumentException from '../../../shared/domain/invalidArgumentException'
import NumberValueObject from '../../../shared/domain/valueObject/numberValueObject'

export default class CharacterHeight extends NumberValueObject {
  constructor({value}: {value: number}) {
    super({value})
    if (value && !this.ensureIsValid(value)) {
      throw new InvalidArgumentException(
        `The value ${value} is not a valid value`
      )
    }
  }

  ensureIsValid(value) {
    return Number.isInteger(value)
  }

  toJson() {
    return {value: this.value}
  }
}
