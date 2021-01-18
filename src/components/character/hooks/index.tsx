import {useQuery, useMutation} from 'react-query'

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

function useSearchCharacters(query, sortFields) {
  const domain = useDomain()

  const result = useQuery({
    queryKey: ['searchCharacters', {query, fields: sortFields}],
    queryFn: () =>
      domain
        .get('character__search_characters_use_case')
        .execute({query, fields: sortFields})
  })

  return {...result, characters: result.data ?? loadingCharacters}
}

function useCreateCharacter() {
  const domain = useDomain()
  return useMutation(character =>
    domain.get('character__create_character_use_case').execute(character)
  )
}

export {useSearchCharacters, useCreateCharacter}
