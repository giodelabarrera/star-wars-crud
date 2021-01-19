import StringValueObject from '../../../shared/domain/valueObject/stringValueObject'
import InvalidArgumentException from '../../../shared/domain/invalidArgumentException'

export default class CharacterName extends StringValueObject {
  constructor({value}: {value: string}) {
    super({value})
    if (!this.ensureIsValid(value)) {
      throw new InvalidArgumentException(
        `The value ${value} is not a valid value`
      )
    }
  }

  ensureIsValid(value) {
    return value && String(value)
  }

  toJson() {
    return {value: this.value}
  }
}
