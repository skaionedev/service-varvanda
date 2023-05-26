self.addEventListener('install', () => {
  self.skipWaiting()
})

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return event.respondWith(event.request)
  if (event.request.url.includes('.ico')) return event.respondWith(event.request)
  if (event.request.url.includes('.jsx')) return event.respondWith(event.request)
  if (event.request.url.includes('react')) return event.respondWith(event.request)
  if (event.request.url.includes('vite')) return event.respondWith(event.request)
  if (event.request.url.includes('.js')) return event.respondWith(event.request)

  const url = new URL(event.request.url)
  url.hostname = 'varvanda.ru'
  url.protocol = 'https'

  const request = new Request(url, event.request)
  console.log(request)
  event.respondWith(fetch(request, {
    mode: 'no-cors'
  }))
})
