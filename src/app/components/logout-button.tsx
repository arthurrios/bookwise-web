'use client'

import { SignIn, SignOut } from '@phosphor-icons/react'
import { ComponentProps } from 'react'
import { Avatar } from './avatar'
import { signOut, useSession } from 'next-auth/react'

export interface LogoutButtonProps extends ComponentProps<'button'> {}

export function LogoutButton(props: LogoutButtonProps) {
  const { data: session } = useSession()

  async function handleSignOut() {
    try {
      await signOut()
    } catch (error) {
      console.log(error)
    }
  }

  if (session?.user) {
    return (
      <button {...props} className="z-10 flex items-center gap-3">
        <Avatar
          src={String(session?.user?.image)}
          size="sm"
          alt="User profile image"
        />
        <span className="text-sm text-gray-200">{session?.user?.name}</span>
        <SignOut
          size={28}
          className="text-danger-light"
          onClick={handleSignOut}
        />
      </button>
    )
  } else {
    return (
      <button {...props} className="z-10 flex items-center gap-3">
        <span className="font-bold text-gray-200">Log in</span>
        <SignIn size={20} className="text-green-100" onClick={handleSignOut} />
      </button>
    )
  }
}
