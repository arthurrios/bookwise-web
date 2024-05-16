import Image from 'next/image'

import bookImg from '@/../public/images/books/14-habitos-de-desenvolvedores-altamente-produtivos.png'
import { Rating } from '@/app/components/rating'
import { ProfileItem } from '@/app/(home)/profile/components/profile-item'
import { BookOpen, BookmarkSimple } from '@phosphor-icons/react/dist/ssr'
import { BookItem } from './book-item'

export interface RatedBookProps {}

export function RatedBook(props: RatedBookProps) {
  return (
    <div className="space-y-10 rounded-md bg-gray-700 px-8 pb-4 pt-6">
      <div className="flex gap-8">
        <Image
          src={bookImg}
          height={242}
          width={171.65}
          className="h-full rounded-md"
          alt="Book image"
        />
        <div className="flex flex-1 flex-col justify-between">
          <div className="space-y-2">
            <h1 className="text-lg font-bold leading-short">
              14 Hábitos de Desenvolvedores Altamente Produtivos
            </h1>
            <h2 className="text-gray-300">Zeno Rocha</h2>
          </div>
          <div className="space-y-1">
            <Rating rate={4} variant="md" />
            <p className="text-sm text-gray-400">3 ratings</p>
          </div>
        </div>
      </div>
      <div className="flex gap-14 border-t border-gray-600 py-6">
        <BookItem
          icon={BookmarkSimple}
          subdata="Category"
          data="Computer, education"
        />
        <BookItem icon={BookOpen} subdata="Pages" data="160" />
      </div>
    </div>
  )
}
