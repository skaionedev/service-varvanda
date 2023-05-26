// self.addEventListener('install', () => {
//   self.skipWaiting()
// })

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url)
  const isTargetURL = event.request.url.includes('varvanda.ru')

  if (isTargetURL) {
    url.hostname = 'varvanda.ru'
    url.protocol = 'https'
  }

  if (isTargetURL) console.log(event.request)
  const request = new Request(url, event.request)

  event.respondWith(
    fetch(request, {
      // mode: 'no-cors',
      // credentials: 'include'
    })
      .then(response => {
        if (isTargetURL) {
          console.log('Response from network is:', response)
        }
        return response
      })
      .catch(error => {
        if (isTargetURL) {
          console.error('Fetching failed:', error)
        }
        throw error
      })
  )
})
