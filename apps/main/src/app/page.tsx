import Landing from '../pages/Landing'
import Students from '../pages/Students'
import { headers } from 'next/headers'

export default function Page({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined }
}) {
  const host = headers().get('host') || ''
  const hostname = host.split(':')[0].toLowerCase()
  const isStudentsSubdomain = hostname.startsWith('students.')
  const asParam = (searchParams?.as as string | undefined) || ''
  const isStudents = isStudentsSubdomain || asParam === 'students'

  if (process.env.NODE_ENV !== 'production') {
    console.log('[route] root switcher', { host, isStudentsSubdomain, asParam, isStudents })
  }

  return isStudents ? <Students /> : <Landing />
}
