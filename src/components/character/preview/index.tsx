import React from 'react'
import {Character} from '../../../types'

import './index.scss'

const baseClass = 'sw-CharacterPreview'

type CharacterPreviewProps = {
  character: Character
}

export default function CharacterPreview({character}: CharacterPreviewProps) {
  const {
    id,
    name,
    birthYear,
    gender,
    height,
    mass,
    hairColor,
    skinColor,
    eyeColor
  } = character
  return (
    <div className={baseClass} data-id={id}>
      <h2>{name}</h2>
      <ul className={`${baseClass}-info`}>
        <li>
          <strong>Birth year: </strong>
          {birthYear}
        </li>
        <li>
          <strong>Gender: </strong>
          {gender}
        </li>
        <li>
          <strong>Height: </strong>
          {height}
        </li>
        <li>
          <strong>Mass: </strong>
          {mass}
        </li>
        <li>
          <strong>Hair color: </strong>
          {hairColor}
        </li>
        <li>
          <strong>Skin color: </strong>
          {skinColor}
        </li>
        <li>
          <strong>Eye color: </strong>
          {eyeColor}
        </li>
      </ul>
    </div>
  )
}
