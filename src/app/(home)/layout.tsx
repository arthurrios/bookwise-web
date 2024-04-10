import { ReactNode } from 'react'

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <div className="grid grid-cols-home grid-rows-home h-screen">
      <div className="bg-green-100 p-5 row-span-2">Aside</div>
      <div className="bg-purple-100 row-span-1">Header</div>
      {children}
    </div>
  )
}
