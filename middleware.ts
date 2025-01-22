import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

const protectedRoutes = ["/"];
const publicRoutes = ["/login", "register"];

export const middleware = async (req: NextRequest) => {
  const path = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path);
  const isPublicRoute = publicRoutes.includes(path);

  const cookie = (await cookies()).get("session")?.value;

  if (isProtectedRoute && !cookie) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }

  if (
    isPublicRoute &&
    cookie &&
    (req.nextUrl.pathname.startsWith("/login") ||
      req.nextUrl.pathname.startsWith("/register"))
  ) {
    return NextResponse.redirect(new URL("/", req.nextUrl));
  }

  return NextResponse.next();
};

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
