import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Globe, Palette, Headphones, Users, Calendar, Video, Code, Smartphone, Search, Shield } from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      category: "Développement Web & Design",
      icon: <Globe className="h-8 w-8 text-blue-600" />,
      services: [
        {
          icon: <Code className="h-6 w-6" />,
          title: "Création de sites internet",
          description: "Sites vitrine, e-commerce, applications web sur mesure",
        },
        {
          icon: <Palette className="h-6 w-6" />,
          title: "Design graphique",
          description: "Logos, identité visuelle, supports de communication",
        },
        {
          icon: <Smartphone className="h-6 w-6" />,
          title: "Applications mobiles",
          description: "Développement d'applications iOS et Android",
        },
        {
          icon: <Search className="h-6 w-6" />,
          title: "Optimisation SEO",
          description: "Amélioration du référencement naturel",
        },
      ],
    },
    {
      category: "Support & Maintenance IT",
      icon: <Headphones className="h-8 w-8 text-green-600" />,
      services: [
        {
          icon: <Shield className="h-6 w-6" />,
          title: "Support technique 24/7",
          description: "Assistance technique continue pour vos systèmes",
        },
        {
          icon: <Headphones className="h-6 w-6" />,
          title: "Maintenance préventive",
          description: "Surveillance et maintenance de vos infrastructures",
        },
      ],
    },
    {
      category: "Coaching & Consulting",
      icon: <Users className="h-8 w-8 text-purple-600" />,
      services: [
        {
          icon: <Users className="h-6 w-6" />,
          title: "Coaching professionnel",
          description: "Accompagnement personnalisé pour vos projets",
        },
        {
          icon: <Calendar className="h-6 w-6" />,
          title: "Organisation d'événements",
          description: "Webinaires, conférences et événements en ligne",
        },
        {
          icon: <Video className="h-6 w-6" />,
          title: "Consulting IT",
          description: "Conseil en stratégie digitale et transformation",
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Nos Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            COSMETECH INNOVATION vous propose une gamme complète de services technologiques pour accompagner votre
            croissance et votre transformation digitale.
          </p>
        </div>

        {/* Services */}
        <div className="space-y-16">
          {services.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <div className="flex items-center space-x-3 mb-8">
                {category.icon}
                <h2 className="text-3xl font-bold text-gray-900">{category.category}</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.services.map((service, serviceIndex) => (
                  <Card key={serviceIndex} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <div className="text-blue-600">{service.icon}</div>
                        <CardTitle className="text-xl">{service.title}</CardTitle>
                      </div>
                      <CardDescription className="text-base">{service.description}</CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Prêt à démarrer votre projet ?</h2>
          <p className="text-xl mb-6 opacity-90">
            Contactez-nous pour discuter de vos besoins et obtenir un devis personnalisé
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">Demander un devis</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
