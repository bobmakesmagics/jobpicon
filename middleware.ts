import { withClerkMiddleware, getAuth } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Set the paths that don't require the user to be signed in
const publicPaths = [
  '/',
  '/sign-in*',
  '/sign-up*',
  '/api/waiting-list*',
  '/legal/privacy',
  '/pricing',
  '/contact-us',
  '/resources',
  '/careers',
  '/product',
  '/book-demo',
]

const isPublic = (path: string) => {
  return publicPaths.find((x) =>
    path.match(new RegExp(`^${x}$`.replace('*$', '($|/)')))
  )
}

export default withClerkMiddleware((request: NextRequest) => {
  // if path is not public and starts with pathname.startsWith('/api') then return NextResponse.next()

  if (isPublic(request.nextUrl.pathname)) {
    return NextResponse.next()
  }
  // if the user is not signed in redirect them to the sign in page.
  const { userId } = getAuth(request)

  if (userId && request.nextUrl.pathname.startsWith('/sign-in')) {
    return NextResponse.redirect('/dashboard')
  }

  if (!userId) {
    // redirect the users to /pages/sign-in/[[...index]].ts

    const signInUrl = new URL('/sign-in', request.url)
    signInUrl.searchParams.set('redirect_url', request.url)
    return NextResponse.redirect(signInUrl)
  }

  // if(userId && request.nextUrl.pathname === '/sign-in') {
  //   const dashboard = new URL('/dashboard', request.url)
  //   dashboard.searchParams.set('redirect_url', request.url)
  //   return NextResponse.redirect(dashboard)
  // }

  return NextResponse.next()
})

// Stop Middleware running on static files
export const config = {
  matcher:
    '/((?!_next/image|_next/static|favicon.ico|manifest.json|images*).*)',
}
