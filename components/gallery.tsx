"use client"

import { useCallback, useEffect, useState } from "react"
import Image from "next/image"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

import { LangText, type LangTextProps } from "@/components/lang-text"

type LangPair = Pick<LangTextProps, "en" | "ru">

type GalleryImage = {
  src: string
  alt: string
}

type GalleryLabels = {
  viewFull: LangPair
  close: LangPair
  prev: LangPair
  next: LangPair
}

type GalleryProps = {
  images: GalleryImage[]
  labels: GalleryLabels
}

export default function Gallery({ images, labels }: GalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
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

    return () => {
      emblaApi.off("select", onSelect)
      emblaApi.off("reInit", onSelect)
    }
  }, [emblaApi, onSelect])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const openLightbox = useCallback((index: number) => {
    setCurrentImageIndex(index)
    setLightboxOpen(true)
  }, [])

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false)
  }, [])

  const goToPrevImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
  }, [images.length])

  const goToNextImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
  }, [images.length])

  useEffect(() => {
    if (!lightboxOpen) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [lightboxOpen])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return

      if (e.key === "Escape") closeLightbox()
      if (e.key === "ArrowLeft") goToPrevImage()
      if (e.key === "ArrowRight") goToNextImage()
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [lightboxOpen, closeLightbox, goToPrevImage, goToNextImage])

  return (
    <>
      <div className="relative">
        <div className="embla overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex">
            {images.map((image, index) => (
              <div key={image.src} className="embla__slide flex-[0_0_33.33%] min-w-0 px-2 md:px-4 relative">
                <button
                  type="button"
                  className="aspect-square w-full overflow-hidden rounded-lg cursor-pointer group text-left"
                  onClick={() => openLightbox(index)}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 33vw, 20vw"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <span className="text-white bg-black/50 px-3 py-1 rounded-full text-sm">
                        <LangText en={labels.viewFull.en} ru={labels.viewFull.ru} />
                      </span>
                    </div>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
        {canScrollPrev && (
          <button
            type="button"
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-md"
            onClick={scrollPrev}
          >
            <ChevronLeft className="h-6 w-6 text-slate-700" />
            <span className="sr-only">
              <LangText en={labels.prev.en} ru={labels.prev.ru} />
            </span>
          </button>
        )}
        {canScrollNext && (
          <button
            type="button"
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-md"
            onClick={scrollNext}
          >
            <ChevronRight className="h-6 w-6 text-slate-700" />
            <span className="sr-only">
              <LangText en={labels.next.en} ru={labels.next.ru} />
            </span>
          </button>
        )}
      </div>

      {lightboxOpen && (
        <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center">
          <button type="button" className="absolute top-4 right-4 text-white hover:text-gray-300 z-[110]" onClick={closeLightbox}>
            <X className="h-8 w-8" />
            <span className="sr-only">
              <LangText en={labels.close.en} ru={labels.close.ru} />
            </span>
          </button>

          <button
            type="button"
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-[110]"
            onClick={goToPrevImage}
          >
            <ChevronLeft className="h-10 w-10" />
            <span className="sr-only">
              <LangText en={labels.prev.en} ru={labels.prev.ru} />
            </span>
          </button>

          <button
            type="button"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-[110]"
            onClick={goToNextImage}
          >
            <ChevronRight className="h-10 w-10" />
            <span className="sr-only">
              <LangText en={labels.next.en} ru={labels.next.ru} />
            </span>
          </button>

          <div className="relative w-full h-full max-w-4xl max-h-[80vh] mx-auto flex items-center justify-center">
            <Image src={images[currentImageIndex].src} alt={images[currentImageIndex].alt} fill className="object-contain" />
          </div>
        </div>
      )}
    </>
  )
}
