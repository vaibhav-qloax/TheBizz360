/* thebizz360 service worker: shows push notifications and opens the right screen when one is tapped.
   It deliberately does no caching - orders and prices must always come fresh from the server. */

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => event.waitUntil(self.clients.claim()));

self.addEventListener('push', (event) => {
  let data = {};
  try {
    data = event.data ? event.data.json() : {};
  } catch {
    data = { title: 'thebizz360', body: event.data ? event.data.text() : '' };
  }
  const title = data.title || 'thebizz360';
  event.waitUntil(
    self.registration.showNotification(title, {
      body: data.body || '',
      icon: '/icon-192.png',
      badge: '/icon-192.png',
      // same tag = an update to the same order replaces the earlier banner instead of stacking
      tag: data.tag || undefined,
      renotify: Boolean(data.tag),
      data: { url: data.url || '/', notificationId: data.notification_id || null },
    })
  );
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const target = new URL((event.notification.data && event.notification.data.url) || '/', self.location.origin).href;

  event.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(async (windows) => {
      // reuse an open tab if there is one, otherwise open a new one
      for (const client of windows) {
        if (new URL(client.url).origin === self.location.origin && 'focus' in client) {
          await client.focus();
          if ('navigate' in client) return client.navigate(target);
          return undefined;
        }
      }
      return self.clients.openWindow(target);
    })
  );
});
