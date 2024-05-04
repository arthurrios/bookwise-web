/* eslint-disable react/no-unescaped-entities */
'use client'

import { Avatar } from '@/app/components/avatar'
import { Input } from '@/app/components/input'

import { ProfileItem } from './components/profile-item'
import {
  ProfileBookCard,
  ProfileRating,
} from '@/app/components/profile-book-card'
import {
  BookOpen,
  BookmarkSimple,
  Books,
  MagnifyingGlass,
  UserList,
} from '@phosphor-icons/react/dist/ssr'
import { api } from '@/data/api'
import { formatDistanceToNow, getYear } from 'date-fns'
import { useEffect, useState } from 'react'

export type ProfileData = {
  user: {
    avatar_url: string
    name: string
    member_since: string
  }
  ratings: ProfileRating[]
  readPages: number
  ratedBooks: number
  readAuthors: number
  mostReadCategory?: string
}

export default function Profile() {
  const [search, setSearch] = useState('')
  const [profile, setProfile] = useState<ProfileData>()

  useEffect(() => {
    async function getUserProfile(): Promise<ProfileData> {
      const response = await api('/profile')

      const { profile } = await response.json()

      return profile
    }

    const fetchData = async () => {
      const profile = await getUserProfile()
      setProfile(profile)
    }

    fetchData()
  }, [])

  const filteredRatings = profile?.ratings.filter((rating) => {
    return rating.book.name.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <div className="pb-12 pl-18">
      <div className="flex max-w-profileContainer gap-16">
        <div className="min-w-mainProfile space-y-10">
          {filteredRatings && filteredRatings?.length > 1 && (
            <Input
              icon={MagnifyingGlass}
              className="w-full"
              placeholder="Search rated book"
              value={search}
              onChange={({ target }) => setSearch(target.value)}
            />
          )}
          <div className="space-y-6">
            {filteredRatings?.length !== 0 ? (
              <>
                {filteredRatings?.map((rating) => {
                  return (
                    <div key={rating.id} className="space-y-2">
                      <span className="text-sm text-gray-300">
                        {formatDistanceToNow(rating.created_at, {
                          addSuffix: true,
                        })}
                      </span>
                      <ProfileBookCard rating={rating} />
                    </div>
                  )
                })}
              </>
            ) : (
              <div className="mt-52 flex flex-col items-center">
                <h1 className="text-xl font-bold text-green-100">
                  Oops! You haven't rated any books yet.
                </h1>
                <span className="text-gray-400">
                  Rate your first book to see it displayed in your profile.
                </span>
              </div>
            )}
          </div>
        </div>
        {profile && (
          <div className="flex h-full w-full flex-col items-center gap-8 border-l border-l-gray-700">
            <div className="flex flex-col items-center gap-5 pb-2">
              <Avatar
                src={profile.user.avatar_url}
                size="lg"
                alt={`${profile.user.name} profile image.`}
              />
              <div className="flex flex-col items-center">
                <h2 className="text-xl font-bold">{profile.user.name}</h2>
                <span className="text-sm text-gray-400">
                  member since {getYear(profile?.user.member_since)}
                </span>
              </div>
            </div>
            <div className="h-1 w-8 rounded-full bg-gradient-horizontal" />
            <div className="flex flex-col gap-10 px-[3.375rem] py-5">
              <ProfileItem
                icon={BookOpen}
                data={profile?.readPages ?? 0}
                subdata="Pages read"
              />
              <ProfileItem
                icon={Books}
                data={profile.ratedBooks ?? 0}
                subdata="Books rated"
              />
              <ProfileItem
                icon={UserList}
                data={profile.readAuthors ?? 0}
                subdata="Authors read"
              />
              <ProfileItem
                icon={BookmarkSimple}
                data={profile.mostReadCategory ?? 'No categories read'}
                subdata="Most read category"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
