"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, ChevronLeft, ChevronRight, Heart, MapPin, MessageCircle, Phone, Share2, Shield, Star } from "lucide-react"
import { cn } from "@/lib/utils"

interface PetPageProps {
  params: { id: string }
}

export default function PetPage({ params }: PetPageProps) {
  const [currentImage, setCurrentImage] = useState(0)
  const [isSaved, setIsSaved] = useState(false)

  const pet = {
    id: params.id,
    name: "Luna",
    breed: "Golden Retriever",
    age: "8 months",
    price: 1200,
    location: "Brooklyn, NY",
    description: "Luna is a beautiful and friendly Golden Retriever puppy looking for her forever home. She is incredibly playful, loves cuddles, and gets along great with children and other pets. Luna is fully vaccinated, microchipped, and comes with all her health records. She has been raised in a loving home environment and is well-socialized.",
    seller: {
      id: "s1",
      name: "Sarah Johnson",
      image: "/placeholder.svg?height=80&width=80",
      rating: 4.9,
      reviews: 47,
      responseTime: "Usually responds within 1 hour",
      memberSince: "2022",
      verified: true,
      listings: 12,
    },
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    details: [
      { label: "Gender", value: "Female" },
      { label: "Color", value: "Golden" },
      { label: "Weight", value: "12 kg" },
      { label: "Vaccinated", value: "Yes" },
      { label: "Microchipped", value: "Yes" },
      { label: "Pedigree", value: "Yes" },
    ],
    tags: ["Friendly", "Trained", "Good with kids", "Playful"],
  }

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % pet.images.length)
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + pet.images.length) % pet.images.length)

  return (
    <main className="min-h-screen bg-background">
      {/* Image Gallery */}
      <div className="relative">
        <div className="relative aspect-square bg-muted">
          <Image
            src={pet.images[currentImage]}
            alt={`${pet.name} - Image ${currentImage + 1}`}
            fill
            className="object-cover"
            priority
          />

          {/* Navigation Arrows */}
          {pet.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 text-white backdrop-blur-sm hover:bg-black/50 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 text-white backdrop-blur-sm hover:bg-black/50 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}

          {/* Image Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
            {pet.images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentImage(i)}
                className={cn(
                  "w-2 h-2 rounded-full transition-all",
                  i === currentImage ? "bg-white w-6" : "bg-white/50 hover:bg-white/70"
                )}
              />
            ))}
          </div>
        </div>

        {/* Floating Header */}
        <div className="absolute top-0 left-0 right-0 p-4 flex items-center justify-between">
          <Link
            href="/explore"
            className="p-2.5 rounded-full bg-white/90 backdrop-blur-sm shadow-lg hover:bg-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div className="flex items-center gap-2">
            <button className="p-2.5 rounded-full bg-white/90 backdrop-blur-sm shadow-lg hover:bg-white transition-colors">
              <Share2 className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsSaved(!isSaved)}
              className="p-2.5 rounded-full bg-white/90 backdrop-blur-sm shadow-lg hover:bg-white transition-colors"
            >
              <Heart className={cn("w-5 h-5", isSaved && "fill-primary text-primary")} />
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container-app py-6 space-y-6">
        {/* Title Section */}
        <div>
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h1 className="text-2xl font-bold">{pet.name}</h1>
                {pet.seller.verified && (
                  <div className="p-1 rounded-full bg-success text-white">
                    <Shield className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
              <p className="text-muted-foreground">{pet.breed}</p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-primary">${pet.price.toLocaleString()}</p>
            </div>
          </div>

          <div className="flex items-center gap-4 mt-3 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {pet.age}
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              {pet.location}
            </span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-4">
            {pet.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 bg-secondary rounded-full text-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Details */}
        <div className="bg-secondary/50 rounded-2xl p-4">
          <h2 className="font-semibold mb-3">Details</h2>
          <div className="grid grid-cols-2 gap-3">
            {pet.details.map((detail) => (
              <div key={detail.label} className="flex justify-between items-center bg-background rounded-xl px-3 py-2.5">
                <span className="text-sm text-muted-foreground">{detail.label}</span>
                <span className="text-sm font-medium">{detail.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Description */}
        <div>
          <h2 className="font-semibold mb-2">About {pet.name}</h2>
          <p className="text-muted-foreground leading-relaxed">{pet.description}</p>
        </div>

        {/* Seller Card */}
        <div className="bg-card border border-border rounded-2xl p-4">
          <div className="flex items-start gap-4">
            <div className="relative">
              <Image
                src={pet.seller.image}
                alt={pet.seller.name}
                width={56}
                height={56}
                className="rounded-full"
              />
              {pet.seller.verified && (
                <div className="absolute -bottom-1 -right-1 p-1 rounded-full bg-success text-white border-2 border-card">
                  <Shield className="w-3 h-3" />
                </div>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <h3 className="font-semibold truncate">{pet.seller.name}</h3>
                <div className="flex items-center gap-1 px-2 py-0.5 bg-secondary rounded-full">
                  <Star className="w-3.5 h-3.5 fill-warning text-warning" />
                  <span className="text-xs font-medium">{pet.seller.rating}</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">{pet.seller.reviews} reviews • {pet.seller.listings} listings</p>
              <p className="text-xs text-muted-foreground mt-1">{pet.seller.responseTime}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/95 backdrop-blur-xl border-t border-border">
        <div className="container-app">
          <div className="flex gap-3">
            <button className="flex-1 flex items-center justify-center gap-2 h-12 bg-secondary rounded-xl font-medium hover:bg-secondary/80 transition-colors">
              <MessageCircle className="w-5 h-5" />
              Message
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 h-12 gradient-primary text-white rounded-xl font-medium shadow-lg shadow-primary/25 hover:opacity-90 transition-opacity">
              <Phone className="w-5 h-5" />
              Call Seller
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
