import Link from "next/link";
import {
  Mail,
  Users,
  Palette,
  Smartphone,
  Bell,
  Lock,
  Star,
  ArrowRight,
  Heart,
  CheckCircle2,
} from "lucide-react";
import InvitationCard from "@/components/InvitationCard";
import { templates } from "@/data/templates";

export default function Home() {
  const featuredTemplates = templates.slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-white to-secondary"></div>
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-1.5 rounded-full text-xs tracking-wider uppercase mb-6">
                <Star size={12} />
                <span>La plataforma #1 en invitaciones digitales</span>
              </div>

              <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-primary mb-6">
                Invitaciones que tus invitados{" "}
                <span className="italic text-accent">recordaran</span>
              </h1>

              <p className="text-muted text-base lg:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
                Crea invitaciones digitales elegantes y personalizables para tu
                boda. Gestiona RSVP, listas de invitados y mucho mas en un solo
                lugar.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="/templates"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 text-sm tracking-wider uppercase hover:bg-primary/90 transition-all rounded-sm group"
                >
                  Ver Disenos
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
                <Link
                  href="/features"
                  className="inline-flex items-center justify-center gap-2 border border-primary/20 text-primary px-8 py-4 text-sm tracking-wider uppercase hover:bg-primary/5 transition-all rounded-sm"
                >
                  Como Funciona
                </Link>
              </div>

              {/* Social Proof */}
              <div className="mt-10 flex items-center gap-6 justify-center lg:justify-start">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gradient-to-br from-accent/30 to-accent/60 border-2 border-white flex items-center justify-center"
                    >
                      <Heart size={10} className="text-white" />
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star
                        key={i}
                        size={12}
                        className="text-accent fill-accent"
                      />
                    ))}
                  </div>
                  <p className="text-xs text-muted mt-0.5">
                    +2,500 parejas felices
                  </p>
                </div>
              </div>
            </div>

            {/* Right - Preview Cards */}
            <div className="relative hidden lg:block">
              <div className="relative w-full aspect-[3/4] max-w-md mx-auto">
                {/* Back card */}
                <div className="absolute top-8 -left-4 w-72 h-96 bg-white rounded-lg shadow-2xl transform -rotate-6 border border-border overflow-hidden">
                  <div className="h-full bg-gradient-to-br from-rose-50 to-pink-50 p-8 flex flex-col items-center justify-center text-center">
                    <div className="w-16 h-16 rounded-full border-2 border-rose-200 flex items-center justify-center mb-4">
                      <Heart size={24} className="text-rose-400" />
                    </div>
                    <p className="font-[family-name:var(--font-playfair)] text-lg text-rose-900">
                      Maria & Carlos
                    </p>
                    <p className="text-xs text-rose-400 mt-2 tracking-wider uppercase">
                      15 de Junio, 2025
                    </p>
                  </div>
                </div>

                {/* Front card */}
                <div className="absolute top-0 left-12 w-72 h-96 bg-white rounded-lg shadow-2xl transform rotate-3 border border-border overflow-hidden z-10">
                  <div className="h-full bg-gradient-to-br from-amber-50 to-orange-50 p-8 flex flex-col items-center justify-center text-center">
                    <div className="text-xs tracking-[0.3em] uppercase text-amber-600 mb-4">
                      Nos casamos
                    </div>
                    <p className="font-[family-name:var(--font-playfair)] text-2xl text-amber-900 mb-2">
                      Ana & Pedro
                    </p>
                    <div className="w-12 h-px bg-accent my-4"></div>
                    <p className="text-xs text-amber-600 tracking-wider">
                      22 de Marzo, 2025
                    </p>
                    <p className="text-xs text-amber-500 mt-2">
                      Hacienda Los Olivos
                    </p>
                    <div className="mt-6 px-4 py-2 border border-amber-300 text-xs text-amber-700 tracking-wider uppercase">
                      Confirmar Asistencia
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-4 right-0 bg-white rounded-full shadow-lg p-3 animate-bounce z-20">
                  <Mail size={20} className="text-accent" />
                </div>
                <div className="absolute bottom-20 -right-4 bg-white rounded-full shadow-lg p-3 z-20">
                  <CheckCircle2 size={20} className="text-green-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="bg-primary py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl lg:text-3xl text-white mb-3">
              Todo lo que necesitas para tus invitaciones
            </h2>
            <p className="text-white/60 text-sm max-w-lg mx-auto">
              La forma mas facil de que todos tus invitados confirmen asistencia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Mail size={24} />,
                title: "Invitaciones Digitales",
                desc: "Envia invitaciones hermosas por email, WhatsApp o como link directo.",
              },
              {
                icon: <Users size={24} />,
                title: "Gestion de Invitados",
                desc: "Personaliza que eventos ve cada invitado y gestiona confirmaciones.",
              },
              {
                icon: <Palette size={24} />,
                title: "Disenos Exclusivos",
                desc: "Plantillas premium creadas por disenadores profesionales.",
              },
              {
                icon: <Smartphone size={24} />,
                title: "Responsive",
                desc: "Perfectas en cualquier dispositivo: movil, tablet o escritorio.",
              },
              {
                icon: <Bell size={24} />,
                title: "Notificaciones RSVP",
                desc: "Recibe alertas cuando tus invitados confirmen asistencia.",
              },
              {
                icon: <Lock size={24} />,
                title: "Privacidad Total",
                desc: "Contraseñas, lista de invitados privada y control total.",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-6 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
              >
                <div className="text-accent flex-shrink-0">{feature.icon}</div>
                <div>
                  <h3 className="text-white text-sm font-medium mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-white/50 text-xs leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Templates */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-accent text-xs tracking-[0.3em] uppercase mb-3">
              Coleccion Exclusiva
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl lg:text-4xl text-primary mb-4">
              Disenos que enamoran
            </h2>
            <p className="text-muted text-sm max-w-lg mx-auto">
              Cada plantilla es una obra de arte digital. Personalizable,
              elegante y lista para impresionar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTemplates.map((template) => (
              <InvitationCard key={template.id} template={template} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/templates"
              className="inline-flex items-center gap-2 text-primary text-sm tracking-wider uppercase hover:text-accent transition-colors group"
            >
              Ver todas las plantillas
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-accent text-xs tracking-[0.3em] uppercase mb-3">
              Simple y Elegante
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl lg:text-4xl text-primary">
              Como funciona
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                step: "01",
                title: "Elige tu diseno",
                desc: "Explora nuestra coleccion de plantillas premium y selecciona la que mejor represente tu estilo.",
              },
              {
                step: "02",
                title: "Personaliza",
                desc: "Agrega tus datos, fotos, colores y toda la informacion de tu evento. Hazla unica.",
              },
              {
                step: "03",
                title: "Envia y gestiona",
                desc: "Comparte con tus invitados y gestiona las confirmaciones en tiempo real.",
              },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent font-[family-name:var(--font-playfair)] text-lg mb-6">
                  {item.step}
                </div>
                <h3 className="font-[family-name:var(--font-playfair)] text-xl text-primary mb-3">
                  {item.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed max-w-xs mx-auto">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-accent text-xs tracking-[0.3em] uppercase mb-3">
              Testimonios
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl lg:text-4xl text-primary">
              Lo que dicen nuestras parejas
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Laura & Miguel",
                text: "Las invitaciones quedaron espectaculares. Nuestros invitados no paraban de felicitarnos por el diseno. La gestion de RSVP fue increiblemente facil.",
                rating: 5,
              },
              {
                name: "Carmen & Andres",
                text: "Poder personalizar cada detalle y que se vea tan profesional fue lo que mas nos gusto. Ademas el soporte fue excelente en todo momento.",
                rating: 5,
              },
              {
                name: "Sofia & Daniel",
                text: "Ahorramos mucho tiempo y dinero con las invitaciones digitales. El seguimiento de confirmaciones en tiempo real es una maravilla.",
                rating: 5,
              },
            ].map((testimonial, i) => (
              <div
                key={i}
                className="bg-secondary rounded-lg p-8 card-hover"
              >
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, j) => (
                    <Star
                      key={j}
                      size={14}
                      className="text-accent fill-accent"
                    />
                  ))}
                </div>
                <p className="text-muted text-sm leading-relaxed mb-6 italic">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <p className="font-[family-name:var(--font-playfair)] text-primary text-sm">
                  {testimonial.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-primary via-primary to-primary/95 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20h2V0h2v20h2V0h2v20h2V0h2v20h2V0h2v22H20v-1.5z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          }}
        ></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl lg:text-5xl text-white mb-6">
            Comienza a crear tu invitacion perfecta
          </h2>
          <p className="text-white/60 text-base lg:text-lg mb-10 max-w-2xl mx-auto">
            Sin periodos de prueba limitados. Explora, disena y personaliza.
            Solo pagas cuando estes lista para publicar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/templates"
              className="inline-flex items-center justify-center gap-2 bg-accent text-white px-8 py-4 text-sm tracking-wider uppercase hover:bg-accent-dark transition-all rounded-sm"
            >
              Explorar Disenos Gratis
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-4 text-sm tracking-wider uppercase hover:bg-white/10 transition-all rounded-sm"
            >
              Ver Planes
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
