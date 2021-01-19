const baseClass = 'sw-CharacterNotFound'

export default function CharacterNotFound() {
  return (
    <div className={baseClass}>
      <p className={`${baseClass}-message`}>
        There was an error, Character not found
      </p>
    </div>
  )
}
