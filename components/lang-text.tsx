import * as React from "react"

import { cn } from "@/lib/utils"

export type LangTextProps = {
  en: React.ReactNode
  ru: React.ReactNode
  className?: string
}

export function LangText({ en, ru, className }: LangTextProps) {
  return (
    <>
      <span className={cn("lang-en", className)}>{en}</span>
      <span className={cn("lang-ru", className)}>{ru}</span>
    </>
  )
}
