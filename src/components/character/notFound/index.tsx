import './index.scss'

const baseClass = 'sw-CharacterNotFound'

export default function CharacterNotFound() {
  return (
    <div className={baseClass}>
      <p className={`${baseClass}-message`}>
        There was an error, the character has not been found
      </p>
    </div>
  )
}
