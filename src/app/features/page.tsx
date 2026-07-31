import {
  Mail,
  Users,
  CheckCircle2,
  Smartphone,
  Bell,
  Lock,
  Globe,
  Calendar,
  Utensils,
  Music,
  Plane,
  MessageSquare,
  BarChart3,
  Send,
  Shield,
  Zap,
  Camera,
} from "lucide-react";
import Link from "next/link";

export default function FeaturesPage() {
  return (
    <div className="pt-20 lg:pt-24">
      {/* Hero */}
      <section className="bg-secondary py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-accent text-xs tracking-[0.3em] uppercase mb-3">
            Funciones Completas
          </p>
          <h1 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl lg:text-5xl text-primary mb-4">
            La forma mas facil de gestionar RSVPs
          </h1>
          <p className="text-muted text-sm lg:text-base max-w-2xl mx-auto leading-relaxed">
            Herramientas premium para crear invitaciones hermosas y gestionar
            cada detalle de tu evento de manera sencilla.
          </p>
        </div>
      </section>

      {/* Main RSVP Features */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Feature List */}
            <div>
              <p className="text-accent text-xs tracking-[0.3em] uppercase mb-3">
                Sistema RSVP
              </p>
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl lg:text-3xl text-primary mb-8">
                Confirmaciones sin esfuerzo
              </h2>

              <div className="space-y-6">
                {[
                  {
                    icon: <CheckCircle2 size={20} />,
                    title: "Recopila cualquier informacion",
                    desc: "Preferencias de menu, detalles de viaje, solicitudes de canciones, con opciones multiples o respuestas libres.",
                  },
                  {
                    icon: <Users size={20} />,
                    title: "Personaliza por invitado",
                    desc: "Cada invitado ve solo los eventos a los que esta invitado y puede confirmar por separado.",
                  },
                  {
                    icon: <Smartphone size={20} />,
                    title: "Facil para los invitados",
                    desc: "Funciona perfectamente en cualquier dispositivo movil, tablet o computadora.",
                  },
                  {
                    icon: <Bell size={20} />,
                    title: "Notificaciones en tiempo real",
                    desc: "Recibe alertas al instante cuando alguien confirma. Manten informado a tu wedding planner.",
                  },
                  {
                    icon: <Lock size={20} />,
                    title: "Privacidad y control",
                    desc: "Contraseñas, verificacion por lista de invitados y opciones de visibilidad en buscadores.",
                  },
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="text-accent flex-shrink-0 mt-0.5">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-primary mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-muted text-xs leading-relaxed">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Visual mockup */}
            <div className="relative">
              <div className="bg-white border border-border rounded-xl shadow-2xl p-6 lg:p-8">
                {/* RSVP Form Mockup */}
                <div className="space-y-4">
                  <div className="text-center pb-4 border-b border-border">
                    <p className="font-[family-name:var(--font-playfair)] text-lg text-primary">
                      Confirma tu Asistencia
                    </p>
                    <p className="text-xs text-muted mt-1">
                      Boda de Ana & Pedro
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <label className="text-xs text-muted block mb-1">
                        Nombre completo
                      </label>
                      <div className="border border-border rounded-sm px-3 py-2.5 text-sm text-primary/50 bg-secondary/50">
                        Maria Garcia Lopez
                      </div>
                    </div>
                    <div>
                      <label className="text-xs text-muted block mb-1">
                        Asistencia
                      </label>
                      <div className="flex gap-2">
                        <div className="flex-1 border-2 border-accent bg-accent/5 rounded-sm px-3 py-2.5 text-center text-xs text-accent font-medium">
                          Asistire con gusto
                        </div>
                        <div className="flex-1 border border-border rounded-sm px-3 py-2.5 text-center text-xs text-muted">
                          No podre asistir
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="text-xs text-muted block mb-1">
                        Preferencia de menu
                      </label>
                      <div className="border border-border rounded-sm px-3 py-2.5 text-sm text-primary/50 bg-secondary/50">
                        Seleccionar opcion...
                      </div>
                    </div>
                    <div>
                      <label className="text-xs text-muted block mb-1">
                        Solicitud de cancion
                      </label>
                      <div className="border border-border rounded-sm px-3 py-2.5 text-sm text-primary/50 bg-secondary/50">
                        Tu cancion favorita...
                      </div>
                    </div>
                  </div>

                  <button className="w-full bg-primary text-white py-3 text-sm tracking-wider rounded-sm mt-2">
                    Confirmar Asistencia
                  </button>
                </div>
              </div>

              {/* Floating notification */}
              <div className="absolute -top-4 -right-4 bg-white border border-border rounded-lg shadow-lg p-3 animate-bounce">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle2 size={12} className="text-green-600" />
                  </div>
                  <div>
                    <p className="text-[10px] font-medium text-primary">
                      Nueva confirmacion!
                    </p>
                    <p className="text-[9px] text-muted">Maria confirmo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guest Management */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-accent text-xs tracking-[0.3em] uppercase mb-3">
              Gestion Completa
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl lg:text-3xl text-primary mb-4">
              Todo lo que puedes gestionar
            </h2>
            <p className="text-muted text-sm max-w-lg mx-auto">
              Personaliza cada aspecto de la experiencia de tus invitados.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Utensils size={24} />,
                title: "Menu",
                desc: "Opciones de platos, dietas especiales y alergias",
              },
              {
                icon: <Music size={24} />,
                title: "Musica",
                desc: "Solicitudes de canciones y preferencias musicales",
              },
              {
                icon: <Plane size={24} />,
                title: "Viaje",
                desc: "Informacion de llegada, alojamiento y transporte",
              },
              {
                icon: <MessageSquare size={24} />,
                title: "Mensajes",
                desc: "Deseos, felicitaciones y notas personales",
              },
              {
                icon: <Calendar size={24} />,
                title: "Eventos",
                desc: "Ceremonia, recepcion, brunch y mas",
              },
              {
                icon: <BarChart3 size={24} />,
                title: "Estadisticas",
                desc: "Dashboard con metricas en tiempo real",
              },
              {
                icon: <Send size={24} />,
                title: "Envios",
                desc: "Email, WhatsApp, link directo o QR code",
              },
              {
                icon: <Shield size={24} />,
                title: "Seguridad",
                desc: "Contraseñas y acceso controlado por lista",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-lg p-6 card-hover border border-border"
              >
                <div className="text-accent mb-4">{item.icon}</div>
                <h3 className="text-sm font-medium text-primary mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-muted leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Invitations Feature */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Visual */}
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="aspect-[3/4] bg-gradient-to-br from-rose-50 to-pink-100 rounded-lg border border-border flex items-center justify-center p-4">
                    <div className="text-center">
                      <p className="font-[family-name:var(--font-playfair)] text-sm text-rose-800">
                        Save the Date
                      </p>
                      <div className="w-6 h-px bg-rose-300 mx-auto my-2"></div>
                      <p className="text-[9px] text-rose-600">15.06.2025</p>
                    </div>
                  </div>
                  <div className="aspect-square bg-gradient-to-br from-amber-50 to-orange-100 rounded-lg border border-border flex items-center justify-center p-4">
                    <div className="text-center">
                      <Mail size={20} className="mx-auto text-amber-600 mb-2" />
                      <p className="text-[9px] text-amber-700">
                        Invitacion Digital
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="aspect-square bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg border border-border flex items-center justify-center p-4">
                    <div className="text-center">
                      <Globe size={20} className="mx-auto text-blue-600 mb-2" />
                      <p className="text-[9px] text-blue-700">
                        Wedding Website
                      </p>
                    </div>
                  </div>
                  <div className="aspect-[3/4] bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg border border-border flex items-center justify-center p-4">
                    <div className="text-center">
                      <p className="font-[family-name:var(--font-playfair)] text-sm text-green-800">
                        Menu
                      </p>
                      <div className="w-6 h-px bg-green-300 mx-auto my-2"></div>
                      <p className="text-[9px] text-green-600">Recepcion</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <p className="text-accent text-xs tracking-[0.3em] uppercase mb-3">
                Suite Completa
              </p>
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl lg:text-3xl text-primary mb-6">
                Mas que una invitacion
              </h2>
              <p className="text-muted text-sm leading-relaxed mb-8">
                Crea una suite completa de papeleria digital coordinada que
                incluye Save the Date, invitacion formal, confirmacion y mas.
                Todo con el mismo diseno premium.
              </p>

              <div className="space-y-4">
                {[
                  "Save the Date digitales",
                  "Invitaciones formales con RSVP",
                  "Sitio web del evento coordinado",
                  "Menus y programas digitales",
                  "Envio masivo por email o WhatsApp",
                  "Opcion de impresion en papel premium",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <Zap size={14} className="text-accent flex-shrink-0" />
                    <span className="text-sm text-muted">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Link
                  href="/templates"
                  className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 text-sm tracking-wider uppercase hover:bg-primary/90 transition-colors rounded-sm"
                >
                  Explorar Disenos
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 lg:py-20 bg-primary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-1 mb-6">
            {[1, 2, 3, 4, 5].map((i) => (
              <svg
                key={i}
                className="w-5 h-5 text-accent fill-accent"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>
          <blockquote className="text-white/90 text-base lg:text-lg italic leading-relaxed mb-6">
            &ldquo;Recoger las confirmaciones y hacer seguimiento fue
            increiblemente facil. Pude personalizar el formulario exactamente
            como lo necesitaba. Los invitados solo veian la informacion
            relevante para ellos.&rdquo;
          </blockquote>
          <p className="text-accent text-sm">Andrea M.</p>
          <p className="text-white/40 text-xs mt-1">Boda en Marzo 2025</p>
        </div>
      </section>

      {/* Party Chat Section */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-3 py-1 rounded-full text-[10px] tracking-wider uppercase mb-4">
                <Zap size={12} /> Nuevo
              </div>
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl lg:text-3xl text-white mb-6">
                Party Chat en Vivo
              </h2>
              <p className="text-white/60 text-sm leading-relaxed mb-8">
                Un chat grupal exclusivo para la fiesta. Cada mesa tiene su QR:
                los invitados lo escanean, eligen un apodo y empiezan a hablar
                entre todos. Ideal para casamientos donde no todos se conocen.
              </p>
              <div className="space-y-4">
                {[
                  { title: "QR por mesa", desc: "Cada mesa tiene su propio QR. Los invitados lo escanean y entran sin registrarse." },
                  { title: "Chat general + por mesa", desc: "Un chat para toda la fiesta y otro privado solo para tu mesa." },
                  { title: "Zumbidos y colores", desc: "Mandale un zumbido que sacude la pantalla! Cada invitado elige su color de nick." },
                  { title: "Solo dura tu fiesta", desc: "El chat se activa cuando vos quieras y se cierra al terminar." },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <CheckCircle2 size={14} className="text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-white text-sm font-medium">{item.title}</span>
                      <p className="text-white/40 text-xs">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-accent text-xs mt-6 tracking-wider uppercase">
                Incluido en el plan Premium
              </p>
            </div>

            {/* Chat mockup */}
            <div className="bg-[#1a1a1a] rounded-xl border border-white/10 overflow-hidden shadow-2xl">
              <div className="bg-accent px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MessageSquare size={16} className="text-white" />
                  <span className="text-white text-sm font-medium">Mesa 5 - Chat</span>
                </div>
                <span className="text-white/80 text-xs">4 online</span>
              </div>
              <div className="p-4 space-y-3 h-52">
                {[
                  { user: "Maria", color: "#e91e63", msg: "Que hermosa la ceremonia! 😍" },
                  { user: "Carlos", color: "#2196f3", msg: "Vamos a bailar toda la noche! 🕺" },
                  { user: "Laura", color: "#9c27b0", msg: "Los novios estan radiantes ✨" },
                  { user: "Diego", color: "#4caf50", msg: "Alguien sabe el nombre del DJ?" },
                ].map((msg, i) => (
                  <div key={i} className="flex flex-col items-start">
                    <div className="max-w-[80%] rounded-lg px-3 py-2 bg-white/5">
                      <p className="text-xs font-medium mb-0.5" style={{ color: msg.color }}>{msg.user}</p>
                      <p className="text-white/80 text-xs">{msg.msg}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t border-white/10 p-3 flex gap-2">
                <div className="flex-1 bg-white/5 border border-white/10 rounded-sm px-3 py-2 text-white/30 text-xs">
                  Escribi un mensaje...
                </div>
                <div className="px-3 py-2 bg-accent text-white rounded-sm">
                  <Send size={14} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Party Cam Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Polaroid mockup */}
            <div className="grid grid-cols-2 gap-4 order-2 lg:order-1">
              {[
                { user: "Sofia", color: "from-rose-100 to-rose-200" },
                { user: "Diego", color: "from-blue-100 to-blue-200" },
                { user: "Lucia", color: "from-amber-100 to-amber-200" },
                { user: "Martin", color: "from-green-100 to-green-200" },
              ].map((photo, i) => (
                <div key={i} className="bg-white p-2 rounded-sm shadow-lg border border-border"
                  style={{ transform: `rotate(${i % 2 === 0 ? -2 : 2}deg)` }}>
                  <div className={`w-full aspect-square rounded-sm bg-gradient-to-br ${photo.color} flex items-center justify-center`}>
                    <Camera size={24} className="text-muted/30" />
                  </div>
                  <div className="pt-2 pb-1 text-center">
                    <p className="text-xs text-primary font-medium">{photo.user}</p>
                    <p className="text-[9px] text-muted">hace {i + 1} min</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-3 py-1 rounded-full text-[10px] tracking-wider uppercase mb-4">
                <Camera size={12} /> Incluido en Premium
              </div>
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl lg:text-3xl text-primary mb-6">
                Party Cam
              </h2>
              <p className="text-muted text-sm leading-relaxed mb-8">
                Un muro de fotos en tiempo real para tu fiesta. Los invitados
                sacan fotos, las suben escaneando un QR, y aparecen al instante
                en la pantalla gigante del salon.
              </p>
              <div className="space-y-4">
                {[
                  { title: "Subida instantanea", desc: "El invitado saca una foto, escanea el QR y la sube en 2 toques. Sin descargar nada." },
                  { title: "Pantalla en vivo", desc: "Las fotos aparecen al instante en la pantalla del salon. Se actualiza sola cada 3 segundos." },
                  { title: "Estilo polaroid", desc: "Cada foto se muestra como una polaroid con el nombre del invitado." },
                  { title: "Recuerdo para los novios", desc: "Despues del evento recibis todas las fotos que subieron tus invitados." },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <CheckCircle2 size={14} className="text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-primary text-sm font-medium">{item.title}</span>
                      <p className="text-muted text-xs">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl lg:text-3xl text-primary mb-4">
            Comienza gratis hoy
          </h2>
          <p className="text-muted text-sm mb-8">
            Explora todas las funciones sin compromiso. Sin periodos de prueba
            limitados.
          </p>
          <Link
            href="/templates"
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 text-sm tracking-wider uppercase hover:bg-primary/90 transition-colors rounded-sm"
          >
            Crear Mi Invitacion
          </Link>
        </div>
      </section>
    </div>
  );
}
