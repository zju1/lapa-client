import Image from "next/image"
import Link from "next/link"
import { Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PetCardProps {
  id: string
  name: string
  breed: string
  age: string
  price: number
  location: string
  image: string
  isFavorite?: boolean
}

export default function PetCard({ id, name, breed, age, price, location, image, isFavorite = false }: PetCardProps) {
  return (
    <div className="rounded-lg overflow-hidden border border-gray-200 bg-white">
      <Link href={`/pet/${id}`}>
        <div className="relative h-48 w-full">
          <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 bg-white/80 backdrop-blur-sm rounded-full h-8 w-8"
          >
            <Heart className={`h-5 w-5 ${isFavorite ? "fill-[#FFD465] text-[#FFD465]" : "text-gray-500"}`} />
            <span className="sr-only">Add to favorites</span>
          </Button>
        </div>
      </Link>
      <div className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold text-lg">{name}</h3>
            <p className="text-sm text-gray-500">{breed}</p>
          </div>
          <p className="font-bold text-lg">${price}</p>
        </div>
        <div className="mt-2 flex items-center justify-between">
          <p className="text-xs text-gray-500">{age}</p>
          <p className="text-xs text-gray-500">{location}</p>
        </div>
      </div>
    </div>
  )
}
