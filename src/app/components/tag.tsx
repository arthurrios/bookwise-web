import { ComponentProps } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

const tag = tv({
  slots: {
    container:
      'group rounded-full border-purple-100 px-4 py-1 duration-75 hover:bg-purple-200 hover:ring-1 hover:ring-purple-100',
    text: 'text-gray-100 group-hover:text-gray-100',
  },

  variants: {
    isSelected: {
      true: {
        container: 'bg-purple-200',
        text: '',
      },
      false: {
        container: 'ring-1 ring-purple-100',
        text: 'text-purple-100',
      },
    },
  },
})

export type TagProps = ComponentProps<'button'> &
  VariantProps<typeof tag> & {
    title: string
    isSelected?: boolean
  }

export function Tag({ title, isSelected = false, ...props }: TagProps) {
  const { container, text } = tag({ isSelected })

  return (
    <button {...props} className={container()}>
      <span className={text()}>{title}</span>
    </button>
  )
}
