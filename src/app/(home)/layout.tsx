import { ReactNode } from 'react'
import { Sidebar } from './components/Sidebar'
import { Header } from './components/Header'

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <div className="grid h-screen grid-cols-home grid-rows-home">
      <div className="row-span-2 p-5">
        <Sidebar />
      </div>
      <div>
        <Header />
      </div>
      {children}
    </div>
  )
}
