import { useReveal } from "@/hooks/use-reveal"
import { MagneticButton } from "@/components/magnetic-button"
import { useState, type FormEvent } from "react"
import Icon from "@/components/ui/icon"

const needs = [
  {
    icon: "Users",
    title: "Волонтёры",
    description: "Ищем людей, готовых помогать в сборке протезов, логистике и работе с подопечными",
  },
  {
    icon: "Stethoscope",
    title: "Специалисты",
    description: "Нужны ортопеды, биомеханики, инженеры и нейробиологи для совместных исследований",
  },
  {
    icon: "Cpu",
    title: "Оборудование",
    description: "Принимаем в дар или ищем партнёров для предоставления 3D-принтеров, микроэлектроники и лабораторного оснащения",
  },
  {
    icon: "Banknote",
    title: "Финансирование",
    description: "Гранты, целевые пожертвования и партнёрские программы для развития наших разработок",
  },
]

export function NeedsSection() {
  const { ref, isVisible } = useReveal(0.3)
  const [formData, setFormData] = useState({ name: "", contact: "", help: "" })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!formData.name || !formData.contact) return
    await new Promise((r) => setTimeout(r, 1000))
    setSubmitted(true)
    setFormData({ name: "", contact: "", help: "" })
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-6 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`mb-8 text-center transition-all duration-700 md:mb-12 ${
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
          }`}
        >
          <h2 className="mb-2 font-sans text-3xl font-light tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Мы нуждаемся
          </h2>
          <p className="font-mono text-sm text-foreground/60 md:text-base">/ Как вы можете помочь</p>
        </div>

        <div className="grid gap-6 md:grid-cols-[1fr_1fr_1.1fr] md:gap-8 lg:gap-12">
          {/* Список нужд */}
          <div className="md:col-span-1">
            <div className="space-y-5">
              {needs.map((item, i) => (
                <div
                  key={i}
                  className={`group flex items-start gap-3 transition-all duration-700 ${
                    isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
                  }`}
                  style={{ transitionDelay: `${i * 120}ms` }}
                >
                  <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-foreground/20 bg-foreground/10">
                    <Icon name={item.icon} size={14} className="text-foreground/70" />
                  </div>
                  <div>
                    <p className="mb-0.5 font-sans text-sm font-medium text-foreground">{item.title}</p>
                    <p className="text-xs leading-relaxed text-foreground/60">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Форма помощи */}
          <div
            className={`md:col-span-1 transition-all duration-700 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            <p className="mb-4 font-mono text-xs text-foreground/50 uppercase tracking-widest">Хочу помочь</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="mb-1 block font-mono text-xs text-foreground/60">Имя</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full border-b border-foreground/30 bg-transparent py-1.5 text-sm text-foreground placeholder:text-foreground/40 focus:border-foreground/50 focus:outline-none"
                  placeholder="Ваше имя"
                />
              </div>
              <div>
                <label className="mb-1 block font-mono text-xs text-foreground/60">Telegram / Email</label>
                <input
                  type="text"
                  value={formData.contact}
                  onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                  required
                  className="w-full border-b border-foreground/30 bg-transparent py-1.5 text-sm text-foreground placeholder:text-foreground/40 focus:border-foreground/50 focus:outline-none"
                  placeholder="Как с вами связаться"
                />
              </div>
              <div>
                <label className="mb-1 block font-mono text-xs text-foreground/60">Чем могу помочь</label>
                <textarea
                  rows={2}
                  value={formData.help}
                  onChange={(e) => setFormData({ ...formData, help: e.target.value })}
                  className="w-full border-b border-foreground/30 bg-transparent py-1.5 text-sm text-foreground placeholder:text-foreground/40 focus:border-foreground/50 focus:outline-none"
                  placeholder="Опишите коротко..."
                />
              </div>
              <MagneticButton variant="primary" size="sm" className="w-full">
                Откликнуться
              </MagneticButton>
              {submitted && (
                <p className="text-center font-mono text-xs text-foreground/70">Спасибо! Мы свяжемся с вами.</p>
              )}
            </form>
          </div>

          {/* Донаты */}
          <div
            className={`flex flex-col justify-between border border-foreground/10 p-5 rounded-lg bg-foreground/5 transition-all duration-700 md:col-span-1 ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0"
            }`}
            style={{ transitionDelay: "450ms" }}
          >
            <div>
              <p className="mb-1 font-mono text-xs text-foreground/50 uppercase tracking-widest">Поддержать</p>
              <h3 className="mb-3 font-sans text-2xl font-light text-foreground md:text-3xl">
                Каждый рубль — это шаг к новой жизни
              </h3>
              <p className="text-sm leading-relaxed text-foreground/70">
                Ваше пожертвование идёт напрямую на создание протезов и исследования нейро-интерфейсов для людей, получивших увечья.
              </p>
            </div>
            <div className="mt-6 space-y-3">
              <div className="flex flex-wrap gap-2">
                {["500 ₽", "1 000 ₽", "5 000 ₽", "10 000 ₽"].map((amount) => (
                  <button
                    key={amount}
                    className="rounded-full border border-foreground/20 px-3 py-1 font-mono text-xs text-foreground/70 transition-all hover:border-foreground/50 hover:text-foreground"
                  >
                    {amount}
                  </button>
                ))}
              </div>
              <MagneticButton variant="secondary" size="sm" className="w-full">
                Пожертвовать
              </MagneticButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}