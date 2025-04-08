"use client"

import { useState } from "react"
import { ArrowLeft, Filter, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import PetCard from "@/components/pet-card"
import Link from "next/link"
import CustomSelect from "@/components/custom-select"

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [petType, setPetType] = useState("")
  const [location, setLocation] = useState("")

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
          <h1 className="text-lg font-semibold">Search</h1>
        </div>
        <div className="px-4 pb-4">
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search for pets..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-[#FFD465]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Pet Type</label>
              <CustomSelect
                options={petTypeOptions}
                placeholder="Select pet type"
                value={petType}
                onChange={setPetType}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
              <CustomSelect
                options={locationOptions}
                placeholder="Select location"
                value={location}
                onChange={setLocation}
              />
            </div>
          </div>
        </div>
      </header>

      <section className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Results</h2>
          <Button variant="outline" size="sm" className="text-xs">
            <Filter className="h-3 w-3 mr-1" />
            Filters
          </Button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {pets.map((pet) => (
            <PetCard key={pet.id} {...pet} />
          ))}
        </div>
      </section>
    </main>
  )
}
