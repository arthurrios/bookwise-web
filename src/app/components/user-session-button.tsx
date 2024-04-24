'use client'

import { SignIn, SignOut } from '@phosphor-icons/react'
import { ComponentProps } from 'react'
import { Avatar } from './avatar'
import { signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export interface UserSessionButtonProps extends ComponentProps<'button'> {}

export function UserSessionButton(props: UserSessionButtonProps) {
  const { data: session } = useSession()

  const router = useRouter()

  async function handleSignOut() {
    try {
      await signOut()
    } catch (error) {
      console.log(error)
    }
  }

  const username = session?.user.name.split(' ')[0]

  if (session?.user) {
    return (
      <button {...props} className="z-10 flex items-center gap-3">
        <Avatar
          src={session?.user?.avatar_url}
          size="sm"
          alt={`${session.user.name} profile image`}
        />
        <span className="text-sm text-gray-200">{username}</span>
        <SignOut
          size={28}
          className="text-danger-light"
          onClick={handleSignOut}
        />
      </button>
    )
  } else {
    return (
      <button
        {...props}
        className="z-10 flex items-center gap-3"
        onClick={() => router.push('/login')}
      >
        <span className="font-bold text-gray-200">Log in</span>
        <SignIn size={20} className="text-green-100" />
      </button>
    )
  }
}
