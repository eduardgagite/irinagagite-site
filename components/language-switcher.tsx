"use client"

import { useEffect, useState } from "react"
import { Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const STORAGE_KEY = "irinagagite.language"
type Language = "en" | "ru"

function normalizeLanguage(value: string | null): Language {
  return value === "ru" ? "ru" : "en"
}

export default function LanguageSwitcher() {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem(STORAGE_KEY) : null
    const initial = normalizeLanguage(stored || document.documentElement.lang)
    setLanguage(initial)
    document.documentElement.lang = initial
  }, [])

  const updateLanguage = (next: Language) => {
    setLanguage(next)
    document.documentElement.lang = next
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // ignore storage failures
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="h-9 w-9">
          <Globe className="h-4 w-4" />
          <span className="sr-only">Switch language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => updateLanguage("en")} className={language === "en" ? "bg-muted" : ""}>
          English
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => updateLanguage("ru")} className={language === "ru" ? "bg-muted" : ""}>
          Русский
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
