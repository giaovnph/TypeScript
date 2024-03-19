import { Route, Routes } from 'react-router-dom'
import './App.css'
import Shop from './pages/Shop'
import ProductDetails from './pages/ProductDetails'
import LayoutWebsite from './layout/LayoutWebsite'
import Products from './components/Products'
const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<LayoutWebsite />}>
          <Route index element={<Products />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/products/:id' element={<ProductDetails />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
