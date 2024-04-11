import { ReactNode } from 'react'
import { Sidebar } from './components/Sidebar'

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <div className="grid h-screen grid-cols-home grid-rows-home">
      <div className="row-span-2 p-5">
        <Sidebar />
      </div>
      <div className="row-span-1 bg-purple-100">Header</div>
      {children}
    </div>
  )
}
