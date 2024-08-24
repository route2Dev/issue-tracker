import { NextRequest, NextResponse } from 'next/server';

export async function loggingMiddleware(_request: NextRequest) {
  const startTime = Date.now();

  // Proceed with the request
  const response = await NextResponse.next();

  // Wait for the response to be fully processed
  const clonedResponse = response.clone();
  await clonedResponse.text(); // Ensure the response body is fully read

  // Calculate the duration once the response is ready
  const duration = Date.now() - startTime;
  response.headers.set('x-response-time', `${duration}ms`);

  // Log the status and duration
  console.log(
    'Request complete',
    `Status: ${clonedResponse.status}, Duration: ${duration}ms`,
  );

  return response;
}

export const config = {
  matcher: '/api/:path*', // Apply logging middleware to all API routes
};
