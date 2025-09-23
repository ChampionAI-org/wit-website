import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Middleware temporarily disabled — routing is handled in code (src/app/page.tsx)
export function middleware(_req: NextRequest) {
  if (process.env.NODE_ENV !== 'production') {
    console.log('[middleware] disabled (using code-based routing)')
  }
  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!_next|_vercel|favicon.ico|robots.txt|sitemap.xml|.*\.(?:png|jpg|svg|webp|css|js)).*)',
  ],
}
