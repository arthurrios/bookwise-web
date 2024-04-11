import { ElementType } from 'react'
import Link, { LinkProps } from 'next/link'

import { motion } from 'framer-motion'

export interface NavItemProps extends LinkProps {
  title: string
  icon: ElementType
  isSelected?: boolean
}

export function NavItem({
  title,
  icon: Icon,
  isSelected = false,
  ...props
}: NavItemProps) {
  const iconSize = 24

  return (
    <Link
      {...props}
      className="group relative flex items-center gap-3 py-2 hover:cursor-pointer"
    >
      {isSelected && (
        <motion.div
          layoutId="activeItem"
          className="absolute -left-4 h-6 w-1 rounded-full bg-gradient-vertical"
        />
      )}
      <Icon
        size={iconSize}
        className={
          !isSelected
            ? 'text-gray-400 duration-150 group-hover:text-gray-100'
            : 'text-gray-100 duration-150 group-hover:text-gray-100'
        }
      />
      <span
        className={
          !isSelected
            ? 'text-gray-400 duration-150 group-hover:text-gray-100'
            : 'font-bold text-gray-100 duration-150 group-hover:text-gray-100'
        }
      >
        {title}
      </span>
    </Link>
  )
}
