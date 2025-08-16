
import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone, Mail } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  const navigation = [
    { name: 'Accueil', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'À propos', href: '/a-propos' },
    { name: 'Contact', href: '/contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (path: string) => location.pathname === path

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-xl shadow-luxury border-b border-white/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo premium personnalisé */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link to="/" className="flex items-center space-x-4 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-primary-700/20 rounded-xl blur opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-white/10 backdrop-blur-sm p-2 rounded-xl border border-white/20 group-hover:border-primary-300/50 transition-all duration-300">
                  <img 
                    src="https://ai-lumi-prd.oss-us-east-1.aliyuncs.com/ee/ee096ad1415a6acf47518db7a215603c.png"
                    alt="Cabinet Maître Paul Bruveaut"
                    className="h-12 w-auto object-contain filter drop-shadow-sm group-hover:drop-shadow-md transition-all duration-300"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-gradient-primary font-serif">
                  Maître Paul BRUVEAUT
                </span>
                <span className="text-sm text-primary-600 font-medium tracking-wide">
                  Notaire • Paris
                </span>
              </div>
            </Link>
          </motion.div>

          {/* Navigation desktop */}
          <div className="hidden md:flex items-center space-x-1">
            {navigation.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link
                  to={item.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group ${
                    isActive(item.href)
                      ? 'text-primary-700 bg-primary-50'
                      : 'text-neutral-700 hover:text-primary-700 hover:bg-primary-50/50'
                  }`}
                >
                  {item.name}
                  {isActive(item.href) && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-600 to-primary-700 rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
            
            {/* Contact info et boutons d'action */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center space-x-3 ml-6"
            >
              <div className="hidden lg:flex items-center space-x-4 text-neutral-600">
                <div className="flex items-center space-x-1">
                  <Phone className="h-4 w-4" />
                  <span className="text-sm font-medium">06 44 68 42 47</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Mail className="h-4 w-4" />
                  <span className="text-sm font-medium">contact@cabinet-paulbruveaut.site</span>
                </div>
              </div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="tel:+33644684247"
                  className="btn-premium flex items-center space-x-2"
                >
                  <Phone className="h-4 w-4" />
                  <span className="hidden lg:inline">Appeler</span>
                </a>
              </motion.div>
            </motion.div>
          </div>

          {/* Menu mobile button */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="relative p-2 text-neutral-700 hover:text-primary-700 focus:outline-none"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-6 w-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-6 w-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Menu mobile */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden overflow-hidden"
            >
              <div className="px-2 pt-2 pb-6 space-y-1 bg-white/90 backdrop-blur-xl rounded-2xl mt-4 shadow-luxury border border-white/20">
                {/* Logo mobile dans le menu */}
                <div className="flex justify-center py-4 border-b border-neutral-200/50">
                  <img 
                    src="https://ai-lumi-prd.oss-us-east-1.aliyuncs.com/ee/ee096ad1415a6acf47518db7a215603c.png"
                    alt="Cabinet Maître Paul Bruveaut"
                    className="h-10 w-auto object-contain filter drop-shadow-sm"
                  />
                </div>
                
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Link
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`block px-4 py-3 text-base font-medium rounded-xl transition-all duration-300 ${
                        isActive(item.href)
                          ? 'text-primary-700 bg-primary-50 shadow-sm'
                          : 'text-neutral-700 hover:text-primary-700 hover:bg-primary-50/50'
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                
                {/* Contact mobile */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                  className="pt-4 border-t border-neutral-200/50"
                >
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center justify-center space-x-2 text-neutral-600">
                      <Phone className="h-4 w-4" />
                      <span className="text-sm font-medium">06 44 68 42 47</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 text-neutral-600">
                      <Mail className="h-4 w-4" />
                      <span className="text-sm font-medium">contact@cabinet-paulbruveaut.site</span>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <a
                      href="tel:+33644684247"
                      onClick={() => setIsOpen(false)}
                      className="block w-full btn-premium text-center"
                    >
                      Appeler maintenant
                    </a>
                    <a
                      href="mailto:contact@cabinet-paulbruveaut.site"
                      onClick={() => setIsOpen(false)}
                      className="block w-full border-2 border-primary-600 text-primary-600 px-4 py-3 rounded-xl font-semibold hover:bg-primary-600 hover:text-white transition-colors text-center"
                    >
                      Nous écrire
                    </a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

export default Navbar

    
