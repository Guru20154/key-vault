import './App.css'
import Manager from './components/Manager'
import Navbar from './components/navbar'
import About from './components/About'
import Contact from './components/Contact'
import ManagerM from './components/ManagerMongo'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
  const router = createBrowserRouter([
    {
      path: "/local",
      element: <><Navbar /><Manager /></>
    },
    {
      path: "/",
      element: <><Navbar /><ManagerM /></>
    },
    {
      path: "/about",
      element: <><Navbar /><About /></>
    },
    {
      path: "/contact",
      element: <><Navbar /><Contact /></>
    }
  ])
  return (
    <>
      {/* <Navbar /> */}
      <RouterProvider router={router} />
      {/* <Manager /> */}
    </>
  )
}

export default App
