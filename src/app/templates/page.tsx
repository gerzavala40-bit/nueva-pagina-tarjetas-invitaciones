"use client";

import { useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import InvitationCard from "@/components/InvitationCard";
import { templates, categories } from "@/data/templates";

export default function TemplatesPage() {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  const filteredTemplates = templates.filter((template) => {
    const matchesCategory =
      activeCategory === "Todos" || template.category === activeCategory;
    const matchesSearch =
      searchQuery === "" ||
      template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      template.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      ) ||
      template.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-20 lg:pt-24">
      {/* Hero Banner */}
      <section className="bg-secondary py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-accent text-xs tracking-[0.3em] uppercase mb-3">
            Coleccion 2025
          </p>
          <h1 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl lg:text-5xl text-primary mb-4">
            Plantillas de Invitaciones
          </h1>
          <p className="text-muted text-sm lg:text-base max-w-2xl mx-auto leading-relaxed">
            Disenos exclusivos y premium, personalizables para que se adapten a
            tu estetica y brinden a tus invitados la mejor experiencia posible.
          </p>
        </div>
      </section>

      {/* Filters & Search */}
      <section className="sticky top-16 lg:top-20 z-30 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            {/* Category Tabs */}
            <div className="flex items-center gap-1 overflow-x-auto w-full lg:w-auto pb-2 lg:pb-0 scrollbar-hide">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 text-xs tracking-wider uppercase whitespace-nowrap rounded-sm transition-all ${
                    activeCategory === category
                      ? "bg-primary text-white"
                      : "text-muted hover:text-primary hover:bg-secondary"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Search & Filter Toggle */}
            <div className="flex items-center gap-3 w-full lg:w-auto">
              <div className="relative flex-1 lg:w-64">
                <Search
                  size={16}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-muted"
                />
                <input
                  type="text"
                  placeholder="Buscar disenos..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 text-sm border border-border rounded-sm focus:outline-none focus:border-accent transition-colors"
                />
              </div>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className={`p-2.5 border rounded-sm transition-colors ${
                  showFilters
                    ? "border-accent text-accent bg-accent/5"
                    : "border-border text-muted hover:text-primary"
                }`}
              >
                <SlidersHorizontal size={16} />
              </button>
            </div>
          </div>

          {/* Extended Filters */}
          {showFilters && (
            <div className="mt-4 pt-4 border-t border-border animate-fade-in">
              <div className="flex flex-wrap gap-2">
                <span className="text-xs text-muted mr-2 self-center">
                  Estilos:
                </span>
                {[
                  "Romantico",
                  "Moderno",
                  "Clasico",
                  "Artistico",
                  "Natural",
                  "Lujo",
                ].map((style) => (
                  <button
                    key={style}
                    className="px-3 py-1.5 text-xs border border-border rounded-full text-muted hover:border-accent hover:text-accent transition-colors"
                  >
                    {style}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Templates Grid */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Results count */}
          <div className="flex items-center justify-between mb-8">
            <p className="text-muted text-sm">
              {filteredTemplates.length} diseno
              {filteredTemplates.length !== 1 ? "s" : ""} encontrado
              {filteredTemplates.length !== 1 ? "s" : ""}
            </p>
            <select className="text-sm text-muted border border-border rounded-sm px-3 py-1.5 focus:outline-none focus:border-accent">
              <option>Mas populares</option>
              <option>Mas recientes</option>
              <option>Nombre A-Z</option>
            </select>
          </div>

          {/* Grid */}
          {filteredTemplates.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTemplates.map((template) => (
                <InvitationCard key={template.id} template={template} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="font-[family-name:var(--font-playfair)] text-xl text-primary mb-2">
                No se encontraron disenos
              </p>
              <p className="text-muted text-sm">
                Intenta con otra categoria o termino de busqueda.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-secondary py-16 lg:py-20 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl lg:text-3xl text-primary mb-4">
            No encuentras lo que buscas?
          </h2>
          <p className="text-muted text-sm mb-8 leading-relaxed">
            Nuestro equipo de disenadores puede crear una invitacion
            personalizada exclusiva para ti. Contactanos y hagamos realidad tu
            vision.
          </p>
          <button className="bg-primary text-white px-8 py-3 text-sm tracking-wider uppercase hover:bg-primary/90 transition-colors rounded-sm">
            Solicitar Diseno Personalizado
          </button>
        </div>
      </section>
    </div>
  );
}
