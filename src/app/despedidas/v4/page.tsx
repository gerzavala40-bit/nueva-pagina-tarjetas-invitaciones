"use client";
import { useState, useEffect, useRef } from "react";
import { PartyPopper, MapPin, Music, Camera, MessageCircle, Clock, ArrowRight, CheckCircle2, Zap, Volume2, VolumeX, Users, CreditCard, Calendar, Vote, Sparkles } from "lucide-react";
import { templates } from "@/data/templates";
import InvitationCard from "@/components/InvitationCard";
const despedidaTemplates = templates.filter((t) => t.type === "despedida");
export default function DespedidasV4() {
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  useEffect(() => { const a = audioRef.current; if (a) { a.currentTime = 21; a.volume = 0.6; a.play().catch(() => { const h = () => { audioRef.current?.play(); document.removeEventListener("click", h); }; document.addEventListener("click", h); }); } }, []);
  useEffect(() => { const o = new IntersectionObserver((es) => { es.forEach((e) => { if (e.isIntersecting) e.target.classList.add("vis"); }); }, { threshold: 0.1 }); document.querySelectorAll(".fade-up").forEach((el) => o.observe(el)); return () => o.disconnect(); }, []);
  return (<div className="min-h-screen bg-[#0d0d0d] pt-16 lg:pt-20">
    <audio ref={audioRef} loop preload="auto"><source src="https://raw.githubusercontent.com/gerzavala40-bit/mkdir-public/main/Los%20Aut%C3%A9nticos%20Decadentes%20-%20Los%20Piratas%20(Official%20Video).mp3" type="audio/mpeg" /></audio>
    <div className="fixed bottom-6 left-6 z-50"><button onClick={() => { if (audioRef.current) { audioRef.current.muted = !isMuted; setIsMuted(!isMuted); } }} className={`w-11 h-11 rounded-full flex items-center justify-center shadow-lg transition-all ${isMuted ? "bg-white/10 text-white/40 border border-white/10" : "bg-[#ff1493] text-white shadow-[#ff1493]/30"}`}>{isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}</button></div>

    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a0a2e] via-[#0d0d0d] to-[#1a0020]"></div>
      <div className="absolute top-10 right-10 w-64 h-64 rounded-full opacity-10" style={{background:"radial-gradient(circle, #ff1493, transparent 70%)"}}></div>
      <div className="absolute bottom-20 left-10 w-48 h-48 rounded-full opacity-10" style={{background:"radial-gradient(circle, #ffd700, transparent 70%)"}}></div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-[#ff1493]/10 border border-[#ff1493]/20 text-[#ff1493] px-4 py-1.5 rounded-full text-xs tracking-wider uppercase mb-6"><PartyPopper size={14}/> Despedidas Premium</div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">La noche que<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff1493] to-[#ffd700]">nadie olvida</span></h1>
          <p className="text-white/50 text-sm sm:text-base leading-relaxed mb-8 max-w-md">Invitaciones digitales para despedidas que arrancan la fiesta antes de llegar.</p>
          <div className="flex flex-wrap gap-3">
            <a href="#plantillas" className="inline-flex items-center gap-2 bg-[#ff1493] text-white px-6 py-3.5 text-sm font-bold rounded-full hover:bg-[#ff1493]/90 transition-all group">Ver Disenos <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform"/></a>
            <a href="https://wa.me/5491112345678" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-white px-6 py-3.5 text-sm rounded-full hover:bg-white/10 transition-all"><MessageCircle size={16}/> WhatsApp</a>
          </div>
        </div>
        <div className="relative hidden lg:block"><div className="grid grid-cols-2 gap-4">
          <div className="bg-gradient-to-br from-[#ff1493]/20 to-[#ff1493]/5 rounded-2xl p-6 border border-[#ff1493]/20 translate-y-4"><div className="text-3xl mb-3">👄</div><p className="text-white text-sm font-bold">Labios Neon</p><p className="text-white/40 text-xs mt-1">Sensual</p></div>
          <div className="bg-gradient-to-br from-[#ffd700]/20 to-[#ffd700]/5 rounded-2xl p-6 border border-[#ffd700]/20"><div className="text-3xl mb-3">🍾</div><p className="text-white text-sm font-bold">Fort Party</p><p className="text-white/40 text-xs mt-1">Opulencia</p></div>
          <div className="bg-gradient-to-br from-[#00ffcc]/20 to-[#00ffcc]/5 rounded-2xl p-6 border border-[#00ffcc]/20"><div className="text-3xl mb-3">🍸</div><p className="text-white text-sm font-bold">Neon Drunk</p><p className="text-white/40 text-xs mt-1">Tragos</p></div>
          <div className="bg-gradient-to-br from-[#0088ff]/20 to-[#0088ff]/5 rounded-2xl p-6 border border-[#0088ff]/20 -translate-y-4"><div className="text-3xl mb-3">☠️</div><p className="text-white text-sm font-bold">Pirata Night</p><p className="text-white/40 text-xs mt-1">Sin reglas</p></div>
        </div></div>
      </div>
    </section>

    <section className="py-20 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 fade-up opacity-0 translate-y-8 transition-all duration-700">
        <div className="text-center mb-14"><p className="text-[#ff1493] text-xs tracking-[0.3em] uppercase mb-3">Todo incluido</p><h2 className="text-3xl font-black text-white">Que incluye</h2></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="lg:col-span-2 bg-gradient-to-br from-[#1a0a2e] to-[#2d1050] rounded-2xl p-8 border border-[#ff1493]/10 relative overflow-hidden"><div className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-10" style={{background:"radial-gradient(circle,#ff1493,transparent)"}}></div><div className="relative z-10"><div className="w-12 h-12 rounded-full bg-[#ff1493]/20 flex items-center justify-center mb-4"><Music size={22} className="text-[#ff1493]"/></div><h3 className="text-white font-bold text-lg mb-2">Musica de fondo</h3><p className="text-white/40 text-sm">Suena al abrir. Marca el mood.</p></div></div>
          <div className="bg-[#141414] rounded-2xl p-6 border border-white/5"><div className="w-10 h-10 rounded-full bg-[#ffd700]/10 flex items-center justify-center mb-3"><Clock size={18} className="text-[#ffd700]"/></div><h3 className="text-white font-bold text-sm mb-1">Countdown</h3><p className="text-white/30 text-xs">En vivo</p></div>
          <div className="bg-[#141414] rounded-2xl p-6 border border-white/5"><div className="w-10 h-10 rounded-full bg-[#00ffcc]/10 flex items-center justify-center mb-3"><MapPin size={18} className="text-[#00ffcc]"/></div><h3 className="text-white font-bold text-sm mb-1">Mapa</h3><p className="text-white/30 text-xs">Un toque y llegan</p></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
          <div className="bg-[#141414] rounded-2xl p-6 border border-white/5"><div className="w-10 h-10 rounded-full bg-[#ff1493]/10 flex items-center justify-center mb-3"><CheckCircle2 size={18} className="text-[#ff1493]"/></div><h3 className="text-white font-bold text-sm mb-1">RSVP</h3><p className="text-white/30 text-xs">Tiempo real</p></div>
          <div className="bg-[#141414] rounded-2xl p-6 border border-white/5"><div className="w-10 h-10 rounded-full bg-[#ffd700]/10 flex items-center justify-center mb-3"><Camera size={18} className="text-[#ffd700]"/></div><h3 className="text-white font-bold text-sm mb-1">Party Cam</h3><p className="text-white/30 text-xs">Fotos en vivo</p></div>
          <div className="bg-[#141414] rounded-2xl p-6 border border-white/5"><div className="w-10 h-10 rounded-full bg-[#0088ff]/10 flex items-center justify-center mb-3"><MessageCircle size={18} className="text-[#0088ff]"/></div><h3 className="text-white font-bold text-sm mb-1">Party Chat</h3><p className="text-white/30 text-xs">Zumbidos!</p></div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mt-4">
          {[{icon:<Calendar size={16}/>,t:"Itinerario",c:"#ff1493"},{icon:<Vote size={16}/>,t:"Encuestas",c:"#00ffcc"},{icon:<CreditCard size={16}/>,t:"Vaquita",c:"#ffd700"},{icon:<Users size={16}/>,t:"Invitados",c:"#0088ff"},{icon:<Sparkles size={16}/>,t:"Custom",c:"#ff1493"}].map((f)=>(<div key={f.t} className="bg-[#141414] rounded-xl p-4 text-center border border-white/5"><div className="w-8 h-8 rounded-full mx-auto mb-2 flex items-center justify-center" style={{backgroundColor:f.c+"15"}}><span style={{color:f.c}}>{f.icon}</span></div><p className="text-white/60 text-xs font-medium">{f.t}</p></div>))}
        </div>
      </div>
    </section>

    <section className="py-20 bg-[#080808]" id="plantillas"><div className="max-w-7xl mx-auto px-6 lg:px-8 fade-up opacity-0 translate-y-8 transition-all duration-700"><div className="text-center mb-14"><h2 className="text-3xl font-black text-white">Plantillas</h2></div><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">{despedidaTemplates.map((t)=><InvitationCard key={t.id} template={t}/>)}</div></div></section>
    <section className="py-20 bg-[#0d0d0d]"><div className="max-w-5xl mx-auto px-6 fade-up opacity-0 translate-y-8 transition-all duration-700"><div className="text-center mb-14"><h2 className="text-3xl font-black text-white">Planes</h2><p className="text-white/30 text-sm mt-2">30% OFF transferencia</p></div><div className="grid md:grid-cols-3 gap-6">{[{n:"Basico",p:"25.000",c:"#00ffcc",f:["Countdown+mapa","RSVP WhatsApp","Vaquita","Envios ilim."]},{n:"Premium",p:"45.000",c:"#ff1493",pop:true,f:["Todo Basico","RSVP propio","Musica+Galeria","Party Cam+Chat"]},{n:"Plus",p:"65.000",c:"#ffd700",f:["Todo Premium","Personalizada","Dominio","Encuestas"]}].map((pl)=>(<div key={pl.n} className={`rounded-2xl p-7 bg-[#141414] ${pl.pop?"border-2 scale-[1.02]":"border border-white/5"}`} style={{borderColor:pl.pop?pl.c+"60":undefined}}>{pl.pop&&<p className="text-center mb-3"><span className="text-[10px] font-bold px-3 py-1 rounded-full uppercase" style={{backgroundColor:pl.c+"20",color:pl.c}}>Popular</span></p>}<h3 className="text-white font-bold text-center text-lg">{pl.n}</h3><div className="text-center my-4"><span className="text-white/40">$</span><span className="text-white text-3xl font-black">{pl.p}</span></div><ul className="space-y-2 mb-6">{pl.f.map((x)=><li key={x} className="flex items-center gap-2"><CheckCircle2 size={12} style={{color:pl.c}}/><span className="text-white/60 text-xs">{x}</span></li>)}</ul><button className="w-full py-3 rounded-full text-sm font-bold" style={{backgroundColor:pl.pop?pl.c:"transparent",color:pl.pop?"#fff":pl.c,border:pl.pop?"none":`1px solid ${pl.c}40`}}>Elegir</button></div>))}</div></div></section>
    <section className="py-20 bg-[#080808] text-center"><div className="fade-up opacity-0 translate-y-8 transition-all duration-700 max-w-2xl mx-auto px-6"><div className="bg-gradient-to-br from-[#1a0a2e] to-[#2d1050] rounded-3xl p-10 border border-[#ff1493]/10"><PartyPopper size={36} className="text-[#ff1493] mx-auto mb-5"/><h2 className="text-2xl font-black text-white mb-3">La mejor noche merece la mejor invitacion</h2><p className="text-white/40 text-sm mb-8">En 24hs tenes todo listo.</p><a href="https://wa.me/5491112345678" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25d366] text-white px-8 py-4 rounded-full text-sm font-bold"><MessageCircle size={18}/> WhatsApp</a></div></div></section>
    <style jsx global>{`.fade-up{opacity:0;transform:translateY(30px);transition:opacity .8s,transform .8s}.vis{opacity:1!important;transform:translateY(0)!important}`}</style>
  </div>);
}
