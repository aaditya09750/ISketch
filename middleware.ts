import { NextResponse, type NextRequest } from "next/server"

/**
 * Sitewide maintenance mode.
 *
 * Toggle by setting MAINTENANCE_MODE in environment:
 *   - "true"  -> all routes serve /maintenance
 *   - unset / anything else -> normal site
 *
 * Excluded paths (always accessible): /maintenance, /api/*, /_next/*,
 * static assets in /public, robots.txt, sitemap.xml, favicons.
 */
const MAINTENANCE_MODE = process.env.MAINTENANCE_MODE === "true"

export function middleware(request: NextRequest) {
  if (!MAINTENANCE_MODE) return NextResponse.next()

  const { pathname } = request.nextUrl

  // Already on the maintenance page — allow through
  if (pathname === "/maintenance") return NextResponse.next()

  // Rewrite every other route to /maintenance (URL stays the same for the user)
  const url = request.nextUrl.clone()
  url.pathname = "/maintenance"

  const response = NextResponse.rewrite(url)
  // Tell crawlers this is a temporary state; they should retry later
  response.headers.set("Retry-After", "3600")
  response.headers.set("Cache-Control", "no-store, must-revalidate")
  return response
}

export const config = {
  // Match every path EXCEPT static assets, API, Next internals, and metadata files.
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|icon.svg|robots.txt|sitemap.xml|images|fonts|videos|.*\\.(?:png|jpg|jpeg|gif|svg|webp|woff|woff2|mp4|ico|txt|xml)).*)",
  ],
}
