import React from 'react'
import {FaSearch} from 'react-icons/fa'

import Input from '../../ui/input'
import Spinner from '../../ui/spinner'

import './index.scss'

type SearchFormProps = React.PropsWithChildren<{
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
  isLoading?: boolean
}>

const baseClass = 'sw-SearchForm'

export default function SearchForm({
  onSubmit,
  isLoading = false
}: SearchFormProps) {
  return (
    <form className={baseClass} onSubmit={onSubmit}>
      <Input placeholder="Search" id="search" type="search" />
      <label htmlFor="search">
        <button type="submit" className={`${baseClass}-button`}>
          {isLoading ? <Spinner /> : <FaSearch aria-label="search" />}
        </button>
      </label>
    </form>
  )
}
