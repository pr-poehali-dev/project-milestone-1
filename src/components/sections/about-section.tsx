import { MagneticButton } from "@/components/magnetic-button"
import { useReveal } from "@/hooks/use-reveal"

export function AboutSection({ scrollToSection }: { scrollToSection?: (index: number) => void }) {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-4 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-8 md:grid-cols-2 md:gap-16 lg:gap-24">
          {/* Left side - Story */}
          <div>
            <div
              className={`mb-6 transition-all duration-700 md:mb-12 ${
                isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
              }`}
            >
              <h2 className="mb-3 font-sans text-3xl font-light leading-[1.1] tracking-tight text-foreground md:mb-4 md:text-6xl lg:text-7xl">
                Технологии
                <br />
                на службе
                <br />
                <span className="text-foreground/40">человека</span>
              </h2>
            </div>

            <div
              className={`space-y-3 transition-all duration-700 md:space-y-4 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <p className="max-w-md text-sm leading-relaxed text-foreground/90 md:text-lg">
                Мы — команда инженеров, нейробиологов и разработчиков, создающих протезы и нейро-интерфейсы для людей, переживших травмы.
              </p>
              <p className="max-w-md text-sm leading-relaxed text-foreground/90 md:text-lg">
                Развиваем науку и технологии, чтобы каждый человек вернул себе свободу движения и полноту жизни.
              </p>
            </div>
          </div>

          {/* Right side - Plans */}
          <div
            className={`flex flex-col justify-center space-y-6 transition-all duration-700 ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            <p className="font-mono text-xs uppercase tracking-widest text-foreground/50">Наши планы</p>
            <div className="space-y-5">
              {[
                {
                  icon: "📡",
                  title: "Кружок радиоэлектроники",
                  desc: "Дети научатся собирать схемы, паять и понимать устройство электроники с нуля",
                },
                {
                  icon: "🤖",
                  title: "Кружок роботостроения",
                  desc: "Проектирование и сборка роботов — от простых механизмов до программируемых устройств",
                },
                {
                  icon: "🏫",
                  title: "Открытие детских центров",
                  desc: "Планируем запустить кружки в нескольких городах, чтобы дать детям доступ к технологиям будущего",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 border-l border-foreground/30 pl-4"
                  style={{ transitionDelay: `${450 + i * 150}ms` }}
                >
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <div className="mb-1 font-sans text-base font-medium text-foreground">{item.title}</div>
                    <div className="font-mono text-xs leading-relaxed text-foreground/60">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          className={`mt-8 flex flex-wrap gap-3 transition-all duration-700 md:mt-16 md:gap-4 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
          style={{ transitionDelay: "750ms" }}
        >
          <MagneticButton size="lg" variant="primary" onClick={() => scrollToSection?.(4)}>
            Связаться с нами
          </MagneticButton>
          <MagneticButton size="lg" variant="secondary" onClick={() => scrollToSection?.(1)}>
            Наши разработки
          </MagneticButton>
        </div>
      </div>
    </section>
  )
}