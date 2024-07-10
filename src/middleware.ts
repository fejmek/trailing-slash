import createMiddleware from 'next-intl/middleware';
import { defaultLocale, locales, localePrefix, pathnames } from "./config"

export default createMiddleware({
  defaultLocale,
  locales,
	pathnames,
  localePrefix
});

export const config = {
  matcher: ['/', '/(en|pl)/:path*']
};
