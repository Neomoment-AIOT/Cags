// // middleware.ts
// import { NextRequest, NextResponse } from 'next/server';

// const BLOCKED_COUNTRIES = new Set(['IN','PK']); // block India

// // Apply to all pages, but skip static assets, API, and /blocked to prevent rewrite loops
// export const config = {
//   matcher: ['/((?!_next/static|_next/image|favicon.ico|api|blocked).*)'],
// };

// function getClientIP(req: NextRequest): string {
//   // Try common proxy headers
//   const xff = req.headers.get('x-forwarded-for');
//   if (xff) return xff.split(',')[0].trim();

//   const xri = req.headers.get('x-real-ip');
//   if (xri) return xri;

//   // Not always present in edge, but try:
//   // @ts-ignore
//   if (req.ip) return req.ip as string;

//   return '';
// }

// function isLocalOrPrivate(ip: string) {
//   return (
//     !ip ||
//     ip === '127.0.0.1' ||
//     ip === '::1' ||
//     ip.startsWith('192.168.') ||
//     ip.startsWith('10.') ||
//     /^172\.(1[6-9]|2\d|3[0-1])\./.test(ip) ||
//     ip.startsWith('::ffff:127.0.0.1')
//   );
// }

// export async function middleware(req: NextRequest) {
//   const { pathname, searchParams } = req.nextUrl;

//   // This will print in your terminal (NOT browser console)
//   console.log('MW hit:', pathname);

//   // ----- DEV/Manual overrides (make testing easy) -----
//   // 1) Query param: http://localhost:3000/?__country=IN
//   const forcedCountryFromQuery = searchParams.get('__country');
//   // 2) Cookie: set "debug-country=IN" in your browser for localhost
//   const forcedCountryFromCookie = req.cookies.get('debug-country')?.value;
//   // 3) Env var: MW_DEBUG_COUNTRY=IN (handy for local testing)
//   const forcedCountryFromEnv = process.env.MW_DEBUG_COUNTRY;

//   // Pick the first override provided (query > cookie > env)
//   let country = (forcedCountryFromQuery || forcedCountryFromCookie || forcedCountryFromEnv || '').toUpperCase();

//   // If no override provided, detect from IP
//   if (!country) {
//     const ip = getClientIP(req);
//     console.log('Client IP:', ip || '(none)');

//     // Skip external GeoIP for local/private IPs during dev
//     if (!isLocalOrPrivate(ip)) {
//       try {
//         const res = await fetch(`https://ipapi.co/${ip}/json/`, {
//           headers: { 'User-Agent': 'nextjs-middleware' },
//           cache: 'no-store',
//         });
//         if (res.ok) {
//           const data = await res.json();
//           country = String(data?.country_code || '').toUpperCase();
//         } else {
//           console.warn('GeoIP HTTP error:', res.status);
//         }
//       } catch (err) {
//         console.error('GeoIP lookup failed:', err);
//       }
//     }
//   }

//   console.log(`Resolved country: ${country || '(unknown)'}`);

//   if (country && BLOCKED_COUNTRIES.has(country)) {
//     // Rewrite to a local page (make sure /blocked exists in your app)
//     return NextResponse.rewrite(new URL('/blocked', req.url));
//     // Or: return new NextResponse('Access blocked', { status: 403 });
//   }

//   return NextResponse.next();
// }



// middleware.ts
import { NextRequest, NextResponse } from 'next/server';

const BLOCKED = new Set(['TR']); 
const isProd = process.env.NODE_ENV === 'production';

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|_next/data|favicon.ico|api|blocked|.*\\.(?:png|jpg|jpeg|gif|webp|svg|ico)$).*)',
  ],
};

export function middleware(req: NextRequest) {
  const { searchParams } = req.nextUrl;

  // Dev overrides (disabled in prod)
  const forced = isProd
    ? ''
    : (searchParams.get('__country') ||
       req.cookies.get('debug-country')?.value ||
       process.env.MW_DEBUG_COUNTRY ||
       '').toUpperCase();

  // Vercel provides this header on edge
  const headerCountry = (req.headers.get('x-vercel-ip-country') || '').toUpperCase();

  // Optional fallback to req.geo without TS error
  const geoCountry = (((req as unknown) as { geo?: { country?: string } }).geo?.country || '').toUpperCase();

  const country = forced || headerCountry || geoCountry;

  if (country && BLOCKED.has(country)) {
    return NextResponse.redirect(new URL('/blocked', req.url));
  }
  return NextResponse.next();
}
