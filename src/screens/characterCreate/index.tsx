import {FaTrash} from 'react-icons/fa'

import CharacterForm from '../../components/character/form'
import Button from '../../components/ui/button'
import Paper from '../../components/ui/paper'

const baseClass = 'sw-CharacterListScreen'

export default function CharacterCreateScreen() {
  const handleCharacterForm = data => {}

  return (
    <div className={baseClass}>
      <Paper>
        <CharacterForm
          onSubmit={handleCharacterForm}
          secondAction={
            <Button startIcon={<FaTrash />} variant="text" color="secondary">
              Delete
            </Button>
          }
        />
      </Paper>
    </div>
  )
}
