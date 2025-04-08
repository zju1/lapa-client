"use client"

import { useState } from "react"
import { ArrowLeft, ChevronRight, Globe, LogOut, Settings, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import CustomSelect from "@/components/custom-select"

export default function ProfilePage() {
  const [language, setLanguage] = useState("en")

  const languageOptions = [
    { value: "en", label: "English" },
    { value: "es", label: "Español" },
    { value: "fr", label: "Français" },
    { value: "de", label: "Deutsch" },
    { value: "zh", label: "中文" },
  ]

  return (
    <main className="pb-16">
      <header className="sticky top-0 z-10 bg-white border-b border-gray-200">
        <div className="flex items-center p-4">
          <Link href="/">
            <Button variant="ghost" size="icon" className="mr-2">
              <ArrowLeft className="h-5 w-5" />
              <span className="sr-only">Back</span>
            </Button>
          </Link>
          <h1 className="text-lg font-semibold">Profile</h1>
        </div>
      </header>

      <section className="p-4">
        <div className="flex items-center space-x-4 mb-6">
          <Avatar className="h-16 w-16">
            <AvatarImage src="/placeholder.svg?height=64&width=64" alt="User" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-xl font-semibold">John Doe</h2>
            <p className="text-gray-500">john.doe@example.com</p>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-medium text-gray-500 mb-2">ACCOUNT</h3>
            <div className="space-y-1 rounded-md border">
              <Link href="/profile/personal-info">
                <Button variant="ghost" className="w-full justify-between font-normal h-14">
                  <div className="flex items-center">
                    <User className="h-5 w-5 mr-3 text-gray-500" />
                    Personal Information
                  </div>
                  <ChevronRight className="h-5 w-5 text-gray-400" />
                </Button>
              </Link>
              <Separator />
              <Link href="/profile/settings">
                <Button variant="ghost" className="w-full justify-between font-normal h-14">
                  <div className="flex items-center">
                    <Settings className="h-5 w-5 mr-3 text-gray-500" />
                    Settings
                  </div>
                  <ChevronRight className="h-5 w-5 text-gray-400" />
                </Button>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-500 mb-2">PREFERENCES</h3>
            <div className="rounded-md border">
              <div className="p-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <div className="flex items-center mb-2">
                    <Globe className="h-5 w-5 mr-3 text-gray-500" />
                    Language
                  </div>
                </label>
                <CustomSelect
                  options={languageOptions}
                  placeholder="Select language"
                  value={language}
                  onChange={setLanguage}
                />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-500 mb-2">HELP & LEGAL</h3>
            <div className="space-y-1 rounded-md border">
              <Link href="/help">
                <Button variant="ghost" className="w-full justify-between font-normal h-14">
                  <div className="flex items-center">Help Center</div>
                  <ChevronRight className="h-5 w-5 text-gray-400" />
                </Button>
              </Link>
              <Separator />
              <Link href="/faq">
                <Button variant="ghost" className="w-full justify-between font-normal h-14">
                  <div className="flex items-center">FAQ</div>
                  <ChevronRight className="h-5 w-5 text-gray-400" />
                </Button>
              </Link>
              <Separator />
              <Link href="/privacy-policy">
                <Button variant="ghost" className="w-full justify-between font-normal h-14">
                  <div className="flex items-center">Privacy Policy</div>
                  <ChevronRight className="h-5 w-5 text-gray-400" />
                </Button>
              </Link>
              <Separator />
              <Link href="/terms">
                <Button variant="ghost" className="w-full justify-between font-normal h-14">
                  <div className="flex items-center">Terms of Service</div>
                  <ChevronRight className="h-5 w-5 text-gray-400" />
                </Button>
              </Link>
            </div>
          </div>

          <Button
            variant="outline"
            className="w-full justify-center font-normal h-14 text-red-500 hover:text-red-600 hover:bg-red-50"
          >
            <LogOut className="h-5 w-5 mr-2" />
            Log Out
          </Button>
        </div>
      </section>
    </main>
  )
}
