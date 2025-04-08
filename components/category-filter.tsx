"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"

const categories = ["All Pets", "Dogs", "Cats", "Birds", "Fish", "Reptiles", "Small Pets"]

export default function CategoryFilter() {
  const [activeCategory, setActiveCategory] = useState("All Pets")

  return (
    <div className="flex overflow-x-auto py-2 px-4 gap-2 no-scrollbar">
      {categories.map((category) => (
        <Button
          key={category}
          variant={activeCategory === category ? "default" : "outline"}
          className={`rounded-full text-sm whitespace-nowrap ${
            activeCategory === category ? "bg-[#FFD465] text-black hover:bg-[#FFD465]/90" : ""
          }`}
          onClick={() => setActiveCategory(category)}
        >
          {category}
        </Button>
      ))}
    </div>
  )
}
