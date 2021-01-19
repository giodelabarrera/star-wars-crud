import {useNavigate, useParams} from 'react-router-dom'

import {useCharacter} from '../../components/character/hooks'
import CharacterNotFound from '../../components/character/notFound'
import CharacterPreview from '../../components/character/preview'
import Paper from '../../components/ui/paper'

import './index.scss'

const baseClass = 'sw-CharacterPreviewScreen'

export default function CharacterPreviewScreen() {
  const {id} = useParams()

  const navigate = useNavigate()

  const {character, isLoading, isSuccess} = useCharacter(id)

  const handleEditClick = id => {
    navigate(`/character/${id}`)
  }

  return (
    <div className={baseClass}>
      <Paper>
        {isLoading || isSuccess ? (
          <CharacterPreview
            character={character}
            onEditClick={handleEditClick}
          />
        ) : (
          <CharacterNotFound />
        )}
      </Paper>
    </div>
  )
}
