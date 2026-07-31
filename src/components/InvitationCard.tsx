import Link from "next/link";
import { Template } from "@/data/templates";
import { Eye } from "lucide-react";
import InvitationDesign from "./InvitationDesign";

interface InvitationCardProps {
  template: Template;
}

export default function InvitationCard({ template }: InvitationCardProps) {
  return (
    <Link href={`/templates/${template.id}`} className="group block">
      <div className="relative overflow-hidden rounded-lg card-hover bg-white border border-border">
        {/* Card Preview */}
        <div className="relative aspect-[3/4] overflow-hidden">
          <InvitationDesign template={template} />

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-all duration-300 flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center gap-2">
              <div className="bg-white rounded-full p-3">
                <Eye size={20} className="text-primary" />
              </div>
              <span className="text-white text-xs tracking-wider uppercase">
                Ver Diseno
              </span>
            </div>
          </div>

          {/* Badges */}
          <div className="absolute top-3 left-3 flex gap-2">
            {template.popular && (
              <span className="bg-accent text-white text-[10px] tracking-wider uppercase px-2 py-1 rounded-sm">
                Popular
              </span>
            )}
            {template.new && (
              <span className="bg-primary text-white text-[10px] tracking-wider uppercase px-2 py-1 rounded-sm">
                Nuevo
              </span>
            )}
          </div>
        </div>

        {/* Card Info */}
        <div className="p-5">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-[family-name:var(--font-playfair)] text-base text-primary group-hover:text-accent transition-colors">
              {template.name}
            </h3>
            <span className="text-[10px] tracking-wider uppercase text-muted bg-secondary px-2 py-1 rounded-sm">
              {template.category}
            </span>
          </div>
          <p className="text-muted text-xs leading-relaxed">
            {template.description}
          </p>

          {/* Color swatches */}
          <div className="flex items-center gap-1.5 mt-3">
            {Object.values(template.colors)
              .slice(0, 4)
              .map((color, i) => (
                <div
                  key={i}
                  className="w-4 h-4 rounded-full border border-border"
                  style={{ backgroundColor: color }}
                />
              ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
