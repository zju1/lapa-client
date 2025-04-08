"use client"

import type React from "react"

import { useState } from "react"
import { ArrowLeft, Camera } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"
import CustomSelect from "@/components/custom-select"

export default function PostPage() {
  const [petName, setPetName] = useState("")
  const [petType, setPetType] = useState("")
  const [breed, setBreed] = useState("")
  const [age, setAge] = useState("")
  const [price, setPrice] = useState("")
  const [location, setLocation] = useState("")
  const [description, setDescription] = useState("")

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log({
      petName,
      petType,
      breed,
      age,
      price,
      location,
      description,
    })
  }

  return (
    <main className="pb-16">
      <header className="sticky top-0 z-10 bg-white border-b border-gray-200">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center">
            <Link href="/">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
                <span className="sr-only">Back</span>
              </Button>
            </Link>
            <h1 className="text-lg font-semibold">Post a Pet</h1>
          </div>
        </div>
      </header>

      <form onSubmit={handleSubmit} className="p-4 space-y-6">
        <div className="flex justify-center">
          <div className="relative w-full h-48 bg-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
            <div className="text-center">
              <Camera className="mx-auto h-10 w-10 text-gray-400" />
              <p className="mt-2 text-sm text-gray-500">Add pet photos</p>
              <p className="text-xs text-gray-400">Up to 5 photos</p>
            </div>
            <input
              type="file"
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              multiple
              accept="image/*"
            />
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label htmlFor="petName" className="block text-sm font-medium text-gray-700 mb-1">
              Pet Name
            </label>
            <Input
              id="petName"
              value={petName}
              onChange={(e) => setPetName(e.target.value)}
              placeholder="Enter pet name"
              required
            />
          </div>

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
            <label htmlFor="breed" className="block text-sm font-medium text-gray-700 mb-1">
              Breed
            </label>
            <Input
              id="breed"
              value={breed}
              onChange={(e) => setBreed(e.target.value)}
              placeholder="Enter breed"
              required
            />
          </div>

          <div>
            <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">
              Age
            </label>
            <Input id="age" value={age} onChange={(e) => setAge(e.target.value)} placeholder="e.g., 2 years" required />
          </div>

          <div>
            <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
              Price ($)
            </label>
            <Input
              id="price"
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Enter price"
              required
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

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe your pet..."
              rows={4}
              required
            />
          </div>
        </div>

        <Button type="submit" className="w-full bg-[#FFD465] hover:bg-[#FFD465]/90 text-black">
          Post Advertisement
        </Button>
      </form>
    </main>
  )
}
