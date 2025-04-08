"use client"

import { Heart, Home, Plus, Search, User } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function BottomNavbar() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200">
      <div className="grid h-full max-w-lg grid-cols-5 mx-auto">
        <Link href="/" className="inline-flex flex-col items-center justify-center px-5">
          <Home className={`w-6 h-6 mb-1 ${isActive("/") ? "text-[#FFD465]" : "text-gray-500"}`} />
          <span className={`text-xs ${isActive("/") ? "text-[#FFD465]" : "text-gray-500"}`}>Home</span>
        </Link>
        <Link href="/search" className="inline-flex flex-col items-center justify-center px-5">
          <Search className={`w-6 h-6 mb-1 ${isActive("/search") ? "text-[#FFD465]" : "text-gray-500"}`} />
          <span className={`text-xs ${isActive("/search") ? "text-[#FFD465]" : "text-gray-500"}`}>Search</span>
        </Link>
        <Link href="/post" className="inline-flex flex-col items-center justify-center px-5">
          <div className="flex items-center justify-center w-10 h-10 bg-[#FFD465] rounded-full -mt-5">
            <Plus className="w-6 h-6 text-white" />
          </div>
          <span className={`text-xs mt-1 ${isActive("/post") ? "text-[#FFD465]" : "text-gray-500"}`}>Post</span>
        </Link>
        <Link href="/favorites" className="inline-flex flex-col items-center justify-center px-5">
          <Heart className={`w-6 h-6 mb-1 ${isActive("/favorites") ? "text-[#FFD465]" : "text-gray-500"}`} />
          <span className={`text-xs ${isActive("/favorites") ? "text-[#FFD465]" : "text-gray-500"}`}>Favorites</span>
        </Link>
        <Link href="/profile" className="inline-flex flex-col items-center justify-center px-5">
          <User className={`w-6 h-6 mb-1 ${isActive("/profile") ? "text-[#FFD465]" : "text-gray-500"}`} />
          <span className={`text-xs ${isActive("/profile") ? "text-[#FFD465]" : "text-gray-500"}`}>Profile</span>
        </Link>
      </div>
    </div>
  )
}
