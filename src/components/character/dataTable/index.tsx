import {FaPen} from 'react-icons/fa'

import {Character} from '../../../types'
import Button from '../../ui/button'

import './index.scss'

const baseClass = 'sw-CharacterDataTable'

type CharacterDataTableProps = {
  characters: Character[]
  onEditClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  editLink: (props) => JSX.Element
}

export default function CharacterDataTable({
  characters,
  onEditClick,
  editLink: EditLink
}: CharacterDataTableProps) {
  return (
    <table className={baseClass}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Birth year</th>
          <th>Gender</th>
          <th>Height</th>
          <th>Mass</th>
          <th>Hair color</th>
          <th>Skin color</th>
          <th>Eye color</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {characters.map(character => (
          <tr key={character.id}>
            <td>
              <EditLink>{character.name}</EditLink>
            </td>
            <td>{character.birthYear}</td>
            <td>{character.gender}</td>
            <td>{character.height}</td>
            <td>{character.mass}</td>
            <td>{character.hairColor}</td>
            <td>{character.skinColor}</td>
            <td>{character.eyeColor}</td>
            <td>
              <div>
                <Button
                  startIcon={<FaPen />}
                  color="primary"
                  onClick={onEditClick}
                >
                  Edit
                </Button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
