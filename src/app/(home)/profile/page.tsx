'use client'

import { Avatar } from '@/app/components/avatar'
import { Input } from '@/app/components/input'
import {
  BookOpen,
  BookmarkSimple,
  Books,
  MagnifyingGlass,
  UserList,
} from '@phosphor-icons/react'
import { ProfileItem } from './components/profile-item'

export default function Profile() {
  return (
    <div className="pl-18">
      <div className="max-w-profileContainer flex gap-16">
        <div className="min-w-mainProfile">
          <Input
            icon={MagnifyingGlass}
            className="w-full"
            placeholder="Search rated book"
          />
        </div>
        <div className="flex w-full flex-col items-center gap-8 border-l border-l-gray-700">
          <div className="flex flex-col items-center gap-5 pb-2">
            <Avatar
              src="https://github.com/arthurrios.png"
              size="lg"
              alt="User profile image"
            />
            <div className="flex flex-col items-center">
              <h2 className="text-xl font-bold">Arthur Rios</h2>
              <span className="text-sm text-gray-400">member since 2024</span>
            </div>
          </div>
          <div className="h-1 w-8 rounded-full bg-gradient-horizontal" />
          <div className="flex flex-col gap-10 px-[3.375rem] py-5">
            <ProfileItem icon={BookOpen} data="3853" subdata="Pages read" />
            <ProfileItem icon={Books} data="10" subdata="Books rated" />
            <ProfileItem icon={UserList} data="8" subdata="Authors read" />
            <ProfileItem
              icon={BookmarkSimple}
              data="3853"
              subdata="Most read category"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
