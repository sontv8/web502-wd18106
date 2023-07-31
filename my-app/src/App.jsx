import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './pages/Homepage.jsx'
import { Route, Routes } from 'react-router-dom'
import DetailPage from './pages/Detail'
import Dashboard from './pages/Admin/Dashboard'
import ProductPage from './pages/Admin/Product'
import AddProductPage from './pages/Admin/AddProduct'
import UpdateProductPage from './pages/Admin/UpdateProduct'
import WebsiteLayout from './layouts/WebsiteLayout'
import AdminLayout from './layouts/AdminLayout'

function App() {

  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then(response => response.json())
      .then(data => setProducts(data))
  }, [])
  // console.log(products);

  return (
    <>
      {/* <Routes>
        <Route path='/' element={<HomePage products={products} />} />
        <Route path='/detail/:id' element={<DetailPage products={products} />} />

        <Route path='/admin/dashboard' element={<Dashboard />} />
        <Route path='/admin/product' element={<ProductPage />} />
        <Route path='/admin/product/add' element={<AddProductPage />} />
        <Route path='/admin/product/:id/update' element={<UpdateProductPage />} />
      </Routes> */}

      <Routes>
        <Route path='/' element={<WebsiteLayout />}>
          <Route index element={<HomePage products={products} />} />
          <Route path='detail/:id' element={<DetailPage products={products} />} />
        </Route>

        <Route path='/admin' element={<AdminLayout />}>
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='/admin/product'>
            <Route index element={<ProductPage />} />
            <Route path='add' element={<AddProductPage />} />
            <Route path=':id/update' element={<UpdateProductPage />} />
          </Route>

        </Route>
      </Routes>

      {/* 
        admin 
          dashboard
          product - hiển thị sản phẩm theo dạng table
          add product
          update product
      */}
    </>
  )
}

export default App
