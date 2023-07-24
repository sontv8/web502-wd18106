import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './pages/Homepage.jsx'
import { Route, Routes } from 'react-router-dom'
import DetailPage from './pages/Detail'

function App() {

  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then(response => response.json())
      .then(data => setProducts(data))
  }, [])
  console.log(products);

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage products={products} />} />
        <Route path='/detail' element={<DetailPage />} />
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
