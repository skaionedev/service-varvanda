self.addEventListener('install', () => {
  self.skipWaiting()
})

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return
  if (event.request.url.includes('.ico')) return
  if (event.request.url.includes('react')) return
  if (event.request.url.includes('vite')) return
  if (event.request.url.includes('.js')) return

  const url = new URL(event.request.url)
  url.hostname = 'varvanda.ru'
  url.protocol = 'https'

  const request = new Request(url, event.request)
  console.log(request)
  event.respondWith(fetch(request))
})
