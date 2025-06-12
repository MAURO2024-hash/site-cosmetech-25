import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Brain, Computer, TrendingUp, Clock, Users, Award, Play, BookOpen } from "lucide-react"

export default function FormationsPage() {
  const formations = [
    {
      category: "Intelligence Artificielle",
      icon: <Brain className="h-8 w-8 text-purple-600" />,
      courses: [
        {
          title: "Introduction à l'IA",
          description: "Découvrez les fondamentaux de l'intelligence artificielle",
          duration: "20h",
          level: "Débutant",
          price: "50 000 FCFA",
          students: 150,
        },
        {
          title: "Machine Learning Avancé",
          description: "Maîtrisez les algorithmes d'apprentissage automatique",
          duration: "40h",
          level: "Avancé",
          price: "120 000 FCFA",
          students: 85,
        },
        {
          title: "IA Générative",
          description: "ChatGPT, DALL-E et les outils d'IA générative",
          duration: "15h",
          level: "Intermédiaire",
          price: "75 000 FCFA",
          students: 200,
        },
      ],
    },
    {
      category: "Bureautique",
      icon: <Computer className="h-8 w-8 text-blue-600" />,
      courses: [
        {
          title: "Pack Office Complet",
          description: "Word, Excel, PowerPoint et Outlook",
          duration: "30h",
          level: "Débutant",
          price: "40 000 FCFA",
          students: 300,
        },
        {
          title: "Excel Avancé",
          description: "Tableaux croisés, macros et analyse de données",
          duration: "25h",
          level: "Avancé",
          price: "60 000 FCFA",
          students: 180,
        },
      ],
    },
    {
      category: "Marketing Digital",
      icon: <TrendingUp className="h-8 w-8 text-green-600" />,
      courses: [
        {
          title: "Stratégie Marketing Digital",
          description: "Élaborez votre stratégie marketing en ligne",
          duration: "35h",
          level: "Intermédiaire",
          price: "80 000 FCFA",
          students: 120,
        },
        {
          title: "Réseaux Sociaux",
          description: "Maîtrisez Facebook, Instagram, LinkedIn",
          duration: "20h",
          level: "Débutant",
          price: "45 000 FCFA",
          students: 250,
        },
        {
          title: "Google Ads & SEO",
          description: "Publicité en ligne et référencement naturel",
          duration: "30h",
          level: "Intermédiaire",
          price: "90 000 FCFA",
          students: 95,
        },
      ],
    },
  ]

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Débutant":
        return "bg-green-100 text-green-800"
      case "Intermédiaire":
        return "bg-yellow-100 text-yellow-800"
      case "Avancé":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Nos Formations</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Développez vos compétences avec nos formations en ligne certifiantes. Apprenez à votre rythme avec nos
            experts et obtenez les certifications reconnues sur le marché.
          </p>
        </div>

        {/* Avantages */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          {[
            { icon: <Play className="h-6 w-6" />, title: "Accès 24/7", desc: "Apprenez quand vous voulez" },
            { icon: <Award className="h-6 w-6" />, title: "Certifications", desc: "Diplômes reconnus" },
            { icon: <Users className="h-6 w-6" />, title: "Support", desc: "Accompagnement personnalisé" },
            { icon: <BookOpen className="h-6 w-6" />, title: "Ressources", desc: "Supports téléchargeables" },
          ].map((item, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-lg shadow-sm border">
              <div className="text-green-600 mb-3 flex justify-center">{item.icon}</div>
              <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Formations par catégorie */}
        <div className="space-y-16">
          {formations.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <div className="flex items-center space-x-3 mb-8">
                {category.icon}
                <h2 className="text-3xl font-bold text-gray-900">{category.category}</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.courses.map((course, courseIndex) => (
                  <Card key={courseIndex} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <Badge className={getLevelColor(course.level)}>{course.level}</Badge>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-green-600">{course.price}</div>
                        </div>
                      </div>
                      <CardTitle className="text-xl">{course.title}</CardTitle>
                      <CardDescription className="text-base">{course.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between items-center mb-4 text-sm text-gray-600">
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{course.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Users className="h-4 w-4" />
                          <span>{course.students} étudiants</span>
                        </div>
                      </div>
                      <Button className="w-full" asChild>
                        <Link href="/contact">S'inscrire maintenant</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Formation sur mesure</h2>
          <p className="text-xl mb-6 opacity-90">
            Besoin d'une formation spécifique pour votre équipe ? Nous créons des programmes personnalisés.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">Demander un programme personnalisé</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
