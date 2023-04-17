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
import Proceed from './component/proceedPage/Proceed'
import SignUp from './component/SignUp/SignUp'
import AuthProvider from './Provider/AuthProvider'
import PrivetRoutes from './routes/PrivetRoutes'

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
        path: '/proceed',
        element: <PrivetRoutes><Proceed></Proceed></PrivetRoutes>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>

)
