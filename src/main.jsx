import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './component/leyout/Home'
import Shop from './component/Shop/Shop'
import Order from './component/order/Order'
import Inventory from './component/inventory/Inventory'
import Login from './component/login/Login'
import { cartProductsLoders } from './loders/cartProductsLoder'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <Shop></Shop>
      },
      {
        path: '/order',
        element: <Order></Order>,
        loader: cartProductsLoders
      },
      {
        path: '/inventory',
        element:<Inventory></Inventory>
      },
      {
        path: '/login',
        element: <Login></Login>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
