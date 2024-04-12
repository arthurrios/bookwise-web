'use client'

import { CaretLeft, CaretRight } from '@phosphor-icons/react'
import Link, { LinkProps } from 'next/link'
import { tv, VariantProps } from 'tailwind-variants'

const link = tv({
  slots: {
    container: 'flex items-center px-2 py-1 duration-150 rounded-[4px]',
    text: 'font-bold',
    icon: '',
  },

  variants: {
    variant: {
      back: {},
      forward: {},
    },
    size: {
      md: {
        container: 'gap-3',
        text: 'text-md',
        icon: 'size-5',
      },
      sm: {
        container: 'gap-2',
        text: 'text-sm',
        icon: 'size-4',
      },
    },
    color: {
      white: {
        container: 'hover:bg-gray-200/[4%]',
        text: 'text-gray-200',
        icon: 'text-gray-200',
      },
      purple: {
        container: 'hover:bg-purple-100/[6%]',
        text: 'text-purple-100',
        icon: 'text-purple-100',
      },
    },
  },

  defaultVariants: {
    variant: 'forward',
    size: 'md',
  },
})

export type LinkButtonProps = LinkProps &
  VariantProps<typeof link> & {
    title: string
  }

export function LinkButton({
  title,
  variant,
  size,
  color,
  ...props
}: LinkButtonProps) {
  const { container, text, icon } = link({ variant, size, color })

  switch (variant) {
    case 'back':
      return (
        <Link {...props} className={container()}>
          <CaretLeft className={icon()} />
          <h1 className={text()}>{title}</h1>
        </Link>
      )
    case 'forward':
      return (
        <Link {...props} className={container()}>
          <h1 className={text()}>{title}</h1>
          <CaretRight className={icon()} />
        </Link>
      )
  }
}
