enum Gender {
  MALE = 'male',
  FEMALE = 'female',
  NA = 'n/a'
}

type CharacterGenderProps = {
  value: Gender
}

function CharacterGender({value}: CharacterGenderProps) {
  function toJson() {
    return {value}
  }

  return {value, toJson}
}

export default CharacterGender
export {Gender}
