
import React, { useState } from 'react'
import { Calendar, Clock, User, Phone, Mail, MessageSquare, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'

const Appointments: React.FC = () => {
  const [formData, setFormData] = useState({
    clientName: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const services = [
    'Vente immobilière',
    'Achat immobilier',
    'Testament et succession',
    'Contrat de mariage',
    'Création d\'entreprise',
    'Donation',
    'Conseil juridique',
    'Autre'
  ]

  const timeSlots = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30'
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulation de création du rendez-vous
      const appointmentData = {
        appointmentId: `RDV-${Date.now()}`,
        clientName: formData.clientName,
        email: formData.email,
        phone: formData.phone,
        service: formData.service,
        date: `${formData.date}T${formData.time}:00.000Z`,
        message: formData.message,
        status: 'pending',
        creator: 'client',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }

      // Simulation d'envoi à MongoDB
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      toast.success('Votre demande de rendez-vous a été envoyée ! Nous vous confirmerons la date dans les plus brefs délais.')
      
      setFormData({
        clientName: '',
        email: '',
        phone: '',
        service: '',
        date: '',
        time: '',
        message: ''
      })
    } catch (error) {
      toast.error('Une erreur est survenue. Veuillez réessayer.')
    } finally {
      setIsSubmitting(false)
    }
  }

  // Générer les dates disponibles (à partir d'aujourd'hui + 1 jour, jours ouvrables seulement)
  const getAvailableDates = () => {
    const dates = []
    const today = new Date()
    
    for (let i = 1; i <= 30; i++) {
      const date = new Date(today)
      date.setDate(today.getDate() + i)
      
      // Exclure les weekends (samedi = 6, dimanche = 0)
      if (date.getDay() !== 0 && date.getDay() !== 6) {
        dates.push(date.toISOString().split('T')[0])
      }
    }
    
    return dates
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
              Prendre rendez-vous
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Planifiez votre consultation avec Maître Paul Bruveau. 
              Nous vous confirmerons votre rendez-vous dans les plus brefs délais.
            </p>
            
            {/* Contact rapide en header */}
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
              <a
                href="tel:+33644684247"
                className="inline-flex items-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span>06 44 68 42 47</span>
              </a>
              <a
                href="mailto:contact@cabinet-paulbruveaut.site"
                className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span>contact@cabinet-paulbruveaut.site</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Informations pratiques */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-1"
            >
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">
                  Informations pratiques
                </h2>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3 group">
                    <Calendar className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">Disponibilités</p>
                      <p className="text-sm text-gray-600">Lundi à vendredi, 9h-18h</p>
                      <p className="text-sm text-gray-600">Samedi matin sur demande</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3 group">
                    <Clock className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">Durée</p>
                      <p className="text-sm text-gray-600">Consultation : 30-60 min</p>
                      <p className="text-sm text-gray-600">Signature d'acte : 1-2h</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3 group">
                    <CheckCircle className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">Confirmation</p>
                      <p className="text-sm text-gray-600">Réponse sous 24h ouvrées</p>
                      <p className="text-sm text-gray-600">Confirmation par email/téléphone</p>
                    </div>
                  </div>
                </div>

                {/* Contact direct */}
                <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg border border-blue-200">
                  <h3 className="font-medium text-blue-900 mb-3">Contact direct</h3>
                  <div className="space-y-2">
                    <a 
                      href="tel:+33644684247"
                      className="flex items-center space-x-2 text-sm text-blue-800 hover:text-blue-900 transition-colors"
                    >
                      <Phone className="h-4 w-4" />
                      <span>06 44 68 42 47</span>
                    </a>
                    <a 
                      href="mailto:contact@cabinet-paulbruveaut.site"
                      className="flex items-center space-x-2 text-sm text-blue-800 hover:text-blue-900 transition-colors"
                    >
                      <Mail className="h-4 w-4" />
                      <span>contact@cabinet-paulbruveaut.site</span>
                    </a>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <h3 className="font-medium text-blue-900 mb-2">Première consultation</h3>
                  <p className="text-sm text-blue-800">
                    La première consultation permet d'analyser votre situation 
                    et de vous proposer la meilleure solution juridique.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Formulaire de rendez-vous */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Demande de rendez-vous
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Informations personnelles */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="clientName" className="block text-sm font-medium text-gray-700 mb-2">
                        <User className="h-4 w-4 inline mr-1" />
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        id="clientName"
                        name="clientName"
                        required
                        value={formData.clientName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder="Votre nom complet"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        <Mail className="h-4 w-4 inline mr-1" />
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder="contact@cabinet-paulbruveaut.site"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      <Phone className="h-4 w-4 inline mr-1" />
                      Téléphone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="06 44 68 42 47"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Service demandé *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    >
                      <option value="">Sélectionnez un service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Date et heure */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                        <Calendar className="h-4 w-4 inline mr-1" />
                        Date souhaitée *
                      </label>
                      <select
                        id="date"
                        name="date"
                        required
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      >
                        <option value="">Choisir une date</option>
                        {getAvailableDates().map((date) => (
                          <option key={date} value={date}>
                            {new Date(date).toLocaleDateString('fr-FR', {
                              weekday: 'long',
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-2">
                        <Clock className="h-4 w-4 inline mr-1" />
                        Heure souhaitée *
                      </label>
                      <select
                        id="time"
                        name="time"
                        required
                        value={formData.time}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      >
                        <option value="">Choisir une heure</option>
                        {timeSlots.map((time) => (
                          <option key={time} value={time}>
                            {time}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      <MessageSquare className="h-4 w-4 inline mr-1" />
                      Précisions sur votre demande
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                      placeholder="Décrivez brièvement l'objet de votre consultation..."
                    />
                  </div>

                  <div className="flex items-center justify-between pt-4">
                    <p className="text-sm text-gray-500">
                      * Champs obligatoires
                    </p>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-blue-700 text-white px-8 py-3 rounded-lg hover:bg-blue-800 transition-colors font-semibold flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                          <span>Envoi...</span>
                        </>
                      ) : (
                        <>
                          <Calendar className="h-4 w-4" />
                          <span>Demander le rendez-vous</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Note importante */}
      <section className="py-12 bg-yellow-50 border-t border-yellow-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h3 className="text-lg font-semibold text-yellow-800 mb-4">
              Note importante
            </h3>
            <p className="text-yellow-700 max-w-2xl mx-auto mb-6">
              Cette demande ne constitue pas une confirmation de rendez-vous. 
              Nous vous contacterons dans les 24h ouvrées pour confirmer la disponibilité 
              et finaliser les modalités de votre consultation.
            </p>
            
            {/* Contact rapide dans la note */}
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6">
              <a
                href="tel:+33644684247"
                className="inline-flex items-center space-x-2 text-yellow-800 hover:text-yellow-900 transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span className="font-medium">06 44 68 42 47</span>
              </a>
              <a
                href="mailto:contact@cabinet-paulbruveaut.site"
                className="inline-flex items-center space-x-2 text-yellow-800 hover:text-yellow-900 transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span className="font-medium">contact@cabinet-paulbruveaut.site</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Appointments
