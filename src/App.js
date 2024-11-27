import React from 'react'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Shopdetail from './pages/Shopdetail'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Blog from './pages/Blog'
import Tracking from './pages/Tracking'
import Contact from './pages/Contact'
import Header from './components/Header'
import Footer from './components/Footer'

import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

function App() {
  return (
    <div>
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/shop' element={<Shop/>}/>
          <Route path='/shop/:id' element={<Shopdetail/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/tracking' element={<Tracking/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  )
}

export default App