import CharacterForm from '../../components/character/form'
import Paper from '../../components/ui/paper'

import './index.scss'

const baseClass = 'sw-CharacterCreateScreen'

const initialData = {
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
  const handleCharacterForm = data => {}

  return (
    <div className={baseClass}>
      <Paper>
        <CharacterForm
          initialData={initialData}
          onSubmit={handleCharacterForm}
        />
      </Paper>
    </div>
  )
}
