import '../styles/theme.scss'
import '../styles/global.scss'

import {DomainProvider} from '../context/domain'

import domain from '../domain'

export default function CustomApp({Component, pageProps}) {
  return (
    <DomainProvider domain={domain}>
      <Component {...pageProps} />
    </DomainProvider>
  )
}
