import {FaTrash} from 'react-icons/fa'
import {useNavigate, useParams} from 'react-router-dom'

import CharacterForm from '../../components/character/form'
import {
  useCharacter,
  useDeleteCharacter,
  useUpdateCharacter
} from '../../components/character/hooks'
import CharacterNotFound from '../../components/character/notFound'
import Button from '../../components/ui/button'
import Paper from '../../components/ui/paper'
import Spinner from '../../components/ui/spinner'

import './index.scss'

const baseClass = 'sw-CharacterEditScreen'

export default function CharacterEditScreen() {
  const {id: idQueryValue} = useParams()
  const id = Number(idQueryValue)

  const navigate = useNavigate()

  const {character, isLoading, isError} = useCharacter(id)

  const {mutate: mutateUpdateCharacter} = useUpdateCharacter()
  const {mutate: mutateDeleteCharacter} = useDeleteCharacter()

  const handleCharacterFormSubmit = data => {
    const identifiedData = {...data, id}
    mutateUpdateCharacter(identifiedData, {
      onSuccess: () => {
        navigate(`/`)
      }
    })
  }

  const handleDeleteClick = () => {
    mutateDeleteCharacter(
      {id},
      {
        onSuccess: () => {
          navigate(`/`)
        }
      }
    )
  }

  return (
    <div className={baseClass}>
      <Paper>
        {isLoading ? (
          <Spinner />
        ) : isError ? (
          <CharacterNotFound />
        ) : (
          <CharacterForm
            initialData={character}
            onSubmit={handleCharacterFormSubmit}
            secondAction={
              <Button
                startIcon={<FaTrash />}
                variant="text"
                className={`${baseClass}-deleteButton`}
                onClick={handleDeleteClick}
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
