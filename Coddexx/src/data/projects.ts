import type { ProjectTypes } from "../types/projectTypes";
import Inxern from "../assets/InXern.png";

export const projectsObjects: ProjectTypes[] = [
  {
    id: "Inxern",
    image: Inxern,
    title: "InXern",
    description:
      "A high-performance job and internship platform connecting emerging talent with teams ready to invest in them.",
    productEngineering: "FullStack",
    technologies: ["React", "TypeScript", "TailwindCSS", "Supabase", "Vercel"],
  },
];
