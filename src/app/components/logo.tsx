import Image from 'next/image'

import logoIcon from '@/app/icon.png'

import { tv, VariantProps } from 'tailwind-variants'

const logo = tv({
  slots: {
    container: 'flex items-center gap-3',
    vector: '',
    title:
      'bg-gradient-horizontal bg-clip-text text-[2.25rem] font-bold text-[transparent]',
  },

  variants: {
    variant: {
      aside: {
        container: 'gap-2',
        vector: 'size-6',
        title: 'text-xl',
      },
    },
  },
})

export interface LogoProps extends VariantProps<typeof logo> {}

export function Logo({ variant }: LogoProps) {
  const { container, vector, title } = logo({ variant })

  return (
    <div className={container()}>
      <Image
        src={logoIcon}
        width={48}
        height={48}
        alt=""
        className={vector()}
      />
      <h1 className={title()}>BookWise</h1>
    </div>
  )
}
