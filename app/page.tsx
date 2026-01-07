import Image from "next/image"
import Link from "next/link"
import { ArrowRight, MapPin, Search, Sparkles } from "lucide-react"
import PetCard from "@/components/pet-card"

const categories = [
  { id: "dogs", name: "Dogs", icon: "🐕", count: 1240 },
  { id: "cats", name: "Cats", icon: "🐈", count: 856 },
  { id: "birds", name: "Birds", icon: "🦜", count: 324 },
  { id: "fish", name: "Fish", icon: "🐠", count: 512 },
  { id: "rabbits", name: "Rabbits", icon: "🐰", count: 198 },
  { id: "reptiles", name: "Reptiles", icon: "🦎", count: 87 },
]

const featuredPets = [
  {
    id: "1",
    name: "Luna",
    breed: "Golden Retriever",
    age: "8 months",
    price: 1200,
    location: "Brooklyn, NY",
    image: "/placeholder.svg?height=600&width=600",
    gender: "Female",
    verified: true,
    isSaved: true,
  },
  {
    id: "2",
    name: "Mochi",
    breed: "British Shorthair",
    age: "1 year",
    price: 850,
    location: "Manhattan, NY",
    image: "/placeholder.svg?height=600&width=600",
    gender: "Male",
    verified: true,
  },
]

const recentPets = [
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
  },
  {
    id: "4",
    name: "Bella",
    breed: "Persian Cat",
    age: "6 months",
    price: 600,
    location: "Bronx, NY",
    image: "/placeholder.svg?height=400&width=400",
    gender: "Female",
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
  },
  {
    id: "6",
    name: "Coco",
    breed: "Pomeranian",
    age: "4 months",
    price: 1800,
    location: "Jersey City",
    image: "/placeholder.svg?height=400&width=400",
    gender: "Female",
  },
]

export default function Home() {
  return (
    <main className="min-h-screen pb-8">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-xl">
        <div className="container-app py-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-2xl gradient-primary flex items-center justify-center shadow-lg shadow-primary/25">
                  <span className="text-lg">🐾</span>
                </div>
                <div>
                  <h1 className="text-xl font-bold">Pawfect</h1>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <MapPin className="w-3 h-3" />
                    <span>New York, NY</span>
                  </div>
                </div>
              </div>
            </div>
            <Link
              href="/account"
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center overflow-hidden"
            >
              <Image
                src="/placeholder.svg?height=40&width=40"
                alt="Profile"
                width={40}
                height={40}
                className="rounded-full"
              />
            </Link>
          </div>

          {/* Search */}
          <Link href="/explore" className="block">
            <div className="flex items-center gap-3 h-12 px-4 bg-secondary rounded-2xl border border-border/50">
              <Search className="w-5 h-5 text-muted-foreground" />
              <span className="text-muted-foreground">Search pets, breeds...</span>
            </div>
          </Link>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="container-app py-6">
        <div className="relative h-44 rounded-3xl overflow-hidden gradient-primary">
          <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center opacity-20" />
          <div className="relative h-full flex flex-col justify-center p-6 text-white">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-5 h-5" />
              <span className="text-sm font-medium opacity-90">New Feature</span>
            </div>
            <h2 className="text-2xl font-bold mb-1">Find Your Perfect Match</h2>
            <p className="text-sm opacity-80 mb-3">
              AI-powered pet matching based on your lifestyle
            </p>
            <button className="self-start px-4 py-2 bg-white text-primary font-semibold rounded-xl text-sm hover:bg-white/90 transition-colors">
              Try Now
            </button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-4">
        <div className="container-app">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold">Categories</h2>
            <Link href="/explore" className="text-sm text-primary font-medium flex items-center gap-1">
              See All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
        <div className="flex gap-3 overflow-x-auto px-4 pb-2 no-scrollbar">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/explore?category=${cat.id}`}
              className="flex flex-col items-center gap-2 min-w-[80px]"
            >
              <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center text-2xl transition-transform hover:scale-105">
                {cat.icon}
              </div>
              <div className="text-center">
                <p className="text-sm font-medium">{cat.name}</p>
                <p className="text-xs text-muted-foreground">{cat.count.toLocaleString()}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured */}
      <section className="container-app py-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-lg font-bold">Featured Pets</h2>
            <p className="text-sm text-muted-foreground">Handpicked for you</p>
          </div>
          <Link href="/explore?featured=true" className="text-sm text-primary font-medium flex items-center gap-1">
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {featuredPets.map((pet) => (
            <PetCard key={pet.id} {...pet} variant="featured" />
          ))}
        </div>
      </section>

      {/* Recent Listings */}
      <section className="container-app py-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-lg font-bold">Recent Listings</h2>
            <p className="text-sm text-muted-foreground">Fresh additions</p>
          </div>
          <Link href="/explore?sort=recent" className="text-sm text-primary font-medium flex items-center gap-1">
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {recentPets.map((pet, i) => (
            <div key={pet.id} className="animate-fade-up" style={{ animationDelay: `${i * 75}ms` }}>
              <PetCard {...pet} />
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
