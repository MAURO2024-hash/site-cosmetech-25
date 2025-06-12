import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Target, Eye, Heart } from "lucide-react"

export default function AboutPage() {
  const values = [
    {
      icon: <Target className="h-8 w-8 text-blue-600" />,
      title: "Excellence",
      description: "Nous nous engageons à fournir des services de la plus haute qualité",
    },
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
      title: "Collaboration",
      description: "Nous travaillons en étroite collaboration avec nos clients",
    },
    {
      icon: <Heart className="h-8 w-8 text-red-600" />,
      title: "Passion",
      description: "Nous sommes passionnés par la technologie et l'innovation",
    },
    {
      icon: <Eye className="h-8 w-8 text-purple-600" />,
      title: "Vision",
      description: "Nous anticipons les besoins futurs de nos clients",
    },
  ]

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">À Propos de COSMETECH INNOVATION</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez notre histoire, notre mission et les valeurs qui nous guident dans notre engagement envers
            l'excellence technologique en République Centrafricaine.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <Card className="bg-gradient-to-br from-green-50 to-green-100">
            <CardHeader>
              <CardTitle className="text-2xl text-green-800">Notre Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                Démocratiser l'accès aux technologies et aux formations de qualité en République Centrafricaine. Nous
                nous engageons à accompagner les entreprises et les particuliers dans leur transformation digitale tout
                en respectant l'environnement grâce à nos solutions écologiques.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-50 to-blue-100">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-800">Notre Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                Devenir le leader technologique de référence en République Centrafricaine, reconnu pour l'innovation, la
                qualité de nos services et notre engagement envers le développement durable et l'éducation numérique.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Notre Histoire */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Notre Histoire</h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-gray-700 leading-relaxed mb-6">
              Fondée en République Centrafricaine, COSMETECH INNOVATION est née de la vision de démocratiser l'accès aux
              technologies et aux formations de qualité dans notre région. Nos fondateurs, passionnés de technologie et
              d'éducation, ont identifié un besoin crucial d'accompagnement dans la transformation digitale des
              entreprises locales.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Depuis nos débuts, nous avons élargi notre gamme de services pour inclure non seulement les formations en
              ligne et le développement web, mais aussi des solutions innovantes comme COSMECLEAN, notre service de
              nettoyage écologique, et une boutique de compléments alimentaires de qualité.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Aujourd'hui, nous sommes fiers d'avoir accompagné plus de 500 clients dans leurs projets et d'avoir formé
              des centaines de professionnels aux technologies de demain.
            </p>
          </div>
        </div>

        {/* Nos Valeurs */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Nos Valeurs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4">{value.icon}</div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Équipe */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Notre Équipe</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Une équipe passionnée et expérimentée, dédiée à votre succès et à l'innovation technologique en République
            Centrafricaine.
          </p>
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Rejoignez notre aventure</h3>
            <p className="text-lg opacity-90">
              Nous recrutons des talents passionnés pour renforcer notre équipe. Contactez-nous si vous souhaitez
              contribuer à l'innovation technologique en République Centrafricaine.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
