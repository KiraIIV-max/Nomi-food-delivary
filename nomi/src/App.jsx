import { Routes, Route } from 'react-router-dom'

import Layout from './components/layout/Layout'
import ScrollToTop from './components/common/ScrollToTop'
import LoadingScreen from './components/layout/LoadingScreen'

import Home from './pages/Home'
import Restaurants from './pages/Restaurants'
import RestaurantDetails from './pages/RestaurantDetails'
import FoodDetails from './pages/FoodDetails'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import OrderSuccess from './pages/OrderSuccess'
import Orders from './pages/Orders'
import OrderDetails from './pages/OrderDetails'
import Favorites from './pages/Favorites'
import Profile from './pages/Profile'
import Offers from './pages/Offers'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <>
      <LoadingScreen />
      <ScrollToTop />

      <Routes>
        <Route element={<Layout />}>
          <Route path="/"                element={<Home />} />
          <Route path="/restaurants"     element={<Restaurants />} />
          <Route path="/restaurants/:id" element={<RestaurantDetails />} />
          <Route path="/food/:id"        element={<FoodDetails />} />
          <Route path="/cart"            element={<Cart />} />
          <Route path="/checkout"        element={<Checkout />} />
          <Route path="/order-success"   element={<OrderSuccess />} />
          <Route path="/orders"          element={<Orders />} />
          <Route path="/orders/:id"      element={<OrderDetails />} />
          <Route path="/favorites"       element={<Favorites />} />
          <Route path="/profile"         element={<Profile />} />
          <Route path="/offers"          element={<Offers />} />
          <Route path="*"                element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}