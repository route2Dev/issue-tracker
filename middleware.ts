import { loggingMiddleware } from '@/middlewares/logging-request';
import { NextRequest, NextResponse } from 'next/server';

async function middleware(request: NextRequest) {
  // Exclude /favicon.ico
  if (request.nextUrl.pathname === '/favicon.ico') {
    return NextResponse.next();
  }

  // Apply logging middleware for /api routes
  if (request.nextUrl.pathname.startsWith('/api')) {
    return loggingMiddleware(request);
  }

  // Apply other middlewares here
  // Example: const anotherResponse = await anotherMiddleware(response);

  return NextResponse.next();
}

export const config = {
  matcher: '/:path*', // Apply middleware to all routes
};

export default middleware;
