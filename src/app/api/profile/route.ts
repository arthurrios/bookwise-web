import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { getMostFrequentString } from '@/utils/getMostFrequentString'

export async function GET() {
  const session = await auth()

  if (!session)
    return Response.json({ message: 'User not logged in.' }, { status: 401 })

  const profile = await prisma.user.findUnique({
    where: {
      id: session.user.id,
    },
    include: {
      ratings: {
        include: {
          book: {
            include: {
              categories: {
                include: {
                  category: true,
                },
              },
            },
          },
        },
        orderBy: {
          created_at: 'desc',
        },
      },
    },
  })

  const readPages = profile?.ratings.reduce(
    (acc, rating) => acc + rating.book.total_pages,
    0,
  )

  const ratedBooks = profile?.ratings.length

  const readAuthors = profile?.ratings.reduce((acc, rating) => {
    if (!acc.includes(rating.book.author)) {
      acc.push(rating.book.author)
    }
    return acc
  }, [] as string[])

  const categories = profile?.ratings.flatMap((rating) =>
    rating.book.categories.flatMap((category) => category.category.name),
  )

  const mostReadCategory = categories ? getMostFrequentString(categories) : null

  const profileData = {
    user: {
      avatar_url: profile?.avatar_url,
      name: profile?.name,
      member_since: profile?.created_at,
    },
    ratings: profile?.ratings,
    readPages,
    ratedBooks,
    readAuthors: readAuthors?.length,
    mostReadCategory,
  }

  return Response.json({ profile: profileData })
}
