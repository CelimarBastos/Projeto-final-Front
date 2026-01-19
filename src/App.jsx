import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage/HomePage'
import { ProductListingPage } from './pages/ProductListingPage/ProductListingPage'
import { ProductViewPage } from './pages/ProductViewPage/ProductViewPage'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductListingPage />} />
        <Route path="/product/:id" element={<ProductViewPage />} />
        <Route path="/categories" element={<HomePage />} />
        <Route path="/orders" element={<HomePage />} />
      </Routes>
    </Router>
  )
}

export default App
