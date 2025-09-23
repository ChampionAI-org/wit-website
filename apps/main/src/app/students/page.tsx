import Students from '../../pages/Students'
import { headers } from 'next/headers'

export default function Page() {
  // Server-side log to confirm routing on each request
  const host = headers().get('host')
  console.log('[route] students variant', { host, path: '/students' })
  return <Students />
}
