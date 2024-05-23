import { ComponentProps, ElementType } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

const iconButton = tv({
  slots: {
    container:
      'rounded-[4px] bg-gray-600 p-2 enabled:hover:bg-gray-500 disabled:opacity-50 disabled:cursor-not-allowed',
    icon: 'size-6',
  },

  variants: {
    variant: {
      base: {
        icon: 'text-purple-100',
      },
      secondary: {
        icon: 'text-green-100',
      },
    },
  },

  defaultVariants: {
    variant: 'base',
  },
})

export type IconButtonProps = ComponentProps<'button'> &
  VariantProps<typeof iconButton> & {
    icon: ElementType
  }

export function IconButton({ icon: Icon, variant, ...props }: IconButtonProps) {
  const { container, icon } = iconButton({ variant })

  return (
    <button {...props} className={container()}>
      <Icon className={icon()} />
    </button>
  )
}
