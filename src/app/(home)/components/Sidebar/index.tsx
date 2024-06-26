import { Logo } from '@/app/components/logo'
import { MainNavigation } from './MainNavigation'
import { UserSessionButton } from '@/app/components/user-session-button'
import { auth } from '@/lib/auth'

export async function Sidebar() {
  const session = await auth()

  return (
    <div className="relative flex h-full max-h-asideMenu flex-col items-center justify-between overflow-hidden rounded-[12px] bg-gray-700 px-[47px] pb-6 pt-10">
      <div className="flex flex-col gap-16">
        <Logo variant="aside" />
        <MainNavigation />
      </div>

      <UserSessionButton session={session} />
      <div className="absolute -left-24 -top-20 h-[221px] w-[221px] rounded-full bg-green-200 blur-[189px]" />
      <div className="absolute -right-24 -top-20 h-[221px] w-[221px] rounded-full bg-purple-200 blur-[189px]" />
      <div className="absolute -right-24 top-60 h-[295px] w-[295px] rounded-full bg-purple-200 blur-[189px]" />
      <div className="absolute -bottom-12 -left-32 h-[292px] w-[294px] rounded-full bg-green-200 blur-[525px]" />
    </div>
  )
}
