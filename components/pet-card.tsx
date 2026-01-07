"use client"

import Image from "next/image"
import Link from "next/link"
import { Heart, MapPin, Shield } from "lucide-react"
import { cn } from "@/lib/utils"

interface PetCardProps {
  id: string
  name: string
  breed: string
  age: string
  price: number
  location: string
  image: string
  gender?: string
  verified?: boolean
  isSaved?: boolean
  variant?: "default" | "compact" | "featured"
}

export default function PetCard({
  id,
  name,
  breed,
  age,
  price,
  location,
  image,
  gender,
  verified = false,
  isSaved = false,
  variant = "default",
}: PetCardProps) {
  if (variant === "featured") {
    return (
      <Link href={`/pet/${id}`} className="block group">
        <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-muted">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          <button
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}
            className="absolute top-4 right-4 p-2.5 rounded-full bg-white/20 backdrop-blur-sm transition-all hover:bg-white/40"
          >
            <Heart className={cn("w-5 h-5", isSaved ? "fill-white text-white" : "text-white")} />
          </button>

          {verified && (
            <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-success/90 text-white text-xs font-medium">
              <Shield className="w-3.5 h-3.5" />
              Verified
            </div>
          )}

          <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
            <div className="flex items-end justify-between">
              <div>
                <h3 className="text-xl font-bold">{name}</h3>
                <p className="text-white/80 text-sm">{breed}</p>
                <div className="flex items-center gap-2 mt-2 text-white/70 text-xs">
                  <span>{age}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {location}
                  </span>
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold">${price.toLocaleString()}</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    )
  }

  return (
    <Link href={`/pet/${id}`} className="block group">
      <div className="bg-card rounded-2xl overflow-hidden border border-border/50 shadow-soft transition-all duration-300 hover:shadow-soft-lg hover:-translate-y-1">
        <div className="relative aspect-square bg-muted">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />

          <button
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}
            className={cn(
              "absolute top-3 right-3 p-2 rounded-xl transition-all duration-200",
              "bg-white/90 backdrop-blur-sm shadow-sm",
              "hover:bg-white hover:scale-110 active:scale-95"
            )}
          >
            <Heart className={cn(
              "w-4 h-4 transition-colors",
              isSaved ? "fill-primary text-primary" : "text-muted-foreground"
            )} />
          </button>

          {verified && (
            <div className="absolute top-3 left-3 p-1.5 rounded-lg bg-success text-white">
              <Shield className="w-3.5 h-3.5" />
            </div>
          )}

          {gender && (
            <div className="absolute bottom-3 left-3 px-2 py-1 rounded-lg bg-black/50 backdrop-blur-sm text-white text-xs font-medium">
              {gender}
            </div>
          )}
        </div>

        <div className="p-3.5">
          <div className="flex items-start justify-between gap-2 mb-2">
            <div className="min-w-0">
              <h3 className="font-semibold text-foreground line-clamp-1">{name}</h3>
              <p className="text-sm text-muted-foreground line-clamp-1">{breed}</p>
            </div>
            <p className="font-bold text-primary shrink-0">${price.toLocaleString()}</p>
          </div>

          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span className="px-2 py-1 bg-secondary rounded-lg">{age}</span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              {location}
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}
