import Link from "next/link";
import {
  PartyPopper, Users, Calendar, MapPin, Music, Camera,
  MessageCircle, Sparkles, Vote, CreditCard, Clock,
  Wine, Star, ArrowRight, CheckCircle2, Zap,
} from "lucide-react";

export default function DespedidasPage() {
  return (
    <div className="pt-20 lg:pt-24">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#1a0533] via-[#2d1b4e] to-[#0f0f1a] py-20 lg:py-32 overflow-hidden">
        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-[10%] w-2 h-2 bg-pink-500 rounded-full animate-pulse opacity-60"></div>
          <div className="absolute top-20 left-[30%] w-3 h-3 bg-purple-400 rounded-full animate-pulse opacity-40" style={{ animationDelay: "0.5s" }}></div>
          <div className="absolute top-16 right-[20%] w-2 h-2 bg-yellow-400 rounded-full animate-pulse opacity-50" style={{ animationDelay: "1s" }}></div>
          <div className="absolute bottom-20 left-[15%] w-2 h-2 bg-cyan-400 rounded-full animate-pulse opacity-50" style={{ animationDelay: "1.5s" }}></div>
          <div className="absolute bottom-10 right-[25%] w-3 h-3 bg-pink-400 rounded-full animate-pulse opacity-40" style={{ animationDelay: "0.8s" }}></div>
          <div className="absolute top-1/2 left-[50%] w-1 h-1 bg-white rounded-full animate-pulse opacity-30"></div>
          <div className="absolute top-1/3 right-[10%] w-2 h-2 bg-orange-400 rounded-full animate-pulse opacity-40" style={{ animationDelay: "2s" }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-pink-300 px-4 py-1.5 rounded-full text-xs tracking-wider uppercase mb-6 border border-white/10">
            <PartyPopper size={14} />
            <span>Nuevo servicio</span>
          </div>

          <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">
            Despedidas de Soltero<span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">/a</span>
          </h1>

          <p className="text-white/60 text-base lg:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Invitaciones digitales para la mejor noche de tu vida.
            Organiza, invita y festeja sin complicaciones.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/templates"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 text-sm tracking-wider uppercase hover:from-pink-600 hover:to-purple-700 transition-all rounded-full group font-medium">
              Ver Disenos
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="#como-funciona"
              className="inline-flex items-center justify-center gap-2 border border-white/20 text-white px-8 py-4 text-sm tracking-wider uppercase hover:bg-white/10 transition-all rounded-full">
              Como Funciona
            </Link>
          </div>

          {/* Stats */}
          <div className="flex items-center justify-center gap-8 sm:gap-12 mt-14 flex-wrap">
            <div className="text-center">
              <p className="text-2xl sm:text-3xl font-bold text-white">500+</p>
              <p className="text-white/40 text-xs mt-1">Despedidas creadas</p>
            </div>
            <div className="text-center">
              <p className="text-2xl sm:text-3xl font-bold text-white">4.9</p>
              <p className="text-white/40 text-xs mt-1 flex items-center gap-1 justify-center">
                <Star size={10} className="text-yellow-400 fill-yellow-400" /> Calificacion
              </p>
            </div>
            <div className="text-center">
              <p className="text-2xl sm:text-3xl font-bold text-white">24hs</p>
              <p className="text-white/40 text-xs mt-1">Entrega express</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tipos de despedida */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-purple-500 text-xs tracking-[0.3em] uppercase mb-3">Para todos los estilos</p>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl lg:text-4xl text-primary mb-4">
              Que tipo de despedida es?
            </h2>
            <p className="text-muted text-sm max-w-lg mx-auto">
              Tenemos disenos para cada estilo. Elegante, divertida, tematica o totalmente loca.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { emoji: "🥂", title: "Elegante", desc: "Cena, spa, vino y glamour. Para las que prefieren la sofisticacion.", color: "from-rose-50 to-pink-50 border-rose-100" },
              { emoji: "🎉", title: "Fiesta Total", desc: "Boliche, bar crawl, karaoke. La noche mas loca de todas.", color: "from-purple-50 to-indigo-50 border-purple-100" },
              { emoji: "🏖️", title: "Pool Party", desc: "Pileta, musica, tragos y sol. Despedida al aire libre.", color: "from-cyan-50 to-blue-50 border-cyan-100" },
              { emoji: "🎲", title: "Tematica", desc: "Casino, años 80, cowboys, neon... la imaginacion es el limite.", color: "from-amber-50 to-yellow-50 border-amber-100" },
            ].map((item) => (
              <div key={item.title} className={`bg-gradient-to-br ${item.color} rounded-xl p-6 text-center border hover:shadow-lg transition-shadow cursor-pointer`}>
                <div className="text-4xl mb-4">{item.emoji}</div>
                <h3 className="text-primary font-medium text-sm mb-2">{item.title}</h3>
                <p className="text-muted text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section className="py-20 lg:py-28 bg-secondary" id="como-funciona">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-purple-500 text-xs tracking-[0.3em] uppercase mb-3">Super facil</p>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl lg:text-4xl text-primary">
              Como funciona
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { step: "01", title: "Elegi el estilo", desc: "Mira nuestros disenos de despedida y elegi el que mas te guste. Tenemos de todo!", icon: <Sparkles size={24} /> },
              { step: "02", title: "Mandanos los datos", desc: "Por WhatsApp nos contas toda la info: fecha, lugar, nombres, tematica, lo que quieras.", icon: <MessageCircle size={24} /> },
              { step: "03", title: "Recibi el link en 24hs", desc: "Te mandamos tu invitacion digital lista para compartir con el grupo. Asi de rapido.", icon: <Zap size={24} /> },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 text-white mb-6">
                  {item.icon}
                </div>
                <h3 className="font-[family-name:var(--font-playfair)] text-xl text-primary mb-3">{item.title}</h3>
                <p className="text-muted text-sm leading-relaxed max-w-xs mx-auto">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Que incluye */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-purple-500 text-xs tracking-[0.3em] uppercase mb-3">Todo incluido</p>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl lg:text-4xl text-primary mb-4">
              Que incluye cada invitacion
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Clock size={22} />, title: "Cuenta regresiva", desc: "En vivo desde que abren el link. La emocion arranca al instante." },
              { icon: <MapPin size={22} />, title: "Mapa interactivo", desc: "Google Maps integrado. Un toque y llegan al punto de encuentro." },
              { icon: <CheckCircle2 size={22} />, title: "Confirmacion RSVP", desc: "Lista de confirmados en tiempo real. Sabe quien viene y quien no." },
              { icon: <Music size={22} />, title: "Musica de fondo", desc: "La cancion que elijas suena al abrir la invitacion." },
              { icon: <Camera size={22} />, title: "Party Cam", desc: "Muro de fotos en vivo. Las fotos aparecen en pantalla al instante." },
              { icon: <MessageCircle size={22} />, title: "Party Chat", desc: "Chat grupal exclusivo para la noche. Con zumbidos y colores!" },
              { icon: <Calendar size={22} />, title: "Itinerario", desc: "Linea de tiempo del evento. Todos saben que sigue." },
              { icon: <Vote size={22} />, title: "Encuestas", desc: "Vota por actividades, lugares o lo que el grupo decida." },
              { icon: <CreditCard size={22} />, title: "Vaquita / Split", desc: "Seccion para juntar plata. Alias y CBU con boton copiar." },
              { icon: <Wine size={22} />, title: "Menu de tragos", desc: "Carta de tragos o menu de la noche para los invitados." },
              { icon: <Users size={22} />, title: "Lista de invitados", desc: "Control total de quien fue invitado y quien confirmo." },
              { icon: <PartyPopper size={22} />, title: "Tematica custom", desc: "Colores, tipografia y estilo adaptado a tu tematica." },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4 p-5 rounded-xl border border-border hover:border-purple-200 hover:bg-purple-50/30 transition-colors">
                <div className="text-purple-500 flex-shrink-0 mt-0.5">{item.icon}</div>
                <div>
                  <h3 className="text-primary text-sm font-medium mb-1">{item.title}</h3>
                  <p className="text-muted text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Planes */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-[#1a0533] via-[#2d1b4e] to-[#0f0f1a]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-pink-400 text-xs tracking-[0.3em] uppercase mb-3">Precios</p>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl lg:text-4xl text-white mb-4">
              Elegi tu plan
            </h2>
            <p className="text-white/50 text-sm">30% OFF abonando por transferencia</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Basico",
                price: "25.000",
                features: ["Cuenta regresiva + mapa", "Confirmacion por WhatsApp", "Vaquita + dress code", "Envios ilimitados"],
                highlighted: false,
              },
              {
                name: "Premium",
                price: "45.000",
                popular: true,
                features: ["Todo lo del Basico", "RSVP propio", "Musica + Galeria de fotos", "Party Cam (Gratis)", "Party Chat en vivo"],
                highlighted: true,
              },
              {
                name: "Premium Plus",
                price: "65.000",
                features: ["Todo lo del Premium", "Personalizada + trivia/juegos", "Tu propio dominio", "Fotos ilimitadas + soporte", "Encuestas interactivas"],
                highlighted: false,
              },
            ].map((plan) => (
              <div key={plan.name} className={`rounded-xl p-6 ${plan.highlighted ? "bg-gradient-to-br from-pink-500/20 to-purple-600/20 border-2 border-pink-500/50 scale-[1.02]" : "bg-white/5 border border-white/10"}`}>
                {plan.popular && (
                  <div className="text-center mb-3">
                    <span className="bg-gradient-to-r from-pink-500 to-purple-600 text-white text-[10px] tracking-wider uppercase px-3 py-1 rounded-full">
                      Popular
                    </span>
                  </div>
                )}
                <h3 className="text-white text-lg font-bold text-center">{plan.name}</h3>
                <div className="text-center my-4">
                  <span className="text-white/50 text-sm">$</span>
                  <span className="text-white text-3xl font-bold">{plan.price}</span>
                </div>
                <p className="text-white/30 text-xs text-center mb-6">por invitacion</p>
                <ul className="space-y-2.5 mb-6">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <CheckCircle2 size={12} className="text-pink-400 flex-shrink-0" />
                      <span className="text-white/70 text-xs">{f}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 text-sm font-medium tracking-wider uppercase rounded-full transition-colors ${plan.highlighted ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700" : "border border-white/20 text-white hover:bg-white/10"}`}>
                  Elegir
                </button>
              </div>
            ))}
          </div>

          <p className="text-white/30 text-xs text-center mt-8">
            Sena 50% para iniciar. 30% OFF abonando por transferencia.
          </p>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-purple-500 text-xs tracking-[0.3em] uppercase mb-3">Testimonios</p>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl lg:text-4xl text-primary">
              Lo que dicen
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Camila P.", event: "Despedida de soltera", text: "Las chicas no podian creer lo linda que quedo la invitacion. El Party Chat fue lo mejor de la noche, nos matamos de risa!" },
              { name: "Nicolas R.", event: "Despedida de soltero", text: "Super simple todo. Mande los datos por WhatsApp y al otro dia tenia todo listo. Los pibes quedaron flasheados." },
              { name: "Valentina S.", event: "Pool Party despedida", text: "La cuenta regresiva y la musica que suena al abrir le dio un toque increible. Todos preguntaban donde la hicimos." },
            ].map((t, i) => (
              <div key={i} className="bg-secondary rounded-xl p-6 border border-border">
                <div className="flex items-center gap-1 mb-4">
                  {[1,2,3,4,5].map((s) => (
                    <Star key={s} size={12} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-muted text-sm leading-relaxed italic mb-4">&ldquo;{t.text}&rdquo;</p>
                <div>
                  <p className="text-primary text-sm font-medium">{t.name}</p>
                  <p className="text-muted text-xs">{t.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-[#1a0533] via-[#2d1b4e] to-[#0f0f1a] text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <PartyPopper size={40} className="text-pink-400 mx-auto mb-6" />
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl lg:text-4xl text-white mb-4">
            La mejor noche merece la mejor invitacion
          </h2>
          <p className="text-white/50 text-base mb-10">
            En 24hs tenes tu invitacion digital lista para sorprender al grupo por WhatsApp.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/5491112345678?text=Hola!%20Quiero%20una%20invitacion%20de%20despedida%20de%20soltero/a"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25d366] text-white px-8 py-4 text-sm font-medium tracking-wider uppercase hover:bg-[#1da851] transition-colors rounded-full">
              <MessageCircle size={18} /> Contactar por WhatsApp
            </a>
            <Link href="/templates"
              className="inline-flex items-center justify-center gap-2 border border-white/20 text-white px-8 py-4 text-sm tracking-wider uppercase hover:bg-white/10 transition-all rounded-full">
              Ver Disenos
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
