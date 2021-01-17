import {DomainProvider} from './domain'

import domain from '../domain'

export default function AppProviders({children}) {
  return <DomainProvider domain={domain}>{children}</DomainProvider>
}
