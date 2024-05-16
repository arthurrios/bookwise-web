import { ComponentProps } from 'react'

export interface ButtonProps extends ComponentProps<'button'> {
  title: string
}

export function Button({ title, ...props }: ButtonProps) {
  return (
    <button className="rounded-sm p-3 hover:bg-gray-700" {...props}>
      <span className="font-bold text-purple-100">{title}</span>
    </button>
  )
}
