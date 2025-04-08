import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import PetCard from "@/components/pet-card"
import Link from "next/link"

export default function FavoritesPage() {
  // Mock data for favorite pets
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
    <main className="pb-16">
      <header className="sticky top-0 z-10 bg-white border-b border-gray-200">
        <div className="flex items-center p-4">
          <Link href="/">
            <Button variant="ghost" size="icon" className="mr-2">
              <ArrowLeft className="h-5 w-5" />
              <span className="sr-only">Back</span>
            </Button>
          </Link>
          <h1 className="text-lg font-semibold">Favorites</h1>
        </div>
      </header>

      <section className="p-4">
        {favoritePets.length > 0 ? (
          <div className="grid grid-cols-2 gap-4">
            {favoritePets.map((pet) => (
              <PetCard key={pet.id} {...pet} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h2 className="text-lg font-semibold mb-2">No favorites yet</h2>
            <p className="text-gray-500 mb-4">You haven't added any pets to your favorites yet.</p>
            <Link href="/">
              <Button className="bg-[#FFD465] hover:bg-[#FFD465]/90 text-black">Browse Pets</Button>
            </Link>
          </div>
        )}
      </section>
    </main>
  )
}
