'use client'

import { Input } from '@/app/components/input'
import {
  Binoculars,
  ChartLineUp,
  MagnifyingGlass,
  User,
} from '@phosphor-icons/react'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

export function Header() {
  const route = usePathname().split('/')[1]

  let icon: ReactNode
  let title: string = ''

  switch (route) {
    case '':
      title = 'Home'
      icon = <ChartLineUp className="size-8 text-green-100" />
      break
    case 'explore':
      title = 'Explore'
      icon = <Binoculars className="size-8 text-green-100" />
      break
    case 'profile':
      title = 'Profile'
      icon = <User className="size-8 text-green-100" />
      break
  }

  return (
    <div className="pt-18 flex items-start justify-between pb-10 pl-[4.75rem] pr-24 text-2xl font-bold leading-short">
      <div className="flex items-center gap-3">
        {icon}
        <h1>{title}</h1>
      </div>
      {route === 'explore' && (
        <Input
          icon={MagnifyingGlass}
          placeholder="Search book or author"
          variant="profile"
        />
      )}
    </div>
  )
}
