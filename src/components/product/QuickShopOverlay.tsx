import { motion } from 'framer-motion'
import { useCartStore } from '../../store/cartStore'

interface QuickShopProps {
  product: {
    id: string | number
    name: string
    price: number
    image: string
  }
}

export default function QuickShopOverlay({ product }: QuickShopProps) {
  const addItem = useCartStore(state => state.addItem)

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault() // prevent navigating to product page
    addItem({
      id: String(product.id),
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image,
      shade: 'Default'
    })
  }

  return (
    <div className="absolute inset-0 bg-luxury-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4">
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        whileHover={{ scale: 1.02 }}
        className="translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 flex gap-2"
      >
        <button 
          onClick={handleQuickAdd}
          className="flex-1 bg-warm-white text-luxury-black py-3 text-xs tracking-widest uppercase hover:bg-soft-blush transition-colors"
        >
          Quick Add
        </button>
        <button 
          onClick={(e) => e.preventDefault()}
          className="w-12 bg-luxury-black text-warm-white flex items-center justify-center hover:bg-dusty-rose transition-colors"
        >
          ♡
        </button>
      </motion.div>
    </div>
  )
}
