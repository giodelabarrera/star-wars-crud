import {useQuery} from 'react-query'

import {useDomain} from '../../../context/domain'

const loadingCharacter = {
  name: 'Loading...',
  birthYear: 'Loading...',
  gender: 'Loading...',
  height: 'Loading...',
  mass: 'Loading...',
  hairColor: 'Loading...',
  skinColor: 'Loading...',
  eyeColor: 'Loading...'
}

const loadingCharacters = Array.from({length: 10}, (v, index) => ({
  id: `loading-character-${index}`,
  ...loadingCharacter
}))

function useSearchCharacters(query) {
  const domain = useDomain()

  const result = useQuery({
    queryKey: ['searchCharacters', {query}],
    queryFn: () =>
      domain.get('character__search_characters_use_case').execute({query})
  })

  return {...result, characters: result.data ?? loadingCharacters}
}

export {useSearchCharacters}
