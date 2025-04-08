"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"

interface Option {
  value: string
  label: string
}

interface CustomSelectProps {
  options: Option[]
  placeholder: string
  value?: string
  onChange: (value: string) => void
}

export default function CustomSelect({ options, placeholder, value, onChange }: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false)
  const selectedOption = options.find((option) => option.value === value)

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline" className="w-full justify-between font-normal">
          {selectedOption ? selectedOption.label : placeholder}
          <ChevronDown className="ml-2 h-4 w-4 opacity-50" />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="max-h-[80vh]">
        <DrawerHeader>
          <DrawerTitle>{placeholder}</DrawerTitle>
        </DrawerHeader>
        <div className="py-2">
          <div className="grid">
            {options.map((option) => (
              <Button
                key={option.value}
                variant="ghost"
                className={`justify-start font-normal border-b rounded-none last:border-none ${
                  value === option.value ? "bg-[#FFD465]/20 text-[#FFD465]" : ""
                }`}
                onClick={() => {
                  onChange(option.value)
                  setIsOpen(false)
                }}
              >
                {option.label}
              </Button>
            ))}
          </div>
        </div>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
