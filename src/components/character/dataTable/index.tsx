import {FaPen} from 'react-icons/fa'

import {Character} from '../../../types'
import Button from '../../ui/button'
import Table from '../../ui/table'
import TableHead from '../../ui/tableHead'
import TableBody from '../../ui/tableBody'
import TableRow from '../../ui/tableRow'
import TableCell, {
  TableCellDirection,
  TableCellOnSort
} from '../../ui/tableCell'

import './index.scss'

const baseClass = 'sw-CharacterDataTable'

type CharacterDataTableProps = {
  characters: Character[]
  onEditClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  editLink: (props) => JSX.Element
  nameSortDirection: TableCellDirection
  birthYearSortDirection: TableCellDirection
  genderSortDirection: TableCellDirection
  heightSortDirection: TableCellDirection
  massSortDirection: TableCellDirection
  hairColorSortDirection: TableCellDirection
  skinColorSortDirection: TableCellDirection
  eyeColorSortDirection: TableCellDirection
  onNameSort: TableCellOnSort
  onBirthYearSort: TableCellOnSort
  onGenderSort: TableCellOnSort
  onHeightSort: TableCellOnSort
  onMassSort: TableCellOnSort
  onHairColorSort: TableCellOnSort
  onSkinColorSort: TableCellOnSort
  onEyeColorSort: TableCellOnSort
}

export default function CharacterDataTable({
  characters,
  onEditClick,
  editLink: EditLink,
  nameSortDirection,
  birthYearSortDirection,
  genderSortDirection,
  heightSortDirection,
  massSortDirection,
  hairColorSortDirection,
  skinColorSortDirection,
  eyeColorSortDirection,
  onNameSort,
  onBirthYearSort,
  onGenderSort,
  onHeightSort,
  onMassSort,
  onHairColorSort,
  onSkinColorSort,
  onEyeColorSort
}: CharacterDataTableProps) {
  return (
    <div className={baseClass}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell
              variant="head"
              isSortable
              sortDirection={nameSortDirection}
              onSort={onNameSort}
            >
              Name
            </TableCell>
            <TableCell
              variant="head"
              isSortable
              sortDirection={birthYearSortDirection}
              onSort={onBirthYearSort}
            >
              Birth year
            </TableCell>
            <TableCell
              variant="head"
              isSortable
              sortDirection={genderSortDirection}
              onSort={onGenderSort}
            >
              Gender
            </TableCell>
            <TableCell
              variant="head"
              isSortable
              sortDirection={heightSortDirection}
              onSort={onHeightSort}
            >
              Height
            </TableCell>
            <TableCell
              variant="head"
              isSortable
              sortDirection={massSortDirection}
              onSort={onMassSort}
            >
              Mass
            </TableCell>
            <TableCell
              variant="head"
              isSortable
              sortDirection={hairColorSortDirection}
              onSort={onHairColorSort}
            >
              Hair color
            </TableCell>
            <TableCell
              variant="head"
              isSortable
              sortDirection={skinColorSortDirection}
              onSort={onSkinColorSort}
            >
              Skin color
            </TableCell>
            <TableCell
              variant="head"
              isSortable
              sortDirection={eyeColorSortDirection}
              onSort={onEyeColorSort}
            >
              Eye color
            </TableCell>
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
