import {useNavigate, useParams} from 'react-router-dom'

import {useCharacter} from '../../components/character/hooks'
import CharacterPreview from '../../components/character/preview'
import Paper from '../../components/ui/paper'

import './index.scss'

const baseClass = 'sw-CharacterPreviewScreen'

export default function CharacterPreviewScreen() {
  const {id: idQueryValue} = useParams()
  const id = Number(idQueryValue)
  const navigate = useNavigate()

  const {character} = useCharacter(id)

  const handleEditClick = id => {
    navigate(`/${id}`)
  }

  return (
    <div className={baseClass}>
      <Paper>
        <CharacterPreview character={character} onEditClick={handleEditClick} />
      </Paper>
    </div>
  )
}
