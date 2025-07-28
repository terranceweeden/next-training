// src/content/portfolio.ts

export interface PortfolioItem {
  readonly id: string;
  readonly title: string;
  readonly category: "wedding" | "portrait" | "commercial" | "landscape";
  readonly image: string;
  readonly blurData?: string;
  readonly description: string;
  readonly metadata?: {
    camera?: string;
    lens?: string;
    location?: string;
    date?: string;
    settings?: string;
  };
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: "wed-001",
    title: "Summer Wedding",
    category: "wedding",
    image: "/images/chess_club.jpg",
    blurData: "data:image/jpeg;base64,...",
    description: "Beautiful outdoor ceremony in Tuscany",
    metadata: {
      // Add this if you want metadata
      camera: "Canon EOS R5",
      lens: "RF 50mm f/1.2L USM",
      location: "Tuscany, Italy",
      settings: "f/2.8, 1/500s, ISO 200",
    },
  },
  {
    id: "wed-001",
    title: "Summer Wedding",
    category: "wedding",
    image: "/images/7R303992.png",
    blurData: "data:image/jpeg;base64,...",
    description: "Beautiful outdoor ceremony in Tuscany",
    metadata: {
      // Add this if you want metadata
      camera: "Canon EOS R5",
      lens: "RF 50mm f/1.2L USM",
      location: "Tuscany, Italy",
      settings: "f/2.8, 1/500s, ISO 200",
    },
  },
  {
    id: "wed-001",
    title: "Summer Wedding",
    category: "wedding",
    image: "/images/A7301505.jpg",
    blurData: "data:image/jpeg;base64,...",
    description: "Beautiful outdoor ceremony in Tuscany",
    metadata: {
      // Add this if you want metadata
      camera: "Canon EOS R5",
      lens: "RF 50mm f/1.2L USM",
      location: "Tuscany, Italy",
      settings: "f/2.8, 1/500s, ISO 200",
    },
  },
  // Other items...
] as const;
