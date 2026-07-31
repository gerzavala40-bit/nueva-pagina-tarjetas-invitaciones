import { CheckCircle2, X, Star, Sparkles, Crown } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Gratuito",
    subtitle: "Para explorar",
    price: "0",
    period: "",
    description: "Explora y personaliza disenos sin compromiso.",
    icon: <Sparkles size={20} />,
    features: [
      { text: "Acceso a todos los disenos", included: true },
      { text: "Editor de personalizacion", included: true },
      { text: "Vista previa completa", included: true },
      { text: "1 invitacion de prueba", included: true },
      { text: "Publicar invitacion", included: false },
      { text: "RSVP y gestion de invitados", included: false },
      { text: "Dominio personalizado", included: false },
      { text: "Envio masivo", included: false },
      { text: "Soporte prioritario", included: false },
    ],
    cta: "Comenzar Gratis",
    highlighted: false,
  },
  {
    name: "Premium",
    subtitle: "Mas popular",
    price: "29",
    period: "/mes",
    description: "Todo lo que necesitas para tu boda perfecta.",
    icon: <Star size={20} />,
    features: [
      { text: "Acceso a todos los disenos", included: true },
      { text: "Editor de personalizacion completo", included: true },
      { text: "Publicar invitacion ilimitada", included: true },
      { text: "Sistema RSVP completo", included: true },
      { text: "Gestion de hasta 300 invitados", included: true },
      { text: "Dominio personalizado incluido", included: true },
      { text: "Envio por email y WhatsApp", included: true },
      { text: "Notificaciones en tiempo real", included: true },
      { text: "Soporte prioritario", included: false },
    ],
    cta: "Elegir Premium",
    highlighted: true,
  },
  {
    name: "Exclusive",
    subtitle: "Sin limites",
    price: "199",
    period: "/ano",
    description: "La experiencia completa con ahorro del 40%.",
    icon: <Crown size={20} />,
    features: [
      { text: "Todo lo de Premium incluido", included: true },
      { text: "Invitados ilimitados", included: true },
      { text: "Sitio web del evento coordinado", included: true },
      { text: "Suite completa (Save the Date, Menu)", included: true },
      { text: "Descarga para impresion en alta calidad", included: true },
      { text: "Dominio premium personalizado", included: true },
      { text: "Plantilla exclusiva personalizable", included: true },
      { text: "Soporte prioritario 24/7", included: true },
      { text: "Sin marca de agua ni branding", included: true },
    ],
    cta: "Elegir Exclusive",
    highlighted: false,
  },
];

export default function PricingPage() {
  return (
    <div className="pt-20 lg:pt-24">
      {/* Hero */}
      <section className="bg-secondary py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-accent text-xs tracking-[0.3em] uppercase mb-3">
            Precios Transparentes
          </p>
          <h1 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl lg:text-5xl text-primary mb-4">
            Planes y Precios
          </h1>
          <p className="text-muted text-sm lg:text-base max-w-2xl mx-auto leading-relaxed">
            Sin periodos de prueba limitados ni costos ocultos. Explora y disena
            gratis, paga solo cuando estes lista para publicar.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 lg:py-24 -mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-xl overflow-hidden ${
                  plan.highlighted
                    ? "bg-white border-2 border-accent shadow-2xl scale-[1.02] lg:scale-105"
                    : "bg-white border border-border shadow-lg"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute top-0 left-0 right-0 bg-accent text-white text-center py-2 text-[10px] tracking-[0.3em] uppercase">
                    Mas Popular
                  </div>
                )}

                <div className={`p-8 ${plan.highlighted ? "pt-14" : ""}`}>
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`p-2 rounded-lg ${
                        plan.highlighted
                          ? "bg-accent/10 text-accent"
                          : "bg-secondary text-muted"
                      }`}
                    >
                      {plan.icon}
                    </div>
                    <div>
                      <h3 className="font-[family-name:var(--font-playfair)] text-lg text-primary">
                        {plan.name}
                      </h3>
                      <p className="text-[10px] text-muted tracking-wider uppercase">
                        {plan.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mb-4">
                    <div className="flex items-baseline gap-1">
                      {plan.price !== "0" && (
                        <span className="text-muted text-lg">$</span>
                      )}
                      <span className="font-[family-name:var(--font-playfair)] text-4xl text-primary">
                        {plan.price === "0" ? "Gratis" : plan.price}
                      </span>
                      {plan.period && (
                        <span className="text-muted text-sm">{plan.period}</span>
                      )}
                    </div>
                    <p className="text-muted text-xs mt-1">
                      {plan.description}
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="border-t border-border my-6"></div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature.text} className="flex items-start gap-2.5">
                        {feature.included ? (
                          <CheckCircle2
                            size={14}
                            className="text-accent flex-shrink-0 mt-0.5"
                          />
                        ) : (
                          <X
                            size={14}
                            className="text-muted/30 flex-shrink-0 mt-0.5"
                          />
                        )}
                        <span
                          className={`text-xs ${
                            feature.included ? "text-muted" : "text-muted/40"
                          }`}
                        >
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <button
                    className={`w-full py-3.5 text-sm tracking-wider uppercase rounded-sm transition-colors ${
                      plan.highlighted
                        ? "bg-accent text-white hover:bg-accent-dark"
                        : "bg-primary text-white hover:bg-primary/90"
                    }`}
                  >
                    {plan.cta}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl lg:text-3xl text-primary mb-3">
              Preguntas Frecuentes
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Puedo probar antes de pagar?",
                a: "Si! Puedes explorar todos los disenos, personalizar tu invitacion y ver como quedaria sin ningun costo. Solo pagas cuando decidas publicarla y compartirla con tus invitados.",
              },
              {
                q: "Que incluye el dominio personalizado?",
                a: "Con los planes de pago, obtienes un dominio unico como ana-y-pedro.eleganceinvites.com para compartir facilmente con tus invitados.",
              },
              {
                q: "Puedo cambiar de plan?",
                a: "Absolutamente. Puedes actualizar tu plan en cualquier momento. Si cambias del plan mensual al anual, te haremos un credito proporcional.",
              },
              {
                q: "Que pasa cuando termina mi suscripcion?",
                a: "Tu invitacion seguira activa hasta el final de tu periodo pagado. Puedes renovar en cualquier momento. Tus datos y confirmaciones siempre se guardan.",
              },
              {
                q: "Ofrecen reembolsos?",
                a: "Si no estas satisfecha dentro de los primeros 14 dias de tu suscripcion, te devolvemos el 100% de tu dinero sin preguntas.",
              },
              {
                q: "Puedo imprimir mis invitaciones?",
                a: "Si! Con el plan Exclusive puedes descargar tus invitaciones en alta resolucion para impresion. Tambien ofrecemos servicio de impresion premium con envio a domicilio.",
              },
            ].map((faq, i) => (
              <details
                key={i}
                className="bg-white border border-border rounded-lg group"
              >
                <summary className="px-6 py-4 cursor-pointer text-sm font-medium text-primary flex items-center justify-between hover:text-accent transition-colors">
                  {faq.q}
                  <span className="text-accent text-lg ml-4 group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <div className="px-6 pb-4">
                  <p className="text-muted text-xs leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 lg:py-20 bg-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl lg:text-3xl text-primary mb-4">
            Lista para comenzar?
          </h2>
          <p className="text-muted text-sm mb-8">
            Crea tu invitacion perfecta hoy. Sin compromiso, sin costos ocultos.
          </p>
          <Link
            href="/templates"
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 text-sm tracking-wider uppercase hover:bg-primary/90 transition-colors rounded-sm"
          >
            Explorar Disenos Gratis
          </Link>
        </div>
      </section>
    </div>
  );
}
