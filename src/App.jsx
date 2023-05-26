import { useEffect } from 'react'
import {
  RouterProvider,
  createBrowserRouter,
  useLocation
} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '*',
    element: <HelloWorld />
  }
])
export const App = () => {
  return <RouterProvider router={router} />
}

function HelloWorld() {
  const location = useLocation()

  // const triggerFetch = async () => {
  //   await fetch(`https://varvanda.ru${location.pathname}`)
  // }

  useEffect(() => {
    // triggerFetch()
  }, [location])

  return <>Hello World</>
}
