/* eslint-disable jsx-a11y/alt-text */
import Image, { ImageProps } from 'next/image'
import { VariantProps, tv } from 'tailwind-variants'

const imageComponent = tv({
  slots: {
    container: 'relative rounded-full bg-gradient-vertical',
    image:
      'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full',
  },

  variants: {
    size: {
      lg: {
        container: 'size-[4.5rem]',
        image: 'size-[4.375rem]',
      },
      md: {
        container: 'size-10',
        image: 'size-[2.375rem]',
      },
      sm: {
        container: 'size-8',
        image: 'size-[1.875rem]',
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})

export type AvatarProps = ImageProps & VariantProps<typeof imageComponent>

export function Avatar({ size, ...props }: AvatarProps) {
  const { container, image } = imageComponent({ size })

  return (
    <div className={container()}>
      <Image
        width={72}
        height={72}
        {...props}
        quality={100}
        className={image()}
      />
    </div>
  )
}
