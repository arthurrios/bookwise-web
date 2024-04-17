import { ComponentProps, ElementType } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const input = tv({
  base: 'w-full h-12 rounded-[4px] border border-gray-500 bg-gray-800 px-5 py-[14px] text-sm font-regular text-gray-200 outline-none placeholder:text-gray-400 focus:border-green-200',
  variants: {
    variant: {
      profile: 'min-w-input',
    },
  },
})

export type InputProps = ComponentProps<'input'> &
  VariantProps<typeof input> & {
    icon: ElementType
  }

export function Input({ variant, icon: Icon, ...props }: InputProps) {
  return (
    <div className="relative text-gray-500 focus-within:text-green-200">
      <input type="search" {...props} className={input({ variant })} />
      <div className="absolute inset-y-0 end-0 flex items-center pe-5">
        <Icon className="size-5 bg-gray-800 fill-current" />
      </div>
    </div>
  )
}
