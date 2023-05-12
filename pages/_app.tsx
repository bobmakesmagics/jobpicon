import 'focus-visible'
import React from 'react'
import '@yaireo/tagify/dist/tagify.css'
import '../styles/tailwind.css'
import { Provider } from 'react-redux'
import { wrapper } from '../store/store'

import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
} from '@clerk/nextjs'
import Index from './index'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import SignInPage from './sign-in'

const publicPages: Array<string> = [
  '/',
  '/legal/privacy',
  '/pricing',
  '/contact-us',
  '/resources',
  '/careers',
  '/product',
  '/book-demo',
]

function App({ Component, ...rest }: AppProps): JSX.Element {
  const { pathname } = useRouter()

  const isPublicPage = publicPages.includes(pathname)
  const { store, props } = wrapper.useWrappedStore(rest)
  const { pageProps } = props

  return (
    <Provider store={store}>
      <ClerkProvider {...pageProps}>
        {isPublicPage ? (
          <Component {...pageProps} />
        ) : (
          <>
            <SignedIn>
              <Component {...pageProps} />
            </SignedIn>
            <SignedOut>
              <Component {...pageProps} />
            </SignedOut>
          </>
        )}
      </ClerkProvider>
    </Provider>
  )
}

export default App
