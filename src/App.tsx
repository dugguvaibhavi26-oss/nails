import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Shop from './pages/Shop'
import ProductDetails from './pages/ProductDetails'
import AboutUs from './pages/AboutUs'
import Contact from './pages/Contact'
import Book from './pages/Book'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import CartDrawer from './components/layout/CartDrawer'

function App() {
  return (
    <Router>
      <div className="w-full bg-theme-bg min-h-screen text-theme-text flex flex-col font-body">
        <Navbar />
        <CartDrawer />

        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/collections" element={<Shop />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/book" element={<Book />} />
          </Routes>
        </div>
        
        <Footer />
      </div>
    </Router>
  )
}

export default App
