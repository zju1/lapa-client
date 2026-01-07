"use client"

import { useState } from "react"
import {
  ArrowLeft,
  ChevronRight,
  Globe,
  HelpCircle,
  LogOut,
  Settings,
  Shield,
  User,
  FileText,
  MessageSquare,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import CustomSelect from "@/components/custom-select"
import { cn } from "@/lib/utils"

interface MenuItemProps {
  icon: React.ReactNode
  label: string
  href?: string
  onClick?: () => void
  variant?: "default" | "danger"
}

function MenuItem({ icon, label, href, onClick, variant = "default" }: MenuItemProps) {
  const content = (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center justify-between w-full px-4 py-3.5",
        "transition-colors hover:bg-muted",
        variant === "danger" && "text-destructive"
      )}
    >
      <div className="flex items-center gap-3">
        <span className={cn(
          "text-muted-foreground",
          variant === "danger" && "text-destructive"
        )}>
          {icon}
        </span>
        <span className="font-medium">{label}</span>
      </div>
      <ChevronRight className="h-5 w-5 text-muted-foreground" />
    </button>
  )

  if (href) {
    return <Link href={href}>{content}</Link>
  }

  return content
}

export default function ProfilePage() {
  const [language, setLanguage] = useState("en")

  const languageOptions = [
    { value: "en", label: "English" },
    { value: "es", label: "Español" },
    { value: "fr", label: "Français" },
    { value: "de", label: "Deutsch" },
    { value: "zh", label: "中文" },
    { value: "ru", label: "Русский" },
  ]

  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-lg border-b border-border">
        <div className="flex items-center gap-3 px-4 py-4">
          <Link href="/">
            <Button variant="ghost" size="icon" className="rounded-full">
              <ArrowLeft className="h-5 w-5" />
              <span className="sr-only">Back</span>
            </Button>
          </Link>
          <h1 className="text-lg font-semibold">Profile</h1>
        </div>
      </header>

      <section className="px-4 py-6 space-y-6">
        {/* Profile Card */}
        <div className="bg-card border border-border rounded-2xl p-5">
          <div className="flex items-center gap-4">
            <Avatar className="h-16 w-16">
              <AvatarImage src="/placeholder.svg?height=64&width=64" alt="User" />
              <AvatarFallback className="text-lg">JD</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <h2 className="text-xl font-semibold truncate">John Doe</h2>
              <p className="text-muted-foreground text-sm truncate">
                john.doe@example.com
              </p>
            </div>
            <Button variant="outline" size="sm">
              Edit
            </Button>
          </div>
        </div>

        {/* Account Section */}
        <div>
          <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-1 mb-2">
            Account
          </h3>
          <div className="bg-card border border-border rounded-xl overflow-hidden divide-y divide-border">
            <MenuItem
              icon={<User className="h-5 w-5" />}
              label="Personal Information"
              href="/profile/personal-info"
            />
            <MenuItem
              icon={<Settings className="h-5 w-5" />}
              label="Settings"
              href="/profile/settings"
            />
            <MenuItem
              icon={<Shield className="h-5 w-5" />}
              label="Privacy & Security"
              href="/profile/privacy"
            />
          </div>
        </div>

        {/* Preferences Section */}
        <div>
          <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-1 mb-2">
            Preferences
          </h3>
          <div className="bg-card border border-border rounded-xl p-4">
            <div className="flex items-center gap-3 mb-3">
              <Globe className="h-5 w-5 text-muted-foreground" />
              <span className="font-medium">Language</span>
            </div>
            <CustomSelect
              options={languageOptions}
              placeholder="Select language"
              value={language}
              onChange={setLanguage}
            />
          </div>
        </div>

        {/* Help Section */}
        <div>
          <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-1 mb-2">
            Support
          </h3>
          <div className="bg-card border border-border rounded-xl overflow-hidden divide-y divide-border">
            <MenuItem
              icon={<HelpCircle className="h-5 w-5" />}
              label="Help Center"
              href="/help"
            />
            <MenuItem
              icon={<MessageSquare className="h-5 w-5" />}
              label="FAQ"
              href="/faq"
            />
            <MenuItem
              icon={<Shield className="h-5 w-5" />}
              label="Privacy Policy"
              href="/privacy-policy"
            />
            <MenuItem
              icon={<FileText className="h-5 w-5" />}
              label="Terms of Service"
              href="/terms"
            />
          </div>
        </div>

        {/* Logout Button */}
        <Button
          variant="outline"
          size="lg"
          className="w-full text-destructive hover:text-destructive hover:bg-destructive/5 border-destructive/20"
        >
          <LogOut className="h-5 w-5 mr-2" />
          Log Out
        </Button>
      </section>
    </main>
  )
}
