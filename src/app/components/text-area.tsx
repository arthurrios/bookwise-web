import { ComponentProps } from 'react'

export interface TextAreaProps extends ComponentProps<'textarea'> {
  maxLength?: number
}

export function TextArea({ maxLength, ...props }: TextAreaProps) {
  const valueLength = String(props.value)?.length ?? 0
  return (
    <div className="flex w-full flex-col rounded-[4px] border border-gray-500 bg-gray-800 px-5 py-[14px] text-gray-500 focus-within:border-green-200 focus-within:text-green-200">
      <textarea
        {...props}
        maxLength={maxLength}
        className="min-h-[136px] flex-1 resize-none border-none bg-transparent text-sm font-regular text-gray-200 outline-none placeholder:text-gray-400 focus:outline-none"
      />
      <span className="ml-auto text-xs text-[#7C7C8A]">
        {valueLength}/{maxLength}
      </span>
    </div>
  )
}
