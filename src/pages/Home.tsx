
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Phone, Mail, MapPin, Clock, Users, Award, Shield, Star, ChevronDown, ChevronUp } from 'lucide-react'
import { motion } from 'framer-motion'

const Home: React.FC = () => {
  const [showAllTestimonials, setShowAllTestimonials] = useState(false)

  const testimonials = [
    {
      name: "Marie Dubois",
      location: "Paris 16ème",
      text: "Maître Bruveaut nous a accompagnés avec bienveillance dans l'achat de notre appartement. Ses conseils avisés nous ont évité plusieurs pièges. Un professionnel de confiance.",
      rating: 5,
      service: "Achat immobilier"
    },
    {
      name: "Jean-Pierre Martin",
      location: "Neuilly-sur-Seine",
      text: "Succession complexe réglée avec une efficacité remarquable. L'expertise juridique de Maître Bruveau est impressionnante. Je le recommande vivement.",
      rating: 5,
      service: "Succession"
    },
    {
      name: "Sophie Leroy",
      location: "Paris 7ème",
      text: "Divorce difficile mais géré avec tact et professionnalisme. Maître Bruveau a su préserver les intérêts de mes enfants. Merci pour votre humanité.",
      rating: 5,
      service: "Droit de la famille"
    },
    {
      name: "François Moreau",
      location: "Boulogne-Billancourt",
      text: "Création de SCI facilitée grâce aux explications claires et précises. Un notaire qui prend le temps d'expliquer chaque étape. Excellent service.",
      rating: 5,
      service: "Droit des sociétés"
    },
    {
      name: "Catherine Bernard",
      location: "Paris 15ème",
      text: "Vente immobilière menée tambour battant. Maître Bruveau a négocié avec l'acquéreur de manière exemplaire. Très satisfaite de la prestation.",
      rating: 5,
      service: "Vente immobilier"
    },
    {
      name: "Philippe Rousseau",
      location: "Saint-Germain-en-Laye",
      text: "Testament olographe rédigé dans les règles de l'art. Les conseils de Maître Bruveau m'ont permis d'optimiser la transmission de mon patrimoine.",
      rating: 5,
      service: "Testament"
    },
    {
      name: "Isabelle Petit",
      location: "Paris 11ème",
      text: "Acte de donation préparé minutieusement. L'attention aux détails et la disponibilité de Maître Bruveau sont remarquables. Je recommande sans hésiter.",
      rating: 5,
      service: "Donation"
    },
    {
      name: "Michel Durand",
      location: "Vincennes",
      text: "Contrat de mariage établi rapidement avant notre union. Maître Bruveau a su nous conseiller sur le régime le plus adapté à notre situation.",
      rating: 5,
      service: "Contrat de mariage"
    },
    {
      name: "Nathalie Simon",
      location: "Paris 12ème",
      text: "Liquidation de communauté gérée avec professionnalisme. Malgré la complexité du dossier, tout s'est déroulé sans encombre. Merci !",
      rating: 5,
      service: "Liquidation"
    },
    {
      name: "Laurent Blanc",
      location: "Levallois-Perret",
      text: "Achat en VEFA sécurisé grâce à l'expertise de Maître Bruveau. Ses vérifications approfondies nous ont évité de mauvaises surprises.",
      rating: 5,
      service: "VEFA"
    },
    {
      name: "Valérie Garcia",
      location: "Paris 8ème",
      text: "Succession internationale traitée avec une compétence exceptionnelle. Maître Bruveau maîtrise parfaitement les aspects transfrontaliers.",
      rating: 5,
      service: "Succession internationale"
    },
    {
      name: "Thierry Roux",
      location: "Courbevoie",
      text: "Prêt immobilier négocié dans d'excellentes conditions. Les relations bancaires de Maître Bruveau sont un véritable atout pour ses clients.",
      rating: 5,
      service: "Financement immobilier"
    },
    {
      name: "Amélie Fabre",
      location: "Paris 14ème",
      text: "Adoption plénière finalisée grâce à l'accompagnement bienveillant de Maître Bruveau. Un moment émouvant géré avec délicatesse.",
      rating: 5,
      service: "Adoption"
    },
    {
      name: "Christophe Mercier",
      location: "Puteaux",
      text: "Création d'une fondation d'entreprise menée à bien. L'expertise de Maître Bruveau en droit des structures d'intérêt général est remarquable.",
      rating: 5,
      service: "Fondation"
    },
    {
      name: "Sandrine Lopez",
      location: "Paris 17ème",
      text: "Pacte civil de solidarité conclu en toute sérénité. Maître Bruveau a su nous expliquer tous les aspects juridiques et fiscaux.",
      rating: 5,
      service: "PACS"
    },
    {
      name: "Olivier Girard",
      location: "Issy-les-Moulineaux",
      text: "Bail emphytéotique négocié dans d'excellentes conditions. La connaissance du droit rural de Maître Bruveau est impressionnante.",
      rating: 5,
      service: "Bail emphytéotique"
    },
    {
      name: "Caroline Muller",
      location: "Paris 6ème",
      text: "Mandat de protection future établi pour mon père. Maître Bruveau a anticipé toutes les difficultés potentielles. Très professionnel.",
      rating: 5,
      service: "Protection juridique"
    },
    {
      name: "Frédéric Lefevre",
      location: "Clichy",
      text: "Cession de parts sociales optimisée fiscalement. Les conseils de Maître Bruveau m'ont fait économiser une somme considérable.",
      rating: 5,
      service: "Cession de parts"
    },
    {
      name: "Sylvie Bonnet",
      location: "Paris 13ème",
      text: "Donation-partage équitable entre mes trois enfants. Maître Bruveau a su préserver l'harmonie familiale. Un grand merci.",
      rating: 5,
      service: "Donation-partage"
    },
    {
      name: "Patrice Moreau",
      location: "Suresnes",
      text: "Usufruit viager constitué dans les meilleures conditions. L'expertise technique de Maître Bruveau est incontestable.",
      rating: 5,
      service: "Usufruit"
    },
    {
      name: "Monique Dubois",
      location: "Paris 9ème",
      text: "Succession en déshérence récupérée grâce à la persévérance de Maître Bruveau. Un travail de recherche minutieux et efficace.",
      rating: 5,
      service: "Succession complexe"
    },
    {
      name: "Alain Roussel",
      location: "Antony",
      text: "Servitude de passage négociée à l'amiable. Maître Bruveau a trouvé une solution équitable pour toutes les parties.",
      rating: 5,
      service: "Servitudes"
    },
    {
      name: "Brigitte Lemoine",
      location: "Paris 10ème",
      text: "Reconnaissance de dette formalisée correctement. Les explications de Maître Bruveau ont clarifié tous les aspects juridiques.",
      rating: 5,
      service: "Reconnaissance de dette"
    },
    {
      name: "Gérard Petit",
      location: "Bourg-la-Reine",
      text: "Hypothèque constituée rapidement pour garantir un prêt professionnel. Maître Bruveau a su concilier les intérêts de tous.",
      rating: 5,
      service: "Hypothèque"
    },
    {
      name: "Martine Duval",
      location: "Paris 18ème",
      text: "Procuration authentique établie pour gérer les biens de ma mère. Maître Bruveau a été d'une grande aide dans cette épreuve.",
      rating: 5,
      service: "Procuration"
    },
    {
      name: "Claude Bernard",
      location: "Châtillon",
      text: "Viager libre vendu dans d'excellentes conditions. Les calculs actuariels de Maître Bruveau étaient parfaitement justes.",
      rating: 5,
      service: "Viager"
    },
    {
      name: "Denise Martin",
      location: "Paris 19ème",
      text: "Tutelle organisée pour mon frère handicapé. Maître Bruveau a su nous orienter vers les meilleures solutions de protection.",
      rating: 5,
      service: "Tutelle"
    },
    {
      name: "Robert Leroy",
      location: "Malakoff",
      text: "Bail commercial renégocié favorablement. L'expertise de Maître Bruveau en droit commercial est remarquable.",
      rating: 5,
      service: "Bail commercial"
    },
    {
      name: "Jacqueline Moreau",
      location: "Paris 20ème",
      text: "Curatelle allégée mise en place pour ma sœur. Maître Bruveau a trouvé la mesure de protection la plus adaptée.",
      rating: 5,
      service: "Curatelle"
    },
    {
      name: "André Dubois",
      location: "Fontenay-aux-Roses",
      text: "Démembrement de propriété optimisé fiscalement. Les conseils de Maître Bruveau ont permis une transmission réussie.",
      rating: 5,
      service: "Démembrement"
    },
    {
      name: "Colette Rousseau",
      location: "Paris 4ème",
      text: "Indivision organisée entre héritiers. Maître Bruveau a su désamorcer les tensions familiales avec diplomatie.",
      rating: 5,
      service: "Indivision"
    },
    {
      name: "Henri Petit",
      location: "Le Kremlin-Bicêtre",
      text: "Substitution fidéicommissaire constituée selon nos souhaits. L'expertise de Maître Bruveau en transmissions complexes est exceptionnelle.",
      rating: 5,
      service: "Substitution"
    },
    {
      name: "Yvette Simon",
      location: "Paris 3ème",
      text: "Mainlevée d'hypothèque obtenue rapidement. Maître Bruveau a su accélérer les démarches administratives.",
      rating: 5,
      service: "Mainlevée"
    },
    {
      name: "Maurice Blanc",
      location: "Gentilly",
      text: "Nue-propriété acquise dans d'excellentes conditions. Les conseils d'investissement de Maître Bruveau étaient judicieux.",
      rating: 5,
      service: "Nue-propriété"
    },
    {
      name: "Simone Garcia",
      location: "Paris 5ème",
      text: "Révocation de donation pour ingratitude. Maître Bruveau a mené cette procédure délicate avec beaucoup de tact.",
      rating: 5,
      service: "Révocation donation"
    },
    {
      name: "Lucien Roux",
      location: "Arcueil",
      text: "Partage judiciaire évité grâce à la médiation de Maître Bruveau. Une solution amiable trouvée pour tous les héritiers.",
      rating: 5,
      service: "Médiation succession"
    },
    {
      name: "Georgette Fabre",
      location: "Paris 2ème",
      text: "Legs particulier rédigé selon mes volontés précises. Maître Bruveau a su traduire juridiquement toutes mes intentions.",
      rating: 5,
      service: "Legs"
    },
    {
      name: "Fernand Mercier",
      location: "Cachan",
      text: "Clause d'inaliénabilité bien rédigée. L'expertise de Maître Bruveau en droit des libéralités est remarquable.",
      rating: 5,
      service: "Clause d'inaliénabilité"
    },
    {
      name: "Odette Lopez",
      location: "Paris 1er",
      text: "Réduction pour excès de quotité calculée avec précision. Maître Bruveau maîtrise parfaitement le droit des successions.",
      rating: 5,
      service: "Réduction succession"
    },
    {
      name: "Gaston Girard",
      location: "L'Haÿ-les-Roses",
      text: "Rapport successoral établi équitablement. Maître Bruveau a su préserver la paix familiale dans une situation tendue.",
      rating: 5,
      service: "Rapport successoral"
    },
    {
      name: "Bernadette Muller",
      location: "Paris 16ème",
      text: "Quotité disponible optimisée pour mes donations. Les conseils de Maître Bruveau ont permis une planification parfaite.",
      rating: 5,
      service: "Quotité disponible"
    },
    {
      name: "Émile Lefevre",
      location: "Villejuif",
      text: "Réserve héréditaire respectée dans mes dispositions. Maître Bruveau a vérifié la conformité de tous mes actes.",
      rating: 5,
      service: "Réserve héréditaire"
    },
    // 30 nouveaux témoignages
    {
      name: "Cécile Moreau",
      location: "Paris 7ème",
      text: "Acquisition d'un bien en multipropriété gérée parfaitement. Maître Bruveau a clarifié tous les aspects juridiques complexes de ce type d'investissement.",
      rating: 5,
      service: "Multipropriété"
    },
    {
      name: "Dominique Rousseau",
      location: "Montrouge",
      text: "Convention de divorce par consentement mutuel établie rapidement. Maître Bruveau a su préserver les intérêts de chacun avec équité.",
      rating: 5,
      service: "Divorce amiable"
    },
    {
      name: "Véronique Petit",
      location: "Paris 8ème",
      text: "Société civile immobilière créée pour optimiser notre patrimoine familial. L'expertise fiscale de Maître Bruveau est remarquable.",
      rating: 5,
      service: "SCI familiale"
    },
    {
      name: "Jacques Simon",
      location: "Clamart",
      text: "Prêt familial formalisé avec toutes les garanties nécessaires. Maître Bruveau a su concilier liens familiaux et sécurité juridique.",
      rating: 5,
      service: "Prêt familial"
    },
    {
      name: "Françoise Blanc",
      location: "Paris 11ème",
      text: "Changement de régime matrimonial effectué sans difficulté. Les explications de Maître Bruveau ont éclairé notre choix.",
      rating: 5,
      service: "Régime matrimonial"
    },
    {
      name: "Yves Garcia",
      location: "Bagneux",
      text: "Bail emphytéotique administratif négocié avantageusement. La connaissance du droit public de Maître Bruveau est impressionnante.",
      rating: 5,
      service: "BEA"
    },
    {
      name: "Monique Roux",
      location: "Paris 12ème",
      text: "Succession avec biens à l'étranger réglée efficacement. Maître Bruveau maîtrise parfaitement le droit international privé.",
      rating: 5,
      service: "Succession internationale"
    },
    {
      name: "Pierre Fabre",
      location: "Vanves",
      text: "Donation avec réserve d'usufruit optimisée fiscalement. Les conseils de Maître Bruveau ont généré des économies substantielles.",
      rating: 5,
      service: "Donation-usufruit"
    },
    {
      name: "Jeanne Mercier",
      location: "Paris 13ème",
      text: "Testament authentique rédigé selon mes volontés complexes. Maître Bruveau a su traduire juridiquement toutes mes intentions.",
      rating: 5,
      service: "Testament authentique"
    },
    {
      name: "Claude Lopez",
      location: "Châtenay-Malabry",
      text: "Vente en l'état futur d'achèvement sécurisée totalement. L'expertise de Maître Bruveau en promotion immobilière est remarquable.",
      rating: 5,
      service: "VEFA promotion"
    },
    {
      name: "Huguette Girard",
      location: "Paris 14ème",
      text: "Mandat à effet posthume établi pour protéger mes héritiers. Maître Bruveau a anticipé toutes les situations délicates.",
      rating: 5,
      service: "Mandat posthume"
    },
    {
      name: "Marcel Muller",
      location: "Sceaux",
      text: "Pacte successoral rédigé pour éviter les conflits familiaux. La diplomatie de Maître Bruveau a permis un accord unanime.",
      rating: 5,
      service: "Pacte successoral"
    },
    {
      name: "Solange Lefevre",
      location: "Paris 15ème",
      text: "Renonciation à succession effectuée dans les délais. Maître Bruveau m'a guidée dans cette décision difficile mais nécessaire.",
      rating: 5,
      service: "Renonciation succession"
    },
    {
      name: "Raymond Bonnet",
      location: "Antony",
      text: "Liquidation de société civile menée à bien. L'expertise comptable et juridique de Maître Bruveau a facilité toutes les démarches.",
      rating: 5,
      service: "Liquidation SCI"
    },
    {
      name: "Madeleine Moreau",
      location: "Paris 16ème",
      text: "Adoption simple d'un majeur finalisée rapidement. Maître Bruveau a su simplifier une procédure qui paraissait complexe.",
      rating: 5,
      service: "Adoption majeur"
    },
    {
      name: "Louis Dubois",
      location: "Bourg-la-Reine",
      text: "Crédit-vendeur négocié dans d'excellentes conditions. Les relations bancaires de Maître Bruveau ont été déterminantes.",
      rating: 5,
      service: "Crédit-vendeur"
    },
    {
      name: "Andrée Rousseau",
      location: "Paris 17ème",
      text: "Servitude de vue constituée à l'amiable avec le voisin. Maître Bruveau a trouvé une solution équitable pour tous.",
      rating: 5,
      service: "Servitude de vue"
    },
    {
      name: "Lucienne Petit",
      location: "Fresnes",
      text: "Bail à construction établi pour notre projet immobilier. L'expertise de Maître Bruveau en droit de la construction est excellente.",
      rating: 5,
      service: "Bail à construction"
    },
    {
      name: "Fernande Simon",
      location: "Paris 18ème",
      text: "Curatelle renforcée organisée pour mon époux. Maître Bruveau a su nous orienter vers la protection la plus adaptée.",
      rating: 5,
      service: "Curatelle renforcée"
    },
    {
      name: "Georges Blanc",
      location: "Rungis",
      text: "Cession de fonds de commerce optimisée fiscalement. Les conseils de Maître Bruveau ont maximisé le prix de vente.",
      rating: 5,
      service: "Cession fonds"
    },
    {
      name: "Paulette Garcia",
      location: "Paris 19ème",
      text: "Testament olographe vérifié et sécurisé juridiquement. Maître Bruveau a corrigé toutes les formulations ambiguës.",
      rating: 5,
      service: "Vérification testament"
    },
    {
      name: "Édouard Roux",
      location: "Chevilly-Larue",
      text: "Donation graduelle constituée selon nos souhaits familiaux. L'expertise de Maître Bruveau en transmissions complexes est remarquable.",
      rating: 5,
      service: "Donation graduelle"
    },
    {
      name: "Suzanne Fabre",
      location: "Paris 20ème",
      text: "Partage d'ascendant réalisé équitablement entre mes enfants. Maître Bruveau a préservé l'harmonie familiale.",
      rating: 5,
      service: "Partage d'ascendant"
    },
    {
      name: "Honoré Mercier",
      location: "Thiais",
      text: "Société d'acquêts dissoute amiablement. Maître Bruveau a géré cette séparation délicate avec beaucoup de tact.",
      rating: 5,
      service: "Dissolution acquêts"
    },
    {
      name: "Germaine Lopez",
      location: "Paris 1er",
      text: "Legs universel exécuté conformément aux volontés du défunt. La rigueur de Maître Bruveau a évité tout contentieux.",
      rating: 5,
      service: "Legs universel"
    },
    {
      name: "Alphonse Girard",
      location: "Orly",
      text: "Substitution prohibée régularisée légalement. L'expertise de Maître Bruveau en droit des libéralités a résolu cette situation complexe.",
      rating: 5,
      service: "Substitution prohibée"
    },
    {
      name: "Henriette Muller",
      location: "Paris 2ème",
      text: "Clause de retour conventionnel bien rédigée. Maître Bruveau a su protéger mes intérêts tout en respectant la loi.",
      rating: 5,
      service: "Clause de retour"
    },
    {
      name: "Anatole Lefevre",
      location: "Choisy-le-Roi",
      text: "Droit de préemption urbain exercé dans les délais. La réactivité de Maître Bruveau a permis cette acquisition stratégique.",
      rating: 5,
      service: "Préemption urbaine"
    },
    {
      name: "Léontine Bonnet",
      location: "Paris 3ème",
      text: "Mainlevée d'inscription hypothécaire obtenue rapidement. Maître Bruveau a accéléré toutes les démarches administratives.",
      rating: 5,
      service: "Mainlevée hypothèque"
    },
    {
      name: "Célestin Moreau",
      location: "Vitry-sur-Seine",
      text: "Bail rural renégocié favorablement pour notre exploitation. L'expertise agricole de Maître Bruveau est impressionnante.",
      rating: 5,
      service: "Bail rural"
    }
  ]

  const displayedTestimonials = showAllTestimonials ? testimonials : testimonials.slice(0, 12)

  const services = [
    {
      icon: "🏠",
      title: "Immobilier",
      description: "Achat, vente, donation, succession immobilière"
    },
    {
      icon: "👨‍👩‍👧‍👦",
      title: "Famille",
      description: "Mariage, divorce, adoption, protection des majeurs"
    },
    {
      icon: "💼",
      title: "Entreprise", 
      description: "Création, cession, transmission d'entreprise"
    },
    {
      icon: "📜",
      title: "Succession",
      description: "Testament, donation, liquidation successorale"
    }
  ]

  const stats = [
    { number: "20+", label: "Années d'expérience", icon: Award },
    { number: "2000+", label: "Clients satisfaits", icon: Users },
    { number: "98%", label: "Taux de satisfaction", icon: Star },
    { number: "24h", label: "Délai de réponse", icon: Clock }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
        {/* Éléments décoratifs */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-600/5 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <div className="mb-6">
                <img 
                  src="https://ai-lumi-prd.oss-us-east-1.aliyuncs.com/d3/d3547f40259c0df34bb923384d4dc893.png"
                  alt="Cabinet Maître Paul Bruveau"
                  className="h-20 w-auto mx-auto lg:mx-0 mb-4 filter drop-shadow-lg"
                />
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                  Maître Paul
                </span>
                <br />
                <span className="text-white">BRUVEAUT</span>
              </h1>
              
              <p className="text-xl text-blue-100 mb-4 font-medium">
                Notaire à Paris depuis 2004
              </p>
              
              <p className="text-lg text-blue-200 mb-8 font-medium">
                En collaboration avec Maître COUZIGOU-SUHAS Nathalie
              </p>
              
              <p className="text-lg text-blue-100 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Votre notaire de confiance pour tous vos projets immobiliers, familiaux et patrimoniaux. 
                Une expertise reconnue au service de vos ambitions.
              </p>

              {/* Contact immédiat */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href="tel:+33644684247"
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <Phone className="h-5 w-5" />
                  <span>06 44 68 42 47</span>
                </a>
                <a
                  href="mailto:contact@cabinet-paulbruveaut.site"
                  className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 border border-white/20 hover:border-white/40"
                >
                  <Mail className="h-5 w-5" />
                  <span>contact@cabinet-paulbruveaut.site</span>
                </a>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/rendez-vous"
                  className="bg-white text-blue-800 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <span>Prendre rendez-vous</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  to="/services"
                  className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-800 transition-all duration-300 text-center"
                >
                  Nos services
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <div className="text-center mb-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-white/20 to-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Notre Cabinet</h3>
                  <p className="text-blue-100">Situé au cœur de Paris</p>
                </div>
                
                <div className="space-y-4 text-center">
                  <div>
                    <p className="text-white font-semibold text-lg">89 Boulevard Saint-Michel</p>
                    <p className="text-blue-100">75005 Paris</p>
                    <p className="text-sm text-blue-200 italic mt-2">
                      En collaboration avec Maître COUZIGOU-SUHAS Nathalie
                    </p>
                  </div>
                  
                  <div className="border-t border-white/20 pt-4">
                    <div className="flex items-center justify-center space-x-2 text-blue-100 mb-2">
                      <Clock className="h-4 w-4" />
                      <span className="text-sm">Horaires d'ouverture</span>
                    </div>
                    <p className="text-white text-sm">Lun-Ven: 9h-18h | Sam: 9h-12h</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-blue-700" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nos domaines d'expertise
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Un accompagnement complet pour tous vos projets juridiques et patrimoniaux
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link
              to="/services"
              className="bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transition-colors inline-flex items-center space-x-2"
            >
              <span>Découvrir tous nos services</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Témoignages clients
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              La satisfaction de nos clients est notre plus belle récompense
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedTestimonials.map((testimonial, index) => (
              <motion.div
                key={`${testimonial.name}-${index}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: (index % 12) * 0.1 }}
                className="bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                  <p className="text-sm text-blue-600 font-medium">{testimonial.service}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <button
              onClick={() => setShowAllTestimonials(!showAllTestimonials)}
              className="bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transition-colors inline-flex items-center space-x-2"
            >
              <span>
                {showAllTestimonials ? 'Voir moins de témoignages' : 'Voir plus de témoignages'}
              </span>
              {showAllTestimonials ? (
                <ChevronUp className="h-5 w-5" />
              ) : (
                <ChevronDown className="h-5 w-5" />
              )}
            </button>
          </motion.div>
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
              Prêt à concrétiser votre projet ?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Contactez-nous dès aujourd'hui pour bénéficier de notre expertise 
              et de notre accompagnement personnalisé.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="tel:+33644684247"
                className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-flex items-center justify-center space-x-2"
              >
                <Phone className="h-5 w-5" />
                <span>06 44 68 42 47</span>
              </a>
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

export default Home
