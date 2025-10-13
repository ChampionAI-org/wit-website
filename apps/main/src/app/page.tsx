import Landing from '../pages/Landing'
import Students from '../pages/Students'
import EmoLanding from '../pages/EmoLanding'
import { headers } from 'next/headers'

export default function Page({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined }
}) {
  const host = headers().get('host') || ''
  const hostname = host.split(':')[0].toLowerCase()
  const isStudentsSubdomain = hostname.startsWith('students.')
  const isEmoSubdomain = hostname.startsWith('emo.')
  const asParam = (searchParams?.as as string | undefined) || ''
  const isStudents = isStudentsSubdomain || asParam === 'students'
  const isEmo = isEmoSubdomain || asParam === 'emo'

  if (process.env.NODE_ENV !== 'production') {
    console.log('[route] root switcher', { host, isStudentsSubdomain, isEmoSubdomain, asParam, isStudents, isEmo })
  }

  if (isStudents) return <Students />
  if (isEmo) return <EmoLanding />
  return <Landing />
}
