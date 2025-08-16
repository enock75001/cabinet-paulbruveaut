
import React from 'react'
import { Link } from 'react-router-dom'
import { Award, Users, Clock, Shield, Phone, GraduationCap, MapPin } from 'lucide-react'
import { motion } from 'framer-motion'

const About: React.FC = () => {
  const achievements = [
    {
      icon: GraduationCap,
      title: 'Formation d\'excellence',
      description: 'Master en Droit Notarial - Université Paris II Panthéon-Assas'
    },
    {
      icon: Award,
      title: '20 ans d\'expérience',
      description: 'Plus de deux décennies au service des particuliers et entreprises'
    },
    {
      icon: Users,
      title: '2000+ clients',
      description: 'Une clientèle fidèle qui nous fait confiance'
    },
    {
      icon: Shield,
      title: 'Expertise reconnue',
      description: 'Membre de la Chambre des Notaires de Paris'
    }
  ]

  const values = [
    {
      title: 'Expertise',
      description: 'Une connaissance approfondie du droit et une veille juridique constante pour vous offrir les meilleurs conseils.'
    },
    {
      title: 'Confidentialité',
      description: 'Le secret professionnel est au cœur de notre métier. Vos informations sont protégées avec le plus grand soin.'
    },
    {
      title: 'Proximité',
      description: 'Un accompagnement personnalisé et une disponibilité pour répondre à toutes vos questions.'
    },
    {
      title: 'Efficacité',
      description: 'Des procédures optimisées et des délais respectés pour mener à bien vos projets.'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Maître Paul BRUVEAU
              </h1>
              <p className="text-xl text-blue-700 font-semibold mb-4">
                Notaire à Paris depuis 2004
              </p>
              <p className="text-lg text-blue-600 font-medium mb-6">
                En collaboration avec Maître COUZIGOU-SUHAS Nathalie
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Diplômé de l'Université Paris II Panthéon-Assas, j'ai consacré ma carrière 
                à accompagner particuliers et entreprises dans leurs projets les plus importants. 
                Mon expertise couvre l'ensemble du droit notarial, avec une spécialisation 
                en droit immobilier et droit des successions.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  to="/contact"
                  className="bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transition-colors text-center"
                >
                  Nous contacter
                </Link>
                <Link
                  to="/rendez-vous"
                  className="border-2 border-blue-700 text-blue-700 px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 hover:text-white transition-colors text-center flex items-center justify-center space-x-2"
                >
                  <Phone className="h-5 w-5" />
                  <span>Prendre rendez-vous</span>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-r from-blue-700 to-blue-900 rounded-2xl p-8 text-white">
                <div className="mb-6">
                  <img
                    src="https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Maître Paul Bruveau"
                    className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4">Un engagement quotidien</h3>
                  <p className="text-blue-100 leading-relaxed">
                    "Mon rôle de notaire va au-delà de la simple rédaction d'actes. 
                    Je suis votre conseil juridique, votre guide dans les moments 
                    importants de votre vie."
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Parcours et expertise
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Une formation d'excellence et une expérience solide pour vous accompagner
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="h-8 w-8 text-blue-700" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {achievement.title}
                </h3>
                <p className="text-gray-600">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nos valeurs
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Les principes qui guident notre pratique quotidienne du notariat
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Notre cabinet
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-blue-700 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Emplacement privilégié</h3>
                    <p className="text-gray-600 mb-2">
                      Situé au 89 Boulevard Saint-Michel dans le 5ème arrondissement de Paris, 
                      notre cabinet bénéficie d'un emplacement facilement accessible en transports en commun.
                    </p>
                    <p className="text-blue-600 font-medium italic">
                      Maître Paul BRUVEAU exerce en collaboration avec Maître COUZIGOU-SUHAS Nathalie
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-blue-700 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Horaires flexibles</h3>
                    <p className="text-gray-600">
                      Nous adaptons nos horaires à vos contraintes professionnelles 
                      et personnelles pour faciliter vos démarches.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Users className="h-6 w-6 text-blue-700 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Collaboration professionnelle</h3>
                    <p className="text-gray-600">
                      Notre collaboration avec Maître COUZIGOU-SUHAS Nathalie vous assure 
                      un service de qualité et un suivi personnalisé dans tous vos dossiers.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Cabinet notarial"
                className="rounded-2xl shadow-lg w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-lg font-semibold">89 Boulevard Saint-Michel</p>
                <p className="text-sm opacity-90">75005 Paris</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6">
              Prêt à nous faire confiance ?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Contactez-nous dès aujourd'hui pour discuter de votre projet. 
              Nous sommes là pour vous accompagner à chaque étape.
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

export default About
