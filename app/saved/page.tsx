import Link from "next/link"
import { ArrowLeft, Heart } from "lucide-react"
import PetCard from "@/components/pet-card"

const savedPets = [
  {
    id: "1",
    name: "Luna",
    breed: "Golden Retriever",
    age: "8 months",
    price: 1200,
    location: "Brooklyn, NY",
    image: "/placeholder.svg?height=400&width=400",
    gender: "Female",
    verified: true,
    isSaved: true,
  },
  {
    id: "3",
    name: "Max",
    breed: "French Bulldog",
    age: "2 years",
    price: 2500,
    location: "Queens, NY",
    image: "/placeholder.svg?height=400&width=400",
    gender: "Male",
    verified: true,
    isSaved: true,
  },
  {
    id: "5",
    name: "Charlie",
    breed: "Labrador",
    age: "1.5 years",
    price: 900,
    location: "Staten Island",
    image: "/placeholder.svg?height=400&width=400",
    gender: "Male",
    verified: true,
    isSaved: true,
  },
]

export default function SavedPage() {
  return (
    <main className="min-h-screen pb-24">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-xl border-b border-border/50">
        <div className="container-app py-4">
          <div className="flex items-center gap-3">
            <Link href="/" className="p-2 -ml-2 rounded-xl hover:bg-secondary transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="text-lg font-bold">Saved Pets</h1>
              <p className="text-sm text-muted-foreground">{savedPets.length} pets saved</p>
            </div>
          </div>
        </div>
      </header>

      <div className="container-app py-6">
        {savedPets.length > 0 ? (
          <div className="grid grid-cols-2 gap-3">
            {savedPets.map((pet, i) => (
              <div key={pet.id} className="animate-fade-up" style={{ animationDelay: `${i * 75}ms` }}>
                <PetCard {...pet} />
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center mb-6">
              <Heart className="w-10 h-10 text-muted-foreground" />
            </div>
            <h2 className="text-xl font-bold mb-2">No saved pets yet</h2>
            <p className="text-muted-foreground mb-6 max-w-xs">
              Save pets you're interested in to easily find them later
            </p>
            <Link
              href="/explore"
              className="px-6 py-3 gradient-primary text-white rounded-xl font-medium shadow-lg shadow-primary/25"
            >
              Explore Pets
            </Link>
          </div>
        )}
      </div>
    </main>
  )
}
