import { Bell, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import PetCard from "@/components/pet-card"
import CategoryFilter from "@/components/category-filter"

export default function Home() {
  const pets = [
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
      id: "2",
      name: "Luna",
      breed: "Siamese Cat",
      age: "1 year",
      price: 500,
      location: "Los Angeles",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      id: "3",
      name: "Charlie",
      breed: "French Bulldog",
      age: "3 years",
      price: 1200,
      location: "Chicago",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      id: "4",
      name: "Bella",
      breed: "Persian Cat",
      age: "2 years",
      price: 600,
      location: "Miami",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      id: "5",
      name: "Cooper",
      breed: "Labrador",
      age: "1 year",
      price: 750,
      location: "Seattle",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      id: "6",
      name: "Milo",
      breed: "British Shorthair",
      age: "8 months",
      price: 650,
      location: "Boston",
      image: "/placeholder.svg?height=400&width=400",
    },
  ]

  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-lg border-b border-border">
        <div className="px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <span className="text-xl">🐾</span>
              </div>
              <div>
                <h1 className="text-lg font-bold text-foreground">PetPals</h1>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <MapPin className="h-3 w-3" />
                  <span>New York</span>
                </div>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="relative rounded-full hover:bg-muted"
            >
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full" />
              <span className="sr-only">Notifications</span>
            </Button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="px-4 pb-3">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for pets, breeds..."
              className="w-full h-11 pl-4 pr-4 bg-muted/50 border border-border rounded-xl text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            />
          </div>
        </div>

        {/* Category Filter */}
        <CategoryFilter />
      </header>

      {/* Pet Grid */}
      <section className="px-4 py-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-lg font-semibold text-foreground">
              Featured Pets
            </h2>
            <p className="text-sm text-muted-foreground">
              {pets.length} pets available
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {pets.map((pet, index) => (
            <div
              key={pet.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <PetCard {...pet} />
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
