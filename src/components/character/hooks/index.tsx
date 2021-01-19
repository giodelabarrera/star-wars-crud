import {useQuery, useMutation} from 'react-query'

import {useDomain} from '../../../context/domain'
import {Character} from '../../../types'

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
    queryKey: ['search_characters', {query, fields: sortFields}],
    queryFn: () =>
      domain
        .get('character__search_characters_use_case')
        .execute({query, fields: sortFields})
  })
  return {...result, characters: result.data ?? loadingCharacters}
}

function useCharacter(id: number) {
  const domain = useDomain()
  const result = useQuery({
    queryKey: ['retrieve_character', {id}],
    queryFn: () =>
      domain.get('character__retrieve_character_use_case').execute({id})
  })
  return {...result, character: result.data ?? loadingCharacter}
}

function useCreateCharacter() {
  const domain = useDomain()
  return useMutation((character: Character) =>
    domain.get('character__create_character_use_case').execute(character)
  )
}

function useUpdateCharacter() {
  const domain = useDomain()
  return useMutation((character: Character) =>
    domain.get('character__update_character_use_case').execute(character)
  )
}

function useDeleteCharacter() {
  const domain = useDomain()
  return useMutation(({id}: {id: number}) =>
    domain.get('character__delete_character_use_case').execute({id})
  )
}

export {
  useSearchCharacters,
  useCharacter,
  useCreateCharacter,
  useUpdateCharacter,
  useDeleteCharacter
}
