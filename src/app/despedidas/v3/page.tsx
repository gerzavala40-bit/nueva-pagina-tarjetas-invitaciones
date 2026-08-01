"use client";

import { useState, useEffect, useRef } from "react";
import {
  PartyPopper, MapPin, Music, Camera, MessageCircle,
  Clock, Star, ArrowRight, CheckCircle2, Zap, Volume2, VolumeX,
} from "lucide-react";
import { templates } from "@/data/templates";
import InvitationCard from "@/components/InvitationCard";

const despedidaTemplates = templates.filter((t) => t.type === "despedida");

export default function DespedidasV3() {
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.currentTime = 21;
      audio.volume = 0.6;
      audio.play().catch(() => {
        const h = () => { audioRef.current?.play(); document.removeEventListener("click", h); };
        document.addEventListener("click", h);
      });
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("vis"); });
    }, { threshold: 0.1 });
    document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-black pt-16 lg:pt-20">
      <audio ref={audioRef} loop preload="auto">
        <source src="https://raw.githubusercontent.com/gerzavala40-bit/mkdir-public/main/Los%20Aut%C3%A9nticos%20Decadentes%20-%20Los%20Piratas%20(Official%20Video).mp3" type="audio/mpeg" />
      </audio>

      <div className="fixed bottom-6 left-6 z-50">
        <button onClick={() => { if (audioRef.current) { audioRef.current.muted = !isMuted; setIsMuted(!isMuted); } }}
          className={`w-11 h-11 rounded-full flex items-center justify-center shadow-lg transition-all ${isMuted ? "bg-white/10 text-white/40" : "bg-[#ff6b00] text-white shadow-[#ff6b00]/30"}`}>
          {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
        </button>
      </div>

      {/* HERO - FIRE/ORANGE AGGRESSIVE */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black"></div>
        {/* Harsh diagonal lines */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 40px, #ff6b00 40px, #ff6b00 41px)" }}></div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#ff6b00] via-[#ff0040] to-[#ff6b00]"></div>
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#ff6b00] via-[#ff0040] to-[#ff6b00]"></div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="text-7xl sm:text-8xl md:text-9xl font-black text-white uppercase leading-none tracking-tighter relative">
            <span className="relative">
              DESP
              <span className="text-[#ff6b00]">E</span>
              DIDA
            </span>
          </div>
          <div className="mt-2 flex items-center justify-center gap-4">
            <div className="h-px flex-1 max-w-[80px] bg-[#ff6b00]"></div>
            <span className="text-[#ff6b00] text-sm font-bold uppercase tracking-[0.5em]">de soltero/a</span>
            <div className="h-px flex-1 max-w-[80px] bg-[#ff6b00]"></div>
          </div>
          <p className="text-white/40 text-sm mt-8 max-w-sm mx-auto">
            Sin filtro. Sin limites. La noche que nadie va a olvidar.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#plantillas" className="bg-[#ff6b00] text-black px-8 py-4 text-sm font-black uppercase tracking-wider hover:bg-[#ff8533] transition-colors inline-flex items-center gap-2 justify-center">
              VER DISENOS <ArrowRight size={16} />
            </a>
            <a href="https://wa.me/5491112345678" target="_blank" rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-4 text-sm font-black uppercase tracking-wider hover:bg-white hover:text-black transition-all inline-flex items-center gap-2 justify-center">
              CONTACTAR
            </a>
          </div>
        </div>
      </section>

      {/* PLANTILLAS - DARK GRID */}
      <section className="py-20 bg-black border-t border-[#ff6b00]/20" id="plantillas">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 fade-up opacity-0 translate-y-8 transition-all duration-700">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px flex-1 bg-[#ff6b00]/20"></div>
            <h2 className="text-2xl font-black uppercase text-white tracking-tight">DISENOS</h2>
            <div className="h-px flex-1 bg-[#ff6b00]/20"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {despedidaTemplates.map((t) => <InvitationCard key={t.id} template={t} />)}
          </div>
        </div>
      </section>

      {/* FEATURES - BRUTAL LIST */}
      <section className="py-16 bg-[#0a0a0a] border-t border-[#ff6b00]/20">
        <div className="max-w-4xl mx-auto px-4 fade-up opacity-0 translate-y-8 transition-all duration-700">
          <h2 className="text-2xl font-black uppercase text-white text-center mb-10">QUE INCLUYE</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "Cuenta regresiva en vivo",
              "Mapa interactivo (1 toque)",
              "RSVP + confirmacion WhatsApp",
              "Musica al abrir",
              "Party Cam (fotos en vivo)",
              "Party Chat (zumbidos!)",
              "Itinerario completo",
              "Vaquita con alias/CBU",
              "Encuestas para el grupo",
              "Diseño 100% personalizado",
            ].map((f) => (
              <div key={f} className="flex items-center gap-3 py-3 px-4 border-l-2 border-[#ff6b00] bg-white/5">
                <CheckCircle2 size={14} className="text-[#ff6b00] flex-shrink-0" />
                <span className="text-white/70 text-sm">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLANES - HARSH CARDS */}
      <section className="py-20 bg-black border-t border-[#ff6b00]/20">
        <div className="max-w-4xl mx-auto px-4 fade-up opacity-0 translate-y-8 transition-all duration-700">
          <h2 className="text-2xl font-black uppercase text-white text-center mb-10">PRECIOS</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { n: "BASICO", p: "25K", f: ["Countdown + mapa", "RSVP WhatsApp", "Vaquita", "Envios ilim."] },
              { n: "PREMIUM", p: "45K", pop: true, f: ["+ RSVP propio", "+ Musica + Fotos", "+ Party Cam", "+ Party Chat"] },
              { n: "PLUS", p: "65K", f: ["+ Personalizada", "+ Dominio", "+ Encuestas", "+ Soporte VIP"] },
            ].map((pl) => (
              <div key={pl.n} className={`p-6 ${pl.pop ? "bg-[#ff6b00] text-black" : "bg-white/5 border border-white/10 text-white"}`}>
                {pl.pop && <p className="text-[10px] font-black tracking-widest mb-2">★ POPULAR</p>}
                <h3 className="font-black text-lg">{pl.n}</h3>
                <p className="text-3xl font-black my-3">${pl.p}</p>
                <ul className="space-y-1.5 mb-5">{pl.f.map((x) => <li key={x} className={`text-xs ${pl.pop ? "text-black/70" : "text-white/50"}`}>→ {x}</li>)}</ul>
                <button className={`w-full py-3 text-xs font-black uppercase ${pl.pop ? "bg-black text-[#ff6b00]" : "bg-[#ff6b00] text-black"}`}>ELEGIR</button>
              </div>
            ))}
          </div>
          <p className="text-white/20 text-xs text-center mt-6">30% OFF por transferencia. Sena 50%.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-black border-t border-[#ff6b00]/20 text-center">
        <div className="fade-up opacity-0 translate-y-8 transition-all duration-700">
          <p className="text-[#ff6b00] text-4xl font-black uppercase mb-4">VAMOS?</p>
          <p className="text-white/40 text-sm mb-8">En 24hs tenes la invitacion lista.</p>
          <a href="https://wa.me/5491112345678" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25d366] text-white px-10 py-4 text-sm font-black uppercase hover:bg-[#1da851]">
            <MessageCircle size={18} /> WHATSAPP
          </a>
        </div>
      </section>

      <style jsx global>{`
        .fade-up { opacity:0; transform:translateY(30px); transition:opacity .8s, transform .8s; }
        .vis { opacity:1!important; transform:translateY(0)!important; }
      `}</style>
    </div>
  );
}
