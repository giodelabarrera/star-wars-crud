export default abstract class StringValueObject {
  readonly value: string

  constructor({value}: {value: string}) {
    this.value = value
  }

  toJson() {
    return {value: this.value}
  }
}
