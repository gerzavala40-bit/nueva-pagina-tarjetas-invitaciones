import { Template } from "@/data/templates";

interface InvitationDesignProps {
  template: Template;
  showFull?: boolean;
}

export default function InvitationDesign({
  template,
  showFull = false,
}: InvitationDesignProps) {
  const baseClass = "w-full h-full flex flex-col items-center justify-center p-6 lg:p-8";
  const nameSize = showFull ? "text-2xl lg:text-4xl" : "text-lg lg:text-xl";
  const subSize = showFull ? "text-sm lg:text-base" : "text-[10px] lg:text-xs";

  switch (template.style) {
    case "romantic":
      return (
        <div
          className={baseClass}
          style={{ background: `linear-gradient(160deg, ${template.colors.background}, ${template.colors.secondary})` }}
        >
          {/* Floral corners */}
          <svg className="absolute top-4 left-4 w-16 h-16 opacity-40" viewBox="0 0 100 100">
            <circle cx="20" cy="20" r="8" fill={template.colors.accent} opacity="0.6" />
            <circle cx="35" cy="10" r="5" fill={template.colors.accent} opacity="0.4" />
            <circle cx="10" cy="35" r="5" fill={template.colors.accent} opacity="0.4" />
            <path d="M15,50 Q30,30 50,15" stroke={template.colors.accent} fill="none" strokeWidth="0.5" opacity="0.5" />
          </svg>
          <svg className="absolute bottom-4 right-4 w-16 h-16 opacity-40 rotate-180" viewBox="0 0 100 100">
            <circle cx="20" cy="20" r="8" fill={template.colors.accent} opacity="0.6" />
            <circle cx="35" cy="10" r="5" fill={template.colors.accent} opacity="0.4" />
            <circle cx="10" cy="35" r="5" fill={template.colors.accent} opacity="0.4" />
            <path d="M15,50 Q30,30 50,15" stroke={template.colors.accent} fill="none" strokeWidth="0.5" opacity="0.5" />
          </svg>

          <div className="text-center relative z-10">
            <p className={`${subSize} tracking-[0.3em] uppercase mb-4`} style={{ color: template.colors.accent }}>
              Nos Casamos
            </p>
            <p className={`font-[family-name:var(--font-playfair)] ${nameSize} italic mb-2`} style={{ color: template.colors.text }}>
              Valentina
            </p>
            <p className={`${subSize} tracking-wider`} style={{ color: template.colors.accent }}>&amp;</p>
            <p className={`font-[family-name:var(--font-playfair)] ${nameSize} italic mt-2`} style={{ color: template.colors.text }}>
              Sebastian
            </p>
            <div className="w-12 h-px mx-auto my-4" style={{ backgroundColor: template.colors.accent }}></div>
            <p className={`${subSize} tracking-wider`} style={{ color: template.colors.primary }}>
              15 de Junio, 2025
            </p>
            {showFull && (
              <p className="text-xs mt-2 opacity-70" style={{ color: template.colors.primary }}>
                Jardin Botanico &bull; 18:00 hrs
              </p>
            )}
          </div>
        </div>
      );

    case "elegant":
      return (
        <div
          className={baseClass}
          style={{ background: `linear-gradient(180deg, ${template.colors.background}, ${template.colors.secondary})` }}
        >
          {/* Gold border frame */}
          <div className="absolute inset-4 border opacity-30" style={{ borderColor: template.colors.accent }}></div>
          <div className="absolute inset-6 border opacity-20" style={{ borderColor: template.colors.accent }}></div>

          {/* Corner decorations */}
          <svg className="absolute top-3 left-3 w-8 h-8" viewBox="0 0 40 40">
            <path d="M0,20 L0,0 L20,0" fill="none" stroke={template.colors.accent} strokeWidth="1.5" opacity="0.6" />
          </svg>
          <svg className="absolute top-3 right-3 w-8 h-8" viewBox="0 0 40 40">
            <path d="M20,0 L40,0 L40,20" fill="none" stroke={template.colors.accent} strokeWidth="1.5" opacity="0.6" />
          </svg>
          <svg className="absolute bottom-3 left-3 w-8 h-8" viewBox="0 0 40 40">
            <path d="M0,20 L0,40 L20,40" fill="none" stroke={template.colors.accent} strokeWidth="1.5" opacity="0.6" />
          </svg>
          <svg className="absolute bottom-3 right-3 w-8 h-8" viewBox="0 0 40 40">
            <path d="M20,40 L40,40 L40,20" fill="none" stroke={template.colors.accent} strokeWidth="1.5" opacity="0.6" />
          </svg>

          <div className="text-center relative z-10">
            <div className="w-8 h-px mx-auto mb-4" style={{ backgroundColor: template.colors.accent }}></div>
            <p className={`${subSize} tracking-[0.4em] uppercase mb-6`} style={{ color: template.colors.accent }}>
              Celebremos juntos
            </p>
            <p className={`font-[family-name:var(--font-playfair)] ${nameSize} mb-1`} style={{ color: template.colors.text }}>
              Camila & Rodrigo
            </p>
            <div className="flex items-center justify-center gap-3 my-4">
              <div className="w-8 h-px" style={{ backgroundColor: template.colors.accent }}></div>
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill={template.colors.accent}>
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <div className="w-8 h-px" style={{ backgroundColor: template.colors.accent }}></div>
            </div>
            <p className={`${subSize} tracking-widest uppercase`} style={{ color: template.colors.accent }}>
              22 de Noviembre, 2025
            </p>
            {showFull && (
              <div className="mt-6 px-6 py-2 border" style={{ borderColor: template.colors.accent }}>
                <p className="text-xs" style={{ color: template.colors.accent }}>
                  Hotel Palacio Real &bull; 20:00 hrs
                </p>
              </div>
            )}
          </div>
        </div>
      );

    case "minimal":
      return (
        <div
          className={baseClass}
          style={{ backgroundColor: template.colors.background }}
        >
          <div className="text-center relative z-10 w-full max-w-[80%]">
            <div className="border-t border-b py-8" style={{ borderColor: template.colors.accent + "40" }}>
              <p className={`${subSize} tracking-[0.5em] uppercase mb-6`} style={{ color: template.colors.accent }}>
                La boda de
              </p>
              <p className={`font-[family-name:var(--font-playfair)] ${nameSize} font-light`} style={{ color: template.colors.text }}>
                Elena
              </p>
              <p className={`${subSize} my-2 tracking-widest`} style={{ color: template.colors.accent }}>&</p>
              <p className={`font-[family-name:var(--font-playfair)] ${nameSize} font-light`} style={{ color: template.colors.text }}>
                Marco
              </p>
              <div className="mt-6">
                <p className={`${subSize} tracking-[0.3em] uppercase`} style={{ color: template.colors.accent }}>
                  08 &bull; 03 &bull; 2025
                </p>
              </div>
            </div>
            {showFull && (
              <p className="text-xs mt-4 tracking-wider" style={{ color: template.colors.accent }}>
                Espacio Minimal &bull; Ciudad de Mexico
              </p>
            )}
          </div>
        </div>
      );

    case "rustic":
      return (
        <div
          className={baseClass}
          style={{ background: `linear-gradient(170deg, ${template.colors.background}, ${template.colors.secondary})` }}
        >
          {/* Vine decoration */}
          <svg className="absolute top-0 left-0 w-full h-full opacity-10" viewBox="0 0 200 300">
            <path d="M0,50 Q50,80 30,120 Q10,160 50,180 Q90,200 60,250" fill="none" stroke={template.colors.primary} strokeWidth="2" />
            <path d="M200,50 Q150,80 170,120 Q190,160 150,180 Q110,200 140,250" fill="none" stroke={template.colors.primary} strokeWidth="2" />
            <circle cx="30" cy="120" r="4" fill={template.colors.accent} opacity="0.5" />
            <circle cx="170" cy="120" r="4" fill={template.colors.accent} opacity="0.5" />
            <circle cx="50" cy="180" r="3" fill={template.colors.accent} opacity="0.5" />
            <circle cx="150" cy="180" r="3" fill={template.colors.accent} opacity="0.5" />
          </svg>

          <div className="text-center relative z-10">
            <svg className="w-12 h-12 mx-auto mb-4 opacity-60" viewBox="0 0 48 48">
              <path d="M24,4 C20,12 8,14 8,24 C8,34 16,40 24,44 C32,40 40,34 40,24 C40,14 28,12 24,4Z" fill="none" stroke={template.colors.accent} strokeWidth="1.5" />
            </svg>
            <p className={`${subSize} tracking-[0.2em] uppercase mb-3`} style={{ color: template.colors.accent }}>
              Acompananos a celebrar
            </p>
            <p className={`font-[family-name:var(--font-playfair)] ${nameSize} italic`} style={{ color: template.colors.text }}>
              Isabella & Mateo
            </p>
            <div className="flex items-center justify-center gap-2 my-4">
              <div className="w-6 h-px" style={{ backgroundColor: template.colors.accent }}></div>
              <svg className="w-3 h-3" viewBox="0 0 12 12" fill={template.colors.accent}>
                <circle cx="6" cy="6" r="2" />
              </svg>
              <div className="w-6 h-px" style={{ backgroundColor: template.colors.accent }}></div>
            </div>
            <p className={`${subSize} tracking-wider`} style={{ color: template.colors.primary }}>
              Sabado, 12 de Abril 2025
            </p>
            {showFull && (
              <p className="text-xs mt-2 opacity-70" style={{ color: template.colors.primary }}>
                Finca Los Olivos &bull; 17:00 hrs
              </p>
            )}
          </div>
        </div>
      );

    case "artdeco":
      return (
        <div
          className={baseClass}
          style={{ backgroundColor: template.colors.background }}
        >
          {/* Art Deco geometric patterns */}
          <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 200 300">
            <line x1="0" y1="0" x2="200" y2="0" stroke={template.colors.accent} strokeWidth="2" />
            <line x1="0" y1="300" x2="200" y2="300" stroke={template.colors.accent} strokeWidth="2" />
            <line x1="50" y1="20" x2="50" y2="40" stroke={template.colors.accent} strokeWidth="1" />
            <line x1="100" y1="20" x2="100" y2="40" stroke={template.colors.accent} strokeWidth="1" />
            <line x1="150" y1="20" x2="150" y2="40" stroke={template.colors.accent} strokeWidth="1" />
            <line x1="50" y1="260" x2="50" y2="280" stroke={template.colors.accent} strokeWidth="1" />
            <line x1="100" y1="260" x2="100" y2="280" stroke={template.colors.accent} strokeWidth="1" />
            <line x1="150" y1="260" x2="150" y2="280" stroke={template.colors.accent} strokeWidth="1" />
            <polygon points="100,45 110,65 90,65" fill="none" stroke={template.colors.accent} strokeWidth="0.5" />
            <polygon points="100,255 110,235 90,235" fill="none" stroke={template.colors.accent} strokeWidth="0.5" />
          </svg>

          <div className="absolute inset-8 border" style={{ borderColor: template.colors.accent + "40" }}></div>

          <div className="text-center relative z-10">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-4 h-px" style={{ backgroundColor: template.colors.accent }}></div>
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" stroke={template.colors.accent} strokeWidth="1" />
              </svg>
              <div className="w-4 h-px" style={{ backgroundColor: template.colors.accent }}></div>
            </div>
            <p className={`${subSize} tracking-[0.5em] uppercase mb-4`} style={{ color: template.colors.accent }}>
              Request the honour
            </p>
            <p className={`font-[family-name:var(--font-playfair)] ${nameSize}`} style={{ color: template.colors.text }}>
              Victoria & Alejandro
            </p>
            <div className="flex items-center justify-center gap-3 my-4">
              <svg className="w-16 h-4" viewBox="0 0 64 16">
                <line x1="0" y1="8" x2="28" y2="8" stroke={template.colors.accent} strokeWidth="0.5" />
                <circle cx="32" cy="8" r="3" fill="none" stroke={template.colors.accent} strokeWidth="0.5" />
                <line x1="36" y1="8" x2="64" y2="8" stroke={template.colors.accent} strokeWidth="0.5" />
              </svg>
            </div>
            <p className={`${subSize} tracking-[0.3em] uppercase`} style={{ color: template.colors.accent }}>
              31.12.2025
            </p>
            {showFull && (
              <p className="text-xs mt-4 tracking-wider" style={{ color: template.colors.accent }}>
                Gran Salon Art Deco &bull; 21:00 hrs
              </p>
            )}
          </div>
        </div>
      );

    case "beach":
      return (
        <div
          className={baseClass}
          style={{ background: `linear-gradient(180deg, ${template.colors.background}, #e0f2fe, ${template.colors.secondary})` }}
        >
          {/* Wave pattern */}
          <svg className="absolute bottom-0 left-0 w-full opacity-20" viewBox="0 0 200 60">
            <path d="M0,30 Q25,10 50,30 Q75,50 100,30 Q125,10 150,30 Q175,50 200,30 L200,60 L0,60 Z" fill={template.colors.accent} />
            <path d="M0,40 Q25,20 50,40 Q75,60 100,40 Q125,20 150,40 Q175,60 200,40 L200,60 L0,60 Z" fill={template.colors.primary} opacity="0.3" />
          </svg>

          <div className="text-center relative z-10">
            <svg className="w-10 h-10 mx-auto mb-4" viewBox="0 0 40 40" fill="none">
              <path d="M20,5 C15,10 5,12 5,20 C5,28 12,34 20,38 C28,34 35,28 35,20 C35,12 25,10 20,5Z" stroke={template.colors.accent} strokeWidth="1" />
            </svg>
            <p className={`${subSize} tracking-[0.3em] uppercase mb-4`} style={{ color: template.colors.accent }}>
              Boda en la playa
            </p>
            <p className={`font-[family-name:var(--font-playfair)] ${nameSize}`} style={{ color: template.colors.text }}>
              Marina & Nicolas
            </p>
            <div className="w-10 h-px mx-auto my-4" style={{ backgroundColor: template.colors.accent }}></div>
            <p className={`${subSize} tracking-wider`} style={{ color: template.colors.primary }}>
              20 de Julio, 2025
            </p>
            {showFull && (
              <p className="text-xs mt-2" style={{ color: template.colors.accent }}>
                Playa del Carmen &bull; 17:00 hrs
              </p>
            )}
          </div>
        </div>
      );

    case "botanical":
      return (
        <div
          className={baseClass}
          style={{ backgroundColor: template.colors.background }}
        >
          {/* Botanical leaves */}
          <svg className="absolute top-4 left-4 w-20 h-20 opacity-30" viewBox="0 0 80 80">
            <path d="M10,70 Q20,40 40,30 Q30,50 35,70" fill={template.colors.accent} opacity="0.5" />
            <path d="M10,70 Q30,50 50,20 Q35,45 30,70" fill={template.colors.primary} opacity="0.3" />
            <path d="M10,70 Q25,55 55,40" fill="none" stroke={template.colors.primary} strokeWidth="0.5" />
          </svg>
          <svg className="absolute bottom-4 right-4 w-20 h-20 opacity-30 rotate-180" viewBox="0 0 80 80">
            <path d="M10,70 Q20,40 40,30 Q30,50 35,70" fill={template.colors.accent} opacity="0.5" />
            <path d="M10,70 Q30,50 50,20 Q35,45 30,70" fill={template.colors.primary} opacity="0.3" />
            <path d="M10,70 Q25,55 55,40" fill="none" stroke={template.colors.primary} strokeWidth="0.5" />
          </svg>

          <div className="text-center relative z-10">
            <div className="border border-dashed p-6 lg:p-8" style={{ borderColor: template.colors.accent + "60" }}>
              <p className={`${subSize} tracking-[0.3em] uppercase mb-4`} style={{ color: template.colors.accent }}>
                Te invitamos a
              </p>
              <p className={`font-[family-name:var(--font-playfair)] ${nameSize} italic`} style={{ color: template.colors.text }}>
                Lucia & Gabriel
              </p>
              <div className="flex items-center justify-center gap-2 my-3">
                <svg className="w-4 h-4" viewBox="0 0 16 16" fill={template.colors.accent}>
                  <path d="M8,1 L8,4 M8,12 L8,15 M1,8 L4,8 M12,8 L15,8" stroke={template.colors.accent} strokeWidth="1" fill="none" />
                  <circle cx="8" cy="8" r="2" />
                </svg>
              </div>
              <p className={`${subSize} tracking-wider`} style={{ color: template.colors.primary }}>
                Primavera 2025
              </p>
              {showFull && (
                <p className="text-xs mt-3" style={{ color: template.colors.accent }}>
                  Invernadero Botanico &bull; 16:30 hrs
                </p>
              )}
            </div>
          </div>
        </div>
      );

    case "watercolor":
      return (
        <div
          className={baseClass}
          style={{ background: `linear-gradient(135deg, ${template.colors.background}, #fff0e6, ${template.colors.secondary})` }}
        >
          {/* Watercolor blobs */}
          <div className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-20" style={{ background: `radial-gradient(circle, ${template.colors.accent}, transparent)` }}></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full opacity-15" style={{ background: `radial-gradient(circle, ${template.colors.primary}, transparent)` }}></div>
          <div className="absolute top-1/3 left-1/4 w-20 h-20 rounded-full opacity-10" style={{ background: `radial-gradient(circle, ${template.colors.accent}, transparent)` }}></div>

          <div className="text-center relative z-10">
            <p className={`${subSize} tracking-[0.4em] uppercase mb-4`} style={{ color: template.colors.accent }}>
              Save the Date
            </p>
            <p className={`font-[family-name:var(--font-playfair)] ${nameSize} italic`} style={{ color: template.colors.text }}>
              Andrea
            </p>
            <div className="flex items-center justify-center my-2">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill={template.colors.accent} opacity="0.7">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </div>
            <p className={`font-[family-name:var(--font-playfair)] ${nameSize} italic`} style={{ color: template.colors.text }}>
              Fernando
            </p>
            <div className="w-16 h-px mx-auto my-4" style={{ backgroundColor: template.colors.accent + "80" }}></div>
            <p className={`${subSize} tracking-wider`} style={{ color: template.colors.primary }}>
              Septiembre 2025
            </p>
            {showFull && (
              <p className="text-xs mt-2" style={{ color: template.colors.accent }}>
                Hacienda Colonial &bull; 18:00 hrs
              </p>
            )}
          </div>
        </div>
      );

    case "classic":
      return (
        <div
          className={baseClass}
          style={{ backgroundColor: template.colors.background }}
        >
          {/* Classic ornamental borders */}
          <div className="absolute inset-6 border" style={{ borderColor: template.colors.accent + "30" }}></div>

          <div className="text-center relative z-10">
            <svg className="w-16 h-8 mx-auto mb-4 opacity-50" viewBox="0 0 64 32">
              <path d="M0,16 Q16,0 32,16 Q48,32 64,16" fill="none" stroke={template.colors.accent} strokeWidth="1" />
              <path d="M0,16 Q16,32 32,16 Q48,0 64,16" fill="none" stroke={template.colors.accent} strokeWidth="0.5" />
            </svg>
            <p className={`${subSize} tracking-[0.3em] uppercase mb-4`} style={{ color: template.colors.accent }}>
              Juntos con sus familias
            </p>
            <p className={`font-[family-name:var(--font-playfair)] ${nameSize}`} style={{ color: template.colors.text }}>
              Claudia & Roberto
            </p>
            <div className="flex items-center justify-center gap-2 my-4">
              <div className="w-8 h-px" style={{ backgroundColor: template.colors.accent }}></div>
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: template.colors.accent }}></div>
              <div className="w-8 h-px" style={{ backgroundColor: template.colors.accent }}></div>
            </div>
            <p className={`${subSize} tracking-wider italic`} style={{ color: template.colors.primary }}>
              Diez de Mayo de Dos Mil Veinticinco
            </p>
            {showFull && (
              <p className="text-xs mt-3" style={{ color: template.colors.accent }}>
                Catedral Metropolitana &bull; 12:00 hrs
              </p>
            )}
            <svg className="w-16 h-8 mx-auto mt-4 opacity-50 rotate-180" viewBox="0 0 64 32">
              <path d="M0,16 Q16,0 32,16 Q48,32 64,16" fill="none" stroke={template.colors.accent} strokeWidth="1" />
              <path d="M0,16 Q16,32 32,16 Q48,0 64,16" fill="none" stroke={template.colors.accent} strokeWidth="0.5" />
            </svg>
          </div>
        </div>
      );

    case "neon":
      return (
        <div className={baseClass} style={{ background: `linear-gradient(135deg, ${template.colors.background}, ${template.colors.secondary})` }}>
          <div className="absolute inset-0 opacity-20" style={{ background: "radial-gradient(circle at 30% 20%, #ff00ff33, transparent 50%), radial-gradient(circle at 70% 80%, #00ffff33, transparent 50%)" }}></div>
          <div className="text-center relative z-10">
            <p className={`${subSize} tracking-[0.4em] uppercase mb-4`} style={{ color: template.colors.accent, textShadow: `0 0 10px ${template.colors.accent}` }}>Despedida de</p>
            <p className={`${nameSize} font-black uppercase`} style={{ color: template.colors.text, textShadow: `0 0 20px ${template.colors.accent}40` }}>LUCIA</p>
            <div className="my-3" style={{ color: template.colors.accent }}>&#9733;</div>
            <p className={`${subSize} tracking-wider`} style={{ color: "#00ffff" }}>Ultima noche de soltera</p>
            {showFull && <p className="text-xs mt-3 opacity-60" style={{ color: template.colors.text }}>Sabado 21:00 - Club Neon</p>}
          </div>
        </div>
      );

    case "pinkglam":
      return (
        <div className={baseClass} style={{ background: `linear-gradient(180deg, ${template.colors.background}, #2d0a2e)` }}>
          <div className="absolute top-4 left-4 w-12 h-12 rounded-full opacity-20" style={{ background: `radial-gradient(circle, ${template.colors.accent}, transparent)` }}></div>
          <div className="absolute bottom-4 right-4 w-16 h-16 rounded-full opacity-15" style={{ background: "radial-gradient(circle, #ff69b4, transparent)" }}></div>
          <div className="text-center relative z-10">
            <p className={`${subSize} tracking-[0.3em] uppercase mb-3`} style={{ color: template.colors.accent }}>Bride to be</p>
            <p className={`font-[family-name:var(--font-playfair)] ${nameSize} italic`} style={{ color: template.colors.text }}>Carolina</p>
            <div className="flex items-center justify-center gap-2 my-3">
              <div className="w-6 h-px" style={{ backgroundColor: template.colors.accent }}></div>
              <span style={{ color: template.colors.accent }}>&#9830;</span>
              <div className="w-6 h-px" style={{ backgroundColor: template.colors.accent }}></div>
            </div>
            <p className={`${subSize} italic`} style={{ color: "#ff69b4" }}>La ultima fiesta de soltera</p>
            {showFull && <p className="text-xs mt-3 opacity-60" style={{ color: template.colors.text }}>Viernes 22:00 - Rooftop Bar</p>}
          </div>
        </div>
      );

    case "vegas":
      return (
        <div className={baseClass} style={{ backgroundColor: template.colors.background }}>
          <div className="absolute inset-6 border opacity-30" style={{ borderColor: template.colors.accent }}></div>
          <div className="text-center relative z-10">
            <p className={`${subSize} tracking-[0.5em] uppercase mb-4`} style={{ color: template.colors.accent }}>All in</p>
            <p className={`${nameSize} font-black uppercase`} style={{ color: template.colors.text }}>MARTIN</p>
            <div className="my-3 text-lg" style={{ color: template.colors.accent }}>&#9824; &#9829;</div>
            <p className={`${subSize} tracking-wider uppercase`} style={{ color: template.colors.accent }}>Noche de casino</p>
            {showFull && <p className="text-xs mt-3 opacity-60" style={{ color: template.colors.text }}>Sabado 22:00 - Casino Royal</p>}
          </div>
        </div>
      );

    case "tropical":
      return (
        <div className={baseClass} style={{ background: `linear-gradient(180deg, ${template.colors.background}, #003030)` }}>
          <div className="text-center relative z-10">
            <p className={`${subSize} tracking-[0.3em] uppercase mb-3`} style={{ color: template.colors.accent }}>Pool Party</p>
            <p className={`font-[family-name:var(--font-playfair)] ${nameSize} italic`} style={{ color: template.colors.text }}>Despedida de Sol</p>
            <div className="my-3 text-lg" style={{ color: template.colors.accent }}>&#9728;</div>
            <p className={`${subSize} tracking-wider`} style={{ color: "#4dd0e1" }}>Pileta, sol y diversion</p>
            {showFull && <p className="text-xs mt-3 opacity-60" style={{ color: template.colors.text }}>Domingo 15:00 - Casa de Playa</p>}
          </div>
        </div>
      );

    case "disco":
      return (
        <div className={baseClass} style={{ background: `linear-gradient(135deg, ${template.colors.background}, ${template.colors.secondary})` }}>
          <div className="absolute inset-0 opacity-10" style={{ background: "conic-gradient(from 0deg, #ff0000, #ff8800, #ffff00, #00ff00, #0088ff, #8800ff, #ff0000)" }}></div>
          <div className="text-center relative z-10">
            <p className={`${subSize} tracking-[0.3em] uppercase mb-3`} style={{ color: template.colors.accent }}>Disco Fever</p>
            <p className={`${nameSize} font-black uppercase`} style={{ color: template.colors.text }}>VALE</p>
            <div className="my-3 text-lg">&#127898;</div>
            <p className={`${subSize} tracking-wider italic`} style={{ color: template.colors.accent }}>A bailar toda la noche</p>
            {showFull && <p className="text-xs mt-3 opacity-60" style={{ color: template.colors.text }}>Sabado 23:00 - Studio 54</p>}
          </div>
        </div>
      );

    case "bros":
      return (
        <div className={baseClass} style={{ background: `linear-gradient(180deg, ${template.colors.background}, ${template.colors.secondary})` }}>
          <div className="absolute inset-6 border border-dashed opacity-20" style={{ borderColor: template.colors.accent }}></div>
          <div className="text-center relative z-10">
            <p className={`${subSize} tracking-[0.4em] uppercase mb-3`} style={{ color: template.colors.accent }}>Ultima noche</p>
            <p className={`${nameSize} font-black uppercase`} style={{ color: template.colors.text }}>NICO</p>
            <div className="my-3 text-lg" style={{ color: template.colors.accent }}>&#127866;</div>
            <p className={`${subSize} tracking-wider uppercase`} style={{ color: template.colors.accent }}>Se nos casa el loco</p>
            {showFull && <p className="text-xs mt-3 opacity-60" style={{ color: template.colors.text }}>Viernes 20:00 - Asado en casa</p>}
          </div>
        </div>
      );

    default:
      return (
        <div
          className={baseClass}
          style={{ backgroundColor: template.colors.background }}
        >
          <div className="text-center">
            <p className={`font-[family-name:var(--font-playfair)] ${nameSize}`} style={{ color: template.colors.text }}>
              {template.name}
            </p>
          </div>
        </div>
      );
  }
}
