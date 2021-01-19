import CharacterForm from '../../components/character/form'
import {useCreateCharacter} from '../../components/character/hooks'
import Paper from '../../components/ui/paper'

import './index.scss'

const baseClass = 'sw-CharacterCreateScreen'

const initialFormData = {
  name: '',
  birthYear: '',
  gender: '',
  height: null,
  mass: null,
  hairColor: '',
  skinColor: '',
  eyeColor: ''
}

export default function CharacterCreateScreen() {
  const {mutate} = useCreateCharacter()

  const handleCharacterForm = data => {
    mutate(data)
  }

  return (
    <div className={baseClass}>
      <Paper>
        <CharacterForm
          initialData={initialFormData}
          onSubmit={handleCharacterForm}
        />
      </Paper>
    </div>
  )
}
