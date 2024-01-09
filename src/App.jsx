import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from "./layouts/Layout"
import Products from './pages/Products'
import About from './pages/About'
import Account from './pages/Account'
import Cart from './pages/cart'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Context from './data/Context'
import View from './pages/View'

const router = createBrowserRouter([
  {
    element:<Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/products",
        element: <Products />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/account",
        element: <Account />
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path: "/view/:id",
        element: <View />
      }
    ]
  }
])

const App = () => {
  return <div>
      <Context>
        <RouterProvider router={router} />
      </Context>
  </div>
    
  
}

export default App