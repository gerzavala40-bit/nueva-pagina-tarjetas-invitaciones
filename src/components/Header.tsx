"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: "/templates", label: "Plantillas" },
    { href: "/despedidas", label: "Despedidas" },
    { href: "/egresados", label: "Egresados" },
    { href: "/features", label: "Funciones" },
    { href: "/pricing", label: "Precios" },
  ];

  const isActive = (href: string) => pathname.startsWith(href);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/98 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-white/95 backdrop-blur-sm border-b border-border"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="font-[family-name:var(--font-playfair)] text-xl lg:text-2xl font-bold tracking-tight text-primary group-hover:text-accent transition-colors">
              Elegance
            </span>
            <span className="text-accent font-light text-sm tracking-[0.3em] uppercase">
              Invites
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm tracking-wide transition-colors elegant-underline ${
                  isActive(link.href)
                    ? "text-accent"
                    : "text-muted hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <button className="text-sm text-muted hover:text-primary transition-colors">
              Iniciar Sesion
            </button>
            <Link
              href="/templates"
              className="bg-primary text-white px-5 py-2.5 text-sm tracking-wide hover:bg-accent transition-colors rounded-sm"
            >
              Crear Invitacion
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-primary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Cerrar menu" : "Abrir menu"}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-border animate-fade-in">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block text-sm tracking-wide py-2 ${
                  isActive(link.href)
                    ? "text-accent font-medium"
                    : "text-muted hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-border space-y-3">
              <button className="block text-sm text-muted hover:text-primary w-full text-left py-2">
                Iniciar Sesion
              </button>
              <Link
                href="/templates"
                className="block w-full bg-primary text-white px-5 py-3 text-sm tracking-wide text-center hover:bg-accent transition-colors rounded-sm"
              >
                Crear Invitacion
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
