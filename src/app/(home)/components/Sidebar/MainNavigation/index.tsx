'use client'

import { useEffect, useState } from 'react'
import { NavItem } from './NavItem'

import { Binoculars, ChartLineUp, User } from '@phosphor-icons/react'
import { usePathname } from 'next/navigation'

export function MainNavigation() {
  const route = usePathname().split('/')[1]
  const [activeItem, setActiveItem] = useState('home')

  useEffect(() => {
    if (route === '') {
      setActiveItem('home')
    } else {
      setActiveItem(String(route))
    }
  }, [route])

  return (
    <nav className="z-10 flex flex-col gap-2">
      <NavItem
        href="/"
        title="Home"
        icon={ChartLineUp}
        isSelected={activeItem === 'home'}
        onClick={() => setActiveItem('home')}
        replace
      />
      <NavItem
        href="/explore"
        title="Explore"
        icon={Binoculars}
        isSelected={activeItem === 'explore'}
        onClick={() => setActiveItem('explore')}
        replace
      />
      <NavItem
        href="/profile"
        title="Profile"
        icon={User}
        isSelected={activeItem === 'profile'}
        onClick={() => setActiveItem('profile')}
        replace
      />
    </nav>
  )
}
