"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  PartyPopper, Users, Calendar, MapPin, Music, Camera,
  MessageCircle, Sparkles, Vote, CreditCard, Clock,
  Wine, Star, ArrowRight, CheckCircle2, Zap, Play, Pause,
  Volume2, VolumeX,
} from "lucide-react";
import { templates } from "@/data/templates";
import InvitationCard from "@/components/InvitationCard";

const despedidaTemplates = templates.filter((t) => t.type === "despedida");

export default function DespedidasPage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showMusicPrompt, setShowMusicPrompt] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  const startMusic = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
      setShowMusicPrompt(false);
    }
  };

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) audioRef.current.pause();
      else audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  // Scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("animate-visible");
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".animate-on-scroll").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-black overflow-hidden pt-16 lg:pt-20">
      {/* Audio - Los Piratas */}
      <audio ref={audioRef} loop preload="auto">
        <source src="https://raw.githubusercontent.com/gerzavala40-bit/mkdir-public/main/Los%20Aut%C3%A9nticos%20Decadentes%20-%20Los%20Piratas%20(Official%20Video).mp3" type="audio/mpeg" />
      </audio>

      {/* Music Prompt Overlay */}
      {showMusicPrompt && (
        <div className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-sm flex items-center justify-center px-6">
          <div className="text-center max-w-sm">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#ff0040] to-[#0066ff] flex items-center justify-center mx-auto mb-6 animate-pulse">
              <Music size={32} className="text-white" />
            </div>
            <h2 className="text-white text-2xl font-black uppercase tracking-tight mb-2">Somos Los Piratas</h2>
            <p className="text-white/50 text-sm mb-8">Esta pagina tiene musica. Queres activarla?</p>
            <div className="flex flex-col gap-3">
              <button onClick={startMusic}
                className="w-full py-4 bg-gradient-to-r from-[#ff0040] to-[#cc0033] text-white font-bold text-sm uppercase tracking-wider rounded-full hover:from-[#ff1a57] hover:to-[#ff0040] transition-all flex items-center justify-center gap-2">
                <Play size={18} /> Dale que suene!
              </button>
              <button onClick={() => setShowMusicPrompt(false)}
                className="w-full py-3 border border-white/20 text-white/50 text-sm uppercase tracking-wider rounded-full hover:text-white hover:border-white/40 transition-all">
                Entrar sin musica
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Music Control */}
      {!showMusicPrompt && (
        <div className="fixed bottom-6 left-6 z-50">
          <button onClick={togglePlay}
            className="w-12 h-12 rounded-full bg-black/80 border border-[#ff0040]/50 backdrop-blur-sm text-[#ff0040] flex items-center justify-center shadow-lg shadow-[#ff0040]/20 hover:bg-[#ff0040] hover:text-white transition-colors">
            {isPlaying ? <Pause size={18} /> : <Play size={18} />}
          </button>
        </div>
      )}


      {/* ===== HERO - PIRATAS STYLE ===== */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background gradient - deep blue/black like the video */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#000510] via-[#00102a] to-black"></div>

        {/* Neon glow effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-20" style={{ background: "radial-gradient(circle, #0066ff, transparent 70%)" }}></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full opacity-15" style={{ background: "radial-gradient(circle, #ff0040, transparent 70%)" }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5" style={{ background: "radial-gradient(circle, #0066ff, transparent 60%)" }}></div>

        {/* Animated neon particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 30 }).map((_, i) => (
            <div key={i} className="absolute rounded-full animate-pulse"
              style={{
                width: `${1 + Math.random() * 3}px`,
                height: `${1 + Math.random() * 3}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                backgroundColor: Math.random() > 0.6 ? '#ff0040' : '#0066ff',
                opacity: 0.3 + Math.random() * 0.5,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${1.5 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 py-20 max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#ff0040]/10 border border-[#ff0040]/30 text-[#ff0040] px-4 py-1.5 rounded-full text-xs tracking-wider uppercase mb-8 backdrop-blur-sm">
            <PartyPopper size={14} />
            <span>La ultima noche de libertad</span>
          </div>

          {/* Main title with neon glow */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase text-white leading-none tracking-tighter mb-4"
            style={{ textShadow: "0 0 40px rgba(0, 102, 255, 0.3), 0 0 80px rgba(0, 102, 255, 0.1)" }}>
            DESPEDIDAS
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase leading-none tracking-tighter mb-8"
            style={{ color: "#ff0040", textShadow: "0 0 30px rgba(255, 0, 64, 0.4), 0 0 60px rgba(255, 0, 64, 0.2)" }}>
            DE SOLTERO/A
          </h2>

          {/* Subtitle */}
          <p className="text-white/50 text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Invitaciones digitales para la mejor noche.
            Porque <span className="text-[#ff0040] font-medium">los piratas</span> saben como festejar.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#plantillas"
              className="inline-flex items-center justify-center gap-2 bg-[#ff0040] text-white px-8 py-4 text-sm font-bold tracking-wider uppercase hover:bg-[#ff1a57] transition-all rounded-full shadow-lg shadow-[#ff0040]/30 group">
              Ver Disenos
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#como-funciona"
              className="inline-flex items-center justify-center gap-2 border border-[#0066ff]/50 text-[#0066ff] px-8 py-4 text-sm tracking-wider uppercase hover:bg-[#0066ff]/10 transition-all rounded-full">
              Como Funciona
            </a>
          </div>

          {/* Stats */}
          <div className="flex items-center justify-center gap-8 sm:gap-12 mt-16 flex-wrap">
            <div className="text-center">
              <p className="text-2xl sm:text-3xl font-black text-white">500+</p>
              <p className="text-[#0066ff]/60 text-xs mt-1">Despedidas</p>
            </div>
            <div className="text-center">
              <p className="text-2xl sm:text-3xl font-black text-white">4.9</p>
              <p className="text-[#0066ff]/60 text-xs mt-1 flex items-center gap-1 justify-center">
                <Star size={10} className="text-[#ff0040]" fill="#ff0040" /> Rating
              </p>
            </div>
            <div className="text-center">
              <p className="text-2xl sm:text-3xl font-black text-white">24h</p>
              <p className="text-[#0066ff]/60 text-xs mt-1">Entrega</p>
            </div>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
      </section>


      {/* ===== PLANTILLAS ===== */}
      <section className="py-20 bg-black" id="plantillas">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
          <div className="text-center mb-14">
            <p className="text-[#ff0040] text-xs tracking-[0.3em] uppercase mb-3">Nuestros disenos</p>
            <h2 className="text-3xl lg:text-4xl font-black uppercase text-white tracking-tight mb-4">Plantillas de Despedida</h2>
            <p className="text-white/40 text-sm max-w-lg mx-auto">Elegi el estilo que mas te represente. 100% personalizable.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {despedidaTemplates.map((template) => (
              <InvitationCard key={template.id} template={template} />
            ))}
          </div>
          <div className="text-center">
            <a href="https://wa.me/5491112345678?text=Hola!%20Quiero%20una%20invitacion%20de%20despedida%20personalizada"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-[#ff0040]/50 text-[#ff0040] px-6 py-3 text-sm tracking-wider uppercase rounded-full hover:bg-[#ff0040]/10 transition-all">
              <MessageCircle size={16} /> No encontras tu estilo? Pedilo a medida
            </a>
          </div>
        </div>
      </section>

      {/* ===== TIPOS DE EVENTO ===== */}
      <section className="py-20 bg-[#050510]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
          <div className="text-center mb-14">
            <p className="text-[#0066ff] text-xs tracking-[0.3em] uppercase mb-3">Para todos los estilos</p>
            <h2 className="text-3xl lg:text-4xl font-black uppercase text-white tracking-tight">Que onda tu despedida?</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { emoji: "🥂", title: "Elegante", desc: "Cena, spa, vino y glamour.", color: "border-[#ff0040]/30 hover:border-[#ff0040]" },
              { emoji: "🎉", title: "Fiesta Total", desc: "Boliche, bar crawl, karaoke.", color: "border-[#0066ff]/30 hover:border-[#0066ff]" },
              { emoji: "🏖️", title: "Pool Party", desc: "Pileta, musica y tragos.", color: "border-[#00ccff]/30 hover:border-[#00ccff]" },
              { emoji: "🎲", title: "Tematica", desc: "Casino, 80s, neon, cowboys.", color: "border-[#ff0040]/30 hover:border-[#ff0040]" },
            ].map((item) => (
              <div key={item.title} className={`bg-white/5 rounded-xl p-6 text-center border ${item.color} transition-colors cursor-pointer backdrop-blur-sm`}>
                <div className="text-4xl mb-4">{item.emoji}</div>
                <h3 className="text-white font-bold text-sm mb-2">{item.title}</h3>
                <p className="text-white/40 text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ===== COMO FUNCIONA ===== */}
      <section className="py-20 bg-black" id="como-funciona">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
          <div className="text-center mb-16">
            <p className="text-[#0066ff] text-xs tracking-[0.3em] uppercase mb-3">Re facil</p>
            <h2 className="text-3xl lg:text-4xl font-black uppercase text-white tracking-tight">Como funciona</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { step: "01", title: "Elegi el estilo", desc: "Mira los disenos y elegi. Tenemos de todo!", icon: <Sparkles size={24} /> },
              { step: "02", title: "Mandanos los datos", desc: "Por WhatsApp nos contas la info: fecha, lugar, nombres.", icon: <MessageCircle size={24} /> },
              { step: "03", title: "Recibi el link", desc: "En 24hs te mandamos tu invitacion lista para compartir.", icon: <Zap size={24} /> },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#ff0040] to-[#0066ff] text-white mb-6">
                  {item.icon}
                </div>
                <h3 className="text-white text-lg font-bold mb-3">{item.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed max-w-xs mx-auto">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== QUE INCLUYE ===== */}
      <section className="py-20 bg-[#050510]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
          <div className="text-center mb-14">
            <p className="text-[#ff0040] text-xs tracking-[0.3em] uppercase mb-3">Todo incluido</p>
            <h2 className="text-3xl lg:text-4xl font-black uppercase text-white tracking-tight mb-4">Que incluye</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: <Clock size={20} />, title: "Cuenta regresiva", desc: "En vivo desde que abren el link." },
              { icon: <MapPin size={20} />, title: "Mapa interactivo", desc: "Un toque y llegan al punto de encuentro." },
              { icon: <CheckCircle2 size={20} />, title: "RSVP", desc: "Lista de confirmados en tiempo real." },
              { icon: <Music size={20} />, title: "Musica", desc: "La cancion que elijas suena al abrir." },
              { icon: <Camera size={20} />, title: "Party Cam", desc: "Muro de fotos en vivo." },
              { icon: <MessageCircle size={20} />, title: "Party Chat", desc: "Chat grupal con zumbidos y colores." },
              { icon: <Calendar size={20} />, title: "Itinerario", desc: "Timeline del evento completo." },
              { icon: <Vote size={20} />, title: "Encuestas", desc: "Vota actividades y lugares." },
              { icon: <CreditCard size={20} />, title: "Vaquita", desc: "Alias/CBU con boton copiar." },
              { icon: <Wine size={20} />, title: "Menu de tragos", desc: "Carta de la noche." },
              { icon: <Users size={20} />, title: "Lista invitados", desc: "Control total de quien viene." },
              { icon: <PartyPopper size={20} />, title: "Custom", desc: "Colores y estilo a tu medida." },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-3 p-4 rounded-lg bg-white/5 border border-white/5 hover:border-[#0066ff]/30 transition-colors">
                <div className="text-[#0066ff] flex-shrink-0 mt-0.5">{item.icon}</div>
                <div>
                  <h3 className="text-white text-xs font-bold mb-0.5">{item.title}</h3>
                  <p className="text-white/30 text-xs">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ===== PLANES ===== */}
      <section className="py-20 bg-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
          <div className="text-center mb-14">
            <p className="text-[#ff0040] text-xs tracking-[0.3em] uppercase mb-3">Precios</p>
            <h2 className="text-3xl lg:text-4xl font-black uppercase text-white tracking-tight">Elegi tu plan</h2>
            <p className="text-white/30 text-sm mt-2">30% OFF por transferencia</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Basico", price: "25.000", features: ["Cuenta regresiva + mapa", "Confirmacion WhatsApp", "Vaquita + dress code", "Envios ilimitados"], highlighted: false },
              { name: "Premium", price: "45.000", popular: true, features: ["Todo lo del Basico", "RSVP propio", "Musica + Galeria", "Party Cam", "Party Chat en vivo"], highlighted: true },
              { name: "Premium Plus", price: "65.000", features: ["Todo lo del Premium", "Personalizada + trivia", "Tu propio dominio", "Fotos ilimitadas", "Encuestas"], highlighted: false },
            ].map((plan) => (
              <div key={plan.name} className={`rounded-xl p-6 ${plan.highlighted ? "bg-gradient-to-br from-[#ff0040]/10 to-[#0066ff]/10 border-2 border-[#ff0040]/50 scale-[1.02]" : "bg-white/5 border border-white/10"}`}>
                {plan.popular && <p className="text-center mb-3"><span className="bg-[#ff0040] text-white text-[10px] tracking-wider uppercase px-3 py-1 rounded-full">Popular</span></p>}
                <h3 className="text-white text-lg font-bold text-center">{plan.name}</h3>
                <div className="text-center my-4"><span className="text-white/50 text-sm">$</span><span className="text-white text-3xl font-black">{plan.price}</span></div>
                <p className="text-white/30 text-xs text-center mb-6">por invitacion</p>
                <ul className="space-y-2 mb-6">{plan.features.map((f) => (<li key={f} className="flex items-center gap-2"><CheckCircle2 size={12} className="text-[#0066ff] flex-shrink-0" /><span className="text-white/60 text-xs">{f}</span></li>))}</ul>
                <button className={`w-full py-3 text-sm font-bold uppercase rounded-full transition-colors ${plan.highlighted ? "bg-[#ff0040] text-white hover:bg-[#ff1a57]" : "border border-white/20 text-white hover:bg-white/10"}`}>Elegir</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIOS ===== */}
      <section className="py-20 bg-[#050510]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
          <div className="text-center mb-14">
            <p className="text-[#0066ff] text-xs tracking-[0.3em] uppercase mb-3">Testimonios</p>
            <h2 className="text-3xl font-black uppercase text-white">Lo que dicen</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Camila P.", event: "Despedida de soltera", text: "Las chicas no podian creer la invitacion. El Party Chat fue lo mejor de la noche!" },
              { name: "Nicolas R.", event: "Despedida de soltero", text: "Mande datos por WhatsApp y al otro dia tenia todo. Los pibes quedaron flasheados." },
              { name: "Valentina S.", event: "Pool Party", text: "La musica al abrir le dio un toque increible. Todos preguntaban donde la hicimos." },
            ].map((t, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6">
                <div className="flex items-center gap-1 mb-3">{[1,2,3,4,5].map((s) => (<Star key={s} size={12} className="text-[#ff0040]" fill="#ff0040" />))}</div>
                <p className="text-white/60 text-sm italic mb-4">&ldquo;{t.text}&rdquo;</p>
                <p className="text-white text-sm font-bold">{t.name}</p>
                <p className="text-white/30 text-xs">{t.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ background: "radial-gradient(circle at 50% 50%, #ff0040, transparent 60%)" }}></div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
          <PartyPopper size={40} className="text-[#ff0040] mx-auto mb-6" />
          <h2 className="text-3xl lg:text-4xl font-black uppercase text-white mb-4">La mejor noche merece la mejor invitacion</h2>
          <p className="text-white/40 text-sm mb-10">En 24hs tenes tu invitacion digital lista para mandar al grupo.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/5491112345678?text=Hola!%20Quiero%20una%20invitacion%20de%20despedida" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25d366] text-white px-8 py-4 text-sm font-bold uppercase rounded-full hover:bg-[#1da851] transition-colors">
              <MessageCircle size={18} /> WhatsApp
            </a>
            <a href="#plantillas" className="inline-flex items-center justify-center gap-2 border border-[#ff0040]/50 text-[#ff0040] px-8 py-4 text-sm uppercase rounded-full hover:bg-[#ff0040]/10 transition-all">Ver Disenos</a>
          </div>
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
