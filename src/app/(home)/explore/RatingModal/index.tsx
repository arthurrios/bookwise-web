import { Button } from '@/app/components/button'
import { LinkButton } from '@/app/components/link-button'
import { X } from '@phosphor-icons/react'
import * as Dialog from '@radix-ui/react-dialog'
import { ReactNode } from 'react'
import { RatedBook } from './components/rated-book'

export interface RatingModalProps {
  children: ReactNode
}

export function RatingModal({ children }: RatingModalProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-20 bg-black/60" />
        <Dialog.Content className="w-ratingModal shadow-ratingModal fixed right-0 top-0 z-30 h-full bg-gray-800 px-12 py-16">
          <div className="flex flex-col gap-10">
            <RatedBook />
            <div className="flex items-center justify-between">
              <h4 className="text-sm text-gray-200">Ratings</h4>
              <Button title="Rate" />
            </div>
          </div>
          <Dialog.Close className="cursor-pointer">
            <X className="absolute right-12 top-6 size-6 text-gray-400" />
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
