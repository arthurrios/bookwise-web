export interface SessionDTO {
  user: {
    id: string
    name: string
    email: string
    avatar_url: string
    emailVerified: string
  }
  userId: string
  expires: string
  sessionToken: string
}
