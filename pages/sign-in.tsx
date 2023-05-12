import { SignIn } from '@clerk/nextjs'
import React from 'react'

export default function SignInPage(): JSX.Element {
  return (
    <main className="flex items-center min-h-full justify-center min-h-full">
      <SignIn afterSignInUrl="/dashboard" />
    </main>
  )
}
