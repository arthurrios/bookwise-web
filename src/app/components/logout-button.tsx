'use client'

import { SignOut } from '@phosphor-icons/react'
import { ComponentProps } from 'react'
import { Avatar } from './avatar'

export interface LogoutButtonProps extends ComponentProps<'button'> {}

export function LogoutButton(props: LogoutButtonProps) {
  return (
    <button {...props} className="z-10 flex cursor-pointer items-center gap-3">
      <Avatar
        src="https://github.com/arthurrios.png"
        size="sm"
        alt="User profile image"
      />
      <span className="text-sm text-gray-200">Arthur</span>
      <SignOut size={28} className="text-danger-light" />
    </button>
  )
}
