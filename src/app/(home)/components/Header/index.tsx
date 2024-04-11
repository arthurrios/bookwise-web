'use client'

import { Binoculars, ChartLineUp, User } from '@phosphor-icons/react'
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
    <div className="pt-18 flex items-center gap-3 pl-[4.75rem] text-2xl font-bold leading-short">
      {icon}
      <h1>{title}</h1>
    </div>
  )
}
