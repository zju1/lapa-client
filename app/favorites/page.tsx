import { ArrowLeft, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import PetCard from "@/components/pet-card"
import Link from "next/link"

export default function FavoritesPage() {
  const favoritePets = [
    {
      id: "1",
      name: "Max",
      breed: "Golden Retriever",
      age: "2 years",
      price: 800,
      location: "New York",
      image: "/placeholder.svg?height=400&width=400",
      isFavorite: true,
    },
    {
      id: "3",
      name: "Charlie",
      breed: "French Bulldog",
      age: "3 years",
      price: 1200,
      location: "Chicago",
      image: "/placeholder.svg?height=400&width=400",
      isFavorite: true,
    },
  ]

  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-lg border-b border-border">
        <div className="flex items-center gap-3 px-4 py-4">
          <Link href="/">
            <Button variant="ghost" size="icon" className="rounded-full">
              <ArrowLeft className="h-5 w-5" />
              <span className="sr-only">Back</span>
            </Button>
          </Link>
          <div>
            <h1 className="text-lg font-semibold">Favorites</h1>
            <p className="text-xs text-muted-foreground">
              {favoritePets.length} saved pets
            </p>
          </div>
        </div>
      </header>

      <section className="px-4 py-6">
        {favoritePets.length > 0 ? (
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {favoritePets.map((pet, index) => (
              <div
                key={pet.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <PetCard {...pet} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
              <Heart className="h-10 w-10 text-muted-foreground" />
            </div>
            <h2 className="text-xl font-semibold mb-2">No favorites yet</h2>
            <p className="text-muted-foreground mb-6 max-w-xs mx-auto">
              Start exploring and save the pets you love to see them here
            </p>
            <Link href="/">
              <Button size="lg">
                Browse Pets
              </Button>
            </Link>
          </div>
        )}
      </section>
    </main>
  )
}
