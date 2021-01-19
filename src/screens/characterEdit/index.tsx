import {FaTrash} from 'react-icons/fa'
import {useNavigate, useParams} from 'react-router-dom'

import CharacterForm from '../../components/character/form'
import {
  useCharacter,
  useUpdateCharacter
} from '../../components/character/hooks'
import Button from '../../components/ui/button'
import Paper from '../../components/ui/paper'

import './index.scss'

const baseClass = 'sw-CharacterEditScreen'

export default function CharacterEditScreen() {
  const {id} = useParams()
  const navigate = useNavigate()

  const {character, isSuccess} = useCharacter(id)

  const {mutate} = useUpdateCharacter()

  const handleCharacterFormSubmit = data => {
    const identifiedData = {...data, id}
    mutate(identifiedData, {
      onSuccess: () => {
        navigate(`/`)
      }
    })
  }

  return (
    <div className={baseClass}>
      <Paper>
        {isSuccess && (
          <CharacterForm
            initialData={character}
            onSubmit={handleCharacterFormSubmit}
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
