"use client";
import { useState, useEffect } from "react";
import { GraduationCap, MapPin, Music, Camera, MessageCircle, Clock, ArrowRight, CheckCircle2, Zap, Volume2, VolumeX, Users, CreditCard, Calendar, Vote, Sparkles, Star, PartyPopper } from "lucide-react";
export default function EgresadosPage() {
  useEffect(() => { const o = new IntersectionObserver((es) => { es.forEach((e) => { if (e.isIntersecting) e.target.classList.add("vis"); }); }, { threshold: 0.1 }); document.querySelectorAll(".fu").forEach((el) => o.observe(el)); return () => o.disconnect(); }, []);
  return (<div className="min-h-screen bg-[#0a0a0a] pt-16 lg:pt-20">

    {/* HERO */}
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0020] via-[#0d0d0d] to-[#001a0a]"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-15" style={{background:"radial-gradient(circle, #7c3aed, transparent 70%)"}}></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-10" style={{background:"radial-gradient(circle, #10b981, transparent 70%)"}}></div>
      <div className="absolute inset-0 opacity-5" style={{backgroundImage:"repeating-linear-gradient(45deg, transparent, transparent 40px, #7c3aed 40px, #7c3aed 41px)"}}></div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#7c3aed] via-[#10b981] to-[#7c3aed]"></div>
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="text-6xl sm:text-7xl mb-6">🎓</div>
        <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white uppercase leading-none tracking-tighter">
          <span>EGRES</span><span className="text-[#10b981]">A</span><span>DOS</span>
        </div>
        <div className="mt-3 flex items-center justify-center gap-4">
          <div className="h-px flex-1 max-w-[80px] bg-[#7c3aed]"></div>
          <span className="text-[#7c3aed] text-sm font-bold uppercase tracking-[0.5em]">2025</span>
          <div className="h-px flex-1 max-w-[80px] bg-[#7c3aed]"></div>
        </div>
        <p className="text-white/40 text-sm sm:text-base mt-8 max-w-md mx-auto">Invitaciones digitales para la fiesta de egresados mas epica. Que todos se enteren.</p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#disenos" className="bg-[#7c3aed] text-white px-8 py-4 text-sm font-black uppercase tracking-wider hover:bg-[#8b5cf6] transition-colors inline-flex items-center gap-2 justify-center rounded-sm">VER DISENOS <ArrowRight size={16}/></a>
          <a href="https://wa.me/5491112345678?text=Hola!%20Quiero%20una%20invitacion%20de%20egresados" target="_blank" rel="noopener noreferrer" className="border-2 border-white/20 text-white px-8 py-4 text-sm font-black uppercase tracking-wider hover:bg-white hover:text-black transition-all inline-flex items-center gap-2 justify-center rounded-sm"><MessageCircle size={16}/> CONTACTAR</a>
        </div>
        <div className="flex items-center justify-center gap-8 sm:gap-12 mt-14 flex-wrap">
          <div className="text-center"><p className="text-2xl font-black text-white">300+</p><p className="text-[#10b981]/60 text-xs mt-1">Fiestas</p></div>
          <div className="text-center"><p className="text-2xl font-black text-white">4.9</p><p className="text-[#10b981]/60 text-xs mt-1"><Star size={10} className="inline text-[#7c3aed]"/> Rating</p></div>
          <div className="text-center"><p className="text-2xl font-black text-white">24h</p><p className="text-[#10b981]/60 text-xs mt-1">Entrega</p></div>
        </div>
      </div>
    </section>

    {/* DISENOS */}
    <section className="py-20 bg-[#0a0a0a] border-t border-[#7c3aed]/20" id="disenos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 fu opacity-0 translate-y-8 transition-all duration-700">
        <div className="flex items-center gap-4 mb-4"><div className="h-px flex-1 bg-[#7c3aed]/20"></div><h2 className="text-2xl font-black uppercase text-white tracking-tight">DISENOS</h2><div className="h-px flex-1 bg-[#7c3aed]/20"></div></div>
        <p className="text-white/40 text-sm text-center mb-10">Hace click para ver la invitacion completa funcionando</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Neon Grad */}
          <a href="/invitacion/egresados-neon" className="group block"><div className="relative aspect-[3/4] rounded-lg overflow-hidden border-2 border-[#7c3aed]/20 hover:border-[#7c3aed] transition-all"><div className="absolute inset-0 bg-gradient-to-b from-[#0a0020] to-black"></div><div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full opacity-20" style={{background:"radial-gradient(circle,#7c3aed,transparent)"}}></div><div className="relative z-10 h-full flex flex-col items-center justify-center text-center p-6"><div className="text-5xl mb-4">🎓</div><p className="text-[#7c3aed] text-[10px] tracking-[0.4em] uppercase mb-2">Promo 2025</p><p className="text-white text-xl font-black uppercase">NEON GRAD</p><p className="text-white/40 text-xs mt-2">Violeta &bull; Glow &bull; Fiesta</p></div><div className="absolute inset-0 bg-[#7c3aed]/0 group-hover:bg-[#7c3aed]/10 transition-all flex items-end justify-center pb-6"><span className="opacity-0 group-hover:opacity-100 text-white text-xs font-bold uppercase bg-[#7c3aed] px-4 py-2 transition-opacity">Ver Demo →</span></div></div><p className="text-white/60 text-sm font-bold mt-3">Neon Grad</p><p className="text-white/30 text-xs">The Future is Bright</p></a>
          {/* Gold Class */}
          <a href="/invitacion/egresados-gold" className="group block"><div className="relative aspect-[3/4] rounded-lg overflow-hidden border-2 border-[#ffd700]/20 hover:border-[#ffd700] transition-all"><div className="absolute inset-0 bg-black"></div><div className="absolute inset-6 border border-dashed opacity-15" style={{borderColor:"#ffd700"}}></div><div className="relative z-10 h-full flex flex-col items-center justify-center text-center p-6"><div className="text-5xl mb-4">🏆</div><p className="text-[#ffd700] text-[10px] tracking-[0.4em] uppercase mb-2">Class of 2025</p><p className="text-white text-xl font-black uppercase">GOLD CLASS</p><p className="text-white/40 text-xs mt-2">Dorado &bull; Elegante &bull; Promo</p></div><div className="absolute inset-0 bg-[#ffd700]/0 group-hover:bg-[#ffd700]/10 transition-all flex items-end justify-center pb-6"><span className="opacity-0 group-hover:opacity-100 text-black text-xs font-bold uppercase bg-[#ffd700] px-4 py-2 transition-opacity">Ver Demo →</span></div></div><p className="text-white/60 text-sm font-bold mt-3">Gold Class</p><p className="text-white/30 text-xs">Elegancia & Celebracion</p></a>
          {/* Fiesta Total */}
          <a href="/invitacion/egresados-fiesta" className="group block"><div className="relative aspect-[3/4] rounded-lg overflow-hidden border-2 border-[#10b981]/20 hover:border-[#10b981] transition-all"><div className="absolute inset-0 bg-gradient-to-b from-[#001a0a] to-black"></div><div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full opacity-15" style={{background:"radial-gradient(circle,#10b981,transparent)"}}></div><div className="relative z-10 h-full flex flex-col items-center justify-center text-center p-6"><div className="text-5xl mb-4">🎉</div><p className="text-[#10b981] text-[10px] tracking-[0.4em] uppercase mb-2">Egresados 2025</p><p className="text-white text-xl font-black uppercase">FIESTA TOTAL</p><p className="text-white/40 text-xs mt-2">Verde &bull; Energia &bull; Descontrol</p></div><div className="absolute inset-0 bg-[#10b981]/0 group-hover:bg-[#10b981]/10 transition-all flex items-end justify-center pb-6"><span className="opacity-0 group-hover:opacity-100 text-white text-xs font-bold uppercase bg-[#10b981] px-4 py-2 transition-opacity">Ver Demo →</span></div></div><p className="text-white/60 text-sm font-bold mt-3">Fiesta Total</p><p className="text-white/30 text-xs">Pura energia</p></a>
        </div>
      </div>
    </section>

    {/* SERVICIOS PREMIUM - Los 12 nuevos */}
    <section className="py-20 bg-[#050510] border-t border-[#7c3aed]/20">
      <div className="max-w-7xl mx-auto px-4 fu opacity-0 translate-y-8 transition-all duration-700">
        <div className="text-center mb-4"><p className="text-[#10b981] text-xs tracking-[0.3em] uppercase mb-3">Servicios Exclusivos</p><h2 className="text-3xl font-black uppercase text-white">Lo que nadie mas ofrece</h2></div>
        <p className="text-white/40 text-sm text-center mb-12 max-w-lg mx-auto">Herramientas digitales pensadas para la promo. Hacemos que la fiesta sea inolvidable.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {emoji:"🎥",t:"Video Dedicatorias",d:"Cada compañero graba un video corto. Armamos un video grupal emotivo para la fiesta.",tag:"NUEVO",c:"#7c3aed"},
            {emoji:"📖",t:"Anuario Digital",d:"Perfil de cada egresado: foto, apodo, frase y 'mas probable que...'. Queda online para siempre.",tag:"NUEVO",c:"#10b981"},
            {emoji:"👑",t:"Votacion Rey/Reina",d:"Encuesta en vivo para elegir rey y reina de la promo. Se revela en la fiesta.",tag:"NUEVO",c:"#ffd700"},
            {emoji:"🧠",t:"Trivia de la Promo",d:"Juego interactivo: '¿Quien se copio mas?', '¿Quien llegaba siempre tarde?'. Diversion asegurada.",tag:"NUEVO",c:"#ff6b00"},
            {emoji:"📺",t:"Slideshow Recuerdos",d:"Carrusel automatico de fotos de toda la secundaria con musica. Se proyecta en la fiesta.",tag:"NUEVO",c:"#0088ff"},
            {emoji:"💬",t:"Muro de Mensajes",d:"Libro de firmas digital. Los invitados dejan mensajes que quedan como recuerdo para siempre.",tag:"NUEVO",c:"#e91e63"},
            {emoji:"🎵",t:"Playlist Colaborativa",d:"Cada invitado agrega canciones. Se arma la playlist de la fiesta entre toda la promo.",tag:"NUEVO",c:"#00bcd4"},
            {emoji:"📸",t:"QR Check-in",d:"Al llegar escanean un QR y quedan registrados con nombre y foto. Saben quien llego.",tag:"NUEVO",c:"#4caf50"},
            {emoji:"🏆",t:"Premios / Superlatives",d:"'Mas probable que sea presidente', 'Mejor dupla', 'El payaso de la clase'. Votacion digital.",tag:"NUEVO",c:"#ff9800"},
            {emoji:"⏳",t:"Capsula del Tiempo",d:"Cada egresado escribe un mensaje para su yo del futuro. Se abre en 5 o 10 años.",tag:"NUEVO",c:"#9c27b0"},
            {emoji:"🎟️",t:"Entrada Digital + QR",d:"Cada invitado recibe su ticket personalizado con QR para el ingreso. Evita colados.",tag:"NUEVO",c:"#f44336"},
            {emoji:"💸",t:"Split de Gastos",d:"Calculadora que divide los gastos del evento entre todos. DJ, salon, bebida, todo clarito.",tag:"NUEVO",c:"#2196f3"},
          ].map((s)=>(
            <div key={s.t} className="bg-[#0a0a14] rounded-xl p-5 border border-white/5 hover:border-opacity-40 transition-all group relative overflow-hidden" style={{"--hc":s.c} as React.CSSProperties}>
              <div className="absolute top-0 right-0 w-20 h-20 rounded-full opacity-5 group-hover:opacity-10 transition-opacity" style={{background:`radial-gradient(circle,${s.c},transparent)`}}></div>
              <div className="flex items-start gap-3 relative z-10">
                <div className="text-2xl flex-shrink-0">{s.emoji}</div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-white font-bold text-sm">{s.t}</h3>
                    <span className="text-[8px] font-bold px-1.5 py-0.5 rounded-sm uppercase tracking-wider" style={{backgroundColor:s.c+"20",color:s.c}}>{s.tag}</span>
                  </div>
                  <p className="text-white/40 text-xs leading-relaxed">{s.d}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* QUE INCLUYE - Basico */}
    <section className="py-16 bg-[#0a0a0a] border-t border-[#7c3aed]/20">
      <div className="max-w-4xl mx-auto px-4 fu opacity-0 translate-y-8 transition-all duration-700">
        <h2 className="text-2xl font-black uppercase text-white text-center mb-3">TODAS LAS INVITACIONES INCLUYEN</h2>
        <p className="text-white/30 text-xs text-center mb-8">Funciones base en todos los planes</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {["Cuenta regresiva en vivo","Mapa interactivo del salon","RSVP + confirmacion WhatsApp","Musica al abrir la invitacion","Party Cam (fotos en vivo)","Party Chat para toda la promo","Itinerario de la noche","Vaquita con alias/CBU","Galeria de fotos","Envios ilimitados por WhatsApp"].map((f)=>(
            <div key={f} className="flex items-center gap-3 py-3 px-4 border-l-2 border-[#7c3aed] bg-white/5"><CheckCircle2 size={14} className="text-[#10b981] flex-shrink-0"/><span className="text-white/70 text-sm">{f}</span></div>
          ))}
        </div>
      </div>
    </section>
    {/* COMO FUNCIONA */}
    <section className="py-16 bg-[#0a0a0a] border-t border-[#7c3aed]/20">
      <div className="max-w-4xl mx-auto px-4 fu opacity-0 translate-y-8 transition-all duration-700">
        <h2 className="text-2xl font-black uppercase text-white text-center mb-10">COMO FUNCIONA</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[{n:"01",t:"Elegi el diseno",d:"Mira las opciones y elegi la que te cope.",c:"#7c3aed"},{n:"02",t:"Mandanos la info",d:"Fecha, salon, nombres, foto de la promo.",c:"#10b981"},{n:"03",t:"Te llega en 24hs",d:"Link listo para mandar al grupo de la promo.",c:"#ffd700"}].map(s=>(
            <div key={s.n} className="bg-white/5 p-6 text-center border-t-2" style={{borderColor:s.c}}>
              <p className="text-xs font-black mb-2" style={{color:s.c}}>{s.n}</p><h3 className="text-white font-bold text-sm mb-2">{s.t}</h3><p className="text-white/40 text-xs">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    {/* PLANES */}
    <section className="py-20 bg-[#050510] border-t border-[#7c3aed]/20">
      <div className="max-w-4xl mx-auto px-4 fu opacity-0 translate-y-8 transition-all duration-700">
        <h2 className="text-2xl font-black uppercase text-white text-center mb-3">PRECIOS</h2>
        <p className="text-white/30 text-sm text-center mb-10">30% OFF por transferencia</p>
        <div className="grid md:grid-cols-3 gap-4">
          {[{n:"BASICO",p:"25K",c:"#10b981",f:["Cuenta regresiva + mapa","RSVP WhatsApp","Vaquita + itinerario","Musica al abrir","Envios ilimitados"]},{n:"PREMIUM",p:"55K",c:"#7c3aed",pop:true,f:["Todo Basico","RSVP propio + Party Cam","Party Chat + Galeria","Playlist Colaborativa","Muro de Mensajes","QR Check-in"]},{n:"ULTIMATE",p:"85K",c:"#ffd700",f:["Todo Premium","Video Dedicatorias","Anuario Digital","Trivia + Superlatives","Votacion Rey/Reina","Capsula del Tiempo","Entrada Digital QR","Split de Gastos","Slideshow Recuerdos"]}].map(pl=>(
            <div key={pl.n} className={`p-6 ${pl.pop?"border-2":"bg-white/5 border border-white/10"} text-white`} style={{borderColor:pl.pop?pl.c:undefined}}>
              {pl.pop&&<p className="text-[10px] font-black tracking-widest mb-2" style={{color:pl.c}}>★ POPULAR</p>}
              <h3 className="font-black text-lg">{pl.n}</h3><p className="text-3xl font-black my-3">${pl.p}</p>
              <ul className="space-y-1.5 mb-5">{pl.f.map(x=><li key={x} className="text-xs text-white/50">→ {x}</li>)}</ul>
              <button className="w-full py-3 text-xs font-black uppercase" style={{backgroundColor:pl.pop?pl.c:"transparent",color:pl.pop?"#fff":pl.c,border:pl.pop?"none":`1px solid ${pl.c}40`}}>ELEGIR</button>
            </div>
          ))}
        </div>
      </div>
    </section>
    {/* CTA */}
    <section className="py-16 bg-[#0a0a0a] border-t border-[#7c3aed]/20 text-center">
      <div className="fu opacity-0 translate-y-8 transition-all duration-700">
        <div className="text-5xl mb-4">🎓</div>
        <p className="text-[#7c3aed] text-3xl font-black uppercase mb-4">VAMOS PROMO!</p>
        <p className="text-white/40 text-sm mb-8">En 24hs tienen la invitacion para mandar al grupo.</p>
        <a href="https://wa.me/5491112345678?text=Hola!%20Quiero%20una%20invitacion%20de%20egresados" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25d366] text-white px-10 py-4 text-sm font-black uppercase hover:bg-[#1da851]"><MessageCircle size={18}/> WHATSAPP</a>
      </div>
    </section>
    <style jsx global>{`.fu{opacity:0;transform:translateY(24px);transition:opacity .7s,transform .7s}.vis{opacity:1!important;transform:translateY(0)!important}`}</style>
  </div>);
}
