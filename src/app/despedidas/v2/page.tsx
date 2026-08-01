"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  PartyPopper, MapPin, Music, Camera, MessageCircle, Sparkles,
  Clock, Star, ArrowRight, CheckCircle2, Zap, Volume2, VolumeX,
} from "lucide-react";
import { templates } from "@/data/templates";
import InvitationCard from "@/components/InvitationCard";

const despedidaTemplates = templates.filter((t) => t.type === "despedida");

export default function DespedidasV2() {
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
    <div className="min-h-screen bg-[#0a0a0a] pt-16 lg:pt-20">
      <audio ref={audioRef} loop preload="auto">
        <source src="https://raw.githubusercontent.com/gerzavala40-bit/mkdir-public/main/Los%20Aut%C3%A9nticos%20Decadentes%20-%20Los%20Piratas%20(Official%20Video).mp3" type="audio/mpeg" />
      </audio>

      <div className="fixed bottom-6 left-6 z-50">
        <button onClick={() => { if (audioRef.current) { audioRef.current.muted = !isMuted; setIsMuted(!isMuted); } }}
          className={`w-11 h-11 rounded-full flex items-center justify-center shadow-lg transition-all ${isMuted ? "bg-white/10 text-white/40" : "bg-[#e040fb] text-white shadow-[#e040fb]/30"}`}>
          {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
        </button>
      </div>

      {/* HERO - GRADIENT PINK/PURPLE */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a0030] via-[#2d004d] to-[#0a001a]"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-20" style={{ background: "radial-gradient(circle, #e040fb, transparent 70%)" }}></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-15" style={{ background: "radial-gradient(circle, #7c4dff, transparent 70%)" }}></div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 px-4 py-1.5 rounded-full text-xs text-[#e040fb] tracking-wider uppercase mb-8 backdrop-blur-sm">
            <Sparkles size={12} /> Despedidas Premium
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase text-white leading-none mb-4" style={{ textShadow: "0 0 60px #e040fb30" }}>
            LAST NIGHT
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-[#e040fb] tracking-wide mb-8">
            of freedom
          </h2>
          <p className="text-white/50 text-sm sm:text-base max-w-md mx-auto mb-10">
            Invitaciones digitales que arrancan la fiesta antes de llegar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#plantillas" className="inline-flex items-center gap-2 bg-[#e040fb] text-white px-8 py-4 text-sm font-bold uppercase rounded-full hover:bg-[#ea60fc] transition-all group">
              Ver Disenos <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#info" className="inline-flex items-center gap-2 border border-white/20 text-white px-8 py-4 text-sm uppercase rounded-full hover:bg-white/5 transition-all">
              Info
            </a>
          </div>
        </div>
      </section>

      {/* PLANTILLAS */}
      <section className="py-20 bg-[#0a0a0a]" id="plantillas">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 fade-up opacity-0 translate-y-8 transition-all duration-700">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-black uppercase text-white">Plantillas</h2>
            <p className="text-white/40 text-sm mt-2">Elegi tu estilo. 100% personalizable.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {despedidaTemplates.map((t) => <InvitationCard key={t.id} template={t} />)}
          </div>
        </div>
      </section>

      {/* FEATURES HORIZONTAL SCROLL */}
      <section className="py-16 bg-[#110018] border-y border-white/5" id="info">
        <div className="max-w-7xl mx-auto px-4 fade-up opacity-0 translate-y-8 transition-all duration-700">
          <h2 className="text-2xl font-black uppercase text-white text-center mb-10">Todo incluido</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: <Clock size={20} />, t: "Countdown" },
              { icon: <MapPin size={20} />, t: "Mapa" },
              { icon: <CheckCircle2 size={20} />, t: "RSVP" },
              { icon: <Music size={20} />, t: "Musica" },
              { icon: <Camera size={20} />, t: "Party Cam" },
              { icon: <MessageCircle size={20} />, t: "Chat" },
              { icon: <Zap size={20} />, t: "Encuestas" },
              { icon: <PartyPopper size={20} />, t: "Custom" },
            ].map((f) => (
              <div key={f.t} className="bg-white/5 rounded-xl p-4 text-center border border-white/5 hover:border-[#e040fb]/30 transition-colors">
                <div className="text-[#e040fb] flex justify-center mb-2">{f.icon}</div>
                <p className="text-white text-xs font-medium">{f.t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLANES */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-4 fade-up opacity-0 translate-y-8 transition-all duration-700">
          <h2 className="text-2xl font-black uppercase text-white text-center mb-10">Planes</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { n: "Basico", p: "25.000", f: ["Countdown + mapa", "RSVP WhatsApp", "Vaquita", "Envios ilimitados"] },
              { n: "Premium", p: "45.000", pop: true, f: ["Todo Basico", "RSVP propio", "Musica + Galeria", "Party Cam + Chat"] },
              { n: "Plus", p: "65.000", f: ["Todo Premium", "Personalizada", "Dominio propio", "Encuestas + trivia"] },
            ].map((pl) => (
              <div key={pl.n} className={`rounded-xl p-6 ${pl.pop ? "bg-[#e040fb]/10 border-2 border-[#e040fb]/50" : "bg-white/5 border border-white/10"}`}>
                {pl.pop && <p className="text-center mb-2"><span className="bg-[#e040fb] text-white text-[10px] px-3 py-0.5 rounded-full uppercase tracking-wider">Popular</span></p>}
                <h3 className="text-white font-bold text-center text-lg">{pl.n}</h3>
                <p className="text-center my-3"><span className="text-white/40">$</span><span className="text-white text-2xl font-black">{pl.p}</span></p>
                <ul className="space-y-2 mb-5">{pl.f.map((x) => <li key={x} className="flex items-center gap-2 text-white/60 text-xs"><CheckCircle2 size={11} className="text-[#e040fb]" />{x}</li>)}</ul>
                <button className={`w-full py-2.5 rounded-full text-sm font-bold uppercase ${pl.pop ? "bg-[#e040fb] text-white" : "border border-white/20 text-white"}`}>Elegir</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-b from-[#0a0a0a] to-[#1a0030] text-center">
        <div className="fade-up opacity-0 translate-y-8 transition-all duration-700">
          <h2 className="text-2xl font-black uppercase text-white mb-4">Arranca la fiesta</h2>
          <a href="https://wa.me/5491112345678" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25d366] text-white px-8 py-4 rounded-full text-sm font-bold uppercase">
            <MessageCircle size={18} /> WhatsApp
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
