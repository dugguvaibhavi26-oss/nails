import { motion, AnimatePresence } from 'framer-motion'
import { useCartStore } from '../../store/cartStore'
import { X, Minus, Plus } from 'lucide-react'

export default function CartDrawer() {
  const { isOpen, toggleCart, items, updateQuantity, removeItem } = useCartStore()
  
  const total = items.reduce((acc, item) => acc + (item.price * item.quantity), 0)

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleCart}
            className="fixed inset-0 bg-theme-text/40 backdrop-blur-sm z-[60]"
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-y-0 right-0 w-full md:w-[400px] bg-white z-[70] shadow-2xl flex flex-col"
          >
            <div className="p-6 border-b border-gray-200 flex justify-between items-center bg-white">
              <h2 className="text-xl font-typewriter tracking-widest">YOUR BAG</h2>
              <button onClick={toggleCart} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <X size={20} className="text-theme-text" />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-theme-text/60 space-y-4 p-6">
                  <ShoppingBag size={48} strokeWidth={1} />
                  <p className="font-typewriter text-sm tracking-widest uppercase">Your bag is empty.</p>
                  <button onClick={toggleCart} className="mt-4 border border-theme-text px-6 py-2 text-xs uppercase tracking-[0.2em] hover:bg-theme-text hover:text-white transition-colors">Continue Shopping</button>
                </div>
              ) : (
                <>
                  <div className="p-6 space-y-6">
                    {items.map(item => (
                      <div key={`${item.id}-${item.shade}`} className="flex gap-6 group">
                        <div className="w-24 aspect-[3/4] bg-gray-100 overflow-hidden">
                          <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div className="flex-1 flex flex-col justify-between py-1">
                          <div>
                            <div className="flex justify-between items-start mb-1">
                              <h3 className="font-typewriter text-sm tracking-wider uppercase">{item.name}</h3>
                              <button onClick={() => removeItem(item.id)} className="text-xs text-theme-text/60 hover:text-theme-pink transition-colors underline">Remove</button>
                            </div>
                            <p className="text-xs text-theme-text/60 font-body mb-2">Shade: {item.shade}</p>
                            <p className="font-body text-sm">₹{item.price * 80}</p>
                          </div>
                          <div className="flex items-center gap-4 border border-gray-200 w-fit px-3 py-1 rounded-full">
                            <button onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))} className="hover:text-theme-pink transition-colors"><Minus size={14} /></button>
                            <span className="text-sm font-body w-4 text-center">{item.quantity}</span>
                            <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="hover:text-theme-pink transition-colors"><Plus size={14} /></button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="p-6 border-t border-gray-200 bg-gray-50/50">
                    <h4 className="text-xs tracking-[0.2em] uppercase mb-4 text-theme-text/80">COMPLETE THE LOOK</h4>
                    <div className="flex items-center gap-4">
                      <img src="https://images.unsplash.com/photo-1596755389378-c31d21fd1273?q=80&w=2792&auto=format&fit=crop" className="w-16 h-20 object-cover" alt="Top Coat" />
                      <div className="flex-1">
                        <h5 className="text-sm tracking-wider uppercase font-typewriter">GLASS TOP COAT</h5>
                        <p className="text-xs text-theme-text/60 font-body mb-2">₹1440.00</p>
                        <button className="text-xs border border-gray-300 px-4 py-1 hover:border-theme-pink hover:text-theme-pink transition-colors">ADD</button>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>

            {items.length > 0 && (
              <div className="p-6 bg-white border-t border-gray-200 space-y-6">
                <div className="flex justify-between items-center text-lg font-typewriter tracking-widest">
                  <span>SUBTOTAL</span>
                  <span>₹{(total * 80).toFixed(2)}</span>
                </div>
                <p className="text-xs text-theme-text/60 font-body text-center">Shipping & taxes calculated at checkout.</p>
                <button className="w-full py-4 bg-theme-pink text-white text-xs tracking-[0.2em] uppercase hover:bg-theme-pink-light transition-colors font-bold rounded-full">
                  Checkout
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
