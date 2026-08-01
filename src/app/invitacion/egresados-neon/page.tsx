"use client";
import { useState, useEffect, useRef } from "react";
import { MapPin, Clock, Volume2, VolumeX, Music, Copy, Check, Send, Camera, MessageCircle, Sparkles, GraduationCap } from "lucide-react";
export default function EgresadosNeon() {
  const [timeLeft, setTimeLeft] = useState({dias:0,horas:0,minutos:0,segundos:0});
  const [rsvp, setRsvp] = useState<string|null>(null);
  const [name, setName] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [done, setDone] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [copied, setCopied] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const eventDate = new Date("2025-12-20T21:00:00");
  useEffect(()=>{const a=audioRef.current;if(a){a.currentTime=0;a.volume=0.6;a.play().catch(()=>{const h=()=>{audioRef.current?.play();document.removeEventListener("click",h);};document.addEventListener("click",h);});}}, []);
  useEffect(()=>{const t=setInterval(()=>{const d=eventDate.getTime()-Date.now();if(d>0)setTimeLeft({dias:Math.floor(d/86400000),horas:Math.floor((d%86400000)/3600000),minutos:Math.floor((d%3600000)/60000),segundos:Math.floor((d%60000)/1000)});},1000);return()=>clearInterval(t);}, []);
  useEffect(()=>{const o=new IntersectionObserver((es)=>{es.forEach(e=>{if(e.isIntersecting)e.target.classList.add("vis");});},{threshold:0.1});document.querySelectorAll(".fu").forEach(el=>o.observe(el));return()=>o.disconnect();}, []);
  const sendWA=()=>{window.open(`https://wa.me/5491112345678?text=${encodeURIComponent(`Soy ${name}. ${rsvp==="si"?"Voy a la fiesta de egresados!":"No voy a poder ir a la fiesta."}`)}`, "_blank");setDone(true);};
  return (<div className="min-h-screen bg-[#050010] text-white overflow-hidden">
    <audio ref={audioRef} loop preload="auto"><source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3" type="audio/mpeg"/></audio>
    <div className="fixed bottom-6 left-6 z-50"><button onClick={()=>{if(audioRef.current){audioRef.current.muted=!isMuted;setIsMuted(!isMuted);}}} className={`w-11 h-11 rounded-full flex items-center justify-center shadow-lg ${isMuted?"bg-white/10 text-white/40":"bg-[#7c3aed] text-white shadow-[#7c3aed]/30"}`}>{isMuted?<VolumeX size={16}/>:<Volume2 size={16}/>}</button></div>
    {/* HERO */}
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-16">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0030] via-[#050010] to-[#050010]"></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full opacity-20" style={{background:"radial-gradient(circle,#7c3aed,transparent 70%)"}}></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full opacity-10" style={{background:"radial-gradient(circle,#10b981,transparent 70%)"}}></div>
      {Array.from({length:20}).map((_,i)=>(<div key={i} className="absolute rounded-full animate-pulse" style={{width:`${1+Math.random()*3}px`,height:`${1+Math.random()*3}px`,left:`${Math.random()*100}%`,top:`${Math.random()*100}%`,backgroundColor:Math.random()>0.5?'#7c3aed':'#10b981',opacity:0.3+Math.random()*0.5,animationDelay:`${Math.random()*3}s`}}/>))}
      <div className="relative z-10 text-center">
        <div className="text-7xl mb-6" style={{filter:"drop-shadow(0 0 30px #7c3aed)"}}>🎓</div>
        <p className="text-[#7c3aed] text-xs tracking-[0.5em] uppercase mb-4" style={{textShadow:"0 0 10px #7c3aed"}}>Promo 2025</p>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter mb-2" style={{textShadow:"0 0 40px #7c3aed30"}}>EGRESADOS</h1>
        <h2 className="text-2xl sm:text-3xl font-bold mb-4"><span className="text-[#10b981]">Colegio San Martin</span></h2>
        <p className="text-white/50 text-sm mb-2">La noche que esperamos toda la vida</p>
        <div className="flex items-center justify-center gap-3 my-6"><div className="w-12 h-px bg-[#7c3aed]"></div><Sparkles size={16} className="text-[#10b981]"/><div className="w-12 h-px bg-[#7c3aed]"></div></div>
        <p className="text-white/70 text-lg font-light">Sabado 20 de Diciembre, 2025</p>
        <p className="text-[#7c3aed] text-sm mt-1">21:00 hs &bull; Salon Libertador</p>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"><div className="w-5 h-8 border border-[#7c3aed]/40 rounded-full flex items-start justify-center p-1"><div className="w-1 h-2 bg-[#7c3aed]/60 rounded-full"></div></div></div>
    </section>
    {/* COUNTDOWN */}
    <section className="py-14 bg-[#050010] border-t border-[#7c3aed]/10 fu opacity-0 translate-y-6 transition-all duration-700"><div className="max-w-sm mx-auto px-6"><p className="text-[#7c3aed] text-xs tracking-[0.3em] uppercase text-center mb-6">Faltan</p><div className="grid grid-cols-4 gap-3">{[{v:timeLeft.dias,l:"Dias"},{v:timeLeft.horas,l:"Hrs"},{v:timeLeft.minutos,l:"Min"},{v:timeLeft.segundos,l:"Seg"}].map(i=>(<div key={i.l} className="text-center"><div className="bg-[#7c3aed]/10 border border-[#7c3aed]/20 rounded-lg p-3"><span className="text-2xl font-black text-white">{String(i.v).padStart(2,"0")}</span></div><p className="text-[#7c3aed]/50 text-[9px] uppercase mt-1">{i.l}</p></div>))}</div></div></section>
    {/* GALERIA */}
    <section className="py-14 bg-[#050010] border-t border-[#7c3aed]/10 fu opacity-0 translate-y-6 transition-all duration-700">
      <div className="max-w-lg mx-auto px-6"><p className="text-[#10b981] text-xs tracking-[0.3em] uppercase text-center mb-6">La promo</p>
        <div className="grid grid-cols-3 gap-2">
          {["https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=300&h=300&fit=crop","https://images.unsplash.com/photo-1627556704302-624286467c65?w=300&h=300&fit=crop","https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=300&h=300&fit=crop","https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=300&h=300&fit=crop","https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=300&h=300&fit=crop","https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=300&h=300&fit=crop"].map((src,i)=>(<img key={i} src={src} alt={`Promo ${i+1}`} className="w-full aspect-square object-cover rounded-lg border border-[#7c3aed]/10 hover:border-[#7c3aed]/50 transition-colors" loading="lazy"/>))}
        </div>
      </div>
    </section>

    {/* ITINERARIO */}
    <section className="py-14 bg-[#050010] border-t border-[#7c3aed]/10 fu opacity-0 translate-y-6 transition-all duration-700"><div className="max-w-md mx-auto px-6"><p className="text-[#7c3aed] text-xs tracking-[0.3em] uppercase text-center mb-8">Programa de la noche</p><div className="space-y-5">{[{t:"21:00",n:"Apertura de puertas",d:"Alfombra roja + fotos"},{t:"22:00",n:"Cena de gala",d:"Menu de 3 pasos"},{t:"23:30",n:"Entrega de diplomas",d:"El momento mas emotivo"},{t:"00:00",n:"Show en vivo",d:"Sorpresa!"},{t:"01:00",n:"FIESTA!",d:"DJ hasta las 5am"},{t:"03:00",n:"After party",d:"Solo para egresados"}].map((i,idx)=>(<div key={idx} className="flex items-start gap-4"><div className="text-right w-14 flex-shrink-0"><p className="text-[#7c3aed] font-bold text-sm">{i.t}</p></div><div className="w-px bg-[#7c3aed]/20 relative"><div className="absolute top-1 -left-[3px] w-2 h-2 rounded-full bg-[#10b981]"></div></div><div className="pb-3"><p className="text-white text-sm font-medium">{i.n}</p><p className="text-white/40 text-xs">{i.d}</p></div></div>))}</div></div></section>
    {/* UBICACION */}
    <section className="py-14 bg-[#050010] border-t border-[#7c3aed]/10 fu opacity-0 translate-y-6 transition-all duration-700"><div className="max-w-md mx-auto px-6 text-center"><p className="text-[#10b981] text-xs tracking-[0.3em] uppercase mb-4">Ubicacion</p><h3 className="text-white font-bold text-lg mb-1">Salon Libertador</h3><p className="text-white/40 text-xs mb-4">Av. Libertador 5500, Buenos Aires</p><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284!2d-58.40!3d-34.57!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z!5e0!3m2!1ses!2sar!4v1" width="100%" height="180" style={{border:0}} allowFullScreen loading="lazy" className="rounded-lg mb-4"></iframe><a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#7c3aed] text-white text-xs font-bold uppercase rounded-full"><MapPin size={14}/> Abrir Mapa</a></div></section>
    {/* DRESS CODE */}
    <section className="py-12 bg-[#050010] border-t border-[#7c3aed]/10 fu opacity-0 translate-y-6 transition-all duration-700"><div className="max-w-sm mx-auto px-6 text-center"><p className="text-[#7c3aed] text-xs tracking-[0.3em] uppercase mb-3">Dress Code</p><h3 className="text-white text-xl font-bold uppercase mb-3">Elegante Sport</h3><p className="text-white/40 text-xs mb-4">Vestite lindo pero comodo para bailar toda la noche!</p><div className="flex justify-center gap-3"><div className="w-9 h-9 rounded-full bg-[#7c3aed] border-2 border-[#7c3aed]"></div><div className="w-9 h-9 rounded-full bg-black border-2 border-white/20"></div><div className="w-9 h-9 rounded-full bg-white border-2 border-white/40"></div><div className="w-9 h-9 rounded-full bg-[#10b981] border-2 border-[#10b981]"></div></div></div></section>
    {/* RSVP */}
    <section className="py-16 bg-[#050010] border-t border-[#7c3aed]/10 fu opacity-0 translate-y-6 transition-all duration-700" id="rsvp"><div className="max-w-sm mx-auto px-6 text-center"><p className="text-[#10b981] text-xs tracking-[0.3em] uppercase mb-3">Confirma</p><h2 className="text-white text-2xl font-black uppercase mb-6">Vas a la fiesta?</h2>
      {done?(<div className="border border-[#7c3aed]/20 rounded-xl p-6"><div className="text-3xl mb-2">🎉</div><p className="text-white font-bold">Dale {name}!</p><p className="text-white/50 text-xs mt-1">{rsvp==="si"?"Nos vemos en la fiesta promo!":"Que lastima! Te vamos a extranar."}</p></div>
      ):!showForm?(<div className="space-y-3"><button onClick={()=>{setRsvp("si");setShowForm(true);}} className="w-full py-4 bg-[#7c3aed] text-white font-bold text-sm uppercase rounded-full">Voy seguro! 🎓</button><button onClick={()=>{setRsvp("no");setShowForm(true);}} className="w-full py-3 border border-white/20 text-white/50 text-sm uppercase rounded-full">No puedo ir 😢</button></div>
      ):(<form onSubmit={e=>{e.preventDefault();setDone(true);}} className="space-y-3 text-left"><input type="text" required value={name} onChange={e=>setName(e.target.value)} placeholder="Tu nombre" className="w-full bg-white/5 border border-[#7c3aed]/20 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#7c3aed]"/><div className="flex gap-2"><button type="submit" className="flex-1 py-3 bg-[#7c3aed] text-white text-xs font-bold uppercase rounded-full flex items-center justify-center gap-1"><Check size={14}/> Confirmar</button><button type="button" onClick={sendWA} className="flex-1 py-3 bg-[#25d366] text-white text-xs font-bold uppercase rounded-full flex items-center justify-center gap-1"><Send size={14}/> WhatsApp</button></div></form>)}</div></section>
    {/* VAQUITA */}
    <section className="py-12 bg-[#050010] border-t border-[#7c3aed]/10 fu opacity-0 translate-y-6 transition-all duration-700"><div className="max-w-sm mx-auto px-6 text-center"><p className="text-[#7c3aed] text-xs tracking-[0.3em] uppercase mb-3">Vaquita</p><h3 className="text-white text-lg font-bold mb-4">Para la fiesta 🥳</h3><div className="bg-[#0a0020] border border-[#7c3aed]/20 rounded-xl p-4"><p className="text-[9px] text-[#7c3aed] uppercase mb-1">Alias</p><div className="flex items-center justify-between bg-white/5 rounded-lg px-3 py-2"><span className="text-white text-sm font-medium">promo2025.sanmartin</span><button onClick={()=>{navigator.clipboard.writeText("promo2025.sanmartin");setCopied(true);setTimeout(()=>setCopied(false),2000);}} className="text-[#7c3aed] flex items-center gap-1 text-xs">{copied?<Check size={14}/>:<Copy size={14}/>}{copied?"Listo!":"Copiar"}</button></div></div></div></section>
    {/* PARTY TOOLS */}
    <section className="py-10 bg-[#050010] border-t border-[#7c3aed]/10 fu opacity-0 translate-y-6 transition-all duration-700"><div className="max-w-sm mx-auto px-6 text-center"><p className="text-white/20 text-xs uppercase mb-3">La noche de la fiesta</p><div className="flex gap-3 justify-center"><button disabled className="px-4 py-2.5 bg-white/5 border border-white/10 text-white/30 rounded-lg flex items-center gap-2 text-xs cursor-not-allowed"><Camera size={14}/> Party Cam</button><button disabled className="px-4 py-2.5 bg-white/5 border border-white/10 text-white/30 rounded-lg flex items-center gap-2 text-xs cursor-not-allowed"><MessageCircle size={14}/> Chat Promo</button></div><p className="text-white/15 text-[9px] mt-2">Disponible el 20/12/2025</p></div></section>
    {/* FOOTER */}
    <section className="py-10 bg-[#050010] text-center border-t border-[#7c3aed]/10"><div className="text-4xl mb-3" style={{filter:"drop-shadow(0 0 15px #7c3aed)"}}>🎓</div><p className="text-white text-xl font-black uppercase">Promo 2025</p><p className="text-[#7c3aed] text-sm mt-1">Colegio San Martin</p><p className="text-white/20 text-[9px] mt-6 tracking-wider">HECHO CON AMOR POR <span className="text-[#7c3aed]/50">TE INVITO APP</span></p></section>
    <style jsx global>{`.fu{opacity:0;transform:translateY(24px);transition:opacity .7s,transform .7s}.vis{opacity:1!important;transform:translateY(0)!important}`}</style>
  </div>);
}
