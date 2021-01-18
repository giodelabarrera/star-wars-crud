import {FaPen} from 'react-icons/fa'

import {Character} from '../../../types'
import Button from '../../ui/button'
import Table from '../../ui/table'
import TableHead from '../../ui/tableHead'
import TableBody from '../../ui/tableBody'
import TableRow from '../../ui/tableRow'
import TableCell from '../../ui/tableCell'

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
    <div className={baseClass}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell variant="head">Name</TableCell>
            <TableCell variant="head">BirTableCell year</TableCell>
            <TableCell variant="head">Gender</TableCell>
            <TableCell variant="head">Height</TableCell>
            <TableCell variant="head">Mass</TableCell>
            <TableCell variant="head">Hair color</TableCell>
            <TableCell variant="head">Skin color</TableCell>
            <TableCell variant="head">Eye color</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {characters.map(character => (
            <TableRow key={character.id}>
              <TableCell>
                <EditLink>{character.name}</EditLink>
              </TableCell>
              <TableCell>{character.birthYear}</TableCell>
              <TableCell>{character.gender}</TableCell>
              <TableCell>{character.height}</TableCell>
              <TableCell>{character.mass}</TableCell>
              <TableCell>{character.hairColor}</TableCell>
              <TableCell>{character.skinColor}</TableCell>
              <TableCell>{character.eyeColor}</TableCell>
              <TableCell>
                <Button
                  startIcon={<FaPen />}
                  color="primary"
                  onClick={onEditClick}
                >
                  Edit
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
