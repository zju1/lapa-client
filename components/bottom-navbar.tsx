"use client"

import { Heart, Home, Plus, Search, User } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "/", icon: Home, label: "Home" },
  { href: "/search", icon: Search, label: "Search" },
  { href: "/post", icon: Plus, label: "Post", isAction: true },
  { href: "/favorites", icon: Heart, label: "Favorites" },
  { href: "/profile", icon: User, label: "Profile" },
]

export default function BottomNavbar() {
  const pathname = usePathname()

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-lg border-t border-border safe-bottom">
      <div className="max-w-lg mx-auto">
        <div className="grid grid-cols-5 h-16">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            const Icon = item.icon

            if (item.isAction) {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex flex-col items-center justify-center"
                >
                  <div
                    className={cn(
                      "flex items-center justify-center w-12 h-12 rounded-full -mt-4",
                      "bg-primary text-primary-foreground shadow-lg",
                      "transition-all duration-200",
                      "hover:shadow-xl hover:scale-105",
                      "active:scale-95"
                    )}
                  >
                    <Icon className="w-5 h-5" strokeWidth={2.5} />
                  </div>
                </Link>
              )
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex flex-col items-center justify-center gap-1 transition-colors",
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <Icon
                  className={cn(
                    "w-5 h-5 transition-transform",
                    isActive && "scale-110"
                  )}
                  strokeWidth={isActive ? 2.5 : 2}
                />
                <span className={cn(
                  "text-2xs font-medium",
                  isActive && "font-semibold"
                )}>
                  {item.label}
                </span>
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
