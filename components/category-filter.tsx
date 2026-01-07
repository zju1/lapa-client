"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { Dog, Cat, Bird, Fish, Rabbit, Bug } from "lucide-react"

const categories = [
  { id: "all", label: "All Pets", icon: null },
  { id: "dogs", label: "Dogs", icon: Dog },
  { id: "cats", label: "Cats", icon: Cat },
  { id: "birds", label: "Birds", icon: Bird },
  { id: "fish", label: "Fish", icon: Fish },
  { id: "small", label: "Small Pets", icon: Rabbit },
  { id: "reptiles", label: "Reptiles", icon: Bug },
]

interface CategoryFilterProps {
  className?: string
}

export default function CategoryFilter({ className }: CategoryFilterProps) {
  const [activeCategory, setActiveCategory] = useState("all")

  return (
    <div className={cn("relative", className)}>
      <div className="flex overflow-x-auto gap-2 px-4 py-3 no-scrollbar">
        {categories.map((category) => {
          const isActive = activeCategory === category.id
          const Icon = category.icon

          return (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap",
                "transition-all duration-200",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
                isActive
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              )}
            >
              {Icon && <Icon className="h-4 w-4" />}
              {category.label}
            </button>
          )
        })}
      </div>
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-background to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-4 bg-gradient-to-l from-background to-transparent pointer-events-none" />
    </div>
  )
}
