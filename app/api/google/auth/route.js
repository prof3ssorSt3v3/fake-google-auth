//fake google oauth call
import { NextResponse } from 'next/server';

export async function GET(request) {
  // const reqUrl = new URL(request.url); same as ...
  const reqUrl = request.nextUrl;
  // const params = new URLSearchParams(URL.search); same as...
  const params = request.nextUrl.searchParams;
  let redirectURL = params.get('redirect_url');

  //Google would do the processing of the login and create the JWT token...
  let token = Math.random().toString(16).substring(2, 12);
  //the token will be sent through querystring to the redirectURL
  let responseUrl = decodeURIComponent(redirectURL) + '?token=' + token;
  const response = NextResponse.redirect(new URL(responseUrl));
  response.headers.set('X-Custom-Redirect-Reason', 'Let us pretend that this is a response from Google OAuth and our own API');
  return response;
}
