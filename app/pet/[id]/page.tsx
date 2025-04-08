import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Heart, MessageCircle, Share } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"

interface PetPageProps {
  params: {
    id: string
  }
}

export default function PetPage({ params }: PetPageProps) {
  // Mock data for a pet
  const pet = {
    id: params.id,
    name: "Max",
    breed: "Golden Retriever",
    age: "2 years",
    price: 800,
    location: "New York",
    description:
      "Max is a friendly and energetic Golden Retriever. He loves to play fetch and is great with children. He's fully vaccinated and house trained. Max is looking for a loving home with a yard where he can run and play.",
    seller: {
      name: "John Smith",
      image: "/placeholder.svg?height=40&width=40",
      rating: 4.8,
      memberSince: "2021",
    },
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    details: [
      { label: "Gender", value: "Male" },
      { label: "Color", value: "Golden" },
      { label: "Weight", value: "30 kg" },
      { label: "Vaccinated", value: "Yes" },
      { label: "Microchipped", value: "Yes" },
      { label: "Neutered", value: "Yes" },
    ],
  }

  return (
    <main className="pb-20">
      <header className="fixed top-0 left-0 right-0 z-10 bg-white/80 backdrop-blur-sm">
        <div className="flex items-center justify-between p-4">
          <Link href="/">
            <Button variant="ghost" size="icon" className="rounded-full bg-white/80">
              <ArrowLeft className="h-5 w-5" />
              <span className="sr-only">Back</span>
            </Button>
          </Link>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="rounded-full bg-white/80">
              <Share className="h-5 w-5" />
              <span className="sr-only">Share</span>
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full bg-white/80">
              <Heart className="h-5 w-5" />
              <span className="sr-only">Favorite</span>
            </Button>
          </div>
        </div>
      </header>

      <div className="relative pt-16">
        <div className="relative h-72 w-full">
          <Image src={pet.images[0] || "/placeholder.svg"} alt={pet.name} fill className="object-cover" />
        </div>
        <div className="absolute bottom-4 right-4 flex space-x-2">
          {pet.images.map((_, index) => (
            <div key={index} className={`w-2 h-2 rounded-full ${index === 0 ? "bg-[#FFD465]" : "bg-white/60"}`} />
          ))}
        </div>
      </div>

      <section className="p-4 space-y-6">
        <div>
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-2xl font-bold">{pet.name}</h1>
              <p className="text-gray-500">{pet.breed}</p>
            </div>
            <p className="text-2xl font-bold">${pet.price}</p>
          </div>
          <div className="flex items-center mt-2 text-sm text-gray-500">
            <span>{pet.age}</span>
            <span className="mx-2">•</span>
            <span>{pet.location}</span>
          </div>
        </div>

        <Separator />

        <div>
          <h2 className="text-lg font-semibold mb-2">Description</h2>
          <p className="text-gray-700">{pet.description}</p>
        </div>

        <Separator />

        <div>
          <h2 className="text-lg font-semibold mb-3">Details</h2>
          <div className="grid grid-cols-2 gap-y-2">
            {pet.details.map((detail) => (
              <div key={detail.label} className="flex items-center">
                <span className="text-gray-500 mr-2">{detail.label}:</span>
                <span className="font-medium">{detail.value}</span>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        <div>
          <h2 className="text-lg font-semibold mb-3">Seller</h2>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Avatar className="h-12 w-12 mr-3">
                <AvatarImage src={pet.seller.image} alt={pet.seller.name} />
                <AvatarFallback>JS</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">{pet.seller.name}</p>
                <p className="text-sm text-gray-500">Member since {pet.seller.memberSince}</p>
              </div>
            </div>
            <div className="flex items-center">
              <span className="text-sm font-medium mr-1">{pet.seller.rating}</span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(pet.seller.rating)
                        ? "text-[#FFD465] fill-[#FFD465]"
                        : "text-gray-300 fill-gray-300"
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="fixed bottom-16 left-0 right-0 p-4 bg-white border-t border-gray-200">
        <div className="flex space-x-3">
          <Button variant="outline" className="flex-1">
            <MessageCircle className="h-5 w-5 mr-2" />
            Message
          </Button>
          <Button className="flex-1 bg-[#FFD465] hover:bg-[#FFD465]/90 text-black">Contact Seller</Button>
        </div>
      </div>
    </main>
  )
}
