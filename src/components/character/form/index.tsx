import React from 'react'

import {Character} from '../../../types'

type CharacterFormProps = {
  character?: Character
  onSubmit: (data: Record<string, unknown>) => void
}

export default function CharacterForm({
  character = null,
  onSubmit
}: CharacterFormProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = {}
    onSubmit(data)
  }

  return <form onSubmit={handleSubmit}></form>
}
