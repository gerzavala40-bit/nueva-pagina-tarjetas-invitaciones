"use client";
import { useState, useEffect, useRef } from "react";
import { MapPin, Volume2, VolumeX, Copy, Check, Send, Camera, MessageCircle, Sparkles } from "lucide-react";
export default function DespedidaVale() {
  const [timeLeft, setTimeLeft] = useState({ dias:0, horas:0, minutos:0, segundos:0 });
  const [rsvp, setRsvp] = useState<string|null>(null);
  const [name, setName] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [done, setDone] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [copied, setCopied] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const eventDate = new Date("2026-02-14T22:00:00");
  useEffect(()=>{const a=audioRef.current;if(a){a.currentTime=21;a.volume=0.6;a.play().catch(()=>{const h=()=>{audioRef.current?.play();document.removeEventListener("click",h);};document.addEventListener("click",h);});}}, []);
  useEffect(()=>{const t=setInterval(()=>{const d=eventDate.getTime()-Date.now();if(d>0)setTimeLeft({dias:Math.floor(d/86400000),horas:Math.floor((d%86400000)/3600000),minutos:Math.floor((d%3600000)/60000),segundos:Math.floor((d%60000)/1000)});},1000);return()=>clearInterval(t);}, []);
  useEffect(()=>{const o=new IntersectionObserver((es)=>{es.forEach(e=>{if(e.isIntersecting)e.target.classList.add("vis");});},{threshold:0.1});document.querySelectorAll(".fu").forEach(el=>o.observe(el));return()=>o.disconnect();}, []);
  const sendWA=()=>{window.open(`https://wa.me/5491112345678?text=${encodeURIComponent(`Soy ${name}. ${rsvp==="si"?"Voy a la despedida de Vale!":"No puedo ir."}`)}`, "_blank");setDone(true);};
  return (<div className="min-h-screen bg-[#000510] text-white overflow-hidden">
    <audio ref={audioRef} loop preload="auto"><source src="https://raw.githubusercontent.com/gerzavala40-bit/mkdir-public/main/Los%20Aut%C3%A9nticos%20Decadentes%20-%20Los%20Piratas%20(Official%20Video).mp3" type="audio/mpeg"/></audio>
    <div className="fixed bottom-6 left-6 z-50"><button onClick={()=>{if(audioRef.current){audioRef.current.muted=!isMuted;setIsMuted(!isMuted);}}} className={`w-11 h-11 rounded-full flex items-center justify-center shadow-lg ${isMuted?"bg-white/10 text-white/40":"bg-[#0066ff] text-white shadow-[#0066ff]/30"}`}>{isMuted?<VolumeX size={16}/>:<Volume2 size={16}/>}</button></div>
    {/* HERO - PIRATA STYLE */}
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-16">
      <div className="absolute inset-0 bg-gradient-to-b from-[#000820] via-[#000510] to-black"></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full opacity-15" style={{background:"radial-gradient(circle,#0066ff,transparent 70%)"}}></div>
      <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-48 h-48 rounded-full opacity-10" style={{background:"radial-gradient(circle,#ff0040,transparent 70%)"}}></div>
      <div className="relative z-10 text-center">
        <div className="text-5xl mb-4" style={{textShadow:"0 0 20px #0066ff"}}>☠️</div>
        <p className="text-[#0088ff] text-xs tracking-[0.4em] uppercase mb-4" style={{textShadow:"0 0 8px #0066ff"}}>Somos los piratas</p>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter mb-2" style={{textShadow:"0 0 40px #0066ff30"}}>DESPEDIDA</h1>
        <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight mb-4" style={{color:"#ff0040",textShadow:"0 0 20px #ff004040"}}>DE VALE</h2>
        <p className="text-white/50 text-sm mb-6">La vida pirata es la vida mejor</p>
        <div className="flex items-center justify-center gap-3 my-4"><div className="w-10 h-px bg-[#0066ff]"></div><div className="w-2 h-2 rounded-full bg-[#ff0040]"></div><div className="w-10 h-px bg-[#0066ff]"></div></div>
        <p className="text-white/70 text-lg">Sabado 14 de Febrero, 2026</p>
        <p className="text-[#ff0040] text-sm mt-1">22:00 hs &bull; Sin reglas</p>
      </div>
    </section>
    {/* COUNTDOWN */}
    <section className="py-14 bg-[#000510] border-t border-[#0066ff]/10 fu opacity-0 translate-y-6 transition-all duration-700"><div className="max-w-sm mx-auto px-6"><p className="text-[#0066ff] text-xs tracking-[0.3em] uppercase text-center mb-6">Faltan</p><div className="grid grid-cols-4 gap-3">{[{v:timeLeft.dias,l:"Dias"},{v:timeLeft.horas,l:"Hrs"},{v:timeLeft.minutos,l:"Min"},{v:timeLeft.segundos,l:"Seg"}].map(i=>(<div key={i.l} className="text-center"><div className="bg-[#0066ff]/10 border border-[#0066ff]/20 rounded-lg p-3"><span className="text-2xl font-black text-white">{String(i.v).padStart(2,"0")}</span></div><p className="text-[#0066ff]/50 text-[9px] uppercase mt-1">{i.l}</p></div>))}</div></div></section>
    {/* ITINERARIO */}
    <section className="py-14 bg-[#000510] border-t border-[#0066ff]/10 fu opacity-0 translate-y-6 transition-all duration-700"><div className="max-w-md mx-auto px-6"><p className="text-[#0066ff] text-xs tracking-[0.3em] uppercase text-center mb-8">Plan pirata</p><div className="space-y-5">{[{t:"22:00",n:"Previa en el barco",d:"La tripulacion se junta"},{t:"00:00",n:"Abordaje al boliche",d:"Todos al Club Pirata"},{t:"02:00",n:"Karaoke pirata",d:"Cantamos Los Piratas 🏴‍☠️"},{t:"04:00",n:"After clandestino",d:"Solo para verdaderos piratas"}].map((i,idx)=>(<div key={idx} className="flex items-start gap-4"><div className="text-right w-14 flex-shrink-0"><p className="text-[#0066ff] font-bold text-sm">{i.t}</p></div><div className="w-px bg-[#0066ff]/20 relative"><div className="absolute top-1 -left-[3px] w-2 h-2 rounded-full bg-[#ff0040]"></div></div><div className="pb-3"><p className="text-white text-sm font-medium">{i.n}</p><p className="text-white/40 text-xs">{i.d}</p></div></div>))}</div></div></section>
    {/* RSVP */}
    <section className="py-16 bg-[#000510] border-t border-[#0066ff]/10 fu opacity-0 translate-y-6 transition-all duration-700"><div className="max-w-sm mx-auto px-6 text-center"><p className="text-[#ff0040] text-xs tracking-[0.3em] uppercase mb-3">Confirma</p><h2 className="text-white text-2xl font-black uppercase mb-6">Te sumas a la tripulacion?</h2>
      {done?(<div className="border border-[#0066ff]/20 rounded-xl p-6"><span className="text-3xl">🏴‍☠️</span><p className="text-white font-bold mt-2">Arrr {name}!</p><p className="text-white/50 text-xs mt-1">{rsvp==="si"?"Bienvenido/a a bordo!":"Te perdiste el saqueo."}</p></div>
      ):!showForm?(<div className="space-y-3"><button onClick={()=>{setRsvp("si");setShowForm(true);}} className="w-full py-4 bg-[#ff0040] text-white font-bold text-sm uppercase rounded-full">Me sumo! ☠️</button><button onClick={()=>{setRsvp("no");setShowForm(true);}} className="w-full py-3 border border-white/20 text-white/50 text-sm uppercase rounded-full">Bajo del barco</button></div>
      ):(<form onSubmit={e=>{e.preventDefault();setDone(true);}} className="space-y-3 text-left"><input type="text" required value={name} onChange={e=>setName(e.target.value)} placeholder="Tu nombre pirata" className="w-full bg-white/5 border border-[#0066ff]/20 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#0066ff]"/><div className="flex gap-2"><button type="submit" className="flex-1 py-3 bg-[#0066ff] text-white text-xs font-bold uppercase rounded-full flex items-center justify-center gap-1"><Check size={14}/> Confirmar</button><button type="button" onClick={sendWA} className="flex-1 py-3 bg-[#25d366] text-white text-xs font-bold uppercase rounded-full flex items-center justify-center gap-1"><Send size={14}/> WhatsApp</button></div></form>)}</div></section>
    {/* VAQUITA */}
    <section className="py-12 bg-[#000510] border-t border-[#0066ff]/10 fu opacity-0 translate-y-6 transition-all duration-700"><div className="max-w-sm mx-auto px-6 text-center"><p className="text-[#0066ff] text-xs tracking-[0.3em] uppercase mb-3">Botin pirata</p><h3 className="text-white text-lg font-bold mb-4">Para la mesa y tragos 🍺</h3><div className="bg-[#000820] border border-[#0066ff]/20 rounded-xl p-4"><p className="text-[9px] text-[#0066ff] uppercase mb-1">Alias</p><div className="flex items-center justify-between bg-white/5 rounded-lg px-3 py-2"><span className="text-white text-sm font-medium">piratas.vale.2026</span><button onClick={()=>{navigator.clipboard.writeText("piratas.vale.2026");setCopied(true);setTimeout(()=>setCopied(false),2000);}} className="text-[#0066ff] flex items-center gap-1 text-xs">{copied?<Check size={14}/>:<Copy size={14}/>}{copied?"Listo!":"Copiar"}</button></div></div></div></section>
    {/* FOOTER */}
    <section className="py-10 bg-[#000510] text-center border-t border-[#0066ff]/10"><div className="text-3xl" style={{textShadow:"0 0 10px #0066ff"}}>☠️</div><p className="text-white text-xl font-black uppercase mt-2">Despedida de Vale</p><p className="text-[#0066ff] text-xs mt-1">14.02.2026</p><p className="text-white/20 text-[9px] mt-6 tracking-wider">HECHO CON AMOR POR <span className="text-[#0066ff]/50">TE INVITO APP</span></p></section>
    <style jsx global>{`.fu{opacity:0;transform:translateY(24px);transition:opacity .7s,transform .7s}.vis{opacity:1!important;transform:translateY(0)!important}`}</style>
  </div>);
}
