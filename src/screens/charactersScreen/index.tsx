import {useEffect} from 'react'

import {useDomain} from '../../context/domain'

const baseClass = 'sw-CharactersScreen'

export default function CharactersScreen() {
  const domain = useDomain()

  useEffect(() => {
    domain
      .get('character__search_characters_use_case')
      .execute()
      .then(() => {})
  }, [domain])

  return <div className={baseClass}>Character Screen</div>
}
