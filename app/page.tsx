"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  Menu,
  ChevronUp,
  Mail,
  Phone,
  Award,
  Music,
  MessageCircle,
  Send,
  Youtube,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import useEmblaCarousel from "embla-carousel-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import LanguageContext from "@/components/language-context"
import LanguageSwitcher from "@/components/language-switcher"

// Content in both languages
const content = {
  en: {
    name: "Irina Gagite",
    profession: "Opera Singer",
    nav: {
      biography: "Biography",
      awards: "Awards",
      career: "Career",
      repertoire: "Repertoire",
      gallery: "Gallery",
      videos: "Videos",
      contact: "Contact",
    },
    biography: {
      title: "Biography",
      content: [
        "Irina Gagite was born in Magadan, in the Russian Far East. Her musical journey began at an early age, showing exceptional talent that would later define her career.",

        "She completed her initial musical education at a specialized music school with a focus on choral conducting, where she developed a strong foundation in musical theory and performance. Seeking to further refine her extraordinary vocal abilities, Irina continued her professional education at the prestigious St. Petersburg State Conservatory named after N.A. Rimsky-Korsakov, studying opera vocal under the guidance of renowned Professor T.D. Novichenko.",

        "During her conservatory years, Irina's remarkable talent quickly distinguished her among her peers, leading to her participation in numerous vocal competitions where she consistently earned recognition and accolades.",

        "Her exceptional vocal range, technical precision, and emotional expressiveness became the hallmarks of her performance style, qualities that would later captivate audiences across Europe and beyond. Even before completing her formal education, Irina had already begun to establish herself as a promising new voice in the opera world.",
      ],
    },
    awards: {
      title: "Awards & Achievements",
      items: [
        "June 1995 - Gartow Stiftung Award",
        "October 1995 - Laureate of the 7th International Mario del Monaco Vocalists Competition (Italy)",
        "1996 - Laureate of the II International Competition of Young Opera Singers named after N.K. Pechkovsky (St. Petersburg)",
        "April 1996 - Laureate of the XXI International Competition of Young Opera Vocalists named after N.A. Rimsky-Korsakov (St. Petersburg)",
        '1997 - Laureate of the I All-Russian Television Competition of Irina Arkhipova "Grand Prix Moscow"; participated in the music program "Musical Ring"',
        'Laureate of the I Prize of the I International Competition of Young Musicians and holder of a gold medal "To the 125th anniversary of S.L. Diaghilev and the 150th anniversary of the Diaghilev House"',
        '2000 - "Golden Soffit" award for the best role of Lucia ("Lucia di Lammermoor") and Donna Anna ("Don Giovanni")',
      ],
    },
    career: {
      title: "Career",
      paragraphs: [
        'In October 1996, Irina debuted at the Mariinsky Theater in the role of the Queen of the Night (Mozart\'s "The Magic Flute"). From October 1996 to January 2002, she worked as a soloist at the Mariinsky Theater, performing roles such as: Susanna ("The Marriage of Figaro"), Donna Anna ("Don Giovanni", Baden-Baden), Amina ("La Sonnambula"), Lucia ("Lucia di Lammermoor"), Violetta ("La Traviata", Baden-Baden), Lyudmila ("Ruslan and Lyudmila"), Ninetta ("The Love for Three Oranges"), Marfa ("The Tsar\'s Bride"), Volkhova ("Sadko"), Nightingale ("The Nightingale"), Mimi ("La Bohème"), Liu ("Turandot"), Elisabeth ("Don Carlos", Covent Garden), Leonora ("La forza del destino") and others.',
        'She toured with the Mariinsky Theater throughout America and Europe, participating in many international festivals. In 2001, she was nominated for the "Golden Mask" award for the role of Donna Anna ("Don Giovanni").',
        'In 2002, she completed an internship at La Scala Theater, where she performed the role of Leonora in Verdi\'s opera "Oberto".',
        'From 2004 to 2010, she performed leading roles: Lisa ("The Queen of Spades"), Aida ("Aida"), Abigaille ("Nabucco"), Leonora ("Il Trovatore"), Norma ("Norma"), Lucia ("Lucia di Lammermoor") in Holland.',
        "She has taken masterclasses with masters such as Hefliger (Zurich, 1995), Leyla Gencer (Milan, 2002), Renata Scotto (Rome, 2009) and others.",
        "She has worked with directors: Johannes Schaaf, Jeanette Aster, Ian Judge, Philippe Arlo, Kerstin Maria Pöhler and others.",
        "She has worked with renowned conductors: Valery Gergiev, Justus Franz, Gianandrea Nazeda, Marco Boemi, Markus Biringer and others.",
      ],
    },
    repertoire: {
      title: "Repertoire",
      composers: [
        {
          name: "Bellini",
          roles: ['Norma ("Norma")', 'Elvira ("I Puritani")', 'Amina ("La Sonnambula")'],
        },
        {
          name: "Verdi",
          roles: [
            'Violetta ("La Traviata")',
            'Aida ("Aida")',
            'Abigaille ("Nabucco")',
            'Elisabeth ("Don Carlos")',
            'Leonora ("La forza del destino")',
            'Soprano ("Requiem")',
          ],
        },
        {
          name: "Puccini",
          roles: ['Turandot ("Turandot")'],
        },
        {
          name: "Tchaikovsky",
          roles: ['Lisa ("The Queen of Spades")'],
        },
        {
          name: "Mozart",
          roles: ['Donna Anna ("Don Giovanni")'],
        },
        {
          name: "Donizetti",
          roles: ['Lucia ("Lucia di Lammermoor")'],
        },
        {
          name: "Glinka",
          roles: ['Lyudmila ("Ruslan and Lyudmila")'],
        },
        {
          name: "Rimsky-Korsakov",
          roles: ['Volkhova ("Sadko")', 'Marfa ("The Tsar\'s Bride")'],
        },
      ],
    },
    gallery: {
      title: "Gallery",
      description: "A glimpse into Irina's performances and professional portraits",
      viewFull: "View full image",
      close: "Close",
      prev: "Previous",
      next: "Next",
    },
    videos: {
      title: "Performance Videos",
      description: "Watch Irina's captivating performances",
    },
    contact: {
      title: "Contact",
      description: "For bookings, interviews, and other inquiries",
      getInTouch: "Get in Touch",
      email: "Email",
      phone: "Phone",
    },
    footer: {
      rights: "All rights reserved.",
      createdBy: "Website by Alania GO.",
    },
    bookNow: "Contact",
  },
  ru: {
    name: "Ирина Гагитэ",
    profession: "Оперная певица",
    nav: {
      biography: "Биография",
      awards: "Награды",
      career: "Карьера",
      repertoire: "Репертуар",
      gallery: "Галерея",
      videos: "Видео",
      contact: "Контакты",
    },
    biography: {
      title: "Биография",
      content: [
        "Ирина Гагитэ родилась в Магадане, на Дальнем Востоке России. Её музыкальный путь начался в раннем возрасте, демонстрируя исключительный талант, который позже определил её карьеру.",

        "Она получила начальное музыкальное образование в специализированном музыкальном училище по специальности хоровое дирижирование, где заложила прочный фундамент в музыкальной теории и исполнительском искусстве. Стремясь дальше совершенствовать свои выдающиеся вокальные способности, Ирина продолжила профессиональное образование в престижной Санкт-Петербургской государственной консерватории им. Н. А. Римского-Корсакова, изучая оперный вокал под руководством известного профессора Т.Д. Новиченко.",

        "В годы обучения в консерватории исключительный талант Ирины быстро выделил её среди сверстников, что привело к участию в многочисленных вокальных конкурсах, где она неизменно получала признание и награды.",

        "Её необыкновенный вокальный диапазон, техническая точность и эмоциональная выразительность стали отличительными чертами её исполнительского стиля — качества, которые позже покорили публику по всей Европе и за её пределами. Ещё до завершения формального образования Ирина уже начала утверждаться как многообещающий новый голос в мире оперы.",
      ],
    },
    awards: {
      title: "Награды и достижения",
      items: [
        "Июнь 1995 года — лауреат премии Gartow Stiftung",
        "Октябрь 1995 года — лауреат 7-го Международного конкурса вокалистов им. Марио дель Монако (Италия)",
        "1996 год — лауреат II Международного конкурса молодых оперных певцов им. Н.К. Печковского (Санкт-Петербург)",
        "Апрель 1996 года — лауреат XXI Международного конкурса молодых оперных вокалистов им. Н.А. Римского-Корсакова (Санкт-Петербург)",
        "1997 год — лауреат I Всероссийского телевизионного конкурса Ирины Архиповой «Гран-при Москва», приуроченного к 850-летию столицы; участвовала в музыкальной программе «Музыкальный ринг»",
        "Лауреат I премии I Международного конкурса молодых музыкантов и обладатель именной золотой медали «К 125-летию со дня рождения С.Л. Дягилева и 150-летию Дома Дягилева»",
        "2000 год — премия «Золотые софиты» за лучшую роль Лючии («Лючия ди Ламмермур») и Донны Анны («Дон Жуан»)",
      ],
    },
    career: {
      title: "Творческая деятельность",
      paragraphs: [
        "В октябре 1996 года дебютировала в Мариинском театре в партии Царицы ночи («Волшебная флейта» Моцарта). С октября 1996 по январь 2002 года работала солисткой Мариинского театра, исполняя роли: Сюзанна («Свадьба Фигаро»), Донна Анна («Дон Жуан», Баден-Баден), Амина («Сомнамбула»), Лючия («Лючия ди Ламмермур»), Виолетта («Травиата», Баден-Баден), Людмила («Руслан и Людмила»), Нинетта («Любовь к трём апельсинам»), Марфа («Царская невеста»), Волхова («Садко»), Соловей («Соловей»), Мими («Богема»), Лиу («Турандот»), Елизавета («Дон Карлос», Ковент-Гарден), Леонора («Сила судьбы») и др.",
        "Гастролировала с Мариинским театром по Америке и Европе, участвовала во многих международных фестивалях. В 2001 году номинирована на премию «Золотая маска» за роль Донны Анны («Дон Жуан»).",
        "В 2002 году прошла стажировку в театре «Ла Скала», где исполнила партию Леоноры в опере Верди «Оберто».",
        "С 2004 по 2010 год исполняла ведущие партии: Лиза («Пиковая дама»), Аида («Аида»), Абигайль («Набукко»), Леонора («Трубадур»), Норма («Норма»), Лючия («Лючия ди Ламмермур») в Голландии.",
        "Мастер-классы проходила у таких мастеров как Хефлигер (Цюрих, 1995), Лейла Генджер (Милан, 2002), Рената Скотто (Рим, 2009) и др.",
        "Работала с режиссёрами: Йоханнес Шааф, Жанетт Астер, Ян Джадж, Филипп Арло, Керстин Мария Пёлер и др.",
        "Работала с известными дирижёрами: Валерий Гергиев, Юстус Франц, Джанандреа Назеда, Марко Боэми, Маркус Бирингер и др.",
      ],
    },
    repertoire: {
      title: "Репертуар",
      composers: [
        {
          name: "Беллини",
          roles: ["Норма («Норма»)", "Эльвира («Пуритани»)", "Амина («Сомнамбула»)"],
        },
        {
          name: "Верди",
          roles: [
            "Виолетта («Травиата»)",
            "Аида («Аида»)",
            "Абигайль («Набукко»)",
            "Елизавета («Дон Карлос»)",
            "Леонора («Сила судьбы»)",
            "сопрано («Реквием»)",
          ],
        },
        {
          name: "Пуччини",
          roles: ["Турандот («Турандот»)"],
        },
        {
          name: "Чайковский",
          roles: ["Лиза («Пиковая дама»)"],
        },
        {
          name: "Моцарт",
          roles: ["Донна Анна («Дон Жуан»)"],
        },
        {
          name: "Доницетти",
          roles: ["Лючия («Лючия ди Ламмермур»)"],
        },
        {
          name: "Глинка",
          roles: ["Людмила («Руслан и Людмила»)"],
        },
        {
          name: "Римский-Корсаков",
          roles: ["Волхова («Садко»)", "Марфа («Царская невеста»)"],
        },
      ],
    },
    gallery: {
      title: "Галерея",
      description: "Взгляд на выступления Ирины и профессиональные портреты",
      viewFull: "Просмотреть полное изображение",
      close: "Закрыть",
      prev: "Предыдущее",
      next: "Следующее",
    },
    videos: {
      title: "Видеозаписи выступлений",
      description: "Смотрите захватывающие выступления Ирины",
    },
    contact: {
      title: "Контакты",
      description: "Для бронирования, интервью и других запросов",
      getInTouch: "Связаться",
      email: "Электронная почта",
      phone: "Телефон",
    },
    footer: {
      rights: "Все права защищены.",
      createdBy: "Сайт создан командой Alania GO.",
    },
    bookNow: "Связаться",
  },
}

export default function Home() {
  const [language, setLanguage] = useState("en")
  const [showScrollButton, setShowScrollButton] = useState(false)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const t = content[language as keyof typeof content]

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  // Gallery images
  const galleryImages = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0208.JPG-xTLSptdZSWlVwaGAVUAQd4Uz25URQU.jpeg",
      alt: "Ирина Гагитэ в роли Волховы в опере 'Садко'",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0186%20%281%29.JPG-OgtW1ieqMkCrEBkpPKp8hiSiKdoYre.jpeg",
      alt: "Портрет Ирины Гагитэ в сценическом костюме",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0175.JPG-byZlmeBqw4PwoKSijM0zslAbCynNAv.jpeg",
      alt: "Ирина Гагитэ в оперном представлении",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0165.JPG-AasPt1JWHVD8vDNEkOTOGNWaKPNxvy.jpeg",
      alt: "Ирина Гагитэ с хором на сцене",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0209.JPG-E0308h27iIs4EY8k12cJKDnmk4cdX2.jpeg",
      alt: "Ирина Гагитэ в розовом платье на сцене",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0089.JPG-Otq0pJlPyua1sfIX0rjOG1poDGqF9Y.jpeg",
      alt: "Сцена из оперы с участием Ирины Гагитэ",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0147.JPG-OqOSaqZKsQnQ5IpOYWaveS39gAc5en.jpeg",
      alt: "Ирина Гагитэ в синем платье на сцене",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0204.JPG-Z9daqnEdCQWeQDW6jtAE0TcvMe8qrQ.jpeg",
      alt: "Драматическая сцена с участием Ирины Гагитэ",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0170.JPG-v405QPeIiw5fUFxCUMC6cvYdf5BO94.jpeg",
      alt: "Ирина Гагитэ в сцене с партнером",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0160.JPG-cuaZ6JH5IuqHNKDRAytWwKuMWotxcS.jpeg",
      alt: "Ирина Гагитэ в драматической сцене с мечом",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0153.JPG-a2zwN3BFlwj7lK9sUGnv6D4ji1wiot.jpeg",
      alt: "Ирина Гагитэ в зеленом бархатном платье",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0188%20%281%29.JPG-q2N3eHtEwm5Iz4I8vCntwbtmz64v9t.jpeg",
      alt: "Ирина Гагитэ с другой певицей на сцене",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0152.JPG-T5eJNhpTpHVT9nIbkjpxNY7ijQOSjw.jpeg",
      alt: "Ирина Гагитэ в зеленом платье с певицей в красном",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0203.JPG-X7cmXo0Wm4223NLJWDrOWicn99to20.jpeg",
      alt: "Ирина Гагитэ в повседневной одежде на сцене",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0155.JPG-CAF2qrkEdVjX0LPcXJFuTypUrABY94.jpeg",
      alt: "Ирина Гагитэ в костюме с доспехами в окружении танцоров",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0197.JPG-lhwEVYv4xt0CecqVTkmz0FafaDsyTS.jpeg",
      alt: "Ирина Гагитэ в костюме монахини",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0168.JPG-XZcxkV6PEHj0BJWGoQKLD9hlMAZ5p8.jpeg",
      alt: "Ирина Гагитэ в зеленом платье с партнером в доспехах",
    },
  ]

  // Performance videos
  const performanceVideos = [
    {
      id: "i56fpg9iDus",
      title: "Irina Gagite Performance 1",
    },
    {
      id: "3Lon2o-ngRU",
      title: "Irina Gagite Performance 2",
    },
    {
      id: "jtpA_0diK_Q",
      title: "Irina Gagite Performance 3",
    },
    {
      id: "3X7lKqZeaWE",
      title: "Irina Gagite Performance 4",
    },
    {
      id: "5FEvw7LSFSU",
      title: "Irina Gagite Opera Performance",
    },
    {
      id: "E76leo2ze3s",
      title: "Irina Gagite as Abigaile in Nabucco (2004)",
    },
  ]

  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: "start" })

  const onSelect = useCallback((api: any) => {
    setCanScrollPrev(api.canScrollPrev())
    setCanScrollNext(api.canScrollNext())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onSelect(emblaApi)
    emblaApi.on("select", onSelect)
    emblaApi.on("reInit", onSelect)
  }, [emblaApi, onSelect])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  // Lightbox navigation
  const openLightbox = (index: number) => {
    setCurrentImageIndex(index)
    setLightboxOpen(true)
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    document.body.style.overflow = "auto"
  }

  const goToPrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1))
  }

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1))
  }

  // Handle keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return

      if (e.key === "Escape") closeLightbox()
      if (e.key === "ArrowLeft") goToPrevImage()
      if (e.key === "ArrowRight") goToNextImage()
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [lightboxOpen])

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b">
          <div className="container flex justify-between items-center h-16 px-4 md:px-6">
            <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-[100] bg-background px-4 py-2 rounded-md shadow-md">
              Skip to content
            </a>
            <div className="text-xl font-serif font-medium">{t.name}</div>
            <div className="hidden md:flex space-x-4 font-serif">
              <a href="#biography" className="hover:text-primary transition-colors">
                {t.nav.biography}
              </a>
              <a href="#awards" className="hover:text-primary transition-colors">
                {t.nav.awards}
              </a>
              <a href="#career" className="hover:text-primary transition-colors">
                {t.nav.career}
              </a>
              <a href="#repertoire" className="hover:text-primary transition-colors">
                {t.nav.repertoire}
              </a>
              <a href="#gallery" className="hover:text-primary transition-colors">
                {t.nav.gallery}
              </a>
              <a href="#videos" className="hover:text-primary transition-colors">
                {t.nav.videos}
              </a>
              <a href="#contact" className="hover:text-primary transition-colors">
                {t.nav.contact}
              </a>
            </div>
            <div className="flex items-center gap-4">
              <LanguageSwitcher />
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon" className="md:hidden">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right">
                  <SheetHeader className="text-left mb-6">
                    <SheetTitle className="font-serif text-2xl">{t.name}</SheetTitle>
                    <SheetDescription>{t.profession}</SheetDescription>
                  </SheetHeader>
                  <div className="flex flex-col space-y-4 font-serif text-lg">
                    <a
                      href="#biography"
                      className="hover:text-primary transition-colors py-2"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t.nav.biography}
                    </a>
                    <a
                      href="#awards"
                      className="hover:text-primary transition-colors py-2"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t.nav.awards}
                    </a>
                    <a
                      href="#career"
                      className="hover:text-primary transition-colors py-2"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t.nav.career}
                    </a>
                    <a
                      href="#repertoire"
                      className="hover:text-primary transition-colors py-2"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t.nav.repertoire}
                    </a>
                    <a
                      href="#gallery"
                      className="hover:text-primary transition-colors py-2"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t.nav.gallery}
                    </a>
                    <a
                      href="#videos"
                      className="hover:text-primary transition-colors py-2"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t.nav.videos}
                    </a>
                    <a
                      href="#contact"
                      className="hover:text-primary transition-colors py-2"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t.nav.contact}
                    </a>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden pt-16" id="main-content">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0157.JPG-nGtZbDyuKniFkzrExGStdYSojkU2If.jpeg"
              alt="Irina Gagite on stage"
              fill
              className="object-cover opacity-50"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70" />
          </div>

          <motion.div
            className="container relative z-10 text-center px-4 md:px-6"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-4">{t.name}</h1>
            <p className="text-xl md:text-2xl text-white/90 font-serif italic mb-8">{t.profession}</p>
            <Button asChild size="lg" className="font-serif">
              <a href="#contact">{t.bookNow}</a>
            </Button>
          </motion.div>
        </section>

        {/* Biography Section */}
        <section id="biography" className="py-16 bg-white">
          <div className="container px-4 md:px-6">
            <motion.div
              className="max-w-3xl mx-auto text-center mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">{t.biography.title}</h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-8" />
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                className="space-y-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
              >
                <div className="relative h-[500px] rounded-lg overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0186%20%281%29.JPG-OgtW1ieqMkCrEBkpPKp8hiSiKdoYre.jpeg"
                    alt="Irina Gagite portrait"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0147.JPG-CtGsMPrdoRFJkMhRccZOT3Ku4XpobW.jpeg"
                      alt="Irina Gagite in a blue gown on stage"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                  <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0091.JPG-CxxzM2JrddiDsZ1FPdnzBVNmk8Ky2t.jpeg"
                      alt="Irina Gagite in a dramatic opera scene"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                className="space-y-6"
              >
                {Array.isArray(t.biography.content) ? (
                  t.biography.content.map((paragraph, index) => (
                    <p key={index} className="text-slate-700 leading-relaxed text-lg">
                      {paragraph}
                    </p>
                  ))
                ) : (
                  <p className="text-slate-700 leading-relaxed text-lg">{t.biography.content}</p>
                )}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Awards Section */}
        <section id="awards" className="py-16 bg-slate-50">
          <div className="container px-4 md:px-6">
            <motion.div
              className="max-w-3xl mx-auto text-center mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">{t.awards.title}</h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-8" />
            </motion.div>

            <motion.div
              className="max-w-4xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
            >
              <div className="grid gap-4">
                {t.awards.items.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                    <Award className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Career Section */}
        <section id="career" className="py-16 bg-white">
          <div className="container px-4 md:px-6">
            <motion.div
              className="max-w-3xl mx-auto text-center mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">{t.career.title}</h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-8" />
            </motion.div>

            <motion.div
              className="max-w-4xl mx-auto space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
            >
              {t.career.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-slate-700 leading-relaxed">
                  {paragraph}
                </p>
              ))}
              <div className="text-center pt-8">
                <Button asChild size="lg" className="font-serif">
                  <a href="#contact">{t.bookNow}</a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Repertoire Section */}
        <section id="repertoire" className="py-16 bg-slate-50">
          <div className="container px-4 md:px-6">
            <motion.div
              className="max-w-3xl mx-auto text-center mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">{t.repertoire.title}</h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-8" />
            </motion.div>

            <motion.div
              className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
            >
              {t.repertoire.composers.map((composer, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Music className="h-5 w-5 text-primary" />
                      <h3 className="text-xl font-serif font-semibold">{composer.name}</h3>
                    </div>
                    <ul className="space-y-2">
                      {composer.roles.map((role, roleIndex) => (
                        <li key={roleIndex} className="text-slate-700">
                          • {role}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="py-16 bg-white">
          <div className="container px-4 md:px-6">
            <motion.div
              className="max-w-3xl mx-auto text-center mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">{t.gallery.title}</h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-8" />
              <p className="text-slate-700">{t.gallery.description}</p>
            </motion.div>

            <motion.div
              className="max-w-5xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
            >
              <div className="relative">
                <div className="embla overflow-hidden" ref={emblaRef}>
                  <div className="embla__container flex">
                    {galleryImages.map((image, index) => (
                      <div key={index} className="embla__slide flex-[0_0_33.33%] min-w-0 px-2 md:px-4 relative">
                        <div
                          className="aspect-square overflow-hidden rounded-lg cursor-pointer group"
                          onClick={() => openLightbox(index)}
                        >
                          <div className="relative w-full h-full">
                            <Image
                              src={image.src || "/placeholder.svg"}
                              alt={image.alt}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-110"
                              sizes="(max-width: 768px) 33vw, 20vw"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                              <span className="text-white bg-black/50 px-3 py-1 rounded-full text-sm">
                                {t.gallery.viewFull}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {canScrollPrev && (
                  <button
                    className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-md"
                    onClick={scrollPrev}
                    aria-label={t.gallery.prev}
                  >
                    <ChevronLeft className="h-6 w-6 text-slate-700" />
                  </button>
                )}
                {canScrollNext && (
                  <button
                    className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-md"
                    onClick={scrollNext}
                    aria-label={t.gallery.next}
                  >
                    <ChevronRight className="h-6 w-6 text-slate-700" />
                  </button>
                )}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Lightbox */}
        {lightboxOpen && (
          <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center">
            <button className="absolute top-4 right-4 text-white hover:text-gray-300 z-[110]" onClick={closeLightbox}>
              <X className="h-8 w-8" />
              <span className="sr-only">{t.gallery.close}</span>
            </button>

            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-[110]"
              onClick={goToPrevImage}
            >
              <ChevronLeft className="h-10 w-10" />
              <span className="sr-only">{t.gallery.prev}</span>
            </button>

            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-[110]"
              onClick={goToNextImage}
            >
              <ChevronRight className="h-10 w-10" />
              <span className="sr-only">{t.gallery.next}</span>
            </button>

            <div className="relative w-full h-full max-w-4xl max-h-[80vh] mx-auto flex items-center justify-center">
              <Image
                src={galleryImages[currentImageIndex].src || "/placeholder.svg"}
                alt={galleryImages[currentImageIndex].alt}
                fill
                className="object-contain"
              />
            </div>
          </div>
        )}

        {/* Videos Section */}
        <section id="videos" className="py-16 bg-slate-50">
          <div className="container px-4 md:px-6">
            <motion.div
              className="max-w-3xl mx-auto text-center mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">{t.videos.title}</h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-8" />
              <p className="text-slate-700">{t.videos.description}</p>
            </motion.div>

            <motion.div
              className="max-w-5xl mx-auto space-y-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {performanceVideos.map((video) => (
                  <div key={video.id} className="aspect-video rounded-lg overflow-hidden shadow-md">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.id}`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                      className="w-full h-full"
                    ></iframe>
                  </div>
                ))}
              </div>
              <div className="text-center pt-4">
                <Button asChild variant="outline" className="font-serif">
                  <a
                    href="https://www.youtube.com/channel/UCXRWhM1pB1DpWo43lPp3aIw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    <Youtube className="h-5 w-5" />
                    {language === "en" ? "View more on YouTube" : "Смотреть больше на YouTube"}
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-slate-900 text-white">
          <div className="container px-4 md:px-6">
            <motion.div
              className="max-w-3xl mx-auto text-center mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">{t.contact.title}</h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-8" />
              <p className="text-slate-300">{t.contact.description}</p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                className="space-y-8"
              >
                <div className="flex flex-col items-center gap-2 text-center">
                  <Mail className="w-6 h-6 text-primary mb-1" />
                  <h4 className="font-medium">{t.contact.email}</h4>
                  <p className="text-slate-300">irina.blago@bk.ru</p>
                </div>

                <div className="flex flex-col items-center gap-2 text-center">
                  <Phone className="w-6 h-6 text-primary mb-1" />
                  <h4 className="font-medium">{t.contact.phone}</h4>
                  <p className="text-slate-300">+7 963 378 87 06</p>
                </div>

                <div className="pt-6">
                  <h4 className="font-medium mb-6 text-center">
                    {language === "en" ? "Connect with Irina" : "Связаться с Ириной"}
                  </h4>
                  <div className="flex justify-center gap-6">
                    <Button
                      asChild
                      size="lg"
                      variant="outline"
                      className="rounded-full h-14 w-14 p-0 border-primary hover:bg-primary/10"
                    >
                      <a
                        href="https://api.whatsapp.com/send?phone=79633788706"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageCircle className="h-6 w-6 text-primary" />
                        <span className="sr-only">WhatsApp</span>
                      </a>
                    </Button>

                    <Button
                      asChild
                      size="lg"
                      variant="outline"
                      className="rounded-full h-14 w-14 p-0 border-primary hover:bg-primary/10"
                    >
                      <a href="https://t.me/blagonira" target="_blank" rel="noopener noreferrer">
                        <Send className="h-6 w-6 text-primary" />
                        <span className="sr-only">Telegram</span>
                      </a>
                    </Button>

                    <Button
                      asChild
                      size="lg"
                      variant="outline"
                      className="rounded-full h-14 w-14 p-0 border-primary hover:bg-primary/10"
                    >
                      <a
                        href="https://www.youtube.com/channel/UCXRWhM1pB1DpWo43lPp3aIw"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Youtube className="h-6 w-6 text-primary" />
                        <span className="sr-only">YouTube</span>
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 bg-slate-950 text-slate-400 text-center text-sm">
          <div className="container px-4 md:px-6">
            <p>
              © {new Date().getFullYear()} {t.name}. {t.footer.rights}
            </p>
            <p className="mt-2">{t.footer.createdBy}</p>
          </div>
        </footer>

        {/* Scroll to top button */}
        {showScrollButton && (
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 p-3 rounded-full bg-primary text-white shadow-lg z-50"
          >
            <ChevronUp className="w-5 h-5" />
          </motion.button>
        )}
      </main>
    </LanguageContext.Provider>
  )
}

