"use client"

import { useState } from "react"
import { ArrowLeft, Search, SlidersHorizontal, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import PetCard from "@/components/pet-card"
import Link from "next/link"
import CustomSelect from "@/components/custom-select"
import { cn } from "@/lib/utils"

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [petType, setPetType] = useState("")
  const [location, setLocation] = useState("")
  const [showFilters, setShowFilters] = useState(false)

  const pets = [
    {
      id: "1",
      name: "Max",
      breed: "Golden Retriever",
      age: "2 years",
      price: 800,
      location: "New York",
      image: "/placeholder.svg?height=400&width=400",
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

  const petTypeOptions = [
    { value: "dog", label: "Dog" },
    { value: "cat", label: "Cat" },
    { value: "bird", label: "Bird" },
    { value: "fish", label: "Fish" },
    { value: "reptile", label: "Reptile" },
    { value: "small_pet", label: "Small Pet" },
  ]

  const locationOptions = [
    { value: "new_york", label: "New York" },
    { value: "los_angeles", label: "Los Angeles" },
    { value: "chicago", label: "Chicago" },
    { value: "miami", label: "Miami" },
    { value: "dallas", label: "Dallas" },
    { value: "seattle", label: "Seattle" },
  ]

  const activeFiltersCount = [petType, location].filter(Boolean).length

  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-lg border-b border-border">
        <div className="flex items-center gap-3 px-4 py-3">
          <Link href="/">
            <Button variant="ghost" size="icon" className="shrink-0 rounded-full">
              <ArrowLeft className="h-5 w-5" />
              <span className="sr-only">Back</span>
            </Button>
          </Link>

          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search pets, breeds..."
              className="w-full h-10 pl-10 pr-4 bg-muted/50 border border-border rounded-xl text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Filter Toggle */}
          <Button
            variant={showFilters ? "default" : "outline"}
            size="icon"
            className="shrink-0 rounded-full relative"
            onClick={() => setShowFilters(!showFilters)}
          >
            <SlidersHorizontal className="h-4 w-4" />
            {activeFiltersCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary text-primary-foreground text-2xs rounded-full flex items-center justify-center">
                {activeFiltersCount}
              </span>
            )}
          </Button>
        </div>

        {/* Filters Panel */}
        <div
          className={cn(
            "overflow-hidden transition-all duration-300",
            showFilters ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="px-4 pb-4 space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-1.5">
                  Pet Type
                </label>
                <CustomSelect
                  options={petTypeOptions}
                  placeholder="All types"
                  value={petType}
                  onChange={setPetType}
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-1.5">
                  Location
                </label>
                <CustomSelect
                  options={locationOptions}
                  placeholder="All locations"
                  value={location}
                  onChange={setLocation}
                />
              </div>
            </div>

            {activeFiltersCount > 0 && (
              <Button
                variant="ghost"
                size="sm"
                className="text-xs text-muted-foreground"
                onClick={() => {
                  setPetType("")
                  setLocation("")
                }}
              >
                <X className="h-3 w-3 mr-1" />
                Clear filters
              </Button>
            )}
          </div>
        </div>
      </header>

      {/* Results */}
      <section className="px-4 py-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-lg font-semibold text-foreground">Results</h2>
            <p className="text-sm text-muted-foreground">
              {pets.length} pets found
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

        {pets.length === 0 && (
          <div className="text-center py-16">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
              <Search className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold mb-2">No results found</h3>
            <p className="text-muted-foreground text-sm">
              Try adjusting your search or filters
            </p>
          </div>
        )}
      </section>
    </main>
  )
}
