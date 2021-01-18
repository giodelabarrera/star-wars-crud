export default class NumberValueObject {
  readonly value: number

  constructor({value}: {value: number}) {
    this.value = value
  }

  toJson() {
    return {value: this.value}
  }
}
