import Image from "next/image"
import { Bell, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import PetCard from "@/components/pet-card"
import CategoryFilter from "@/components/category-filter"

export default function Home() {
  // Mock data for pets
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
  ]

  return (
    <main className="pb-16">
      <header className="sticky top-0 z-10 bg-white border-b border-gray-200">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center">
            <Image
              src="/placeholder.svg?height=40&width=40"
              alt="PetPals Logo"
              width={40}
              height={40}
              className="mr-2"
            />
            <h1 className="text-xl font-bold">PetPals</h1>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Bell className="h-5 w-5" />
              <span className="sr-only">Notifications</span>
            </Button>
          </div>
        </div>
        <div className="px-4 pb-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search for pets..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-[#FFD465]"
            />
          </div>
        </div>
        <CategoryFilter />
      </header>

      <section className="p-4 grid grid-cols-2 gap-4">
        {pets.map((pet) => (
          <PetCard key={pet.id} {...pet} />
        ))}
      </section>
    </main>
  )
}
