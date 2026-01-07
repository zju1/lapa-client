"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Camera, Check, ChevronRight, ImagePlus, Info, X } from "lucide-react"
import { cn } from "@/lib/utils"

const petTypes = [
  { id: "dog", name: "Dog", icon: "🐕" },
  { id: "cat", name: "Cat", icon: "🐈" },
  { id: "bird", name: "Bird", icon: "🦜" },
  { id: "fish", name: "Fish", icon: "🐠" },
  { id: "rabbit", name: "Rabbit", icon: "🐰" },
  { id: "reptile", name: "Reptile", icon: "🦎" },
  { id: "other", name: "Other", icon: "🐾" },
]

const genderOptions = [
  { id: "male", name: "Male" },
  { id: "female", name: "Female" },
]

export default function SellPage() {
  const [step, setStep] = useState(1)
  const [selectedType, setSelectedType] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    breed: "",
    age: "",
    gender: "",
    price: "",
    location: "",
    description: "",
    vaccinated: false,
    microchipped: false,
    pedigree: false,
  })

  const updateForm = (key: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [key]: value }))
  }

  const canProceed = () => {
    if (step === 1) return selectedType !== ""
    if (step === 2) return formData.name && formData.breed && formData.age && formData.gender
    if (step === 3) return formData.price && formData.location
    return true
  }

  return (
    <main className="min-h-screen pb-32">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-xl border-b border-border/50">
        <div className="container-app py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Link href="/" className="p-2 -ml-2 rounded-xl hover:bg-secondary transition-colors">
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <div>
                <h1 className="text-lg font-bold">Sell a Pet</h1>
                <p className="text-sm text-muted-foreground">Step {step} of 4</p>
              </div>
            </div>
          </div>

          {/* Progress */}
          <div className="flex gap-2 mt-4">
            {[1, 2, 3, 4].map((s) => (
              <div
                key={s}
                className={cn(
                  "h-1 flex-1 rounded-full transition-colors",
                  s <= step ? "bg-primary" : "bg-secondary"
                )}
              />
            ))}
          </div>
        </div>
      </header>

      <div className="container-app py-6">
        {/* Step 1: Pet Type */}
        {step === 1 && (
          <div className="animate-fade-up">
            <h2 className="text-xl font-bold mb-2">What type of pet?</h2>
            <p className="text-muted-foreground mb-6">Select the category that best fits</p>

            <div className="grid grid-cols-2 gap-3">
              {petTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setSelectedType(type.id)}
                  className={cn(
                    "flex flex-col items-center gap-3 p-6 rounded-2xl border-2 transition-all",
                    selectedType === type.id
                      ? "border-primary bg-primary/5 shadow-lg shadow-primary/10"
                      : "border-border hover:border-primary/50"
                  )}
                >
                  <span className="text-4xl">{type.icon}</span>
                  <span className="font-medium">{type.name}</span>
                  {selectedType === type.id && (
                    <div className="absolute top-3 right-3 p-1 rounded-full bg-primary text-white">
                      <Check className="w-3 h-3" />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Basic Info */}
        {step === 2 && (
          <div className="animate-fade-up space-y-5">
            <div>
              <h2 className="text-xl font-bold mb-2">Basic Information</h2>
              <p className="text-muted-foreground">Tell us about your pet</p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Pet Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => updateForm("name", e.target.value)}
                  placeholder="e.g., Luna"
                  className="w-full h-12 px-4 bg-secondary rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Breed</label>
                <input
                  type="text"
                  value={formData.breed}
                  onChange={(e) => updateForm("breed", e.target.value)}
                  placeholder="e.g., Golden Retriever"
                  className="w-full h-12 px-4 bg-secondary rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium mb-2">Age</label>
                  <input
                    type="text"
                    value={formData.age}
                    onChange={(e) => updateForm("age", e.target.value)}
                    placeholder="e.g., 8 months"
                    className="w-full h-12 px-4 bg-secondary rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Gender</label>
                  <div className="flex gap-2">
                    {genderOptions.map((g) => (
                      <button
                        key={g.id}
                        onClick={() => updateForm("gender", g.id)}
                        className={cn(
                          "flex-1 h-12 rounded-xl font-medium transition-all",
                          formData.gender === g.id
                            ? "bg-primary text-white"
                            : "bg-secondary hover:bg-secondary/80"
                        )}
                      >
                        {g.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Pricing & Location */}
        {step === 3 && (
          <div className="animate-fade-up space-y-5">
            <div>
              <h2 className="text-xl font-bold mb-2">Price & Location</h2>
              <p className="text-muted-foreground">Set your asking price</p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Price ($)</label>
                <input
                  type="number"
                  value={formData.price}
                  onChange={(e) => updateForm("price", e.target.value)}
                  placeholder="0"
                  className="w-full h-14 px-4 bg-secondary rounded-xl text-2xl font-bold focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Location</label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => updateForm("location", e.target.value)}
                  placeholder="e.g., Brooklyn, NY"
                  className="w-full h-12 px-4 bg-secondary rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-3">Health & Documents</label>
                <div className="space-y-2">
                  {[
                    { key: "vaccinated", label: "Vaccinated" },
                    { key: "microchipped", label: "Microchipped" },
                    { key: "pedigree", label: "Pedigree Papers" },
                  ].map((item) => (
                    <button
                      key={item.key}
                      onClick={() => updateForm(item.key, !formData[item.key as keyof typeof formData])}
                      className="flex items-center justify-between w-full p-4 bg-secondary rounded-xl"
                    >
                      <span>{item.label}</span>
                      <div className={cn(
                        "w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-colors",
                        formData[item.key as keyof typeof formData]
                          ? "bg-primary border-primary text-white"
                          : "border-border"
                      )}>
                        {formData[item.key as keyof typeof formData] && <Check className="w-4 h-4" />}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Step 4: Photos & Description */}
        {step === 4 && (
          <div className="animate-fade-up space-y-5">
            <div>
              <h2 className="text-xl font-bold mb-2">Photos & Description</h2>
              <p className="text-muted-foreground">Add photos to attract buyers</p>
            </div>

            <div>
              <label className="block text-sm font-medium mb-3">Photos</label>
              <div className="grid grid-cols-3 gap-3">
                <button className="aspect-square rounded-2xl border-2 border-dashed border-border flex flex-col items-center justify-center gap-2 hover:border-primary/50 transition-colors">
                  <Camera className="w-8 h-8 text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">Add photo</span>
                </button>
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="aspect-square rounded-2xl bg-secondary flex items-center justify-center">
                    <ImagePlus className="w-6 h-6 text-muted-foreground/50" />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Description</label>
              <textarea
                value={formData.description}
                onChange={(e) => updateForm("description", e.target.value)}
                placeholder="Tell potential buyers about your pet's personality, habits, and why they'll make a great companion..."
                rows={5}
                className="w-full p-4 bg-secondary rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>

            <div className="p-4 bg-info/10 rounded-xl flex gap-3">
              <Info className="w-5 h-5 text-info shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-medium text-info">Tips for a great listing</p>
                <p className="text-muted-foreground mt-1">Add clear, well-lit photos from multiple angles. Include details about personality, training, and health records.</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Fixed Bottom */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/95 backdrop-blur-xl border-t border-border safe-bottom">
        <div className="container-app">
          <div className="flex gap-3">
            {step > 1 && (
              <button
                onClick={() => setStep(step - 1)}
                className="flex-1 h-12 bg-secondary rounded-xl font-medium hover:bg-secondary/80 transition-colors"
              >
                Back
              </button>
            )}
            <button
              onClick={() => step < 4 ? setStep(step + 1) : null}
              disabled={!canProceed()}
              className={cn(
                "flex-1 h-12 rounded-xl font-medium transition-all",
                canProceed()
                  ? "gradient-primary text-white shadow-lg shadow-primary/25"
                  : "bg-secondary text-muted-foreground cursor-not-allowed"
              )}
            >
              {step === 4 ? "Publish Listing" : "Continue"}
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
