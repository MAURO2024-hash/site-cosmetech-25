import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Image src="/logo.png" alt="COSMETECH INNOVATION" width={40} height={40} className="h-10 w-10" />
              <span className="font-bold text-xl text-green-400">COSMETECH INNOVATION</span>
            </div>
            <p className="text-gray-300 mb-4">
              Votre partenaire technologique en République Centrafricaine. Nous proposons des formations, du consulting
              IT, des solutions web et des services écologiques pour accompagner votre transformation digitale.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-gray-400 hover:text-green-400 cursor-pointer" />
              <Twitter className="h-6 w-6 text-gray-400 hover:text-green-400 cursor-pointer" />
              <Linkedin className="h-6 w-6 text-gray-400 hover:text-green-400 cursor-pointer" />
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-green-400">Nos Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/formations" className="hover:text-green-400">
                  Formations en ligne
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-green-400">
                  Création de sites web
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-green-400">
                  Consulting IT
                </Link>
              </li>
              <li>
                <Link href="/cosmeclean" className="hover:text-green-400">
                  COSMECLEAN
                </Link>
              </li>
              <li>
                <Link href="/boutique" className="hover:text-green-400">
                  Compléments alimentaires
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-green-400">Contact</h3>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Bangui, République Centrafricaine</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+236 XX XX XX XX</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>contact@cosmetech-innovation.cf</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 COSMETECH INNOVATION. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
