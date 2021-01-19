import {useNavigate} from 'react-router-dom'

import CharacterForm from '../../components/character/form'
import {useCreateCharacter} from '../../components/character/hooks'
import Paper from '../../components/ui/paper'

import './index.scss'

const baseClass = 'sw-CharacterCreateScreen'

const initialFormData = {
  name: '',
  birthYear: '',
  gender: null,
  height: null,
  mass: null,
  hairColor: '',
  skinColor: '',
  eyeColor: ''
}

export default function CharacterCreateScreen() {
  const navigate = useNavigate()
  const {mutate} = useCreateCharacter()

  const handleCharacterFormSubmit = data => {
    mutate(data, {
      onSuccess: data => {
        const {id} = data
        navigate(`/${id}`)
      }
    })
  }

  return (
    <div className={baseClass}>
      <Paper>
        <CharacterForm
          initialData={initialFormData}
          onSubmit={handleCharacterFormSubmit}
        />
      </Paper>
    </div>
  )
}
