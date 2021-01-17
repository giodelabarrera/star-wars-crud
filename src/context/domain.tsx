import React, {useContext} from 'react'

import {EntryPoint} from '../domain'

const DomainContext = React.createContext(undefined)

type DomainProviderProps = React.PropsWithChildren<{
  domain: EntryPoint
}>

function DomainProvider({domain, ...restProps}: DomainProviderProps) {
  return <DomainContext.Provider value={domain} {...restProps} />
}

function useDomain() {
  const context: EntryPoint = useContext(DomainContext)
  if (context === undefined) {
    throw new Error('useDomain must be used within a DomainProvider')
  }
  return context
}

export {DomainProvider, useDomain}
