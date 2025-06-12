import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { GraduationCap, Globe, Users, Leaf, ShoppingCart, Headphones, ArrowRight, CheckCircle } from "lucide-react"

export default function Home() {
  const services = [
    {
      icon: <GraduationCap className="h-8 w-8 text-green-600" />,
      title: "Formations en ligne",
      description: "IA, bureautique, marketing digital",
      href: "/formations",
    },
    {
      icon: <Globe className="h-8 w-8 text-blue-600" />,
      title: "Création web & IT",
      description: "Sites internet, design, support technique",
      href: "/services",
    },
    {
      icon: <Users className="h-8 w-8 text-purple-600" />,
      title: "Coaching & Consulting",
      description: "Webinaires, événements, accompagnement",
      href: "/services",
    },
    {
      icon: <Leaf className="h-8 w-8 text-green-500" />,
      title: "COSMECLEAN",
      description: "Service écologique de nettoyage",
      href: "/cosmeclean",
    },
    {
      icon: <ShoppingCart className="h-8 w-8 text-orange-600" />,
      title: "Compléments alimentaires",
      description: "Produits de qualité pour votre bien-être",
      href: "/boutique",
    },
    {
      icon: <Headphones className="h-8 w-8 text-indigo-600" />,
      title: "Support 24/7",
      description: "Assistance technique continue",
      href: "/contact",
    },
  ]

  const stats = [
    { number: "500+", label: "Clients satisfaits" },
    { number: "50+", label: "Formations dispensées" },
    { number: "100+", label: "Sites créés" },
    { number: "5+", label: "Années d'expérience" },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Votre partenaire technologique en
              <span className="text-green-600"> République Centrafricaine</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              COSMETECH INNOVATION vous accompagne dans votre transformation digitale avec des formations, du consulting
              IT, des solutions web et des services écologiques innovants.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/services">
                  Découvrir nos services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Nous contacter</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nos Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Une gamme complète de services pour répondre à tous vos besoins technologiques et de formation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" asChild className="p-0">
                    <Link href={service.href}>
                      En savoir plus
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Pourquoi choisir COSMETECH INNOVATION ?
              </h2>
              <div className="space-y-4">
                {[
                  "Expertise locale en République Centrafricaine",
                  "Formations certifiantes et reconnues",
                  "Solutions technologiques sur mesure",
                  "Approche écologique avec COSMECLEAN",
                  "Support technique 24/7",
                  "Prix compétitifs et transparents",
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-blue-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Prêt à commencer ?</h3>
              <p className="text-gray-600 mb-6">
                Contactez-nous dès aujourd'hui pour discuter de vos projets et découvrir comment nous pouvons vous
                aider.
              </p>
              <Button size="lg" asChild>
                <Link href="/contact">Demander un devis gratuit</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
