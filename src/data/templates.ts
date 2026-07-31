export interface Template {
  id: string;
  name: string;
  category: string;
  description: string;
  style: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    text: string;
  };
  tags: string[];
  popular?: boolean;
  new?: boolean;
}

export const templates: Template[] = [
  {
    id: "garden-romance",
    name: "Garden Romance",
    category: "Floral",
    description:
      "Delicadas flores y tonos suaves para una boda romantica en jardin.",
    style: "romantic",
    colors: {
      primary: "#4a5568",
      secondary: "#f7e8ef",
      accent: "#d4748a",
      background: "#fdf2f6",
      text: "#2d3748",
    },
    tags: ["floral", "romantico", "jardin", "suave"],
    popular: true,
  },
  {
    id: "midnight-gold",
    name: "Midnight Gold",
    category: "Elegante",
    description:
      "Lujo y sofisticacion con tonos oscuros y detalles dorados.",
    style: "elegant",
    colors: {
      primary: "#1a1a2e",
      secondary: "#16213e",
      accent: "#c9a96e",
      background: "#0f0f1a",
      text: "#e8e8e8",
    },
    tags: ["elegante", "dorado", "lujo", "nocturno"],
    popular: true,
  },
  {
    id: "minimal-chic",
    name: "Minimal Chic",
    category: "Minimalista",
    description:
      "Lineas limpias y tipografia moderna para parejas contemporaneas.",
    style: "minimal",
    colors: {
      primary: "#1a1a1a",
      secondary: "#f5f5f5",
      accent: "#666666",
      background: "#ffffff",
      text: "#1a1a1a",
    },
    tags: ["minimalista", "moderno", "limpio", "contemporaneo"],
    popular: true,
  },
  {
    id: "tuscan-vineyard",
    name: "Tuscan Vineyard",
    category: "Rustico",
    description:
      "Inspirado en los vinedos de la Toscana. Calidez y naturaleza.",
    style: "rustic",
    colors: {
      primary: "#5c4033",
      secondary: "#f5efe6",
      accent: "#8b6914",
      background: "#faf7f2",
      text: "#3d2914",
    },
    tags: ["rustico", "vinedo", "toscana", "natural"],
  },
  {
    id: "art-deco-glamour",
    name: "Art Deco Glamour",
    category: "Art Deco",
    description:
      "Geometria dorada y glamour de los años 20 para una celebracion opulenta.",
    style: "artdeco",
    colors: {
      primary: "#1a1a1a",
      secondary: "#2d2d2d",
      accent: "#d4af37",
      background: "#0d0d0d",
      text: "#f5f5f5",
    },
    tags: ["art deco", "glamour", "geometrico", "dorado"],
    new: true,
  },
  {
    id: "coastal-breeze",
    name: "Coastal Breeze",
    category: "Playa",
    description:
      "Tonos azules y brisa marina para una boda junto al mar.",
    style: "beach",
    colors: {
      primary: "#1e3a5f",
      secondary: "#e8f4f8",
      accent: "#4a90a4",
      background: "#f0f9ff",
      text: "#1e3a5f",
    },
    tags: ["playa", "marino", "azul", "costero"],
  },
  {
    id: "botanical-press",
    name: "Botanical Press",
    category: "Botanico",
    description:
      "Ilustraciones botanicas detalladas con un toque vintage elegante.",
    style: "botanical",
    colors: {
      primary: "#2d4a3e",
      secondary: "#f0f5f1",
      accent: "#5a8a6d",
      background: "#f8faf8",
      text: "#1a3028",
    },
    tags: ["botanico", "vintage", "verde", "ilustracion"],
    new: true,
  },
  {
    id: "watercolor-sunset",
    name: "Watercolor Sunset",
    category: "Acuarela",
    description:
      "Trazos de acuarela en tonos calidos que evocan un atardecer magico.",
    style: "watercolor",
    colors: {
      primary: "#5c2e4a",
      secondary: "#fdf0e8",
      accent: "#e07850",
      background: "#fff5ee",
      text: "#3d1f33",
    },
    tags: ["acuarela", "atardecer", "calido", "artistico"],
  },
  {
    id: "classic-script",
    name: "Classic Script",
    category: "Clasico",
    description:
      "Tipografia caligrafica clasica sobre fondo marfil. Tradicion atemporal.",
    style: "classic",
    colors: {
      primary: "#2c2c2c",
      secondary: "#f9f6f0",
      accent: "#8b7355",
      background: "#fffef9",
      text: "#2c2c2c",
    },
    tags: ["clasico", "caligrafia", "tradicional", "marfil"],
  },
];

export const categories = [
  "Todos",
  "Floral",
  "Elegante",
  "Minimalista",
  "Rustico",
  "Art Deco",
  "Playa",
  "Botanico",
  "Acuarela",
  "Clasico",
];
