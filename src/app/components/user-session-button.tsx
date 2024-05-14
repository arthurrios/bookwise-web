'use client'

import { SignIn, SignOut } from '@phosphor-icons/react'
import { ComponentProps } from 'react'
import { Avatar } from './avatar'
import { signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { Session } from '@auth/core/types'

export interface UserSessionButtonProps extends ComponentProps<'button'> {
  session?: Session | null
}

export function UserSessionButton({
  session,
  ...props
}: UserSessionButtonProps) {
  const router = useRouter()

  async function handleSignOut() {
    try {
      await signOut()
    } catch (error) {
      console.log(error)
    }
  }

  if (session?.user) {
    const username = session?.user?.name!.split(' ')[0]

    return (
      <div className="z-10 flex items-center gap-3">
        <Avatar
          src={session?.user?.avatar_url}
          size="sm"
          alt={`${session.user.name} profile image`}
        />
        <span className="text-sm text-gray-200">{username}</span>
        <SignOut
          size={28}
          className="cursor-pointer text-danger-light"
          onClick={handleSignOut}
        />
      </div>
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
