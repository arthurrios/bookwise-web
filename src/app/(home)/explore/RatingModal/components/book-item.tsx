import { ElementType } from 'react'

export interface BookItemProps {
  icon: ElementType
  data?: number | string
  subdata: string
}

export function BookItem({ icon: Icon, data, subdata }: BookItemProps) {
  return (
    <div className="flex items-center gap-4">
      <Icon className="size-6 text-green-100" />
      <div className="flex flex-col">
        <span className="text-sm text-gray-300">{subdata}</span>
        <span className="font-bold leading-short text-gray-200">{data}</span>
      </div>
    </div>
  )
}
