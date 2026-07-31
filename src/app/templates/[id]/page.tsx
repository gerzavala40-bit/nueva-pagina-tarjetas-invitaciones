"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Heart, Share2, Download, Palette, Type, Image, CheckCircle2 } from "lucide-react";
import { templates } from "@/data/templates";
import InvitationDesign from "@/components/InvitationDesign";

export default function TemplateDetailPage() {
  const params = useParams();
  const template = templates.find((t) => t.id === params.id);

  if (!template) {
    return (
      <div className="pt-32 text-center min-h-screen">
        <h1 className="font-[family-name:var(--font-playfair)] text-2xl text-primary">
          Diseno no encontrado
        </h1>
        <Link href="/templates" className="text-accent text-sm mt-4 inline-block">
          Volver a plantillas
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-20 lg:pt-24 min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Link
          href="/templates"
          className="inline-flex items-center gap-2 text-muted text-sm hover:text-primary transition-colors"
        >
          <ArrowLeft size={16} />
          Volver a plantillas
        </Link>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left - Preview */}
          <div className="space-y-6">
            {/* Main Preview */}
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden border border-border shadow-xl">
              <InvitationDesign template={template} showFull />
            </div>

            {/* Thumbnail variations */}
            <div className="grid grid-cols-3 gap-3">
              <div className="aspect-[3/4] rounded-md overflow-hidden border border-border cursor-pointer ring-2 ring-accent">
                <InvitationDesign template={template} />
              </div>
              <div className="aspect-[3/4] rounded-md overflow-hidden border border-border cursor-pointer hover:border-accent transition-colors opacity-70 flex items-center justify-center bg-secondary">
                <div className="text-center p-2">
                  <Image size={20} className="mx-auto text-muted mb-1" />
                  <p className="text-[9px] text-muted">Vista RSVP</p>
                </div>
              </div>
              <div className="aspect-[3/4] rounded-md overflow-hidden border border-border cursor-pointer hover:border-accent transition-colors opacity-70 flex items-center justify-center bg-secondary">
                <div className="text-center p-2">
                  <Type size={20} className="mx-auto text-muted mb-1" />
                  <p className="text-[9px] text-muted">Vista Movil</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Details & Customization */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="space-y-8">
              {/* Header */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] tracking-wider uppercase text-accent bg-accent/10 px-2 py-1 rounded-sm">
                    {template.category}
                  </span>
                  {template.popular && (
                    <span className="text-[10px] tracking-wider uppercase text-white bg-accent px-2 py-1 rounded-sm">
                      Popular
                    </span>
                  )}
                  {template.new && (
                    <span className="text-[10px] tracking-wider uppercase text-white bg-primary px-2 py-1 rounded-sm">
                      Nuevo
                    </span>
                  )}
                </div>
                <h1 className="font-[family-name:var(--font-playfair)] text-3xl lg:text-4xl text-primary mb-3">
                  {template.name}
                </h1>
                <p className="text-muted text-sm leading-relaxed">
                  {template.description}
                </p>
              </div>

              {/* Color Palette */}
              <div>
                <h3 className="text-xs tracking-wider uppercase text-muted mb-3">
                  Paleta de Colores
                </h3>
                <div className="flex items-center gap-2">
                  {Object.entries(template.colors).map(([key, color]) => (
                    <div key={key} className="group relative">
                      <div
                        className="w-10 h-10 rounded-full border-2 border-white shadow-md cursor-pointer hover:scale-110 transition-transform"
                        style={{ backgroundColor: color }}
                      />
                      <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[9px] text-muted opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        {key}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div>
                <h3 className="text-xs tracking-wider uppercase text-muted mb-3">
                  Etiquetas
                </h3>
                <div className="flex flex-wrap gap-2">
                  {template.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs text-muted bg-secondary rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div>
                <h3 className="text-xs tracking-wider uppercase text-muted mb-3">
                  Incluido con este diseno
                </h3>
                <ul className="space-y-2.5">
                  {[
                    "Invitacion digital personalizable",
                    "Formulario de RSVP integrado",
                    "Compatible con moviles y tablets",
                    "Invitaciones digitales ilimitadas",
                    "Notificaciones de confirmacion",
                    "Opcion de impresion disponible",
                  ].map((feature) => (
                    <li key={feature} className="flex items-center gap-2.5">
                      <CheckCircle2 size={14} className="text-accent flex-shrink-0" />
                      <span className="text-sm text-muted">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Actions */}
              <div className="space-y-3 pt-4">
                <button className="w-full bg-primary text-white py-4 text-sm tracking-wider uppercase hover:bg-primary/90 transition-colors rounded-sm flex items-center justify-center gap-2">
                  <Palette size={16} />
                  Personalizar Este Diseno
                </button>
                <div className="flex gap-3">
                  <button className="flex-1 border border-border py-3 text-sm text-muted hover:text-primary hover:border-primary transition-colors rounded-sm flex items-center justify-center gap-2">
                    <Heart size={16} />
                    Guardar
                  </button>
                  <button className="flex-1 border border-border py-3 text-sm text-muted hover:text-primary hover:border-primary transition-colors rounded-sm flex items-center justify-center gap-2">
                    <Share2 size={16} />
                    Compartir
                  </button>
                  <button className="flex-1 border border-border py-3 text-sm text-muted hover:text-primary hover:border-primary transition-colors rounded-sm flex items-center justify-center gap-2">
                    <Download size={16} />
                    Muestra
                  </button>
                </div>
              </div>

              {/* Info note */}
              <div className="bg-secondary rounded-lg p-4">
                <p className="text-xs text-muted leading-relaxed">
                  <strong className="text-primary">Prueba gratis:</strong> Explora y personaliza
                  cualquier diseno sin compromiso. Solo pagas cuando estes lista
                  para publicar tu invitacion.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Related Templates */}
        <div className="mt-20 pt-12 border-t border-border">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl text-primary mb-8 text-center">
            Disenos similares
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {templates
              .filter((t) => t.id !== template.id)
              .slice(0, 3)
              .map((t) => (
                <Link key={t.id} href={`/templates/${t.id}`} className="group block">
                  <div className="relative overflow-hidden rounded-lg card-hover bg-white border border-border">
                    <div className="relative aspect-[3/4] overflow-hidden">
                      <InvitationDesign template={t} />
                      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/30 transition-all duration-300"></div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-[family-name:var(--font-playfair)] text-sm text-primary group-hover:text-accent transition-colors">
                        {t.name}
                      </h3>
                      <p className="text-xs text-muted mt-1">{t.category}</p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
