"use client";

import { useState, useEffect, useRef } from "react";
import {
  Heart, MapPin, Clock, Play, Pause, Volume2, VolumeX,
  Music, Copy, Check, Send, Camera, MessageCircle, Sparkles
} from "lucide-react";

export default function InvitacionJulianaMateo() {
  const [timeLeft, setTimeLeft] = useState({ dias: 0, horas: 0, minutos: 0, segundos: 0 });
  const [rsvpStatus, setRsvpStatus] = useState<string | null>(null);
  const [guestName, setGuestName] = useState("");
  const [guestCount, setGuestCount] = useState("1");
  const [showRsvpForm, setShowRsvpForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [copied, setCopied] = useState(false);

  const audioRef = useRef<HTMLAudioElement>(null);
  const weddingDate = new Date("2029-09-27T19:00:00");

  // Countdown
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

  // Scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("animate-visible");
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    document.querySelectorAll(".animate-on-scroll").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) audioRef.current.pause();
      else audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const sendWhatsApp = () => {
    const msg = `Hola! Soy ${guestName}. ${rsvpStatus === "si" ? "Confirmo asistencia a la boda de Juliana & Mateo. Somos " + guestCount + " persona(s)." : "Lamentablemente no podre asistir a la boda de Juliana & Mateo."}`;
    window.open(`https://wa.me/5491112345678?text=${encodeURIComponent(msg)}`, "_blank");
    setSubmitted(true);
  };

  const copyAlias = () => {
    navigator.clipboard.writeText("juliana.mateo.boda");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-black overflow-hidden relative">
      {/* Audio */}
      <audio ref={audioRef} loop preload="auto">
        <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" type="audio/mpeg" />
      </audio>

      {/* Floating Music Player */}
      <div className="fixed bottom-6 left-6 z-50 flex items-center gap-2">
        <button onClick={togglePlay}
          className="w-12 h-12 rounded-full bg-black/80 border border-[#d4af37]/50 backdrop-blur-sm text-[#d4af37] flex items-center justify-center shadow-lg hover:bg-[#d4af37] hover:text-black transition-colors"
          aria-label={isPlaying ? "Pausar" : "Reproducir"}>
          {isPlaying ? <Pause size={18} /> : <Play size={18} />}
        </button>
        <button onClick={toggleMute}
          className="w-10 h-10 rounded-full bg-black/80 border border-[#d4af37]/30 backdrop-blur-sm text-[#d4af37] flex items-center justify-center shadow-lg hover:bg-[#d4af37] hover:text-black transition-colors">
          {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
        </button>
        {isPlaying && (
          <div className="flex items-center gap-0.5 ml-1">
            {[1,2,3,4].map((i) => (
              <div key={i} className="w-1 bg-[#d4af37] rounded-full animate-pulse" style={{ height: `${8 + Math.random() * 12}px`, animationDelay: `${i * 0.15}s` }}></div>
            ))}
          </div>
        )}
      </div>


      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-16">
        {/* Gold confetti particles - top */}
        <div className="absolute top-0 left-0 right-0 h-40 overflow-hidden pointer-events-none">
          {Array.from({ length: 40 }).map((_, i) => (
            <div key={`top-${i}`} className="absolute rounded-full animate-pulse"
              style={{
                width: `${1 + Math.random() * 4}px`,
                height: `${1 + Math.random() * 4}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                backgroundColor: Math.random() > 0.5 ? '#d4af37' : '#fff',
                opacity: 0.3 + Math.random() * 0.7,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${1 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

        {/* Gold confetti particles - bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-48 overflow-hidden pointer-events-none">
          {Array.from({ length: 50 }).map((_, i) => (
            <div key={`bot-${i}`} className="absolute rounded-full animate-pulse"
              style={{
                width: `${1 + Math.random() * 5}px`,
                height: `${1 + Math.random() * 5}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                backgroundColor: '#d4af37',
                opacity: 0.2 + Math.random() * 0.8,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${1 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

        {/* Date badge */}
        <div className="relative z-10 mb-6">
          <div className="bg-black border border-[#d4af37]/30 px-6 py-2 inline-block">
            <p className="text-white text-2xl sm:text-3xl font-light tracking-[0.2em]">
              27<span className="text-[#d4af37] mx-2">&middot;</span>09<span className="text-[#d4af37] mx-2">&middot;</span>29
            </p>
          </div>
        </div>

        {/* Photo frame */}
        <div className="relative z-10 mb-8">
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 border-4 border-[#d4af37] p-1 bg-black shadow-2xl shadow-[#d4af37]/10" style={{ transform: "rotate(-2deg)" }}>
            <img
              src="https://images.unsplash.com/photo-1529636798458-92182e662485?w=600&h=600&fit=crop&crop=faces"
              alt="Juliana y Mateo"
              className="w-full h-full object-cover"
            />
            {/* Time badge on photo */}
            <div className="absolute top-4 right-4 bg-black/90 px-3 py-1">
              <p className="text-white text-sm font-bold">19:00</p>
            </div>
          </div>
        </div>

        {/* Ceremony info */}
        <div className="relative z-10 text-center mb-6">
          <p className="text-[#d4af37]/70 text-sm italic mb-1">Ceremonia</p>
          <p className="text-white/70 text-xs tracking-wider">Calle Cualquiera 123, Cualquier Lugar.</p>
        </div>

        {/* NAMES - Large bold typography */}
        <div className="relative z-10 text-center mb-4">
          <h1 className="text-white text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase leading-none tracking-tight" style={{ fontFamily: "system-ui, sans-serif", fontWeight: 900 }}>
            JULIANA
          </h1>
          <div className="relative">
            <h1 className="text-white text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase leading-none tracking-tight" style={{ fontFamily: "system-ui, sans-serif", fontWeight: 900 }}>
              Y MATEO
            </h1>
            {/* Reception time badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black px-3 py-1 z-20">
              <p className="text-white text-sm font-bold">21:00</p>
            </div>
          </div>
        </div>

        {/* Reception info */}
        <div className="relative z-10 text-center mb-6">
          <p className="text-[#d4af37] text-sm italic">Recepcion en Casa Colombia</p>
          <p className="text-white/70 text-xs tracking-wider mt-1">Calle Cualquiera 123, Cualquier Lugar.</p>
        </div>

        {/* "Nos casamos" script */}
        <div className="relative z-10 text-center mb-10">
          <p className="font-[family-name:var(--font-playfair)] italic text-white text-4xl sm:text-5xl">
            Nos casamos
          </p>
        </div>

        {/* Decorative gold divider */}
        <div className="relative z-10 flex items-center justify-center gap-2 mb-8">
          <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#d4af37]"></div>
          <Sparkles size={16} className="text-[#d4af37]" />
          <div className="w-8 h-px bg-[#d4af37]"></div>
          <Sparkles size={12} className="text-[#d4af37]" />
          <div className="w-16 h-px bg-gradient-to-l from-transparent to-[#d4af37]"></div>
        </div>

        {/* CONFIRMAR ASISTENCIA link */}
        <a href="#rsvp" className="relative z-10 border border-[#d4af37] px-8 py-3 text-[#d4af37] text-xs tracking-[0.3em] uppercase hover:bg-[#d4af37] hover:text-black transition-colors">
          CONFIRMAR ASISTENCIA
        </a>

        {/* Tagline */}
        <p className="relative z-10 text-white/50 text-sm italic mt-6 text-center max-w-xs">
          Queremos celebrar este dia tan especial junto a ti.
        </p>

        {/* Play music button */}
        <button onClick={togglePlay} className="relative z-10 mt-8 inline-flex items-center gap-2 px-5 py-2 border border-[#d4af37]/30 text-[#d4af37] text-xs tracking-wider uppercase rounded-full hover:bg-[#d4af37]/10 transition-colors">
          <Music size={14} /> {isPlaying ? "Musica sonando" : "Escuchar nuestra cancion"}
        </button>
      </section>


      {/* ===== COUNTDOWN ===== */}
      <section className="py-16 bg-[#0a0a0a] border-t border-[#d4af37]/10 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[#d4af37] text-xs tracking-[0.3em] uppercase mb-8">Faltan</p>
          <div className="grid grid-cols-4 gap-3 max-w-sm mx-auto">
            {[
              { value: timeLeft.dias, label: "Dias" },
              { value: timeLeft.horas, label: "Horas" },
              { value: timeLeft.minutos, label: "Min" },
              { value: timeLeft.segundos, label: "Seg" },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <div className="bg-black border border-[#d4af37]/20 rounded-lg p-4">
                  <span className="text-3xl sm:text-4xl font-bold text-white">{String(item.value).padStart(2, "0")}</span>
                </div>
                <p className="text-[#d4af37]/60 text-[10px] tracking-wider uppercase mt-2">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== EVENT DETAILS ===== */}
      <section className="py-16 bg-black animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[#d4af37] text-xs tracking-[0.3em] uppercase mb-3">Detalles</p>
            <h2 className="text-white text-3xl sm:text-4xl font-black uppercase tracking-tight">El Plan</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Ceremony */}
            <div className="border border-[#d4af37]/20 rounded-lg p-6 text-center bg-[#0a0a0a] hover:border-[#d4af37]/50 transition-colors">
              <div className="w-12 h-12 rounded-full border border-[#d4af37]/30 flex items-center justify-center mx-auto mb-4">
                <Heart size={20} className="text-[#d4af37]" />
              </div>
              <h3 className="text-white text-lg font-bold uppercase mb-3">Ceremonia</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-center gap-2 text-white/70">
                  <Clock size={14} className="text-[#d4af37]" />
                  <span>19:00 hrs</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-white/70">
                  <MapPin size={14} className="text-[#d4af37]" />
                  <span>Iglesia San Nicolas</span>
                </div>
                <p className="text-white/40 text-xs">Calle Cualquiera 123, Cualquier Lugar</p>
              </div>
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 px-4 py-2 border border-[#d4af37]/30 text-[#d4af37] text-xs tracking-wider uppercase hover:bg-[#d4af37] hover:text-black transition-colors">
                <MapPin size={12} /> Ver Mapa
              </a>
            </div>
            {/* Reception */}
            <div className="border border-[#d4af37]/20 rounded-lg p-6 text-center bg-[#0a0a0a] hover:border-[#d4af37]/50 transition-colors">
              <div className="w-12 h-12 rounded-full border border-[#d4af37]/30 flex items-center justify-center mx-auto mb-4">
                <Music size={20} className="text-[#d4af37]" />
              </div>
              <h3 className="text-white text-lg font-bold uppercase mb-3">Recepcion & Fiesta</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-center gap-2 text-white/70">
                  <Clock size={14} className="text-[#d4af37]" />
                  <span>21:00 hrs</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-white/70">
                  <MapPin size={14} className="text-[#d4af37]" />
                  <span>Casa Colombia</span>
                </div>
                <p className="text-white/40 text-xs">Calle Cualquiera 123, Cualquier Lugar</p>
              </div>
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 px-4 py-2 border border-[#d4af37]/30 text-[#d4af37] text-xs tracking-wider uppercase hover:bg-[#d4af37] hover:text-black transition-colors">
                <MapPin size={12} /> Ver Mapa
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* ===== DRESS CODE ===== */}
      <section className="py-12 bg-[#0a0a0a] border-t border-[#d4af37]/10 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="text-[#d4af37] text-xs tracking-[0.3em] uppercase mb-3">Dress Code</p>
          <h2 className="text-white text-2xl font-bold uppercase mb-4">Elegante / Fiesta</h2>
          <p className="text-white/50 text-sm mb-6">Veni con tu mejor look para una noche inolvidable.</p>
          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-10 rounded-full bg-black border-2 border-[#d4af37]/40"></div>
            <div className="w-10 h-10 rounded-full bg-[#d4af37] border-2 border-[#d4af37]"></div>
            <div className="w-10 h-10 rounded-full bg-white border-2 border-white/20"></div>
            <div className="w-10 h-10 rounded-full bg-[#1a1a2e] border-2 border-[#d4af37]/30"></div>
            <div className="w-10 h-10 rounded-full bg-[#8b0000] border-2 border-[#d4af37]/30"></div>
          </div>
        </div>
      </section>

      {/* ===== RSVP ===== */}
      <section className="py-20 bg-black border-t border-[#d4af37]/10" id="rsvp">
        <div className="max-w-xl mx-auto px-6 text-center animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
          {/* Gold divider */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#d4af37]"></div>
            <Sparkles size={14} className="text-[#d4af37]" />
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#d4af37]"></div>
          </div>

          <p className="text-[#d4af37] text-xs tracking-[0.3em] uppercase mb-3">Confirma tu asistencia</p>
          <h2 className="text-white text-3xl font-black uppercase mb-2">RSVP</h2>
          <p className="text-white/40 text-sm mb-8">Confirmanos antes del 1 de Agosto de 2029</p>

          {submitted ? (
            <div className="border border-[#d4af37]/30 rounded-lg p-8">
              <Sparkles size={28} className="text-[#d4af37] mx-auto mb-4" />
              <h3 className="text-white text-xl font-bold mb-2">Gracias, {guestName}!</h3>
              <p className="text-white/50 text-sm">
                {rsvpStatus === "si" ? "Nos vemos en la fiesta! Va a ser una noche increible." : "Lamentamos que no puedas venir. Te vamos a extranar!"}
              </p>
            </div>
          ) : !showRsvpForm ? (
            <div className="space-y-4">
              <button onClick={() => { setRsvpStatus("si"); setShowRsvpForm(true); }}
                className="w-full sm:w-auto px-10 py-4 bg-[#d4af37] text-black text-sm font-bold tracking-wider uppercase hover:bg-[#e5c440] transition-colors">
                Ahi voy!
              </button>
              <br />
              <button onClick={() => { setRsvpStatus("no"); setShowRsvpForm(true); }}
                className="w-full sm:w-auto px-10 py-4 border border-white/20 text-white/70 text-sm tracking-wider uppercase hover:border-[#d4af37] hover:text-[#d4af37] transition-colors">
                No podre ir
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="text-left space-y-4">
              <div>
                <label className="text-white/50 text-xs block mb-1.5">Nombre *</label>
                <input type="text" required value={guestName} onChange={(e) => setGuestName(e.target.value)}
                  className="w-full bg-white/5 border border-[#d4af37]/20 rounded-sm px-4 py-3 text-white text-sm focus:outline-none focus:border-[#d4af37] transition-colors"
                  placeholder="Tu nombre" />
              </div>
              {rsvpStatus === "si" && (
                <div>
                  <label className="text-white/50 text-xs block mb-1.5">Cuantos van?</label>
                  <select value={guestCount} onChange={(e) => setGuestCount(e.target.value)}
                    className="w-full bg-white/5 border border-[#d4af37]/20 rounded-sm px-4 py-3 text-white text-sm focus:outline-none focus:border-[#d4af37] transition-colors">
                    <option value="1" className="text-black">1 persona</option>
                    <option value="2" className="text-black">2 personas</option>
                    <option value="3" className="text-black">3 personas</option>
                    <option value="4" className="text-black">4 personas</option>
                  </select>
                </div>
              )}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button type="submit" className="flex-1 py-4 bg-[#d4af37] text-black text-sm font-bold tracking-wider uppercase hover:bg-[#e5c440] transition-colors flex items-center justify-center gap-2">
                  <Check size={16} /> Confirmar
                </button>
                <button type="button" onClick={sendWhatsApp}
                  className="flex-1 py-4 bg-[#25d366] text-white text-sm font-bold tracking-wider uppercase hover:bg-[#1da851] transition-colors flex items-center justify-center gap-2">
                  <Send size={16} /> WhatsApp
                </button>
              </div>
            </form>
          )}
        </div>
      </section>


      {/* ===== REGALO ===== */}
      <section className="py-14 bg-[#0a0a0a] border-t border-[#d4af37]/10 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
        <div className="max-w-md mx-auto px-6 text-center">
          <p className="text-[#d4af37] text-xs tracking-[0.3em] uppercase mb-3">Regalos</p>
          <h2 className="text-white text-2xl font-bold uppercase mb-4">Tu presencia es el mejor regalo</h2>
          <p className="text-white/40 text-sm mb-6">Si queres tener un detalle:</p>
          <div className="border border-[#d4af37]/20 rounded-lg p-5 bg-black">
            <p className="text-[10px] text-[#d4af37] uppercase tracking-wider mb-2">Alias</p>
            <div className="flex items-center justify-between bg-white/5 rounded-sm px-4 py-2.5">
              <span className="text-white text-sm font-medium">juliana.mateo.boda</span>
              <button onClick={copyAlias} className="flex items-center gap-1 text-[#d4af37] hover:text-[#e5c440] transition-colors">
                {copied ? <Check size={16} /> : <Copy size={16} />}
                <span className="text-xs">{copied ? "Copiado!" : "Copiar"}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PARTY TOOLS ===== */}
      <section className="py-10 bg-black border-t border-[#d4af37]/10 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="text-[#d4af37]/50 text-xs tracking-[0.2em] uppercase mb-4">El dia de la fiesta</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button disabled className="px-5 py-3 bg-white/5 border border-white/10 text-white/30 rounded-lg flex items-center justify-center gap-2 cursor-not-allowed text-sm">
              <Camera size={16} /> Party Cam
            </button>
            <button disabled className="px-5 py-3 bg-white/5 border border-white/10 text-white/30 rounded-lg flex items-center justify-center gap-2 cursor-not-allowed text-sm">
              <MessageCircle size={16} /> Party Chat
            </button>
          </div>
          <p className="text-white/20 text-[10px] mt-3">DISPONIBLE EL 27/09/2029</p>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <section className="py-12 bg-black text-center border-t border-[#d4af37]/10">
        <div className="max-w-xl mx-auto px-6">
          <Sparkles size={20} className="text-[#d4af37] mx-auto mb-4" />
          <p className="text-white text-3xl font-black uppercase tracking-tight">JULIANA & MATEO</p>
          <p className="text-[#d4af37] text-sm mt-2">27 de Septiembre, 2029</p>
          <div className="w-12 h-px bg-[#d4af37]/30 mx-auto my-6"></div>
          <p className="text-white/40 text-xs italic">Queremos celebrar este dia tan especial junto a ti.</p>
          <p className="text-[10px] text-white/20 mt-8 tracking-wider">HECHO CON AMOR POR <span className="text-[#d4af37]/50">TE INVITO APP</span></p>
        </div>
      </section>

      {/* Scroll animation styles */}
      <style jsx global>{`
        .animate-on-scroll { opacity: 0; transform: translateY(30px); transition: opacity 0.8s ease-out, transform 0.8s ease-out; }
        .animate-visible { opacity: 1 !important; transform: translateY(0) !important; }
      `}</style>
    </div>
  );
}
