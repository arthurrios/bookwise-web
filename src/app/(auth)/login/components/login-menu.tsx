'use client'

import { LoginButton } from './login-button'

import googleLogo from '@/app/assets/google-logo.svg'
import githubLogo from '@/app/assets/github-logo.svg'
import rocketSvg from '@/app/assets/rocket.svg'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
// import { signIn } from '@/lib/auth'

export function LoginMenu() {
  const router = useRouter()

  async function handleLogin(provider: string) {
    try {
      if (provider?.length !== 0) {
        await signIn(provider, { callbackUrl: '/' })
      } else {
        await router.push('/')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <main className="flex flex-col gap-4">
      <LoginButton
        title="Login with Google"
        imgSrc={googleLogo}
        onClick={() => handleLogin('google')}
      />
      <LoginButton
        title="Login with GitHub"
        imgSrc={githubLogo}
        onClick={() => handleLogin('github')}
      />
      <LoginButton
        title="Login as a visitor"
        imgSrc={rocketSvg}
        onClick={() => handleLogin('')}
      />
    </main>
  )
}
