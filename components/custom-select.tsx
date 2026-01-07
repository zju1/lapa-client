"use client"

import { useState } from "react"
import { Check, ChevronDown } from "lucide-react"
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
import { cn } from "@/lib/utils"

interface Option {
  value: string
  label: string
}

interface CustomSelectProps {
  options: Option[]
  placeholder: string
  value?: string
  onChange: (value: string) => void
  className?: string
}

export default function CustomSelect({
  options,
  placeholder,
  value,
  onChange,
  className,
}: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false)
  const selectedOption = options.find((option) => option.value === value)

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "w-full justify-between font-normal h-11",
            !selectedOption && "text-muted-foreground",
            className
          )}
        >
          {selectedOption ? selectedOption.label : placeholder}
          <ChevronDown className="ml-2 h-4 w-4 opacity-50" />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="max-h-[85vh]">
        <DrawerHeader className="border-b border-border">
          <DrawerTitle className="text-lg">{placeholder}</DrawerTitle>
        </DrawerHeader>
        <div className="py-2 overflow-y-auto max-h-[50vh]">
          {options.map((option) => {
            const isSelected = value === option.value
            return (
              <button
                key={option.value}
                className={cn(
                  "flex items-center justify-between w-full px-4 py-3 text-left",
                  "transition-colors hover:bg-muted",
                  isSelected && "bg-primary/5"
                )}
                onClick={() => {
                  onChange(option.value)
                  setIsOpen(false)
                }}
              >
                <span className={cn(
                  "font-medium",
                  isSelected && "text-primary"
                )}>
                  {option.label}
                </span>
                {isSelected && (
                  <Check className="h-4 w-4 text-primary" />
                )}
              </button>
            )
          })}
        </div>
        <DrawerFooter className="border-t border-border">
          <DrawerClose asChild>
            <Button variant="outline" size="lg" className="w-full">
              Cancel
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
