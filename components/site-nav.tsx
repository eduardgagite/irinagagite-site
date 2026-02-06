"use client"

import { useState } from "react"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { LangText, type LangTextProps } from "@/components/lang-text"
import LanguageSwitcher from "@/components/language-switcher"

type LangPair = Pick<LangTextProps, "en" | "ru">

type NavLabels = {
  name: LangPair
  profession: LangPair
  skipToContent: LangPair
  menu: LangPair
  nav: {
    biography: LangPair
    awards: LangPair
    career: LangPair
    repertoire: LangPair
    gallery: LangPair
    videos: LangPair
    contact: LangPair
  }
}

export default function SiteNav({ labels }: { labels: NavLabels }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b">
      <div className="container flex justify-between items-center h-16 px-4 md:px-6">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-[100] bg-background px-4 py-2 rounded-md shadow-md"
        >
          <LangText en={labels.skipToContent.en} ru={labels.skipToContent.ru} />
        </a>
        <div className="text-xl font-serif font-medium">
          <LangText en={labels.name.en} ru={labels.name.ru} />
        </div>
        <div className="hidden md:flex space-x-4 font-serif">
          <a href="#biography" className="hover:text-primary transition-colors">
            <LangText en={labels.nav.biography.en} ru={labels.nav.biography.ru} />
          </a>
          <a href="#awards" className="hover:text-primary transition-colors">
            <LangText en={labels.nav.awards.en} ru={labels.nav.awards.ru} />
          </a>
          <a href="#career" className="hover:text-primary transition-colors">
            <LangText en={labels.nav.career.en} ru={labels.nav.career.ru} />
          </a>
          <a href="#repertoire" className="hover:text-primary transition-colors">
            <LangText en={labels.nav.repertoire.en} ru={labels.nav.repertoire.ru} />
          </a>
          <a href="#gallery" className="hover:text-primary transition-colors">
            <LangText en={labels.nav.gallery.en} ru={labels.nav.gallery.ru} />
          </a>
          <a href="#videos" className="hover:text-primary transition-colors">
            <LangText en={labels.nav.videos.en} ru={labels.nav.videos.ru} />
          </a>
          <a href="#contact" className="hover:text-primary transition-colors">
            <LangText en={labels.nav.contact.en} ru={labels.nav.contact.ru} />
          </a>
        </div>
        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">
                  <LangText en={labels.menu.en} ru={labels.menu.ru} />
                </span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader className="text-left mb-6">
                <SheetTitle className="font-serif text-2xl">
                  <LangText en={labels.name.en} ru={labels.name.ru} />
                </SheetTitle>
                <SheetDescription>
                  <LangText en={labels.profession.en} ru={labels.profession.ru} />
                </SheetDescription>
              </SheetHeader>
              <div className="flex flex-col space-y-4 font-serif text-lg">
                <a
                  href="#biography"
                  className="hover:text-primary transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <LangText en={labels.nav.biography.en} ru={labels.nav.biography.ru} />
                </a>
                <a
                  href="#awards"
                  className="hover:text-primary transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <LangText en={labels.nav.awards.en} ru={labels.nav.awards.ru} />
                </a>
                <a
                  href="#career"
                  className="hover:text-primary transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <LangText en={labels.nav.career.en} ru={labels.nav.career.ru} />
                </a>
                <a
                  href="#repertoire"
                  className="hover:text-primary transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <LangText en={labels.nav.repertoire.en} ru={labels.nav.repertoire.ru} />
                </a>
                <a
                  href="#gallery"
                  className="hover:text-primary transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <LangText en={labels.nav.gallery.en} ru={labels.nav.gallery.ru} />
                </a>
                <a
                  href="#videos"
                  className="hover:text-primary transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <LangText en={labels.nav.videos.en} ru={labels.nav.videos.ru} />
                </a>
                <a
                  href="#contact"
                  className="hover:text-primary transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <LangText en={labels.nav.contact.en} ru={labels.nav.contact.ru} />
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
