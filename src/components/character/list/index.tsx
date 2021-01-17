import React, {ReactNode} from 'react'
import {Character} from '../../../types'

import './index.scss'

const baseClass = 'sw-CharacterList'

type CharacterListProps = {
  characters: Character[]
  children: (character: Character) => ReactNode
}

export default function CharacterList({
  characters,
  children
}: CharacterListProps) {
  return (
    <ul className={baseClass}>
      {characters.map(character => (
        <li className={`${baseClass}-item`} key={character.id}>
          {children(character)}
        </li>
      ))}
    </ul>
  )
}
