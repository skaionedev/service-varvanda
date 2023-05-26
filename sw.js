self.addEventListener('install', () => {
  self.skipWaiting()
})

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url)

  if (event.request.url.includes('varvanda.ru')) {
    url.hostname = 'varvanda.ru'
    url.protocol = 'https'
  }

  const request = new Request(url, event.request)
  console.log(request)
  event.respondWith(
    fetch(request, {
      mode: 'no-cors'
    })
  )
})
