import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag } from 'lucide-react'
import { useCartStore } from '../../store/cartStore'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { items, toggleCart } = useCartStore()
  const location = useLocation()
  
  const itemCount = items.reduce((total, item) => total + item.quantity, 0)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (path: string) => location.pathname === path

  return (
    <header className={`w-full z-50 sticky top-0 transition-all duration-300 bg-white border-b border-gray-100`}>
      {/* Announcement Bar */}
      <div className="w-full bg-theme-pink text-white text-xs font-body tracking-wider text-center py-2 uppercase">
        10% OFF ON ALL OUR ALPHA NAILS LIMITED TIME ONLY!
      </div>
      
      <div className={`max-w-screen-xl mx-auto px-6 flex justify-between items-center mb-4 ${isScrolled ? 'pt-2' : 'pt-6'}`}>
        {/* Left: Search */}
        <button className="text-theme-text hover:text-theme-pink transition-colors">
          <Search size={20} strokeWidth={1.5} />
        </button>

        {/* Center: Logo */}
        <Link to="/" className="flex flex-col items-center">
          <h1 className="font-cursive text-4xl text-theme-pink tracking-wide leading-none -mb-1">Alpha</h1>
          <span className="font-typewriter text-[10px] tracking-widest text-theme-text uppercase mt-1">Nail Salon</span>
        </Link>

        {/* Right: Cart & Book */}
        <div className="flex items-center gap-6">
          <a href="/#booking" className="hidden md:block border-2 border-theme-pink rounded-full shadow-sm text-theme-pink px-6 py-2 text-xs font-bold uppercase tracking-widest hover:bg-theme-pink hover:text-white transition-colors animate-float">
            Book Visit
          </a>
          <button onClick={toggleCart} className="text-theme-text hover:text-theme-pink transition-colors relative">
            <ShoppingBag size={20} strokeWidth={1.5} />
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-theme-pink text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-body">
                {itemCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="w-full pb-6 flex flex-wrap justify-center gap-6 md:gap-8 font-body text-xs text-theme-text px-4">
        <Link to="/" className={`transition-colors ${isActive('/') && !location.hash ? 'text-theme-pink font-bold border-b border-theme-pink pb-1' : 'hover:text-theme-pink'}`}>Home</Link>
        <Link to="/shop" className={`transition-colors ${(isActive('/shop') || isActive('/collections')) ? 'text-theme-pink font-bold border-b border-theme-pink pb-1' : 'hover:text-theme-pink'}`}>All Products</Link>
        <a href="/#booking" className={`md:hidden transition-colors ${location.hash === '#booking' ? 'text-theme-pink font-bold border-b border-theme-pink pb-1' : 'hover:text-theme-pink'}`}>Book Now</a>
        <Link to="/contact" className={`transition-colors ${isActive('/contact') ? 'text-theme-pink font-bold border-b border-theme-pink pb-1' : 'hover:text-theme-pink'}`}>Contact</Link>
        <Link to="/about" className={`transition-colors ${isActive('/about') ? 'text-theme-pink font-bold border-b border-theme-pink pb-1' : 'hover:text-theme-pink'}`}>About Us</Link>
      </nav>
    </header>
  )
}
