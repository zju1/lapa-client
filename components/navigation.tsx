"use client"

import { Compass, Heart, Home, PlusCircle, User } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const tabs = [
  { href: "/", icon: Home, label: "Home" },
  { href: "/explore", icon: Compass, label: "Explore" },
  { href: "/sell", icon: PlusCircle, label: "Sell", highlight: true },
  { href: "/saved", icon: Heart, label: "Saved" },
  { href: "/account", icon: User, label: "Account" },
]

export default function Navigation() {
  const pathname = usePathname()

  // Hide on pet detail pages
  if (pathname.startsWith("/pet/")) return null

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-xl border-t border-border/50">
      <div className="safe-bottom">
        <div className="flex items-center justify-around h-16 max-w-md mx-auto">
          {tabs.map((tab) => {
            const isActive = pathname === tab.href
            const Icon = tab.icon

            if (tab.highlight) {
              return (
                <Link
                  key={tab.href}
                  href={tab.href}
                  className="flex flex-col items-center justify-center -mt-6"
                >
                  <div className={cn(
                    "flex items-center justify-center w-14 h-14 rounded-2xl",
                    "gradient-primary text-white shadow-lg shadow-primary/30",
                    "transition-transform duration-200 hover:scale-105 active:scale-95"
                  )}>
                    <Icon className="w-6 h-6" strokeWidth={2} />
                  </div>
                </Link>
              )
            }

            return (
              <Link
                key={tab.href}
                href={tab.href}
                className={cn(
                  "flex flex-col items-center justify-center gap-0.5 px-3 py-2 rounded-xl transition-all",
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <Icon
                  className="w-5 h-5"
                  strokeWidth={isActive ? 2.5 : 2}
                  fill={isActive && tab.href === "/saved" ? "currentColor" : "none"}
                />
                <span className={cn(
                  "text-[10px]",
                  isActive ? "font-semibold" : "font-medium"
                )}>
                  {tab.label}
                </span>
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
