import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Heart, MapPin, MessageCircle, Share2, Star, Shield, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

interface PetPageProps {
  params: {
    id: string
  }
}

export default function PetPage({ params }: PetPageProps) {
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
      reviews: 24,
      memberSince: "2021",
      verified: true,
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
    <main className="min-h-screen pb-24">
      {/* Floating Header */}
      <header className="fixed top-0 left-0 right-0 z-50 px-4 py-3">
        <div className="flex items-center justify-between">
          <Link href="/">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-white/90 backdrop-blur-sm shadow-sm hover:bg-white"
            >
              <ArrowLeft className="h-5 w-5" />
              <span className="sr-only">Back</span>
            </Button>
          </Link>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-white/90 backdrop-blur-sm shadow-sm hover:bg-white"
            >
              <Share2 className="h-5 w-5" />
              <span className="sr-only">Share</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-white/90 backdrop-blur-sm shadow-sm hover:bg-white"
            >
              <Heart className="h-5 w-5" />
              <span className="sr-only">Favorite</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Image */}
      <div className="relative aspect-square w-full bg-muted">
        <Image
          src={pet.images[0] || "/placeholder.svg"}
          alt={pet.name}
          fill
          className="object-cover"
          priority
        />
        {/* Image Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
          {pet.images.map((_, index) => (
            <div
              key={index}
              className={cn(
                "w-2 h-2 rounded-full transition-all",
                index === 0
                  ? "bg-white w-6"
                  : "bg-white/50"
              )}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <section className="px-4 py-6 space-y-6">
        {/* Title & Price */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-foreground">{pet.name}</h1>
            <p className="text-muted-foreground">{pet.breed}</p>
            <div className="flex items-center gap-3 mt-2 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {pet.age}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                {pet.location}
              </span>
            </div>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-primary">
              ${pet.price.toLocaleString()}
            </p>
          </div>
        </div>

        {/* Details Grid */}
        <div className="bg-muted/50 rounded-xl p-4">
          <h2 className="text-sm font-semibold text-foreground mb-3">Details</h2>
          <div className="grid grid-cols-2 gap-3">
            {pet.details.map((detail) => (
              <div
                key={detail.label}
                className="flex items-center justify-between bg-background rounded-lg px-3 py-2"
              >
                <span className="text-sm text-muted-foreground">{detail.label}</span>
                <span className="text-sm font-medium">{detail.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Description */}
        <div>
          <h2 className="text-sm font-semibold text-foreground mb-2">About</h2>
          <p className="text-muted-foreground leading-relaxed">{pet.description}</p>
        </div>

        {/* Seller Card */}
        <div className="bg-card border border-border rounded-xl p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={pet.seller.image} alt={pet.seller.name} />
                  <AvatarFallback>
                    {pet.seller.name.split(" ").map(n => n[0]).join("")}
                  </AvatarFallback>
                </Avatar>
                {pet.seller.verified && (
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                    <Shield className="h-3 w-3 text-primary-foreground" />
                  </div>
                )}
              </div>
              <div>
                <p className="font-semibold">{pet.seller.name}</p>
                <p className="text-sm text-muted-foreground">
                  Member since {pet.seller.memberSince}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1 bg-secondary px-2 py-1 rounded-lg">
              <Star className="h-4 w-4 fill-warning text-warning" />
              <span className="text-sm font-medium">{pet.seller.rating}</span>
              <span className="text-xs text-muted-foreground">
                ({pet.seller.reviews})
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Fixed Bottom CTA */}
      <div className="fixed bottom-16 left-0 right-0 z-40 px-4 py-3 bg-background/95 backdrop-blur-lg border-t border-border safe-bottom">
        <div className="flex gap-3 max-w-lg mx-auto">
          <Button variant="outline" size="lg" className="flex-1">
            <MessageCircle className="h-5 w-5 mr-2" />
            Message
          </Button>
          <Button size="lg" className="flex-1">
            Contact Seller
          </Button>
        </div>
      </div>
    </main>
  )
}
