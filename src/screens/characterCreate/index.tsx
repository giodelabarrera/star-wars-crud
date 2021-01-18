import CharacterForm from '../../components/character/form'
import {useCreateCharacter} from '../../components/character/hooks'
import Paper from '../../components/ui/paper'

import './index.scss'

const baseClass = 'sw-CharacterCreateScreen'

const formData = {
  name: 'Anakin Skywalker',
  birthYear: '1990',
  gender: 'male',
  height: 180,
  mass: 90,
  hairColor: 'brown',
  skinColor: 'fair',
  eyeColor: 'blue'
}

export default function CharacterCreateScreen() {
  const {mutate} = useCreateCharacter()

  const handleCharacterForm = data => {
    mutate(data)
  }

  return (
    <div className={baseClass}>
      <Paper>
        <CharacterForm formData={formData} onSubmit={handleCharacterForm} />
      </Paper>
    </div>
  )
}
