
import React from 'react'
import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-neutral-900 to-black text-white relative overflow-hidden">
      {/* Éléments décoratifs */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold-600/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo et informations cabinet */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-primary-700/20 rounded-xl blur"></div>
                <div className="relative bg-white/5 backdrop-blur-sm p-3 rounded-xl border border-white/10">
                  <img 
                    src="https://ai-lumi-prd.oss-us-east-1.aliyuncs.com/ee/ee096ad1415a6acf47518db7a215603c.png"
                    alt="Cabinet Maître Paul Bruveaut"
                    className="h-10 w-auto object-contain filter drop-shadow-sm"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gradient-light font-serif">Maître Paul BRUVEAUT</h3>
                <p className="text-primary-300 font-medium">Notaire • Paris</p>
                <p className="text-sm text-neutral-300">En collaboration avec Maître COUZIGOU-SUHAS Nathalie</p>
              </div>
            </div>
            <p className="text-neutral-300 text-sm leading-relaxed max-w-md mb-6">
              Cabinet notarial d'excellence offrant des services juridiques complets avec plus de 20 ans d'expérience. 
              Expertise reconnue en droit immobilier, familial, des successions et des entreprises.
            </p>
            
            {/* Contact rapide mis en évidence */}
            <div className="bg-gradient-to-r from-primary-600/20 to-primary-700/20 rounded-2xl p-6 border border-primary-500/30 mb-6">
              <h4 className="text-lg font-semibold text-white mb-4">Contact direct</h4>
              <div className="space-y-3">
                <a 
                  href="tel:+33644684247" 
                  className="flex items-center space-x-3 group hover:text-primary-300 transition-colors"
                >
                  <div className="bg-green-600/30 p-2 rounded-lg group-hover:bg-green-600/50 transition-colors">
                    <Phone className="h-5 w-5 text-green-300" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">06 44 68 42 47</p>
                    <p className="text-sm text-neutral-300">Appel direct</p>
                  </div>
                </a>
                <a 
                  href="mailto:contact@cabinet-paulbruveaut.site" 
                  className="flex items-center space-x-3 group hover:text-primary-300 transition-colors"
                >
                  <div className="bg-blue-600/30 p-2 rounded-lg group-hover:bg-blue-600/50 transition-colors">
                    <Mail className="h-5 w-5 text-blue-300" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">contact@cabinet-paulbruveaut.site</p>
                    <p className="text-sm text-neutral-300">Email professionnel</p>
                  </div>
                </a>
              </div>
            </div>
            
            {/* Certifications */}
            <div className="flex flex-wrap gap-3">
              <div className="bg-white/5 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">
                <span className="text-xs text-neutral-300">Chambre des Notaires de Paris</span>
              </div>
              <div className="bg-white/5 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">
                <span className="text-xs text-neutral-300">20+ ans d'expérience</span>
              </div>
            </div>
          </motion.div>

          {/* Coordonnées */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-6 text-gradient-light">Coordonnées</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group">
                <div className="bg-primary-600/20 p-2 rounded-lg group-hover:bg-primary-600/30 transition-colors">
                  <MapPin className="h-4 w-4 text-primary-300" />
                </div>
                <div className="text-sm text-neutral-300">
                  <p className="font-medium text-white">89 Boulevard Saint-Michel</p>
                  <p>75005 Paris</p>
                  <p className="text-xs text-neutral-400 mt-1">En collaboration avec Maître COUZIGOU-SUHAS Nathalie</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 group">
                <div className="bg-green-600/20 p-2 rounded-lg group-hover:bg-green-600/30 transition-colors">
                  <Phone className="h-4 w-4 text-green-300" />
                </div>
                <div>
                  <a href="tel:+33644684247" className="text-sm text-neutral-300 hover:text-white transition-colors font-medium">
                    06 44 68 42 47
                  </a>
                  <p className="text-xs text-neutral-400">Ligne directe</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 group">
                <div className="bg-blue-600/20 p-2 rounded-lg group-hover:bg-blue-600/30 transition-colors">
                  <Mail className="h-4 w-4 text-blue-300" />
                </div>
                <a href="mailto:contact@cabinet-paulbruveaut.site" className="text-sm text-neutral-300 hover:text-white transition-colors">
                  contact@cabinet-paulbruveaut.site
                </a>
              </div>
            </div>
          </motion.div>

          {/* Horaires */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-6 text-gradient-light">Horaires</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Clock className="h-4 w-4 text-gold-400" />
                <div className="text-sm">
                  <p className="font-medium text-white">Lundi - Vendredi</p>
                  <p className="text-neutral-300">9h00 - 18h00</p>
                </div>
              </div>
              <div className="text-sm text-neutral-300 ml-7">
                <p className="font-medium text-white">Samedi</p>
                <p>9h00 - 12h00</p>
              </div>
              <div className="text-sm text-neutral-300 ml-7">
                <p className="font-medium text-white">Dimanche</p>
                <p className="text-red-400">Fermé</p>
              </div>
            </div>
            
            {/* Contact d'urgence */}
            <div className="mt-6 p-4 bg-red-600/10 border border-red-600/20 rounded-xl">
              <h5 className="text-sm font-medium text-red-300 mb-2">Urgence notariale</h5>
              <p className="text-xs text-red-200 mb-2">
                Contactez-nous directement pour les urgences
              </p>
              <div className="space-y-2">
                <a 
                  href="tel:+33644684247" 
                  className="text-sm font-medium text-red-300 hover:text-red-200 transition-colors block"
                >
                  📞 06 44 68 42 47
                </a>
                <a 
                  href="mailto:contact@cabinet-paulbruveaut.site" 
                  className="text-sm font-medium text-red-300 hover:text-red-200 transition-colors block"
                >
                  ✉️ contact@cabinet-paulbruveaut.site
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Séparateur et mentions légales */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-neutral-700 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-neutral-400">
              © {new Date().getFullYear()} Cabinet Maître Paul Bruveaut. Tous droits réservés.
            </div>
            <div className="flex items-center space-x-6 text-sm text-neutral-400">
              <a href="#" className="hover:text-white transition-colors flex items-center space-x-1">
                <span>Mentions légales</span>
                <ExternalLink className="h-3 w-3" />
              </a>
              <span className="text-neutral-600">•</span>
              <a href="#" className="hover:text-white transition-colors">Politique de confidentialité</a>
              <span className="text-neutral-600">•</span>
              <a href="#" className="hover:text-white transition-colors">Plan du site</a>
            </div>
          </div>
          
          {/* Contact footer final */}
          <div className="text-center mt-6 p-4 bg-gradient-to-r from-primary-600/10 to-primary-700/10 rounded-xl border border-primary-500/20">
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-8">
              <a href="tel:+33644684247" className="flex items-center space-x-2 text-white hover:text-primary-300 transition-colors">
                <Phone className="h-4 w-4" />
                <span className="font-medium">06 44 68 42 47</span>
              </a>
              <a href="mailto:contact@cabinet-paulbruveaut.site" className="flex items-center space-x-2 text-white hover:text-primary-300 transition-colors">
                <Mail className="h-4 w-4" />
                <span className="font-medium">contact@cabinet-paulbruveaut.site</span>
              </a>
            </div>
          </div>
          
          <div className="text-xs text-neutral-500 mt-4 text-center">
            Notaire titulaire d'un office notarial - Membre de la Chambre des Notaires de Paris<br/>
            En collaboration avec Maître COUZIGOU-SUHAS Nathalie - 89 Boulevard Saint-Michel, 75005 Paris
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
