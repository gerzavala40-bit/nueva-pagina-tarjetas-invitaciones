"use client";

import { useState, useEffect, useRef } from "react";
import {
  Heart, MapPin, Clock, Calendar, Music, Utensils, Camera, Gift,
  X, ChevronLeft, ChevronRight, Play, Pause, Volume2, VolumeX,
  MessageCircle, QrCode, Copy, Check, Send, Smartphone, Monitor,
  Image as ImageIcon, Sparkles
} from "lucide-react";

export default function InvitacionReal() {
  const [timeLeft, setTimeLeft] = useState({ dias: 0, horas: 0, minutos: 0, segundos: 0 });
  const [rsvpStatus, setRsvpStatus] = useState<string | null>(null);
  const [guestName, setGuestName] = useState("");
  const [guestCount, setGuestCount] = useState("1");
  const [menuChoice, setMenuChoice] = useState("");
  const [songRequest, setSongRequest] = useState("");
  const [showRsvpForm, setShowRsvpForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { user: "Maria", color: "#e91e63", msg: "Que hermosa la ceremonia! 😍", time: "22:15" },
    { user: "Carlos", color: "#2196f3", msg: "Vamos a bailar toda la noche! 🕺", time: "22:16" },
    { user: "Laura", color: "#9c27b0", msg: "Los novios estan radiantes ✨", time: "22:17" },
  ]);
  const [newChatMsg, setNewChatMsg] = useState("");
  const [partyCamPhotos] = useState([
    { user: "Sofia", src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=400&fit=crop" },
    { user: "Diego", src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400&h=400&fit=crop" },
    { user: "Lucia", src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=400&h=400&fit=crop" },
    { user: "Martin", src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=400&h=400&fit=crop" },
    { user: "Ana", src: "https://images.unsplash.com/photo-1606216794079-73f85bbd57d5?w=400&h=400&fit=crop" },
    { user: "Pedro", src: "https://images.unsplash.com/photo-1529636798458-92182e662485?w=400&h=400&fit=crop" },
  ]);

  const audioRef = useRef<HTMLAudioElement>(null);
  const weddingDate = new Date("2025-11-22T18:00:00");


  const galleryImages = [
    { src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=1000&fit=crop", alt: "Sesion de compromiso", caption: "Nuestra sesion de compromiso" },
    { src: "https://images.unsplash.com/photo-1606216794079-73f85bbd57d5?w=800&h=600&fit=crop", alt: "Anillos", caption: "El momento del si" },
    { src: "https://images.unsplash.com/photo-1529636798458-92182e662485?w=800&h=1000&fit=crop", alt: "Caminando", caption: "Caminando juntos" },
    { src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&h=600&fit=crop", alt: "Ramo", caption: "Los detalles que nos enamoran" },
    { src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&h=600&fit=crop", alt: "Atardecer", caption: "Nuestro atardecer favorito" },
    { src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&h=1000&fit=crop", alt: "Celebracion", caption: "Celebrando el amor" },
    { src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop", alt: "Manos", caption: "Siempre de la mano" },
    { src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=1000&fit=crop", alt: "Viaje", caption: "Nuestro primer viaje juntos" },
  ];

  // Countdown timer
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

  // Scroll animations - Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    document.querySelectorAll(".animate-on-scroll").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);


  // Music controls
  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  // Gallery lightbox
  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };
  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "auto";
  };
  const nextImage = () => setLightboxIndex((prev) => (prev + 1) % galleryImages.length);
  const prevImage = () => setLightboxIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);

  // Copy alias/CBU
  const copyAlias = () => {
    navigator.clipboard.writeText("ana.pedro.boda2025");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // RSVP submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  // WhatsApp RSVP
  const sendWhatsApp = () => {
    const msg = `Hola! Soy ${guestName}. ${rsvpStatus === "si" ? "Confirmo asistencia a la boda de Ana & Pedro. Somos " + guestCount + " persona(s). Menu: " + menuChoice : "Lamentablemente no podre asistir a la boda de Ana & Pedro."}`;
    window.open(`https://wa.me/5491112345678?text=${encodeURIComponent(msg)}`, "_blank");
    setSubmitted(true);
  };

  // Party Chat send
  const sendChatMsg = () => {
    if (newChatMsg.trim()) {
      setChatMessages((prev) => [...prev, { user: "Vos", color: "#4caf50", msg: newChatMsg, time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) }]);
      setNewChatMsg("");
    }
  };


  return (
    <div className="min-h-screen bg-[#fdf8f4] overflow-hidden">
      {/* Background Music */}
      <audio ref={audioRef} loop preload="auto">
        <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg" />
      </audio>

      {/* Floating Music Player */}
      <div className="fixed bottom-6 left-6 z-50 flex items-center gap-2">
        <button
          onClick={togglePlay}
          className="w-12 h-12 rounded-full bg-[#2c2c2c]/90 backdrop-blur-sm text-white flex items-center justify-center shadow-lg hover:bg-[#c9a96e] transition-colors"
          aria-label={isPlaying ? "Pausar musica" : "Reproducir musica"}
        >
          {isPlaying ? <Pause size={18} /> : <Play size={18} />}
        </button>
        <button
          onClick={toggleMute}
          className="w-10 h-10 rounded-full bg-[#2c2c2c]/70 backdrop-blur-sm text-white flex items-center justify-center shadow-lg hover:bg-[#c9a96e] transition-colors"
          aria-label={isMuted ? "Activar sonido" : "Silenciar"}
        >
          {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
        </button>
        {isPlaying && (
          <div className="flex items-center gap-0.5 ml-1">
            {[1,2,3,4].map((i) => (
              <div key={i} className="w-1 bg-[#c9a96e] rounded-full animate-pulse" style={{ height: `${8 + Math.random() * 12}px`, animationDelay: `${i * 0.15}s` }}></div>
            ))}
          </div>
        )}
      </div>

      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-[#f9efe5] via-[#fdf8f4] to-[#f5ebe0]"></div>
        {/* Decorative corners */}
        <svg className="absolute top-0 left-0 w-40 h-40 opacity-20 text-[#c9a96e]" viewBox="0 0 160 160">
          <circle cx="30" cy="30" r="12" fill="currentColor" opacity="0.5"/><circle cx="55" cy="15" r="8" fill="currentColor" opacity="0.3"/><circle cx="15" cy="55" r="8" fill="currentColor" opacity="0.3"/><circle cx="70" cy="40" r="6" fill="currentColor" opacity="0.2"/><circle cx="40" cy="70" r="6" fill="currentColor" opacity="0.2"/><path d="M0,80 Q40,60 80,0" stroke="currentColor" fill="none" strokeWidth="0.5" opacity="0.4"/><path d="M0,100 Q50,70 100,0" stroke="currentColor" fill="none" strokeWidth="0.5" opacity="0.3"/>
        </svg>
        <svg className="absolute top-0 right-0 w-40 h-40 opacity-20 text-[#c9a96e] scale-x-[-1]" viewBox="0 0 160 160">
          <circle cx="30" cy="30" r="12" fill="currentColor" opacity="0.5"/><circle cx="55" cy="15" r="8" fill="currentColor" opacity="0.3"/><circle cx="15" cy="55" r="8" fill="currentColor" opacity="0.3"/><circle cx="70" cy="40" r="6" fill="currentColor" opacity="0.2"/><circle cx="40" cy="70" r="6" fill="currentColor" opacity="0.2"/><path d="M0,80 Q40,60 80,0" stroke="currentColor" fill="none" strokeWidth="0.5" opacity="0.4"/>
        </svg>
        <svg className="absolute bottom-0 left-0 w-40 h-40 opacity-20 text-[#c9a96e] scale-y-[-1]" viewBox="0 0 160 160">
          <circle cx="30" cy="30" r="12" fill="currentColor" opacity="0.5"/><circle cx="55" cy="15" r="8" fill="currentColor" opacity="0.3"/><circle cx="15" cy="55" r="8" fill="currentColor" opacity="0.3"/><path d="M0,80 Q40,60 80,0" stroke="currentColor" fill="none" strokeWidth="0.5" opacity="0.4"/>
        </svg>
        <svg className="absolute bottom-0 right-0 w-40 h-40 opacity-20 text-[#c9a96e] scale-[-1]" viewBox="0 0 160 160">
          <circle cx="30" cy="30" r="12" fill="currentColor" opacity="0.5"/><circle cx="55" cy="15" r="8" fill="currentColor" opacity="0.3"/><circle cx="15" cy="55" r="8" fill="currentColor" opacity="0.3"/><path d="M0,80 Q40,60 80,0" stroke="currentColor" fill="none" strokeWidth="0.5" opacity="0.4"/>
        </svg>

        <div className="relative text-center px-6 py-20">
          <div className="animate-fade-in">
            <p className="text-[#c9a96e] text-xs tracking-[0.4em] uppercase mb-8">Nos casamos</p>
            <h1 className="font-[family-name:var(--font-playfair)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#2c2c2c] leading-tight mb-4">
              Ana <span className="italic text-[#c9a96e]">&</span> Pedro
            </h1>
            <div className="flex items-center justify-center gap-4 my-8">
              <div className="w-16 h-px bg-[#c9a96e]/40"></div>
              <Heart size={16} className="text-[#c9a96e]" fill="#c9a96e" />
              <div className="w-16 h-px bg-[#c9a96e]/40"></div>
            </div>
            <p className="text-[#5c4a3a] text-lg sm:text-xl font-light tracking-wide">Sabado, 22 de Noviembre de 2025</p>
            <p className="text-[#8b7355] text-sm mt-2 tracking-wider">Hacienda Los Olivos &bull; Mendoza, Argentina</p>
            {/* Play music prompt */}
            <button onClick={togglePlay} className="mt-8 inline-flex items-center gap-2 px-6 py-3 border border-[#c9a96e]/40 text-[#c9a96e] text-xs tracking-wider uppercase rounded-full hover:bg-[#c9a96e]/10 transition-colors">
              <Music size={14} /> {isPlaying ? "Musica sonando" : "Escuchar nuestra cancion"}
            </button>
          </div>
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-[#c9a96e]/40 rounded-full flex items-start justify-center p-1">
              <div className="w-1.5 h-3 bg-[#c9a96e]/60 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>


      {/* ===== COUNTDOWN ===== */}
      <section className="py-16 bg-[#2c2c2c] text-white animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[#c9a96e] text-xs tracking-[0.3em] uppercase mb-8">Cuenta regresiva</p>
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
                <p className="text-white/50 text-[10px] tracking-wider uppercase mt-2">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== OUR STORY ===== */}
      <section className="py-20 bg-white animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-[#c9a96e] text-xs tracking-[0.3em] uppercase mb-3">Nuestra Historia</p>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl text-[#2c2c2c] mb-8">Un amor que crece cada dia</h2>
          <div className="space-y-6 text-[#5c4a3a] text-sm leading-relaxed">
            <p>Nos conocimos en una tarde de otono hace 5 anos en un cafe del centro. Lo que empezo como una conversacion casual se convirtio en largas horas de charla, risas y descubrir que teniamos todo en comun.</p>
            <p>Desde ese dia, compartimos viajes, suenos y la certeza de que queriamos recorrer este camino juntos. Hoy, con el corazon lleno de amor y alegria, queremos invitarte a celebrar el inicio de nuestra nueva etapa como familia.</p>
          </div>
          <div className="flex items-center justify-center gap-8 mt-12 flex-wrap">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#f9efe5] flex items-center justify-center mx-auto mb-2"><Heart size={20} className="text-[#c9a96e]" /></div>
              <p className="text-[10px] text-[#8b7355] tracking-wider uppercase">Nos conocimos</p>
              <p className="font-[family-name:var(--font-playfair)] text-sm text-[#2c2c2c]">2020</p>
            </div>
            <div className="w-8 h-px bg-[#c9a96e]/30 hidden sm:block"></div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#f9efe5] flex items-center justify-center mx-auto mb-2"><Gift size={20} className="text-[#c9a96e]" /></div>
              <p className="text-[10px] text-[#8b7355] tracking-wider uppercase">Compromiso</p>
              <p className="font-[family-name:var(--font-playfair)] text-sm text-[#2c2c2c]">2024</p>
            </div>
            <div className="w-8 h-px bg-[#c9a96e]/30 hidden sm:block"></div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#c9a96e]/20 flex items-center justify-center mx-auto mb-2"><Calendar size={20} className="text-[#c9a96e]" /></div>
              <p className="text-[10px] text-[#8b7355] tracking-wider uppercase">La Boda</p>
              <p className="font-[family-name:var(--font-playfair)] text-sm text-[#2c2c2c]">2025</p>
            </div>
          </div>
        </div>
      </section>


      {/* ===== PHOTO GALLERY ===== */}
      <section className="py-20 bg-[#f9efe5] animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[#c9a96e] text-xs tracking-[0.3em] uppercase mb-3">Momentos Especiales</p>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl text-[#2c2c2c] mb-4">Nuestra Galeria</h2>
            <p className="text-[#5c4a3a] text-sm max-w-lg mx-auto">Algunos de los momentos mas bonitos que hemos compartido juntos.</p>
          </div>
          <div className="columns-2 md:columns-3 gap-4 space-y-4">
            {galleryImages.map((image, index) => (
              <div key={index} className="break-inside-avoid cursor-pointer group relative overflow-hidden rounded-lg" onClick={() => openLightbox(index)}>
                <img src={image.src} alt={image.alt} className="w-full h-auto object-cover rounded-lg transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 rounded-lg flex items-end">
                  <div className="p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-full">
                    <p className="text-white text-xs font-light tracking-wider">{image.caption}</p>
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
          <button onClick={closeLightbox} className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-10"><X size={28} /></button>
          <button onClick={prevImage} className="absolute left-4 md:left-8 text-white/70 hover:text-white transition-colors z-10 p-2"><ChevronLeft size={36} /></button>
          <div className="max-w-4xl max-h-[85vh] flex flex-col items-center">
            <img src={galleryImages[lightboxIndex].src} alt={galleryImages[lightboxIndex].alt} className="max-w-full max-h-[75vh] object-contain rounded-lg" />
            <div className="mt-4 text-center">
              <p className="text-white/80 text-sm font-light">{galleryImages[lightboxIndex].caption}</p>
              <p className="text-white/40 text-xs mt-1">{lightboxIndex + 1} / {galleryImages.length}</p>
            </div>
          </div>
          <button onClick={nextImage} className="absolute right-4 md:right-8 text-white/70 hover:text-white transition-colors z-10 p-2"><ChevronRight size={36} /></button>
        </div>
      )}


      {/* ===== ITINERARY / TIMELINE ===== */}
      <section className="py-20 bg-white animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[#c9a96e] text-xs tracking-[0.3em] uppercase mb-3">Itinerario</p>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl text-[#2c2c2c]">Programa del Dia</h2>
          </div>
          {/* Vertical Timeline */}
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-0.5 bg-[#c9a96e]/20"></div>
            {[
              { time: "17:30", title: "Llegada de Invitados", desc: "Recepcion en el jardin de la capilla", icon: <MapPin size={18} /> },
              { time: "18:00", title: "Ceremonia Religiosa", desc: "Capilla Nuestra Senora del Valle", icon: <Heart size={18} /> },
              { time: "19:00", title: "Coctel de Bienvenida", desc: "Terraza con vista a los vinedos", icon: <Utensils size={18} /> },
              { time: "20:00", title: "Cena & Brindis", desc: "Salon principal de Hacienda Los Olivos", icon: <Sparkles size={18} /> },
              { time: "22:00", title: "Apertura de Pista", desc: "Primer baile de los novios", icon: <Music size={18} /> },
              { time: "22:30", title: "Fiesta & Baile", desc: "DJ en vivo hasta las 5am!", icon: <Camera size={18} /> },
            ].map((item, i) => (
              <div key={i} className={`relative flex items-center mb-10 ${i % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                <div className={`w-5/12 ${i % 2 === 0 ? "text-right pr-8" : "text-left pl-8"}`}>
                  <p className="font-[family-name:var(--font-playfair)] text-2xl text-[#c9a96e]">{item.time}</p>
                  <h3 className="text-sm font-medium text-[#2c2c2c] mt-1">{item.title}</h3>
                  <p className="text-xs text-[#8b7355] mt-1">{item.desc}</p>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#f9efe5] border-2 border-[#c9a96e]/30 flex items-center justify-center text-[#c9a96e] z-10">
                  {item.icon}
                </div>
                <div className="w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ===== INTERACTIVE MAP ===== */}
      <section className="py-20 bg-[#f9efe5] animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[#c9a96e] text-xs tracking-[0.3em] uppercase mb-3">Ubicacion</p>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl text-[#2c2c2c] mb-4">Como Llegar</h2>
            <p className="text-[#5c4a3a] text-sm">Un toque en el mapa y te lleva directo</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Ceremony Map */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-[#e8ddd0]">
              <div className="p-4 text-center border-b border-[#e8ddd0]">
                <h3 className="font-[family-name:var(--font-playfair)] text-base text-[#2c2c2c]">Ceremonia</h3>
                <p className="text-xs text-[#8b7355] mt-1">Capilla Nuestra Senora del Valle</p>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3350.5!2d-68.84!3d-32.89!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDUzJzI0LjAiUyA2OMKwNTAnMjQuMCJX!5e0!3m2!1ses!2sar!4v1"
                width="100%" height="200" style={{ border: 0 }} allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade" className="w-full"
              ></iframe>
              <div className="p-4 text-center">
                <a href="https://maps.google.com/?q=-32.89,-68.84" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2 bg-[#c9a96e] text-white text-xs tracking-wider uppercase rounded-sm hover:bg-[#b08d4f] transition-colors">
                  <MapPin size={14} /> Abrir en Google Maps
                </a>
              </div>
            </div>
            {/* Reception Map */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-[#e8ddd0]">
              <div className="p-4 text-center border-b border-[#e8ddd0]">
                <h3 className="font-[family-name:var(--font-playfair)] text-base text-[#2c2c2c]">Recepcion</h3>
                <p className="text-xs text-[#8b7355] mt-1">Hacienda Los Olivos</p>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3350.5!2d-68.90!3d-33.03!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDAyJzI0LjAiUyA2OMKwNTQnMDAuMCJX!5e0!3m2!1ses!2sar!4v1"
                width="100%" height="200" style={{ border: 0 }} allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade" className="w-full"
              ></iframe>
              <div className="p-4 text-center">
                <a href="https://maps.google.com/?q=-33.03,-68.90" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2 bg-[#c9a96e] text-white text-xs tracking-wider uppercase rounded-sm hover:bg-[#b08d4f] transition-colors">
                  <MapPin size={14} /> Abrir en Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ===== DRESS CODE ===== */}
      <section className="py-16 bg-white animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="text-[#c9a96e] text-xs tracking-[0.3em] uppercase mb-3">Codigo de Vestimenta</p>
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl text-[#2c2c2c] mb-4">Formal / Elegante</h2>
          <p className="text-[#5c4a3a] text-sm leading-relaxed mb-6">
            Queremos que te sientas comoda y elegante. Sugerimos vestimenta formal. Los colores blanco y crema estan reservados para la novia.
          </p>
          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#2c2c2c] border-2 border-white shadow"></div>
            <div className="w-10 h-10 rounded-full bg-[#1a1a2e] border-2 border-white shadow"></div>
            <div className="w-10 h-10 rounded-full bg-[#5c4033] border-2 border-white shadow"></div>
            <div className="w-10 h-10 rounded-full bg-[#c9a96e] border-2 border-white shadow"></div>
            <div className="w-10 h-10 rounded-full bg-[#4a5568] border-2 border-white shadow"></div>
          </div>
          <p className="text-[10px] text-[#8b7355] mt-3 tracking-wider">PALETA SUGERIDA</p>
        </div>
      </section>


      {/* ===== RSVP WITH WHATSAPP ===== */}
      <section className="py-20 bg-[#2c2c2c]" id="rsvp">
        <div className="max-w-xl mx-auto px-6 text-center animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
          <p className="text-[#c9a96e] text-xs tracking-[0.3em] uppercase mb-3">Confirma tu asistencia</p>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl text-white mb-4">RSVP</h2>
          <p className="text-white/60 text-sm mb-8">Por favor confirmanos antes del 1 de Octubre de 2025</p>

          {submitted ? (
            <div className="bg-white/5 border border-white/10 rounded-xl p-8 animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-[#c9a96e]/20 flex items-center justify-center mx-auto mb-4">
                <Heart size={28} className="text-[#c9a96e]" fill="#c9a96e" />
              </div>
              <h3 className="font-[family-name:var(--font-playfair)] text-xl text-white mb-2">Gracias, {guestName}!</h3>
              <p className="text-white/60 text-sm">
                {rsvpStatus === "si" ? "Nos emociona saber que estaras con nosotros. Te esperamos!" : "Lamentamos que no puedas acompanarnos. Te tendremos presente."}
              </p>
            </div>
          ) : !showRsvpForm ? (
            <div className="space-y-4">
              <button onClick={() => { setRsvpStatus("si"); setShowRsvpForm(true); }}
                className="w-full sm:w-auto px-10 py-4 bg-[#c9a96e] text-white text-sm tracking-wider uppercase rounded-sm hover:bg-[#b08d4f] transition-colors">
                Asistire con gusto
              </button>
              <br />
              <button onClick={() => { setRsvpStatus("no"); setShowRsvpForm(true); }}
                className="w-full sm:w-auto px-10 py-4 border border-white/30 text-white text-sm tracking-wider uppercase rounded-sm hover:bg-white/10 transition-colors">
                No podre asistir
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="text-left space-y-4 animate-fade-in">
              <div>
                <label className="text-white/60 text-xs block mb-1.5">Nombre completo *</label>
                <input type="text" required value={guestName} onChange={(e) => setGuestName(e.target.value)}
                  className="w-full bg-white/5 border border-white/20 rounded-sm px-4 py-3 text-white text-sm focus:outline-none focus:border-[#c9a96e] transition-colors"
                  placeholder="Tu nombre y apellido" />
              </div>
              {rsvpStatus === "si" && (
                <>
                  <div>
                    <label className="text-white/60 text-xs block mb-1.5">Cantidad de personas</label>
                    <select value={guestCount} onChange={(e) => setGuestCount(e.target.value)}
                      className="w-full bg-white/5 border border-white/20 rounded-sm px-4 py-3 text-white text-sm focus:outline-none focus:border-[#c9a96e] transition-colors">
                      <option value="1" className="text-black">1 persona</option>
                      <option value="2" className="text-black">2 personas</option>
                      <option value="3" className="text-black">3 personas</option>
                      <option value="4" className="text-black">4 personas</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-white/60 text-xs block mb-1.5">Preferencia de menu</label>
                    <select value={menuChoice} onChange={(e) => setMenuChoice(e.target.value)}
                      className="w-full bg-white/5 border border-white/20 rounded-sm px-4 py-3 text-white text-sm focus:outline-none focus:border-[#c9a96e] transition-colors">
                      <option value="" className="text-black">Seleccionar...</option>
                      <option value="carne" className="text-black">Carne</option>
                      <option value="pollo" className="text-black">Pollo</option>
                      <option value="pescado" className="text-black">Pescado</option>
                      <option value="vegetariano" className="text-black">Vegetariano</option>
                      <option value="vegano" className="text-black">Vegano</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-white/60 text-xs block mb-1.5">Cancion que no puede faltar (opcional)</label>
                    <input type="text" value={songRequest} onChange={(e) => setSongRequest(e.target.value)}
                      className="w-full bg-white/5 border border-white/20 rounded-sm px-4 py-3 text-white text-sm focus:outline-none focus:border-[#c9a96e] transition-colors"
                      placeholder="Tu cancion favorita para la fiesta" />
                  </div>
                </>
              )}
              {/* Two buttons: confirm in form OR via WhatsApp */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button type="submit" className="flex-1 py-4 bg-[#c9a96e] text-white text-sm tracking-wider uppercase rounded-sm hover:bg-[#b08d4f] transition-colors flex items-center justify-center gap-2">
                  <Check size={16} /> Confirmar Aqui
                </button>
                <button type="button" onClick={sendWhatsApp}
                  className="flex-1 py-4 bg-[#25d366] text-white text-sm tracking-wider uppercase rounded-sm hover:bg-[#1da851] transition-colors flex items-center justify-center gap-2">
                  <Send size={16} /> Confirmar por WhatsApp
                </button>
              </div>
            </form>
          )}
        </div>
      </section>


      {/* ===== GIFT REGISTRY WITH ALIAS/CBU COPY ===== */}
      <section className="py-16 bg-[#f9efe5] animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="text-[#c9a96e] text-xs tracking-[0.3em] uppercase mb-3">Mesa de Regalos</p>
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl text-[#2c2c2c] mb-4">Tu presencia es nuestro mejor regalo</h2>
          <p className="text-[#5c4a3a] text-sm leading-relaxed mb-8">
            Si deseas tener un detalle con nosotros, podes contribuir a nuestra luna de miel.
          </p>
          {/* Alias/CBU Box */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-[#e8ddd0] max-w-md mx-auto mb-6">
            <p className="text-xs text-[#8b7355] tracking-wider uppercase mb-3">Datos para transferencia</p>
            <div className="space-y-3">
              <div>
                <p className="text-[10px] text-[#8b7355] uppercase">Alias</p>
                <div className="flex items-center justify-between bg-[#f9efe5] rounded-sm px-4 py-2.5 mt-1">
                  <span className="text-sm font-medium text-[#2c2c2c]">ana.pedro.boda2025</span>
                  <button onClick={copyAlias} className="flex items-center gap-1 text-[#c9a96e] hover:text-[#b08d4f] transition-colors">
                    {copied ? <Check size={16} /> : <Copy size={16} />}
                    <span className="text-xs">{copied ? "Copiado!" : "Copiar"}</span>
                  </button>
                </div>
              </div>
              <div>
                <p className="text-[10px] text-[#8b7355] uppercase">CBU</p>
                <div className="flex items-center justify-between bg-[#f9efe5] rounded-sm px-4 py-2.5 mt-1">
                  <span className="text-xs font-medium text-[#2c2c2c]">0070055-30004012345678-9</span>
                  <button onClick={() => { navigator.clipboard.writeText("0070055-30004012345678-9"); setCopied(true); setTimeout(() => setCopied(false), 2000); }}
                    className="flex items-center gap-1 text-[#c9a96e] hover:text-[#b08d4f] transition-colors">
                    <Copy size={14} />
                  </button>
                </div>
              </div>
              <div>
                <p className="text-[10px] text-[#8b7355] uppercase">Titular</p>
                <p className="text-sm text-[#2c2c2c] mt-1">Ana Martinez / Pedro Garcia</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#" className="px-8 py-3 bg-[#2c2c2c] text-white text-sm tracking-wider uppercase rounded-sm hover:bg-[#2c2c2c]/80 transition-colors">
              <Gift size={14} className="inline mr-2" />Ver Lista de Regalos
            </a>
            <a href="#" className="px-8 py-3 border border-[#2c2c2c] text-[#2c2c2c] text-sm tracking-wider uppercase rounded-sm hover:bg-[#2c2c2c] hover:text-white transition-colors">
              Luna de Miel
            </a>
          </div>
        </div>
      </section>


      {/* ===== PARTY CHAT DEMO ===== */}
      <section className="py-20 bg-[#2c2c2c] animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#c9a96e]/20 text-[#c9a96e] px-3 py-1 rounded-full text-[10px] tracking-wider uppercase mb-4">
              <Sparkles size={12} /> Nuevo
            </div>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl text-white mb-4">Party Chat en Vivo</h2>
            <p className="text-white/60 text-sm max-w-lg mx-auto">
              Un chat grupal exclusivo para tu fiesta. Cada mesa tiene su QR: los invitados lo escanean y empiezan a hablar entre todos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Features */}
            <div className="space-y-6">
              {[
                { icon: <QrCode size={20} />, title: "QR por mesa", desc: "Cada mesa tiene su propio QR. Los invitados lo escanean y entran sin registrarse." },
                { icon: <MessageCircle size={20} />, title: "Chat general + por mesa", desc: "Un chat para toda la fiesta y otro privado solo para tu mesa." },
                { icon: <Smartphone size={20} />, title: "Zumbidos y colores", desc: "Mandale un zumbido que sacude la pantalla! Cada invitado elige su color." },
                { icon: <Clock size={20} />, title: "Solo dura tu fiesta", desc: "El chat se activa cuando vos quieras y se cierra al terminar. Privado y exclusivo." },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="text-[#c9a96e] flex-shrink-0 mt-0.5">{item.icon}</div>
                  <div>
                    <h3 className="text-white text-sm font-medium mb-1">{item.title}</h3>
                    <p className="text-white/50 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Chat Demo */}
            <div className="bg-[#1a1a1a] rounded-xl border border-white/10 overflow-hidden">
              <div className="bg-[#c9a96e] px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MessageCircle size={16} className="text-white" />
                  <span className="text-white text-sm font-medium">Mesa 5 - Chat</span>
                </div>
                <span className="text-white/80 text-xs">3 online</span>
              </div>
              <div className="p-4 space-y-3 h-60 overflow-y-auto">
                {chatMessages.map((msg, i) => (
                  <div key={i} className={`flex flex-col ${msg.user === "Vos" ? "items-end" : "items-start"}`}>
                    <div className={`max-w-[80%] rounded-lg px-3 py-2 ${msg.user === "Vos" ? "bg-[#c9a96e]/20" : "bg-white/5"}`}>
                      <p className="text-xs font-medium mb-0.5" style={{ color: msg.color }}>{msg.user}</p>
                      <p className="text-white/80 text-xs">{msg.msg}</p>
                    </div>
                    <span className="text-white/30 text-[9px] mt-0.5">{msg.time}</span>
                  </div>
                ))}
              </div>
              <div className="border-t border-white/10 p-3 flex gap-2">
                <input type="text" value={newChatMsg} onChange={(e) => setNewChatMsg(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && sendChatMsg()}
                  placeholder="Escribi un mensaje..."
                  className="flex-1 bg-white/5 border border-white/10 rounded-sm px-3 py-2 text-white text-xs focus:outline-none focus:border-[#c9a96e]" />
                <button onClick={sendChatMsg} className="px-3 py-2 bg-[#c9a96e] text-white rounded-sm hover:bg-[#b08d4f] transition-colors">
                  <Send size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ===== PARTY CAM ===== */}
      <section className="py-20 bg-white animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#c9a96e]/10 text-[#c9a96e] px-3 py-1 rounded-full text-[10px] tracking-wider uppercase mb-4">
              <Camera size={12} /> Incluido en Premium
            </div>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl text-[#2c2c2c] mb-4">Party Cam</h2>
            <p className="text-[#5c4a3a] text-sm max-w-lg mx-auto">
              Un muro de fotos en tiempo real. Los invitados sacan fotos, escanean un QR, y aparecen al instante en la pantalla del salon.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Polaroid Grid */}
            <div className="grid grid-cols-2 gap-4">
              {partyCamPhotos.slice(0, 4).map((photo, i) => (
                <div key={i} className="bg-white p-2 rounded-sm shadow-lg transform hover:rotate-0 transition-transform"
                  style={{ transform: `rotate(${(i % 2 === 0 ? -2 : 2) + Math.random() * 2}deg)` }}>
                  <img src={photo.src} alt={`Foto de ${photo.user}`} className="w-full aspect-square object-cover rounded-sm" loading="lazy" />
                  <div className="pt-2 pb-1 text-center">
                    <p className="text-xs text-[#2c2c2c] font-medium">{photo.user}</p>
                    <p className="text-[9px] text-[#8b7355]">hace {i + 1} min</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Features */}
            <div className="space-y-6">
              {[
                { icon: <Camera size={20} />, title: "Subida instantanea", desc: "El invitado saca una foto, escanea el QR y la sube en 2 toques. Sin descargar nada." },
                { icon: <Monitor size={20} />, title: "Pantalla en vivo", desc: "Las fotos aparecen al instante en la pantalla del salon. Se actualiza sola cada 3 segundos." },
                { icon: <ImageIcon size={20} />, title: "Estilo polaroid", desc: "Cada foto se muestra como una polaroid con el nombre del invitado. Queda hermoso en el proyector." },
                { icon: <Gift size={20} />, title: "Recuerdo para los novios", desc: "Despues del evento recibis todas las fotos. Momentos unicos desde la perspectiva de tus invitados." },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="text-[#c9a96e] flex-shrink-0 mt-0.5">{item.icon}</div>
                  <div>
                    <h3 className="text-[#2c2c2c] text-sm font-medium mb-1">{item.title}</h3>
                    <p className="text-[#5c4a3a] text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* ===== FOOTER ===== */}
      <section className="py-16 bg-[#f9efe5] text-center animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
        <div className="max-w-xl mx-auto px-6">
          <Heart size={24} className="text-[#c9a96e] mx-auto mb-4" fill="#c9a96e" />
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl text-[#2c2c2c] mb-2">Ana & Pedro</h2>
          <p className="text-[#8b7355] text-sm">22 de Noviembre, 2025</p>
          <div className="w-12 h-px bg-[#c9a96e]/40 mx-auto my-6"></div>
          <p className="text-[#5c4a3a] text-xs leading-relaxed">
            Con amor e ilusion los esperamos para compartir este dia tan especial.
          </p>
          <p className="text-[10px] text-[#8b7355] mt-8 tracking-wider">
            HECHO CON AMOR POR <span className="text-[#c9a96e]">TE INVITO APP</span>
          </p>
        </div>
      </section>

      {/* ===== SCROLL ANIMATION STYLES ===== */}
      <style jsx global>{`
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        .animate-visible {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </div>
  );
}
