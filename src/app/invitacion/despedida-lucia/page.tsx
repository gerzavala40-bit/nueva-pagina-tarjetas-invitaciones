"use client";
import { useState, useEffect, useRef } from "react";
import { MapPin, Clock, Volume2, VolumeX, Music, Copy, Check, Send, Camera, MessageCircle, Sparkles } from "lucide-react";
export default function DespedidaLucia() {
  const [timeLeft, setTimeLeft] = useState({ dias: 0, horas: 0, minutos: 0, segundos: 0 });
  const [rsvp, setRsvp] = useState<string|null>(null);
  const [name, setName] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [done, setDone] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [copied, setCopied] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const eventDate = new Date("2025-12-13T23:00:00");
  useEffect(() => { const a = audioRef.current; if(a){a.currentTime=21;a.volume=0.6;a.play().catch(()=>{const h=()=>{audioRef.current?.play();document.removeEventListener("click",h);};document.addEventListener("click",h);});} }, []);
  useEffect(() => { const t = setInterval(() => { const d = eventDate.getTime()-Date.now(); if(d>0) setTimeLeft({dias:Math.floor(d/86400000),horas:Math.floor((d%86400000)/3600000),minutos:Math.floor((d%3600000)/60000),segundos:Math.floor((d%60000)/1000)}); }, 1000); return ()=>clearInterval(t); }, []);
  useEffect(() => { const o = new IntersectionObserver((es)=>{es.forEach(e=>{if(e.isIntersecting)e.target.classList.add("vis");});},{threshold:0.1}); document.querySelectorAll(".fu").forEach(el=>o.observe(el)); return ()=>o.disconnect(); }, []);
  const sendWA = () => { window.open(`https://wa.me/5491112345678?text=${encodeURIComponent(`Hola! Soy ${name}. ${rsvp==="si"?"Voy a la despedida de Lucia!":"No voy a poder ir a la despedida de Lucia."}`)}`, "_blank"); setDone(true); };
  return (<div className="min-h-screen bg-black text-white overflow-hidden">
    <audio ref={audioRef} loop preload="auto"><source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3" type="audio/mpeg"/></audio>
    <div className="fixed bottom-6 left-6 z-50"><button onClick={()=>{if(audioRef.current){audioRef.current.muted=!isMuted;setIsMuted(!isMuted);}}} className={`w-11 h-11 rounded-full flex items-center justify-center shadow-lg ${isMuted?"bg-white/10 text-white/40":"bg-[#ff0040] text-white shadow-[#ff0040]/30"}`}>{isMuted?<VolumeX size={16}/>:<Volume2 size={16}/>}</button></div>

    {/* HERO */}
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-16">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a0010] via-black to-black"></div>
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full opacity-20" style={{background:"radial-gradient(circle,#ff0040,transparent 70%)"}}></div>
      <div className="relative z-10 text-center">
        <div className="text-7xl sm:text-8xl mb-6" style={{filter:"drop-shadow(0 0 30px #ff0040)"}}>👄</div>
        <p className="text-[#ff0040] text-xs tracking-[0.5em] uppercase mb-4" style={{textShadow:"0 0 10px #ff0040"}}>Despedida de Soltera</p>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight mb-4" style={{textShadow:"0 0 40px #ff004040"}}>LUCIA</h1>
        <p className="text-white/50 text-sm mb-2">Se nos casa la mas linda</p>
        <div className="flex items-center justify-center gap-3 my-6"><div className="w-12 h-px bg-[#ff0040]"></div><Sparkles size={16} className="text-[#ff0040]"/><div className="w-12 h-px bg-[#ff0040]"></div></div>
        <p className="text-white/70 text-lg font-light">Sabado 13 de Diciembre, 2025</p>
        <p className="text-[#ff0040] text-sm mt-1">23:00 hs</p>
        <button onClick={()=>{if(audioRef.current&&!isMuted){audioRef.current.play();}}} className="mt-8 inline-flex items-center gap-2 px-5 py-2 border border-[#ff0040]/30 text-[#ff0040] text-xs tracking-wider uppercase rounded-full hover:bg-[#ff0040]/10 transition-colors"><Music size={14}/> Nuestra cancion</button>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"><div className="w-5 h-8 border border-[#ff0040]/40 rounded-full flex items-start justify-center p-1"><div className="w-1 h-2 bg-[#ff0040]/60 rounded-full"></div></div></div>
    </section>

    {/* COUNTDOWN */}
    <section className="py-14 bg-[#0a0a0a] border-t border-[#ff0040]/10 fu opacity-0 translate-y-6 transition-all duration-700">
      <div className="max-w-sm mx-auto px-6"><p className="text-[#ff0040] text-xs tracking-[0.3em] uppercase text-center mb-6">Faltan</p>
        <div className="grid grid-cols-4 gap-3">{[{v:timeLeft.dias,l:"Dias"},{v:timeLeft.horas,l:"Hrs"},{v:timeLeft.minutos,l:"Min"},{v:timeLeft.segundos,l:"Seg"}].map(i=>(<div key={i.l} className="text-center"><div className="bg-[#ff0040]/10 border border-[#ff0040]/20 rounded-lg p-3"><span className="text-2xl font-black text-white">{String(i.v).padStart(2,"0")}</span></div><p className="text-[#ff0040]/50 text-[9px] uppercase mt-1">{i.l}</p></div>))}</div>
      </div>
    </section>

    {/* ITINERARIO */}
    <section className="py-14 bg-black border-t border-[#ff0040]/10 fu opacity-0 translate-y-6 transition-all duration-700">
      <div className="max-w-md mx-auto px-6"><p className="text-[#ff0040] text-xs tracking-[0.3em] uppercase text-center mb-8">Programa de la noche</p>
        <div className="space-y-6">{[{t:"21:00",n:"Previa en casa de Cami",d:"Tragos y preparacion"},{t:"23:00",n:"Boliche: Club Neon",d:"Lista VIP, vamos juntas"},{t:"01:00",n:"Show sorpresa",d:"No le cuenten a Lucia 🤫"},{t:"03:00",n:"After en terraza",d:"Las que aguanten!"}].map((i,idx)=>(<div key={idx} className="flex items-start gap-4"><div className="text-right w-14 flex-shrink-0"><p className="text-[#ff0040] font-bold text-sm">{i.t}</p></div><div className="w-px h-full bg-[#ff0040]/20 relative"><div className="absolute top-1 -left-[3px] w-2 h-2 rounded-full bg-[#ff0040]"></div></div><div className="pb-4"><p className="text-white text-sm font-medium">{i.n}</p><p className="text-white/40 text-xs">{i.d}</p></div></div>))}</div>
      </div>
    </section>

    {/* UBICACION */}
    <section className="py-14 bg-[#0a0a0a] border-t border-[#ff0040]/10 fu opacity-0 translate-y-6 transition-all duration-700">
      <div className="max-w-md mx-auto px-6 text-center"><p className="text-[#ff0040] text-xs tracking-[0.3em] uppercase mb-4">Punto de encuentro</p>
        <h3 className="text-white font-bold text-lg mb-1">Club Neon</h3><p className="text-white/40 text-xs mb-4">Av. Costanera 1500, Buenos Aires</p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284!2d-58.37!3d-34.60!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z!5e0!3m2!1ses!2sar!4v1" width="100%" height="180" style={{border:0}} allowFullScreen loading="lazy" className="rounded-lg mb-4"></iframe>
        <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#ff0040] text-white text-xs font-bold uppercase rounded-full"><MapPin size={14}/> Abrir Mapa</a>
      </div>
    </section>

    {/* DRESS CODE */}
    <section className="py-12 bg-black border-t border-[#ff0040]/10 fu opacity-0 translate-y-6 transition-all duration-700">
      <div className="max-w-sm mx-auto px-6 text-center"><p className="text-[#ff0040] text-xs tracking-[0.3em] uppercase mb-3">Dress Code</p>
        <h3 className="text-white text-xl font-bold uppercase mb-3">Total Black + Glitter</h3>
        <p className="text-white/40 text-xs mb-4">Toda de negro pero con brillos. La novia va de blanco 👰</p>
        <div className="flex justify-center gap-3"><div className="w-9 h-9 rounded-full bg-black border-2 border-[#ff0040]/40"></div><div className="w-9 h-9 rounded-full bg-[#1a1a1a] border-2 border-white/20"></div><div className="w-9 h-9 rounded-full bg-[#333] border-2 border-white/10"></div><div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#ff0040] to-[#ff69b4] border-2 border-[#ff0040]/50"></div></div>
      </div>
    </section>

    {/* RSVP */}
    <section className="py-16 bg-[#0a0a0a] border-t border-[#ff0040]/10 fu opacity-0 translate-y-6 transition-all duration-700" id="rsvp">
      <div className="max-w-sm mx-auto px-6 text-center">
        <p className="text-[#ff0040] text-xs tracking-[0.3em] uppercase mb-3">Confirma</p><h2 className="text-white text-2xl font-black uppercase mb-6">Vas a venir?</h2>
        {done?(<div className="border border-[#ff0040]/20 rounded-xl p-6"><Sparkles size={24} className="text-[#ff0040] mx-auto mb-3"/><p className="text-white font-bold">Gracias {name}!</p><p className="text-white/50 text-xs mt-1">{rsvp==="si"?"Nos vemos en la fiesta! 💋":"Te vamos a extranar!"}</p></div>
        ):!showForm?(<div className="space-y-3"><button onClick={()=>{setRsvp("si");setShowForm(true);}} className="w-full py-4 bg-[#ff0040] text-white font-bold text-sm uppercase rounded-full">Ahi voy! 💃</button><button onClick={()=>{setRsvp("no");setShowForm(true);}} className="w-full py-3 border border-white/20 text-white/50 text-sm uppercase rounded-full">No puedo 😢</button></div>
        ):(<form onSubmit={(e)=>{e.preventDefault();setDone(true);}} className="space-y-3 text-left">
          <input type="text" required value={name} onChange={e=>setName(e.target.value)} placeholder="Tu nombre" className="w-full bg-white/5 border border-[#ff0040]/20 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#ff0040]"/>
          <div className="flex gap-2"><button type="submit" className="flex-1 py-3 bg-[#ff0040] text-white text-xs font-bold uppercase rounded-full flex items-center justify-center gap-1"><Check size={14}/> Confirmar</button><button type="button" onClick={sendWA} className="flex-1 py-3 bg-[#25d366] text-white text-xs font-bold uppercase rounded-full flex items-center justify-center gap-1"><Send size={14}/> WhatsApp</button></div>
        </form>)}
      </div>
    </section>

    {/* VAQUITA */}
    <section className="py-12 bg-black border-t border-[#ff0040]/10 fu opacity-0 translate-y-6 transition-all duration-700">
      <div className="max-w-sm mx-auto px-6 text-center"><p className="text-[#ff0040] text-xs tracking-[0.3em] uppercase mb-3">Vaquita</p><h3 className="text-white text-lg font-bold mb-4">Para el regalo de Lucia 🎁</h3>
        <div className="bg-[#0a0a0a] border border-[#ff0040]/20 rounded-xl p-4"><p className="text-[9px] text-[#ff0040] uppercase mb-1">Alias</p><div className="flex items-center justify-between bg-white/5 rounded-lg px-3 py-2"><span className="text-white text-sm font-medium">despedida.lucia.2025</span><button onClick={()=>{navigator.clipboard.writeText("despedida.lucia.2025");setCopied(true);setTimeout(()=>setCopied(false),2000);}} className="text-[#ff0040] flex items-center gap-1 text-xs">{copied?<Check size={14}/>:<Copy size={14}/>}{copied?"Listo!":"Copiar"}</button></div></div>
      </div>
    </section>

    {/* PARTY TOOLS */}
    <section className="py-10 bg-[#0a0a0a] border-t border-[#ff0040]/10 fu opacity-0 translate-y-6 transition-all duration-700">
      <div className="max-w-sm mx-auto px-6 text-center"><p className="text-white/20 text-xs uppercase mb-3">El dia de la fiesta</p>
        <div className="flex gap-3 justify-center"><button disabled className="px-4 py-2.5 bg-white/5 border border-white/10 text-white/30 rounded-lg flex items-center gap-2 text-xs cursor-not-allowed"><Camera size={14}/> Party Cam</button><button disabled className="px-4 py-2.5 bg-white/5 border border-white/10 text-white/30 rounded-lg flex items-center gap-2 text-xs cursor-not-allowed"><MessageCircle size={14}/> Chat</button></div>
        <p className="text-white/15 text-[9px] mt-2">Disponible el 13/12/2025</p>
      </div>
    </section>

    {/* FOOTER */}
    <section className="py-10 bg-black text-center border-t border-[#ff0040]/10">
      <div className="text-4xl mb-3" style={{filter:"drop-shadow(0 0 10px #ff0040)"}}>👄</div>
      <p className="text-white text-xl font-black uppercase">Despedida de Lucia</p>
      <p className="text-[#ff0040] text-xs mt-1">13.12.2025</p>
      <p className="text-white/20 text-[9px] mt-6 tracking-wider">HECHO CON AMOR POR <span className="text-[#ff0040]/50">TE INVITO APP</span></p>
    </section>
    <style jsx global>{`.fu{opacity:0;transform:translateY(24px);transition:opacity .7s,transform .7s}.vis{opacity:1!important;transform:translateY(0)!important}`}</style>
  </div>);
}
