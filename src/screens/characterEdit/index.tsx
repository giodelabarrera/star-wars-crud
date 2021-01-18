import {FaTrash} from 'react-icons/fa'

import CharacterForm from '../../components/character/form'
import Button from '../../components/ui/button'
import Paper from '../../components/ui/paper'

import './index.scss'

const baseClass = 'sw-CharacterEditScreen'

export default function CharacterEditScreen() {
  const handleCharacterForm = data => {}

  return (
    <div className={baseClass}>
      <Paper>
        <CharacterForm
          onSubmit={handleCharacterForm}
          secondAction={
            <Button
              startIcon={<FaTrash />}
              variant="text"
              className={`${baseClass}-deleteButton`}
            >
              Delete
            </Button>
          }
        />
      </Paper>
    </div>
  )
}
