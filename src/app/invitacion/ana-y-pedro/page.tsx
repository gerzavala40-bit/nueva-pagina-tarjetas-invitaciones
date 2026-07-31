"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Heart, MapPin, Clock, Calendar, Music, Utensils, Camera, Gift, X, ChevronLeft, ChevronRight } from "lucide-react";

export default function InvitacionReal() {
  const [timeLeft, setTimeLeft] = useState({ dias: 0, horas: 0, minutos: 0, segundos: 0 });
  const [rsvpStatus, setRsvpStatus] = useState<string | null>(null);
  const [guestName, setGuestName] = useState("");
  const [menuChoice, setMenuChoice] = useState("");
  const [songRequest, setSongRequest] = useState("");
  const [showRsvpForm, setShowRsvpForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Wedding date: November 22, 2025 at 18:00
  const weddingDate = new Date("2025-11-22T18:00:00");

  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=1000&fit=crop",
      alt: "Ana y Pedro - Sesion de compromiso",
      caption: "Nuestra sesion de compromiso",
    },
    {
      src: "https://images.unsplash.com/photo-1606216794079-73f85bbd57d5?w=800&h=600&fit=crop",
      alt: "Anillos de compromiso",
      caption: "El momento del si",
    },
    {
      src: "https://images.unsplash.com/photo-1529636798458-92182e662485?w=800&h=1000&fit=crop",
      alt: "Pareja caminando",
      caption: "Caminando juntos",
    },
    {
      src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&h=600&fit=crop",
      alt: "Ramo de flores",
      caption: "Los detalles que nos enamoran",
    },
    {
      src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&h=600&fit=crop",
      alt: "Pareja al atardecer",
      caption: "Nuestro atardecer favorito",
    },
    {
      src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&h=1000&fit=crop",
      alt: "Celebracion",
      caption: "Celebrando el amor",
    },
    {
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
      alt: "Manos entrelazadas",
      caption: "Siempre de la mano",
    },
    {
      src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=1000&fit=crop",
      alt: "Beso romantico",
      caption: "Nuestro primer viaje juntos",
    },
  ];

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "auto";
  };

  const nextImage = () => {
    setLightboxIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setLightboxIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };


  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate.getTime() - now;
      if (distance > 0) {
        setTimeLeft({
          dias: Math.floor(distance / (1000 * 60 * 60 * 24)),
          horas: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutos: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          segundos: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };


  return (
    <div className="min-h-screen bg-[#fdf8f4] overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#f9efe5] via-[#fdf8f4] to-[#f5ebe0]"></div>
        
        {/* Decorative floral corners */}
        <svg className="absolute top-0 left-0 w-40 h-40 opacity-20 text-[#c9a96e]" viewBox="0 0 160 160">
          <circle cx="30" cy="30" r="12" fill="currentColor" opacity="0.5"/>
          <circle cx="55" cy="15" r="8" fill="currentColor" opacity="0.3"/>
          <circle cx="15" cy="55" r="8" fill="currentColor" opacity="0.3"/>
          <circle cx="70" cy="40" r="6" fill="currentColor" opacity="0.2"/>
          <circle cx="40" cy="70" r="6" fill="currentColor" opacity="0.2"/>
          <path d="M0,80 Q40,60 80,0" stroke="currentColor" fill="none" strokeWidth="0.5" opacity="0.4"/>
          <path d="M0,100 Q50,70 100,0" stroke="currentColor" fill="none" strokeWidth="0.5" opacity="0.3"/>
        </svg>
        <svg className="absolute top-0 right-0 w-40 h-40 opacity-20 text-[#c9a96e] scale-x-[-1]" viewBox="0 0 160 160">
          <circle cx="30" cy="30" r="12" fill="currentColor" opacity="0.5"/>
          <circle cx="55" cy="15" r="8" fill="currentColor" opacity="0.3"/>
          <circle cx="15" cy="55" r="8" fill="currentColor" opacity="0.3"/>
          <circle cx="70" cy="40" r="6" fill="currentColor" opacity="0.2"/>
          <circle cx="40" cy="70" r="6" fill="currentColor" opacity="0.2"/>
          <path d="M0,80 Q40,60 80,0" stroke="currentColor" fill="none" strokeWidth="0.5" opacity="0.4"/>
        </svg>
        <svg className="absolute bottom-0 left-0 w-40 h-40 opacity-20 text-[#c9a96e] scale-y-[-1]" viewBox="0 0 160 160">
          <circle cx="30" cy="30" r="12" fill="currentColor" opacity="0.5"/>
          <circle cx="55" cy="15" r="8" fill="currentColor" opacity="0.3"/>
          <circle cx="15" cy="55" r="8" fill="currentColor" opacity="0.3"/>
          <path d="M0,80 Q40,60 80,0" stroke="currentColor" fill="none" strokeWidth="0.5" opacity="0.4"/>
        </svg>
        <svg className="absolute bottom-0 right-0 w-40 h-40 opacity-20 text-[#c9a96e] scale-[-1]" viewBox="0 0 160 160">
          <circle cx="30" cy="30" r="12" fill="currentColor" opacity="0.5"/>
          <circle cx="55" cy="15" r="8" fill="currentColor" opacity="0.3"/>
          <circle cx="15" cy="55" r="8" fill="currentColor" opacity="0.3"/>
          <path d="M0,80 Q40,60 80,0" stroke="currentColor" fill="none" strokeWidth="0.5" opacity="0.4"/>
        </svg>


        {/* Main content */}
        <div className="relative text-center px-6 py-20">
          <div className="animate-fade-in">
            <p className="text-[#c9a96e] text-xs tracking-[0.4em] uppercase mb-8">
              Nos casamos
            </p>

            <h1 className="font-[family-name:var(--font-playfair)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#2c2c2c] leading-tight mb-4">
              Ana <span className="italic text-[#c9a96e]">&</span> Pedro
            </h1>

            <div className="flex items-center justify-center gap-4 my-8">
              <div className="w-16 h-px bg-[#c9a96e]/40"></div>
              <Heart size={16} className="text-[#c9a96e]" fill="#c9a96e" />
              <div className="w-16 h-px bg-[#c9a96e]/40"></div>
            </div>

            <p className="text-[#5c4a3a] text-lg sm:text-xl font-light tracking-wide">
              Sabado, 22 de Noviembre de 2025
            </p>
            <p className="text-[#8b7355] text-sm mt-2 tracking-wider">
              Hacienda Los Olivos &bull; Mendoza, Argentina
            </p>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-[#c9a96e]/40 rounded-full flex items-start justify-center p-1">
              <div className="w-1.5 h-3 bg-[#c9a96e]/60 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>


      {/* Countdown Section */}
      <section className="py-16 bg-[#2c2c2c] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[#c9a96e] text-xs tracking-[0.3em] uppercase mb-8">
            Cuenta regresiva
          </p>
          <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
            {[
              { value: timeLeft.dias, label: "Dias" },
              { value: timeLeft.horas, label: "Horas" },
              { value: timeLeft.minutos, label: "Min" },
              { value: timeLeft.segundos, label: "Seg" },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <span className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl text-[#c9a96e]">
                    {String(item.value).padStart(2, "0")}
                  </span>
                </div>
                <p className="text-white/50 text-[10px] tracking-wider uppercase mt-2">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-[#c9a96e] text-xs tracking-[0.3em] uppercase mb-3">
            Nuestra Historia
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl text-[#2c2c2c] mb-8">
            Un amor que crece cada dia
          </h2>
          <div className="space-y-6 text-[#5c4a3a] text-sm leading-relaxed">
            <p>
              Nos conocimos en una tarde de otoño hace 5 años en un cafe del centro.
              Lo que empezo como una conversacion casual se convirtio en largas horas
              de charla, risas y descubrir que teniamos todo en comun.
            </p>
            <p>
              Desde ese dia, compartimos viajes, sueños y la certeza de que
              queriamos recorrer este camino juntos. Hoy, con el corazon lleno de
              amor y alegria, queremos invitarte a celebrar el inicio de nuestra
              nueva etapa como familia.
            </p>
          </div>

          {/* Timeline */}
          <div className="flex items-center justify-center gap-8 mt-12 flex-wrap">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#f9efe5] flex items-center justify-center mx-auto mb-2">
                <Heart size={20} className="text-[#c9a96e]" />
              </div>
              <p className="text-[10px] text-[#8b7355] tracking-wider uppercase">Nos conocimos</p>
              <p className="font-[family-name:var(--font-playfair)] text-sm text-[#2c2c2c]">2020</p>
            </div>
            <div className="w-8 h-px bg-[#c9a96e]/30 hidden sm:block"></div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#f9efe5] flex items-center justify-center mx-auto mb-2">
                <Gift size={20} className="text-[#c9a96e]" />
              </div>
              <p className="text-[10px] text-[#8b7355] tracking-wider uppercase">Compromiso</p>
              <p className="font-[family-name:var(--font-playfair)] text-sm text-[#2c2c2c]">2024</p>
            </div>
            <div className="w-8 h-px bg-[#c9a96e]/30 hidden sm:block"></div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#c9a96e]/20 flex items-center justify-center mx-auto mb-2">
                <Calendar size={20} className="text-[#c9a96e]" />
              </div>
              <p className="text-[10px] text-[#8b7355] tracking-wider uppercase">La Boda</p>
              <p className="font-[family-name:var(--font-playfair)] text-sm text-[#2c2c2c]">2025</p>
            </div>
          </div>
        </div>
      </section>


      {/* Photo Gallery */}
      <section className="py-20 bg-[#f9efe5]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[#c9a96e] text-xs tracking-[0.3em] uppercase mb-3">
              Momentos Especiales
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl text-[#2c2c2c] mb-4">
              Nuestra Galeria
            </h2>
            <p className="text-[#5c4a3a] text-sm max-w-lg mx-auto">
              Algunos de los momentos mas bonitos que hemos compartido juntos.
            </p>
          </div>

          {/* Masonry Grid */}
          <div className="columns-2 md:columns-3 gap-4 space-y-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="break-inside-avoid cursor-pointer group relative overflow-hidden rounded-lg"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto object-cover rounded-lg transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 rounded-lg flex items-end">
                  <div className="p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-full">
                    <p className="text-white text-xs font-light tracking-wider">
                      {image.caption}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4">
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-10"
          >
            <X size={28} />
          </button>

          {/* Previous */}
          <button
            onClick={prevImage}
            className="absolute left-4 md:left-8 text-white/70 hover:text-white transition-colors z-10 p-2"
          >
            <ChevronLeft size={36} />
          </button>

          {/* Image */}
          <div className="max-w-4xl max-h-[85vh] flex flex-col items-center">
            <img
              src={galleryImages[lightboxIndex].src}
              alt={galleryImages[lightboxIndex].alt}
              className="max-w-full max-h-[75vh] object-contain rounded-lg"
            />
            <div className="mt-4 text-center">
              <p className="text-white/80 text-sm font-light">
                {galleryImages[lightboxIndex].caption}
              </p>
              <p className="text-white/40 text-xs mt-1">
                {lightboxIndex + 1} / {galleryImages.length}
              </p>
            </div>
          </div>

          {/* Next */}
          <button
            onClick={nextImage}
            className="absolute right-4 md:right-8 text-white/70 hover:text-white transition-colors z-10 p-2"
          >
            <ChevronRight size={36} />
          </button>
        </div>
      )}

      {/* Event Details */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[#c9a96e] text-xs tracking-[0.3em] uppercase mb-3">
              Detalles del Evento
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl text-[#2c2c2c]">
              Te esperamos
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Ceremony */}
            <div className="bg-white rounded-xl p-8 text-center shadow-sm border border-[#e8ddd0]">
              <div className="w-14 h-14 rounded-full bg-[#f9efe5] flex items-center justify-center mx-auto mb-4">
                <Heart size={22} className="text-[#c9a96e]" />
              </div>
              <h3 className="font-[family-name:var(--font-playfair)] text-xl text-[#2c2c2c] mb-4">
                Ceremonia
              </h3>
              <div className="space-y-2 text-sm text-[#5c4a3a]">
                <div className="flex items-center justify-center gap-2">
                  <Clock size={14} className="text-[#c9a96e]" />
                  <span>18:00 hrs</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <MapPin size={14} className="text-[#c9a96e]" />
                  <span>Capilla Nuestra Senora del Valle</span>
                </div>
                <p className="text-xs text-[#8b7355] mt-2">
                  Av. San Martin 1250, Mendoza
                </p>
              </div>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 px-5 py-2 border border-[#c9a96e] text-[#c9a96e] text-xs tracking-wider uppercase rounded-sm hover:bg-[#c9a96e] hover:text-white transition-colors"
              >
                Ver en Mapa
              </a>
            </div>

            {/* Reception */}
            <div className="bg-white rounded-xl p-8 text-center shadow-sm border border-[#e8ddd0]">
              <div className="w-14 h-14 rounded-full bg-[#f9efe5] flex items-center justify-center mx-auto mb-4">
                <Music size={22} className="text-[#c9a96e]" />
              </div>
              <h3 className="font-[family-name:var(--font-playfair)] text-xl text-[#2c2c2c] mb-4">
                Recepcion & Fiesta
              </h3>
              <div className="space-y-2 text-sm text-[#5c4a3a]">
                <div className="flex items-center justify-center gap-2">
                  <Clock size={14} className="text-[#c9a96e]" />
                  <span>20:00 hrs</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <MapPin size={14} className="text-[#c9a96e]" />
                  <span>Hacienda Los Olivos</span>
                </div>
                <p className="text-xs text-[#8b7355] mt-2">
                  Ruta 40 km 12, Lujan de Cuyo, Mendoza
                </p>
              </div>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 px-5 py-2 border border-[#c9a96e] text-[#c9a96e] text-xs tracking-wider uppercase rounded-sm hover:bg-[#c9a96e] hover:text-white transition-colors"
              >
                Ver en Mapa
              </a>
            </div>
          </div>


          {/* Schedule */}
          <div className="mt-12 bg-white rounded-xl p-8 shadow-sm border border-[#e8ddd0]">
            <h3 className="font-[family-name:var(--font-playfair)] text-xl text-[#2c2c2c] mb-6 text-center">
              Programa del dia
            </h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { time: "18:00", event: "Ceremonia", icon: <Heart size={18} /> },
                { time: "19:00", event: "Coctel de Bienvenida", icon: <Utensils size={18} /> },
                { time: "20:00", event: "Cena y Brindis", icon: <Music size={18} /> },
                { time: "22:00", event: "Fiesta y Baile", icon: <Camera size={18} /> },
              ].map((item) => (
                <div key={item.event} className="text-center">
                  <div className="text-[#c9a96e] flex justify-center mb-2">{item.icon}</div>
                  <p className="font-[family-name:var(--font-playfair)] text-lg text-[#2c2c2c]">{item.time}</p>
                  <p className="text-xs text-[#8b7355] mt-1">{item.event}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* Dress Code */}
      <section className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="text-[#c9a96e] text-xs tracking-[0.3em] uppercase mb-3">
            Codigo de Vestimenta
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl text-[#2c2c2c] mb-4">
            Formal / Elegante
          </h2>
          <p className="text-[#5c4a3a] text-sm leading-relaxed mb-6">
            Queremos que te sientas comoda y elegante. Sugerimos vestimenta formal.
            Los colores blanco y crema estan reservados para la novia.
          </p>
          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#2c2c2c] border-2 border-white shadow"></div>
            <div className="w-10 h-10 rounded-full bg-[#1a1a2e] border-2 border-white shadow"></div>
            <div className="w-10 h-10 rounded-full bg-[#5c4033] border-2 border-white shadow"></div>
            <div className="w-10 h-10 rounded-full bg-[#c9a96e] border-2 border-white shadow"></div>
            <div className="w-10 h-10 rounded-full bg-[#4a5568] border-2 border-white shadow"></div>
          </div>
          <p className="text-[10px] text-[#8b7355] mt-3 tracking-wider">
            PALETA SUGERIDA
          </p>
        </div>
      </section>


      {/* RSVP Section */}
      <section className="py-20 bg-[#2c2c2c]" id="rsvp">
        <div className="max-w-xl mx-auto px-6 text-center">
          <p className="text-[#c9a96e] text-xs tracking-[0.3em] uppercase mb-3">
            Confirma tu asistencia
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl text-white mb-4">
            RSVP
          </h2>
          <p className="text-white/60 text-sm mb-8">
            Por favor confirmanos antes del 1 de Octubre de 2025
          </p>

          {submitted ? (
            <div className="bg-white/5 border border-white/10 rounded-xl p-8 animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-[#c9a96e]/20 flex items-center justify-center mx-auto mb-4">
                <Heart size={28} className="text-[#c9a96e]" fill="#c9a96e" />
              </div>
              <h3 className="font-[family-name:var(--font-playfair)] text-xl text-white mb-2">
                Gracias, {guestName}!
              </h3>
              <p className="text-white/60 text-sm">
                {rsvpStatus === "si"
                  ? "Nos emociona saber que estaras con nosotros. Te esperamos!"
                  : "Lamentamos que no puedas acompanarnos. Te tendremos presente."}
              </p>
            </div>
          ) : !showRsvpForm ? (
            <div className="space-y-4">
              <button
                onClick={() => { setRsvpStatus("si"); setShowRsvpForm(true); }}
                className="w-full sm:w-auto px-10 py-4 bg-[#c9a96e] text-white text-sm tracking-wider uppercase rounded-sm hover:bg-[#b08d4f] transition-colors"
              >
                Asistire con gusto
              </button>
              <br />
              <button
                onClick={() => { setRsvpStatus("no"); setShowRsvpForm(true); }}
                className="w-full sm:w-auto px-10 py-4 border border-white/30 text-white text-sm tracking-wider uppercase rounded-sm hover:bg-white/10 transition-colors"
              >
                No podre asistir
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="text-left space-y-4 animate-fade-in">
              <div>
                <label className="text-white/60 text-xs block mb-1.5">Nombre completo *</label>
                <input
                  type="text"
                  required
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  className="w-full bg-white/5 border border-white/20 rounded-sm px-4 py-3 text-white text-sm focus:outline-none focus:border-[#c9a96e] transition-colors"
                  placeholder="Tu nombre y apellido"
                />
              </div>


              {rsvpStatus === "si" && (
                <>
                  <div>
                    <label className="text-white/60 text-xs block mb-1.5">Preferencia de menu</label>
                    <select
                      value={menuChoice}
                      onChange={(e) => setMenuChoice(e.target.value)}
                      className="w-full bg-white/5 border border-white/20 rounded-sm px-4 py-3 text-white text-sm focus:outline-none focus:border-[#c9a96e] transition-colors"
                    >
                      <option value="" className="text-black">Seleccionar...</option>
                      <option value="carne" className="text-black">Carne</option>
                      <option value="pollo" className="text-black">Pollo</option>
                      <option value="pescado" className="text-black">Pescado</option>
                      <option value="vegetariano" className="text-black">Vegetariano</option>
                      <option value="vegano" className="text-black">Vegano</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-white/60 text-xs block mb-1.5">Pedido de cancion (opcional)</label>
                    <input
                      type="text"
                      value={songRequest}
                      onChange={(e) => setSongRequest(e.target.value)}
                      className="w-full bg-white/5 border border-white/20 rounded-sm px-4 py-3 text-white text-sm focus:outline-none focus:border-[#c9a96e] transition-colors"
                      placeholder="Que cancion no puede faltar?"
                    />
                  </div>
                </>
              )}
              <button
                type="submit"
                className="w-full py-4 bg-[#c9a96e] text-white text-sm tracking-wider uppercase rounded-sm hover:bg-[#b08d4f] transition-colors mt-4"
              >
                Confirmar
              </button>
            </form>
          )}
        </div>
      </section>


      {/* Gift Registry */}
      <section className="py-16 bg-[#f9efe5]">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="text-[#c9a96e] text-xs tracking-[0.3em] uppercase mb-3">
            Mesa de Regalos
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl text-[#2c2c2c] mb-4">
            Tu presencia es nuestro mejor regalo
          </h2>
          <p className="text-[#5c4a3a] text-sm leading-relaxed mb-8">
            Si deseas tener un detalle con nosotros, hemos preparado una lista
            de regalos y tambien la opcion de contribuir a nuestra luna de miel.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="px-8 py-3 bg-[#2c2c2c] text-white text-sm tracking-wider uppercase rounded-sm hover:bg-[#2c2c2c]/80 transition-colors"
            >
              Ver Lista de Regalos
            </a>
            <a
              href="#"
              className="px-8 py-3 border border-[#2c2c2c] text-[#2c2c2c] text-sm tracking-wider uppercase rounded-sm hover:bg-[#2c2c2c] hover:text-white transition-colors"
            >
              Luna de Miel
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="py-16 bg-white text-center">
        <div className="max-w-xl mx-auto px-6">
          <Heart size={24} className="text-[#c9a96e] mx-auto mb-4" fill="#c9a96e" />
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl text-[#2c2c2c] mb-2">
            Ana & Pedro
          </h2>
          <p className="text-[#8b7355] text-sm">
            22 de Noviembre, 2025
          </p>
          <div className="w-12 h-px bg-[#c9a96e]/40 mx-auto my-6"></div>
          <p className="text-[#5c4a3a] text-xs leading-relaxed">
            Con amor e ilusion los esperamos para compartir este dia tan especial.
          </p>
          <p className="text-[10px] text-[#8b7355] mt-8 tracking-wider">
            HECHO CON AMOR POR ELEGANCE INVITES
          </p>
        </div>
      </section>
    </div>
  );
}
