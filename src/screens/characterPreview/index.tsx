import {useParams} from 'react-router-dom'

import {useCharacter} from '../../components/character/hooks'
import CharacterPreview from '../../components/character/preview'
import Paper from '../../components/ui/paper'

import './index.scss'

const baseClass = 'sw-CharacterPreviewScreen'

export default function CharacterPreviewScreen() {
  const {id: idQueryValue} = useParams()
  const id = Number(idQueryValue)
  const {character} = useCharacter(id)
  return (
    <div className={baseClass}>
      <Paper>
        <CharacterPreview character={character} onEditClick={() => {}} />
      </Paper>
    </div>
  )
}
