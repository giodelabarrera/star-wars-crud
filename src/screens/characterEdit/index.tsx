import {FaTrash} from 'react-icons/fa'
import {useParams} from 'react-router-dom'

import CharacterForm from '../../components/character/form'
import {useCharacter} from '../../components/character/hooks'
import Button from '../../components/ui/button'
import Paper from '../../components/ui/paper'

import './index.scss'

const baseClass = 'sw-CharacterEditScreen'

export default function CharacterEditScreen() {
  const {id} = useParams()
  const {character, isSuccess} = useCharacter(id)

  const handleCharacterForm = data => {}

  return (
    <div className={baseClass}>
      <Paper>
        {isSuccess && (
          <CharacterForm
            initialData={character}
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
        )}
      </Paper>
    </div>
  )
}
