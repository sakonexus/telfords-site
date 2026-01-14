import { defineMiddleware } from 'astro/middleware';

const ONE_WEEK = 60 * 60 * 24 * 7;

export const onRequest = defineMiddleware(({ cookies, locals }, next) => {
  const cookie = cookies.get('siteVisit');

  const isFirstVisit = !cookie;

  if (isFirstVisit) {
    cookies.set(
      'siteVisit',
      JSON.stringify({
        date: new Date().toISOString(),
        hasVisited: true,
      }),
      {
        maxAge: ONE_WEEK,
        path: '/',
        sameSite: 'lax',
      }
    );
  }

  // 🔑 expose FIRST-VISIT STATE
  locals.isFirstVisit = isFirstVisit;

  return next();
});
