"use client";
import { useState, useEffect, useRef } from "react";
import { MapPin, Clock, Volume2, VolumeX, Music, Copy, Check, Send, Camera, MessageCircle, Sparkles } from "lucide-react";
export default function DespedidaMartin() {
  const [timeLeft, setTimeLeft] = useState({ dias:0, horas:0, minutos:0, segundos:0 });
  const [rsvp, setRsvp] = useState<string|null>(null);
  const [name, setName] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [done, setDone] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [copied, setCopied] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const eventDate = new Date("2025-11-08T20:00:00");
  useEffect(()=>{const a=audioRef.current;if(a){a.currentTime=21;a.volume=0.6;a.play().catch(()=>{const h=()=>{audioRef.current?.play();document.removeEventListener("click",h);};document.addEventListener("click",h);});}}, []);
  useEffect(()=>{const t=setInterval(()=>{const d=eventDate.getTime()-Date.now();if(d>0)setTimeLeft({dias:Math.floor(d/86400000),horas:Math.floor((d%86400000)/3600000),minutos:Math.floor((d%3600000)/60000),segundos:Math.floor((d%60000)/1000)});},1000);return()=>clearInterval(t);}, []);
  useEffect(()=>{const o=new IntersectionObserver((es)=>{es.forEach(e=>{if(e.isIntersecting)e.target.classList.add("vis");});},{threshold:0.1});document.querySelectorAll(".fu").forEach(el=>o.observe(el));return()=>o.disconnect();}, []);
  const sendWA=()=>{window.open(`https://wa.me/5491112345678?text=${encodeURIComponent(`Soy ${name}. ${rsvp==="si"?"Voy a la despedida de Martin!":"No voy a poder ir."}`)}`, "_blank");setDone(true);};
  return (<div className="min-h-screen bg-black text-white overflow-hidden">
    <audio ref={audioRef} loop preload="auto"><source src="https://raw.githubusercontent.com/gerzavala40-bit/mkdir-public/main/Los%20Aut%C3%A9nticos%20Decadentes%20-%20Los%20Piratas%20(Official%20Video).mp3" type="audio/mpeg"/></audio>
    <div className="fixed bottom-6 left-6 z-50"><button onClick={()=>{if(audioRef.current){audioRef.current.muted=!isMuted;setIsMuted(!isMuted);}}} className={`w-11 h-11 rounded-full flex items-center justify-center shadow-lg ${isMuted?"bg-white/10 text-white/40":"bg-[#ffd700] text-black shadow-[#ffd700]/30"}`}>{isMuted?<VolumeX size={16}/>:<Volume2 size={16}/>}</button></div>
    {/* HERO - FORT STYLE */}
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-16">
      <div className="absolute inset-0 bg-black"></div>
      <div className="absolute inset-8 border-2 border-dashed opacity-20" style={{borderColor:"#ffd700"}}></div>
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full opacity-10" style={{background:"radial-gradient(circle,#ffd700,transparent 70%)"}}></div>
      <div className="relative z-10 text-center">
        <div className="text-6xl mb-4">🍾</div>
        <p className="text-[#ffd700] text-xs tracking-[0.5em] uppercase mb-4">La ultima noche de soltero</p>
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-black uppercase tracking-tighter mb-2" style={{textShadow:"0 0 30px #ffd70030"}}>MARTIN</h1>
        <p className="text-white/50 text-base mb-2">Se nos casa el comandante</p>
        <div className="flex items-center justify-center gap-3 my-6"><div className="w-12 h-px bg-[#ffd700]"></div><span className="text-[#ffd700]">★</span><div className="w-12 h-px bg-[#ffd700]"></div></div>
        <p className="text-white/70 text-lg">Sabado 8 de Noviembre, 2025</p>
        <p className="text-[#ffd700] text-sm mt-1">20:00 hs &bull; Nivel Fort</p>
      </div>
    </section>
    {/* COUNTDOWN */}
    <section className="py-14 bg-[#0a0a0a] border-t border-[#ffd700]/10 fu opacity-0 translate-y-6 transition-all duration-700"><div className="max-w-sm mx-auto px-6"><p className="text-[#ffd700] text-xs tracking-[0.3em] uppercase text-center mb-6">Cuenta regresiva</p><div className="grid grid-cols-4 gap-3">{[{v:timeLeft.dias,l:"Dias"},{v:timeLeft.horas,l:"Hrs"},{v:timeLeft.minutos,l:"Min"},{v:timeLeft.segundos,l:"Seg"}].map(i=>(<div key={i.l} className="text-center"><div className="bg-[#ffd700]/10 border border-[#ffd700]/20 rounded-lg p-3"><span className="text-2xl font-black text-white">{String(i.v).padStart(2,"0")}</span></div><p className="text-[#ffd700]/50 text-[9px] uppercase mt-1">{i.l}</p></div>))}</div></div></section>
    {/* ITINERARIO */}
    <section className="py-14 bg-black border-t border-[#ffd700]/10 fu opacity-0 translate-y-6 transition-all duration-700"><div className="max-w-md mx-auto px-6"><p className="text-[#ffd700] text-xs tracking-[0.3em] uppercase text-center mb-8">El plan</p><div className="space-y-5">{[{t:"20:00",n:"Asado en lo de Nico",d:"Birra, carne y los pibes"},{t:"22:30",n:"Previa VIP",d:"Fernet, musica y sorpresas"},{t:"00:00",n:"Boliche: Club Gold",d:"Mesa VIP reservada"},{t:"03:00",n:"After legendario",d:"Los que sobrevivan"}].map((i,idx)=>(<div key={idx} className="flex items-start gap-4"><div className="text-right w-14 flex-shrink-0"><p className="text-[#ffd700] font-bold text-sm">{i.t}</p></div><div className="w-px bg-[#ffd700]/20 relative"><div className="absolute top-1 -left-[3px] w-2 h-2 rounded-full bg-[#ffd700]"></div></div><div className="pb-3"><p className="text-white text-sm font-medium">{i.n}</p><p className="text-white/40 text-xs">{i.d}</p></div></div>))}</div></div></section>
    {/* UBICACION */}
    <section className="py-14 bg-[#0a0a0a] border-t border-[#ffd700]/10 fu opacity-0 translate-y-6 transition-all duration-700"><div className="max-w-md mx-auto px-6 text-center"><p className="text-[#ffd700] text-xs tracking-[0.3em] uppercase mb-4">Ubicacion</p><h3 className="text-white font-bold text-lg mb-1">Casa de Nico</h3><p className="text-white/40 text-xs mb-4">Barrio Privado Los Robles, Lote 42</p><a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#ffd700] text-black text-xs font-bold uppercase rounded-full"><MapPin size={14}/> Abrir Mapa</a></div></section>
    {/* RSVP */}
    <section className="py-16 bg-black border-t border-[#ffd700]/10 fu opacity-0 translate-y-6 transition-all duration-700"><div className="max-w-sm mx-auto px-6 text-center"><p className="text-[#ffd700] text-xs tracking-[0.3em] uppercase mb-3">Confirma</p><h2 className="text-white text-2xl font-black uppercase mb-6">Vas o no vas?</h2>
      {done?(<div className="border border-[#ffd700]/20 rounded-xl p-6"><span className="text-3xl">🍻</span><p className="text-white font-bold mt-2">Dale {name}!</p><p className="text-white/50 text-xs mt-1">{rsvp==="si"?"Nos vemos rey!":"Te perdiste la del año."}</p></div>
      ):!showForm?(<div className="space-y-3"><button onClick={()=>{setRsvp("si");setShowForm(true);}} className="w-full py-4 bg-[#ffd700] text-black font-bold text-sm uppercase rounded-full">Obvio que voy! 🔥</button><button onClick={()=>{setRsvp("no");setShowForm(true);}} className="w-full py-3 border border-white/20 text-white/50 text-sm uppercase rounded-full">No puedo</button></div>
      ):(<form onSubmit={e=>{e.preventDefault();setDone(true);}} className="space-y-3 text-left"><input type="text" required value={name} onChange={e=>setName(e.target.value)} placeholder="Tu nombre crack" className="w-full bg-white/5 border border-[#ffd700]/20 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#ffd700]"/><div className="flex gap-2"><button type="submit" className="flex-1 py-3 bg-[#ffd700] text-black text-xs font-bold uppercase rounded-full flex items-center justify-center gap-1"><Check size={14}/> Confirmar</button><button type="button" onClick={sendWA} className="flex-1 py-3 bg-[#25d366] text-white text-xs font-bold uppercase rounded-full flex items-center justify-center gap-1"><Send size={14}/> WhatsApp</button></div></form>)}</div></section>
    {/* VAQUITA */}
    <section className="py-12 bg-[#0a0a0a] border-t border-[#ffd700]/10 fu opacity-0 translate-y-6 transition-all duration-700"><div className="max-w-sm mx-auto px-6 text-center"><p className="text-[#ffd700] text-xs tracking-[0.3em] uppercase mb-3">Vaquita</p><h3 className="text-white text-lg font-bold mb-4">Para la mesa VIP 🥂</h3><div className="bg-black border border-[#ffd700]/20 rounded-xl p-4"><p className="text-[9px] text-[#ffd700] uppercase mb-1">Alias</p><div className="flex items-center justify-between bg-white/5 rounded-lg px-3 py-2"><span className="text-white text-sm font-medium">despedida.martin.vip</span><button onClick={()=>{navigator.clipboard.writeText("despedida.martin.vip");setCopied(true);setTimeout(()=>setCopied(false),2000);}} className="text-[#ffd700] flex items-center gap-1 text-xs">{copied?<Check size={14}/>:<Copy size={14}/>}{copied?"Listo!":"Copiar"}</button></div></div></div></section>
    {/* FOOTER */}
    <section className="py-10 bg-black text-center border-t border-[#ffd700]/10"><span className="text-3xl">🍾</span><p className="text-white text-xl font-black uppercase mt-2">Despedida de Martin</p><p className="text-[#ffd700] text-xs mt-1">08.11.2025 &bull; Nivel Fort</p><p className="text-white/20 text-[9px] mt-6 tracking-wider">HECHO CON AMOR POR <span className="text-[#ffd700]/50">TE INVITO APP</span></p></section>
    <style jsx global>{`.fu{opacity:0;transform:translateY(24px);transition:opacity .7s,transform .7s}.vis{opacity:1!important;transform:translateY(0)!important}`}</style>
  </div>);
}
