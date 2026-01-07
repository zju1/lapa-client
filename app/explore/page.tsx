"use client"

import { useState } from "react"
import { ArrowLeft, ChevronDown, Grid3X3, List, Search, SlidersHorizontal, X } from "lucide-react"
import Link from "next/link"
import PetCard from "@/components/pet-card"
import { cn } from "@/lib/utils"

const categories = [
  { id: "all", name: "All Pets", icon: "🐾" },
  { id: "dogs", name: "Dogs", icon: "🐕" },
  { id: "cats", name: "Cats", icon: "🐈" },
  { id: "birds", name: "Birds", icon: "🦜" },
  { id: "fish", name: "Fish", icon: "🐠" },
  { id: "rabbits", name: "Rabbits", icon: "🐰" },
  { id: "reptiles", name: "Reptiles", icon: "🦎" },
]

const sortOptions = [
  { id: "recent", name: "Most Recent" },
  { id: "price_low", name: "Price: Low to High" },
  { id: "price_high", name: "Price: High to Low" },
  { id: "popular", name: "Most Popular" },
]

const pets = [
  { id: "1", name: "Luna", breed: "Golden Retriever", age: "8 months", price: 1200, location: "Brooklyn, NY", image: "/placeholder.svg?height=400&width=400", gender: "Female", verified: true },
  { id: "2", name: "Mochi", breed: "British Shorthair", age: "1 year", price: 850, location: "Manhattan, NY", image: "/placeholder.svg?height=400&width=400", gender: "Male", verified: true },
  { id: "3", name: "Max", breed: "French Bulldog", age: "2 years", price: 2500, location: "Queens, NY", image: "/placeholder.svg?height=400&width=400", gender: "Male", verified: true },
  { id: "4", name: "Bella", breed: "Persian Cat", age: "6 months", price: 600, location: "Bronx, NY", image: "/placeholder.svg?height=400&width=400", gender: "Female" },
  { id: "5", name: "Charlie", breed: "Labrador", age: "1.5 years", price: 900, location: "Staten Island", image: "/placeholder.svg?height=400&width=400", gender: "Male", verified: true },
  { id: "6", name: "Coco", breed: "Pomeranian", age: "4 months", price: 1800, location: "Jersey City", image: "/placeholder.svg?height=400&width=400", gender: "Female" },
  { id: "7", name: "Rocky", breed: "German Shepherd", age: "3 years", price: 1100, location: "Hoboken", image: "/placeholder.svg?height=400&width=400", gender: "Male", verified: true },
  { id: "8", name: "Daisy", breed: "Ragdoll Cat", age: "2 years", price: 750, location: "Newark", image: "/placeholder.svg?height=400&width=400", gender: "Female" },
]

export default function ExplorePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedSort, setSelectedSort] = useState("recent")
  const [showFilters, setShowFilters] = useState(false)
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000])
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  return (
    <main className="min-h-screen pb-24">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-xl border-b border-border/50">
        <div className="container-app py-3">
          <div className="flex items-center gap-3">
            <Link href="/" className="p-2 -ml-2 rounded-xl hover:bg-secondary transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </Link>

            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search pets, breeds..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-11 pl-10 pr-4 bg-secondary rounded-xl text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>

            <button
              onClick={() => setShowFilters(!showFilters)}
              className={cn(
                "p-2.5 rounded-xl transition-colors relative",
                showFilters ? "bg-primary text-white" : "bg-secondary hover:bg-secondary/80"
              )}
            >
              <SlidersHorizontal className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Categories */}
        <div className="flex gap-2 overflow-x-auto px-4 py-3 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all",
                selectedCategory === cat.id
                  ? "bg-primary text-white shadow-lg shadow-primary/25"
                  : "bg-secondary hover:bg-secondary/80"
              )}
            >
              <span>{cat.icon}</span>
              {cat.name}
            </button>
          ))}
        </div>

        {/* Filters Panel */}
        {showFilters && (
          <div className="px-4 pb-4 border-t border-border/50 animate-fade-in">
            <div className="pt-4 space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Price Range</label>
                <div className="flex items-center gap-3">
                  <input
                    type="number"
                    placeholder="Min"
                    value={priceRange[0] || ""}
                    onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                    className="flex-1 h-10 px-3 bg-secondary rounded-lg text-sm"
                  />
                  <span className="text-muted-foreground">—</span>
                  <input
                    type="number"
                    placeholder="Max"
                    value={priceRange[1] || ""}
                    onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                    className="flex-1 h-10 px-3 bg-secondary rounded-lg text-sm"
                  />
                </div>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => { setPriceRange([0, 5000]); setSelectedCategory("all"); }}
                  className="flex items-center gap-1 px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X className="w-4 h-4" />
                  Clear all
                </button>
                <button
                  onClick={() => setShowFilters(false)}
                  className="ml-auto px-4 py-2 bg-primary text-white rounded-xl text-sm font-medium"
                >
                  Apply Filters
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Results Header */}
      <div className="container-app py-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground">{pets.length} results</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setViewMode("grid")}
              className={cn("p-2 rounded-lg transition-colors", viewMode === "grid" ? "bg-secondary" : "hover:bg-secondary/50")}
            >
              <Grid3X3 className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={cn("p-2 rounded-lg transition-colors", viewMode === "list" ? "bg-secondary" : "hover:bg-secondary/50")}
            >
              <List className="w-4 h-4" />
            </button>
            <select
              value={selectedSort}
              onChange={(e) => setSelectedSort(e.target.value)}
              className="h-9 px-3 bg-secondary rounded-lg text-sm focus:outline-none"
            >
              {sortOptions.map((opt) => (
                <option key={opt.id} value={opt.id}>{opt.name}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Results Grid */}
      <div className="container-app pb-8">
        <div className={cn(
          "grid gap-3",
          viewMode === "grid" ? "grid-cols-2" : "grid-cols-1"
        )}>
          {pets.map((pet, i) => (
            <div key={pet.id} className="animate-fade-up" style={{ animationDelay: `${i * 50}ms` }}>
              <PetCard {...pet} />
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
