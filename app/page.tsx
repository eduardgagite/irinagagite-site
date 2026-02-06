import Image from "next/image"
import { Award, Mail, MessageCircle, Music, Phone, Send, Youtube } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { LangText } from "@/components/lang-text"
import SiteNav from "@/components/site-nav"
import Gallery from "@/components/gallery"
import ScrollToTop from "@/components/scroll-to-top"
import { content, galleryImages, performanceVideos } from "@/lib/content"

const en = content.en
const ru = content.ru

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <SiteNav
        labels={{
          name: { en: en.name, ru: ru.name },
          profession: { en: en.profession, ru: ru.profession },
          skipToContent: { en: en.ui.skipToContent, ru: ru.ui.skipToContent },
          menu: { en: en.ui.menu, ru: ru.ui.menu },
          nav: {
            biography: { en: en.nav.biography, ru: ru.nav.biography },
            awards: { en: en.nav.awards, ru: ru.nav.awards },
            career: { en: en.nav.career, ru: ru.nav.career },
            repertoire: { en: en.nav.repertoire, ru: ru.nav.repertoire },
            gallery: { en: en.nav.gallery, ru: ru.nav.gallery },
            videos: { en: en.nav.videos, ru: ru.nav.videos },
            contact: { en: en.nav.contact, ru: ru.nav.contact },
          },
        }}
      />

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

        <div className="container relative z-10 text-center px-4 md:px-6">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-4">
            <LangText en={en.name} ru={ru.name} />
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-serif italic mb-8">
            <LangText en={en.profession} ru={ru.profession} />
          </p>
          <Button asChild size="lg" className="font-serif">
            <a href="#contact">
              <LangText en={en.bookNow} ru={ru.bookNow} />
            </a>
          </Button>
        </div>
      </section>

      {/* Biography Section */}
      <section id="biography" className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              <LangText en={en.biography.title} ru={ru.biography.title} />
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
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
            </div>

            <div className="space-y-6">
              {en.biography.content.map((paragraph, index) => (
                <p key={`${index}-${paragraph.slice(0, 12)}`} className="text-slate-700 leading-relaxed text-lg">
                  <LangText en={paragraph} ru={ru.biography.content[index]} />
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section id="awards" className="py-16 bg-slate-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              <LangText en={en.awards.title} ru={ru.awards.title} />
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8" />
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid gap-4">
              {en.awards.items.map((item, index) => (
                <div key={`${index}-${item.slice(0, 10)}`} className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                  <Award className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-slate-700">
                    <LangText en={item} ru={ru.awards.items[index]} />
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Career Section */}
      <section id="career" className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              <LangText en={en.career.title} ru={ru.career.title} />
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8" />
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {en.career.paragraphs.map((paragraph, index) => (
              <p key={`${index}-${paragraph.slice(0, 12)}`} className="text-slate-700 leading-relaxed">
                <LangText en={paragraph} ru={ru.career.paragraphs[index]} />
              </p>
            ))}
            <div className="text-center pt-8">
              <Button asChild size="lg" className="font-serif">
                <a href="#contact">
                  <LangText en={en.bookNow} ru={ru.bookNow} />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Repertoire Section */}
      <section id="repertoire" className="py-16 bg-slate-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              <LangText en={en.repertoire.title} ru={ru.repertoire.title} />
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8" />
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            {en.repertoire.composers.map((composer, index) => {
              const ruComposer = ru.repertoire.composers[index]
              return (
                <Card key={`${index}-${composer.name}`} className="overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Music className="h-5 w-5 text-primary" />
                      <h3 className="text-xl font-serif font-semibold">
                        <LangText en={composer.name} ru={ruComposer.name} />
                      </h3>
                    </div>
                    <ul className="space-y-2">
                      {composer.roles.map((role, roleIndex) => (
                        <li key={`${roleIndex}-${role}`} className="text-slate-700">
                          • <LangText en={role} ru={ruComposer.roles[roleIndex]} />
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              <LangText en={en.gallery.title} ru={ru.gallery.title} />
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8" />
            <p className="text-slate-700">
              <LangText en={en.gallery.description} ru={ru.gallery.description} />
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <Gallery
              images={galleryImages}
              labels={{
                viewFull: { en: en.gallery.viewFull, ru: ru.gallery.viewFull },
                close: { en: en.gallery.close, ru: ru.gallery.close },
                prev: { en: en.gallery.prev, ru: ru.gallery.prev },
                next: { en: en.gallery.next, ru: ru.gallery.next },
              }}
            />
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section id="videos" className="py-16 bg-slate-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              <LangText en={en.videos.title} ru={ru.videos.title} />
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8" />
            <p className="text-slate-700">
              <LangText en={en.videos.description} ru={ru.videos.description} />
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {performanceVideos.map((video) => (
                <div key={video.id} className="aspect-video rounded-lg overflow-hidden shadow-md">
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${video.id}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="origin-when-cross-origin"
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
                  <LangText en={en.ui.viewMoreYoutube} ru={ru.ui.viewMoreYoutube} />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-slate-900 text-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              <LangText en={en.contact.title} ru={ru.contact.title} />
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8" />
            <p className="text-slate-300">
              <LangText en={en.contact.description} ru={ru.contact.description} />
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex flex-col items-center gap-2 text-center">
                <Mail className="w-6 h-6 text-primary mb-1" />
                <h4 className="font-medium">
                  <LangText en={en.contact.email} ru={ru.contact.email} />
                </h4>
                <p className="text-slate-300">irina.blago@bk.ru</p>
              </div>

              <div className="flex flex-col items-center gap-2 text-center">
                <Phone className="w-6 h-6 text-primary mb-1" />
                <h4 className="font-medium">
                  <LangText en={en.contact.phone} ru={ru.contact.phone} />
                </h4>
                <p className="text-slate-300">+7 963 378 87 06</p>
              </div>

              <div className="pt-6">
                <h4 className="font-medium mb-6 text-center">
                  <LangText en={en.ui.connect} ru={ru.ui.connect} />
                </h4>
                <div className="flex justify-center gap-6">
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="rounded-full h-14 w-14 p-0 border-primary hover:bg-primary/10"
                  >
                    <a href="https://api.whatsapp.com/send?phone=79633788706" target="_blank" rel="noopener noreferrer">
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
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400">
        <div className="border-t border-white/10">
          <div className="container px-4 md:px-6 py-6">
            <div className="flex items-center justify-between gap-6 text-sm">
              <p>
                © 2026 Irina Gagite. <LangText en={en.footer.rights} ru={ru.footer.rights} />
              </p>
              <a
                href="https://alania-go.ru"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-slate-400 hover:text-white transition-colors"
              >
                <span className="text-xs uppercase tracking-[0.2em]">
                  <LangText en={en.footer.createdBy} ru={ru.footer.createdBy} />
                </span>
                <Image src="/logo-alaniago.png" alt="Alania GO" width={32} height={32} className="h-8 w-8 object-contain" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      <ScrollToTop label={{ en: en.ui.scrollToTop, ru: ru.ui.scrollToTop }} />
    </main>
  )
}
