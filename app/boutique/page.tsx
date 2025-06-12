import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Heart, Zap, Shield, Leaf, Star, ShoppingCart, Truck, Award } from "lucide-react"

export default function BoutiquePage() {
  const products = [
    {
      id: 1,
      name: "Multivitamines Premium",
      description: "Complexe complet de vitamines et minéraux essentiels",
      price: "25 000 FCFA",
      originalPrice: "30 000 FCFA",
      rating: 4.8,
      reviews: 124,
      category: "Vitamines",
      benefits: ["Énergie", "Immunité", "Bien-être général"],
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 2,
      name: "Oméga-3 Ultra",
      description: "Acides gras essentiels pour la santé cardiovasculaire",
      price: "35 000 FCFA",
      originalPrice: null,
      rating: 4.9,
      reviews: 89,
      category: "Santé cardiaque",
      benefits: ["Cœur", "Cerveau", "Anti-inflammatoire"],
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 3,
      name: "Probiotiques Avancés",
      description: "Formule probiotique pour la santé digestive",
      price: "40 000 FCFA",
      originalPrice: "45 000 FCFA",
      rating: 4.7,
      reviews: 156,
      category: "Digestion",
      benefits: ["Digestion", "Immunité", "Flore intestinale"],
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 4,
      name: "Collagène Marine",
      description: "Collagène hydrolysé pour la peau et les articulations",
      price: "50 000 FCFA",
      originalPrice: null,
      rating: 4.6,
      reviews: 78,
      category: "Beauté",
      benefits: ["Peau", "Articulations", "Anti-âge"],
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 5,
      name: "Magnésium Bisglycinate",
      description: "Magnésium hautement biodisponible pour le stress",
      price: "20 000 FCFA",
      originalPrice: "25 000 FCFA",
      rating: 4.8,
      reviews: 203,
      category: "Stress & Sommeil",
      benefits: ["Relaxation", "Sommeil", "Muscles"],
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 6,
      name: "Spiruline Bio",
      description: "Superaliment riche en protéines et nutriments",
      price: "30 000 FCFA",
      originalPrice: null,
      rating: 4.5,
      reviews: 92,
      category: "Superaliments",
      benefits: ["Énergie", "Protéines", "Détox"],
      image: "/placeholder.svg?height=200&width=200",
    },
  ]

  const categories = [
    { name: "Vitamines", icon: <Zap className="h-5 w-5" />, count: 12 },
    { name: "Santé cardiaque", icon: <Heart className="h-5 w-5" />, count: 8 },
    { name: "Digestion", icon: <Shield className="h-5 w-5" />, count: 6 },
    { name: "Beauté", icon: <Star className="h-5 w-5" />, count: 10 },
    { name: "Stress & Sommeil", icon: <Leaf className="h-5 w-5" />, count: 7 },
    { name: "Superaliments", icon: <Award className="h-5 w-5" />, count: 5 },
  ]

  const advantages = [
    {
      icon: <Award className="h-8 w-8 text-yellow-600" />,
      title: "Qualité Premium",
      description: "Produits certifiés et testés en laboratoire",
    },
    {
      icon: <Truck className="h-8 w-8 text-blue-600" />,
      title: "Livraison rapide",
      description: "Livraison en 24-48h à Bangui",
    },
    {
      icon: <Shield className="h-8 w-8 text-green-600" />,
      title: "Garantie satisfaction",
      description: "Remboursement si non satisfait",
    },
    {
      icon: <Heart className="h-8 w-8 text-red-600" />,
      title: "Conseil personnalisé",
      description: "Accompagnement par nos experts",
    },
  ]

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Boutique Compléments Alimentaires</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez notre sélection de compléments alimentaires de qualité premium pour votre bien-être et votre
            santé. Produits certifiés et livrés en République Centrafricaine.
          </p>
        </div>

        {/* Avantages */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          {advantages.map((advantage, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-lg shadow-sm border">
              <div className="mb-4 flex justify-center">{advantage.icon}</div>
              <h3 className="font-semibold text-gray-900 mb-2">{advantage.title}</h3>
              <p className="text-sm text-gray-600">{advantage.description}</p>
            </div>
          ))}
        </div>

        {/* Catégories */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Catégories</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-4 text-center">
                  <div className="text-green-600 mb-2 flex justify-center">{category.icon}</div>
                  <h3 className="font-medium text-sm">{category.name}</h3>
                  <p className="text-xs text-gray-500">{category.count} produits</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Produits */}
        <div className="mb-20">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Nos Produits</h2>
            <Button variant="outline">Voir tous les produits</Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="aspect-square bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex justify-between items-start">
                    <Badge variant="secondary">{product.category}</Badge>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{product.rating}</span>
                      <span className="text-sm text-gray-500">({product.reviews})</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl">{product.name}</CardTitle>
                  <CardDescription className="text-base">{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {product.benefits.map((benefit, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {benefit}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <span className="text-2xl font-bold text-green-600">{product.price}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through ml-2">{product.originalPrice}</span>
                      )}
                    </div>
                  </div>
                  <Button className="w-full">
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Ajouter au panier
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Informations importantes */}
        <div className="bg-blue-50 rounded-lg p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Informations importantes</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
            <div>
              <h4 className="font-semibold mb-2">Conseils d'utilisation</h4>
              <p className="text-sm">
                Les compléments alimentaires ne remplacent pas une alimentation variée et équilibrée. Respectez les
                doses recommandées et consultez un professionnel de santé si nécessaire.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Livraison</h4>
              <p className="text-sm">
                Livraison gratuite à Bangui pour les commandes supérieures à 50 000 FCFA. Expédition possible dans toute
                la République Centrafricaine.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-lg p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Besoin de conseils personnalisés ?</h2>
          <p className="text-xl mb-6 opacity-90">
            Nos experts en nutrition sont là pour vous accompagner dans le choix de vos compléments
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">Consulter un expert</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
