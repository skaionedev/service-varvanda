import { useEffect } from 'react'
import {
  HashRouter,
  Route,
  Routes,
  useLocation
} from 'react-router-dom'

// const router = createHashRouter(
//   [
//     {
//       path: '*',
//       element: <HelloWorld />
//     },
//     {
//       path: '/',
//       element: <HelloWorld />
//     },
//     {
//       path: '/vip',
//       element: <HelloWorld />
//     }
//   ],
//   {
//     basename: '/service-varvanda/',

//   }
// )
export const App = () => {
  return (
    <HashRouter basename='/'>
      <Routes>
        <Route path="*" element={<HelloWorld />} />
      </Routes>
    </HashRouter>
  )
}

function HelloWorld() {
  const location = useLocation()

  const triggerFetch = async () => {
    const path = location.pathname.replace('/service-varvanda', '')
    await fetch(`https://varvanda.ru${path}`, {
      // mode: 'no-cors',
    })
  }

  useEffect(() => {
    triggerFetch()
  }, [location])

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <h1>Hello World</h1>
    </div>
  )
}
