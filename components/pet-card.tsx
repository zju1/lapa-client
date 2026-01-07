"use client"

import Image from "next/image"
import Link from "next/link"
import { Heart, MapPin } from "lucide-react"
import { cn } from "@/lib/utils"

interface PetCardProps {
  id: string
  name: string
  breed: string
  age: string
  price: number
  location: string
  image: string
  isFavorite?: boolean
  className?: string
}

export default function PetCard({
  id,
  name,
  breed,
  age,
  price,
  location,
  image,
  isFavorite = false,
  className,
}: PetCardProps) {
  return (
    <Link
      href={`/pet/${id}`}
      className={cn(
        "group block bg-card rounded-xl overflow-hidden shadow-soft card-hover border border-border/50",
        className
      )}
    >
      <div className="relative aspect-square overflow-hidden bg-muted">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <button
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
          }}
          className={cn(
            "absolute top-3 right-3 p-2 rounded-full transition-all duration-200",
            "bg-white/90 backdrop-blur-sm shadow-sm",
            "hover:bg-white hover:shadow-md hover:scale-110",
            "active:scale-95"
          )}
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          <Heart
            className={cn(
              "h-4 w-4 transition-colors",
              isFavorite
                ? "fill-favorite text-favorite"
                : "text-muted-foreground hover:text-favorite"
            )}
          />
        </button>
      </div>

      <div className="p-3 space-y-2">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0 flex-1">
            <h3 className="font-semibold text-foreground truncate">{name}</h3>
            <p className="text-sm text-muted-foreground truncate">{breed}</p>
          </div>
          <p className="font-bold text-primary whitespace-nowrap">
            ${price.toLocaleString()}
          </p>
        </div>

        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span className="px-2 py-0.5 bg-secondary rounded-full">{age}</span>
          <span className="flex items-center gap-1">
            <MapPin className="h-3 w-3" />
            {location}
          </span>
        </div>
      </div>
    </Link>
  )
}
