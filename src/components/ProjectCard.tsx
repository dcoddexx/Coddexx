import type { ProjectTypes } from "../types/projectTypes";

interface ProjectCardProps {
  project: ProjectTypes;
}

export default function ({ project }: ProjectCardProps) {
  return (
    <div className="flex flex-col my-[46px] border border-line bg-card">
      <img
        src={project.image}
        alt="Inxern mockup"
        className="border border-accent/20"
      />

      <div className="px-[25px]">
        <h2 className="font-family-sans text-[40px] md:text-[45px] text-text my-[50px] font-[400]">
          InXern
        </h2>

        <p className="font-family-sans text-[20px] md:text-[25px] text-text">
          {project.description}
        </p>

        <p className="text-muted my-[20px] font-family-sans">
          A high-performance job and internship portal connecting emerging
          talent with teams ready to invest in them.
        </p>

        <p className="text-muted my-[20px] font-mono">
          Product Engineering : {project.productEngineering}
        </p>
      </div>

      <div className="grid grid-cols-2 px-[25px] gap-[10px] font-mono">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="p-[10px] border border-line bg-surface text-muted"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex flex-col px-[25px] py-[30px] my-[20px] mx-[20px] gap-[5px] border border-l-0 border-r-0 border-t-line border-b-line">
        <p className="font-mono text-accent text-[12px] md:text-[17px]">
          ARCHITECTURAL HIGHLIGHT
        </p>

        <p className="text-muted font-family-sans text-[12px] md:text-[17px]">
          Event-driven application pipeline with row-level security and
          optimistic UI updates.
        </p>
      </div>
    </div>
  );
}
