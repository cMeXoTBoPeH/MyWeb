import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { defaultLocale, isLocale, locales } from "./src/i18n/i18n-config";

const PUBLIC_FILE = /\.(.*)$/;

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (
    pathname.startsWith("/_next") ||
    pathname.includes("/api/") ||
    PUBLIC_FILE.test(pathname)
  ) {
    return;
  }

  const segments = pathname.split("/").filter(Boolean);
  const pathLocale = segments[0];

  if (isLocale(pathLocale)) {
    return;
  }

  const accept = request.headers.get("accept-language") || "";
  const preferred = accept.split(",")[0]?.split("-")[0];
  const locale = isLocale(preferred) ? preferred : defaultLocale;

  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next|.*\..*).*)"],
};

