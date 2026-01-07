"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Bell, ChevronRight, CreditCard, HelpCircle, LogOut, MapPin, Settings, Shield, Star, User } from "lucide-react"

const menuSections = [
  {
    title: "Account",
    items: [
      { icon: User, label: "Edit Profile", href: "/account/profile" },
      { icon: MapPin, label: "My Address", href: "/account/address" },
      { icon: Bell, label: "Notifications", href: "/account/notifications" },
    ],
  },
  {
    title: "Seller",
    items: [
      { icon: Star, label: "My Listings", href: "/account/listings", badge: "3" },
      { icon: CreditCard, label: "Payments", href: "/account/payments" },
    ],
  },
  {
    title: "Support",
    items: [
      { icon: HelpCircle, label: "Help Center", href: "/help" },
      { icon: Shield, label: "Privacy & Security", href: "/account/privacy" },
      { icon: Settings, label: "Settings", href: "/account/settings" },
    ],
  },
]

export default function AccountPage() {
  return (
    <main className="min-h-screen pb-24">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-xl border-b border-border/50">
        <div className="container-app py-4">
          <div className="flex items-center gap-3">
            <Link href="/" className="p-2 -ml-2 rounded-xl hover:bg-secondary transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <h1 className="text-lg font-bold">Account</h1>
          </div>
        </div>
      </header>

      <div className="container-app py-6 space-y-6">
        {/* Profile Card */}
        <div className="bg-card border border-border rounded-2xl p-5">
          <div className="flex items-center gap-4">
            <div className="relative">
              <Image
                src="/placeholder.svg?height=80&width=80"
                alt="Profile"
                width={72}
                height={72}
                className="rounded-full"
              />
              <div className="absolute -bottom-1 -right-1 p-1.5 rounded-full bg-success text-white border-2 border-card">
                <Shield className="w-3 h-3" />
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="text-xl font-bold truncate">John Doe</h2>
              <p className="text-sm text-muted-foreground truncate">john@example.com</p>
              <div className="flex items-center gap-2 mt-2">
                <div className="flex items-center gap-1 px-2 py-1 bg-secondary rounded-full text-xs font-medium">
                  <Star className="w-3 h-3 fill-warning text-warning" />
                  4.9
                </div>
                <span className="text-xs text-muted-foreground">• Member since 2023</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: "Listings", value: "3" },
            { label: "Sold", value: "12" },
            { label: "Reviews", value: "47" },
          ].map((stat) => (
            <div key={stat.label} className="bg-secondary rounded-2xl p-4 text-center">
              <p className="text-2xl font-bold">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Menu Sections */}
        {menuSections.map((section) => (
          <div key={section.title}>
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 px-1">
              {section.title}
            </h3>
            <div className="bg-card border border-border rounded-2xl overflow-hidden divide-y divide-border">
              {section.items.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="flex items-center justify-between p-4 hover:bg-secondary/50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
                        <Icon className="w-5 h-5 text-muted-foreground" />
                      </div>
                      <span className="font-medium">{item.label}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      {item.badge && (
                        <span className="px-2 py-0.5 bg-primary text-white text-xs font-medium rounded-full">
                          {item.badge}
                        </span>
                      )}
                      <ChevronRight className="w-5 h-5 text-muted-foreground" />
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        ))}

        {/* Logout */}
        <button className="w-full flex items-center justify-center gap-2 p-4 bg-destructive/10 text-destructive rounded-2xl font-medium hover:bg-destructive/20 transition-colors">
          <LogOut className="w-5 h-5" />
          Log Out
        </button>
      </div>
    </main>
  )
}
