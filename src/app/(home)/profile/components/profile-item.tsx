import { ElementType } from 'react'

export interface ProfileItemProps {
  icon: ElementType
  data: string
  subdata: string
}

export function ProfileItem({ icon: Icon, data, subdata }: ProfileItemProps) {
  return (
    <div className="flex items-center gap-5">
      <Icon className="size-8 text-green-100" />
      <div className="flex flex-col">
        <span className="font-bold leading-short text-gray-200">{data}</span>
        <span className="text-sm text-gray-300">{subdata}</span>
      </div>
    </div>
  )
}
