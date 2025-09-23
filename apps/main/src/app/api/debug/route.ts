import { NextResponse } from 'next/server'

export async function GET(req: Request) {
  const url = new URL(req.url)
  const host = req.headers.get('host') || ''
  const hostname = host.split(':')[0].toLowerCase()
  const isStudentsSubdomain = hostname.startsWith('students.')
  const simulateStudents = process.env.NODE_ENV !== 'production' && url.searchParams.get('as') === 'students'
  const isStudents = isStudentsSubdomain || simulateStudents

  const payload = {
    now: new Date().toISOString(),
    host,
    pathname: url.pathname,
    search: url.search,
    isStudentsSubdomain,
    simulateStudents,
    isStudents,
    nodeEnv: process.env.NODE_ENV,
  }
  console.log('[api/debug]', payload)
  return NextResponse.json(payload)
}
