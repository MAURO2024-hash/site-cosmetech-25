import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Leaf, Droplets, Recycle, Shield, Home, Building, CheckCircle, Phone } from "lucide-react"

export default function CosmecleanPage() {
  const services = [
    {
      icon: <Home className="h-8 w-8 text-green-600" />,
      title: "Nettoyage résidentiel",
      description: "Maisons, appartements, villas",
      features: ["Produits 100% écologiques", "Équipe formée", "Matériel professionnel"],
    },
    {
      icon: <Building className="h-8 w-8 text-blue-600" />,
      title: "Nettoyage commercial",
      description: "Bureaux, magasins, restaurants",
      features: ["Service régulier", "Horaires flexibles", "Devis personnalisé"],
    },
    {
      icon: <Shield className="h-8 w-8 text-purple-600" />,
      title: "Désinfection écologique",
      description: "Espaces sensibles et médicaux",
      features: ["Produits certifiés", "Protocoles stricts", "Efficacité garantie"],
    },
  ]

  const advantages = [
    {
      icon: <Leaf className="h-6 w-6 text-green-600" />,
      title: "100% Écologique",
      description: "Produits biodégradables et respectueux de l'environnement",
    },
    {
      icon: <Droplets className="h-6 w-6 text-blue-600" />,
      title: "Économie d'eau",
      description: "Techniques innovantes pour réduire la consommation d'eau",
    },
    {
      icon: <Recycle className="h-6 w-6 text-green-500" />,
      title: "Zéro déchet",
      description: "Approche circulaire avec recyclage et réutilisation",
    },
    {
      icon: <Shield className="h-6 w-6 text-purple-600" />,
      title: "Sécurité garantie",
      description: "Produits non toxiques, sûrs pour la famille et les animaux",
    },
  ]

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="bg-green-100 p-4 rounded-full">
              <Leaf className="h-12 w-12 text-green-600" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">COSMECLEAN</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Le premier service de nettoyage 100% écologique en République Centrafricaine. Nous prenons soin de vos
            espaces tout en préservant notre environnement.
          </p>
        </div>

        {/* Avantages écologiques */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Pourquoi choisir COSMECLEAN ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((advantage, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4">{advantage.icon}</div>
                  <CardTitle className="text-lg">{advantage.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{advantage.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Services */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Nos Services</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4">{service.icon}</div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Processus */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Notre Processus</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Évaluation", desc: "Visite gratuite et devis personnalisé" },
              { step: "2", title: "Planification", desc: "Organisation selon vos disponibilités" },
              { step: "3", title: "Nettoyage", desc: "Intervention avec produits écologiques" },
              { step: "4", title: "Contrôle", desc: "Vérification qualité et satisfaction" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Engagement environnemental */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-8 mb-20">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Notre Engagement Environnemental</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-4xl font-bold text-green-600 mb-2">0%</div>
                <p className="text-gray-700">Produits chimiques toxiques</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">-30%</div>
                <p className="text-gray-700">Consommation d'eau</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-500 mb-2">100%</div>
                <p className="text-gray-700">Emballages recyclables</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-lg p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Prêt pour un nettoyage écologique ?</h2>
          <p className="text-xl mb-6 opacity-90">
            Contactez-nous pour une évaluation gratuite et découvrez la différence COSMECLEAN
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                <Phone className="mr-2 h-4 w-4" />
                Demander un devis
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-green-600">
              Appeler maintenant
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
