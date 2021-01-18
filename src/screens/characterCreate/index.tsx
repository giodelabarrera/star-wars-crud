import CharacterForm from '../../components/character/form'
import Paper from '../../components/ui/paper'

const baseClass = 'sw-CharacterListScreen'

export default function CharacterCreateScreen() {
  const handleCharacterForm = data => {}

  return (
    <div className={baseClass}>
      <Paper>
        <CharacterForm onSubmit={handleCharacterForm} />
      </Paper>
    </div>
  )
}
