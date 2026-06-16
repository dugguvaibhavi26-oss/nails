import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useCartStore } from '../store/cartStore'
import MagneticButton from '../components/animation/MagneticButton'

const SHADES = [
  { name: 'Rose Petal', color: '#eabfb9' },
  { name: 'Dusty Pink', color: '#d98aa0' },
  { name: 'Midnight', color: '#2a2b2e' },
  { name: 'Crimson', color: '#8a1c1c' },
]

const products = [
  { id: 1, name: 'ROSE PETAL', category: 'Gel Polish', price: 24, image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=2938&auto=format&fit=crop' },
  { id: 2, name: 'MIDNIGHT GLOW', category: 'Nail Polish', price: 22, image: 'https://images.unsplash.com/photo-1516975080661-4680fb8e498c?q=80&w=2787&auto=format&fit=crop' },
  { id: 3, name: 'PEARL BLUSH', category: 'Bridal', price: 28, image: 'https://images.unsplash.com/photo-1599305090598-fe179d501227?q=80&w=2788&auto=format&fit=crop' },
  { id: 4, name: 'GOLDEN DUST', category: 'Glitter', price: 26, image: 'https://images.unsplash.com/photo-1627913346511-b4d4512c1d3b?q=80&w=2800&auto=format&fit=crop' },
  { id: 5, name: 'VELVET RED', category: 'Gel Polish', price: 24, image: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?q=80&w=2792&auto=format&fit=crop' },
  { id: 6, name: 'CLEAR SHINE', category: 'Nail Care', price: 18, image: 'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?q=80&w=2787&auto=format&fit=crop' },
  { id: 7, name: 'NEON PEACH', category: 'Summer', price: 22, image: '/images/themed_neon_1781638866407.png' },
  { id: 8, name: 'GALAXY SPARK', category: 'Custom', price: 30, image: '/images/themed_galaxy_1781638853617.png' },
  { id: 9, name: 'CHROME MIRROR', category: 'Custom Finishes', price: 35, image: '/images/custom_chrome_1781638907788.png' },
  { id: 10, name: 'MATTE BURGUNDY', category: 'Custom Finishes', price: 28, image: '/images/custom_matte_1781638920068.png' },
  { id: 11, name: 'HOLO RAINBOW', category: 'Glitter', price: 32, image: '/images/custom_holographic_1781638933536.png' },
  { id: 12, name: 'JELLY BEAN', category: 'Nail Polish', price: 20, image: '/images/custom_jelly_1781638944659.png' },
  { id: 13, name: 'DIAMOND 3D', category: 'Nail Art', price: 45, image: '/images/custom_3d_1781638955619.png' },
  { id: 14, name: 'VINTAGE ROSE', category: 'Themed Art', price: 40, image: '/images/themed_floral_1781638877488.png' },
  { id: 15, name: 'CLEAN LINES', category: 'Themed Art', price: 35, image: '/images/themed_minimalist_1781638889548.png' },
  { id: 16, name: 'BRIDAL LACE', category: 'Bridal', price: 50, image: '/images/themed_bridal_1781638833380.png' },
  { id: 17, name: 'CUTICLE OIL', category: 'Nail Care', price: 15, image: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?q=80&w=2792&auto=format&fit=crop' },
  { id: 18, name: 'BASE COAT MAX', category: 'Nail Care', price: 18, image: 'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?q=80&w=2787&auto=format&fit=crop' },
  { id: 19, name: 'TOP COAT SHINE', category: 'Nail Care', price: 18, image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=2938&auto=format&fit=crop' },
  { id: 20, name: 'NEON LIME', category: 'Summer', price: 22, image: 'https://images.unsplash.com/photo-1627913346511-b4d4512c1d3b?q=80&w=2800&auto=format&fit=crop' }
]

export default function ProductDetails() {
  const { id } = useParams()
  const [selectedShade, setSelectedShade] = useState(SHADES[0])
  const [quantity, setQuantity] = useState(1)
  
  const addItem = useCartStore(state => state.addItem)

  const product = products.find(p => p.id === Number(id)) || products[0]
  const rupeesPrice = product.price * 80

  const handleAddToCart = () => {
    addItem({
      id: id || '1',
      name: product.name,
      price: product.price,
      quantity,
      image: product.image,
      shade: selectedShade.name
    })
  }

  return (
    <main className="w-full bg-theme-bg min-h-screen pt-32 pb-20 text-theme-text font-body">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-screen-xl mx-auto px-6 md:px-12">
        
        {/* Gallery */}
        <div className="h-[50vh] md:h-[85vh] md:sticky top-32 animate-float">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="w-full h-full bg-white overflow-hidden relative rounded-[3rem] shadow-xl"
          >
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover rounded-[3rem] transition-transform duration-700 hover:scale-110 cursor-zoom-in"
            />
          </motion.div>
        </div>

        {/* Details */}
        <div className="flex flex-col justify-center py-8 md:py-24 md:pl-12">
          <div className="mb-8 border-b border-gray-200 pb-8">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-theme-pink mb-4 block">Best Seller</span>
            <h1 className="text-4xl md:text-5xl font-typewriter tracking-widest mb-4 font-bold uppercase">{product.name}</h1>
            <p className="text-2xl font-body text-theme-text">₹{rupeesPrice.toFixed(2)}</p>
          </div>

          <p className="text-sm font-body text-theme-text/80 leading-relaxed mb-10">
            A high-gloss, long-wearing polish that delivers a flawless, salon-quality finish. Chip-resistant and deeply pigmented for intense color payoff in just one coat. Elevate your nail game with this stunning shade.
          </p>

          {/* Shades */}
          <div className="mb-10">
            <div className="flex justify-between items-center mb-4 text-xs font-bold tracking-widest uppercase">
              <span>Shade: {selectedShade.name}</span>
            </div>
            <div className="flex gap-4">
              {SHADES.map(shade => (
                <button
                  key={shade.name}
                  onClick={() => setSelectedShade(shade)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${selectedShade.name === shade.name ? 'ring-2 ring-offset-4 ring-theme-pink' : 'hover:scale-110'}`}
                >
                  <span className="w-8 h-8 rounded-full shadow-inner block border border-gray-200" style={{ backgroundColor: shade.color }}></span>
                </button>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-4 items-end mb-12">
            <div className="w-32">
              <span className="text-xs font-bold tracking-widest uppercase text-theme-text/60 mb-2 block">QTY</span>
              <div className="flex items-center justify-between border border-theme-text/20 px-4 py-3 rounded-full bg-white shadow-sm">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="hover:text-theme-pink transition-colors font-bold text-lg">-</button>
                <span className="text-sm font-body font-bold">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="hover:text-theme-pink transition-colors font-bold text-lg">+</button>
              </div>
            </div>
            
            <div className="flex-1">
              <MagneticButton className="w-full">
                <button 
                  onClick={handleAddToCart}
                  className="w-full bg-theme-pink shadow-lg text-white py-4 rounded-full text-xs font-bold uppercase tracking-[0.2em] hover:bg-theme-pink-light transition-colors animate-float"
                >
                  Add to Cart
                </button>
              </MagneticButton>
            </div>
          </div>

          {/* Accordions (Visual only) */}
          <div className="space-y-4 border-t border-gray-200 pt-8">
            <div className="flex justify-between items-center py-4 border-b border-gray-100 cursor-pointer group">
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-theme-text/80 group-hover:text-theme-pink transition-colors">Details & Ingredients</span>
              <span className="text-xl group-hover:rotate-45 transition-transform group-hover:text-theme-pink">+</span>
            </div>
            <div className="flex justify-between items-center py-4 border-b border-gray-100 cursor-pointer group">
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-theme-text/80 group-hover:text-theme-pink transition-colors">How to Apply</span>
              <span className="text-xl group-hover:rotate-45 transition-transform group-hover:text-theme-pink">+</span>
            </div>
          </div>

        </div>
      </div>
    </main>
  )
}
