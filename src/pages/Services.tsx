
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Home as HomeIcon, Heart, Building, Scale, Clock, Euro } from 'lucide-react'
import { motion } from 'framer-motion'
import servicesData from '../data/services.json'

interface Service {
  _id: string
  serviceId: string
  title: string
  description: string
  category: string
  price: string
  duration: string
  isActive: boolean
}

const Services: React.FC = () => {
  const [services, setServices] = useState<Service[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // On charge les services depuis le fichier JSON importé
    setServices(servicesData)
    setLoading(false)
  }, [])

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'immobilier':
        return HomeIcon
      case 'famille':
        return Heart
      case 'entreprise':
        return Building
      case 'succession':
        return Scale
      default:
        return Scale
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'immobilier':
        return 'bg-blue-100 text-blue-700 border-blue-200'
      case 'famille':
        return 'bg-pink-100 text-pink-700 border-pink-200'
      case 'entreprise':
        return 'bg-green-100 text-green-700 border-green-200'
      case 'succession':
        return 'bg-purple-100 text-purple-700 border-purple-200'
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200'
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-700"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Nos services notariaux
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un accompagnement expert dans tous les domaines du droit notarial. 
              Chaque service est personnalisé selon vos besoins spécifiques.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = getCategoryIcon(service.category)
              return (
                <motion.div
                  key={service._id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <div className="p-8">
                    <div className="flex items-start space-x-4 mb-6">
                      <div className={`p-3 rounded-lg border ${getCategoryColor(service.category)}`}>
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {service.title}
                        </h3>
                        <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(service.category)}`}>
                          {service.category.charAt(0).toUpperCase() + service.category.slice(1)}
                        </span>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center space-x-2">
                        <Euro className="h-5 w-5 text-green-600" />
                        <div>
                          <p className="text-sm text-gray-500">Tarif</p>
                          <p className="font-medium text-gray-900">{service.price}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-5 w-5 text-blue-600" />
                        <div>
                          <p className="text-sm text-gray-500">Délai</p>
                          <p className="font-medium text-gray-900">{service.duration}</p>
                        </div>
                      </div>
                    </div>

                    <Link
                      to="/contact"
                      className="inline-flex items-center space-x-2 bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors font-medium"
                    >
                      <span>Demander un devis</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6">
              Besoin d'un service personnalisé ?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Chaque situation est unique. Contactez-nous pour discuter de vos besoins spécifiques 
              et obtenir un accompagnement sur mesure.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                to="/contact"
                className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Nous contacter
              </Link>
              <Link
                to="/rendez-vous"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition-colors"
              >
                Prendre rendez-vous
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Services
