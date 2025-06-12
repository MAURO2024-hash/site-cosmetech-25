import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Calendar, User, ArrowRight, TrendingUp } from "lucide-react"

export default function BlogPage() {
  const articles = [
    {
      id: 1,
      title: "L'Intelligence Artificielle transforme les entreprises en République Centrafricaine",
      excerpt: "Découvrez comment l'IA peut révolutionner votre business et améliorer votre productivité...",
      category: "Intelligence Artificielle",
      author: "COSMETECH Team",
      date: "15 Décembre 2024",
      readTime: "5 min",
      image: "/placeholder.svg?height=200&width=400",
      featured: true,
    },
    {
      id: 2,
      title: "10 conseils pour optimiser votre site web en 2024",
      excerpt: "Les meilleures pratiques pour améliorer les performances et le référencement de votre site...",
      category: "Développement Web",
      author: "COSMETECH Team",
      date: "12 Décembre 2024",
      readTime: "7 min",
      image: "/placeholder.svg?height=200&width=400",
      featured: false,
    },
    {
      id: 3,
      title: "Marketing Digital : Les tendances 2024 en Afrique",
      excerpt: "Explorez les nouvelles stratégies marketing qui fonctionnent sur le continent africain...",
      category: "Marketing Digital",
      author: "COSMETECH Team",
      date: "10 Décembre 2024",
      readTime: "6 min",
      image: "/placeholder.svg?height=200&width=400",
      featured: false,
    },
    {
      id: 4,
      title: "COSMECLEAN : L'avenir du nettoyage écologique",
      excerpt: "Comment notre service révolutionne l'industrie du nettoyage avec des solutions durables...",
      category: "Écologie",
      author: "COSMETECH Team",
      date: "8 Décembre 2024",
      readTime: "4 min",
      image: "/placeholder.svg?height=200&width=400",
      featured: false,
    },
    {
      id: 5,
      title: "Les compléments alimentaires : Guide complet pour débutants",
      excerpt: "Tout ce que vous devez savoir sur les compléments alimentaires et leur utilisation...",
      category: "Santé & Bien-être",
      author: "COSMETECH Team",
      date: "5 Décembre 2024",
      readTime: "8 min",
      image: "/placeholder.svg?height=200&width=400",
      featured: false,
    },
    {
      id: 6,
      title: "Formation en ligne vs Formation présentielle : Que choisir ?",
      excerpt: "Comparaison détaillée des avantages et inconvénients de chaque méthode d'apprentissage...",
      category: "Formation",
      author: "COSMETECH Team",
      date: "3 Décembre 2024",
      readTime: "5 min",
      image: "/placeholder.svg?height=200&width=400",
      featured: false,
    },
  ]

  const categories = [
    "Tous",
    "Intelligence Artificielle",
    "Développement Web",
    "Marketing Digital",
    "Écologie",
    "Santé & Bien-être",
    "Formation",
  ]

  const featuredArticle = articles.find((article) => article.featured)
  const regularArticles = articles.filter((article) => !article.featured)

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Blog COSMETECH</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez nos derniers articles sur la technologie, l'innovation, l'écologie et le développement numérique
            en République Centrafricaine.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category, index) => (
            <Button key={index} variant={index === 0 ? "default" : "outline"} size="sm" className="mb-2">
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Article */}
        {featuredArticle && (
          <div className="mb-16">
            <div className="flex items-center space-x-2 mb-4">
              <TrendingUp className="h-5 w-5 text-green-600" />
              <span className="text-green-600 font-semibold">Article à la une</span>
            </div>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="aspect-video lg:aspect-square bg-gray-100">
                  <img
                    src={featuredArticle.image || "/placeholder.svg"}
                    alt={featuredArticle.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <Badge className="w-fit mb-4">{featuredArticle.category}</Badge>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{featuredArticle.title}</h2>
                  <p className="text-gray-600 mb-6 text-lg">{featuredArticle.excerpt}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-6">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{featuredArticle.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{featuredArticle.date}</span>
                    </div>
                    <span>{featuredArticle.readTime} de lecture</span>
                  </div>
                  <Button asChild>
                    <Link href={`/blog/${featuredArticle.id}`}>
                      Lire l'article
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Regular Articles */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Derniers articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularArticles.map((article) => (
              <Card key={article.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="p-0">
                  <div className="aspect-video bg-gray-100 rounded-t-lg overflow-hidden">
                    <img
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <Badge className="mb-3">{article.category}</Badge>
                  <CardTitle className="text-xl mb-3 line-clamp-2">{article.title}</CardTitle>
                  <CardDescription className="text-base mb-4 line-clamp-3">{article.excerpt}</CardDescription>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{article.date}</span>
                    </div>
                    <span>{article.readTime} de lecture</span>
                  </div>
                  <Button variant="ghost" asChild className="p-0">
                    <Link href={`/blog/${article.id}`}>
                      Lire la suite
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-lg p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Restez informé</h2>
          <p className="text-xl mb-6 opacity-90">
            Abonnez-vous à notre newsletter pour recevoir nos derniers articles et actualités
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-1 px-4 py-2 rounded-lg text-gray-900"
            />
            <Button variant="secondary">S'abonner</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
