import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function GET() {
  const session = await auth()

  if (!session)
    return Response.json({ message: 'User not logged in.' }, { status: 401 })

  const latestUserRating = await prisma.rating.findFirst({
    where: {
      user_id: session.user.id,
    },
    orderBy: {
      created_at: 'desc',
    },
    include: {
      book: true,
    },
  })

  return Response.json({ rating: latestUserRating })
}
