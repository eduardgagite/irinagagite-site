"use client"

import { useEffect, useState } from "react"
import { ChevronUp } from "lucide-react"

import { LangText, type LangTextProps } from "@/components/lang-text"

type LangPair = Pick<LangTextProps, "en" | "ru">

export default function ScrollToTop({ label }: { label: LangPair }) {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!show) return null

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 p-3 rounded-full bg-primary text-white shadow-lg z-50"
    >
      <ChevronUp className="w-5 h-5" />
      <span className="sr-only">
        <LangText en={label.en} ru={label.ru} />
      </span>
    </button>
  )
}
