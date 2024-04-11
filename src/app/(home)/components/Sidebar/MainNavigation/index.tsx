'use client'

import { useState } from 'react'
import { NavItem } from './NavItem'

import { Binoculars, ChartLineUp, User } from '@phosphor-icons/react'

export function MainNavigation() {
  const [activeItem, setActiveItem] = useState('home')

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
