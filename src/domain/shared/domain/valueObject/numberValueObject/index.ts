import NumberValueObject from './numberValueObject'

export default function createNumberValueObject({
  value
}: {
  value: number
}): NumberValueObject {
  return new NumberValueObject({value})
}
