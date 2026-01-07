"use client"

import type React from "react"
import { useState } from "react"
import { ArrowLeft, Camera, ImagePlus, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"
import CustomSelect from "@/components/custom-select"
import { cn } from "@/lib/utils"

export default function PostPage() {
  const [petName, setPetName] = useState("")
  const [petType, setPetType] = useState("")
  const [breed, setBreed] = useState("")
  const [age, setAge] = useState("")
  const [price, setPrice] = useState("")
  const [location, setLocation] = useState("")
  const [description, setDescription] = useState("")
  const [images, setImages] = useState<string[]>([])

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
    console.log({
      petName,
      petType,
      breed,
      age,
      price,
      location,
      description,
      images,
    })
  }

  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-lg border-b border-border">
        <div className="flex items-center justify-between px-4 py-4">
          <div className="flex items-center gap-3">
            <Link href="/">
              <Button variant="ghost" size="icon" className="rounded-full">
                <ArrowLeft className="h-5 w-5" />
                <span className="sr-only">Back</span>
              </Button>
            </Link>
            <div>
              <h1 className="text-lg font-semibold">Post a Pet</h1>
              <p className="text-xs text-muted-foreground">
                Create your listing
              </p>
            </div>
          </div>
        </div>
      </header>

      <form onSubmit={handleSubmit} className="px-4 py-6 space-y-6">
        {/* Photo Upload */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Photos
          </label>
          <div className="grid grid-cols-3 gap-3">
            {/* Main upload area */}
            <div
              className={cn(
                "relative aspect-square rounded-xl overflow-hidden",
                "bg-muted/50 border-2 border-dashed border-border",
                "flex flex-col items-center justify-center cursor-pointer",
                "hover:bg-muted/70 hover:border-primary/50 transition-all",
                images.length === 0 && "col-span-3 aspect-video"
              )}
            >
              <input
                type="file"
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                multiple
                accept="image/*"
              />
              <div className="text-center p-4">
                {images.length === 0 ? (
                  <>
                    <Camera className="mx-auto h-10 w-10 text-muted-foreground mb-2" />
                    <p className="text-sm font-medium text-foreground">
                      Add photos
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Up to 5 photos
                    </p>
                  </>
                ) : (
                  <ImagePlus className="h-6 w-6 text-muted-foreground" />
                )}
              </div>
            </div>

            {/* Preview slots */}
            {images.map((img, index) => (
              <div
                key={index}
                className="relative aspect-square rounded-xl overflow-hidden bg-muted"
              >
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute top-1 right-1 h-6 w-6 bg-black/50 hover:bg-black/70 text-white rounded-full"
                >
                  <X className="h-3 w-3" />
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Form Fields */}
        <div className="space-y-4">
          <div>
            <label htmlFor="petName" className="block text-sm font-medium text-foreground mb-1.5">
              Pet Name
            </label>
            <Input
              id="petName"
              value={petName}
              onChange={(e) => setPetName(e.target.value)}
              placeholder="e.g., Max"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">
                Pet Type
              </label>
              <CustomSelect
                options={petTypeOptions}
                placeholder="Select type"
                value={petType}
                onChange={setPetType}
              />
            </div>
            <div>
              <label htmlFor="breed" className="block text-sm font-medium text-foreground mb-1.5">
                Breed
              </label>
              <Input
                id="breed"
                value={breed}
                onChange={(e) => setBreed(e.target.value)}
                placeholder="e.g., Golden Retriever"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label htmlFor="age" className="block text-sm font-medium text-foreground mb-1.5">
                Age
              </label>
              <Input
                id="age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="e.g., 2 years"
                required
              />
            </div>
            <div>
              <label htmlFor="price" className="block text-sm font-medium text-foreground mb-1.5">
                Price ($)
              </label>
              <Input
                id="price"
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="e.g., 500"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">
              Location
            </label>
            <CustomSelect
              options={locationOptions}
              placeholder="Select location"
              value={location}
              onChange={setLocation}
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-foreground mb-1.5">
              Description
            </label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe your pet, personality, habits..."
              rows={4}
              className="resize-none"
              required
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <Button type="submit" size="xl" className="w-full">
            Post Listing
          </Button>
        </div>
      </form>
    </main>
  )
}
