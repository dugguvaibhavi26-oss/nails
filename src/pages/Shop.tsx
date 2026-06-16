import { Link } from 'react-router-dom'
import QuickShopOverlay from '../components/product/QuickShopOverlay'

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

export default function Shop() {
  return (
    <main className="w-full bg-theme-bg min-h-screen pt-12 pb-20 px-6 max-w-screen-xl mx-auto">
      <div className="mb-16 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-5xl font-typewriter font-bold tracking-widest uppercase mb-4 text-theme-pink">All Products</h1>
        <p className="text-sm font-body text-theme-text/70 max-w-md">Discover our collection of premium nail colors and care essentials.</p>
      </div>

      <div className="flex justify-center gap-8 mb-12 overflow-x-auto pb-4 scrollbar-hide text-xs uppercase tracking-widest text-theme-text/70 font-body">
        <button className="text-theme-pink font-bold border-b-2 border-theme-pink pb-1 whitespace-nowrap">All Products</button>
        <button className="hover:text-theme-pink transition-colors whitespace-nowrap">Nail Polish</button>
        <button className="hover:text-theme-pink transition-colors whitespace-nowrap">Gel Polish</button>
        <button className="hover:text-theme-pink transition-colors whitespace-nowrap">Care Essentials</button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12 mt-12">
        {products.map((product, index) => (
          <div 
            key={product.id} 
            className="group cursor-pointer animate-float"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <Link to={`/product/${product.id}`} className="block relative">
              <div className="aspect-[3/4] bg-white p-2 rounded-[2rem] mb-4 overflow-hidden relative shadow-lg group-hover:shadow-2xl transition-all duration-300">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover rounded-xl transition-transform duration-700 group-hover:scale-110"
                />
                <QuickShopOverlay product={product} />
              </div>
              <div className="flex flex-col">
                <h4 className="font-typewriter text-sm font-bold tracking-wider mb-1 text-theme-text group-hover:text-theme-pink transition-colors">{product.name}</h4>
                <div className="flex justify-between items-center w-full">
                  <p className="text-xs text-theme-text/60 font-body">{product.category}</p>
                  <span className="font-body text-sm font-bold text-theme-text">₹{product.price * 80}</span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </main>
  )
}
