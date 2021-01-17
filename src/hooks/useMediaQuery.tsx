import {useEffect, useState} from 'react'

export default function useMediaQuery(query: string) {
  const [state, setState] = useState(() => window.matchMedia(query).matches)

  useEffect(() => {
    let mounted = true
    const mql = window.matchMedia(query)

    const handlerChange = () => {
      if (!mounted) {
        return
      }
      setState(!!mql.matches)
    }

    mql.addEventListener('change', handlerChange)
    setState(mql.matches)

    return () => {
      mounted = false
      mql.removeEventListener('change', handlerChange)
    }
  }, [query])

  return state
}
